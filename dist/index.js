"use strict";var q=function(i,n){return function(){return n||i((n={exports:{}}).exports,n),n.exports}};var p=q(function(D,x){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),_=require('@stdlib/math-base-assert-is-positive-zero/dist');function E(i,n,o,m,s){var v,t,a,r,e;if(i<=0)return NaN;for(o<0?t=(1-i)*o:t=0,s<0?a=(1-i)*s:a=0,e=0;e<i&&(r=n[t],!(r===r&&m[a]===0));e++)t+=o,a+=s;if(e===i)return NaN;for(v=r,e+=1,e;e<i;e++)t+=o,a+=s,!m[a]&&(r=n[t],!Z(r)&&(r>v||r===v&&_(r))&&(v=r));return v}x.exports=E
});var y=q(function(F,l){
var O=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-assert-is-positive-zero/dist');function g(i,n,o,m,s,v,t){var a,r,e,u,f;if(i<=0)return NaN;for(r=m,e=t,f=0;f<i&&(u=n[r],!(u===u&&s[e]===0));f++)r+=o,e+=v;if(f===i)return NaN;for(a=u,f+=1,f;f<i;f++)r+=o,e+=v,!s[e]&&(u=n[r],!O(u)&&(u>a||u===a&&d(u))&&(a=u));return a}l.exports=g
});var P=q(function(G,b){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=p(),k=y();h(j,"ndarray",k);b.exports=j
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=P(),c,R=z(w(__dirname,"./native.js"));A(R)?c=B:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
