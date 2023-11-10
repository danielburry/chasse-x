"use strict";var K=Object.defineProperty,Z=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,T=(g,n,e)=>n in g?K(g,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):g[n]=e,j=(g,n)=>{for(var e in n||(n={}))E.call(n,e)&&T(g,e,n[e]);if(Z)for(var e of Z(n))N.call(n,e)&&T(g,e,n[e]);return g};(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[2248],{72248:(g,n,e)=>{e.r(n),e.d(n,{default:()=>z});var R=e(15861),a=e(17626),M=e(84792),u=e(26584),B=e(2076),b=e(62208),x=e(99959),o=e(77712),C=(e(85931),e(8314),e(90912),e(76898)),c=e(65234),U=e(2004),L=e(65401),w=e(44917),S=e(552),P=e(30346),O=e(99555),v=e(2584);const h={id:"0/0/0",level:0,row:0,col:0,extent:null};let y=class extends((0,S.h)((0,O.M)((0,P.Q)(w.Z)))){constructor(){super(...arguments),this.tileInfo=v.Z.create({spatialReference:c.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new U.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,c.Z.WebMercator),this.spatialReference=c.Z.WebMercator}getTileBounds(t,l,r,i){const d=i||(0,L.Ue)();return h.level=t,h.row=l,h.col=r,h.extent=d,this.tileInfo.updateTileInfo(h),h.extent=null,d}fetchTile(t,l,r,i={}){const{signal:d}=i,p=this.getTileUrl(t,l,r),m={responseType:"image",signal:d,query:j({},this.refreshParameters)};return(0,M.default)(p,m).then(D=>D.data)}getTileUrl(){throw new u.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,a._)([(0,o.Cb)({type:v.Z})],y.prototype,"tileInfo",void 0),(0,a._)([(0,o.Cb)({type:["show","hide"]})],y.prototype,"listMode",void 0),(0,a._)([(0,o.Cb)({readOnly:!0,value:"base-tile"})],y.prototype,"type",void 0),(0,a._)([(0,o.Cb)({nonNullable:!0})],y.prototype,"fullExtent",void 0),(0,a._)([(0,o.Cb)()],y.prototype,"spatialReference",void 0),y=(0,a._)([(0,C.j)("esri.layers.BaseTileLayer")],y);const I=y;var W=e(49286);const f=new B.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let s=class extends((0,S.h)((0,W.q)((0,x.R)(I)))){constructor(t){super(t),this.type="bing-maps",this.tileInfo=new v.Z({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:c.Z.WebMercator},spatialReference:c.Z.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(t){this._set("bingMetadata",t)}get copyright(){return(0,b.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return f.toJSON(this.style)}get bingLogo(){return(0,b.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(t){return this.addResolvingPromise(this.key?this._getMetadata():this.portalUrl?this._getPortalBingKey().then(()=>this._getMetadata()):Promise.reject(new u.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(t,l,r){if(!this.loaded||(0,b.Wi)(this.bingMetadata))return null;const i=this.bingMetadata.resourceSets[0].resources[0],d=i.imageUrlSubdomains[l%i.imageUrlSubdomains.length],p=this._getQuadKey(t,l,r);return i.imageUrl.replace("{subdomain}",d).replace("{quadkey}",p)}fetchAttributionData(){var t=this;return(0,R.Z)(function*(){return t.load().then(()=>(0,b.Wi)(t.bingMetadata)?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(l=>({attribution:l.attribution,coverageAreas:l.coverageAreas.map(r=>({zoomMin:r.zoomMin,zoomMax:r.zoomMax,score:1,bbox:[r.bbox[0],r.bbox[1],r.bbox[2],r.bbox[3]]}))}))})})()}_getMetadata(){return(0,M.default)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style]}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(l=>{const r=l.data;if(200!==r.statusCode)throw new u.Z("bingmapslayer:getmetadata",r.statusDescription);if(this.bingMetadata=r,0===this.bingMetadata.resourceSets.length)throw new u.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new u.Z("bingmapslayer:getmetadata","no bing resources")}).catch(l=>{throw new u.Z("bingmapslayer:getmetadata",l.message)})}_getPortalBingKey(){return(0,M.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(t=>{if(!t.data.bingKey)throw new u.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=t.data.bingKey}).catch(t=>{throw new u.Z("bingmapslayer:getportalbingkey",t.message)})}_getQuadKey(t,l,r){let i="";for(let d=t;d>0;d--){let p=0;const m=1<<d-1;0!=(r&m)&&(p+=1),0!=(l&m)&&(p+=2),i+=p.toString()}return i}};(0,a._)([(0,o.Cb)({json:{read:!1,write:!1},value:null})],s.prototype,"bingMetadata",null),(0,a._)([(0,o.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],s.prototype,"type",void 0),(0,a._)([(0,o.Cb)({type:v.Z})],s.prototype,"tileInfo",void 0),(0,a._)([(0,o.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"copyright",null),(0,a._)([(0,o.Cb)({type:String,json:{write:!1,read:!1}})],s.prototype,"key",void 0),(0,a._)([(0,o.Cb)({type:f.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:f.read}}})],s.prototype,"style",void 0),(0,a._)([(0,o.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],s.prototype,"operationalLayerType",null),(0,a._)([(0,o.Cb)({type:String,json:{write:!1,read:!1}})],s.prototype,"culture",void 0),(0,a._)([(0,o.Cb)({type:String,json:{write:!1,read:!1}})],s.prototype,"region",void 0),(0,a._)([(0,o.Cb)({type:String,json:{write:!0,read:!0}})],s.prototype,"portalUrl",void 0),(0,a._)([(0,o.Cb)({type:Boolean,json:{write:!1,read:!1}})],s.prototype,"hasAttributionData",void 0),(0,a._)([(0,o.Cb)({type:String,readOnly:!0})],s.prototype,"bingLogo",null),s=(0,a._)([(0,C.j)("esri.layers.BingMapsLayer")],s);const z=s}}]);