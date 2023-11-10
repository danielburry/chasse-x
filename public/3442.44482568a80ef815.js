"use strict";var $e=Object.defineProperty,Be=Object.defineProperties,We=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,de=(N,x,e)=>x in N?$e(N,x,{enumerable:!0,configurable:!0,writable:!0,value:e}):N[x]=e,$=(N,x)=>{for(var e in x||(x={}))Qe.call(x,e)&&de(N,e,x[e]);if(ue)for(var e of ue(x))Ke.call(x,e)&&de(N,e,x[e]);return N},ee=(N,x)=>Be(N,We(x));(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[3442],{59990:(N,x,e)=>{function U(j){var n;const C=j.layer;return"floorInfo"in C&&(null==(n=C.floorInfo)?void 0:n.floorField)&&"floors"in j.view?A(j.view.floors,C.floorInfo.floorField):null}function s(j,C){var n;return"floorInfo"in C&&(null==(n=C.floorInfo)?void 0:n.floorField)?A(j,C.floorInfo.floorField):null}function A(j,C){if(!(null==j?void 0:j.length))return null;const n=j.filter(p=>""!==p).map(p=>`'${p}'`);return n.push("''"),`${C} IN (${n.join(",")}) OR ${C} IS NULL`}e.d(x,{c:()=>U,f:()=>s})},13410:(N,x,e)=>{e.d(x,{FN:()=>j,QV:()=>A,ac:()=>n});var U=e(62208),s=e(31283);function A(p,E,O){return E.flatten(({sublayers:d})=>d).length!==p.length||!!p.some(d=>d.originIdOf("minScale")>O||d.originIdOf("maxScale")>O||d.originIdOf("renderer")>O||d.originIdOf("labelingInfo")>O||d.originIdOf("opacity")>O||d.originIdOf("labelsVisible")>O||d.originIdOf("source")>O)||!C(p,E)}function j(p,E,O){return!!p.some(P=>{const d=P.source;return!(!d||"map-layer"===d.type&&d.mapLayerId===P.id&&((0,U.Wi)(d.gdbVersion)||d.gdbVersion===O))||P.originIdOf("renderer")>s.s3.SERVICE||P.originIdOf("labelingInfo")>s.s3.SERVICE||P.originIdOf("opacity")>s.s3.SERVICE||P.originIdOf("labelsVisible")>s.s3.SERVICE})||!C(p,E)}function C(p,E){if(!p||!p.length||(0,U.Wi)(E))return!0;const O=E.slice().reverse().flatten(({sublayers:Z})=>Z&&Z.toArray().reverse()).map(Z=>Z.id).toArray();if(p.length>O.length)return!1;let P=0;const d=O.length;for(const{id:Z}of p){for(;P<d&&O[P]!==Z;)P++;if(P>=d)return!1}return!0}function n(p){return!!p&&p.some(E=>null!=E.minScale||E.layerDefinition&&null!=E.layerDefinition.minScale)}},63442:(N,x,e)=>{e.r(x),e.d(x,{default:()=>Te});var U=e(15861),s=e(17626),A=e(63290),j=e(10699),C=e(32917),n=e(77712),E=(e(85931),e(8314)),O=e(90912),P=e(76898),d=e(51815),Z=e(91757),Q=e(37384),H=e(35627),z=e(13305),R=e(67802),Y=e(45611),B=e(26584),G=e(62208),te=e(2004),re=e(83137),ye=e(13812),fe=e(14772),X=e(59990),ie=e(22264),me=e(84792),ce=e(13924),q=e(2618),he=e(95737),se=e(91179),ge=e(13410);const oe=i=>i.spatialReference.wkid||JSON.stringify(i.spatialReference);function ve(i,r){const{dpi:o,gdbVersion:a,geometry:t,geometryPrecision:u,height:c,layerOption:w,mapExtent:h,maxAllowableOffset:l,returnFieldName:I,returnGeometry:y,returnUnformattedValues:f,returnZ:F,spatialReference:M,timeExtent:D,tolerance:g,width:T}=i.toJSON(),{dynamicLayers:v,layerDefs:b,layerIds:V}=function xe(i){var M,D;const{mapExtent:r,floors:o,width:a,sublayers:t,layerIds:u,layerOption:c,gdbVersion:w}=i,h=null==(D=null==(M=null==t?void 0:t.find(g=>null!=g.layer))?void 0:M.layer)?void 0:D.serviceSublayers,l="popup"===c,I={},y=(0,re.yZ)({extent:r,width:a,spatialReference:null==r?void 0:r.spatialReference}),f=[],F=g=>{if(g.visible&&(0===y||(0===g.minScale||y<=g.minScale)&&(0===g.maxScale||y>=g.maxScale)))if(g.sublayers)g.sublayers.forEach(F);else{if(!1===(null==u?void 0:u.includes(g.id))||l&&(!g.popupTemplate||!g.popupEnabled))return;f.unshift(g)}};if(null==t||t.forEach(F),t&&!f.length)I.layerIds=[];else{const g=(0,ge.FN)(f,h,w),T=f.map(v=>{const b=(0,X.f)(o,v);return v.toExportImageJSON(b)});if(g)I.dynamicLayers=JSON.stringify(T);else{if(t){let b=f.map(({id:V})=>V);u&&(b=b.filter(V=>u.includes(V))),I.layerIds=b}else(null==u?void 0:u.length)&&(I.layerIds=u);const v=function Ie(i,r){const o=!!(null==i?void 0:i.length),a=r.filter(t=>null!=t.definitionExpression||o&&null!=t.floorInfo);return a.length?a.map(t=>{const u=(0,X.f)(i,t),c=(0,he._)(u,t.definitionExpression);return{id:t.id,definitionExpression:c}}):null}(o,f);if((0,G.pC)(v)&&v.length){const b={};for(const V of v)V.definitionExpression&&(b[V.id]=V.definitionExpression);Object.keys(b).length&&(I.layerDefs=JSON.stringify(b))}}}return I}(i),W=r&&(0,G.pC)(r.geometry)?r.geometry:null,S={geometryPrecision:u,maxAllowableOffset:l,returnFieldName:I,returnGeometry:y,returnUnformattedValues:f,returnZ:F,tolerance:g},J=W&&W.toJSON()||t;if(S.imageDisplay=`${T},${c},${o}`,a&&(S.gdbVersion=a),J&&(delete J.spatialReference,S.geometry=JSON.stringify(J),S.geometryType=(0,se.Ji)(J)),M?S.sr=M.wkid||JSON.stringify(M):J&&J.spatialReference?S.sr=oe(J):h&&h.spatialReference&&(S.sr=oe(h)),S.time=D?[D.start,D.end].join(","):null,h){const{xmin:Ae,ymin:Le,xmax:Ge,ymax:Je}=h;S.mapExtent=`${Ae},${Le},${Ge},${Je}`}return b&&(S.layerDefs=b),v&&!b&&(S.dynamicLayers=v),S.layers="popup"===w?"visible":w,V&&!v&&(S.layers+=`:${V.join(",")}`),S}var k,be=e(29132),Ce=e(97478),ne=e(86810),Ee=e(65234);let m=k=class extends ne.wq{constructor(i){super(i),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(i){return(0,O.TJ)(k,i)}};(0,s._)([(0,n.Cb)({type:Number,json:{write:!0}})],m.prototype,"dpi",void 0),(0,s._)([(0,n.Cb)()],m.prototype,"floors",void 0),(0,s._)([(0,n.Cb)({type:String,json:{write:!0}})],m.prototype,"gdbVersion",void 0),(0,s._)([(0,n.Cb)({types:be.qM,json:{read:se.im,write:!0}})],m.prototype,"geometry",void 0),(0,s._)([(0,n.Cb)({type:Number,json:{write:!0}})],m.prototype,"geometryPrecision",void 0),(0,s._)([(0,n.Cb)({type:Number,json:{write:!0}})],m.prototype,"height",void 0),(0,s._)([(0,n.Cb)({type:[Number],json:{write:!0}})],m.prototype,"layerIds",void 0),(0,s._)([(0,n.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],m.prototype,"layerOption",void 0),(0,s._)([(0,n.Cb)({type:te.Z,json:{write:!0}})],m.prototype,"mapExtent",void 0),(0,s._)([(0,n.Cb)({type:Number,json:{write:!0}})],m.prototype,"maxAllowableOffset",void 0),(0,s._)([(0,n.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"returnFieldName",void 0),(0,s._)([(0,n.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"returnGeometry",void 0),(0,s._)([(0,n.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"returnM",void 0),(0,s._)([(0,n.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"returnUnformattedValues",void 0),(0,s._)([(0,n.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"returnZ",void 0),(0,s._)([(0,n.Cb)({type:Ee.Z,json:{write:!0}})],m.prototype,"spatialReference",void 0),(0,s._)([(0,n.Cb)()],m.prototype,"sublayers",void 0),(0,s._)([(0,n.Cb)({type:Ce.Z,json:{write:!0}})],m.prototype,"timeExtent",void 0),(0,s._)([(0,n.Cb)({type:Number,json:{write:!0}})],m.prototype,"tolerance",void 0),(0,s._)([(0,n.Cb)({type:Number,json:{write:!0}})],m.prototype,"width",void 0),m=k=(0,s._)([(0,P.j)("esri.rest.support.IdentifyParameters")],m);const ae=m;var le=e(88879),Pe=e(68653),Oe=e(99433),we=e(71774);let L=class extends ne.wq{constructor(i){super(i),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(i,r){return le.Z.fromJSON({attributes:$({},r.attributes),geometry:$({},r.geometry)})}writeFeature(i,r){if(!i)return;const{attributes:o,geometry:a}=i;o&&(r.attributes=$({},o)),(0,G.pC)(a)&&(r.geometry=a.toJSON(),r.geometryType=we.P$.toJSON(a.type))}};(0,s._)([(0,n.Cb)({type:String,json:{write:!0}})],L.prototype,"displayFieldName",void 0),(0,s._)([(0,n.Cb)({type:le.Z})],L.prototype,"feature",void 0),(0,s._)([(0,Pe.r)("feature",["attributes","geometry"])],L.prototype,"readFeature",null),(0,s._)([(0,Oe.c)("feature")],L.prototype,"writeFeature",null),(0,s._)([(0,n.Cb)({type:Number,json:{write:!0}})],L.prototype,"layerId",void 0),(0,s._)([(0,n.Cb)({type:String,json:{write:!0}})],L.prototype,"layerName",void 0),L=(0,s._)([(0,P.j)("esri.rest.support.IdentifyResult")],L);const Se=L;function _(){return(_=(0,U.Z)(function*(i,r,o){const a=(r=Fe(r)).geometry?[r.geometry]:[],t=(0,q.en)(i);return t.path+="/identify",(0,ce.aX)(a).then(u=>{const c=ve(r,{geometry:u&&u[0]}),w=(0,q.cv)($(ee($({},t.query),{f:"json"}),c)),h=(0,q.lA)(w,o);return(0,me.default)(t.path,h).then(je).then(l=>Ne(l,r.sublayers))})})).apply(this,arguments)}function je(i){const r=i.data;r.results=r.results||[];const o={results:[]};return o.results=r.results.map(a=>Se.fromJSON(a)),o}function Fe(i){return ae.from(i)}function Ne(i,r){if(!(null==r?void 0:r.length))return i;const o=new Map;r.forEach(function a(t){o.set(t.id,t),t.sublayers&&t.sublayers.forEach(a)});for(const t of i.results)t.feature.sourceLayer=o.get(t.layerId);return i}var Re=e(46679),pe=e(10023);const Ve=i=>{let r=class extends i{initialize(){this.exportImageParameters=new fe.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var o;return null==(o=this.exportImageParameters)||o.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(o,a){var t=this;return(0,U.Z)(function*(){var w,h,l,I,y,f;const{layer:u}=t;if(!o)throw new B.Z("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:u});const c=null==(l=null==(h=null==(w=t.layer.capabilities)?void 0:w.operations)?void 0:h.supportsQuery)||l;if(!((null==(f=null==(y=null==(I=t.layer.capabilities)?void 0:I.operations)?void 0:y.supportsIdentify)||f)&&t.layer.version>=10.5||c))throw new B.Z("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:u});return c?t._fetchPopupFeaturesUsingQueries(o,a):t._fetchPopupFeaturesUsingIdentify(o,a)})()}canResume(){var o;return!!super.canResume()&&!(null==(o=this.timeExtent)?void 0:o.isEmpty)}_fetchPopupFeaturesUsingIdentify(o,a){var t=this;return(0,U.Z)(function*(){const u=yield t._createIdentifyParameters(o,a);if((0,G.Wi)(u))return[];const{results:c}=yield function Ue(i,r,o){return _.apply(this,arguments)}(t.layer.parsedUrl,u);return c.map(w=>w.feature)})()}_createIdentifyParameters(o,a){var t=this;return(0,U.Z)(function*(){var g,T;const{floors:u,spatialReference:c,scale:w}=t.view,h=(0,G.pC)(a)?a.event:null,l=yield t._collectPopupProviders(t.layer.sublayers,w,a);if(!l.length)return null;yield Promise.all(l.map(({sublayer:v})=>v.load().catch(()=>{})));const I=Math.min((0,E.Z)("mapimagelayer-popup-identify-max-tolerance"),t.layer.allSublayers.reduce((v,b)=>b.renderer?(0,ie.k)({renderer:b.renderer,event:h}):v,2)),y=t.createFetchPopupFeaturesQueryGeometry(o,I),f=(0,re.dp)(w,c),F=Math.round(y.width/f),M=new te.Z({xmin:y.center.x-f*F,ymin:y.center.y-f*F,xmax:y.center.x+f*F,ymax:y.center.y+f*F,spatialReference:y.spatialReference}),D=!1===(null==(T=null==(g=t.layer.capabilities)?void 0:g.operations)?void 0:T.supportsQuery)||(yield new Promise(v=>{let b=!1;Promise.all(l.map(function(){var V=(0,U.Z)(function*({popupTemplate:W}){if(W){const S=yield t._loadArcadeModules(W);if(b)return;(null==S?void 0:S.arcadeUtils.hasGeometryOperations(W))&&(b=!0,v(!0))}});return function(W){return V.apply(this,arguments)}}())).finally(()=>v(!1))}));return new ae({floors:u,gdbVersion:t.layer.gdbVersion,geometry:o,height:F,layerOption:"popup",mapExtent:M,maxAllowableOffset:D?0:f,returnGeometry:!0,spatialReference:c,sublayers:t.layer.sublayers,timeExtent:t.timeExtent,tolerance:I,width:F})})()}_fetchPopupFeaturesUsingQueries(o,a){var t=this;return(0,U.Z)(function*(){const u=yield t._collectPopupProviders(t.layer.sublayers,t.view.scale,a),c=(0,G.pC)(a)?a.event:null,w=u.map(function(){var h=(0,U.Z)(function*({sublayer:l,popupTemplate:I}){var D,g;yield l.load().catch(()=>{});const y=l.createQuery(),f=(0,ie.k)({renderer:l.renderer,event:c}),F=t.createFetchPopupFeaturesQueryGeometry(o,f);if(y.geometry=F,y.outFields=yield(0,pe.e)(l,I),"floors"in t.view){const T=null==(g=null==(D=t.view)?void 0:D.floors)?void 0:g.clone(),v=(0,X.f)(T,l);(0,G.pC)(v)&&(y.where=y.where?`(${y.where}) AND (${v})`:v)}const M=yield t._loadArcadeModules(I);return M&&M.arcadeUtils.hasGeometryOperations(I)||(y.maxAllowableOffset=F.width/f),(yield l.queryFeatures(y)).features});return function(l){return h.apply(this,arguments)}}());return(yield(0,j.as)(w)).reduce((h,l)=>l.value?[...h,...l.value]:h,[]).filter(h=>null!=h)})()}_collectPopupProviders(o,a,t){return(0,U.Z)(function*(){const u=[],c=function(){var h=(0,U.Z)(function*(l){if(l.visible&&(0===l.minScale||a<=l.minScale)&&(0===l.maxScale||a>=l.maxScale))if(l.sublayers)l.sublayers.forEach(c);else if(l.popupEnabled){const f=(0,pe.V)(l,ee($({},t),{defaultPopupTemplateEnabled:!1}));(0,G.pC)(f)&&u.unshift({sublayer:l,popupTemplate:f})}});return function(I){return h.apply(this,arguments)}}(),w=o.toArray().reverse().map(c);return yield Promise.all(w),u})()}_loadArcadeModules(o){var a;if((null==(a=o.expressionInfos)?void 0:a.length)||Array.isArray(o.content)&&o.content.some(t=>"expression"===t.type))return(0,Re.LC)()}};return(0,s._)([(0,n.Cb)()],r.prototype,"exportImageParameters",void 0),(0,s._)([(0,n.Cb)({readOnly:!0})],r.prototype,"exportImageVersion",null),(0,s._)([(0,n.Cb)()],r.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],r.prototype,"suspended",void 0),(0,s._)([(0,n.Cb)(ye.qG)],r.prototype,"timeExtent",void 0),r=(0,s._)([(0,P.j)("esri.views.layers.MapImageLayerView")],r),r};var Ze=e(94421),Me=e(94672);const De=A.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D");let K=class extends(Ve((0,Ze.Z)((0,Q.y)(Y.Z)))){constructor(){super(...arguments),this._highlightGraphics=new d.J}update(i){this.strategy.update(i).catch(r=>{(0,j.D_)(r)||De.error(r)})}attach(){const{imageMaxWidth:i,imageMaxHeight:r,version:o}=this.layer,a=o>=10.3,t=o>=10;this._bitmapContainer=new Z.c,this.container.addChild(this._bitmapContainer);const u=new H.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new z.Z(this.view.featuresTilingScheme)});this.container.addChild(u.container),this.strategy=new R.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:i,imageMaxHeight:r,imageRotationSupported:a,imageNormalizationSupported:t,hidpi:!0}),this.handles.add((0,C.YP)(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion"),this.handles.add((0,C.YP)(()=>{var c;return null==(c=this.view)?void 0:c.floors},()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(i,r){return this._highlightGraphics.add(i),{remove:()=>{this._highlightGraphics.remove(i)}}}supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}createFetchPopupFeaturesQueryGeometry(i,r){return(0,Me.K)(i,r,this.view)}doRefresh(){var i=this;return(0,U.Z)(function*(){i.requestUpdate()})()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(i,r,o,a){return this.layer.fetchImage(i,r,o,$({timeExtent:this.timeExtent,floors:this.view.floors},a))}};(0,s._)([(0,n.Cb)()],K.prototype,"strategy",void 0),(0,s._)([(0,n.Cb)()],K.prototype,"updating",void 0),K=(0,s._)([(0,P.j)("esri.views.2d.layers.MapImageLayerView2D")],K);const Te=K},10023:(N,x,e)=>{e.d(x,{V:()=>n,e:()=>j});var U=e(15861),s=e(62208),A=e(36630);function j(p){return C.apply(this,arguments)}function C(){return(C=(0,U.Z)(function*(p,E=p.popupTemplate){if((0,s.Wi)(E))return[];const O=yield E.getRequiredFields(p.fieldsIndex),{lastEditInfoEnabled:P}=E,{objectIdField:d,typeIdField:Z,globalIdField:Q,relationships:H}=p;if(O.includes("*"))return["*"];const z=P?yield(0,A.CH)(p):[],R=(0,A.Q0)(p.fieldsIndex,[...O,...z]);return Z&&R.push(Z),R&&d&&p.fieldsIndex.has(d)&&!R.includes(d)&&R.push(d),R&&Q&&p.fieldsIndex.has(Q)&&!R.includes(Q)&&R.push(Q),H&&H.forEach(Y=>{const{keyField:B}=Y;R&&B&&p.fieldsIndex.has(B)&&!R.includes(B)&&R.push(B)}),R})).apply(this,arguments)}function n(p,E){return p.popupTemplate?p.popupTemplate:(0,s.pC)(E)&&E.defaultPopupTemplateEnabled&&(0,s.pC)(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}}}]);