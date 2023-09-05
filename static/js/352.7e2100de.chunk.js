/*! For license information please see 352.7e2100de.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[352],{1687:function(t,n,r){r.d(n,{Mc:function(){return f},eH:function(){return p},oJ:function(){return d},vw:function(){return h},wr:function(){return s}});var e=r(1413),o=r(5861),i=r(4569),a=r.n(i);function c(){c=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,r){return t[n]=r}}function h(t,n,r,e){var i=n&&n.prototype instanceof y?n:y,a=Object.create(i.prototype),c=new G(e||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",d="executing",v="completed",g={};function y(){}function m(){}function x(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(S([])));j&&j!==r&&e.call(j,a)&&(w=j);var L=x.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&e.call(s,"__await")?n.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,r,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=Z(c,e);if(u){if(u===g)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var l=f(n,r,e);if("normal"===l.type){if(o=e.done?v:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o=v,e.method="throw",e.arg=l.arg)}}}function Z(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,Z(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),g;var i=f(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(n){if(n||""===n){var r=n[a];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return m.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=s(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,u,(function(){return this})),n.AsyncIterator=_,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new _(h(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),s(L,l,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=S,G.prototype={constructor:G,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),l=e.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:S(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),g}},n}a().defaults.baseURL="https://api.themoviedb.org/3";var u="300c337896282f66953f2120fd2615e0",l=function(){var t=(0,o.Z)(c().mark((function t(n){var r,o,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},t.prev=1,t.next=4,a().get(n,{params:(0,e.Z)({api_key:u},r)});case 4:return o=t.sent,t.abrupt("return",o.data);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}(),s=function(){return l("/trending/all/day")},h=function(t){return l("/search/movie",{query:t})},f=function(t){return l("/movie/".concat(t))},p=function(t){return l("/movie/".concat(t,"/credits"))},d=function(t){return l("/movie/".concat(t,"/reviews"))}},117:function(t,n,r){r.d(n,{j:function(){return l}});var e=r(5861),o=r(9439),i=r(2791),a=r(7689),c=r(5218);function u(){u=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,r){return t[n]=r}}function h(t,n,r,e){var i=n&&n.prototype instanceof y?n:y,a=Object.create(i.prototype),c=new G(e||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",d="executing",v="completed",g={};function y(){}function m(){}function x(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(S([])));j&&j!==r&&e.call(j,a)&&(w=j);var L=x.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&e.call(s,"__await")?n.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,r,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=Z(c,e);if(u){if(u===g)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var l=f(n,r,e);if("normal"===l.type){if(o=e.done?v:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(o=v,e.method="throw",e.arg=l.arg)}}}function Z(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,Z(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),g;var i=f(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(n){if(n||""===n){var r=n[a];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return m.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=s(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,c,(function(){return this})),n.AsyncIterator=_,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new _(h(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),s(L,l,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=S,G.prototype={constructor:G,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),l=e.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:S(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),g}},n}function l(t){var n=(0,a.UO)().movieId,r=(0,i.useState)(null),l=(0,o.Z)(r,2),s=l[0],h=l[1],f=(0,i.useState)(!1),p=(0,o.Z)(f,2),d=p[0],v=p[1],g=(0,i.useState)(null),y=(0,o.Z)(g,2),m=y[0],x=y[1];return(0,i.useEffect)((function(){var r=!0;function o(){return(o=(0,e.Z)(u().mark((function e(){var o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,t(n);case 4:o=e.sent,r&&(h(o),v(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r&&(c.Am.error("Something wrong with your request, go back and try it later."),x(e.t0),v(!1));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return function(){o.apply(this,arguments)}(),function(){r=!1}}),[n,t]),{data:s,loading:d,error:m}}},8352:function(t,n,r){r.r(n),r.d(n,{default:function(){return R}});var e,o,i,a,c,u,l,s,h,f,p,d,v,g,y,m,x=r(168),w=r(2791),b=r(7689),j=r(1087),L=r(9126),E=r(1687),_=r(117),k=r(5867),Z=r(7692),O=k.ZP.div(e||(e=(0,x.Z)(["\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),P=k.ZP.a(o||(o=(0,x.Z)(["\n  display: block;\n  position: relative;\n  padding-bottom: 40%;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 200px;\n    background: linear-gradient(\n      to bottom,\n      rgba(30, 31, 33, 0.9) 0,\n      rgba(30, 31, 33, 0) 100%\n    );\n  }\n"]))),G=k.ZP.img(i||(i=(0,x.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  object-fit: cover;\n"]))),S=k.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: relative;\n  overflow: hidden;\n  padding-top: 82px;\n  box-sizing: border-box;\n  height: 76vh;\n  max-height: 56.25vw;\n  min-height: 450px;\n  margin-bottom: 40px;\n"]))),N=k.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  z-index: 10;\n  color: #fff;\n  padding: 10vw 40px 0;\n  background: linear-gradient(\n    to bottom,\n    rgba(30, 31, 33, 0) 0%,\n    rgba(30, 31, 33, 0.8) 40%,\n    rgba(30, 31, 33, 1) 100%\n  );\n"]))),F=k.ZP.div(u||(u=(0,x.Z)(["\n  position: relative;\n  flex-shrink: 0;\n  margin-right: 2.5vw;\n  height: 18vw;\n  width: 12vw;\n  background: rgba(255, 255, 255, 0.05);\n  img {\n    display: block;\n    height: 100%;\n    width: 100%;\n  }\n"]))),T=k.ZP.div(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 2vw 0;\n"]))),z=k.ZP.h2(s||(s=(0,x.Z)(["\n  font-size: 48px;\n"]))),I=k.ZP.div(h||(h=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  font-size: 24px;\n"]))),A=(k.ZP.span(f||(f=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n"]))),k.ZP.p(p||(p=(0,x.Z)(["\n  font-size: 24px;\n  line-height: 30px;\n  max-width: 800px;\n"])))),Y=r(184),C="https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";function M(t){var n=t.movie,r=n.backdrop_path?"https://image.tmdb.org/t/p/original/".concat(n.backdrop_path):C,e=n.poster_path?"https://image.tmdb.org/t/p/original/".concat(n.poster_path):C;var o=function(t){var n=Math.floor(t/60),r=t%60;return"".concat(n,"hr ").concat(r,"min")}(n.runtime);return(0,Y.jsxs)(S,{children:[(0,Y.jsx)(O,{children:(0,Y.jsx)(P,{children:(0,Y.jsx)(G,{src:r,alt:n.original_title})})}),(0,Y.jsxs)(N,{children:[(0,Y.jsx)(F,{children:(0,Y.jsx)("img",{src:e,alt:n.original_title})}),(0,Y.jsxs)(T,{children:[(0,Y.jsx)(z,{children:n.title}),(0,Y.jsxs)(I,{children:[(0,Y.jsx)("span",{children:n.release_date?n.release_date.substring(0,4):""}),(0,Y.jsx)("span",{children:o}),(0,Y.jsx)(Z.hrW,{size:"42",fill:"white"}),(0,Y.jsx)("span",{children:n.vote_average.toFixed(1)})]}),(0,Y.jsx)(A,{children:n.overview})]})]})]})}var R=function(){var t,n,r=(0,_.j)(E.Mc),e=r.data,o=r.error;console.log(e);var i=(0,b.TH)(),a=(0,w.useRef)(null!==(t=null===(n=i.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/");return(0,Y.jsxs)(q,{children:[(0,Y.jsx)(U,{to:a.current,children:(0,Y.jsxs)(H,{children:[(0,Y.jsx)(L.aEb,{}),(0,Y.jsx)("p",{children:"Go back"})]})}),e&&(0,Y.jsx)("div",{children:(0,Y.jsx)(M,{movie:e})}),o?(0,Y.jsx)(Y.Fragment,{}):(0,Y.jsx)(J,{children:(0,Y.jsxs)(W,{children:[(0,Y.jsx)("li",{children:(0,Y.jsx)(U,{to:"./cast",children:"Cast"})}),(0,Y.jsx)("li",{children:(0,Y.jsx)(U,{to:"./reviews",children:"Reviews"})})]})}),(0,Y.jsx)(w.Suspense,{fallback:(0,Y.jsx)(Y.Fragment,{children:"Loading subpage..."}),children:(0,Y.jsx)(b.j3,{})})]})},q=k.ZP.div(d||(d=(0,x.Z)(["\n  color: #fff;\n"]))),H=k.ZP.div(v||(v=(0,x.Z)(["\n  position: absolute;\n  top: 20px;\n  width: 80px;\n  z-index: 14;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #df0912;\n  background-color: #df0912;\n\n  border-radius: 5px;\n  padding: 5px;\n  gap: 5px;\n  font-size: 14px;\n  margin-left: 40px;\n  color: #fff;\n"]))),U=(0,k.ZP)(j.OL)(g||(g=(0,x.Z)(["\n  font-size: 34px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: #fff;\n  font-weight: 500;\n  position: relative;\n\n  &.active {\n    color: #df0912;\n\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -20px;\n      left: 0;\n      width: 100%;\n      height: 4px;\n      background-color: #df0912;\n    }\n  }\n"]))),J=k.ZP.div(y||(y=(0,x.Z)(["\n  margin-bottom: 20px;\n  padding-inline: 40px;\n"]))),W=k.ZP.ul(m||(m=(0,x.Z)(["\n  display: flex;\n  gap: 30px;\n"])))}}]);
//# sourceMappingURL=352.7e2100de.chunk.js.map