// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r};var c=e;function f(r){return r!=r}var _=Number.POSITIVE_INFINITY;function p(r){return 0===r&&1/r===_}function b(r,e,t,n,o){var a,u,i,l,c;if(r<=0)return NaN;for(u=t<0?(1-r)*t:0,i=o<0?(1-r)*o:0,c=0;c<r&&((l=e[u])!=l||0!==n[i]);c++)u+=t,i+=o;if(c===r)return NaN;for(a=l,c+=1;c<r;c++)u+=t,n[i+=o]||f(l=e[u])||(l>a||l===a&&p(l))&&(a=l);return a}function y(r,e,t,n,o,a,u){var i,l,c,_,b;if(r<=0)return NaN;for(l=n,c=u,b=0;b<r&&((_=e[l])!=_||0!==o[c]);b++)l+=t,c+=a;if(b===r)return NaN;for(i=_,b+=1;b<r;b++)l+=t,o[c+=a]||f(_=e[l])||(_>i||_===i&&p(_))&&(i=_);return i}c(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:y});export{b as default,y as ndarray};
//# sourceMappingURL=mod.js.map
