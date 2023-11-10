"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[6926],{30994:(It,pt,W)=>{W.d(pt,{BH:()=>gt,K:()=>w,KC:()=>X,NL:()=>Q,QI:()=>Mt,Tg:()=>R,Yx:()=>z,nb:()=>g,wF:()=>I,xQ:()=>_t});var tt=W(2076),lt=W(62208),Z=W(60295),et=W(79751);const G=new Map;G.set("meter-per-second",1),G.set("kilometer-per-hour",.277778),G.set("knots",.514444),G.set("feet-per-second",.3048),G.set("mile-per-hour",.44704);const H=180/Math.PI,Q=new tt.X({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function z(t,s){return G.get(t)/G.get(s)||1}function ct(t){return(450-t)%360}function R(t,s="geographic"){const[r,o]=t,e=Math.sqrt(r*r+o*o);let n=Math.atan2(o,r)*H;return n=(360+n)%360,"geographic"===s&&(n=ct(n)),[e,n]}function ht(t,s="geographic"){let r=t[1];"geographic"===s&&(r=ct(r)),r%=360;const o=t[0];return[o*Math.cos(r/H),o*Math.sin(r/H)]}function _t(t,s,r,o="geographic"){if(!(0,et.nk)(t)||(0,lt.Wi)(r))return t;const e="vector-magdir"===s?t.clone():(0,lt.Wg)(X(t,s)),n=e.pixels[1];for(let i=0;i<n.length;i++)n[i]="geographic"===o?(n[i]+r[i]+270)%360:(n[i]+360-r[i])%360;return"vector-magdir"===s?e:X(e,"vector-magdir")}function X(t,s,r="geographic",o=1){if(!(0,et.nk)(t))return t;const{pixels:e,width:n,height:i}=t,p=n*i,c=e[0],a=e[1],f=t.pixelType.startsWith("f")?t.pixelType:"f32",h=Z.Z.createEmptyBand(f,p),M=Z.Z.createEmptyBand(f,p);let d=0;for(let _=0;_<i;_++)for(let l=0;l<n;l++)"vector-uv"===s?([h[d],M[d]]=R([c[d],a[d]],r),h[d]*=o):([h[d],M[d]]=ht([c[d],a[d]],r),h[d]*=o,M[d]*=o),d++;const y=new Z.Z({pixelType:f,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[h,M]});return y.updateStatistics(),y}function Mt(t,s,r=1){if(1===r||!(0,et.nk)(t))return t;const o=t.clone(),{pixels:e,width:n,height:i}=o,p=e[0],c=e[1];let a=0;for(let f=0;f<i;f++)for(let h=0;h<n;h++)"vector-uv"===s?(p[a]*=r,c[a]*=r):p[a]*=r,a++;return o.updateStatistics(),o}function gt(t,s,r,o,e){if((0,lt.Wi)(e)||!e.spatialReference.equals(t.spatialReference))return{extent:t,width:Math.round(s/o),height:Math.round(r/o),resolution:t.width/s};const n=e.xmin,i=e.ymax,p=(t.xmax-t.xmin)/s*o,c=(t.ymax-t.ymin)/r*o,a=(p+c)/2;return t.xmin=n+Math.floor((t.xmin-n)/p)*p,t.xmax=n+Math.ceil((t.xmax-n)/p)*p,t.ymin=i+Math.floor((t.ymin-i)/c)*c,t.ymax=i+Math.ceil((t.ymax-i)/c)*c,{extent:t,width:Math.round(t.width/p),height:Math.round(t.height/c),resolution:a}}const rt=function xt(t=0,s=0,r=Math.PI,o=!0){o&&(r=(2*Math.PI-r)%(2*Math.PI));const e=o?-1:1,n=13*e,i=-7*e,p=-2*e,c=-16*e,a=21.75,[f,h]=B(0,s+n,r,a),[M,d]=B(t-5.5,s+i,r,a),[y,_]=B(t+5.5,s+i,r,a),[l,u]=B(t-1.5,s+p,r,a),[k,P]=B(t+1.5,s+p,r,a),[D,A]=B(t-1.5,s+c,r,a),[F,O]=B(t+1.5,s+c,r,a);return[f,h,M,d,l,u,k,P,y,_,D,A,F,O]}(0,0,0);function wt(t=0,s=Math.PI,r=!0){r&&(s=(2*Math.PI-s)%(2*Math.PI));const e=r?-1:1,n=5*e,i=20*e,p=25*e,c=45,d=2*e;let[y,_]=[5,0-i],[l,u]=[y+2,_],[k,P]=[l-0,u+d],[D,A]=[-5,0-p],[F,O]=[D+0,A-d],E=Math.ceil(t/5),b=Math.floor(E/10);E-=8*b;const v=[],U=[];for(let st=0;st<E/2;st++,b--){b<=0&&E%2==1&&st===(E-1)/2&&(D=0,F=D+0,A=(A+_)/2,O=A-d);const[dt,mt]=B(D,A,s,c);if(b>0){const[S,T]=B(l,A,s,c),[at,it]=B(y,_,s,c);v.push(S),v.push(T),v.push(dt),v.push(mt),v.push(at),v.push(it)}else{const[S,T]=B(l,u,s,c),[at,it]=B(k,P,s,c),[At,Dt]=B(F,O,s,c);U.push(dt),U.push(mt),U.push(At),U.push(Dt),U.push(at),U.push(it),U.push(S),U.push(T)}A+=n,_+=n,u+=n,P+=n,O+=n}const[L,C]=B(5,0+i,s,c),[J,j]=B(7,0+i,s,c),[K,$]=B(5,0-p,s,c),[q,Pt]=B(7,0-p,s,c);return{pennants:v,barbs:U,shaft:[L,C,J,j,K,$,q,Pt]}}function B(t,s,r,o=1){const e=Math.sqrt(t*t+s*s)/o,n=(2*Math.PI+Math.atan2(s,t))%(2*Math.PI);return[e,(2*Math.PI+n-r)%(2*Math.PI)]}const Y=[0,1,3,6,10,16,21,27,33,40,47,55,63],ut=[0,.5,1,1.5,2],yt=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function N(t,s,r,o){const e=z(o||"knots",r);let n;for(n=1;n<s.length;n++)if(n===s.length-1){if(t<s[n]*e)break}else if(t<=s[n]*e)break;return Math.min(n-1,s.length-2)}function ft(t,s,r,o,e){let n=0;switch(s){case"beaufort_kn":n=N(t,Y,"knots",r);break;case"beaufort_km":n=N(t,Y,"kilometer-per-hour",r);break;case"beaufort_ft":n=N(t,Y,"feet-per-second",r);break;case"beaufort_m":n=N(t,Y,"meter-per-second",r);break;case"classified_arrow":n=N(t,e,o,r);break;case"ocean_current_m":n=N(t,ut,"meter-per-second",r);break;case"ocean_current_kn":n=N(t,yt,"knots",r)}return n}const x=[];function w(t,s){let o=0,e=0;const{width:n,height:i,mask:p}=t,c=t.pixels[0],a=[],f=[],h=z(Q.fromJSON(s.inputUnit),"knots"),M="wind_speed"===s.style?5:Number.MAX_VALUE;for(let d=0;d<i;d++)for(let y=0;y<n;y++){const _=c[d*n+y]*h;if((!p||p[d*n+y])&&_<M){for(let u=0;u<4;u++)a[o++]=(y+.5)/n,a[o++]=(d+.5)/i,a[o++]=u<2?-.5:.5,a[o++]=u%2==0?-.5:.5,a[o++]=0,a[o++]=_;const l=4*(o/24-1);f[e++]=l,f[e++]=l+1,f[e++]=l+2,f[e++]=l+1,f[e++]=l+2,f[e++]=l+3}}return{vertexData:new Float32Array(a),indexData:new Uint32Array(f)}}function I(t,s){return"simple_scalar"===s.style?w(t,s):"wind_speed"===s.style?function m(t,s){if(0===x.length)for(let d=0;d<30;d++)x.push(wt(5*d,0));const r=z(Q.fromJSON(s.inputUnit),"knots"),{width:o,height:e,mask:n}=t,i=t.pixels[0],p=t.pixels[1],a=[],f=[];let h=0,M=0;for(let d=0;d<e;d++)for(let y=0;y<o;y++){const _=d*o+y,l=i[_]*r;if((!n||n[d*o+y])&&l>=5){const u=(p[_]+360)%360/180*Math.PI,{pennants:k,barbs:P,shaft:D}=x[Math.min(Math.floor(l/5),29)];if(k.length+P.length===0)continue;let A=a.length/6;const F=(y+.5)/o,O=(d+.5)/e;for(let E=0;E<k.length;E+=2)a[h++]=F,a[h++]=O,a[h++]=k[E],a[h++]=k[E+1]+u,a[h++]=0,a[h++]=l;for(let E=0;E<P.length;E+=2)a[h++]=F,a[h++]=O,a[h++]=P[E],a[h++]=P[E+1]+u,a[h++]=0,a[h++]=l;for(let E=0;E<D.length;E+=2)a[h++]=F,a[h++]=O,a[h++]=D[E],a[h++]=D[E+1]+u,a[h++]=0,a[h++]=l;for(let E=0;E<k.length/6;E++)f[M++]=A,f[M++]=A+1,f[M++]=A+2,A+=3;for(let E=0;E<P.length/8;E++)f[M++]=A,f[M++]=A+1,f[M++]=A+2,f[M++]=A+1,f[M++]=A+2,f[M++]=A+3,A+=4;f[M++]=A+0,f[M++]=A+1,f[M++]=A+2,f[M++]=A+1,f[M++]=A+3,f[M++]=A+2,A+=4}}return{vertexData:new Float32Array(a),indexData:new Uint32Array(f)}}(t,s):function ot(t,s){const{style:r,inputUnit:o,outputUnit:e,breakValues:n}=s,i=Q.fromJSON(o),p=Q.fromJSON(e);let f=0,h=0;const{width:M,height:d,mask:y}=t,_=t.pixels[0],l=t.pixels[1],u=y?y.filter(D=>D>0).length:M*d,k=new Float32Array(42*u),P=new Uint32Array(15*u);for(let D=0;D<d;D++)for(let A=0;A<M;A++){const F=D*M+A;if(!y||y[D*M+A]){const O=(l[F]+360)%360/180*Math.PI,E=ft(_[F],r,i,p,n);for(let v=0;v<rt.length;v+=2)k[f++]=(A+.5)/M,k[f++]=(D+.5)/d,k[f++]=rt[v],k[f++]=rt[v+1]+O,k[f++]=E,k[f++]=_[F];const b=7*(f/42-1);P[h++]=b,P[h++]=b+1,P[h++]=b+2,P[h++]=b+0,P[h++]=b+4,P[h++]=b+3,P[h++]=b+0,P[h++]=b+2,P[h++]=b+3,P[h++]=b+2,P[h++]=b+5,P[h++]=b+3,P[h++]=b+5,P[h++]=b+6,P[h++]=b+3}}return{vertexData:k,indexData:P}}(t,s)}function g(t,s,r,o=[0,0],e=.5){const{width:n,height:i,mask:p}=t,[c,a]=t.pixels,[f,h]=o,M=Math.round((n-f)/r),d=Math.round((i-h)/r),y=M*d,_=new Float32Array(y),l=new Float32Array(y),u=new Uint8Array(y),k="vector-uv"===s;for(let D=0;D<d;D++)for(let A=0;A<M;A++){let F=0;const O=D*M+A,E=Math.max(0,D*r+h),b=Math.max(0,A*r+f),v=Math.min(i,E+r),U=Math.min(n,b+r);for(let L=E;L<v;L++)for(let C=b;C<U;C++){const V=L*n+C;if(!p||p[V]){F++;const J=k?[c[V],a[V]]:[c[V],(360+a[V])%360],[j,K]=k?J:ht(J);_[O]+=j,l[O]+=K}}if(F>=(v-E)*(U-b)*(1-e)){u[O]=1;const[L,C]=R([_[O]/F,l[O]/F]);_[O]=L,l[O]=C}else u[O]=0,_[O]=0,l[O]=0}const P=new Z.Z({width:M,height:d,pixels:[_,l],mask:u});return P.updateStatistics(),P}},37084:(It,pt,W)=>{W.d(pt,{GE:()=>_t,KK:()=>yt});var tt=W(15861),Z=(W(29132),W(8314)),et=W(63290),G=W(21286),H=W(62208),nt=W(10699),Q=W(4619),z=W(37053),ct=W(2004);const R=et.Z.getLogger("esri.views.2d.engine.flow.dataUtils");function _t(x,m,w,I){return X.apply(this,arguments)}function X(){return(X=(0,tt.Z)(function*(x,m,w,I){const g=performance.now(),t=Mt(m,w),s=performance.now(),r=rt(m,t,w.width,w.height),o=performance.now(),e=wt(r,!0),n=performance.now(),i="Streamlines"===x?B(e,10):Y(e),p=performance.now();return(0,Z.Z)("esri-2d-profiler")&&(R.info("I.1","_createFlowFieldFromData (ms)",Math.round(s-g)),R.info("I.2","_getStreamlines (ms)",Math.round(o-s)),R.info("I.3","createAnimatedLinesData (ms)",Math.round(n-o)),R.info("I.4","create{Streamlines|Particles}Mesh (ms)",Math.round(p-n)),R.info("I.5","createFlowMesh (ms)",Math.round(p-g)),R.info("I.6","Mesh size (bytes)",i.vertexData.buffer.byteLength+i.indexData.buffer.byteLength)),yield Promise.resolve(),(0,nt.k_)(I),i})).apply(this,arguments)}function Mt(x,m){const w=function xt(x,m,w,I){if(0===I)return x;const g=Math.round(3*I),t=new Array(2*g+1);let s=0;for(let e=-g;e<=g;e++){const n=Math.exp(-e*e/(I*I));t[e+g]=n,s+=n}for(let e=-g;e<=g;e++)t[e+g]/=s;const r=new Float32Array(x.length);for(let e=0;e<w;e++)for(let n=0;n<m;n++){let i=0,p=0;for(let c=-g;c<=g;c++){if(n+c<0||n+c>=m)continue;const a=t[c+g];i+=a*x[2*(e*m+(n+c))+0],p+=a*x[2*(e*m+(n+c))+1]}r[2*(e*m+n)+0]=i,r[2*(e*m+n)+1]=p}const o=new Float32Array(x.length);for(let e=0;e<m;e++)for(let n=0;n<w;n++){let i=0,p=0;for(let c=-g;c<=g;c++){if(n+c<0||n+c>=w)continue;const a=t[c+g];i+=a*r[2*((n+c)*m+e)+0],p+=a*r[2*((n+c)*m+e)+1]}o[2*(n*m+e)+0]=i,o[2*(n*m+e)+1]=p}return o}(m.data,m.width,m.height,x.smoothing);return x.interpolate?(I,g)=>{const t=Math.floor(I),s=Math.floor(g);if(t<0||t>=m.width)return[0,0];if(s<0||s>=m.height)return[0,0];const r=I-t,o=g-s,i=t<m.width-1?t+1:t,p=s<m.height-1?s+1:s;return[(w[2*(s*m.width+t)]*(1-o)+w[2*(p*m.width+t)]*o)*(1-r)+(w[2*(s*m.width+i)]*(1-o)+w[2*(p*m.width+i)]*o)*r,(w[2*(s*m.width+t)+1]*(1-o)+w[2*(p*m.width+t)+1]*o)*(1-r)+(w[2*(s*m.width+i)+1]*(1-o)+w[2*(p*m.width+i)+1]*o)*r]}:(I,g)=>{const t=Math.round(I),s=Math.round(g);return t<0||t>=m.width||s<0||s>=m.height?[0,0]:[w[2*(s*m.width+t)+0],w[2*(s*m.width+t)+1]]}}function gt(x,m,w,I,g,t,s,r,o){const e=[];let n=w,i=I,p=0,[c,a]=m(n,i);c*=x.velocityScale,a*=x.velocityScale;const f=Math.sqrt(c*c+a*a);let h,M;e.push({x:n,y:i,t:p,speed:f});for(let d=0;d<x.verticesPerLine;d++){let[y,_]=m(n,i);y*=x.velocityScale,_*=x.velocityScale;const l=Math.sqrt(y*y+_*_);if(l<x.minSpeedThreshold)return e;const u=y/l,k=_/l;if(n+=u*x.segmentLength,i+=k*x.segmentLength,p+=x.segmentLength/l,Math.acos(u*h+k*M)>x.maxTurnAngle)return e;if(x.collisions){const P=Math.round(n*o),D=Math.round(i*o);if(P<0||P>s-1||D<0||D>r-1)return e;const A=t[D*s+P];if(-1!==A&&A!==g)return e;t[D*s+P]=g}e.push({x:n,y:i,t:p,speed:l}),h=u,M=k}return e}function rt(x,m,w,I){const g=[],t=new Q.Z,s=1/Math.max(x.lineCollisionWidth,1),r=Math.round(w*s),o=Math.round(I*s),e=new Int32Array(r*o);for(let i=0;i<e.length;i++)e[i]=-1;const n=[];for(let i=0;i<I;i+=x.lineSpacing)for(let p=0;p<w;p+=x.lineSpacing)n.push({x:p,y:i,sort:t.getFloat()});n.sort((i,p)=>i.sort-p.sort);for(const{x:i,y:p}of n)if(t.getFloat()<x.density){const c=gt(x,m,i,p,g.length,e,r,o,s);if(c.length<2)continue;g.push(c)}return g}function wt(x,m){const w=new Q.Z,I=x.reduce((o,e)=>o+e.length,0),g=new Float32Array(4*I),t=new Array(x.length);let s=0,r=0;for(const o of x){const e=s;for(const n of o)g[4*s+0]=n.x,g[4*s+1]=n.y,g[4*s+2]=n.t,g[4*s+3]=n.speed,s++;t[r++]={startVertex:e,numberOfVertices:o.length,totalTime:o[o.length-1].t,timeSeed:m?w.getFloat():0}}return{lineVertices:g,lineDescriptors:t}}function B(x,m){const{lineVertices:I,lineDescriptors:g}=x;let t=0,s=0;for(const c of g)t+=2*c.numberOfVertices,s+=6*(c.numberOfVertices-1);const r=new Float32Array(9*t),o=new Uint32Array(s);let e=0,n=0;function p(c,a,f,h,M,d,y,_){const l=9*e;let u=0;r[l+u++]=c,r[l+u++]=a,r[l+u++]=1,r[l+u++]=f,r[l+u++]=d,r[l+u++]=y,r[l+u++]=h/2,r[l+u++]=M/2,r[l+u++]=_,e++,r[l+u++]=c,r[l+u++]=a,r[l+u++]=-1,r[l+u++]=f,r[l+u++]=d,r[l+u++]=y,r[l+u++]=-h/2,r[l+u++]=-M/2,r[l+u++]=_,e++}for(const c of g){const{totalTime:a,timeSeed:f}=c;let h=null,M=null,d=null,y=null,_=null,l=null;for(let u=0;u<c.numberOfVertices;u++){const k=I[4*(c.startVertex+u)+0],P=I[4*(c.startVertex+u)+1],D=I[4*(c.startVertex+u)+2],A=I[4*(c.startVertex+u)+3];let F=null,O=null,E=null,b=null;if(u>0){F=k-h,O=P-M;const v=Math.sqrt(F*F+O*O);if(F/=v,O/=v,u>1){let U=F+_,L=O+l;const C=Math.sqrt(U*U+L*L);U/=C,L/=C;const V=Math.min(1/(U*F+L*O),m);U*=V,L*=V,E=-L,b=U}else E=-O,b=F;null!==E&&null!==b&&(p(h,M,d,E,b,a,f,A),o[n++]=e-2,o[n++]=e,o[n++]=e-1,o[n++]=e,o[n++]=e+1,o[n++]=e-1)}h=k,M=P,d=D,_=F,l=O,y=A}p(h,M,d,-l,_,a,f,y)}return{vertexData:r,indexData:o}}function Y(x){const{lineVertices:g,lineDescriptors:t}=x;let s=0,r=0;for(const v of t){const U=v.numberOfVertices-1;s+=4*U*2,r+=6*U*2}const o=new Float32Array(16*s),e=new Uint32Array(r);let n,i,p,c,a,f,h,M,d,y,_,l,u,k,P=0,D=0;function O(v,U){let L=d+_,C=y+l;const V=Math.sqrt(L*L+C*C);L/=V,C/=V;const J=d*L+y*C;L/=J,C/=J;let j=_+u,K=l+k;const $=Math.sqrt(j*j+K*K);j/=$,K/=$;const q=_*j+l*K;j/=q,K/=q,function F(v,U,L,C,V,J,j,K,$,q,Pt,st,dt,mt){const S=16*P;let T=0;for(const at of[1,2])for(const it of[1,2,3,4])o[S+T++]=v,o[S+T++]=U,o[S+T++]=L,o[S+T++]=C,o[S+T++]=j,o[S+T++]=K,o[S+T++]=$,o[S+T++]=q,o[S+T++]=at,o[S+T++]=it,o[S+T++]=dt,o[S+T++]=mt,o[S+T++]=V/2,o[S+T++]=J/2,o[S+T++]=Pt/2,o[S+T++]=st/2,P++}(n,i,p,c,-C,L,a,f,h,M,-K,j,v,U),function A(){e[D++]=P-8,e[D++]=P-7,e[D++]=P-6,e[D++]=P-7,e[D++]=P-5,e[D++]=P-6,e[D++]=P-4,e[D++]=P-3,e[D++]=P-2,e[D++]=P-3,e[D++]=P-1,e[D++]=P-2}()}function E(v,U,L,C,V,J){if(d=_,y=l,_=u,l=k,null==d&&null==y&&(d=_,y=l),null!=a&&null!=f){u=v-a,k=U-f;const j=Math.sqrt(u*u+k*k);u/=j,k/=j}null!=d&&null!=y&&O(V,J),n=a,i=f,p=h,c=M,a=v,f=U,h=L,M=C}function b(v,U){d=_,y=l,_=u,l=k,null==d&&null==y&&(d=_,y=l),null!=d&&null!=y&&O(v,U)}for(const v of t){n=null,i=null,p=null,c=null,a=null,f=null,h=null,M=null,d=null,y=null,_=null,l=null,u=null,k=null;const{totalTime:U,timeSeed:L}=v;for(let C=0;C<v.numberOfVertices;C++)E(g[4*(v.startVertex+C)+0],g[4*(v.startVertex+C)+1],g[4*(v.startVertex+C)+2],g[4*(v.startVertex+C)+3],U,L);b(U,L)}return{vertexData:o,indexData:e}}function ut(x,m){const w=m.pixels,{width:I,height:g}=m,t=new Float32Array(I*g*2),s=m.mask||new Uint8Array(I*g*2);if(m.mask||s.fill(255),"vector-uv"===x)for(let r=0;r<I*g;r++)t[2*r+0]=w[0][r],t[2*r+1]=-w[1][r];else if("vector-magdir"===x)for(let r=0;r<I*g;r++){const o=w[0][r],e=(0,G.Vl)(w[1][r]),n=Math.cos(e-Math.PI/2),i=Math.sin(e-Math.PI/2);t[2*r+0]=n*o,t[2*r+1]=i*o}return{data:t,mask:s,width:I,height:g}}function yt(x,m,w,I,g,t){return N.apply(this,arguments)}function N(){return(N=(0,tt.Z)(function*(x,m,w,I,g,t){const s=performance.now(),r=(0,z.C5)(m.spatialReference);if(!r){const _=yield ft(x,m,w,I,g,t);return(0,Z.Z)("esri-2d-profiler")&&R.info("I.7","loadImagery, early exit (ms)",Math.round(performance.now()-s)),(0,Z.Z)("esri-2d-profiler")&&R.info("I.9","Number of parts",1),_}const[o,e]=r.valid,i=Math.ceil(m.width/(e-o)),p=m.width/i,c=Math.round(w/i);let a=m.xmin;const f=[],h=performance.now();for(let _=0;_<i;_++){const l=new ct.Z({xmin:a,xmax:a+p,ymin:m.ymin,ymax:m.ymax,spatialReference:m.spatialReference});f.push(ft(x,l,c,I,g,t)),a+=p}const M=yield Promise.all(f);(0,Z.Z)("esri-2d-profiler")&&R.info("I.8","All calls to _fetchPart (ms)",Math.round(performance.now()-h)),(0,Z.Z)("esri-2d-profiler")&&R.info("I.9","Number of parts",M.length);const d={data:new Float32Array(w*I*2),mask:new Uint8Array(w*I),width:w,height:I};let y=0;for(const _ of M){for(let l=0;l<_.height;l++)for(let u=0;u<_.width;u++)y+u>=w||(d.data[2*(l*w+y+u)+0]=_.data[2*(l*_.width+u)+0],d.data[2*(l*w+y+u)+1]=_.data[2*(l*_.width+u)+1],d.mask[l*w+y+u]=_.mask[l*_.width+u]);y+=_.width}return(0,Z.Z)("esri-2d-profiler")&&R.info("I.10","loadImagery, general exit (ms)",Math.round(performance.now()-s)),d})).apply(this,arguments)}function ft(x,m,w,I,g,t){return ot.apply(this,arguments)}function ot(){return(ot=(0,tt.Z)(function*(x,m,w,I,g,t){const s={requestProjectedLocalDirections:!0,signal:t};if((0,H.pC)(g)&&(s.timeExtent=g),"imagery"===x.type){yield x.load({signal:t});const e=x.rasterInfo.dataType,n=yield x.fetchImage(m,w,I,s);return!n||(0,H.Wi)(n.pixelData)||(0,H.Wi)(n.pixelData.pixelBlock)?{data:new Float32Array(w*I*2),mask:new Uint8Array(w*I),width:w,height:I}:ut(e,n.pixelData.pixelBlock)}yield x.load({signal:t});const r=x.rasterInfo.dataType,o=yield x.fetchPixels(m,w,I,s);return!o||(0,H.Wi)(o.pixelBlock)?{data:new Float32Array(w*I*2),mask:new Uint8Array(w*I),width:w,height:I}:ut(r,o.pixelBlock)})).apply(this,arguments)}}}]);