/*!CK:1919187318!*//*1421683170,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["dnQKt"]); }

__d("CurationOneClickButton",["Banzai","CSS","cx","DOM","EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","SaveState","SaveStateHandler","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q="saved_for_later:click",r="remove",s="_vu",t="_54nc",u="_vv";function v(w,x,y,z,aa,ba,ca){"use strict";this.$CurationOneClickButton0=false;this.$CurationOneClickButton1=w;this.$CurationOneClickButton2=z;var da=null;ba.forEachItem(function(ea){if(ea.getValue()==r)da=j.find(ea.getRoot(),'a.'+t);});p([m.listen(x,'click',this.setSaving.bind(this,aa)),m.listen(x,'error',this.setUnsaved.bind(this,aa)),m.listen(y,'click',this.logFlyoutClick.bind(this,ca)),m.listen(da,'error',this.setSaved.bind(this,aa)),ba.subscribe('itemclick',function(ea,fa){var ga=fa.item.getValue();if(ga==r)this.setUnsaving(aa);}.bind(this))]);o.listen([aa],function(ea){switch(ea){case n.SAVING:h.addClass(w,s);h.addClass(ba.getRoot(),u);this.$CurationOneClickButton0=true;break;case n.SAVED:h.addClass(w,s);h.removeClass(w,u);h.removeClass(ba.getRoot(),u);this.$CurationOneClickButton0=false;break;case n.UNSAVING:h.removeClass(w,s);h.addClass(w,u);x.setAttribute('rel','');this.$CurationOneClickButton0=true;break;case n.UNSAVED:h.removeClass(w,s);h.removeClass(w,u);h.removeClass(ba.getRoot(),u);x.setAttribute('rel','async-post');this.$CurationOneClickButton0=false;break;}}.bind(this));}v.prototype.setSaving=function(w){"use strict";if(!this.$CurationOneClickButton0){o.saving([w]);var x=k.getRoot(this.$CurationOneClickButton1);x&&l.addFollowup(x,this.$CurationOneClickButton2,"_521o");}};v.prototype.setUnsaving=function(w){"use strict";if(!this.$CurationOneClickButton0){o.unsaving([w]);var x=k.getRoot(this.$CurationOneClickButton1),y=l.getFollowup(x);y&&l.removeFollowup(x);}};v.prototype.setSaved=function(w){"use strict";o.saved([w]);};v.prototype.setUnsaved=function(w){"use strict";o.unsaved([w]);};v.prototype.logFlyoutClick=function(w){"use strict";g.post(q,{og_object_id:w.og_object_id,collection_id:w.collection_id,surface:w.surface,mechanism:w.mechanism});};e.exports=v;},null);
__d("VertexWikipediaController",["Arbiter","DOM","DOMEventListener","DOMQuery","clickRefAction","copyProperties","csx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(p,q,r,s,t,u,v){this._seeMore=p;this._attribution=q;this._wikiSrc=r;this._loading=s;this._url=t;this._scrollableArea=u;this._subsection=v;if(this._subsection!==null){this.showFullArticle(null);}else i.add(p,'click',this.showFullArticle.bind(this));}l(o.prototype,{showFullArticle:function(p){if(p)k('vertex',this._seeMore,p,'FORCE',null);var q=j.find(this._seeMore,"^._5a- ._3nq");h.remove(q);var r=j.find(this._seeMore,"^._3nm ._3no");h.appendContent(r,q);var s=j.find(this._seeMore,"^._5a-");h.empty(s);h.appendContent(s,this._loading);h.appendContent(s,this._attribution);this._loadToken=g.subscribe('wikipedia/loaded',this.onArticleLoaded.bind(this),g.SUBSCRIBE_NEW);var t=h.create('script',{src:this._wikiSrc},null);h.find(document,'head').appendChild(t);},onArticleLoaded:function(p,q){if(q.url!=this._url)return;this._scrollableArea.poke();if(this._subsection){var r=n(this._subsection);if(r)this._scrollableArea.setScrollTop(r.offsetTop,true);}g.unsubscribe(this._loadToken);}});e.exports=o;},null);
__d("VertexScaledImageWithFallback",["CSS","DOMQuery"],function(a,b,c,d,e,f,g,h){e.exports={handleFallback:function(i,j){var k=h.find(i,'img'),l=new Image(),m=function(n){if(l.width<=1||l.height<=1){g.hide(i);g.show(j);}}.bind(this);l.onload=m;l.onerror=m;l.src=k.src;}};},null);
__d("XVertexCrowdsourcingSaveControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/pages\/crowdsourcing\/photos\/save_claims\/",{page_id:{type:"Int",required:true},photo_id:{type:"Int",required:true},action:{type:"Enum",required:true},entry_point:{type:"Enum"}});},null);