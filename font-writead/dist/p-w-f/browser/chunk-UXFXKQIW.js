import{b as A,c as y,f as k,l as i,m as V}from"./chunk-5C3JZQF2.js";import{a as z}from"./chunk-4PAWWMQF.js";import{p as L,r as B,v as R}from"./chunk-HHBVVXWG.js";import{Oa as D,Ra as a,T as b,Ta as x,U as f,Wa as F,Y as E,Ya as M,Z as w,_a as S,a as d,ba as n,bb as O,da as g,ea as v,ic as h,jc as u,ka as H,sa as m,xa as I,xb as T}from"./chunk-JKC5LLPW.js";var j=(()=>{let l=class l{constructor(e){this._http=e,this.urlApi=z.api,this.urlRuta="api/v1/autor"}postSeguir(e){return this._http.post(`${this.urlApi}${this.urlRuta}/seguir`,e)}getUsuarioFollower(e){return this._http.get(`${this.urlApi}${this.urlRuta}/followers/${e}`)}putSeguir(e){return this._http.put(`${this.urlApi}${this.urlRuta}/seguir`,e)}postSeguirInsert(e){return this._http.post(`${this.urlApi}${this.urlRuta}/seguir/insert`,e)}getInformacionAutor(e){return this._http.get(`${this.urlApi}${this.urlRuta}/informacion/${e}`)}};l.\u0275fac=function(s){return new(s||l)(E(R))},l.\u0275prov=b({token:l,factory:l.\u0275fac,providedIn:"root"});let o=l;return o})();var J=(()=>{class o{pFocusTrapDisabled=!1;host=w(m);onkeydown(t){if(this.pFocusTrapDisabled!==!0){t.preventDefault();let e=i.getNextFocusableElement(this.host.nativeElement,t.shiftKey);e&&(e.focus(),e.select?.())}}static \u0275fac=function(e){return new(e||o)};static \u0275dir=v({type:o,selectors:[["","pFocusTrap",""]],hostAttrs:[1,"p-element"],hostBindings:function(e,s){e&1&&T("keydown.tab",function(r){return s.onkeydown(r)})("keydown.shift.tab",function(r){return s.onkeydown(r)})},inputs:{pFocusTrapDisabled:[n.HasDecoratorInputTransform,"pFocusTrapDisabled","pFocusTrapDisabled",h]},features:[O]})}return o})(),Q=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({imports:[L]})}return o})();var ht=(()=>{class o{platformId;el;zone;config;renderer;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:A()+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;scrollHandler;resizeListener;constructor(t,e,s,p,r,c){this.platformId=t,this.el=e,this.zone=s,this.config=p,this.renderer=r,this.viewContainer=c}ngAfterViewInit(){B(this.platformId)&&this.zone.runOutsideAngular(()=>{if(this.getOption("tooltipEvent")==="hover")this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener);else if(this.getOption("tooltipEvent")==="focus"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let t=this.getTarget(this.el.nativeElement);t.addEventListener("focus",this.focusListener),t.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=d(d({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(i.hasClass(t.relatedTarget,"p-tooltip")||i.hasClass(t.relatedTarget,"p-tooltip-text")||i.hasClass(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}onPressEscape(){this.hideOnEscape&&this.deactivate()}activate(){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}}deactivate(){this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?i.appendChild(this.container,this.el.nativeElement):i.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",e=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){!this.getOption("tooltipLabel")||this.getOption("disabled")||(this.create(),this.align(),i.fadeIn(this.container,250),this.getOption("tooltipZIndex")==="auto"?y.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener())}hide(){this.getOption("tooltipZIndex")==="auto"&&y.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof x){let e=this.viewContainer.createEmbeddedView(t);e.detectChanges(),e.rootNodes.forEach(s=>this.tooltipText.appendChild(s))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break}}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),e=t.left+i.getWindowScrollLeft(),s=t.top+i.getWindowScrollTop();return{left:e,top:s}}else return{left:0,top:0}}alignRight(){this.preAlign("right");let t=this.getHostOffset(),e=t.left+i.getOuterWidth(this.el.nativeElement),s=t.top+(i.getOuterHeight(this.el.nativeElement)-i.getOuterHeight(this.container))/2;this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}alignLeft(){this.preAlign("left");let t=this.getHostOffset(),e=t.left-i.getOuterWidth(this.container),s=t.top+(i.getOuterHeight(this.el.nativeElement)-i.getOuterHeight(this.container))/2;this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let t=this.getHostOffset(),e=t.left+(i.getOuterWidth(this.el.nativeElement)-i.getOuterWidth(this.container))/2,s=t.top-i.getOuterHeight(this.container);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let t=this.getHostOffset(),e=t.left+(i.getOuterWidth(this.el.nativeElement)-i.getOuterWidth(this.container))/2,s=t.top+i.getOuterHeight(this.el.nativeElement);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=d(d({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return i.hasClass(t,"p-inputwrapper")?i.findSingle(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let e="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?e+" "+this.getOption("tooltipStyleClass"):e}isOutOfBounds(){let t=this.container.getBoundingClientRect(),e=t.top,s=t.left,p=i.getOuterWidth(this.container),r=i.getOuterHeight(this.container),c=i.getViewport();return s+p>c.width||s<0||e<0||e+r>c.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new V(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){if(this.getOption("tooltipEvent")==="hover")this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener);else if(this.getOption("tooltipEvent")==="focus"){let t=this.getTarget(this.el.nativeElement);t.removeEventListener("focus",this.focusListener),t.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):i.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&y.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(e){return new(e||o)(a(I),a(m),a(M),a(k),a(F),a(S))};static \u0275dir=v({type:o,selectors:[["","pTooltip",""]],hostAttrs:[1,"p-element"],hostBindings:function(e,s){e&1&&T("keydown.escape",function(r){return s.onPressEscape(r)},!1,D)},inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[n.HasDecoratorInputTransform,"escape","escape",h],showDelay:[n.HasDecoratorInputTransform,"showDelay","showDelay",u],hideDelay:[n.HasDecoratorInputTransform,"hideDelay","hideDelay",u],life:[n.HasDecoratorInputTransform,"life","life",u],positionTop:[n.HasDecoratorInputTransform,"positionTop","positionTop",u],positionLeft:[n.HasDecoratorInputTransform,"positionLeft","positionLeft",u],autoHide:[n.HasDecoratorInputTransform,"autoHide","autoHide",h],fitContent:[n.HasDecoratorInputTransform,"fitContent","fitContent",h],hideOnEscape:[n.HasDecoratorInputTransform,"hideOnEscape","hideOnEscape",h],content:[n.None,"pTooltip","content"],disabled:[n.None,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[O,H]})}return o})(),pt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=g({type:o});static \u0275inj=f({imports:[L]})}return o})();export{J as a,Q as b,ht as c,pt as d,j as e};