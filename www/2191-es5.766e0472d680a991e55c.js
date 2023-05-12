!function(){"use strict";function t(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},i=Object.prototype,n=i.hasOwnProperty,a=Object.defineProperty||function(t,e,i){t[e]=i.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(F){c=function(t,e,i){return t[e]=i}}function d(t,e,i,n){var r=e&&e.prototype instanceof u?e:u,o=Object.create(r.prototype),l=new C(n||[]);return a(o,"_invoke",{value:k(t,i,l)}),o}function h(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(F){return{type:"throw",arg:F}}}e.wrap=d;var p={};function u(){}function f(){}function g(){}var v={};c(v,o,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(I([])));y&&y!==i&&n.call(y,o)&&(v=y);var b=g.prototype=u.prototype=Object.create(v);function x(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){function i(a,r,o,l){var s=h(t[a],t,r);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then(function(t){i("next",t,o,l)},function(t){i("throw",t,o,l)}):e.resolve(d).then(function(t){c.value=t,o(c)},function(t){return i("throw",t,o,l)})}l(s.arg)}var r;a(this,"_invoke",{value:function(t,n){function a(){return new e(function(e,a){i(t,n,e,a)})}return r=r?r.then(a,a):a()}})}function k(t,e,i){var n="suspendedStart";return function(a,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw r;return O()}for(i.method=a,i.arg=r;;){var o=i.delegate;if(o){var l=E(o,i);if(l){if(l===p)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===n)throw n="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n="executing";var s=h(t,e,i);if("normal"===s.type){if(n=i.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:i.done}}"throw"===s.type&&(n="completed",i.method="throw",i.arg=s.arg)}}}function E(t,e){var i=e.method,n=t.iterator[i];if(void 0===n)return e.delegate=null,"throw"===i&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==i&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+i+"' method")),p;var a=h(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function I(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:f,configurable:!0}),f.displayName=c(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},x(w.prototype),c(w.prototype,l,function(){return this}),e.AsyncIterator=w,e.async=function(t,i,n,a,r){void 0===r&&(r=Promise);var o=new w(d(t,i,n,a),r);return e.isGeneratorFunction(i)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(b),c(b,s,"Generator"),c(b,o,function(){return this}),c(b,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),i=[];for(var n in e)i.push(n);return i.reverse(),function t(){for(;i.length;){var n=i.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,n){return o.type="throw",o.arg=t,e.next=i,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],o=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var l=n.call(r,"catchLoc"),s=n.call(r,"finallyLoc");if(l&&s){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(l){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=t,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),z(i),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var a=n.arg;z(i)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:I(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=void 0),p}},e}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,i(a.key),a)}}function i(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(self.webpackChunkonTarget=self.webpackChunkonTarget||[]).push([[2191],{32191:function(n,a,r){r.r(a),r.d(a,{ion_textarea:function(){return h}});var o=r(34553),l=r(23150),s=r(97585),c=r(52377),d=r(61269),h=function(){function n(t){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(0,l.r)(this,t),this.ionChange=(0,l.e)(this,"ionChange",7),this.ionInput=(0,l.e)(this,"ionInput",7),this.ionStyle=(0,l.e)(this,"ionStyle",7),this.ionBlur=(0,l.e)(this,"ionBlur",7),this.ionFocus=(0,l.e)(this,"ionFocus",7),this.inputId="ion-textarea-"+p++,this.didBlurAfterEdit=!1,this.inheritedAttributes={},this.fireFocusEvents=!0,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.autoGrow=!1,this.value="",this.onInput=function(t){e.nativeInput&&(e.value=e.nativeInput.value),e.emitStyle(),e.ionInput.emit(t)},this.onFocus=function(t){e.hasFocus=!0,e.focusChange(),e.fireFocusEvents&&e.ionFocus.emit(t)},this.onBlur=function(t){e.hasFocus=!1,e.focusChange(),e.fireFocusEvents&&e.ionBlur.emit(t)},this.onKeyDown=function(){e.checkClearOnEdit()}}var a,r,h;return a=n,h=[{key:"watchers",get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}}],(r=[{key:"debounceChanged",value:function(){this.ionChange=(0,c.f)(this.ionChange,this.debounce)}},{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"valueChanged",value:function(){var t=this.nativeInput,e=this.getValue();t&&t.value!==e&&(t.value=e),this.runAutoGrow(),this.emitStyle(),this.ionChange.emit({value:e})}},{key:"connectedCallback",value:function(){this.emitStyle(),this.debounceChanged(),document.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}},{key:"disconnectedCallback",value:function(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))}},{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,c.i)(this.el,["title"])}},{key:"componentDidLoad",value:function(){var t=this;(0,c.r)(function(){return t.runAutoGrow()})}},{key:"runAutoGrow",value:function(){var t=this,e=this.nativeInput;e&&this.autoGrow&&(0,l.f)(function(){e.style.height="auto",e.style.height=e.scrollHeight+"px",t.textareaWrapper&&(t.textareaWrapper.style.height=e.scrollHeight+"px")})}},{key:"setFocus",value:function(){var e=this;return(0,o.Z)(t().mark(function i(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.nativeInput&&e.nativeInput.focus();case 1:case"end":return t.stop()}},i)}))()}},{key:"setBlur",value:function(){var e=this;return(0,o.Z)(t().mark(function i(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.nativeInput&&e.nativeInput.blur();case 1:case"end":return t.stop()}},i)}))()}},{key:"getInputElement",value:function(){return Promise.resolve(this.nativeInput)}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus})}},{key:"checkClearOnEdit",value:function(){!this.clearOnEdit||(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)}},{key:"focusChange",value:function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()}},{key:"hasValue",value:function(){return""!==this.getValue()}},{key:"getValue",value:function(){return this.value||""}},{key:"render",value:function(){var t,e,n,a=this,r=(0,s.b)(this),o=this.getValue(),h=this.inputId+"-lbl",p=(0,c.h)(this.el);return p&&(p.id=h),(0,l.h)(l.H,{"aria-disabled":this.disabled?"true":null,class:(0,d.c)(this.color,(t={},e=r,n=!0,(e=i(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t))},(0,l.h)("div",{class:"textarea-wrapper",ref:function(t){return a.textareaWrapper=t}},(0,l.h)("textarea",Object.assign({class:"native-textarea","aria-labelledby":p?h:null,ref:function(t){return a.nativeInput=t},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},this.inheritedAttributes),o)))}},{key:"el",get:function(){return(0,l.i)(this)}}])&&e(a.prototype,r),h&&e(a,h),Object.defineProperty(a,"prototype",{writable:!1}),n}(),p=0;h.style={ios:".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-ios-h{background:initial}.ion-color.sc-ion-textarea-ios-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-ios{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:0.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-ios-h,.item-label-stacked .sc-ion-textarea-ios-h,.item-label-floating.sc-ion-textarea-ios-h,.item-label-floating .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}",md:".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-md-h{background:initial}.ion-color.sc-ion-textarea-md-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-md{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:0.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-md-h,.item-label-stacked .sc-ion-textarea-md-h,.item-label-floating.sc-ion-textarea-md-h,.item-label-floating .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}"}}}])}();