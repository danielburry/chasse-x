"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[2766],{92766:(f,u,e)=>{e.r(u),e.d(u,{ChildRoutesModule:()=>l});var a=e(99902),s=e(80076),r=e(5e3),i=e(35810);let c=(()=>{class t{constructor(o,v){this.userService=o,this.router=v}canActivate(){return this.checkLogin()}checkLogin(){return!!this.userService.currentUser||(this.router.navigate([s.$.AUTH_LOGIN]),!1)}}return t.\u0275fac=function(o){return new(o||t)(r.LFG(i.K),r.LFG(a.F0))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=e(63838);const d=[{path:s.$.PWA_FORM_CHASSE,component:h.T5,canActivate:[c],data:{title:"Formulaire de chasse"}},{path:s.$.PWA_LIST_CHASSE,component:h.L,canActivate:[c],data:{title:"Liste de chasse"}},{path:"",redirectTo:s.$.PWA_REDIRECT_TO,pathMatch:"full"}];let l=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[a.Bz.forChild(d)],a.Bz]}),t})()}}]);