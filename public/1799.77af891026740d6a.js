"use strict";(self.webpackChunkchasse_pwa_front=self.webpackChunkchasse_pwa_front||[]).push([[1799],{31799:(ut,k,O)=>{O.r(k),O.d(k,{scopeCss:()=>pt});const _="-shadowcsshost",w="-shadowcssslotted",b="-shadowcsscontext",C=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",j=new RegExp("("+_+C,"gim"),v=new RegExp("("+b+C,"gim"),N=new RegExp("("+w+C,"gim"),f=_+"-no-combinator",x=/-shadowcsshost-no-combinator([^\s]*)/,M=[/::shadow/g,/::content/g],m=/-shadowcsshost/gim,I=/:host/gim,K=/::slotted/gim,U=/:host-context/gim,Y=/\/\*\s*[\s\S]*?\*\//g,G=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,F=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,J=/([{}])/g,Q=/(^.*?[^\\])??((:+)(.*)|$)/,S="%BLOCK%",R=(t,e)=>{const o=Z(t);let n=0;return o.escapedString.replace(F,(...c)=>{const s=c[2];let a="",r=c[4],l="";r&&r.startsWith("{"+S)&&(a=o.blocks[n++],r=r.substring(S.length+1),l="{");const p=e({selector:s,content:a});return`${c[1]}${p.selector}${c[3]}${l}${p.content}${r}`})},Z=t=>{const e=t.split(J),o=[],n=[];let c=0,s=[];for(let r=0;r<e.length;r++){const l=e[r];"}"===l&&c--,c>0?s.push(l):(s.length>0&&(n.push(s.join("")),o.push(S),s=[]),o.push(l)),"{"===l&&c++}return s.length>0&&(n.push(s.join("")),o.push(S)),{escapedString:o.join(""),blocks:n}},y=(t,e,o)=>t.replace(e,(...n)=>{if(n[2]){const c=n[2].split(","),s=[];for(let a=0;a<c.length;a++){const r=c[a].trim();if(!r)break;s.push(o(f,r,n[3]))}return s.join(",")}return f+n[3]}),B=(t,e,o)=>t+e.replace(_,"")+o,tt=(t,e,o)=>e.indexOf(_)>-1?B(t,e,o):t+e+o+", "+e+" "+t+o,E=(t,e)=>t.replace(Q,(o,n="",c,s="",a="")=>n+e+s+a),W=(t,e,o,n,c)=>R(t,s=>{let a=s.selector,r=s.content;return"@"!==s.selector[0]?a=((t,e,o,n)=>t.split(",").map(c=>n&&c.indexOf("."+n)>-1?c.trim():((t,e)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e).test(t))(c,e)?((t,e,o)=>{const c="."+(e=e.replace(/\[is=([^\]]*)\]/g,(g,...h)=>h[0])),s=g=>{let h=g.trim();if(!h)return"";if(g.indexOf(f)>-1)h=((t,e,o)=>{if(m.lastIndex=0,m.test(t)){const n=`.${o}`;return t.replace(x,(c,s)=>E(s,n)).replace(m,n+" ")}return e+" "+t})(g,e,o);else{const H=g.replace(m,"");H.length>0&&(h=E(H,c))}return h},a=(t=>{const e=[];let n,o=0;return n=(t=t.replace(/(\[[^\]]*\])/g,(s,a)=>{const r=`__ph-${o}__`;return e.push(a),o++,r})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(s,a,r)=>{const l=`__ph-${o}__`;return e.push(r),o++,a+l}),{content:n,placeholders:e}})(t);let i,r="",l=0;const p=/( |>|\+|~(?!=))\s*/g;let u=!((t=a.content).indexOf(f)>-1);for(;null!==(i=p.exec(t));){const g=i[1],h=t.slice(l,i.index).trim();u=u||h.indexOf(f)>-1,r+=`${u?s(h):h} ${g} `,l=p.lastIndex}const $=t.substring(l);return u=u||$.indexOf(f)>-1,r+=u?s($):$,((t,e)=>e.replace(/__ph-(\d+)__/g,(o,n)=>t[+n]))(a.placeholders,r)})(c,e,o).trim():c.trim()).join(", "))(s.selector,e,o,n):(s.selector.startsWith("@media")||s.selector.startsWith("@supports")||s.selector.startsWith("@page")||s.selector.startsWith("@document"))&&(r=W(s.content,e,o,n)),{selector:a.replace(/\s{2,}/g," ").trim(),content:r}}),pt=(t,e,o)=>{const n=e+"-h",c=e+"-s",s=(t=>t.match(G)||[])(t);t=(t=>t.replace(Y,""))(t);const a=[];if(o){const l=i=>{const p=`/*!@___${a.length}___*/`;return a.push({placeholder:p,comment:`/*!@${i.selector}*/`}),i.selector=p+i.selector,i};t=R(t,i=>"@"!==i.selector[0]?l(i):((i.selector.startsWith("@media")||i.selector.startsWith("@supports")||i.selector.startsWith("@page")||i.selector.startsWith("@document"))&&(i.content=R(i.content,l)),i))}const r=((t,e,o,n,c)=>{const s=((t,e)=>{const o="."+e+" > ",n=[];return t=t.replace(N,(...c)=>{if(c[2]){const s=c[2].trim(),r=o+s+c[3];let l="";for(let d=c[4]-1;d>=0;d--){const u=c[5][d];if("}"===u||","===u)break;l=u+l}const i=l+r,p=`${l.trimRight()}${r.trim()}`;return i.trim()!==p.trim()&&n.push({orgSelector:i,updatedSelector:`${p}, ${i}`}),r}return f+c[3]}),{selectors:n,cssText:t}})(t=(t=>y(t,v,tt))(t=(t=>y(t,j,B))(t=(t=>t.replace(U,b).replace(I,_).replace(K,w))(t))),n);return t=(t=>M.reduce((e,o)=>e.replace(o," "),t))(t=s.cssText),e&&(t=W(t,e,o,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,`.${o}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:s.selectors}})(t,e,n,c);return t=[r.cssText,...s].join("\n"),o&&a.forEach(({placeholder:l,comment:i})=>{t=t.replace(l,i)}),r.slottedSelectors.forEach(l=>{t=t.replace(l.orgSelector,l.updatedSelector)}),t}}}]);