/*!CK:2914162415!*//*1421875050,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["1zFYx"]); }

__d("PagesEventType",[],function(a,b,c,d,e,f){e.exports={NAV_VIEW_BUILD_AUDIENCE:"nav_view_build_audience",NAV_VIEW_HELP:"nav_view_help",NAV_VIEW_CREATE_AD:"nav_view_create_ad",VIEW_NOTIFICATIONS_PAGE:"view_notifications_page",VIEW_MESSAGES:"view_messages",VIEW_SCHEDULED_POSTS:"view_scheduled_posts",VIEW_DRAFT_POSTS:"view_draft_posts",VIEW_PAGES_FEED:"view_pages_feed",MESSAGES_TAB_INBOX:"messages_tab_inbox",MESSAGES_TAB_ARCHIVED:"messages_tab_archived",MESSAGES_TAB_SPAM:"messages_tab_spam",MESSAGES_TAB_OTHER:"messages_tab_other",MESSAGES_DIALOG_SEND:"messages_dialog_send",MESSAGES_DIALOG_GOTMESSAGES:"messages_dialog_gotmessages",MESSAGES_SEND_ENTRY_POINT:"messages_send_entry_point",REALTIME_PAYLOAD_FLUSH:"realtime_payload_flush",REALTIME_PAYLOAD_DELIVER:"realtime_payload_deliver",VIEW_STORIES_TO_SHARE:"view_stories_to_share",CUSTOM_CTA_VIEW_CREATE:"custom_cta_view_create",CUSTOM_CTA_VIEW_EDIT:"custom_cta_view_edit",CUSTOM_CTA_VIEW_DELETE:"custom_cta_view_delete",CUSTOM_CTA_CHANGE_CTA_TYPE:"custom_cta_change_cta_type",CUSTOM_CTA_CHANGE_WEB_LINK:"custom_cta_change_web_link",CUSTOM_CTA_CHANGE_MOBILE_LINK:"custom_cta_change_mobile_link",CUSTOM_CTA_CHANGE_IPHONE_DESTINATION_TYPE:"custom_cta_change_ios_destination_type",CUSTOM_CTA_CHANGE_IPHONE_DEEPLINK:"custom_cta_change_ios_deeplink",CUSTOM_CTA_CHANGE_IPHONE_LINK:"custom_cta_change_ios_backup_link",CUSTOM_CTA_CHANGE_ANDROID_DESTINATION_TYPE:"custom_cta_change_android_destination_type",CUSTOM_CTA_CHANGE_ANDROID_PACKAGE_NAME:"custom_cta_change_android_package_name",CUSTOM_CTA_CHANGE_ANDROID_DEEPLINK:"custom_cta_change_android_deeplink",CUSTOM_CTA_CHANGE_ANDROID_LINK:"custom_cta_change_android_backup_link",CUSTOM_CTA_CLICK_CTA_DROPDOWN:"custom_cta_click_cta_dropdown",CUSTOM_CTA_CLICK_VIEWER_UNIT:"custom_cta_click_viewer_unit",CUSTOM_CTA_CLICK_CANCEL:"custom_cta_click_cancel",CUSTOM_CTA_CLICK_NEXT_BUTTON:"custom_cta_click_next_button",CUSTOM_CTA_CLICK_BACK_BUTTON_ON_DIALOG:"custom_cta_click_back_button_on_dialog",CUSTOM_CTA_SAVE_SECTION:"custom_cta_save_section",CUSTOM_CTA_CLICK_CREATE_BUTTON:"custom_cta_click_create_button",CUSTOM_CTA_CLICK_DELETE:"custom_cta_click_delete",CUSTOM_CTA_CLICK_TEST_LINK:"custom_cta_click_test_link",CUSTOM_CTA_CLICK_EDIT_MENU:"custom_cta_click_edit_menu",CUSTOM_CTA_CLICK_SAVE_EDIT:"custom_cta_click_save_edit",CUSTOM_CTA_CLICK_PROMOTE_MENU:"custom_cta_click_promote_menu",POST_DETAIL_VIEW:"post_detail_view",MESSAGES_VIEW_THREAD:"messages_view_thread",MESSAGES_VIEW_INBOX:"messages_view_inbox",MESSAGES_VIEW_ARCHIVED:"messages_view_archived",MESSAGES_VIEW_SPAM:"messages_view_spam",MESSAGES_VIEW_OTHER:"messages_view_other",MESSAGES_VIEW_SEARCH_RESULTS:"messages_view_search_results",MESSAGES_VIEW_NAME_RESULTS:"messages_view_name_results"};},null);
__d("ContextualLayer.react",["ContextualLayer","React","ReactLayer","Style"],function(a,b,c,d,e,f,g,h,i,j){var k=h.PropTypes,l=i.createClass({propTypes:{contextRef:k.string,context:function(m,n,o){if((m.context==null)==(m.contextRef==null))return new Error(("Exactly one of `context` or `contextRef` must be set on `")+(o+"`."));var p=m[n];if(p!=null){if(typeof p!=='object')return new Error(("Invalid `"+n+"` supplied to `"+o+"`, ")+("expected a React component."));if(h.isValidElement(p))return new Error(("Invalid `"+n+"` supplied to `"+o+"`, ")+("expected a React component instance. You're passing a React ")+("descriptor."));}}},immutableProps:{modal:null},createLayer:function(m){var n=this._getContextNode(),o={context:n,contextBounds:this.props.contextBounds,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,addedBehaviors:this.enumerateBehaviors(this.props.behaviors),shouldSetARIAProperties:this.props.shouldSetARIAProperties},p=new g(o,m);this._node=m;this._matchContextSize(this.props);if(this.props.contextBounds)p.setContextWithBounds(n,this.props.contextBounds);p.conditionShow(this.props.shown);return p;},receiveProps:function(m){this.updateBehaviors(m.behaviors);var n=this._getContextNode();if(m.contextBounds){this.layer.setContextWithBounds(n,m.contextBounds);}else this.layer.setContext(n);this._matchContextSize(m);this.layer.setPosition(m.position);this.layer.setAlignment(m.alignment);this.layer.setOffsetX(m.offsetX);this.layer.setOffsetY(m.offsetY);this.layer.conditionShow(m.shown);},_getContextNode:function(){var m;if(this.props.context){m=this.props.context.getDOMNode();}else if(this.props.contextRef)m=this.getNodeForOwnerRef(this.props.contextRef);return m;},_matchContextSize:function(m){var n=this._node,o=this._getContextNode();if(m.containerWidthMatchContext)j.set(n,'width',o.offsetWidth+'px');if(m.containerHeightMatchContext)j.set(n,'height',o.offsetHeight+'px');}});e.exports=l;},null);
__d("TypeaheadNavigation",[],function(a,b,c,d,e,f){var g={moveUp:function(h,i,j){var k=h.indexOf(i),l=k==-1?h.length-1:k-1;j(l==-1?null:h[l]);},moveDown:function(h,i,j){var k=h.indexOf(i)+1;j(k==h.length?null:h[k]);}};e.exports=g;},null);
__d("TypeaheadView.react",["React","cx","merge"],function(a,b,c,d,e,f,g,h,i){var j=g.createClass({displayName:"TypeaheadView",propTypes:{entries:g.PropTypes.array.isRequired,extraRendererProps:g.PropTypes.object,highlightedEntry:g.PropTypes.object,isVisible:g.PropTypes.bool,queryString:g.PropTypes.string,Renderer:g.PropTypes.func.isRequired,selectedEntry:g.PropTypes.object},_onSelect:function(k,l){if(this.props.onSelect)this.props.onSelect(k,l);},_onHighlight:function(k){this.props.onHighlight(k);},render:function(){var k=((!this.props.isVisible?"hidden_elem":'')),l=i({highlightedEntry:this.props.highlightedEntry,selectedEntry:this.props.selectedEntry,entries:this.props.entries,onSelect:this._onSelect,onHighlight:this._onHighlight,onRenderHighlight:this.props.onRenderHighlight,ariaOwneeID:this.props.ariaOwneeID,queryString:this.props.queryString},this.props.extraRendererProps),m=this.props.Renderer;return (g.createElement("div",{className:k},g.createElement(m,g.__spread({},l))));}});e.exports=j;},null);
__d("AbstractTypeahead.react",["AbstractTextFieldMixin.react","ContextualLayer.react","InputSelection","React","ReactLayeredComponentMixin","SearchableTextInput.react","TypeaheadNavigation","TypeaheadView.react","cx","getOrCreateDOMID","joinClasses","uniqueID"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=[],t=10,u=j.createClass({displayName:"AbstractTypeahead",mixins:[k],propTypes:Object.assign({},g.propTypes,{inputClassName:j.PropTypes.string,inputID:j.PropTypes.string,autoCapitalize:j.PropTypes.string,autoComplete:j.PropTypes.string,autoCorrect:j.PropTypes.string,queryString:j.PropTypes.string,searchSource:j.PropTypes.object.isRequired,searchSourceOptions:j.PropTypes.object,excludedEntries:j.PropTypes.object,presenter:j.PropTypes.object.isRequired,onSelectAttempt:j.PropTypes.func,onEntriesFound:j.PropTypes.func,onEnterWithoutSelection:j.PropTypes.func,autoHighlight:j.PropTypes.bool,showEntriesOnFocus:j.PropTypes.bool,selectOnBlur:j.PropTypes.bool,selectOnTab:j.PropTypes.bool,focusedOnInit:j.PropTypes.bool,hideViewWithEntries:j.PropTypes.bool,disabled:j.PropTypes.bool,entriesWidthMatchContext:j.PropTypes.bool,selectedEntry:j.PropTypes.object,onTypeaheadVisibilityChanged:j.PropTypes.func,onPaste:j.PropTypes.func}),getDefaultProps:function(){return {autoComplete:'off',autoCorrect:'off',selectOnBlur:false,selectOnTab:true,hideViewWithEntries:true,entriesWidthMatchContext:true};},getInitialState:function(){return {highlightedEntry:null,isAutoHighlight:this.props.autoHighlight,activeDescendant:null,ariaOwneeID:r(),activeEntries:null,focused:!!this.props.focusedOnInit,viewIsVisible:!!this.props.focusedOnInit};},_onRenderHighlight:function(v){var w=p(v);this.setState({activeDescendant:w});},_determineViewVisibility:function(v,w){if(!v)return false;var x=v.length>0&&(this.props.showEntriesOnFocus||this.props.queryString.length>0);return !!(w&&(this.props.presenter.alwaysVisibleOnFocus||x));},_onEntriesFound:function(v){if(!this.isMounted())return;if(this.props.excludedEntries){var w=this.props.excludedEntries;v=v.filter(function(ea){return !w.hasOwnProperty(ea.getUniqueID());});}var x=this.props.presenter,y=typeof x.sortEntries=='function'?x.sortEntries(v,this.state.activeEntries,this.props.queryString):v,z=y.slice(0,x.maxEntries||t),aa=this._determineViewVisibility(z,this.state.focused);if(!z.length){this.setState({activeDescendant:null,activeEntries:z,highlightedEntry:null,isAutoHighlight:this.props.autoHighlight});this._setViewIsVisible(aa);return;}if(this.props.onEntriesFound)this.props.onEntriesFound(z);var ba=this.state.highlightedEntry,ca=ba&&z.indexOf(ba)!==-1;if(!this.props.autoHighlight){this.setState({activeEntries:z,highlightedEntry:ca?ba:null});if(aa)this._setViewIsVisible(true);return;}var da=this.state.isAutoHighlight;if(da){ba=z[0];}else{ba=ca?ba:z[0];da=!ca;}this.setState({activeEntries:z,highlightedEntry:ba,isAutoHighlight:da});if(aa)this._setViewIsVisible(true);},_onInputFocus:function(){var v=this._determineViewVisibility(this.state.activeEntries,true);if(v)this._setViewIsVisible(true);this.setState({focused:true});this.props.onFocus&&this.props.onFocus();},_onInputBlur:function(){if(this.props.hideViewWithEntries)this._close();if(this.props.selectOnBlur&&this.state.highlightedEntry)this.props.onSelectAttempt(this.state.highlightedEntry);this.setState({focused:false});this.props.onBlur&&this.props.onBlur();},_onInputClick:function(){var v=this.getTextFieldDOM(),w=i.get(v);if(w&&w.start==w.end)v.select();this.props.onClick&&this.props.onClick();},_onEscape:function(){this._close();this.blurInput();this.setState({focused:false});this.props.onEscape&&this.props.onEscape();},_onEnter:function(event){if(this.props.onEnterWithoutSelection&&(!this.state.viewIsVisible||!this.state.highlightedEntry)){this.props.onEnterWithoutSelection(event);return;}if(!this.state.viewIsVisible)return;if(!this.state.highlightedEntry){event.preventDefault();return;}if(this.props.hideViewWithEntries)this._close();if(this.props.onSelectAttempt)this.props.onSelectAttempt(this.state.highlightedEntry);event.preventDefault();},_onTab:function(event){if(this.props.selectOnTab&&this.state.viewIsVisible&&this.props.onSelectAttempt&&this.state.highlightedEntry){if(this.props.hideViewWithEntries){this._close();event.preventDefault();}this.props.onSelectAttempt(this.state.highlightedEntry);}},_onDownArrow:function(event){event.preventDefault();m.moveDown(this.state.activeEntries||s,this.state.highlightedEntry,this._setHighlight);},_onUpArrow:function(event){event.preventDefault();m.moveUp(this.state.activeEntries||s,this.state.highlightedEntry,this._setHighlight);},_setHighlight:function(v){this.setState({highlightedEntry:v,isAutoHighlight:!v});},_onInputChange:function(event){if(this.props.onChange)this.props.onChange(event);this._setViewIsVisible(this.state.focused&&(this.props.showEntriesOnFocus||event.target.value.length>0)&&(this.state.activeEntries!=null&&this.state.activeEntries.length>0));},_onViewHighlight:function(v){this.setState({highlightedEntry:v,isAutoHighlight:false});},_getView:function(){return (j.createElement(n,{Renderer:this.props.presenter.ViewRenderer,extraRendererProps:this.props.presenter.extraRendererProps,highlightedEntry:this.state.highlightedEntry,selectedEntry:this.props.selectedEntry,isVisible:this.state.viewIsVisible,ariaOwneeID:this.state.ariaOwneeID,onHighlight:this._onViewHighlight,onRenderHighlight:this._onRenderHighlight,onSelect:this.props.onSelectAttempt,entries:this.state.activeEntries||s,queryString:this.props.queryString}));},_setViewIsVisible:function(v){if(v!==this.state.viewIsVisible){if(this.props.onTypeaheadVisibilityChanged)this.props.onTypeaheadVisibilityChanged(v,this.state.activeEntries||s);this.setState({viewIsVisible:v});}},componentWillReceiveProps:function(v){if(!v.queryString&&!this.props.showEntriesOnFocus)this.clearActiveEntries();},componentDidUpdate:function(){var v=this._determineViewVisibility(this.state.activeEntries,this.state.focused);if(v)this._setViewIsVisible(true);},renderLayers:function(){if(!this.props.presenter.useLayer)return {};var v=null,w=null;if(this.props.context){v=this.props.context;}else w='input';return {typeaheadView:j.createElement(h,{behaviors:this.props.presenter.layerBehaviors,containerWidthMatchContext:this.props.entriesWidthMatchContext,contextRef:w,context:v,position:this.props.presenter.layerPosition||"below",shown:this.state.viewIsVisible,shouldSetARIAProperties:false},this._getView())};},render:function(){var v=j.createElement(l,{"aria-activedescendant":this.state.activeDescendant,"aria-autocomplete":"list","aria-owns":this.state.ariaOwneeID,ref:"input",autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,className:this.props.inputClassName,id:this.props.inputID,queryString:this.props.queryString,placeholder:this.props.placeholder,searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,searchOnFocus:!!this.props.showEntriesOnFocus,disabled:this.props.disabled,onEntriesFound:this._onEntriesFound,onEscape:this._onEscape,onBlur:this._onInputBlur,onFocus:this._onInputFocus,onChange:this._onInputChange,onDownArrow:this._onDownArrow,onUpArrow:this._onUpArrow,onTab:this._onTab,onEnter:this._onEnter,onBackspace:this.props.onBackspace,onPaste:this.props.onPaste,onClick:this._onInputClick}),w=null;if(!this.props.presenter.useLayer)w=this._getView();return (j.createElement("span",j.__spread({},this.props,{className:q(this.props.className,"_58ah"),onBlur:null,onClick:null,onFocus:null}),{searchableInput:v,view:w}));},componentDidMount:function(){if(this.props.focusedOnInit)this.refs.input.focusInput();},clearActiveEntries:function(){this.setState({activeDescendant:null,activeEntries:null,highlightedEntry:null});},focusInput:function(){this.refs.input.focusInput();},blurInput:function(){if(this.refs.input.blur){this.refs.input.blur();}else if(this.refs.input.blurInput)this.refs.input.blurInput();},hideView:function(){this._setViewIsVisible(false);},_close:function(){this._setViewIsVisible(false);this.clearActiveEntries();},getTextFieldDOM:function(){return this.refs.input.getTextFieldDOM();}});e.exports=u;},null);
__d("XUITypeaheadViewItem.react",["React","TypeaheadViewItem","BackgroundImage.react","Badge.react","ImageBlock.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=g.createClass({displayName:"XUITypeaheadViewItem",mixins:[h.Mixin],propTypes:h.propTypes,render:function(){var o=this.props.entry,p=o.getSubtitle().split(' \u00b7 ')[0],q=p?g.createElement("div",{className:"_599q"},p):null,r=o.getPhoto()?g.createElement(i,{width:32,height:32,backgroundSize:"cover",src:o.getPhoto()}):g.createElement("span",null),s=o.getAuxiliaryData(),t=null;if(s&&s.verified)t=g.createElement(j,null);var u=(("_599m")+(!q?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":''));u=m(u,this.props.className);return (g.createElement("li",{"aria-selected":this.props.highlighted,className:u,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role},g.createElement(k,{spacing:"medium"},r,g.createElement("div",null,g.createElement("div",{className:"_599p"},o.getTitle(),t),q))));}});e.exports=n;},null);
__d("XUITypeaheadView.react",["React","TypeaheadViewPropTypes","XUITypeaheadViewItem.react","cx"],function(a,b,c,d,e,f,g,h,i,j){var k=g.createClass({displayName:"XUITypeaheadView",propTypes:h,getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(l){var m=l===this.props.highlightedEntry;return (g.createElement(i,{key:l.getUniqueID(),entry:l,highlighted:m,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function(){var l=(("_599r")+(!this.props.entries.length?' '+"_599s":''));return (g.createElement("ul",{className:l,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this._renderItem)));}});e.exports=k;},null);
__d("getSafeBodyFromHTML",["UserAgent"],function(a,b,c,d,e,f,g){var h=g.isBrowser('IE <= 9');function i(j){var k,l=null;if(!h&&document.implementation&&document.implementation.createHTMLDocument){k=document.implementation.createHTMLDocument('foo');k.documentElement.innerHTML=j;l=k.getElementsByTagName('body')[0];}return l;}e.exports=i;},null);
__d("AbstractAsyncSearchSource",["AbstractSearchSource","SearchSourceCallbackManager","SearchableEntry","TokenizeUtil","copyProperties","emptyFunction","isValidUniqueID"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){for(var n in g)if(g.hasOwnProperty(n))p[n]=g[n];var o=g===null?null:g.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=g;function p(q,r,s){"use strict";this.$AbstractAsyncSearchSource0=q.bootstrapRequests;this.$AbstractAsyncSearchSource1=q.queryRequests;this.$AbstractAsyncSearchSource2=q.auxiliaryFields;this.$AbstractAsyncSearchSource3=q.asyncErrorHandler||l;this.$AbstractAsyncSearchSource4=q.packageFn||this.$AbstractAsyncSearchSource5;this.$AbstractAsyncSearchSource6=q.getAllForEmptyQuery;this.$AbstractAsyncSearchSource7=[];this.$AbstractAsyncSearchSource8=new h({parseFn:j.parse,matchFn:j.isQueryMatch,indexFn:q.indexFn});this.$AbstractAsyncSearchSource9=r;this.$AbstractAsyncSearchSourcea=s;}p.prototype.bootstrapImpl=function(q){"use strict";if(!this.$AbstractAsyncSearchSource0||!this.$AbstractAsyncSearchSource0.length){q();return;}var r=this.$AbstractAsyncSearchSource0.length,s=0;this.$AbstractAsyncSearchSource0.forEach(function(t){this.$AbstractAsyncSearchSourceb({},t,function(u){this.$AbstractAsyncSearchSource8.addLocalEntries(u);this.$AbstractAsyncSearchSource7=this.$AbstractAsyncSearchSource7.concat(u);s++;if(s===r){q();q=null;}}.bind(this));}.bind(this));};p.prototype.searchImpl=function(q,r,s){"use strict";if(this.$AbstractAsyncSearchSource6&&q===''){this.getBootstrappedEntries(function(y){r(y,q);});return;}var t=null,u={},v=this.$AbstractAsyncSearchSource8.search(q,function(y){if(!t){t=y;t.forEach(function(z){u[z.getUniqueID()]=true;});}else y.forEach(function(z){var aa=z.getUniqueID();if(!u[aa]){t.push(z);u[aa]=true;}});r(t,q);},s);if(!v||!this.$AbstractAsyncSearchSource1||!this.$AbstractAsyncSearchSource1.length)return;var w={value:q,existing_ids:t&&t.map(function(y){return y.getUniqueID();}).join(',')},x=this.$AbstractAsyncSearchSource1.length;this.$AbstractAsyncSearchSource1.forEach(function(y){this.$AbstractAsyncSearchSourceb(w,y,function(z){this.$AbstractAsyncSearchSourcec(z,q);x--;if(!x)this.$AbstractAsyncSearchSource8.setQueryStringAsExhausted(q);}.bind(this));},this);};p.prototype.getBootstrappedEntries=function(q){"use strict";return this.bootstrap(function(){return q(this.$AbstractAsyncSearchSource7||[]);}.bind(this));};p.prototype.getAllEntriesMap=function(){"use strict";return this.$AbstractAsyncSearchSource8.getAllEntriesMap();};p.prototype.$AbstractAsyncSearchSourceb=function(q,r,s){"use strict";this.$AbstractAsyncSearchSource9(q,r,function(t){return s(this.$AbstractAsyncSearchSourcea(t,this.$AbstractAsyncSearchSource4).filter(function(u){return !!u;}));}.bind(this),this.$AbstractAsyncSearchSource3);};p.prototype.$AbstractAsyncSearchSourced=function(q){"use strict";this.$AbstractAsyncSearchSource8.addLocalEntries(q);};p.prototype.$AbstractAsyncSearchSourcec=function(q,r){"use strict";if(q.length)this.$AbstractAsyncSearchSource8.addQueryEntries(q,r);};p.prototype.$AbstractAsyncSearchSource5=function(q,r){"use strict";var s=q.title||q.text,t=q.uniqueID||q.uid;if(!s||!m(t))return null;return new i({uniqueID:t,order:q.order||q.index||r,title:s,subtitle:q.subtitle||q.category||q.subtext,keywordString:q.keywordString||q.tokens,type:q.type,photo:q.photo,uri:q.uri||q.path,auxiliaryData:this.$AbstractAsyncSearchSourcee(q)});};p.prototype.$AbstractAsyncSearchSourcee=function(q){"use strict";var r;if(this.$AbstractAsyncSearchSource2){r={};for(var s in this.$AbstractAsyncSearchSource2){var t=this.$AbstractAsyncSearchSource2[s];r[s]=q[t];}}if(q.aux_data){r=r||{};k(r,q.aux_data);}return r;};e.exports=p;},null);
__d("MercuryThrottler",["Map","MercurySingletonMixin","emptyFunction","invariant"],function(a,b,c,d,e,f,g,h,i,j){'use strict';var k={NORMAL:0,QUEUEING:1,FLUSHING:2};function l(m){this.$MercuryThrottler0=m;this.$MercuryThrottler1=new g();this.$MercuryThrottler2=Date.now();this.$MercuryThrottler3=0;this.$MercuryThrottler4=k.NORMAL;this.$MercuryThrottler5=0;}l.prototype.setMinThresholdDuration=function(m){this.$MercuryThrottler3=m;};l.prototype.setQueueResetDuration=function(m){this.$MercuryThrottler5=m;};l.prototype.registerHandlerType=function(m,n,o,p){if(!o)o=i.thatReturns;this.$MercuryThrottler1.set(m,{handler:n,instance:p,perBatchPostProcessHandler:o,queuedPayloads:[]});};l.prototype.$MercuryThrottler6=function(){this.$MercuryThrottler4=k.FLUSHING;this.$MercuryThrottler1.forEach(function(m,n,o){var p={fbid:this.$MercuryThrottler0,type:n,flushed_message_count:m.queuedPayloads.length,min_threshold_duration:this.$MercuryThrottler3,queue_reset_duration:this.$MercuryThrottler5};m.queuedPayloads.map(this.notifyHandler,this);m.perBatchPostProcessHandler({flushMetrics:p});m.queuedPayloads=[];},this);this.$MercuryThrottler4=k.NORMAL;};l.prototype.$MercuryThrottler7=function(){if(this.$MercuryThrottler4===k.NORMAL){var m=(Date.now()-this.$MercuryThrottler2);if(m<this.$MercuryThrottler3){this.$MercuryThrottler4=k.QUEUEING;setTimeout(this.$MercuryThrottler6.bind(this),this.$MercuryThrottler5);}}this.$MercuryThrottler2=Date.now();};l.prototype.notifyHandler=function(m){var n=m.type,o=m.payload;j(this.$MercuryThrottler1.has(n));var p=this.$MercuryThrottler1.get(n);this.$MercuryThrottler7();switch(this.$MercuryThrottler4){case k.NORMAL:case k.FLUSHING:p.handler.call(p.instance,n,o);break;case k.QUEUEING:p.queuedPayloads.push({type:n,payload:o});break;default:j(false);}if(this.$MercuryThrottler4===k.NORMAL)p.perBatchPostProcessHandler({});};Object.assign(l,h);e.exports=l;},null);
__d("PagesManagerMessagesInterface",["ge","Animation","Arbiter","AsyncRequest","CSS","DOM","Event","fbt","PagesMessagingConst"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p={init:function(q,r,s,t,u,v){m.listen(q,'click',function(){new j().setURI(o.ASYNC_ENDPOINT).setData({action:'markAllRead',pageid:u,folder:v,is_page:true}).setHandler(function(){this.notifyUpdateCompleted();}.bind(this)).send();}.bind(this));m.listen(r,'click',function(){k.toggleClass(q,'hidden_elem');k.toggleClass(s,'hidden_elem');});m.listen(s,'submit',function(){t.blur();});},applyIfVisibleOnPage:function(q,r){var s=g(q);if(s)r(s);},changeThreadSpamStatus:function(q,r,s){new j().setURI(o.ASYNC_ENDPOINT).setData({action:(s?'reportSpam':'unmarkSpam'),pageid:q,tids:r,is_page:true}).send();this.applyIfVisibleOnPage(r,this.hideElement);},changeThreadArchivedStatus:function(q,r,s,t){new j().setURI(o.ASYNC_ENDPOINT).setData({action:'tag',tag:'action:archived',state:(s?1:0),broadcast:true,pageid:q,tids:[r],is_page:true,placement:t}).send();this.applyIfVisibleOnPage(r,function(u){k.addClass(u,'archived');this.hideElement(u);}.bind(this));},changeThreadReadStatus:function(q,r,s,t){new j().setURI(o.ASYNC_ENDPOINT).setData({action:(s?'markRead':'markUnread'),pageid:q,tids:[r],is_page:true,placement:t}).send();var u=(s?k.removeClass:k.addClass);this.applyIfVisibleOnPage(r,function(v){u(v,'unread');});},hideElement:function(q){new h(q).to('opacity',0).duration(150).hide().go();},deleteMessages:function(q,r,s,t,u){var v=new j(),w={action:(q?'delete':'deleteMessages'),pageid:t,is_page:true};w['delete']=(q?'Delete Conversation':'Delete Messages');if(q){w.tids=u;}else{w.folder='inbox';w.mids=Object.keys(r);}v.setURI(o.ASYNC_ENDPOINT);v.setHandler(function(x){s();});v.setData(w);v.send();},notifyUpdateCompleted:function(){i.inform('PagesManagerLayout/refreshSection',{section:'messages'});},showMessageThread:function(q,r,s,t,u){var v=l.create('div');l.appendContent(document.body,v);new j().setURI(o.LOAD_MESSAGE_THREAD_URI).setData({folder:t,pageid:q,source:u,threadElementID:s,threadid:r}).setRelativeTo(v).send();},updateUnreadCount:function(q){i.inform('pagesManagerMessaging/messageUnreadCountUpdated',{metricCount:q});i.inform('PagesManagerLayout/updateCount',{count:q,section:'messages'});i.inform('PagesManagerLayout/updateCount',{count:q,section:'messages',subsection:'inbox'});var r=g('pageUnreadMessageCount');if(r){var s='';if(q>0)s=(q===1)?n._("{number unread messages} Unread",[n.param("number unread messages",q)]):n._("{number unread messages} Unread",[n.param("number unread messages",q)]);l.setContent(r,s);}},updatePreferences:function(q){new j().setURI(o.ASYNC_ENDPOINT).setData({action:'setPreferences',send_on_enter:q.sendOnEnter}).send();}};e.exports=p;},null);
__d("PagesManagerNavbar",["Arbiter","ChannelConstants","CSS","Event","MercuryThreadInformer","MercuryThrottler","MercuryUnreadState","MessagingTag","PagesBanzaiLogger","PagesManagerMessagesInterface","PagesEventType","Vector","ViewportBounds","copyProperties","cx","getStyleProperty","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x={init:function(y,z,aa,ba,ca,da,ea,fa){this._setupStickyAreaAndDropshadow(z);var ga=g.subscribe('page_transition',function(){ga.unsubscribe();this._setupStickyAreaAndDropshadow(z);}.bind(this));if(aa){this._messageCount=ba;this._notificationCount=ca;this._activityCountBadge=aa;w(g.subscribe('pagesManagerMessaging/messageUnreadCountUpdated',function(ha,ia){this._messageCount=ia.metricCount;this._updateActivityCount();}.bind(this)));this._registerUnreadUpdates(y,ea,fa,da);}},initLogging:function(y,z,aa){if(z)j.listen(z,'click',function(){var ba=t({},y);ba.event_name=q.NAV_VIEW_BUILD_AUDIENCE;o.logData(ba);});j.listen(aa,'click',function(){var ba=t({},y);ba.event_name=q.NAV_VIEW_HELP;o.logData(ba);});},initCaret:function(y){g.subscribe('Hubble/loaded',function(){i.addClass(y,"_4iro");});},notifyNotificationsSeen:function(){this._notificationCount=0;this._updateActivityCount();},throttleQueueFlushLog:function(y){var z=y.flushMetrics;if(z)o.logData({page_id:z.fbid,event_name:q.REALTIME_PAYLOAD_FLUSH,payload_type:z.type,message_count:z.flushed_message_count,min_threshold_duration:z.min_threshold_duration,queue_reset_duration:z.queue_reset_duration});},realtimePayloadDeliveredLog:function(y){var z=y.pageId,aa=y.type;o.logData({page_id:z,event_name:q.REALTIME_PAYLOAD_DELIVER,payload_type:aa});},_registerUnreadUpdates:function(y,z,aa,ba){var ca=h.getArbiterType('pages_inbox_count_update'),da='unread-updated',ea=l.getForFBID(y);ea.setMinThresholdDuration(z);ea.setQueueResetDuration(aa);if(ba){ea.registerHandlerType(da,function(ha,ia){var ja=ga.getUnreadCount(n.INBOX);p.updateUnreadCount(ja);this.realtimePayloadDeliveredLog({pageId:y,type:ha});}.bind(this),this.throttleQueueFlushLog);var fa=k.getForFBID(y),ga=m.getForFBID(y);fa.subscribe(da,function(ha,ia){return ea.notifyHandler({type:ha,payload:ia});});}else{ea.registerHandlerType(ca,function(ha,ia){p.updateUnreadCount(ia.inbox_unread);this.realtimePayloadDeliveredLog({pageId:y,type:ha});}.bind(this),function(ha){g.inform('PagesManagerLayout/refreshSection',{section:'messages'});this.throttleQueueFlushLog(ha);}.bind(this));w(g.subscribe(ca,function(ha,ia){return l.getForFBID(ia.page_id).notifyHandler({type:ha,payload:ia});}));}},_setupStickyAreaAndDropshadow:function(y){if(this._instance==y)return;this._instance=y;y.setOffset(s.getTop());var z=y._node.firstChild,aa=parseInt(v(z,'marginBottom'),10)+1;this._event=w(j.listen(window,'scroll',function(){y.setOffset(s.getTop());i.conditionClass(z,"_c7_",r.getScrollPosition().y>aa);}));},_updateActivityCount:function(){var y=this._messageCount+this._notificationCount;this._activityCountBadge&&this._activityCountBadge.setCount(y);}};e.exports=x;},null);
__d("WebAsyncSearchSource",["AbstractAsyncSearchSource","AbstractSearchSource","AsyncRequest","copyProperties"],function(a,b,c,d,e,f,g,h,i,j){for(var k in h)if(h.hasOwnProperty(k))m[k]=h[k];var l=h===null?null:h.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=h;function m(n){"use strict";this.$WebAsyncSearchSource0=new g(n,this.$WebAsyncSearchSource1,this.$WebAsyncSearchSource2);}m.prototype.bootstrapImpl=function(n){"use strict";this.$WebAsyncSearchSource0.bootstrap(n);};m.prototype.searchImpl=function(n,o,p){"use strict";this.$WebAsyncSearchSource0.search(n,o,p);};m.prototype.getBootstrappedEntries=function(n){"use strict";return this.$WebAsyncSearchSource0.getBootstrappedEntries(n);};m.prototype.getAllEntriesMap=function(){"use strict";return this.$WebAsyncSearchSource0.getAllEntriesMap();};m.prototype.$WebAsyncSearchSource1=function(n,o,p,q){"use strict";new i(o.uri).setData(j({},n,o.data)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(p).setErrorHandler(q).send();};m.prototype.$WebAsyncSearchSource2=function(n,o){"use strict";var p=n.getPayload(),q;if(Array.isArray(p)){q=p;}else if(p&&p.entries){q=p.entries;}else q=[];return q.map(o,this);};e.exports=m;},null);