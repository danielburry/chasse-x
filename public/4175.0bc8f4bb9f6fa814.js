"use strict";var te=Object.defineProperty,ee=Object.defineProperties,oe=Object.getOwnPropertyDescriptors,Yt=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,Ft=(rt,U,_)=>U in rt?te(rt,U,{enumerable:!0,configurable:!0,writable:!0,value:_}):rt[U]=_,Rt=(rt,U)=>{for(var _ in U||(U={}))ie.call(U,_)&&Ft(rt,_,U[_]);if(Yt)for(var _ of Yt(U))ne.call(U,_)&&Ft(rt,_,U[_]);return rt},Ut=(rt,U)=>ee(rt,oe(U));(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[4175],{47139:(rt,U,_)=>{_.d(U,{Fp:()=>ct,RL:()=>X,UV:()=>k,bk:()=>d});var lt=_(36161),at=_(91179),Z=_(31375);function ct(m){var v;if(!m)return null;switch(m.type){case"CIMPointSymbol":{const M=m.symbolLayers;return M&&1===M.length?ct(M[0]):null}case"CIMVectorMarker":{const M=m.markerGraphics;if(!M||1!==M.length)return null;const O=M[0];if(!O)return null;const I=O.geometry;if(!I)return null;const C=O.symbol;return!C||"CIMPolygonSymbol"!==C.type&&"CIMLineSymbol"!==C.type||(null==(v=C.symbolLayers)?void 0:v.some(A=>!!A.effects))?null:{geom:I,asFill:"CIMPolygonSymbol"===C.type}}case"sdf":return{geom:m.geom,asFill:m.asFill}}return null}function N(m){let v=1/0,M=-1/0,O=1/0,I=-1/0;for(const C of m)for(const A of C)A[0]<v&&(v=A[0]),A[0]>M&&(M=A[0]),A[1]<O&&(O=A[1]),A[1]>I&&(I=A[1]);return[v,O,M,I]}function d(m){return m?m.rings?N(m.rings):m.paths?N(m.paths):(0,at.YX)(m)?[m.xmin,m.ymin,m.xmax,m.ymax]:null:null}function k(m,v,M,O,I){const[C,A,T,j]=m;if(T<C||j<A)return[0,0,0];const B=T-C,w=j-A,H=Math.floor(31.5),J=(128-2*(H+1))/Math.max(B,w),et=Math.round(B*J)+2*H,pt=Math.round(w*J)+2*H;let ht=1;v&&(ht=pt/J/(v.ymax-v.ymin));let Y=0,K=0;return O&&(I?v&&M&&v.ymax-v.ymin>0&&(Y=O.x/(M*((v.xmax-v.xmin)/(v.ymax-v.ymin))),K=O.y/M):(Y=O.x,K=O.y)),Y=.5*(v.xmax+v.xmin)+Y*(v.xmax-v.xmin),K=.5*(v.ymax+v.ymin)+K*(v.ymax-v.ymin),Y-=C,K-=A,Y*=J,K*=J,Y+=H,K+=H,[ht,Y/et-.5,-(K/pt-.5)]}function X(m){const v=function ot(m){return m?m.rings?m.rings:m.paths?m.paths:void 0!==m.xmin&&void 0!==m.ymin&&void 0!==m.xmax&&void 0!==m.ymax?[[[m.xmin,m.ymin],[m.xmin,m.ymax],[m.xmax,m.ymax],[m.xmax,m.ymin],[m.xmin,m.ymin]]]:null:null}(m.geom),M=function L(m){let v=1/0,M=-1/0,O=1/0,I=-1/0;for(const C of m)for(const A of C)A[0]<v&&(v=A[0]),A[0]>M&&(M=A[0]),A[1]<O&&(O=A[1]),A[1]>I&&(I=A[1]);return new Z.Z(v,O,M-v,I-O)}(v),C=Math.floor(31.5),A=(128-2*(C+1))/Math.max(M.width,M.height),T=Math.round(M.width*A)+2*C,j=Math.round(M.height*A)+2*C,B=[];for(const z of v)if(z&&z.length>1){const $=[];for(const H of z){let[J,et]=H;J-=M.x,et-=M.y,J*=A,et*=A,J+=C-.5,et+=C-.5,$.push(m.asFill?[J,et]:[Math.round(J),Math.round(et)])}if(m.asFill){const H=$.length-1;$[0][0]===$[H][0]&&$[0][1]===$[H][1]||$.push($[0])}B.push($)}const w=function c(m,v,M,O){const I=v*M,C=new Array(I),A=O*O+1;for(let T=0;T<I;++T)C[T]=A;for(const T of m){const j=T.length;for(let B=1;B<j;++B){const w=T[B-1],z=T[B];let $,H,J,et;w[0]<z[0]?($=w[0],H=z[0]):($=z[0],H=w[0]),w[1]<z[1]?(J=w[1],et=z[1]):(J=z[1],et=w[1]);let pt=Math.floor($)-O,ht=Math.floor(H)+O,Y=Math.floor(J)-O,K=Math.floor(et)+O;pt<0&&(pt=0),ht>v&&(ht=v),Y<0&&(Y=0),K>M&&(K=M);const G=z[0]-w[0],It=z[1]-w[1],kt=G*G+It*It;for(let _t=pt;_t<ht;_t++)for(let vt=Y;vt<K;vt++){let Ot,Nt,Pt=(_t-w[0])*G+(vt-w[1])*It;Pt<0?(Ot=w[0],Nt=w[1]):Pt>kt?(Ot=z[0],Nt=z[1]):(Pt/=kt,Ot=w[0]+Pt*G,Nt=w[1]+Pt*It);const wt=(_t-Ot)*(_t-Ot)+(vt-Nt)*(vt-Nt),Xt=(M-vt-1)*v+_t;wt<C[Xt]&&(C[Xt]=wt)}}}for(let T=0;T<I;++T)C[T]=Math.sqrt(C[T]);return C}(B,T,j,C);return m.asFill&&function x(m,v,M,O,I){for(const C of m){const A=C.length;for(let T=1;T<A;++T){const j=C[T-1],B=C[T];let w,z,$,H;j[0]<B[0]?(w=j[0],z=B[0]):(w=B[0],z=j[0]),j[1]<B[1]?($=j[1],H=B[1]):($=B[1],H=j[1]);let J=Math.floor(w),et=Math.floor(z)+1,pt=Math.floor($),ht=Math.floor(H)+1;J<O&&(J=O),et>v-O&&(et=v-O),pt<O&&(pt=O),ht>M-O&&(ht=M-O);for(let Y=pt;Y<ht;++Y){if(j[1]>Y==B[1]>Y)continue;const K=(M-Y-1)*v;for(let G=J;G<et;++G)G<(B[0]-j[0])*(Y-j[1])/(B[1]-j[1])+j[0]&&(I[K+G]=-I[K+G]);for(let G=O;G<J;++G)I[K+G]=-I[K+G]}}}}(B,T,j,C,w),[tt(w,C),T,j]}function tt(m,v){const M=2*v,O=m.length,I=new Uint8Array(4*O);for(let C=0;C<O;++C)(0,lt.I)(.5-m[C]/M,I,4*C);return I}},84175:(rt,U,_)=>{_.d(U,{S:()=>Zt,c:()=>$});var lt=_(15861),at=_(91558),Z=_(58817),ct=_(63290),V=_(62208),ot=_(23841),L=_(77275),N=_(46679),d=_(35909),k=_(7547),X=_(47139),c=_(80991),x=_(73608),tt=_(39236),m=_(39351),v=_(21411),M=_(3959);const O=ct.Z.getLogger("esri.symbols.cim.cimAnalyzer");function I(t){switch(t){case"Butt":return k.RL.BUTT;case"Square":return k.RL.SQUARE;default:return k.RL.ROUND}}function C(t){switch(t){case"Bevel":return k.AH.BEVEL;case"Miter":return k.AH.MITER;default:return k.AH.ROUND}}function A(t){switch(t){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return O.warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."),"center"}}function T(t){switch(t){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function w(t,i,o,l){let e;t[i]?e=t[i]:(e={},t[i]=e),e[o]=l}function z(t){const i=t.markerPlacement;return i&&i.angleToLine?k.v2.MAP:k.v2.SCREEN}function $(t,i,o,l,e){return H.apply(this,arguments)}function H(){return(H=(0,lt.Z)(function*(t,i,o,l,e){const a=null!=l?l:[];if(!t)return a;let s,n;const r={};if("CIMSymbolReference"!==t.type)return O.error("Expect cim type to be 'CIMSymbolReference'"),a;if(s=t.symbol,n=t.primitiveOverrides,n){const u=[];for(const g of n){const p=g.valueExpressionInfo;if(p&&i){const b=(0,N.Yi)(p.expression,i.spatialReference,i.fields).then(S=>{S&&w(r,g.primitiveName,g.propertyName,S)});u.push(b)}else null!=g.value&&w(r,g.primitiveName,g.propertyName,g.value)}u.length>0&&(yield Promise.all(u))}const f=[];switch(Ht(s,o,f),f.length>0&&(yield Promise.all(f)),s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":J(s,n,r,i,a,o,e)}return a})).apply(this,arguments)}function J(t,i,o,l,e,a,s){if(!t)return;const n=t.symbolLayers;if(!n)return;const r=t.effects;let f;const u=d.B$.getSize(t);"CIMPointSymbol"===t.type&&"Map"===t.angleAlignment&&(f=k.v2.MAP);let g=n.length;for(;g--;){const p=n[g];if(!p||!1===p.enable)continue;let h;r&&r.length&&(h=[...r]);const b=p.effects;b&&b.length&&(r?h.push(...b):h=[...b]);const S=[];let P;d.E0.findEffectOverrides(h,i,S),P=S.length>0?Kt(h,S,o,l):h;const E=[];switch(d.E0.findApplicableOverrides(p,i,E),p.type){case"CIMSolidFill":et(p,P,o,E,l,e);break;case"CIMPictureFill":pt(p,P,o,E,l,a,e);break;case"CIMHatchFill":ht(p,P,o,E,l,e);break;case"CIMGradientFill":Y(p,P,o,E,l,e);break;case"CIMSolidStroke":K(p,P,o,E,l,e,"CIMPolygonSymbol"===t.type,u);break;case"CIMPictureStroke":G(p,P,o,E,l,e,"CIMPolygonSymbol"===t.type,u);break;case"CIMGradientStroke":It(p,P,o,E,l,e,"CIMPolygonSymbol"===t.type,u);break;case"CIMCharacterMarker":if(kt(p,P,o,E,l,e))break;break;case"CIMPictureMarker":if(kt(p,P,o,E,l,e))break;"CIMLineSymbol"===t.type&&(f=z(p)),_t(p,P,o,E,l,a,e,f,u);break;case"CIMVectorMarker":if(kt(p,P,o,E,l,e))break;"CIMLineSymbol"===t.type&&(f=z(p)),vt(p,P,o,E,l,e,a,f,u,s);break;default:O.error("Cannot analyze CIM layer",p.type)}}}function et(t,i,o,l,e,a){const s=t.primitiveName,n=(0,c.NO)(t.color),[r,f]=dt(l,s,i,null,null),u=(0,L.hP)(JSON.stringify(t)+f).toString();a.push({type:"fill",templateHash:u,materialHash:r?()=>u:u,cim:t,materialOverrides:null,colorLocked:t.colorLocked,color:y(s,o,"Color",e,n,gt),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:i,applyRandomOffset:!1,sampleAlphaOnly:!0})}function pt(t,i,o,l,e,a,s){const n=t.primitiveName,r=t.tintColor?(0,c.NO)(t.tintColor):{r:255,g:255,b:255,a:1},[f,u]=dt(l,n,i,null,null),g=(0,L.hP)(JSON.stringify(t)+u).toString(),p=(0,L.hP)(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString();let h=(0,c.NA)(t.scaleX);if("width"in t){const b=t.width;let S=1;const P=a.getResource(t.url);(0,V.pC)(P)&&(S=P.width/P.height),h/=S*(t.height/b)}s.push({type:"fill",templateHash:g,materialHash:f?()=>p:p,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:i,color:y(n,o,"TintColor",e,r,gt),height:y(n,o,"Height",e,t.height),scaleX:y(n,o,"ScaleX",e,h),angle:y(n,o,"Rotation",e,(0,c.NA)(t.rotation)),offsetX:y(n,o,"OffsetX",e,(0,c.NA)(t.offsetX)),offsetY:y(n,o,"OffsetY",e,(0,c.NA)(t.offsetY)),url:t.url,applyRandomOffset:!1,sampleAlphaOnly:!1})}function ht(t,i,o,l,e,a){var b;const s=["Rotation","OffsetX","OffsetY"],n=l.filter(S=>S.primitiveName!==t.primitiveName&&!s.includes(S.propertyName)),r=t.primitiveName,[f,u]=dt(l,r,i,null,null),g=(0,L.hP)(JSON.stringify(t)+u).toString(),p=(0,L.hP)(`${t.separation}${JSON.stringify(t.lineSymbol)}`).toString();let h={r:255,g:255,b:255,a:1};if(t.lineSymbol){const S=null==(b=t.lineSymbol)?void 0:b.symbolLayers.find(P=>"CIMSolidStroke"===P.type);S&&(h=(0,c.NO)(S.color))}a.push({type:"fill",templateHash:g,materialHash:f?Dt(p,o,n,e):p,cim:t,materialOverrides:n,colorLocked:t.colorLocked,effects:i,color:h,height:y(r,o,"Separation",e,t.separation),scaleX:1,angle:y(r,o,"Rotation",e,(0,c.NA)(t.rotation)),offsetX:y(r,o,"OffsetX",e,(0,c.NA)(t.offsetX)),offsetY:y(r,o,"OffsetY",e,(0,c.NA)(t.offsetY)),applyRandomOffset:!1,sampleAlphaOnly:!0})}function Y(t,i,o,l,e,a){const s=t.primitiveName,[n,r]=dt(l,s,i,null,null),f=(0,L.hP)(JSON.stringify(t)+r).toString();a.push({type:"fill",templateHash:f,materialHash:n?Dt(f,o,l,e):f,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:i,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,applyRandomOffset:!1,sampleAlphaOnly:!1})}function K(t,i,o,l,e,a,s,n){const r=t.primitiveName,f=(0,c.NO)(t.color),u=void 0!==t.width?t.width:4,g=I(t.capStyle),p=C(t.joinStyle),h=t.miterLimit,[b,S]=dt(l,r,i,null,null),P=(0,L.hP)(JSON.stringify(t)+S).toString();let E,F;if(i&&i instanceof Array&&i.length>0){const D=i[i.length-1];if("CIMGeometricEffectDashes"===D.type&&"NoConstraint"===D.lineDashEnding&&null===D.offsetAlongLine){const R=(i=[...i]).pop();E=R.dashTemplate,F=R.scaleDash}}a.push({type:"line",templateHash:P,materialHash:b?()=>P:P,cim:t,materialOverrides:null,isOutline:s,colorLocked:t.colorLocked,effects:i,color:y(r,o,"Color",e,f,gt),width:y(r,o,"Width",e,u),cap:y(r,o,"CapStyle",e,g),join:y(r,o,"JoinStyle",e,p),miterLimit:y(r,o,"MiterLimit",e,h),referenceWidth:n,zOrder:Bt(t.name),dashTemplate:E,scaleDash:F,sampleAlphaOnly:!0})}function G(t,i,o,l,e,a,s,n){const r=(0,L.hP)(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(),f=t.primitiveName,u=(0,c.NO)(t.tintColor),g=void 0!==t.width?t.width:4,p=I(t.capStyle),h=C(t.joinStyle),b=t.miterLimit,[S,P]=dt(l,f,i,null,null),E=(0,L.hP)(JSON.stringify(t)+P).toString();a.push({type:"line",templateHash:E,materialHash:S?()=>r:r,cim:t,materialOverrides:null,isOutline:s,colorLocked:t.colorLocked,effects:i,color:y(f,o,"TintColor",e,u,gt),width:y(f,o,"Width",e,g),cap:y(f,o,"CapStyle",e,p),join:y(f,o,"JoinStyle",e,h),miterLimit:y(f,o,"MiterLimit",e,b),referenceWidth:n,zOrder:Bt(t.name),dashTemplate:null,scaleDash:!1,url:t.url,sampleAlphaOnly:!1})}function It(t,i,o,l,e,a,s,n){const r=t.primitiveName,f=void 0!==t.width?t.width:4,u=I(t.capStyle),g=C(t.joinStyle),p=t.miterLimit,[h,b]=dt(l,r,i,null,null),S=(0,L.hP)(JSON.stringify(t)+b).toString();a.push({type:"line",templateHash:S,materialHash:h?Dt(S,o,l,e):S,cim:t,materialOverrides:null,isOutline:s,colorLocked:t.colorLocked,effects:i,color:{r:128,g:128,b:128,a:1},width:y(r,o,"Width",e,f),cap:y(r,o,"CapStyle",e,u),join:y(r,o,"JoinStyle",e,g),miterLimit:y(r,o,"MiterLimit",e,p),referenceWidth:n,zOrder:Bt(t.name),dashTemplate:null,scaleDash:!1,sampleAlphaOnly:!1})}function kt(t,i,o,l,e,a){const s=t.markerPlacement;if(!s||"CIMMarkerPlacementInsidePolygon"!==s.type)return!1;const n=s,r=Math.abs(n.stepX),f=Math.abs(n.stepY);if(0===r||0===f)return!0;const u=["Rotation","OffsetX","OffsetY"],g=l.filter(R=>R.primitiveName!==t.primitiveName&&!u.includes(R.propertyName)),p="url"in t?t.url:null,[h,b]=dt(l,n.primitiveName,i,null,null),S=(0,L.hP)(JSON.stringify(t)+b).toString();let P,E,F=null;if("Random"===s.gridType){const R=(0,ot.Wz)(m.C1),Q=Math.max(Math.floor(R/r),1),ft=Math.max(Math.floor(R/f),1);P=f*ft,F=mt=>mt?mt*ft:0,E=Q*r/P}else s.shiftOddRows?(P=2*f,F=R=>R?2*R:0,E=r/f*.5):(P=f,F=null,E=r/f);let D={r:255,g:255,b:255,a:1};return"tintColor"in t&&(D=(0,c.NO)(t.tintColor)),a.push({type:"fill",templateHash:S,materialHash:h?Dt(S,o,g,e):S,cim:t,materialOverrides:g,colorLocked:t.colorLocked,effects:i,color:y(n.primitiveName,o,"TintColor",e,D,gt),height:y(n.primitiveName,o,"StepY",e,P,F),scaleX:E,angle:y(n.primitiveName,o,"GridAngle",e,n.gridAngle),offsetX:y(n.primitiveName,o,"OffsetX",e,(0,c.NA)(n.offsetX)),offsetY:y(n.primitiveName,o,"OffsetY",e,(0,c.NA)(n.offsetY)),url:p,applyRandomOffset:"Random"===s.gridType,sampleAlphaOnly:!p}),!0}function _t(t,i,o,l,e,a,s,n,r){var ut;const f=t.primitiveName,u=(0,c.NA)(t.size);let g=(0,c.NA)(t.scaleX);const p=(0,c.NA)(t.rotation),h=(0,c.NA)(t.offsetX),b=(0,c.NA)(t.offsetY),S=t.tintColor?(0,c.NO)(t.tintColor):{r:255,g:255,b:255,a:1},P=(0,L.hP)(`${t.url}${JSON.stringify(t.colorSubstitutions)}${JSON.stringify(t.animatedSymbolProperties)}`).toString(),E=jt(t.markerPlacement,l,o,e),F=function Gt(t,i,o,l){const e=[];if(d.E0.findApplicableOverrides(t,i,e),0===e.length)return t;for(const a of e)if(a.valueExpressionInfo){const s=o[a.primitiveName]&&o[a.primitiveName][a.propertyName];s instanceof N.mz&&(a.fn=(n,r,f)=>(0,tt.Z)(s,n,{$view:f},l.geometryType,r))}return(a,s,n)=>{for(const u of e)u.fn&&(u.value=u.fn(a,s,n));const r=(0,Z.d9)(t),f=t.primitiveName;for(const u of e)if(u.primitiveName===f){const g=$t(u.propertyName);null!=u.value&&u.value!==r[g]&&(r[g]=u.value)}return r}}(t.animatedSymbolProperties,l,o,e),[D,R]=dt(l,f,i,E,F),Q=(0,L.hP)(JSON.stringify(t)+R).toString(),ft=null!=(ut=t.anchorPoint)?ut:{x:0,y:0};if("width"in t){const W=t.width;let it=1;const nt=a.getResource(t.url);(0,V.pC)(nt)&&(it=nt.width/nt.height),g/=it*(u/W)}function mt(W,it){return(0,c.hf)(F,W,it)}s.push({type:"marker",templateHash:Q,materialHash:t.animatedSymbolProperties&&!0===t.animatedSymbolProperties.randomizeStartTime?(W,it,nt,St)=>{const Mt=(0,M.$)(St),Ct=mt(W,it);return P+`-MATERIALGROUP(${Mt})-ASP(${JSON.stringify(Ct)})`}:D?(W,it)=>{const nt=mt(W,it);return P+`-ASP(${JSON.stringify(nt)})`}:P,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:i,scaleSymbolsProportionally:!1,alignment:n,size:y(f,o,"Size",e,u),scaleX:y(f,o,"ScaleX",e,g),rotation:y(f,o,"Rotation",e,p),offsetX:y(f,o,"OffsetX",e,h),offsetY:y(f,o,"OffsetY",e,b),color:y(f,o,"TintColor",e,S,gt),anchorPoint:{x:ft.x,y:-ft.y},isAbsoluteAnchorPoint:"Relative"!==t.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:t.rotateClockwise,referenceSize:r,sizeRatio:1,markerPlacement:E,url:t.url,animatedSymbolProperties:F})}function vt(t,i,o,l,e,a,s,n,r,f){const u=t.markerGraphics;if(!u)return;let g=0;if(t.scaleSymbolsProportionally){const h=t.frame;h&&(g=h.ymax-h.ymin)}const p=jt(t.markerPlacement,l,o,e);for(const h of u)if(h){const b=h.symbol;if(!b)continue;switch(b.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":Nt(t,i,p,null,h,l,o,e,a,s,n,r,g,f);break;case"CIMTextSymbol":Ot(t,i,p,h,o,l,e,a,n,r,g)}}}function Ot(t,i,o,l,e,a,s,n,r,f,u){d.E0.findApplicableOverrides(l,a,[]);const p=l.geometry;if(!("x"in p)||!("y"in p))return;const h=l.symbol,b=function B(t){return t.underline?"underline":t.strikethrough?"line-through":"none"}(h),S=function j(t){let i="",o="";if(t){const l=t.toLowerCase();l.includes("italic")?i="italic":l.includes("oblique")&&(i="oblique"),l.includes("bold")?o="bold":l.includes("light")&&(o="lighter")}return{style:i,weight:o}}(h.fontStyleName),P=(0,v.BN)(h.fontFamilyName);h.font=Rt({family:P,decoration:b},S);const E=t.frame,F=p.x-.5*(E.xmin+E.xmax),D=p.y-.5*(E.ymin+E.ymax),R=t.size/u,Q=t.primitiveName,ft=(0,c.NA)(h.height)*R,mt=(0,c.NA)(h.angle),yt=(0,c.NA)(t.offsetX)+((0,c.NA)(h.offsetX)+F)*R,ut=(0,c.NA)(t.offsetY)+((0,c.NA)(h.offsetY)+D)*R,W=(0,c.NO)(d.B$.getFillColor(h));let it=(0,c.NO)(d.B$.getStrokeColor(h)),nt=d.B$.getStrokeWidth(h);nt||(it=(0,c.NO)(d.B$.getFillColor(h.haloSymbol)),nt=h.haloSize*R);const[St,Mt]=dt(a,Q,i,o,null),Ct=JSON.stringify(t.effects)+Number(t.colorLocked)+JSON.stringify(t.anchorPoint)+t.anchorPointUnits+JSON.stringify(t.markerPlacement),bt=(0,L.hP)(JSON.stringify(l)+Ct+Mt).toString();let q=y(l.primitiveName,e,"TextString",s,l.textString,c.X3,h.textCase);if(null==q)return;const{fontStyleName:xt}=h,Et=P+(xt?"-"+xt.toLowerCase():"-regular"),At=Et;"string"==typeof q&&q.includes("[")&&h.fieldMap&&(q=(0,c.Qs)(h.fieldMap,q,h.textCase)),n.push({type:"text",templateHash:bt,materialHash:St||"function"==typeof q||q.match(/\[(.*?)\]/)?(st,zt,Wt)=>At+"-"+(0,c.hf)(q,st,zt,Wt):At+"-"+(0,L.hP)(q),cim:h,materialOverrides:null,colorLocked:t.colorLocked,effects:i,alignment:r,anchorPoint:{x:t.anchorPoint?t.anchorPoint.x:0,y:t.anchorPoint?t.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==t.anchorPointUnits,fontName:Et,decoration:b,weight:y(Q,e,"Weight",s,S.weight),style:y(Q,e,"Size",s,S.style),size:y(Q,e,"Size",s,ft),angle:y(Q,e,"Rotation",s,mt),offsetX:y(Q,e,"OffsetX",s,yt),offsetY:y(Q,e,"OffsetY",s,ut),horizontalAlignment:A(h.horizontalAlignment),verticalAlignment:T(h.verticalAlignment),text:q,color:W,outlineColor:it,outlineSize:nt,referenceSize:f,sizeRatio:1,markerPlacement:o})}function Nt(t,i,o,l,e,a,s,n,r,f,u,g,p,h){var F;const b=e.symbol,S=b.symbolLayers;if(!S)return;if(h)return void wt(t,i,o,l,e,s,a,n,r,f,u,g,p);let P=S.length;if(Vt(S))return void function Pt(t,i,o,l,e,a,s,n,r,f,u,g,p){const h=e.geometry,b=a[0],S=a[1],P=(0,X.bk)(h);if(!P)return;const[E,F,D]=(0,X.UV)(P,t.frame,t.size,t.anchorPoint,"Relative"!==t.anchorPointUnits),R={type:"sdf",geom:h,asFill:!0},Q=t.primitiveName,ft=(0,c.NA)(t.size),mt=(0,c.NA)(t.rotation),yt=(0,c.NA)(t.offsetX),ut=(0,c.NA)(t.offsetY),W=S.path,it=S.primitiveName,nt=b.primitiveName,St=(0,c.NO)(d.B$.getFillColor(S)),Mt=(0,c.NO)(d.B$.getStrokeColor(b)),Ct=d.B$.getStrokeWidth(b);let bt=!1,q="";for(const st of s)st.primitiveName!==it&&st.primitiveName!==nt&&st.primitiveName!==Q||(void 0!==st.value?q+=`-${st.primitiveName}-${st.propertyName}-${JSON.stringify(st.value)}`:st.valueExpressionInfo&&(bt=!0));const xt=JSON.stringify(Ut(Rt({},t),{markerGraphics:null})),Et=(0,L.hP)(JSON.stringify(R)+W).toString(),At={type:"marker",templateHash:(0,L.hP)(JSON.stringify(e)+JSON.stringify(S)+JSON.stringify(b)+xt+q).toString(),materialHash:bt?()=>Et:Et,cim:R,materialOverrides:null,colorLocked:t.colorLocked,effects:i,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:F,y:D},isAbsoluteAnchorPoint:!1,size:y(t.primitiveName,n,"Size",r,ft),rotation:y(t.primitiveName,n,"Rotation",r,mt),offsetX:y(t.primitiveName,n,"OffsetX",r,yt),offsetY:y(t.primitiveName,n,"OffsetY",r,ut),scaleX:1,frameHeight:p,rotateClockwise:t.rotateClockwise,referenceSize:g,sizeRatio:E,color:y(it,n,"Color",r,St,gt),outlineColor:y(nt,n,"Color",r,Mt,gt),outlineWidth:y(nt,n,"Width",r,Ct),markerPlacement:o,path:W,animatedSymbolProperties:l};f.push(At)}(t,i,o,l,e,S,a,s,n,r,u,g,p);const E=x.j.applyEffects(b.effects,e.geometry,f.geometryEngine);if(E)for(;P--;){const D=S[P];if(D&&!1!==D.enable)switch(D.type){case"CIMSolidFill":case"CIMSolidStroke":{const R=x.j.applyEffects(D.effects,E,f.geometryEngine),Q=(0,X.bk)(R);if(!Q)continue;const[ft,mt,yt]=(0,X.UV)(Q,t.frame,t.size,t.anchorPoint,"Relative"!==t.anchorPointUnits),ut="CIMSolidFill"===D.type,W={type:"sdf",geom:R,asFill:ut},it=t.primitiveName,nt=null!=(F=(0,c.NA)(t.size))?F:10,St=(0,c.NA)(t.rotation),Mt=(0,c.NA)(t.offsetX),Ct=(0,c.NA)(t.offsetY),bt=D.path,q=D.primitiveName,xt=(0,c.NO)(ut?d.B$.getFillColor(D):d.B$.getStrokeColor(D)),Et=ut?{r:0,g:0,b:0,a:0}:(0,c.NO)(d.B$.getStrokeColor(D)),At=d.B$.getStrokeWidth(D);if(!ut&&!At)break;let st=!1,zt="";for(const Lt of a)Lt.primitiveName!==q&&Lt.primitiveName!==it||(void 0!==Lt.value?zt+=`-${Lt.primitiveName}-${Lt.propertyName}-${JSON.stringify(Lt.value)}`:Lt.valueExpressionInfo&&(st=!0));(0,V.pC)(i)&&"function"==typeof i&&(st=!0);const Wt=JSON.stringify(Ut(Rt({},t),{markerGraphics:null})),Jt=(0,L.hP)(JSON.stringify(W)+bt).toString(),qt={type:"marker",templateHash:(0,L.hP)(JSON.stringify(e)+JSON.stringify(D)+Wt+zt).toString(),materialHash:st?()=>Jt:Jt,cim:W,materialOverrides:null,colorLocked:t.colorLocked,effects:i,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:mt,y:yt},isAbsoluteAnchorPoint:!1,size:y(t.primitiveName,s,"Size",n,nt),rotation:y(t.primitiveName,s,"Rotation",n,St),offsetX:y(t.primitiveName,s,"OffsetX",n,Mt),offsetY:y(t.primitiveName,s,"OffsetY",n,Ct),scaleX:1,frameHeight:p,rotateClockwise:t.rotateClockwise,referenceSize:g,sizeRatio:ft,color:y(q,s,"Color",n,xt,gt),outlineColor:y(q,s,"Color",n,Et,gt),outlineWidth:y(q,s,"Width",n,At),markerPlacement:o,animatedSymbolProperties:l,path:bt};r.push(qt);break}default:wt(t,i,o,l,e,s,a,n,r,f,u,g,p)}}}function wt(t,i,o,l,e,a,s,n,r,f,u,g,p){const h=function Xt(t,i){return{type:t.type,enable:!0,name:t.name,colorLocked:t.colorLocked,primitiveName:t.primitiveName,anchorPoint:t.anchorPoint,anchorPointUnits:t.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:t.rotateClockwise,rotation:0,size:t.size,billboardMode3D:t.billboardMode3D,depth3D:t.depth3D,frame:t.frame,markerGraphics:[i],scaleSymbolsProportionally:t.scaleSymbolsProportionally,respectFrame:t.respectFrame,clippingPath:t.clippingPath}}(t,e);let b=[];const S=["Rotation","OffsetX","OffsetY"];b=s.filter(W=>W.primitiveName!==t.primitiveName||!S.includes(W.propertyName));let P="";for(const W of s)void 0!==W.value&&(P+=`-${W.primitiveName}-${W.propertyName}-${JSON.stringify(W.value)}`);const[E,F,D]=d.B$.getTextureAnchor(h,f),R=t.primitiveName,Q=(0,c.NA)(t.rotation),ft=(0,c.NA)(t.offsetX),mt=(0,c.NA)(t.offsetY),yt=(0,L.hP)(JSON.stringify(h)+P).toString(),ut={type:"marker",templateHash:yt,materialHash:b.length>0||(0,V.pC)(i)&&"function"==typeof i?Dt(yt,a,b,n):yt,cim:h,materialOverrides:b,colorLocked:t.colorLocked,effects:i,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:E,y:F},isAbsoluteAnchorPoint:!1,size:t.size,rotation:y(R,a,"Rotation",n,Q),offsetX:y(R,a,"OffsetX",n,ft),offsetY:y(R,a,"OffsetY",n,mt),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:p,rotateClockwise:t.rotateClockwise,referenceSize:g,sizeRatio:D/(0,ot.F2)(t.size),markerPlacement:o,animatedSymbolProperties:l};r.push(ut)}function Bt(t){if(t&&0===t.indexOf("Level_")){const i=parseInt(t.substr(6),10);if(!isNaN(i))return i}return 0}function gt(t){if(!t||0===t.length)return null;const i=new at.Z(t).toRgba();return{r:i[0],g:i[1],b:i[2],a:i[3]}}function y(t,i,o,l,e,a,s){const n=i[t];if(n){const r=n[o];if("string"==typeof r||"number"==typeof r||r instanceof Array)return a?a.call(null,r,s):r;if(null!=r&&r instanceof N.mz)return(f,u,g)=>{let p=(0,tt.Z)(r,f,{$view:g},l.geometryType,u);return null!==p&&a&&(p=a.call(null,p,s)),null!==p?p:e}}return e}function $t(t){return t&&t.charAt(0).toLowerCase()+t.substr(1)}function Kt(t,i,o,l){for(const e of i)if(e.valueExpressionInfo){const a=o[e.primitiveName]&&o[e.primitiveName][e.propertyName];a instanceof N.mz&&(e.fn=(s,n,r)=>(0,tt.Z)(a,s,{$view:r},l.geometryType,n))}return(e,a,s)=>{for(const r of i)r.fn&&(r.value=r.fn(e,a,s));const n=[];for(let r of t){const f=null==r?void 0:r.primitiveName;if(f){let u=!1;for(const g of i)if(g.primitiveName===f){const p=$t(g.propertyName);null!=g.value&&g.value!==r[p]&&(u||(r=(0,Z.d9)(r),u=!0),r[p]=g.value)}}n.push(r)}return n}}function jt(t,i,o,l){const e=[];if(d.E0.findApplicableOverrides(t,i,e),0===e.length)return t;for(const a of e)if(a.valueExpressionInfo){const s=o[a.primitiveName]&&o[a.primitiveName][a.propertyName];s instanceof N.mz&&(a.fn=(n,r,f)=>(0,tt.Z)(s,n,{$view:f},l.geometryType,r))}return(a,s,n)=>{for(const u of e)u.fn&&(u.value=u.fn(a,s,n));const r=(0,Z.d9)(t),f=t.primitiveName;for(const u of e)if(u.primitiveName===f){const g=$t(u.propertyName);null!=u.value&&u.value!==r[g]&&(r[g]=u.value)}return r}}function Dt(t,i,o,l){for(const e of o)if(e.valueExpressionInfo){const a=i[e.primitiveName]&&i[e.primitiveName][e.propertyName];a instanceof N.mz&&(e.fn=(s,n,r)=>(0,tt.Z)(a,s,{$view:r},l.geometryType,n))}return(e,a,s)=>{for(const n of o)n.fn&&(n.value=n.fn(e,a,s));return(0,L.hP)(t+d.E0.buildOverrideKey(o)).toString()}}function Zt(t,i){if(!i||0===i.length)return t;const o=JSON.parse(JSON.stringify(t));return d.E0.applyOverrides(o,i),o}function dt(t,i,o,l,e){let a=!1,s="";for(const n of t)n.primitiveName===i&&(void 0!==n.value?s+=`-${n.primitiveName}-${n.propertyName}-${JSON.stringify(n.value)}`:n.valueExpressionInfo&&(a=!0));return(0,V.pC)(o)&&"function"==typeof o&&(a=!0),(0,V.pC)(l)&&"function"==typeof l&&(a=!0),(0,V.pC)(e)&&"function"==typeof e&&(a=!0),[a,s]}function Ht(t,i,o){if(t&&i)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const l=t.symbolLayers;if(!l)return;for(const e of l)switch(Qt(e,i,o),e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&o.push(i.fetchResource(e.url,null));break;case"CIMVectorMarker":{const a=e.markerGraphics;if(!a)continue;for(const s of a)if(s){const n=s.symbol;n&&Ht(n,i,o)}}}}}}const Vt=t=>t&&2===t.length&&t[0].enable&&t[1].enable&&"CIMSolidStroke"===t[0].type&&"CIMSolidFill"===t[1].type&&!t[0].effects&&!t[1].effects;let Tt;function Qt(t,i,o){if(t.effects&&!(0,V.pC)(i.geometryEngine)){if(Tt)return void o.push(Tt);(0,c.Cc)(t.effects)&&(Tt=(0,c.RI)(),o.push(Tt),Tt.then(l=>i.geometryEngine=l))}}},73608:(rt,U,_)=>{_.d(U,{j:()=>ot});var lt=_(91179),at=_(72283),Z=_(29214),ct=_(11004);class ot{static executeEffects(N,d,k){const X=(0,at.GP)(d);let x=new Z.M(X);for(const tt of N){const m=(0,ct.h)(tt);m&&(x=m.execute(x,tt,1.3333333333333333,k))}return x}static next(N){const d=N.next();return(0,at.wp)(d),d}static applyEffects(N,d,k){if(!N)return d;let X=new Z.M(d);for(const tt of N){const m=(0,ct.h)(tt);m&&(X=m.execute(X,tt,1,k))}let c,x=null;for(;c=X.next();)x?(0,lt.l9)(x)?(0,lt.l9)(c)&&x.paths.push(...c.paths):(0,lt.oU)(x)&&(0,lt.oU)(c)&&x.rings.push(...c.rings):x=c;return x}}},39236:(rt,U,_)=>{_.d(U,{Z:()=>ct});var lt=_(26584),at=_(63290),Z=_(7848);function ct(N,d,k,X,c){const x=N.referencesGeometry()&&c?function ot(N,d,k){const{transform:X,hasZ:c,hasM:x}=k;V.has(d)||V.set(d,function L(N){const d={};switch(N){case"esriGeometryPoint":return(k,X,c,x)=>(0,Z.U1)(X,d,k,c,x);case"esriGeometryPolygon":return(k,X,c,x)=>(0,Z.Ie)(X,d,k,c,x);case"esriGeometryPolyline":return(k,X,c,x)=>(0,Z.G6)(X,d,k,c,x);case"esriGeometryMultipoint":return(k,X,c,x)=>(0,Z.J9)(X,d,k,c,x);default:return at.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new lt.Z("mapview-arcade",`Unable to handle geometryType: ${N}`)),k=>k}}(d));const tt=V.get(d)(N.geometry,X,c,x);return Ut(Rt({},N),{geometry:tt})}(d,X,c):d,tt=N.repurposeFeature(x);try{return N.evaluate(Ut(Rt({},k),{$feature:tt}))}catch(m){return at.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",m),null}}const V=new Map},21411:(rt,U,_)=>{function Z(N){const d=N.toLowerCase().split(" ").join("-");switch(d){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return d}}function ct(N){const d=function ot(N){if(!N.weight)return"";switch(N.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(N)+function L(N){if(!N.style)return"";switch(N.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(N);return Z(N.family)+(d.length>0?d:"-regular")}_.d(U,{BN:()=>Z,Yc:()=>ct})},3959:(rt,U,_)=>{_.d(U,{$:()=>Z,f:()=>at});var lt=_(77275);function at(ot,L){let N;if("string"==typeof ot)N=(0,lt.hP)(ot+`-seed(${L})`);else{let d=12;N=ot^L;do{N=107*(N>>8^N)+d|0}while(0!=--d)}return(1+N/(1<<31))/2}function Z(ot){return Math.floor(at(ot,ct)*V)}const ct=53290320,V=10}}]);