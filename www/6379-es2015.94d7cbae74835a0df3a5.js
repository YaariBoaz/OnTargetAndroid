(self.webpackChunkonTarget=self.webpackChunkonTarget||[]).push([[6379],{66379:function(e,t,n){"use strict";n.r(t),n.d(t,{FileSharerPluginWeb:function(){return s}});var o=n(34553),a=n(68384),r=n(49457);class i{static toByteArray(e){const t=atob(e),n=new Array(t.length);for(let o=0;o<t.length;o++)n[o]=t.charCodeAt(o);return new Uint8Array(n)}}class s extends a.Uw{share(e){return(0,o.Z)(function*(){return new Promise((t,n)=>{e.base64Data&&0!=e.base64Data.length?e.filename&&0!=e.filename.length?(!e.contentType||0==e.contentType.length)&&n(new Error("ERR_PARAM_NO_CONTENT_TYPE")):n(new Error("ERR_PARAM_NO_FILENAME")):n(new Error("ERR_PARAM_NO_DATA"));let o=new Blob([i.toByteArray(e.base64Data)],{type:e.contentType});r.saveAs(o,e.filename),t()})})()}}},49457:function(e,t){var n,o;void 0!==(o="function"==typeof(n=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){i(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,r=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(e,r,i){var s=a.URL||a.webkitURL,l=document.createElement("a");l.download=r=r||e.name||"download",l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?o(l):n(l.href)?t(e,r,i):o(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(l.href)},4e4),setTimeout(function(){o(l)},0))}:"msSaveOrOpenBlob"in navigator?function(e,a,r){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,r),a);else if(n(e))t(e,a,r);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout(function(){o(i)})}}:function(e,n,o,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var s="application/octet-stream"===e.type,l=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||s&&l||r)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},u.readAsDataURL(e)}else{var f=a.URL||a.webkitURL,d=f.createObjectURL(e);i?i.location=d:location.href=d,i=null,setTimeout(function(){f.revokeObjectURL(d)},4e4)}});a.saveAs=i.saveAs=i,e.exports=i})?n.apply(t,[]):n)&&(e.exports=o)}}]);