"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[8149],{36592:(L,v,p)=>{p.d(v,{Q:()=>b});var D=p(85931),w=p(62208),O=p(77029),j=p(14259);class b{constructor(t=9,n){this.compareMinX=h,this.compareMinY=_,this._toBBox=e=>e,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),A.prune(),C.prune(),f.prune(),R.prune()}all(t){this._all(this.data,t)}search(t,n){let e=this.data;const s=this._toBBox;if(X(t,e))for(A.clear();e;){for(let i=0,r=e.children.length;i<r;i++){const o=e.children[i],l=e.leaf?s(o):o;X(t,l)&&(e.leaf?n(o):g(t,l)?this._all(o,n):A.push(o))}e=A.pop()}}collides(t){let n=this.data;const e=this._toBBox;if(!X(t,n))return!1;for(A.clear();n;){for(let s=0,i=n.children.length;s<i;s++){const r=n.children[s],o=n.leaf?e(r):r;if(X(t,o)){if(n.leaf||g(t,o))return!0;A.push(r)}}n=A.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,s=t.length;e<s;e++)this.insert(t[e]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const e=this.data;this.data=n,n=e}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new T([]),this}remove(t){var l;if(!t)return this;let n,e=this.data,s=null,i=0,r=!1;const o=this._toBBox(t);for(f.clear(),R.clear();e||f.length>0;){if(e||(e=(0,w.j0)(f.pop()),s=f.data[f.length-1],i=null!=(l=R.pop())?l:0,r=!0),e.leaf&&(n=(0,D.cq)(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),f.push(e),this._condense(f),this;r||e.leaf||!g(e,o)?s?(i++,e=s.children[i],r=!1):e=null:(f.push(e),R.push(i),i=0,s=e,e=e.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){var s;let e=t;for(C.clear();e;){if(!0===e.leaf)for(const i of e.children)n(i);else C.pushArray(e.children);e=null!=(s=C.pop())?s:null}}_build(t,n,e,s){const i=e-n+1;let r=this._maxEntries;if(i<=r){const d=new T(t.slice(n,e+1));return Y(d,this._toBBox),d}s||(s=Math.ceil(Math.log(i)/Math.log(r)),r=Math.ceil(i/r**(s-1)));const o=new y([]);o.height=s;const l=Math.ceil(i/r),u=l*Math.ceil(Math.sqrt(r));S(t,n,e,u,this.compareMinX);for(let d=n;d<=e;d+=u){const x=Math.min(d+u-1,e);S(t,d,x,l,this.compareMinY);for(let P=d;P<=x;P+=l){const W=Math.min(P+l-1,x);o.children.push(this._build(t,P,W,s-1))}}return Y(o,this._toBBox),o}_chooseSubtree(t,n,e,s){for(;s.push(n),!0!==n.leaf&&s.length-1!==e;){let i,r=1/0,o=1/0;for(let l=0,u=n.children.length;l<u;l++){const d=n.children[l],x=m(d),P=B(t,d)-x;P<o?(o=P,r=x<r?x:r,i=d):P===o&&x<r&&(r=x,i=d)}n=i||n.children[0]}return n}_insert(t,n,e){const i=e?t:(0,this._toBBox)(t);f.clear();const r=this._chooseSubtree(i,this.data,n,f);for(r.children.push(t),c(r,i);n>=0&&f.data[n].children.length>this._maxEntries;)this._split(f,n),n--;this._adjustParentBBoxes(i,f,n)}_split(t,n){const e=t.data[n],s=e.children.length,i=this._minEntries;this._chooseSplitAxis(e,i,s);const r=this._chooseSplitIndex(e,i,s);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=e.children.splice(r,e.children.length-r),l=e.leaf?new T(o):new y(o);l.height=e.height,Y(e,this._toBBox),Y(l,this._toBBox),n?t.data[n-1].children.push(l):this._splitRoot(e,l)}_splitRoot(t,n){this.data=new y([t,n]),this.data.height=t.height+1,Y(this.data,this._toBBox)}_chooseSplitIndex(t,n,e){let s,i,r;s=i=1/0;for(let o=n;o<=e-n;o++){const l=E(t,0,o,this._toBBox),u=E(t,o,e,this._toBBox),d=I(l,u),x=m(l)+m(u);d<s?(s=d,r=o,i=x<i?x:i):d===s&&x<i&&(i=x,r=o)}return r}_chooseSplitAxis(t,n,e){const s=t.leaf?this.compareMinX:h,i=t.leaf?this.compareMinY:_;this._allDistMargin(t,n,e,s)<this._allDistMargin(t,n,e,i)&&t.children.sort(s)}_allDistMargin(t,n,e,s){t.children.sort(s);const i=this._toBBox,r=E(t,0,n,i),o=E(t,e-n,e,i);let l=M(r)+M(o);for(let u=n;u<e-n;u++){const d=t.children[u];c(r,t.leaf?i(d):d),l+=M(r)}for(let u=e-n-1;u>=n;u--){const d=t.children[u];c(o,t.leaf?i(d):d),l+=M(o)}return l}_adjustParentBBoxes(t,n,e){for(let s=e;s>=0;s--)c(n.data[s],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const s=t.data[n-1],i=s.children;i.splice((0,D.cq)(i,e,i.length,s.indexHint),1)}else this.clear();else Y(e,this._toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function Y(a,t){E(a,0,a.children.length,t,a)}function E(a,t,n,e,s){s||(s=new T([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let i,r=t;r<n;r++)i=a.children[r],c(s,a.leaf?e(i):i);return s}function c(a,t){a.minX=Math.min(a.minX,t.minX),a.minY=Math.min(a.minY,t.minY),a.maxX=Math.max(a.maxX,t.maxX),a.maxY=Math.max(a.maxY,t.maxY)}function h(a,t){return a.minX-t.minX}function _(a,t){return a.minY-t.minY}function m(a){return(a.maxX-a.minX)*(a.maxY-a.minY)}function M(a){return a.maxX-a.minX+(a.maxY-a.minY)}function B(a,t){return(Math.max(t.maxX,a.maxX)-Math.min(t.minX,a.minX))*(Math.max(t.maxY,a.maxY)-Math.min(t.minY,a.minY))}function I(a,t){const n=Math.max(a.minX,t.minX),e=Math.max(a.minY,t.minY),s=Math.min(a.maxX,t.maxX),i=Math.min(a.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,i-e)}function g(a,t){return a.minX<=t.minX&&a.minY<=t.minY&&t.maxX<=a.maxX&&t.maxY<=a.maxY}function X(a,t){return t.minX<=a.maxX&&t.minY<=a.maxY&&t.maxX>=a.minX&&t.maxY>=a.minY}function S(a,t,n,e,s){const i=[t,n];for(;i.length;){const r=(0,w.j0)(i.pop()),o=(0,w.j0)(i.pop());if(r-o<=e)continue;const l=o+Math.ceil((r-o)/e/2)*e;(0,j.q)(a,l,o,r,s),i.push(o,l,l,r)}}const A=new O.Z,C=new O.Z,f=new O.Z,R=new O.Z({deallocator:void 0});class U extends class K{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new D.SO}}class T extends U{constructor(t){super(),this.children=t,this.leaf=!0}}class y extends U{constructor(t){super(),this.children=t,this.leaf=!1}}},28149:(L,v,p)=>{p.r(v),p.d(v,{default:()=>Y});var D=p(15861),w=p(8314),O=p(62208),j=p(36592),b=p(60853);class Y{createIndex(h,_){var m=this;return(0,D.Z)(function*(){const M=new Array;if(!h.vertexAttributes||!h.vertexAttributes.position)return new j.Q;const B=m._createMeshData(h),I=(0,O.pC)(_)?yield _.invoke("createIndexThread",B,{transferList:M}):m.createIndexThread(B).result;return m._createPooledRBush().fromJSON(I)})()}createIndexThread(h){const _=new Float64Array(h.position),m=this._createPooledRBush();return h.components?this._createIndexComponentsThread(m,_,h.components.map(M=>new Uint32Array(M))):this._createIndexAllThread(m,_)}_createIndexAllThread(h,_){const m=new Array(_.length/9);let M=0;for(let B=0;B<_.length;B+=9)m[M++]=E(_,B+0,B+3,B+6);return h.load(m),{result:h.toJSON()}}_createIndexComponentsThread(h,_,m){let M=0;for(const g of m)M+=g.length/3;const B=new Array(M);let I=0;for(const g of m)for(let X=0;X<g.length;X+=3)B[I++]=E(_,3*g[X+0],3*g[X+1],3*g[X+2]);return h.load(B),{result:h.toJSON()}}_createMeshData(h){const _=(h.transform?(0,b.I5)({position:h.vertexAttributes.position,normal:null,tangent:null},h.transform,h.spatialReference).position:h.vertexAttributes.position).buffer;return!h.components||h.components.some(m=>!m.faces)?{position:_}:{position:_,components:h.components.map(m=>m.faces)}}_createPooledRBush(){return new j.Q(9,(0,w.Z)("esri-csp-restrictions")?h=>h:[".minX",".minY",".maxX",".maxY"])}}function E(c,h,_,m){return{minX:Math.min(c[h+0],c[_+0],c[m+0]),maxX:Math.max(c[h+0],c[_+0],c[m+0]),minY:Math.min(c[h+1],c[_+1],c[m+1]),maxY:Math.max(c[h+1],c[_+1],c[m+1]),p0:[c[h+0],c[h+1],c[h+2]],p1:[c[_+0],c[_+1],c[_+2]],p2:[c[m+0],c[m+1],c[m+2]]}}}}]);