!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("augmentedjs-next"),require("presentation-request"),require("presentation-storage")):"function"==typeof define&&define.amd?define("presentation-models",["augmentedjs-next","presentation-request","presentation-storage"],e):"object"==typeof exports?exports["presentation-models"]=e(require("augmentedjs-next"),require("presentation-request"),require("presentation-storage")):t["presentation-models"]=e(t.Augmented,t["presentation-request"],t["presentation-storage"])}(this,function(t,e,r){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=42)}([function(t,e,r){"use strict";var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,r){"use strict";var n=r(29)("wks"),o=r(30),i=r(0).Symbol,u="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=n},function(t,e,r){"use strict";var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,r){"use strict";var n=r(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){"use strict";var n=r(11),o=r(27);t.exports=r(6)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){"use strict";t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){"use strict";t.exports=!r(26)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";t.exports={}},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(9),u=r(4),s=r(12),c=function(t,e,r){var a,f,l,h=t&c.F,p=t&c.G,v=t&c.S,d=t&c.P,y=t&c.B,g=t&c.W,m=p?o:o[e]||(o[e]={}),_=m.prototype,x=p?n:v?n[e]:(n[e]||{}).prototype;for(a in p&&(r=e),r)(f=!h&&x&&void 0!==x[a])&&s(m,a)||(l=f?x[a]:r[a],m[a]=p&&"function"!=typeof x[a]?r[a]:y&&f?i(l,n):g&&x[a]==l?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((m.virtual||(m.virtual={}))[a]=l,t&c.R&&_&&!_[a]&&u(_,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){"use strict";var n=r(10);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){"use strict";t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){"use strict";var n=r(3),o=r(51),i=r(52),u=Object.defineProperty;e.f=r(6)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){"use strict";var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,r){"use strict";var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,r){"use strict";var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,r){"use strict";t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){"use strict";t.exports=!0},function(t,e,r){"use strict";var n=r(5),o=r(0).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){"use strict";var n=r(59),o=r(15);t.exports=function(t){return n(o(t))}},function(t,e,r){"use strict";var n=r(29)("keys"),o=r(30);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e,r){"use strict";var n=r(11).f,o=r(12),i=r(1)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){"use strict";var n=r(10);t.exports.f=function(t){return new function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=n(e),this.reject=n(r)}(t)}},function(e,r){e.exports=t},function(t,e,r){"use strict";t.exports=r(44)},function(t,e,r){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(46));e.default=function(t){return function(){var e=t.apply(this,arguments);return new n.default(function(t,r){return function o(i,u){try{var s=e[i](u),c=s.value}catch(t){return void r(t)}if(!s.done)return n.default.resolve(c).then(function(t){o("next",t)},function(t){o("throw",t)});t(c)}("next")})}}},function(t,e,r){"use strict";var n=r(16),o=r(8),i=r(53),u=r(4),s=r(7),c=r(54),a=r(20),f=r(62),l=r(1)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,r,v,d,y,g){c(r,e,v);var m,_,x,P=function(t){if(!h&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},w=e+" Iterator",b="values"==d,S=!1,O=t.prototype,j=O[l]||O["@@iterator"]||d&&O[d],L=j||P(d),E=d?b?P("entries"):L:void 0,M="Array"==e&&O.entries||j;if(M&&(x=f(M.call(new t)))!==Object.prototype&&x.next&&(a(x,w,!0),n||"function"==typeof x[l]||u(x,l,p)),b&&j&&"values"!==j.name&&(S=!0,L=function(){return j.call(this)}),n&&!g||!h&&!S&&O[l]||u(O,l,L),s[e]=L,s[w]=p,d)if(m={values:b?L:P("values"),keys:y?L:P("keys"),entries:E},g)for(_ in m)_ in O||i(O,_,m[_]);else o(o.P+o.F*(h||S),e,m);return m}},function(t,e,r){"use strict";t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";var n=r(14),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){"use strict";var n=r(2),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(16)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){"use strict";var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,r){"use strict";t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){"use strict";var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){"use strict";var n=r(13),o=r(1)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:i?n(e):"Object"==(u=n(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,r){"use strict";var n=r(3),o=r(10),i=r(1)("species");t.exports=function(t,e){var r,u=n(t).constructor;return void 0===u||void 0==(r=n(u)[i])?e:o(r)}},function(t,e,r){"use strict";var n,o,i,u=r(9),s=r(74),c=r(32),a=r(17),f=r(0),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,y=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},_=function(t){m.call(t.data)};h&&p||(h=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return g[++y]=function(){s("function"==typeof t?t:Function(t),e)},n(y),y},p=function(t){delete g[t]},"process"==r(13)(l)?n=function(t){l.nextTick(u(m,t,1))}:d&&d.now?n=function(t){d.now(u(m,t,1))}:v?(i=(o=new v).port2,o.port1.onmessage=_,n=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):n="onreadystatechange"in a("script")?function(t){c.appendChild(a("script")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:h,clear:p}},function(t,e,r){"use strict";t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,r){"use strict";var n=r(3),o=r(5),i=r(21);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},function(t,r){t.exports=e},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(r(23)),o=s(r(24)),i=s(r(22)),u=r(38);function s(t){return t&&t.__esModule?t:{default:t}}e.default=class extends i.default.AbstractCollection{constructor(t,e){super(t,e),e&&e.url?this._url=e.url:this._url=null}get url(){return this._url}set url(t){this._url=t}sync(t,e,r){var i=this;return(0,o.default)(n.default.mark(function o(){var s;return n.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r||(r={}),i._url?r.url=i._url:console.warn("no url?! :/"),!0===i.crossOrigin&&(r.crossDomain=!0),r.xhrFields||(r.xhrFields={withCredentials:!0}),i.mock&&(r.mock=i.mock),n.next=7,(0,u.sync)(t,e,r);case 7:return s=n.sent,n.abrupt("return",s);case 9:case"end":return n.stop()}},o,i)}))()}fetch(t){return this.sync("read",this,t)}save(t){return this.sync("create",this,t)}update(t){return this.sync("update",this,t)}destroy(t){return this.sync("delete",this,t)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(r(39));e.default=class extends n.default{constructor(t,e){super(t,e),e&&e.paginationConfiguration?this.paginationConfiguration=e.paginationConfiguration:this.paginationConfiguration={currentPageParam:"page",pageSizeParam:"per_page"},e&&e.pageSize?this.pageSize=e.pageSize:this.pageSize=20,e&&e.currentPage?this.currentPage=e.currentPage:this.currentPage=1,this.totalPages=1}setPageSize(t){t&&(this.pageSize=t),this.refresh()}setCurrentPage(t){t||(t=1),this.currentPage=t,this.refresh()}setPaginationConfiguration(t){this.paginationConfiguration=t}fetch(t){t=t||{};const e=this.paginationConfiguration,r={};return r[e.currentPageParam]=this.currentPage,r[e.pageSizeParam]=this.pageSize,t.data=r,super.fetch(t)}nextPage(){this.currentPage<this.totalPages&&(this.currentPage=this.currentPage+1,this.refresh())}previousPage(){this.currentPage>0&&(this.currentPage=this.currentPage-1,this.refresh())}goToPage(t){t&&t<this.totalPages&&t>0&&(this.currentPage=t,this.refresh())}firstPage(){this.currentPage=1,this.refresh()}lastPage(){this.currentPage=this.totalPages,this.refresh()}refresh(){this.fetch()}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n={};n.GITHUB=Symbol("github"),n.SOLR=Symbol("solr"),n.DATABASE=Symbol("database"),e.default=n},function(t,e,r){"use strict";var n=a(r(43)),o=a(r(39)),i=a(r(82)),u=a(r(40)),s=a(r(84)),c=a(r(41));function a(t){return t&&t.__esModule?t:{default:t}}t.exports.Model=n.default,t.exports.Collection=o.default,t.exports.LocalStorageCollection=i.default,t.exports.PaginatedCollection=u.default,t.exports.PaginationFactory=s.default,t.exports.PAGINATION_API_TYPE=c.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(r(23)),o=s(r(24)),i=s(r(22)),u=r(38);function s(t){return t&&t.__esModule?t:{default:t}}e.default=class extends i.default.AbstractModel{constructor(t,e,...r){super(t,e,r),this.mock=!1,this.crossOrigin=!1,e&&e.url?this._url=e.url:this._url=null}get url(){return this._url}set url(t){this._url=t}sync(t,e,r){var i=this;return(0,o.default)(n.default.mark(function o(){var s;return n.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r||(r={}),i._url?r.url=i._url:console.warn("no url?! :/"),!0===i.crossOrigin&&(r.crossDomain=!0),r.xhrFields||(r.xhrFields={withCredentials:!0}),i.mock&&(r.mock=i.mock),n.next=7,(0,u.sync)(t,e,r);case 7:return s=n.sent,n.abrupt("return",s);case 9:case"end":return n.stop()}},o,i)}))()}fetch(t){return this.sync("read",this,t)}save(t){return this.sync("create",this,t)}update(t){return this.sync("update",this,t)}destroy(t){return this.sync("delete",this,t)}}},function(t,e,r){"use strict";var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(45),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e,r){"use strict";!function(e){var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",a="object"==typeof t,f=e.regeneratorRuntime;if(f)a&&(t.exports=f);else{(f=e.regeneratorRuntime=a?t.exports:{}).wrap=x;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={},y={};y[u]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==n&&o.call(m,u)&&(y=m);var _=S.prototype=w.prototype=Object.create(y);b.prototype=_.constructor=S,S.constructor=b,S[c]=b.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},f.awrap=function(t){return{__await:t}},O(j.prototype),j.prototype[s]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,r,n){var o=new j(x(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(_),_[c]="Generator",_[u]=function(){return this},_.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],s=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var c=o.call(u,"catchLoc"),a=o.call(u,"finallyLoc");if(c&&a){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function x(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),u=new T(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var s=L(u,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=P(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,u),i}function P(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function w(){}function b(){}function S(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,u){var s=P(t[r],t,n);if("throw"!==s.type){var c=s.arg,a=c.value;return a&&"object"==typeof a&&o.call(a,"__await")?Promise.resolve(a.__await).then(function(t){e("next",t,i,u)},function(t){e("throw",t,i,u)}):Promise.resolve(a).then(function(t){c.value=t,i(c)},u)}u(s.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=P(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:A}}function A(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,r){"use strict";t.exports={default:r(47),__esModule:!0}},function(t,e,r){"use strict";r(48),r(49),r(64),r(68),r(80),r(81),t.exports=r(2).Promise},function(t,e,r){"use strict"},function(t,e,r){"use strict";var n=r(50)(!0);r(25)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){"use strict";var n=r(14),o=r(15);t.exports=function(t){return function(e,r){var i,u,s=String(o(e)),c=n(r),a=s.length;return c<0||c>=a?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===a||(u=s.charCodeAt(c+1))<56320||u>57343?t?s.charAt(c):i:t?s.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,r){"use strict";t.exports=!r(6)&&!r(26)(function(){return 7!=Object.defineProperty(r(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";var n=r(5);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){"use strict";t.exports=r(4)},function(t,e,r){"use strict";var n=r(55),o=r(27),i=r(20),u={};r(4)(u,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(u,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){"use strict";var n=r(3),o=r(56),i=r(31),u=r(19)("IE_PROTO"),s=function(){},c=function(){var t,e=r(17)("iframe"),n=i.length;for(e.style.display="none",r(32).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[i[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(s.prototype=n(t),r=new s,s.prototype=null,r[u]=t):r=c(),void 0===e?r:o(r,e)}},function(t,e,r){"use strict";var n=r(11),o=r(3),i=r(57);t.exports=r(6)?Object.defineProperties:function(t,e){o(t);for(var r,u=i(e),s=u.length,c=0;s>c;)n.f(t,r=u[c++],e[r]);return t}},function(t,e,r){"use strict";var n=r(58),o=r(31);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){"use strict";var n=r(12),o=r(18),i=r(60)(!1),u=r(19)("IE_PROTO");t.exports=function(t,e){var r,s=o(t),c=0,a=[];for(r in s)r!=u&&n(s,r)&&a.push(r);for(;e.length>c;)n(s,r=e[c++])&&(~i(a,r)||a.push(r));return a}},function(t,e,r){"use strict";var n=r(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){"use strict";var n=r(18),o=r(28),i=r(61);t.exports=function(t){return function(e,r,u){var s,c=n(e),a=o(c.length),f=i(u,a);if(t&&r!=r){for(;a>f;)if((s=c[f++])!=s)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){"use strict";var n=r(14),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){"use strict";var n=r(12),o=r(63),i=r(19)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,r){"use strict";var n=r(15);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";r(65);for(var n=r(0),o=r(4),i=r(7),u=r(1)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var a=s[c],f=n[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,r){"use strict";var n=r(66),o=r(67),i=r(7),u=r(18);t.exports=r(25)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e,r){"use strict";t.exports=function(){}},function(t,e,r){"use strict";t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){"use strict";var n,o,i,u,s=r(16),c=r(0),a=r(9),f=r(33),l=r(8),h=r(5),p=r(10),v=r(69),d=r(70),y=r(34),g=r(35).set,m=r(75)(),_=r(21),x=r(36),P=r(76),w=r(37),b=c.TypeError,S=c.process,O=S&&S.versions,j=O&&O.v8||"",L=c.Promise,E="process"==f(S),M=function(){},T=o=_.f,k=!!function(){try{var t=L.resolve(1),e=(t.constructor={})[r(1)("species")]=function(t){t(M,M)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof e&&0!==j.indexOf("6.6")&&-1===P.indexOf("Chrome/66")}catch(t){}}(),A=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},C=function(t,e){if(!t._n){t._n=!0;var r=t._c;m(function(){for(var n=t._v,o=1==t._s,i=0,u=function(e){var r,i,u,s=o?e.ok:e.fail,c=e.resolve,a=e.reject,f=e.domain;try{s?(o||(2==t._h&&I(t),t._h=1),!0===s?r=n:(f&&f.enter(),r=s(n),f&&(f.exit(),u=!0)),r===e.promise?a(b("Promise-chain cycle")):(i=A(r))?i.call(r,c,a):c(r)):a(n)}catch(t){f&&!u&&f.exit(),a(t)}};r.length>i;)u(r[i++]);t._c=[],t._n=!1,e&&!t._h&&F(t)})}},F=function(t){g.call(c,function(){var e,r,n,o=t._v,i=R(t);if(i&&(e=x(function(){E?S.emit("unhandledRejection",o,t):(r=c.onunhandledrejection)?r({promise:t,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),t._h=E||R(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},I=function(t){g.call(c,function(){var e;E?S.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},G=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),C(e,!0))},N=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw b("Promise can't be resolved itself");(e=A(t))?m(function(){var n={_w:r,_d:!1};try{e.call(t,a(N,n,1),a(G,n,1))}catch(t){G.call(n,t)}}):(r._v=t,r._s=1,C(r,!1))}catch(t){G.call({_w:r,_d:!1},t)}}};k||(L=function(t){v(this,L,"Promise","_h"),p(t),n.call(this);try{t(a(N,this,1),a(G,this,1))}catch(t){G.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(77)(L.prototype,{then:function(t,e){var r=T(y(this,L));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=E?S.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&C(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new n;this.promise=t,this.resolve=a(N,t,1),this.reject=a(G,t,1)},_.f=T=function(t){return t===L||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!k,{Promise:L}),r(20)(L,"Promise"),r(78)("Promise"),u=r(2).Promise,l(l.S+l.F*!k,"Promise",{reject:function(t){var e=T(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(s||!k),"Promise",{resolve:function(t){return w(s&&this===u?L:this,t)}}),l(l.S+l.F*!(k&&r(79)(function(t){L.all(t).catch(M)})),"Promise",{all:function(t){var e=this,r=T(e),n=r.resolve,o=r.reject,i=x(function(){var r=[],i=0,u=1;d(t,!1,function(t){var s=i++,c=!1;r.push(void 0),u++,e.resolve(t).then(function(t){c||(c=!0,r[s]=t,--u||n(r))},o)}),--u||n(r)});return i.e&&o(i.v),r.promise},race:function(t){var e=this,r=T(e),n=r.reject,o=x(function(){d(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return o.e&&n(o.v),r.promise}})},function(t,e,r){"use strict";t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,e,r){"use strict";var n=r(9),o=r(71),i=r(72),u=r(3),s=r(28),c=r(73),a={},f={},l=t.exports=function(t,e,r,l,h){var p,v,d,y,g=h?function(){return t}:c(t),m=n(r,l,e?2:1),_=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(p=s(t.length);p>_;_++)if((y=e?m(u(v=t[_])[0],v[1]):m(t[_]))===a||y===f)return y}else for(d=g.call(t);!(v=d.next()).done;)if((y=o(d,m,v.value,e))===a||y===f)return y};l.BREAK=a,l.RETURN=f},function(t,e,r){"use strict";var n=r(3);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){"use strict";var n=r(7),o=r(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},function(t,e,r){"use strict";var n=r(33),o=r(1)("iterator"),i=r(7);t.exports=r(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){"use strict";var n=r(0),o=r(35).set,i=n.MutationObserver||n.WebKitMutationObserver,u=n.process,s=n.Promise,c="process"==r(13)(u);t.exports=function(){var t,e,r,a=function(){var n,o;for(c&&(n=u.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(c)r=function(){u.nextTick(a)};else if(!i||n.navigator&&n.navigator.standalone)if(s&&s.resolve){var f=s.resolve(void 0);r=function(){f.then(a)}}else r=function(){o.call(n,a)};else{var l=!0,h=document.createTextNode("");new i(a).observe(h,{characterData:!0}),r=function(){h.data=l=!l}}return function(n){var o={fn:n,next:void 0};e&&(e.next=o),t||(t=o,r()),e=o}}},function(t,e,r){"use strict";var n=r(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,r){"use strict";var n=r(4);t.exports=function(t,e,r){for(var o in e)r&&t[o]?t[o]=e[o]:n(t,o,e[o]);return t}},function(t,e,r){"use strict";var n=r(0),o=r(2),i=r(11),u=r(6),s=r(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:n[t];u&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,r){"use strict";var n=r(1)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],u=i[n]();u.next=function(){return{done:r=!0}},i[n]=function(){return u},t(i)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(8),o=r(2),i=r(0),u=r(34),s=r(37);n(n.P+n.R,"Promise",{finally:function(t){var e=u(this,o.Promise||i.Promise),r="function"==typeof t;return this.then(r?function(r){return s(e,t()).then(function(){return r})}:t,r?function(r){return s(e,t()).then(function(){throw r})}:t)}})},function(t,e,r){"use strict";var n=r(8),o=r(21),i=r(36);n(n.S,"Promise",{try:function(t){var e=o.f(this),r=i(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(r(22)),o=r(83);const i="augmented.localstorage.collection",u=`${i}.key`;e.default=class extends n.default.AbstractCollection{constructor(t,e){super(t,e),this._key=u,this._persist=!1,this._storage=null,e&&e.persist&&(this._persist=e.persist),e&&e.key&&(this._key=e.key),this._storage=o.LocalStorageFactory.getStorage(this._persist,i)}initialize(t){}init(t){}fetch(t){return this.sync("read",this,t)}save(t){return this.sync("create",this,t)}update(t){return this.sync("update",this,t)}destroy(t){return this.sync("delete",this,t)}sync(t,e,r){let n={};try{r||(r={}),"create"===t||"update"===t?(n=this.toJSON(),this._storage.setItem(this._key,n)):"delete"===t?this._storage.removeItem(this._key):(n=this._storage.getItem(this._key),this.reset(n))}catch(t){throw console.error(t),t}return n}}},function(t,e){t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(r(41)),o=i(r(40));function i(t){return t&&t.__esModule?t:{default:t}}e.default=class{constructor(){this.type=n.default}static getPaginatedCollection(t,e,r){const i=e||{};let u=null;return t||(t=n.default.GITHUB),t===n.default.GITHUB?(u=new o.default(i,r)).setPaginationConfiguration({currentPageParam:"page",pageSizeParam:"per_page"}):t===n.default.SOLR?(u=new o.default(i,r)).setPaginationConfiguration({currentPageParam:"start",pageSizeParam:"rows"}):t===n.default.DATABASE&&(u=new o.default(i,r)).setPaginationConfiguration({currentPageParam:"offset",pageSizeParam:"limit"}),u}}}])});
//# sourceMappingURL=presentation-models.js.map