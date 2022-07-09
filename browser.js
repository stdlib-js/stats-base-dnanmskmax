// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,l=o.__lookupGetter__,f=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e};var c=r;function _(e){return e!=e}var p=Number.POSITIVE_INFINITY;function d(e){return 0===e&&1/e===p}function b(e,r,t,n,o){var a,i,u,l,f;if(e<=0)return NaN;for(i=t<0?(1-e)*t:0,u=o<0?(1-e)*o:0,f=0;f<e&&((l=r[i])!=l||0!==n[u]);f++)i+=t,u+=o;if(f===e)return NaN;for(a=l,f+=1;f<e;f++)i+=t,n[u+=o]||_(l=r[i])||(l>a||l===a&&d(l))&&(a=l);return a}function s(e,r,t,n,o,a,i){var u,l,f,c,p;if(e<=0)return NaN;for(l=n,f=i,p=0;p<e&&((c=r[l])!=c||0!==o[f]);p++)l+=t,f+=a;if(p===e)return NaN;for(u=c,p+=1;p<e;p++)l+=t,o[f+=a]||_(c=r[l])||(c>u||c===u&&d(c))&&(u=c);return u}c(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:s}),e.default=b,e.ndarray=s,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dnanmskmax={});
//# sourceMappingURL=browser.js.map
