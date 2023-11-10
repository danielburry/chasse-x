"use strict";var ke=Object.defineProperty,He=Object.defineProperties,$e=Object.getOwnPropertyDescriptors,Ge=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,Ve=(fe,V,E)=>V in fe?ke(fe,V,{enumerable:!0,configurable:!0,writable:!0,value:E}):fe[V]=E,Te=(fe,V)=>{for(var E in V||(V={}))Xe.call(V,E)&&Ve(fe,E,V[E]);if(Ge)for(var E of Ge(V))Je.call(V,E)&&Ve(fe,E,V[E]);return fe},Ze=(fe,V)=>He(fe,$e(V));(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[5268],{98148:(fe,V,E)=>{function Z(P,D){const x=P.count;D||(D=new P.TypedArrayConstructor(x));for(let j=0;j<x;j++)D[j]=P.get(j);return D}E.d(V,{m:()=>Z}),Object.freeze(Object.defineProperty({__proto__:null,copy:function I(P,D,x){const j=P.typedBuffer,y=P.typedBufferStride,b=D.typedBuffer,v=D.typedBufferStride,O=x?x.count:D.count;let w=(x&&x.dstIndex?x.dstIndex:0)*y,A=(x&&x.srcIndex?x.srcIndex:0)*v;for(let N=0;N<O;++N)j[w]=b[A],w+=y,A+=v},makeDense:Z},Symbol.toStringTag,{value:"Module"}))},35995:(fe,V,E)=>{E.d(V,{f:()=>P,n:()=>Q});var I=E(81096);function Z(x,j,y){const b=x.typedBuffer,v=x.typedBufferStride,O=j.typedBuffer,w=j.typedBufferStride,A=y?y.count:j.count;let N=(y&&y.dstIndex?y.dstIndex:0)*v,L=(y&&y.srcIndex?y.srcIndex:0)*w;for(let z=0;z<A;++z)b[N]=O[L],b[N+1]=O[L+1],N+=v,L+=w}function Q(x,j,y){const b=x.typedBuffer,v=x.typedBufferStride,O=j.typedBuffer,w=j.typedBufferStride,A=y?y.count:j.count;let N=(y&&y.dstIndex?y.dstIndex:0)*v,L=(y&&y.srcIndex?y.srcIndex:0)*w;if((0,I.U)(j.elementType)){const z=(0,I.Op)(j.elementType);if((0,I.B3)(j.elementType))for(let X=0;X<A;++X)b[N]=Math.max(O[L]/z,-1),b[N+1]=Math.max(O[L+1]/z,-1),N+=v,L+=w;else for(let X=0;X<A;++X)b[N]=O[L]/z,b[N+1]=O[L+1]/z,N+=v,L+=w}else Z(x,j,y);return x}function P(x,j,y,b){var N,L;const v=x.typedBuffer,O=x.typedBufferStride,w=null!=(N=null==b?void 0:b.count)?N:x.count;let A=(null!=(L=null==b?void 0:b.dstIndex)?L:0)*O;for(let z=0;z<w;++z)v[A]=j,v[A+1]=y,A+=O}Object.freeze(Object.defineProperty({__proto__:null,copy:Z,normalizeIntegerBuffer:Q,fill:P},Symbol.toStringTag,{value:"Module"}))},63657:(fe,V,E)=>{E.d(V,{a:()=>x,n:()=>P,s:()=>D,t:()=>Q});var I=E(96286);function Q(y,b,v){if(y.count!==b.count)return void I.c.error("source and destination buffers need to have the same number of elements");const O=y.count,w=v[0],A=v[1],N=v[2],L=v[3],z=v[4],X=v[5],R=v[6],q=v[7],ee=v[8],se=y.typedBuffer,C=y.typedBufferStride,W=b.typedBuffer,H=b.typedBufferStride;for(let de=0;de<O;de++){const he=de*C,G=de*H,ne=W[G],ue=W[G+1],oe=W[G+2],M=W[G+3];se[he]=w*ne+L*ue+R*oe,se[he+1]=A*ne+z*ue+q*oe,se[he+2]=N*ne+X*ue+ee*oe,se[he+3]=M}}function P(y,b){const v=Math.min(y.count,b.count),O=y.typedBuffer,w=y.typedBufferStride,A=b.typedBuffer,N=b.typedBufferStride;for(let L=0;L<v;L++){const z=L*w,X=L*N,R=A[X],q=A[X+1],ee=A[X+2],se=R*R+q*q+ee*ee;if(se>0){const C=1/Math.sqrt(se);O[z]=C*R,O[z+1]=C*q,O[z+2]=C*ee}}}function D(y,b,v){const O=Math.min(y.count,b.count),w=y.typedBuffer,A=y.typedBufferStride,N=b.typedBuffer,L=b.typedBufferStride;for(let z=0;z<O;z++){const X=z*A,R=z*L;w[X]=v*N[R],w[X+1]=v*N[R+1],w[X+2]=v*N[R+2],w[X+3]=v*N[R+3]}}function x(y,b,v){const O=Math.min(y.count,b.count),w=y.typedBuffer,A=y.typedBufferStride,N=b.typedBuffer,L=b.typedBufferStride;for(let z=0;z<O;z++){const X=z*A,R=z*L;w[X]=N[R]>>v,w[X+1]=N[R+1]>>v,w[X+2]=N[R+2]>>v,w[X+3]=N[R+3]>>v}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:function Z(y,b,v){if(y.count!==b.count)return void I.c.error("source and destination buffers need to have the same number of elements");const O=y.count,w=v[0],A=v[1],N=v[2],L=v[3],z=v[4],X=v[5],R=v[6],q=v[7],ee=v[8],se=v[9],C=v[10],W=v[11],H=v[12],de=v[13],he=v[14],G=v[15],ne=y.typedBuffer,ue=y.typedBufferStride,oe=b.typedBuffer,M=b.typedBufferStride;for(let S=0;S<O;S++){const U=S*ue,K=S*M,F=oe[K],J=oe[K+1],Y=oe[K+2],te=oe[K+3];ne[U]=w*F+z*J+ee*Y+H*te,ne[U+1]=A*F+X*J+se*Y+de*te,ne[U+2]=N*F+R*J+C*Y+he*te,ne[U+3]=L*F+q*J+W*Y+G*te}},transformMat3:Q,normalize:P,scale:D,shiftRight:x},Symbol.toStringTag,{value:"Module"}))},63470:(fe,V,E)=>{function I(P,D,x){const j=P.typedBuffer,y=P.typedBufferStride,b=D.typedBuffer,v=D.typedBufferStride,O=x?x.count:D.count;let w=(x&&x.dstIndex?x.dstIndex:0)*y,A=(x&&x.srcIndex?x.srcIndex:0)*v;for(let N=0;N<O;++N)j[w]=b[A],j[w+1]=b[A+1],j[w+2]=b[A+2],j[w+3]=b[A+3],w+=y,A+=v}function Z(P,D,x,j,y,b){var N,L;const v=P.typedBuffer,O=P.typedBufferStride,w=null!=(N=null==b?void 0:b.count)?N:P.count;let A=(null!=(L=null==b?void 0:b.dstIndex)?L:0)*O;for(let z=0;z<w;++z)v[A]=D,v[A+1]=x,v[A+2]=j,v[A+3]=y,A+=O}E.d(V,{c:()=>I,f:()=>Z}),Object.freeze(Object.defineProperty({__proto__:null,copy:I,fill:Z},Symbol.toStringTag,{value:"Module"}))},97535:(fe,V,E)=>{E.d(V,{x:()=>Z});var I=E(79682);class Z{constructor(D){this.allocator=D,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,I.Y)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const D=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*Q);this._items.length=Math.min(D,this._items.length),this._itemsPtr=0}_grow(){for(let D=0;D<Math.max(8,Math.min(this._items.length,Q));D++)this._items.push(this.allocator())}}const Q=1024},10349:(fe,V,E)=>{E.d(V,{G:()=>Z});var I=E(26584);class Z{constructor(P,D,x=""){this.major=P,this.minor=D,this._context=x}lessThan(P,D){return this.major<P||P===this.major&&this.minor<D}since(P,D){return!this.lessThan(P,D)}validate(P){if(this.major!==P.major)throw new I.Z((this._context&&this._context+":")+"unsupported-version",`Required major ${this._context&&this._context+" "}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:P})}clone(){return new Z(this.major,this.minor,this._context)}static parse(P,D=""){const[x,j]=P.split("."),y=/^\s*\d+\s*$/;if(!x||!x.match||!x.match(y))throw new I.Z((D&&D+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:P});if(!j||!j.match||!j.match(y))throw new I.Z((D&&D+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:P});const b=parseInt(x,10),v=parseInt(j,10);return new Z(b,v,D)}}},81096:(fe,V,E)=>{function Z(x){switch(x){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function Q(x){switch(x){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function P(x){switch(x){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function D(x){switch(x){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}E.d(V,{B3:()=>Q,Op:()=>D,U:()=>P,n1:()=>Z}),E(8314)},60490:(fe,V,E)=>{E.d(V,{gS:()=>v});var I=E(81096);function v(O,w){return new O(new ArrayBuffer(w*O.ElementCount*(0,I.n1)(O.ElementType)))}Object.freeze(Object.defineProperty({__proto__:null,copy:function Z(O,w,A){const N=O.typedBuffer,L=O.typedBufferStride,z=w.typedBuffer,X=w.typedBufferStride,R=A?A.count:w.count;let q=(A&&A.dstIndex?A.dstIndex:0)*L,ee=(A&&A.srcIndex?A.srcIndex:0)*X;for(let se=0;se<R;++se){for(let C=0;C<9;++C)N[q+C]=z[ee+C];q+=L,ee+=X}}},Symbol.toStringTag,{value:"Module"})),Object.freeze(Object.defineProperty({__proto__:null,copy:function P(O,w,A){const N=O.typedBuffer,L=O.typedBufferStride,z=w.typedBuffer,X=w.typedBufferStride,R=A?A.count:w.count;let q=(A&&A.dstIndex?A.dstIndex:0)*L,ee=(A&&A.srcIndex?A.srcIndex:0)*X;for(let se=0;se<R;++se){for(let C=0;C<16;++C)N[q+C]=z[ee+C];q+=L,ee+=X}}},Symbol.toStringTag,{value:"Module"})),E(98148),E(35995),E(9554),E(63470)},10992:(fe,V,E)=>{E.d(V,{Ue:()=>x,nF:()=>A,zk:()=>v});var I=E(21286),Z=E(97535),Q=E(84161),P=E(28093),D=E(26242);function x(C){return C?{origin:(0,P.a)(C.origin),vector:(0,P.a)(C.vector)}:{origin:(0,P.c)(),vector:(0,P.c)()}}function v(C,W,H=x()){return(0,Q.c)(H.origin,C),(0,Q.b)(H.vector,W,C),H}function A(C,W,H){return function L(C,W,H,de,he){const{vector:G,origin:ne}=C,ue=(0,Q.b)(D.WM.get(),W,ne),oe=(0,Q.e)(G,ue)/(0,Q.p)(G);return(0,Q.g)(he,G,(0,I.uZ)(oe,H,de)),(0,Q.a)(he,he,C.origin)}(C,W,0,1,H)}(0,P.c)(),(0,P.c)(),new Z.x(()=>({origin:null,vector:null}))},26242:(fe,V,E)=>{E.d(V,{MP:()=>L,WM:()=>w});var I=E(27306),Z=E(79682),Q=E(550),P=E(43703),D=E(78451),x=E(99770),j=E(28093),y=E(4794);class b{constructor(R,q,ee){this.itemByteSize=R,this.itemCreate=q,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(ee/this.itemByteSize)}get(){0===this._itemsPtr&&(0,Z.Y)(()=>this._reset());const R=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=R;){const q=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let ee=0;ee<this._itemsPerBuffer;++ee)this._items.push(this.itemCreate(q,ee*this.itemByteSize));this._buffers.push(q)}return this._items[this._itemsPtr++]}_reset(){const R=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>R;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(R=v){return new b(16,x.c,R)}static createVec3f64(R=v){return new b(24,j.b,R)}static createVec4f64(R=v){return new b(32,y.a,R)}static createMat3f64(R=v){return new b(72,Q.a,R)}static createMat4f64(R=v){return new b(128,P.a,R)}static createQuatf64(R=v){return new b(32,D.c,R)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const v=4*I.Y8.KILOBYTES,w=(b.createVec2f64(),b.createVec3f64()),L=(b.createVec4f64(),b.createMat3f64(),b.createMat4f64());b.createQuatf64()},9160:(fe,V,E)=>{E.d(V,{C:()=>y});var I=E(15861),Z=E(84792),Q=E(59213),P=E(26584),D=E(62208),x=E(10699),j=E(21726);class y{constructor(O){this.streamDataRequester=O}loadJSON(O,w){var A=this;return(0,I.Z)(function*(){return A._load("json",O,w)})()}loadBinary(O,w){var A=this;return(0,I.Z)(function*(){return(0,j.HK)(O)?((0,x.k_)(w),(0,j.AH)(O)):A._load("binary",O,w)})()}loadImage(O,w){var A=this;return(0,I.Z)(function*(){return A._load("image",O,w)})()}_load(O,w,A){var N=this;return(0,I.Z)(function*(){if((0,D.Wi)(N.streamDataRequester))return(yield(0,Z.default)(w,{responseType:b[O]})).data;const L=yield(0,Q.q6)(N.streamDataRequester.request(w,O,A));if(!0===L.ok)return L.value;throw(0,x.r9)(L.error),new P.Z("",`Request for resource failed: ${L.error}`)})()}}const b={image:"image",binary:"array-buffer",json:"json"}},96170:(fe,V,E)=>{E.d(V,{DA:()=>P,jX:()=>D,nh:()=>Q});var I=E(55713),Z=E(68738);function Q(x,j=Z.p){return"number"==typeof x?j(x):(0,I.Uc)(x)||(0,I.lq)(x)?new Uint32Array(x):x}function P(x){const j="number"==typeof x?x:x.length;if(j<3)return new Uint16Array(0);const y=j-2,b=y<=65536?new Uint16Array(3*y):new Uint32Array(3*y);if("number"==typeof x){let v=0;for(let O=0;O<y;O+=1)O%2==0?(b[v++]=O,b[v++]=O+1,b[v++]=O+2):(b[v++]=O+1,b[v++]=O,b[v++]=O+2)}else{let v=0;for(let O=0;O<y;O+=1)if(O%2==0){const A=x[O+1],N=x[O+2];b[v++]=x[O],b[v++]=A,b[v++]=N}else{const A=x[O],N=x[O+2];b[v++]=x[O+1],b[v++]=A,b[v++]=N}}return b}function D(x){const j="number"==typeof x?x:x.length;if(j<3)return new Uint16Array(0);const y=j-2,b=y<=65536?new Uint16Array(3*y):new Uint32Array(3*y);if("number"==typeof x){let v=0;for(let O=0;O<y;++O)b[v++]=0,b[v++]=O+1,b[v++]=O+2;return b}{const v=x[0];let O=x[1],w=0;for(let A=0;A<y;++A){const N=x[A+2];b[w++]=v,b[w++]=O,b[w++]=N,O=N}return b}}},93831:(fe,V,E)=>{E.d(V,{z:()=>be});var I=E(15861),Z=E(62208),Q=E(43703),P=E(26584);const x=E(63290).Z.getLogger("esri.views.3d.glTF");var se,C,T,y=E(67969),O=E(94573),w=E(88159),A=E(21726),N=E(10349),L=E(28347),z=E(48977),X=E(78451),R=E(60479),q=E(98148);class ee{constructor(a){this.data=a,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const a=this.offset4;return this.offset4+=1,this.dataUint32[a]}readUint8Array(a){const _=4*this.offset4;return this.offset4+=a/4,new Uint8Array(this.data,_,a)}remainingBytes(){return this.data.byteLength-4*this.offset4}}(T=se||(se={})).SCALAR="SCALAR",T.VEC2="VEC2",T.VEC3="VEC3",T.VEC4="VEC4",T.MAT2="MAT2",T.MAT3="MAT3",T.MAT4="MAT4",function(T){T[T.ARRAY_BUFFER=34962]="ARRAY_BUFFER",T[T.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(C||(C={}));const W={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},H={pbrMetallicRoughness:W,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},de={ESRI_externalColorMixMode:"tint"},he=(T={})=>{const a=Te(Te({},W),T.pbrMetallicRoughness),_=function G(T){switch(T.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,O.Bg)(T.ESRI_externalColorMixMode),T.ESRI_externalColorMixMode="tint"}return T}(Te(Te({},de),T.extras));return Ze(Te(Te({},H),T),{pbrMetallicRoughness:a,extras:_})},ne={magFilter:y.cw.LINEAR,minFilter:y.cw.LINEAR_MIPMAP_LINEAR,wrapS:y.e8.REPEAT,wrapT:y.e8.REPEAT};class S{constructor(a,_,h,l,d){this.context=a,this.errorContext=_,this.uri=h,this.json=l,this.glbBuffer=d,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function oe(T){let a,_;return T.replace(/^(.*\/)?([^/]*)$/,(h,l,d)=>(a=l||"",_=d||"","")),{dirPart:a,filePart:_}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),_.errorUnsupportedIf(null==l.scenes,"Scenes must be defined."),_.errorUnsupportedIf(null==l.meshes,"Meshes must be defined"),_.errorUnsupportedIf(null==l.nodes,"Nodes must be defined."),this._computeNodeParents()}static load(a,_,h,l){var d=this;return(0,I.Z)(function*(){if((0,A.HK)(h)){const ae=(0,A.sJ)(h);if("model/gltf-binary"!==ae.mediaType)try{const k=JSON.parse(ae.isBase64?atob(ae.data):ae.data);return new S(a,_,h,k)}catch(k){}const ce=(0,A.AH)(h);if(S._isGLBData(ce))return d._fromGLBData(a,_,h,ce)}if(h.endsWith(".gltf")){const ae=yield a.loadJSON(h,l);return new S(a,_,h,ae)}const B=yield a.loadBinary(h,l);if(S._isGLBData(B))return d._fromGLBData(a,_,h,B);const $=yield a.loadJSON(h,l);return new S(a,_,h,$)})()}static _isGLBData(a){const _=new ee(a);return _.remainingBytes()>=4&&1179937895===_.readUint32()}static _fromGLBData(a,_,h,l){return(0,I.Z)(function*(){const d=yield S._parseGLBData(_,l);return new S(a,_,h,d.json,d.binaryData)})()}static _parseGLBData(a,_){return(0,I.Z)(function*(){const h=new ee(_);a.assert(h.remainingBytes()>=12,"GLB binary data is insufficiently large.");const l=h.readUint32(),d=h.readUint32(),B=h.readUint32();a.assert(1179937895===l,"Magic first 4 bytes do not fit to expected GLB value."),a.assert(_.byteLength>=B,"GLB binary data is smaller than header specifies."),a.errorUnsupportedIf(2!==d,"An unsupported GLB container version was detected. Only version 2 is supported.");let $,ae,ce=0;for(;h.remainingBytes()>=8;){const k=h.readUint32(),_e=h.readUint32();0===ce?(a.assert(1313821514===_e,"First GLB chunk must be JSON."),a.assert(k>=0,"No JSON data found."),$=yield re(h.readUint8Array(k))):1===ce?(a.errorUnsupportedIf(5130562!==_e,"Second GLB chunk expected to be BIN."),ae=h.readUint8Array(k)):a.warnUnsupported("More than 2 GLB chunks detected. Skipping."),ce+=1}return $||a.error("No GLB JSON chunk detected."),{json:$,binaryData:ae}})()}getBuffer(a,_){var h=this;return(0,I.Z)(function*(){const l=h.json.buffers[a],d=h.errorContext;if(null==l.uri)return d.assert(null!=h.glbBuffer,"GLB buffer not present"),h.glbBuffer;const B=yield h._getBufferLoader(a,_);return d.assert(B.byteLength===l.byteLength,"Buffer byte lengths should match."),B})()}_getBufferLoader(a,_){var h=this;return(0,I.Z)(function*(){const l=h.bufferLoaders.get(a);if(l)return l;const B=h.context.loadBinary(h._resolveUri(h.json.buffers[a].uri),_).then($=>new Uint8Array($));return h.bufferLoaders.set(a,B),B})()}getAccessor(a,_){var h=this;return(0,I.Z)(function*(){const l=h.errorContext;l.errorUnsupportedIf(!h.json.accessors,"Accessors missing.");const d=h.json.accessors[a];l.errorUnsupportedIf(null==(null==d?void 0:d.bufferView),"Some accessor does not specify a bufferView."),l.errorUnsupportedIf(d.type in[se.MAT2,se.MAT3,se.MAT4],`AttributeType ${d.type} is not supported`);const B=h.json.bufferViews[d.bufferView],$=yield h.getBuffer(B.buffer,_),ae=J[d.type],ce=Y[d.componentType],k=ae*ce,_e=B.byteStride||k;return{raw:$.buffer,byteStride:_e,byteOffset:$.byteOffset+(B.byteOffset||0)+(d.byteOffset||0),entryCount:d.count,isDenselyPacked:_e===k,componentCount:ae,componentByteSize:ce,componentType:d.componentType,min:d.min,max:d.max,normalized:!!d.normalized}})()}getIndexData(a,_){var h=this;return(0,I.Z)(function*(){if(null==a.indices)return null;const l=yield h.getAccessor(a.indices,_);if(l.isDenselyPacked)switch(l.componentType){case y.g.UNSIGNED_BYTE:return new Uint8Array(l.raw,l.byteOffset,l.entryCount);case y.g.UNSIGNED_SHORT:return new Uint16Array(l.raw,l.byteOffset,l.entryCount);case y.g.UNSIGNED_INT:return new Uint32Array(l.raw,l.byteOffset,l.entryCount)}else switch(l.componentType){case y.g.UNSIGNED_BYTE:return(0,q.m)(h._wrapAccessor(R.D_,l));case y.g.UNSIGNED_SHORT:return(0,q.m)(h._wrapAccessor(R.av,l));case y.g.UNSIGNED_INT:return(0,q.m)(h._wrapAccessor(R.Nu,l))}})()}getPositionData(a,_){var h=this;return(0,I.Z)(function*(){const l=h.errorContext;l.errorUnsupportedIf(null==a.attributes.POSITION,"No POSITION vertex data found.");const d=yield h.getAccessor(a.attributes.POSITION,_);return l.errorUnsupportedIf(d.componentType!==y.g.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+ye[d.componentType]),l.errorUnsupportedIf(3!==d.componentCount,"POSITION vertex attribute must have 3 components, but found "+d.componentCount.toFixed()),h._wrapAccessor(R.ct,d)})()}getNormalData(a,_){var h=this;return(0,I.Z)(function*(){const l=h.errorContext;l.assert(null!=a.attributes.NORMAL,"No NORMAL vertex data found.");const d=yield h.getAccessor(a.attributes.NORMAL,_);return l.errorUnsupportedIf(d.componentType!==y.g.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+ye[d.componentType]),l.errorUnsupportedIf(3!==d.componentCount,"NORMAL vertex attribute must have 3 components, but found "+d.componentCount.toFixed()),h._wrapAccessor(R.ct,d)})()}getTangentData(a,_){var h=this;return(0,I.Z)(function*(){const l=h.errorContext;l.assert(null!=a.attributes.TANGENT,"No TANGENT vertex data found.");const d=yield h.getAccessor(a.attributes.TANGENT,_);return l.errorUnsupportedIf(d.componentType!==y.g.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+ye[d.componentType]),l.errorUnsupportedIf(4!==d.componentCount,"TANGENT vertex attribute must have 4 components, but found "+d.componentCount.toFixed()),new R.ek(d.raw,d.byteOffset,d.byteStride,d.byteOffset+d.byteStride*d.entryCount)})()}getTextureCoordinates(a,_){var h=this;return(0,I.Z)(function*(){const l=h.errorContext;l.assert(null!=a.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const d=yield h.getAccessor(a.attributes.TEXCOORD_0,_);return l.errorUnsupportedIf(2!==d.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+d.componentCount.toFixed()),d.componentType===y.g.FLOAT?h._wrapAccessor(R.Eu,d):(l.errorUnsupportedIf(!d.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function te(T){switch(T.componentType){case y.g.BYTE:return new R.Vs(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case y.g.UNSIGNED_BYTE:return new R.xA(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case y.g.SHORT:return new R.or(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case y.g.UNSIGNED_SHORT:return new R.TS(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case y.g.UNSIGNED_INT:return new R.qt(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);case y.g.FLOAT:return new R.Eu(T.raw,T.byteOffset,T.byteStride,T.byteOffset+T.byteStride*T.entryCount);default:return void(0,O.Bg)(T.componentType)}}(d))})()}getVertexColors(a,_){var h=this;return(0,I.Z)(function*(){const l=h.errorContext;l.assert(null!=a.attributes.COLOR_0,"No COLOR_0 vertex data found.");const d=yield h.getAccessor(a.attributes.COLOR_0,_);if(l.errorUnsupportedIf(4!==d.componentCount&&3!==d.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+d.componentCount.toFixed()),4===d.componentCount){if(d.componentType===y.g.FLOAT)return h._wrapAccessor(R.ek,d);if(d.componentType===y.g.UNSIGNED_BYTE)return h._wrapAccessor(R.mc,d);if(d.componentType===y.g.UNSIGNED_SHORT)return h._wrapAccessor(R.v6,d)}else if(3===d.componentCount){if(d.componentType===y.g.FLOAT)return h._wrapAccessor(R.ct,d);if(d.componentType===y.g.UNSIGNED_BYTE)return h._wrapAccessor(R.ne,d);if(d.componentType===y.g.UNSIGNED_SHORT)return h._wrapAccessor(R.mw,d)}l.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+ye[d.componentType])})()}hasPositions(a){return void 0!==a.attributes.POSITION}hasNormals(a){return void 0!==a.attributes.NORMAL}hasVertexColors(a){return void 0!==a.attributes.COLOR_0}hasTextureCoordinates(a){return void 0!==a.attributes.TEXCOORD_0}hasTangents(a){return void 0!==a.attributes.TANGENT}getMaterial(a,_,h){var l=this;return(0,I.Z)(function*(){let d=l.materialCache.get(a.material);if(!d){const B=null!=a.material?he(l.json.materials[a.material]):he(),$=B.pbrMetallicRoughness,ae=l.hasVertexColors(a),ce=l.getTexture($.baseColorTexture,_),k=l.getTexture(B.normalTexture,_),_e=h?l.getTexture(B.occlusionTexture,_):null,me=h?l.getTexture(B.emissiveTexture,_):null,Me=h?l.getTexture($.metallicRoughnessTexture,_):null,Ce=null!=a.material?a.material:-1;d={alphaMode:B.alphaMode,alphaCutoff:B.alphaCutoff,color:$.baseColorFactor,doubleSided:!!B.doubleSided,colorTexture:yield ce,normalTexture:yield k,name:B.name,id:Ce,occlusionTexture:yield _e,emissiveTexture:yield me,emissiveFactor:B.emissiveFactor,metallicFactor:$.metallicFactor,roughnessFactor:$.roughnessFactor,metallicRoughnessTexture:yield Me,hasVertexColors:ae,ESRI_externalColorMixMode:B.extras.ESRI_externalColorMixMode}}return d})()}getTexture(a,_){var h=this;return(0,I.Z)(function*(){if(!a)return null;h.errorContext.errorUnsupportedIf(0!==(a.texCoord||0),"Only TEXCOORD with index 0 is supported.");const l=a.index,d=h.errorContext,B=h.json.textures[l],$=(T=>Te(Te({},ne),T))(null!=B.sampler?h.json.samplers[B.sampler]:{});d.errorUnsupportedIf(null==B.source,"Source is expected to be defined for a texture.");const ae=h.json.images[B.source],ce=yield h._loadTextureImageData(l,B,_);return(0,w.s1)(h.textureCache,l,()=>{const k=me=>33071===me||33648===me||10497===me,_e=me=>(d.error(`Unexpected TextureSampler WrapMode: ${me}. Using default REPEAT(10497).`),10497);return{data:ce,wrapS:k($.wrapS)?$.wrapS:_e($.wrapS),wrapT:k($.wrapT)?$.wrapT:_e($.wrapT),minFilter:$.minFilter,name:ae.name,id:l}})})()}getNodeTransform(a){if(void 0===a)return K;let _=this.nodeTransformCache.get(a);if(!_){const h=this.getNodeTransform(this._getNodeParent(a)),l=this.json.nodes[a];l.matrix?_=(0,L.m)((0,Q.c)(),h,l.matrix):l.translation||l.rotation||l.scale?(_=(0,Q.b)(h),l.translation&&(0,L.j)(_,_,l.translation),l.rotation&&(F[3]=(0,z.g)(F,l.rotation),(0,L.e)(_,_,F[3],F)),l.scale&&(0,L.h)(_,_,l.scale)):_=h,this.nodeTransformCache.set(a,_)}return _}_wrapAccessor(a,_){return new a(_.raw,_.byteOffset,_.byteStride,_.byteOffset+_.byteStride*(_.entryCount-1)+_.componentByteSize*_.componentCount)}_resolveUri(a){return(0,A.hF)(a,this.baseUri)}_getNodeParent(a){return this.nodeParentMap.get(a)}_checkVersionSupported(){const a=N.G.parse(this.json.asset.version,"glTF");U.validate(a)}_checkRequiredExtensionsSupported(){const a=this.json;a.extensionsRequired&&0!==a.extensionsRequired.length&&this.errorContext.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+a.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((a,_)=>{a.children&&a.children.forEach(h=>{this.nodeParentMap.set(h,_)})})}_loadTextureImageData(a,_,h){var l=this;return(0,I.Z)(function*(){const d=l.textureLoaders.get(a);if(d)return d;const B=l._createTextureLoader(_,h);return l.textureLoaders.set(a,B),B})()}_createTextureLoader(a,_){var h=this;return(0,I.Z)(function*(){const l=h.json.images[a.source];if(l.uri)return h.context.loadImage(h._resolveUri(l.uri),_);const d=h.errorContext;d.errorUnsupportedIf(null==l.bufferView,"Image bufferView must be defined."),d.errorUnsupportedIf(null==l.mimeType,"Image mimeType must be defined.");const B=h.json.bufferViews[l.bufferView],$=yield h.getBuffer(B.buffer,_);return d.errorUnsupportedIf(null!=B.byteStride,"byteStride not supported for image buffer"),function le(T,a){return ie.apply(this,arguments)}(new Uint8Array($.buffer,$.byteOffset+(B.byteOffset||0),B.byteLength),l.mimeType)})()}}const U=new N.G(2,0,"glTF"),K=(0,L.z)((0,Q.c)(),Math.PI/2),F=(0,X.a)(),J={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Y={[y.g.BYTE]:1,[y.g.UNSIGNED_BYTE]:1,[y.g.SHORT]:2,[y.g.UNSIGNED_SHORT]:2,[y.g.FLOAT]:4,[y.g.UNSIGNED_INT]:4};function re(T){return pe.apply(this,arguments)}function pe(){return pe=(0,I.Z)(function*(T){return new Promise((a,_)=>{const h=new Blob([T]),l=new FileReader;l.onload=()=>{a(JSON.parse(l.result))},l.onerror=d=>{_(d)},l.readAsText(h)})}),pe.apply(this,arguments)}function ie(){return ie=(0,I.Z)(function*(T,a){return new Promise((_,h)=>{const l=new Blob([T],{type:a}),d=URL.createObjectURL(l),B=new Image;B.addEventListener("load",()=>{URL.revokeObjectURL(d),"decode"in B?B.decode().then(()=>_(B),()=>_(B)):_(B)}),B.addEventListener("error",$=>{URL.revokeObjectURL(d),h($)}),B.src=d})}),ie.apply(this,arguments)}const ye={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let xe=0;function be(T,a){return ge.apply(this,arguments)}function ge(){return ge=(0,I.Z)(function*(T,a,_={},h=!0){const l=yield S.load(T,Ee,a,_),d="gltf_"+xe++,B={lods:[],materials:new Map,textures:new Map,meta:Se(l)},$=!(!l.json.asset.extras||"symbolResource"!==l.json.asset.extras.ESRI_type),ae=new Map;yield Oe(l,function(){var ce=(0,I.Z)(function*(k,_e,me,Me){var Fe;const Ce=null!=(Fe=ae.get(me))?Fe:0;ae.set(me,Ce+1);const Be=void 0!==k.mode?k.mode:y.MX.TRIANGLES,Re=Be===y.MX.TRIANGLES||Be===y.MX.TRIANGLE_STRIP||Be===y.MX.TRIANGLE_FAN?Be:null;if((0,Z.Wi)(Re))return void Ee.warnUnsupported("Unsupported primitive mode ("+we[Be]+"). Skipping primitive.");if(!l.hasPositions(k))return void Ee.warn("Skipping primitive without POSITION vertex attribute.");const ze=l.getPositionData(k,_),Ke=l.getMaterial(k,_,h),Ne=l.hasNormals(k)?l.getNormalData(k,_):null,Pe=l.hasTangents(k)?l.getTangentData(k,_):null,Le=l.hasTextureCoordinates(k)?l.getTextureCoordinates(k,_):null,De=l.hasVertexColors(k)?l.getVertexColors(k,_):null,We=l.getIndexData(k,_),Ye={transform:(0,Q.b)(_e),attributes:{position:yield ze,normal:Ne?yield Ne:null,texCoord0:Le?yield Le:null,color:De?yield De:null,tangent:Pe?yield Pe:null},indices:yield We,primitiveType:Re,material:Ae(B,yield Ke,d)};let je=null;(0,Z.pC)(B.meta)&&(0,Z.pC)(B.meta.ESRI_lod)&&"screenSpaceRadius"===B.meta.ESRI_lod.metric&&(je=B.meta.ESRI_lod.thresholds[me]),B.lods[me]=B.lods[me]||{parts:[],name:Me,lodThreshold:je},B.lods[me].parts[Ce]=Ye});return function(k,_e,me,Me){return ce.apply(this,arguments)}}());for(const ce of B.lods)ce.parts=ce.parts.filter(k=>!!k);return{model:B,meta:{isEsriSymbolResource:$,uri:l.uri},customMeta:{}}}),ge.apply(this,arguments)}function Se(T){let _=null;return T.json.nodes.forEach(h=>{const l=h.extras;(0,Z.pC)(l)&&(l.ESRI_proxyEllipsoid||l.ESRI_lod)&&(_=l)}),_}function Oe(T,a){return ve.apply(this,arguments)}function ve(){return ve=(0,I.Z)(function*(T,a){const _=T.json,h=_.scenes[_.scene||0].nodes,l=h.length>1,d=[];for(const ae of h){const ce=_.nodes[ae];d.push(B(ae,0)),Ie(ce)&&!l&&ce.extensions.MSFT_lod.ids.forEach((k,_e)=>B(k,_e+1))}function B(ae,ce){return $.apply(this,arguments)}function $(){return($=(0,I.Z)(function*(ae,ce){const k=_.nodes[ae],_e=T.getNodeTransform(ae);if(Ee.warnUnsupportedIf(null!=k.weights,"Morph targets are not supported."),null!=k.mesh){const me=_.meshes[k.mesh];for(const Me of me.primitives)d.push(a(Me,_e,ce,me.name))}for(const me of k.children||[])d.push(B(me,ce))})).apply(this,arguments)}yield Promise.all(d)}),ve.apply(this,arguments)}function Ie(T){return T.extensions&&T.extensions.MSFT_lod&&Array.isArray(T.extensions.MSFT_lod.ids)}function Ae(T,a,_){const h=d=>{const B=`${_}_tex_${d&&d.id}${d&&d.name?"_"+d.name:""}`;if(d&&!T.textures.has(B)){const $=function v(T,a={}){return{data:T,parameters:Te({wrap:Te({s:y.e8.REPEAT,t:y.e8.REPEAT},a.wrap),noUnpackFlip:!0,mipmap:!1},a)}}(d.data,{wrap:{s:d.wrapS,t:d.wrapT},mipmap:Ue.includes(d.minFilter),noUnpackFlip:!0});T.textures.set(B,$)}return B},l=`${_}_mat_${a.id}_${a.name}`;if(!T.materials.has(l)){const d=function b(T={}){return Te({color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply"},T)}({color:[a.color[0],a.color[1],a.color[2]],opacity:a.color[3],alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,colorMixMode:a.ESRI_externalColorMixMode,textureColor:a.colorTexture?h(a.colorTexture):void 0,textureNormal:a.normalTexture?h(a.normalTexture):void 0,textureOcclusion:a.occlusionTexture?h(a.occlusionTexture):void 0,textureEmissive:a.emissiveTexture?h(a.emissiveTexture):void 0,textureMetallicRoughness:a.metallicRoughnessTexture?h(a.metallicRoughnessTexture):void 0,emissiveFactor:[a.emissiveFactor[0],a.emissiveFactor[1],a.emissiveFactor[2]],metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor});T.materials.set(l,d)}return l}const Ee=new class j{error(a){throw new P.Z("gltf-loader-error",a)}errorUnsupported(a){throw new P.Z("gltf-loader-unsupported-feature",a)}errorUnsupportedIf(a,_){a&&this.errorUnsupported(_)}assert(a,_){a||this.error(_)}warn(a){x.warn(a)}warnUnsupported(a){this.warn("[Unsupported Feature] "+a)}warnUnsupportedIf(a,_){a&&this.warnUnsupported(_)}},Ue=[y.cw.LINEAR_MIPMAP_LINEAR,y.cw.LINEAR_MIPMAP_NEAREST],we=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},68738:(fe,V,E)=>{E.d(V,{NO:()=>de,cM:()=>H,p:()=>C,DX:()=>W});var I=E(84161),Z=E(28093),Q=E(97535),P=E(10992);function N(M,S,U){return(0,I.b)(X,S,M),(0,I.b)(R,U,M),(0,I.l)((0,I.f)(X,X,R))/2}E(26242),new Q.x(P.Ue),new Q.x(()=>({p0:null,p1:null,p2:null}));const X=(0,Z.c)(),R=(0,Z.c)();let q=(()=>{const M=new Uint32Array(131072);for(let S=0;S<M.length;++S)M[S]=S;return M})();const ee=new Uint16Array([0]),se=(()=>{const M=new Uint16Array(65536);for(let S=0;S<M.length;++S)M[S]=S;return M})();function C(M){if(1===M)return ee;if(M<se.length)return new Uint16Array(se.buffer,0,M);if(M>q.length){const S=Math.max(2*q.length,M);q=new Uint32Array(S);for(let U=0;U<q.length;U++)q[U]=U}return new Uint32Array(q.buffer,0,M)}function W(M){if(1===M)return new Uint16Array(ee);if(M<se.length)return new Uint16Array(se.slice(0,M));if(M>q.length){const S=new Uint32Array(M);for(let U=0;U<S.length;U++)S[U]=U;return S}return new Uint32Array(q.slice(0,M))}function H(M,S,U){if(!M)return!1;const{size:K,data:F}=M;(0,I.s)(U,0,0,0),(0,I.s)(oe,0,0,0);let J=0,Y=0;for(let te=0;te<S.length-2;te+=3){const re=S[te+0]*K,pe=S[te+1]*K,le=S[te+2]*K;(0,I.s)(G,F[re+0],F[re+1],F[re+2]),(0,I.s)(ne,F[pe+0],F[pe+1],F[pe+2]),(0,I.s)(ue,F[le+0],F[le+1],F[le+2]);const ie=N(G,ne,ue);ie?((0,I.a)(G,G,ne),(0,I.a)(G,G,ue),(0,I.g)(G,G,1/3*ie),(0,I.a)(U,U,G),J+=ie):((0,I.a)(oe,oe,G),(0,I.a)(oe,oe,ne),(0,I.a)(oe,oe,ue),Y+=3)}return!(0===Y&&0===J||(0!==J?((0,I.g)(U,U,1/J),0):0===Y||((0,I.g)(U,oe,1/Y),0)))}function de(M,S,U){if(!M||!S)return!1;const{size:K,data:F}=M;(0,I.s)(U,0,0,0);let J=-1,Y=0;for(let te=0;te<S.length;te++){const re=S[te]*K;J!==re&&(U[0]+=F[re+0],U[1]+=F[re+1],U[2]+=F[re+2],Y++),J=re}return Y>1&&(0,I.g)(U,U,1/Y),Y>0}const G=(0,Z.c)(),ne=(0,Z.c)(),ue=(0,Z.c)(),oe=(0,Z.c)()},79331:(fe,V,E)=>{E.d(V,{K:()=>I});const I=2.1}}]);