"use strict";var W=Object.defineProperty,G=Object.defineProperties,H=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,T=(p,a,r)=>a in p?W(p,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[a]=r,h=(p,a)=>{for(var r in a||(a={}))z.call(a,r)&&T(p,r,a[r]);if(M)for(var r of M(a))K.call(a,r)&&T(p,r,a[r]);return p},w=(p,a)=>G(p,H(a));(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[5625],{85625:(p,a,r)=>{r.r(a),r.d(a,{default:()=>$});var l=r(15861),s=r(17626),f=(r(29132),r(26584)),S=r(62208),b=r(21726),i=r(77712),F=(r(85931),r(8314)),u=(r(90912),r(68653)),d=r(76898),v=r(32258),I=r(47996),m=r(10699),A=r(59289),J=r(17253),L=r(2004);let y=class extends I.Z{constructor(e){var t;super(e),t=this,this.type="csv",this.refresh=(0,m.Ds)(function(){var o=(0,l.Z)(function*(c){yield t.load();const{extent:g,timeExtent:C}=yield t._connection.invoke("refresh",c);return t.sourceJSON.extent=g,C&&(t.sourceJSON.timeInfo.timeExtent=[C.start,C.end]),{dataChanged:!0,updates:{extent:t.sourceJSON.extent,timeInfo:t.sourceJSON.timeInfo}}});return function(c){return o.apply(this,arguments)}}())}load(e){const t=(0,S.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){var e=this;return(0,l.Z)(function*(){return yield e.load(),e._connection.openPorts()})()}queryFeatures(e,t={}){var o=this;return(0,l.Z)(function*(){yield o.load(t);const c=yield o._connection.invoke("queryFeatures",e?e.toJSON():null,t);return J.default.fromJSON(c)})()}queryFeaturesJSON(e,t={}){var o=this;return(0,l.Z)(function*(){return yield o.load(t),o._connection.invoke("queryFeatures",e?e.toJSON():null,t)})()}queryFeatureCount(e,t={}){var o=this;return(0,l.Z)(function*(){return yield o.load(t),o._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)})()}queryObjectIds(e,t={}){var o=this;return(0,l.Z)(function*(){return yield o.load(t),o._connection.invoke("queryObjectIds",e?e.toJSON():null,t)})()}queryExtent(e,t={}){var o=this;return(0,l.Z)(function*(){yield o.load(t);const c=yield o._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:c.count,extent:L.Z.fromJSON(c.extent)}})()}querySnapping(e,t={}){var o=this;return(0,l.Z)(function*(){return yield o.load(t),o._connection.invoke("querySnapping",e,t)})()}_startWorker(e){var t=this;return(0,l.Z)(function*(){t._connection=yield(0,A.bA)("CSVSourceWorker",{strategy:(0,F.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{url:o,delimiter:c,fields:g,latitudeField:C,longitudeField:B,spatialReference:D,timeInfo:E}=t.loadOptions,P=yield t._connection.invoke("load",{url:o,customParameters:t.customParameters,parsingOptions:{delimiter:c,fields:null==g?void 0:g.map(V=>V.toJSON()),latitudeField:C,longitudeField:B,spatialReference:null==D?void 0:D.toJSON(),timeInfo:null==E?void 0:E.toJSON()}},{signal:e});t.locationInfo=P.locationInfo,t.sourceJSON=P.layerDefinition,t.delimiter=P.delimiter})()}};(0,s._)([(0,i.Cb)()],y.prototype,"type",void 0),(0,s._)([(0,i.Cb)()],y.prototype,"loadOptions",void 0),(0,s._)([(0,i.Cb)()],y.prototype,"customParameters",void 0),(0,s._)([(0,i.Cb)()],y.prototype,"locationInfo",void 0),(0,s._)([(0,i.Cb)()],y.prototype,"sourceJSON",void 0),(0,s._)([(0,i.Cb)()],y.prototype,"delimiter",void 0),y=(0,s._)([(0,d.j)("esri.layers.graphics.sources.CSVSource")],y);var U=r(56554),O=r(84952),x=r(29840),Q=r(65234);function j(e,t){throw new f.Z(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let n=class extends v.default{constructor(...e){super(...e),this.capabilities=(0,U.MS)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=Q.Z.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?h({url:e},t):e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=(0,b.mN)(e);this._set("url",t.path),t.query&&(this.customParameters=h(h({},this.customParameters),t.query))}createGraphicsSource(e){var t=this;return(0,l.Z)(function*(){const o=new y({loadOptions:{delimiter:t.delimiter,fields:t.fields,latitudeField:t.latitudeField,longitudeField:t.longitudeField,spatialReference:t.spatialReference,timeInfo:t.timeInfo,url:t.url},customParameters:t.customParameters});return t._set("source",o),yield o.load({signal:e}),t.read({locationInfo:o.locationInfo,columnDelimiter:o.delimiter},{origin:"service",url:t.parsedUrl}),o})()}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(O.Z.from(e)||this.createQuery())).then(o=>{if(null==o?void 0:o.features)for(const c of o.features)c.layer=c.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(O.Z.from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(O.Z.from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(O.Z.from(e)||this.createQuery()))}write(e,t){return super.write(e,w(h({},t),{writeLayerSchema:!0}))}clone(){throw new f.Z("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}save(e){var t=this;return(0,l.Z)(function*(){return j(t,"csv-layer:save")})()}saveAs(e,t){var o=this;return(0,l.Z)(function*(){return j(o,"csv-layer:save-as")})()}hasDataChanged(){var e=this;return(0,l.Z)(function*(){try{const{dataChanged:t,updates:o}=yield e.source.refresh(e.customParameters);return(0,S.pC)(o)&&e.read(o,{origin:"service",url:e.parsedUrl,ignoreDefaults:!0}),t}catch(t){}return!1})()}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,s._)([(0,i.Cb)({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"capabilities",void 0),(0,s._)([(0,i.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],n.prototype,"delimiter",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],n.prototype,"editingEnabled",void 0),(0,s._)([(0,i.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],n.prototype,"fields",void 0),(0,s._)([(0,i.Cb)({type:Boolean,readOnly:!0})],n.prototype,"isTable",null),(0,s._)([(0,u.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],n.prototype,"readWebMapLabelsVisible",null),(0,s._)([(0,i.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],n.prototype,"latitudeField",void 0),(0,s._)([(0,i.Cb)({type:["show","hide"]})],n.prototype,"listMode",void 0),(0,s._)([(0,i.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],n.prototype,"locationType",void 0),(0,s._)([(0,i.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],n.prototype,"longitudeField",void 0),(0,s._)([(0,i.Cb)({type:["CSV"]})],n.prototype,"operationalLayerType",void 0),(0,s._)([(0,i.Cb)()],n.prototype,"outFields",void 0),(0,s._)([(0,i.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],n.prototype,"path",void 0),(0,s._)([(0,i.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],n.prototype,"portalItem",void 0),(0,s._)([(0,i.Cb)({json:{read:!1},cast:null,type:y,readOnly:!0})],n.prototype,"source",void 0),(0,s._)([(0,i.Cb)({json:{read:!1},value:"csv",readOnly:!0})],n.prototype,"type",void 0),(0,s._)([(0,i.Cb)({json:{read:x.r,write:{isRequired:!0,ignoreOrigin:!0,writer:x.w}}})],n.prototype,"url",null),n=(0,s._)([(0,d.j)("esri.layers.CSVLayer")],n);const $=n},87757:(p,a,r)=>{r.d(a,{g:()=>l});const l={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},56554:(p,a,r)=>{r.d(a,{Dm:()=>R,Hq:()=>F,MS:()=>N,bU:()=>S});var l=r(8314),s=r(58817),Z=r(87757),f=r(24837);function S(u){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===u||"esriGeometryMultipoint"===u?f.I4:"esriGeometryPolyline"===u?f.ET:f.lF}}}const b=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let i=1;function R(u,d){if((0,l.Z)("esri-csp-restrictions"))return()=>h({[d]:null},u);try{let v=`this.${d} = null;`;for(const m in u)v+=`this${b.test(m)?`.${m}`:`["${m}"]`} = ${JSON.stringify(u[m])};`;const I=new Function(`\n      return class AttributesClass$${i++} {\n        constructor() {\n          ${v};\n        }\n      }\n    `)();return()=>new I}catch(v){return()=>h({[d]:null},u)}}function F(u={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(u)}}]}function N(u,d){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:u},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:d,supportsDelete:d,supportsEditing:d,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:d,supportsExceedsLimitStatistics:!0},query:Z.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:d,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);