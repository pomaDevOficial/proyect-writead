import{a as ee,k as Ne,m as xe,n as Oe,p as U}from"./chunk-HHBVVXWG.js";import{$b as Ie,A as me,Ab as Ee,Gb as J,Hb as Fe,Ib as we,La as De,Ob as I,Q as O,Qa as X,Ra as a,S as E,T as ve,U as m,W as v,Wa as Y,Zb as Q,a as d,ab as f,b as g,ba as c,ca as ye,da as y,ea as l,ec as B,fb as k,gb as T,hb as _,ic as Se,jb as w,ka as P,la as _e,lb as K,ma as Ce,oa as Ve,p as pe,qb as j,rb as G,sa as F,sb as be,ta as h,u as ge,wb as Me,xb as C,yb as V,zb as Ae}from"./chunk-JKC5LLPW.js";var $e=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(Y),a(F))},e.\u0275dir=l({type:e});let t=e;return t})(),ft=(()=>{let e=class e extends $e{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Ve(e)))(s||e)}})(),e.\u0275dir=l({type:e,features:[f]});let t=e;return t})(),se=new v("");var pt={provide:se,useExisting:E(()=>We),multi:!0};function gt(){let t=ee()?ee().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var mt=new v(""),We=(()=>{let e=class e extends $e{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!gt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(Y),a(F),a(mt,8))},e.\u0275dir=l({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&C("input",function(u){return s._handleInput(u.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(u){return s._compositionEnd(u.target.value)})},features:[I([pt]),f]});let t=e;return t})();function p(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function qe(t){return t!=null&&typeof t.length=="number"}var oe=new v(""),ae=new v(""),vt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Pe=class{static min(e){return yt(e)}static max(e){return _t(e)}static required(e){return Ct(e)}static requiredTrue(e){return Vt(e)}static email(e){return Dt(e)}static minLength(e){return bt(e)}static maxLength(e){return Mt(e)}static pattern(e){return At(e)}static nullValidator(e){return ze(e)}static compose(e){return Qe(e)}static composeAsync(e){return tt(e)}};function yt(t){return e=>{if(p(e.value)||p(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function _t(t){return e=>{if(p(e.value)||p(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Ct(t){return p(t.value)?{required:!0}:null}function Vt(t){return t.value===!0?null:{required:!0}}function Dt(t){return p(t.value)||vt.test(t.value)?null:{email:!0}}function bt(t){return e=>p(e.value)||!qe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Mt(t){return e=>qe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function At(t){if(!t)return ze;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(p(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function ze(t){return null}function Ze(t){return t!=null}function Xe(t){return Ie(t)?pe(t):t}function Ye(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Ke(t,e){return e.map(n=>n(t))}function Et(t){return!t.validate}function Je(t){return t.map(e=>Et(e)?e:n=>e.validate(n))}function Qe(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){return Ye(Ke(n,e))}}function et(t){return t!=null?Qe(Je(t)):null}function tt(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){let i=Ke(n,e).map(Xe);return me(i).pipe(ge(Ye))}}function it(t){return t!=null?tt(Je(t)):null}function ke(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function nt(t){return t._rawValidators}function rt(t){return t._rawAsyncValidators}function te(t){return t?Array.isArray(t)?t:[t]:[]}function H(t,e){return Array.isArray(t)?t.includes(e):t===e}function Te(t,e){let n=te(e);return te(t).forEach(r=>{H(n,r)||n.push(r)}),n}function je(t,e){return te(e).filter(n=>!H(t,n))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=et(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},D=class extends L{get formDirective(){return null}get path(){return null}},b=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},$=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ft={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},vi=g(d({},Ft),{"[class.ng-submitted]":"isSubmitted"}),yi=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(b,2))},e.\u0275dir=l({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&w("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[f]});let t=e;return t})(),_i=(()=>{let e=class e extends ${constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(D,10))},e.\u0275dir=l({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&w("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[f]});let t=e;return t})();var S="VALID",R="INVALID",M="PENDING",N="DISABLED";function le(t){return(Z(t)?t.validators:t)||null}function wt(t){return Array.isArray(t)?et(t):t||null}function ue(t,e){return(Z(e)?e.asyncValidators:t)||null}function It(t){return Array.isArray(t)?it(t):t||null}function Z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function st(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new O(1e3,"");if(!i[n])throw new O(1001,"")}function ot(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new O(1002,"")})}var A=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===R}get pending(){return this.status==M}get disabled(){return this.status===N}get enabled(){return this.status!==N}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Te(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Te(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=N,this.errors=null,this._forEachChild(i=>{i.disable(g(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(i=>{i.enable(g(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(d({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?N:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let n=Xe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new h,this.statusChanges=new h}_calculateStatus(){return this._allControlsDisabled()?N:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(R)?R:S}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=wt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=It(this._rawAsyncValidators)}},W=class extends A{constructor(e,n,i){super(le(n),ue(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){ot(this,!0,e),Object.keys(e).forEach(i=>{st(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ie=class extends W{};var de=new v("CallSetDisabledState",{providedIn:"root",factory:()=>ce}),ce="always";function at(t,e){return[...e.path,t]}function ne(t,e,n=ce){he(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Nt(t,e),Ot(t,e),xt(t,e),St(t,e)}function Ge(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),z(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function q(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function St(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function he(t,e){let n=nt(t);e.validator!==null?t.setValidators(ke(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=rt(t);e.asyncValidator!==null?t.setAsyncValidators(ke(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();q(e._rawValidators,r),q(e._rawAsyncValidators,r)}function z(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=nt(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=rt(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return q(e._rawValidators,i),q(e._rawAsyncValidators,i),n}function Nt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&lt(t,e)})}function xt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&lt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function lt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ot(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Pt(t,e){t==null,he(t,e)}function kt(t,e){return z(t,e)}function ut(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Tt(t){return Object.getPrototypeOf(t.constructor)===ft}function jt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function dt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===We?n=s:Tt(s)?i=s:r=s}),r||i||n||null}function Gt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Be(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ue(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var x=class extends A{constructor(e=null,n,i){super(le(n),ue(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Bt=t=>t instanceof x;var Ut={provide:b,useExisting:E(()=>fe)},Re=Promise.resolve(),fe=(()=>{let e=class e extends b{constructor(i,r,s,o,u,ht){super(),this._changeDetectorRef=u,this.callSetDisabledState=ht,this.control=new x,this._registered=!1,this.name="",this.update=new h,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=dt(this,o)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),ut(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ne(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Re.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&Se(r);Re.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?at(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a(D,9),a(oe,10),a(ae,10),a(se,10),a(B,8),a(de,8))},e.\u0275dir=l({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[c.None,"disabled","isDisabled"],model:[c.None,"ngModel","model"],options:[c.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[I([Ut]),f,P]});let t=e;return t})(),Vi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=l({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var ct=new v("");var Rt={provide:D,useExisting:E(()=>Ht)},Ht=(()=>{let e=class e extends D{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new h,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return ne(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Ge(i.control||null,i,!1),Gt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,jt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(Ge(r||null,i),Bt(s)&&(ne(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Pt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&kt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){he(this.form,this),this._oldForm&&z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(oe,10),a(ae,10),a(de,8))},e.\u0275dir=l({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&C("submit",function(u){return s.onSubmit(u)})("reset",function(){return s.onReset()})},inputs:{form:[c.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[I([Rt]),f,P]});let t=e;return t})();var Lt={provide:b,useExisting:E(()=>$t)},$t=(()=>{let e=class e extends b{set isDisabled(i){}constructor(i,r,s,o,u){super(),this._ngModelWarningConfig=u,this._added=!1,this.name=null,this.update=new h,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=dt(this,o)}ngOnChanges(i){this._added||this._setUpControl(),ut(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return at(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(D,13),a(oe,10),a(ae,10),a(se,10),a(ct,8))},e.\u0275dir=l({type:e,selectors:[["","formControlName",""]],inputs:{name:[c.None,"formControlName","name"],isDisabled:[c.None,"disabled","isDisabled"],model:[c.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[I([Lt]),f,P]});let t=e;return t})();var Wt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=m({});let t=e;return t})(),re=class extends A{constructor(e,n,i){super(le(n),ue(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){ot(this,!1,e),e.forEach((i,r)=>{st(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function He(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Di=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let s=this._reduceControls(i),o={};return He(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new W(s,o)}record(i,r=null){let s=this._reduceControls(i);return new ie(s,r)}control(i,r,s){let o={};return this.useNonNullable?(He(r)?o=r:(o.validators=r,o.asyncValidators=s),new x(i,g(d({},o),{nonNullable:!0}))):new x(i,r,s)}array(i,r,s){let o=i.map(u=>this._createControl(u));return new re(o,r,s)}_reduceControls(i){let r={};return Object.keys(i).forEach(s=>{r[s]=this._createControl(i[s])}),r}_createControl(i){if(i instanceof x)return i;if(i instanceof A)return i;if(Array.isArray(i)){let r=i[0],s=i.length>1?i[1]:null,o=i.length>2?i[2]:null;return this.control(r,s,o)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ve({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var bi=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ct,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:de,useValue:i.callSetDisabledState??ce}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y({type:e}),e.\u0275inj=m({imports:[Wt]});let t=e;return t})();var Ei=(()=>{class t{el;ngModel;cd;filled;constructor(n,i,r){this.el=n,this.ngModel=i,this.cd=r}ngAfterViewInit(){this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||t)(a(F),a(fe,8),a(B))};static \u0275dir=l({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:2,hostBindings:function(i,r){i&1&&C("input",function(o){return r.onInput(o)}),i&2&&w("p-filled",r.filled)}})}return t})(),Fi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=y({type:t});static \u0275inj=m({imports:[U]})}return t})();var zt=["*"];function Zt(t,e){if(t&1&&(j(0,"span",4),Fe(1),G()),t&2){let n=V();X(),we(n.label)}}function Xt(t,e){if(t&1&&be(0,"span",6),t&2){let n=V(2);K(n.icon),_("ngClass","p-avatar-icon")}}function Yt(t,e){if(t&1&&k(0,Xt,1,3,"span",5),t&2){let n=V(),i=J(6);_("ngIf",n.icon)("ngIfElse",i)}}function Kt(t,e){if(t&1){let n=Me();j(0,"img",8),C("error",function(r){_e(n);let s=V(2);return Ce(s.imageError(r))}),G()}if(t&2){let n=V(2);_("src",n.image,De),T("aria-label",n.ariaLabel)}}function Jt(t,e){if(t&1&&k(0,Kt,1,2,"img",7),t&2){let n=V();_("ngIf",n.image)}}var Gi=(()=>{class t{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new h;containerClass(){return{"p-avatar p-component":!0,"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}}imageError(n){this.onImageError.emit(n)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=ye({type:t,selectors:[["p-avatar"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},ngContentSelectors:zt,decls:7,vars:9,consts:[["iconTemplate",""],["imageTemplate",""],[3,"ngClass","ngStyle"],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(i,r){if(i&1&&(Ae(),j(0,"div",2),Ee(1),k(2,Zt,2,1,"span",3)(3,Yt,1,2,"ng-template",null,0,Q)(5,Jt,1,1,"ng-template",null,1,Q),G()),i&2){let s=J(4);K(r.styleClass),_("ngClass",r.containerClass())("ngStyle",r.style),T("aria-labelledby",r.ariaLabelledBy)("aria-label",r.ariaLabel)("data-pc-name","avatar"),X(2),_("ngIf",r.label)("ngIfElse",s)}},dependencies:[Ne,xe,Oe],styles:[`@layer primeng{.p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}}
`],encapsulation:2,changeDetection:0})}return t})(),Bi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=y({type:t});static \u0275inj=m({imports:[U]})}return t})();export{se as a,We as b,Pe as c,b as d,yi as e,_i as f,W as g,x as h,fe as i,Vi as j,Ht as k,$t as l,Di as m,bi as n,Ei as o,Fi as p,Gi as q,Bi as r};