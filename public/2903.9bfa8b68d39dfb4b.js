"use strict";var Et=Object.defineProperty,$=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable,W=(y,l,e)=>l in y?Et(y,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):y[l]=e,F=(y,l)=>{for(var e in l||(l={}))Ft.call(l,e)&&W(y,e,l[e]);if($)for(var e of $(l))Rt.call(l,e)&&W(y,e,l[e]);return y};(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[2903],{72903:(y,l,e)=>{e.r(l),e.d(l,{default:()=>gt});var c=e(15861),o=e(17626),S=(e(29132),e(73281)),I=(e(4832),e(49067),e(96794),e(69747),e(40425),e(69357),e(40342),e(14726),e(33474),e(32088)),m=e(62208),H=e(99959),M=e(21726),n=e(77712),V=(e(85931),e(8314)),U=(e(90912),e(76898)),L=e(71774),K=e(44917),A=e(26584),Y=e(47996),X=e(63290),w=e(10699),q=e(59289),k=e(56554),_=e(17253),Q=e(2004),tt=e(37118);const B=X.Z.getLogger("esri.layers.graphics.sources.GeoJSONSource");let g=class extends Y.Z{constructor(){var t;super(...arguments),t=this,this.type="geojson",this.refresh=(0,w.Ds)(function(){var r=(0,c.Z)(function*(s){yield t.load();const{extent:a,timeExtent:d}=yield t._connection.invoke("refresh",s);return t.sourceJSON.extent=a,d&&(t.sourceJSON.timeInfo.timeExtent=[d.start,d.end]),{dataChanged:!0,updates:{extent:t.sourceJSON.extent,timeInfo:t.sourceJSON.timeInfo}}});return function(s){return r.apply(this,arguments)}}())}load(t){const r=(0,m.pC)(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(r)),Promise.resolve(this)}destroy(){var t;null==(t=this._connection)||t.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,r={}){return this.load(r).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,r)).then(s=>_.default.fromJSON(s))}queryFeaturesJSON(t,r={}){return this.load(r).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,r))}queryFeatureCount(t,r={}){return this.load(r).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,r))}queryObjectIds(t,r={}){return this.load(r).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,r))}queryExtent(t,r={}){return this.load(r).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,r)).then(s=>({count:s.count,extent:Q.Z.fromJSON(s.extent)}))}querySnapping(t,r={}){return this.load(r).then(()=>this._connection.invoke("querySnapping",t,r))}_applyEdits(t){if(!this._connection)throw new A.Z("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,s=[],a=[],d=[];if(t.addFeatures)for(const u of t.addFeatures)s.push(this._serializeFeature(u));if(t.deleteFeatures)for(const u of t.deleteFeatures)"objectId"in u&&null!=u.objectId?a.push(u.objectId):"attributes"in u&&null!=u.attributes[r]&&a.push(u.attributes[r]);if(t.updateFeatures)for(const u of t.updateFeatures)d.push(this._serializeFeature(u));return this._connection.invoke("applyEdits",{adds:s,updates:d,deletes:a}).then(({extent:u,timeExtent:v,featureEditResults:C})=>(this.sourceJSON.extent=u,v&&(this.sourceJSON.timeInfo.timeExtent=[v.start,v.end]),this._createEditsResult(C)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const r=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:r?new A.Z("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(t){const{attributes:r}=t,s=this._geometryForSerialization(t);return s?{geometry:s.toJSON(),attributes:r}:{attributes:r}}_geometryForSerialization(t){const{geometry:r}=t;return(0,m.Wi)(r)?null:"mesh"===r.type||"extent"===r.type?tt.Z.fromExtent(r.extent):r}_startWorker(t){var r=this;return(0,c.Z)(function*(){r._connection=yield(0,q.bA)("GeoJSONSourceWorker",{strategy:(0,V.Z)("feature-layers-workers")?"dedicated":"local",signal:t});const{fields:s,spatialReference:a,hasZ:d,geometryType:u,objectIdField:v,url:C,timeInfo:z,customParameters:Ct}=r.layer,St="defaults"===r.layer.originOf("spatialReference"),Ot={url:C,customParameters:Ct,fields:s&&s.map(b=>b.toJSON()),geometryType:L.Mk.toJSON(u),hasZ:d,objectIdField:v,timeInfo:z?z.toJSON():null,spatialReference:St?null:a&&a.toJSON()},E=yield r._connection.invoke("load",Ot,{signal:t});for(const b of E.warnings)B.warn(b.message,{layer:r.layer,warning:b});E.featureErrors.length&&B.warn(`Encountered ${E.featureErrors.length} validation errors while loading features`,E.featureErrors),r.sourceJSON=E.layerDefinition,r.capabilities=(0,k.MS)(r.sourceJSON.hasZ,!0)})()}};(0,o._)([(0,n.Cb)()],g.prototype,"capabilities",void 0),(0,o._)([(0,n.Cb)()],g.prototype,"type",void 0),(0,o._)([(0,n.Cb)({constructOnly:!0})],g.prototype,"layer",void 0),(0,o._)([(0,n.Cb)()],g.prototype,"sourceJSON",void 0),g=(0,o._)([(0,U.j)("esri.layers.graphics.sources.GeoJSONSource")],g);var et=e(552),rt=e(50107),st=e(35126),ot=e(49286),nt=e(32629),it=e(30346),at=e(99555),lt=e(97941),f=e(13812),ut=e(47717),pt=e(32777),dt=e(41638),yt=e(36255),ht=e(55911),x=e(36630),ct=e(170),mt=e(62667),O=e(84952),ft=e(49430),G=e(65234);const vt=(0,ht.v)();let i=class extends((0,nt.c)((0,rt.N)((0,st.b)((0,et.h)((0,lt.n)((0,at.M)((0,it.Q)((0,ot.q)((0,H.R)(K.Z)))))))))){constructor(t){super(t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new g({layer:this}),this.spatialReference=G.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var t;null==(t=this.source)||t.destroy()}load(t){return this.addResolvingPromise(this.source.load(t).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,x.YN)(this.renderer,this.fieldsIndex),(0,x.UF)(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,M.mN)(this.url):null}set renderer(t){(0,x.YN)(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const r=(0,M.mN)(t);this._set("url",r.path),r.query&&(this.customParameters=F(F({},this.customParameters),r.query))}applyEdits(t,r){var s=this;return(0,c.Z)(function*(){const a=yield e.e(1913).then(e.bind(e,81913));yield s.load();const d=yield a.applyEdits(s,s.source,t,r);return s.read({extent:s.source.sourceJSON.extent,timeInfo:s.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),d})()}on(t,r){return super.on(t,r)}createPopupTemplate(t){return(0,ft.eZ)(this,t)}createQuery(){const t=new O.Z,r=this.get("capabilities.data");t.returnGeometry=!0,r&&r.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:a}=this;return t.timeExtent=null!=s&&null!=a?a.offset(-s.value,s.unit):a||null,t}getFieldDomain(t,r){let s,a=!1;const d=r&&r.feature,u=d&&d.attributes,v=this.typeIdField&&u&&u[this.typeIdField];return null!=v&&this.types&&(a=this.types.some(C=>C.id==v&&(s=C.domains&&C.domains[t],s&&"inherited"===s.type&&(s=this._getLayerDomain(t)),!0))),a||s||(s=this._getLayerDomain(t)),s}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,r){return this.load().then(()=>this.source.queryFeatures(O.Z.from(t)||this.createQuery(),r)).then(s=>{if(null==s?void 0:s.features)for(const a of s.features)a.layer=a.sourceLayer=this;return s})}queryObjectIds(t,r){return this.load().then(()=>this.source.queryObjectIds(O.Z.from(t)||this.createQuery(),r))}queryFeatureCount(t,r){return this.load().then(()=>this.source.queryFeatureCount(O.Z.from(t)||this.createQuery(),r))}queryExtent(t,r){return this.load().then(()=>this.source.queryExtent(O.Z.from(t)||this.createQuery(),r))}hasDataChanged(){var t=this;return(0,c.Z)(function*(){try{const{dataChanged:r,updates:s}=yield t.source.refresh(t.customParameters);return(0,m.pC)(s)&&t.read(s,{origin:"service",url:t.parsedUrl,ignoreDefaults:!0}),r}catch(r){}return!1})()}_getLayerDomain(t){if(!this.fields)return null;let r=null;return this.fields.some(s=>(s.name===t&&(r=s.domain),!!r)),r}};(0,o._)([(0,n.Cb)({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"capabilities",null),(0,o._)([(0,n.Cb)({type:String})],i.prototype,"copyright",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"createQueryVersion",null),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),(0,o._)([(0,n.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),(0,o._)([(0,n.Cb)({type:String})],i.prototype,"displayField",void 0),(0,o._)([(0,n.Cb)({type:Boolean})],i.prototype,"editingEnabled",void 0),(0,o._)([(0,n.Cb)(f.PV)],i.prototype,"elevationInfo",void 0),(0,o._)([(0,n.Cb)(ut.d)],i.prototype,"featureReduction",void 0),(0,o._)([(0,n.Cb)({type:[yt.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),(0,o._)([(0,n.Cb)(vt.fieldsIndex)],i.prototype,"fieldsIndex",void 0),(0,o._)([(0,n.Cb)({type:Q.Z,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),(0,o._)([(0,n.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:L.Mk.read}}})],i.prototype,"geometryType",void 0),(0,o._)([(0,n.Cb)({type:Boolean})],i.prototype,"hasZ",void 0),(0,o._)([(0,n.Cb)(f.id)],i.prototype,"id",void 0),(0,o._)([(0,n.Cb)({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),(0,o._)([(0,n.Cb)(f.iR)],i.prototype,"labelsVisible",void 0),(0,o._)([(0,n.Cb)({type:[ct.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:mt.r},write:!0}})],i.prototype,"labelingInfo",void 0),(0,o._)([(0,n.Cb)(f.rn)],i.prototype,"legendEnabled",void 0),(0,o._)([(0,n.Cb)({type:["show","hide"]})],i.prototype,"listMode",void 0),(0,o._)([(0,n.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],i.prototype,"objectIdField",void 0),(0,o._)([(0,n.Cb)(f.Oh)],i.prototype,"opacity",void 0),(0,o._)([(0,n.Cb)({type:["GeoJSON"]})],i.prototype,"operationalLayerType",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"parsedUrl",null),(0,o._)([(0,n.Cb)(f.C_)],i.prototype,"popupEnabled",void 0),(0,o._)([(0,n.Cb)({type:S.Z,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),(0,o._)([(0,n.Cb)({types:I.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:I.o}}}})],i.prototype,"renderer",null),(0,o._)([(0,n.Cb)(f.YI)],i.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,n.Cb)({readOnly:!0})],i.prototype,"source",void 0),(0,o._)([(0,n.Cb)({type:G.Z})],i.prototype,"spatialReference",void 0),(0,o._)([(0,n.Cb)({type:[pt.Z]})],i.prototype,"templates",void 0),(0,o._)([(0,n.Cb)()],i.prototype,"title",void 0),(0,o._)([(0,n.Cb)({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),(0,o._)([(0,n.Cb)({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),(0,o._)([(0,n.Cb)({type:[dt.Z]})],i.prototype,"types",void 0),(0,o._)([(0,n.Cb)(f.HQ)],i.prototype,"url",null),i=(0,o._)([(0,U.j)("esri.layers.GeoJSONLayer")],i);const gt=i},87757:(y,l,e)=>{e.d(l,{g:()=>c});const c={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},56554:(y,l,e)=>{e.d(l,{Dm:()=>J,Hq:()=>D,MS:()=>T,bU:()=>N});var c=e(8314),o=e(58817),P=e(87757),S=e(24837);function N(p){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===p||"esriGeometryMultipoint"===p?S.I4:"esriGeometryPolyline"===p?S.ET:S.lF}}}const j=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let Z=1;function J(p,h){if((0,c.Z)("esri-csp-restrictions"))return()=>F({[h]:null},p);try{let R=`this.${h} = null;`;for(const m in p)R+=`this${j.test(m)?`.${m}`:`["${m}"]`} = ${JSON.stringify(p[m])};`;const I=new Function(`\n      return class AttributesClass$${Z++} {\n        constructor() {\n          ${R};\n        }\n      }\n    `)();return()=>new I}catch(R){return()=>F({[h]:null},p)}}function D(p={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(p)}}]}function T(p,h){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:p},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:h,supportsDelete:h,supportsEditing:h,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:h,supportsExceedsLimitStatistics:!0},query:P.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:h,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);