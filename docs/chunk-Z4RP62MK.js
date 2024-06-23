import{a as T}from"./chunk-SASNCHXZ.js";import{Da as z,Fa as Z,K as D,M as S,O as d,Oa as X,U as O,V as u,Wa as A,_ as x,_a as Y,a,b as l,ba as N,db as K,fb as G,g as L,ga as P,ha as b,j as $,o as W,ra as o,t as q,ta as k,xa as c}from"./chunk-Q6J3GLUC.js";var oe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(o(k),o(P))},e.\u0275dir=u({type:e});let t=e;return t})(),Ce=(()=>{let e=class e extends oe{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=N(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[c]});let t=e;return t})(),ae=new d("");var Ve={provide:ae,useExisting:D(()=>le),multi:!0};function De(){let t=T()?T().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var be=new d(""),le=(()=>{let e=class e extends oe{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!De())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(o(k),o(P),o(be,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&X("input",function(m){return s._handleInput(m.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(m){return s._compositionEnd(m.target.value)})},features:[A([Ve]),c]});let t=e;return t})();function Ae(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}var ue=new d(""),Me=new d("");function Ee(t){return Ae(t.value)?{required:!0}:null}function J(t){return null}function de(t){return t!=null}function ce(t){return Y(t)?$(t):t}function he(t){let e={};return t.forEach(i=>{e=i!=null?a(a({},e),i):e}),Object.keys(e).length===0?null:e}function fe(t,e){return e.map(i=>i(t))}function we(t){return!t.validate}function pe(t){return t.map(e=>we(e)?e:i=>e.validate(i))}function Fe(t){if(!t)return null;let e=t.filter(de);return e.length==0?null:function(i){return he(fe(i,e))}}function ge(t){return t!=null?Fe(pe(t)):null}function Ie(t){if(!t)return null;let e=t.filter(de);return e.length==0?null:function(i){let n=fe(i,e).map(ce);return q(n).pipe(W(he))}}function me(t){return t!=null?Ie(pe(t)):null}function Q(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Se(t){return t._rawValidators}function Oe(t){return t._rawAsyncValidators}function j(t){return t?Array.isArray(t)?t:[t]:[]}function E(t,e){return Array.isArray(t)?t.includes(e):t===e}function ee(t,e){let i=j(e);return j(t).forEach(r=>{E(i,r)||i.push(r)}),i}function te(t,e){return j(e).filter(i=>!E(t,i))}var w=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ge(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=me(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},B=class extends w{get formDirective(){return null}get path(){return null}},V=class extends w{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},U=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},xe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Vt=l(a({},xe),{"[class.ng-submitted]":"isSubmitted"}),Dt=(()=>{let e=class e extends U{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(o(V,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&Z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[c]});let t=e;return t})();var v="VALID",M="INVALID",h="PENDING",y="DISABLED",p=class{},F=class extends p{constructor(e,i){super(),this.value=e,this.source=i}},_=class extends p{constructor(e,i){super(),this.pristine=e,this.source=i}},C=class extends p{constructor(e,i){super(),this.touched=e,this.source=i}},f=class extends p{constructor(e,i){super(),this.status=e,this.source=i}};function Ne(t){return(I(t)?t.validators:t)||null}function Pe(t){return Array.isArray(t)?ge(t):t||null}function ke(t,e){return(I(e)?e.asyncValidators:t)||null}function Ge(t){return Array.isArray(t)?me(t):t||null}function I(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var R=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new L,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===v}get invalid(){return this.status===M}get pending(){return this.status==h}get disabled(){return this.status===y}get enabled(){return this.status!==y}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(te(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(te(e,this._rawAsyncValidators))}hasValidator(e){return E(this._rawValidators,e)}hasAsyncValidator(e){return E(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new C(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new C(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new _(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new _(!0,n))}markAsPending(e={}){this.status=h;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new f(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=y,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new F(this.value,n)),this._events.next(new f(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=v,this._forEachChild(n=>{n.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===v||this.status===h)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new F(this.value,i)),this._events.next(new f(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?y:v}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=h,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=ce(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new f(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?y:this.errors?M:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(h)?h:this._anyControlsHaveStatus(M)?M:v}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new _(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new C(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){I(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Pe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ge(this._rawAsyncValidators)}};var ve=new d("CallSetDisabledState",{providedIn:"root",factory:()=>H}),H="always";function Te(t,e){return[...e.path,t]}function je(t,e,i=H){Ue(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Re(t,e),Le(t,e),He(t,e),Be(t,e)}function ie(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Be(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function Ue(t,e){let i=Se(t);e.validator!==null?t.setValidators(Q(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Oe(t);e.asyncValidator!==null?t.setAsyncValidators(Q(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();ie(e._rawValidators,r),ie(e._rawAsyncValidators,r)}function Re(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ye(t,e)})}function He(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ye(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ye(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Le(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function $e(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function We(t){return Object.getPrototypeOf(t.constructor)===Ce}function qe(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===le?i=s:We(s)?n=s:r=s}),r||n||i||null}function ne(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function re(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ze=class extends R{constructor(e=null,i,n){super(Ne(i),ke(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),I(i)&&(i.nonNullable||i.initialValueIsDefault)&&(re(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ne(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ne(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){re(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ze={provide:V,useExisting:D(()=>Xe)},se=Promise.resolve(),Xe=(()=>{let e=class e extends V{constructor(n,r,s,g,m,_e){super(),this._changeDetectorRef=m,this.callSetDisabledState=_e,this.control=new ze,this._registered=!1,this.name="",this.update=new b,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=qe(this,g)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),$e(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){je(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){se.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&G(r);se.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Te(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(o(B,9),o(ue,10),o(Me,10),o(ae,10),o(K,8),o(ve,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[A([Ze]),c,x]});let t=e;return t})();var Ye=(()=>{let e=class e{constructor(){this._validator=J}ngOnChanges(n){if(this.inputName in n){let r=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):J,this._onChange&&this._onChange()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return n!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,features:[x]});let t=e;return t})();var Ke={provide:ue,useExisting:D(()=>Je),multi:!0};var Je=(()=>{let e=class e extends Ye{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=G,this.createValidator=n=>Ee}enabled(n){return n}};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=N(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,s){r&2&&z("required",s._enabled?"":null)},inputs:{required:"required"},features:[A([Ke]),c]});let t=e;return t})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=S({});let t=e;return t})();var At=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:ve,useValue:n.callSetDisabledState??H}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=S({imports:[Qe]});let t=e;return t})();export{le as a,Dt as b,Xe as c,Je as d,At as e};