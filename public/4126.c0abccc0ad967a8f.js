"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[4126],{54126:(p,r,t)=>{t.r(r),t.d(r,{default:()=>M});var i=t(15861),a=t(17626),n=t(63290),h=t(10699),o=t(77712),E=(t(85931),t(8314),t(90912),t(76898)),d=t(91757),D=t(37384),C=t(67802),c=t(45611),P=t(94421);const y=n.Z.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let s=class extends((0,P.Z)((0,D.y)(c.Z))){update(_){this.strategy.update(_).catch(e=>{(0,h.D_)(e)||y.error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new d.c,this.container.addChild(this._bitmapContainer),this.strategy=new C.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(_,e,O){return this.layer.fetchImage(_,e,O)}doRefresh(){var _=this;return(0,i.Z)(function*(){_.requestUpdate()})()}isUpdating(){return this.strategy.updating||this.updateRequested}};(0,a._)([(0,o.Cb)()],s.prototype,"strategy",void 0),(0,a._)([(0,o.Cb)()],s.prototype,"updating",void 0),s=(0,a._)([(0,E.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],s);const M=s}}]);