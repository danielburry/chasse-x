"use strict";var se=Object.defineProperty,re=Object.defineProperties,ie=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,te=(O,m,u)=>m in O?se(O,m,{enumerable:!0,configurable:!0,writable:!0,value:u}):O[m]=u,Q=(O,m)=>{for(var u in m||(m={}))oe.call(m,u)&&te(O,u,m[u]);if(ee)for(var u of ee(m))ae.call(m,u)&&te(O,u,m[u]);return O},ne=(O,m)=>re(O,ie(m));(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[4079],{84079:(O,m,u)=>{u.r(m),u.d(m,{default:()=>J});var g=u(15861),G=u(84792),R=u(26584),U=u(63290),x=u(62208),M=u(10699),L=u(91179),C=u(37053),S=u(82054),K=u(82708),y=u(82959),I=u(58175),j=u(58775),A=u(56554),f=u(35775),N=u(60466),k=u(85),z=u(36630);const H={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class J{constructor(){var r=this;this._queryEngine=null,this._snapshotFeatures=function(){var i=(0,g.Z)(function*(s){const a=yield r._fetch(s);return r._createFeatures(a)});return function(s){return i.apply(this,arguments)}}()}destroy(){var r;null==(r=this._queryEngine)||r.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}load(r,i={}){var s=this;return(0,g.Z)(function*(){s.loadOptions={url:r.url,customParameters:r.customParameters};const a=[];yield s._checkProjection(r.spatialReference);let d=null;r.url&&(d=yield s._fetch(null==i?void 0:i.signal));const c=(0,j.my)(d,{geometryType:r.geometryType}),_=r.fields||c.fields||[],E=null!=r.hasZ?r.hasZ:c.hasZ,P=c.geometryType,e=r.objectIdField||c.objectIdFieldName||"__OBJECTID",t=r.spatialReference||C.Zn;let n=r.timeInfo;_===c.fields&&c.unknownFields.length>0&&a.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:c.unknownFields}});let o=_.find(l=>l.name===e);o?("esriFieldTypeString"!==o.type&&(o.type="esriFieldTypeOID"),o.editable=!1,o.nullable=!1):(o={alias:e,name:e,type:"string"===c.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},_.unshift(o));const p={};for(const l of _){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new R.Z("geojson-layer:invalid-field-name","field name is missing",{field:l});if(!k.v.jsonValues.includes(l.type))throw new R.Z("geojson-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l});if(l.name!==o.name){const v=(0,z.os)(l);void 0!==v&&(p[l.name]=v)}}s._fieldsIndex=new N.Z(_);const b=s._fieldsIndex.requiredFields.indexOf(o);if(b>-1&&s._fieldsIndex.requiredFields.splice(b,1),n){if(n.startTimeField){const l=s._fieldsIndex.get(n.startTimeField);l?(n.startTimeField=l.name,l.type="esriFieldTypeDate"):n.startTimeField=null}if(n.endTimeField){const l=s._fieldsIndex.get(n.endTimeField);l?(n.endTimeField=l.name,l.type="esriFieldTypeDate"):n.endTimeField=null}if(n.trackIdField){const l=s._fieldsIndex.get(n.trackIdField);l?n.trackIdField=l.name:(n.trackIdField=null,a.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:n}}))}n.startTimeField||n.endTimeField||(a.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:n}}),n=null)}const F=P?(0,A.bU)(P):null,h={warnings:a,featureErrors:[],layerDefinition:ne(Q({},H),{drawingInfo:F,templates:(0,A.Hq)(p),extent:null,geometryType:P,objectIdField:e,fields:_,hasZ:!!E,timeInfo:n})};s._queryEngine=new I.q({fields:_,geometryType:P,hasM:!1,hasZ:E,objectIdField:e,spatialReference:t,timeInfo:n,featureStore:new K.Z({geometryType:P,hasM:!1,hasZ:E}),cacheSpatialQueries:!0}),s._createDefaultAttributes=(0,A.Dm)(p,e);const D=yield s._createFeatures(d);s._objectIdGenerator=s._createObjectIdGenerator(s._queryEngine,D);const T=s._normalizeFeatures(D,h.warnings,h.featureErrors);if(s._queryEngine.featureStore.addMany(T),h.layerDefinition.extent=s._queryEngine.fullExtent,h.layerDefinition.timeInfo){const{start:l,end:v}=s._queryEngine.timeExtent;h.layerDefinition.timeInfo.timeExtent=[l,v]}return h})()}applyEdits(r){var i=this;return(0,g.Z)(function*(){const{spatialReference:s,geometryType:a}=i._queryEngine;return yield Promise.all([(0,f.b)(s,a),(0,y._W)(r.adds,s),(0,y._W)(r.updates,s)]),yield i._waitSnapshotComplete(),i._applyEdits(r)})()}queryFeatures(r={},i={}){var s=this;return(0,g.Z)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQuery(r,i.signal)})()}queryFeatureCount(r={},i={}){var s=this;return(0,g.Z)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQueryForCount(r,i.signal)})()}queryObjectIds(r={},i={}){var s=this;return(0,g.Z)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQueryForIds(r,i.signal)})()}queryExtent(r={},i={}){var s=this;return(0,g.Z)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQueryForExtent(r,i.signal)})()}querySnapping(r,i={}){var s=this;return(0,g.Z)(function*(){return yield s._waitSnapshotComplete(),s._queryEngine.executeQueryForSnapping(r,i.signal)})()}refresh(r){var i=this;return(0,g.Z)(function*(){var s;return i.loadOptions.customParameters=r,null==(s=i._snapshotTask)||s.abort(),i._snapshotTask=(0,M.vr)(i._snapshotFeatures),i._snapshotTask.promise.then(a=>{i._queryEngine.featureStore.clear(),i._objectIdGenerator=i._createObjectIdGenerator(i._queryEngine,a);const d=i._normalizeFeatures(a);d&&i._queryEngine.featureStore.addMany(d)},a=>{i._queryEngine.featureStore.clear(),(0,M.D_)(a)||U.Z.getLogger("esri.layers.GeoJSONLayer").error(new R.Z("geojson-layer:refresh","An error occurred during refresh",{error:a}))}),yield i._waitSnapshotComplete(),{extent:i._queryEngine.fullExtent,timeExtent:i._queryEngine.timeExtent}})()}_createFeatures(r){var i=this;return(0,g.Z)(function*(){const{geometryType:s,hasZ:a,objectIdField:d}=i._queryEngine,c=(0,j.lG)(r,{geometryType:s,hasZ:a,objectIdField:d});if(!(0,C.fS)(i._queryEngine.spatialReference,C.Zn))for(const _ of c)(0,x.pC)(_.geometry)&&(_.geometry=(0,S.GH)((0,y.iV)((0,S.di)(_.geometry,i._queryEngine.geometryType,i._queryEngine.hasZ,!1),C.Zn,i._queryEngine.spatialReference)));return c})()}_waitSnapshotComplete(){var r=this;return(0,g.Z)(function*(){if(r._snapshotTask&&!r._snapshotTask.finished){try{yield r._snapshotTask.promise}catch(i){}return r._waitSnapshotComplete()}})()}_fetch(r){var i=this;return(0,g.Z)(function*(){const{url:s,customParameters:a}=i.loadOptions,d=(yield(0,G.default)(s,{responseType:"json",query:Q({},a),signal:r})).data;return yield(0,j.O3)(d),d})()}_normalizeFeatures(r,i,s){const{objectIdField:a}=this._queryEngine,d=[];for(const c of r){const _=this._createDefaultAttributes(),E=(0,f.O0)(this._fieldsIndex,_,c.attributes,!0,i);E?null==s||s.push(E):(this._assignObjectId(_,c.attributes,!0),c.attributes=_,c.objectId=_[a],d.push(c))}return d}_applyEdits(r){const{adds:i,updates:s,deletes:a}=r,d={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i&&i.length&&this._applyAddEdits(d,i),s&&s.length&&this._applyUpdateEdits(d,s),a&&a.length){for(const c of a)d.deleteResults.push((0,f.d1)(c));this._queryEngine.featureStore.removeManyById(a)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:d}}_applyAddEdits(r,i){const{addResults:s}=r,{geometryType:a,hasM:d,hasZ:c,objectIdField:_,spatialReference:E,featureStore:P}=this._queryEngine,e=[];for(const t of i){if(t.geometry&&a!==(0,L.Ji)(t.geometry)){s.push((0,f.av)("Incorrect geometry type."));continue}const n=this._createDefaultAttributes(),o=(0,f.O0)(this._fieldsIndex,n,t.attributes);o?s.push(o):(this._assignObjectId(n,t.attributes),t.attributes=n,null!=t.uid&&(r.uidToObjectId[t.uid]=t.attributes[_]),(0,x.pC)(t.geometry)&&(t.geometry=(0,y.iV)((0,f.og)(t.geometry,E),t.geometry.spatialReference,E)),e.push(t),s.push((0,f.d1)(t.attributes[_])))}P.addMany((0,S.Yn)([],e,a,c,d,_))}_applyUpdateEdits({updateResults:r},i){const{geometryType:s,hasM:a,hasZ:d,objectIdField:c,spatialReference:_,featureStore:E}=this._queryEngine;for(const P of i){const{attributes:e,geometry:t}=P,n=e&&e[c];if(null==n){r.push((0,f.av)(`Identifier field ${c} missing`));continue}if(!E.has(n)){r.push((0,f.av)(`Feature with object id ${n} missing`));continue}const o=(0,S.EI)(E.getFeature(n),s,d,a);if((0,x.pC)(t)){if(s!==(0,L.Ji)(t)){r.push((0,f.av)("Incorrect geometry type."));continue}o.geometry=(0,y.iV)((0,f.og)(t,_),t.spatialReference,_)}if(e){const p=(0,f.O0)(this._fieldsIndex,o.attributes,e);if(p){r.push(p);continue}}E.add((0,S.XA)(o,s,d,a,c)),r.push((0,f.d1)(n))}}_createObjectIdGenerator(r,i){const s=r.fieldsIndex.get(r.objectIdField);if("esriFieldTypeString"===s.type)return()=>s.name+"-"+Date.now().toString(16);let a=Number.NEGATIVE_INFINITY;for(const d of i)d.objectId&&(a=Math.max(a,d.objectId));return a=Math.max(0,a)+1,()=>a++}_assignObjectId(r,i,s=!1){const a=this._queryEngine.objectIdField;r[a]=s&&a in i?i[a]:this._objectIdGenerator()}_checkProjection(r){return(0,g.Z)(function*(){try{yield(0,y._W)(C.Zn,r)}catch(i){throw new R.Z("geojson-layer","Projection not supported")}})()}}},58775:(O,m,u)=>{u.d(m,{O3:()=>_,lG:()=>P,my:()=>E,q9:()=>M});var g=u(26584),G=u(66385),R=u(88071),U=u(36630);const x={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function M(e){return x[e]}function*L(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*C(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const n of t)yield*n}}function K(e){for(const t of e)if(t.length>2)return!0;return!1}function j(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],p=e[(n+1)%e.length];t+=o[0]*p[1]-p[0]*o[1]}return t<=0}function A(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function f(e,t,n){switch(t.type){case"LineString":return function N(e,t,n){return s(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function k(e,t,n){for(const o of t.coordinates)s(e,o,n);return e}(e,t,n);case"MultiPoint":return function z(e,t,n){return s(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function H(e,t,n){for(const o of t.coordinates){r(e,o[0],n);for(let p=1;p<o.length;p++)i(e,o[p],n)}return e}(e,t,n);case"Point":return function J(e,t,n){return d(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function V(e,t,n){const o=t.coordinates;r(e,o[0],n);for(let p=1;p<o.length;p++)i(e,o[p],n);return e}(e,t,n)}}function r(e,t,n){const o=A(t);!function y(e){return!j(e)}(o)?s(e,o,n):a(e,o,n)}function i(e,t,n){const o=A(t);!function I(e){return j(e)}(o)?s(e,o,n):a(e,o,n)}function s(e,t,n){for(const o of t)d(e,o,n);e.lengths.push(t.length)}function a(e,t,n){for(let o=t.length-1;o>=0;o--)d(e,t[o],n);e.lengths.push(t.length)}function d(e,t,n){const[o,p,b]=t;e.coords.push(o,p),n.hasZ&&e.coords.push(b||0)}function c(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function _(e){if(!e)throw new g.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new g.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!o.test(n))throw new g.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function E(e,t={}){const n=[],o=new Set,p=new Set;let b,F=!1,h=null,D=!1,{geometryType:T=null}=t,l=!1;for(const q of L(e)){const{geometry:$,properties:w,id:B}=q;if((!$||(T||(T=M($.type)),M($.type)===T))&&(F||(F=K(C($))),D||(D=null!=B,D&&(b=typeof B,h=Object.keys(w).filter(W=>w[W]===B))),D&&null!=B&&(h.length>1?h=h.filter(W=>w[W]===B):1===h.length&&(h=w[h[0]]===B?h:[])),!l&&w)){let W=!0;for(const Z in w){if(o.has(Z))continue;const Y=w[Z];if(null==Y){W=!1,p.add(Z);continue}const X=c(Y);"unknown"!==X?(p.delete(Z),o.add(Z),n.push({name:Z,alias:Z,type:X})):p.add(Z)}l=W}}const v=h&&1===h.length&&h[0]||null;if(v)for(const q of n)if(q.name===v&&(0,U.H7)(q)){q.type="esriFieldTypeOID";break}return{fields:n,geometryType:T,hasZ:F,objectIdFieldName:v,objectIdFieldType:b,unknownFields:Array.from(p)}}function P(e,t){return Array.from(function*S(e,t={}){var p;const{geometryType:n,objectIdField:o}=t;for(const b of e){const{geometry:F,properties:h,id:D}=b;if(F&&M(F.type)!==n)continue;const T=h||{};let l=null!=(p=T[o])?p:null;o&&null!=D&&!T[o]&&(T[o]=l=D),yield new G.u_(F?f(new R.Z,F,t):null,T,null,l)}}(L(e),t))}},56554:(O,m,u)=>{u.d(m,{Dm:()=>C,Hq:()=>S,MS:()=>K,bU:()=>x});var g=u(8314),G=u(58817),R=u(87757),U=u(24837);function x(y){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===y||"esriGeometryMultipoint"===y?U.I4:"esriGeometryPolyline"===y?U.ET:U.lF}}}const M=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let L=1;function C(y,I){if((0,g.Z)("esri-csp-restrictions"))return()=>Q({[I]:null},y);try{let j=`this.${I} = null;`;for(const f in y)j+=`this${M.test(f)?`.${f}`:`["${f}"]`} = ${JSON.stringify(y[f])};`;const A=new Function(`\n      return class AttributesClass$${L++} {\n        constructor() {\n          ${j};\n        }\n      }\n    `)();return()=>new A}catch(j){return()=>Q({[I]:null},y)}}function S(y={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,G.d9)(y)}}]}function K(y,I){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:y},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:I,supportsDelete:I,supportsEditing:I,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:I,supportsExceedsLimitStatistics:!0},query:R.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:I,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);