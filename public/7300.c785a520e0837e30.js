"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[7300],{57300:(L,E,V)=>{V.r(E),V.d(E,{default:()=>S});var X=V(21286),A={};A.defaultNoDataValue=(0,X.oK)(-1/0),A.decode=function(i,t){var o=(t=t||{}).encodedMaskData||null===t.encodedMaskData,e=F(i,t.inputOffset||0,o),c=null!=t.noDataValue?(0,X.oK)(t.noDataValue):A.defaultNoDataValue,n=_(e,t.pixelType||Float32Array,t.encodedMaskData,c,t.returnMask),s={width:e.width,height:e.height,pixelData:n.resultPixels,minValue:e.pixels.minValue,maxValue:e.pixels.maxValue,noDataValue:c};return n.resultMask&&(s.maskData=n.resultMask),t.returnEncodedMask&&e.mask&&(s.encodedMaskData=e.mask.bitset?e.mask.bitset:null),t.returnFileInfo&&(s.fileInfo=b(e,c),t.computeUsedBitDepths&&(s.fileInfo.bitDepths=D(e))),s};var _=function(i,t,o,e,c){var n,s,d=0,m=i.pixels.numBlocksX,h=i.pixels.numBlocksY,y=Math.floor(i.width/m),v=Math.floor(i.height/h),p=2*i.maxZError;o=o||(i.mask?i.mask.bitset:null),n=new t(i.width*i.height),c&&o&&(s=new Uint8Array(i.width*i.height));for(var k,g,x=new Float32Array(y*v),B=0;B<=h;B++){var M=B!==h?v:i.height%h;if(0!==M)for(var P=0;P<=m;P++){var r=P!==m?y:i.width%m;if(0!==r){var I,a,f,w,l=B*i.width*v+P*y,U=i.width-r,u=i.pixels.blocks[d];if(u.encoding<2?(0===u.encoding?I=u.rawData:(O(u.stuffedData,u.bitsPerPixel,u.numValidPixels,u.offset,p,x,i.pixels.maxValue),I=x),a=0):f=2===u.encoding?0:u.offset,o)for(g=0;g<M;g++){for(7&l&&(w=o[l>>3],w<<=7&l),k=0;k<r;k++)7&l||(w=o[l>>3]),128&w?(s&&(s[l]=1),n[l++]=u.encoding<2?I[a++]:f):(s&&(s[l]=0),n[l++]=e),w<<=1;l+=U}else if(u.encoding<2)for(g=0;g<M;g++){for(k=0;k<r;k++)n[l++]=I[a++];l+=U}else for(g=0;g<M;g++)if(n.fill)n.fill(f,l,l+r),l+=r+U;else{for(k=0;k<r;k++)n[l++]=f;l+=U}if(1===u.encoding&&a!==u.numValidPixels)throw"Block and Mask do not match";d++}}}return{resultPixels:n,resultMask:s}},b=function(i,t){return{fileIdentifierString:i.fileIdentifierString,fileVersion:i.fileVersion,imageType:i.imageType,height:i.height,width:i.width,maxZError:i.maxZError,eofOffset:i.eofOffset,mask:i.mask?{numBlocksX:i.mask.numBlocksX,numBlocksY:i.mask.numBlocksY,numBytes:i.mask.numBytes,maxValue:i.mask.maxValue}:null,pixels:{numBlocksX:i.pixels.numBlocksX,numBlocksY:i.pixels.numBlocksY,numBytes:i.pixels.numBytes,maxValue:i.pixels.maxValue,minValue:i.pixels.minValue,noDataValue:t}}},D=function(i){for(var t=i.pixels.numBlocksX*i.pixels.numBlocksY,o={},e=0;e<t;e++){var c=i.pixels.blocks[e];0===c.encoding?o.float32=!0:1===c.encoding?o[c.bitsPerPixel]=!0:o[0]=!0}return Object.keys(o)},F=function(i,t,o){var e={},c=new Uint8Array(i,t,10);if(e.fileIdentifierString=String.fromCharCode.apply(null,c),"CntZImage"!=e.fileIdentifierString.trim())throw"Unexpected file identifier string: "+e.fileIdentifierString;t+=10;var n=new DataView(i,t,24);if(e.fileVersion=n.getInt32(0,!0),e.imageType=n.getInt32(4,!0),e.height=n.getUint32(8,!0),e.width=n.getUint32(12,!0),e.maxZError=n.getFloat64(16,!0),t+=24,!o)if(n=new DataView(i,t,16),e.mask={},e.mask.numBlocksY=n.getUint32(0,!0),e.mask.numBlocksX=n.getUint32(4,!0),e.mask.numBytes=n.getUint32(8,!0),e.mask.maxValue=n.getFloat32(12,!0),t+=16,e.mask.numBytes>0){var s=new Uint8Array(Math.ceil(e.width*e.height/8)),d=(n=new DataView(i,t,e.mask.numBytes)).getInt16(0,!0),m=2,h=0;do{if(d>0)for(;d--;)s[h++]=n.getUint8(m++);else{var y=n.getUint8(m++);for(d=-d;d--;)s[h++]=y}d=n.getInt16(m,!0),m+=2}while(m<e.mask.numBytes);if(-32768!==d||h<s.length)throw"Unexpected end of mask RLE encoding";e.mask.bitset=s,t+=e.mask.numBytes}else 0==(e.mask.numBytes|e.mask.numBlocksY|e.mask.maxValue)&&(s=new Uint8Array(Math.ceil(e.width*e.height/8)),e.mask.bitset=s);n=new DataView(i,t,16),e.pixels={},e.pixels.numBlocksY=n.getUint32(0,!0),e.pixels.numBlocksX=n.getUint32(4,!0),e.pixels.numBytes=n.getUint32(8,!0),e.pixels.maxValue=n.getFloat32(12,!0),t+=16;var v=e.pixels.numBlocksX,p=e.pixels.numBlocksY,k=v+(e.width%v>0?1:0),g=p+(e.height%p>0?1:0);e.pixels.blocks=new Array(k*g);for(var x=1e9,B=0,M=0;M<g;M++)for(var P=0;P<k;P++){var r=0;n=new DataView(i,t,Math.min(10,i.byteLength-t));var a={};e.pixels.blocks[B++]=a;var f=n.getUint8(0);if(r++,a.encoding=63&f,a.encoding>3)throw"Invalid block encoding ("+a.encoding+")";if(2!==a.encoding){if(0!==f&&2!==f){if(a.offsetType=f>>=6,2===f)a.offset=n.getInt8(1),r++;else if(1===f)a.offset=n.getInt16(1,!0),r+=2;else{if(0!==f)throw"Invalid block offset type";a.offset=n.getFloat32(1,!0),r+=4}if(x=Math.min(a.offset,x),1===a.encoding)if(f=n.getUint8(r),r++,a.bitsPerPixel=63&f,a.numValidPixelsType=f>>=6,2===f)a.numValidPixels=n.getUint8(r),r++;else if(1===f)a.numValidPixels=n.getUint16(r,!0),r+=2;else{if(0!==f)throw"Invalid valid pixel count type";a.numValidPixels=n.getUint32(r,!0),r+=4}}var w;if(t+=r,3!=a.encoding)if(0===a.encoding){var l=(e.pixels.numBytes-1)/4;if(l!==Math.floor(l))throw"uncompressed block has invalid length";w=new ArrayBuffer(4*l),new Uint8Array(w).set(new Uint8Array(i,t,4*l));for(var U=new Float32Array(w),u=0;u<U.length;u++)x=Math.min(x,U[u]);a.rawData=U,t+=4*l}else if(1===a.encoding){var Y=Math.ceil(a.numValidPixels*a.bitsPerPixel/8),Z=Math.ceil(Y/4);w=new ArrayBuffer(4*Z),new Uint8Array(w).set(new Uint8Array(i,t,Y)),a.stuffedData=new Uint32Array(w),t+=Y}}else t++,x=Math.min(x,0)}return e.pixels.minValue=x,e.eofOffset=t,e},O=function(i,t,o,e,c,n,s){var d,m,h,y=(1<<t)-1,v=0,p=0,k=Math.ceil((s-e)/c),g=4*i.length-Math.ceil(t*o/8);for(i[i.length-1]<<=8*g,d=0;d<o;d++){if(0===p&&(h=i[v++],p=32),p>=t)m=h>>>p-t&y,p-=t;else{var x=t-p;m=(h&y)<<x&y,m+=(h=i[v++])>>>(p=32-x)}n[d]=m<k?e+m*c:s}return n};const T=A.decode;class C{_decode(t){const o=T(t.buffer,t.options);return Promise.resolve({result:o,transferList:[o.pixelData.buffer]})}}function S(){return new C}}}]);