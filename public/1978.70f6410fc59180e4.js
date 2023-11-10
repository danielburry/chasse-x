"use strict";var Ji=Object.defineProperty,Zi=Object.defineProperties,Yi=Object.getOwnPropertyDescriptors,Kr=Object.getOwnPropertySymbols,Qi=Object.prototype.hasOwnProperty,ki=Object.prototype.propertyIsEnumerable,$r=(fe,z,u)=>z in fe?Ji(fe,z,{enumerable:!0,configurable:!0,writable:!0,value:u}):fe[z]=u,Qt=(fe,z)=>{for(var u in z||(z={}))Qi.call(z,u)&&$r(fe,u,z[u]);if(Kr)for(var u of Kr(z))ki.call(z,u)&&$r(fe,u,z[u]);return fe},fr=(fe,z)=>Zi(fe,Yi(z));(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[1978,3100],{96160:(fe,z,u)=>{u.d(z,{D:()=>Xe,b:()=>At});var A=u(62208),O=u(43703),D=u(52382),w=u(73132),I=u(6945),S=u(78925),C=u(24255),M=u(60355),R=u(26859),F=u(84833),U=u(72326),X=u(36603),j=u(58173),$=u(21799),ee=u(52071),K=u(92580),V=u(29052),G=u(54662),Q=u(48683),le=u(98486),Te=u(96395),q=u(98898),k=u(92724),ae=u(56693),J=u(67938),ie=u(67022),Z=u(72397),me=u(411),Re=u(49974),Ke=u(99198),We=u(97139),ht=u(69960),he=u(83119),Ve=u(17625),yt=u(63123),Et=u(22355),ge=u(35387),Pe=u(42743),Ot=u(16396),_t=u(37290);function At(ve){const Oe=new Et.kG,$t=Oe.vertex.code,Y=Oe.fragment.code;Oe.include(me.a,{name:"Default Material Shader",output:ve.output});const H=(0,Ke.S)(Oe,ve);return Oe.include(F.f),Oe.varyings.add("vpos","vec3"),Oe.include(J.k,ve),Oe.include(M.f,ve),Oe.include(ee.L,ve),ve.output!==I.H.Color&&ve.output!==I.H.Alpha||((0,Ke.h)(Oe.vertex,ve),Oe.include(R.O,ve),Oe.include(C.w,{linearDepth:!1,hasModelTransformation:ve.hasModelTransformation}),ve.normalType===R.h.Attribute&&ve.offsetBackfaces&&Oe.include(w.w),Oe.include(V.Q,ve),Oe.include($.Bb,ve),ve.instancedColor&&Oe.attributes.add(Ot.T.INSTANCECOLOR,"vec4"),Oe.varyings.add("localvpos","vec3"),Oe.include(X.D,ve),Oe.include(D.q,ve),Oe.include(U.R,ve),Oe.include(j.c,ve),Oe.vertex.uniforms.add(new ht.N("externalColor",ue=>ue.externalColor)),Oe.varyings.add("vcolorExt","vec4"),ve.hasMultipassTerrain&&Oe.varyings.add("depth","float"),ve.hasModelTransformation&&Oe.vertex.uniforms.add(new yt.g("model",ue=>(0,A.pC)(ue.modelTransformation)?ue.modelTransformation:O.I)),$t.add(Ve.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${ve.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Ve.H.float(ie.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${ve.normalType===R.h.Attribute?Ve.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${ve.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${ve.hasModelTransformation?"model,":""} vpos);
          ${ve.normalType===R.h.Attribute&&ve.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${ve.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),ve.output===I.H.Alpha&&(Oe.include(S.f5,ve),Oe.include(Z.z,ve),Oe.include(le.l,ve),Oe.fragment.uniforms.add([new he.p("opacity",ue=>ue.opacity),new he.p("layerOpacity",ue=>ue.layerOpacity)]),ve.hasColorTexture&&Oe.fragment.uniforms.add(new ge.A("tex",ue=>ue.texture)),Oe.fragment.include(Re.y),Y.add(Ve.H`
      void main() {
        discardBySlice(vpos);
        ${ve.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${ve.hasColorTexture?Ve.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${ve.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Ve.H`vec4 texColor = vec4(1.0);`}
        ${ve.hasVertexColors?Ve.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ve.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),ve.output===I.H.Color&&(Oe.include(S.f5,ve),Oe.include(Q.X,ve),Oe.include(G.K,ve),Oe.include(Z.z,ve),Oe.include(ve.instancedDoublePrecision?ae.hb:ae.XE,ve),Oe.include(le.l,ve),(0,Ke.h)(Oe.fragment,ve),Oe.fragment.uniforms.add([H,new We.J("ambient",ue=>ue.ambient),new We.J("diffuse",ue=>ue.diffuse),new he.p("opacity",ue=>ue.opacity),new he.p("layerOpacity",ue=>ue.layerOpacity),new he.p("lightingGlobalFactor",(ue,_e)=>_e.lighting.globalFactor),new We.J("lightingMainIntensity",(ue,_e)=>_e.lighting.mainLight.intensity)]),Oe.fragment.constants.add("ambientBoostFactor","float",_t.V),ve.hasColorTexture&&Oe.fragment.uniforms.add(new ge.A("tex",ue=>ue.texture)),Oe.include(k.jV,ve),Oe.include(q.T,ve),Oe.fragment.include(Re.y),Oe.include(Te.k,ve),Y.add(Ve.H`
      void main() {
        discardBySlice(vpos);
        ${ve.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${ve.hasColorTexture?Ve.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${ve.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Ve.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${ve.normalType===R.h.ScreenDerivative?Ve.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:Ve.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${ve.pbrMode===k.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${ve.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":ve.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${ve.hasVertexColors?Ve.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Ve.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${ve.hasNormalTexture?Ve.H`
                mat3 tangentSpace = ${ve.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:Ve.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${ve.spherical?Ve.H`normalize(vpos + localOrigin);`:Ve.H`vec3(0.0, 0.0, 1.0);`}

        ${ve.snowCover?Ve.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${ve.pbrMode===k.f7.Normal||ve.pbrMode===k.f7.Schematic?Ve.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${ve.snowCover?Ve.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Ve.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${ve.transparencyPassType===Pe.Am.Color?Ve.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),Oe.include(K.s,ve),Oe}const Xe=Object.freeze(Object.defineProperty({__proto__:null,build:At},Symbol.toStringTag,{value:"Module"}))},77133:(fe,z,u)=>{u.d(z,{R:()=>Et,b:()=>yt});var A=u(52382),O=u(73132),D=u(6945),w=u(78925),I=u(24255),S=u(60355),C=u(26859),M=u(84833),R=u(72326),F=u(36603),U=u(58173),X=u(52071),j=u(92580),$=u(54662),ee=u(48683),K=u(98486),V=u(98898),G=u(92724),Q=u(56693),le=u(67938),Te=u(67022),q=u(72397),k=u(49974),ae=u(99198),J=u(97139),ie=u(69960),Z=u(83119),me=u(17625),Re=u(46524),Ke=u(22355),We=u(35387),ht=u(42743),he=u(16396),Ve=u(37290);function yt(ge){const Pe=new Ke.kG,Ot=Pe.vertex.code,_t=Pe.fragment.code,At=(0,ae.S)(Pe,ge);return Pe.include(M.f),Pe.varyings.add("vpos","vec3"),Pe.include(le.k,ge),Pe.include(S.f,ge),Pe.include(X.L,ge),ge.output!==D.H.Color&&ge.output!==D.H.Alpha||((0,ae.h)(Pe.vertex,ge),Pe.include(C.O,ge),Pe.include(I.w),ge.offsetBackfaces&&Pe.include(O.w),ge.instancedColor&&Pe.attributes.add(he.T.INSTANCECOLOR,"vec4"),Pe.varyings.add("vNormalWorld","vec3"),Pe.varyings.add("localvpos","vec3"),ge.hasMultipassTerrain&&Pe.varyings.add("depth","float"),Pe.include(F.D,ge),Pe.include(A.q,ge),Pe.include(R.R,ge),Pe.include(U.c,ge),Pe.vertex.uniforms.add(new ie.N("externalColor",Xe=>Xe.externalColor)),Pe.varyings.add("vcolorExt","vec4"),Ot.add(me.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${ge.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${me.H.float(Te.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${ge.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${ge.hasMultipassTerrain?me.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),ge.output===D.H.Alpha&&(Pe.include(w.f5,ge),Pe.include(q.z,ge),Pe.include(K.l,ge),Pe.fragment.uniforms.add([new Z.p("opacity",Xe=>Xe.opacity),new Z.p("layerOpacity",Xe=>Xe.layerOpacity),new Re.B("view")]),ge.hasColorTexture&&Pe.fragment.uniforms.add(new We.A("tex",Xe=>Xe.texture)),Pe.fragment.include(k.y),_t.add(me.H`
      void main() {
        discardBySlice(vpos);
        ${ge.hasMultipassTerrain?me.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${ge.hasColorTexture?me.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${ge.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:me.H`vec4 texColor = vec4(1.0);`}
        ${ge.hasVertexColors?me.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:me.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),ge.output===D.H.Color&&(Pe.include(w.f5,ge),Pe.include(ee.X,ge),Pe.include($.K,ge),Pe.include(q.z,ge),Pe.include(ge.instancedDoublePrecision?Q.hb:Q.XE,ge),Pe.include(K.l,ge),(0,ae.h)(Pe.fragment,ge),Pe.fragment.uniforms.add([At,new J.J("ambient",Xe=>Xe.ambient),new J.J("diffuse",Xe=>Xe.diffuse),new Z.p("opacity",Xe=>Xe.opacity),new Z.p("layerOpacity",Xe=>Xe.layerOpacity),new Re.B("view"),new Z.p("lightingGlobalFactor",(Xe,ve)=>ve.lighting.globalFactor),new J.J("lightingMainIntensity",(Xe,ve)=>ve.lighting.mainLight.intensity)]),Pe.fragment.constants.add("ambientBoostFactor","float",Ve.V),ge.hasColorTexture&&Pe.fragment.uniforms.add(new We.A("tex",Xe=>Xe.texture)),Pe.include(G.jV,ge),Pe.include(V.T,ge),Pe.fragment.include(k.y),Pe.extensions.add("GL_OES_standard_derivatives"),_t.add(me.H`
      void main() {
        discardBySlice(vpos);
        ${ge.hasMultipassTerrain?me.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${ge.hasColorTexture?me.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${ge.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:me.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${ge.pbrMode===G.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${ge.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":ge.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${ge.hasVertexColors?me.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:me.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${ge.snowCover?me.H`albedo = mix(albedo, vec3(1), 0.9);`:me.H``}
        ${me.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${ge.pbrMode===G.f7.Normal||ge.pbrMode===G.f7.Schematic?ge.spherical?me.H`vec3 normalGround = normalize(vpos + localOrigin);`:me.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:me.H``}
        ${ge.pbrMode===G.f7.Normal||ge.pbrMode===G.f7.Schematic?me.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${ge.snowCover?me.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:me.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${ge.transparencyPassType===ht.Am.Color?me.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:me.H``}
      }
    `)),Pe.include(j.s,ge),Pe}const Et=Object.freeze(Object.defineProperty({__proto__:null,build:yt},Symbol.toStringTag,{value:"Module"}))},550:(fe,z,u)=>{function A(){return[1,0,0,0,1,0,0,0,1]}function w(S,C){return new Float64Array(S,C,9)}u.d(z,{a:()=>w,c:()=>A}),Object.freeze(Object.defineProperty({__proto__:null,create:A,clone:function O(S){return[S[0],S[1],S[2],S[3],S[4],S[5],S[6],S[7],S[8]]},fromValues:function D(S,C,M,R,F,U,X,j,$){return[S,C,M,R,F,U,X,j,$]},createView:w},Symbol.toStringTag,{value:"Module"}))},43703:(fe,z,u)=>{function A(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function O(C){return[C[0],C[1],C[2],C[3],C[4],C[5],C[6],C[7],C[8],C[9],C[10],C[11],C[12],C[13],C[14],C[15]]}function w(C,M){return new Float64Array(C,M,16)}u.d(z,{I:()=>I,a:()=>w,b:()=>O,c:()=>A});const I=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:A,clone:O,fromValues:function D(C,M,R,F,U,X,j,$,ee,K,V,G,Q,le,Te,q){return[C,M,R,F,U,X,j,$,ee,K,V,G,Q,le,Te,q]},createView:w,IDENTITY:I},Symbol.toStringTag,{value:"Module"}))},48977:(fe,z,u)=>{u.d(z,{c:()=>G,g:()=>R,j:()=>Ve,k:()=>le,m:()=>F,s:()=>M});var A=u(550),O=u(78451),D=u(28093),w=u(39863),I=u(84161),S=u(993);function M(Y,H,ue){ue*=.5;const _e=Math.sin(ue);return Y[0]=_e*H[0],Y[1]=_e*H[1],Y[2]=_e*H[2],Y[3]=Math.cos(ue),Y}function R(Y,H){const ue=2*Math.acos(H[3]),_e=Math.sin(ue/2);return _e>w.E?(Y[0]=H[0]/_e,Y[1]=H[1]/_e,Y[2]=H[2]/_e):(Y[0]=1,Y[1]=0,Y[2]=0),ue}function F(Y,H,ue){const _e=H[0],pe=H[1],De=H[2],Ue=H[3],Be=ue[0],je=ue[1],mt=ue[2],pt=ue[3];return Y[0]=_e*pt+Ue*Be+pe*mt-De*je,Y[1]=pe*pt+Ue*je+De*Be-_e*mt,Y[2]=De*pt+Ue*mt+_e*je-pe*Be,Y[3]=Ue*pt-_e*Be-pe*je-De*mt,Y}function ee(Y,H,ue,_e){const pe=H[0],De=H[1],Ue=H[2],Be=H[3];let je,mt,pt,wt,te,re=ue[0],se=ue[1],ce=ue[2],xe=ue[3];return mt=pe*re+De*se+Ue*ce+Be*xe,mt<0&&(mt=-mt,re=-re,se=-se,ce=-ce,xe=-xe),1-mt>w.E?(je=Math.acos(mt),pt=Math.sin(je),wt=Math.sin((1-_e)*je)/pt,te=Math.sin(_e*je)/pt):(wt=1-_e,te=_e),Y[0]=wt*pe+te*re,Y[1]=wt*De+te*se,Y[2]=wt*Ue+te*ce,Y[3]=wt*Be+te*xe,Y}function G(Y,H){return Y[0]=-H[0],Y[1]=-H[1],Y[2]=-H[2],Y[3]=H[3],Y}function Q(Y,H){const ue=H[0]+H[4]+H[8];let _e;if(ue>0)_e=Math.sqrt(ue+1),Y[3]=.5*_e,_e=.5/_e,Y[0]=(H[5]-H[7])*_e,Y[1]=(H[6]-H[2])*_e,Y[2]=(H[1]-H[3])*_e;else{let pe=0;H[4]>H[0]&&(pe=1),H[8]>H[3*pe+pe]&&(pe=2);const De=(pe+1)%3,Ue=(pe+2)%3;_e=Math.sqrt(H[3*pe+pe]-H[3*De+De]-H[3*Ue+Ue]+1),Y[pe]=.5*_e,_e=.5/_e,Y[3]=(H[3*De+Ue]-H[3*Ue+De])*_e,Y[De]=(H[3*De+pe]+H[3*pe+De])*_e,Y[Ue]=(H[3*Ue+pe]+H[3*pe+Ue])*_e}return Y}function le(Y,H,ue,_e){const pe=.5*Math.PI/180;H*=pe,ue*=pe,_e*=pe;const De=Math.sin(H),Ue=Math.cos(H),Be=Math.sin(ue),je=Math.cos(ue),mt=Math.sin(_e),pt=Math.cos(_e);return Y[0]=De*je*pt-Ue*Be*mt,Y[1]=Ue*Be*pt+De*je*mt,Y[2]=Ue*je*mt-De*Be*pt,Y[3]=Ue*je*pt+De*Be*mt,Y}const q=S.c,k=S.s,ae=S.a,J=F,ie=S.b,Z=S.d,me=S.l,Re=S.e,Ke=Re,We=S.f,ht=We,he=S.n,Ve=S.g,yt=S.h,ge=(0,D.c)(),Pe=(0,D.f)(1,0,0),Ot=(0,D.f)(0,1,0),At=(0,O.a)(),Xe=(0,O.a)(),Oe=(0,A.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:function C(Y){return Y[0]=0,Y[1]=0,Y[2]=0,Y[3]=1,Y},setAxisAngle:M,getAxisAngle:R,multiply:F,rotateX:function U(Y,H,ue){ue*=.5;const _e=H[0],pe=H[1],De=H[2],Ue=H[3],Be=Math.sin(ue),je=Math.cos(ue);return Y[0]=_e*je+Ue*Be,Y[1]=pe*je+De*Be,Y[2]=De*je-pe*Be,Y[3]=Ue*je-_e*Be,Y},rotateY:function X(Y,H,ue){ue*=.5;const _e=H[0],pe=H[1],De=H[2],Ue=H[3],Be=Math.sin(ue),je=Math.cos(ue);return Y[0]=_e*je-De*Be,Y[1]=pe*je+Ue*Be,Y[2]=De*je+_e*Be,Y[3]=Ue*je-pe*Be,Y},rotateZ:function j(Y,H,ue){ue*=.5;const _e=H[0],pe=H[1],De=H[2],Ue=H[3],Be=Math.sin(ue),je=Math.cos(ue);return Y[0]=_e*je+pe*Be,Y[1]=pe*je-_e*Be,Y[2]=De*je+Ue*Be,Y[3]=Ue*je-De*Be,Y},calculateW:function $(Y,H){const ue=H[0],_e=H[1],pe=H[2];return Y[0]=ue,Y[1]=_e,Y[2]=pe,Y[3]=Math.sqrt(Math.abs(1-ue*ue-_e*_e-pe*pe)),Y},slerp:ee,random:function K(Y){const H=(0,w.R)(),ue=(0,w.R)(),_e=(0,w.R)(),pe=Math.sqrt(1-H),De=Math.sqrt(H);return Y[0]=pe*Math.sin(2*Math.PI*ue),Y[1]=pe*Math.cos(2*Math.PI*ue),Y[2]=De*Math.sin(2*Math.PI*_e),Y[3]=De*Math.cos(2*Math.PI*_e),Y},invert:function V(Y,H){const ue=H[0],_e=H[1],pe=H[2],De=H[3],Ue=ue*ue+_e*_e+pe*pe+De*De,Be=Ue?1/Ue:0;return Y[0]=-ue*Be,Y[1]=-_e*Be,Y[2]=-pe*Be,Y[3]=De*Be,Y},conjugate:G,fromMat3:Q,fromEuler:le,str:function Te(Y){return"quat("+Y[0]+", "+Y[1]+", "+Y[2]+", "+Y[3]+")"},copy:q,set:k,add:ae,mul:J,scale:ie,dot:Z,lerp:me,length:Re,len:Ke,squaredLength:We,sqrLen:ht,normalize:he,exactEquals:Ve,equals:yt,rotationTo:function Et(Y,H,ue){const _e=(0,I.e)(H,ue);return _e<-.999999?((0,I.f)(ge,Pe,H),(0,I.u)(ge)<1e-6&&(0,I.f)(ge,Ot,H),(0,I.n)(ge,ge),M(Y,ge,Math.PI),Y):_e>.999999?(Y[0]=0,Y[1]=0,Y[2]=0,Y[3]=1,Y):((0,I.f)(ge,H,ue),Y[0]=ge[0],Y[1]=ge[1],Y[2]=ge[2],Y[3]=1+_e,he(Y,Y))},sqlerp:function _t(Y,H,ue,_e,pe,De){return ee(At,H,pe,De),ee(Xe,ue,_e,De),ee(Y,At,Xe,2*De*(1-De)),Y},setAxes:function ve(Y,H,ue,_e){const pe=Oe;return pe[0]=ue[0],pe[3]=ue[1],pe[6]=ue[2],pe[1]=_e[0],pe[4]=_e[1],pe[7]=_e[2],pe[2]=-H[0],pe[5]=-H[1],pe[8]=-H[2],he(Y,Q(Y,pe))}},Symbol.toStringTag,{value:"Module"}))},78451:(fe,z,u)=>{function A(){return[0,0,0,1]}function O(C){return[C[0],C[1],C[2],C[3]]}function w(C,M){return new Float64Array(C,M,4)}u.d(z,{I:()=>I,a:()=>A,b:()=>O,c:()=>w});const I=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:A,clone:O,fromValues:function D(C,M,R,F){return[C,M,R,F]},createView:w,IDENTITY:I},Symbol.toStringTag,{value:"Module"}))},79800:(fe,z,u)=>{u.d(z,{a:()=>D,b:()=>S,n:()=>I,s:()=>w,t:()=>O});var A=u(96286);function O(M,R,F){if(M.count!==R.count)return void A.c.error("source and destination buffers need to have the same number of elements");const U=M.count,X=F[0],j=F[1],$=F[2],ee=F[4],K=F[5],V=F[6],G=F[8],Q=F[9],le=F[10],Te=F[12],q=F[13],k=F[14],ae=M.typedBuffer,J=M.typedBufferStride,ie=R.typedBuffer,Z=R.typedBufferStride;for(let me=0;me<U;me++){const Re=me*J,Ke=me*Z,We=ie[Ke],ht=ie[Ke+1],he=ie[Ke+2];ae[Re]=X*We+ee*ht+G*he+Te,ae[Re+1]=j*We+K*ht+Q*he+q,ae[Re+2]=$*We+V*ht+le*he+k}}function D(M,R,F){if(M.count!==R.count)return void A.c.error("source and destination buffers need to have the same number of elements");const U=M.count,X=F[0],j=F[1],$=F[2],ee=F[3],K=F[4],V=F[5],G=F[6],Q=F[7],le=F[8],Te=M.typedBuffer,q=M.typedBufferStride,k=R.typedBuffer,ae=R.typedBufferStride;for(let J=0;J<U;J++){const ie=J*q,Z=J*ae,me=k[Z],Re=k[Z+1],Ke=k[Z+2];Te[ie]=X*me+ee*Re+G*Ke,Te[ie+1]=j*me+K*Re+Q*Ke,Te[ie+2]=$*me+V*Re+le*Ke}}function w(M,R,F){const U=Math.min(M.count,R.count),X=M.typedBuffer,j=M.typedBufferStride,$=R.typedBuffer,ee=R.typedBufferStride;for(let K=0;K<U;K++){const V=K*j,G=K*ee;X[V]=F*$[G],X[V+1]=F*$[G+1],X[V+2]=F*$[G+2]}}function I(M,R){const F=Math.min(M.count,R.count),U=M.typedBuffer,X=M.typedBufferStride,j=R.typedBuffer,$=R.typedBufferStride;for(let ee=0;ee<F;ee++){const K=ee*X,V=ee*$,G=j[V],Q=j[V+1],le=j[V+2],Te=G*G+Q*Q+le*le;if(Te>0){const q=1/Math.sqrt(Te);U[K]=q*G,U[K+1]=q*Q,U[K+2]=q*le}}}function S(M,R,F){const U=Math.min(M.count,R.count),X=M.typedBuffer,j=M.typedBufferStride,$=R.typedBuffer,ee=R.typedBufferStride;for(let K=0;K<U;K++){const V=K*j,G=K*ee;X[V]=$[G]>>F,X[V+1]=$[G+1]>>F,X[V+2]=$[G+2]>>F}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:O,transformMat3:D,scale:w,normalize:I,shiftRight:S},Symbol.toStringTag,{value:"Module"}))},9554:(fe,z,u)=>{function A(w,I,S){const C=w.typedBuffer,M=w.typedBufferStride,R=I.typedBuffer,F=I.typedBufferStride,U=S?S.count:I.count;let X=(S&&S.dstIndex?S.dstIndex:0)*M,j=(S&&S.srcIndex?S.srcIndex:0)*F;for(let $=0;$<U;++$)C[X]=R[j],C[X+1]=R[j+1],C[X+2]=R[j+2],X+=M,j+=F}function O(w,I,S,C,M){var j,$;const R=w.typedBuffer,F=w.typedBufferStride,U=null!=(j=null==M?void 0:M.count)?j:w.count;let X=(null!=($=null==M?void 0:M.dstIndex)?$:0)*F;for(let ee=0;ee<U;++ee)R[X]=I,R[X+1]=S,R[X+2]=C,X+=F}u.d(z,{c:()=>A,f:()=>O}),Object.freeze(Object.defineProperty({__proto__:null,copy:A,fill:O},Symbol.toStringTag,{value:"Module"}))},14658:(fe,z,u)=>{function A(){return new Float32Array(3)}function D(K,V,G){const Q=new Float32Array(3);return Q[0]=K,Q[1]=V,Q[2]=G,Q}function I(){return A()}function S(){return D(1,1,1)}function C(){return D(1,0,0)}function M(){return D(0,1,0)}function R(){return D(0,0,1)}u.d(z,{c:()=>A,f:()=>D});const F=I(),U=S(),X=C(),j=M(),$=R();Object.freeze(Object.defineProperty({__proto__:null,create:A,clone:function O(K){const V=new Float32Array(3);return V[0]=K[0],V[1]=K[1],V[2]=K[2],V},fromValues:D,createView:function w(K,V){return new Float32Array(K,V,3)},zeros:I,ones:S,unitX:C,unitY:M,unitZ:R,ZEROS:F,ONES:U,UNIT_X:X,UNIT_Y:j,UNIT_Z:$},Symbol.toStringTag,{value:"Module"}))},83100:(fe,z,u)=>{function A(R){return R=R||globalThis.location.hostname,M.some(F=>null!=(null==R?void 0:R.match(F)))}function O(R,F){return R&&(F=F||globalThis.location.hostname)?null!=F.match(w)||null!=F.match(S)?R.replace("static.arcgis.com","staticdev.arcgis.com"):null!=F.match(I)||null!=F.match(C)?R.replace("static.arcgis.com","staticqa.arcgis.com"):R:R}u.d(z,{XO:()=>A,pJ:()=>O});const w=/^devext.arcgis.com$/,I=/^qaext.arcgis.com$/,S=/^[\w-]*\.mapsdevext.arcgis.com$/,C=/^[\w-]*\.mapsqa.arcgis.com$/,M=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,w,I,/^jsapps.esri.com$/,S,C]},96286:(fe,z,u)=>{u.d(z,{c:()=>O});const O=u(63290).Z.getLogger("esri.views.3d.support.buffer.math")},71978:(fe,z,u)=>{u.r(z),u.d(z,{fetch:()=>Gi,gltfToEngineResources:()=>xr,parseUrl:()=>jr});var A=u(15861),O=u(83100),D=u(62208),w=u(30217),I=u(550),S=u(28347),C=u(43703),M=u(84161),R=u(28093),F=u(5548),U=u(60479),X=u(79800),j=u(63657),$=u(60490),ee=u(9160),K=u(93831),V=u(96170),G=u(84792),Q=u(59213),le=u(26584),Te=u(63290),q=u(10699),k=u(10349),ae=u(70026),J=u(42743),ie=u(77029),Z=u(2282);class me{constructor(d,v,p,b){this.primitiveIndices=d,this._numIndexPerPrimitive=v,this.indices=p,this.position=b,this.center=(0,R.c)(),(0,Z.hu)(d.length>=1),(0,Z.hu)(p.length%this._numIndexPerPrimitive==0),(0,Z.hu)(p.length>=d.length*this._numIndexPerPrimitive),(0,Z.hu)(3===b.size||4===b.size);const{data:y,size:L}=b,B=d.length;let W=L*p[this._numIndexPerPrimitive*d[0]];Re.clear(),Re.push(W),this.bbMin=(0,R.f)(y[W],y[W+1],y[W+2]),this.bbMax=(0,R.a)(this.bbMin);for(let ne=0;ne<B;++ne){const Me=this._numIndexPerPrimitive*d[ne];for(let de=0;de<this._numIndexPerPrimitive;++de){W=L*p[Me+de],Re.push(W);let Ae=y[W];this.bbMin[0]=Math.min(Ae,this.bbMin[0]),this.bbMax[0]=Math.max(Ae,this.bbMax[0]),Ae=y[W+1],this.bbMin[1]=Math.min(Ae,this.bbMin[1]),this.bbMax[1]=Math.max(Ae,this.bbMax[1]),Ae=y[W+2],this.bbMin[2]=Math.min(Ae,this.bbMin[2]),this.bbMax[2]=Math.max(Ae,this.bbMax[2])}}(0,M.h)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let N=this.radius*this.radius;for(let ne=0;ne<Re.length;++ne){W=Re.getItemAt(ne);const Me=y[W]-this.center[0],de=y[W+1]-this.center[1],Ae=y[W+2]-this.center[2],oe=Me*Me+de*de+Ae*Ae;if(oe<=N)continue;const Ie=Math.sqrt(oe),Se=.5*(Ie-this.radius);this.radius=this.radius+Se,N=this.radius*this.radius;const we=Se/Ie;this.center[0]+=Me*we,this.center[1]+=de*we,this.center[2]+=Ae*we}Re.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,M.d)(this.bbMin,this.bbMax)>1){const d=(0,M.h)((0,R.c)(),this.bbMin,this.bbMax,.5),v=this.primitiveIndices.length,p=new Uint8Array(v),b=new Array(8);for(let N=0;N<8;++N)b[N]=0;const{data:y,size:L}=this.position;for(let N=0;N<v;++N){let ne=0;const Me=this._numIndexPerPrimitive*this.primitiveIndices[N];let de=L*this.indices[Me],Ae=y[de],oe=y[de+1],Ie=y[de+2];for(let Se=1;Se<this._numIndexPerPrimitive;++Se){de=L*this.indices[Me+Se];const we=y[de],vt=y[de+1],it=y[de+2];we<Ae&&(Ae=we),vt<oe&&(oe=vt),it<Ie&&(Ie=it)}Ae<d[0]&&(ne|=1),oe<d[1]&&(ne|=2),Ie<d[2]&&(ne|=4),p[N]=ne,++b[ne]}let B=0;for(let N=0;N<8;++N)b[N]>0&&++B;if(B<2)return;const W=new Array(8);for(let N=0;N<8;++N)W[N]=b[N]>0?new Uint32Array(b[N]):void 0;for(let N=0;N<8;++N)b[N]=0;for(let N=0;N<v;++N){const ne=p[N];W[ne][b[ne]++]=this.primitiveIndices[N]}this._children=new Array(8);for(let N=0;N<8;++N)void 0!==W[N]&&(this._children[N]=new me(W[N],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){Re.prune()}}const Re=new ie.Z({deallocator:null});var Ke=u(12699),We=u(24425),ht=u(68738),he=u(16396);class Ve extends Ke.c{constructor(d,v=[],p=J.MX.Triangle,b=-1){super(),this._primitiveType=p,this.edgeIndicesLength=b,this.type=We.U.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[y,L]of d)L&&this._vertexAttributes.set(y,Qt({},L));if(null==v||0===v.length){const y=function yt(x){const d=x.values().next().value;return null==d?0:d.data.length/d.size}(this._vertexAttributes),L=(0,ht.p)(y);this.edgeIndicesLength=this.edgeIndicesLength<0?y:this.edgeIndicesLength;for(const B of this._vertexAttributes.keys())this._indices.set(B,L)}else for(const[y,L]of v)L&&(this._indices.set(y,Et(L)),y===he.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(y).length:this.edgeIndicesLength))}cloneShallow(){const d=new Ve([],void 0,this._primitiveType,void 0),{_vertexAttributes:v,_indices:p}=d;return this._vertexAttributes.forEach((b,y)=>{v.set(y,b)}),this._indices.forEach((b,y)=>{p.set(y,b)}),d.screenToWorldRatio=this.screenToWorldRatio,d._boundingInfo=this._boundingInfo,d}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(d){const v=this._vertexAttributes.get(d);return v&&!v.exclusive&&(v.data=Array.from(v.data),v.exclusive=!0),v}get indices(){return this._indices}get indexCount(){const d=this._indices.values().next().value;return d?d.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,D.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(d){return this.primitiveType===J.MX.Triangle?this._computeAttachmentOriginTriangles(d):this._computeAttachmentOriginPoints(d)}_computeAttachmentOriginTriangles(d){const v=this.indices.get(he.T.POSITION),p=this.vertexAttributes.get(he.T.POSITION);return(0,ht.cM)(p,v,d)}_computeAttachmentOriginPoints(d){const v=this.indices.get(he.T.POSITION),p=this.vertexAttributes.get(he.T.POSITION);return(0,ht.NO)(p,v,d)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const d=this.indices.get(he.T.POSITION);if(0===d.length)return null;const v=this.primitiveType===J.MX.Triangle?3:1;(0,Z.hu)(d.length%v==0,"Indexing error: "+d.length+" not divisible by "+v);const p=(0,ht.p)(d.length/v),b=this.vertexAttributes.get(he.T.POSITION);return new me(p,v,d,b)}}function Et(x){if(x.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return x;for(const d of x)if(d>=65536)return x;return new Uint16Array(x)}var ge=u(94573),Pe=u(61885),Ot=u(21286),_t=u(55713),At=u(21726),Xe=u(33899),ve=u(54346);function Oe(){if((0,D.Wi)($t)){const x=d=>(0,ve.V)(`esri/libs/basisu/${d}`);$t=u.e(2405).then(u.bind(u,52405)).then(d=>d.b).then(({default:d})=>d({locateFile:x}).then(v=>(v.initializeBasis(),delete v.then,v)))}return $t}let $t;var Y,x;(x=Y||(Y={}))[x.ETC1_RGB=0]="ETC1_RGB",x[x.ETC2_RGBA=1]="ETC2_RGBA",x[x.BC1_RGB=2]="BC1_RGB",x[x.BC3_RGBA=3]="BC3_RGBA",x[x.BC4_R=4]="BC4_R",x[x.BC5_RG=5]="BC5_RG",x[x.BC7_M6_RGB=6]="BC7_M6_RGB",x[x.BC7_M5_RGBA=7]="BC7_M5_RGBA",x[x.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",x[x.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",x[x.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",x[x.ATC_RGB=11]="ATC_RGB",x[x.ATC_RGBA=12]="ATC_RGBA",x[x.FXT1_RGB=17]="FXT1_RGB",x[x.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",x[x.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",x[x.ETC2_EAC_R11=20]="ETC2_EAC_R11",x[x.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",x[x.RGBA32=13]="RGBA32",x[x.RGB565=14]="RGB565",x[x.BGR565=15]="BGR565",x[x.RGBA4444=16]="RGBA4444";var H=u(67969),ue=u(55086),_e=u(26906);let pe=null,De=null;function Ue(){return Be.apply(this,arguments)}function Be(){return(Be=(0,A.Z)(function*(){return(0,D.Wi)(De)&&(De=Oe(),pe=yield De),De})).apply(this,arguments)}function pt(x,d,v,p,b){const y=(0,_e.RG)(d?H.q_.COMPRESSED_RGBA8_ETC2_EAC:H.q_.COMPRESSED_RGB8_ETC2);return Math.ceil(v*p*y*(b&&x>1?(4**x-1)/(3*4**(x-1)):1))}function wt(x){return x.getNumImages()>=1&&!x.isUASTC()}function te(x){return x.getFaces()>=1&&x.isETC1S()}function se(){return se=(0,A.Z)(function*(x,d,v){(0,D.Wi)(pe)&&(pe=yield Ue());const p=new pe.BasisFile(new Uint8Array(v));if(!wt(p))return null;p.startTranscoding();const b=Ne(x,d,p.getNumLevels(0),p.getHasAlpha(),p.getImageWidth(0,0),p.getImageHeight(0,0),(y,L)=>p.getImageTranscodedSizeInBytes(0,y,L),(y,L,B)=>p.transcodeImage(B,0,y,L,0,0));return p.close(),p.delete(),b}),se.apply(this,arguments)}function xe(){return xe=(0,A.Z)(function*(x,d,v){(0,D.Wi)(pe)&&(pe=yield Ue());const p=new pe.KTX2File(new Uint8Array(v));if(!te(p))return null;p.startTranscoding();const b=Ne(x,d,p.getLevels(),p.getHasAlpha(),p.getWidth(),p.getHeight(),(y,L)=>p.getImageTranscodedSizeInBytes(y,0,0,L),(y,L,B)=>p.transcodeImage(B,y,0,0,L,0,-1,-1));return p.close(),p.delete(),b}),xe.apply(this,arguments)}function Ne(x,d,v,p,b,y,L,B){const{compressedTextureETC:W,compressedTextureS3TC:N}=x.capabilities,[ne,Me]=W?p?[Y.ETC2_RGBA,H.q_.COMPRESSED_RGBA8_ETC2_EAC]:[Y.ETC1_RGB,H.q_.COMPRESSED_RGB8_ETC2]:N?p?[Y.BC3_RGBA,H.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Y.BC1_RGB,H.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Y.RGBA32,H.VI.RGBA],de=d.hasMipmap?v:Math.min(1,v),Ae=[];for(let we=0;we<de;we++)Ae.push(new Uint8Array(L(we,ne))),B(we,ne,Ae[we]);const oe=Ae.length>1,Ie=oe?H.cw.LINEAR_MIPMAP_LINEAR:H.cw.LINEAR,Se=fr(Qt({},d),{samplingMode:Ie,hasMipmap:oe,internalFormat:Me,width:b,height:y});return new ue.x(x,Se,{type:"compressed",levels:Ae})}const Fe=Te.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Ye(x){return x.charCodeAt(0)+(x.charCodeAt(1)<<8)+(x.charCodeAt(2)<<16)+(x.charCodeAt(3)<<24)}const nt=Ye("DXT1"),St=Ye("DXT3"),ft=Ye("DXT5");var Wt=u(39114),gt=u(40852);new gt.G(he.T.POSITION,3,H.g.FLOAT,0,12),new gt.G(he.T.POSITION,3,H.g.FLOAT,0,20),new gt.G(he.T.UV0,2,H.g.FLOAT,12,20),new gt.G(he.T.POSITION,3,H.g.FLOAT,0,32),new gt.G(he.T.NORMAL,3,H.g.FLOAT,12,32),new gt.G(he.T.UV0,2,H.g.FLOAT,24,32),new gt.G(he.T.POSITION,3,H.g.FLOAT,0,16),new gt.G(he.T.COLOR,4,H.g.UNSIGNED_BYTE,12,16);const Bt=[new gt.G(he.T.POSITION,2,H.g.FLOAT,0,8)],Nt=[new gt.G(he.T.POSITION,2,H.g.FLOAT,0,16),new gt.G(he.T.UV0,2,H.g.FLOAT,8,16)];var Vt,Ft=u(83994),Zt=u(49353),It=u(85775),Ht=u(38210);class tt extends Ke.c{constructor(d,v){super(),this.data=d,this.type=We.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Pe.Z,this.params=v||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:H.e8.REPEAT,t:H.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||J.CE.STRETCH,this.estimatedTexMemRequired=tt._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const d=this.data;(0,D.Wi)(d)||(d instanceof HTMLVideoElement?this._startPreloadVideoElement(d):d instanceof HTMLImageElement&&this._startPreloadImageElement(d))}_startPreloadVideoElement(d){if(!((0,At.jc)(d.src)||"auto"===d.preload&&d.crossOrigin)){d.preload="auto",d.crossOrigin="anonymous";const v=!d.paused;if(d.src=d.src,v&&d.autoplay){const p=()=>{d.removeEventListener("canplay",p),d.play()};d.addEventListener("canplay",p)}}}_startPreloadImageElement(d){(0,At.HK)(d.src)||(0,At.jc)(d.src)||d.crossOrigin||(d.crossOrigin="anonymous",d.src=d.src)}static _getDataDimensions(d){return d instanceof HTMLVideoElement?{width:d.videoWidth,height:d.videoHeight}:d}static _estimateTexMemRequired(d,v){if((0,D.Wi)(d))return 0;if((0,_t.eP)(d)||(0,_t.lq)(d))return v.encoding===tt.KTX2_ENCODING?function mt(x,d){if((0,D.Wi)(pe))return x.byteLength;const v=new pe.KTX2File(new Uint8Array(x)),p=te(v)?pt(v.getLevels(),v.getHasAlpha(),v.getWidth(),v.getHeight(),d):0;return v.close(),v.delete(),p}(d,v.mipmap):v.encoding===tt.BASIS_ENCODING?function je(x,d){if((0,D.Wi)(pe))return x.byteLength;const v=new pe.BasisFile(new Uint8Array(x)),p=wt(v)?pt(v.getNumLevels(0),v.getHasAlpha(),v.getImageWidth(0,0),v.getImageHeight(0,0),d):0;return v.close(),v.delete(),p}(d,v.mipmap):d.byteLength;const{width:p,height:b}=d instanceof Image||d instanceof ImageData||d instanceof HTMLCanvasElement||d instanceof HTMLVideoElement?tt._getDataDimensions(d):v;return(v.mipmap?4/3:1)*p*b*(v.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(d){var v;return{target:H.No.TEXTURE_2D,pixelFormat:H.VI.RGBA,dataType:H.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?H.cw.LINEAR_MIPMAP_LINEAR:H.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(v=this.params.maxAnisotropy)?v:this.params.mipmap?d.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(d,v){if((0,D.pC)(this._glTexture))return this._glTexture;if((0,D.pC)(this._loadingPromise))return this._loadingPromise;const p=this.data;return(0,D.Wi)(p)?(this._glTexture=new ue.x(d,this._createDescriptor(d),null),this._glTexture):"string"==typeof p?this._loadFromURL(d,v,p):p instanceof Image?this._loadFromImageElement(d,v,p):p instanceof HTMLVideoElement?this._loadFromVideoElement(d,v,p):p instanceof ImageData||p instanceof HTMLCanvasElement?this._loadFromImage(d,p,v):((0,_t.eP)(p)||(0,_t.lq)(p))&&this.params.encoding===tt.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(d,p)):((0,_t.eP)(p)||(0,_t.lq)(p))&&this.params.encoding===tt.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(d,p)):((0,_t.eP)(p)||(0,_t.lq)(p))&&this.params.encoding===tt.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(d,p)):(0,_t.lq)(p)?this._loadFromPixelData(d,p):(0,_t.eP)(p)?this._loadFromPixelData(d,new Uint8Array(p)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(d,v,p){if(!(this.data instanceof HTMLVideoElement)||(0,D.Wi)(this._glTexture)||this.data.readyState<Vt.HAVE_CURRENT_DATA||p===this.data.currentTime)return p;if((0,D.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:b,vao:y,sourceTexture:L}=this._powerOfTwoStretchInfo;L.setData(this.data),this._drawStretchedTexture(d,v,b,y,L,this._glTexture)}else{const{videoWidth:b,videoHeight:y}=this.data,{width:L,height:B}=this._glTexture.descriptor;b!==L||y!==B?this._glTexture.updateData(0,0,0,Math.min(b,L),Math.min(y,B),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this.data.currentTime}_loadFromDDSData(d,v){return this._glTexture=function Lt(x,d,v){const{textureData:p,internalFormat:b,width:y,height:L}=function Xt(x,d){const v=new Int32Array(x,0,31);if(542327876!==v[0])return Fe.error("Invalid magic number in DDS header"),null;if(!(4&v[20]))return Fe.error("Unsupported format, must contain a FourCC code"),null;const p=v[21];let b,y;switch(p){case nt:b=8,y=H.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case St:b=16,y=H.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ft:b=16,y=H.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Fe.error("Unsupported FourCC code:",function rt(x){return String.fromCharCode(255&x,x>>8&255,x>>16&255,x>>24&255)}(p)),null}let L=1,B=v[4],W=v[3];0==(3&B)&&0==(3&W)||(Fe.warn("Rounding up compressed texture size to nearest multiple of 4."),B=B+3&-4,W=W+3&-4);const N=B,ne=W;let Me,de;131072&v[2]&&!1!==d&&(L=Math.max(1,v[7])),1===L||(0,Ot.wt)(B)&&(0,Ot.wt)(W)||(Fe.warn("Ignoring mipmaps of non power of two sized compressed texture."),L=1);let Ae=v[1]+4;const oe=[];for(let Ie=0;Ie<L;++Ie)de=(B+3>>2)*(W+3>>2)*b,Me=new Uint8Array(x,Ae,de),oe.push(Me),Ae+=de,B=Math.max(1,B>>1),W=Math.max(1,W>>1);return{textureData:{type:"compressed",levels:oe},internalFormat:y,width:N,height:ne}}(v,d.hasMipmap);return d.samplingMode=p.levels.length>1?H.cw.LINEAR_MIPMAP_LINEAR:H.cw.LINEAR,d.hasMipmap=p.levels.length>1,d.internalFormat=b,d.width=y,d.height=L,new ue.x(x,d,p)}(d,this._createDescriptor(d),v),this._glTexture}_loadFromKTX2(d,v){return this._loadAsync(()=>function ce(x,d,v){return xe.apply(this,arguments)}(d,this._createDescriptor(d),v).then(p=>(this._glTexture=p,p)))}_loadFromBasis(d,v){return this._loadAsync(()=>function re(x,d,v){return se.apply(this,arguments)}(d,this._createDescriptor(d),v).then(p=>(this._glTexture=p,p)))}_loadFromPixelData(d,v){(0,Z.hu)(this.params.width>0&&this.params.height>0);const p=this._createDescriptor(d);return p.pixelFormat=1===this.params.components?H.VI.LUMINANCE:3===this.params.components?H.VI.RGB:H.VI.RGBA,p.width=this.params.width,p.height=this.params.height,this._glTexture=new ue.x(d,p,v),this._glTexture}_loadFromURL(d,v,p){var b=this;return this._loadAsync(function(){var y=(0,A.Z)(function*(L){const B=yield(0,ae.t)(p,{signal:L});return(0,q.k_)(L),b._loadFromImage(d,B,v)});return function(L){return y.apply(this,arguments)}}())}_loadFromImageElement(d,v,p){var b=this;return p.complete?this._loadFromImage(d,p,v):this._loadAsync(function(){var y=(0,A.Z)(function*(L){const B=yield(0,Xe.fY)(p,p.src,!1,L);return(0,q.k_)(L),b._loadFromImage(d,B,v)});return function(L){return y.apply(this,arguments)}}())}_loadFromVideoElement(d,v,p){return p.readyState>=Vt.HAVE_CURRENT_DATA?this._loadFromImage(d,p,v):this._loadFromVideoElementAsync(d,v,p)}_loadFromVideoElementAsync(d,v,p){return this._loadAsync(b=>new Promise((y,L)=>{const B=()=>{p.removeEventListener("loadeddata",W),p.removeEventListener("error",N),(0,D.hw)(ne)},W=()=>{p.readyState>=Vt.HAVE_CURRENT_DATA&&(B(),y(this._loadFromImage(d,p,v)))},N=Me=>{B(),L(Me||new le.Z("Failed to load video"))};p.addEventListener("loadeddata",W),p.addEventListener("error",N);const ne=(0,q.fu)(b,()=>N((0,q.zE)()))}))}_loadFromImage(d,v,p){const b=tt._getDataDimensions(v);this.params.width=b.width,this.params.height=b.height;const y=this._createDescriptor(d);return y.pixelFormat=3===this.params.components?H.VI.RGB:H.VI.RGBA,!this._requiresPowerOfTwo(d,y)||(0,Ot.wt)(b.width)&&(0,Ot.wt)(b.height)?(y.width=b.width,y.height=b.height,this._glTexture=new ue.x(d,y,v),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(d,v,b,y,p),this._glTexture)}_loadAsync(d){const v=new AbortController;this._loadingController=v;const p=d(v.signal);this._loadingPromise=p;const b=()=>{this._loadingController===v&&(this._loadingController=null),this._loadingPromise===p&&(this._loadingPromise=null)};return p.then(b,b),p}_requiresPowerOfTwo(d,v){const p=H.e8.CLAMP_TO_EDGE,b="number"==typeof v.wrapMode?v.wrapMode===p:v.wrapMode.s===p&&v.wrapMode.t===p;return!(0,Ht.Z)(d.gl)&&(v.hasMipmap||!b)}_makePowerOfTwoTexture(d,v,p,b,y){const{width:L,height:B}=p,W=(0,Ot.Sf)(L),N=(0,Ot.Sf)(B);let ne;switch(b.width=W,b.height=N,this.params.powerOfTwoResizeMode){case J.CE.PAD:b.textureCoordinateScaleFactor=[L/W,B/N],ne=new ue.x(d,b),ne.updateData(0,0,0,L,B,v);break;case J.CE.STRETCH:case null:case void 0:ne=this._stretchToPowerOfTwo(d,v,b,y());break;default:(0,ge.Bg)(this.params.powerOfTwoResizeMode)}return b.hasMipmap&&ne.generateMipmap(),ne}_stretchToPowerOfTwo(d,v,p,b){const y=new ue.x(d,p),L=new It.X(d,{colorTarget:H.Lm.TEXTURE,depthStencilTarget:H.OU.NONE},y),B=new ue.x(d,{target:H.No.TEXTURE_2D,pixelFormat:p.pixelFormat,dataType:H.Br.UNSIGNED_BYTE,wrapMode:H.e8.CLAMP_TO_EDGE,samplingMode:H.cw.LINEAR,flipped:!!p.flipped,maxAnisotropy:8,preMultiplyAlpha:p.preMultiplyAlpha},v),W=function rr(x,d=Bt,v=Wt.i,p=-1,b=1){let y=null;return y=d===Nt?new Float32Array([p,p,0,0,b,p,1,0,p,b,0,1,b,b,1,1]):new Float32Array([p,p,b,p,p,b,b,b]),new Zt.U(x,v,{geometry:d},{geometry:Ft.f.createVertex(x,H.l1.STATIC_DRAW,y)})}(d),N=d.getBoundFramebufferObject();return this._drawStretchedTexture(d,b,L,W,B,y),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:W,sourceTexture:B,framebuffer:L}:(W.dispose(!0),B.dispose(),L.detachColorTexture(),L.dispose()),d.bindFramebuffer(N),y}_drawStretchedTexture(d,v,p,b,y,L){d.bindFramebuffer(p);const B=d.getViewport();d.setViewport(0,0,L.descriptor.width,L.descriptor.height);const W=d.bindTechnique(v);W.setUniform4f("uColor",1,1,1,1),W.bindTexture("tex",y),d.bindVAO(b),d.drawArrays(H.MX.TRIANGLE_STRIP,0,(0,_e._V)(b,"geometry")),d.bindFramebuffer(null),d.setViewport(B.x,B.y,B.width,B.height)}unload(){if((0,D.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:d,vao:v,sourceTexture:p}=this._powerOfTwoStretchInfo;v.dispose(!0),p.dispose(),d.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,D.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,D.pC)(this._loadingController)){const d=this._loadingController;this._loadingController=null,this._loadingPromise=null,d.abort()}this.events.emit("unloaded")}}tt.DDS_ENCODING="image/vnd-ms.dds",tt.KTX2_ENCODING="image/ktx2",tt.BASIS_ENCODING="image/x.basis",function(x){x[x.HAVE_NOTHING=0]="HAVE_NOTHING",x[x.HAVE_METADATA=1]="HAVE_METADATA",x[x.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",x[x.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",x[x.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Vt||(Vt={}));var hr,sr,zt=u(59617),Kt=u(19625),Tt=u(6945),cr=u(26859),ir=u(96395),dr=u(92724),Xr=u(44621),yr=u(40723),ur=u(88569);!function(x){x[x.MATERIAL=0]="MATERIAL",x[x.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",x[x.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",x[x.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",x[x.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",x[x.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",x[x.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",x[x.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT"}(hr||(hr={})),function(x){x[x.INTEGRATED_MESH=0]="INTEGRATED_MESH",x[x.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",x[x.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",x[x.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",x[x.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",x[x.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",x[x.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",x[x.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",x[x.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",x[x.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",x[x.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",x[x.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",x[x.LASERLINES=12]="LASERLINES",x[x.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",x[x.HUD_MATERIAL=14]="HUD_MATERIAL",x[x.LABEL_MATERIAL=15]="LABEL_MATERIAL",x[x.LINE_CALLOUTS=16]="LINE_CALLOUTS",x[x.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",x[x.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",x[x.DRAPED_WATER=19]="DRAPED_WATER",x[x.VOXEL=20]="VOXEL",x[x.MAX_SLOTS=21]="MAX_SLOTS"}(sr||(sr={}));var Jr=u(48977),Zr=u(78451),Yr=u(14658),Sr=u(2071);const tr=(0,R.c)(),_r=(0,R.c)(),nr=(0,R.c)(),Rr=new class qr{constructor(d=0){this.offset=d,this.sphere=(0,Sr.c)(),this.tmpVertex=(0,R.c)()}applyToVertex(d,v,p){const b=this.objectTransform.transform;let y=b[0]*d+b[4]*v+b[8]*p+b[12],L=b[1]*d+b[5]*v+b[9]*p+b[13],B=b[2]*d+b[6]*v+b[10]*p+b[14];const W=this.offset/Math.sqrt(y*y+L*L+B*B);y+=y*W,L+=L*W,B+=B*W;const N=this.objectTransform.inverse;return this.tmpVertex[0]=N[0]*y+N[4]*L+N[8]*B+N[12],this.tmpVertex[1]=N[1]*y+N[5]*L+N[9]*B+N[13],this.tmpVertex[2]=N[2]*y+N[6]*L+N[10]*B+N[14],this.tmpVertex}applyToMinMax(d,v){const p=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]+=d[0]*p,d[1]+=d[1]*p,d[2]+=d[2]*p;const b=this.offset/Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]);v[0]+=v[0]*b,v[1]+=v[1]*b,v[2]+=v[2]*b}applyToAabb(d){const v=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]+=d[0]*v,d[1]+=d[1]*v,d[2]+=d[2]*v;const p=this.offset/Math.sqrt(d[3]*d[3]+d[4]*d[4]+d[5]*d[5]);return d[3]+=d[3]*p,d[4]+=d[4]*p,d[5]+=d[5]*p,d}applyToBoundingSphere(d){const v=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),p=this.offset/v;return this.sphere[0]=d[0]+d[0]*p,this.sphere[1]=d[1]+d[1]*p,this.sphere[2]=d[2]+d[2]*p,this.sphere[3]=d[3]+d[3]*this.offset/v,this.sphere}};new class kr{constructor(d=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,R.c)(),this._mbs=(0,Sr.c)(),this._obb={center:(0,R.c)(),halfSize:(0,Yr.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(d)}_resetOffset(d){this._offset=d,this._totalOffset=d}set offset(d){this._resetOffset(d)}get offset(){return this._offset}set componentOffset(d){this._totalOffset=this._offset+d}set localOrigin(d){this.componentLocalOriginLength=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])}applyToVertex(d,v,p){const b=d,y=v,L=p+this.componentLocalOriginLength,B=this._totalOffset/Math.sqrt(b*b+y*y+L*L);return this._tmpVertex[0]=d+b*B,this._tmpVertex[1]=v+y*B,this._tmpVertex[2]=p+L*B,this._tmpVertex}applyToAabb(d){const v=d[0],p=d[1],b=d[2]+this.componentLocalOriginLength,y=d[3],L=d[4],B=d[5]+this.componentLocalOriginLength,W=v*y<0?0:Math.min(Math.abs(v),Math.abs(y)),N=p*L<0?0:Math.min(Math.abs(p),Math.abs(L)),ne=b*B<0?0:Math.min(Math.abs(b),Math.abs(B)),Me=Math.sqrt(W*W+N*N+ne*ne);if(Me<this._totalOffset)return d[0]-=v<0?this._totalOffset:0,d[1]-=p<0?this._totalOffset:0,d[2]-=b<0?this._totalOffset:0,d[3]+=y>0?this._totalOffset:0,d[4]+=L>0?this._totalOffset:0,d[5]+=B>0?this._totalOffset:0,d;const de=Math.max(Math.abs(v),Math.abs(y)),Ae=Math.max(Math.abs(p),Math.abs(L)),oe=Math.max(Math.abs(b),Math.abs(B)),Ie=Math.sqrt(de*de+Ae*Ae+oe*oe),Se=this._totalOffset/Ie,we=this._totalOffset/Me;return d[0]+=v*(v>0?Se:we),d[1]+=p*(p>0?Se:we),d[2]+=b*(b>0?Se:we),d[3]+=y*(y<0?Se:we),d[4]+=L*(L<0?Se:we),d[5]+=B*(B<0?Se:we),d}applyToMbs(d){const v=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),p=this._totalOffset/v;return this._mbs[0]=d[0]+d[0]*p,this._mbs[1]=d[1]+d[1]*p,this._mbs[2]=d[2]+d[2]*p,this._mbs[3]=d[3]+d[3]*this._totalOffset/v,this._mbs}applyToObb(d){const v=d.center,p=this._totalOffset/Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]);this._obb.center[0]=v[0]+v[0]*p,this._obb.center[1]=v[1]+v[1]*p,this._obb.center[2]=v[2]+v[2]*p,(0,M.q)(this._obb.halfSize,d.halfSize,d.quaternion),(0,M.a)(this._obb.halfSize,this._obb.halfSize,d.center);const b=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*b,this._obb.halfSize[1]+=this._obb.halfSize[1]*b,this._obb.halfSize[2]+=this._obb.halfSize[2]*b,(0,M.b)(this._obb.halfSize,this._obb.halfSize,d.center),(0,Jr.c)(wr,d.quaternion),(0,M.q)(this._obb.halfSize,this._obb.halfSize,wr),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=d.quaternion,this._obb}},new class Qr{constructor(d=0){this.offset=d,this.tmpVertex=(0,R.c)()}applyToVertex(d,v,p){const b=d+this.localOrigin[0],y=v+this.localOrigin[1],L=p+this.localOrigin[2],B=this.offset/Math.sqrt(b*b+y*y+L*L);return this.tmpVertex[0]=d+b*B,this.tmpVertex[1]=v+y*B,this.tmpVertex[2]=p+L*B,this.tmpVertex}applyToAabb(d){for(let y=0;y<3;++y)tr[y]=d[0+y]+this.localOrigin[y],_r[y]=d[3+y]+this.localOrigin[y],nr[y]=tr[y];const v=this.applyToVertex(tr[0],tr[1],tr[2]);for(let y=0;y<3;++y)d[y]=v[y],d[y+3]=v[y];const p=y=>{const L=this.applyToVertex(y[0],y[1],y[2]);for(let B=0;B<3;++B)d[B+0]=Math.min(d[B+0],L[B]),d[B+3]=Math.max(d[B+3],L[B])};for(let y=1;y<8;++y){for(let L=0;L<3;++L)nr[L]=0==(y&1<<L)?tr[L]:_r[L];p(nr)}let b=0;for(let y=0;y<3;++y)tr[y]*_r[y]<0&&(b|=1<<y);if(0!==b&&7!==b)for(let y=0;y<8;++y)if(0==(b&y)){for(let L=0;L<3;++L)nr[L]=b[L]?0:0!=(y&1<<L)?tr[L]:_r[L];p(nr)}for(let y=0;y<3;++y)d[y+0]-=this.localOrigin[y],d[y+3]-=this.localOrigin[y];return d}};const wr=(0,Zr.a)();function ti(x,d,v,p){const b=v.typedBuffer,y=v.typedBufferStride,L=x.length;p*=y;for(let B=0;B<L;++B){const W=2*x[B];b[p]=d[W],b[p+1]=d[W+1],p+=y}}function Ur(x,d,v,p,b){const y=v.typedBuffer,L=v.typedBufferStride,B=x.length;if(p*=L,null==b||1===b)for(let W=0;W<B;++W){const N=3*x[W];y[p]=d[N],y[p+1]=d[N+1],y[p+2]=d[N+2],p+=L}else for(let W=0;W<B;++W){const N=3*x[W];for(let ne=0;ne<b;++ne)y[p]=d[N],y[p+1]=d[N+1],y[p+2]=d[N+2],p+=L}}function ii(x,d,v,p,b,y=1){if(!v)return void Ur(x,d,p,b,y);const L=p.typedBuffer,B=p.typedBufferStride,W=x.length,N=v[0],ne=v[1],Me=v[2],de=v[4],Ae=v[5],oe=v[6],Ie=v[8],Se=v[9],we=v[10],vt=v[12],it=v[13],at=v[14];if(b*=B,1===y)for(let lt=0;lt<W;++lt){const $e=3*x[lt],Ge=d[$e],Ze=d[$e+1],Ee=d[$e+2];L[b]=N*Ge+de*Ze+Ie*Ee+vt,L[b+1]=ne*Ge+Ae*Ze+Se*Ee+it,L[b+2]=Me*Ge+oe*Ze+we*Ee+at,b+=B}else for(let lt=0;lt<W;++lt){const $e=3*x[lt],Ge=d[$e],Ze=d[$e+1],Ee=d[$e+2],ze=N*Ge+de*Ze+Ie*Ee+vt,ke=ne*Ge+Ae*Ze+Se*Ee+it,qe=Me*Ge+oe*Ze+we*Ee+at;for(let Qe=0;Qe<y;++Qe)L[b]=ze,L[b+1]=ke,L[b+2]=qe,b+=B}}function ai(x,d,v,p,b,y=1){if(!v)return void Ur(x,d,p,b,y);const B=p.typedBuffer,W=p.typedBufferStride,N=x.length,ne=v[0],Me=v[1],de=v[2],Ae=v[4],oe=v[5],Ie=v[6],Se=v[8],we=v[9],vt=v[10],it=!(0,S.p)(v);if(b*=W,1===y)for(let $e=0;$e<N;++$e){const Ge=3*x[$e],Ze=d[Ge],Ee=d[Ge+1],ze=d[Ge+2];let ke=ne*Ze+Ae*Ee+Se*ze,qe=Me*Ze+oe*Ee+we*ze,Qe=de*Ze+Ie*Ee+vt*ze;if(it){const ct=ke*ke+qe*qe+Qe*Qe;if(ct<.999999&&ct>1e-6){const st=1/Math.sqrt(ct);ke*=st,qe*=st,Qe*=st}}B[b+0]=ke,B[b+1]=qe,B[b+2]=Qe,b+=W}else for(let $e=0;$e<N;++$e){const Ge=3*x[$e],Ze=d[Ge],Ee=d[Ge+1],ze=d[Ge+2];let ke=ne*Ze+Ae*Ee+Se*ze,qe=Me*Ze+oe*Ee+we*ze,Qe=de*Ze+Ie*Ee+vt*ze;if(it){const ct=ke*ke+qe*qe+Qe*Qe;if(ct<.999999&&ct>1e-6){const st=1/Math.sqrt(ct);ke*=st,qe*=st,Qe*=st}}for(let ct=0;ct<y;++ct)B[b+0]=ke,B[b+1]=qe,B[b+2]=Qe,b+=W}}function si(x,d,v,p,b,y=1){if(!v)return void function ri(x,d,v,p,b=1){const y=v.typedBuffer,L=v.typedBufferStride,B=x.length;if(p*=L,1===b)for(let W=0;W<B;++W){const N=4*x[W];y[p]=d[N],y[p+1]=d[N+1],y[p+2]=d[N+2],y[p+3]=d[N+3],p+=L}else for(let W=0;W<B;++W){const N=4*x[W];for(let ne=0;ne<b;++ne)y[p]=d[N],y[p+1]=d[N+1],y[p+2]=d[N+2],y[p+3]=d[N+3],p+=L}}(x,d,p,b,y);const B=p.typedBuffer,W=p.typedBufferStride,N=x.length,ne=v[0],Me=v[1],de=v[2],Ae=v[4],oe=v[5],Ie=v[6],Se=v[8],we=v[9],vt=v[10],it=!(0,S.p)(v);if(b*=W,1===y)for(let $e=0;$e<N;++$e){const Ge=4*x[$e],Ze=d[Ge],Ee=d[Ge+1],ze=d[Ge+2],ke=d[Ge+3];let qe=ne*Ze+Ae*Ee+Se*ze,Qe=Me*Ze+oe*Ee+we*ze,ct=de*Ze+Ie*Ee+vt*ze;if(it){const st=qe*qe+Qe*Qe+ct*ct;if(st<.999999&&st>1e-6){const dt=1/Math.sqrt(st);qe*=dt,Qe*=dt,ct*=dt}}B[b+0]=qe,B[b+1]=Qe,B[b+2]=ct,B[b+3]=ke,b+=W}else for(let $e=0;$e<N;++$e){const Ge=4*x[$e],Ze=d[Ge],Ee=d[Ge+1],ze=d[Ge+2],ke=d[Ge+3];let qe=ne*Ze+Ae*Ee+Se*ze,Qe=Me*Ze+oe*Ee+we*ze,ct=de*Ze+Ie*Ee+vt*ze;if(it){const st=qe*qe+Qe*Qe+ct*ct;if(st<.999999&&st>1e-6){const dt=1/Math.sqrt(st);qe*=dt,Qe*=dt,ct*=dt}}for(let st=0;st<y;++st)B[b+0]=qe,B[b+1]=Qe,B[b+2]=ct,B[b+3]=ke,b+=W}}function Br(x,d,v,p,b,y=1){const L=p.typedBuffer,B=p.typedBufferStride,W=x.length;if(b*=B,1===y){if(4===v)for(let N=0;N<W;++N){const ne=4*x[N];L[b]=d[ne],L[b+1]=d[ne+1],L[b+2]=d[ne+2],L[b+3]=d[ne+3],b+=B}else if(3===v)for(let N=0;N<W;++N){const ne=3*x[N];L[b]=d[ne],L[b+1]=d[ne+1],L[b+2]=d[ne+2],L[b+3]=255,b+=B}}else if(4===v)for(let N=0;N<W;++N){const ne=4*x[N];for(let Me=0;Me<y;++Me)L[b]=d[ne],L[b+1]=d[ne+1],L[b+2]=d[ne+2],L[b+3]=d[ne+3],b+=B}else if(3===v)for(let N=0;N<W;++N){const ne=3*x[N];for(let Me=0;Me<y;++Me)L[b]=d[ne],L[b+1]=d[ne+1],L[b+2]=d[ne+2],L[b+3]=255,b+=B}}var Nr=u(50229),oi=u(4794),gr=u(36603),li=u(21799),ci=u(67022),di=u(7228);class Fr{constructor(d,v){this._module=d,this._loadModule=v}get(){return this._module}reload(){var d=this;return(0,A.Z)(function*(){return d._module=yield d._loadModule(),d._module})()}}var Mr=u(37847),hi=u(81653);class mi{constructor(d,v,p){this._context=d,this._locations=p,this._textures=new Map,this._freeTextureUnits=new ie.Z({deallocator:null}),this._glProgram=d.programCache.acquire(v.generate("vertex"),v.generate("fragment"),p),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=v.generateBind(Mr.P.Pass,this),this.bindDraw=v.generateBind(Mr.P.Draw,this),this._fragmentUniforms=(0,hi.hZ)()?v.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(d,v){this._glProgram.setUniform1i(d,v?1:0)}setUniform1i(d,v){this._glProgram.setUniform1i(d,v)}setUniform1f(d,v){this._glProgram.setUniform1f(d,v)}setUniform2f(d,v,p){this._glProgram.setUniform2f(d,v,p)}setUniform2fv(d,v){this._glProgram.setUniform2fv(d,v)}setUniform3f(d,v,p,b){this._glProgram.setUniform3f(d,v,p,b)}setUniform3fv(d,v){this._glProgram.setUniform3fv(d,v)}setUniform4f(d,v,p,b,y){this._glProgram.setUniform4f(d,v,p,b,y)}setUniform4fv(d,v){this._glProgram.setUniform4fv(d,v)}setUniformMatrix3fv(d,v){this._glProgram.setUniformMatrix3fv(d,v)}setUniformMatrix4fv(d,v){this._glProgram.setUniformMatrix4fv(d,v)}setUniform1fv(d,v){this._glProgram.setUniform1fv(d,v)}setUniform1iv(d,v){this._glProgram.setUniform1iv(d,v)}setUniform2iv(d,v){this._glProgram.setUniform3iv(d,v)}setUniform3iv(d,v){this._glProgram.setUniform3iv(d,v)}setUniform4iv(d,v){this._glProgram.setUniform4iv(d,v)}assertCompatibleVertexAttributeLocations(d){d.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(d,v){if((0,D.Wi)(v)||null==v.glName){const b=this._textures.get(d);return b&&(this._context.bindTexture(null,b.unit),this._freeTextureUnit(b),this._textures.delete(d)),null}let p=this._textures.get(d);return null==p?(p=this._allocTextureUnit(v),this._textures.set(d,p)):p.texture=v,this._context.useProgram(this),this.setUniform1i(d,p.unit),this._context.bindTexture(v,p.unit),p.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((d,v)=>{this._context.bindTexture(d.texture,d.unit),this.setUniform1i(v,d.unit)}),(0,D.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(d=>{"sampler2D"!==d.type&&"samplerCube"!==d.type||this._textures.has(d.name)||console.error(`Texture sampler ${d.name} has no bound texture`)})}_allocTextureUnit(d){return{texture:d,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(d){this._freeTextureUnits.push(d.unit)}}const fi={mask:255},vi={function:{func:H.wb.ALWAYS,ref:J.hU.OutlineVisualElementMask,mask:J.hU.OutlineVisualElementMask},operation:{fail:H.xS.KEEP,zFail:H.xS.KEEP,zPass:H.xS.ZERO}},_i={function:{func:H.wb.ALWAYS,ref:J.hU.OutlineVisualElementMask,mask:J.hU.OutlineVisualElementMask},operation:{fail:H.xS.KEEP,zFail:H.xS.KEEP,zPass:H.xS.REPLACE}};var gi=u(96160),pr=u(2078);class pi extends li.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,R.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=J.Vr.Back,this.emissiveFactor=(0,R.f)(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,R.f)(.2,.2,.2),this.diffuse=(0,R.f)(.8,.8,.8),this.externalColor=(0,oi.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,R.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,I.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=J.Gv.Less,this.textureAlphaMode=J.JJ.Blend,this.textureAlphaCutoff=ci.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=yr.yD.Occlude}}class mr extends class ui{constructor(d,v,p){this.release=p,v&&(this.initializeConfiguration(d,v),this._configuration=v.snapshot()),this._program=this.initializeProgram(d),this._pipeline=this.initializePipeline(d.rctx.capabilities)}destroy(){this._program=(0,D.O3)(this._program),this._pipeline=this._configuration=null}reload(d){(0,D.O3)(this._program),this._program=this.initializeProgram(d),this._pipeline=this.initializePipeline(d.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPass(d,v){this.program.bindPass(d,v)}bindDraw(d,v){this.program.bindDraw(d,v),this.program.rebindTextures()}bindPipelineState(d,v=null,p){d.setPipelineState(this.getPipelineState(v,p))}ensureAttributeLocations(d){this.program.assertCompatibleVertexAttributeLocations(d)}get primitiveType(){return H.MX.TRIANGLES}getPipelineState(d,v){return this._pipeline}initializeConfiguration(d,v){}}{initializeConfiguration(d,v){v.spherical=d.viewingMode===zt.JY.Global,v.doublePrecisionRequiresObfuscation=(0,di.I)(d.rctx),v.textureCoordinateType=v.hasColorTexture||v.hasMetalnessAndRoughnessTexture||v.hasEmissionTexture||v.hasOcclusionTexture||v.hasNormalTexture?gr.N.Default:gr.N.None}initializeProgram(d){return this._initializeProgram(d,mr.shader)}_initializeProgram(d,v){const p=v.get().build(this.configuration);return new mi(d.rctx,p,Wt.i)}_convertDepthTestFunction(d){return d===J.Gv.Lequal?H.wb.LEQUAL:H.wb.LESS}_setPipeline(d,v){const p=this.configuration,b=d===J.Am.NONE,y=d===J.Am.FrontFace;return(0,pr.sm)({blending:p.output!==Tt.H.Color&&p.output!==Tt.H.Alpha||!p.transparent?null:b?ur.wu:(0,ur.j7)(d),culling:Ti(p)&&(0,pr.zp)(p.cullFace),depthTest:{func:(0,ur.Bh)(d,this._convertDepthTestFunction(p.customDepthTest))},depthWrite:b||y?p.writeDepth&&pr.LZ:null,colorWrite:pr.BK,stencilWrite:p.hasOccludees?fi:null,stencilTest:p.hasOccludees?v?_i:vi:null,polygonOffset:b||y?null:(0,ur.je)(p.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(d,v){return v?this._occludeePipelineState:super.getPipelineState(d,v)}}function Ti(x){return x.cullFace!==J.Vr.None||!x.hasSlicePlane&&!x.transparent&&!x.doubleSidedMode}mr.shader=new Fr(gi.D,()=>u.e(3907).then(u.bind(u,83907)));var be=u(17626);function Ce(x={}){return(d,v)=>{var p,b;if(d._parameterNames=null!=(p=d._parameterNames)?p:[],d._parameterNames.push(v),null!=x.constValue)Object.defineProperty(d,v,{get:()=>x.constValue});else{const y=d._parameterNames.length-1,B=Math.ceil(Math.log2(x.count||2)),W=null!=(b=d._parameterBits)?b:[0];let N=0;for(;W[N]+B>16;)N++,N>=W.length&&W.push(0);d._parameterBits=W;const ne=W[N],Me=(1<<B)-1<<ne;W[N]+=B,Object.defineProperty(d,v,{get(){return this[y]},set(de){if(this[y]!==de&&(this[y]=de,this._keyDirty=!0,this._parameterBits[N]=this._parameterBits[N]&~Me|+de<<ne&Me,"number"!=typeof de&&"boolean"!=typeof de))throw"Configuration value for "+v+" must be boolean or number, got "+typeof de}})}}}class or extends class xi{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const d=this._parameterNames,v={key:this.key};for(const p of d)v[p]=this[p];return v}}{}(0,be._)([Ce({constValue:!0})],or.prototype,"hasSliceHighlight",void 0),(0,be._)([Ce({constValue:!1})],or.prototype,"hasSliceInVertexProgram",void 0),(0,be._)([Ce({constValue:!1})],or.prototype,"instancedDoublePrecision",void 0),(0,be._)([Ce({constValue:!1})],or.prototype,"isGround",void 0),(0,be._)([Ce({constValue:Mr.P.Pass})],or.prototype,"pbrTextureBindType",void 0);class ye extends or{constructor(){super(...arguments),this.output=Tt.H.Color,this.alphaDiscardMode=J.JJ.Opaque,this.doubleSidedMode=ir.q.None,this.pbrMode=dr.f7.Disabled,this.cullFace=J.Vr.None,this.transparencyPassType=J.Am.NONE,this.normalType=cr.h.Attribute,this.textureCoordinateType=gr.N.None,this.customDepthTest=J.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1}}(0,be._)([Ce({count:Tt.H.COUNT})],ye.prototype,"output",void 0),(0,be._)([Ce({count:J.JJ.COUNT})],ye.prototype,"alphaDiscardMode",void 0),(0,be._)([Ce({count:ir.q.COUNT})],ye.prototype,"doubleSidedMode",void 0),(0,be._)([Ce({count:dr.f7.COUNT})],ye.prototype,"pbrMode",void 0),(0,be._)([Ce({count:J.Vr.COUNT})],ye.prototype,"cullFace",void 0),(0,be._)([Ce({count:J.Am.COUNT})],ye.prototype,"transparencyPassType",void 0),(0,be._)([Ce({count:cr.h.COUNT})],ye.prototype,"normalType",void 0),(0,be._)([Ce({count:gr.N.COUNT})],ye.prototype,"textureCoordinateType",void 0),(0,be._)([Ce({count:J.Gv.COUNT})],ye.prototype,"customDepthTest",void 0),(0,be._)([Ce()],ye.prototype,"spherical",void 0),(0,be._)([Ce()],ye.prototype,"hasVertexColors",void 0),(0,be._)([Ce()],ye.prototype,"hasSymbolColors",void 0),(0,be._)([Ce()],ye.prototype,"hasVerticalOffset",void 0),(0,be._)([Ce()],ye.prototype,"hasSlicePlane",void 0),(0,be._)([Ce()],ye.prototype,"hasSliceHighlight",void 0),(0,be._)([Ce()],ye.prototype,"hasColorTexture",void 0),(0,be._)([Ce()],ye.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,be._)([Ce()],ye.prototype,"hasEmissionTexture",void 0),(0,be._)([Ce()],ye.prototype,"hasOcclusionTexture",void 0),(0,be._)([Ce()],ye.prototype,"hasNormalTexture",void 0),(0,be._)([Ce()],ye.prototype,"hasScreenSizePerspective",void 0),(0,be._)([Ce()],ye.prototype,"hasVertexTangents",void 0),(0,be._)([Ce()],ye.prototype,"hasOccludees",void 0),(0,be._)([Ce()],ye.prototype,"hasMultipassTerrain",void 0),(0,be._)([Ce()],ye.prototype,"hasModelTransformation",void 0),(0,be._)([Ce()],ye.prototype,"offsetBackfaces",void 0),(0,be._)([Ce()],ye.prototype,"vvSize",void 0),(0,be._)([Ce()],ye.prototype,"vvColor",void 0),(0,be._)([Ce()],ye.prototype,"receiveShadows",void 0),(0,be._)([Ce()],ye.prototype,"receiveAmbientOcclusion",void 0),(0,be._)([Ce()],ye.prototype,"textureAlphaPremultiplied",void 0),(0,be._)([Ce()],ye.prototype,"instanced",void 0),(0,be._)([Ce()],ye.prototype,"instancedColor",void 0),(0,be._)([Ce()],ye.prototype,"instancedDoublePrecision",void 0),(0,be._)([Ce()],ye.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,be._)([Ce()],ye.prototype,"writeDepth",void 0),(0,be._)([Ce()],ye.prototype,"transparent",void 0),(0,be._)([Ce()],ye.prototype,"enableOffset",void 0),(0,be._)([Ce()],ye.prototype,"cullAboveGround",void 0),(0,be._)([Ce()],ye.prototype,"snowCover",void 0),(0,be._)([Ce({constValue:!0})],ye.prototype,"hasVvInstancing",void 0),(0,be._)([Ce({constValue:!1})],ye.prototype,"useCustomDTRExponentForWater",void 0),(0,be._)([Ce({constValue:!1})],ye.prototype,"supportsTextureAtlas",void 0),(0,be._)([Ce({constValue:!0})],ye.prototype,"useFillLights",void 0);var Mi=u(77133);class Tr extends mr{initializeConfiguration(d,v){super.initializeConfiguration(d,v),v.hasMetalnessAndRoughnessTexture=!1,v.hasEmissionTexture=!1,v.hasOcclusionTexture=!1,v.hasNormalTexture=!1,v.hasModelTransformation=!1,v.normalType=cr.h.Attribute,v.doubleSidedMode=ir.q.WindingOrder,v.hasVertexTangents=!1}initializeProgram(d){return this._initializeProgram(d,Tr.shader)}}Tr.shader=new Fr(Mi.R,()=>u.e(3959).then(u.bind(u,93959)));class Hr extends yr.F5{constructor(d){super(d,Oi),this.supportsEdges=!0,this.techniqueConfig=new ye,this.vertexBufferLayout=function bi(x){const d=x.textureId||x.normalTextureId||x.metallicRoughnessTextureId||x.emissiveTextureId||x.occlusionTextureId,v=(0,Kt.U$)().vec3f(he.T.POSITION).vec3f(he.T.NORMAL);return x.hasVertexTangents&&v.vec4f(he.T.TANGENT),d&&v.vec2f(he.T.UV0),x.hasVertexColors&&v.vec4u8(he.T.COLOR),x.hasSymbolColors&&v.vec4u8(he.T.SYMBOLCOLOR),v}(this.parameters),this.instanceBufferLayout=d.instanced?function Ci(x){let d=(0,Kt.U$)();return d=x.instancedDoublePrecision?d.vec3f(he.T.MODELORIGINHI).vec3f(he.T.MODELORIGINLO).mat3f(he.T.MODEL).mat3f(he.T.MODELNORMAL):d.mat4f(he.T.MODEL).mat4f(he.T.MODELNORMAL),(0,D.pC)(x.instanced)&&x.instanced.includes("color")&&(d=d.vec4f(he.T.INSTANCECOLOR)),(0,D.pC)(x.instanced)&&x.instanced.includes("featureAttribute")&&(d=d.vec4f(he.T.INSTANCEFEATUREATTRIBUTE)),d}(this.parameters):null}isVisibleInPass(d){return d!==hr.MATERIAL_DEPTH_SHADOWMAP_ALL&&d!==hr.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&d!==hr.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const d=this.parameters;if(!super.isVisible()||0===d.layerOpacity)return!1;const{instanced:v,hasVertexColors:p,hasSymbolColors:b,vvColorEnabled:y}=d,L=(0,D.pC)(v)&&v.includes("color"),B="replace"===d.colorMixMode,W=d.opacity>0,N=d.externalColor&&d.externalColor[3]>0;return p&&(L||y||b)?!!B||W:p?B?N:W:L||y||b?!!B||W:B?N:W}getConfiguration(d,v){return this.techniqueConfig.output=d,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.hasVertexTangents=this.parameters.hasVertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.hasVerticalOffset=(0,D.pC)(this.parameters.verticalOffset),this.techniqueConfig.hasScreenSizePerspective=(0,D.pC)(this.parameters.screenSizePerspective),this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasSliceHighlight=this.parameters.hasSliceHighlight,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalType="screenDerivative"===this.parameters.normals?cr.h.ScreenDerivative:cr.h.Attribute,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,D.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.cullFace=this.parameters.hasSlicePlane?J.Vr.None:this.parameters.cullFace,this.techniqueConfig.hasMultipassTerrain=v.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=v.multipassTerrain.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,D.pC)(this.parameters.modelTransformation),d!==Tt.H.Color&&d!==Tt.H.Alpha||(this.techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this.techniqueConfig.hasSymbolColors=this.parameters.hasSymbolColors,this.techniqueConfig.doubleSidedMode=this.parameters.treeRendering?ir.q.WindingOrder:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?ir.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?ir.q.WindingOrder:ir.q.None,this.techniqueConfig.instancedColor=(0,D.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!v.ssaoHelper.ready&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?dr.f7.Schematic:dr.f7.Normal:dr.f7.Disabled,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.transparencyPassType=v.transparencyPassType,this.techniqueConfig.enableOffset=v.camera.relativeElevation<ur.ve,this.techniqueConfig.snowCover=this.hasSnowCover(v)),this.techniqueConfig}hasSnowCover(d){return(0,D.pC)(d.weather)&&d.weatherVisible&&"snowy"===d.weather.type&&"enabled"===d.weather.snowCover}intersect(d,v,p,b,y,L,B){if((0,D.pC)(this.parameters.verticalOffset)){const W=b.camera;(0,M.s)(Pr,p[12],p[13],p[14]);let N=null;switch(b.viewingMode){case zt.JY.Global:N=(0,M.n)(Vr,Pr);break;case zt.JY.Local:N=(0,M.c)(Vr,Si)}let ne=0;const Me=(0,M.b)(Ri,Pr,W.eye),de=(0,M.l)(Me),Ae=(0,M.g)(Me,Me,1/de);let oe=null;this.parameters.screenSizePerspective&&(oe=(0,M.e)(N,Ae)),ne+=(0,Nr.Hx)(W,de,this.parameters.verticalOffset,oe,this.parameters.screenSizePerspective),(0,M.g)(N,N,ne),(0,M.t)(Er,N,b.transform.inverseRotation),y=(0,M.b)(Di,y,Er),L=(0,M.b)(yi,L,Er)}(0,Nr.Bw)(d,v,b,y,L,function ei(x){return(0,D.pC)(x)?(Rr.offset=x,Rr):null}(b.verticalOffset),B)}requiresSlot(d){return d===(this.parameters.transparent?this.parameters.writeDepth?sr.TRANSPARENT_MATERIAL:sr.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:sr.OPAQUE_MATERIAL)||d===sr.DRAPED_MATERIAL}createGLMaterial(d){return d.output===Tt.H.Color||d.output===Tt.H.Alpha||d.output===Tt.H.Depth||d.output===Tt.H.Normal||d.output===Tt.H.Shadow||d.output===Tt.H.Highlight?new Ei(d):null}createBufferWriter(){return new Ai(this.vertexBufferLayout,this.instanceBufferLayout)}}class Ei extends Xr.F{constructor(d){super(Qt(Qt({},d),d.material.parameters))}_updateParameters(d){const v=this._material.parameters;this.updateTexture(v.textureId);const p=d.camera.viewInverseTransposeMatrix;return(0,M.s)(v.origin,p[3],p[7],p[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(v.treeRendering?Tr:mr,d)}_updateShadowState(d){d.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:d.shadowMap.enabled})}_updateOccludeeState(d){d.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:d.hasOccludees})}beginSlot(d){return this._output!==Tt.H.Color&&this._output!==Tt.H.Alpha||(this._updateShadowState(d),this._updateOccludeeState(d)),this._updateParameters(d)}}const Oi=new class Pi extends pi{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};class Ai{constructor(d,v){this.vertexBufferLayout=d,this.instanceBufferLayout=v}allocate(d){return this.vertexBufferLayout.createBuffer(d)}elementCount(d){return d.indices.get(he.T.POSITION).length}write(d,v,p,b){!function ni(x,d,v,p,b,y){for(const L of d.fieldNames){const B=x.vertexAttributes.get(L),W=x.indices.get(L);if(B&&W)switch(L){case he.T.POSITION:{(0,Z.hu)(3===B.size);const N=b.getField(L,U.ct);N&&ii(W,B.data,v,N,y);break}case he.T.NORMAL:{(0,Z.hu)(3===B.size);const N=b.getField(L,U.ct);N&&ai(W,B.data,p,N,y);break}case he.T.UV0:{(0,Z.hu)(2===B.size);const N=b.getField(L,U.Eu);N&&ti(W,B.data,N,y);break}case he.T.COLOR:{(0,Z.hu)(3===B.size||4===B.size);const N=b.getField(L,U.mc);N&&Br(W,B.data,B.size,N,y);break}case he.T.SYMBOLCOLOR:{(0,Z.hu)(3===B.size||4===B.size);const N=b.getField(L,U.mc);N&&Br(W,B.data,B.size,N,y);break}case he.T.TANGENT:{(0,Z.hu)(4===B.size);const N=b.getField(L,U.ek);N&&si(W,B.data,p,N,y);break}}}}(v,this.vertexBufferLayout,d.transformation,d.invTranspTransformation,p,b)}}const Di=(0,R.c)(),yi=(0,R.c)(),Si=(0,R.f)(0,0,1),Vr=(0,R.c)(),Er=(0,R.c)(),Pr=(0,R.c)(),Ri=(0,R.c)(),Yt=Te.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Li(x,d){return Or.apply(this,arguments)}function Or(){return Or=(0,A.Z)(function*(x,d){const v=yield Ii(x,d);return{resource:v,textures:yield Fi(v.textureDefinitions,d)}}),Or.apply(this,arguments)}function Ii(x,d){return Ar.apply(this,arguments)}function Ar(){return Ar=(0,A.Z)(function*(x,d){const v=(0,D.pC)(d)&&d.streamDataRequester;if(v)return wi(x,v,d);const p=yield(0,Q.q6)((0,G.default)(x,(0,D.Wg)(d)));if(!0===p.ok)return p.value.data;(0,q.r9)(p.error),zr(p.error)}),Ar.apply(this,arguments)}function wi(x,d,v){return br.apply(this,arguments)}function br(){return br=(0,A.Z)(function*(x,d,v){const p=yield(0,Q.q6)(d.request(x,"json",v));if(!0===p.ok)return p.value;(0,q.r9)(p.error),zr(p.error.details.url)}),br.apply(this,arguments)}function zr(x){throw new le.Z("",`Request for object resource failed: ${x}`)}function Ui(x){const d=x.params,v=d.topology;let p=!0;switch(d.vertexAttributes||(Yt.warn("Geometry must specify vertex attributes"),p=!1),d.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const y=d.faces;if(y){if(d.vertexAttributes)for(const L in d.vertexAttributes){const B=y[L];B&&B.values?(null!=B.valueType&&"UInt32"!==B.valueType&&(Yt.warn(`Unsupported indexed geometry indices type '${B.valueType}', only UInt32 is currently supported`),p=!1),null!=B.valuesPerElement&&1!==B.valuesPerElement&&(Yt.warn(`Unsupported indexed geometry values per element '${B.valuesPerElement}', only 1 is currently supported`),p=!1)):(Yt.warn(`Indexed geometry does not specify face indices for '${L}' attribute`),p=!1)}}else Yt.warn("Indexed geometries must specify faces"),p=!1;break}default:Yt.warn(`Unsupported topology '${v}'`),p=!1}x.params.material||(Yt.warn("Geometry requires material"),p=!1);const b=x.params.vertexAttributes;for(const y in b)b[y].values||(Yt.warn("Geometries with externally defined attributes are not yet supported"),p=!1);return p}function Bi(x,d){const v=[],p=[],b=[],y=[],L=x.resource,B=k.G.parse(L.version||"1.0","wosr");Vi.validate(B);const W=L.model.name,N=L.model.geometries,ne=L.materialDefinitions,Me=x.textures;let de=0;const Ae=new Map;for(let oe=0;oe<N.length;oe++){const Ie=N[oe];if(!Ui(Ie))continue;const Se=Hi(Ie),we=Ie.params.vertexAttributes,vt=[];for(const Ee in we){const ze=we[Ee];vt.push([Ee,{data:ze.values,size:ze.valuesPerElement,exclusive:!0}])}const it=[];if("PerAttributeArray"!==Ie.params.topology){const Ee=Ie.params.faces;for(const ze in Ee)it.push([ze,new Uint32Array(Ee[ze].values)])}const at=Me&&Me[Se.texture];if(at&&!Ae.has(Se.texture)){const{image:Ee,params:ze}=at,ke=new tt(Ee,ze);y.push(ke),Ae.set(Se.texture,ke)}const lt=Ae.get(Se.texture),$e=lt?lt.id:void 0;let Ge=b[Se.material]?b[Se.material][Se.texture]:null;if(!Ge){const Ee=ne[Se.material.substring(Se.material.lastIndexOf("/")+1)].params;1===Ee.transparency&&(Ee.transparency=0);const ze=at&&at.alphaChannelUsage,ke=Ee.transparency>0||"transparency"===ze||"maskAndTransparency"===ze,qe=at?Wr(at.alphaChannelUsage):void 0,Qe={ambient:(0,R.d)(Ee.diffuse),diffuse:(0,R.d)(Ee.diffuse),opacity:1-(Ee.transparency||0),transparent:ke,textureAlphaMode:qe,textureAlphaCutoff:.33,textureId:$e,initTextureTransparent:!0,doubleSided:!0,cullFace:J.Vr.None,colorMixMode:Ee.externalColorMixMode||"tint",textureAlphaPremultiplied:!!at&&!!at.params.preMultiplyAlpha};(0,D.pC)(d)&&d.materialParamsMixin&&Object.assign(Qe,d.materialParamsMixin),Ge=new Hr(Qe),b[Se.material]||(b[Se.material]={}),b[Se.material][Se.texture]=Ge}p.push(Ge);const Ze=new Ve(vt,it);de+=it.position?it.position.length:0,v.push(Ze)}return{name:W,stageResources:{textures:y,materials:p,geometries:v},pivotOffset:L.model.pivotOffset,boundingBox:Ni(v),numberOfVertices:de,lodThreshold:null}}function Ni(x){const d=(0,F.cS)();return x.forEach(v=>{const p=v.boundingInfo;(0,D.pC)(p)&&((0,F.pp)(d,p.getBBMin()),(0,F.pp)(d,p.getBBMax()))}),d}function Fi(x,d){return Cr.apply(this,arguments)}function Cr(){return Cr=(0,A.Z)(function*(x,d){const v=[];for(const y in x){const L=x[y],B=L.images[0].data;if(!B){Yt.warn("Externally referenced texture data is not yet supported");continue}const W=L.encoding+";base64,"+B,N="/textureDefinitions/"+y,ne="rgba"===L.channels?L.alphaChannelUsage||"transparency":"none",Me={noUnpackFlip:!0,wrap:{s:H.e8.REPEAT,t:H.e8.REPEAT},preMultiplyAlpha:Wr(ne)!==J.JJ.Opaque},de=(0,D.pC)(d)&&d.disableTextures?Promise.resolve(null):(0,ae.t)(W,d);v.push(de.then(Ae=>({refId:N,image:Ae,params:Me,alphaChannelUsage:ne})))}const p=yield Promise.all(v),b={};for(const y of p)b[y.refId]=y;return b}),Cr.apply(this,arguments)}function Wr(x){switch(x){case"mask":return J.JJ.Mask;case"maskAndTransparency":return J.JJ.MaskBlend;case"none":return J.JJ.Opaque;default:return J.JJ.Blend}}function Hi(x){const d=x.params;return{id:1,material:d.material,texture:d.texture,region:d.texture}}const Vi=new k.G(1,2,"wosr");var lr=u(79331),zi=u(35995),Gr=u(63470),Wi=u(9554);function Gi(x,d){return Dr.apply(this,arguments)}function Dr(){return Dr=(0,A.Z)(function*(x,d){const v=jr((0,O.pJ)(x));if("wosr"===v.fileType){const W=yield d.cache?d.cache.loadWOSR(v.url,d):Li(v.url,d),N=Bi(W,d);return{lods:[N],referenceBoundingBox:N.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:W.remove}}const p=yield d.cache?d.cache.loadGLTF(v.url,d,d.usePBR):(0,K.z)(new ee.C(d.streamDataRequester),v.url,d,d.usePBR),b=(0,D.U2)(p.model.meta,"ESRI_proxyEllipsoid");p.meta.isEsriSymbolResource&&(0,D.pC)(b)&&p.meta.uri.includes("/RealisticTrees/")&&$i(p,b);const y=p.meta.isEsriSymbolResource?{usePBR:d.usePBR,isSchematic:!1,treeRendering:!!p.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:d.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},L=fr(Qt({},d.materialParamsMixin),{treeRendering:!!p.customMeta.esriTreeRendering});if(null!=v.specifiedLodIndex){const W=xr(p,y,L,v.specifiedLodIndex);let N=W[0].boundingBox;return 0!==v.specifiedLodIndex&&(N=xr(p,y,L,0)[0].boundingBox),{lods:W,referenceBoundingBox:N,isEsriSymbolResource:p.meta.isEsriSymbolResource,isWosr:!1,remove:p.remove}}const B=xr(p,y,L);return{lods:B,referenceBoundingBox:B[0].boundingBox,isEsriSymbolResource:p.meta.isEsriSymbolResource,isWosr:!1,remove:p.remove}}),Dr.apply(this,arguments)}function jr(x){const d=x.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return d?{fileType:"gltf",url:d[1],specifiedLodIndex:null!=d[4]?Number(d[4]):null}:x.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:x,specifiedLodIndex:null}:{fileType:"unknown",url:x,specifiedLodIndex:null}}function xr(x,d,v,p){const b=x.model,y=(0,I.c)(),L=new Array,B=new Map,W=new Map;return b.lods.forEach((N,ne)=>{if(void 0!==p&&ne!==p)return;const Me={name:N.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,D.pC)(N.lodThreshold)?N.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,F.cS)()};L.push(Me),N.parts.forEach(de=>{const Ae=de.material+(de.attributes.normal?"_normal":"")+(de.attributes.color?"_color":"")+(de.attributes.texCoord0?"_texCoord0":"")+(de.attributes.tangent?"_tangent":""),oe=b.materials.get(de.material),Ie=(0,D.pC)(de.attributes.texCoord0),Se=(0,D.pC)(de.attributes.normal),we=function ji(x){switch(x){case"BLEND":return J.JJ.Blend;case"MASK":return J.JJ.Mask;case"OPAQUE":case null:case void 0:return J.JJ.Opaque}}(oe.alphaMode);if(!B.has(Ae)){if(Ie){if((0,D.pC)(oe.textureColor)&&!W.has(oe.textureColor)){const dt=b.textures.get(oe.textureColor),Xi=fr(Qt({},dt.parameters),{preMultiplyAlpha:we!==J.JJ.Opaque});W.set(oe.textureColor,new tt(dt.data,Xi))}if((0,D.pC)(oe.textureNormal)&&!W.has(oe.textureNormal)){const dt=b.textures.get(oe.textureNormal);W.set(oe.textureNormal,new tt(dt.data,dt.parameters))}if((0,D.pC)(oe.textureOcclusion)&&!W.has(oe.textureOcclusion)){const dt=b.textures.get(oe.textureOcclusion);W.set(oe.textureOcclusion,new tt(dt.data,dt.parameters))}if((0,D.pC)(oe.textureEmissive)&&!W.has(oe.textureEmissive)){const dt=b.textures.get(oe.textureEmissive);W.set(oe.textureEmissive,new tt(dt.data,dt.parameters))}if((0,D.pC)(oe.textureMetallicRoughness)&&!W.has(oe.textureMetallicRoughness)){const dt=b.textures.get(oe.textureMetallicRoughness);W.set(oe.textureMetallicRoughness,new tt(dt.data,dt.parameters))}}const Ee=oe.color[0]**(1/lr.K),ze=oe.color[1]**(1/lr.K),ke=oe.color[2]**(1/lr.K),qe=oe.emissiveFactor[0]**(1/lr.K),Qe=oe.emissiveFactor[1]**(1/lr.K),ct=oe.emissiveFactor[2]**(1/lr.K),st=(0,D.pC)(oe.textureColor)&&Ie?W.get(oe.textureColor):null;B.set(Ae,new Hr(Qt(fr(Qt({},d),{transparent:we===J.JJ.Blend,customDepthTest:J.Gv.Lequal,textureAlphaMode:we,textureAlphaCutoff:oe.alphaCutoff,diffuse:[Ee,ze,ke],ambient:[Ee,ze,ke],opacity:oe.opacity,doubleSided:oe.doubleSided,doubleSidedType:"winding-order",cullFace:oe.doubleSided?J.Vr.None:J.Vr.Back,hasVertexColors:!!de.attributes.color,hasVertexTangents:!!de.attributes.tangent,normals:Se?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,D.pC)(st)?st.id:void 0,colorMixMode:oe.colorMixMode,normalTextureId:(0,D.pC)(oe.textureNormal)&&Ie?W.get(oe.textureNormal).id:void 0,textureAlphaPremultiplied:(0,D.pC)(st)&&!!st.params.preMultiplyAlpha,occlusionTextureId:(0,D.pC)(oe.textureOcclusion)&&Ie?W.get(oe.textureOcclusion).id:void 0,emissiveTextureId:(0,D.pC)(oe.textureEmissive)&&Ie?W.get(oe.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,D.pC)(oe.textureMetallicRoughness)&&Ie?W.get(oe.textureMetallicRoughness).id:void 0,emissiveFactor:[qe,Qe,ct],mrrFactors:[oe.metallicFactor,oe.roughnessFactor,d.mrrFactors[2]],isSchematic:!1}),v)))}const vt=function Ki(x,d){switch(d){case H.MX.TRIANGLES:return(0,V.nh)(x);case H.MX.TRIANGLE_STRIP:return(0,V.DA)(x);case H.MX.TRIANGLE_FAN:return(0,V.jX)(x)}}(de.indices||de.attributes.position.count,de.primitiveType),it=de.attributes.position.count,at=(0,$.gS)(U.ct,it);(0,X.t)(at,de.attributes.position,de.transform);const lt=[[he.T.POSITION,{data:at.typedBuffer,size:at.elementCount,exclusive:!0}]],$e=[[he.T.POSITION,vt]];if((0,D.pC)(de.attributes.normal)){const Ee=(0,$.gS)(U.ct,it);(0,w.a)(y,de.transform),(0,X.a)(Ee,de.attributes.normal,y),lt.push([he.T.NORMAL,{data:Ee.typedBuffer,size:Ee.elementCount,exclusive:!0}]),$e.push([he.T.NORMAL,vt])}if((0,D.pC)(de.attributes.tangent)){const Ee=(0,$.gS)(U.ek,it);(0,w.a)(y,de.transform),(0,j.t)(Ee,de.attributes.tangent,y),lt.push([he.T.TANGENT,{data:Ee.typedBuffer,size:Ee.elementCount,exclusive:!0}]),$e.push([he.T.TANGENT,vt])}if((0,D.pC)(de.attributes.texCoord0)){const Ee=(0,$.gS)(U.Eu,it);(0,zi.n)(Ee,de.attributes.texCoord0),lt.push([he.T.UV0,{data:Ee.typedBuffer,size:Ee.elementCount,exclusive:!0}]),$e.push([he.T.UV0,vt])}if((0,D.pC)(de.attributes.color)){const Ee=(0,$.gS)(U.mc,it);if(4===de.attributes.color.elementCount)de.attributes.color instanceof U.ek?(0,j.s)(Ee,de.attributes.color,255):de.attributes.color instanceof U.mc?(0,Gr.c)(Ee,de.attributes.color):de.attributes.color instanceof U.v6&&(0,j.s)(Ee,de.attributes.color,1/256);else{(0,Gr.f)(Ee,255,255,255,255);const ze=new U.ne(Ee.buffer,0,4);de.attributes.color instanceof U.ct?(0,X.s)(ze,de.attributes.color,255):de.attributes.color instanceof U.ne?(0,Wi.c)(ze,de.attributes.color):de.attributes.color instanceof U.mw&&(0,X.s)(ze,de.attributes.color,1/256)}lt.push([he.T.COLOR,{data:Ee.typedBuffer,size:Ee.elementCount,exclusive:!0}]),$e.push([he.T.COLOR,vt])}const Ge=new Ve(lt,$e);Me.stageResources.geometries.push(Ge),Me.stageResources.materials.push(B.get(Ae)),Ie&&((0,D.pC)(oe.textureColor)&&Me.stageResources.textures.push(W.get(oe.textureColor)),(0,D.pC)(oe.textureNormal)&&Me.stageResources.textures.push(W.get(oe.textureNormal)),(0,D.pC)(oe.textureOcclusion)&&Me.stageResources.textures.push(W.get(oe.textureOcclusion)),(0,D.pC)(oe.textureEmissive)&&Me.stageResources.textures.push(W.get(oe.textureEmissive)),(0,D.pC)(oe.textureMetallicRoughness)&&Me.stageResources.textures.push(W.get(oe.textureMetallicRoughness))),Me.numberOfVertices+=it;const Ze=Ge.boundingInfo;(0,D.pC)(Ze)&&((0,F.pp)(Me.boundingBox,Ze.getBBMin()),(0,F.pp)(Me.boundingBox,Ze.getBBMax()))})}),L}function $i(x,d){for(let v=0;v<x.model.lods.length;++v){const p=x.model.lods[v];x.customMeta.esriTreeRendering=!0;for(const b of p.parts){const y=b.attributes.normal;if((0,D.Wi)(y))return;const L=b.attributes.position,B=L.count,W=(0,R.c)(),N=(0,R.c)(),ne=(0,R.c)(),Me=(0,$.gS)(U.mc,B),de=(0,$.gS)(U.ct,B),Ae=(0,S.a)((0,C.c)(),b.transform);for(let oe=0;oe<B;oe++){L.getVec(oe,N),y.getVec(oe,W),(0,M.m)(N,N,b.transform),(0,M.b)(ne,N,d.center),(0,M.G)(ne,ne,d.radius);const Ie=ne[2],Se=(0,M.l)(ne),we=Math.min(.45+.55*Se*Se,1);(0,M.G)(ne,ne,d.radius),(0,M.m)(ne,ne,Ae),(0,M.n)(ne,ne),v+1!==x.model.lods.length&&x.model.lods.length>1&&(0,M.h)(ne,ne,W,Ie>-1?.2:Math.min(-4*Ie-3.8,1)),de.setVec(oe,ne),Me.set(oe,0,255*we),Me.set(oe,1,255*we),Me.set(oe,2,255*we),Me.set(oe,3,255)}b.attributes.normal=de,b.attributes.color=Me}}}},9044:(fe,z,u)=>{var O,R;u.d(z,{a9:()=>O}),u(21286),(R=O||(O={}))[R.Multiply=1]="Multiply",R[R.Ignore=2]="Ignore",R[R.Replace=3]="Replace",R[R.Tint=4]="Tint"},19625:(fe,z,u)=>{u.d(z,{U$:()=>I});var A=u(60479),O=u(81096);class D{constructor(C,M){this.layout=C,this.buffer="number"==typeof M?new ArrayBuffer(M*C.stride):M;for(const R of C.fieldNames){const F=C.fields.get(R);this[R]=new F.constructor(this.buffer,F.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(C,M){const R=this[C];return R&&R.elementCount===M.ElementCount&&R.elementType===M.ElementType?R:null}slice(C,M){return new D(this.layout,this.buffer.slice(C*this.stride,M*this.stride))}copyFrom(C,M,R,F){const U=this.stride;if(U%4==0){const X=new Uint32Array(C.buffer,M*U,F*U/4);new Uint32Array(this.buffer,R*U,F*U/4).set(X)}else{const X=new Uint8Array(C.buffer,M*U,F*U);new Uint8Array(this.buffer,R*U,F*U).set(X)}}}class w{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(C,M){return this._appendField(C,A.Eu,M),this}vec2f64(C,M){return this._appendField(C,A.q6,M),this}vec3f(C,M){return this._appendField(C,A.ct,M),this}vec3f64(C,M){return this._appendField(C,A.fP,M),this}vec4f(C,M){return this._appendField(C,A.ek,M),this}vec4f64(C,M){return this._appendField(C,A.Cd,M),this}mat3f(C,M){return this._appendField(C,A.gK,M),this}mat3f64(C,M){return this._appendField(C,A.ey,M),this}mat4f(C,M){return this._appendField(C,A.bj,M),this}mat4f64(C,M){return this._appendField(C,A.O1,M),this}vec4u8(C,M){return this._appendField(C,A.mc,M),this}f32(C,M){return this._appendField(C,A.ly,M),this}f64(C,M){return this._appendField(C,A.oS,M),this}u8(C,M){return this._appendField(C,A.D_,M),this}u16(C,M){return this._appendField(C,A.av,M),this}i8(C,M){return this._appendField(C,A.Hz,M),this}vec2i8(C,M){return this._appendField(C,A.Vs,M),this}vec2i16(C,M){return this._appendField(C,A.or,M),this}vec2u8(C,M){return this._appendField(C,A.xA,M),this}vec4u16(C,M){return this._appendField(C,A.v6,M),this}u32(C,M){return this._appendField(C,A.Nu,M),this}_appendField(C,M,R){const F=M.ElementCount*(0,O.n1)(M.ElementType);this.fields.set(C,{size:F,constructor:M,offset:this.stride,optional:R}),this.stride+=F,this.fieldNames.push(C)}alignTo(C){return this.stride=Math.floor((this.stride+C-1)/C)*C,this}hasField(C){return this.fieldNames.includes(C)}createBuffer(C){return new D(this,C)}createView(C){return new D(this,C)}clone(){const C=new w;return C.stride=this.stride,C.fields=new Map,this.fields.forEach((M,R)=>C.fields.set(R,M)),C.fieldNames=this.fieldNames.slice(),C.BufferType=this.BufferType,C}}function I(){return new w}},52382:(fe,z,u)=>{u.d(z,{q:()=>I});var A=u(6945),O=u(51040),D=u(95285),w=u(17625);function I(S,C){C.output===A.H.Color&&C.receiveShadows?(S.varyings.add("linearDepth","float"),S.vertex.code.add(w.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):C.output===A.H.Depth||C.output===A.H.Shadow?(S.include(O.up,C),S.varyings.add("linearDepth","float"),S.vertex.uniforms.add(new D.A("nearFar",(M,R)=>R.camera.nearFar)),S.vertex.code.add(w.H`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):S.vertex.code.add(w.H`void forwardLinearDepth() {}`)}},73132:(fe,z,u)=>{u.d(z,{w:()=>O});var A=u(17625);function O(D){D.vertex.code.add(A.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},6945:(fe,z,u)=>{var A,O;u.d(z,{H:()=>A}),(O=A||(A={}))[O.Color=0]="Color",O[O.Depth=1]="Depth",O[O.Normal=2]="Normal",O[O.Shadow=3]="Shadow",O[O.Highlight=4]="Highlight",O[O.Draped=5]="Draped",O[O.Occlusion=6]="Occlusion",O[O.Alpha=7]="Alpha",O[O.COUNT=8]="COUNT"},78925:(fe,z,u)=>{u.d(z,{f5:()=>U});var A=u(62208),O=u(28347),D=u(43703),w=u(84161),I=u(28093),S=u(77739),M=(u(97139),u(17625));function U(q,k){!function X(q,k,ae){if(!k.hasSlicePlane){const me=M.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return k.hasSliceInVertexProgram&&q.vertex.code.add(me),void q.fragment.code.add(me)}q.extensions.add("GL_OES_standard_derivatives"),k.hasSliceInVertexProgram&&q.vertex.uniforms.add(ae),q.fragment.uniforms.add(ae);const J=M.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,ie=M.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,Z=k.hasSliceHighlight?M.H`
        ${ie}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:M.H`#define highlightSlice(_color_, _pos_) (_color_)`;k.hasSliceInVertexProgram&&q.vertex.code.add(J),q.fragment.code.add(J),q.fragment.code.add(Z)}(q,k,[new S.B("slicePlaneOrigin",(ae,J)=>function K(q,k,ae){if((0,A.Wi)(ae.slicePlane))return I.Z;const J=j(q,k,ae),ie=$(J,ae.slicePlane),Z=ee(q,J,ae);return(0,A.pC)(Z)?(0,w.m)(Q,ie,Z):ie}(k,ae,J)),new S.B("slicePlaneBasis1",(ae,J)=>{var ie;return V(k,ae,J,null==(ie=(0,A.Wg)(J.slicePlane))?void 0:ie.basis1)}),new S.B("slicePlaneBasis2",(ae,J)=>{var ie;return V(k,ae,J,null==(ie=(0,A.Wg)(J.slicePlane))?void 0:ie.basis2)})])}function j(q,k,ae){return q.instancedDoublePrecision?(0,w.s)(G,ae.camera.viewInverseTransposeMatrix[3],ae.camera.viewInverseTransposeMatrix[7],ae.camera.viewInverseTransposeMatrix[11]):k.slicePlaneLocalOrigin}function $(q,k){return(0,A.pC)(q)?(0,w.b)(Q,k.origin,q):k.origin}function ee(q,k,ae){return q.hasSliceTranslatedView?(0,A.pC)(k)?(0,O.j)(Te,ae.camera.viewMatrix,k):ae.camera.viewMatrix:null}function V(q,k,ae,J){if((0,A.Wi)(J)||(0,A.Wi)(ae.slicePlane))return I.Z;const ie=j(q,k,ae),Z=$(ie,ae.slicePlane),me=ee(q,ie,ae);return(0,A.pC)(me)?((0,w.a)(le,J,Z),(0,w.m)(Q,Z,me),(0,w.m)(le,le,me),(0,w.b)(le,le,Q)):J}const G=(0,I.c)(),Q=(0,I.c)(),le=(0,I.c)(),Te=(0,D.c)()},24255:(fe,z,u)=>{u.d(z,{w:()=>O});var A=u(17625);function O(D,w={hasModelTransformation:!1,linearDepth:!1}){if(w.hasModelTransformation)return w.linearDepth?void D.vertex.code.add(A.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void D.vertex.code.add(A.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);D.vertex.code.add(w.linearDepth?A.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`:A.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},60355:(fe,z,u)=>{u.d(z,{f:()=>F});var A=u(84161),O=u(28093),D=u(6945),w=u(7228),I=u(77739),S=u(17625),C=u(63123),M=u(16396),R=u(2757);function F(X,j){j.instanced&&j.instancedDoublePrecision&&(X.attributes.add(M.T.MODELORIGINHI,"vec3"),X.attributes.add(M.T.MODELORIGINLO,"vec3"),X.attributes.add(M.T.MODEL,"mat3"),X.attributes.add(M.T.MODELNORMAL,"mat3"));const $=X.vertex;j.instancedDoublePrecision&&($.include(w.$,j),$.uniforms.add(new I.B("viewOriginHi",(ee,K)=>(0,R.U8)((0,A.s)(U,K.camera.viewInverseTransposeMatrix[3],K.camera.viewInverseTransposeMatrix[7],K.camera.viewInverseTransposeMatrix[11]),U))),$.uniforms.add(new I.B("viewOriginLo",(ee,K)=>(0,R.GB)((0,A.s)(U,K.camera.viewInverseTransposeMatrix[3],K.camera.viewInverseTransposeMatrix[7],K.camera.viewInverseTransposeMatrix[11]),U)))),$.code.add(S.H`
    vec3 calculateVPos() {
      ${j.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),$.code.add(S.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${j.instancedDoublePrecision?S.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),$.code.add(S.H`
    vec3 dpNormal(vec4 _normal) {
      ${j.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),j.output===D.H.Normal&&($.uniforms.add(new C.g("viewNormal",(ee,K)=>K.camera.viewInverseTransposeMatrix)),$.code.add(S.H`
    vec3 dpNormalView(vec4 _normal) {
      ${j.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),j.hasVertexTangents&&$.code.add(S.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${j.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}const U=(0,O.c)()},26859:(fe,z,u)=>{u.d(z,{O:()=>w,h:()=>I});var A=u(17625);function O(S){const C=A.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;S.fragment.code.add(C),S.vertex.code.add(C)}var I,S,D=u(16396);function w(S,C){C.normalType===I.Attribute&&(S.attributes.add(D.T.NORMAL,"vec3"),S.vertex.code.add(A.H`vec3 normalModel() {
return normal;
}`)),C.normalType===I.CompressedAttribute&&(S.include(O),S.attributes.add(D.T.NORMALCOMPRESSED,"vec2"),S.vertex.code.add(A.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),C.normalType===I.ScreenDerivative&&(S.extensions.add("GL_OES_standard_derivatives"),S.fragment.code.add(A.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}(S=I||(I={}))[S.Attribute=0]="Attribute",S[S.CompressedAttribute=1]="CompressedAttribute",S[S.Ground=2]="Ground",S[S.ScreenDerivative=3]="ScreenDerivative",S[S.COUNT=4]="COUNT"},84833:(fe,z,u)=>{u.d(z,{f:()=>D});var A=u(17625),O=u(16396);function D(w){w.attributes.add(O.T.POSITION,"vec3"),w.vertex.code.add(A.H`vec3 positionModel() { return position; }`)}},72326:(fe,z,u)=>{u.d(z,{R:()=>C});var A=u(9044),O=u(17625);function D(M){M.vertex.code.add(O.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${O.H.int(A.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${O.H.int(A.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${O.H.int(A.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${O.H.int(A.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var w=u(18952),I=u(16396),S=u(50229);function C(M,R){R.hasSymbolColors?(M.include(D),M.attributes.add(I.T.SYMBOLCOLOR,"vec4"),M.varyings.add("colorMixMode","mediump float"),M.vertex.code.add(O.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(M.fragment.uniforms.add(new w._("colorMixMode",F=>S.FZ[F.colorMixMode])),M.vertex.code.add(O.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},36603:(fe,z,u)=>{u.d(z,{D:()=>I,N:()=>w});var w,S,A=u(94573),O=u(17625),D=u(16396);function I(S,C){switch(C.textureCoordinateType){case w.Default:return S.attributes.add(D.T.UV0,"vec2"),S.varyings.add("vuv0","vec2"),void S.vertex.code.add(O.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case w.Atlas:return S.attributes.add(D.T.UV0,"vec2"),S.varyings.add("vuv0","vec2"),S.attributes.add(D.T.UVREGION,"vec4"),S.varyings.add("vuvRegion","vec4"),void S.vertex.code.add(O.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case w.None:return void S.vertex.code.add(O.H`void forwardTextureCoordinates() {}`);default:(0,A.Bg)(C.textureCoordinateType);case w.COUNT:return}}(S=w||(w={}))[S.None=0]="None",S[S.Default=1]="Default",S[S.Atlas=2]="Atlas",S[S.COUNT=3]="COUNT"},58173:(fe,z,u)=>{u.d(z,{c:()=>D});var A=u(17625),O=u(16396);function D(w,I){I.hasVertexColors?(w.attributes.add(O.T.COLOR,"vec4"),w.varyings.add("vColor","vec4"),w.vertex.code.add(A.H`void forwardVertexColor() { vColor = color; }`),w.vertex.code.add(A.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):w.vertex.code.add(A.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},21799:(fe,z,u)=>{u.d(z,{Bb:()=>M,d4:()=>R});var A=u(550),D=(u(4794),u(26859)),w=u(51040),I=u(17625),S=u(9546),C=u(91574);function M(U,X){X.normalType===D.h.Attribute||X.normalType===D.h.CompressedAttribute?(U.include(D.O,X),U.varyings.add("vNormalWorld","vec3"),U.varyings.add("vNormalView","vec3"),U.vertex.uniforms.add([new S.j("transformNormalGlobalFromModel",j=>j.transformNormalGlobalFromModel),new C.c("transformNormalViewFromGlobal",j=>j.transformNormalViewFromGlobal)]),U.vertex.code.add(I.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):X.normalType===D.h.Ground?(U.include(w.up,X),U.varyings.add("vNormalWorld","vec3"),U.vertex.code.add(I.H`
    void forwardNormal() {
      vNormalWorld = ${X.spherical?I.H`normalize(vPositionWorldCameraRelative);`:I.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):U.vertex.code.add(I.H`void forwardNormal() {}`)}class R extends w.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,A.c)()}}},51040:(fe,z,u)=>{u.d(z,{su:()=>$,up:()=>j});var A=u(550),O=u(43703),w=(u(14658),u(28093)),I=u(84833),S=u(7228),C=u(77739),M=u(97139),R=u(17625),F=u(9546),U=u(91574),X=u(63123);function j(K,V){K.include(I.f);const G=K.vertex;G.include(S.$,V),K.varyings.add("vPositionWorldCameraRelative","vec3"),K.varyings.add("vPosition_view","vec3"),G.uniforms.add([new M.J("transformWorldFromViewTH",Q=>Q.transformWorldFromViewTH),new M.J("transformWorldFromViewTL",Q=>Q.transformWorldFromViewTL),new U.c("transformViewFromCameraRelativeRS",Q=>Q.transformViewFromCameraRelativeRS),new X.g("transformProjFromView",Q=>Q.transformProjFromView),new F.j("transformWorldFromModelRS",Q=>Q.transformWorldFromModelRS),new C.B("transformWorldFromModelTH",Q=>Q.transformWorldFromModelTH),new C.B("transformWorldFromModelTL",Q=>Q.transformWorldFromModelTL)]),G.code.add(R.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),G.code.add(R.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${V.spherical?R.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:R.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),K.fragment.uniforms.add(new M.J("transformWorldFromViewTL",Q=>Q.transformWorldFromViewTL)),G.code.add(R.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),K.fragment.code.add(R.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class $ extends R.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,w.c)(),this.transformWorldFromViewTL=(0,w.c)(),this.transformViewFromCameraRelativeRS=(0,A.c)(),this.transformProjFromView=(0,O.c)()}}},85982:(fe,z,u)=>{u.d(z,{i:()=>I});var A=u(94573),O=u(36603),D=u(17625);function w(S){S.extensions.add("GL_EXT_shader_texture_lod"),S.extensions.add("GL_OES_standard_derivatives"),S.fragment.code.add(D.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function I(S,C){switch(S.include(O.D,C),S.fragment.code.add(D.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${C.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),C.textureCoordinateType){case O.N.Default:return void S.fragment.code.add(D.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case O.N.Atlas:return S.include(w),void S.fragment.code.add(D.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,A.Bg)(C.textureCoordinateType);case O.N.None:case O.N.COUNT:return}}},52071:(fe,z,u)=>{u.d(z,{L:()=>U});var A=u(993),O=u(4794),D=u(69960),w=u(17625);function I($){$.vertex.code.add(w.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),$.vertex.code.add(w.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),$.vertex.code.add(w.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),$.vertex.code.add(w.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),$.vertex.code.add(w.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),$.vertex.code.add(w.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),$.vertex.code.add(w.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const R=(0,O.c)();var F=u(99198);function U($,ee){const K=$.vertex;ee.hasVerticalOffset?(function j($){$.uniforms.add(new D.N("verticalOffset",(ee,K)=>{const{minWorldLength:V,maxWorldLength:G,screenLength:Q}=ee.verticalOffset,le=Math.tan(.5*K.camera.fovY)/(.5*K.camera.fullViewport[3]);return(0,A.s)(X,Q*(K.camera.pixelRatio||1),le,V,G)}))}(K),ee.hasScreenSizePerspective&&($.include(I),function C($){$.uniforms.add(new D.N("screenSizePerspectiveAlignment",ee=>function M($){return(0,A.s)(R,$.parameters.divisor,$.parameters.offset,$.parameters.minPixelSize,$.paddingPixelsOverride)}(ee.screenSizePerspectiveAlignment||ee.screenSizePerspective)))}(K),(0,F.h)($.vertex,ee)),K.code.add(w.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${ee.spherical?w.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:w.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${ee.hasScreenSizePerspective?w.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:w.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):K.code.add(w.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const X=(0,O.c)()},92580:(fe,z,u)=>{u.d(z,{s:()=>Te});var A=u(6945),O=u(78925),D=u(24255),w=u(26859),I=u(36603),S=u(21799),C=u(19278),M=u(17625);function R(q,k){q.fragment.include(C.n),k.output===A.H.Shadow?(q.extensions.add("GL_OES_standard_derivatives"),q.fragment.code.add(M.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):k.output===A.H.Depth&&q.fragment.code.add(M.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}u(99770);var U=u(4794),X=u(95285),j=u(35387);const $=(0,U.f)(1,1,0,1),ee=(0,U.f)(1,0,1,1);function K(q){q.fragment.uniforms.add(new j.A("depthTex",(k,ae)=>ae.highlightDepthTexture)),q.fragment.uniforms.add(new X.A("highlightViewportPixelSz",(k,ae)=>ae.inverseViewport)),q.fragment.constants.add("occludedHighlightFlag","vec4",$).add("unoccludedHighlightFlag","vec4",ee),q.fragment.code.add(M.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}var G=u(67938),Q=u(72397),le=u(99198);function Te(q,k){const ae=q.vertex.code,J=q.fragment.code,ie=k.hasModelTransformation;k.output!==A.H.Depth&&k.output!==A.H.Shadow||((0,le.S)(q,k),q.include(D.w,{linearDepth:!0,hasModelTransformation:ie}),q.include(I.D,k),q.include(G.k,k),q.include(R,k),q.include(O.f5,k),q.vertex.uniforms.add(new X.A("nearFar",(Z,me)=>me.camera.nearFar)),q.varyings.add("depth","float"),k.hasColorTexture&&q.fragment.uniforms.add(new j.A("tex",Z=>Z.texture)),ae.add(M.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${ie?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),q.include(Q.z,k),J.add(M.H`
      void main(void) {
        discardBySlice(vpos);
        ${k.hasColorTexture?M.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),k.output===A.H.Normal&&((0,le.S)(q,k),q.include(D.w,{linearDepth:!1,hasModelTransformation:ie}),q.include(w.O,k),q.include(S.Bb,k),q.include(I.D,k),q.include(G.k,k),k.hasColorTexture&&q.fragment.uniforms.add(new j.A("tex",Z=>Z.texture)),q.varyings.add("vPositionView","vec3"),ae.add(M.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${k.normalType===w.h.Attribute?M.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${ie?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),q.include(O.f5,k),q.include(Q.z,k),J.add(M.H`
      void main() {
        discardBySlice(vpos);
        ${k.hasColorTexture?M.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${k.normalType===w.h.ScreenDerivative?M.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:M.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),k.output===A.H.Highlight&&((0,le.S)(q,k),q.include(D.w,{linearDepth:!1,hasModelTransformation:ie}),q.include(I.D,k),q.include(G.k,k),k.hasColorTexture&&q.fragment.uniforms.add(new j.A("tex",Z=>Z.texture)),ae.add(M.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${ie?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),q.include(O.f5,k),q.include(Q.z,k),q.include(K),J.add(M.H`
      void main() {
        discardBySlice(vpos);
        ${k.hasColorTexture?M.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},29052:(fe,z,u)=>{u.d(z,{Q:()=>R});var A=u(36603),O=u(85982),D=u(96395),w=u(17625),I=u(16073),S=u(35387),C=u(37847),M=u(16396);function R(F,U){const X=F.fragment;if(U.hasVertexTangents?(F.attributes.add(M.T.TANGENT,"vec4"),F.varyings.add("vTangent","vec4"),X.code.add(U.doubleSidedMode===D.q.WindingOrder?w.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:w.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(F.extensions.add("GL_OES_standard_derivatives"),X.code.add(w.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),U.textureCoordinateType!==A.N.None){F.include(O.i,U);const j=U.supportsTextureAtlas;X.uniforms.add(U.pbrTextureBindType===C.P.Pass?(0,S.J)("normalTexture",$=>$.textureNormal,j):(0,I.F)("normalTexture",$=>$.textureNormal,j)),X.code.add(w.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${U.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},54662:(fe,z,u)=>{u.d(z,{K:()=>S});var A=u(993),O=u(4794),D=u(69960),w=u(17625),I=u(35387);function S(M,R){const F=M.fragment;R.receiveAmbientOcclusion?(F.uniforms.add([new I.A("ssaoTex",(U,X)=>X.ssaoHelper.colorTexture),new D.N("viewportPixelSz",(U,X)=>(0,A.s)(C,X.camera.fullViewport[0],X.camera.fullViewport[1],1/X.ssaoHelper.width,1/X.ssaoHelper.height))]),F.code.add(w.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):F.code.add(w.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const C=(0,O.c)()},48683:(fe,z,u)=>{u.d(z,{X:()=>Te});var A=u(84161),O=u(28093),D=u(993),w=u(4794),I=u(92724),S=u(97139),C=u(69960),M=u(17625);function R(q,k){const ae=q.fragment,J=void 0!==k.lightingSphericalHarmonicsOrder?k.lightingSphericalHarmonicsOrder:2;0===J?(ae.uniforms.add(new S.J("lightingAmbientSH0",(ie,Z)=>(0,A.s)(F,Z.lighting.sh.r[0],Z.lighting.sh.g[0],Z.lighting.sh.b[0]))),ae.code.add(M.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===J?(ae.uniforms.add([new C.N("lightingAmbientSH_R",(ie,Z)=>(0,D.s)(U,Z.lighting.sh.r[0],Z.lighting.sh.r[1],Z.lighting.sh.r[2],Z.lighting.sh.r[3])),new C.N("lightingAmbientSH_G",(ie,Z)=>(0,D.s)(U,Z.lighting.sh.g[0],Z.lighting.sh.g[1],Z.lighting.sh.g[2],Z.lighting.sh.g[3])),new C.N("lightingAmbientSH_B",(ie,Z)=>(0,D.s)(U,Z.lighting.sh.b[0],Z.lighting.sh.b[1],Z.lighting.sh.b[2],Z.lighting.sh.b[3]))]),ae.code.add(M.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===J&&(ae.uniforms.add([new S.J("lightingAmbientSH0",(ie,Z)=>(0,A.s)(F,Z.lighting.sh.r[0],Z.lighting.sh.g[0],Z.lighting.sh.b[0])),new C.N("lightingAmbientSH_R1",(ie,Z)=>(0,D.s)(U,Z.lighting.sh.r[1],Z.lighting.sh.r[2],Z.lighting.sh.r[3],Z.lighting.sh.r[4])),new C.N("lightingAmbientSH_G1",(ie,Z)=>(0,D.s)(U,Z.lighting.sh.g[1],Z.lighting.sh.g[2],Z.lighting.sh.g[3],Z.lighting.sh.g[4])),new C.N("lightingAmbientSH_B1",(ie,Z)=>(0,D.s)(U,Z.lighting.sh.b[1],Z.lighting.sh.b[2],Z.lighting.sh.b[3],Z.lighting.sh.b[4])),new C.N("lightingAmbientSH_R2",(ie,Z)=>(0,D.s)(U,Z.lighting.sh.r[5],Z.lighting.sh.r[6],Z.lighting.sh.r[7],Z.lighting.sh.r[8])),new C.N("lightingAmbientSH_G2",(ie,Z)=>(0,D.s)(U,Z.lighting.sh.g[5],Z.lighting.sh.g[6],Z.lighting.sh.g[7],Z.lighting.sh.g[8])),new C.N("lightingAmbientSH_B2",(ie,Z)=>(0,D.s)(U,Z.lighting.sh.b[5],Z.lighting.sh.b[6],Z.lighting.sh.b[7],Z.lighting.sh.b[8]))]),ae.code.add(M.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),k.pbrMode!==I.f7.Normal&&k.pbrMode!==I.f7.Schematic||ae.code.add(M.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const F=(0,O.c)(),U=(0,w.c)();var X=u(54662),j=u(83119);function $(q,k){const ae=q.fragment;k.isGround?ae.uniforms.add(new j.p("lightingFixedFactor",(J,ie)=>(1-ie.lighting.groundLightingFactor)*(1-ie.lighting.globalFactor))):ae.constants.add("lightingFixedFactor","float",0),ae.uniforms.add([new S.J("lightingMainDirection",(J,ie)=>ie.lighting.lightingMainDirection),new S.J("lightingMainIntensity",(J,ie)=>ie.lighting.mainLight.intensity)]),ae.code.add(M.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var ee=u(98898),K=u(39337),V=u(85930),G=u(37847);class Q extends V.x{constructor(k,ae){super(k,"bool",G.P.Pass,(J,ie,Z)=>J.setUniform1b(k,ae(ie,Z)))}}var le=u(37290);function Te(q,k){const ae=q.fragment;q.include(X.K,k),k.pbrMode!==I.f7.Disabled&&q.include(ee.T,k),q.include(R,k),ae.constants.add("ambientBoostFactor","float",le.V),q.include(K.e),ae.code.add(M.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${k.pbrMode===I.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),ae.uniforms.add(new S.J("lightingMainDirection",(J,ie)=>ie.lighting.lightingMainDirection)),ae.code.add(M.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${k.spherical?M.H`normalize(vPosWorld)`:M.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ae.uniforms.add([new j.p("lightingGlobalFactor",(J,ie)=>ie.lighting.globalFactor),new S.J("lightingMainIntensity",(J,ie)=>ie.lighting.mainLight.intensity)]),ae.code.add(M.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),k.pbrMode===I.f7.Disabled||k.pbrMode===I.f7.WaterOnIntegratedMesh?(q.include($,k),ae.code.add(M.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):k.pbrMode!==I.f7.Normal&&k.pbrMode!==I.f7.Schematic||(ae.code.add(M.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),ae.code.add(M.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),k.useFillLights?ae.uniforms.add(new Q("hasFillLights",(J,ie)=>ie.enableFillLights)):ae.constants.add("hasFillLights","bool",!1),ae.code.add(M.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),ae.uniforms.add([new j.p("lightingSpecularStrength",(J,ie)=>ie.lighting.mainLight.specularStrength),new j.p("lightingEnvironmentStrength",(J,ie)=>ie.lighting.mainLight.environmentStrength)]),ae.code.add(M.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),ae.code.add(M.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${k.pbrMode===I.f7.Schematic?M.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:M.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},98486:(fe,z,u)=>{u.d(z,{l:()=>S});var A=u(19278),O=u(17625);function D(M){M.include(A.n),M.code.add(O.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}var w=u(95285),I=u(35387);function S(M,R){R.hasMultipassTerrain&&(M.fragment.include(D),M.fragment.uniforms.add(new I.A("terrainDepthTexture",(F,U)=>U.multipassTerrain.linearDepthTexture)),M.fragment.uniforms.add(new w.A("nearFar",(F,U)=>U.camera.nearFar)),M.fragment.uniforms.add(new w.A("inverseViewport",(F,U)=>U.inverseViewport)),M.fragment.code.add(O.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${R.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},96395:(fe,z,u)=>{u.d(z,{k:()=>D,q:()=>w});var w,I,A=u(94573),O=u(17625);function D(I,S){const C=I.fragment;switch(C.code.add(O.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),S.doubleSidedMode){case w.None:C.code.add(O.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case w.View:C.code.add(O.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case w.WindingOrder:C.code.add(O.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,A.Bg)(S.doubleSidedMode);case w.COUNT:}}(I=w||(w={}))[I.None=0]="None",I[I.View=1]="View",I[I.WindingOrder=2]="WindingOrder",I[I.COUNT=3]="COUNT"},98898:(fe,z,u)=>{u.d(z,{T:()=>I});var A=u(17625);function O(S){const C=S.fragment.code;C.add(A.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),C.add(A.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),C.add(A.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var D=u(92724),w=u(39337);function I(S,C){const M=S.fragment.code;S.include(w.e),C.pbrMode===D.f7.Water||C.pbrMode===D.f7.WaterOnIntegratedMesh?(M.add(A.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${C.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),M.add(A.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),M.add(A.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),M.add(A.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),M.add(A.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):C.pbrMode!==D.f7.Normal&&C.pbrMode!==D.f7.Schematic||(S.include(O),M.add(A.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),M.add(A.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),M.add(A.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),M.add(A.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),M.add(A.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),M.add(A.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},92724:(fe,z,u)=>{u.d(z,{f7:()=>U,jV:()=>j});var U,$,A=u(14658),O=u(85982),D=u(77739),w=u(97139),I=u(17625),S=u(16073),C=u(35387),M=u(37847);function j($,ee){const K=$.fragment,V=ee.hasMetalnessAndRoughnessTexture||ee.hasEmissionTexture||ee.hasOcclusionTexture;if(ee.pbrMode===U.Normal&&V&&$.include(O.i,ee),ee.pbrMode!==U.Schematic)if(ee.pbrMode!==U.Disabled){if(ee.pbrMode===U.Normal){K.code.add(I.H`vec3 mrr;
vec3 emission;
float occlusion;`);const G=ee.supportsTextureAtlas,Q=ee.pbrTextureBindType;ee.hasMetalnessAndRoughnessTexture&&(K.uniforms.add(Q===M.P.Pass?(0,C.J)("texMetallicRoughness",le=>le.textureMetallicRoughness,G):(0,S.F)("texMetallicRoughness",le=>le.textureMetallicRoughness,G)),K.code.add(I.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),ee.hasEmissionTexture&&(K.uniforms.add(Q===M.P.Pass?(0,C.J)("texEmission",le=>le.textureEmissive,G):(0,S.F)("texEmission",le=>le.textureEmissive,G)),K.code.add(I.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),ee.hasOcclusionTexture?(K.uniforms.add(Q===M.P.Pass?(0,C.J)("texOcclusion",le=>le.textureOcclusion,G):(0,S.F)("texOcclusion",le=>le.textureOcclusion,G)),K.code.add(I.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):K.code.add(I.H`float getBakedOcclusion() { return 1.0; }`),K.uniforms.add(Q===M.P.Pass?[new w.J("emissionFactor",le=>le.emissiveFactor),new w.J("mrrFactors",le=>le.mrrFactors)]:[new D.B("emissionFactor",le=>le.emissiveFactor),new D.B("mrrFactors",le=>le.mrrFactors)]),K.code.add(I.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${V?"vtc.uv = vuv0;":""}
      ${ee.hasMetalnessAndRoughnessTexture?ee.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${ee.hasEmissionTexture?ee.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${ee.hasOcclusionTexture?ee.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}}else K.code.add(I.H`float getBakedOcclusion() { return 1.0; }`);else K.code.add(I.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}u(44621),(0,A.f)(0,.6,.2),($=U||(U={}))[$.Disabled=0]="Disabled",$[$.Normal=1]="Normal",$[$.Schematic=2]="Schematic",$[$.Water=3]="Water",$[$.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",$[$.COUNT=5]="COUNT"},39337:(fe,z,u)=>{u.d(z,{e:()=>O});var A=u(17625);function O(D){D.vertex.code.add(A.H`const float PI = 3.141592653589793;`),D.fragment.code.add(A.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},56693:(fe,z,u)=>{u.d(z,{XE:()=>j,hb:()=>X}),u(28093);var O=u(19278),D=u(69960),w=u(83119),I=u(18952),S=u(17625),C=u(85930),M=u(37847);class R extends C.x{constructor(K,V,G,Q){switch(V){case M.P.Pass:case M.P.Draw:return void super(K,"mat4",V,(le,Te,q)=>le.setUniformMatrix4fv(K,G(Te,q)),Q)}}}var F=u(35387);function X(ee,K){K.receiveShadows&&(ee.fragment.uniforms.add(new R("shadowMapMatrix",M.P.Pass,(V,G)=>G.shadowMap.getShadowMapMatrices(V.origin),4)),$(ee))}function j(ee,K){K.receiveShadows&&(ee.fragment.uniforms.add(new R("shadowMapMatrix",M.P.Draw,(V,G)=>G.shadowMap.getShadowMapMatrices(V.origin),4)),$(ee))}function $(ee){const K=ee.fragment;K.include(O.n),K.uniforms.add([new F.A("shadowMapTex",(V,G)=>G.shadowMap.depthTexture),new I._("numCascades",(V,G)=>G.shadowMap.numCascades),new D.N("cascadeDistances",(V,G)=>G.shadowMap.cascadeDistances),new w.p("depthHalfPixelSz",(V,G)=>.5/G.shadowMap.textureSize)]),K.code.add(S.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}},67938:(fe,z,u)=>{u.d(z,{k:()=>$});var A=u(97139),O=u(85930),D=u(37847);class w extends O.x{constructor(K,V,G){super(K,"vec4",D.P.Pass,(Q,le,Te)=>Q.setUniform4fv(K,V(le,Te)),G)}}class I extends O.x{constructor(K,V,G){super(K,"float",D.P.Pass,(Q,le,Te)=>Q.setUniform1fv(K,V(le,Te)),G)}}var S=u(17625),C=u(91574),M=u(16396);function $(ee,K){K.hasVvInstancing&&(K.vvSize||K.vvColor)&&ee.attributes.add(M.T.INSTANCEFEATUREATTRIBUTE,"vec4");const V=ee.vertex;K.vvSize?(V.uniforms.add(new A.J("vvSizeMinSize",G=>G.vvSizeMinSize)),V.uniforms.add(new A.J("vvSizeMaxSize",G=>G.vvSizeMaxSize)),V.uniforms.add(new A.J("vvSizeOffset",G=>G.vvSizeOffset)),V.uniforms.add(new A.J("vvSizeFactor",G=>G.vvSizeFactor)),V.uniforms.add(new C.c("vvSymbolRotationMatrix",G=>G.vvSymbolRotationMatrix)),V.uniforms.add(new A.J("vvSymbolAnchor",G=>G.vvSymbolAnchor)),V.code.add(S.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),V.code.add(S.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${K.hasVvInstancing?S.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):V.code.add(S.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),K.vvColor?(V.constants.add("vvColorNumber","int",8),K.hasVvInstancing&&V.uniforms.add([new I("vvColorValues",G=>G.vvColorValues,8),new w("vvColorColors",G=>G.vvColorColors,8)]),V.code.add(S.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${K.hasVvInstancing?S.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):V.code.add(S.H`vec4 vvColor() { return vec4(1.0); }`)}u(550),u(28093),u(40723)},67022:(fe,z,u)=>{u.d(z,{F:()=>A,b:()=>O});const A=.1,O=.001},72397:(fe,z,u)=>{u.d(z,{z:()=>R});var A=u(67022),O=u(17625);function D(X){X.fragment.code.add(O.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${O.H.float(A.b)}) { discard; } }
  `)}u(85930),u(37847);var C=u(83119),M=u(42743);function R(X,j){!function U(X,j,$){const ee=X.fragment;switch(j.alphaDiscardMode!==M.JJ.Mask&&j.alphaDiscardMode!==M.JJ.MaskBlend||ee.uniforms.add($),j.alphaDiscardMode){case M.JJ.Blend:return X.include(D);case M.JJ.Opaque:ee.code.add(O.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case M.JJ.Mask:ee.code.add(O.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case M.JJ.MaskBlend:X.fragment.code.add(O.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(X,j,new C.p("textureAlphaCutoff",$=>$.textureAlphaCutoff))}},7228:(fe,z,u)=>{u.d(z,{$:()=>D,I:()=>w});var A=u(8314),O=u(17625);function D({code:I},S){I.add(S.doublePrecisionRequiresObfuscation?O.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:O.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function w(I){return!!(0,A.Z)("force-double-precision-obfuscation")||I.driverTest.doublePrecisionRequiresObfuscation}},411:(fe,z,u)=>{u.d(z,{a:()=>w});var A=u(6945),O=u(17625),D=u(81653);function w(I,S){const C=O.H`
  /*
  *  ${S.name}
  *  ${S.output===A.H.Color?"RenderOutput: Color":S.output===A.H.Depth?"RenderOutput: Depth":S.output===A.H.Shadow?"RenderOutput: Shadow":S.output===A.H.Normal?"RenderOutput: Normal":S.output===A.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,D.CG)()&&(I.fragment.code.add(C),I.vertex.code.add(C))}},49974:(fe,z,u)=>{u.d(z,{y:()=>w});var A=u(9044),O=u(17625);function D(I){I.code.add(O.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function w(I){I.include(D),I.code.add(O.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${O.H.int(A.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${O.H.int(A.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${O.H.int(A.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${O.H.int(A.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${O.H.int(A.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},19278:(fe,z,u)=>{u.d(z,{n:()=>O});var A=u(17625);function O(D){D.code.add(A.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},99198:(fe,z,u)=>{u.d(z,{h:()=>U,S:()=>X});var A=u(28347),O=u(55494),D=u(84161),w=u(28093),I=u(77739),S=u(97139),C=u(85930),M=u(37847);class R extends C.x{constructor(K,V){super(K,"mat4",M.P.Draw,(G,Q,le)=>G.setUniformMatrix4fv(K,V(Q,le)))}}var F=u(63123);function U(ee,K){K.instancedDoublePrecision?ee.constants.add("cameraPosition","vec3",w.Z):ee.uniforms.add(new I.B("cameraPosition",(V,G)=>(0,D.s)($,G.camera.viewInverseTransposeMatrix[3]-V.origin[0],G.camera.viewInverseTransposeMatrix[7]-V.origin[1],G.camera.viewInverseTransposeMatrix[11]-V.origin[2])))}function X(ee,K){if(ee.vertex.uniforms.add(new F.g("proj",(G,Q)=>Q.camera.projectionMatrix)),K.instancedDoublePrecision){const G=(le,Te)=>(0,D.s)($,Te.camera.viewInverseTransposeMatrix[3],Te.camera.viewInverseTransposeMatrix[7],Te.camera.viewInverseTransposeMatrix[11]);ee.vertex.uniforms.add(new F.g("view",(le,Te)=>(0,A.j)(j,Te.camera.viewMatrix,G(le,Te))));const Q=new S.J("localOrigin",G);return ee.vertex.uniforms.add(Q),Q}ee.vertex.uniforms.add(new R("view",(G,Q)=>(0,A.j)(j,Q.camera.viewMatrix,G.origin)));const V=new I.B("localOrigin",G=>G.origin);return ee.vertex.uniforms.add(V),V}const j=(0,O.c)(),$=(0,w.c)()},95285:(fe,z,u)=>{u.d(z,{A:()=>D});var A=u(85930),O=u(37847);class D extends A.x{constructor(I,S){super(I,"vec2",O.P.Pass,(C,M,R)=>C.setUniform2fv(I,S(M,R)))}}},77739:(fe,z,u)=>{u.d(z,{B:()=>D});var A=u(85930),O=u(37847);class D extends A.x{constructor(I,S){super(I,"vec3",O.P.Draw,(C,M,R)=>C.setUniform3fv(I,S(M,R)))}}},97139:(fe,z,u)=>{u.d(z,{J:()=>D});var A=u(85930),O=u(37847);class D extends A.x{constructor(I,S){super(I,"vec3",O.P.Pass,(C,M,R)=>C.setUniform3fv(I,S(M,R)))}}},69960:(fe,z,u)=>{u.d(z,{N:()=>D});var A=u(85930),O=u(37847);class D extends A.x{constructor(I,S){super(I,"vec4",O.P.Pass,(C,M,R)=>C.setUniform4fv(I,S(M,R)))}}},83119:(fe,z,u)=>{u.d(z,{p:()=>D});var A=u(85930),O=u(37847);class D extends A.x{constructor(I,S){super(I,"float",O.P.Pass,(C,M,R)=>C.setUniform1f(I,S(M,R)))}}},18952:(fe,z,u)=>{u.d(z,{_:()=>D});var A=u(85930),O=u(37847);class D extends A.x{constructor(I,S){super(I,"int",O.P.Pass,(C,M,R)=>C.setUniform1i(I,S(M,R)))}}},9546:(fe,z,u)=>{u.d(z,{j:()=>D});var A=u(85930),O=u(37847);class D extends A.x{constructor(I,S){super(I,"mat3",O.P.Draw,(C,M,R)=>C.setUniformMatrix3fv(I,S(M,R)))}}},91574:(fe,z,u)=>{u.d(z,{c:()=>D});var A=u(85930),O=u(37847);class D extends A.x{constructor(I,S){super(I,"mat3",O.P.Pass,(C,M,R)=>C.setUniformMatrix3fv(I,S(M,R)))}}},63123:(fe,z,u)=>{u.d(z,{g:()=>D});var A=u(85930),O=u(37847);class D extends A.x{constructor(I,S){super(I,"mat4",O.P.Pass,(C,M,R)=>C.setUniformMatrix4fv(I,S(M,R)))}}},46524:(fe,z,u)=>{u.d(z,{B:()=>O});var A=u(85930);class O extends A.x{constructor(w){super(w,"mat4")}}},22355:(fe,z,u)=>{u.d(z,{kG:()=>S});var A=u(26584),O=u(63290),D=u(62208);const w=O.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class I{constructor(){this.includedModules=new Map}include(V,G){if(this.includedModules.has(V)){const Q=this.includedModules.get(V);if(Q!==G){w.error("Trying to include shader module multiple times with different sets of options.");const le=new Set;for(const Te of Object.keys(Q))Q[Te]!==V[Te]&&le.add(Te);for(const Te of Object.keys(V))Q[Te]!==V[Te]&&le.add(Te);le.forEach(Te=>console.error(`  ${Te}: current ${Q[Te]} new ${V[Te]}`))}}else this.includedModules.set(V,G),V(this.builder,G)}}class S extends I{constructor(){super(...arguments),this.vertex=new R,this.fragment=new R,this.attributes=new F,this.varyings=new U,this.extensions=new X,this.constants=new j}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(V){const G=this.extensions.generateSource(V),Q=this.attributes.generateSource(V),le=this.varyings.generateSource(),Te="vertex"===V?this.vertex:this.fragment,q=Te.uniforms.generateSource(),k=Te.code.generateSource(),ae="vertex"===V?ee:$,J=this.constants.generateSource().concat(Te.constants.generateSource());return`\n${G.join("\n")}\n\n${ae}\n\n${J.join("\n")}\n\n${q.join("\n")}\n\n${Q.join("\n")}\n\n${le.join("\n")}\n\n${k.join("\n")}`}generateBind(V,G){const Q=new Map;this.vertex.uniforms.entries.forEach(q=>{const k=q.bind[V];(0,D.pC)(k)&&Q.set(q.name,k)}),this.fragment.uniforms.entries.forEach(q=>{const k=q.bind[V];(0,D.pC)(k)&&Q.set(q.name,k)});const le=Array.from(Q.values()),Te=le.length;return(q,k)=>{for(let ae=0;ae<Te;++ae)le[ae](G,q,k)}}}class C{constructor(){this._entries=new Map}add(V){if(!Array.isArray(V))return this._add(V);for(const G of V)this._add(G)}_add(V){if(this._entries.has(V.name)&&!this._entries.get(V.name).equals(V))throw new A.Z(`Duplicate uniform name ${V.name} for different uniform type`);this._entries.set(V.name,V)}generateSource(){return Array.from(this._entries.values()).map(V=>(0,D.pC)(V.arraySize)?`uniform ${V.type} ${V.name}[${V.arraySize}];`:`uniform ${V.type} ${V.name};`)}get entries(){return Array.from(this._entries.values())}}class M{constructor(){this._entries=new Array}add(V){this._entries.push(V)}generateSource(){return this._entries}}class R extends I{constructor(){super(...arguments),this.uniforms=new C,this.code=new M,this.constants=new j}get builder(){return this}}class F{constructor(){this._entries=new Array}add(V,G){this._entries.push([V,G])}generateSource(V){return"fragment"===V?[]:this._entries.map(G=>`attribute ${G[1]} ${G[0]};`)}}class U{constructor(){this._entries=new Array}add(V,G){this._entries.push([V,G])}generateSource(){return this._entries.map(V=>`varying ${V[1]} ${V[0]};`)}}class X{constructor(){this._entries=new Set}add(V){this._entries.add(V)}generateSource(V){const G="vertex"===V?X.ALLOWLIST_VERTEX:X.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(Q=>G.includes(Q)).map(Q=>`#extension ${Q} : enable`)}}X.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],X.ALLOWLIST_VERTEX=[];class j{constructor(){this._entries=new Set}add(V,G,Q){let le="ERROR_CONSTRUCTOR_STRING";switch(G){case"float":le=j._numberToFloatStr(Q);break;case"int":le=j._numberToIntStr(Q);break;case"bool":le=Q.toString();break;case"vec2":le=`vec2(${j._numberToFloatStr(Q[0])},                            ${j._numberToFloatStr(Q[1])})`;break;case"vec3":le=`vec3(${j._numberToFloatStr(Q[0])},                            ${j._numberToFloatStr(Q[1])},                            ${j._numberToFloatStr(Q[2])})`;break;case"vec4":le=`vec4(${j._numberToFloatStr(Q[0])},                            ${j._numberToFloatStr(Q[1])},                            ${j._numberToFloatStr(Q[2])},                            ${j._numberToFloatStr(Q[3])})`;break;case"ivec2":le=`ivec2(${j._numberToIntStr(Q[0])},                             ${j._numberToIntStr(Q[1])})`;break;case"ivec3":le=`ivec3(${j._numberToIntStr(Q[0])},                             ${j._numberToIntStr(Q[1])},                             ${j._numberToIntStr(Q[2])})`;break;case"ivec4":le=`ivec4(${j._numberToIntStr(Q[0])},                             ${j._numberToIntStr(Q[1])},                             ${j._numberToIntStr(Q[2])},                             ${j._numberToIntStr(Q[3])})`;break;case"mat2":case"mat3":case"mat4":le=`${G}(${Array.prototype.map.call(Q,Te=>j._numberToFloatStr(Te)).join(", ")})`}return this._entries.add(`const ${G} ${V} = ${le};`),this}static _numberToIntStr(V){return V.toFixed(0)}static _numberToFloatStr(V){return Number.isInteger(V)?V.toFixed(1):V.toString()}generateSource(){return Array.from(this._entries)}}const $="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",ee="precision highp float;\nprecision highp sampler2D;"},16073:(fe,z,u)=>{u.d(z,{F:()=>M});var A=u(62208),O=u(67831),D=u(99770),w=u(85930),I=u(37847);class S extends w.x{constructor(U,X){super(U,"vec2",I.P.Draw,(j,$,ee)=>j.setUniform2fv(U,X($,ee)))}}class C extends w.x{constructor(U,X){super(U,"sampler2D",I.P.Draw,(j,$,ee)=>j.bindTexture(U,X($,ee)))}}function M(F,U,X){const j=[new C(F,U)];return X&&j.push(new S(F+"Size",(ee,K)=>{const V=U(ee,K);return(0,A.pC)(V)?(0,O.a)(R,V.descriptor.width,V.descriptor.height):D.Z})),j}const R=(0,D.a)()},35387:(fe,z,u)=>{u.d(z,{A:()=>C,J:()=>M});var A=u(62208),O=u(67831),D=u(99770),w=u(95285),I=u(85930),S=u(37847);class C extends I.x{constructor(U,X){super(U,"sampler2D",S.P.Pass,(j,$,ee)=>j.bindTexture(U,X($,ee)))}}function M(F,U,X){const j=[new C(F,U)];return X&&j.push(new w.A(F+"Size",(ee,K)=>{const V=U(ee,K);return(0,A.pC)(V)?(0,O.a)(R,V.descriptor.width,V.descriptor.height):D.Z})),j}const R=(0,D.a)()},85930:(fe,z,u)=>{u.d(z,{x:()=>D});var A=u(62208),O=u(37847);class D{constructor(I,S,C,M,R=null){this.name=I,this.type=S,this.arraySize=R,this.bind={[O.P.Pass]:null,[O.P.Draw]:null},(0,A.pC)(C)&&(0,A.pC)(M)&&(this.bind[C]=M)}equals(I){return this.type===I.type&&this.name===I.name&&this.arraySize===I.arraySize}}},17625:(fe,z,u)=>{u.d(z,{H:()=>O,K:()=>A});class A{}function O(D,...w){let I="";for(let S=0;S<w.length;S++)I+=D[S]+w[S];return I+=D[D.length-1],I}var D;(D=O||(O={})).int=function w(S){return Math.round(S).toString()},D.float=function I(S){return S.toPrecision(8)}},37847:(fe,z,u)=>{var A,O;u.d(z,{P:()=>A}),(O=A||(A={}))[O.Pass=0]="Pass",O[O.Draw=1]="Draw"},12699:(fe,z,u)=>{u.d(z,{c:()=>O});var A=u(86236);class O{constructor(){this.id=(0,A.D)()}unload(){}}},24425:(fe,z,u)=>{var A,O;u.d(z,{U:()=>A}),(O=A||(A={}))[O.Layer=0]="Layer",O[O.Object=1]="Object",O[O.Geometry=2]="Geometry",O[O.Material=3]="Material",O[O.Texture=4]="Texture",O[O.COUNT=5]="COUNT"},39114:(fe,z,u)=>{u.d(z,{i:()=>O});var A=u(16396);const O=new Map([[A.T.POSITION,0],[A.T.NORMAL,1],[A.T.UV0,2],[A.T.COLOR,3],[A.T.SIZE,4],[A.T.TANGENT,4],[A.T.AUXPOS1,5],[A.T.SYMBOLCOLOR,5],[A.T.AUXPOS2,6],[A.T.FEATUREATTRIBUTE,6],[A.T.INSTANCEFEATUREATTRIBUTE,6],[A.T.INSTANCECOLOR,7],[A.T.MODEL,8],[A.T.MODELNORMAL,12],[A.T.MODELORIGINHI,11],[A.T.MODELORIGINLO,15]])},44621:(fe,z,u)=>{u.d(z,{F:()=>S});var A=u(62208),O=u(10699),D=u(17625),w=u(42743);class S extends class I{constructor(R){this._material=R.material,this._techniqueRepository=R.techniqueRep,this._output=R.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}ensureTechnique(R,F,U=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(R,this._material.getConfiguration(U,F),this._technique),this._technique}ensureResources(R){return w.Rw.LOADED}}{constructor(R){super(R),this._numLoading=0,this._disposed=!1,this._textureRepository=R.textureRep,this._textureId=R.textureId,this._acquire(R.textureId,F=>this._texture=F),this._acquire(R.normalTextureId,F=>this._textureNormal=F),this._acquire(R.emissiveTextureId,F=>this._textureEmissive=F),this._acquire(R.occlusionTextureId,F=>this._textureOcclusion=F),this._acquire(R.metallicRoughnessTextureId,F=>this._textureMetallicRoughness=F)}dispose(){this._texture=(0,A.RY)(this._texture),this._textureNormal=(0,A.RY)(this._textureNormal),this._textureEmissive=(0,A.RY)(this._textureEmissive),this._textureOcclusion=(0,A.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,A.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(R){return 0===this._numLoading?w.Rw.LOADED:w.Rw.LOADING}get textureBindParameters(){return new C((0,A.pC)(this._texture)?this._texture.glTexture:null,(0,A.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,A.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,A.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,A.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(R){((0,A.Wi)(this._texture)||R!==this._texture.id)&&(this._texture=(0,A.RY)(this._texture),this._textureId=R,this._acquire(this._textureId,F=>this._texture=F))}_acquire(R,F){if((0,A.Wi)(R))return void F(null);const U=this._textureRepository.acquire(R);if((0,O.y8)(U))return++this._numLoading,void U.then(X=>{if(this._disposed)return(0,A.RY)(X),void F(null);F(X)}).finally(()=>--this._numLoading);F(U)}}class C extends D.K{constructor(R=null,F=null,U=null,X=null,j=null){super(),this.texture=R,this.textureNormal=F,this.textureEmissive=U,this.textureOcclusion=X,this.textureMetallicRoughness=j}}},40723:(fe,z,u)=>{u.d(z,{F5:()=>C,yD:()=>M});var M,F,A=u(62208),D=(u(17625),u(12699)),w=u(24425),I=u(39114),S=u(50229);class C extends D.c{constructor(U,X){super(),this.type=w.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=I.i,this._parameters=(0,S.Uf)(U,X),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(U){return!1}setParameters(U,X=!0){(0,S.LO)(this._parameters,U)&&(this.validateParameters(this._parameters),X&&this.parametersChanged())}validateParameters(U){}get visible(){return this._visible}set visible(U){U!==this._visible&&(this._visible=U,this.parametersChanged())}shouldRender(U){return this.isVisible()&&this.isVisibleInPass(U.pass)&&0!=(this.renderOccluded&U.renderOccludedMask)}isVisibleInPass(U){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(U){U!==this._renderPriority&&(this._renderPriority=U,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(U){U!==this._insertOrder&&(this._insertOrder=U,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,A.pC)(this.repository)&&this.repository.materialChanged(this)}}(F=M||(M={}))[F.Occlude=1]="Occlude",F[F.Transparent=2]="Transparent",F[F.OccludeAndTransparent=4]="OccludeAndTransparent",F[F.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",F[F.Opaque=16]="Opaque"},16396:(fe,z,u)=>{var A,O;u.d(z,{T:()=>A}),(O=A||(A={})).POSITION="position",O.NORMAL="normal",O.UV0="uv0",O.AUXPOS1="auxpos1",O.AUXPOS2="auxpos2",O.MAPPOS="mapPos",O.COLOR="color",O.SYMBOLCOLOR="symbolColor",O.SIZE="size",O.TANGENT="tangent",O.OFFSET="offset",O.SUBDIVISIONFACTOR="subdivisionFactor",O.COLORFEATUREATTRIBUTE="colorFeatureAttribute",O.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",O.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",O.DISTANCETOSTART="distanceToStart",O.UVMAPSPACE="uvMapSpace",O.BOUNDINGRECT="boundingRect",O.UVREGION="uvRegion",O.NORMALCOMPRESSED="normalCompressed",O.PROFILERIGHT="profileRight",O.PROFILEUP="profileUp",O.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",O.FEATUREVALUE="featureValue",O.MODELORIGINHI="modelOriginHi",O.MODELORIGINLO="modelOriginLo",O.MODEL="model",O.MODELNORMAL="modelNormal",O.INSTANCECOLOR="instanceColor",O.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",O.LOCALTRANSFORM="localTransform",O.GLOBALTRANSFORM="globalTransform",O.BOUNDINGSPHERE="boundingSphere",O.MODELORIGIN="modelOrigin",O.MODELSCALEFACTORS="modelScaleFactors",O.FEATUREATTRIBUTE="featureAttribute",O.STATE="state",O.LODLEVEL="lodLevel",O.POSITION0="position0",O.POSITION1="position1",O.NORMALA="normalA",O.NORMALB="normalB",O.COMPONENTINDEX="componentIndex",O.VARIANTOFFSET="variantOffset",O.VARIANTSTROKE="variantStroke",O.VARIANTEXTENSION="variantExtension",O.U8PADDING="u8padding",O.U16PADDING="u16padding",O.SIDENESS="sideness",O.START="start",O.END="end",O.UP="up",O.EXTRUDE="extrude"},37290:(fe,z,u)=>{u.d(z,{V:()=>q}),u(84161);var O=u(28093);u(21286),(0,O.c)();const q=.4;(0,O.c)()},50229:(fe,z,u)=>{u.d(z,{FZ:()=>pt,Uf:()=>Ue,Bw:()=>Ot,LO:()=>Be,Hx:()=>De});var A=u(85931),O=u(21286),D=u(62208),w=u(84161),I=u(28093),S=u(5548),C=u(42743);u(59617),(0,O.Vl)(10),(0,O.Vl)(12),(0,O.Vl)(70),(0,O.Vl)(40);const k={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var J=u(2282),ie=u(16396),me=(u(28347),u(43703));u(2757),new Float64Array(3),new Float32Array(6),(0,me.c)();const Pe=(0,S.Ue)();function Ot(te,re,se,ce,xe,Ne,Fe){if(!function ht(te){return!!(0,D.pC)(te)&&!te.visible}(re))if(te.boundingInfo)(0,J.hu)(te.primitiveType===C.MX.Triangle),At(te.boundingInfo,ce,xe,se.tolerance,Ne,Fe);else{const Le=te.indices.get(ie.T.POSITION),Je=te.vertexAttributes.get(ie.T.POSITION);ve(ce,xe,0,Le.length/3,Le,Je,void 0,Ne,Fe)}}const _t=(0,I.c)();function At(te,re,se,ce,xe,Ne){if((0,D.Wi)(te))return;const Fe=function ue(te,re,se){return(0,w.s)(se,1/(re[0]-te[0]),1/(re[1]-te[1]),1/(re[2]-te[2]))}(re,se,_t);if((0,S.op)(Pe,te.getBBMin()),(0,S.Tn)(Pe,te.getBBMax()),(0,D.pC)(xe)&&xe.applyToAabb(Pe),function _e(te,re,se,ce){return function pe(te,re,se,ce,xe){const Ne=(te[0]-ce-re[0])*se[0],Fe=(te[3]+ce-re[0])*se[0];let Le=Math.min(Ne,Fe),Je=Math.max(Ne,Fe);const He=(te[1]-ce-re[1])*se[1],Ye=(te[4]+ce-re[1])*se[1];if(Je=Math.min(Je,Math.max(He,Ye)),Je<0||(Le=Math.max(Le,Math.min(He,Ye)),Le>Je))return!1;const rt=(te[2]-ce-re[2])*se[2],nt=(te[5]+ce-re[2])*se[2];return Je=Math.min(Je,Math.max(rt,nt)),!(Je<0)&&(Le=Math.max(Le,Math.min(rt,nt)),!(Le>Je)&&Le<xe)}(te,re,se,ce,1/0)}(Pe,re,Fe,ce)){const{primitiveIndices:Le,indices:Je,position:He}=te,Ye=Le?Le.length:Je.length/3;if(Ye>wt){const rt=te.getChildren();if(void 0!==rt){for(let nt=0;nt<8;++nt)void 0!==rt[nt]&&At(rt[nt],re,se,ce,xe,Ne);return}}ve(re,se,0,Ye,Je,He,Le,xe,Ne)}}const Xe=(0,I.c)();function ve(te,re,se,ce,xe,Ne,Fe,Le,Je){if(Fe)return function Oe(te,re,se,ce,xe,Ne,Fe,Le,Je){const He=Ne.data,Ye=Ne.stride||Ne.size,rt=te[0],nt=te[1],St=te[2],ft=re[0]-rt,Pt=re[1]-nt,bt=re[2]-St;for(let ut=se;ut<ce;++ut){const Ut=Fe[ut];let ot=3*Ut,et=Ye*xe[ot++],xt=He[et++],Mt=He[et++],Ct=He[et];et=Ye*xe[ot++];let Lt=He[et++],Xt=He[et++],Wt=He[et];et=Ye*xe[ot];let gt=He[et++],kt=He[et++],Jt=He[et];(0,D.pC)(Le)&&([xt,Mt,Ct]=Le.applyToVertex(xt,Mt,Ct,ut),[Lt,Xt,Wt]=Le.applyToVertex(Lt,Xt,Wt,ut),[gt,kt,Jt]=Le.applyToVertex(gt,kt,Jt,ut));const Gt=Lt-xt,jt=Xt-Mt,Bt=Wt-Ct,Nt=gt-xt,Ft=kt-Mt,Zt=Jt-Ct,rr=Pt*Zt-Ft*bt,ar=bt*Nt-Zt*ft,Dt=ft*Ft-Nt*Pt,Rt=Gt*rr+jt*ar+Bt*Dt;if(Math.abs(Rt)<=Number.EPSILON)continue;const qt=rt-xt,er=nt-Mt,It=St-Ct,Ht=qt*rr+er*ar+It*Dt;if(Rt>0){if(Ht<0||Ht>Rt)continue}else if(Ht>0||Ht<Rt)continue;const tt=er*Bt-jt*It,Vt=It*Gt-Bt*qt,zt=qt*jt-Gt*er,Kt=ft*tt+Pt*Vt+bt*zt;if(Rt>0){if(Kt<0||Ht+Kt>Rt)continue}else if(Kt>0||Ht+Kt<Rt)continue;const Tt=(Nt*tt+Ft*Vt+Zt*zt)/Rt;Tt>=0&&Je(Tt,H(Gt,jt,Bt,Nt,Ft,Zt,Xe),Ut,!1)}}(te,re,se,ce,xe,Ne,Fe,Le,Je);const He=Ne.data,Ye=Ne.stride||Ne.size,rt=te[0],nt=te[1],St=te[2],ft=re[0]-rt,Pt=re[1]-nt,bt=re[2]-St;for(let ut=se,Ut=3*se;ut<ce;++ut){let ot=Ye*xe[Ut++],et=He[ot++],xt=He[ot++],Mt=He[ot];ot=Ye*xe[Ut++];let Ct=He[ot++],Lt=He[ot++],Xt=He[ot];ot=Ye*xe[Ut++];let Wt=He[ot++],gt=He[ot++],kt=He[ot];(0,D.pC)(Le)&&([et,xt,Mt]=Le.applyToVertex(et,xt,Mt,ut),[Ct,Lt,Xt]=Le.applyToVertex(Ct,Lt,Xt,ut),[Wt,gt,kt]=Le.applyToVertex(Wt,gt,kt,ut));const Jt=Ct-et,Gt=Lt-xt,jt=Xt-Mt,Bt=Wt-et,Nt=gt-xt,Ft=kt-Mt,Zt=Pt*Ft-Nt*bt,rr=bt*Bt-Ft*ft,ar=ft*Nt-Bt*Pt,Dt=Jt*Zt+Gt*rr+jt*ar;if(Math.abs(Dt)<=Number.EPSILON)continue;const Rt=rt-et,qt=nt-xt,er=St-Mt,It=Rt*Zt+qt*rr+er*ar;if(Dt>0){if(It<0||It>Dt)continue}else if(It>0||It<Dt)continue;const Ht=qt*jt-Gt*er,tt=er*Jt-jt*Rt,Vt=Rt*Gt-Jt*qt,zt=ft*Ht+Pt*tt+bt*Vt;if(Dt>0){if(zt<0||It+zt>Dt)continue}else if(zt>0||It+zt<Dt)continue;const Kt=(Bt*Ht+Nt*tt+Ft*Vt)/Dt;Kt>=0&&Je(Kt,H(Jt,Gt,jt,Bt,Nt,Ft,Xe),ut,!1)}}const $t=(0,I.c)(),Y=(0,I.c)();function H(te,re,se,ce,xe,Ne,Fe){return(0,w.s)($t,te,re,se),(0,w.s)(Y,ce,xe,Ne),(0,w.f)(Fe,$t,Y),(0,w.n)(Fe,Fe),Fe}function De(te,re,se,ce,xe){let Ne=(se.screenLength||0)*te.pixelRatio;(0,D.pC)(xe)&&(Ne=function G(te,re,se,ce){return function $(te,re){return Math.max((0,O.t7)(te*re.scale,te,re.factor),function j(te,re){return 0===te?re.minPixelSize:re.minPixelSize*(1+2*re.paddingPixels/te)}(te,re))}(te,function X(te,re,se){const ce=se.parameters,xe=se.paddingPixelsOverride;return k.scale=Math.min(ce.divisor/(re-ce.offset),1),k.factor=function U(te){return Math.abs(te*te*te)}(te),k.minPixelSize=ce.minPixelSize,k.paddingPixels=xe,k}(re,se,ce))}(Ne,ce,re,xe));const Fe=Ne*Math.tan(.5*te.fovY)/(.5*te.fullHeight);return(0,O.uZ)(Fe*re,se.minWorldLength||0,null!=se.maxWorldLength?se.maxWorldLength:1/0)}function Ue(te,re){const se=re?Ue(re):{};for(const ce in te){let xe=te[ce];xe&&xe.forEach&&(xe=mt(xe)),null==xe&&ce in se||(se[ce]=xe)}return se}function Be(te,re){let se=!1;for(const ce in re){const xe=re[ce];void 0!==xe&&(Array.isArray(xe)?null===te[ce]?(te[ce]=xe.slice(),se=!0):(0,A.Vx)(te[ce],xe)&&(se=!0):te[ce]!==xe&&(se=!0,te[ce]=xe))}return se}function mt(te){const re=[];return te.forEach(se=>re.push(se)),re}const pt={multiply:1,ignore:2,replace:3,tint:4},wt=1e3},40852:(fe,z,u)=>{u.d(z,{G:()=>A});class A{constructor(D,w,I,S,C,M=!1,R=0){this.name=D,this.count=w,this.type=I,this.offset=S,this.stride=C,this.normalized=M,this.divisor=R}}}}]);