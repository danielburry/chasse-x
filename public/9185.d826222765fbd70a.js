"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[9185],{29185:(TE,Q,N)=>{N.r(Q),N.d(Q,{loadGLTFMesh:()=>z});var u=N(15861),c=N(91558),W=N(84792),i=N(88159),f=N(21286),T=N(62208),l=N(30217),H=N(550),v=N(28093),V=N(4794),X=N(61751),Y=N(27530),x=N(57807),p=N(92529),M=N(60479),U=N(79800),B=N(63657),s=N(60490),h=N(60853),K=N(9160),j=N(93831),F=N(96170),q=N(68738),y=N(79331),L=N(67969),$=N(9554),G=N(63470),m=N(35995);function z(R,A,O){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)(function*(R,A,O){const I=new K.C(b(O)),C=(yield(0,j.z)(I,A,O,!0)).model,e=C.lods.shift(),_=new Map,D=new Map;C.textures.forEach((Z,EE)=>_.set(EE,AE(Z))),C.materials.forEach((Z,EE)=>D.set(EE,NE(Z,_)));const n=E(e);for(const Z of n.parts)CE(n,Z,D);const{position:a,normal:P,tangent:t,color:S,texCoord0:o}=n.vertexAttributes,w={position:a.typedBuffer,normal:(0,T.pC)(P)?P.typedBuffer:null,tangent:(0,T.pC)(t)?t.typedBuffer:null,uv:(0,T.pC)(o)?o.typedBuffer:null,color:(0,T.pC)(S)?S.typedBuffer:null},k=(0,h.w1)(w,R,O);return{transform:k.transform,components:n.components,spatialReference:R.spatialReference,vertexAttributes:new p.Q({position:k.vertexAttributes.position,normal:k.vertexAttributes.normal,tangent:k.vertexAttributes.tangent,color:w.color,uv:w.uv})}})).apply(this,arguments)}function b(R){return(null==R?void 0:R.resolveFile)?{busy:!1,request:(A=(0,u.Z)(function*(O,I,C){const e=R.resolveFile(O),_="image"===I?"image":"binary"===I?"array-buffer":"json";return(yield(0,W.default)(e,{responseType:_,signal:(0,T.pC)(C)?C.signal:null})).data}),function(I,C,e){return A.apply(this,arguments)})}:null;var A}function r(R,A){if((0,T.Wi)(R))return"-";const O=R.typedBuffer;return`${(0,i.s1)(A,O.buffer,()=>A.size)}/${O.byteOffset}/${O.byteLength}`}function J(R){return(0,T.pC)(R)?R.toString():"-"}function E(R){let A=0;const O={color:!1,tangent:!1,normal:!1,texCoord0:!1},I=new Map,C=new Map,e=[];for(const _ of R.parts){const{attributes:{position:D,normal:n,color:a,tangent:P,texCoord0:t}}=_,S=`\n      ${r(D,I)}/\n      ${r(n,I)}/\n      ${r(a,I)}/\n      ${r(P,I)}/\n      ${r(t,I)}/\n      ${J(_.transform)}\n    `;let o=!1;const w=(0,i.s1)(C,S,()=>(o=!0,{start:A,length:D.count}));o&&(A+=D.count),n&&(O.normal=!0),a&&(O.color=!0),P&&(O.tangent=!0),t&&(O.texCoord0=!0),e.push({gltf:_,writeVertices:o,region:w})}return{vertexAttributes:{position:(0,s.gS)(M.fP,A),normal:O.normal?(0,s.gS)(M.ct,A):null,tangent:O.tangent?(0,s.gS)(M.ek,A):null,color:O.color?(0,s.gS)(M.mc,A):null,texCoord0:O.texCoord0?(0,s.gS)(M.Eu,A):null},parts:e,components:[]}}function AE(R){return new x.Z({data:R.data,wrap:SE(R.parameters.wrap)})}function NE(R,A){const O=new c.Z(function nE(R,A){return(0,V.f)(g(R[0]),g(R[1]),g(R[2]),A)}(R.color,R.opacity)),I=R.emissiveFactor?new c.Z(function _E(R){return(0,v.f)(g(R[0]),g(R[1]),g(R[2]))}(R.emissiveFactor)):null;return new Y.Z({color:O,colorTexture:(0,T.Wg)((0,T.yw)(R.textureColor,C=>A.get(C))),normalTexture:(0,T.Wg)((0,T.yw)(R.textureNormal,C=>A.get(C))),emissiveColor:I,emissiveTexture:(0,T.Wg)((0,T.yw)(R.textureEmissive,C=>A.get(C))),occlusionTexture:(0,T.Wg)((0,T.yw)(R.textureOcclusion,C=>A.get(C))),alphaMode:IE(R.alphaMode),alphaCutoff:R.alphaCutoff,doubleSided:R.doubleSided,metallic:R.metallicFactor,roughness:R.roughnessFactor,metallicRoughnessTexture:(0,T.Wg)((0,T.yw)(R.textureMetallicRoughness,C=>A.get(C)))})}function CE(R,A,O){A.writeVertices&&function OE(R,A){const{position:O,normal:I,tangent:C,color:e,texCoord0:_}=R.vertexAttributes,D=A.region.start,{attributes:n,transform:a}=A.gltf,P=n.position.count;if((0,U.t)(O.slice(D,P),n.position,a),(0,T.pC)(n.normal)&&(0,T.pC)(I)){const t=(0,l.a)((0,H.c)(),a),S=I.slice(D,P);(0,U.a)(S,n.normal,t),(0,f.oc)(t)&&(0,U.n)(S,S)}else(0,T.pC)(I)&&(0,$.f)(I,0,0,1,{dstIndex:D,count:P});if((0,T.pC)(n.tangent)&&(0,T.pC)(C)){const t=(0,l.a)((0,H.c)(),a),S=C.slice(D,P);(0,B.t)(S,n.tangent,t),(0,f.oc)(t)&&(0,B.n)(S,S)}else(0,T.pC)(C)&&(0,G.f)(C,0,0,1,1,{dstIndex:D,count:P});if((0,T.pC)(n.texCoord0)&&(0,T.pC)(_)?(0,m.n)(_.slice(D,P),n.texCoord0):(0,T.pC)(_)&&(0,m.f)(_,0,0,{dstIndex:D,count:P}),(0,T.pC)(n.color)&&(0,T.pC)(e)){const t=n.color,S=e.slice(D,P);if(4===t.elementCount)t instanceof M.ek?(0,B.s)(S,t,255):t instanceof M.mc?(0,G.c)(S,t):t instanceof M.v6&&(0,B.a)(S,t,8);else{(0,G.f)(S,255,255,255,255);const o=M.ne.fromTypedArray(S.typedBuffer,S.typedBufferStride);t instanceof M.ct?(0,U.s)(o,t,255):t instanceof M.ne?(0,$.c)(o,t):t instanceof M.mw&&(0,U.b)(o,t,8)}}else(0,T.pC)(e)&&(0,G.f)(e.slice(D,P),255,255,255,255)}(R,A);const I=A.gltf,C=function tE(R,A){switch(A){case L.MX.TRIANGLES:return(0,F.nh)(R,q.DX);case L.MX.TRIANGLE_STRIP:return(0,F.DA)(R);case L.MX.TRIANGLE_FAN:return(0,F.jX)(R)}}(I.indices||I.attributes.position.count,I.primitiveType),e=A.region.start;if(e)for(let _=0;_<C.length;_++)C[_]+=e;R.components.push(new X.Z({faces:C,material:O.get(I.material),trustSourceNormals:!0}))}function IE(R){switch(R){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function SE(R){return{horizontal:RE(R.s),vertical:RE(R.t)}}function RE(R){switch(R){case L.e8.CLAMP_TO_EDGE:return"clamp";case L.e8.MIRRORED_REPEAT:return"mirror";case L.e8.REPEAT:return"repeat"}}function g(R){return R**(1/y.K)*255}},67969:(TE,Q,N)=>{var u,c,W,i,f,T,l,H,v,V,X,Y,x,p,M,U,B,s,h,K,j,F,E;N.d(Q,{Br:()=>U,Ho:()=>h,LR:()=>T,Ld:()=>q,Lm:()=>j,Lu:()=>$,MX:()=>c,No:()=>x,OU:()=>F,Se:()=>m,Tg:()=>B,V7:()=>r,VI:()=>p,VY:()=>L,Wf:()=>l,Y5:()=>b,_g:()=>y,cw:()=>X,db:()=>i,e8:()=>Y,g:()=>H,l1:()=>s,lP:()=>M,lk:()=>u,q_:()=>G,qi:()=>K,w0:()=>f,wb:()=>v,xS:()=>V,zi:()=>W}),(E=u||(u={}))[E.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",E[E.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",E[E.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(c||(c={})),function(E){E[E.ZERO=0]="ZERO",E[E.ONE=1]="ONE",E[E.SRC_COLOR=768]="SRC_COLOR",E[E.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",E[E.SRC_ALPHA=770]="SRC_ALPHA",E[E.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",E[E.DST_ALPHA=772]="DST_ALPHA",E[E.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",E[E.DST_COLOR=774]="DST_COLOR",E[E.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",E[E.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",E[E.CONSTANT_COLOR=32769]="CONSTANT_COLOR",E[E.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",E[E.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",E[E.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(W||(W={})),function(E){E[E.ADD=32774]="ADD",E[E.SUBTRACT=32778]="SUBTRACT",E[E.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(i||(i={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",E[E.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",E[E.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",E[E.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",E[E.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",E[E.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(f||(f={})),function(E){E[E.FRONT=1028]="FRONT",E[E.BACK=1029]="BACK",E[E.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(T||(T={})),function(E){E[E.CW=2304]="CW",E[E.CCW=2305]="CCW"}(l||(l={})),function(E){E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.INT=5124]="INT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.FLOAT=5126]="FLOAT"}(H||(H={})),function(E){E[E.NEVER=512]="NEVER",E[E.LESS=513]="LESS",E[E.EQUAL=514]="EQUAL",E[E.LEQUAL=515]="LEQUAL",E[E.GREATER=516]="GREATER",E[E.NOTEQUAL=517]="NOTEQUAL",E[E.GEQUAL=518]="GEQUAL",E[E.ALWAYS=519]="ALWAYS"}(v||(v={})),function(E){E[E.ZERO=0]="ZERO",E[E.KEEP=7680]="KEEP",E[E.REPLACE=7681]="REPLACE",E[E.INCR=7682]="INCR",E[E.DECR=7683]="DECR",E[E.INVERT=5386]="INVERT",E[E.INCR_WRAP=34055]="INCR_WRAP",E[E.DECR_WRAP=34056]="DECR_WRAP"}(V||(V={})),function(E){E[E.NEAREST=9728]="NEAREST",E[E.LINEAR=9729]="LINEAR",E[E.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",E[E.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",E[E.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",E[E.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(X||(X={})),function(E){E[E.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",E[E.REPEAT=10497]="REPEAT",E[E.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(Y||(Y={})),function(E){E[E.TEXTURE_2D=3553]="TEXTURE_2D",E[E.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",E[E.TEXTURE_3D=32879]="TEXTURE_3D",E[E.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",E[E.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",E[E.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",E[E.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",E[E.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(x||(x={})),function(E){E[E.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.ALPHA=6406]="ALPHA",E[E.RGB=6407]="RGB",E[E.RGBA=6408]="RGBA",E[E.LUMINANCE=6409]="LUMINANCE",E[E.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",E[E.RED=6403]="RED",E[E.RG=33319]="RG",E[E.RED_INTEGER=36244]="RED_INTEGER",E[E.RG_INTEGER=33320]="RG_INTEGER",E[E.RGB_INTEGER=36248]="RGB_INTEGER",E[E.RGBA_INTEGER=36249]="RGBA_INTEGER"}(p||(p={})),function(E){E[E.RGBA4=32854]="RGBA4",E[E.R16F=33325]="R16F",E[E.RG16F=33327]="RG16F",E[E.RGB32F=34837]="RGB32F",E[E.RGBA16F=34842]="RGBA16F",E[E.R32F=33326]="R32F",E[E.RG32F=33328]="RG32F",E[E.RGBA32F=34836]="RGBA32F",E[E.R11F_G11F_B10F=35898]="R11F_G11F_B10F",E[E.RGB8=32849]="RGB8",E[E.RGBA8=32856]="RGBA8",E[E.RGB5_A1=32855]="RGB5_A1",E[E.R8=33321]="R8",E[E.RG8=33323]="RG8",E[E.R8I=33329]="R8I",E[E.R8UI=33330]="R8UI",E[E.R16I=33331]="R16I",E[E.R16UI=33332]="R16UI",E[E.R32I=33333]="R32I",E[E.R32UI=33334]="R32UI",E[E.RG8I=33335]="RG8I",E[E.RG8UI=33336]="RG8UI",E[E.RG16I=33337]="RG16I",E[E.RG16UI=33338]="RG16UI",E[E.RG32I=33339]="RG32I",E[E.RG32UI=33340]="RG32UI",E[E.RGB16F=34843]="RGB16F",E[E.RGB9_E5=35901]="RGB9_E5",E[E.SRGB8=35905]="SRGB8",E[E.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",E[E.RGB565=36194]="RGB565",E[E.RGBA32UI=36208]="RGBA32UI",E[E.RGB32UI=36209]="RGB32UI",E[E.RGBA16UI=36214]="RGBA16UI",E[E.RGB16UI=36215]="RGB16UI",E[E.RGBA8UI=36220]="RGBA8UI",E[E.RGB8UI=36221]="RGB8UI",E[E.RGBA32I=36226]="RGBA32I",E[E.RGB32I=36227]="RGB32I",E[E.RGBA16I=36232]="RGBA16I",E[E.RGB16I=36233]="RGB16I",E[E.RGBA8I=36238]="RGBA8I",E[E.RGB8I=36239]="RGB8I",E[E.R8_SNORM=36756]="R8_SNORM",E[E.RG8_SNORM=36757]="RG8_SNORM",E[E.RGB8_SNORM=36758]="RGB8_SNORM",E[E.RGBA8_SNORM=36759]="RGBA8_SNORM",E[E.RGB10_A2=32857]="RGB10_A2",E[E.RGB10_A2UI=36975]="RGB10_A2UI"}(M||(M={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",E[E.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",E[E.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",E[E.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.INT=5124]="INT",E[E.HALF_FLOAT=5131]="HALF_FLOAT",E[E.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",E[E.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",E[E.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",E[E.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(U||(U={})),function(E){E[E.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",E[E.STENCIL_INDEX8=36168]="STENCIL_INDEX8",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",E[E.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",E[E.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",E[E.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(B||(B={})),function(E){E[E.STATIC_DRAW=35044]="STATIC_DRAW",E[E.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",E[E.STREAM_DRAW=35040]="STREAM_DRAW",E[E.STATIC_READ=35045]="STATIC_READ",E[E.DYNAMIC_READ=35049]="DYNAMIC_READ",E[E.STREAM_READ=35041]="STREAM_READ",E[E.STATIC_COPY=35046]="STATIC_COPY",E[E.DYNAMIC_COPY=35050]="DYNAMIC_COPY",E[E.STREAM_COPY=35042]="STREAM_COPY"}(s||(s={})),function(E){E[E.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",E[E.VERTEX_SHADER=35633]="VERTEX_SHADER"}(h||(h={})),function(E){E[E.FRAMEBUFFER=36160]="FRAMEBUFFER",E[E.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",E[E.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(K||(K={})),function(E){E[E.TEXTURE=0]="TEXTURE",E[E.RENDER_BUFFER=1]="RENDER_BUFFER",E[E.CUBEMAP=2]="CUBEMAP"}(j||(j={})),function(E){E[E.NONE=0]="NONE",E[E.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",E[E.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(F||(F={}));const q=33984;var y,L;(function(E){E[E.Texture=0]="Texture",E[E.BufferObject=1]="BufferObject",E[E.VertexArrayObject=2]="VertexArrayObject",E[E.Shader=3]="Shader",E[E.Program=4]="Program",E[E.FramebufferObject=5]="FramebufferObject",E[E.Renderbuffer=6]="Renderbuffer",E[E.Sync=7]="Sync",E[E.COUNT=8]="COUNT"})(y||(y={})),function(E){E[E.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",E[E.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",E[E.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",E[E.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",E[E.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",E[E.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",E[E.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",E[E.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",E[E.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",E[E.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",E[E.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",E[E.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",E[E.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",E[E.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",E[E.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",E[E.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(L||(L={}));const $=33306;var G,m,z,d,b,r,J;(function(E){E[E.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",E[E.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",E[E.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",E[E.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",E[E.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",E[E.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",E[E.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",E[E.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",E[E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"})(G||(G={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.FLOAT_VEC2=35664]="FLOAT_VEC2",E[E.FLOAT_VEC3=35665]="FLOAT_VEC3",E[E.FLOAT_VEC4=35666]="FLOAT_VEC4",E[E.INT=5124]="INT",E[E.INT_VEC2=35667]="INT_VEC2",E[E.INT_VEC3=35668]="INT_VEC3",E[E.INT_VEC4=35669]="INT_VEC4",E[E.BOOL=35670]="BOOL",E[E.BOOL_VEC2=35671]="BOOL_VEC2",E[E.BOOL_VEC3=35672]="BOOL_VEC3",E[E.BOOL_VEC4=35673]="BOOL_VEC4",E[E.FLOAT_MAT2=35674]="FLOAT_MAT2",E[E.FLOAT_MAT3=35675]="FLOAT_MAT3",E[E.FLOAT_MAT4=35676]="FLOAT_MAT4",E[E.SAMPLER_2D=35678]="SAMPLER_2D",E[E.SAMPLER_CUBE=35680]="SAMPLER_CUBE",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",E[E.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",E[E.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",E[E.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",E[E.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",E[E.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",E[E.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",E[E.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",E[E.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",E[E.SAMPLER_3D=35679]="SAMPLER_3D",E[E.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",E[E.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",E[E.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",E[E.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",E[E.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",E[E.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",E[E.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",E[E.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",E[E.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",E[E.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",E[E.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",E[E.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(m||(m={})),function(E){E[E.OBJECT_TYPE=37138]="OBJECT_TYPE",E[E.SYNC_CONDITION=37139]="SYNC_CONDITION",E[E.SYNC_STATUS=37140]="SYNC_STATUS",E[E.SYNC_FLAGS=37141]="SYNC_FLAGS"}(z||(z={})),function(E){E[E.UNSIGNALED=37144]="UNSIGNALED",E[E.SIGNALED=37145]="SIGNALED"}(d||(d={})),function(E){E[E.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",E[E.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",E[E.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",E[E.WAIT_FAILED=37149]="WAIT_FAILED"}(b||(b={})),function(E){E[E.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(r||(r={})),function(E){E[E.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(J||(J={}))}}]);