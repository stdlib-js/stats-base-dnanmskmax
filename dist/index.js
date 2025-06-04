"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=f(function(D,c){
var b=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(r,a,n,o,u,x,_){var t,v,s,e,i;if(r<=0)return NaN;for(v=o,s=_,i=0;i<r&&(e=a[v],!(e===e&&u[s]===0));i++)v+=n,s+=x;if(i===r)return NaN;for(t=e,i+=1,i;i<r;i++)v+=n,s+=x,!u[s]&&(e=a[v],!b(e)&&(e>t||e===t&&E(e))&&(t=e));return t}c.exports=O
});var y=f(function(F,p){
var d=require('@stdlib/strided-base-stride2offset/dist'),P=m();function Z(r,a,n,o,u){return P(r,a,n,d(r,n),o,u,d(r,u))}p.exports=Z
});var l=f(function(G,k){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=y(),h=m();g(j,"ndarray",h);k.exports=j
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),q,R=z(w(__dirname,"./native.js"));A(R)?q=B:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
