"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[8967],{53023:(Q,D,i)=>{i.d(D,{hN:()=>K,P0:()=>N,cW:()=>P});var G=i(15861),Z=i(26584),x=i(33190),W=i(11519),v=i(91179),O=i(37053);function R(s,n){return s?n?4:3:n?3:2}function y(s,n,E,T,t){if(!s)return!1;const r=R(n,E),{coords:l,lengths:h}=s;let u=!1,p=0;for(const g of h)u=I(u,l,r,p,g,T,t),p+=g*r;return u}function I(s,n,E,T,t,r,l){let h=s,u=T;for(let p=T,g=T+t*E;p<g;p+=E){u=p+E,u===g&&(u=T);const f=n[p],A=n[p+1],J=n[u],w=n[u+1];(A<l&&w>=l||w<l&&A>=l)&&f+(l-A)/(w-A)*(J-f)<r&&(h=!h)}return h}var M=i(82054),_=i(88071),U=i(82959),C=i(6185);const j="feature-store:unsupported-query",V={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},L_spatialRelationship={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},L_queryGeometry={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},L_layerGeometry={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function B(s){return!0===L_spatialRelationship[s]}function e(s){return!0===L_queryGeometry[(0,v.Ji)(s)]}function o(s){return!0===L_layerGeometry[s]}function P(s,n,E,T,t){if((0,v.oU)(n)&&"esriGeometryPoint"===E&&("esriSpatialRelIntersects"===s||"esriSpatialRelContains"===s)){const r=(0,M.Uy)(new _.Z,n,!1,!1);return Promise.resolve(l=>function a(s,n,E,T){return y(s,n,E,T.coords[0],T.coords[1])}(r,!1,!1,l))}if((0,v.oU)(n)&&"esriGeometryMultipoint"===E){const r=(0,M.Uy)(new _.Z,n,!1,!1);if("esriSpatialRelContains"===s)return Promise.resolve(l=>function m(s,n,E,T,t,r){const l=R(t,r),{coords:h,lengths:u}=T;if(!u)return!1;for(let p=0,g=0;p<u.length;p++,g+=l)if(!y(s,n,E,h[g],h[g+1]))return!1;return!0}(r,!1,!1,l,T,t))}if((0,v.YX)(n)&&"esriGeometryPoint"===E&&("esriSpatialRelIntersects"===s||"esriSpatialRelContains"===s))return Promise.resolve(r=>(0,x.aV)(n,(0,C.Op)(E,T,t,r)));if((0,v.YX)(n)&&"esriGeometryMultipoint"===E&&"esriSpatialRelContains"===s)return Promise.resolve(r=>(0,x.lQ)(n,(0,C.Op)(E,T,t,r)));if((0,v.YX)(n)&&"esriSpatialRelIntersects"===s){const r=function b(s){return"mesh"===s?W.h_:(0,W.IY)(s)}(E);return Promise.resolve(l=>r(n,(0,C.Op)(E,T,t,l)))}return function S(){return Promise.all([i.e(4918),i.e(8592)]).then(i.bind(i,32825))}().then(r=>{const l=r[V[s]].bind(null,n.spatialReference,n);return h=>l((0,C.Op)(E,T,t,h))})}function N(s,n,E){return F.apply(this,arguments)}function F(){return(F=(0,G.Z)(function*(s,n,E){const{spatialRel:T,geometry:t}=s;if(t){if(!B(T))throw new Z.Z(j,"Unsupported query spatial relationship",{query:s});if((0,O.JY)(t.spatialReference)&&(0,O.JY)(E)){if(!e(t))throw new Z.Z(j,"Unsupported query geometry type",{query:s});if(!o(n))throw new Z.Z(j,"Unsupported layer geometry type",{query:s});if(s.outSR)return(0,U._W)(s.geometry&&s.geometry.spatialReference,s.outSR)}}})).apply(this,arguments)}function K(s){if((0,v.YX)(s))return!0;if((0,v.oU)(s)){for(const n of s.rings)if(5!==n.length||n[0][0]!==n[1][0]||n[0][0]!==n[4][0]||n[2][0]!==n[3][0]||n[0][1]!==n[3][1]||n[0][1]!==n[4][1]||n[1][1]!==n[2][1])return!1;return!0}return!1}},76530:(Q,D,i)=>{function G(v,O){if(!v)return null;const R=O.featureAdapter,{startTimeField:a,endTimeField:m}=v;let y=Number.POSITIVE_INFINITY,I=Number.NEGATIVE_INFINITY;if(a&&m)O.forEach(M=>{const _=R.getAttribute(M,a),U=R.getAttribute(M,m);null==_||isNaN(_)||(y=Math.min(y,_)),null==U||isNaN(U)||(I=Math.max(I,U))});else{const M=a||m;O.forEach(_=>{const U=R.getAttribute(_,M);null==U||isNaN(U)||(y=Math.min(y,U),I=Math.max(I,U))})}return{start:y,end:I}}function Z(v,O,R){if(!O||!v)return null;const{startTimeField:a,endTimeField:m}=v;if(!a&&!m)return null;const{start:y,end:I}=O;return null===y&&null===I?null:void 0===y&&void 0===I?()=>!1:a&&m?function x(v,O,R,a,m){return null!=a&&null!=m?y=>{const I=v.getAttribute(y,O),M=v.getAttribute(y,R);return(null==I||I<=m)&&(null==M||M>=a)}:null!=a?y=>{const I=v.getAttribute(y,R);return null==I||I>=a}:null!=m?y=>{const I=v.getAttribute(y,O);return null==I||I<=m}:void 0}(R,a,m,y,I):function W(v,O,R,a){return null!=R&&null!=a&&R===a?m=>v.getAttribute(m,O)===R:null!=R&&null!=a?m=>{const y=v.getAttribute(m,O);return y>=R&&y<=a}:null!=R?m=>v.getAttribute(m,O)>=R:null!=a?m=>v.getAttribute(m,O)<=a:void 0}(R,a||m,y,I)}i.d(D,{R:()=>G,y:()=>Z})},6185:(Q,D,i)=>{i.d(D,{EG:()=>V,Op:()=>B,S2:()=>n,Up:()=>e,j6:()=>S,vF:()=>M});var G=i(15861),Z=i(2076),x=i(62208),W=i(16730),b=i(15176),v=i(91179),O=i(13924),R=i(37053),a=i(82054),m=i(88071),y=i(82959);const I=new Z.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),M=Object.freeze({}),_=new m.Z,U=new m.Z,C=new m.Z,j={esriGeometryPoint:a.fQ,esriGeometryPolyline:a.J6,esriGeometryPolygon:a.eG,esriGeometryMultipoint:a.Iv};function V(t,r,l,h=t.hasZ,u=t.hasM){if((0,x.Wi)(r))return null;const p=t.hasZ&&h,g=t.hasM&&u;if(l){const f=(0,a.Nh)(C,r,t.hasZ,t.hasM,"esriGeometryPoint",l,h,u);return(0,a.fQ)(f,p,g)}return(0,a.fQ)(r,p,g)}function B(t,r,l,h,u,p,g=r,f=l){const A=r&&g,J=l&&f,w=(0,x.pC)(h)?"coords"in h?h:h.geometry:null;if((0,x.Wi)(w))return null;if(u){let z=(0,a.zj)(U,w,r,l,t,u,g,f);return p&&(z=(0,a.Nh)(C,z,A,J,t,p)),j[t](z,A,J)}if(p){const z=(0,a.Nh)(C,w,r,l,t,p,g,f);return j[t](z,A,J)}return(0,a.hY)(_,w,r,l,g,f),j[t](_,A,J)}function e(t,r,l){return o.apply(this,arguments)}function o(){return(o=(0,G.Z)(function*(t,r,l){const{outFields:h,orderByFields:u,groupByFieldsForStatistics:p,outStatistics:g}=t;if(h)for(let f=0;f<h.length;f++)h[f]=h[f].trim();if(u)for(let f=0;f<u.length;f++)u[f]=u[f].trim();if(p)for(let f=0;f<p.length;f++)p[f]=p[f].trim();if(g)for(let f=0;f<g.length;f++)g[f].onStatisticField&&(g[f].onStatisticField=g[f].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),S(t,r,l)})).apply(this,arguments)}function S(t,r,l){return P.apply(this,arguments)}function P(){return(P=(0,G.Z)(function*(t,r,l){if(!t)return null;let{where:h}=t;if(t.where=h=h&&h.trim(),(!h||/^1 *= *1$/.test(h)||r&&r===h)&&(t.where=null),!t.geometry)return t;let u=yield N(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:A}=t.geometry;u=(0,b.aO)(u),u.spatialReference=A}t.geometry=u,yield(0,y._W)(u.spatialReference,l);const p=(yield(0,O.aX)((0,v.im)(u)))[0];if((0,x.Wi)(p))throw M;const g=p.toJSON(),f=yield(0,y.iV)(g,g.spatialReference,l);if(!f)throw M;return f.spatialReference=l,t.geometry=f,t})).apply(this,arguments)}function N(t){return F.apply(this,arguments)}function F(){return(F=(0,G.Z)(function*(t){const{geometry:r,distance:l,units:h}=t;if(null==l||"vertexAttributes"in r)return r;const u=r.spatialReference,p=h?I.fromJSON(h):(0,W.qE)(u),g=u&&((0,R.sT)(u)||(0,R.sS)(u))?r:yield(0,y._W)(u,R.Zn).then(()=>(0,y.iV)(r,R.Zn));return(yield K())(g.spatialReference,g,l,p)})).apply(this,arguments)}function K(){return s.apply(this,arguments)}function s(){return(s=(0,G.Z)(function*(){return(yield Promise.all([i.e(4918),i.e(8592)]).then(i.bind(i,32825))).geodesicBuffer})).apply(this,arguments)}function n(t){return t&&E in t?JSON.parse(JSON.stringify(t,T)):t}const E="_geVersion",T=(t,r)=>t!==E?r:void 0},8967:(Q,D,i)=>{i.r(D),i.d(D,{default:()=>L});var G=i(15861),Z=i(26584),x=i(63290),W=i(62208),b=i(65401),v=i(32442),O=i(53023),R=i(76530),a=i(6185),m=i(84952),y=i(55746);const I=x.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),M={getAttribute:(B,e)=>B.field(e)};function U(){return(U=(0,G.Z)(function*(B,e){const o=yield i.e(410).then(i.bind(i,10410));try{const S=o.WhereClause.create(B,e);if(!S.isStandardized){const P=new Z.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",S);I.error(P)}return P=>{const N=P.readArcadeFeature();return S.testFeature(N,M)}}catch(S){return I.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",B),P=>!0}})).apply(this,arguments)}const C=x.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");class L{constructor(e){this._geometryBounds=(0,b.Ue)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,o)=>{this._idToVisibility.set(o,0)})}setKnownIds(e){for(const o of e)this._idToVisibility.set(o,1)}setTrue(e){const o=[],S=[],P=new Set(e);return this._idToVisibility.forEach((N,F)=>{const K=!!(1&this._idToVisibility.get(F)),s=P.has(F);!K&&s?o.push(F):K&&!s&&S.push(F),this._idToVisibility.set(F,s?3:0)}),{show:o,hide:S}}createQuery(){const{geometry:e,spatialRel:o,where:S,timeExtent:P,objectIds:N}=this;return m.Z.fromJSON({geometry:e,spatialRel:o,where:S,timeExtent:P,objectIds:N})}update(e,o){var S=this;return(0,G.Z)(function*(){S._hash=JSON.stringify(e);const P=yield(0,a.j6)(e,null,o);yield Promise.all([S._setGeometryFilter(P),S._setIdFilter(P),S._setAttributeFilter(P),S._setTimeFilter(P)])})()}_setAttributeFilter(e){var o=this;return(0,G.Z)(function*(){if(!e||!e.where)return o._clause=null,void(o.where=null);o._clause=yield function _(B,e){return U.apply(this,arguments)}(e.where,o._serviceInfo.fieldsIndex),o.where=e.where})()}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}_setGeometryFilter(e){var o=this;return(0,G.Z)(function*(){if(!e||!e.geometry)return o._spatialQueryOperator=null,o.geometry=null,void(o.spatialRel=null);const S=e.geometry,P=e.spatialRel||"esriSpatialRelIntersects",N=yield(0,O.cW)(P,S,o._serviceInfo.geometryType,o._serviceInfo.hasZ,o._serviceInfo.hasM);(0,v.$P)(o._geometryBounds,S),o._spatialQueryOperator=N,o.geometry=S,o.spatialRel=P})()}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,R.y)(this._serviceInfo.timeInfo,e.timeExtent,y.k);else{const o=new Z.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);C.error(o)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const o=e.readHydratedGeometry();return!!o&&this._spatialQueryOperator(o)}_filterByTime(e){return!!(0,W.Wi)(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((o,S)=>{1&o||(this._idToVisibility.set(S,1),e.push(S))}),e}}}}]);