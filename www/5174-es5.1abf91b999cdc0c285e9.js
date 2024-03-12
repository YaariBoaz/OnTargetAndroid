!function(){"use strict";function t(t,e,r){return(e=s(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(j){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),u=new C(n||[]);return o(i,"_invoke",{value:x(t,r,u)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=f;var h={};function v(){}function p(){}function d(){}var y={};s(y,i,function(){return this});var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==e&&n.call(m,i)&&(y=m);var b=d.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function k(t,e){function r(o,a,i,u){var c=l(t[o],t,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,u)},function(t){r("throw",t,i,u)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,u)})}u(c.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return a=a?a.then(o,o):o()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=E(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=d,o(b,"constructor",{value:d,configurable:!0}),o(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(k.prototype),s(k.prototype,u,function(){return this}),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(b),s(b,c,"Generator"),s(b,i,function(){return this}),s(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=o(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function c(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(self.webpackChunkonTarget=self.webpackChunkonTarget||[]).push([[5174],{45174:function(o,a,u){u.r(a),u.d(a,{ion_route:function(){return d},ion_route_redirect:function(){return y},ion_router:function(){return Z},ion_router_link:function(){return U}});var s,f=u(34553),l=u(23150),h=u(71567),v=u(97585),p=u(61269),d=function(){function t(e){i(this,t),(0,l.r)(this,e),this.ionRouteDataChanged=(0,l.e)(this,"ionRouteDataChanged",7),this.url=""}return c(t,[{key:"onUpdate",value:function(t){this.ionRouteDataChanged.emit(t)}},{key:"onComponentProps",value:function(t,e){if(t!==e){var r=t?Object.keys(t):[],o=e?Object.keys(e):[];if(r.length===o.length){var a,i=n(r);try{for(i.s();!(a=i.n()).done;){var u=a.value;if(t[u]!==e[u])return void this.onUpdate(t)}}catch(c){i.e(c)}finally{i.f()}}else this.onUpdate(t)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),t}(),y=function(){function t(e){i(this,t),(0,l.r)(this,e),this.ionRouteRedirectChanged=(0,l.e)(this,"ionRouteRedirectChanged",7)}return c(t,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),t}(),g="root",m="forward",b=function(t){return"/"+t.filter(function(t){return t.length>0}).join("/")},w=function(t){var e,r=[""];if(null!=t){var n=t.indexOf("?");n>-1&&(e=t.substr(n+1),t=t.substr(0,n)),0===(r=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0})).length&&(r=[""])}return{segments:r,queryString:e}},k=(s=(0,f.Z)(function(t,e,n,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5?arguments[5]:void 0;return r().mark(function u(){var c,s,f;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,c=L(t),!(o>=e.length)&&c){r.next=4;break}return r.abrupt("return",a);case 4:return r.next=6,new Promise(function(t){return(0,h.c)(c,t)});case 6:return s=e[o],r.next=9,c.setRouteId(s.id,s.params,n,i);case 9:return(f=r.sent).changed&&(n=g,a=!0),r.next=13,k(f.element,e,n,o+1,a,i);case 13:if(a=r.sent,r.t0=f.markVisible,!r.t0){r.next=18;break}return r.next=18,f.markVisible();case 18:return r.abrupt("return",a);case 21:return r.prev=21,r.t1=r.catch(0),r.abrupt("return",(console.error(r.t1),!1));case 24:case"end":return r.stop()}},u,null,[[0,21]])})()}),function(t,e,r,n){return s.apply(this,arguments)}),x=function(){var t=(0,f.Z)(r().mark(function t(e){var n,o,a,i;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[],a=e;case 2:if(!(o=L(a))){t.next=11;break}return t.next=5,o.getRouteId();case 5:if(i=t.sent){t.next=8;break}return t.abrupt("break",11);case 8:a=i.element,i.element=void 0,n.push(i);case 9:t.next=2;break;case 11:return t.abrupt("return",{ids:n,outlet:o});case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),E=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",L=function(t){if(t){if(t.matches(E))return t;var e=t.querySelector(E);return null!=e?e:void 0}},R=function(t,e){return e.find(function(e){return function(t,e){var r=e.from;if(void 0===e.to||r.length>t.length)return!1;for(var n=0;n<r.length;n++){var o=r[n];if("*"===o)return!0;if(o!==t[n])return!1}return r.length===t.length}(t,e)})},C=function(t,e){for(var r=Math.min(t.length,e.length),n=0,o=0;o<r;o++){var a=t[o],i=e[o];if(a.id.toLowerCase()!==i.id)break;if(a.params){var u=Object.keys(a.params);if(u.length===i.path.length)for(var c=u.map(function(t){return":".concat(t)}),s=0;s<c.length&&c[s].toLowerCase()===i.path[s];s++)n++}n++}return n},S=function(t,e){for(var r,o=new N(t),a=!1,i=0;i<e.length;i++){var u=e[i].path;if(""===u[0])a=!0;else{var c,s=n(u);try{for(s.s();!(c=s.n()).done;){var f=c.value,l=o.next();if(":"===f[0]){if(""===l)return null;((r=r||[])[i]||(r[i]={}))[f.slice(1)]=l}else if(l!==f)return null}}catch(h){s.e(h)}finally{s.f()}a=!1}}return a&&a!==(""===o.next())?null:r?e.map(function(t,e){return{id:t.id,path:t.path,params:P(t.params,r[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}}):e},P=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},j=function(t,e){var r,o=null,a=0,i=n(e);try{for(i.s();!(r=i.n()).done;){var u=r.value,c=S(t,u);if(null!==c){var s=O(c);s>a&&(a=s,o=c)}}}catch(f){i.e(f)}finally{i.f()}return o},O=function(t){var e,r=1,o=1,a=n(t);try{for(a.s();!(e=a.n()).done;){var i,u=n(e.value.path);try{for(u.s();!(i=u.n()).done;){var c=i.value;":"===c[0]?r+=Math.pow(1,o):""!==c&&(r+=Math.pow(2,o)),o++}}catch(s){u.e(s)}finally{u.f()}}}catch(s){a.e(s)}finally{a.f()}return r},N=function(){function t(e){i(this,t),this.path=e.slice()}return c(t,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),t}(),_=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},D=function(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=_(t,"to");return{from:w(_(t,"from")).segments,to:null==e?void 0:w(e)}})},T=function(t){return I(A(t))},A=function t(e){return Array.from(e.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(e){var r=_(e,"component");return{path:w(_(e,"url")).segments,id:r.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:t(e)}})},I=function(t){var e,r=[],o=n(t);try{for(o.s();!(e=o.n()).done;){var a=e.value;G([],r,a)}}catch(i){o.e(i)}finally{o.f()}return r},G=function t(e,r,o){if((e=e.slice()).push({id:o.id,path:o.path,params:o.params,beforeLeave:o.beforeLeave,beforeEnter:o.beforeEnter}),0!==o.children.length){var a,i=n(o.children);try{for(i.s();!(a=i.n()).done;){t(e,r,a.value)}}catch(u){i.e(u)}finally{i.f()}}else r.push(e)},Z=function(){function t(e){i(this,t),(0,l.r)(this,e),this.ionRouteWillChange=(0,l.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,l.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return c(t,[{key:"componentWillLoad",value:function(){var t=this;return(0,f.Z)(r().mark(function e(){var n,o,a;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(document.body)?Promise.resolve():new Promise(function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})});case 2:return e.next=4,t.runGuards(t.getPath());case 4:if(!0===(n=e.sent)){e.next=13;break}if("object"!=typeof n){e.next=11;break}return o=n.redirect,a=w(o),t.setPath(a.segments,g,a.queryString),e.next=11,t.writeNavStateRoot(a.segments,g);case 11:e.next=15;break;case 13:return e.next=15,t.onRoutesChanged();case 15:case"end":return e.stop()}},e)}))()}},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",(0,h.o)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,h.o)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){var t=this;return(0,f.Z)(r().mark(function e(){var n,o,a;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.historyDirection(),o=t.getPath(),e.next=4,t.runGuards(o);case 4:if(!0===(a=e.sent)){e.next=9;break}if("object"==typeof a){e.next=8;break}return e.abrupt("return",!1);case 8:o=w(a.redirect).segments;case 9:return e.abrupt("return",t.writeNavStateRoot(o,n));case 10:case"end":return e.stop()}},e)}))()}},{key:"onBackButton",value:function(t){var e=this;t.detail.register(0,function(t){e.back(),t()})}},{key:"canTransition",value:function(){var t=this;return(0,f.Z)(r().mark(function e(){var n;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.runGuards();case 2:return n=e.sent,e.abrupt("return",!0===n||"object"==typeof n&&n.redirect);case 4:case"end":return e.stop()}},e)}))()}},{key:"push",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"forward",n=arguments.length>2?arguments[2]:void 0,o=this;return(0,f.Z)(r().mark(function a(){var i,u;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),i=w(t),r.next=4,o.runGuards(i.segments);case 4:if(!0===(u=r.sent)){r.next=9;break}if("object"==typeof u){r.next=8;break}return r.abrupt("return",!1);case 8:i=w(u.redirect);case 9:return r.abrupt("return",(o.setPath(i.segments,e,i.queryString),o.writeNavStateRoot(i.segments,e,n)));case 10:case"end":return r.stop()}},a)}))()}},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:function(){var t=this;return(0,f.Z)(r().mark(function o(){return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:(function(t){console.group("[ion-core] ROUTES[".concat(t.length,"]"));var r,o=n(t);try{var a=function(){var t=r.value,n=[];t.forEach(function(t){return n.push.apply(n,e(t.path))});var o=t.map(function(t){return t.id});console.debug("%c ".concat(b(n)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(o.join(", "),")"))};for(o.s();!(r=o.n()).done;)a()}catch(i){o.e(i)}finally{o.f()}console.groupEnd()})(T(t.el)),function(t){console.group("[ion-core] REDIRECTS[".concat(t.length,"]"));var e,r=n(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;o.to&&console.debug("FROM: ","$c ".concat(b(o.from)),"font-weight: bold"," TO: ","$c ".concat(b(o.to.segments)),"font-weight: bold")}}catch(a){r.e(a)}finally{r.f()}console.groupEnd()}(D(t.el));case 1:case"end":return r.stop()}},o)}))()}},{key:"navChanged",value:function(t){var e=this;return(0,f.Z)(r().mark(function o(){var a,i,u,c,s;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.busy){r.next=2;break}return r.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return r.next=4,x(window.document.body);case 4:if(a=r.sent,i=a.ids,u=a.outlet,c=function(t,e){var r,o=null,a=0,i=n(e);try{for(i.s();!(r=i.n()).done;){var u=r.value,c=C(t,u);c>a&&(o=u,a=c)}}catch(s){i.e(s)}finally{i.f()}return o?o.map(function(e,r){return{id:e.id,path:e.path,params:P(e.params,t[r]&&t[r].params)}}):null}(i,T(e.el)),c){r.next=10;break}return r.abrupt("return",(console.warn("[ion-router] no matching URL for ",i.map(function(t){return t.id})),!1));case 10:if(s=function(t){var e,r=[],o=n(t);try{for(o.s();!(e=o.n()).done;){var a,i=e.value,u=n(i.path);try{for(u.s();!(a=u.n()).done;){var c=a.value;if(":"===c[0]){var s=i.params&&i.params[c.slice(1)];if(!s)return null;r.push(s)}else""!==c&&r.push(c)}}catch(f){u.e(f)}finally{u.f()}}}catch(f){o.e(f)}finally{o.f()}return r}(c),!s){r.next=18;break}return e.setPath(s,t),r.next=15,e.safeWriteNavState(u,c,g,s,null,i.length);case 15:r.t0=!0,r.next=19;break;case 18:r.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 19:return r.abrupt("return",r.t0);case 20:case"end":return r.stop()}},o)}))()}},{key:"onRedirectChanged",value:function(){var t=this.getPath();t&&R(t,D(this.el))&&this.writeNavStateRoot(t,g)}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),g)}},{key:"historyDirection",value:function(){var t,e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));var r=e.history.state,n=this.lastState;return this.lastState=r,r>n||r>=n&&n>0?m:r<n?"back":g}},{key:"writeNavStateRoot",value:function(t,e,n){var o=this;return(0,f.Z)(r().mark(function a(){var i,u,c,s,f,l,h,v;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return i=D(o.el),u=R(t,i),c=null,u&&(s=u.to,f=s.segments,l=s.queryString,o.setPath(f,e,l),c=u.from,t=f),h=T(o.el),v=j(t,h),r.abrupt("return",v?o.safeWriteNavState(document.body,v,e,t,c,0,n):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return r.stop()}},a)}))()}},{key:"safeWriteNavState",value:function(t,e,n,o,a){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=arguments.length>6?arguments[6]:void 0,c=this;return(0,f.Z)(r().mark(function s(){var f,l;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.lock();case 2:return f=r.sent,l=!1,r.prev=4,r.next=7,c.writeNavState(t,e,n,o,a,i,u);case 7:l=r.sent,r.next=13;break;case 10:r.prev=10,r.t0=r.catch(4),console.error(r.t0);case 13:return r.abrupt("return",(f(),l));case 14:case"end":return r.stop()}},s,null,[[4,10]])}))()}},{key:"lock",value:function(){var t=this;return(0,f.Z)(r().mark(function e(){var n,o;return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.waitPromise,t.waitPromise=new Promise(function(t){return o=t}),e.t0=void 0!==n,!e.t0){e.next=6;break}return e.next=6,n;case 6:return e.abrupt("return",o);case 7:case"end":return e.stop()}},e)}))()}},{key:"runGuards",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getPath(),e=arguments.length>1?arguments[1]:void 0,n=this;return(0,f.Z)(r().mark(function o(){var a,i,u,c,s,f;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0===e&&(e=w(n.previousPath).segments),t&&e){r.next=2;break}return r.abrupt("return",!0);case 2:if(a=T(n.el),i=j(e,a),u=i&&i[i.length-1].beforeLeave,r.t0=!u,r.t0){r.next=10;break}return r.next=9,u();case 9:r.t0=r.sent;case 10:if(!1!==(c=r.t0)&&"object"!=typeof c){r.next=13;break}return r.abrupt("return",c);case 13:return s=j(t,a),f=s&&s[s.length-1].beforeEnter,r.abrupt("return",!f||f());case 15:case"end":return r.stop()}},o)}))()}},{key:"writeNavState",value:function(t,e,n,o,a){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=arguments.length>6?arguments[6]:void 0,c=this;return(0,f.Z)(r().mark(function s(){var f,l;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!c.busy){r.next=2;break}return r.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 2:return c.busy=!0,(f=c.routeChangeEvent(o,a))&&c.ionRouteWillChange.emit(f),r.next=7,k(t,e,n,i,!1,u);case 7:return l=r.sent,r.abrupt("return",(c.busy=!1,f&&c.ionRouteDidChange.emit(f),l));case 9:case"end":return r.stop()}},s)}))()}},{key:"setPath",value:function(t,r,n){this.state++,function(t,r,n,o,a,i,u){var c=function(t,e,r){var n=b(t);return e&&(n="#"+n),void 0!==r&&(n+="?"+r),n}([].concat(e(w(r).segments),e(o)),n,u);a===m?t.pushState(i,"",c):t.replaceState(i,"",c)}(window.history,this.root,this.useHash,t,r,this.state,n)}},{key:"getPath",value:function(){var t=this;return function(e,r,n){var o=w(t.root).segments,a=n?e.hash.slice(1):e.pathname;return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return null;return e.length===t.length?[""]:e.slice(t.length)}(o,w(a).segments)}(window.location,0,this.useHash)}},{key:"routeChangeEvent",value:function(t,e){var r=this.previousPath,n=b(t);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:e?b(e):null,to:n}}},{key:"el",get:function(){return(0,l.i)(this)}}]),t}(),U=function(){function e(t){var r=this;i(this,e),(0,l.r)(this,t),this.routerDirection="forward",this.onClick=function(t){(0,p.o)(r.href,t,r.routerDirection,r.routerAnimation)}}return c(e,[{key:"render",value:function(){var e,r=(0,v.b)(this),n={href:this.href,rel:this.rel,target:this.target};return(0,l.h)(l.H,{onClick:this.onClick,class:(0,p.c)(this.color,(e={},t(e,r,!0),t(e,"ion-activatable",!0),e))},(0,l.h)("a",Object.assign({},n),(0,l.h)("slot",null)))}}]),e}();U.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();