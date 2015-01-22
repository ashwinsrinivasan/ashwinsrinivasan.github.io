(function($$, $) {

  //
  // FACEBOOK CONNECT OBJECT
  //
  function FacebookConnect() {
    this.activityQueue = [];
    this.ssFbConnectReady = true;
    this.fbErrorCodes = { 
      INVALID_ACCESS_TOKEN : 190,
      REQUIRES_EXTENDED_PERMISSIONS : 200
    };
    this.linkFbProfileResponse = {
      PROFILE_LINKED : 1,
      NOT_LOGGED_IN : 2,
      USER_ALREADY_EXISTS : 3,
      NO_PUBLISH_PERMISSIONS : 4
    };
    this.fbReconnectNotification = {
      DAYS_UNTIL_NEXT_NOTICE : 3,
      MAX_NUMBER_OF_DISMISSALS : 2
    };
    this.basic_perms = {
      scope: 'email, publish_actions'
    };
    this.download_perms = {
      scope: 'email,publish_actions,user_about_me,user_birthday,user_location,user_website,user_work_history'
    };
  }

  //
  // Load and setup the facebook JS script
  //
  FacebookConnect.prototype.init = function() {
    window.fbAsyncInit = $.proxy(function() {
      FB.init($$.fb_init_params);
      FB.getLoginStatus(function (response) {
        // all the functions that wait for fb to be initialized can listen to this event.
        $(document).trigger('fbinitialized');
        // if (response.status ==='unknown') {
        //   // user is logged out from facebook
        //   $$.fb_logged_out = true;
        // }
      },true);
      if (!$$.user.loggedin) {
        FB.Event && FB.Event.subscribe('auth.statusChange', $.proxy(this.onFBStatusChange, this));
      }
    }, this);

    var e = document.createElement('script');
    e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
    e.id = 'facebook-jssdk';
    e.async = true;
    document.getElementById('fb-root').appendChild(e);
  };

  //
  // Callback for FB Status Change
  //
  FacebookConnect.prototype.onFBStatusChange = function(response) {
    if (this.disable_autologin === true) {
      return;
    }
    //Callback for the auth.statusChange event - triggered by Facebook
    var status = response.status;
    if (status === 'connected' && cookie('autologin_disabled') !== "true") {
      $$.ga('fb_opengraph', 'auto_login', 'connected');
      this.fbAutoLogin(response.authResponse.accessToken,
                       response.authResponse.userID);
    }
  };

  //
  // FB Auto Login
  //
  FacebookConnect.prototype.fbAutoLogin = function(access_token, fb_user_id) {
    //Logs in a user to SlideShare using an access token and fb user id
    this.ssFbConnect('/fbconnect/create_account_or_login?from=fb_auto_login',
      { access_token: access_token,
        fb_user_id: fb_user_id,
        auto_login: true
      }, function(data) {
        if (data.status < 4) {
          //4,5 are login fail statuses
          //Login is successful
          $$.ga('fb_opengraph', 'auto_login', 'login_successful');
          //reloading the page since the page was rendered for logged-out state and contains login/signup links for actions
          window.location.reload();
        } else {
          $$.ga('fb_opengraph', 'auto_login', 'login_failed');
        }
      });
  };

  //
  // Get the url for the facebook API calls
  //
  FacebookConnect.prototype.og_url_for = function(action_name) {
    if (action_name === 'follow') {
      return '/me/og.follows';
    } else {
      return '/me/' + $$.fb_app_name + ':' + action_name;
    }
  };

  //
  // Create params for the facebook API calls
  //
  FacebookConnect.prototype.og_params_for = function(action) {
    var current_location = action.ppt_url || location_without_params();
    var params = {};
    switch (action.name) {
      case 'view':
      case 'favorite':
        params.presentation = current_location;
        break;
      case 'download':
        // URL is of the form :
        //http://slideshare.net/abhinavdhasmana/savedfiles
        //?s_title=hadoop-and-hbase-on-amazon-web-services&user_id=115622&login=AmazonWebServices
        var title = getUrlVar('s_title');
        var login = getUrlVar('user_login');
        params.presentation = "http://www.slideshare.net/"+login+"/"+title;
        break;
      case 'comment':
        params.presentation = current_location;
        params.message = action.message;
        break;
      case 'follow':
        params.profile = action.facebook_user_id;
        break;
      default:
        error("Unknown action: " + action.name);
    }
    params.access_token = $$.user.fb_access_token;
    return params;
  };

  //
  // Check if publishing is allowed for the user
  //
  FacebookConnect.prototype.allow_publish_for = function(action_name) {
      return ($$.user.is_opengraph_user && $$.user.opengraph_permissions[action_name] && $$.user.has_fb_access_token);
  };

  //
  // GA Track FB activity
  //
  FacebookConnect.prototype.og_notify_ga = function(action) {
    var fb_source = getUrlVar('fb_source');
    //Trigger a different GA if user came from facebook
    if (getUrlVar('code') || fb_source) {
      if(fb_source) {
        $$.ga('fb_opengraph', 'publish_action', 'from_facebook_' + action + '_' + fb_source);
      } else {
        $$.ga('fb_opengraph', 'publish_action', 'from_facebook_' + action);
      }
    } else {
      $$.ga('fb_opengraph', 'publish_action', action);
    }
  };

  FacebookConnect.prototype.fb_reconnect_callback = function(data) {
    if (data.status === this.linkFbProfileResponse.USER_ALREADY_EXISTS) {
      /* Another User already exists with this facebook login*/
      $('#page-error').append('This Facebook login is already ' +
                              'being used with another SlideShare account. ' +
                              'Try again using another account.').show();
    } else{
      window.location.reload();
    }
  };

  FacebookConnect.prototype.fbconnect_delink_callback = function(data) {
    window.location.reload();
  };

  // Modal login window callback after facebook login
  // Post message to the login iframe popin
  FacebookConnect.prototype.fbconnect_login_redirect_from_iframe = function(data, itemLocation) {
    var fromSource = $('#target_url').val();
    var message = 'fbconnectDefault';
    switch (data.status) {
    case 1:
      /*A new user has been created*/
      $$.ga('Signup', 'fb_login', 'fb_signup_from_'+ itemLocation);
      message = 'fbconnectNewUser';
      break;
    case 2:
      /* User is existing ss user */
      message = 'fbconnectExistingUser';
      break;
    case 3:
      /*The user already had a facebook linked account*/
      /*Handle the logout page*/
      $$.ga('Login', 'fb_login', 'fb_login_from_' + itemLocation);
      message = 'fbconnectExistingUserWithLinkedAccount';
      break;
    case 4:
      /*Failed*/
      message = 'fbconnectFailed';
      break;
    case 5:
      /*Suspended User*/
      message = 'fbconnectSuspendedUser';
      break;
    }
    $.postMessage(message, fromSource, parent);
  };

  /* Handles redirect logic when a logged in slideshare 
  user links his account to facebook */
  FacebookConnect.prototype.fbconnect_login_redirect_link = function(data) {
    $('#j-fb-topnav-indicator').hide();
    $('#j-fb-login-indicator').hide();
    switch (data.status) {
    case this.linkFbProfileResponse.PROFILE_LINKED:
      /* Success */
      window.location.reload();
      break;
    case this.linkFbProfileResponse.USER_ALREADY_EXISTS:
      /*User already exists this facebook login*/
      $('#page-error').append('We could not connect your SlideShare account ' +
                              'to Facebook. This Facebook login is already ' +
                              'being used with another SlideShare account.').show();
      break;
    case this.linkFbProfileResponse.NO_PUBLISH_PERMISSIONS:
    /* Publish Permissions not granted*/
      $('#page-error').append('We could not connect your SlideShare account ' +
                                'to Facebook. Sharing on SlideShare is better ' +
                                'when you allow us to post to Facebook.').show();
      $('#fb-login') && $('#fb-login').html("<strong>Connect</strong>").removeClass("disabled");
      break;
    default:
      $('#page-error').append('There was an error.').show();
    }
  };

  FacebookConnect.prototype.fbconnect_login_redirect = function(data, itemLocation) {
    // Modal login window in upload page raises a ga call when fb login/signup is successful
    var escaped_window_location = escape(window.location.href);
    var fromSource = window.fromSource,
      fromType = window.fromType || getUrlVar('from');
    if((window.location.pathname.startsWith("/upload")) &&
      (data.status === 1 || data.status === 2 || data.status === 3)) {
      $$.ga('Upload', 'fb_login_successful');
      escaped_window_location = escaped_window_location.replace("loggedout_","loggedin_loggedout_");
    }
    switch (data.status) {
    case 1:
      /*A new user has been created*/
      $$.ga('Signup', 'fb_login', 'fb_signup_from_' + itemLocation);
      if (typeof(fromSource) != "undefined") {
        window.location.replace("/fbconnect/landingpage?from=" + fromSource);
      } else {
        window.location.replace("/fbconnect/landingpage?from=" + escaped_window_location);
      }
      break;
    case 2:
      /* User is existing ss user */
      if (typeof(fromSource) != "undefined") {
        window.location.replace("/fbconnect/landingpage?from=" + fromSource);
      } else {
        window.location.replace("/fbconnect/landingpage?from=" + escaped_window_location);
      }
      break;
    case 3:
      /*The user already had a facebook linked account*/
      /*Handle the logout page*/
      $$.ga('Login', 'fb_login', 'fb_login_from_'+itemLocation);
      var decodedURL = decodeURIComponent(fromSource);

      if (getUrlVars().from_logout !== undefined && typeof(fromType) == "undefined") {
        window.location.replace('/');
      }else if(window.location.pathname.startsWith("/upload")){
        window.location.replace(window.location.href.replace("loggedout_","loggedin_loggedout_"));
        return false;
      } else if (fromSource &&
        fromSource.length > 1 &&
        isInternalRedirect(fromSource) &&
        window.location.href !== decodedURL) {
        window.location.href = decodedURL;
      } else {
        window.location.reload();
      }
      break;
    case 4:
      /*Failed*/
      $('.j-alert').html("Login unsuccessful. Please try again.");
      $('.j-alert').removeClass('hide');
      break;
    case 5:
      /*Suspended User*/
      $('.j-alert').html("Login unsuccessful. Your account has been suspended as it was found to " +
        "be in violation of SlideShare's Terms of Service and/or Community Guidelines. Please read the " +
        "<a href='http://help.slideshare.com/entries/22330620-Why-was-my-slideshare-account-suspended-' " +
        "target='_blank' class='blue_link_bold'>Suspended Users FAQ</a> to resolve this issue.");
      $('.j-alert').removeClass('hide');
      break;
    default:
      window.location.reload();
    }
  };

  /**
  * @return {boolean} Whether the user has dismissed the Fb error often enough
  *     that we will not show it again.
  */
  FacebookConnect.prototype.hidefbErrorNotification = function() {
    if (!window.localStorage) {
      // Without localStorage, we don't want to show the error every time the page loads.
      return true;
    }
    try {
      var key = 'fbErrorDismissals';
      var value = Number(window.localStorage[key]) || 0;
      if(value === 0){
        return false;
      } else if(value >= this.fbReconnectNotification.MAX_NUMBER_OF_DISMISSALS){ // threshold - can be updated later
        return true;
      } else {
        var lastDismissalTime = window.localStorage.fbErrorLastDismissal || new Date().getTime();
        var currentTime = new Date().getTime();
        var diffDays = Math.ceil((currentTime - lastDismissalTime) / (1000 * 3600 * 24));
        return diffDays <= this.fbReconnectNotification.DAYS_UNTIL_NEXT_NOTICE;
      }
    } catch (ex) {
      return true;
    }
  };

  // Remember that the user has dismissed the Fb error notification once more.
  FacebookConnect.prototype.rememberFbErrorDismissal = function() {
    if (window.localStorage) {
      try {
        var key = 'fbErrorDismissals';
        var value = Number(window.localStorage[key]) || 0;
        window.localStorage[key] = String(value + 1);
        window.localStorage.fbErrorLastDismissal = new Date().getTime();
      } catch (ex) {
        // Probably due to storage size limit violation.
      }
    }
  };

  FacebookConnect.prototype.modalLoginFbButtonClickCallback = function(ss_fb_connect_callback) {
    window.fromSource = window.fromSource || getUrlVar('from_source');
    var itemLocation = 'fancybox';
    $('#j-fb-modalbox-indicator').show();
    var perms = $$.fbConnect.basic_perms;
    if ($$.isDownloadUrl()) {
      perms = $$.fbConnect.download_perms;
    }
    $$.fbConnect.unsubscribeFBStatusChange();
    //Facebook SDK should be ready before this block executes
    window.FB && FB.login(function(response) {
      if (response) {
        if (response.authResponse) {
          if ($$.isDownloadUrl()) {
            $$.fbConnect.ssFbConnect('/fbconnect/create_account_or_login?from_page=download',
              { access_token : response.authResponse.accessToken,
                fb_user_id : response.authResponse.userID,
                login_source : window.loginSource
              }, function(data) {
                if (typeof ss_fb_connect_callback != 'undefined') {
                  ss_fb_connect_callback(data, itemLocation);
                }
              });
          } else {
            $$.fbConnect.ssFbConnect('/fbconnect/create_account_or_login',
              { access_token : response.authResponse.accessToken,
                fb_user_id : response.authResponse.userID,
                login_source : window.loginSource
              }, function(data) {
                if (typeof ss_fb_connect_callback != 'undefined') {
                  ss_fb_connect_callback(data, itemLocation);
                }
              });
          }
        } else {
          $('#j-fb-modalbox-indicator').hide();
        }
      } else {
        $('#j-fb-modalbox-indicator').hide();
      }
    },
    perms);
  };

  FacebookConnect.prototype.bindEvents = function() {

    //-- MODAL LOGIN

    if (!$$.user.loggedin) {
      //if not logged in
      $('body').on('click', '#fb-login-modalbox', function() {
        $$.fbConnect.modalLoginFbButtonClickCallback($.proxy($$.fbConnect.fbconnect_login_redirect, $$.fbConnect));
      });

      //if not logged in (Foundation modal login)
      $('body').on('click', '#fblogin-modal-cta', function() {
        $$.fbConnect.modalLoginFbButtonClickCallback($.proxy($$.fbConnect.fbconnect_login_redirect_from_iframe, $$.fbConnect));
      });
    }

    //-- USER SHARING SETTINGS

    // Unlink FB from Edit Sharing Settings
    $('#j-delink-fb').on('click', function(e) {
      e.preventDefault();
      $.post('/fbconnect/delink_facebook_profile', {}, $$.fbConnect.fbconnect_delink_callback, 'json');
    });

    //-- EXPIRED FACEBOOK CONNECTION ALERT BOX

    // Notify user about his expired facebook connection
    if (($$.isHomePage() || $$.isSlideViewPage()) && !$$.is_mobile) {
      if ($$.user &&
          $$.user.is_opengraph_user &&
          !$$.user.has_fb_access_token &&
          !this.hidefbErrorNotification()) {
        var msg = "Your facebook connection has expired. <a href='#' id='fb-reconnect'>Click here to connect and continue sharing.</a>";
        var $flash = $('#flash-notice');
        $flash.find('span').html(msg);
        $flash.slideDown('slow');
        $$.ga('fb_opengraph', 'reconnect-notice', 'displayed');
        $flash.find('.close').click(function(){
          this.rememberFbErrorDismissal();
          $$.ga('fb_opengraph', 'reconnect-notice', 'cancelled');
        });
      }
    }

    // Bind reconnect link in alert box
    $('#fb-reconnect').click(function(e) {
      e.preventDefault();
      if ($$.user.loggedin &&
          $$.user.is_opengraph_user &&
          !$$.user.has_fb_access_token) {
        var perms = $$.fbConnect.download_perms;
        perms.return_scopes = true;

        $$.fbConnect.unsubscribeFBStatusChange();
        window.FB && FB.login(function(response) {
          if (response && response.authResponse) {
            $.post('/fbconnect/link_facebook_profile',
              { access_token : response.authResponse.accessToken,
                fb_user_id : response.authResponse.userID,
                granted_perms : response.authResponse.grantedScopes
              },
              function(data) {
                $$.fbConnect.fb_reconnect_callback(data);
              },
              'json');
          }
        },
        perms);
        $$.ga('fb_opengraph', 'reconnect-notice', 'connected');
      }
    });

    //-- LOGIN/SIGNUP PAGE

    // When facebook sdk is initialized, activate fblogin button
    $(document).bind('fbinitialized', function(){
      $('#fb-login').removeClass('disabled');
    });

    // Bind fb login button
    $('#fb-login').click(function(e) {
      if ($(this).hasClass('disabled')){
        return;
      }
      var itemLocation = 'login';
      e.preventDefault();
      window.fromSource = getUrlVar('from_source') || encodeURIComponent('/');
      $('#j-fb-login-indicator').show();
      if (!$(this).hasClass("fb-login-new")) {
        $(this).html("Connecting...").addClass("disabled");
      }
      var perms = $$.fbConnect.basic_perms;
      if ($$.user.loggedin) {
        perms = $$.fbConnect.download_perms;
      }
      perms.return_scopes = true;

      $$.fbConnect.unsubscribeFBStatusChange();
      window.FB && FB.login(function(response) {
        if (response) {
          if (response.authResponse) {
            if ($$.user.loggedin) {
              if (!$$.user.is_fbuser ||
                  !$$.user.is_opengraph_user ||
                  !$$.user.has_fb_access_token) {
                $.post('/fbconnect/link_facebook_profile',
                  { access_token : response.authResponse.accessToken,
                    fb_user_id : response.authResponse.userID,
                    granted_perms : response.authResponse.grantedScopes },
                  function(data) {
                    $$.fbConnect.fbconnect_login_redirect_link(data);
                  },
                  'json');
              }
            } else {
              $.post('/fbconnect/fb_login',
              {},
              function(data) {
                $$.fbConnect.ssFbConnect('/fbconnect/create_account_or_login',
                  { access_token : response.authResponse.accessToken,
                    fb_user_id : response.authResponse.userID,
                    login_source : window.loginSource,
                    granted_perms : response.authResponse.grantedScopes
                  }, function(data) {
                    $$.fbConnect.fbconnect_login_redirect(data, itemLocation);
                  });
              },
              'json');
            }
          } else {
            $('#j-fb-login-indicator').hide();
          }
        } else {
          $('#j-fb-login-indicator').hide();
        }
      },
      perms);
    });
  };

  //
  // Post/Queue activity to FB
  //
  FacebookConnect.prototype.post_activity_to_facebook = function(action, callback) {
    if (!this.allow_publish_for(action.name) && typeof callback !== 'undefined') {
      callback();
      return;
    }
    if (!window.FB) {
      this.activityQueue.push({'action': action, 'callback': callback});
      return;
    }

    this.push_activity_to_facebook(action, callback);
  };

  //
  // Publish activity to FB
  //
  FacebookConnect.prototype.push_activity_to_facebook = function(action, callback){
    var url = this.og_url_for(action.name);
    FB.api(url, 'post', this.og_params_for(action), $.proxy(function(response) {
      if (response && response.error) {
        if(response.error.code === this.fbErrorCodes.REQUIRES_EXTENDED_PERMISSIONS){
          $.post('/fbconnect/remove_publish_perms');
        } else if(response.error.code === this.fbErrorCodes.INVALID_ACCESS_TOKEN) {
          $.post('/fbconnect/invalidate_access_token');
        }
        $$.ga('fb_opengraph_error',response.error.type + '-' + response.error.code ,
          response.error.message , $$.user.id);
      }
      if (typeof callback !== 'undefined') {
        callback(response);
      }
    }, this));
    this.og_notify_ga(action.name);
  };

  //
  // Publish pending activities queue to FB
  //
  FacebookConnect.prototype.pushPendingFBactivities = function() {
    var FBqueue = this.activityQueue;

    while (FBqueue.length){
      var fb_activity = FBqueue.pop();
      this.push_activity_to_facebook(fb_activity.action, fb_activity.callback);
    }
  };

  //
  // Merge users
  //
  FacebookConnect.prototype.mergeUsers = function(params, successCallback) {
    $.post("/fbconnect/merge_users", {
      "user_login": params.user_login,
      "user_password": params.user_password
    }, successCallback);
  };

  //
  // Method to make call to Facebook controller
  //
  FacebookConnect.prototype.ssFbConnect = function(url, params, callback) {
    if (this.ssFbConnectReady !== true) {
      return;
    }
    this.ssFbConnectReady = false;
    $.post(url, params, function(data) {
      this.ssFbConnectReady = true;
      callback(data);
    }, 'json');
  };

  FacebookConnect.prototype.unsubscribeFBStatusChange = function() {
    //Temporary fix till we figure out the issue with FB.Event.unsubscribe
    this.disable_autologin = true;
    //window.FB && FB.Event && FB.Event.unsubscribe('auth.statusChange', slideshare_object.onFBStatusChange);
  };

  FacebookConnect.prototype.setup_opengraph_interaction = function() {
    $('.player').bind('fb-favorite-failed', function(e, error){
      $$.ga('fb_opengraph','favorite-publish-failed', error.id || error.type, error.message);
    });
  };

  $(window).load(function() {
    $$.fbConnect.init();
  });  

  $$.fbConnect = new FacebookConnect();

  $$.setup_fbconnect_interaction = function() {
    $$.fbConnect.bindEvents();
  };

  $$.setup_opengraph_interaction = function() {
    $$.fbConnect.setup_opengraph_interaction();
  };

  $$.post_activity_to_facebook = function(action, callback) {
    $$.fbConnect.post_activity_to_facebook(action, callback);
  };

})(slideshare_object, jQuery);
