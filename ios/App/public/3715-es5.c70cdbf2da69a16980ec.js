!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"))?i:String(i)),n)}var o,i}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=i(t);if(e){var u=i(this).constructor;r=Reflect.construct(n,arguments,u)}else r=n.apply(this,arguments);return o(this,r)}}function o(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}(self.webpackChunkonTarget=self.webpackChunkonTarget||[]).push([[3715],{53715:function(o,i,u){u.r(i),u.d(i,{AppTrackingTransparencyWeb:function(){return c}});var c=function(o){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(a,o);var i,u,c,f=n(a);function a(){return t(this,a),f.apply(this,arguments)}return i=a,(u=[{key:"getStatus",value:function(){return Promise.resolve({status:"authorized"})}},{key:"requestPermission",value:function(){return Promise.resolve({status:"authorized"})}}])&&e(i.prototype,u),c&&e(i,c),Object.defineProperty(i,"prototype",{writable:!1}),a}(u(68384).Uw)}}])}();