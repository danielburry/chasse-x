"use strict";var ft=Object.defineProperty,ht=Object.defineProperties,gt=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertySymbols,bt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,Le=(N,w,l)=>w in N?ft(N,w,{enumerable:!0,configurable:!0,writable:!0,value:l}):N[w]=l,C=(N,w)=>{for(var l in w||(w={}))bt.call(w,l)&&Le(N,l,w[l]);if(Re)for(var l of Re(w))vt.call(w,l)&&Le(N,l,w[l]);return N},Fe=(N,w)=>ht(N,gt(w));(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[6894],{46894:(N,w,l)=>{l.r(w),l.d(w,{default:()=>ut});var V,te=l(15861),a=l(17626),re=l(59318),Ae=l(88879),Pe=l(73281),ne=l(84792),H=l(74333),Me=l(46882),Te=l(80542),je=l(2076),Ze=l(58817),Z=l(62208),se=l(99959),Ve=l(10699),ie=l(32917),X=l(21726),u=l(77712),ae=l(90912),O=l(68653),le=l(76898),J=l(99433),We=l(36054),F=l(2004),R=l(65234),oe=l(83137),Be=l(37053),De=l(44917),Ge=l(552),$e=l(49286),He=l(6647),Xe=l(30346),Je=l(99555),Qe=l(97941),Q=l(22825),Ye=l(38305),ue=l(13812),pe=l(51920),ze=l(72392),Ke=l(61996),qe=(l(85931),l(8314),l(66656));let ke=0,h=V=class extends((0,Ke.IG)(se.w)){constructor(e){super(e),this._sublayersHandles=new ze.Z,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?F.Z.fromJSON(e):null}get id(){const e=this._get("id");return null==e?ke++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(r=>{r.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(r=>{r.parent=this,r.layer=this.layer}),this._sublayersHandles.add([e.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),e.on("after-remove",({item:r})=>{r.parent=null,r.layer=null})])),this._set("sublayers",e)}castSublayers(e){return(0,ae.se)(H.Z.ofType(V),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new V;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(t=>t.clone())),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,a._)([(0,u.Cb)()],h.prototype,"description",null),(0,a._)([(0,u.Cb)({readOnly:!0})],h.prototype,"dimensions",void 0),(0,a._)([(0,u.Cb)({value:null})],h.prototype,"fullExtent",null),(0,a._)([(0,O.r)("fullExtent",["extent"])],h.prototype,"readExtent",null),(0,a._)([(0,u.Cb)()],h.prototype,"fullExtents",void 0),(0,a._)([(0,u.Cb)()],h.prototype,"featureInfoFormat",void 0),(0,a._)([(0,u.Cb)()],h.prototype,"featureInfoUrl",void 0),(0,a._)([(0,u.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),(0,a._)([(0,u.Cb)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),(0,a._)([(0,O.r)(["web-document"],"legendUrl")],h.prototype,"readLegendUrl",null),(0,a._)([(0,u.Cb)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),(0,a._)([(0,u.Cb)({value:null})],h.prototype,"layer",null),(0,a._)([(0,u.Cb)()],h.prototype,"maxScale",void 0),(0,a._)([(0,u.Cb)()],h.prototype,"minScale",void 0),(0,a._)([(0,u.Cb)({readOnly:!0})],h.prototype,"effectiveScaleRange",null),(0,a._)([(0,u.Cb)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],h.prototype,"name",null),(0,a._)([(0,u.Cb)()],h.prototype,"parent",void 0),(0,a._)([(0,u.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),(0,a._)([(0,u.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),(0,a._)([(0,u.Cb)()],h.prototype,"sublayers",null),(0,a._)([(0,qe.p)("sublayers")],h.prototype,"castSublayers",null),(0,a._)([(0,u.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),(0,a._)([(0,u.Cb)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",null),(0,a._)([(0,u.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=V=(0,a._)([(0,le.j)("esri.layers.support.WMSSublayer")],h);const Y=h;var _e=l(26584);const W={84:4326,83:4269,27:4267};function et(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const g=Array.prototype.slice.call(r.childNodes).map(S=>S.textContent).join("\r\n");throw new _e.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",g)}const n=x("Capability",r),s=x("Service",r),p=x("Request",n);if(!n||!s||!p)return null;const i=x("Layer",n);if(!i)return null;const y="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",o=I("Title",s,"")||I("Name",s,""),d=I("AccessConstraints",s,""),f=/^none$/i.test(d)?"":d,c=I("Abstract",s,""),E=parseInt(I("MaxWidth",s,"5000"),10),v=parseInt(I("MaxHeight",s,"5000"),10),U=ye(p,"GetMap"),T=ce(p,"GetMap"),b=M(i,y,t);let Se,L,G,k=0;if(Array.prototype.slice.call(n.childNodes).forEach(g=>{"Layer"===g.nodeName&&(0===k?Se=g:(1===k&&b.name&&(b.name="",b.sublayers.push(M(Se,y,t))),b.sublayers.push(M(g,y,t))),k++)}),!b)return null;const pt=b.fullExtents;if(L=b.sublayers,L||(L=[]),0===L.length&&L.push(b),G=b.extent,!G){const g=new F.Z(L[0].extent);b.extent=g.toJSON(),G=b.extent}const dt=b.spatialReferences.length>0?b.spatialReferences:de(b),Ce=ce(p,"GetFeatureInfo");let $;if(Ce){const g=ye(p,"GetFeatureInfo");g.includes("text/html")?$="text/html":g.includes("text/plain")&&($="text/plain")}if(!$){const g=S=>{S&&(S.queryable=!1,S.sublayers&&S.sublayers.forEach(_=>{g(_)}))};g(b)}const Ne=me(L),mt=b.minScale||0,ct=b.maxScale||0,Ie=b.dimensions,yt=Ne.reduce((g,S)=>g.concat(S.dimensions),[]),Ue=Ie.concat(yt).filter(z);let Oe=null;if(Ue.length>0){let g=Number.POSITIVE_INFINITY,S=Number.NEGATIVE_INFINITY;Ue.forEach(_=>{const{extent:ee}=_;!function nt(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(ee)?ee.forEach(j=>{g=Math.min(g,j.min.getTime()),S=Math.max(S,j.max.getTime())}):ee.forEach(j=>{g=Math.min(g,j.getTime()),S=Math.max(S,j.getTime())})}),Oe={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[g,S]}}return{copyright:f,description:c,dimensions:Ie,extent:G,fullExtents:pt,featureInfoFormat:$,featureInfoUrl:Ce,mapUrl:T,maxWidth:E,maxHeight:v,maxScale:ct,minScale:mt,layers:Ne,spatialReferences:dt,supportedImageFormatTypes:U,timeInfo:Oe,title:o,version:y}}function de(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=de(t);if(r.length>0)return r}return[]}function me(e){let t=[];return e.forEach(r=>{t.push(r),r.sublayers&&r.sublayers.length&&(t=t.concat(me(r.sublayers)),delete r.sublayers)}),t}function B(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(he(n)&&n.nodeName===e)return n}return null}function D(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];he(s)&&s.nodeName===e&&r.push(s)}return r}function I(e,t,r){const n=x(e,t);return n?n.textContent:r}function P(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),p=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let y,o,d,f;r?(y=isNaN(s)?-Number.MAX_VALUE:s,o=isNaN(n)?-Number.MAX_VALUE:n,d=isNaN(i)?Number.MAX_VALUE:i,f=isNaN(p)?Number.MAX_VALUE:p):(y=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(s)?-Number.MAX_VALUE:s,d=isNaN(p)?Number.MAX_VALUE:p,f=isNaN(i)?Number.MAX_VALUE:i);const c=new R.Z({wkid:t});return new F.Z({xmin:y,ymin:o,xmax:d,ymax:f,spatialReference:c})}function ce(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const s=x("HTTP",n);if(s){const p=x("Get",s);if(p){let i=function rt(e,t,r,n){const s=x(e,r);return s?B(t,s,n):n}("OnlineResource","xlink:href",p,null);if(i)return i.indexOf("&")===i.length-1&&(i=i.substring(0,i.length-1)),function st(e,t){const r=[],n=(0,X.mN)(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}(i,["service","request"])}}}}return null}function ye(e,t){const r=D("Operation",e);if(0===r.length)return D("Format",x(t,e)).map(s=>s.textContent);const n=[];return r.forEach(s=>{s.getAttribute("name")===t&&D("Format",s).forEach(p=>{n.push(p.textContent)})}),n}function fe(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const p=Number(s);return isNaN(p)?r:p}function M(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},s=x("LatLonBoundingBox",e),p=x("EX_GeographicBoundingBox",e);let i=null;s&&(i=P(s,4326)),p&&(i=new F.Z(0,0,0,0,new R.Z({wkid:4326})),i.xmin=parseFloat(I("westBoundLongitude",p,"0")),i.ymin=parseFloat(I("southBoundLatitude",p,"0")),i.xmax=parseFloat(I("eastBoundLongitude",p,"0")),i.ymax=parseFloat(I("northBoundLatitude",p,"0"))),s||p||(i=new F.Z(-180,-90,180,90,new R.Z({wkid:4326}))),n.minScale=fe(e,"MaxScaleDenominator",0),n.maxScale=fe(e,"MinScaleDenominator",0);const y=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(o=>{if("Name"===o.nodeName)n.name=o.textContent||"";else if("Title"===o.nodeName)n.title=o.textContent||"";else if("Abstract"===o.nodeName)n.description=o.textContent||"";else if("BoundingBox"===o.nodeName){const d=o.getAttribute(y);if(d&&0===d.indexOf("EPSG:")){const c=parseInt(d.substring(5),10);0===c||isNaN(c)||i||(i="1.3.0"===t?P(o,c,(0,Q.A)(c)):P(o,c))}const f=d&&d.indexOf(":");if(f&&f>-1){let c=parseInt(d.substring(f+1,d.length),10);0===c||isNaN(c)||(c=W[c]?W[c]:c);const E="1.3.0"===t?P(o,c,(0,Q.A)(c)):P(o,c);n.fullExtents.push(E)}}else if(o.nodeName===y)o.textContent.split(" ").forEach(d=>{const f=d.includes(":")?parseInt(d.split(":")[1],10):parseInt(d,10);if(0!==f&&!isNaN(f)){const c=W[f]?W[f]:f;n.spatialReferences.includes(c)||n.spatialReferences.push(c)}});else if("Style"!==o.nodeName||n.legendURL){if("Layer"===o.nodeName){const d=M(o,t,r);d&&(d.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(d))}}else{const d=x("LegendURL",o);if(d){const f=x("OnlineResource",d);f&&(n.legendURL=f.getAttribute("xlink:href"))}}}),n.extent=null==i?void 0:i.toJSON(),n.dimensions=D("Dimension",e).filter(o=>o.getAttribute("name")&&o.getAttribute("units")&&o.textContent).map(o=>{const d=o.getAttribute("name"),f=o.getAttribute("units"),c=o.textContent,E=o.getAttribute("unitSymbol"),v=o.getAttribute("default"),U="0"!==B("default",o,"0"),T="0"!==B("nearestValue",o,"0"),b="0"!==B("current",o,"0");return z({name:d,units:f})?{name:"time",units:"ISO8601",extent:xe(c),default:xe(v),multipleValues:U,nearestValue:T,current:b}:function ge(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}({name:d,units:f})?{name:"elevation",units:f,extent:be(c),unitSymbol:E,default:be(v),multipleValues:U,nearestValue:T}:{name:d,units:f,extent:ve(c),unitSymbol:E,default:ve(v),multipleValues:U,nearestValue:T}}),n}function he(e){return e.nodeType===Node.ELEMENT_NODE}function z(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function be(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&"0"!==s[2]?parseFloat(s[2]):void 0}}).filter(n=>n):r.map(n=>parseFloat(n))}function ve(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&"0"!==s[2]?s[2]:void 0}}).filter(n=>n):r}function xe(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:new Date(s[0]),max:new Date(s[1]),resolution:s.length>=3&&"0"!==s[2]?it(s[2]):void 0}}).filter(n=>n):r.map(n=>new Date(n))}function it(e){const r=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return r?{years:A(r[1]),months:A(r[2]),days:A(r[3]),hours:A(r[4]),minutes:A(r[5]),seconds:A(r[6])}:null}function A(e){if(!e)return 0;const r=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function K(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const we=new Set([102100,3857,102113,900913]),at=new Set([3395,54004]),q=new je.X({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let m=class extends((0,Te.p)((0,Ge.h)((0,Qe.n)((0,Xe.Q)((0,Je.M)((0,$e.q)((0,He.I)((0,se.R)(De.Z))))))))){constructor(...e){super(...e),this.allSublayers=new Me.Z({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null;const t="wms-sublayer";this.own((0,ie.YP)(()=>this.sublayers,(r,n)=>{if(n){for(const s of n)s.layer=null;this.handles.remove(t)}if(r){for(const s of r)s.parent=this,s.layer=this;this.handles.add([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],t)}},ie.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?C({url:e},t):e}load(e){const t=(0,Z.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Ve.r9).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new F.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new R.Z(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return Ee(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return Ee(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,p=e.flatten(({sublayers:i})=>i&&i.toArray()).toArray();p.forEach(i=>{"number"==typeof i.parent.id&&(s.has(i.parent.id)?s.get(i.parent.id).push(i.id):s.set(i.parent.id,[i.id]))}),p.forEach(i=>{const y=C({sublayer:i},n),o=i.write({parentLayerId:"number"==typeof i.parent.id?i.parent.id:-1},y);if(s.has(i.id)&&(o.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const d=i.write({},y);delete d.id,t.layers.push(d)}}),t.visibleLayers=p.filter(i=>i.visible&&!i.sublayers).map(i=>i.name)}createExportImageParameters(e,t,r,n){const s=n&&n.pixelRatio||1,p=(0,oe.yZ)({extent:e,width:t})*s,i=new pe.j({layer:this,scale:p}),{xmin:y,ymin:o,xmax:d,ymax:f,spatialReference:c}=e,E=function lt(e,t){let r=e.wkid;return(0,Z.Wi)(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),we.has(r)?t.find(n=>we.has(n))||t.find(n=>at.has(n))||102100:r)}(c,this.spatialReferences),v="1.3.0"===this.version&&(0,Q.A)(E)?`${o},${y},${f},${d}`:`${y},${o},${d},${f}`,U=i.toJSON();return C({bbox:v,["1.3.0"===this.version?"crs":"srs"]:isNaN(E)?void 0:"EPSG:"+E},U)}fetchImage(e,t,r,n){var s=this;return(0,te.Z)(function*(){var c,E;const p=s.mapUrl,i=s.createExportImageParameters(e,t,r,n);if(!i.layers){const v=document.createElement("canvas");return v.width=t,v.height=r,v}const y=null==(c=null==n?void 0:n.timeExtent)?void 0:c.start,o=null==(E=null==n?void 0:n.timeExtent)?void 0:E.end,d=(0,Z.pC)(y)&&(0,Z.pC)(o)?y.getTime()===o.getTime()?K(y):`${K(y)}/${K(o)}`:void 0,f={responseType:"image",query:s._mixCustomParameters(C(Fe(C({width:t,height:r},i),{time:d}),s.refreshParameters)),signal:null==n?void 0:n.signal};return(0,ne.default)(p,f).then(v=>v.data)})()}fetchFeatureInfo(e,t,r,n,s){const p=(0,oe.yZ)({extent:e,width:t}),y=function tt(e){return e.length?e.filter(t=>t.popupEnabled&&t.name&&t.queryable).map(t=>t.name).join(","):""}(new pe.j({layer:this,scale:p}).visibleSublayers);if(!this.featureInfoUrl||!y)return null;const d=C({query_layers:y,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},"1.3.0"===this.version?{I:n,J:s}:{x:n,y:s}),f=C(C({},this.createExportImageParameters(e,t,r)),d),c=this._mixCustomParameters(f),E=(0,X.fl)(this.featureInfoUrl,c),v=document.createElement("iframe");v.src=E,v.style.border="none",v.style.margin="0",v.style.width="100%",v.setAttribute("sandbox","");const U=new Pe.Z({title:this.title,content:v});return new Ae.Z({sourceLayer:this,popupTemplate:U})}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return(0,Ye.G)(this.url)||this.spatialReferences.some(t=>{const r=900913===t?R.Z.WebMercator:new R.Z({wkid:t});return(0,Be.fS)(r,e)})}_fetchService(e){var t=this;return(0,te.Z)(function*(){if(!t.resourceInfo){t.parsedUrl.query&&t.parsedUrl.query.service&&(t.parsedUrl.query.SERVICE=t.parsedUrl.query.service,delete t.parsedUrl.query.service),t.parsedUrl.query&&t.parsedUrl.query.request&&(t.parsedUrl.query.REQUEST=t.parsedUrl.query.request,delete t.parsedUrl.query.request);const r=yield(0,ne.default)(t.parsedUrl.path,{query:C(C({SERVICE:"WMS",REQUEST:"GetCapabilities"},t.parsedUrl.query),t.customParameters),responseType:"xml",signal:e});t.resourceInfo=et(r.data)}if(t.parsedUrl){const r=new X.R9(t.parsedUrl.path);"https"!==r.scheme||r.port&&"443"!==r.port||re.Z.request.httpsDomains.includes(r.host)||re.Z.request.httpsDomains.push(r.host)}t.read(t.resourceInfo,{origin:"service"})})()}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t=C(C({},this.customParameters),this.customLayerParameters);for(const r in t)e[r.toLowerCase()]=t[r];return e}};function Ee(e,t,r){const n=new Map;e.every(p=>null==p.id)&&(e=(0,Ze.d9)(e)).forEach((p,i)=>p.id=i);for(const p of e){const i=new Y;i.read(p,t),-1===(null==r?void 0:r.indexOf(i.name))&&(i.visible=!1),n.set(i.id,i)}const s=[];for(const p of e){const i=n.get(p.id);if(null!=p.parentLayerId&&p.parentLayerId>=0){const y=n.get(p.parentLayerId);y.sublayers||(y.sublayers=new H.Z),y.sublayers.unshift(i)}else s.unshift(i)}return s}(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"allSublayers",void 0),(0,a._)([(0,u.Cb)({json:{type:Object,write:!0}})],m.prototype,"customParameters",void 0),(0,a._)([(0,u.Cb)({json:{type:Object,write:!0}})],m.prototype,"customLayerParameters",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:!0}})],m.prototype,"copyright",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"description",void 0),(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"dimensions",void 0),(0,a._)([(0,u.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],m.prototype,"fullExtent",void 0),(0,a._)([(0,O.r)(["web-document","portal-item"],"fullExtent",["extent"])],m.prototype,"readFullExtentFromItemOrMap",null),(0,a._)([(0,J.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],m.prototype,"writeFullExtent",null),(0,a._)([(0,u.Cb)()],m.prototype,"fullExtents",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoFormat",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoUrl",void 0),(0,a._)([(0,u.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:q.jsonValues,read:{reader:q.read,source:"format"},write:{writer:q.write,target:"format"}}}}})],m.prototype,"imageFormat",void 0),(0,a._)([(0,O.r)("imageFormat",["supportedImageFormatTypes"])],m.prototype,"readImageFormat",null),(0,a._)([(0,u.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],m.prototype,"imageMaxHeight",void 0),(0,a._)([(0,u.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],m.prototype,"imageMaxWidth",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"imageTransparency",void 0),(0,a._)([(0,u.Cb)(ue.rn)],m.prototype,"legendEnabled",void 0),(0,a._)([(0,u.Cb)({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"mapUrl",void 0),(0,a._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],m.prototype,"isReference",void 0),(0,a._)([(0,u.Cb)({type:["WMS"]})],m.prototype,"operationalLayerType",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"resourceInfo",void 0),(0,a._)([(0,u.Cb)({type:R.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],m.prototype,"spatialReference",void 0),(0,a._)([(0,O.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],m.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,a._)([(0,u.Cb)({type:[ae.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],m.prototype,"spatialReferences",void 0),(0,a._)([(0,J.c)(["web-document","portal-item"],"spatialReferences")],m.prototype,"writeSpatialReferences",null),(0,a._)([(0,u.Cb)({type:H.Z.ofType(Y),json:{write:{target:"layers",overridePolicy(e,t,r){if(function ot(e,t){return e.some(r=>{for(const n in r)if((0,We.d)(r,n,null,t))return!0;return!1})}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],m.prototype,"sublayers",void 0),(0,a._)([(0,O.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],m.prototype,"readSublayersFromItemOrMap",null),(0,a._)([(0,O.r)("service","sublayers",["layers"])],m.prototype,"readSublayers",null),(0,a._)([(0,J.c)("sublayers",{layers:{type:[Y]},visibleLayers:{type:[String]}})],m.prototype,"writeSublayers",null),(0,a._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],m.prototype,"type",void 0),(0,a._)([(0,u.Cb)(ue.HQ)],m.prototype,"url",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"version",void 0),m=(0,a._)([(0,le.j)("esri.layers.WMSLayer")],m);const ut=m}}]);