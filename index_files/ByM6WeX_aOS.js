/*!CK:3545145926!*//*1421039831,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Zv8e2"]); }

__d("TimelineContextItemLogger",["BanzaiLogger","Event","FBJSON","Parent","Run","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n='MTimelineXContextItemsLoggerConfig',o='impression',p='click',q='context_item_url',r='event',s="_md0",t=[];function u(w,x,y){var z=i.parse(w.getAttribute('data-store'));z[r]=x;if(y)z[q]=y;g.log(n,z);}var v={logWhenVisible:function(w){if(!t.length)k.onLeave(function(){t=[];});t.push(w);},logWhenClicked:function(w){m(h.listen(w,'click',function(x){var y=x.getTarget();if(y.nodeName!=='A')return;var z=j.byClass(y,s);z&&u(z,p,y.href);}));},listenToExpand:function(w){m(w.addListener('expanded',function(){while(t.length)u(t.pop(),o);}));}};e.exports=v;},null);
__d("TimelineSecondaryColumnUnitList",["CSS","DOM","Event","Run","csx","cx","mixInEventEmitter"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=30;function o(p,q){"use strict";var r=i.listen(q,'click',function(){this.$TimelineSecondaryColumnUnitList0=h.scry(p,"._16f_");this.$TimelineSecondaryColumnUnitList1();h.remove(q);this.emit('expanded');}.bind(this));j.onLeave(r.remove.bind(r));}o.prototype.$TimelineSecondaryColumnUnitList1=function(){"use strict";if(!this.$TimelineSecondaryColumnUnitList0.length)return;g.removeClass(this.$TimelineSecondaryColumnUnitList0.shift(),"_16f_");setTimeout(this.$TimelineSecondaryColumnUnitList1.bind(this),n);};m(o,{expanded:true});e.exports=o;},null);
__d("TimelineCapsule",["Arbiter","CSS","DataStore","DOM","DOMQuery","DOMScroll","Parent","TimelineConstants","TimelineLegacySections","UserAgent_DEPRECATED","Vector","$","createArrayFromMixed","csx","isEmpty","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=(function(){var x=45,y=15,z={},aa={};function ba(oa){return h.hasClass(oa,'fbTimelineBalancer');}function ca(oa){return oa.getAttribute('data-spine');}function da(oa){return h.hasClass(oa,'placeholderUnit');}function ea(oa,pa){if(pa)return (i.get(n.DS_SIDEORG,oa.id)||oa.getAttribute('data-side'));return oa.getAttribute('data-side');}function fa(oa,pa){i.set(n.DS_SIDEORG,oa.id,ea(oa,true));oa.setAttribute('data-side',pa);}function ga(oa){return oa.getAttribute('data-size');}function ha(oa){if(h.hasClass(oa,'fbTimelineOneColumn')&&oa.prevSibling&&h.hasClass(oa.prevSibling,'fbTimelineOneColumn'))return y*2;if(h.hasClass(oa,'fbTimelineIndeterminateContent'))return 0;return y;}function ia(oa,pa){var qa=0;if(h.shown(oa)&&!h.hasClass(oa,'placeholderUnit'))qa=oa.offsetHeight+ha(oa);i.set(n.DS_HEIGHT,oa.id,parseInt(qa,10));}function ja(oa){var pa=i.get(n.DS_HEIGHT,oa.id,null);return pa;}function ka(oa,pa){if(ga(pa)=='2'){return 0;}else if(ea(pa)=='r'){return oa+ja(pa);}else return oa-ja(pa);}function la(oa){k.scry(oa,"._3ram").forEach(function(pa){var qa=pa.getAttribute('data-endmarker'),ra=pa.getAttribute('data-pageindex'),sa=function(){if(!pa.parentNode)return;i.set(n.DS_LOADED,oa.id,ra);j.remove(pa);g.inform(n.SECTION_FULLY_LOADED,{scrubberKey:qa,pageIndex:ra,capsuleID:oa.id,childCount:oa.childNodes.length});};if(o.get(qa)){sa();}else var ta=g.subscribe(n.SECTION_REGISTERED,function(ua,va){if(va.scrubberKey===qa){sa();ta.unsubscribe();}});});g.inform('TimelineCapsule/balanced',{capsule:oa});}function ma(oa){if(u(z[oa.id]))return;var pa=ba(oa)?oa.firstChild:oa,qa=pa.childNodes.length,ra={},sa={},ta,ua=y,va=y,wa,xa=[];for(var ya=0;ya<qa;ya++){ta=pa.childNodes[ya];if(h.hasClass(ta,'fbTimelineUnit')){wa=k.scry(ta,'div.timelineUnitContainer')[0];if(wa)sa[ta.id]=wa.getAttribute('data-time');if(!da(ta)&&h.shown(ta)){if(ga(ta)=='2'){ra[ta.id]=Math.max(ua,va);ua=va=ra[ta.id]+ja(ta);}else if(ea(ta)=='r'){ra[ta.id]=va;va+=ja(ta);}else{ra[ta.id]=ua;ua+=ja(ta);}if(ea(ta,true)=='l'||ga(ta)=='2')xa.push(ta.id);}}}for(ya=0;ya<xa.length-1;++ya){var za=xa[ya],ab=xa[ya+1],bb=ra[za]+x,cb=ra[ab];for(var db in z[oa.id]){if(bb>cb)break;var eb=z[oa.id][db];if(h.shown(eb))continue;if(sa[db]<=sa[za]&&sa[db]>sa[ab]){eb.style.top=bb+"px";bb+=x;h.show(eb);}}}}function na(oa,pa){var qa=m.byAttribute(oa,'data-size');if(qa){if(h.hasClass(oa.parentNode,'timelineReportContent')){pa(oa);}else pa(qa);w.balanceCapsule(m.byClass(qa,'fbTimelineCapsule'));}}return {removeUnit:function(oa){na(oa,function(pa){j.remove(pa);});},removeUnitWithID:function(oa){w.removeUnit(r(oa));},hideUnit:function(oa){na(oa,function(pa){h.addClass(pa,'fbTimelineColumnHidden');});},undoHideUnit:function(oa,pa){j.remove(m.byClass(pa,'hiddenText'));na(oa,function(qa){h.removeClass(qa,'fbTimelineColumnHidden');});},unplacehold:function(oa){var pa=r(oa);pa.style.top=null;h.removeClass(pa,'visiblePlaceholder');h.removeClass(pa,'placeholder');var qa=m.byClass(pa,'fbTimelineCapsule');delete z[qa.id][oa];w.balanceCapsule(qa);},scrollToCapsule:function(oa){if(!aa.hasOwnProperty(oa.id)){var pa=q.getElementPosition(oa.parentNode);l.scrollTo(new q(q.getScrollPosition().x,pa.y-n.SCROLL_TO_OFFSET,'document'));aa[oa.id]=true;}},balanceCapsuleFromChild:function(oa,pa){w.balanceCapsule(m.byClass(oa,'fbTimelineCapsule'),pa);},balanceCapsuleDeferred:function(oa,pa){setTimeout(w.balanceCapsule.bind(null,oa,pa),0);},balanceCapsule:function(oa,pa){if(!oa||!oa.childNodes)return;var qa=0,ra,sa=document.createDocumentFragment(),ta=[],ua=[],va=[],wa=false,xa=pa&&pa.heights_action;if(pa&&pa.tail_balance)i.set(n.DS_TAILBALANCE,oa.id,pa.tail_balance);if(p.chrome()||p.webkit())h.toggleClass(oa,'webkitFix');for(var ya=0;ya<oa.childNodes.length;ya++){ra=oa.childNodes[ya];if(ca(ra)){continue;}else if(ba(ra)){s(ra.firstChild.childNodes).forEach(function(gb){ia(gb,xa);});continue;}ia(ra,xa);if(ea(ra,true)=='r'){ua.push(ra);}else ta.push(ra);va.push(ra);if(ga(ra)!='2')if((qa>0&&ea(ra)=='r')||(qa<0&&ea(ra)=='l'))wa=true;qa=ka(qa,ra);}var za=[],ab=[],bb=[];k.scry(oa,'li.fbTimelineBalancer').forEach(function(gb){var hb=s(gb.firstChild.childNodes);if(gb.getAttribute('data-nonunits')){bb=bb.concat(hb);}else if(ea(gb)=='left'){za=za.concat(hb);}else if(ea(gb)=='right')ab=ab.concat(hb);});if(wa){oa.style.minHeight=oa.offsetHeight;ta.forEach(function(gb){if(ga(gb)!='2')fa(gb,'l');});ua.forEach(function(gb){if(ga(gb)!='2')fa(gb,'r');});var cb=j.create('li',{className:'fbTimelineBalancer'},j.create('ol',null,ta));cb.setAttribute('data-side','left');j.prependContent(oa,cb);za=ta.concat(za);var db=j.create('li',{className:'fbTimelineBalancer'},j.create('ol',null,ua));db.setAttribute('data-side','right');j.prependContent(oa,db);ab=ua.concat(ab);qa=0;}while(bb.length)sa.appendChild(bb.shift());while((qa>=0&&za.length)||(qa<0&&ab.length)){if(qa>=0){ra=za.shift();}else ra=ab.shift();sa.appendChild(ra);qa=ka(qa,ra);}oa.appendChild(sa);k.scry(oa,'li.fbTimelineBalancer').forEach(function(gb){if(!gb.firstChild.childNodes.length)j.remove(gb);});var eb=(pa&&pa.tail_balance)||i.get(n.DS_TAILBALANCE,oa.id);if(eb)qa=w.tailBalance(oa,qa,eb);if(wa){va.forEach(function(gb){if(gb.parentNode!==oa){oa.appendChild(gb);qa=ka(qa,gb);}});oa.style.minHeight=null;}var fb=m.byClass(oa,'fbTimelineSection');if(fb)i.set(n.DS_COLUMN_HEIGHT_DIFFERENTIAL,fb.id,qa);z[oa.id]={};k.scry(oa,'li.placeholderUnit').forEach(function(gb){z[oa.id][gb.id]=gb;});ma(oa);la(oa);},tailBalance:function(oa,pa,qa){if(!oa)return pa;var ra=[],sa=[],ta=[],ua=[];k.scry(oa,'li.fbTimelineBalancer').forEach(function(wa){var xa=s(wa.firstChild.childNodes);if(wa.getAttribute('data-nonunits')){ua=ua.concat(xa);}else if(ea(wa)=='left'){sa=sa.concat(xa);}else if(ea(wa)=='right')ta=ta.concat(xa);ra=ra.concat(xa);});if((qa==n.FIXED_SIDE_RIGHT&&sa.length)||(qa==n.FIXED_SIDE_LEFT&&ta.length))return pa;var va=document.createDocumentFragment();if(ra)while(ra.length){if(qa!=n.FIXED_SIDE_NONE)if(ga(ra[0])!='2')if(pa>=0){fa(ra[0],'l');}else fa(ra[0],'r');pa=ka(pa,ra[0]);va.appendChild(ra.shift());}oa.appendChild(va);k.scry(oa,'li.fbTimelineBalancer').forEach(function(wa){if(!wa.firstChild.childNodes.length)j.remove(wa);});return pa;},loadTwoColumnUnits:function(oa){var pa=r(oa);v(function(){var qa=m.byClass(pa,'fbTimelineSection');if(qa){var ra=k.find(pa,"._3rbf"),sa=k.find(pa,"._3rbh"),ta=sa.offsetHeight-ra.offsetHeight;i.set(n.DS_COLUMN_HEIGHT_DIFFERENTIAL,qa.id,ta);}},la.bind(null,pa));}};})();e.exports=a.TimelineCapsule||w;},null);
__d("TimelineMainScrubber",["Arbiter","CSS","DOMQuery","TimelineConstants","TimelineController","TimelineScrubber"],function(a,b,c,d,e,f,g,h,i,j,k,l){for(var m in l)if(l.hasOwnProperty(m))o[m]=l[m];var n=l===null?null:l.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=l;function o(p){"use strict";l.call(this,p);this.$TimelineMainScrubber0=g.subscribe(j.SECTION_LOADED,function(q,r){var s=this.getNav(r.key),t=s&&i.scry(s,'ul')[0];if(t){h.addClass(t,'loaded');k.scrubberHasChangedState();if(r.hideSubSections)h.hide(t);}}.bind(this));}o.prototype.reset=function(){"use strict";n.reset.call(this);this.$TimelineMainScrubber0&&this.$TimelineMainScrubber0.unsubscribe();};e.exports=o;},null);