!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(T){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new _(n||[]);return o(a,"_invoke",{value:L(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=l;var p={};function h(){}function y(){}function v(){}var d={};f(d,a,function(){return this});var g=Object.getPrototypeOf,w=g&&g(g(A([])));w&&w!==r&&n.call(w,a)&&(d=w);var b=v.prototype=h.prototype=Object.create(d);function m(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){f.value=t,a(f)},function(t){return r("throw",t,a,c)})}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return i=i?i.then(o,o):o()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return y.prototype=v,o(b,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=f(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},m(E.prototype),f(E.prototype,c,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},m(b),f(b,u,"Generator"),f(b,a,function(){return this}),f(b,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function e(t,r){return(e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,r)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,i=o(t);if(e){var a=o(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return n(this,r)}}function n(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"))?i:String(i)),n)}var o,i}function c(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkonTarget=self.webpackChunkonTarget||[]).push([[6379],{66379:function(n,o,a){"use strict";a.r(o),a.d(o,{FileSharerPluginWeb:function(){return p}});var u=a(34553),f=a(68384),l=a(49457),s=function(){function t(){i(this,t)}return c(t,null,[{key:"toByteArray",value:function(t){for(var e=atob(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=e.charCodeAt(n);return new Uint8Array(r)}}]),t}(),p=function(n){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&e(t,r)}(a,n);var o=r(a);function a(){return i(this,a),o.apply(this,arguments)}return c(a,[{key:"share",value:function(e){return(0,u.Z)(t().mark(function r(){return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,r){e.base64Data&&0!=e.base64Data.length?e.filename&&0!=e.filename.length?(!e.contentType||0==e.contentType.length)&&r(new Error("ERR_PARAM_NO_CONTENT_TYPE")):r(new Error("ERR_PARAM_NO_FILENAME")):r(new Error("ERR_PARAM_NO_DATA"));var n=new Blob([s.toByteArray(e.base64Data)],{type:e.contentType});l.saveAs(n,e.filename),t()}));case 1:case"end":return t.stop()}},r)}))()}}]),a}(f.Uw)},49457:function(t,e){var r,n;void 0!==(n="function"==typeof(r=function(){"use strict";function e(t,e,r){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){a(n.response,e,r)},n.onerror=function(){console.error("could not download file")},n.send()}function r(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(r){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,a){var c=o.URL||o.webkitURL,u=document.createElement("a");u.download=i=i||t.name||"download",u.rel="noopener","string"==typeof t?(u.href=t,u.origin===location.origin?n(u):r(u.href)?e(t,i,a):n(u,u.target="_blank")):(u.href=c.createObjectURL(t),setTimeout(function(){c.revokeObjectURL(u.href)},4e4),setTimeout(function(){n(u)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,i){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),o);else if(r(t))e(t,o,i);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout(function(){n(a)})}}:function(t,r,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return e(t,r,n);var c="application/octet-stream"===t.type,u=/constructor/i.test(o.HTMLElement)||o.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent);if((f||c&&u||i)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=f?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},l.readAsDataURL(t)}else{var s=o.URL||o.webkitURL,p=s.createObjectURL(t);a?a.location=p:location.href=p,a=null,setTimeout(function(){s.revokeObjectURL(p)},4e4)}});o.saveAs=a.saveAs=a,t.exports=a})?r.apply(e,[]):r)&&(t.exports=n)}}])}();