"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[2305],{62305:(I,c,n)=>{n.r(c),n.d(c,{default:()=>T});var a=n(15861),p=n(26584),m=n(63290),h=n(62208),u=n(10699),i=n(37053),d=n(82054),P=n(82708),g=n(82959),O=n(58175),f=n(58775),C=n(35775),M=n(83774),F=n(60466);class T{constructor(){var e=this;this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var r=(0,a.Z)(function*(t){const{objectIdField:_}=e._queryEngine,l=yield(0,M.Bm)(e._getFeatureUrl,e._featureType.typeName,e._getFeatureOutputFormat,{customParameters:e._customParameters,dateFields:e._queryEngine.fieldsIndex.dateFields.map(s=>s.name),signal:t});yield(0,f.O3)(l),(0,u.k_)(t);const o=(0,f.lG)(l,{geometryType:e._queryEngine.geometryType,hasZ:!1,objectIdField:_});if(!(0,i.fS)(e._queryEngine.spatialReference,i.Zn))for(const s of o)(0,h.pC)(s.geometry)&&(s.geometry=(0,d.GH)((0,g.iV)((0,d.di)(s.geometry,e._queryEngine.geometryType,!1,!1),i.Zn,e._queryEngine.spatialReference)));let y=1;for(const s of o){const E={};(0,C.O0)(e._fieldsIndex,E,s.attributes,!0),s.attributes=E,null==s.attributes[_]&&(s.objectId=s.attributes[_]=y++)}return o});return function(t){return r.apply(this,arguments)}}()}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}load(e,r){var t=this;return(0,a.Z)(function*(){const{getFeatureUrl:_,getFeatureOutputFormat:l,spatialReference:o,fields:y,geometryType:s,featureType:E,objectIdField:D,customParameters:j}=e;t._featureType=E,t._customParameters=j,t._getFeatureUrl=_,t._getFeatureOutputFormat=l,t._fieldsIndex=new F.Z(y),yield t._checkProjection(o),(0,u.k_)(r),t._queryEngine=new O.q({fields:y,geometryType:s,hasM:!1,hasZ:!1,objectIdField:D,spatialReference:o,timeInfo:null,featureStore:new P.Z({geometryType:s,hasM:!1,hasZ:!1})});const v=yield t._snapshotFeatures((0,h.Wg)(r.signal));return t._queryEngine.featureStore.addMany(v),{extent:t._queryEngine.fullExtent}})()}applyEdits(){return(0,a.Z)(function*(){throw new p.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")})()}queryFeatures(e={},r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQuery(e,r.signal)})()}queryFeatureCount(e={},r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForCount(e,r.signal)})()}queryObjectIds(e={},r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForIds(e,r.signal)})()}queryExtent(e={},r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForExtent(e,r.signal)})()}querySnapping(e,r={}){var t=this;return(0,a.Z)(function*(){return yield t._waitSnapshotComplete(),t._queryEngine.executeQueryForSnapping(e,r.signal)})()}refresh(e){var r=this;return(0,a.Z)(function*(){var t;return r._customParameters=e,null==(t=r._snapshotTask)||t.abort(),r._snapshotTask=(0,u.vr)(r._snapshotFeatures),r._snapshotTask.promise.then(_=>{r._queryEngine.featureStore.clear(),_&&r._queryEngine.featureStore.addMany(_)},_=>{r._queryEngine.featureStore.clear(),(0,u.D_)(_)||m.Z.getLogger("esri.layers.WFSLayer").error(new p.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:_}))}),yield r._waitSnapshotComplete(),{extent:r._queryEngine.fullExtent}})()}_waitSnapshotComplete(){var e=this;return(0,a.Z)(function*(){if(e._snapshotTask&&!e._snapshotTask.finished){try{yield e._snapshotTask.promise}catch(r){}return e._waitSnapshotComplete()}})()}_checkProjection(e){return(0,a.Z)(function*(){try{yield(0,g._W)(i.Zn,e)}catch(r){throw new p.Z("unsupported-projection","Projection not supported",{spatialReference:e})}})()}}}}]);