"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[587],{10587:(b,P,a)=>{a.r(P),a.d(P,{addOrUpdateResource:()=>I,contentToBlob:()=>O,fetchResources:()=>U,getSiblingOfSameType:()=>T,getSiblingOfSameTypeI:()=>w,removeAllResources:()=>D,removeResource:()=>C,splitPrefixFileNameAndExtension:()=>f});var i=a(15861),R=a(84792),E=a(26584),l=a(62208),o=a(21726);function U(e){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(function*(e,t={},r){yield e.load(r);const s=(0,o.v_)(e.itemUrl,"resources"),{start:u=1,num:g=10,sortOrder:c="asc",sortField:_="created"}=t,v={query:{start:u,num:g,sortOrder:c,sortField:_,token:e.apiKey},signal:(0,l.U2)(r,"signal")},n=yield e.portal._request(s,v);return{total:n.total,nextStart:n.nextStart,resources:n.resources.map(({created:A,size:F,resource:S})=>({created:new Date(A),size:F,resource:e.resourceFromPath(S)}))}})).apply(this,arguments)}function I(e,t,r,s){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(function*(e,t,r,s){if(!e.hasPath())throw new E.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const u=e.portalItem;yield u.load(s);const g=(0,o.v_)(u.userItemUrl,"add"===t?"addResources":"updateResources"),[c,_]=x(e.path),v=yield O(r),n=new FormData;return c&&"."!==c&&n.append("resourcesPrefix",c),n.append("fileName",_),n.append("file",v,_),n.append("f","json"),(0,l.pC)(s)&&s.access&&n.append("access",s.access),yield u.portal._request(g,{method:"post",body:n,signal:(0,l.U2)(s,"signal")}),e})).apply(this,arguments)}function C(e,t,r){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)(function*(e,t,r){if(!t.hasPath())throw new E.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");yield e.load(r);const s=(0,o.v_)(e.userItemUrl,"removeResources");yield e.portal._request(s,{method:"post",query:{resource:t.path},signal:(0,l.U2)(r,"signal")}),t.portalItem=null})).apply(this,arguments)}function D(e,t){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(function*(e,t){yield e.load(t);const r=(0,o.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,l.U2)(t,"signal")})})).apply(this,arguments)}function x(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function f(e){const[t,r]=function M(e){const t=(0,o.Ml)(e);return(0,l.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[s,u]=x(t);return[s,u,r]}function O(e){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)(function*(e){return e instanceof Blob?e:(yield(0,R.default)(e.url,{responseType:"blob"})).data})).apply(this,arguments)}function T(e,t){if(!e.hasPath())return null;const[r,,s]=f(e.path);return e.portalItem.resourceFromPath((0,o.v_)(r,t+s))}function w(e,t){if(!e.hasPath())return null;const[r,,s]=f(e.path);return e.portalItem.resourceFromPath((0,o.v_)(r,t+s))}}}]);