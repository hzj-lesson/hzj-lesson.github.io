const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/data-primary-CDNG2kGL.js","assets/lesson-data-a9UQWZ6B.js","assets/react-vendor-Ds7D3P6J.js","assets/katex-Dc8nsIP1.js"])))=>i.map(i=>d[i]);
import{j as Y}from"./react-vendor-Ds7D3P6J.js";import{k as J}from"./katex-Dc8nsIP1.js";const V="modulepreload",Z=function(e){return"/"+e},U={},w=function(s,t,n){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(t.map(l=>{if(l=Z(l),l in U)return;U[l]=!0;const f=l.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const c=document.createElement("link");if(c.rel=f?"stylesheet":V,f||(c.as="script"),c.crossOrigin="",c.href=l,r&&c.setAttribute("nonce",r),document.head.appendChild(c),f)return new Promise((v,u)=>{c.addEventListener("load",v),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(i){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i}return a.then(i=>{for(const r of i||[])r.status==="rejected"&&o(r.reason);return s().catch(o)})},g={初中:221,小学:112,高中:211},I=["初中","小学","高中"],Q=544,S={初中:0,小学:g.初中,高中:g.初中+g.小学},ee={初中:()=>w(()=>import("./data-junior-CcSiU_EZ.js"),[]),小学:()=>w(()=>import("./data-primary-CDNG2kGL.js"),__vite__mapDeps([0,1,2,3])),高中:()=>w(()=>import("./data-senior-F5IYe9hd.js"),[])};let p=new Array(Q).fill(void 0);const _=new Set,B=new Map,T=new Set;function ye(){return p}function Ae(){return I.reduce((e,s)=>e+(_.has(s)?g[s]:0),0)}function ve(e){return T.add(e),()=>{T.delete(e)}}function se(){T.forEach(e=>e())}async function te(e){if(_.has(e))return p.slice(S[e],S[e]+g[e]).filter(Boolean);const s=B.get(e);if(s)return s;const t=(async()=>{const n=await ee[e](),a=n.JUNIOR_LESSONS??n.PRIMARY_LESSONS??n.SENIOR_LESSONS??[];return _.add(e),p=[...p],a.forEach((o,i)=>{p[S[e]+i]=o}),se(),a})();B.set(e,t);try{return await t}finally{B.delete(e)}}async function Le(){for(const e of I)await te(e)}const ne="MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEt0S+4zWqJpWaH6rl96/1h9pVEh2RJcJFvKSTYp/YFJcLvczbf+Hj5eVAxnV3Qp9q+qXfL/1+l1vmJH+mkk5z0A==",C="wb-member",K=e=>e.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-e.length%4)%4);function X(){try{const e=localStorage.getItem(C);if(!e)return null;const s=JSON.parse(e);return s&&typeof s.exp=="number"?s:null}catch{return null}}function ae(){const e=X();return!!e&&(e.exp===0||e.exp>Date.now())}function we(e,s){try{localStorage.setItem(C,JSON.stringify({code:e,exp:s}))}catch{}}const ie=3*60*1e3,oe="__try__";async function Se(){const e=X();if(!e)return!1;const s=Date.now();if(e.exp!==0&&e.exp<=s||!e.code)return h(),!1;if(e.code===oe){const n=e.exp>s&&e.exp-s<=ie+5e3;return n||h(),n}const t=await le(e.code);return!t.ok||t.exp!==e.exp?(h(),!1):!0}function h(){try{localStorage.removeItem(C)}catch{}}async function re(){const e=Uint8Array.from(atob(ne),s=>s.charCodeAt(0));return crypto.subtle.importKey("spki",e,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"])}async function le(e){const s=(e||"").trim();if(!s.startsWith("MB-"))return{ok:!1,reason:"会员码格式不正确，请检查后重试"};const t=s.slice(3),n=t.indexOf(".");if(n<=0)return{ok:!1,reason:"会员码格式不正确，请检查后重试"};const a=t.slice(0,n),o=t.slice(n+1);try{const i=await re(),r=Uint8Array.from(atob(K(o)),c=>c.charCodeAt(0)),l=new TextEncoder().encode(a);if(!await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},i,r,l))return{ok:!1,reason:"会员码无效（签名校验失败）"};const m=JSON.parse(atob(K(a)));return typeof m.e!="number"?{ok:!1,reason:"会员码数据异常"}:m.e!==0&&m.e<Date.now()?{ok:!1,reason:"该会员码已过期"}:{ok:!0,exp:m.e}}catch{return{ok:!1,reason:"会员码无效（当前浏览器不支持校验，请换最新版微信/浏览器）"}}}const me="wb-tier",Be=3,_e=2,Te=10;function Ee(){try{return localStorage.getItem(me)==="pro"?"pro":"free"}catch{return"free"}}const je=()=>ae();function $(){const e=new Date,s=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${s}-${t}`}function ze(){try{const e=$(),s=localStorage.getItem("wb-export-count");if(!s)return 0;const t=JSON.parse(s);if(!t||typeof t!="object"||t.date!==e)return 0;const n=Number(t.count);return Number.isFinite(n)&&n>=0?n:0}catch{return 0}}function Ce(){const e=$(),s=ze()+1;try{localStorage.setItem("wb-export-count",JSON.stringify({date:e,count:s}))}catch{}return s}const fe="由「教师备课助手」免费版生成 · 开通会员解锁完整导出";function q(e){return e.replace(/\\\\([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]/g,"")}function b(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function D(e){let s="",t=!1;for(let n=0;n<e.length;n++){const a=e[n];if(a==="$"){t=!t,s+=a;continue}if(!t&&a==="\\"&&e[n+1]==="n"){s+=`
`,n++;continue}s+=a}return s}function M(e){if(!e)return"";const s=q(D(String(e))),t=[];let n=s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g,(i,r,l)=>`@@IMG${t.push({alt:r,src:l})-1}@@`);const a=[];n=n.replace(/\$([^$\n]+?)\$/g,(i,r)=>`@@MATH${a.push(r.trim())-1}@@`);let o=b(n).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>");return o=o.replace(/@@MATH(\d+)@@/g,(i,r)=>E(a[+r],!1)),o=o.replace(/@@IMG(\d+)@@/g,(i,r)=>{const l=t[+r];return`<img src="${l.src}" alt="${l.alt}" loading="lazy" style="max-width:100%;border-radius:8px;margin:6px 0;display:block">`}),o}function E(e,s){try{return J.renderToString(e,{displayMode:s,throwOnError:!1,strict:!1,trust:!0,output:"html"})}catch{return s?`<div class="plain-formula">${e}</div>`:`<code class="inline-math">${e}</code>`}}function y(e){return b(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br>")}function ce(e){const s=e.map(o=>o.replace(/^\||\|$/g,"").split("|").map(i=>i.trim())),t=s[0],n=s.slice(2);let a="<table><thead><tr>";return t.forEach(o=>{a+=`<th>${y(o)}</th>`}),a+="</tr></thead><tbody>",n.forEach(o=>{a+="<tr>",o.forEach(i=>{a+=`<td>${y(i)}</td>`}),a+="</tr>"}),a+"</tbody></table>"}function ke(e){const s=e.map(a=>{const o=a.match(/^(\s*)[-*•]\s+(.*)$/);return{level:Math.floor(((o==null?void 0:o[1].length)??0)/2),content:(o==null?void 0:o[2])??""}});let t="<ul>",n=0;for(s.forEach(a=>{for(;n>a.level;)t+="</ul>",n--;a.level>n&&(t+="<ul>",n++),t+=`<li>${y(a.content)}</li>`});n>0;)t+="</ul>",n--;return t+="</ul>",t}function x(e){if(!e)return'<p class="empty-md">（暂无内容）</p>';const s=q(D(String(e))).replace(/\r\n/g,`
`),t=[];let n=s.replace(/\$\$([\s\S]+?)\$\$/g,(l,f)=>`
@@TOKEN${t.push({type:"block",tex:f.trim()})-1}@@
`);n=n.replace(/\$([^$\n]+?)\$/g,(l,f)=>`@@TOKEN${t.push({type:"inline",tex:f.trim()})-1}@@`),n=n.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(l,f,m)=>`@@TOKEN${t.push({type:"img",alt:f,src:m})-1}@@`);const a=n.split(`
`),o=[];let i=0;for(;i<a.length;){const l=a[i],f=l.trim();if(!f){i++;continue}if(f.startsWith("|")&&i+1<a.length&&/^\s*\|?[\s:|-]+\|?\s*$/.test(a[i+1])&&a[i+1].includes("-")){const c=[];for(;i<a.length&&a[i].trim().startsWith("|");)c.push(a[i].trim()),i++;o.push(ce(c));continue}if(/^\s*[-*•]\s+/.test(l)){const c=[];for(;i<a.length&&/^\s*[-*•]\s+/.test(a[i]);)c.push(a[i]),i++;o.push(ke(c));continue}const m=[l];for(i++;i<a.length&&a[i].trim()&&!/^\s*[-*•]\s+/.test(a[i])&&!a[i].trim().startsWith("|");)m.push(a[i]),i++;o.push(`<p>${y(m.join(`
`))}</p>`)}let r=o.join(`
`);return r=r.replace(/@@TOKEN(\d+)@@/g,(l,f)=>{const m=t[+f];return m.type==="img"?`<img src="${b(m.src??"")}" alt="${b(m.alt??"")}" loading="lazy">`:m.type==="block"?`<div class="katex-display">${E(m.tex??"",!0)}</div>`:E(m.tex??"",!1)}),r}const Re=({source:e,className:s})=>Y.jsx("div",{className:`md ${s??""}`,dangerouslySetInnerHTML:{__html:x(e)}}),j={name:"hzj",wechat:"April_18forever"};async function Ue(){const e=j.wechat;try{return await navigator.clipboard.writeText(e),!0}catch{try{const s=document.createElement("textarea");s.value=e,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select();const t=document.execCommand("copy");return document.body.removeChild(s),t}catch{return!1}}}const de='@font-face{font-display:block;font-family:KaTeX_AMS;font-style:normal;font-weight:400;src:url(/assets/KaTeX_AMS-Regular-BQhdFMY1.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Caligraphic;font-style:normal;font-weight:700;src:url(/assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Caligraphic;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Fraktur;font-style:normal;font-weight:700;src:url(/assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Fraktur;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:normal;font-weight:700;src:url(/assets/KaTeX_Main-Bold-Cx986IdX.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:italic;font-weight:700;src:url(/assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:italic;font-weight:400;src:url(/assets/KaTeX_Main-Italic-NWA7e6Wa.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Main-Regular-B22Nviop.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Math;font-style:italic;font-weight:700;src:url(/assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Math;font-style:italic;font-weight:400;src:url(/assets/KaTeX_Math-Italic-t53AETM-.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:normal;font-weight:700;src:url(/assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:italic;font-weight:400;src:url(/assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:normal;font-weight:400;src:url(/assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Script;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Script-Regular-D3wIWfF6.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Size1;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Size1-Regular-mCD8mA8B.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Size2;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Size2-Regular-Dy4dx90m.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Size3;font-style:normal;font-weight:400;src:url(data:font/woff2;base64,d09GMgABAAAAAA4oAA4AAAAAHbQAAA3TAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAgRQIDgmcDBEICo1oijYBNgIkA14LMgAEIAWJAAeBHAyBHBvbGiMRdnO0IkRRkiYDgr9KsJ1NUAf2kILNxgUmgqIgq1P89vcbIcmsQbRps3vCcXdYOKSWEPEKgZgQkprQQsxIXUgq0DqpGKmIvrgkeVGtEQD9DzAO29fM9jYhxZEsL2FeURH2JN4MIcTdO049NCVdxQ/w9NrSYFEBKTDKpLKfNkCGDc1RwjZLQcm3vqJ2UW9Xfa3tgAHz6ivp6vgC2yD4/6352ndnN0X0TL7seypkjZlMsjmZnf0Mm5Q+JykRWQBKCVCVPbARPXWyQtb5VgLB6Biq7/Uixcj2WGqdI8tGSgkuRG+t910GKP2D7AQH0DB9FMDW/obJZ8giFI3Wg8Cvevz0M+5m0rTh7XDBlvo9Y4vm13EXmfttwI4mBo1EG15fxJhUiCLbiiyCf/ZA6MFAhg3pGIZGdGIVjtPn6UcMk9A/UUr9PhoNsCENw1APAq0gpH73e+M+0ueyHbabc3vkbcdtzcf/fiy+NxQEjf9ud/ELBHAXJ0nk4z+MXH2Ev/kWyV4k7SkvpPc9Qr38F6RPWnM9cN6DJ0AdD1BhtgABtmoRoFCvPsBAumNm6soZG2Gk5GyVTo2sJncSyp0jQTYoR6WDvTwaaEcHsxHfvuWhHA3a6bN7twRKtcGok6NsCi7jYRrM2jExsUFMxMQYuJbMhuWNOumEJy9hi29Dmg5zMp/A5+hhPG19j1vBrq8JTLr8ki5VLPmG/PynJHVul440bxg5xuymHUFPBshC+nA9I1FmwbRBTNHAcik3Oae0cxKoI3MOriM42UrPe51nsaGxJ+WfXubAsP84aabUlQSJ1IiE0iPETLUU4CATgfXSCSpuRFRmCGbO+wSpAnzaeaCYW1VNEysRtuXCEL1kUFUbbtMv3Tilt/1c11jt3Q5bbMa84cpWipp8Elw3MZhOHsOlwwVUQM3lAR35JiFQbaYCRnMF2lxAWoOg2gyoIV4PouX8HytNIfLhqpJtXB4vjiViUI8IJ7bkC4ikkQvKksnOTKICwnqWSZ9YS5f0WCxmpgjbIq7EJcM4aI2nmhLNY2JIUgOjXZFWBHb+x5oh6cwb0Tv1ackHdKi0I9OO2wE9aogIOn540CCCziyhN+IaejtgAONKznHlHyutPrHGwCx9S6B8kfS4Mfi4Eyv7OU730bT1SCBjt834cXsf43zVjPUqqJjgrjeGnBxSG4aYAKFuVbeCfkDIjAqMb6yLNIbCuvXhMH2/+k2vkNpkORhR59N1CkzoOENvneIosjYmuTxlhUzaGEJQ/iWqx4dmwpmKjrwTiTGTCVozNAYqk/zXOndWxuWSmJkQpJw3pK5KX6QrLt5LATMqpmPAQhkhK6PUjzHUn7E0gHE0kPE0iKkolgkUx9SZmVAdDgpffdyJKg3k7VmzYGCwVXGz/tXmkOIp+vcWs+EMuhhvN0h9uhfzWJziBQmCREGSIFmQIkgVpAnSBRmC//6hkLZwaVhwxlrJSOdqlFtOYxlau9F2QN5Y98xmIAsiM1HVp2VFX+DHHGg6Ecjh3vmqtidX3qHI2qycTk/iwxSt5UzTmEP92ZBnEWTk4Mx8Mpl78ZDokxg/KWb+Q0QkvdKVmq3TMW+RXEgrsziSAfNXFMhDc60N5N9jQzjfO0kBKpUZl0ZmwJ41j/B9Hz6wmRaJB84niNmQrzp9eSlQCDDzazGDdVi3P36VZQ+Jy4f9UBNp+3zTjqI4abaFAm+GShVaXlsGdF3FYzZcDI6cori4kMxUECl9IjJZpzkvitAoxKue+90pDMvcKRxLl53TmOKCmV/xRolNKSqqUxc6LStOETmFOiLZZptlZepcKiAzteG8PEdpnQpbOMNcMsR4RR2Bs0cKFEvSmIjAFcnarqwUL4lDhHmnVkwu1IwshbiCcgvOheZuYyOteufZZwlcTlLgnZ3o/WcYdzZHW/WGaqaVfmTZ1aWCceJjkbZqsfbkOtcFlUZM/jy+hXHDbaUobWqqXaeWobbLO99yG5N3U4wxco0rQGGcOLASFMXeJoham8M+/x6O2WywK2l4HGbq1CoUyC/IZikQhdq3SiuNrvAEj0AVu9x2x3lp/xWzahaxidezFVtdcb5uEnzyl0ZmYiuKI0exvCd4Xc9CV1KB0db00z92wDPde0kukbvZIWN6jUWFTmPIC/Y4UPCm8UfDTFZpZNon1qLFTkBhxzB+FjQRA2Q/YRJT8pQigslMaUpFyAG8TMlXigiqmAZX4xgijKjRlGpLE0GdplRfCaJo0JQaSxNBk6ZmMzcya0FmrcisDdn0Q3HI2sWSppYigmlM1XT/kLQZSNpMJG0WkjYbSZuDpM1F0uYhFc1HxU4m1QJjDK6iL0S5uSj5rgXc3RejEigtcRBtqYPQsiTskmO5vosV+q4VGIKbOkDg0jtRrq+Em1YloaTFar3EGr1EUC8R0kus1Uus00usL97ABr2BjXoDm/QGNhuWtMVBKOwg/i78lT7hBsAvDmwHc/ao3vmUbBmhjeYySZNWvGkfZAgISDSaDo1SVpzGDsAEkF8B+gEapViUoZgUWXcRIGFZNm6gWbAKk0bp0k1MHG9fLYtV4iS2SmLEQFARzRcnf9PUS0LVn05/J9MiRRBU3v2IrvW974v4N00L7ZMk0wXP1409CHo/an8zTRHD3eSJ6m8D4YMkZNl3M79sqeuAsr/m3f+8/yl7A50aiAEJgeBeMWzu7ui9UfUBCe2TIqZIoOd/3/udRBOQidQZUERzb2/VwZN1H/Sju82ew2H2Wfr6qvfVf3hqwDvAIpkQVFy4B9Pe9e4/XvPeceu7h3dvO56iJPf0+A6cqA2ip18ER+iFgggiuOkvj24bby0N9j2UHIkgqIt+sVgfodC4YghLSMjSZbH0VR/6dMDrYJeKHilKTemt6v6kvzvn3/RrdWtr0GoN/xL+Sex/cPYLUpepx9cz/D46UPU5KXgAQa+NDps1v6J3xP1i2HtaDB0M9aX2deA7SYff//+gUCovMmIK/qfsFcOk+4Y5ZN97XlG6zebqtMbKgeRFi51vnxTQYBUik2rS/Cn6PC8ADR8FGxsRPB82dzfND90gIcshOcYUkfjherBz53odpm6TP8txlwOZ71xmfHHOvq053qFF/MRlS3jP0ELudrf2OeN8DHvp6ZceLe8qKYvWz/7yp0u4dKPfli3CYq0O13Ih71mylJ80tOi10On8wi+F4+LWgDPeJ30msSQt9/vkmHq9/Lvo2b461mP801v3W4xTcs6CbvF9UDdrSt+A8OUbpSh55qAUFXWznBBfdeJ8a4d7ugT5tvxUza3h9m4H7ptTqiG4z0g5dc0X29OcGlhpGFMpQo9ytTS+NViZpNdvU4kWx+LKxNY10kQ1yqGXrhe4/1nvP7E+nd5A92TtaRplbHSqoIdOqtRWti+fkB5/n1+/VvCmz12pG1kpQWsfi1ftlBobm0bpngs16CHkbIwdLnParxtTV3QYRlfJ0KFskH7pdN/YDn+yRuSd7sNH3aO0DYPggk6uWuXrfOc+fa3VTxFVvKaNxHsiHmsXyCLIE5yuOeN3/Jdf8HBL/5M6shjyhxHx9BjB1O0+4NLOnjLLSxwO7ukN4jMbOIcD879KLSi6Pk61Oqm2377n8079PXEEQ7cy7OKEC9nbpet118fxweTafpt69x/Bt8UqGzNQt7aelpc44dn5cqhwf71+qKp/Zf/+a0zcizOUWpl/iBcSXip0pplkatCchoH5c5aUM8I7/dWxAej8WicPL1URFZ9BDJelUwEwTkGqUhgSlydVes95YdXvhh9Gfz/aeFWvgVb4tuLbcv4+wLdutVZv/cUonwBD/6eDlE0aSiKK/uoH3+J1wDE/jMVqY2ysGufN84oIXB0sPzy8ollX/LegY74DgJXJR57sn+VGza0x3DnuIgABFM15LmajjjsNlYj+JEZGbuRYcAMOWxFkPN2w6Wd46xo4gVWQR/X4lyI/R6K/YK0110GzudPRW7Y+UOBGTfNNzHeYT0fiH0taunBpq9HEW8OKSaBGj21L0MqenEmNRWBAWDWAk4CpNoEZJ2tTaPFgbQYj8HxtFilErs3BTRwT8uO1NXQaWfIotchmPkAF5mMBAliEmZiOGVgCG9LgRzpscMAOOwowlT3JhusdazXGSC/hxR3UlmWVwWHpOIKheqONvjyhSiTHIkVUco5bnji8m//zL7PKaT1Vl5I6UE609f+gkr6MZKVyKc7zJRmCahLsdlyA5fdQkRSan9LgnnLEyGSkaKJCJog0wAgvepWBt80+1yKln1bMVtCljfNWDueKLsWwaEbBSfSPTEmVRsUcYYMnEjcjeyCZzBXK9E9BYBXLKjOSpUDR+nEV3TFSUdQaz+ot98QxgXwx0GQ+EEUAKB2qZPkQQ0GqFD8UPFMqyaCHM24BZmSGic9EYMagKizOw9Hz50DMrDLrqqLkTAhplMictiCAx5S3BIUQdeJeLnBy2CNtMfz6cV4u8XKoFZQesbf9YZiIERiHjaNodDW6LgcirX/mPnJIkBGDUpTBhSa0EIr38D5hCIszhCM8URGBqImoWjpvpt1ebu/v3Gl3qJfMnNM+9V+kiRFyROTPHQWOcs1dNW94/ukKMPZBvDi55i5CttdeJz84DLngLqjcdwEZ87bFFR8CIG35OAkDVN6VRDZ7aq67NteYqZ2lpT8oYB2CytoBd6VuAx4WgiAsnuj3WohG+LugzXiQRDeM3XYXlULv4dp5VFYC) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Size4;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Typewriter;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2) format("woff2")}.katex{font: 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;position:relative;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none!important;border-color:currentColor}.katex .katex-version:after{content:"0.16.47"}.katex .katex-mathml{border:0;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.katex .katex-html>.newline{display:block}.katex .base{position:relative;white-space:nowrap;width:-webkit-min-content;width:-moz-min-content;width:min-content}.katex .base,.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-style:italic;font-weight:700}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathboldfrak,.katex .textboldfrak{font-family:KaTeX_Fraktur;font-weight:700}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .mathsfit,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{border-collapse:collapse;display:inline-table;table-layout:fixed}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;position:relative;vertical-align:bottom}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;font-size:1px;min-width:2px;vertical-align:bottom;width:2px}.katex .vbox{align-items:baseline;display:inline-flex;flex-direction:column}.katex .hbox{width:100%}.katex .hbox,.katex .thinbox{display:inline-flex;flex-direction:row}.katex .thinbox{max-width:0;width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{border-bottom-style:solid;display:inline-block;width:100%}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .smash{display:inline;line-height:0}.katex .clap,.katex .llap,.katex .rlap{position:relative;width:0}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{border:0 solid;display:inline-block;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{border-bottom-style:solid;display:inline-block;width:100%}.katex .hdashline{border-bottom-style:dashed;display:inline-block;width:100%}.katex .sqrt>.root{margin-left:.2777777778em;margin-right:-.5555555556em}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.1666666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.3333333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.6666666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.4566666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.1466666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.7142857143em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.8571428571em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.1428571429em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.2857142857em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.4285714286em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.7142857143em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.0571428571em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.4685714286em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.9628571429em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.5542857143em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.5555555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.6666666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.7777777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.8888888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.1111111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.3333333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.3044444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.7644444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.4166666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.5833333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.6666666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.7283333333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.0733333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.3472222222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.4166666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.4861111111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.5555555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.6944444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.4402777778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.7277777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.2893518519em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.3472222222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.4050925926em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.462962963em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.5208333333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.6944444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.2002314815em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.4398148148em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.2410800386em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.2892960463em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.337512054em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.3857280617em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.4339440694em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.4821600771em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.5785920926em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.6943105111em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.8331726133em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.1996142719em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.2009646302em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.2411575563em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.2813504823em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.3215434084em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.3617363344em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.4019292605em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.4823151125em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.578778135em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.6945337621em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.8336012862em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist-t,.katex .op-limits>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{fill:currentColor;stroke:currentColor;display:block;height:inherit;position:absolute;width:100%}.katex svg path{stroke:none}.katex svg{fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex img{border-style:none;max-height:none;max-width:none;min-height:0;min-width:0}.katex .stretchy{display:block;overflow:hidden;position:relative;width:100%}.katex .stretchy:after,.katex .stretchy:before{content:""}.katex .hide-tail{overflow:hidden;position:relative;width:100%}.katex .halfarrow-left{left:0;overflow:hidden;position:absolute;width:50.2%}.katex .halfarrow-right{overflow:hidden;position:absolute;right:0;width:50.2%}.katex .brace-left{left:0;overflow:hidden;position:absolute;width:25.1%}.katex .brace-center{left:25%;overflow:hidden;position:absolute;width:50%}.katex .brace-right{overflow:hidden;position:absolute;right:0;width:25.1%}.katex .x-arrow-pad{padding:0 .5em}.katex .cd-arrow-pad{padding:0 .55556em 0 .27778em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{border:.04em solid;box-sizing:border-box}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .angl{border-right:.049em solid;border-top:.049em solid;box-sizing:border-box;margin-right:.03889em}.katex .anglpad{padding:0 .03889em}.katex .eqn-num:before{content:"(" counter(katexEqnNo) ")";counter-increment:katexEqnNo}.katex .mml-eqn-num:before{content:"(" counter(mmlEqnNo) ")";counter-increment:mmlEqnNo}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:calc(50% + .3em);text-align:left}.katex .cd-label-right{display:inline-block;left:calc(50% + .3em);position:absolute;text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{padding-left:2em;text-align:left}body{counter-reset:katexEqnNo mmlEqnNo}';function z(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function xe(){return de.replace(/url\(\/assets\/(KaTeX_[A-Za-z0-9_-]+)-[A-Za-z0-9_-]+\.(woff2|woff|ttf)\)/g,"url(https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/fonts/$1.$2)")}const ue=["重点难点解析","典型例题精讲"];function W(e,s,t){const n=e.课堂讲义,a=e.课后作业.reduce((k,d)=>k+d.questions.length,0),o=e.备课方案||"",i=o.match(/课时(?:安排)?[：:]\s*(\d+)\s*课时/)||o.match(/(\d+)\s*课时/),r=i?i[1]:"—",f=[...(n.核心知识点||"").matchAll(/\*\*(一|二|三|四|五|六|七|八|九|十)、([^*]+?)\*\*/g)].map(k=>`${k[1]}、${k[2].trim()}`),m=f.length?`<div class="board"><div class="board-title">${z(e.chapter)}</div>${f.map(k=>`<div class="board-item">${z(k)}</div>`).join("")}</div>
      <p class="wm-note">板书为自动生成参考骨架，教师可按课堂实际增删。</p>`:'<p class="wm-note">板书设计参考：围绕本节核心概念，建议板书「课题 + 核心概念 + 典型例题结构」。</p>',c=e.课后作业.map((k,d)=>s&&d>0?`
    <section class="hw-group">
      <h3>${k.difficulty}档 · ${z(k.title)}（${k.questions.length} 题）🔒 会员专享</h3>
      <p class="wm-note">该档作业为会员专享内容，开通会员后可导出完整版。</p>
    </section>`:`
    <section class="hw-group">
      <h3>${k.difficulty}档 · ${z(k.title)}（${k.questions.length} 题）</h3>
      ${k.questions.map((L,F)=>`
        <div class="hw-item">
          <p class="hw-q">${F+1}. ${M(L.q)}</p>
          ${!s&&L.a?`<p class="hw-a">【参考答案】${M(L.a)}</p>`:""}
        </div>`).join("")}
    </section>`).join(""),v=t!==void 0?`<h2 class="sec-title" id="${t}">${z(e.chapter)} · 教案</h2>`:`<h1>${z(e.chapter)}</h1>`,u=k=>{const d=n[k];return!d||!d.trim()?"":s&&ue.includes(k)?`
      <div class="locked-note">${z(k)}为会员专享内容，开通会员后可导出完整版。</div>`:`
      <div class="md">${x(d)}</div>`};return`
${v}
<div class="meta">${e.stage}${e.grade}${z(e.subject)} · 教案 · 一键生成，可直接用于课堂教学 · 共 ${a} 道习题</div>

<h2>一、教学基本信息</h2>
<table class="info-table">
  <tr><th>课题</th><td>${z(e.chapter)}</td></tr>
  <tr><th>学科</th><td>${z(e.subject)}</td></tr>
  <tr><th>学段 / 年级</th><td>${z(e.stage)} / ${z(e.grade)}</td></tr>
  <tr><th>课时建议</th><td>${r} 课时</td></tr>
  <tr><th>课型</th><td>新授课（含作业布置与课后反馈）</td></tr>
</table>

<h2>二、教学设计总览</h2>
<div class="md">${x(o)}</div>

<h2>三、教学过程</h2>
<div class="link-step"><span class="link-no">环节 1</span><div><strong>情境导入</strong><p class="step-tip">建议：结合生活实例或复习旧知引出课题《${z(e.chapter)}》，激发学生兴趣，明确学习目标。</p></div></div>
<div class="link-step"><span class="link-no">环节 2</span><div><strong>新知讲授</strong>${u("核心知识点")}</div></div>
<div class="link-step"><span class="link-no">环节 3</span><div><strong>重点难点突破</strong>${u("重点难点解析")}</div></div>
<div class="link-step"><span class="link-no">环节 4</span><div><strong>典例精讲</strong>${u("典型例题精讲")}</div></div>
<div class="link-step"><span class="link-no">环节 5</span><div><strong>巩固练习与课堂小结</strong><p class="step-tip">建议：组织学生完成基础档作业巩固新知；教师带领学生梳理本节知识结构，点明易错点，布置课后作业。</p></div></div>

<h2>四、板书设计（参考）</h2>
${m}

<h2>五、作业布置</h2>
${c}

<h2>六、教学反思</h2>
<div class="reflect-box">
  <p class="step-tip">参考反思角度：① 教学目标达成度；② 学生课堂参与情况；③ 重难点突破是否有效；④ 后续改进方向。</p>
  <div class="reflect-line"></div><div class="reflect-line"></div><div class="reflect-line"></div><div class="reflect-line"></div>
</div>

<h2>七、课后反馈</h2>
${s?'<p class="wm-note">课后反馈为会员专享内容，开通会员后可导出完整版。</p>':`<div class="md">${x(e.课后反馈)}</div>`}`}function A(e,s,t){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${z(e)}</title>
<style>
${xe()}
* { box-sizing: border-box; }
body { font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif; max-width: 800px; margin: 0 auto; padding: 32px 24px; color: #1f2937; line-height: 1.8; }
h1 { font-size: 26px; margin: 0 0 6px; }
.sec-title { font-size: 22px; color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 6px; margin-top: 44px; page-break-before: always; }
.toc { border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 20px; margin: 20px 0 10px; background: #f8fafc; }
.toc h2 { margin-top: 0; font-size: 17px; color: #1e40af; }
.toc ol { padding-left: 1.4em; margin: 8px 0; }
.toc a { color: #1d4ed8; text-decoration: none; }
.meta { color: #6b7280; font-size: 13px; margin-bottom: 24px; }
h2 { font-size: 19px; color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 6px; margin-top: 30px; }
h3 { font-size: 15px; color: #374151; margin-top: 18px; }
.md { font-size: 15px; }
.md table { border-collapse: collapse; width: 100%; font-size: 13.5px; margin: 12px 0; }
.md th, .md td { border: 1px solid #d1d5db; padding: 6px 10px; text-align: left; }
.md th { background: #f3f4f6; }
.md img { max-width: 100%; }
.md ul { padding-left: 1.6em; }
.hw-item { border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px 14px; margin: 10px 0; }
.hw-q { margin: 0; font-weight: 500; }
.hw-a { margin: 8px 0 0; background: #f0f9ff; border-left: 3px solid #3b82f6; padding: 8px 12px; font-size: 14px; }
.katex-display { overflow-x: auto; overflow-y: hidden; }
footer { margin-top: 40px; color: #9ca3af; font-size: 12px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 16px; }
.info-table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 14px; }
.info-table th { width: 120px; background: #f3f4f6; text-align: left; }
.info-table th, .info-table td { border: 1px solid #d1d5db; padding: 8px 12px; }
.link-step { border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 14px; margin: 10px 0; display: flex; gap: 12px; align-items: flex-start; }
.link-no { background: #1e40af; color: #fff; border-radius: 999px; padding: 2px 12px; font-size: 12.5px; white-space: nowrap; margin-top: 3px; }
.link-step .step-tip { color: #6b7280; font-size: 13.5px; margin: 4px 0 0; }
.locked-note { color: #b45309; background: #fffbeb; border: 1px dashed #f59e0b; border-radius: 6px; padding: 8px 12px; font-size: 13.5px; margin: 6px 0; }
.board { border: 2px solid #1e40af; border-radius: 10px; padding: 14px 16px; max-width: 520px; margin: 12px 0; background: #f8fafc; }
.board-title { font-size: 17px; font-weight: 700; color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 6px; margin-bottom: 10px; text-align: center; }
.board-item { font-size: 14.5px; padding: 5px 0; border-bottom: 1px dashed #e5e7eb; }
.reflect-box { border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; }
.reflect-line { border-bottom: 1px solid #d1d5db; height: 34px; margin-top: 6px; }
.wm-note { color: #b45309; font-size: 13.5px; background: #fffbeb; border-radius: 6px; padding: 8px 12px; }
.wm { position: fixed; bottom: 12px; right: 12px; color: rgba(0,0,0,.18); font-size: 11px; pointer-events: none; }
</style>
</head>
<body>
${s}
<footer>由「教师备课助手」生成 · 发布人：${j.name} · 微信：${j.wechat} · 数据来源于教案知识库</footer>
${t?`<div class="wm">${fe}</div>`:""}
</body>
</html>`}function Ke(e,s){const t=W(e,s);return A(`${e.stage}${e.grade}${e.subject}《${e.chapter}》备课资料`,t,s)}function Me(e,s,t){const n=`<div class="toc">
<h2>本册目录（共 ${e.length} 章）</h2>
<ol>${e.map((o,i)=>`<li><a href="#sec-${i}">${z(o.chapter)}</a></li>`).join("")}</ol>
</div>`,a=`
<h1>${z(t)}</h1>
<div class="meta">${e.length} 章完整教案 ｜ 备课方案 / 课堂讲义 / 课后作业 / 课后反馈 ｜ 共 ${e.reduce((o,i)=>o+i.课后作业.reduce((r,l)=>r+l.questions.length,0),0)} 道习题</div>
${n}
${e.map((o,i)=>W(o,s,`sec-${i}`)).join(`
`)}`;return A(t,a,s)}function Oe(e){const s=e.map(({lesson:n,index:a})=>`
<tr>
  <td><a href="#/lesson/${a}">${z(n.chapter)}</a></td>
  <td>${z(n.stage)}</td><td>${z(n.grade)}</td><td>${z(n.subject)}</td>
</tr>`).join(""),t=`
<h1>我的收藏 · 教案清单（${e.length} 章）</h1>
<div class="meta">点击章节名可跳转查看 ｜ 由「教师备课助手」生成 · 发布人：hzj</div>
<table>
<thead><tr><th>章节</th><th>学段</th><th>年级</th><th>学科</th></tr></thead>
<tbody>${s}</tbody>
</table>`;return A("我的收藏 · 教案清单",t,!1)}function Ne(e,s){const t=e.openClass,n=`
<h1>${z(e.chapter)} · 公开课版</h1>
<div class="meta">${e.stage}${e.grade}${z(e.subject)} · 公开课详案 + 说课稿 · 会员专享增值内容</div>

${`
<h2>一、公开课详案</h2>
<div class="md">${x(t&&t.plan?t.plan:"")}</div>

<h2>二、说课稿</h2>
<div class="md">${x(t&&t.talk?t.talk:"")}</div>

<p class="wm-note">本公开课教案由「教师备课助手」一键生成，供教师公开课备课、说课比赛参考。可直接用于课堂教学。</p>
`}`;return A(`${e.stage}${e.grade}${e.subject}《${e.chapter}》公开课版`,n,s)}function Pe(e,s){const t=new Blob([s],{type:"text/html;charset=utf-8"}),n=URL.createObjectURL(t),a=document.createElement("a");a.href=n,a.download=e,a.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}const pe="d8f219c3e45512fce03ad82bf56c5cfd";let O=!1;function Ie(){if(!(O||typeof document>"u")){O=!0;try{const e=document.createElement("script");e.async=!0,e.src=`https://hm.baidu.com/hm.js?${pe}`;const s=document.getElementsByTagName("script")[0];s&&s.parentNode&&s.parentNode.insertBefore(e,s),window._hmt=window._hmt||[]}catch{}}}function Xe(e,s){try{if(!window._hmt)return;const t=s?Object.entries(s).map(([n,a])=>`${n}=${a}`).join("&"):"";window._hmt.push(["_trackEvent","wb",e,t])}catch{}}const $e=[{subject:"语文",version:"统编版",grade:"一年级",volume:"上册",units:[{name:"第一单元（识字）",lessons:["天地人","金木水火土","口耳目","日月水火","对韵歌"]},{name:"第二单元（拼音）",lessons:["a o e","i u ü","b p m f","d t n l","g k h","j q x"]},{name:"第三单元（拼音）",lessons:["z c s","zh ch sh r","y w","ai ei ui","ao ou iu","ie üe er"]},{name:"第四单元（拼音）",lessons:["an en in un ün","ang eng ing ong"]},{name:"第五单元（课文）",lessons:["秋天","小小的船","江南","四季"]},{name:"第六单元（识字）",lessons:["画","大小多少","小书包","日月明","升国旗"]},{name:"第七单元（课文）",lessons:["影子","比尾巴","青蛙写诗","雨点儿"]},{name:"第八单元（课文）",lessons:["明天要远足","大还是小","项链"]}]},{subject:"语文",version:"统编版",grade:"一年级",volume:"下册",units:[{name:"第一单元（识字）",lessons:["春夏秋冬","姓氏歌","小青蛙","猜字谜"]},{name:"第二单元（课文）",lessons:["吃水不忘挖井人","我多想去看看","一个接一个","四个太阳"]},{name:"第三单元（课文）",lessons:["小公鸡和小鸭子","树和喜鹊","怎么都快乐"]},{name:"第四单元（课文）",lessons:["静夜思","夜色","端午粽","彩虹"]},{name:"第五单元（识字）",lessons:["动物儿歌","古对今","操场上","人之初"]},{name:"第六单元（课文）",lessons:["古诗二首：池上/小池","荷叶圆圆","要下雨了"]},{name:"第七单元（课文）",lessons:["文具的家","一分钟","动物王国开大会","小猴子下山"]},{name:"第八单元（课文）",lessons:["棉花姑娘","咕咚","小壁虎借尾巴"]}]},{subject:"语文",version:"统编版",grade:"二年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["小蝌蚪找妈妈","我是什么","植物妈妈有办法"]},{name:"第二单元（识字）",lessons:["场景歌","树之歌","拍手歌","田家四季歌"]},{name:"第三单元（课文）",lessons:["曹冲称象","玲玲的画","一封信","妈妈睡了"]},{name:"第四单元（课文）",lessons:["古诗二首：登鹳雀楼/望庐山瀑布","黄山奇石","日月潭","葡萄沟"]},{name:"第五单元（课文）",lessons:["坐井观天","寒号鸟","我要的是葫芦"]},{name:"第六单元（课文）",lessons:["大禹治水","朱德的扁担","难忘的泼水节"]},{name:"第七单元（课文）",lessons:["古诗二首：夜宿山寺/敕勒歌","雾在哪里","雪孩子"]},{name:"第八单元（课文）",lessons:["狐假虎威","狐狸分奶酪","纸船和风筝","风娃娃"]}]},{subject:"语文",version:"统编版",grade:"二年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["古诗二首：村居/咏柳","找春天","开满鲜花的小路","邓小平爷爷植树"]},{name:"第二单元（课文）",lessons:["雷锋叔叔你在哪里","千人糕","一匹出色的马"]},{name:"第三单元（识字）",lessons:["神州谣","传统节日","“贝”的故事","中国美食"]},{name:"第四单元（课文）",lessons:["彩色的梦","枫树上的喜鹊","沙滩上的童话","我是一只小虫子"]},{name:"第五单元（课文）",lessons:["寓言二则：亡羊补牢/揠苗助长","画杨桃","小马过河"]},{name:"第六单元（课文）",lessons:["古诗二首：晓出净慈寺送林子方/绝句","雷雨","要是你在野外迷了路","太空生活趣事多"]},{name:"第七单元（课文）",lessons:["大象的耳朵","蜘蛛开店","青蛙卖泥塘","小毛虫"]},{name:"第八单元（课文）",lessons:["祖先的摇篮","当世界年纪还小的时候","羿射九日"]}]},{subject:"语文",version:"统编版",grade:"三年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["大青树下的小学","花的学校","不懂就要问"]},{name:"第二单元（课文）",lessons:["古诗三首：山行/赠刘景文/夜书所见","铺满金色巴掌的水泥道","秋天的雨","听听秋的声音"]},{name:"第三单元（课文）",lessons:["卖火柴的小女孩","那一定会很好","在牛肚子里旅行","一块奶酪"]},{name:"第四单元（课文）",lessons:["总也倒不了的老屋","胡萝卜先生的长胡子","不会叫的狗"]},{name:"第五单元（课文）",lessons:["搭船的鸟","金色的草地"]},{name:"第六单元（课文）",lessons:["古诗三首：望天门山/饮湖上初晴后雨/望洞庭","富饶的西沙群岛","海滨小城","美丽的小兴安岭"]},{name:"第七单元（课文）",lessons:["大自然的声音","父亲、树林和鸟","带刺的朋友"]},{name:"第八单元（课文）",lessons:["司马光","掌声","灰雀","手术台就是阵地"]}]},{subject:"语文",version:"统编版",grade:"三年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["古诗三首：绝句/惠崇春江晚景/三衢道中","燕子","荷花","昆虫备忘录"]},{name:"第二单元（课文）",lessons:["守株待兔","陶罐和铁罐","鹿角和鹿腿","池子与河流"]},{name:"第三单元（课文）",lessons:["古诗三首：元日/清明/九月九日忆山东兄弟","纸的发明","赵州桥","一幅名扬中外的画"]},{name:"第四单元（课文）",lessons:["花钟","蜜蜂","小虾"]},{name:"第五单元（课文）",lessons:["小真的长头发","我变成了一棵树"]},{name:"第六单元（课文）",lessons:["童年的水墨画","剃头大师","肥皂泡","我不能失信"]},{name:"第七单元（课文）",lessons:["我们奇妙的世界","海底世界","火烧云"]},{name:"第八单元（课文）",lessons:["慢性子裁缝和急性子顾客","方帽子店","漏","枣核"]}]},{subject:"语文",version:"统编版",grade:"四年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["观潮","走月亮","现代诗二首：秋晚的江上/花牛歌","繁星"]},{name:"第二单元（课文）",lessons:["一个豆荚里的五粒豆","蝙蝠和雷达","呼风唤雨的世纪","蝴蝶的家"]},{name:"第三单元（课文）",lessons:["古诗三首：暮江吟/题西林壁/雪梅","爬山虎的脚","蟋蟀的住宅"]},{name:"第四单元（课文）",lessons:["盘古开天地","精卫填海","女娲补天","普罗米修斯"]},{name:"第五单元（课文）",lessons:["麻雀","爬天都峰"]},{name:"第六单元（课文）",lessons:["牛和鹅","一只窝囊的大老虎","陀螺"]},{name:"第七单元（课文）",lessons:["古诗三首：出塞/凉州词/夏日绝句","为中华之崛起而读书","梅兰芳蓄须","延安，我把你追寻"]},{name:"第八单元（课文）",lessons:["王戎不取道旁李","西门豹治邺","故事二则：扁鹊治病/纪昌学射"]}]},{subject:"语文",version:"统编版",grade:"四年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["古诗三首：宿新市徐公店/四时田园杂兴（其二十五）/清平乐·村居","乡下人家","天窗","三月桃花水"]},{name:"第二单元（课文）",lessons:["琥珀","飞向蓝天的恐龙","纳米技术就在我们身边","千年梦圆在今朝"]},{name:"第三单元（课文）",lessons:["短诗三首：繁星（七一）/（一三一）/（一五九）","绿","白桦","在天晴了的时候"]},{name:"第四单元（课文）",lessons:["猫","母鸡","白鹅"]},{name:"第五单元（课文）",lessons:["海上日出","记金华的双龙洞"]},{name:"第六单元（课文）",lessons:["文言文二则：囊萤夜读/铁杵成针","小英雄雨来","我们家的男子汉","芦花鞋"]},{name:"第七单元（课文）",lessons:["古诗三首：芙蓉楼送辛渐/塞下曲/墨梅","“诺曼底”号遇难记","黄继光","挑山工"]},{name:"第八单元（课文）",lessons:["宝葫芦的秘密","巨人的花园","海的女儿"]}]},{subject:"语文",version:"统编版",grade:"五年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["白鹭","落花生","桂花雨","珍珠鸟"]},{name:"第二单元（课文）",lessons:["搭石","将相和","什么比猎豹的速度更快"]},{name:"第三单元（课文）",lessons:["猎人海力布","牛郎织女（一）","牛郎织女（二）"]},{name:"第四单元（课文）",lessons:["古诗三首：示儿/题临安邸/己亥杂诗","少年中国说（节选）","圆明园的毁灭"]},{name:"第五单元（课文）",lessons:["太阳","松鼠"]},{name:"第六单元（课文）",lessons:["慈母情深","父爱之舟","“精彩极了”和“糟糕透了”"]},{name:"第七单元（课文）",lessons:["古诗词三首：山居秋暝/枫桥夜泊/长相思","四季之美","鸟的天堂","月迹"]},{name:"第八单元（课文）",lessons:["古人谈读书","忆读书","我的“长生果”"]}]},{subject:"语文",version:"统编版",grade:"五年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["古诗三首：四时田园杂兴（其三十一）/稚子弄冰/村晚","祖父的园子","月是故乡明","梅花魂"]},{name:"第二单元（课文）",lessons:["草船借箭","景阳冈","猴王出世","红楼春趣"]},{name:"第四单元（课文）",lessons:["古诗三首：从军行/秋夜将晓出篱门迎凉有感/闻官军收河南河北","青山处处埋忠骨","军神","清贫"]},{name:"第五单元（课文）",lessons:["人物描写一组：摔跤/他像一棵挺脱的树/两茎灯草","刷子李"]},{name:"第六单元（课文）",lessons:["自相矛盾","田忌赛马","跳水"]},{name:"第七单元（课文）",lessons:["威尼斯的小艇","牧场之国","金字塔"]},{name:"第八单元（课文）",lessons:["杨氏之子","手指","童年的发现"]}]},{subject:"语文",version:"统编版",grade:"六年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["草原","丁香结","古诗词三首：宿建德江/六月二十七日望湖楼醉书/西江月·夜行黄沙道中"]},{name:"第二单元（课文）",lessons:["七律·长征","狼牙山五壮士","开国大典","灯光"]},{name:"第三单元（课文）",lessons:["竹节人","宇宙生命之谜","故宫博物院"]},{name:"第四单元（课文）",lessons:["桥","穷人","在柏林"]},{name:"第五单元（课文）",lessons:["夏天里的成长","盼"]},{name:"第六单元（课文）",lessons:["古诗三首：浪淘沙/江南春/书湖阴先生壁","只有一个地球","青山不老","三黑和土地"]},{name:"第七单元（课文）",lessons:["文言文二则：伯牙鼓琴/书戴嵩画牛","月光曲","京剧趣谈"]},{name:"第八单元（课文）",lessons:["少年闰土","好的故事","我的伯父鲁迅先生","有的人"]}]},{subject:"语文",version:"统编版",grade:"六年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["北京的春节","腊八粥","古诗三首：寒食/迢迢牵牛星/十五夜望月"]},{name:"第二单元（课文）",lessons:["鲁滨逊漂流记（节选）","骑鹅旅行记（节选）","汤姆·索亚历险记（节选）"]},{name:"第三单元（课文）",lessons:["匆匆","那个星期天"]},{name:"第四单元（课文）",lessons:["古诗三首：马诗/石灰吟/竹石","十六年前的回忆","为人民服务","董存瑞舍身炸暗堡"]},{name:"第五单元（课文）",lessons:["文言文二则：学弈/两小儿辩日","真理诞生于一百个问号之后","表里的生物","他们那时候多有趣啊"]}]}],qe=[{subject:"数学",version:"人教版",grade:"一年级",volume:"上册",units:[{name:"第一单元 准备课",lessons:["数一数","比多少"]},{name:"第二单元 位置",lessons:["上、下、前、后","左、右"]},{name:"第三单元 1~5的认识和加减法",lessons:["1~5的认识","比大小","第几","分与合","加法","减法","0的认识"]},{name:"第四单元 认识图形（一）",lessons:["认识立体图形","拼一拼"]},{name:"第五单元 6~10的认识和加减法",lessons:["6和7的认识","8和9的认识","10的认识","6~10的加减法","连加连减","加减混合"]},{name:"第六单元 11~20各数的认识",lessons:["数数、读数","写数","十加几及相应的减法","解决问题"]},{name:"第七单元 认识钟表",lessons:["认识钟表","整时和半时","解决问题"]},{name:"第八单元 20以内的进位加法",lessons:["9加几","8、7、6加几","5、4、3、2加几","解决问题","整理和复习"]}]},{subject:"数学",version:"人教版",grade:"一年级",volume:"下册",units:[{name:"第一单元 认识图形（二）",lessons:["认识平面图形","拼一拼","七巧板"]},{name:"第二单元 20以内的退位减法",lessons:["十几减9","十几减8、7、6","十几减5、4、3、2","解决问题","整理和复习"]},{name:"第三单元 分类与整理",lessons:["分类与整理","整理自己的书包"]},{name:"第四单元 100以内数的认识",lessons:["数数、数的组成","读数、写数","数的顺序、比较大小","整十数加一位数及相应的减法","解决问题","整理和复习"]},{name:"第五单元 认识人民币",lessons:["认识人民币","简单的计算"]},{name:"第六单元 100以内的加法和减法（一）",lessons:["整十数加、减整十数","两位数加一位数、整十数","两位数减一位数、整十数","解决问题","整理和复习"]},{name:"第七单元 找规律",lessons:["找规律（图形）","找规律（数字）","解决问题"]}]},{subject:"数学",version:"人教版",grade:"二年级",volume:"上册",units:[{name:"第一单元 长度单位",lessons:["认识厘米","认识米","认识线段","解决问题"]},{name:"第二单元 100以内的加法和减法（二）",lessons:["不进位加","进位加","不退位减","退位减","连加、连减和加减混合","解决问题","整理和复习"]},{name:"第三单元 角的初步认识",lessons:["角的初步认识","认识直角","认识锐角和钝角"]},{name:"第四单元 表内乘法（一）",lessons:["乘法的初步认识","2、3的乘法口诀","4、5的乘法口诀","6的乘法口诀","整理和复习"]},{name:"第五单元 观察物体（一）",lessons:["观察物体（从不同位置）","观察立体图形"]},{name:"第六单元 表内乘法（二）",lessons:["7的乘法口诀","8的乘法口诀","9的乘法口诀","解决问题","整理和复习"]},{name:"第七单元 认识时间",lessons:["认识时间","解决问题"]},{name:"第八单元 数学广角——搭配（一）",lessons:["搭配问题"]}]},{subject:"数学",version:"人教版",grade:"二年级",volume:"下册",units:[{name:"第一单元 数据收集整理",lessons:["数据的收集整理","用正字记录数据","整理分析数据"]},{name:"第二单元 表内除法（一）",lessons:["平均分","除法","用2~6的乘法口诀求商","解决问题","整理和复习"]},{name:"第三单元 图形的运动（一）",lessons:["轴对称图形","平移","旋转"]},{name:"第四单元 表内除法（二）",lessons:["用7、8、9的乘法口诀求商","解决问题","整理和复习"]},{name:"第五单元 混合运算",lessons:["没有括号的同级混合运算","含小括号的混合运算","解决问题","整理和复习"]},{name:"第六单元 有余数的除法",lessons:["有余数除法的意义","有余数除法的计算","解决问题"]},{name:"第七单元 万以内数的认识",lessons:["1000以内数的认识","10000以内数的认识","整百、整千数加减法","解决问题","整理和复习"]},{name:"第八单元 克和千克",lessons:["克和千克的认识","解决问题"]},{name:"第九单元 数学广角——推理",lessons:["简单推理","数独游戏"]}]},{subject:"数学",version:"人教版",grade:"三年级",volume:"上册",units:[{name:"第一单元 时、分、秒",lessons:["秒的认识","时、分、秒单位换算","解决问题"]},{name:"第二单元 万以内的加法和减法（一）",lessons:["两位数加两位数（口算）","两位数减两位数（口算）","几百几十加、减几百几十","解决问题","整理和复习"]},{name:"第三单元 测量",lessons:["毫米、分米的认识","千米的认识","吨的认识","解决问题"]},{name:"第四单元 万以内的加法和减法（二）",lessons:["三位数加法（不进位和进位）","三位数加法（连续进位）","三位数减法","加减法验算","解决问题","整理和复习"]},{name:"第五单元 倍的认识",lessons:["倍的认识","求一个数是另一个数的几倍","求一个数的几倍是多少","解决问题"]},{name:"第六单元 多位数乘一位数",lessons:["口算乘法","笔算乘法（不进位）","笔算乘法（进位）","乘数中间或末尾有0的乘法","解决问题","整理和复习"]},{name:"第七单元 长方形和正方形",lessons:["四边形","周长的认识","长方形和正方形的周长","解决问题"]},{name:"第八单元 分数的初步认识",lessons:["几分之一","几分之几","分数的简单计算","分数的简单应用"]},{name:"第九单元 数学广角——集合",lessons:["集合（重叠问题）"]}]},{subject:"数学",version:"人教版",grade:"三年级",volume:"下册",units:[{name:"第一单元 位置与方向（一）",lessons:["认识东南西北","认识东南、东北、西南、西北","会看简单的路线图"]},{name:"第二单元 除数是一位数的除法",lessons:["口算除法","笔算除法（基本）","笔算除法（商中间、末尾有0）","解决问题","整理和复习"]},{name:"第三单元 复式统计表",lessons:["复式统计表","解决问题"]},{name:"第四单元 两位数乘两位数",lessons:["口算乘法","笔算乘法（不进位）","笔算乘法（进位）","解决问题","整理和复习"]},{name:"第五单元 面积",lessons:["面积和面积单位","长方形、正方形面积的计算","面积单位间的进率","解决问题"]},{name:"第六单元 年、月、日",lessons:["年、月、日的认识","平年、闰年","24时计时法","解决问题"]},{name:"第七单元 小数的初步认识",lessons:["认识小数","简单的小数加、减法"]},{name:"第八单元 数学广角——搭配（二）",lessons:["搭配问题","排列组合初步"]}]},{subject:"数学",version:"人教版",grade:"四年级",volume:"上册",units:[{name:"第一单元 大数的认识",lessons:["亿以内数的认识","亿以内数的读法和写法","数的产生、十进制计数法","亿以上数的认识","计算工具的认识和用计算器计算","整理和复习"]},{name:"第二单元 公顷和平方千米",lessons:["公顷","平方千米"]},{name:"第三单元 角的度量",lessons:["线段、直线、射线","角的度量","角的分类","画角"]},{name:"第四单元 三位数乘两位数",lessons:["三位数乘两位数的笔算","因数中间或末尾有0的乘法","积的变化规律","解决问题"]},{name:"第五单元 平行四边形和梯形",lessons:["平行与垂直","画垂线和点到直线的距离","平行四边形和梯形的认识"]},{name:"第六单元 除数是两位数的除法",lessons:["口算除法","笔算除法（商是一位数）","笔算除法（商是两位数）","商的变化规律","解决问题","整理和复习"]},{name:"第七单元 条形统计图",lessons:["1格代表1个单位的条形统计图","1格代表多个单位的条形统计图"]},{name:"第八单元 数学广角——优化",lessons:["沏茶问题","烙饼问题","田忌赛马问题"]}]},{subject:"数学",version:"人教版",grade:"四年级",volume:"下册",units:[{name:"第一单元 四则运算",lessons:["加、减法的意义和各部分间的关系","乘、除法的意义和各部分间的关系","括号","解决问题","整理和复习"]},{name:"第二单元 观察物体（二）",lessons:["观察物体（从不同位置观察）","观察立体图形"]},{name:"第三单元 运算定律",lessons:["加法交换律和结合律","加法运算定律的应用","乘法交换律和结合律","乘法分配律","简便计算","整理和复习"]},{name:"第四单元 小数的意义和性质",lessons:["小数的意义","小数的读法和写法","小数的大小比较","小数点移动引起小数大小的变化","小数与单位换算","求小数的近似数","整理和复习"]},{name:"第五单元 三角形",lessons:["三角形的特性","三角形三边关系","三角形的分类","三角形的内角和"]},{name:"第六单元 小数的加法和减法",lessons:["小数加、减法","小数加减混合运算","整数加法运算定律推广到小数","解决问题"]},{name:"第七单元 图形的运动（二）",lessons:["轴对称","平移","解决问题"]},{name:"第八单元 平均数与条形统计图",lessons:["平均数","复式条形统计图"]},{name:"第九单元 数学广角——鸡兔同笼",lessons:["鸡兔同笼"]}]},{subject:"数学",version:"人教版",grade:"五年级",volume:"上册",units:[{name:"第一单元 小数乘法",lessons:["小数乘整数","小数乘小数","积的近似数","整数乘法运算定律推广到小数","解决问题"]},{name:"第二单元 位置",lessons:["用数对确定位置","在方格纸上用数对表示位置"]},{name:"第三单元 小数除法",lessons:["小数除以整数","一个数除以小数","商的近似数","循环小数","解决问题","整理和复习"]},{name:"第四单元 可能性",lessons:["事件发生的可能性","可能性的大小","掷一掷"]},{name:"第五单元 简易方程",lessons:["用字母表示数","方程的意义","等式的性质","解方程","实际问题与方程","整理和复习"]},{name:"第六单元 多边形的面积",lessons:["平行四边形的面积","三角形的面积","梯形的面积","组合图形的面积","解决问题"]},{name:"第七单元 数学广角——植树问题",lessons:["植树问题（两端都栽）","植树问题（两端不栽）","植树问题（封闭图形）"]}]},{subject:"数学",version:"人教版",grade:"五年级",volume:"下册",units:[{name:"第一单元 观察物体（三）",lessons:["观察物体（根据图形摆法）","观察物体（综合运用）"]},{name:"第二单元 因数与倍数",lessons:["因数和倍数","2、5的倍数的特征","3的倍数的特征","质数和合数","解决问题","整理和复习"]},{name:"第三单元 长方体和正方体",lessons:["长方体和正方体的认识","长方体和正方体的表面积","体积和体积单位","长方体和正方体的体积","容积和容积单位","解决问题","整理和复习"]},{name:"第四单元 分数的意义和性质",lessons:["分数的意义","分数与除法","真分数和假分数","分数的基本性质","约分","通分","分数和小数的互化","整理和复习"]},{name:"第五单元 图形的运动（三）",lessons:["旋转","图形的运动综合运用"]},{name:"第六单元 分数的加法和减法",lessons:["同分母分数加、减法","异分母分数加、减法","分数加减混合运算","解决问题","整理和复习"]},{name:"第七单元 折线统计图",lessons:["单式折线统计图","复式折线统计图"]},{name:"第八单元 数学广角——找次品",lessons:["找次品"]}]},{subject:"数学",version:"人教版",grade:"六年级",volume:"上册",units:[{name:"第一单元 分数乘法",lessons:["分数乘整数","分数乘分数","小数乘分数","分数混合运算和简便运算","解决问题（连续求一个数的几分之几）","解决问题（已知一个数比另一个数多几分之几）","整理和复习"]},{name:"第二单元 位置与方向（二）",lessons:["描述物体的位置","描述并绘制路线图"]},{name:"第三单元 分数除法",lessons:["倒数的认识","分数除以整数","一个数除以分数","分数四则混合运算","解决问题（已知一个数的几分之几是多少）","解决问题（比一个数多几分之几）","整理和复习"]},{name:"第四单元 比",lessons:["比的意义","比的基本性质","比的应用（按比分配）"]},{name:"第五单元 圆",lessons:["圆的认识","圆的周长","圆的面积","解决问题（圆环面积）","扇形"]},{name:"第六单元 百分数（一）",lessons:["百分数的意义和读写","百分数与分数、小数的互化","求一个数是另一个数的百分之几","求一个数比另一个数多（少）百分之几","解决问题","整理和复习"]},{name:"第七单元 扇形统计图",lessons:["扇形统计图","选择合适的统计图"]},{name:"第八单元 数学广角——数与形",lessons:["数与形（平方数的直观）","数与形（规律探索）"]}]},{subject:"数学",version:"人教版",grade:"六年级",volume:"下册",units:[{name:"第一单元 负数",lessons:["负数的认识","负数的大小比较","用负数解决实际问题"]},{name:"第二单元 百分数（二）",lessons:["折扣","成数","税率","利率","解决问题（促销问题）","整理和复习"]},{name:"第三单元 圆柱与圆锥",lessons:["圆柱的认识","圆柱的表面积","圆柱的体积","圆锥的认识","圆锥的体积","整理和复习"]},{name:"第四单元 比例",lessons:["比例的意义和基本性质","解比例","正比例","反比例","比例尺","图形的放大与缩小","用比例解决问题","整理和复习"]},{name:"第五单元 数学广角——鸽巢问题",lessons:["鸽巢问题（抽屉原理）","鸽巢问题的应用"]}]}],De=[{subject:"数学",version:"人教版",grade:"七年级",volume:"上册",units:[{name:"第一章 有理数",lessons:["正数和负数","有理数","有理数的加减法","有理数的乘除法","有理数的乘方"]},{name:"第二章 整式的加减",lessons:["整式","整式的加减"]},{name:"第三章 一元一次方程",lessons:["从算式到方程","解一元一次方程（一）——合并同类项与移项","解一元一次方程（二）——去括号与去分母","实际问题与一元一次方程"]},{name:"第四章 几何图形初步",lessons:["几何图形","直线、射线、线段","角"]}]},{subject:"数学",version:"人教版",grade:"七年级",volume:"下册",units:[{name:"第五章 相交线与平行线",lessons:["相交线","平行线及其判定","平行线的性质","平移"]},{name:"第六章 实数",lessons:["平方根","立方根","实数"]},{name:"第七章 平面直角坐标系",lessons:["平面直角坐标系","坐标方法的简单应用"]},{name:"第八章 二元一次方程组",lessons:["二元一次方程组","消元——解二元一次方程组","实际问题与二元一次方程组","三元一次方程组的解法"]},{name:"第九章 不等式与不等式组",lessons:["不等式","一元一次不等式","一元一次不等式组"]},{name:"第十章 数据的收集、整理与描述",lessons:["统计调查","直方图"]}]},{subject:"数学",version:"人教版",grade:"八年级",volume:"上册",units:[{name:"第十一章 三角形",lessons:["与三角形有关的线段","与三角形有关的角","多边形及其内角和"]},{name:"第十二章 全等三角形",lessons:["全等三角形","三角形全等的判定","角的平分线的性质"]},{name:"第十三章 轴对称",lessons:["轴对称","画轴对称图形","等腰三角形"]},{name:"第十四章 整式的乘法与因式分解",lessons:["整式的乘法","乘法公式","因式分解"]},{name:"第十五章 分式",lessons:["分式","分式的运算","分式方程"]}]},{subject:"数学",version:"人教版",grade:"八年级",volume:"下册",units:[{name:"第十六章 二次根式",lessons:["二次根式","二次根式的乘除","二次根式的加减"]},{name:"第十七章 勾股定理",lessons:["勾股定理","勾股定理的逆定理"]},{name:"第十八章 平行四边形",lessons:["平行四边形","特殊的平行四边形"]},{name:"第十九章 一次函数",lessons:["函数","一次函数"]},{name:"第二十章 数据的分析",lessons:["数据的集中趋势","数据的波动程度"]}]},{subject:"数学",version:"人教版",grade:"九年级",volume:"上册",units:[{name:"第二十一章 一元二次方程",lessons:["一元二次方程","解一元二次方程","实际问题与一元二次方程"]},{name:"第二十二章 二次函数",lessons:["二次函数的图象和性质","二次函数与一元二次方程","实际问题与二次函数"]},{name:"第二十三章 旋转",lessons:["图形的旋转","中心对称"]},{name:"第二十四章 圆",lessons:["圆的有关性质","点和圆、直线和圆的位置关系","正多边形和圆","弧长和扇形面积"]},{name:"第二十五章 概率初步",lessons:["随机事件与概率","用列举法求概率","用频率估计概率"]}]},{subject:"数学",version:"人教版",grade:"九年级",volume:"下册",units:[{name:"第二十六章 反比例函数",lessons:["反比例函数","实际问题与反比例函数"]},{name:"第二十七章 相似",lessons:["图形的相似","相似三角形","位似"]},{name:"第二十八章 锐角三角函数",lessons:["锐角三角函数","解直角三角形及其应用"]},{name:"第二十九章 投影与视图",lessons:["投影","三视图"]}]}],We=[{subject:"物理",version:"人教版",grade:"八年级",volume:"上册",units:[{name:"第一章 机械运动",lessons:["长度和时间的测量","运动的描述","运动的快慢","测量平均速度"]},{name:"第二章 声现象",lessons:["声音的产生与传播","声音的特性","声的利用","噪声的危害和控制"]},{name:"第三章 物态变化",lessons:["温度","熔化和凝固","汽化和液化","升华和凝华"]},{name:"第四章 光现象",lessons:["光的直线传播","光的反射","平面镜成像","光的折射","光的色散"]},{name:"第五章 透镜及其应用",lessons:["透镜","生活中的透镜","凸透镜成像的规律","眼睛和眼镜","显微镜和望远镜"]},{name:"第六章 质量与密度",lessons:["质量","密度","测量物质的密度","密度与社会生活"]}]},{subject:"物理",version:"人教版",grade:"八年级",volume:"下册",units:[{name:"第七章 力",lessons:["力","弹力","重力"]},{name:"第八章 运动和力",lessons:["牛顿第一定律","二力平衡","摩擦力"]},{name:"第九章 压强",lessons:["压强","液体的压强","大气压强","流体压强与流速的关系"]},{name:"第十章 浮力",lessons:["浮力","阿基米德原理","物体的浮沉条件及应用"]},{name:"第十一章 功和机械能",lessons:["功","功率","动能和势能","机械能及其转化"]},{name:"第十二章 简单机械",lessons:["杠杆","滑轮","机械效率"]}]},{subject:"物理",version:"人教版",grade:"九年级",volume:"全一册",units:[{name:"第十三章 内能",lessons:["分子热运动","内能","比热容"]},{name:"第十四章 内能的利用",lessons:["热机","热机的效率","能量的转化和守恒"]},{name:"第十五章 电流和电路",lessons:["两种电荷","电流和电路","串联和并联","电流的测量","串、并联电路中电流的规律"]},{name:"第十六章 电压 电阻",lessons:["电压","串、并联电路中电压的规律","电阻","变阻器"]},{name:"第十七章 欧姆定律",lessons:["电流与电压和电阻的关系","欧姆定律","电阻的测量","欧姆定律在串、并联电路中的应用"]},{name:"第十八章 电功率",lessons:["电能 电功","电功率","测量小灯泡的电功率","焦耳定律"]},{name:"第十九章 生活用电",lessons:["家庭电路","家庭电路中电流过大的原因","安全用电"]},{name:"第二十章 电与磁",lessons:["磁现象 磁场","电生磁","电磁铁 电磁继电器","电动机","磁生电"]},{name:"第二十一章 信息的传递",lessons:["现代顺风耳——电话","电磁波的海洋","广播、电视和移动通信","越来越宽的信息之路"]},{name:"第二十二章 能源与可持续发展",lessons:["能源","核能","太阳能","能源与可持续发展"]}]}],He=[{subject:"化学",version:"人教版",grade:"九年级",volume:"上册",units:[{name:"第一单元 走进化学世界",lessons:["物质的变化和性质","化学是一门以实验为基础的科学","走进化学实验室"]},{name:"第二单元 我们周围的空气",lessons:["空气","氧气","制取氧气"]},{name:"第三单元 物质构成的奥秘",lessons:["分子和原子","原子的结构","元素"]},{name:"第四单元 自然界的水",lessons:["爱护水资源","水的净化","水的组成","化学式与化合价"]},{name:"第五单元 化学方程式",lessons:["质量守恒定律","如何正确书写化学方程式","利用化学方程式的简单计算"]},{name:"第六单元 碳和碳的氧化物",lessons:["金刚石、石墨和C60","二氧化碳制取的研究","二氧化碳和一氧化碳"]},{name:"第七单元 燃料及其利用",lessons:["燃烧和灭火","燃料的合理利用与开发"]}]},{subject:"化学",version:"人教版",grade:"九年级",volume:"下册",units:[{name:"第八单元 金属和金属材料",lessons:["金属材料","金属的化学性质","金属资源的利用和保护"]},{name:"第九单元 溶液",lessons:["溶液的形成","溶解度","溶液的浓度"]},{name:"第十单元 酸和碱",lessons:["常见的酸和碱","酸和碱的中和反应"]},{name:"第十一单元 盐 化肥",lessons:["生活中常见的盐","化学肥料"]},{name:"第十二单元 化学与生活",lessons:["人类重要的营养物质","化学元素与人体健康","有机合成材料"]}]}],Ge=[{subject:"语文",version:"统编版",grade:"七年级",volume:"上册",units:[{name:"第一单元",lessons:["春","济南的冬天","雨的四季","古代诗歌四首（观沧海/闻王昌龄左迁龙标遥有此寄/次北固山下/天净沙·秋思）"]},{name:"第二单元",lessons:["秋天的怀念","散步","散文诗二首（金色花/荷叶·母亲）","《世说新语》二则"]},{name:"第三单元",lessons:["从百草园到三味书屋","再塑生命的人","《论语》十二章"]},{name:"第四单元",lessons:["纪念白求恩","植树的牧羊人","走一步再走一步","诫子书"]},{name:"第五单元",lessons:["猫","鸟","狼"]},{name:"第六单元",lessons:["皇帝的新装","天上的街市","女娲造人","寓言四则（赫尔墨斯和雕像者/蚊子和狮子/穿井得一人/杞人忧天）"]}]},{subject:"语文",version:"统编版",grade:"七年级",volume:"下册",units:[{name:"第一单元",lessons:["邓稼先","说和做——记闻一多先生言行片段","回忆鲁迅先生","孙权劝学"]},{name:"第二单元",lessons:["黄河颂","老山界","土地的誓言","木兰诗"]},{name:"第三单元",lessons:["阿长与《山海经》","老王","台阶","卖油翁"]},{name:"第四单元",lessons:["叶圣陶先生二三事","驿路梨花","最苦与最乐","短文两篇（陋室铭/爱莲说）"]},{name:"第五单元",lessons:["紫藤萝瀑布","一棵小桃树","外国诗二首（假如生活欺骗了你/未选择的路）","古代诗歌五首（登幽州台歌/望岳/登飞来峰/游山西村/己亥杂诗）"]},{name:"第六单元",lessons:["伟大的悲剧","太空一日","带上她的眼睛","河中石兽"]}]},{subject:"语文",version:"统编版",grade:"八年级",volume:"上册",units:[{name:"第一单元",lessons:["消息二则","首届诺贝尔奖颁发","飞天凌空","一着惊海天"]},{name:"第二单元",lessons:["藤野先生","回忆我的母亲","列夫·托尔斯泰","美丽的颜色"]},{name:"第三单元",lessons:["三峡","短文二篇（答谢中书书/记承天寺夜游）","与朱元思书","唐诗五首（野望/黄鹤楼/使至塞上/渡荆门送别/钱塘湖春行）"]},{name:"第四单元",lessons:["背影","白杨礼赞","散文二篇（永久的生命/我为什么而活着）","昆明的雨"]},{name:"第五单元",lessons:["中国石拱桥","苏州园林","蝉","梦回繁华"]},{name:"第六单元",lessons:["《孟子》二章（得道多助失道寡助/富贵不能淫）","愚公移山","周亚夫军细柳","诗词五首（饮酒/春望/雁门太守行/赤壁/渔家傲·天接云涛连晓雾）"]}]},{subject:"语文",version:"统编版",grade:"八年级",volume:"下册",units:[{name:"第一单元",lessons:["社戏","回延安","安塞腰鼓","灯笼"]},{name:"第二单元",lessons:["大自然的语言","阿西莫夫短文两篇（恐龙无处不有/被压扁的沙子）","大雁归来","时间的脚印"]},{name:"第三单元",lessons:["桃花源记","小石潭记","核舟记","《诗经》二首（关雎/蒹葭）"]},{name:"第四单元",lessons:["最后一次讲演","应有格物致知精神","我一生中的重要抉择","庆祝奥林匹克运动复兴25周年"]},{name:"第五单元",lessons:["壶口瀑布","在长江源头各拉丹冬","登勃朗峰","一滴水经过丽江"]},{name:"第六单元",lessons:["《庄子》二则（北冥有鱼/庄子与惠子游于濠梁之上）","《礼记》二则（虽有嘉肴/大道之行也）","马说","唐诗二首（茅屋为秋风所破歌/卖炭翁）"]}]},{subject:"语文",version:"统编版",grade:"九年级",volume:"上册",units:[{name:"第一单元",lessons:["沁园春·雪","我爱这土地","乡愁","你是人间的四月天","我看"]},{name:"第二单元",lessons:["敬业与乐业","就英法联军远征中国致巴特勒上尉的信","论教养","精神的三间小屋"]},{name:"第三单元",lessons:["岳阳楼记","醉翁亭记","湖心亭看雪","诗词三首（行路难/酬乐天扬州初逢席上见赠/水调歌头）"]},{name:"第四单元",lessons:["故乡","我的叔叔于勒","孤独之旅"]},{name:"第五单元",lessons:["中国人失掉自信力了吗","怀疑与学问","谈创造性思维","创造宣言"]},{name:"第六单元",lessons:["智取生辰纲","范进中举","三顾茅庐","刘姥姥进大观园"]}]},{subject:"语文",version:"统编版",grade:"九年级",volume:"下册",units:[{name:"第一单元",lessons:["祖国啊，我亲爱的祖国","梅岭三章","短诗五首","海燕"]},{name:"第二单元",lessons:["孔乙己","变色龙","溜索","蒲柳人家"]},{name:"第三单元",lessons:["鱼我所欲也","唐雎不辱使命","送东阳马生序","词四首（渔家傲·秋思/江城子·密州出猎/破阵子·为陈同甫赋壮词以寄之/满江红）"]},{name:"第四单元",lessons:["短文两篇（谈读书/不求甚解）","山水画的意境","无言之美","驱遣我们的想象"]},{name:"第五单元",lessons:["屈原（节选）","天下第一楼（节选）","枣儿"]},{name:"第六单元",lessons:["曹刿论战","出师表","诗词曲五首（十五从军征/白雪歌送武判官归京/南乡子·登京口北固亭有怀/过零丁洋/山坡羊·潼关怀古）"]}]}],Fe=[{subject:"道德与法治",version:"统编版",grade:"七年级",volume:"上册",units:[{name:"第一单元 成长的节拍",lessons:["中学序曲","少年有梦","认识自己","做更好的自己"]},{name:"第二单元 友谊的天空",lessons:["和朋友在一起","深深浅浅话友谊","让友谊之树常青","绽放友谊之花"]},{name:"第三单元 师长情谊",lessons:["走近老师","师生交往","家的意味","爱在家人间","让家更美好"]},{name:"第四单元 生命的思考",lessons:["生命可以永恒吗","敬畏生命","增强生命的韧性","感受生命的意义","活出生命的精彩"]}]},{subject:"道德与法治",version:"统编版",grade:"七年级",volume:"下册",units:[{name:"第一单元 青春时光",lessons:["悄悄变化的我","成长的不仅仅是身体","男生女生","青春萌动","青春有格"]},{name:"第二单元 做情绪情感的主人",lessons:["青春的情绪","情绪的管理","我们的情感世界","在品味情感中成长"]},{name:"第三单元 在集体中成长",lessons:["集体生活成就我","共奏和谐乐章","单音与和声","节奏与旋律","憧憬美好集体","我与集体共成长"]},{name:"第四单元 走进法治天地",lessons:["法律在我们身边","法律伴我们成长","生活需要法律","法律保障生活"]}]},{subject:"道德与法治",version:"统编版",grade:"八年级",volume:"上册",units:[{name:"第一单元 走进社会生活",lessons:["我与社会","在社会中成长","网络生活新空间","合理利用网络"]},{name:"第二单元 遵守社会规则",lessons:["社会生活离不开秩序","遵守规则","自由与规则不可分","维护秩序","诚实守信","法不可违","预防犯罪","善用法律"]},{name:"第三单元 勇担社会责任",lessons:["我的角色我的责任","做负责任的人","关爱他人","服务社会"]},{name:"第四单元 维护国家利益",lessons:["国家好大家才会好","坚持国家利益至上","树立总体国家安全观","建设美好祖国"]}]},{subject:"道德与法治",version:"统编版",grade:"八年级",volume:"下册",units:[{name:"第一单元 坚持宪法至上",lessons:["维护宪法权威","治国安邦的总章程","坚持依宪治国","加强宪法监督"]},{name:"第二单元 理解权利义务",lessons:["公民基本权利","依法行使权利","公民基本义务","依法履行义务"]},{name:"第三单元 人民当家作主",lessons:["根本政治制度","基本政治制度","国家权力机关","国家行政机关","国家司法机关"]},{name:"第四单元 崇尚法治精神",lessons:["尊重自由平等","公平正义的守护","自由平等的真谛","公平正义的价值"]}]},{subject:"道德与法治",version:"统编版",grade:"九年级",volume:"上册",units:[{name:"第一单元 富强与创新",lessons:["踏上强国之路","创新驱动发展","坚持改革开放","走向共同富裕","创新改变生活","创新永无止境"]},{name:"第二单元 民主与法治",lessons:["追求民主价值","建设法治中国","生活在新型民主国家","参与民主生活","夯实法治基础","凝聚法治共识"]},{name:"第三单元 文明与家园",lessons:["守望精神家园","建设美丽中国","延续文化血脉","凝聚价值追求","正视发展挑战","共筑生命家园"]},{name:"第四单元 和谐与梦想",lessons:["中华一家亲","中国人中国梦","促进民族团结","维护祖国统一","我们的梦想","共圆中国梦"]}]},{subject:"道德与法治",version:"统编版",grade:"九年级",volume:"下册",units:[{name:"第一单元 我们共同的世界",lessons:["同住地球村","构建人类命运共同体","开放互动的世界","复杂多变的关系","推动和平与发展","谋求互利共赢"]},{name:"第二单元 世界舞台上的中国",lessons:["与世界共发展","与世界深度互动","中国担当","中国影响","机遇与挑战","携手促发展"]},{name:"第三单元 走向未来的少年",lessons:["少年的担当","从这里出发","学无止境","多彩的职业","回望成长","走向未来"]}]}],Ye=[{subject:"英语",version:"人教版（PEP）",grade:"三年级",volume:"上册",units:[{name:"Unit 1 Hello!",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 2 Colours",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 3 Look at me!",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 4 We love animals",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 5 Let's eat!",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 6 Happy birthday",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]}]},{subject:"英语",version:"人教版（PEP）",grade:"三年级",volume:"下册",units:[{name:"Unit 1 Welcome back to school!",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 2 My family",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 3 At the zoo",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 4 Where is my car?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 5 Do you like pears?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 6 How many?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]}]},{subject:"英语",version:"人教版（PEP）",grade:"四年级",volume:"上册",units:[{name:"Unit 1 My classroom",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 2 My schoolbag",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 3 My friends",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 4 My home",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 5 Dinner's ready",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 6 Meet my family!",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]}]},{subject:"英语",version:"人教版（PEP）",grade:"四年级",volume:"下册",units:[{name:"Unit 1 My school",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 2 What time is it?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 3 Weather",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 4 At the farm",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 5 My clothes",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 6 Shopping",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]}]},{subject:"英语",version:"人教版（PEP）",grade:"五年级",volume:"上册",units:[{name:"Unit 1 What's he like?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 2 My week",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 3 What would you like?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 4 What can you do?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 5 There is a big bed",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 6 In a nature park",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]}]},{subject:"英语",version:"人教版（PEP）",grade:"五年级",volume:"下册",units:[{name:"Unit 1 My day",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 2 My favourite season",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 3 My school calendar",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 4 When is the art show?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 5 Whose dog is it?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 6 Work quietly!",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]}]},{subject:"英语",version:"人教版（PEP）",grade:"六年级",volume:"上册",units:[{name:"Unit 1 How can I get there?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 2 Ways to go to school",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 3 My weekend plan",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 4 I have a pen pal",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 5 What does he do?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 6 How do you feel?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]}]},{subject:"英语",version:"人教版（PEP）",grade:"六年级",volume:"下册",units:[{name:"Unit 1 How tall are you?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 2 Last weekend",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 3 Where did you go?",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]},{name:"Unit 4 Then and now",lessons:["A. Let's talk","A. Let's learn","B. Let's talk","B. Let's learn"]}]}];function N(e){return String(e||"").toLowerCase().replace(/^第[一二三四五六七八九十百]+(单元|章|课|节)/,"").replace(/[（(][^）)]*[)）]/g,"").replace(/^(课文|古诗三首|古诗|古诗文|古文|习作|拼音|识字（[一二三四五六七八九十]+）|识字|现代诗|现代文|阅读|综合性学习|口语交际|名著导读|数学广角[：:]?|整理和复习|数一数)[:：]?/,"").replace(/[~～]/g,"-").replace(/[\s，。、：:；;！!？?·"'“”]/g,"").trim()}function ge(e,s){const t=N(s);if(!t)return-1;for(let n=0;n<e.length;n++){const a=e[n];if(!a)continue;const o=N(a.chapter);if(o&&(o===t||t.length>=3&&(o.includes(t)||t.includes(o))||t.length===1&&o.startsWith(t)))return n}return-1}function Je(e,s){let t=0;for(const n of s)ge(e,n)>=0&&t++;return{have:t,total:s.length}}const H="wb-bookmarks",G=20,P={starred:[],progress:{},recent:[]};function Ve(){try{const e=localStorage.getItem(H);if(!e)return{...P};const s=JSON.parse(e);return{starred:Array.isArray(s.starred)?s.starred:[],progress:s.progress&&typeof s.progress=="object"?s.progress:{},recent:Array.isArray(s.recent)?s.recent.slice(0,G):[]}}catch{return{...P}}}function R(e){try{localStorage.setItem(H,JSON.stringify(e))}catch{}window.dispatchEvent(new CustomEvent("wb-bookmarks-changed"))}function Ze(e,s){const t={...e,starred:e.starred.includes(s)?e.starred.filter(n=>n!==s):[s,...e.starred]};return R(t),t}function Qe(e,s,t){const n={...e,progress:{...e.progress,[String(s)]:t}};return R(n),n}function es(e,s){if(e.recent[0]===s)return e;const t={...e,recent:[s,...e.recent.filter(n=>n!==s)].slice(0,G)};return R(t),t}const ss={"小学|一年级|语文|识字（一）：天地人":{plan:`**教学基本信息**
课题：识字（一）：天地人
教材版本：统编版小学语文一年级上册
年级：小学一年级
课型：识字课
课时：公开课 1 课时（40 分钟）
授课对象：小学一年级学生

**教学目标**
1. 认识"天、地、人、你、我、他"6 个生字，能读准字音、认清字形、正确认读，并借助图画和字理初步了解字义。
2. 通过看图识字、字理识字、游戏识字和联系生活说话等多种方法识字，了解"天、地、人"三才的含义以及"你、我、他"的指代用法，能在具体语境中正确使用。
3. 感受汉字背后的文化韵味，体会天地人和谐相处的美好，学会礼貌待人、亲近自然，激发主动识字、热爱祖国语言文字的兴趣，落实"文化自信""语言运用"的语文核心素养。

**教学重难点**
教学重点：认识"天地人 你我他"6 个生字，能正确认读，并初步了解"三才"的含义。
教学难点：理解"天、地、人"三者之间的关系；能在语境中正确区分和使用"你、我、他"，避免人称混淆。

**教学准备**
课件：天地人主题情境图（蓝天白云、山川田野、一家人）、生字动画、儿歌音频。
教具：生字卡片"天、地、人、你、我、他"、"你、我、他"人物头饰、图片配对卡。
学生准备：课前观察身边的自然景物（天空、大地、家人），准备好自己的照片一张。

**教学过程**

**环节一 情境导入，谈话激趣（约 5 分钟）**

【教师活动】
上课伊始，播放轻柔的背景音乐，出示一幅"蓝天之下，田野之上，一家人在郊外游玩"的主题图。教师面带微笑提问："同学们，看这幅图，你看到了什么？"顺势把学生带入图画情境，然后抛出核心问题："这幅图里有三个最重要的汉字朋友，它们就藏在今天的课题里。"
预设师生对话：
师："孩子们，闭上眼睛想一想，每天一抬头，你最先看到的是什么？"
生："天空！""太阳！""白云！"
师："对啦，蓝蓝的天空在我们头顶上。再低头看看，你脚下踩着的是什么？"
生："地面！""大地！""土地！"
师："说得真好。头顶的天，脚下的地，还有站在天地之间的——我们自己，就构成了今天要认识的三个字。"
教师板书课题"天地人"，带读两遍，明确"天、地、人"是本课要认识的第一个字朋友。

【学生活动】
学生观察图画，自由表达所见；跟随教师读课题，认识课题中"天地人"三个字，产生学习期待。

【设计意图】
从学生的生活经验和直接感知切入，用图画唤醒已有认知，把抽象的汉字与具体的自然景物联系起来，既降低了识字门槛，又为"三才"文化埋下伏笔，让课堂在一开始就有画面感、有温度。

**环节二 看图识字，趣学"天地人"（约 12 分钟）**

【教师活动】
（一）认识"天"。出示蓝天图，教师在黑板贴上"天"字卡片，提问："这个'天'字，你从哪里见过它？"学生联系生活举例（天空、今天、天气）。教师顺势点拨字理："大家看，'天'字上面一横，就像我们头顶上高高的天空；下面这个大字，就是大大的人字。古人造这个字，就是提醒我们，人站在大地上，头顶之上就是天。"带学生用手比一比"头顶之上"。
（二）认识"地"。出示山川田野图，教师用脚轻轻跺一跺地面："我们脚下踩的就是地。'地'字的左边是什么偏旁？"引导发现"土字旁"，说明"地"和土地有关。带读"地"，指名读，开火车读。
（三）认识"人"。出示站立的人的剪影，与"人"字对照，教师提问："古人是怎么造出'人'字的？看这个字的笔画，像不像一个人侧着身子站在这里？撇是手臂，捺是身体和腿。"学生在空中书空"人"，感受撇捺舒展如人张开双臂。
（四）三才文化渗透。教师神秘地说："同学们，古人把天、地、人叫做'三才'。天在上，地在下，人站在中间。天给大地阳光雨露，大地生长出万物，人在天地间生活，三者和谐相处，世界才美好。"配合手势（指天、指地、指自己），请学生跟着做。
预设师生对话：
师："为什么古人说'天、地、人'是'三才'呢？"
生："因为天最大。""因为地很大。""因为我们都生活在地球上。"
师："对，天、地、人就像三个好朋友，谁也离不开谁。我们人生活在天地之间，要敬畏自然、热爱大地、善待他人。"
（五）巩固认读。玩"摘星星"游戏：课件里出现三颗星，每颗星后面藏一个字，点开即读，齐读、小组赛读。

【学生活动】
学生逐字观察图画与字形，联系生活组词；跟着教师书空、比划、做手势；参与"摘星星"游戏，多种形式反复认读"天、地、人"。

【设计意图】
坚持"识字不孤"的原则，把识字与图画、字理、生活、文化四线并进。通过"人"字的字源演变、"地"的偏旁表意、"天"的字形解读，让汉字在学生眼中"活"起来，既突破了字形记忆的难点，又自然渗透了中华传统文化，落实文化自信。

**环节三 游戏识字，巧用"你我他"（约 13 分钟）**

【教师活动】
（一）故事引入"你、我、他"。教师拿出三个头饰，请三位学生上台分别戴上，说："教室里来了三个字宝宝。这个字宝宝呀，说的是自己——'我'；这个字宝宝，说的是我面前面对的人——'你'；这个字宝宝，说的是不在我们身边的第三人——'他'。"逐一出示卡片，带读。
（二）结合语境理解。教师指着自己说："我是你们的语文老师。"指着身边的学生说："你是我的学生。"再指着远处的学生说："他是我们班的同学。"请学生跟着说。
（三）"找朋友"游戏。教师把 6 张生字卡片打乱，请学生把"天、地、人"三张图卡与字卡配对；再把"你、我、他"三张人物头饰与字卡配对，边配对边大声认读。
（四）生活说话练习。出示三个小朋友的图片，教师先示范："你是小强，我是小丽，他是小明。"再请学生四人小组内互相对话："你是××，我是××，他是××。"
预设师生对话：
师："如果你要介绍自己，该用哪个字？"
生："用'我'！我是××。"
师："那和你面对面说话的这个同学，该用哪个字？"
生："用'你'！你是我的同桌。"
师："那坐在那边、没有参与我们对话的同学呢？"
生："用'他'！他是我的好朋友。"
师："大家说得真清楚。记住：'你'是眼前的你，'我'是说话的我，'他'是旁边的他。"

【学生活动】
学生戴头饰体验人称指代，参与"找朋友"配对游戏，在四人小组中进行"你、我、他"的对话练习，通过角色扮演把字放进句子中说。

【设计意图】
人称代词抽象难懂，本环节用"头饰体验＋游戏配对＋语境说话"三层活动化抽象为形象，让学生在真实的交际情境中感受"你、我、他"的指代功能，既巩固了字形字音，又训练了口语表达，突破本课难点。

**环节四 拓展迁移，文化诵读（约 7 分钟）**

【教师活动】
（一）出示"指物认字"小游戏：教师指着窗外或课件中的天空、大地、花草树木，请学生快速举出对应的字卡并大声读出来。
（二）出示"三才"小儿歌，教师范读后带读：天地人，三才全；你和我，他身边；敬天地，爱自然；小朋友，心相连。
（三）请学生用今天认识的 6 个字，说一句完整的话。教师先示范："我的家在天地之间。"再请学生自由创编，教师相机纠正人称使用，表扬说得完整的孩子。
（四）简单渗透书写姿势：教师出示"人"字田字格，讲解"头正、身直、臂开、足安"，演示"人"字撇捺舒展，提醒学生"今天先认读，回家可以试着描一描"。

【学生活动】
学生举字卡认读，跟读"三才"儿歌，尝试用 6 个字创编句子，跟着教师比画"人"字的书写要领。

【设计意图】
通过游戏化复习、儿歌诵读和创编说话，把刚学的字放到新的语言环境中迁移运用，实现"认读—理解—运用"的闭环；书写渗透意在为后续写字课搭桥，同时巩固良好习惯。

**环节五 课堂小结与作业（约 3 分钟）**

【教师活动】
师生共同回顾：今天认识了哪 6 个汉字朋友？（天地人，你我他）教师总结："它们不仅是我们每天都会用到的字，还藏着古人的智慧——天、地、人和谐相处，你、我、他相互关爱。"布置分层作业：
基础作业：回家指给爸爸妈妈看，指着天空说"天"，指着大地说"地"，指着家人分别说"你、我、他"。
提高作业：和家人玩"你说我举"游戏，比一比谁认字又快又准。

【学生活动】
学生齐声回顾生字，明确作业要求，在"天地人，你我他"的齐读声中结束课堂。

【设计意图】
用简短回顾收束全课，强化记忆；分层作业让不同水平的学生都能在家中得到巩固，把课堂识字延伸到生活，体现"生活处处皆语文"。

**板书设计**
<pre>
                 识字（一）：天地人
        ┌──────────┬──────────┐
        天          地          人
      （头顶之上） （脚下大地） （我自己）
        三才：天在上，地在下，人中间
        ┌──────────┬──────────┐
        你          我          他
       （眼前的你）（说话的我）（旁边的他）
        天地人，你我他，好朋友，是一家
</pre>

**教学反思要点**
1. 字理识字与图画识字的融合是否真正让 6 个字"活"了起来，"人"字的字源演变和"三才"文化渗透是否贴合一年级学生的接受水平，避免过于深奥。
2. "你、我、他"的人称教学是否通过游戏和真实对话落到实处，能否敏锐捕捉学生把"你""他"用反的课堂生成并及时纠正。
3. 预设的师生对话是否自然流畅，是否留足了学生开口表达的时间，课堂是否出现"教师讲得多、学生说得多"的比例失衡。
4. "摘星星""找朋友""指物认字"等游戏是否真正服务于识字目标，而非沦为形式热闹，游戏后的即时反馈是否到位。
5. 书写渗透的分寸是否恰当，一年级第一课是否因急于写字而加重学生负担，作业布置是否体现了分层。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是统编版小学语文一年级上册的识字开篇课文《天地人》。这篇课文是学生入学后学习汉字的第一课，虽然只有"天地人、你我他"六个字，却地位特殊。它承担着开启儿童识字之旅、激发识字兴趣的重任。从内容上看，"天地人"三个字背后站着中国传统文化里"三才"的哲学观念，"你我他"则是人际交往中最基本的人称。编者把这六个字放在全册最前面，就是要让儿童从认识天地、认识自我、认识他人开始学语文，可以说，这一课既有识字的工具性，更有浓厚的文化意味。我把本课定位为识字课，重点不是写字，而是让学生在轻松愉悦中认得字形、读准字音、初步感受汉字之美。

**二、说学情**
一年级的孩子刚刚入学，他们天真活泼，注意力集中的时间比较短，但对图画、游戏和韵律感强的儿歌有着天然的亲近感。从识字基础来看，"天、地、人、你、我、他"这六个字很多孩子在生活中其实已经见过，比如路牌上的"人"、绘本里的"天"，只是处于"眼熟"而"不识"的状态。但他们还不懂字理，不知道汉字是怎么造出来的，对人称代词"你、我、他"的理解也比较模糊，容易混淆。所以我在设计时充分考虑了这个学情：少讲道理，多给形象；少机械重复，多游戏活动；把人称教学放进真实的对话情境里。

**三、说教学目标**
基于教材特点和学生实际，我确定了三个教学目标。第一，认识六个生字，读准字音，认清字形，这是知识与能力层面的目标。第二，通过看图识字、字理识字、游戏识字等方法，了解"三才"含义和人称用法，学会在语境中使用，这是过程与方法层面的目标。第三，感受汉字背后的文化韵味，体会天地人和谐、你我他友爱的美好情感，这是情感态度与价值观层面的目标，也呼应了语文核心素养中的文化自信和语言运用。

**四、说教学重难点**
本课的教学重点是认识六个生字，正确认读，并初步了解"三才"的含义。教学难点有两个：一个是理解"天、地、人"三者之间的关系，另一个是在具体语境中正确区分和使用"你、我、他"。为什么把后者定为难点呢？因为人称代词是抽象的指代关系，孩子往往记住了字形，一到说话就容易把"你"和"他"混用。所以我安排了一个完整的游戏对话环节来专门突破它。

**五、说教法学法**
本课我主要采用四种方法：看图识字法，让汉字和画面一一对应；字理识字法，借助字形演变讲清"人"字为什么长这样，让汉字活起来；游戏识字法，用"摘星星""找朋友"等游戏反复巩固；联系生活说话法，把字放进句子、放进真实对话里用起来。学法上，我引导学生用眼睛看、用手比、用嘴说、用脑想，多感官参与识字，这也符合低年级学生的认知规律。

**六、说教学过程**
我把整堂课设计成五个环节，环环相扣。导入环节约五分钟，我用一幅主题图和两个生活化的问题，让学生说说头顶的天、脚下的地，说说自己是谁、身边坐着谁，把六个汉字从他们的生活里"请"出来，让每个孩子都真切地感到，这些字和他们息息相关，从而对今天的识字任务充满期待。第二个环节约十二分钟，重点识记"天、地、人"，我用图片、字理加"三才"文化的组合拳，先让学生看蓝天、看田野、看人形剪影，再讲解"人"字像侧立的人形、"天"字上面一横是天空、"地"字带土字旁，最后带着学生指天、指地、指自己，在一指一说中感受三才各在其位、和谐共处的关系。第三个环节约十三分钟，是本课的重头戏，我请三位学生戴上头饰演"你、我、他"，在真实的师生问答中分清"我"是说话的自己、"你"是眼前的对方、"他"是旁边的第三人，再通过"找朋友"配对游戏和四人小组对话练习反复巩固。第四个环节约七分钟，是拓展迁移，用"指物认字""三才儿歌""创编说话"把六个字放进新的语言环境里用起来，并顺势渗透书写姿势。最后一个环节约三分钟，回顾生字、布置分层作业。整堂课以游戏和对话为主线，让学生始终在"玩中学、学中用"。

**七、说板书设计**
我的板书采用图文结合的形式，中间是课题"天地人"，下面是两个对称的分支：左边"天、地、人"对应"头顶之上、脚下大地、我自己"，点出三才关系；右边"你、我、他"对应"眼前的你、说话的我、旁边的他"，点出人称用法。最后一行"天地人，你我他，好朋友，是一家"是本课的韵语小结。这样的板书直观、对称、便于记忆，既呈现了生字，也呈现了本课的文化内涵。

**八、说教学反思与效果预测**
这堂课我力求做到三实：朴实、扎实、充实。通过本课，我预计大部分学生能熟练认读六个字，能借助画面说出字义，也能在简单对话中正确使用人称代词。当然，课堂上也会出现学生把"他"写成"她"、"地"和"他"右边分不清这样的生成性问题，我会用偏旁归类的方法顺势点拨。说到不足，一年级课堂纪律的调控、游戏环节的时间把控，都是对教师的考验，我会在真实课堂上根据学生的状态灵活调整。相信在师生共同的投入下，这堂识字课能让孩子爱上汉字，也为他们今后的语文学习开一个好头。我的说课完毕，恳请各位老师批评指正，谢谢大家！`},"小学|一年级|语文|课文：小青蛙":{plan:`**教学基本信息**
课题：课文：小青蛙
教材版本：统编版小学语文一年级下册
年级：小学一年级
课型：儿歌识字课
课时：公开课 1 课时（40 分钟）
授课对象：小学一年级学生

**教学目标**
1. 认识"清、晴、睛、情、请、眼、保护、害、事、让"等生字，读准字音，认清字形；会写"青、清、晴、睛、情、请"等重点字。
2. 正确、流利、有感情地朗读儿歌并背诵；发现"青"字加偏旁组成"清、晴、睛、情、请"的构字规律，学习用"加一加"的方法识记形声字。
3. 了解青蛙是益虫、会保护禾苗，激发保护青蛙、爱护动物的情感，初步建立形声字"声旁表音、形旁表意"的字理意识，落实"语言运用"与"思维能力"的核心素养。

**教学重难点**
教学重点：认识"青"字族生字，正确区分五个形近字；正确、流利地朗读并背诵儿歌。
教学难点：理解形声字"声旁表音、形旁表意"的构字规律；区分"清、晴、睛、情、请"五个形近字的偏旁与字义。

**教学准备**
课件：小青蛙卡通形象、形声字构字动画、儿歌朗读音频、青蛙生活场景图。
教具：生字卡片、"青"字卡片、偏旁卡片（氵、日、目、忄、讠）、"偏旁找朋友"游戏底板。
学生准备：课前搜集青蛙的小知识，和家长聊一聊见过的小蝌蚪。

**教学过程**

**环节一 谜语导入，引出小青蛙（约 5 分钟）**

【教师活动】
教师出示谜语："绿衣小英雄，田里捉害虫，冬天它休息，夏天勤劳动。"请学生猜一猜。学生猜出是青蛙后，课件出示一只可爱的卡通小青蛙，教师借机提问："你对小青蛙有哪些了解？它住在哪里？它吃什么？"
预设师生对话：
师："谁来猜猜这个谜语？"
生："是青蛙！它穿着绿色的衣服，专门捉害虫。"
师："真聪明！小青蛙是庄稼的好朋友，今天我们学习的这首儿歌，就是夸它的。"
教师板书课题"小青蛙"，带读课题，随机认识"蛙"字（虫字旁，和动物有关）。

【学生活动】
学生猜谜语，交流自己对青蛙的了解，齐读课题，初步建立"青蛙是益虫"的认识。

【设计意图】
以谜语导入，切合低年级学生好奇心强的特点，在一猜一答中点燃学习热情，同时自然引出"青蛙吃害虫、保护禾苗"的常识，为儿歌学习和情感目标预热。

**环节二 初读儿歌，整体感知（约 8 分钟）**

【教师活动】
（一）教师范读儿歌，学生边听边用手点字，感受儿歌的节奏。
（二）出示儿歌全文，教师带读两遍，重点指导节奏停顿：河水/清清/天气晴，小小/青蛙/大眼睛。
（三）指名读、男女生合作读、拍手读，在多种朗读中读准字音、读通句子。
（四）整体感知提问："儿歌一共几句话？每句话写了小青蛙的什么？"
预设师生对话：
师："儿歌里说，小青蛙住在哪里呀？"
生："住在河边！因为说'河水清清'。"
师："它长什么样？"
生："大大的眼睛！"
师："它做什么好事了？"
生："保护禾苗，吃害虫！"
师："小朋友们真会读书。这首儿歌先写小青蛙的样子，再写它做的事，最后还提醒我们要爱护它。"

【学生活动】
学生跟读、自读、拍手读儿歌，圈出生字，回答关于儿歌内容的问题，初步读通读顺。

【设计意图】
低年级阅读从"读通"起步。通过范读、带读、多种形式练读，让儿歌的节奏感和韵律感浸润学生；整体感知的问题帮助学生理清儿歌层次，为后续精读和字族学习做铺垫。

**环节三 字族探究，认识"青"字族（约 13 分钟）**

【教师活动】
（一）聚焦生字。出示"清、晴、睛、情、请"五个字，请学生观察发现：它们有什么相同的地方？（都含有"青"）
（二）动画演示形声字。播放"青"字找朋友的动画：青＋氵变成清，青＋日变成晴，青＋目变成睛，青＋忄变成情，青＋讠变成请。每变一个，教师提问："它的偏旁是谁？这个字和什么有关？"
（三）逐字点拨字义。清——三点水，和水有关，河水清清；晴——日字旁，和太阳有关，天气晴朗；睛——目字旁，和眼睛有关，大眼睛；情——竖心旁，和心情、心理有关，事情、心情；请——言字旁，和说话有关，请问、请坐。
（四）总结规律，揭示"形声字"。教师小结："这些字的读音都和'青'相近，所以'青'就像它们的发音小助手，我们叫它声旁；而偏旁告诉我们字的意思，叫形旁。一半表音、一半表意，这样的字就是形声字。"
（五）"偏旁找朋友"游戏。每组一套字卡和偏旁卡，学生动手拼一拼：把"青"分别和五个偏旁组合，边拼边读边组词。
预设师生对话：
师："五个字都藏着'青'，为什么长得不一样？"
生："因为偏旁不一样！"
师："那'晴'的日字旁告诉我们什么？"
生："和太阳有关，太阳出来才是晴天！"
师："说得对。那么'眼睛'的'睛'，为什么是目字旁？"
生："因为眼睛用目，目就是眼睛的意思。"
师："太棒了，你们已经会拆字、会猜意思了，这就是形声字的秘密。"

【学生活动】
学生观察字形异同，观看构字动画，跟随教师逐字分析偏旁表意，动手玩"偏旁找朋友"拼字游戏，在动手动口中理解形声字规律。

【设计意图】
"青"字族是本课的核心知识点，也是形声字规律的绝佳载体。通过"找相同—看动画—析偏旁—玩游戏"四步推进，让学生在自主发现和动手操作中理解"声旁表音、形旁表意"，避免死记硬背，培养识字能力和思维能力。

**环节四 朗读背诵，情感升华（约 9 分钟）**

【教师活动】
（一）读中悟情。教师提问："儿歌最后两句说'请你爱护小青蛙，好让禾苗不生病'，谁来当当小卫士，把这句话读给大家听？"引导学生读出请求、爱护的语气。
（二）看画面读。课件依次出示"清清河水""晴天太阳""大眼睛青蛙""吃害虫""禾苗青青"的画面，学生看画面说句子、读儿歌。
（三）背诵指导。教师用"去字留图"法：先出示带提示词的儿歌（河水（）天气（），小小（）大（）……），再逐步隐去，最后看图背诵。
（四）感情升华。教师补充：一只青蛙一年能吃掉成千上万只害虫，是名副其实的"农田卫士"。请学生说说："我们能为小青蛙做什么？"
预设师生对话：
师："看到有人要捉小青蛙，你会怎么说？"
生："不要捉它，它会吃害虫！"
师："用儿歌里的话说。"
生："请你爱护小青蛙，好让禾苗不生病！"
师："你读得真好，我听出了请求和爱护。全班一起再读一遍，把我们的心意读给小青蛙听。"

【学生活动】
学生练习有感情朗读，看画面联想句子，通过"去字留图"法背诵儿歌，交流保护青蛙的具体做法。

【设计意图】
朗读与理解相结合，在画面、情境和情感的支撑下让学生读出节奏、读出喜爱、读出爱护之情，并在不知不觉中完成背诵；科学常识的补充和"我能做什么"的讨论，把语文学习与生态意识融为一体。

**环节五 课堂小结与作业（约 5 分钟）**

【教师活动】
（一）字词回顾。教师出示"清、晴、睛、情、请"五张字卡，请学生用口诀复习：有水河水清，有日天气晴，有目大眼睛，有心好心情，有言说请字。
（二）写字点拨。教师重点指导写"青"字：上下结构，上面"土"字头，下面"月"字底，月字底第一笔是竖不是竖撇；再指导"清、晴、睛、情、请"都是左右结构、左窄右宽，"青"在右边要写窄一些。学生描一个、写一个，教师巡视纠正姿势。
（三）布置作业。基础作业：把儿歌背给家人听，用"加一加"的方法教家人认识"清、晴、睛、情、请"；提高作业：找一找还有哪些带"青"的形声字（如蜻、静、精），并试着给它们编一句口诀。

【学生活动】
学生用口诀复习形近字，观察范字、描红书写，明确作业内容，带着对"青"字族的好奇离开课堂。

【设计意图】
口诀复现强化形近字区分，写字指导落笔成形，分层作业让识字从课内延伸到课外，为学有余力的学生打开探究"青"字族更多成员的兴趣之窗。

**板书设计**
<pre>
                    课文：小青蛙
        河水清清 天气晴，小小青蛙大眼睛。
        保护禾苗 吃害虫，做了不少好事情。
        请你爱护 小青蛙，好让禾苗不生病。
        ┌──────────────┐
        青 ＋ 氵＝清（清水）    青 ＋ 日＝晴（晴天）
        青 ＋ 目＝睛（眼睛）    青 ＋ 忄＝情（心情）
        青 ＋ 讠＝请（请问）    声旁表音，形旁表意
        青蛙是益虫，我们要爱护它
</pre>

**教学反思要点**
1. "青"字族探究是否真正让学生经历了"发现—验证—运用"的过程，是否出现教师直接告知规律、学生缺少自主发现的情况。
2. "清、晴、睛、情、请"五个形近字的区分是否借助了偏旁表意这一根本方法，口诀巩固是否及时，能否发现个别学生仍然"晴""睛"不分并当堂点拨。
3. 儿歌朗读是否读出了节奏与情感，背诵指导的梯度（带提示—去字留图—看图背）是否有效，时间分配是否被认字挤占。
4. 游戏环节的课堂组织是否有序，拼字游戏是否人人都参与，而非少数学生包办。
5. 写字指导是否落实了"月字底第一笔是竖"这一易错点，学生的写字姿势是否得到纠正，生态保护情感的渗透是否自然而不生硬。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是统编版小学语文一年级下册的儿歌识字课文《小青蛙》。这是一首生动有趣的儿歌，一共六句话，写了小青蛙的样子、本领和我们应当爱护它的道理。儿歌语言简练、节奏明快，读起来朗朗上口。更重要的是，这首儿歌里藏着本册教材识字教学的一个重头戏——"青"字族，也就是清、晴、睛、情、请这五个形近字。它们同以"青"为声旁，加上不同的偏旁，意思就各不相同。所以这一课既是朗读的好材料，更是进行形声字规律启蒙的好载体。编者编排这首儿歌，就是要让学生在轻松愉快的诵读中，初步接触"声旁表音、形旁表意"的汉字构字规律。我把本课定位为儿歌识字课。

**二、说学情**
一年级下学期的学生经过近一年的学习，已经掌握了一些识字方法，也有了一定的朗读能力，认识了不少常用字。他们对小动物有着天然的喜爱，青蛙又是他们很熟悉的形象，很多孩子还在课外见过小蝌蚪变青蛙的过程，这为课堂情感共鸣提供了良好的基础。但孩子们面对"清、晴、睛、情、请"这一组形近字时，往往分不清偏旁，容易张冠李戴，把"晴"写成"睛"，把"清"写成"请"，朗读时也容易把儿歌的两句话顺序记混。他们的思维以具体形象思维为主，对抽象的构字规律理解起来有困难。因此，本课的教学我特别注重把规律"做"给学生看，用动画、游戏、口诀等直观手段帮他们建立形旁表意的意识。

**三、说教学目标**
我确定了三个教学目标。第一个是认识生字，会写重点字，正确流利有感情地朗读并背诵儿歌，这是基础性目标。第二个是发现"青"字加偏旁组成新字的规律，学习用"加一加"的方法识记形声字，这是方法性目标。第三个是了解青蛙是益虫，激发保护青蛙、爱护动物的情感，这是情感性目标。三个目标由字到词、由词到句、由句到情，层层递进，共同指向语文核心素养中语言运用和思维能力的培养。

**四、说教学重难点**
本课的重点有两个：一是认识"青"字族生字，正确区分五个形近字；二是正确流利地朗读背诵儿歌。难点是理解形声字"声旁表音、形旁表意"的构字规律。为什么说这是难点呢？因为规律是抽象的，孩子容易陷入死记字形，而不懂得用偏旁去推想字义。所以我的课堂上，会用大量具体的例子让孩子自己动手拼一拼、拆一拆，在操作中内化这个规律。

**五、说教法学法**
教法上，我主要采用字族识字法、游戏教学法和朗读感悟法。字族识字是核心，让学生认识一个"青"，带出一串字；游戏教学让识字过程充满趣味；朗读感悟让学生在读中积累语言、读出情感。学法上，我引导学生动手拼一拼偏旁、动脑拆一拆字形、动口读一读儿歌，在做中学、在玩中记，充分体现学生的主体地位。

**六、说教学过程**
我的课堂分为五个环节。第一环节约五分钟，用谜语导入，猜一猜绿衣小英雄是谁，一下子抓住学生的注意力，同时渗透青蛙吃害虫的常识。第二环节约八分钟，初读儿歌，通过范读、带读、拍手读等多种方式，让学生把儿歌读通读顺，读出节奏，并整体感知儿歌写了什么。第三环节约十三分钟，是本课的核心，我播放"青"字找朋友的动画，让"青"依次和三点水、日字旁、目字旁、竖心旁、言字旁交朋友，每变出一个新字，就带着学生分析偏旁和字义的关系，在总结规律时我还会特意追问：为什么"睛"是目字旁而不是日字旁？引导学生通过偏旁比较，自己说出"目就是眼睛"，从而真正理解形旁表意的道理，最后再用"偏旁找朋友"的游戏巩固。第四环节约九分钟，指导有感情朗读和背诵，先让学生找一找儿歌里表达爱护之情的句子，再通过教师范读、指名读、同桌对读逐步提高要求，用"去字留图"的方法帮助学生轻松背下儿歌，并交流"我们能为小青蛙做什么"。第五环节约五分钟，用口诀复习形近字，指导书写"青"和五个左右结构的字，布置分层作业。整节课环环相扣，识字与朗读、游戏与思考始终交织在一起。

**七、说板书设计**
我的板书分为两层。上层是儿歌的节奏文本，用停顿线标出朗读节奏，随时服务朗读；下层是一个"青"字族的对照表，把青加偏旁变成的五个字列出来，旁边注明偏旁和字义，最下面一行点出"声旁表音、形旁表意"的规律，以及"青蛙是益虫"的情感主题。这样的板书既呈现了本课的知识结构，又把形声字规律可视化，学生抬头就能复习。

**八、说教学反思与效果预测**
通过本课，我预计学生能够熟练认读青字族生字，大部分学生能在提示下说出"这个偏旁表示什么意思"，能够流利背诵儿歌，并在朗读中流露出对青蛙的喜爱与保护之情。课堂上可能会出现学生拼字游戏时偏旁与字对不上的情况，这正是宝贵的生成资源，我会顺势引导学生再一次观察偏旁、读准字音。不足之处在于，一年级孩子注意力易分散，游戏环节若组织不当容易喧闹，我会用明确的口令和任务单来控制节奏。同时我也会在课后通过听写和口诀来持续巩固这组形近字，把课堂习得真正转化为长期记忆。我的说课到此结束，谢谢各位老师，恳请大家多提宝贵意见！`},"小学|二年级|语文|古诗二首：村居/咏柳":{plan:`**教学基本信息**
课题：古诗二首：村居/咏柳
教材版本：统编版小学语文二年级下册
年级：小学二年级
课型：古诗教学课
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**
1. 认识"莺、拂、堤、醉、妆、绦"等生字，会写本课生字；能正确、流利、有感情地朗读并背诵两首古诗。
2. 借助插图和生活经验理解诗句意思，想象诗句描绘的春天画面；初步感受《村居》的动静结合与《咏柳》的比喻之妙，学习对比阅读。
3. 体会两首诗对春天的喜爱与赞美，感受早春的生机与美好，激发热爱春天、热爱生活的感情，落实"审美创造"与"文化自信"的核心素养。

**教学重难点**
教学重点：朗读背诵两首诗，借助插图理解诗意，想象春天的画面。
教学难点：体会《村居》中"醉"字的表达效果；理解《咏柳》中"碧玉""剪刀"两个比喻的巧妙之处。

**教学准备**
课件：春天田野图、杨柳图、风筝图、柳树特写图、两首诗的配乐朗读音频。
教具：生字卡片、"春"字主题词卡、放风筝动作视频片段。
学生准备：回忆自己放过风筝或见过柳树的经历，准备好水彩笔在纸上画一画心中的春天。

**教学过程**

**环节一 情境导入，唤醒春天（约 4 分钟）**

【教师活动】
课件出示一幅早春图画：嫩绿的草芽、低飞的黄莺、拂动柳枝的河堤、天上飘着的风筝。教师用舒缓的语气说："同学们，冬爷爷刚走，春姑娘就悄悄来了。你从这幅图里，找到了哪些春天？"学生自由说，教师相机把"草、莺、杨柳、风筝"等词贴上黑板。
预设师生对话：
师："你在这幅图里找到了春天吗？"
生："小草发芽了。"
生："有小鸟在飞。"
生："有人在放风筝！"
师："春天就藏在这些景物里。有两位诗人也看见了这样的春天，一位把它写成了放风筝的欢歌，一位把它写成了赞柳树的诗行。今天，我们一起来学习古诗二首——《村居》和《咏柳》。"
教师板书课题，带读两遍。

【学生活动】
学生观察春景图，交流找到的春天景物，齐读课题，带着对春天的期待进入古诗学习。

【设计意图】
用"找春天"的图画活动唤醒学生已有的生活经验，把抽象的"早春"具象化，同时自然引出两首诗的共同主题，为全课营造春意融融的基调。

**环节二 诵读《村居》，品味春景（约 14 分钟）**

【教师活动】
（一）认识诗人，读通古诗。教师简介：这首诗是清代诗人高鼎写的，他擅长描写乡村生活。播放配乐朗读，学生跟读，注意"莺、拂、堤、鸢"等字音，读出停顿：草长/莺飞/二月天，拂堤/杨柳/醉春烟。
（二）图文对照，理解诗意。逐句出示画面与诗句：
第一句"草长莺飞二月天"：二月里青草长出了嫩芽，黄莺在天空快乐地飞。提问："你仿佛看到了什么？听到了什么？"
第二句"拂堤杨柳醉春烟"：堤岸上的柳条轻轻拂过堤面，仿佛陶醉在春烟里。重点品"醉"字："柳条会喝醉吗？这里是把柳条当作什么来写？"
第三四句"儿童散学归来早，忙趁东风放纸鸢"：孩子们放学早，急忙趁着东风放风筝。教师播放放风筝视频片段，请学生演一演"忙趁"的急切。
（三）想象画面，读出画面。配乐齐读，想象自己就是放风筝的孩童。
预设师生对话：
师："'醉春烟'的'醉'字用得妙不妙？柳条会喝醉吗？"
生："不会，这是把柳条当成人来写。"
师："它为什么醉了呢？"
生："因为春天的景色太美了，柳条被迷住了。"
师："真会读书！这一个'醉'字，写活了柳条在春风里轻轻摇摆、如痴如醉的姿态。作者看着这美景，心里也醉了。"
（四）背诵指导。抓住关键词"草长—莺飞—杨柳—儿童—纸鸢"串成记忆链，齐背全诗。

【学生活动】
学生跟随朗读、逐句理解诗意，品析"醉"字，观看视频并表演"忙趁东风放纸鸢"，借助关键词链背诵全诗。

【设计意图】
以"读通—读懂—读美"为线索，图文对照还原画面，紧扣"醉"字进行咬文嚼字，让学生在想象与表演中感受早春乡村的生机与儿童的欢乐，突破本课难点之一。

**环节三 研读《咏柳》，品味比喻（约 12 分钟）**

【教师活动】
（一）认识诗人，初读全诗。教师介绍：这首诗的作者是唐代大诗人贺知章，他被称为"四明狂客"。学生自由读诗，读准"妆、绦"的字音，读出节奏：碧玉/妆成/一树高，万条/垂下/绿丝绦。
（二）找比喻，明诗意。教师出示柳树特写图，提问："诗人把柳树比作了什么？把柳条比作什么？"引导发现：把整棵柳树比作"碧玉"，把千万条柳枝比作"绿丝绦"（丝线编成的带子）。相机理解"妆"是打扮、装饰的意思。
（三）质疑探究。教师追问："第三句是一个问句——不知细叶谁裁出？第四句自己回答了——二月春风似剪刀。这把'剪刀'剪出了什么？"
（四）画一画，诵一诵。请学生用简笔画画出心中高大碧绿的柳树，再配乐朗读全诗，读出赞美的语气。
预设师生对话：
师："高高的柳树像什么？"
生："像用碧玉装扮起来的！"
师："垂下千万条柳枝又像什么？"
生："像绿色的丝带！"
师："那细细的柳叶是谁裁出来的呢？"
生："是二月的春风，春风像剪刀一样裁出来的！"
师："春风不是真的剪刀，但春风拂过，柳叶就一片片长出来，这个比喻多奇妙啊。诗人用三个比喻，把柳树写得又美又精神。"

【学生活动】
学生圈画比喻词，图文对照理解诗意，用简笔画表现"碧玉妆成一树高"的画面，配乐诵读，感受比喻的奇妙。

【设计意图】
紧扣"找比喻"这一主线，用"写的是什么—比作什么—为什么像"三步支架帮助学生读懂比喻，把抽象的修辞具象为可见的画面；画柳环节让学生的审美体验外化，进一步感受春风的巧手与春天的生机。

**环节四 对比阅读，总结升华（约 6 分钟）**

【教师活动】
（一）对比梳理。教师出示表格，师生共同填写：相同点——两首诗都写春天，都表达对春天的喜爱；不同点——《村居》写乡村田野和放风筝的孩子，画面有动有静、热闹欢快，《咏柳》写河边一棵柳树，用比喻写出柳的柔美。
（二）情感升华。教师总结："同样是春天，高鼎看见了孩子的欢笑，贺知章看见了柳树的美。春天在每个人眼里都不一样，但都那么美好。让我们把这两首诗连起来背一遍，把春天装进心里。"

【学生活动】
学生参与对比表格填写，对比两首诗的异同，连起来背诵两首诗。

【设计意图】
通过对比阅读，帮助学生建立整体意识，初步学习"求同找异"的古诗学习方法；两诗联诵既巩固背诵，又把课堂推向情感高潮，深化对春天之美的体验。

**环节五 课堂小结与作业（约 4 分钟）**

【教师活动】
（一）生字巩固。出示"莺、拂、堤、醉、妆、绦、裁"等字卡，开火车认读并组词，重点提醒"鸢"字下面是"鸟"，不要写成"鸟"字少一点；"绦"是绞丝旁，和丝线有关，不能写成"条"；"堤"是土字旁，和土岸有关。
（二）布置作业。基础作业：把两首诗背给家人听，并默写《村居》；提高作业：学做小诗人，用"二月春风似剪刀"这样的句式，写一句赞美春天的话，配上一幅画。

【学生活动】
学生认读巩固生字，明确作业要求，在春意盎然的氛围中结束课堂。

【设计意图】
生字重点辨析落实书写细节；分层作业既保底又开放，鼓励学生仿照比喻的句式创作，让"春天"从课堂走向学生的笔端和生活。

**板书设计**
<pre>
                  古诗二首
    《村居》高鼎                《咏柳》贺知章
    草长莺飞二月天              碧玉妆成一树高
    拂堤杨柳醉春烟              万条垂下绿丝绦
    儿童散学归来早              不知细叶谁裁出
    忙趁东风放纸鸢              二月春风似剪刀
    乡村·儿童·风筝              柳树·碧玉·丝绦·剪刀
    （动静结合·欢乐）           （比喻巧妙·柔美）
    ┌──────────────────────┐
    同：都写春天，都爱春天   异：画面不同，手法不同
</pre>

**教学反思要点**
1. 两首诗在一课时内完成，时间是否均衡、是否厚此薄彼，朗读与讲解的比例是否恰当，学生自主读悟的时间是否充足。
2. "醉"字的赏析是否引导到位，学生能否说清"谁醉、为什么醉、写出了什么"，还是只停留在"醉了"的浅层理解。
3. 《咏柳》的比喻教学是否借助了插图、简笔画等直观手段，学生能否真正区分"碧玉"指柳树而非真的玉石。
4. 对比阅读环节是否流于形式，学生能否在教师引导下真正发现两首诗的异同，还是由教师代答。
5. 背诵指导是否有梯度，学生当堂能否达到背诵目标；生字的书写和易错点（如"鸢""绦"）是否得到落实，作业分层是否合理。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是统编版小学语文二年级下册的古诗二首《村居》和《咏柳》。这是两首描写春天的经典古诗。《村居》是清代诗人高鼎的作品，写的是早春二月乡村的景色和儿童放学后放风筝的欢乐场面，动静结合，充满生活气息；《咏柳》是唐代诗人贺知章的咏物名篇，把柳树比作碧玉，把柳条比作丝绦，把春风比作剪刀，想象奇特，比喻精妙。编者把这两首诗放在一起，用意很深：它们都是写春天，一位诗人写乡村、写儿童，一位诗人写柳树、写春风，正好可以对照着读，让学生感受同样的春天在不同诗人笔下呈现出不同的美。我把本课定位为古诗教学课，在一课时内完成两首诗的学习。

**二、说学情**
二年级的学生已经积累了一定量的古诗，会背诵一些短小的绝句，初步感受到了古诗的节奏美。他们对春天的景物有直观的生活经验，见过柳树、放过风筝，这对理解诗意很有帮助。但古诗语言凝练，加上年代久远，学生理解"醉春烟""碧玉妆成"这样的词句仍有困难；他们第一次接触"把物当成人来写""比喻"这样的概念，需要借助具体画面来理解。所以我在设计时，特别注意图文对照和动作体验，把抽象的诗句还原成他们能看见、能演出的画面。同时，我还会注意保护学生背诵的积极性，用关键词串记等方法降低背诵难度，让每个孩子都能尝到成功的喜悦。

**三、说教学目标**
我确定的教学目标有三个。第一，认识生字，会写生字，正确流利有感情地朗读并背诵两首古诗，这是知识层面的目标。第二，借助插图和生活经验理解诗句意思，想象春天的画面，初步感受动静结合和比喻的写法，这是方法与能力层面的目标。第三，体会诗人对春天的喜爱之情，激发热爱春天、热爱生活的感情，这是情感层面的目标。这三个目标体现了语文核心素养中语言运用、思维能力和审美创造的统一。

**四、说教学重难点**
本课的教学重点是朗读背诵两首诗，理解诗意，想象春天的画面。教学难点有两个：一是体会《村居》中"醉"字的表达效果，二是理解《咏柳》中"碧玉""剪刀"两个比喻。为什么把这两个点定为难点呢？因为"醉"字是一首诗的诗眼，需要学生体会到拟人和沉醉的妙处；而"碧玉""剪刀"这两个比喻，如果孩子把它当成真的玉石和剪刀，就无法体会诗人的想象之妙了。

**五、说教法学法**
教法上，我主要运用图文对照法、诵读感悟法和对比阅读法。图文对照让诗句和画面一一对应，比如讲"拂堤杨柳"时，我就出示一幅杨柳拂堤的实景图，学生一看就懂，理解难度大大降低；诵读感悟让学生在读中想象、读中悟情，在读准节奏的基础上读出春天的生机；对比阅读帮助学生建立两首诗的联系，学会求同找异。学法上，我引导学生看看图、画画画、演一演、背一背，比如学《村居》时演一演放风筝的急切，学《咏柳》时画一画心中的柳树，调动多种感官参与学习，让古诗学习不枯燥、不抽象。

**六、说教学过程**
我的教学过程分五个环节。导入环节约四分钟，我出示一幅早春图，让学生找一找图里的春天，激活已有经验，自然引出两首诗。第二个环节约十四分钟，学习《村居》，我带着学生认识诗人、读通诗句，然后逐句图文对照理解诗意，重点咬住一个"醉"字反复品味，再让学生演一演"忙趁东风放纸鸢"的急切，最后抓住关键词串记全诗。第三个环节约十二分钟，学习《咏柳》，我引导学生用"找比喻"的方法，先找写的是什么，再找比作什么，先找到"一树高"和"碧玉"的对应，再找到"绿丝绦"和垂柳的对应，最后抓住"剪刀"体会春风的本领，配合柳树特写图和学生自己的简笔画，感受三个比喻的层层递进与奇思妙想，然后配乐诵读。第四个环节约六分钟，把两首诗放在一起对比，用表格梳理相同点和不同点，连起来背诵。最后一个环节约四分钟，巩固生字易错点，布置分层作业。整节课两首诗各有侧重，又前后呼应。

**七、说板书设计**
我的板书分三个板块。中间是课题"古诗二首"，左边是《村居》，右边是《咏柳》，每首诗下面列出诗中景物和写作特色，如"动静结合""比喻巧妙"；最下面是两者的对比，点出"同写春天、画面不同、手法不同"。这样的板书既呈现了两首诗的内容结构，又清晰展示了对比学习的路径，方便学生回顾和背诵。

**八、说教学反思与效果预测**
通过这堂课，我预计学生能当堂背诵两首诗，能说出《村居》写的画面，能找出《咏柳》里的比喻，部分学生能初步体会到"醉"字的妙处。课堂上可能会出现的困难是：学生对"醉春烟"的理解比较表面，对"碧玉"容易误解成真的玉石，我会用画面和追问来化解。这节课内容容量较大，一课时完成两首诗，对教学节奏是很大的考验，如果时间紧张，我会把对比环节的表格简化，确保学生充分朗读。同时我也会在课后通过默写和找比喻的练习巩固所学，关注背诵的当堂达成度，如果部分学生还不能完整背诵，就把作业调整为先熟读再背诵，让不同能力的孩子都能获得学习的成就感，真正让两首春天的诗走进学生心里。我的说课完毕，请各位老师指正，谢谢！`},"小学|二年级|语文|课文：找春天":{plan:`**教学基本信息**
课题：课文：找春天
教材版本：统编版小学语文二年级下册
年级：小学二年级
课型：阅读课
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**
1. 认识"脱、袄、寻、羞"等生字，会写"冲、寻、姑、娘、吐、柳、荡、桃、杏"等生字，正确读写"春天、寻找、姑娘、柳树"等词语。
2. 正确、流利、有感情地朗读课文，能背诵课文；学习课文用"眉毛、眼睛、音符、琴声"打比方的方法，体会"探出头来""吐出点点嫩芽"等拟人句的生动有趣。
3. 积累"遮遮掩掩、躲躲藏藏、叮叮咚咚"等 AABB 式词语，练习用"那是……吧？"的句式说话写话，感受发现春天的惊喜与乐趣，落实"审美创造"与"语言运用"的核心素养。

**教学重难点**
教学重点：认读生字，有感情地朗读并背诵课文，积累 AABB 式词语。
教学难点：理解课文把春天比作害羞的小姑娘，体会拟人、比喻手法的表达效果，并能迁移仿写。

**教学准备**
课件：春天景物图片（小草、野花、嫩芽、小溪）、配乐朗读音频、拟人句演示动画、写话任务单。
教具：生字卡片、"寻找春天"主题板贴、"害羞的小姑娘"头饰。
学生准备：课前和家人到户外找一找春天的足迹，带回一句自己发现的"春天"。

**教学过程**

**环节一 情境导入，引出"找春天"（约 5 分钟）**

【教师活动】
教师出示一张"早春田野"的照片，请学生说一说什么季节到了。然后提出问题："春天已经悄悄来了，可是它很害羞，喜欢藏起来。你们想不想像小侦探一样，把它找出来？"教师揭示课题，板书"找春天"，带读。
预设师生对话：
师："这照片里是哪个季节？"
生："春天！小草都长出来了。"
师："你从哪里看出来的？"
生："小草绿绿的，树也发芽了。"
师："是啊，春天来了，它藏在大自然里。课文里也有几个孩子，他们脱掉棉袄，冲出家门，到大自然里找春天。他们找到了什么呢？我们一起去看看吧。"

【学生活动】
学生观察照片，交流春天的迹象，齐读课题，产生"跟随课文找春天"的期待。

【设计意图】
用"找春天"这一活动化的课题激发学生的好奇心和探索欲，把学生带入课文情境；谈话中自然渗透"春天是悄悄到来的"这一课文主旨，为品读埋下伏笔。

**环节二 初读课文，整体感知（约 8 分钟）**

【教师活动】
（一）教师配乐范读课文，学生边听边想：孩子们到哪里去找春天？
（二）学生自由朗读，要求读准字音、读通句子，圈出"遮遮掩掩、躲躲藏藏、叮叮咚咚"等词语。
（三）出示生字新词，用字理和归类方法识字：提手旁的"探、掩、拂"都和手的动作有关；"遮"是走之旁，注意读音；"羞"字可以编顺口溜"歪尾巴羊，害羞躲藏"。开火车读、赛读。
（四）整体感知提问："孩子们是在什么心情下去找春天的？你从哪些词语看出来？"
预设师生对话：
师："读读第一段，孩子们的心情怎么样？"
生："很着急，很兴奋！"
师："从哪里看出来？"
生："'冲出家门''奔向田野'，还有两个'春天来了！'"
师："连用两个'春天来了'，还有感叹号，写出了孩子们的惊喜。他们又找到了哪些春天的景物呢？下节课我们细细品。"
（五）指名学生分节朗读课文，师生共同正音。

【学生活动】
学生听读、自由朗读、圈画词语，用多种方法识字，分节朗读，交流孩子们找春天的急切心情。

【设计意图】
初读环节落实"读通"和"识字"两大任务，用字理归类法提高识字效率；抓住"冲出家门""春天来了"等词句感知全文情感基调，为精读感悟做好铺垫。

**环节三 精读品悟，感受语言之妙（约 14 分钟）**

【教师活动】
（一）品"害羞的小姑娘"。出示句子"春天像个害羞的小姑娘，遮遮掩掩，躲躲藏藏。"教师提问："小姑娘为什么会害羞？春天像她吗？"引导学生理解：春天刚来，景物都是小小的、刚刚冒出来，像害羞的小姑娘一样不肯一下子露面。
（二）品"探"字。出示句子"小草从地下探出头来，那是春天的眉毛吧？"教师用动作演示"探"，请学生做一做"探头"的动作，提问："'探'字把小草写成了什么？"引导学生体会：小草刚发芽，又小又嫩，像小朋友偷偷探出头来张望世界。
（三）品"吐"字。出示"树木吐出点点嫩芽，那是春天的音符吧？"对比"长出"与"吐出"，提问："为什么用'吐出'？你仿佛看到了什么？"
（四）寻找"春天在哪里"。学生自读课文，用直线画出孩子们找到的四种景物，填表：小草探出头——春天的眉毛；早开的野花——春天的眼睛；树木吐嫩芽——春天的音符；解冻的小溪——春天的琴声。教师点拨："小草、野花、嫩芽、小溪都有一个共同点，它们都是刚刚出现，说明春天是悄悄地、一步一步来到我们身边的。"
（五）指导朗读。读感叹句读出惊喜，读"那是……吧？"读出猜测的试探，读"找啊，找啊"读出仔细寻找的耐心。
预设师生对话：
师："小草是'探出头来'的，不是'长出来'的，为什么？"
生："因为小草很小很小，像小朋友探头看世界。"
师："好，你做做'探'的动作。"
生：（做探头张望的动作）
师："这一探头，把小草写得多可爱呀！还有，嫩芽为什么说是'吐出'的？"
生："嫩芽小小的，刚从枝头冒出来，像吐出来的一样。"
师："你们的想象真丰富。课文就是这样，把春天的小草、野花、嫩芽、小溪当成人来写，让它们都有表情、有动作，这就叫拟人。"

【学生活动】
学生做"探""躲"等动作，自读圈画找景物、填表格，在教师引导下比较"长出"与"吐出"的不同，多种形式朗读，体会拟人比喻之妙。

【设计意图】
本环节是本课的核心，紧扣"把春天比作害羞的小姑娘"和四个"那是……吧？"的比喻句，通过做动作、比词语、填表格等方式，让学生直观感受拟人句和比喻句的生动有趣，突破教学难点。

**环节四 拓展迁移，积累运用（约 9 分钟）**

【教师活动】
（一）AABB 式词语积累。出示"遮遮掩掩、躲躲藏藏、叮叮咚咚"，教师提问："这些词语在字形上有什么特点？"引导发现 AABB 式结构。教师拓展：还有哪些这样的词语？学生交流"高高兴兴、快快乐乐、开开心心、干干净净"等，教师板书归纳。
（二）句式仿写。出示句式"那是……吧？"教师先示范："桃花笑红了脸，那是春天的笑脸吧？"再请学生照样子用发现的春天景物说句子。
（三）写话练习。发放写话任务单："春天来了！我看见______，那是春天的______吧？我听见______，那是春天的______吧？"学生先口头说，再动笔写，同桌互评，评选"最美比喻"。
预设师生对话：
师："你能用'那是……吧？'说说你发现的春天吗？"
生："小燕子飞回来了，那是春天的信使吧？"
生："青蛙呱呱叫，那是春天的鼓声吧？"
师："说得真美！你们的春天都藏在这些句子里了。"

【学生活动】
学生发现 AABB 式词语规律并积累运用，先口头仿说再动笔写话，同桌互评，展示交流。

【设计意图】
从积累到运用，由扶到放：先积累 AABB 式词语，再模仿"那是……吧？"的句式说话，最后迁移到书面写话，形成"学语言—用语言"的完整链条，把阅读的收获转化为表达的能力。

**环节五 课堂小结与作业（约 4 分钟）**

【教师活动】
（一）回顾小结。教师带着学生回顾：孩子们找到的春天藏在哪里？课文用了哪些好办法把春天写活？学生齐读或试背课文。
（二）写字点拨。重点指导"柳"（左窄右宽，右边是"卯"字多一点，不要少一竖）、"荡"（草字头，下面"汤"的右边是"昜"不是"扬"）。
（三）布置作业。基础作业：把课文背给家人听，抄写积累的 AABB 式词语；提高作业：和家人去户外找春天，用"那是……吧？"的句式写两句话，配上自己画的春天。

【学生活动】
学生回顾课文内容，跟读试背，观察易错字，明确作业内容。

【设计意图】
以"回顾+试背"收束全文，把语文要素落回课文；写字点拨紧扣易错点防患于未然；分层作业鼓励学生走向真实的大自然，让"找春天"从课堂延伸到生活。

**板书设计**
<pre>
                    课文：找春天
        春天像个害羞的小姑娘（遮遮掩掩、躲躲藏藏）
        ┌────────────┬────────────┐
        小草探出头 → 春天的眉毛    野花一朵两朵 → 春天的眼睛
        树木吐嫩芽 → 春天的音符    小溪叮叮咚咚 → 春天的琴声
        （探、吐——拟人）        （眉、眼、音符、琴声——比喻）
        AABB：遮遮掩掩 躲躲藏藏 叮叮咚咚 高高兴兴……
        春天悄悄来，用心去发现
</pre>

**教学反思要点**
1. 拟人和比喻的教学是否真正落到实处，学生能否说出"探""吐"为什么用得好，还是只停留在"因为生动"的空泛表达。
2. 朗读指导是否有层次，感叹句的惊喜、疑问句的试探、排比句的欢快是否读出了不同语气，"找啊，找啊"是否读出耐心与仔细。
3. 仿写训练是否做到"先扶后放"，教师示范是否有效，学生仿写时是否出现比喻不贴切的情况（如忽略初春小草细短的特点），互评环节是否真正发挥了作用。
4. 生字教学中"遮""柳""荡"等易错字是否得到重点突破，AABB 式词语的积累是否防止了写错（如"遮遮掩掩"写成"遮遮挡挡"）。
5. 一课时内容容量大，识字、朗读、品读、仿写能否在 40 分钟内合理分配，是否需要依据学生实际进行取舍。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是统编版小学语文二年级下册的课文《找春天》。这是一篇优美的儿童散文，作者是经绍珍。课文写了几个孩子脱掉棉袄、冲出家门、奔向田野，到大自然中寻找春天的过程。全文最大的特点是想象丰富、语言清新，作者把春天比作害羞的小姑娘，把小草探出头比作春天的眉毛，把野花比作春天的眼睛，把嫩芽比作春天的音符，把小溪的叮咚声比作春天的琴声，通篇洋溢着发现春天的惊喜与对春天的喜爱。这样一篇散文，既能培养学生的朗读感悟能力，又是学习拟人、比喻手法的绝佳范本，还能积累 AABB 式词语。我把本课定位为阅读课。

**二、说学情**
二年级的学生对春天并不陌生，他们能说出春天的不少景物，比如小草发芽、柳树抽枝，但要把所见转化为生动的语言，还需要引导。他们已经接触过比喻和拟人，但理解多停留在表面，说不清"好在哪里"；他们的朗读能力正在形成中，对感叹句、疑问句的语气把握还不准；仿写句子是他们第一次系统接触，容易写出不贴切的比喻，需要教师搭好支架。针对这些学情，我把课堂的重点放在"感受语言之妙"和"迁移运用语言"上，同时十分重视朗读梯度的搭建，让学生一课一得、学有所获。

**三、说教学目标**
我确定了三个教学目标。第一个，认识生字，会写生字，正确流利有感情地朗读课文并背诵，这是基础目标。第二个，学习课文打比方的方法，体会拟人句的生动有趣，积累 AABB 式词语，这是能力目标。第三个，感受孩子们寻找春天时的惊喜与发现之乐，激发热爱大自然的情感，这是情感目标。三个目标指向语文核心素养中的语言运用、思维能力和审美创造。

**四、说教学重难点**
本课的重点是认读生字，有感情地朗读背诵课文，积累 AABB 式词语。难点是理解课文把春天比作害羞的小姑娘，体会拟人和比喻手法的表达效果。之所以难，是因为学生第一次接触"把景物当作人来写"的系统学习，需要用大量的画面、动作和比较来帮助他们真正理解。

**五、说教法学法**
教法上，我主要采用情境导入法、朗读感悟法、字理识字法和图文结合法。朗读是阅读课的生命，我设计了看画面读、看标点读、配乐读三个层次；识字采用字理和归类相结合，比如带提手旁的字和手的动作有关。学法上，我引导学生圈一圈、画一画、填一填、演一演，在动手动口中实现深度学习。

**六、说教学过程**
我的课堂分五个环节。第一环节约五分钟，用一张早春田野照片和"找春天"的情境任务导入，点燃学生的探索热情。第二环节约八分钟，初读课文，重点是读通句子、认识生字，我用字理和归类方法带学生突破字音字形，比如把"探、掩、拂"这几个提手旁的字放在一起比较，让学生发现它们都和手的动作有关，识记起来又快又牢，同时抓住"冲出家门""春天来了"等词句，体会孩子们急切惊喜的心情。第三环节约十四分钟，是本课的重心，我先品"春天像个害羞的小姑娘"这个总比喻，让学生说说小姑娘为什么会害羞、春天什么地方像她，再逐句品析"探""吐"两个动词，让学生做一做探头、躲藏的动作，把"长出"和"吐出"放在一起比一比，体会用词的精确与生动，接着让学生圈画出四种景物，填入"小草探出头—春天的眉毛"这样的对应表，最后分层次指导朗读，感叹句读出惊喜，疑问句读出试探，排比句读出欢快。第四环节约九分钟，先积累"遮遮掩掩、躲躲藏藏、叮叮咚咚"等 AABB 式词语，再仿照"那是……吧？"的句式，先由我示范，再让学生口头说、动笔写，同桌互评，评选最美比喻。第五环节约四分钟，回顾总结、试背课文、指导易错字，布置分层作业。整个教学过程从读到品、从积累到运用，环环相扣。

**七、说板书设计**
我的板书中间是课题，下面先点出"春天像个害羞的小姑娘"，这是全文的总起；然后左右两栏呈现四个"春天在哪里"的对应关系，左边写景物和动作，右边写比喻和想象，中间用"拟人""比喻"点明方法；最下面一行是 AABB 式词语和主题小结"春天悄悄来，用心去发现"。这样的板书既是课文内容的结构图，又是语言方法的总结，学生看着板书就能复述课文大意。

**八、说教学反思与效果预测**
通过这堂课，我预计学生能流利朗读并背诵课文，能说出"探""吐"用词之妙，能积累若干 AABB 式词语，大部分学生能用"那是……吧？"仿写出贴切的句子。课堂上可能出现的困难是：学生仿写时比喻不贴切，比如把小草比作头发而忽略了初春小草细短的特点，我会用"先示范、再互评"的方式引导修改。朗读时学生也可能把"春天来了"读得平淡，我会用看画面、看标点、配乐读的三步法来训练。一课时内内容较多，若时间不够，我会压缩仿写展示的时长，把写话延为作业，确保朗读品悟的充分。我相信，这样一节充满发现乐趣的课，会让孩子们爱上读散文、爱上写春天，也会让他们养成留心观察大自然的好习惯。当然，课堂上的生成总会超出预设，我会尊重学生独特的想象，因势利导，让课堂真正成为师生共同发现春天的地方。我的说课完毕，谢谢大家，恳请老师们批评指正！`}},ts={"小学|三年级|语文|课文：燕子":{plan:`**教学基本信息**
- 课题：《燕子》
- 教材版本：统编版小学语文三年级下册
- 年级：小学三年级
- 课型：精读课
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学三年级学生

**教学目标**
1. 认识"俊、俏、拂、增"等 14 个生字，会写"燕、聚、增、掠、稻、尖、偶、沾、圈、漾、倦、符、演、赞"14 个生字，正确读写"燕子、聚拢、增添、掠过"等词语，落实语言建构与运用。
2. 正确、流利、有感情地朗读课文，背诵第一至三自然段，借助语言文字在脑海中想象画面，体会燕子的活泼机灵和春天的美丽，提升审美鉴赏与创造能力。
3. 学习作者按一定顺序、抓住特点描写外形的表达方法，感受"动静结合"的写法，尝试仿写一种小动物的外形，发展思维与语言运用能力。

**教学重难点**
- 教学重点：有感情地朗读课文，学习抓住特点、按顺序描写事物的方法。
- 教学难点：体会"凑、痕、沾、掠"等词语的准确传神，理解动静结合的写法，并能仿写小动物外形。

**教学准备**
- 教师准备：多媒体课件（春天田野风光、燕子飞行与停歇的图片和视频）、配乐朗读音频、生字卡片、五线谱图片、仿写任务单。
- 学生准备：课前观察一种自己喜欢的小动物，想一想它长什么样、有什么特点；预习课文，圈画出生字词。

**教学过程**

**环节一 情境导入（约 5 分钟）**

教师活动：
师：（播放春天田野风光的视频，配轻柔的音乐）同学们，春天悄悄地来了。你们看，春风轻轻地吹，柳枝慢慢地摇，细雨如丝，洒在田野上。这时候，天空中来了一群小精灵，你们知道它们是谁吗？
生：是小燕子！
师：你们在生活里见过燕子吗？谁来说一说它长什么样？
生 1：我在老家见过，燕子全身黑黑的，肚皮是白色的。
生 2：燕子的尾巴像一把剪刀，飞起来特别快。
师：你们真是生活中的有心人！今天，我们就一起走进著名作家郑振铎先生的散文《燕子》，去看看他笔下的小燕子有多可爱。（板书课题：燕子，学生齐读课题）
师：郑振铎是我国著名的作家和学者，他非常喜欢小动物，尤其喜欢春天里的小燕子。这篇课文会带给我们怎样的画面呢？让我们一起去读一读。

学生活动：欣赏春天视频，交流自己在生活中见过的燕子，齐读课题。

设计意图：以春天情境和学生的生活经验作为切入点，唤醒已有认知，激发阅读期待，为走进文本营造轻松愉悦的氛围。

**环节二 初读课文，整体感知（约 10 分钟）**

教师活动：
师：请同学们打开课本，自由朗读课文，注意读准字音、读通句子，遇到不认识的字可以借助拼音，也可以请教同桌。读完之后想一想：课文写了燕子的哪几方面内容？
生：（自由朗读课文）
师：课文读完了，老师来检查一下生字词。（出示生字词卡片：燕子、聚拢、增添、掠过、稻田、偶尔、沾水、一圈、荡漾、飞倦、音符、赞歌、俊俏、吹拂）
师：先请一位同学来当小老师，带着大家读一遍。
生：（领读生字词）
师：读音非常标准。我们再开火车读一读。
生：（开火车轮读）
师：有几个字想提醒大家注意。"倦"字读 juàn，意思是疲劳、困乏，"飞倦了"就是飞累了；"偶"读 ǒu，要和"遇"区分开。写"聚"的时候，下半部分要注意笔画；写"燕"的时候，上面像草字头，但不是草字头，要注意笔顺。（教师范写"燕""聚"，学生书空）
师：生字关过了。现在请同学们说一说，课文写了燕子的哪几方面内容？
生：课文写了燕子的外形、飞行和停歇。
师：概括得真准确！课文第一自然段写燕子的外形，第二自然段写春天的景象作背景，第三自然段写燕子的飞行，第四自然段写燕子的停歇。（相机板书：外形 飞行 停歇）
师：请同学们把课文再读一遍，读正确、读流利。

学生活动：自由朗读，小老师领读，开火车读词，书空生字，交流课文内容，再次朗读课文。

设计意图：通过多种形式识字正音，扫清阅读障碍；通过整体感知理清课文脉络，让学生对文本形成整体印象。

**环节三 精读品悟，感受美好（约 15 分钟）**

教师活动：
（一）品外形之美
师：我们先来看燕子的外形。请一位同学读第一自然段，其他同学边听边想：作者先写了什么，再写了什么，最后写了什么？
生：（朗读第一自然段）
师：作者是按什么顺序写的？
生：先写羽毛，再写翅膀，最后写尾巴。
师：从"一身"到"一对"，由整体到部分，顺序清清楚楚。那作者抓住了每部分的什么特点呢？羽毛是什么样的？
生：乌黑光亮的羽毛。
师：抓住颜色来写。翅膀呢？
生：俊俏轻快的翅膀。
师：抓住姿态来写。尾巴呢？
生：剪刀似的尾巴。
师：这是抓住形状来写。颜色、姿态、形状，特点各不相同，写得真准。这里有一个词特别有意思——"凑成了"。我们把"凑成了"换成"组成了"读一读、比一比，你觉得哪个好？
生：（比较朗读后交流）我觉得"凑"字好，"凑"好像是把羽毛、翅膀、尾巴这些零件一个个拼起来，才凑成一只小燕子。
师：说得多妙啊！一个"凑"字，让我们眼前仿佛出现了这只活泼机灵的小燕子。我们带着喜爱之情读一读这一段。
（二）品飞行之美
师：这样活泼机灵的小燕子，是在怎样的春天里飞来的？请同学们读第二自然段，看看春天的大自然是什么样子。
生：（朗读第二自然段）
师：微风吹拂，细雨如丝，柳、草、花都赶集似的聚拢来，一切都像在欢迎燕子的到来。这时，燕子们飞起来了。请同学们默读第三自然段，圈出写燕子飞行姿态的词语。
生：（默读圈画）掠过、横掠、沾。
师：我们来看"斜着身子在天空中掠过"。"掠过"让你感觉到什么？
生：燕子飞得很快，一眨眼就飞过去了。
师：是的，速度极快。再看这一句——"唧的一声，已由这边的稻田上，飞到了那边的高柳下。"你从"唧的一声"听出了什么？
生：燕子一边飞一边叫，叫声很短促，说明它飞得又快又轻松。
师：还有几只燕子"横掠"湖面，"横掠"写出了贴着水面飞的样子。最妙的是这一句："小燕子的翼尖或剪尾，偶尔沾了一下水面。""沾"字说明了什么？
生：燕子只是轻轻地碰了一下水面，马上就飞走了，动作很轻巧。
师：一个"沾"字，把燕子动作的轻快、灵巧写得活灵活现。我们一起来读一读这一段，读出燕子的轻快。（配乐朗读）
（三）品停歇之美
师：飞倦了的燕子停在电线上休息。请看第四自然段，谁来读一读？
生：（朗读第四自然段）
师：作者把什么比作什么？
生：把电线比作五线谱，把停着的燕子比作音符。
师：这里写的是"几痕细线"，为什么不说"几根细线"呢？
生："痕"字说明电线很细很淡，远远看去像一道痕迹，若有若无。
师：体会得真好！远看，细细的电线几乎看不真切，用"痕"字最合适。停着的燕子成了五线谱上的音符，还谱出了一支春天的赞歌，多么富有诗意！第三、四自然段，一个写飞行，一个写停歇，一动一静，合在一起就是"动静结合"。（板书：动态 静态 动静结合）
师：让我们完整地朗读课文，再一次感受燕子带来的春天的美好。

学生活动：多种方式朗读，圈画关键词，换词比较，想象画面，体会用词之妙。

设计意图：抓住关键词句，通过换词比较、想象画面、配乐朗读等方法层层深入，体会语言之美与动静结合的写法。

**环节四 拓展迁移，学以致用（约 6 分钟）**

教师活动：
师：作者抓住特点、按顺序地描写燕子的外形，让我们读来如见其形。我们也来学一学这种方法。课前大家都观察过自己喜欢的小动物，谁来试着说一说？
生：（口头介绍自己观察的小动物）
师：老师给大家一个支架：先写整体的颜色，再从头、身体、尾巴等部分写，抓住每个部分最突出的特点。（出示任务单）我们以小鸭子为例试一试："一身（ ）的绒毛，一对（ ）的翅膀，加上（ ）的嘴巴，凑成了（ ）的小鸭子。"
生：（口头填空）
师：说得真好！请同学们拿出任务单，仿照第一自然段的写法，写一种小动物的外形。
生：（独立仿写）
师：（巡视指导，指名交流）谁来读一读自己写的？
生：（朗读自己的小练笔）
师：这位同学抓住了颜色和形状，还用了比喻，真棒！我们互相评一评。

设计意图：读写结合，引导学生把课文中习得的表达方法迁移到自己的表达中，实现由读到写的转化。

**环节五 课堂小结，布置作业（约 4 分钟）**

教师活动：
师：这节课，我们跟随郑振铎先生的文字，欣赏了燕子的外形之美、飞行之美、停歇之美，也学习了按顺序、抓特点的描写方法。你最大的收获是什么？
生：（自由交流）
师：大家都有收获。课后请完成两项作业：第一，有感情地朗读课文，背诵第一至三自然段；第二，把课上写的小动物外形小练笔补充完整，配上插图，下节课我们开一个"动物朋友博览会"。

设计意图：回顾梳理课堂收获，以朗读背诵和读写结合的作业把学习延伸到课外。

**板书设计**

燕子（郑振铎）
外形：羽毛（乌黑光亮） 翅膀（俊俏轻快） 尾巴（剪刀似的）——活泼机灵
飞行：掠过 横掠 沾（动态）
停歇：几痕细线 五线谱上的音符（静态）
写法：按顺序、抓特点、动静结合

**教学反思要点**
1. 情境导入要简洁高效，把时间留给朗读和品悟。
2. "凑、痕、沾、掠"的换词比较是品味语言的关键，要引导学生在比较中自主发现。
3. 朗读指导要有层次，配乐朗读能帮助学生入情入境。
4. 仿写要有支架，先分析写法，再师生共写，最后独立仿写，避免学生无从下笔。
5. 动静结合的体会要落到具体语句上，不贴标签、不空洞说教。`,talk:`各位评委老师，大家好！今天我说课的内容是统编版小学语文三年级下册第一单元的《燕子》。下面我从说教材、说学情、说教学目标等八个方面进行说课。

**一、说教材**
《燕子》是我国著名作家郑振铎先生写的一篇散文。课文语言清新优美，笔触细腻传神，通过对燕子外形、飞行、停歇三个画面的描写，字里行间流露出作者对燕子的喜爱和对春天的赞美。全文共四个自然段，脉络非常清晰：第一自然段写燕子的外形，第二自然段写春天的景象作背景，第三自然段写燕子的飞行，第四自然段写燕子的停歇。课文中运用了动静结合的写法，燕子在空中飞掠是动态，停歇在电线上像音符是静态，一动一静，画面非常丰富。这篇课文在本单元承担着学习"按顺序、抓特点描写事物"这一表达方法的重要任务，也为学生今后的习作打下了基础。

**二、说学情**
三年级的学生已经具备了一定的识字能力和朗读基础，能够借助拼音读通课文，也有了初步的边读边想的意识。但是，他们对语言文字的品味还停留在表面，很难发现"凑、痕、沾、掠"这些词语的传神之处，对"动静结合"这种表达方法也比较陌生。同时，三年级学生正处于从写话向习作过渡的关键期，观察和表达的能力都有待培养。所以，教学中我要特别重视朗读感悟，引导学生在读中品味、在比较中体会，并搭建支架帮助他们迁移表达。

**三、说教学目标**
基于对教材和学情的分析，结合语文课程标准的要求，我确定了三个教学目标。第一，认识"俊、俏、拂、增"等 14 个生字，会写"燕、聚、增"等 14 个生字，正确读写"燕子、聚拢、增添、掠过"等词语，这是语言建构与运用的基础。第二，正确、流利、有感情地朗读课文，背诵第一至三自然段，借助文字想象画面，体会燕子的活泼机灵和春天的美丽，指向审美鉴赏与创造。第三，学习作者按顺序、抓特点描写外形的表达方法，体会动静结合的写法，尝试仿写一种小动物的外形，指向思维发展与语言运用。

**四、说教学重难点**
本课的教学重点是：有感情地朗读课文，学习抓住特点、按顺序描写事物的方法。教学难点是：体会"凑、痕、沾、掠"等词语的准确传神，理解动静结合的写法，并能仿写小动物的外形。重点和难点既有朗读层面的要求，又有语言品味的深度，还有表达实践的落地。

**五、说教法学法**
为了突出重点、突破难点，我主要采用四种教学方法。一是朗读感悟法，以读为本，让学生在读中想象、读中感悟、读中积累；二是品词品句法，通过换词比较、联系生活等方式品味语言；三是读写结合法，把学到的表达方法及时迁移运用；四是观察演示法，借助图片、视频帮助学生直观感受。在学法上，我引导学生运用"读一读、圈一圈、比一比、写一写"的方法自主学习，让学生真正成为课堂的主人。

**六、说教学过程**
本课我设计了五个教学环节，共 40 分钟。第一个环节是情境导入，用时约 5 分钟。我播放春天的视频，让学生说说自己见过的燕子，从生活经验走向课文，然后揭示课题，介绍作者郑振铎，激发学生的阅读期待。
第二个环节是初读课文、整体感知，用时约 10 分钟。我放手让学生自由朗读，通过小老师领读、开火车读等方式检查字词，重点指导"燕、聚"的书写和"倦、偶"的读音，然后引导学生整体把握，说出课文写了外形的、飞行、停歇三方面内容，理清课文脉络。
第三个环节是精读品悟，用时约 15 分钟，这是本课的核心。我分三个层次推进：第一层品外形之美，抓住"凑成了"进行换词比较，体会作者的喜爱之情；第二层品飞行之美，抓住"掠过、横掠、沾"等词语，感受燕子飞行的轻快灵巧，体会动态描写；第三层品停歇之美，抓住"几痕细线"和五线谱、音符的比喻，体会静态描写的诗意。三个层次层层深入，动静结合的写法自然浮现。
第四个环节是拓展迁移、学以致用，用时约 6 分钟。我出示仿写支架，先以小鸭子为例口头练习，再让学生独立仿写小动物的外形，然后交流点评，把读和写真正打通。
第五个环节是课堂小结、布置作业，用时约 4 分钟。我引导学生交流收获，布置朗读背诵和完成小练笔的作业，把课堂延伸到课外。

**七、说板书设计**
我的板书采用图文结合的方式，中间是课题"燕子"和作者郑振铎，下面分三栏：外形一栏列出羽毛、翅膀、尾巴的特点，飞行一栏列出"掠过、横掠、沾"等动态词语，停歇一栏列出"几痕细线、五线谱上的音符"等静态词语，最后点出"按顺序、抓特点、动静结合"的写法。整个板书简洁明了，既是课文内容的浓缩，又是写法指导的提示。

**八、说教学反思与效果预测**
通过这样的设计，我预计课堂上学生能读得入情、品得到位、写得顺手。朗读方面，配乐朗读和想象画面相结合，学生能够读出感情；品味方面，换词比较的方法能让学生真正体会到用词的准确传神；表达方面，支架式的仿写能让多数学生写出有模有样的小练笔。当然，教学中也存在一些需要注意的地方，比如学生对"痕"字的体会可能需要教师更多的引导，个别学生在仿写时仍然可能顺序不清，这些都需要我在巡视中及时点拨。另外，公开课时间紧，朗读和品悟的节奏要把控好，不能因为追求环节的完整而压缩了学生思考和朗读的时间。总的来说，这是一节以读为本、读写结合、语言与审美并重的课，我相信它能让学生在美的文字中感受到语言的魅力。我的说课到此结束，谢谢大家！`},"小学|三年级|语文|古诗三首：绝句/惠崇春江晚景/三衢道中":{plan:`**教学基本信息**
- 课题：《古诗三首》（《绝句》《惠崇春江晚景》《三衢道中》）
- 教材版本：统编版小学语文三年级下册
- 年级：小学三年级
- 课型：古诗教学课
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学三年级学生

**教学目标**
1. 认识"鸳、鸯、惠、崇、豚、衢"等生字，会写"融、燕、鸳、鸯"等生字，读准"蒌蒿、三衢"等词语的读音，落实语言建构与运用。
2. 正确、流利、有感情地朗读三首古诗，背诵三首古诗，默写《绝句》，落实文化传承与理解。
3. 借助注释和插图理解诗句意思，抓住景物想象画面，初步比较三首写景诗的异同，感受春天的美好与生机，体会动静结合的写法，指向思维发展与审美鉴赏。

**教学重难点**
- 教学重点：读熟背熟三首古诗，理解诗句意思，想象诗中描绘的春天景象。
- 教学难点：体会"泥融飞燕子，沙暖睡鸳鸯"等诗句中动静结合的妙处；分清三位诗人与朝代的对应关系。

**教学准备**
- 教师准备：多媒体课件（春景图片、三首诗配图）、三位诗人的头像卡与名片、生字卡片、景物卡片。
- 学生准备：预习三首古诗，借助拼音读准字音，圈出不理解的词语。

**教学过程**

**环节一 情境导入（约 5 分钟）**

教师活动：
师：（出示春天美景图片：柳绿花红、溪水潺潺、燕子归来）同学们，春天是一幅画，也是一首诗。古往今来，无数诗人用最美的诗句赞美春天。今天，我们就一起走进三首写春天的古诗，去领略诗人眼中的春天。（板书课题：古诗三首）
师：这堂课我们要学习哪三首古诗？谁来读一读课题？
生：《绝句》《惠崇春江晚景》《三衢道中》。
师：《绝句》是唐代大诗人杜甫写的；《惠崇春江晚景》是北宋诗人苏轼写的；《三衢道中》是南宋诗人曾几写的。三位诗人，三个时代，都写下了春天的诗句。让我们一起走进诗的世界。

学生活动：欣赏春景图片，齐读课题，认识三首诗题。

设计意图：以春景图营造诗意的氛围，激发学生学习古诗的兴趣，自然引出课题和诗人。

**环节二 初读古诗，读准读顺（约 10 分钟）**

教师活动：
师：请同学们自由朗读三首古诗，借助拼音把字音读准，把诗句读通顺，难读的地方多读几遍。
生：（自由朗读三首古诗）
师：谁来读一读第一首《绝句》？
生：（朗读《绝句》）
师：读得正确、流利。我们认识一下这位诗人。（出示诗人名片：杜甫，唐代，被尊为"诗圣"，他的诗被称为"诗史"）谁来读第二首《惠崇春江晚景》？
生：（朗读）
师：读得很好。大家注意，题目中的"惠崇"是当时一位画家的名字，苏轼是给惠崇的画题写的这首诗。谁来读第三首《三衢道中》？
生：（朗读）
师：这首诗的作者是南宋诗人曾几，字吉甫，号茶山居士。大家注意"衢"字读 qú，"三衢"是山名，在今浙江衢州一带。
师：我们再来读一读这几个词：鸳鸯（yuān yāng）、蒌蒿（lóu hāo）、河豚（hé tún）。"鸳鸯"是一种水鸟，常常成双成对；"蒌蒿"是一种长在河滩上的野草；"河豚"是一种鱼，味道鲜美，但内脏有毒。
生：（跟读、齐读）
师：请同学们把三首古诗连起来再读一读，注意读出节奏和停顿。
生：（齐读三首古诗）

学生活动：自由朗读，个别朗读，认识诗人，认读重点词语，齐读三首诗。

设计意图：通过多种形式朗读正音，扫清字词障碍，认识三位诗人，为理解诗意奠定基础。

**环节三 精读品悟，想象画面（约 15 分钟）**

教师活动：
（一）学习《绝句》
师：我们先来学习杜甫的《绝句》。请同学们借助注释，同桌合作说一说诗句的意思，我们一起来交流。
生：（同桌合作理解诗意）
师："迟日"是什么意思？谁来猜一猜？
生：是不是太阳出来得很迟？
师：你的猜测有道理，但在这首诗里不是这个意思。"迟日"指的是春天的太阳。春天白天渐渐变长，所以说"迟日"。"迟日江山丽"，春天的太阳照耀着，江山多么秀丽。第二句呢？
生：春风花草香，春风送来了花草的芳香。
师：这两句写的是眼前所见。后两句"泥融飞燕子，沙暖睡鸳鸯"又写了什么？
生：燕子衔着湿泥飞来飞去忙着筑巢，沙滩被晒暖了，鸳鸯静静地睡着了。
师：你从"飞"和"睡"两个字中发现了什么？
生：燕子是动的，鸳鸯是静的。
师：一飞一睡，一动一静，春天多么和谐美好！这一句"泥融飞燕子"，燕子衔着湿泥飞来飞去，是在干什么呀？
生：在忙着筑巢。
师：对呀，春天来了，燕子要衔泥筑巢，养育自己的小宝宝，所以忙忙碌碌地飞来飞去。一个"飞"字，写出了燕子的忙碌；一个"睡"字，写出了鸳鸯的安闲。一动一静，画面多和谐！我们闭上眼睛，边想象画面边读这首诗。
（二）学习《惠崇春江晚景》
师：苏轼这首题画诗写得特别有名。请看"竹外桃花三两枝，春江水暖鸭先知"，说说你看到了什么。
生：竹林外有两三枝桃花，鸭子在江水里游。
师：为什么说"春江水暖鸭先知"？鸭子怎么最先知道水变暖了？
生：因为鸭子整天在水里游，水暖不暖它最先感觉到。
师：这是诗人的合理想象，充满生活的情趣。后两句"蒌蒿满地芦芽短，正是河豚欲上时"，河滩上蒌蒿长满了，芦苇抽出短短的嫩芽，这时候正是河豚逆流而上的时节。诗人看到蒌蒿和芦芽，就联想到河豚要上来了，想象多丰富啊！
（三）学习《三衢道中》
师：《三衢道中》写的是初夏时节的景色。请同学们自读自悟，同桌互相说说诗句的意思，再想一想诗人游玩的心情。
生：（自读交流）"梅子黄时日日晴"写梅子黄了，天天是晴天；"小溪泛尽却山行"写乘船到小溪的尽头，再走山路。
师："却"在这里是"再、又"的意思。诗人走在山路上，"绿阴不减来时路，添得黄鹂四五声"，你仿佛听到了什么？
生：黄鹂清脆的叫声。
师：绿树成荫，还能听到黄鹂的叫声，诗人的心情怎样？
生：很愉快、很高兴。
师：现在我们把三首诗放在一起，比一比它们的景物。先说说《绝句》里写了哪些景物？
生：迟日、春风、花草、燕子、鸳鸯。
师：《惠崇春江晚景》呢？
生：桃花、江水、鸭子、蒌蒿、芦芽、河豚。
师：《三衢道中》呢？
生：梅子、小溪、绿阴、黄鹂。
师：你们发现这些景物有什么共同点？
生：都是春天大自然里的景物，有的会动，有的会发出声音。
师：是的，三首诗都是写景诗，都抓住了春天的景物来写，有动有静，有声有色，这正是它们共同的美妙之处。让我们把三首诗连起来，美美地读一遍。

学生活动：同桌合作理解诗意，想象画面，动静对比，比较阅读，反复诵读。

设计意图：抓住关键词句，借助注释理解诗意，通过想象画面、动静对比、比较阅读等方法，体会写景诗的妙处。

**环节四 拓展迁移，背诵积累（约 6 分钟）**

教师活动：
师：现在我们来玩一个"景物卡片"的游戏。老师出示景物的图片，你们说出对应的诗句。（依次出示：桃花、鸭子、鸳鸯、黄鹂、芦芽的图片）
生：（看图说诗句）
师：我们再玩"诗人名片"抢答。老师说朝代，你们说诗人；老师说诗人，你们说朝代。
生：（抢答练习）
师：看来大家都记住了。老师再增加一个小挑战——听诗句，猜诗题。老师说"竹外桃花三两枝"，这是哪首诗里的？
生：《惠崇春江晚景》。
师："绿阴不减来时路"呢？
生：《三衢道中》。
师：三首诗分得清清楚楚。请同学们自由背诵三首古诗，可以一边想象画面一边背。
生：（自由背诵）
师：谁来背一背？
生：（背诵展示）

设计意图：通过游戏巩固诗人、朝代与诗句的对应，降低背诵难度，在轻松的氛围中积累古诗。

**环节五 课堂小结，布置作业（约 4 分钟）**

教师活动：
师：这节课，我们学习了三首写春天的古诗，领略了杜甫笔下的春日、苏轼笔下的春江、曾几笔下的山行。你最喜欢哪一首？为什么？
生：（交流喜欢的原因）
师：课后作业：第一，背诵三首古诗，默写《绝句》；第二，选择一首诗，为它配一幅画，下节课我们开一个"诗配画"展览。

设计意图：总结提升，把古诗积累与美术活动相结合，激发兴趣，延伸课堂。

**板书设计**

古诗三首
绝句（唐·杜甫） 迟日 春风 燕飞 鸳睡 动 静
惠崇春江晚景（宋·苏轼） 桃花 江暖 鸭知 河豚 联想
三衢道中（宋·曾几） 晴 泛舟 绿阴 黄鹂 声 色
春日诗——有动有静 · 有声有色

**教学反思要点**
1. 古诗教学要以读为本，在读中理解、读中想象、读中背诵。
2. "迟日""却"等词的古今异义要讲清楚，避免学生望文生义。
3. 诗人与朝代的对应要靠游戏和名片反复巩固，防止混淆。
4. 三首诗的比较要紧扣"春天的景物"这一主线，不枝不蔓。
5. 背诵指导要借助画面和场景，避免机械记忆、背串诗句。`,talk:`各位评委老师，大家好！今天我说课的内容是统编版小学语文三年级下册第一单元的《古诗三首》，包括杜甫的《绝句》、苏轼的《惠崇春江晚景》和曾几的《三衢道中》。下面我从八个方面进行说课。

**一、说教材**
《古诗三首》是三年级下册第一单元的一篇课文，本单元的人文主题是可爱的生灵，语文要素之一是试着一边读一边想象画面。《绝句》是唐代诗人杜甫的作品，写的是初春时节江山秀丽、燕子筑巢、鸳鸯安睡的美好景象；《惠崇春江晚景》是北宋诗人苏轼为画家惠崇的画作题写的诗，写的是早春江边的桃花、江水、鸭子、蒌蒿、芦芽和河豚；《三衢道中》是南宋诗人曾几的作品，写的是初夏时节诗人乘船又走山路的所见所闻。这三首诗都是写景诗，都描绘了春天的美好和生机，语言凝练，画面鲜明，非常适合三年级学生诵读积累。三首诗放在一起，既有内容上的共性，又有写法上的个性，有利于开展比较阅读。

**二、说学情**
三年级的学生在一二年级已经背诵过不少古诗，具备一定的诵读基础和语感。但是，他们对古诗的理解主要停留在表面，容易望文生义，比如把"迟日"理解成"迟到的太阳"，把"泥融"逐字硬译。同时，三首诗都是写景的，学生背诵时容易互相串诗。此外，学生对诗人和朝代的对应关系往往记不牢，容易把杜甫说成宋代、把苏轼说成唐代。这些学情决定了我的教学必须重视字词的古今异义，重视画面的想象，重视反复的诵读和巧妙的巩固游戏。

**三、说教学目标**
基于教材和学情的分析，我确定了三个教学目标。第一，认识"鸳、鸯、惠、崇、豚、衢"等生字，会写"融、燕、鸳、鸯"等生字，读准"蒌蒿、三衢"等词语的读音。第二，正确、流利、有感情地朗读三首古诗，背诵三首古诗，默写《绝句》。第三，借助注释和插图理解诗句意思，抓住景物想象画面，初步比较三首写景诗的异同，感受春天的美好，初步体会动静结合的写法。

**四、说教学重难点**
本课的教学重点是读熟背熟三首古诗，理解诗句意思，想象诗中描绘的春天景象。教学难点有两个：一是体会"泥融飞燕子，沙暖睡鸳鸯"等诗句中动静结合的妙处；二是记住诗人与朝代的对应关系。

**五、说教法学法**
在教法上，我主要采用诵读法、想象画面法、比较阅读法和资料补充法。古诗教学，读是根本，我让学生在一遍遍的诵读中理解诗意、感受诗情。想象画面法是让学生把诗句变成一幅幅画，降低理解的难度。比较阅读法让学生发现三首诗的异同，培养思维。资料补充法用来认识三位诗人和相关常识。在学法上，我引导学生运用"读一读、猜一猜、说一说、背一背"的方法，同桌合作，主动学习。

**六、说教学过程**
本课我设计了五个教学环节，共 40 分钟。第一个环节是情境导入，用时约 5 分钟。我出示春天美景图片，由"春天是一幅画，也是一首诗"引入课题，简介三位诗人，激发兴趣。
第二个环节是初读古诗、读准读顺，用时约 10 分钟。我放手让学生自由朗读，指名朗读三首诗，重点正音"鸳鸯、蒌蒿、河豚、三衢"等词语，认识三位诗人的朝代和身份，然后让学生连起来齐读，做到读正确、读流利。
第三个环节是精读品悟、想象画面，用时约 15 分钟，这是本课的核心。我按三首诗的顺序推进。学习《绝句》时，重点解决"迟日"的意思，抓住"飞"和"睡"引导学生发现动静结合；学习《惠崇春江晚景》时，围绕"春江水暖鸭先知"体会诗人的合理想象，理解"河豚欲上"的联想；学习《三衢道中》时，让学生自读自悟，抓住"黄鹂四五声"体会以声衬静的妙处。最后引导学生比较三首诗的景物，发现它们都写春天、有动有静、有声有色。
第四个环节是拓展迁移、背诵积累，用时约 6 分钟。我设计"景物卡片"和"诗人名片"两个游戏，让学生看图说诗句、抢答诗人与朝代，然后在游戏中自由背诵、展示背诵。
第五个环节是课堂小结、布置作业，用时约 4 分钟。我让学生说说最喜欢哪一首诗、为什么，然后布置背诵默写和"诗配画"的作业，把课堂延伸到课外。

**七、说板书设计**
我的板书分三行呈现三首诗的诗题、诗人和主要景物，第一行《绝句》列出迟日、春风、燕飞、鸳睡，并标注动静；第二行《惠崇春江晚景》列出桃花、江暖、鸭知、河豚，标注联想；第三行《三衢道中》列出晴、泛舟、绿阴、黄鹂，标注声色。最下面一行点出"春日诗——有动有静、有声有色"。板书既是三首诗内容的浓缩，又是比较阅读的支架。

**八、说教学反思与效果预测**
通过这样的设计，我预计课堂上有三个比较理想的效果：一是通过图片和游戏，学生能在轻松的氛围中背熟三首诗，减少串诗现象；二是通过"飞""睡"的对比和"鸭先知"的想象，学生能初步感受到动静结合和合理联想的妙处；三是通过诗人名片抢答，诗人与朝代的对应关系会记得更牢。当然，教学中也要注意一些细节，比如《三衢道中》写的是初夏，和前面两首的早春有所不同，我在比较时要用"春天的大背景"来统整，避免学生困惑；另外，一年级背过的一些古诗可能在学生脑中干扰这首诗的背诵，我要及时提醒区别。总的来说，这节课以诵读为主线，以想象为抓手，以比较为拓展，让学生在诗的语言里感受春天，在积累中热爱经典。我的说课到此结束，谢谢大家！`},"小学|四年级|语文|课文：猫":{plan:`**教学基本信息**
- 课题：《猫》
- 教材版本：统编版小学语文四年级下册
- 年级：小学四年级
- 课型：精读课
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学四年级学生

**教学目标**
1. 认识"忧、虑、蛇、遭、殃"等生字，读准多音字"屏、折、闷"的读音，会写"忧、虑、贪、职、屏、蹭、稿、腔、闷、蛇、遭、殃、盆、勃"等生字，正确读写"无忧无虑、丰富多腔、变化多端、生气勃勃"等词语，落实语言建构与运用。
2. 正确、流利、有感情地朗读课文，理清"先写猫的性格古怪，再写满月的小猫更可爱"的总分结构，学习用具体事例把特点写具体的方法，发展思维与表达能力。
3. 抓住"屏息凝视""踩印几朵小梅花"等重点语句，体会"明贬实褒"的表达特色，感受作者字里行间对猫的喜爱之情，提升审美鉴赏与创造能力。

**教学重难点**
- 教学重点：理解猫"古怪"的性格特点，体会总分结构和用具体事例写特点的方法。
- 教学难点：体会"明贬实褒"的语言特色，感受老舍对猫的喜爱之情。

**教学准备**
- 教师准备：多媒体课件（猫的图片和视频）、重点语句卡片、结构图任务单、小动物观察记录单。
- 学生准备：课前观察自己喜爱的小动物，记录它的一两个有趣的表现；预习课文。

**教学过程**

**环节一 情境导入（约 5 分钟）**

教师活动：
师：（出示猫的图片或播放猫的视频）同学们，你们喜欢猫吗？家里养过猫吗？
生：（自由交流）
师：谁来说一说，你家的猫或者你见过的猫有什么特点？
生 1：我家的猫特别懒，成天睡觉。
生 2：我家的猫很爱干净，总爱舔自己的毛。
师：同学们观察得很细致。有一位大作家也养过猫，还专门为它写了一篇文章，他就是老舍先生。（板书课题：猫）
师：老舍，原名舒庆春，字舍予，北京人，是我国现代著名作家，代表作有《骆驼祥子》《茶馆》《四世同堂》，被授予"人民艺术家"的称号。他的语言幽默风趣，亲切得像拉家常，很有北京味。他笔下的猫有什么特别之处呢？让我们走进课文。

学生活动：观看猫的图片视频，交流生活中见过的猫，认识作者老舍。

设计意图：从学生的生活经验切入，激发兴趣，顺势介绍作者，为理解"京味"语言的亲切幽默作铺垫。

**环节二 初读课文，整体感知（约 10 分钟）**

教师活动：
师：请同学们自由朗读课文，注意读准字音、读通句子，想一想：课文写了猫的哪几方面的内容？
生：（自由朗读课文）
师：老师来检查字词。（出示词语卡片：无忧无虑、尽职、蹭、稿纸、丰富多腔、变化多端、枝折花落、生气勃勃）
师：这里有几个多音字要特别注意。"屏息凝视"的"屏"读 bǐng，是抑制、忍住的意思；"枝折花落"的"折"读 shé，是折断的意思；"解闷"的"闷"读 mèn。大家跟老师读一遍。
生：（跟读词语）
师：谁来说说，课文写了猫的哪几部分内容？
生：先写猫的性格古怪，再写满月的小猫更可爱。
师：课文是"总分"结构。第一大部分的总起句是哪一句？
生："猫的性格实在有些古怪。"
师：第二大部分的总起句呢？
生："满月的小猫们就更好玩了，腿脚还不稳，可是已经学会淘气。"
师：（相机板书：古怪 更可爱）让我们先来看大猫的"古怪"。

学生活动：自由朗读，认读词语和多音字，交流课文结构。

设计意图：正音识字，厘清总分结构，整体把握课文脉络，为精读品悟奠定基础。

**环节三 精读品悟，体会古怪（约 15 分钟）**

教师活动：
（一）发现三组矛盾
师：请同学们默读第一至五自然段，想一想：猫的性格"古怪"表现在哪些方面？用横线画出关键词。
生：（默读圈画）
师：我们来交流。猫的性格古怪，首先表现在哪里？
生：说它老实吧，它又贪玩；说它贪玩吧，它又尽职。
师：你找到了第一组矛盾：老实——贪玩——尽职。老实表现在哪里？
生：找个暖和的地方，成天睡大觉，无忧无虑，什么事也不过问。
师：贪玩呢？
生：决定出去玩玩，就会出走一天一夜，任凭谁怎么呼唤也不肯回来。
师："任凭谁怎么呼唤也不肯回来"，说明它贪玩极了。可是尽职起来呢？
生：听到老鼠的一点响动，屏息凝视，一连就是几个钟头，非把老鼠等出来不可！
师："屏息凝视"是什么意思？我们来做做这个动作。
生：（做屏息凝视的动作）
师："一连就是几个钟头""非把老鼠等出来不可"，你感受到了什么？
生：它特别有耐心，不达到目的不罢休。
师：还有两组矛盾呢？谁来接着说？
生：它温柔可亲，可是不高兴的时候一声不出。
生：它什么都怕，可是又十分勇猛，遇上蛇也敢斗一斗。
师：三组矛盾都找到了。每一组都是"说它……吧……可是……"的句式，优点和"缺点"互相矛盾，这就是"古怪"。可这些"古怪"的表现，你们觉得讨厌吗？
生：不讨厌，反而觉得很可爱。
（二）品味"小梅花"
师：猫温柔可亲时，有哪些表现？请同学们读一读第三自然段。
生：（朗读）"它要是高兴，能比谁都温柔可亲：用身子蹭你的腿，把脖子伸出来让你给它抓痒，或是在你写作的时候，跳上桌来，在稿纸上踩印几朵小梅花。"
师：猫在稿纸上踩出的其实是脚印，可作者说它是"小梅花"。你体会到了什么？
生：作者不觉得那是脏脚印，反而觉得好看，说明他非常喜欢猫。
师：这就是"明贬实褒"——字面上看，猫"踩脏"了稿纸，好像在说它的缺点，实际上字里行间全是喜爱。老舍写猫的叫声也特别有味道。谁来读一读写叫声的句子？
生：（朗读）"在不叫的时候，它还会咕噜咕噜地给自己解闷。"
师：他用"丰富多腔""长短不同""粗细各异""变化多端"来形容猫的叫声。你们平时听过猫叫吗？能想象出这几种叫声吗？
生：有时候是短促的喵喵叫，有时候是拖得长长的叫，有时候还在喉咙里咕噜咕噜地响。
师：一只猫的叫声被老舍写得这么丰富，你体会到了什么？
生：他平时一定仔细观察过猫，也非常喜欢它。
师：是啊，只有真正喜爱，才会听得这么细致。让我们带着这种喜爱，再读一读这一段。
（三）体会"更可爱"
师：满月的小猫们又淘气在哪里？请同学们读一读最后一个自然段。
生：（朗读）"它们在花盆里摔跤，抱着花枝打秋千，所过之处，枝折花落。"
师：面对"枝折花落"，老舍的态度是什么？
生："你见了，绝不会责打它们，它们是那么生气勃勃，天真可爱！"
师：满屋子乱跑、把花草弄折了，作者却"绝不会责打它们"，还说它们天真可爱。这就是"明贬实褒"，表面是责怪，实际是疼爱。我们对比着读一读这两句，读出这种疼爱。
生：（对比朗读）

学生活动：默读圈画，做动作理解词语，对比朗读，体会"明贬实褒"。

设计意图：通过圈画关键词、做动作、对比朗读等方法，体会猫性格的矛盾与可爱，理解"明贬实褒"的写法。

**环节四 拓展迁移，学以致用（约 6 分钟）**

教师活动：
师：老舍先生没有说一句空话，他用一件件具体的事例写出了猫的特点。我们也来试一试。请同学们拿出观察记录单，选择一种小动物，用"特点＋事例"的方式写一两句话。可以先填个支架：我家的（ ）特别（ ），有一次（ ）。
生：（填写任务单）
师：（巡视指导）谁来交流？
生：（朗读自己的小练笔）
师：你用了具体事例，写出了小动物的特点。大家互相评一评，看谁的例子选得好。

师：写的时候想一想，老舍先生正是因为天天观察，才写出猫的这么多趣事。你们也要做一个有心的观察者。
设计意图：读写结合，把"用具体事例写特点"的方法迁移运用，解决练笔空洞的问题。

**环节五 课堂小结，布置作业（约 4 分钟）**

教师活动：
师：这节课，我们认识了老舍笔下"古怪"又可爱的猫，学会了总分结构和用具体事例写特点的方法，也体会了"明贬实褒"的妙处。你最大的收获是什么？
生：（交流收获）
师：课后作业：第一，有感情地朗读课文，把喜欢的句子抄一抄；第二，用"特点＋事例"的方法，把你观察到的小动物写成一段话，下节课我们交流。

设计意图：回顾方法，布置读写结合的作业，把学习引向课外。

**板书设计**

猫（老舍）
总：猫的性格实在有些古怪
分：老实——贪玩——尽职
温柔可亲——一声不出
什么都怕——十分勇猛
总：满月的小猫们更可爱（淘气）
写法：总分结构 · 具体事例 · 明贬实褒

**教学反思要点**
1. 三组矛盾的梳理要让学生自主发现，不要教师包办代替。
2. "屏息凝视"的动作体验能帮助学生真切理解"尽职"。
3. "小梅花"和"枝折花落"的对比朗读是体会"明贬实褒"的关键，要读足读透。
4. 小练笔要给出支架，先"特点＋事例"再逐步放手，避免空洞。
5. 多音字要在语境中辨析，及时纠正"屏、折、闷"的错误读音。`,talk:`各位评委老师，大家好！今天我说课的内容是统编版小学语文四年级下册第四单元的《猫》，作者是老舍先生。下面我从八个方面进行说课。

**一、说教材**
《猫》是老舍先生的一篇状物散文，语言亲切幽默，充满了生活气息。课文共有两个部分：第一部分写猫的性格实在有些古怪，从三组矛盾入手——老实又贪玩，贪玩又尽职；温柔可亲又一声不出；什么都怕又十分勇猛。第二部分写满月的小猫们更可爱，腿脚还不稳，可是已经学会淘气，在花盆里摔跤、抱着花枝打秋千，所过之处枝折花落。课文结构是典型的总分结构，先用一句话总说特点，再从几个方面具体写，每个方面都有具体的事例。这篇课文在表达上有两个突出特点：一是用具体事例把特点写具体，二是运用"明贬实褒"的写法，字面上像在责怪，实际上字里行间全是喜爱。本单元的学习重点是体会作家如何表达对动物的感情，《猫》正是最好的范例。

**二、说学情**
四年级的学生已经具备了一定的阅读理解能力，能够初步把握文章的主要内容，也有了一定的朗读基础。但是，他们对文章结构的把握还不够自觉，很难自己发现课文总分结构和三组矛盾的安排；对"明贬实褒"这种含蓄的表达方式更是缺乏认识，往往只会贴标签说"作者喜欢猫"，却举不出具体的语句。另外，学生的写话能力参差不齐，练笔容易空洞，只会用"可爱、机灵"这样的形容词，缺少具体事例和动作描写。这些学情提醒我，教学要在结构和语言上多给支架。

**三、说教学目标**
基于对教材和学情的分析，我确定了三个教学目标。第一，认识"忧、虑、蛇、遭、殃"等生字，读准多音字"屏、折、闷"的读音，会写相关生字，正确读写"无忧无虑、丰富多腔、变化多端、生气勃勃"等词语。第二，正确、流利、有感情地朗读课文，理清总分结构，学习用具体事例把特点写具体的方法。第三，抓住"屏息凝视""踩印几朵小梅花"等重点语句，体会"明贬实褒"的表达特色，感受作者对猫的喜爱之情。

**四、说教学重难点**
本课的教学重点是理解猫"古怪"的性格特点，体会总分结构和用具体事例写特点的方法。教学难点是体会"明贬实褒"的语言特色，感受老舍对猫的喜爱之情。

**五、说教法学法**
在教法上，我主要采用朗读感悟法、抓关键词品读法、对比发现法和读写结合法。朗读感悟法贯穿始终，让学生在读中体会情感；抓关键词品读法聚焦"屏息凝视""小梅花"等语句，深入品味语言；对比发现法通过把"踩印脚印"和"踩印小梅花"、"枝折花落"和"绝不会责打"对比，让"明贬实褒"不言自明；读写结合法把学到的方法及时迁移到表达中。在学法上，我引导学生用"画一画、读一读、比一比、写一写"的方法自主探究。

**六、说教学过程**
本课我设计了五个教学环节，共 40 分钟。第一个环节是情境导入，用时约 5 分钟。我出示猫的图片和视频，让学生聊聊自己见过的猫，然后引出老舍先生和他的《猫》，简介老舍的代表作和"人民艺术家"称号，激发阅读兴趣。
第二个环节是初读课文、整体感知，用时约 10 分钟。我让学生自由朗读，检查字词和多音字，重点辨析"屏息凝视"的"屏"、"枝折花落"的"折"、"解闷"的"闷"。然后引导学生发现课文的总分结构，找到两个总起句，梳理"先写大猫古怪，再写小猫更可爱"的脉络。
第三个环节是精读品悟、体会古怪，用时约 15 分钟，这是本课的核心。我分三步推进：第一步，让学生默读圈画，自主发现猫"古怪"的三组矛盾，通过做"屏息凝视"的动作体会尽职；第二步，聚焦"踩印几朵小梅花"，把脚印与梅花对比，体会"明贬实褒"的妙处；第三步，朗读写小猫的部分，把"枝折花落"与"绝不会责打它们"对比着读，读出疼爱之情。这样，结构、语言、情感层层深入。
第四个环节是拓展迁移、学以致用，用时约 6 分钟。我出示"特点＋事例"的支架，让学生观察记录单上的小动物，写一两句话，然后交流点评，把读和写打通。
第五个环节是课堂小结、布置作业，用时约 4 分钟。我引导学生交流收获，布置朗读抄写和"特点＋事例"小练笔的作业。

**七、说板书设计**
我的板书分为三层：第一层是总起句"猫的性格实在有些古怪"；第二层是分述部分的三组矛盾，老实——贪玩——尽职、温柔可亲——一声不出、什么都怕——十分勇猛；第三层是"满月的小猫们更可爱"。下面标注写法：总分结构、具体事例、明贬实褒。整个板书直观呈现了课文的结构和写法，是学生把握全文的一把钥匙。

**八、说教学反思与效果预测**
通过这样的设计，我预计课堂上有三个比较理想的效果：一是通过圈画和做动作，学生对三组矛盾体会得更真切，能用自己的话说清"古怪"的含义；二是通过两处对比朗读，学生能真正感受到"明贬实褒"背后深深的爱，而不是贴标签；三是通过支架式练笔，多数学生能写出有具体事例的片段。当然，教学中也有一些需要注意的地方，比如学生对"古怪"一词的理解容易停留在字面，我需要引导他们发现矛盾背后的可爱；小练笔时间有限，个别学生可能来不及写完，我可以在巡视时及时关注，或者把交流点评放到下一节课。总之，这节课以读促悟、以悟带写，力求让学生既读懂猫，更读懂老舍笔尖的温度。我的说课到此结束，谢谢大家！`},"小学|五年级|语文|课文：草船借箭":{plan:`**教学基本信息**
- 课题：《草船借箭》
- 教材版本：统编版小学语文五年级下册
- 年级：小学五年级
- 课型：精读课
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学五年级学生

**教学目标**
1. 认识"瑜、忌"等生字，读准多音字"擂"的读音，会写"妒、忌、曹、督、鲁、延、幔、私、寨、擂、呐、援、丞"等生字，正确读写"妒忌、军令状、迟延、探听、私自、调度、水寨、呐喊、神机妙算"等词语，落实语言建构与运用。
2. 默读课文，能按"起因—经过—结果"的顺序梳理故事内容，借助情节图用自己的话简要讲述这个故事，发展思维与表达。
3. 抓住描写诸葛亮言行和大雾环境的语句，感受诸葛亮"知天文、晓地理、识人心"的神机妙算；通过对比体会周瑜、鲁肃、曹操的不同性格，激发阅读《三国演义》的兴趣，落实文化传承与理解。

**教学重难点**
- 教学重点：按"起因—经过—结果"梳理故事内容，感受诸葛亮的神机妙算。
- 教学难点：从人物言行和环境描写中体会人物特点，理解周瑜"长叹"背后的心理。

**教学准备**
- 教师准备：多媒体课件、《三国演义》相关背景资料、人物关系图、情节梳理表、人物名片。
- 学生准备：课前查阅资料，了解《三国演义》及诸葛亮、周瑜、曹操等人物；预习课文。

**教学过程**

**环节一 情境导入（约 5 分钟）**

教师活动：
师：（出示《三国演义》人物图谱或播放简短的影视片段）同学们，在我国四大古典名著中，有一部描写三国争雄的经典小说，它是哪一部？
生：《三国演义》。
师：这部小说里有许多精彩的故事，今天我们要学习的《草船借箭》就是其中之一。它根据元末明初作家罗贯中的《三国演义》第四十六回改编。故事发生在东汉末年，孙权、刘备联合对抗曹操。当时，诸葛亮是刘备的军师，周瑜是东吴的大都督。（板书课题：草船借箭）
师：读了课题，你最想知道什么？
生 1：草船怎么能借箭？
生 2：是谁用草船去借箭？向谁借？
师：带着这些问题，我们一起走进这个故事。

学生活动：交流三国知识，对课题质疑，带着问题走进课文。

设计意图：以名著背景和质疑激趣，激活学生的阅读期待，为理解人物关系作铺垫。

**环节二 初读课文，梳理情节（约 10 分钟）**

教师活动：
师：请同学们默读课文，读准字音，读通句子，想一想：故事是按什么顺序写的？
生：（默读课文）
师：我们来检查字词。（出示词语：妒忌、军令状、迟延、探听、私自、调度、水寨、呐喊、神机妙算）特别提醒："擂鼓"的"擂"读 léi，是敲击的意思，不要读成 lèi。
生：（齐读词语）
师：故事是按什么顺序写的？
生：按事情发展的顺序，先写起因，再写经过，最后写结果。
师：请同学们同桌合作，填写情节梳理表：事情的起因是什么？经过是什么？结果是什么？
生：（同桌合作填写）
师：谁来交流？先说起因。
生：周瑜妒忌诸葛亮的才干，故意让诸葛亮十天之内造十万支箭，想借机陷害他。诸葛亮立下军令状，说只要三天。
师：周瑜为什么能让诸葛亮立军令状？"军令状"是什么意思？
生：军令状就是接受军令后立下的保证书，完不成任务甘愿受罚。
师：诸葛亮敢立军令状，可见他胸有成竹。经过呢？
生：诸葛亮请鲁肃帮忙借船，利用大雾天擂鼓呐喊，曹操只放箭不敢出兵，船两边的草把子上插满了箭。
师：结果呢？
生：诸葛亮如期交箭，周瑜自叹不如。
师：（相机板书：起因——妒忌设局；经过——雾中借箭；结果——如期交箭）理清了起因、经过、结果，故事就清楚了。

学生活动：默读课文，认读词语，同桌合作填写情节梳理表并交流。

设计意图：初读扫清字词障碍，通过填情节表梳理故事脉络，整体把握主要内容。

**环节三 精读品悟，感受神机妙算（约 15 分钟）**

教师活动：
（一）品环境，悟"知天文"
师：诸葛亮答应三天造十万支箭，这可不是一件容易的事。他凭什么这么有把握？请同学们默读课文，找出写大雾的句子。
生："这时候大雾漫天，江上连面对面都看不清。"
师：第三天四更时分，果然大雾漫天。诸葛亮为什么能算得这么准？
生：因为他懂得天文，算准了第三天四更必有大雾。
师：这就是"知天文"。（板书：知天文）大雾是借箭成功的前提。请大家读一读这句话，读出大雾弥漫的感觉。
（二）品言行，悟"晓地理、识人心"
师：借箭过程中，诸葛亮做了哪些安排？请同学们画出写他言行安排的句子，读一读，想一想这样安排的妙处。
生：（圈画交流）他请鲁肃借二十条船，每条船上三十名军士，用青布幔子遮起来，再准备一千多个草把子排在船两边。
师：为什么要用草把子？
生：草把子能插住箭，箭都射在草把子上，船就不会伤着。
师：为什么请鲁肃帮忙，还叮嘱千万不能让周瑜知道？
生：因为鲁肃忠厚老实，靠得住；周瑜想害他，让他知道肯定不成。
师：诸葛亮算准了鲁肃忠厚可托付，也算准了周瑜会暗中阻挠，这就是"识人心"。（板书：识人心）
师：受箭的时候，诸葛亮又做了什么安排？
生：把二十条船用绳索连接起来，船头朝西、船尾朝东一字摆开，军士擂鼓呐喊。
师：为什么先一字摆开？为什么擂鼓呐喊？
生：一字摆开，船的两边都能受箭；擂鼓呐喊，让曹操以为有大军来攻，不敢出兵。
师：曹操生性多疑，听到鼓声呐喊声，怕中了埋伏，果然只下令让弓弩手放箭，不让士兵近前。诸葛亮又下令把船掉过来，船头朝东、船尾朝西，逼近水寨，让另一面继续受箭。他算准了曹操多疑，也算准了风向水流，这就是"晓地理"。（板书：晓地理）
师：天快亮时，草把子上插满了箭。诸葛亮吩咐军士齐声高喊"谢谢曹丞相的箭"，然后顺风顺水返回，曹操想追也来不及了。读到这儿，你想对诸葛亮说什么？
生：诸葛亮真是神机妙算！
师：是啊，同学们看，从借船、摆船到调转船头，诸葛亮的每一步安排都环环相扣，早就在他心里盘算好了。你觉得在借箭之前，他凭的是什么？
生：他先算准了第三天必有大雾，又算准了鲁肃会帮他保密，还算准了曹操只放箭不敢出兵。
师：这正是"神机妙算"——把天气、地理、人心都算得清清楚楚。让我们完整地读一读受箭的段落，感受诸葛亮的从容与自信。
（三）对比人物，悟性格
师：故事里有四个人物，性格各不相同。请同学们默读课文，用一两个词概括人物特点，并找到课文依据。
生：（交流）诸葛亮神机妙算，周瑜妒忌心强，鲁肃忠厚老实，曹操生性多疑。
师：故事的结尾，周瑜说了什么？
生：他长叹一声，说："诸葛亮神机妙算，我真比不上他！"
师：这一声"长叹"里，包含了周瑜怎样的心理？
生：他既佩服诸葛亮，又有些无奈和失落，只好承认自己确实比不上他。

学生活动：圈画批注，抓住环境和言行品读，对比人物，依据文本说话。

设计意图：抓住环境与言行，通过批注、提问、对比等方法，层层深入体会"神机妙算"的内涵和人物的不同性格。

**环节四 拓展迁移，讲述故事（约 6 分钟）**

教师活动：
师：现在请同学们借助情节图，把"草船借箭"这个故事讲给大家听。先自己练一练，讲清楚起因、经过、结果，可以加上自己的语言和动作。
生：（自由练习讲述）
师：谁来当"故事大王"？
生：（讲述故事）
师：讲得清楚完整！你抓住了"借船、等雾、受箭、谢箭"这几个关键环节。如果对诸葛亮这位人物感兴趣，课后可以阅读《三国演义》，还可以读读"三顾茅庐""空城计"等故事。

设计意图：通过讲述故事深化对课文的理解，激发阅读名著的兴趣。

**环节五 课堂小结，布置作业（约 4 分钟）**

教师活动：
师：这节课，我们按起因、经过、结果的顺序理清了《草船借箭》的故事，从环境和大雾、人物言行中感受了诸葛亮"知天文、晓地理、识人心"的神机妙算。你有哪些收获？
生：（交流收获）
师：课后作业：第一，把这个故事讲给家人听；第二，有兴趣的同学阅读《三国演义》中"三顾茅庐""空城计"等故事，了解一个自己感兴趣的人物，下节课交流。

设计意图：梳理收获，以讲述和拓展阅读把学习延伸到课外。

**板书设计**

草船借箭（《三国演义》）
起因：周瑜妒忌——立军令状（三天造十万支箭）
经过：借船 → 等雾 → 受箭 → 谢箭
结果：如期交箭 周瑜长叹
诸葛亮：知天文 晓地理 识人心——神机妙算
曹操：多疑 鲁肃：忠厚 周瑜：妒忌

**教学反思要点**
1. 情节梳理要借助情节图和表格双支架，避免学生说不清先后顺序。
2. "神机妙算"要让学生从文本中找依据，做到"引—析—结"，不贴标签。
3. 大雾环境、借船保密、掉转船头等关键处要讲透，防止情节遗漏。
4. 人物对比要紧扣言行，训练"依据文本说话"的习惯。
5. 讲故事要分层推进，先看图讲，再脱图讲，逐步提高。`,talk:`各位评委老师，大家好！今天我说课的内容是统编版小学语文五年级下册第二单元的《草船借箭》。下面我从八个方面进行说课。

**一、说教材**
《草船借箭》是根据元末明初罗贯中的长篇小说《三国演义》第四十六回的相关内容改编的一个故事。故事发生在东汉末年，孙权、刘备联合对抗曹操的时期，当时诸葛亮是刘备的军师，周瑜是东吴的大都督。课文按起因、经过、结果的顺序展开：起因是周瑜妒忌诸葛亮的才干，设局让诸葛亮十天之内造十万支箭，诸葛亮却立下军令状说只要三天；经过是诸葛亮请鲁肃帮忙借来二十条船，在第三天四更的大雾天里，擂鼓呐喊、一字摆开，让多疑的曹操只敢放箭不敢出兵，草把子上插满了箭；结果是诸葛亮如期交箭，周瑜自叹不如。课文最突出的特点是通过人物的语言、动作和环境描写塑造人物形象，尤其是诸葛亮的"神机妙算"，主要体现在知天文、晓地理、识人心三个方面。这篇课文在本单元承担着"初步学习阅读古典名著的方法、感受人物形象"的重要任务。

**二、说学情**
五年级的学生已经具备了一定的默读能力和概括能力，能够借助工具书和注释阅读课文。但是，他们对古典名著的阅读经验还比较欠缺，概括故事时容易遗漏关键情节，比如漏掉借船保密或掉转船头受箭的细节；评价人物时容易贴标签，只会说"聪明""坏"，却说不清课文依据；还容易受影视剧影响，把改编后的课文和原著混淆。这些学情决定了我的教学必须重视情节的梳理、文本依据的寻找和讲述故事的训练。

**三、说教学目标**
基于对教材和学情的分析，我确定了三个教学目标。第一，认识"瑜、忌"等生字，读准多音字"擂"，会写"妒、忌、曹、督"等生字，正确读写"妒忌、军令状、迟延、探听、私自、调度、水寨、呐喊、神机妙算"等词语。第二，默读课文，能按"起因—经过—结果"的顺序梳理故事内容，借助情节图简要讲述这个故事。第三，抓住描写诸葛亮言行和大雾环境的语句，感受诸葛亮"知天文、晓地理、识人心"的神机妙算，通过对比体会周瑜、鲁肃、曹操的不同性格，激发阅读《三国演义》的兴趣。

**四、说教学重难点**
本课的教学重点是按"起因—经过—结果"梳理故事内容，感受诸葛亮的神机妙算。教学难点是从人物言行和环境描写中体会人物特点，理解周瑜"长叹"背后的心理。

**五、说教法学法**
在教法上，我主要采用默读批注法、人物对比法、情节图梳理法和讲故事练习法。默读批注法让学生静下心来与文本对话，自主圈画；人物对比法通过比较四个人物的言行，让性格特点更加鲜明；情节图梳理法给学生提供清晰的支架；讲故事练习法把阅读理解转化为语言表达。在学法上，我引导学生运用"读、画、批、讲"的方法，学会依据文本说话，有理有据地评价人物。

**六、说教学过程**
本课我设计了五个教学环节，共 40 分钟。第一个环节是情境导入，用时约 5 分钟。我出示《三国演义》的相关资料，让学生说说对三国的了解，然后板书课题，让学生围绕课题质疑，带着问题走进故事。
第二个环节是初读课文、梳理情节，用时约 10 分钟。我让学生默读课文，检查字词和多音字，重点提醒"擂鼓"的"擂"读 léi。然后同桌合作填写"起因—经过—结果"的情节梳理表，交流故事的脉络，整体把握主要内容。
第三个环节是精读品悟、感受神机妙算，用时约 15 分钟，这是本课的核心。我分三步推进：第一步品环境，抓住"大雾漫天"体会诸葛亮知天文；第二步品言行，围绕借船、摆船、擂鼓呐喊、掉转船头等安排，层层追问，体会诸葛亮晓地理、识人心；第三步对比人物，让学生概括四个人物的特点并找到课文依据，最后聚焦周瑜的长叹，理解他既佩服又无奈的心理。每一步都坚持让学生引用原文、分析、归纳，训练"依据文本说话"的习惯。
第四个环节是拓展迁移、讲述故事，用时约 6 分钟。我让学生借助情节图自己练讲故事，再指名展示，讲清楚起因、经过、结果，并相机推荐阅读《三国演义》的其他故事。
第五个环节是课堂小结、布置作业，用时约 4 分钟。我引导学生交流收获，布置把故事讲给家人听和拓展阅读的作业。

**七、说板书设计**
我的板书分两部分：上面是故事的脉络，起因——妒忌设局，经过——借船、等雾、受箭、谢箭，结果——如期交箭、周瑜长叹；下面是人物形象，诸葛亮知天文、晓地理、识人心，曹操多疑、鲁肃忠厚、周瑜妒忌。板书既是故事情节的可视化，也是人物形象的浓缩，学生看着板书就能完整复述故事。

**八、说教学反思与效果预测**
通过这样的设计，我预计课堂上有三个比较理想的效果：一是通过情节图和表格的双支架，学生能比较完整地按顺序复述故事，减少情节遗漏；二是通过"引—析—结"的品读方法，学生能体会到诸葛亮的知天文、晓地理、识人心，而不是简单地喊"聪明"；三是通过人物对比，学生对周瑜长叹背后的心理会有更真切的体会。当然，教学中也有一些需要注意的地方，比如学生受影视剧影响可能提出课文里没有的情节，我要及时引导他们回到文本；讲述故事的时间比较紧，个别学生可能讲不完，我可以让同桌互相补充，把完整的讲述放到课后。总的来说，这节课以梳理为基、以品读为魂、以讲述为用，力求让学生在古典名著中感受人物的风采，爱上《三国演义》。我的说课到此结束，谢谢大家！`}},ns={"小学|五年级|语文|古诗三首：四时田园杂兴/稚子弄冰/村晚":{plan:`**教学基本信息**

- 课题：古诗三首（《四时田园杂兴（其三十一）》《稚子弄冰》《村晚》）
- 教材版本：统编版小学语文五年级下册第一单元第一课
- 年级：小学五年级
- 课型：古诗阅读课（公开课展示课）
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学五年级学生

**教学目标**

1. 认识"昼、耘、供、稚、钲、磬、陂、漪"等生字，会写"昼、耘、桑、晓"等生字；能正确、流利、有感情地朗读三首古诗，读出节奏与韵律，并背诵、默写三首古诗。
2. 借助注释与插图，运用"解词—连句—想象画面"三步法理解诗意，能用自己的话说出诗中儿童活动的画面，感受古诗的语言之美。
3. 通过对比阅读，发现三首诗都写田园、都写儿童童趣的特点，体会不同诗人笔下儿童形象的不同韵味，感受古代乡村生活之乐，激发对古典诗词的热爱。（核心素养落点：语言建构与运用、思维发展与提升、审美鉴赏与创造、文化传承与理解）

**教学重难点**

重点：正确、流利、有感情地朗读并背诵三首古诗；借助注释理解诗意，抓住关键词想象画面。
难点：体会诗中儿童的天真可爱；理解《四时田园杂兴（其三十一）》中"也傍桑阴学种瓜"一句的深层意蕴；发现三首诗在内容与写法上的相同点和不同点。

**教学准备**

教师准备：多媒体课件（田园风光视频、学种瓜与玩冰与骑牛吹笛插图、三首诗配乐朗读音频）、三位诗人资料卡、板书贴图、对比表格任务单。
学生准备：课前预习朗读三首诗，圈出不懂的字词并借助注释自解；回忆一段乡村生活或童年游戏经历，准备课中交流。

**教学过程**

**环节一 情境导入（约5分钟）**

教师活动：

1. 播放夏日乡村视频（蝉鸣、池塘、桑树、牛群），定格在田园风光图上，轻声引导："一千多年前的宋代乡村，就是这般模样。"
2. 谈话引出课题，板书课题，简介"这三首诗，都写到了乡村里的孩子"。

预设师生对话：

师："同学们，如果用几个词来形容夏天的乡村，你会想到什么？"
生一："我会想到蝉，一声接一声地叫，叫得整个村子都热闹起来。"
生二："我想到了金色的麦田，风一吹，麦浪一层层滚过去。"
师："说得真美。一千多年前，也有三位宋代诗人把目光投向乡村，他们不写麦田，却写了乡村里最鲜活的生命——孩子。今天，我们就走进这三首古诗，看看宋代乡村孩子们的一天是怎样度过的。"
（板书课题，学生齐读课题。）

师："题目里有三首诗的名字，谁能读正确？"
生（齐读）："《四时田园杂兴》《稚子弄冰》《村晚》。"
师："很好。'稚子'是幼小的孩子，'村晚'是乡村的傍晚。出发吧。"

学生活动：

1. 欣赏视频画面，自由发言表达感受。
2. 读准三首诗题，明确学习任务。

设计意图：以影音画面唤起学生对乡村生活的经验与想象，拉近与古诗的距离；用"乡村里的孩子"点明三首诗的共同主题，为全课定下"童趣"基调。

**环节二 初读感知（约10分钟）**

教师活动：

1. 出示三首诗全文，提出初读要求：读准字音，读通诗句。
2. 检查生字认读，重点正音并辨析"供"的多音多义。
3. 教师配乐范读，学生划出朗读节奏，再齐读。

预设师生对话：

师："请自由朗读三首诗，读准字音、读通诗句。"
（学生自由朗读两分钟。）
师："哪位同学来读第一首？注意'耘'字别丢了后鼻音。"
生（读）："昼出耘田夜绩麻，村庄儿女各当家。童孙未解供耕织，也傍桑阴学种瓜。"
师："读得正确响亮。注意'供'在'供耕织'中读第一声，是从事、参加的意思。谁来读第二首？"
生（读）："稚子金盆脱晓冰，彩丝穿取当银钲。敲成玉磬穿林响，忽作玻璃碎地声。"
师："'钲'和'磬'都是古代乐器，看字形——金字旁、石字底，都和金属、石头有关。古人真聪明，把冰块当乐器玩。"
师："第三首谁来读？注意'陂'读 bēi，指池塘。"
生（读）："草满池塘水满陂，山衔落日浸寒漪。牧童归去横牛背，短笛无腔信口吹。"
师："三首诗都是七言，节奏分明。听老师范读，请你们在停顿处画上斜线。"
（师范读，生划节奏线。）
师："现在，让我们一起把节奏读出来。"
生（齐读三首，读出停顿与韵味。）

学生活动：

1. 自由朗读，同桌互读互纠。
2. 指名朗读，正音并辨析"供"的多音多义。
3. 听范读，划分节奏线，按节奏齐读。

设计意图：读正确、流利、读出节奏是古诗教学的起点。本环节集中解决字音与节奏两大障碍，借助字形线索记住"钲""磬"等难字，为理解感悟铺路。

**环节三 精读品悟（约15分钟）**

本环节采用"劳动—游戏—放牧"的顺序，逐首品读，每首都走"解词—连句—想象画面"三步。

教师活动：

（第一首，劳动之趣——《四时田园杂兴（其三十一）》）

师："我们先看第一首。请借助注释圈出不理解的词，先和同桌说一说。"
生一："'耘田'是给田里除草，'绩麻'是把麻搓成线。"
生二："'各当家'就是各人有各人的活儿干。"
师："连起来说说整首诗的意思。"
生三："白天出去除草，夜里搓麻线，村子里的男男女女各干各的活儿。小孩子们虽然还不会耕田织布，也在桑树荫下学着大人的样子种瓜。"
师："你关注到了大人和孩子两个画面。想一想：大人们干活时，孩子们在做什么？"
生四："他们看着大人觉得好玩，就学着种瓜。"
师："一个'未解'，一个'学'，你从这对比里读出了什么？"
生五："他们明明不懂，却一本正经地学，一定学得很认真，也一定很笨拙，特别可爱。"
生六："说明他们也想劳动，想帮大人的忙。"
师："一个'学'字，把儿童的天真和对劳动的向往全写出来了。这就是劳动中的童趣。"

（第二首，游戏之趣——《稚子弄冰》）

师："第二首写清晨。'稚子金盆脱晓冰'——天刚亮，孩子就取出夜里冻住的冰。他要干什么？请大家闭眼听老师读——"
（教师配乐范读，学生闭眼想象。）
师："睁开眼睛，你仿佛看到了什么？又听到了什么？"
生一："我看到一个孩子捧着亮晶晶的冰块，小心翼翼地穿彩丝，五颜六色的，特别漂亮。"
生二："我听到冰块被敲出的声音，像玉磬一样清脆，叮叮当当，传出老远。"
师："最后一句笔锋一转——'忽作玻璃碎地声'。冰碎了！你猜孩子此刻是什么表情？"
生三："他肯定愣住了，没想到冰会碎。"
生四："他也许会心疼，可转念又高兴起来，明天还能再冻一块。"
师："不管是惊讶还是心疼，这都是孩子真实的游戏。快乐，就在这一敲一碎之间。"

（第三首，放牧之趣——《村晚》）

师："第三首《村晚》写乡村傍晚。谁来说说前两句的景色？"
生一："草长满了池塘边，池水也涨得满满的。"
生二："远山好像把落日含在嘴里，落日倒映在清凉的水波里轻轻晃动。"
师："一个'满'、一个'衔'，用得真妙。这时牧童登场了，他骑牛的姿势和我们不一样——"
生三："他是横着坐在牛背上的！"
师："对，'横牛背'，还拿着短笛'信口吹'。从'横'和'信口'里，你体会到牧童怎样的心情？"
生四："他很悠闲，想怎么坐就怎么坐，没人管他。"
生五："他不是吹给别人听的，就是想吹就吹，不成曲调也没关系。"
师："这就是放牧的乐趣——无拘无束，自在悠然。太阳落山了，他也不着急，就这么晃悠着回家去。"

学生活动：

1. 同桌互说诗意，全班交流，走"解词—连句—想象画面"三步。
2. 闭眼听读，想象画面，交流看到的、听到的。
3. 演一演：学种瓜的样子、敲冰的姿势、横坐牛背吹笛的神态。
4. 多种形式朗读，试背三首诗。

设计意图：三首诗逐首推进时采用一致的学习方法，降低难度、形成结构；抓住"学、敲、横"等关键词把文字还原成画面，"演一演"让童趣活进课堂，实现语言理解与审美体验的融合。

**环节四 拓展迁移（约6分钟）**

教师活动：

1. 发放对比表格任务单，同桌合作完成。
2. 出示诗人资料卡，补充"诚斋体"及《四时田园杂兴》六十首等背景。

预设师生对话：

师："三首诗都学完了。请同桌合作比一比：诗人、孩子做的事、体会到的童趣。"
（学生填写任务单后交流。）
师："把三首诗并排看，你发现了什么相同点？"
生一："都是写乡村孩子的生活。"
师："不同点呢？"
生二："第一首学种瓜，是劳动；第二首敲冰块，是游戏；第三首骑牛吹笛，是放牧。"
师："概括得真棒！这就是劳动之趣、游戏之趣、放牧之趣。诗人写这些，仅仅是记录孩子的生活吗？"
生三："还有对儿童的喜爱。"
生四："还有对田园生活的喜爱和向往。"
师："是啊。范成大写下六十首《四时田园杂兴》，记录农村四季；杨万里诗风活泼，人称'诚斋体'；雷震仅一首《村晚》便成千古名篇。诗人们用最朴素的诗句，收藏了最美好的童趣。让我们齐读三首诗。"
（生齐读。）

学生活动：

1. 同桌合作填写对比表，汇报交流。
2. 听诗人资料介绍，齐读三首诗，回味童趣。

设计意图：以表格搭建支架，引导学生在比较中发现三首诗的共性与个性，训练归纳概括的思维；适度补充背景，理解诗人的田园情怀。

**环节五 课堂小结与作业（约4分钟）**

教师活动：

1. 带领学生回顾三首诗的画面与童趣，深化主题。
2. 布置分层作业，提出背诵、默写要求。

预设师生对话：

师："这节课，我们跟着三位诗人走进宋代乡村。白天，孩子在桑树下学种瓜；清晨，他们敲冰穿林；傍晚，他们横坐牛背吹短笛。三个画面，你最喜欢哪一个？"
生一："我喜欢敲冰，冰的声音像玉磬一样好听，碎了也很好玩。"
生二："我喜欢学种瓜，他们不会却特别认真，就像我小时候学包饺子。"
师："千年过去，诗里的童趣依然新鲜。希望同学们也像诗中的孩子一样，永远热爱生活。今晚作业分两层：第一层，背诵三首古诗，任选一首默写；第二层，为最打动你的那首诗配一幅画，或用两三句话写写自己童年里一次有趣的游戏。"
生（齐）："好！"

学生活动：

1. 交流最喜欢的一首诗及理由，联系自己的生活经验。
2. 明确作业内容，选择完成。

设计意图：以"最喜欢的画面"作结，让学生带着情感走出课堂；分层作业兼顾背诵默写与"配画、写话"的个性延伸。

**板书设计**

（图示化板书）

                  古诗三首 · 田园童趣
   四时田园杂兴        稚子弄冰          村晚
   （范成大）         （杨万里）        （雷震）
     学种瓜            敲冰钲           横牛背
     劳动之趣          游戏之趣         放牧之趣
             （都写儿童 · 都见田园）

**教学反思要点**

1. 三首古诗 40 分钟内完成教学，容量较大，各环节时间需精确把控，防止前松后紧。
2. "演一演"环节学生热情高涨，教师要善于把表演的兴奋点拉回语言文字，让表演服务于品读。
3. 对比阅读时，"劳动、游戏、放牧"三趣的概括有难度，宜先扶后放，用表格搭台阶。
4. "供"的多音多义及"昼、桑"等易错字，需在课后默写订正中再次强化。
5. 对学有余力的学生，可推荐杨万里《宿新市徐公店》等同类诗作进行课外对比，让古诗学习由课内延伸到课外。

`,talk:`**一、说教材**

各位评委老师好！今天我说课的内容是统编版小学语文五年级下册第一单元第一课《古诗三首》。这一课收录了三首宋代诗作：范成大的《四时田园杂兴（其三十一）》、杨万里的《稚子弄冰》和雷震的《村晚》。这三首诗有一个共同点，那就是都写到了乡村儿童的生活。范成大笔下的孩子学着大人种瓜，杨万里笔下的孩子把冰块当乐器敲着玩，雷震笔下的牧童横坐在牛背上吹短笛。一个是劳动的乐趣，一个是游戏的乐趣，一个是放牧的乐趣。把它们放在同一个单元里，编者就是想让我们通过这些鲜活的儿童形象，去感受古典诗歌的语言美、画面美，去体会诗人们对田园生活和天真儿童的喜爱。所以，这一课不仅是一次古诗的积累，更是一次审美的熏陶、一次文化的传承。

**二、说学情**

五年级的学生已经学过不少古诗，像《夜书所见》《所见》这样的儿童诗，他们也接触过，可以说已经有了一定的古诗积累，能够借助注释读懂大致意思，也初步具备想象画面的能力。但是，这一课的难点在于三首古诗放在一起学，篇幅大、生字多，孩子们容易把诗人和诗作记混。另外，他们对宋代农村生活的了解很少，像"绩麻""耘田"这些农事，还有"银钲""玉磬"这些古代乐器，都是比较陌生的。想象画面的时候，孩子们往往只罗列景物，不会往人物的动作、神态、声音上想。这些都是我这节课要重点解决的问题。

**三、说教学目标**

基于对教材和学情的分析，我把教学目标定为三条：第一条是知识与能力目标，认识"昼、耘、供、稚、钲、磬、陂、漪"等生字，会写"昼、耘、桑、晓"等生字，能正确、流利、有感情地朗读并背诵、默写三首古诗；第二条是过程与方法目标，借助注释和插图，运用"解词、连句、想象画面"三步法理解诗意，能用自己的话说出诗中儿童活动的画面；第三条是情感态度价值观目标，通过对比阅读，发现三首诗都写田园、都写儿童的特点，体会诗中儿童的天真可爱，感受诗人们对田园生活的热爱，激发学习古典诗词的兴趣。这三条目标分别对应着语言的建构、思维的发展、审美的鉴赏和文化的传承，努力做到核心素养的落点清晰。

**四、说教学重难点**

本课的教学重点是正确流利地朗读并背诵三首古诗，借助注释理解诗意，抓住关键词想象画面。教学难点有两个：一是体会诗中儿童的天真可爱，特别是理解《四时田园杂兴》里"也傍桑阴学种瓜"这句话的深层意蕴——孩子明明不会，却偏要学着做，这个"学"字背后的天真劲儿，需要引导孩子慢慢品出来；二是通过对比，发现三首诗的相同点和不同点，把握田园童趣这个主题。

**五、说教法学法**

在教法上，我主要采用诵读感悟法、想象画面法和对比阅读法。古诗词的教学离不开一个"读"字，我设计了自由读、指名读、范读、齐读等多种形式，让孩子们在读中正音、读中划节奏、读中悟情。同时，我借助"解词、连句、想象画面"三步法，教给学生一个可操作的学习支架。在学法上，我引导孩子们同桌合作、圈画批注、填对比表格，把学习的主动权交给他们，让他们在自主探究中发现、在交流碰撞中提升。

**六、说教学过程**

我的教学过程分五个环节，总时长四十分钟。

第一环节是情境导入，大约五分钟。我播放一段夏日乡村的视频，让孩子们说说想到了什么，然后引出课题，告诉孩子们这三首诗都写了乡村里的孩子。这个环节的目的是唤醒孩子们对乡村生活的经验，拉近他们与古诗的距离，同时点明全课的主题"童趣"。

第二环节是初读感知，大约十分钟。先自由朗读，读准字音、读通句子；接着指名朗读，重点正音，特别是"供"这个多音字，我特意强调它在诗中读 gōng，是从事、参加的意思；然后我配乐范读，孩子们划出节奏线，再齐读。三首诗都是七言诗，节奏分明，这样读几遍，孩子们就能读得朗朗上口。

第三环节是精读品悟，大约十五分钟，这是全课的核心。我按照"劳动、游戏、放牧"的顺序，一首一首地学。每一首都走三步：第一步解词，借助注释把不懂的字词弄清楚；第二步连句，把整首诗的意思说通顺；第三步想象画面，抓住关键词，把文字还原成画面。学《四时田园杂兴》时，我重点抓住"学"字，让孩子们体会孩子不会种瓜却偏要学着种瓜的天真劲儿；学《稚子弄冰》时，我让孩子们闭上眼睛听老师读，想象听到的声音、看到的画面，再猜一猜冰块碎了孩子会是什么表情；学《村晚》时，我抓住"横"和"信口"两个词，体会牧童的悠闲自在。中间我还设计了一个"演一演"的环节，让孩子们演学种瓜、演敲冰、演骑牛吹笛，让童趣在课堂上真正活起来。

第四环节是拓展迁移，大约六分钟。孩子们同桌合作，用表格把三首诗放在一起比一比：诗人、孩子做的事、体会到的童趣。通过比较，孩子们会发现三首诗都写儿童、都写田园，但一个是劳动之趣，一个是游戏之趣，一个是放牧之趣。我适时补充三位诗人的资料，比如范成大写有六十首《四时田园杂兴》，杨万里的诗风活泼，人称"诚斋体"，帮助孩子理解诗人心中的田园情怀。

第五环节是课堂小结与作业，大约四分钟。我请孩子们说说最喜欢哪一首、为什么，把他们的生活经验和诗里的童趣连接起来。作业分两层：第一层是背诵三首古诗，任选一首默写；第二层是为最打动自己的那首诗配一幅画，或者写写自己童年里的一次游戏，体现分层教学、因材施教。

**七、说板书设计**

我的板书设计是这样的：最上面是课题"古诗三首·田园童趣"，下面是三行，分别写着《四时田园杂兴》和范成大、学种瓜、劳动之趣，《稚子弄冰》和杨万里、敲冰钲、游戏之趣，《村晚》和雷震、横牛背、放牧之趣，最下面一行用一句话收束：都写儿童、都见田园。这样一个表格式的板书，把诗人、诗作、儿童活动、主题情感一目了然地呈现出来，既方便孩子们记忆，又能帮助他们从整体上把握三首诗的异同。

**八、说教学反思与效果预测**

最后说说我的反思与效果预测。这一课的容量是比较大的，三首诗要在四十分钟里完成朗读、理解、感悟、背诵，对时间管理的要求很高，我会根据课堂生成的实际情况，灵活调控，防止前松后紧。我预测，孩子们对"演一演"环节会特别感兴趣，这既能活跃课堂气氛，也可能带来纪律上的小问题，所以我在设计时特意强调，要把表演的兴奋点及时拉回到语言文字的品读上来。对于"也傍桑阴学种瓜"的深层理解，我相信通过"未解"和"学"的对比追问，大多数孩子能体会到儿童的天真与对劳动的向往；对于三首诗的对比，通过表格支架，孩子们应该能自己发现规律。当然，如果课堂上有的孩子对字词掌握还不够牢固，我会在课后通过默写订正和分层作业来补足。总的来说，这节课我力求做到以读为本、以生为本，让孩子们在朗朗书声中，走近宋代乡村，走近那一群天真可爱的孩子，让古典诗词的种子在他们心里生根发芽。

`},"小学|六年级|语文|课文：少年闰土":{plan:`**教学基本信息**

- 课题：少年闰土
- 教材版本：统编版小学语文六年级上册第八单元第二十四课
- 年级：小学六年级
- 课型：精读课文（公开课展示课）
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学六年级学生

**教学目标**

1. 会写"郑、拜、租、厨、毡、羞、撒、缚、猹、伶、俐、窜"等生字，读准多音字"正、撒"，正确读写"家景、郑重、供品、装弶、竹匾、秕谷、鹁鸪、伶俐、潮汛、明晃晃、一望无际"等词语。
2. 有感情地朗读课文，背诵第一自然段；能结合外貌、语言、动作描写，说出闰土是一个怎样的孩子，学习用一连串动词刻画人物的方法。
3. 梳理"雪地捕鸟、海边拾贝、看瓜刺猹、潮汛看鱼"四件事，分清详略，体会这样安排的好处；通过"我"与闰土的对比，理解"四角的天空"的含义，体会"我"对闰土的羡慕与对广阔自由生活的向往。（核心素养落点：语言建构与运用、思维发展与提升、审美鉴赏与创造、文化传承与理解）

**教学重难点**

重点：感受闰土健康朴实、见多识广、勇敢能干的形象；梳理四件事，品读"雪地捕鸟""看瓜刺猹"中动作描写的传神。
难点：理解"只看见院子里高墙上的四角的天空"的深刻含义，走进"我"的内心世界。

**教学准备**

教师准备：多媒体课件（月下刺猹图、雪地捕鸟动态演示、鲁迅画像及《故乡》背景资料卡）、四件事梳理表、学习任务单。
学生准备：课前预习课文，读通读顺，圈画生字词并借助工具书自解；查找鲁迅的有关资料，初步了解这位作家。

**教学过程**

**环节一 情境导入（约5分钟）**

教师活动：

1. 出示鲁迅画像与资料卡，简介鲁迅（原名周树人，字豫才，浙江绍兴人，伟大的文学家、思想家、革命家）。
2. 出示第一自然段的文字，配乐轻声朗读，引出课题。

预设师生对话：

师："同学们，中国现代文学史上有一位非常了不起的作家——鲁迅。他曾经这样写道——"
（教师配乐朗读）"深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜……"
师："读到这几行字，你的眼前浮现出怎样的画面？"
生一："我仿佛看到月光下的海边，一大片碧绿的西瓜地。"
生二："我还看到一个少年，手里拿着钢叉，好像在刺什么东西。"
师："这个让鲁迅记了一辈子的少年，就是课文的主人公——闰土。为什么一个作家会对一个少年念念不忘？带着这个问题，我们一起走进《少年闰土》。"
（板书课题，生齐读课题。）

学生活动：

1. 看鲁迅画像，读资料卡，初步认识鲁迅。
2. 听教师朗读，想象画面，交流感受。

设计意图：以鲁迅名句和画像导入，营造人文氛围，渗透"鲁迅是伟大的文学家"这一常识；用悬念性问题激发阅读期待，使课堂一开始就充满探究欲。

**环节二 初读感知（约8分钟）**

教师活动：

1. 出示初读要求：自由朗读课文，读准字音，读通句子，难读的地方多读几遍。
2. 检查生字词认读，重点正音并辨析多音字。
3. 引导快速浏览，理清课文脉络。

预设师生对话：

师："请自由朗读课文，把字音读准、句子读通顺。"
（学生自由朗读约两分钟。）
师："课文里有些词不太好读，谁先来试试？"
生一："bǐ 谷、竹 biǎn、bó gū。"
师："字音都读准了。再看两个多音字：'正'在'正月'里读什么？"
生二："读 zhēng，正月就是农历一月。"
师："对。闰土是闰月出生的，五行缺土，所以取名闰土。那'撒'在'撒下秕谷'里怎么读？"
生三："读 sǎ，是播撒的意思。"
师："很好。现在请快速浏览课文，想一想：课文先写了什么，接着写了什么？"
生四："先写了'我'和闰土初次见面，接着写闰土讲新鲜事，最后写'我'的感叹。"
师："你一口气理清了课文的顺序，真会读书。"

学生活动：

1. 自由朗读课文，同桌互读互纠。
2. 认读生字词，辨析"正、撒"两个多音字。
3. 快速浏览，用一句话概括课文主要内容。

设计意图：扎实落实字词教学，集中解决易错多音字和难读词语，为深入阅读扫清障碍；通过整体感知，帮助学生把握课文内容与结构。

**环节三 精读品悟（约17分钟）**

本环节分两层推进：第一层品读第一自然段的"月下刺猹"画面，落实背诵；第二层品读四件新鲜事，走进闰土形象。

教师活动：

（第一层：月下刺猹图）

师："让我们先回到鲁迅记忆中最清晰的那幅画。谁来读第一自然段？"
生（读）："深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的碧绿的西瓜。其间有一个十一二岁的少年，项带银圈，手捏一柄钢叉，向一匹猹尽力的刺去。那猹却将身一扭，反从他的胯下逃走了。"
师："读出了画面的味道。请拿出笔，把这一段里的颜色词圈出来。"
生一："深蓝、金黄、碧绿。"
师："三个颜色词，天上地下就成了一幅明丽的油画。除了颜色，这段还写了什么？"
生二："写了少年手捏钢叉向猹刺去，猹一扭身，从他胯下逃走了。"
师："这里有个特别传神的动词——'捏'。换成'拿'或'举'，味道有什么不同？"
生三："'捏'是五指用力握住，说明少年特别用力，也特别紧张、专注。"
生四："'拿'太随意了，'捏'更能显出少年刺猹时那股认真劲儿。"
师："说得多好！再看那猹，一个'扭'、一个'逃'，写出了机灵。天空、圆月、瓜地是静，少年刺猹是动，一静一动之间，勇敢敏捷的少年就站在我们面前了。这就是鲁迅文字的魅力。请按'天、月、地、人、猹'的顺序，先记颜色词，再记动作，看谁背得最快。"
（学生练习背诵，指名试背，齐背。）

（第二层：四件新鲜事）

师："初次见面，闰土给'我'的印象是紫色圆脸、小毡帽、银项圈。可真正让'我'佩服的，是他讲的那四件新鲜事。哪四件？"
生一："雪地捕鸟、海边拾贝、看瓜刺猹、潮汛看鱼。"
师："这四件事里，你最想听哪一件？"
生二："我最想听雪地捕鸟。闰土说：'我们沙地上，下了雪，我扫出一块空地来，用短棒支起一个大竹匾，撒下秕谷，看鸟雀来吃时，我远远地将缚在棒上的绳子只一拉，那鸟雀就罩在竹匾下了。'"
师："注意到这一连串动作了吗？扫、支、撒、看、拉、罩，一口气说下来。从这些动词里，你看到怎样的闰土？"
生三："我看到一个经验丰富的闰土，肯定试过很多次。"
生四："我还看到他很聪明，用竹匾、秕谷、绳子设了一个巧妙的机关。"
师："那'看瓜刺猹'呢？这件事写得最详细，有画面还有对话，作者为什么这样安排？"
生五："因为这件事最惊险，最能表现闰土的勇敢。"
生六："也因为给'我'留下的印象最深，所以课文开头先写这个画面。"
师："你们发现了写作的秘密——最难忘的内容详写，其余略写，这叫详略得当。透过这四件事，我们看到的不只一个会玩的孩子，更是一个见多识广、勇敢能干的少年。让我们分角色读读'我'和闰土的对话，体会闰土讲新鲜事时的神气。"

学生活动：

1. 圈画颜色词，品析"捏、扭、逃"等动词，按"天、月、地、人、猹"的顺序练习背诵第一自然段。
2. 梳理四件事，在表格中标注详略。
3. 分角色朗读"我"与闰土的对话，体会闰土讲述时的神气。

设计意图：第一自然段以"色彩"和"动作"两条线品读并指导背诵，把背诵变成发现与欣赏的过程；四件事以"你最想听哪一件"切入，尊重阅读兴趣，再通过追问把注意力引向动词与详略，在语言中感受人物形象。

**环节四 拓展迁移（约6分钟）**

教师活动：

1. 聚焦关键句"只看见院子里高墙上的四角的天空"，层层追问。
2. 出示《故乡》背景资料卡，帮助学生理解课文出处。

预设师生对话：

师："闰土讲的那些新鲜事，'我'知道吗？"
生一："不知道，'我'的朋友们也都不知道。"
师："课文用一句话写出'我'的落差——'他们都和我一样，只看见院子里高墙上的四角的天空。'什么叫'四角的天空'？"
生二："就是从院子里抬头，只能看见被高墙围成四方形的一小块天空。"
师："仅仅是一块天空吗？还可能指什么？"
生三："指'我'的生活很狭窄，整天被关在高墙大院里。"
生四："指'我'见识少，像井底之蛙，看不到外面精彩的世界。"
师："说到了要害。一边是见多识广的闰土，一边是关在高墙里的'我'。你感到'我'心里有什么？"
生五："有羡慕，羡慕闰土知道那么多新鲜事。"
生六："还有对自由的向往，甚至有点无奈和不满。"
师："所以鲁迅写'四角的天空'，表面写头顶那块天，实际写'我'的内心——对狭小世界的叹息，对广阔天地的渴望。环境描写里藏着人物的心情。三十年后，鲁迅回故乡再见到闰土，那个勇敢的少年已变成一个麻木的中年人。想知道他经历了什么吗？"
生（齐）："想！"
师："课后去读鲁迅的小说《故乡》，那里有答案。"

学生活动：

1. 齐读关键句，联系上下文和生活经验谈理解。
2. 听《故乡》背景介绍，知道课文节选自鲁迅的小说集《呐喊》中的《故乡》。

设计意图：通过"看见什么—生活怎样—心情如何"的层层追问，帮助学生由词及句、由句及情，突破难点，避免贴标签式理解；背景资料适时补充，为整本书阅读埋下伏笔。

**环节五 课堂小结与作业（约4分钟）**

教师活动：

1. 总结本课所学，回顾闰土形象。
2. 布置分层作业。

预设师生对话：

师："这节课，我们认识了两个少年：一个在月下刺猹，一个在高墙内仰望四角的天空。闰土的事，为什么鲁迅记了一辈子？"
生一："因为闰土让'我'看到了一个完全不同的世界。"
生二："因为'我'羡慕闰土的自由和见多识广。"
师："是啊，闰土就像一扇窗，为'我'打开另一个世界。作业分两层：第一层，背诵第一自然段，把画面讲给家人听；第二层，选一件'新鲜事'，用连续的动作写一段话，注意动词的准确。"
生（齐）："好的。"

学生活动：

1. 交流学习收获，体会"我"对闰土的情感。
2. 明确作业内容，选择完成。

设计意图：以"闰土是一扇窗"收束全课，升华"我"对闰土的情谊与向往；作业设计指向背诵落实与读写结合，用"连续动词写话"迁移本课学到的表达方法。

**板书设计**

（图示化板书）

              少年闰土（鲁迅 · 选自《故乡》）
                 健康朴实 · 见多识广 · 勇敢能干
     初见：紫圆脸 · 小毡帽 · 银项圈
     新鲜事：雪地捕鸟（详）  海边拾贝（略）
             看瓜刺猹（详）  潮汛看鱼（略）
     四角的天空（"我"）  ←→  无穷的稀奇事（闰土）
                 羡慕 · 向往 · 渴望自由

**教学反思要点**

1. 第一自然段背诵是重点，"色彩加动作"双线记忆法降低了难度，但背诵检查需延伸到课后，确保人人过关。
2. "四角的天空"是本课难点，追问要层层递进，尊重学生的个性化理解，避免贴标签式的回答。
3. 四件事的详略对比宜放手让学生自主发现，教师点到为止，不必直接告知。
4. 鲁迅背景资料的补充要适时适度，防止语文课变成资料课，重心始终放在语言品味上。
5. "连续动词写一段话"的练笔如时间允许，应尽量当堂试写并反馈，让读写结合真正落地。

`,talk:`**一、说教材**

各位评委老师好！今天我说课的内容是统编版小学语文六年级上册第八单元第二十四课《少年闰土》。这篇课文节选自鲁迅的小说《故乡》，收入鲁迅的小说集《呐喊》。课文写的是一次相遇：三十多岁的鲁迅回到故乡，看到的是阔别已久的少年朋友闰土；课文写的，正是"我"脑海中那个少年闰土的模样。深蓝的天空、金黄的圆月、碧绿的西瓜地、手捏钢叉的少年，还有那猹，一个画面把闰土的勇敢印在了读者心里。接着，课文通过雪地捕鸟、海边拾贝、看瓜刺猹、潮汛看鱼四件事，写出了闰土的见多识广，也写出了"我"对"四角的天空"之外那个广阔世界的向往。这篇课文在单元里承担着两个重要任务：一是让我们通过鲁迅的文字认识这位伟大的文学家，二是学习作者抓住特点刻画人物、通过连续动词描写动作的方法。可以说，这是一篇既有文学价值又有语用价值的经典课文。

**二、说学情**

六年级的学生已经具备了一定的阅读理解能力，能够抓住关键词句体会人物特点，也有一定的朗读和批注基础。但是，这篇课文对他们来说有三个难处：第一，鲁迅的语言是白话文初期的样子，像"装弶""秕谷""鹁鸪"这些词，还有"什么都有"的句式的味道，和孩子们平时接触的现代文不一样，需要反复朗读才能读出味道；第二，"四角的天空"这句话含义深刻，孩子们往往只停留在字面理解，说不清其中对狭小生活的不满和对自由的向往；第三，鲁迅的时代离孩子们很远，闰土所代表的那个世界，他们比较陌生。所以，课堂上我要借助画面、朗读和背景资料，帮孩子们搭一座通往鲁迅文字世界的桥。

**三、说教学目标**

我设计了三条教学目标：第一条，会写"郑、拜、租、厨、毡、羞、撒、缚、猹、伶、俐、窜"等生字，读准"正、撒"两个多音字，正确读写本课的新词；第二条，有感情地朗读课文，背诵第一自然段，能结合外貌、语言、动作描写说出闰土是个怎样的孩子，学习用一连串动词刻画人物的方法；第三条，梳理四件事，分清详写与略写，理解"四角的天空"的含义，体会"我"对闰土的羡慕和对自由生活的向往。这三条目标，前两条落在语言建构与审美鉴赏上，第三条落在思维发展与文化传承上，努力做到工具性与人文性的统一。

**四、说教学重难点**

本课的教学重点是感受闰土健康朴实、见多识广、勇敢能干的形象，梳理四件事，品读动作描写的传神。教学难点是理解"他们都和我一样，只看见院子里高墙上的四角的天空"这句话的深刻含义。这句话表面写景，实际写人、写心，是理解"我"对闰土的羡慕和对广阔生活向往的关键，也是孩子们最容易"贴标签"的地方。

**五、说教法学法**

在教法上，我主要采用朗读想象法、批注品读法、事件梳理法和资料辅助法。朗读想象法，让画面在孩子心中立起来；批注品读法，让孩子在文字间走几个来回；事件梳理法，用表格把四件事和详略清清楚楚地摆出来；资料辅助法，适度补充鲁迅和《故乡》的背景，帮助理解。在学法上，我引导孩子们自主圈画、同桌合作、分角色朗读，让他们在品读中发现语言的秘密，在交流中碰撞思维的火花。

**六、说教学过程**

我的教学过程分五个环节，共四十分钟。

第一环节，情境导入，大约五分钟。我出示鲁迅画像和资料卡，让学生初步认识这位伟大的文学家，然后配乐朗读第一自然段，让孩子们说说眼前浮现的画面，用一个悬念引出课题：这个少年是谁？为什么让鲁迅记了一辈子？这样导入，既渗透了文化常识，又点燃了阅读期待。

第二环节，初读感知，大约八分钟。学生自由朗读，读准字音、读通句子；我重点检查"秕谷""竹匾""鹁鸪"这些难词，辨析"正、撒"两个多音字，还顺便渗透了闰土名字的来历——闰月出生、五行缺土。接着，学生快速浏览，理清课文的顺序，整体感知内容。

第三环节，精读品悟，大约十七分钟，这是全课的核心。我分两层推进。第一层品读第一自然段的"月下刺猹"图：让学生圈出深蓝、金黄、碧绿三个颜色词，感受画面的明丽；再抓住"捏"这个动词，和"拿""举"作比较，体会少年刺猹时的专注与用力；再看猹的"扭"和"逃"，体会一静一动之间的张力。品读完，我教给孩子背诵的窍门——按"天、月、地、人、猹"的顺序，先记颜色、再记动作，当堂练习背诵。第二层品读四件新鲜事：我从"你最想听哪一件"问起，尊重孩子的阅读兴趣；在交流中，重点品读雪地捕鸟的一连串动词——扫、支、撒、看、拉、罩，体会闰土的经验丰富和聪明能干；再追问作者为什么把看瓜刺猹写详、其余写略，引导孩子自己发现详略得当的写作奥秘。最后分角色朗读"我"和闰土的对话，让闰土讲新鲜事时的神气活现出来。

第四环节，拓展迁移，大约六分钟。我把孩子引到"四角的天空"上，用三个问题层层推进：看见什么？生活怎样？心情如何？让孩子一步步明白，这句话表面写天，实际写的是"我"内心对狭小生活的无奈、对广阔天地的渴望。最后我适度补充《故乡》的背景，抛出悬念——三十年后，那个勇敢的少年变成了什么样？把孩子引向课外的整本书阅读。

第五环节，课堂小结与作业，大约四分钟。我请孩子说说收获，体会闰土就像一扇窗，为"我"打开了另一个世界。作业分两层：第一层背诵第一自然段并讲给家人听；第二层选一件自己或伙伴做过的"新鲜事"，用连续的动作写一段话，落实读写结合。

**七、说板书设计**

我的板书是一张图文结合的表格：中间是课题"少年闰土"，注明选自《故乡》；下面分三层，第一层是初见形象——紫圆脸、小毡帽、银项圈；第二层是四件新鲜事，用"详、略"标出详略安排；第三层是主题对比——"四角的天空"对应"无穷的稀奇事"，再加上"羡慕、向往、渴望自由"几个词点出"我"的内心。这样一块板书，人物形象、写作方法、思想情感一目了然。

**八、说教学反思与效果预测**

最后说说教学反思与效果预测。我预测，孩子们对"月下刺猹"的画面会特别感兴趣，通过颜色加动作的双线品读，大多数孩子能当堂背下第一自然段，背诵难点主要在后半句"那猹却将身一扭，反从他的胯下逃走了"，我会用动作表演帮助记忆。对"四角的天空"，我设计了层层追问，相信孩子们能说出自己的理解，但个别孩子可能还是说得浅，我会允许他们联系自身体验，不求统一答案。四件事的详略对比，我把发现的主动权交给学生，课堂上可能出现不同的看法，我会顺势引导，让生成成为课堂的亮点。鲁迅的语言对孩子们有点距离，我会通过范读、分角色读来缩短这个距离。总体而言，这节课我力求以读为本、以品为径，让孩子们在一幅画、四件事、一句话里，认识闰土，走近鲁迅，也悄悄种下一颗读整本书的种子。

`}},as={"小学|一年级|数学|认识钟表":{plan:`**教学基本信息**

- 课题：认识钟表
- 教材版本：人教版义务教育教科书《数学》一年级上册
- 年级：小学一年级
- 课型：新授课（概念认识课）
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学一年级学生

**教学目标**

1. 知识技能：通过观察和动手操作认识钟面，知道钟面上有 12 个数字、时针和分针，能正确认读整时和半时，会用文字写法和电子表写法两种方式表示时间。
2. 过程方法：经历"看钟面、拨钟面、说时间"的探究过程，在观察、对比、操作中发现整时与半时时针、分针的位置规律，初步发展观察能力和推理意识。
3. 情感态度：感受时间与日常生活的密切联系，初步养成按时作息、珍惜时间的好习惯。
4. 核心素养落点：量感（对时间长短的直接感受与直觉判断）、推理意识（由分针指向推断时针读数）。

**教学重难点**

- 教学重点：认识钟面，正确认读整时和半时。
- 教学难点：正确认读半时，能准确判断半时时时针在两个数字之间的位置，理解"时针刚走过几就是几时半"。

**教学准备**

- 教师：多媒体课件（钟面动态演示、生活情境图、电子钟图片）、大号演示钟表模型、磁性时针分针贴片。
- 学生：每组一个钟表模型、每人一张可拨动的自制纸面钟、任务单一张。
- 板书：磁贴数字卡、时针分针卡片、口诀条。

**教学过程**

**环节一 情境导入（约 4 分钟）**

**教师活动：** 师：同学们，今天老师请来了一位特别的朋友，它会"嘀嗒嘀嗒"地唱歌，天天陪在我们身边。你们猜猜它是谁？生：钟表！闹钟！师：对！每天早晨是谁叫我们起床？是谁提醒我们上学不迟到？生：小闹钟！师：钟表是我们生活的好帮手，今天我们就一起来认识它。（板书课题：认识钟表）

**学生活动：** 猜谜语，结合生活经验说一说钟表在生活中的作用。

**设计意图：** 用谜语激发兴趣，从"叫起床、提醒上学"这些熟悉的生活经验切入，让学生体会到时间与生活息息相关，自然引出课题，营造轻松愉悦的课堂氛围。

**环节二 探究新知（约 19 分钟）**

（一）认识钟面（约 6 分钟）

**教师活动：** 师：请小朋友们拿出小组的钟表模型，仔细观察钟面，你发现了什么？生：钟面上有数字，还有针！师：钟面上有几个数字？它们是怎样排列的？生：有 12 个数字，从 1 排到 12，围成一圈。师：12 在钟面的最上面，6 在最下面，3 在右边，9 在左边。（课件逐一闪烁定位，学生跟着指认）师：钟面上有几根针？它们长得一样吗？生：不一样，一根又短又粗，一根又长又细。师：说得好！又短又粗、走得慢的是时针；又长又细、走得快的是分针。请同学们在你自己的钟面上摸一摸、指一指时针和分针。生：（动手摸、指）师：我们来玩"举针"游戏。老师说名称，你们举针——时针在哪里？分针在哪里？生：（依次举起时针和分针）师：每两个相邻数字之间是一大格，钟面上一共有几个大格？生：12 个大格。师：分针走 1 小格是 1 分，走 1 大格是 5 分，走一圈正好是 60 分，也就是 1 时。所以 1 时等于 60 分。（板书：1 时 = 60 分）

**学生活动：** 小组观察钟面，数大格，摸一摸、举一举时针和分针，聆听进率知识。

**设计意图：** 调动看、摸、举多种感官，把"短粗是时针、长细是分针"的形象深深印入脑中，同时渗透"1 时 = 60 分"的进率，为后续学习埋下伏笔。

（二）认识整时（约 6 分钟）

**教师活动：** 师：（拨钟面模型）现在分针指向 12，时针指向 7，这是几时？生：7 时。师：你是怎么知道的？生：分针指着 12，时针指着 7，就是 7 时。师：说得真完整！请记住这句口诀：分针指向 12，时针指向几，就是几时。（板书口诀）师：（再拨 3 时、8 时）大家一起说，这是几时？生：3 时！8 时！师：整时有几种写法呢？（课件出示电子钟）可以这样写：7:00，这叫电子表写法。冒号左边的数表示几时，右边写两个 0；还可以写成"7 时"。请大家用手指书空一遍。生：（书空 7:00）师：生活中的整时可真不少——7 时起床，8 时上课，12 时吃午饭，晚上 9 时睡觉。你会用电子表写法表示它们吗？生：7:00、8:00、12:00、9:00。

**学生活动：** 观察钟面说时间，齐读口诀，学习文字与电子表两种写法并书空。

**设计意图：** 通过"看、说、读、写"四步让学生掌握整时认读规律，把生活时间与数学表达对接起来，巩固对整时的理解。

（三）认识半时（约 7 分钟）

**教师活动：** 师：（拨钟面模型）现在分针指向 6，时针在 3 和 4 的中间，这是几时？生：3 时半。师：你是怎么看的？生：分针指向 6，时针在 3 和 4 的中间，就是 3 时半。师：为什么不是 4 时半呢？生：因为时针刚刚走过 3，还没有到 4，所以是 3 时半。师：说得真好！认半时也有一句口诀：分针指向 6，时针刚走过几，就是几时半。（板书口诀）师：3 时半在电子表上怎样写？冒号右边写几？生：写 30，写作 3:30。师：（课件把 3 时和 3 时半并排出示）请同学们观察这两面钟：整时时分针指向 12，半时分针指向 6；整时时针正好指着数字，半时时针在两个数字的中间。你们发现了吗？生：发现了！师：请同桌合作，一人说时间，一人在钟面上拨出来，再交换来一次。生：（同桌互拨互说，教师巡视指导）

**学生活动：** 观察半时钟面，说出认读方法，对比整时与半时的异同，同桌合作拨钟说时间。

**设计意图：** 以"为什么不是 4 时半"这一关键问题引发深度思考，突破难点；将整时与半时并排对比，凸显规律；同桌互拨增加了每位学生的操作量，让知识在动手中内化。

**环节三 巩固练习（约 9 分钟）**

**教师活动：** 师：下面进入"时间小达人"闯关。第一关，抢答：看钟面说时间。（课件依次出示 9 时、6 时半、12 时、10 时半）比一比谁说得又快又对。生：（抢答）第二关，我来拨：老师说时间，学生在自己的纸钟面上拨——5 时、11 时半、2 时、7 时半，同桌互查。第三关，写一写：完成任务单第一题，照样子写出钟面表示的时间，再用电子表形式表示（如 4 时写作 4:00，4 时半写作 4:30）。生：（独立练习，指名汇报，全班讲评）

**学生活动：** 抢答、拨钟、写时间，三种形式交替进行。

**设计意图：** 由认到拨再到写，层层递进，既巩固认读方法，又暴露"把半时看成整时、漏写冒号"等典型错误，及时纠偏，保证人人过关。

**环节四 拓展应用（约 5 分钟）**

**教师活动：** 师：（课件出示"小明的一天"）看图说时间：6 时半起床，7 时半出门上学，12 时吃午饭，下午 3 时半放学。请帮小明把电子钟补完整。生：（在任务单上填写 6:30、7:30、12:00、3:30）师：想一想，一天里时针要转几圈呢？生：转两圈，一天有 24 时。师：时间一去不回头，我们要按时作息、珍惜时间，做时间的小主人。

**学生活动：** 结合生活情境说时间、填电子钟，感受一天的作息节奏。

**设计意图：** 把数学知识放回真实生活，在"小明的一天"中综合运用整时和半时，渗透珍惜时间的教育，落实情感态度目标。

**环节五 课堂小结与作业（约 3 分钟）**

**教师活动：** 师：这节课你有哪些收获？生：认识了时针和分针；分针指向 12 是整时，分针指向 6 是半时……师：我们一起小结口诀：短粗时针，长细分针；分针指 12 是整时，分针指 6 是半时；时针刚过几，就是几时半。师：课后作业——(1) 回家拨一拨家里的钟，向爸爸妈妈介绍 3 个时间；(2) 观察今天晚上 9 时和 9 时半，钟面有什么不同。

**学生活动：** 回顾收获，齐读口诀，明确作业内容。

**设计意图：** 用口诀收束全课，帮助学生系统记忆；作业指向生活观察与动手实践，让课堂学习延伸到课外。

**板书设计**

        认识钟表

  钟面：12 个数字  时针（短粗）  分针（长细）
  1 时 = 60 分

  整时：分针指向 12，时针指向几，就是几时
        例：7 时   7:00
  半时：分针指向 6，时针刚走过几，就是几时半
        例：3 时半  3:30

（板书右侧画一面大钟面，标出 12 个数字与两根针的位置）

**教学反思要点**

1. 学生对"分针指 12 看时针"掌握较快，难点集中在半时认读，应多安排拨钟对比与"为什么不是 4 时半"的追问。
2. 部分学生容易把时针分针认反，口诀"短粗长细"需反复强化，可增加"举针"游戏巩固印象。
3. 电子表写法漏写冒号、写成 7 30 等情况较多，纠错时应强调"冒号左边写几时，右边写两个数"。
4. 同桌互拨互说环节课堂活跃，但个别小组只顾拨不看，操作前要明确"拨、看、说"三步要求。
5. 时间把控上，半时教学弹性较大，若时间紧张可压缩抢答环节，优先保证拨钟操作充分展开。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版一年级上册"认识钟表"。这一课属于数与代数领域"常见的量"的起始内容，是学生第一次系统地认识时间。教材的安排很有层次：先是结合生活情境认识钟面，弄清楚钟面上有什么；然后学习认读整时；最后学习认读半时。认识时间既是学生日常生活的基本本领，也是今后学习时、分、秒以及解决与时间有关的实际问题的基础。可以说，这一课在整册教材里起着承上启下的作用，我把它定位为一节概念认识课。

**二、说学情**

一年级的孩子虽然天天和钟表打交道，会看电子钟上的数字，但对钟面的结构、时针和分针的区别并不清楚，大多数孩子没有系统地学过看指针钟表。他们好奇心强，喜欢动手、喜欢游戏，但是注意力持续的时间不长。从经验看，认读整时相对容易，而认读半时，特别是判断半时时时针在两个数字之间的位置，往往是孩子们最容易出错的地方。所以，在教学中我特别重视用钟表模型和动手操作来支撑学习，让孩子们在"玩"中学会看时间。

**三、说教学目标**

根据课程标准和教材内容，结合一年级学生的实际，我确定了这样的三维目标：在知识技能方面，认识钟面，知道钟面上有 12 个数字、时针和分针，能正确认读整时和半时，会用文字写法和电子表写法两种方式表示时间；在过程方法方面，经历看钟面、拨钟面、说时间的过程，在观察对比中发现整时和半时的认读规律，发展观察能力和推理意识；在情感态度方面，感受时间与生活的密切联系，初步养成按时作息、珍惜时间的好习惯。同时，我特别关注量感的启蒙和推理意识的渗透这两个核心素养的落点。

**四、说教学重难点**

本课的教学重点是认识钟面，正确认读整时和半时。教学难点是正确认读半时，能准确判断半时时时针在两个数字之间的位置。为什么难？因为半时时时针不在数字上，而是"刚走过"某一个数，孩子容易把 3 时半看成 4 时半。为了突破这个难点，我会组织学生反复拨钟、反复对比，用"时针刚走过几就是几时半"这句话帮他们建立判断的依据。

**五、说教法学法**

本课我主要采用直观演示法、动手操作法、游戏教学法和生活情境法。教师通过课件动态演示和大钟模型拨动，引导学生用眼睛看、用小手摸、用嘴巴说，在观察、操作、游戏中自主发现规律，真正做到眼到、手到、口到、心到。

**六、说教学过程**

本课 40 分钟，我设计了五个环节。第一环节是情境导入，大约 4 分钟。我用"嘀嗒嘀嗒的朋友"这个谜语引入，唤起孩子们对钟表的生活经验，自然引出课题。第二环节是探究新知，大约 19 分钟，这是全课的核心。我把它分成三步走：第一步认识钟面，通过看、摸、举，认识 12 个数字和时针分针，知道 1 时等于 60 分；第二步认识整时，借助"分针指向 12，时针指向几就是几时"总结出认读口诀；第三步认识半时，用"为什么不是 4 时半"这个问题引发思考，得出"分针指向 6，时针刚走过几就是几时半"，再通过整时半时对比和同桌互拨加以巩固。第三环节是巩固练习，大约 9 分钟，我设计了抢答、拨钟、写时间三个小游戏，由易到难。第四环节是拓展应用，大约 5 分钟，结合"小明的一天"看图填时间，渗透珍惜时间的教育。第五环节是课堂小结与作业，大约 3 分钟，用口诀收束全课，布置观察生活时间的实践作业。

特别要说一说第二环节中难点的突破。我在认识半时时，故意先问孩子们"为什么不是 4 时半"，让他们把目光集中到时针上，用"时针刚刚走过 3，还没有到 4"这个生活化的说法，把抽象的位置判断变得说得清、看得见。紧接着，我把 3 时和 3 时半两面钟并排放在一起，让孩子在对比中发现：整时时分针指向 12，半时分针指向 6；整时时针正好指着数字，半时时针在两个数字的中间。这样的对比，比单纯讲解更直观，孩子的印象也更深刻。另外，整节课我都在坚持"先看分针、再看时针"的观察顺序，让孩子形成稳定的观察习惯，这是降低认读错误率的有效方法。

**七、说板书设计**

我的板书围绕"钟面、整时、半时"三个板块展开。左侧画钟面，标出 12 个数字和两根针；中间写 1 时等于 60 分；右侧是整时和半时的认读口诀及示例，比如 7 时、7:00，3 时半、3:30。整个板书简洁明了，突出了知识主干，方便学生回顾和记忆。

**八、说教学反思与效果预测**

这节课的设计以操作和游戏为主线，预计课堂气氛会很活跃，学生参与度比较高。整时认读的目标应该能顺利达成；半时这个难点，可能还有部分学生理解不到位，我会在对比观察和拨钟练习中重点指导。从整体上看，孩子们能在愉悦的活动中掌握认读时间的方法，体会到时间与生活的密切联系，养成珍惜时间的习惯。我对这堂课的教学效果比较有信心，也相信孩子们在课后能更加合理地安排自己的时间。

此外，我还注意把认识时间与生活习惯的养成结合起来，通过"小明的一天"这样的情境，让孩子在学会看时间的同时，懂得什么时间该做什么事，把数学学习和习惯培养自然地融合在一起，这也是本课情感目标的重要落点。我的说课到此结束，谢谢大家！`},"小学|一年级|数学|20 以内的进位加法":{plan:`**教学基本信息**

- 课题：20 以内的进位加法
- 教材版本：人教版义务教育教科书《数学》一年级上册
- 年级：小学一年级
- 课型：新授课（计算课）
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学一年级学生

**教学目标**

1. 知识技能：理解凑十法的算理，能借助小棒操作说明 9 加几、8 加几等进位加法的计算过程，正确口算 20 以内的进位加法。
2. 过程方法：经历"摆一摆、拆一拆、凑一凑"的探究过程，掌握"看大数、拆小数、凑成十、算得数"的计算策略，发展数感和推理意识。
3. 情感态度：在算法交流中体会凑十法的简便，增强口算信心，乐于用加法解决生活中的实际问题。
4. 核心素养落点：数感（体会 10 加几不用数、一眼看出得数的简便）、推理意识（由"凑十"目标合理拆数的因果推理）。

**教学重难点**

- 教学重点：掌握凑十法，正确计算 20 以内的进位加法。
- 教学难点：理解凑十法的算理，会合理地把其中一个加数拆成两部分，凑十目标明确。

**教学准备**

- 教师：多媒体课件（小猴摘桃情境、小棒动态演示）、磁性小棒、口算卡片、凑十图挂图。
- 学生：每人 20 根小棒（10 根一捆）、任务单一张、口算卡片一套。
- 板书：磁性小棒、算式卡片、口诀条。

**教学过程**

**环节一 情境导入（约 4 分钟）**

**教师活动：** 师：同学们，秋天到了，果园里的桃子熟了。看，小猴摘了 9 个桃放在筐里，又摘了 2 个拿在手里。小猴一共有多少个桃？谁能用一个算式表示？生：9 + 2。师：9 + 2 等于几呢？个位相加超过了 10，可不像以前那样好算了。今天我们就来学习"20 以内的进位加法"，学会一种又对又快的计算方法。（板书课题）

**学生活动：** 观察情境，列出算式 9 + 2，感受到直接数数的困难，产生学习新方法的需求。

**设计意图：** 以分桃情境引出 9 + 2，制造"凑整"的需求，激发学生的探究欲望，为学习凑十法创设认知冲突。

**环节二 探究新知（约 18 分钟）**

（一）摆小棒，学凑十（约 8 分钟）

**教师活动：** 师：请同学们用小棒摆一摆 9 + 2。左边摆 9 根，右边摆 2 根。想一想，怎样摆，能让别人一眼就看出结果？生：（动手操作后回答）从 2 根里拿出 1 根，和 9 根凑成 10 根捆成一捆，还剩 1 根。师：为什么从 2 根里拿 1 根，而不拿 2 根呢？生：因为 9 加 1 等于 10，9 和 1 正好凑成十。师：说得真好！把 2 分成 1 和 1，9 + 1 = 10，10 再加剩下的 1 等于 11。所以 9 + 2 = 11。（边摆边板书）师：谁来说一说，我们刚才是怎么算的？生：9 和 1 凑成 10，2 分成 1 和 1，10 + 1 = 11。师：像这样把两个数先凑成十再算的方法，就叫凑十法。为什么要凑成十呢？生：因为 10 加几不用数，一眼就能看出得数。师：对！凑十法的口诀是：看大数、拆小数、凑成十、算得数。（板书口诀）

**学生活动：** 动手摆小棒，尝试"凑十"，交流想法，齐读口诀。

**设计意图：** 以"怎样一眼看出结果"引发操作目标，让学生在摆的过程中悟出算理，理解凑十的必然性，把算理与算法融为一体。

（二）独立探究 9 加几（约 5 分钟）

**教师活动：** 师：用凑十法算一算 9 + 3、9 + 5。先想：看大数——看谁？拆小数——把 3 拆成几和几？生：把 3 拆成 1 和 2，9 + 1 = 10，10 + 2 = 12。师：9 + 5 呢？生：把 5 拆成 1 和 4，9 + 1 = 10，10 + 4 = 14。师：观察 9+2=11、9+3=12、9+4=13、9+5=14……你发现了什么规律？生：得数的个位比"几"少 1。师：为什么少 1 呢？生：因为从"几"里拿出 1 去和 9 凑成十了。

**学生活动：** 独立口算、完整说思路、找规律。

**设计意图：** 由扶到放，借助口诀自主迁移；通过追问"为什么少 1"深化对算理的理解，发展数感和推理意识。

（三）迁移：8、7、6 加几（约 5 分钟）

**教师活动：** 师：如果大数变成 8，怎么凑十？8 和几凑成十？生：8 和 2 凑成十。师：8 + 4 怎么算？把 4 拆成几和几？生：把 4 拆成 2 和 2，8 + 2 = 10，10 + 2 = 12。师：7 + 6、6 + 5 呢？同桌互相说一说。生：（同桌互说）7 和 3 凑十，把 6 拆成 3 和 3，7 + 3 = 10，10 + 3 = 13；6 和 4 凑十，把 5 拆成 4 和 1，6 + 4 = 10，10 + 1 = 11。师：不管大数是几，方法都一样——看大数、拆小数、凑成十、算得数。师：再来算一算 4 + 9，可以想成几加几？生：可以想 9 + 4。师：为什么？生：交换两个加数的位置，和不变，4 + 9 = 13。

**学生活动：** 迁移类推，同桌互说思路，体会加法交换律。

**设计意图：** 由 9 加几迁移到 8、7、6 加几，突出"方法相同、凑整目标不同"，并通过交换加数位置渗透加法交换律，拓宽思维。

**环节三 巩固练习（约 10 分钟）**

**教师活动：** 师：我们来闯三关。第一关，对口令：老师说算式，学生抢答得数并说凑十思路——9+6、8+5、7+8、6+9。生：（抢答，说思路）第二关，填一填：完成任务单第一题，在括号里填上合适的数。9+6 = 9+1+（ ）= 10+（ ）=（ ），8+7 = 8+2+（ ）= 10+（ ）=（ ）。第三关，算一算：口算卡片限时练习——9+8、8+6、7+5、6+7、9+9、5+8。生：（独立完成，汇报订正）

**学生活动：** 抢答、填空、限时口算，先会说道理再追求速度。

**设计意图：** 由说理到填空再到纯口算，三个层次逐步脱离实物支架，提高口算熟练度，同时暴露拆数错误，及时纠偏。

**环节四 拓展应用（约 5 分钟）**

**教师活动：** 师：盒子里有 7 支铅笔，盒子外有 4 支，一共有多少支？先读题找信息，再说说求什么。生：求一共是多少，把两部分合起来用加法，7 + 4 = 11（支）。师：对！解题四步走——一读题找信息，二想清楚求什么，三列式口算，四写单位写答。师：（出示游乐场情境）坐碰碰车的有 8 人，坐旋转木马的有 6 人，一共多少人？生：8 + 6 = 14（人）。

**学生活动：** 看图说图意，列式口算，完整口答。

**设计意图：** 把口算放回生活问题中，强化"求一共用加法"，规范解题步骤，体现数学的应用价值。

**环节五 课堂小结与作业（约 3 分钟）**

**教师活动：** 师：这节课你学会了什么？生：凑十法，看大数、拆小数、凑成十、算得数。师：计算进位加法时，为什么凑十最方便？生：因为 10 加几一眼就能看出得数。师：课后作业——(1) 口算卡片 20 题，请爸爸妈妈计时；(2) 找一找生活中用进位加法解决的问题，说给家长听。

**学生活动：** 回顾口诀，交流收获，明确作业。

**设计意图：** 突出凑十法的价值，把口算训练延伸到课后，让学习不止于课堂。

**板书设计**

      20 以内的进位加法

  凑十法：看大数、拆小数、凑成十、算得数

  9 + 2 = 11          8 + 4 = 12
     /\\                    /\\
    1   1                2   2
  9+1=10 10+1=11      8+2=10 10+2=12

  交换加数位置，和不变：4 + 9 = 9 + 4 = 13

**教学反思要点**

1. 摆小棒环节学生兴趣浓，但个别孩子不知道拆哪根，操作前要先明确"先想大数加几得 10"的凑十目标。
2. "得数个位比几少 1"的规律，部分学生只记结论不理解原因，必须追问"为什么"。
3. 对口令抢答容易只报得数不说思路，要坚持"先说道理，再报得数"。
4. 限时口算对基础弱的学生压力偏大，可先开卷再闭卷计时，分层要求。
5. 拓展应用时部分学生忘记写单位、写答，需强化解题四步的规范训练。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版一年级上册"20 以内的进位加法"。这一课是小学数学计算教学的重点内容，也是学生今后学习多位数加法和减法的重要基础。教材以"9 加几"为载体，借助小棒操作引出凑十法，再迁移到 8 加几、7 加几、6 加几，最后安排了用加法解决"求一共是多少"的实际问题。教材这样编排，目的就是让学生在具体情境中理解凑十法的算理，形成正确、较熟练的口算能力。

**二、说学情**

一年级学生已经学习了 10 以内数的认识和加减法，掌握了 10 以内数的组成，也能计算"10 加几"的算式，这些都是学习进位加法的重要基础。但是，他们的思维以具体形象为主，对于"为什么要把一个加数拆开、拆成几和几"这样的道理，还缺乏抽象的理解。多数孩子计算进位加法时会数手指、数小棒，速度慢、容易错。因此，借助小棒操作帮助学生理解凑十的算理，就显得格外重要。

**三、说教学目标**

结合课标和教材，我确定了这样的目标：在知识技能方面，理解凑十法的算理，能借助小棒说明计算过程，正确口算 20 以内的进位加法；在过程方法方面，经历摆一摆、拆一拆、凑一凑的探究过程，掌握看大数、拆小数、凑成十、算得数的策略，发展数感；在情感态度方面，在算法交流中体会凑十法的简便，增强口算信心，乐于用加法解决生活问题。核心素养方面，我重点落在数感的培养和推理意识的渗透上。

**四、说教学重难点**

本课的重点是掌握凑十法，正确计算 20 以内的进位加法；难点是理解凑十法的算理，能够合理地把一个加数拆成两部分。难就难在"拆"上——拆多了不行，拆少了也不行，必须拆出"和 9 凑成 10 的那个数"。教学时，我会引导学生先想"大数加几得 10"，再决定怎样拆小数，从而突破难点。

**五、说教法学法**

本课主要采用操作演示法、合作探究法、游戏练习法和情境教学法。教师利用小棒演示和课件动态演示，引导学生边摆边说、边算边想；学生通过同桌交流、抢答游戏等多种形式，在操作与交流中建构凑十法的模型。

**六、说教学过程**

本课 40 分钟，我安排了五个环节。第一环节是情境导入，约 4 分钟，用小猴摘桃的情境引出 9 + 2，制造认知冲突，激发学习兴趣。第二环节是探究新知，约 18 分钟，这是重点环节。我先让学生摆小棒，思考怎样摆能一眼看出结果，从而引出凑十法；再通过追问"为什么从 2 里拿 1 根"帮助学生理解算理，总结出看大数、拆小数、凑成十、算得数的口诀；接着让学生独立计算 9 加几，并观察得数的规律；最后迁移到 8、7、6 加几，体会方法的一致性。第三环节是巩固练习，约 10 分钟，我设计了对口令、填一填、限时口算三个层次的练习。第四环节是拓展应用，约 5 分钟，结合铅笔和游乐场的情境解决实际问题，规范解题四步。第五环节是课堂小结与作业，约 3 分钟，用口诀收束全课，布置口算卡片和生活中的问题两项作业。

这里我想重点谈谈凑十法算理的突破。一年级的孩子形象思维占优势，他们能背口诀，但不一定理解"为什么要拆、拆成几和几"。所以在探究新知时，我先抛出一个问题：怎样摆小棒，能让人一眼就看出 9 加 2 的结果？孩子们自然想到从 2 根里拿出 1 根，和 9 根凑成一捆。我紧接着追问：为什么拿 1 根，而不拿 2 根？这个追问直指算理——因为 9 和 1 正好凑成十，10 加几不用数就能看出得数。通过这样的操作和追问，孩子们不仅会算，更明白为什么这样算。在迁移环节，我让学生同桌互说 8 加几、7 加几的思路，强调"不管大数是几，方法都一样"，并顺势渗透加法交换律，让算法在迁移中逐步内化。最后在巩固环节，我提出"先说道理、再报得数"的要求，避免孩子只记答案、不懂算理。整节课下来，孩子手里有小棒、嘴里有口诀、心里有算理，凑十法就不再是死记硬背了。

**七、说板书设计**

我的板书以"凑十法"为核心。中间是口诀"看大数、拆小数、凑成十、算得数"，下面是 9+2 和 8+4 两道算式的分解过程，用分解线清楚地展示拆数思路，最下面是交换加数位置、和不变的结论。整个板书条理清晰，突出了凑十的算理和算法。

**八、说教学反思与效果预测**

这节课以操作活动贯穿始终，预计课堂参与度高，孩子们能在摆一摆、说一说的过程中理解凑十法的道理。可能存在的问题是，个别孩子拆数不够灵活，或者只记住了口诀不会实际应用，我会在练习环节和课后对口令中持续跟进。总体来看，学生应该能够掌握凑十法，达到正确、较熟练地口算 20 以内进位加法的目标，数感也会在这一过程中得到发展。

需要说明的是，口算能力的形成需要持续训练，我在设计作业时特意安排了家长计时的口算练习，就是希望把课堂上学到的方法延伸到家庭，让凑十法在反复运用中逐渐成为孩子们的自动化技能，为后续学习退位减法打下扎实的基础。我的说课到此结束，谢谢大家！`},"小学|一年级|数学|1-5 的认识和加减法":{plan:`**教学基本信息**

- 课题：1-5 的认识和加减法
- 教材版本：人教版义务教育教科书《数学》一年级上册
- 年级：小学一年级
- 课型：新授课（概念课，数与计算起始课）
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学一年级学生

**教学目标**

1. 知识技能：会数、会认、会读、会写 1-5 各数，掌握数的顺序，能比较两个数的大小；理解加法和减法的含义，能口算 5 以内的加减法。
2. 过程方法：通过摆圆片、分一分体会数的分与合，借助"想组成"计算加减法，经历看图说图意、列算式的过程，发展数感和符号意识。
3. 情感态度：在数一数、摆一摆、算一算的活动中感受数学就在身边，乐于用数学的眼光观察和表达生活。
4. 核心素养落点：数感（数量的抽象与表征）、符号意识（对加减号及算式的理解）。

**教学重难点**

- 教学重点：1-5 各数的认读写，5 以内加减法的口算。
- 教学难点：理解加减法的含义，能正确看图说图意并列出算式。

**教学准备**

- 教师：多媒体课件（农场情境图、气球图、苹果图）、数字卡片、磁性圆片、加号减号卡片。
- 学生：圆片若干、数字卡片一套、小棒、任务单一张。
- 板书：数字卡片、圆片贴图、算式卡片。

**教学过程**

**环节一 情境导入（约 4 分钟）**

**教师活动：** 师：小朋友们，今天老师带你们到数学王国走一走。看，蓝蓝的天上有一个太阳，树上有几只小鸟？草地上有几朵花？（课件出示农场情境图）生：有 2 只小鸟，4 朵花，5 个小朋友……师：数一数，图里都有什么？各有几个？请用"图上有几个什么"说给同桌听。生：（同桌互说）师：1、2、3、4、5 这些数就藏在我们身边。今天我们就来认识它们，并用它们来算一算。（板书课题：1-5 的认识和加减法）

**学生活动：** 观察情境图，数一数、说一说，复习数数经验。

**设计意图：** 用生动的画面激活学生已有的数数经验，体会数来源于生活，为新课学习做好情感与知识铺垫。

**环节二 探究新知（约 19 分钟）**

（一）认识 1-5 各数与写数（约 6 分钟）

**教师活动：** 师：1 个太阳可以用数字 1 表示，2 只小鸟用数字 2，3 只蝴蝶用数字 3，4 朵花用数字 4，5 个小朋友用数字 5。老师出示数字，请你们举起相应的数字卡片。生：（听数举卡）师：数要按顺序排队：1、2、3、4、5。从小到大，后面的数比前面的数多 1。4 的后面是几？3 的前面是几？和 3 相邻的两个数是谁和谁？生：4 的后面是 5；3 的前面是 2；和 3 相邻的是 2 和 4。师：比大小：5 比 3 多，写作 5 大于 3；1 比 4 少，写作 1 小于 4。师：数字怎么写才好看呢？跟着儿歌书空：1 像铅笔细又长，2 像小鸭水中游，3 像耳朵听声音，4 像小旗迎风飘，5 像秤钩来买菜。生：（跟读儿歌、书空）师：看老师范写，注意起笔和收笔的位置。（教师逐字范写，学生描红）

**学生活动：** 数数、举卡、排序、比较大小、书空和描红写数。

**设计意图：** 用儿歌辅助写数，把抽象的数字与形象事物联系起来，降低书写难度；通过排序和比较强化数的顺序与大小关系。

（二）分与合（约 6 分钟）

**教师活动：** 师：这里有 5 个圆片，要分给两只小兔，可以怎样分？生：可以分 1 个和 4 个；也可以分 2 个和 3 个。师：我们把它记录下来：5 可以分成 1 和 4，5 可以分成 2 和 3。（板书）反过来想一想，1 和 4 合起来是几？2 和 3 合起来是几？生：合起来都是 5。师：分与合是一对好朋友——一个数可以分成两个数，两个数也可以合成一个数。它可是我们计算加减法的小帮手。师：再来练一练：4 可以分成几和几？3 可以分成几和几？生：4 可以分成 1 和 3、2 和 2；3 可以分成 1 和 2。师：同桌合作，一人说"几可以分成几和几"，一人说"几和几合起来是几"。

**学生活动：** 动手分圆片，说组成，对子互练。

**设计意图：** 在分合操作中建立数的组成表象，理解"分与合"是加减法计算的基础工具，为算理学习埋下伏笔。

（三）加减法的含义（约 7 分钟）

**教师活动：** 师：（出示气球图）左边有 3 个气球，右边有 2 个气球，合起来一共是几个？用什么方法算？生：用加法，3 + 2 = 5（个）。师：加号表示把两部分合起来，算式读作"3 加 2 等于 5"。看到"一共、合起来、总共"这些词，往往用加法。师：3 + 2 怎样算？生：从 3 往后数，4、5，得 5。生：想组成，3 和 2 组成 5，所以 3+2=5。师：用"想组成"算得最快！师：（出示苹果图）5 个苹果吃掉了 2 个，还剩几个？用什么方法算？生：用减法，5 - 2 = 3（个）。师：减号表示从总数里去掉一部分。看到"还剩、去掉、吃掉、飞走"这些词，往往用减法。5 - 2 怎样算？生：想组成，5 可以分成 2 和 3，所以 5-2=3。师：（出示小鸟图）原来有 4 只小鸟，飞走了 1 只，还剩几只？请列式计算。生：4 - 1 = 3（只）。

**学生活动：** 看图说图意、列式，用"想组成"算出得数。

**设计意图：** 紧扣"合并"与"去掉"两个动作理解加减法含义，突破难点；用"想组成"把分与合和加减法打通，渗透符号意识。

**环节三 巩固练习（约 9 分钟）**

**教师活动：** 师：小练习开始啦。第一关，口算抢答：2+3、1+4、5-2、4-1、3+1、5-3，并说一说你是怎样想的。生：（抢答说思路）第二关，看图列式：完成任务单第一题——左边 2 个苹果、右边 3 个苹果，列式（ ）+（ ）=（ ）；原来有 5 个气球，飞走了 2 个，列式（ ）-（ ）=（ ）。第三关，填符号：在圈里填上加号或减号——3（ ）2=5，5（ ）1=4，2（ ）2=4，4（ ）2=2。生：（独立完成，汇报订正）

**学生活动：** 口算、看图列式、填符号，多种形式巩固理解。

**设计意图：** 通过口算、看图列式、填符号三个层次，检验学生是否真正理解加减法的含义，避免"看着图瞎猜算式"。

**环节四 拓展应用（约 5 分钟）**

**教师活动：** 师：看，果园里有 3 个苹果，又摘来 2 个，现在一共有几个？还能提出别的数学问题吗？生：一共有 3+2=5 个。还可以问：吃了 2 个，还剩几个？师：真会提问！生活里到处都有数学，比如你手里有 2 支铅笔，同桌有 1 支，合起来是几支？生：2+1=3 支。师：回家后，请用"一共有几个"和"还剩几个"各说一个身边的数学问题给爸爸妈妈听。

**学生活动：** 提出数学问题，并用加减法解决。

**设计意图：** 从"解决问题"走向"提出问题"，发展应用意识和创新意识，体会数学就在身边。

**环节五 课堂小结与作业（约 3 分钟）**

**教师活动：** 师：这节课你有什么收获？生：认识了 1-5，会写数字；知道了分与合；加法是合起来，减法是去掉。师：小结——数一数、认一认、写一写；分与合记心中；求一共用加法，求剩余用减法。师：课后作业——(1) 完成任务单上剩下的口算题；(2) 用圆片和爸爸妈妈玩"分一分"游戏，说一说 5 的组成。

**学生活动：** 回顾收获，明确作业。

**设计意图：** 梳理知识脉络，把课堂延伸到家庭，让亲子游戏成为练习场。

**板书设计**

    1-5 的认识和加减法

  数：1  2  3  4  5（按顺序排列）

  分与合：5 分 1 和 4，5 分 2 和 3
          1 和 4 合起来是 5，2 和 3 合起来是 5

  加法：合并   3 + 2 = 5（个）
  减法：去掉   5 - 2 = 3（个）

**教学反思要点**

1. 写数环节耗时较长，部分学生 2 和 5 易写反、3 和 5 易混淆，需要逐人巡视，及时纠正笔顺。
2. 分与合游戏中个别学生只顾分、忘了"合回去"检验，要明确"分完还要验证"的要求。
3. 看图列式时学生容易出现"看着图猜算式"的现象，必须坚持先完整说图意、再列式。
4. 口算时掰手指现象明显，鼓励用"想组成"算，逐步摆脱手指依赖，提高速度。
5. 若时间偏紧，可把填符号题留作课后巩固，优先保证看图列式充分交流。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版一年级上册"1-5 的认识和加减法"。这一课是数与代数领域的起始内容，是学生第一次正式认识数、第一次学习加减法，在小学数学体系中具有奠基性的地位。教材先借助生活情境认识 1-5 各数，再学习数的分与合，最后理解加减法的含义并学会口算。内容从"数"到"分与合"再到"算"，环环相扣，为学生后续学习 6-10 的认识和加减法、20 以内加减法打下坚实的基础。

**二、说学情**

一年级新生入学不久，他们大多会顺口溜一样地从 1 数到 5，也能数出物体的个数，但对数的意义、数的顺序和大小关系缺乏系统的认识。他们喜欢具体形象的事物，喜欢动手摆一摆、玩一玩。与此同时，加减法的含义对他们来说是从无到有的新概念，特别是看图说图意、把生活情境转成算式，往往是难点。所以，本课教学必须依托实物操作和直观情境，帮助学生完成从"生活经验"到"数学概念"的过渡。

**三、说教学目标**

根据课标和教材，我确定了以下目标：知识技能方面，会数、会认、会读、会写 1-5 各数，掌握数的顺序，能比较大小，理解加减法含义，会口算 5 以内加减法；过程方法方面，通过摆圆片、分一分体会数的分与合，借助想组成计算加减法，发展数感和符号意识；情感态度方面，在活动中感受数学就在身边，喜欢上数学课。核心素养上，我重点落在数感与符号意识的培养。

**四、说教学重难点**

本课重点是 1-5 各数的认读写和 5 以内加减法的口算；难点是理解加减法的含义，能正确看图说图意并列出算式。为了突破难点，我会引导学生经历"说图意、列算式、想组成"的完整过程，让每个孩子都能把图和算式对应起来。

**五、说教法学法**

本课主要采用情境教学法、动手操作法、儿歌记忆法和游戏练习法。教师用儿歌辅助写数，用圆片演示分与合；学生通过摆一摆、分一分、说一说、算一算，在操作中建构数的概念和加减法的意义。

**六、说教学过程**

本课 40 分钟，我设计了五个环节。第一环节是情境导入，约 4 分钟，通过农场情境图唤起学生的数数经验，自然引出课题。第二环节是探究新知，约 19 分钟，分三步：先认识 1-5 各数，用儿歌学写数，比较大小；再学习分与合，通过把 5 个圆片分给两只小兔，理解数的组成；最后学习加减法的含义，用气球图理解加法是合并，用苹果图理解减法是去掉，并学会用想组成来口算。第三环节是巩固练习，约 9 分钟，安排了口算抢答、看图列式、填符号三个层次。第四环节是拓展应用，约 5 分钟，鼓励学生提出数学问题并解决。第五环节是课堂小结与作业，约 3 分钟，梳理收获，布置亲子分一分游戏。

在教学过程中，我特别重视"看图说图意"这一环节。很多孩子学加减法时，看着图就能报出得数，但一问为什么这样列式，却说不清楚。所以我在探究加减法含义时，坚持让每个孩子先完整说一遍：图上有几个什么，又来了几个什么，一共有几个。说对了再列式。这样做虽然慢一点，却能让加减法的含义真正扎根。比如气球图，孩子们先说是"把 3 个和 2 个合起来"，再列出 3 加 2 等于 5，加法是合并的含义就自然建立了；苹果图同样，先说是"从 5 个里去掉 2 个"，再列出 5 减 2 等于 3，减法是去掉的含义也就清楚了。另外，分与合这个环节是沟通"数"和"算"的桥梁，我在黑板上把"5 可以分成 2 和 3"和"2 和 3 合起来是 5"并排写出来，让孩子亲眼看到分与合是互逆的，这样他们在算 2+3 和 5-2 的时候，就有了想组成的依托。

**七、说板书设计**

我的板书分为三块：左边是 1-5 各数按顺序排列；中间是分与合的记录，比如 5 分成 1 和 4、2 和 3；右边是加法算式 3+2=5 和减法算式 5-2=3，分别标注"合并"和"去掉"。板书简洁直观，把本课的知识主干清晰地呈现在黑板上。

**八、说教学反思与效果预测**

本课以操作和游戏为主线，预计课堂气氛活泼，学生参与热情高。写数环节可能要花较多时间，我会通过儿歌和描红提高效率；加减法含义是本课难点，预计部分学生还需要在练习中逐步巩固。整体而言，学生应该能扎实掌握 1-5 的认读写，理解加减法的含义，为后续学习打下良好的基础。

关于教学效果的预测，我认为本课最大的价值在于帮孩子搭好"数"和"运算"之间的桥。通过分与合，孩子知道了 5 可以分成 2 和 3，反过来就能算出 2 加 3 等于 5、5 减 2 等于 3。只要这座桥搭得牢，后续学习 6-10 的认识和加减法就会轻松许多。当然，一年级孩子的书写规范和口算熟练度不是一节课就能解决的，还需要课后亲子游戏和持续的口算练习来巩固。我预计课堂上孩子们的参与热情会很高，个别孩子在看图列式时可能会出现"看着图猜算式"的情况，我会通过坚持说图意来及时纠正。我的说课到此结束，谢谢大家！`},"小学|二年级|数学|角的初步认识":{plan:`**教学基本信息**

- 课题：角的初步认识
- 教材版本：人教版义务教育教科书《数学》二年级上册
- 年级：小学二年级
- 课型：新授课（概念课，图形与几何起始课）
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学二年级学生

**教学目标**

1. 知识技能：结合剪刀、钟面、红领巾等生活情境认识角，知道角有一个顶点和两条直直的边；会用三角尺判断直角，会用直尺画角。
2. 过程方法：通过做活动角、张开与合拢、叠合比较等活动，理解角的大小与两条边张开的大小有关、与边的长短无关，发展空间观念和动手操作能力。
3. 情感态度：在指角、折角、数角、画角的活动中感受数学图形的美，体会数学与生活的密切联系。
4. 核心素养落点：几何直观（角的表象建立）、空间观念（对图形动态变化的想象）。

**教学重难点**

- 教学重点：认识角的各部分名称，会用三角尺判断直角，会画角。
- 教学难点：理解"角的大小与两条边张开的大小有关，与边的长短无关"。

**教学准备**

- 教师：多媒体课件（剪刀、钟面、红领巾、扇子等图片）、三角尺、直尺、大号活动角、磁性贴片。
- 学生：每人一个活动角（两条硬纸条加一枚大头针）、圆形纸片、三角尺、直尺、任务单一张。
- 板书：角的结构示意图、口诀条。

**教学过程**

**环节一 情境导入（约 4 分钟）**

**教师活动：** 师：同学们，老师带来了一些图片，请大家仔细观察，看谁能找到数学的身影。（课件出示剪刀、钟面、红领巾、扇子）师：剪刀张开的地方藏着什么？钟面上时针和分针之间呢？红领巾上有几个尖尖的角？生：都有角！师：角就藏在我们的身边，等着大家去发现。今天我们就一起来认识角。（板书课题：角的初步认识）

**学生活动：** 观察图片，指认生活中的角。

**设计意图：** 用熟悉的生活物品引出角，让学生感受到数学源于生活，激发探究兴趣。

**环节二 探究新知（约 18 分钟）**

（一）认识角的组成（约 5 分钟）

**教师活动：** 师：请同学们拿出三角尺，摸一摸它尖尖的顶端，再摸一摸两条直直的边。这个尖尖的点叫顶点，两条直直的线叫边。一个角有几个顶点？几条边？生：一个顶点，两条边。师：角的记法：在角的里面画一条弯弯的弧线，标上数字，写成角 1，读作"角一"。（板书示范）师：（出示判断图）这些图形是角吗？为什么？第一幅图只有顶点，边是弯弯的；第二幅图有两条直边但没有顶点；第三幅图两条直边从一个点出发。生：第一幅不是角，边是弯弯的；第二幅不是角，没有顶点；第三幅是角。师：判断一个图形是不是角，一要有一个顶点，二要有两条直直的边。师：怎样指一个角呢？先找到顶点，再从顶点出发沿两条边分别比画过去，说"这是角"。记住口诀：小小角，真简单，一个顶点两条边。（全班齐读）

**学生活动：** 摸角、找顶点和边、辨析图形、学记法。

**设计意图：** 借助实物触摸建立角的表象，在正反例辨析中明确角的本质特征，用口诀帮助记忆。

（二）比较角的大小（约 6 分钟）

**教师活动：** 师：请同学们拿出活动角，先把两条边合拢，再慢慢张开，仔细观察角发生了什么变化。生：两条边张开得越大，角就越大；合拢得越小，角就越小。师：再做一个实验——把一条边拉得长长的，角变大了吗？生：没有变大。师：所以，角的大小与两条边张开的大小有关，与边的长短无关。（板书）师：两个角谁大谁小，怎样比呢？把两个角的顶点对在一起，一条边重合，再看另一条边——哪条边张开得大，那个角就大。这叫叠合法。师：（课件演示两个角叠合）哪个角大？生：角 2 大，因为它的另一条边张开得更大。师：同桌用活动角互相摆两个角，比一比谁的大，并说说理由。生：（同桌活动）

**学生活动：** 操作活动角感受大小变化，用叠合法比较角的大小。

**设计意图：** 让学生亲手"张开、合拢"，在动态变化中直观体会角的本质，突破本课难点。

（三）认识直角（约 4 分钟）

**教师活动：** 师：三角尺上有一个特殊的角，它方方正正的，像书本的角、桌子的角，我们叫它直角。请找出三角尺上的直角，和同桌比一比，你们的直角一样大吗？生：一样大。师：怎样判断一个角是不是直角？把三角尺直角的顶点和角的顶点重合，一条边和角的一条边重合，再看另一条边——如果完全重合，就是直角；如果不重合，就不是直角。师：（课件出示几个角）请用三角尺检验，它们是直角吗？生：（上台操作检验）师：找一找，我们教室里的直角在哪里？生：黑板的角、窗户的角、门框的角、课本的角……

**学生活动：** 找三角尺上的直角、用三角尺检验直角、找生活中的直角。

**设计意图：** 通过"重合"的操作标准，让学生掌握判断直角的科学方法，把数学知识用于生活。

（四）画角（约 3 分钟）

**教师活动：** 师：想不想自己画一个角？看老师示范——先画一个点作顶点；从顶点出发，用直尺画一条直直的线；再从顶点出发，画另一条直直的线；最后在角内画一条弯弯的弧线，标上角号，一个角就画好了。生：（独立画角）师：同桌互相检查：顶点和两条直直的边都齐全吗？

**学生活动：** 看示范，独立画角，同桌互查。

**设计意图：** 把角的特征落实到笔端，手脑并用，进一步巩固角的组成。

**环节三 巩固练习（约 9 分钟）**

**教师活动：** 师：我们来练一练。第一关，数一数：下面这个图形中共有几个角？注意别漏掉由两个小角组成的大角。（课件出示：一个大角被一条线分成两个小角）生：一共有 3 个角。师：第二关，判一判：用三角尺判断这些角哪些是直角，哪些比直角大，哪些比直角小。生：（操作判断）第三关，找一找：完成任务单第一题，在教室里的物品中找出 3 个角，写出它们的名字，并指出顶点和边。生：（独立完成，汇报交流）

**学生活动：** 数角、判断直角、找生活中的角。

**设计意图：** 数角题渗透有序思考，直角判断巩固操作方法，找角练习回归生活应用。

**环节四 拓展应用（约 5 分钟）**

**教师活动：** 师：一张圆形纸片，对折再对折，你能折出一个角来吗？生：（折纸）能！师：用三角尺检验一下，折出的是什么角？生：是直角！师：再想一想：一张长方形纸，如果剪去一个角，还剩下几个角？生：可能剩下 3 个、4 个，也可能是 5 个！师：课后大家动手试一试，明天我们交流发现。两根筷子也能摆角，回家可以和爸爸妈妈一起玩一玩。

**学生活动：** 折纸角、检验直角、猜想剪角问题。

**设计意图：** 折纸活动把新知用于操作验证，剪角问题开放有趣，激发课后探究欲望。

**环节五 课堂小结与作业（约 4 分钟）**

**教师活动：** 师：这节课我们认识了角，它有哪些秘密？生：角有一个顶点两条边；角的大小看张开，不看长短；直角用三角尺检验。师：齐读儿歌：小小角，真简单，一个顶点两条边；角的大小看张开，边的长短不影响。师：课后作业——(1) 用纸折一个角，用三角尺判断它是不是直角；(2) 研究"一张纸剪去一个角，剩几个角"，把发现记录下来。

**学生活动：** 齐读儿歌，回顾收获，明确作业。

**设计意图：** 用儿歌收束全课，把知识要点烙印心中；作业指向动手实践与开放探索。

**板书设计**

        角的初步认识

  角：一个顶点 + 两条直直的边
        ∠1（读作角一）

  角的大小：看两条边张开的大小
            与边的长短无关

  直角：用三角尺检验
        （顶点重合、一条边重合、再看另一条边）

  画角：顶点 → 边 → 边 → 标号

**教学反思要点**

1. 活动角实验直观有效，学生很快发现"张得越大角越大"，但要防止个别学生误把"边变长"当作"角变大"。
2. 判断直角时，有的学生顶点、边没有完全对齐就下结论，需要反复示范并明确操作步骤。
3. 数角题漏数"由小角组成的大角"现象普遍，要引导学生按"小角、大角"有序地数。
4. 画角时部分学生忘了从同一个顶点出发画两条边，需巡视提醒。
5. 剪角问题学生兴趣浓厚，课上只做猜想，留作课后探究，避免占用时间导致拖堂。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版二年级上册"角的初步认识"。这一课属于图形与几何领域，是学生第一次正式认识角，也是今后学习角的概念、角的度量以及认识平面图形的重要基础。教材从剪刀、钟面、红领巾等生活实物中抽象出角，认识角的组成部分，再通过活动角研究角的大小，最后认识直角、学会画角。这样的编排由具体到抽象，符合儿童认识图形的规律。

**二、说学情**

二年级学生已经认识了一些平面图形，会数长方形、正方形、三角形中的角，但他们头脑里的"角"往往是指"尖尖的顶点"，对角的完整结构并不清楚。他们以直观形象思维为主，喜欢动手操作，但观察图形时不够细致，容易被边的长短等表面特征干扰。所以，本课需要大量的实物感知和动手操作，帮助学生建立正确的角的表象。

**三、说教学目标**

结合课标和教材，我确定了这样的目标：在知识技能方面，知道角有一个顶点和两条直直的边，会用三角尺判断直角，会用直尺画角；在过程方法方面，通过做活动角、张开合拢、叠合比较，理解角的大小与边张开的大小有关、与边的长短无关，发展空间观念；在情感态度方面，在指角、折角、数角、画角的活动中感受数学与生活的联系。核心素养方面，我重点落在几何直观和空间观念的培养上。

**四、说教学重难点**

本课的重点是认识角的各部分名称，会用三角尺判断直角，会画角；难点是理解"角的大小与两条边张开的大小有关，与边的长短无关"。突破难点的关键是让学生亲手操作活动角，直观感受角的动态变化，再通过边变长角不变的实验，排除边的长短的干扰。这个难点涉及儿童空间观念的发展规律，值得在课堂上多花一点时间，慢慢做、充分悟。

**五、说教法学法**

本课采用情境导入、直观演示、动手操作、活动角实验和小组讨论等方法。教师用课件演示和实物示范引导观察；学生通过找角、做角、比角、画角等系列活动，在做中学、在玩中悟。特别值得一提的是，本课的每一个概念都不是老师直接告诉的，而是孩子在自己动手的过程中"发现"的。摸一摸三角尺的顶端和两条边，角的样子就清楚了；转一转活动角，角的大小变化就看见了。这样获得的数学知识，孩子记得牢、用得活。

**六、说教学过程**

本课 40 分钟，我安排了五个环节。第一环节是情境导入，约 4 分钟，用剪刀、钟面、红领巾等图片引出角。第二环节是探究新知，约 18 分钟，分四步：先认识角的组成，通过摸三角尺和正反例辨析，明确一个顶点两条直边；再做活动角实验，研究角的大小与张开程度有关、与边长短无关；然后认识直角，学习用三角尺检验；最后学习画角的方法。第三环节是巩固练习，约 9 分钟，设计了数角、判直角、找生活中的角三个练习。第四环节是拓展应用，约 5 分钟，通过折纸角验证直角，并抛出剪角问题激发课后探究。第五环节是课堂小结与作业，约 4 分钟，用儿歌收束，布置实践作业。

在突破难点时，我设计了两个小实验。第一个是活动角实验：孩子把活动角的两条边慢慢张开、再慢慢合拢，亲眼看到角从小变大、从大变小，就能直观地体会到角的大小和两条边张开的大小有关。第二个实验是改变边的长短：把活动角的一条边拉长，角并没有变大。这两个实验一正一反，把"角的大小与边的长短无关"这个容易错、也容易忘的结论，变成了孩子亲眼看到的"事实"，以后再遇到"边长得长角就大"的想法，孩子自己就能判断对错。另外，在比角大小时，我教孩子用叠合法——顶点对顶点、一条边重合，再看另一条边张开的大小。孩子用这种方法去比较，就不再凭感觉判断，判断的标准也就从"大概"走向了"准确"。

**七、说板书设计**

我的板书以角的结构图为中心，标出顶点和两条边，写出角的记法；下方是角的大小的结论和判断直角的方法；最下面是画角的四个步骤。板书图文结合，一目了然，帮助学生建立完整的知识结构。

**八、说教学反思与效果预测**

本课以操作活动为主线，预计学生兴趣浓厚、参与度高。角的大小与边长短无关这个难点，通过活动角实验应该能得到较好突破，但个别学生可能仍有"边长角就大"的错觉，我将在练习中继续用叠合法验证。总体来看，学生能够认识角、会判直角、会画角，空间观念得到发展，教学效果值得期待。

具体来说，我预计学生在"指角、找角"这些活动上会表现出很高的热情，因为他们身边到处都能找到角，红领巾上有角、窗户上有角、课本上也有角，学习的亲切感会让他们乐于表达。需要关注的可能是两类孩子：一类对"一个顶点两条直直的边"的表述还不够规范，我会用"小小角，真简单，一个顶点两条边"的儿歌反复帮助他们；另一类在判断直角时容易马虎，顶点和边没有对齐就下结论，我会要求他们一步一步对照操作，培养严谨的几何学习习惯。画角是手眼结合的练习，多数孩子经过示范和互查能够画好。整体而言，本课的重点难点应该都能得到较好落实，孩子们的空间观念也会在这一课中向前迈出一小步。我的说课到此结束，谢谢大家！`},"小学|二年级|数学|表内乘法（一）：2-6 的乘法口诀":{plan:`**教学基本信息**

- 课题：表内乘法（一）：2-6 的乘法口诀
- 教材版本：人教版义务教育教科书《数学》二年级上册
- 年级：小学二年级
- 课型：新授课（计算课，乘法概念与口诀起始课）
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学二年级学生

**教学目标**

1. 知识技能：在具体情境中理解乘法的意义，知道求几个相同加数的和可以用乘法计算，认识乘号，能读写乘法算式并说出各部分名称；经历编制 2-6 的乘法口诀的过程，能按顺序熟记口诀并用口诀求积。
2. 过程方法：经历"摆一摆、写一写、编一编"的活动过程，发现口诀的编排规律，发展初步的抽象概括能力。
3. 情感态度：在编口诀、对口令的活动中感受乘法计算的简洁，体验成功的乐趣，增强学好数学的信心。
4. 核心素养落点：数感（把"几个几"抽象为乘法）、运算能力（用口诀求积）、模型意识（乘法的数学模型）。

**教学重难点**

- 教学重点：理解乘法的意义，熟记 2-6 的乘法口诀，能灵活用口诀求积。
- 教学难点：把"几个几相加"正确改写成乘法算式；辨析易混口诀；解决实际问题时准确判断"一份有几个、有几份"。

**教学准备**

- 教师：多媒体课件（彩笔盒、乒乓球拍、游乐园情境）、磁性圆片、口诀卡片、乘法口诀表挂图。
- 学生：圆片若干、小棒、口诀卡片一套、任务单一张。
- 板书：圆片贴图、乘法算式卡片、口诀条。

**教学过程**

**环节一 情境导入（约 4 分钟）**

**教师活动：** 师：同学们，公园里正在举行运动会。看，每行有 5 个小朋友在踢毽子，摆了 3 行。一共多少个小朋友？你会列算式吗？生：5+5+5=15。师：这个算式有什么特点？生：加数都一样，都是 5。师：像这样加数都相同的连加，还有一种更简便的写法。今天我们就来学习"表内乘法"。（板书课题）

**学生活动：** 列连加算式，观察算式的特点，产生学习乘法的需要。

**设计意图：** 由"加数相同的连加"引出乘法，让学生体会到乘法是加法的简便运算，感受学习乘法的必要性。

**环节二 探究新知（约 19 分钟）**

（一）认识乘法（约 7 分钟）

**教师活动：** 师：3 个 5 相加，可以写作 3×5=15，读作"三乘五等于十五"。（板书）这个符号"×"叫乘号，3 和 5 都叫因数，15 叫积。师：3×5 表示什么意思？生：表示 3 个 5 相加。师：它也可以表示 5 个 3 相加。师：请同学们用圆片摆一摆——每行摆 5 个，摆 3 行，边摆边说"3 个 5 相加"。生：（操作）师：什么时候可以用乘法？只有加数全部相同的连加才能改写。3+3+5 能改写成乘法吗？生：不能，因为加数里有一个 5，和 3 不一样。师：2+2+2+2 可以吗？生：可以，是 4 个 2，写作 4×2。

**学生活动：** 摆圆片，认识乘号与各部分名称，判断连加算式能否改写。

**设计意图：** 在操作与对比中理解乘法的意义，明确"加数必须相同"这一前提条件，建立乘法的初步模型。

（二）编制 2、3、4 的乘法口诀（约 6 分钟）

**教师活动：** 师：乘法口诀是怎么编的呢？口诀的前半句说因数，后半句说积。比如 2×1 想"1 个 2 是 2"，口诀"一二得二"；2×2 想"2 个 2 是 4"，口诀"二二得四"。（板书）师：请仿照这样的方法，编一编 3 的口诀。1 个 3 是几？2 个 3 呢？3 个 3 呢？生：一三得三，二三得六，三三得九。师：4 的口诀呢？4×1、4×2、4×3、4×4 分别想几个 4？生：一四得四，二四得八，三四十二，四四十六。师：观察这一列口诀，积的变化有什么规律？生：从上往下，相邻两句的积依次加同一个数——加 3、加 4。师：抓住这个规律，整列口诀就能顺藤摸瓜记下来。

**学生活动：** 仿编口诀，观察积的规律，按列记忆。

**设计意图：** 让学生经历"编制、观察、记忆"的过程，理解每一句口诀的来源，体会口诀的编排规律。

（三）编制 5、6 的乘法口诀（约 6 分钟）

**教师活动：** 师：5 的口诀呢？1 个 5 是 5，2 个 5 是 10……谁来接着编？生：一五得五，二五一十，三五十五，四五二十，五五二十五。师：6 的口诀呢？生：一六得六，二六十二，三六十八，四六二十四，五六三十，六六三十六。师：同桌互相背一背 2 到 6 的口诀，再对口令——我说前半句，你答积。生：（同桌对练）师：注意几组易混口诀：二五一十不是"二五得十"；三六十八、四六二十四，积依次加 6。师：用口诀求积——4×6 想哪句口诀？生：想"四六二十四"，积是 24。

**学生活动：** 独立编制 5、6 的口诀，同桌对口令，用口诀求积。

**设计意图：** 由扶到放，让学生独立完成口诀编制；通过辨析易混口诀和对口令，落实熟记口诀这一重点。

**环节三 巩固练习（约 9 分钟）**

**教师活动：** 师：闯关时间到。第一关，对口令：老师说口诀前半句，学生抢答积——三四（ ）、二五（ ）、五六（ ）、四六（ ）、六六（ ）。生：（抢答）第二关，算一算：完成任务单第一题，用口诀求积——3×4、5×2、6×3、4×4、5×5、2×6。第三关，改一改：把连加算式改写成乘法算式——6+6+6=（ ）×（ ），4+4=（ ）×（ ），3+3+3+3=（ ）×（ ）。生：（独立完成，汇报订正）

**学生活动：** 对口令、用口诀求积、改写算式，三个层次巩固。

**设计意图：** 由口诀到计算再到改写，全面检测学生对乘法意义的理解和口诀的运用，及时纠错。

**环节四 拓展应用（约 5 分钟）**

**教师活动：** 师：一盒彩笔有 6 支，买 4 盒，一共多少支？先说说"一份有几个，有几份"。生：一份有 6 支，有 4 份，6×4=24 支，想口诀"四六二十四"。师：一副乒乓球拍有 2 块，买 5 副，一共多少块？生：一份有 2 块，有 5 份，2×5=10 块，想口诀"二五一十"。师：解决问题要看清"一份有几个、有几份"，再列式、写单位、写答语。

**学生活动：** 读题找"一份和几份"，列乘法算式求积。

**设计意图：** 把口诀运用于实际问题，强化"几个几"的乘法模型，规范解题步骤，体现数学应用价值。

**环节五 课堂小结与作业（约 3 分钟）**

**教师活动：** 师：这节课你有什么收获？生：知道了几个几相加可以用乘法表示；会编 2 到 6 的乘法口诀；会用口诀求积。师：口诀是乘法计算的好帮手，要熟记会用。我们来玩口诀接龙——积是 24 的口诀有哪些？生：三八二十四，四六二十四。师：课后作业——(1) 把 2-6 的乘法口诀背给家长听；(2) 找一找生活中"几个几"的问题，用乘法算一算。

**学生活动：** 小结收获，参与口诀接龙，明确作业。

**设计意图：** 梳理收获，用接龙游戏点燃兴趣，作业指向口诀记忆与生活应用。

**板书设计**

    表内乘法（一）：2-6 的乘法口诀

  3 个 5 相加：5+5+5=15
  乘法：3 × 5 = 15    读作：三乘五等于十五
        因数 乘号 因数  积

  2：一二得二  二二得四
  3：一三得三  二三得六  三三得九
  4：一四得四  二四得八  三四十二  四四十六
  5：一五得五  二五一十  三五十五  四五二十  五五二十五
  6：一六得六  二六十二  三六十八  四六二十四  五六三十  六六三十六

**教学反思要点**

1. 学生编口诀的热情很高，但要防止"编得快、用不来"，需要多安排用口诀求积的练习。
2. 易混口诀（如三六十八与四六二十四）要引导学生用乘法意义去验证，从根上纠错，不搞机械罚抄。
3. 改写算式时部分学生把 3+3+5 也改写成乘法，要强化"加数必须相同"的前提条件。
4. 对口令时部分学生只会顺着背，单独抽问反应慢，课后需坚持随机抽卡训练。
5. 解决问题时漏写单位、不写答语较常见，要培养"看清一份和几份、写完整答语"的良好习惯。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版二年级上册"表内乘法（一）：2-6 的乘法口诀"。这一课是乘法学习的起始课，是学生第一次认识乘法、第一次接触乘法口诀，在小学数学计算教学中占有重要地位。教材先通过具体情境帮助学生理解乘法的意义，认识乘号和各部分名称，再让学生在摆一摆、数一数的活动中经历编制 2-6 的乘法口诀的全过程。学会这些口诀，将为后续学习 7-9 的乘法口诀、表内除法以及两位数乘一位数打下坚实的基础。

**二、说学情**

二年级学生已经比较熟练地掌握了加法和连加的计算，知道相同加数连加的结果，这些都是学习乘法的基础。他们的思维仍以具体形象为主，乐于动手操作，但抽象概括能力较弱。大多数孩子背过一些乘法口诀，但往往是死记硬背，不理解口诀的来源和意义。所以，本课要让学生真正经历"几个几相加改写为乘法、由算式编出口诀"的过程，让口诀"活"在他们心中。

**三、说教学目标**

结合课标和教材，我确定了这样的目标：在知识技能方面，理解乘法的意义，认识乘号，能读写乘法算式，能按顺序熟记 2-6 的乘法口诀并用口诀求积；在过程方法方面，经历摆一摆、写一写、编一编的过程，发现口诀的编排规律，发展抽象概括能力；在情感态度方面，在编口诀、对口令的活动中感受乘法的简洁，体验成功乐趣。核心素养上，我重点落在数感、运算能力和模型意识的培养。

**四、说教学重难点**

本课的重点是理解乘法的意义，熟记 2-6 的乘法口诀并能灵活用口诀求积；难点有两个：一是把"几个几相加"正确改写成乘法算式，二是辨析易混口诀，以及在解决实际问题时准确判断"一份有几个、有几份"。突破难点要靠充分的摆学具活动和针对性辨析练习。

**五、说教法学法**

本课采用情境教学法、动手操作法、儿歌记忆法和游戏练习法。教师借助圆片演示和课件，引导学生在操作中理解；学生通过摆一摆、编一编、背一背、玩一玩，在活动中建构乘法的意义，熟记口诀。

**六、说教学过程**

本课 40 分钟，我安排了五个环节。第一环节是情境导入，约 4 分钟，用"每行 5 人、3 行踢毽子"的情境列出连加算式，让学生体会乘法的必要性。第二环节是探究新知，约 19 分钟，分三步：先认识乘法，通过摆圆片理解 3 个 5 可以写作 3×5，明确只有加数相同的连加才能改写；再编制 2、3、4 的口诀，让学生经历"由算式想口诀"的全过程并观察规律；最后编制 5、6 的口诀，通过同桌对口令和辨析易混口诀强化记忆。第三环节是巩固练习，约 9 分钟，安排了对口令、用口诀求积、改写算式三个层次的练习。第四环节是拓展应用，约 5 分钟，用彩笔盒和乒乓球拍的情境解决实际问题，规范解题步骤。第五环节是课堂小结与作业，约 3 分钟，用口诀接龙收束全课，布置背诵和寻找生活中的乘法两项作业。

在口诀的编制上，我坚持让孩子当"小小编口诀家"。先由我带着编 2 的口诀，示范"口诀前半句说因数，后半句说积"的编制方法；然后让孩子仿照编 3、4 的口诀；最后独立编 5、6 的口诀。这样由扶到放，每一句口诀都从"几个几"中生长出来，孩子真正理解口诀的含义，而不是死背文字。编完口诀，我引导孩子观察积的变化规律——从上往下，相邻两句的积依次加同一个数。这个规律能帮孩子顺藤摸瓜，记住整列口诀。对于易混口诀，比如三六十八和四六二十四，我不让孩子机械罚抄，而是引导他们用乘法意义去验证：3 个 6 相加是 18，4 个 6 相加是 24，从根上把口诀分辨清楚。课堂上的对口令、口诀接龙等游戏，则让记忆的过程变得轻松有趣，孩子们在玩中就不知不觉记熟了口诀。

**七、说板书设计**

我的板书左侧是乘法的意义，用 5+5+5=15 引出 3×5=15，标出因数、乘号、积，直观展示"几个几"与乘法的对应；右侧按 2 到 6 的顺序列出全部口诀。整个板书既呈现了知识的产生过程，又完整呈现了记忆对象，便于学生对照复习。

**八、说教学反思与效果预测**

本课以操作和游戏为主线，预计学生兴趣浓、参与度高。乘法的意义是理解的关键，通过圆片操作应该能较好落实；口诀的记忆是长期任务，课上只能初步完成，课后需要坚持对口令训练。易混口诀的辨析可能还需要在后续课时中反复强化。总体来看，学生能够理解乘法的意义、熟练运用 2-6 的乘法口诀求积，为后续学习奠定良好基础。

我对本课效果的预期是：孩子们通过摆圆片、编口诀、对口令，能够真正理解"几个几相加可以用乘法"，记住 2-6 的 21 句口诀，并会用口诀求积。当然，口诀的熟练运用不是一节课就能完成的，需要在今后的每一节课前坚持三分钟对口令，把口诀变成自动化的反应。个别孩子在从加法到乘法的抽象上可能还需要时间，我会允许他们借助圆片摆一摆、数一数，逐步过渡。我相信，只要孩子理解了乘法的意义，口诀就再也不是枯燥的背诵，而是他们解决生活问题的好帮手。我的说课到此结束，谢谢大家！`}},is={"小学|三年级|数学|分数的初步认识":{plan:`**教学基本信息**

课题：分数的初步认识
教材版本：人教版小学数学三年级上册第八单元
年级：三年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学三年级学生

**教学目标**

1. 在分月饼、折纸、涂色等具体活动中，理解"平均分"是产生分数的前提，知道只有平均分才能用分数表示；初步认识几分之一和几分之几，会正确读写分数，能借助图形说清一个分数所表示的意思，发展量感与数感。
2. 知道分数各部分的名称，理解分数线、分母、分子各自表示的含义，能用"分母管份数、分子管取数"的口诀解释分数，发展几何直观与推理意识。
3. 会比较同分母分数以及分子都是 1 的分数的大小，能在生活情境中发现并描述简单的分数问题，感受分数与生活的密切联系，初步建立模型意识。

**教学重难点**

重点：理解平均分的含义，认识分数的意义，会正确读写简单的分数。
难点：理解分子、分母表示的意思，真正理解分数是"把整体平均分后取其中的几份"。

**教学准备**

课件：分月饼情境动画、折纸过程演示、四层练习题卡。
教具：磁性大圆片、大正方形纸片、月饼图片。
学具：每人一张圆形纸片、一张正方形纸片、一张长方形纸片，彩笔。
任务单：三份（任务一折一折写一写、任务二涂一涂说一说、任务三比一比填一填）。

**教学过程**

**环节一 情境导入：分月饼引发冲突（约 5 分钟）**

教师活动：
（课件出示中秋节分月饼的画面）
师：中秋节的晚上，妈妈把一块月饼平均分给两个孩子，每个孩子能分到多少？
生：每人一半。
师："一半"用我们学过的 1、2、3 这样的整数能表示吗？
生：不能，它比 1 小，又比 0 大。
师：看来，要表示"一半"这样的量，我们需要一种新的数，它就叫作"分数"。今天我们一起来认识分数。（板书课题）
师：妈妈分月饼的时候特别强调"平均分"三个字，谁来说说"平均分"是什么意思？
生：就是把月饼分得一样多。
师：要是妈妈一刀切下去，两块月饼一大一小，大的那一块还能说是"一半"吗？
生：不能，因为没有平均分，大的那块当然不是一半。

学生活动：观察分月饼情境图，同桌互相说一说"一半"的意思；动手把圆形纸片折一折，表示出"一半"，并用手指出其中的半圆。

设计意图：以贴近学生生活的"分月饼"切入，制造"一半没法用整数表示"的认知冲突，唤醒学生已有的生活经验，同时把"平均分"这个前提条件放到最显眼的位置，为全课学习定下基调。让学生动手折出"一半"，使他们的操作从一开始就指向分数的本质。

**环节二 探究新知：折一折、涂一涂认识分数（约 18 分钟）**

1. 认识二分之一
教师活动：
师：我们把这张圆形纸片平均分成 2 份，其中的每一份都是它的二分之一，写作 1/2，读作二分之一。请同学们伸出食指，跟着老师一起书空：先画中间的横线，它表示平均分；再写下面的 2，表示平均分成 2 份；最后写上面的 1，表示取了其中的 1 份。
生：（跟随书空，再独立写一遍）
师：这一份是它的 1/2，那另外一份呢？
生：另外一份也是它的 1/2。
师：谁能用自己的话说一说，1/2 表示什么意思？
生：把一个物体平均分成 2 份，取其中的 1 份，就是它的二分之一。

2. 认识四分之一和八分之一
教师活动：
师：请拿出一张正方形纸片，动脑折一折，表示出它的 1/4，并把你折出的 1/4 涂上颜色。
（学生操作，教师巡视，收集不同的折法贴到黑板上）
师：谁来介绍一下自己的折法？
生：我把正方形对折一次，再对折一次，就平均分成了 4 份，其中一份是它的 1/4。
师：大家的折法都不一样，为什么都能表示 1/4？
生：因为不管怎么折，都是把正方形平均分成了 4 份，取其中的 1 份。
师：如果继续对折一次呢？
生：平均分成 8 份，每份是它的 1/8。
师：请把折出的 1/2、1/4、1/8 三张纸片放在一起比一比，你发现了什么？
生：平均分的份数越多，每一份就越小。
师：所以 1/2 和 1/4 相比，哪个大？
生：1/2 大，因为它只分成 2 份，每一份就大。

3. 认识几分之几
教师活动：
师：请拿出长方形纸片，把它平均分成 5 份，涂出其中的 3 份。涂色部分是它的几分之几？
生：是它的五分之三，写作 3/5。
师：3/5 里面有几个 1/5？
生：3 个 1/5。
师：那 4/7 里面有几个 1/7？
生：4 个 1/7。
师：说得好！几分之几，就是由几个几分之一组成的，2/4 里有 2 个 1/4，4/7 里有 4 个 1/7。

4. 认识分数各部分的名称
教师活动：
师：（指着 3/5）这个分数由三部分组成：中间这一横线叫分数线，表示平均分；下面的 5 叫分母，表示平均分成的份数；上面的 3 叫分子，表示取的份数。记住一句口诀：分母管份数，分子管取数。
生：（齐读口诀两遍）
师：谁来用这句口诀说说 2/4 中分母和分子各表示什么意思？
生：分母 4 表示平均分成 4 份，分子 2 表示取了其中的 2 份。

学生活动：独立折纸、涂色、写分数；同桌互相检查书写的分数是否规范；小组内交流不同的折法，说清各种折法的共同点；在任务单上标注分数各部分的名称。

设计意图：以"折一折、涂一涂、说一说"为主线，让学生在手脑并用的操作中逐步抽象出分数的意义。多方法折 1/4 的设计，引导学生关注"平均分成 4 份、取 1 份"这一本质，排除折法本身的干扰。将 1/2、1/4、1/8 放在一起对比，让"份数越多每份越小"的规律看得见、摸得着。由取 1 份扩展到取几份，自然完成从"几分之一"到"几分之几"的过渡。分数各部分的名称借助直观图形与口诀记忆，降低了理解的难度。

**环节三 巩固练习：想一想、辨一辨（约 7 分钟）**

教师活动：
（课件出示四层练习）
第一题：用分数表示下面各图中的涂色部分。
（1）一个圆平均分成 2 份，涂了 1 份；
（2）一个长方形平均分成 6 份，涂了 5 份；
（3）一个正方形平均分成 9 份，涂了 4 份。
生：（独立完成，指名汇报并说一说是怎么想的）
第二题：判断对错。
（1）把一张长方形纸分成 2 份，每份是它的 1/2。
师：这题为什么是错的？
生：只说了分成 2 份，没有说平均分，两份大小不一样，不能表示 1/2。
（2）3/8 读作"三分之八"。
生：错，应该读作八分之三，读分数要先读分母再读分子。
第三题：在○里填上"＞""＜"或"＝"。
3/8 ○ 1/8　　1/4 ○ 1/2　　1/6 ○ 1/4
生：（先填一填，再说出理由）
师：3/8 和 1/8 怎么比？
生：都是把同一个整体平均分成 8 份，3 份当然比 1 份多，所以 3/8 大。
师：1/4 和 1/2 呢？
生：都把同一个整体平均分，分成 2 份取 1 份，比分成 4 份取 1 份要大，所以 1/2 大。
第四题：填空。
5/6 里面有（　）个 1/6；3/8 里面有 3 个（　）。
生：（独立完成，同桌互相检查）

学生活动：逐题独立完成，同桌互评；判断与比较都要说出理由，说错时由同伴补充纠正，教师适时追问。

设计意图：练习由基础到变式，逐层推进。第一题巩固分数的读写，第二题针对"平均分"和"读法顺序"两个易错点进行辨析，第三题在说理中深化对两类分数大小比较规律的理解，第四题强化"几分之几里有几个几分之一"的结构化认识。每一题都要求学生"说出道理"，把数感与推理意识的培养落到实处。

**环节四 拓展应用：用分数的眼光看生活（约 5 分钟）**

教师活动：
师：分数其实就藏在我们的生活中，你能找一找吗？
（课件出示：一盒月饼共 6 块，已经吃掉 2 块）
师：吃掉 2 块，是吃掉整盒的几分之几？
生：2/6。
师：还剩几分之几？
生：还剩 4/6，也就是还剩 4 块。
师：全班有 40 人，男生有 22 人，男生占全班人数的几分之几？
生：22/40。
师：请你也从身边找一处可以用分数表示的地方，说给同桌听一听。
生：（举例：一节课 40 分钟，我们已经上了 20 分钟，就是上了 1/2；一本书有 100 页，看了 50 页，就是看了它的 1/2……）

学生活动：观察生活情境，说出相应的分数；自主举例，同桌交流，教师选取两到三个例子全班分享。

设计意图：把分数从图形引向真实的数量情境，让学生体会分数描述的是"部分与整体的关系"，在找分数、说分数的过程中感受数学的应用价值，渗透模型意识，也使课堂从图形操作走向生活应用，思维层次进一步提升。

**环节五 课堂小结与作业（约 5 分钟）**

教师活动：
师：这节课我们认识了一位新朋友，它是谁？
生：分数。
师：关于分数，你知道了哪些知识？先跟同桌说一说，再全班交流。
生：分数是由平均分产生的；分数线表示平均分，分母表示平均分成的份数，分子表示取的份数；读分数要先读分母再读分子；平均分的份数越多，每一份就越小。
师：最后考考大家，3/7 里面有几个 1/7？
生：3 个。
（布置作业）
作业一：回家切一个水果，平均分给家人，边分边说出每人吃了几分之几。
作业二：折纸挑战，把一张正方形纸折出 1/2、1/4、1/8，贴在作业本上，并写出对应的分数。

学生活动：同桌互说收获，全班交流；记清作业要求。

设计意图：用"这节课你知道了什么"引导学生自主梳理知识，把零散的活动经验整合成结构化的认识；口头设问再次检验核心概念"3/7 里有几个 1/7"的掌握情况。作业设计关注生活应用与动手实践，让分数的学习延伸到课堂之外，实现课内外的衔接。

**板书设计**

        分数的初步认识
  平均分 ───→ 分数

把一个月饼平均分成 2 份，每份是它的 1/2（二分之一）
把一张正方形纸平均分成 4 份，每份是它的 1/4（四分之一）

分数各部分的名称：
        1 ── 分子（取几份）
       ────　分数线（平均分）
        2 ── 分母（平均分成几份）

口诀：分母管份数，分子管取数
读法：先读分母，再读分子，如 3/8 读作八分之三

大小比较：
  1/2 ＞ 1/4 ＞ 1/8
平均分的份数越多，每一份越小。

**教学反思要点**

1. "平均分"是本课的灵魂，情境导入与判断练习中都要反复追问"是否平均分"，让这一前提条件深入学生内心，防止学生把"分成两份"直接当成"平均分成两份"。
2. 折纸环节要给足时间，尽量多收集不同折法，通过"折法不同、含义相同"的对比，帮助学生抓住分数的本质，而不是记住某一种折法。
3. 读写的规范训练要放在理解之后，先让学生明白分母分子各表示什么，再练习读写，防止机械记忆导致分子分母颠倒。
4. 分数大小比较要始终依托直观图形与折纸经验，切忌过早让学生背诵结论；对误以为 1/4 大于 1/2 的学生，可让其再折一折、比一比，让错误在操作中自己得到纠正。
5. 要关注不同层次的学生：对学有余力的学生可追问"平均分成 16 份取 3 份是多少"，对学习有困难的学生多给涂色、指认、说一说的机会，让每个孩子都在原有基础上有所发展。`,talk:`**一、说教材**

"分数的初步认识"是人教版小学数学三年级上册第八单元的内容，是学生学习分数的起始课。在此之前，学生认识的数都是整数，分数对学生来说是一个全新的领域。这一部分知识既是学生今后学习分数加减法、分数乘除法的基础，也是学生从"整数思维"走向"数系拓展"的第一步，其地位不言而喻。教材从分月饼的生活情境切入，通过折一折、涂一涂、画一画等活动，帮助学生建立几分之一和几分之几的概念，理解平均分的意义，学会正确读写分数。本节课我选取了其中最具生长性的内容，让学生在一系列动手操作中完成对分数的初步建构，为后续学习奠定坚实的认知基础。

**二、说学情**

三年级的学生已经熟练掌握了整数的认识和平均分的分法，在生活中有过"一人一半""四分之一"等零散经验，比如分蛋糕、分水果时都听说过。但是，这些经验大多是模糊的、不完整的，很多学生并不清楚"平均分"是表示分数的前提，也不知道分数各部分的名称和含义，更难以把图形中的一份和分数建立起对应关系。从思维特点来看，三年级学生以具体形象思维为主，喜欢动手操作，但抽象概括能力还比较弱。因此，本课必须依托实物与图形，让学生在动手操作中学习，在直观对比中感悟，逐步把生活经验抽象成数学概念。另外，三年级学生的注意力还不能长时间集中，动手活动容易偏离目标，所以我在每个操作环节前都会提出明确的小任务，让学生带着问题去折、去涂、去说，让每一次动手都指向对分数意义的思考。

**三、说教学目标**

基于对教材的分析和对学情的把握，我确立了三个层面的教学目标。第一，结合分月饼、折纸、涂色等具体情境，理解"平均分"是产生分数的前提，初步认识几分之一和几分之几，会正确读写分数，能结合图形说明分数表示的意义，发展量感与数感。第二，知道分数各部分的名称，理解分数线、分母、分子各自的含义，发展几何直观与推理意识。第三，会比较同分母分数和分子都是 1 的分数的大小，能解决生活中简单的分数问题，感受分数与生活的密切联系，初步建立模型意识。

**四、说教学重难点**

本节课的教学重点是理解平均分的含义，认识分数的意义，会正确读写简单的分数。教学难点是理解分母、分子的含义，真正理解分数表示的是"把整体平均分后取其中的几份"。为了突破难点，我设计了折一折、涂一涂、说一说的系列操作活动，并借助"分母管份数、分子管取数"的口诀帮助学生记忆和理解，让抽象的概念变得形象可感。

**五、说教法学法**

在教法上，我主要采用直观演示法、动手操作法和合作探究法，以"分一分、折一折、涂一涂"为主线组织教学，充分发挥教师的主导作用。在学法上，我引导学生经历"操作、观察、比较、概括"的学习过程，让学生自己折纸、涂色、写分数、说含义，在主动建构中理解分数的意义，真正成为学习的主人。

**六、说教学过程**

我把教学过程设计为五个环节，共计四十分钟。第一环节情境导入，大约五分钟，用"分月饼"的情境引出"一半"不能用整数表示，制造认知冲突，自然揭示课题。第二环节探究新知，大约十八分钟，是本课的核心环节，依次完成认识二分之一、认识四分之一和八分之一、认识几分之几、认识分数各部分的名称四个层次的教学，学生在折折涂涂中逐步理解分数的意义。第三环节巩固练习，大约七分钟，通过用分数表示涂色部分、判断对错、比较大小、填空四类练习，突破平均分和读写顺序等易错点。第四环节拓展应用，大约五分钟，让学生在月饼、班级人数等生活情境中找分数、说分数，体会分数的应用价值。第五环节课堂小结与作业，大约五分钟，引导学生自主梳理收获，布置实践性作业，让学习延伸到课外。

**七、说板书设计**

我的板书以"平均分——分数"为主线，左侧是折纸活动的图示和对应的分数，中间是分数各部分的名称及口诀，右侧是分数大小比较的结论。整个板书结构清晰、重点突出，既完整呈现了知识形成的过程，又便于学生对照回顾和总结，起到了提纲挈领的作用。板书上的图示与分数一一对应，学生在回顾时就能想起折纸涂色的过程，让抽象的知识有了形象的依托。

**八、说教学反思与效果预测**

本节课的设计有三个特点。一是情境真实，从学生熟悉的分月饼入手，让分数在真实需要中自然生长，而不是凭空出现。二是操作充分，学生人人动手折纸、涂色，在操作中感悟平均分与分数的关系。三是结构完整，从几分之一到几分之几，从图形到生活，层层递进、环环相扣。我预计课堂效果良好：大部分学生能够正确读写分数，理解平均分的含义，学会比较分数的大小。少数学生可能对"分子都是 1 的分数，分母越大反而越小"感到困难，我会借助折纸对比和直观演示帮助他们突破。当然，课堂是动态生成的，我也会根据学生的实际反应灵活调整教学节奏，让每个孩子都能在数学学习中获得成功的体验。需要提醒的是，分数读写与大小比较的掌握情况因人而异，我会在课后通过涂色、写分数等小练习了解学生的掌握程度，及时进行个别辅导，确保人人都能迈过分数概念的第一道门槛。`},"小学|三年级|数学|长方形和正方形的周长":{plan:`**教学基本信息**

课题：长方形和正方形的周长
教材版本：人教版小学数学三年级上册第七单元
年级：三年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学三年级学生

**教学目标**

1. 结合生活实际理解周长的含义，知道周长是封闭图形一周的长度，会测量简单图形的周长，发展空间观念与量感。
2. 经历长方形、正方形周长计算方法的探索过程，掌握长方形和正方形的周长公式，能正确运用公式计算周长，体会"先求长加宽的和再乘 2"的简便，发展推理意识。
3. 能灵活运用周长公式解决已知周长求边长、靠墙围篱笆等实际问题，感受数学与生活的密切联系，增强应用意识。

**教学重难点**

重点：理解周长的含义，掌握长方形和正方形周长的计算公式。
难点：周长公式的推导与灵活运用，尤其是逆向求边长和靠墙围篱笆等生活情境中的问题。

**教学准备**

课件：操场跑步情境动画、篱笆示意图、练习题卡。
教具：磁性长方形和正方形卡片、直尺、软尺、细绳。
学具：每人一张长方形卡片、一张正方形卡片，直尺，方格纸。
任务单：两份（任务一量一量算一算、任务二围一围想一想）。

**教学过程**

**环节一 情境导入：沿着操场跑一圈（约 5 分钟）**

教师活动：
（课件出示学校操场跑步的画面）
师：体育课上，老师让同学们沿着操场跑一圈，谁来说说"跑一圈"是什么意思？
生：就是从起点出发，围着操场绕一圈，最后回到起点。
师：这一圈的长短，就是我们数学里说的"周长"。今天我们就来学习周长，重点研究长方形和正方形的周长。（板书课题）
师：想一想，生活中还有哪些地方能用到"一周的长度"？
生：给照片镶一圈边框，边框的总长就是照片的周长；给花坛围一圈栅栏，栅栏的长就是花坛的周长。

学生活动：说一说"跑一圈"的含义；举例说出生活中见到的"一周的长度"；指一指数学书封面的一周。

设计意图：从学生熟悉的"操场跑一圈"入手，直观建立"一周"的表象，再通过照片镶边、花坛围栏等例子丰富对周长的感性认识，让学生带着对"周长"的初步感知进入新知的探究，激发学习兴趣。

**环节二 探究新知：量一量、算一算（约 18 分钟）**

1. 理解周长的含义
教师活动：
师：请用直尺量一量你手中长方形卡片的四条边，再算一算四条边的总长。
（学生动手测量，教师巡视）
师：谁来汇报，你是怎么量的、结果是多少？
生：我把四条边分别量出来，再加起来，一共是 20 厘米。
师：这四条边的总长就是长方形的周长。谁能说一说，什么叫周长？
生：封闭图形一周的长度，就是它的周长。
师：如果图形不是封闭的，比如一条打开的线段，它有周长吗？
生：没有，因为围不成一周。

2. 探索长方形周长的计算方法
教师活动：
师：量得这个长方形的长是 6 厘米，宽是 4 厘米。不用尺子，你能用不同的方法算出它的周长吗？先自己想一想，再在小组里交流。
（学生汇报，教师板书三种方法）
方法一：6＋4＋6＋4＝20（厘米），按顺序把四条边加起来。
方法二：6×2＋4×2＝20（厘米），两条长加两条宽。
方法三：（6＋4）×2＝20（厘米），先算长和宽的和，再乘 2。
师：三种方法都得到 20 厘米。你喜欢哪一种？为什么？
生：我喜欢方法三，因为算起来最快，只要先算长加宽，再乘 2。
师：为什么周长等于长与宽的和乘 2？
生：因为长方形的对边相等，周长里有两条长、两条宽，也就是两个"长加宽"。
师：说得好！所以长方形的周长等于（长＋宽）×2。

3. 探索正方形周长的计算方法
教师活动：
师：这是一张正方形卡片，边长 5 厘米，它的周长是多少？请自己列式算一算。
生：5＋5＋5＋5＝20（厘米）。
师：还可以怎么列式？
生：5×4＝20（厘米），正方形四条边都一样长，周长等于边长乘 4。
师：为什么可以这样算？
生：正方形四条边都相等，所以一条边长乘 4 就是四条边的总和。
师：正方形可以看成特殊的长方形，当长和宽相等时，（长＋宽）×2 就变成了边长×4。请同学们把两个公式记在任务单上。

学生活动：测量并计算长方形的周长；小组交流三种计算方法并比较其联系；独立计算正方形的周长；在任务单上写出两个公式。

设计意图：从"量一量"入手，让学生在动手操作中理解周长的含义；再通过"一题多法"的比较，引导学生发现三种方法的本质联系，概括出（长＋宽）×2 的简便公式，经历从具体到抽象的建模过程。正方形公式则借助长方形公式的特殊化自然迁移而来，体现知识之间的联系。

**环节三 巩固练习：算一算、填一填（约 7 分钟）**

教师活动：
（出示练习题卡）
第一题：计算下面图形的周长。
（1）长方形，长 8 厘米，宽 3 厘米；
（2）正方形，边长 7 分米；
（3）长方形，长 12 米，宽 5 米。
生：（独立列式，指名板演，全班核对）
师：第一题你是怎么算的？
生：（8＋3）×2＝22（厘米）。
第二题：填表。
（1）长方形，长 9 厘米，宽 4 厘米，周长（　）厘米；
（2）长方形，周长 20 厘米，长 6 厘米，宽（　）厘米；
（3）正方形，周长 36 分米，边长（　）分米。
师：第二题第（2）小题，知道周长和长，怎样求宽？
生：先用周长除以 2，得到长加宽的和是 10 厘米，再减去长，宽就是 4 厘米。
师：第（3）小题呢？
生：正方形的边长等于周长除以 4，36÷4＝9（分米）。

学生活动：独立完成计算与填空；小组内互查答案，说清列式的依据；教师抽取典型做法全班交流。

设计意图：第一题巩固长方形和正方形周长公式的直接运用，强化书写格式；第二题引导学生逆向思考，由周长求宽、求边长，体会周长公式的变式应用，发展推理能力。填表题既训练计算，又帮助学生建立"周长、长、宽、边长"之间的联系。

**环节四 拓展应用：围一围篱笆（约 5 分钟）**

教师活动：
（课件出示情境：李大爷用篱笆围一个长 8 米、宽 5 米的长方形菜地）
师：如果一面靠墙（长边靠墙），篱笆至少需要多长？先画一画示意图，再算一算。
生：（画图、列式计算，汇报）
生：长边靠墙，篱笆只需要围两条宽和一条长，所以是 8＋5×2＝18（米）。
师：为什么不能直接用长方形周长公式（8＋5）×2？
生：因为靠墙的那条长边不用围，直接用周长公式就把靠墙的一边也算进去了。
师：如果换成宽边靠墙呢？
生：那就围两条长和一条宽，篱笆长是 5＋8×2＝21（米）。
师：看来解决这类问题，关键要先画图，看清哪几条边需要围，再列式计算。

学生活动：独立画示意图并计算；同桌互相讲解自己的思路；全班交流靠墙问题的两种不同情况。

设计意图：把周长公式放到真实的篱笆情境中灵活运用，让学生在"画一画、算一算、辩一辩"中理解"围一周"与"少围一边"的区别，突破"靠墙直接套公式"的常见错误，体会先画图再计算的良好解题习惯，发展模型意识。

**环节五 课堂小结与作业（约 5 分钟）**

教师活动：
师：通过今天的学习，你知道了哪些知识？
生：封闭图形一周的长度叫周长；长方形周长等于（长＋宽）×2；正方形周长等于边长×4。
师：计算周长时要注意什么？
生：先判断是长方形还是正方形，再选用对应的公式；要记得写单位。
师：生活中哪些地方用到了周长？请举例说一说。
生：量课桌一周的长度，围菜地，镶相框，绕操场跑一圈……
（布置作业）
作业一：量一量家中桌面的长和宽，算一算桌面的周长。
作业二：思考：用 4 个边长 1 厘米的小正方形，你能拼出几种不同的图形？它们的周长一样吗？把你的拼法和结果记录下来。

学生活动：同桌互说收获与注意点；记清作业要求，课后完成实践作业。

设计意图：引导学生回顾周长含义、计算公式和解题注意点，把新知纳入已有的知识结构；作业一将周长测量延伸到家庭生活，作业二以拼图开放题为后续学习埋下伏笔，激发学生继续探究的兴趣。

**板书设计**

          长方形和正方形的周长

封闭图形一周的长度，叫作周长。

长方形的周长 =（长＋宽）×2
  例：长 6 厘米，宽 4 厘米
      （6＋4）×2＝20（厘米）

正方形的周长 = 边长×4
  例：边长 5 厘米
      5×4＝20（厘米）

变式：
  宽 = 周长÷2－长
  边长 = 周长÷4

靠墙围篱笆：先画图，再计算

**教学反思要点**

1. 周长概念的建立要依托真实的"围一周"体验，让学生摸一摸、量一量，避免只记定义不理解，为公式学习打牢基础。
2. 三种方法的教学要重在沟通联系，通过对比让学生明白"两个长加两个宽"与"长加宽的和乘 2"本质相同，防止学生只记公式不理解算理。
3. 靠墙围篱笆是典型易错点，必须引导学生先画示意图、标出需要围的边，再列式计算，把"看图审题"的习惯落实到每一道题中。
4. 计算时易漏写单位或误用面积单位，要在板书和反馈中反复示范"厘米""分米""米"的正确使用。
5. 分层设计练习，基础层练直接套公式，进一层练逆向求长宽边长，提高层练拼图周长变化，满足不同学生的需要。`,talk:`**一、说教材**

"长方形和正方形的周长"是人教版小学数学三年级上册第七单元的内容。本单元是学生第一次系统学习周长，在此之前，学生已经认识了长方形、正方形的基本特征，知道了它们边和角的特点，这为学习周长打下了基础。本课内容既是周长概念的深化和应用，也是后续学习面积、探索其他平面图形周长的基础，在整个图形与几何领域起着承上启下的作用。教材从生活情境引入周长的概念，再通过测量、计算等操作活动，引导学生探索长方形和正方形的周长公式，最后把知识应用到篱笆、相框等实际问题中，体现了"概念、公式、应用"三个层次。这样的编排符合学生从直观到抽象的认知规律，也让我在设计教学时能够紧扣三个层次层层推进。

**二、说学情**

三年级的学生已经能直观辨认长方形和正方形，知道它们对边相等、四条边都相等的基本特征，也具备了一定的测量能力。但"周长"是一个抽象的概念，学生容易把它和面积混淆，也容易只记住公式而不理解算理。同时，学生的生活经验中并不缺少"一周的长度"，比如绕操场跑步、围栅栏，只是缺少把生活经验数学化的过程。因此，本课需要从学生的生活经验出发，通过动手测量、动手计算，帮助学生建立周长的表象，理解公式的由来。此外，学生在实际测量中容易出现尺子摆放不准、数据记录不完整等问题，需要在活动中加以指导，让操作真正服务于概念的理解。

**三、说教学目标**

根据课标要求和教材内容，我确立了三个层面的教学目标。第一，结合生活实际理解周长的含义，知道周长是封闭图形一周的长度，会测量简单图形的周长，发展空间观念与量感。第二，经历周长计算方法探索的过程，掌握长方形和正方形的周长公式，能正确计算周长，发展推理意识。第三，能灵活运用周长公式解决已知周长求边长、靠墙围篱笆等实际问题，感受数学与生活的联系，增强应用意识。这样的目标既有知识技能的要求，也关注了学生动手能力和数学思维的培养，体现了知识、能力与素养的同步发展。

**四、说教学重难点**

本课的教学重点是理解周长的含义，掌握长方形和正方形的周长计算公式。教学难点是周长公式的推导与灵活运用，特别是逆向求边长和靠墙围篱笆等生活情境问题。为了突破难点，我让学生经历从测量到计算、从多法到优化的完整过程，并在靠墙问题中借助画图帮助学生理解"少围一边"的道理。同时在练习中安排填表等逆向问题，帮助学生灵活把握周长、长、宽、边长之间的数量关系。

**五、说教法学法**

在教法上，我采用动手操作法、自主探究法和合作交流法，辅以讲练结合，让学生在操作中感悟、在应用中巩固。在学法上，我引导学生经历"围一围、量一量、算一算"的过程，在独立思考的基础上开展小组交流，比较不同算法的联系，主动建构周长公式，培养动手实践与合作探究的能力。我还会鼓励学生用自己的语言复述公式的由来，在说的过程中进一步理解算理，让公式真正"长"在学生的脑子里。

**六、说教学过程**

我把教学过程设计为五个环节，共四十分钟。第一环节情境导入，约五分钟，用操场跑步情境唤起学生对"一周"的感知，引出周长的概念。第二环节探究新知，约十八分钟，是本课的核心。先让学生量一量长方形四条边，理解周长的含义，再通过"一题多法"探索长方形的三种计算方法，比较发现（长＋宽）×2 最简便，然后迁移得出正方形周长等于边长乘 4，帮助学生从算理上理解公式。第三环节巩固练习，约七分钟，通过直接计算和填表题，既巩固公式又训练逆向思维。第四环节拓展应用，约五分钟，用靠墙围篱笆的问题，让学生画图、辨析、计算，突破易错点。第五环节课堂小结与作业，约五分钟，引导学生梳理知识，布置测量家中物体周长的实践作业。整个教学过程围绕"周长是什么、周长怎么算、周长怎么用"三个问题展开，环环相扣，逐步深入，让学生的认识从具体走向抽象、从模仿走向创造。

**七、说板书设计**

我的板书以"周长"为核心词展开，左边是周长的定义，中间是长方形和正方形的周长公式及例题，右边是逆向变式和靠墙问题的解题策略。整个板书层次清楚、公式醒目，既呈现了知识的生成过程，又为学生提供了解决问题的工具，便于学生课后对照复习。

**八、说教学反思与效果预测**

本课的设计有三个突出的地方。一是重视操作体验，学生亲自测量、亲自计算，周长的概念在动手中建立，而不是靠死记硬背。二是重视算法沟通，通过三种方法的对比，让学生真正理解"为什么用（长＋宽）×2"，做到知其然更知其所以然。三是重视生活应用，靠墙围篱笆的问题让学生体会数学的实用价值。我预计大部分学生能正确掌握公式并解决基础问题，部分学生在逆向求边长时可能还需要借助图形帮助思考，我会通过画图示范和分层练习给予支持。课堂中我也会根据学生的生成情况灵活调整，力求让每一位学生都在思维上有所发展。同时我也要提醒自己，周长的练习要适量适度，避免机械重复，应多设计一些联系生活实际的情境，让学生感受到数学就在身边，真正爱上学数学。`},"小学|四年级|数学|角的度量":{plan:`**教学基本信息**

课题：角的度量
教材版本：人教版小学数学四年级上册第三单元
年级：四年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学四年级学生

**教学目标**

1. 认识量角器，知道角的计量单位是"度"，用符号"°"表示，知道 1°角的由来，理解角的大小与两边叉开的大小有关、与边的长短无关，发展空间观念与量感。
2. 会用量角器正确量角的度数，会用量角器画指定度数的角，掌握"对点、对边、看边、读数"的操作要领，培养动手能力与严谨细致的数学学习习惯。
3. 能正确区分锐角、直角、钝角并说出它们的度数范围，感受角的度量在生活中的应用，发展应用意识。

**教学重难点**

重点：认识量角器，会正确量角、画角。
难点：量角器上内圈刻度与外圈刻度的区分，以及量角时正确对点、对边。

**教学准备**

课件：量角器放大图、量角方法演示动画、练习题卡。
教具：活动角模型、大号磁性量角器、三角板。
学具：每人一个量角器、一张练习卡、三角板、活动角。
任务单：两份（任务一认一认量一量、任务二画一画分一分）。

**教学过程**

**环节一 情境导入：比一比谁的角度大（约 5 分钟）**

教师活动：
（课件出示红领巾上的角和滑滑梯的角的对比图）
师：这两个角，哪个大？哪个小？
生：滑滑梯的角大，红领巾的角小。
师：大多少呢？能准确说出它有多大吗？
生：说不出来，只能说大概。
师：要准确知道一个角有多大，我们就需要"度量"。测量长度有尺子，测量角度就要用到今天的新朋友——量角器。这节课我们一起学习角的度量。（板书课题）
师：（拿出活动角）老师把角的边拉长，角变大了吗？
生：没有，角的大小没有变。
师：那我把两边叉开大一点呢？
生：变大了，角的大小和两边叉开的程度有关。

学生活动：观察两个角，比较大小；动手拉一拉活动角，感受角的大小与叉开程度有关、与边的长短无关。

设计意图：由"比大小"引出"到底有多大"的度量需求，制造认知冲突，自然引出量角器。借助活动角的操作，让学生在动手之前先建立"角的大小看叉开的程度"的正确观念，为量角时排除边的长短干扰做好准备。

**环节二 探究新知：认一认、量一量、画一画（约 18 分钟）**

1. 认识角的计量单位
教师活动：
师：计量角的单位是"度"，用符号"°"表示。人们把半圆平均分成 180 份，每一份所对的角就是 1 度的角，记作 1°。
（课件演示半圆平均分 180 份的过程）
师：一个半圆平均分成 180 份，那 2 份呢？
生：2 份就是 2°。
师：量角器就是把这样的半圆刻度做成了测量工具。

2. 认识量角器
教师活动：
（出示量角器放大图）
师：请大家拿出量角器，仔细观察，说一说你发现了什么？
生：它是半圆形的，上面有很多刻度线。
师：量角器上有三个重要的部分：中心点，是量角器半圆的圆心位置；0°刻度线，左右各有一条，是读数的起点；还有内圈刻度和外圈刻度，内圈从右往左读，外圈从左往右读，一圈都是 0°到 180°。
生：（跟着老师的介绍，在量角器上指认中心点、0°刻度线、内圈刻度、外圈刻度）

3. 用量角器量角（四步法）
教师活动：
（课件出示一个角）
师：量角有个四步法，请听清楚。第一步对点，量角器的中心点对准角的顶点；第二步对边，角的一条边与 0°刻度线重合；第三步看边，看角的另一条边落在哪个刻度上；第四步读数，从 0°刻度线那边开始数起，对准内圈 0°就读内圈刻度，对准外圈 0°就读外圈刻度。
（教师示范量一个 60°的角）
师：刚才我量的角是多少度？
生：60°。
师：如果角的一条边对准的是外圈 0°，读数是看内圈还是外圈？
生：看外圈，从 0 开始数起，跟哪条 0°刻度线重合，就读哪一圈。
师：同桌两人互相量一量任务单上的角，边量边说四步法。
（学生操作，教师巡视指导）

4. 用量角器画指定度数的角（三步法）
教师活动：
师：会量角，也要会画角。请画一个 60°的角。三步法：第一步，画一条射线，把量角器的中心点对准射线的端点，0°刻度线与射线重合；第二步，在量角器 60°的刻度线处点一个点；第三步，以射线的端点为端点，经过这个点再画一条射线，标上 60°。
（教师示范，学生独立画角）
师：请同桌互相检查，画出的角是不是 60°。
生：（互相用工具验证）

学生活动：观察量角器，指认各部分名称；跟随教师示范，用四步法独立量角；按三步法独立画角；同桌互相检查和纠正。

设计意图：从 1°角的由来讲起，让学生理解度是度量角的标准单位；认识量角器时先观察再归纳，突出中心点、0°刻度线、内外圈刻度三个关键；量角采用"对点、对边、看边、读数"四步法，教师示范后学生人人操作，边量边说，把操作要领内化为技能。内外圈刻度的区分是本课难点，通过"跟哪条 0°刻度线重合就读哪一圈"和"先估后量"的策略帮助学生突破。

**环节三 巩固练习：量角小医生（约 7 分钟）**

教师活动：
（出示练习题卡）
第一题：用量角器量出下面各角的度数，并写出结果。
（1）∠A，开口向右；（2）∠B，开口向左；（3）∠C，大于 90°。
生：（独立测量，指名汇报）
师：量 ∠C 之前，先估一估它是锐角还是钝角？
生：看起来比直角大，应该是钝角。
师：读出来的结果和估计的吻合吗？
生：吻合，是 120°。
第二题：下面的测量方法对吗？对的打"√"，错的打"×"并说明理由。
（1）角的顶点没有对准中心点；
（2）角的一边与 0°刻度线重合了，另一边对着内圈 40°就读 40°；
（3）边延长了，就说角变大了。
生：（逐题判断并说理）
师：第（2）题要注意什么？
生：先看这条边对准的是内圈 0°还是外圈 0°，对准内圈 0°才读内圈刻度。
第三题：画一个 100°的角。
生：（独立画角，同桌互查）

学生活动：独立量角、判断、画角；扮演"量角小医生"互相找错、纠错，规范操作要领。

设计意图：第一题安排不同开口方向、不同大小的角，训练读数的灵活性，并运用"先估后量"策略自我检查；第二题针对顶点未对齐、内外圈读错、误认为边延长角变大等常见错误进行辨析，把易错点变成教学资源；第三题巩固画角技能。整个环节以"量角小医生"的活动形式展开，让学生在找错、纠错中把操作要领内化为严谨的习惯。

**环节四 拓展应用：角的分类与生活中的角（约 5 分钟）**

教师活动：
师：把学过的角按大小分分类，可以分成哪几类？
生：锐角、直角、钝角。
师：它们的范围分别是多少？
生：锐角大于 0°小于 90°，直角等于 90°，钝角大于 90°小于 180°。
（课件出示钟面）
师：钟面上 3 时整，时针和分针所成的角是多少度？
生：90°，是直角。
师：2 时整呢？
生：60°，是锐角。
师：请你在教室里找一找，哪些地方有直角？哪些地方有锐角和钝角？
生：黑板角是直角，打开的剪刀是锐角，钟面上的角有时是钝角……

学生活动：回顾角的分类并说出范围；观察钟面指针夹角；在教室里寻找各种角。

设计意图：把量角与角的分类联系起来，让学生带着"这是哪一类角"的眼光去测量和观察，实现知识的前后贯通。钟面角和生活寻角活动，让学生体会到角度量就在身边，发展应用意识与几何直观。

**环节五 课堂小结与作业（约 5 分钟）**

教师活动：
师：这节课你有什么收获？先自己想一想，再和同桌说一说。
生：认识了量角器，知道 1°是多大；学会了量角四步法：对点、对边、看边、读数；还会画角了。
师：量角时最容易出错的是什么？
生：内外圈读错，要记住从 0°刻度线那边数起。
师：角的大小跟什么有关，跟什么无关？
生：跟两边叉开的大小有关，跟边的长短无关。
（布置作业）
作业一：量一量三角板中各个角的度数，记录下来。
作业二：观察家中的钟面，选择两个时刻，量一量时针与分针所成的角，并判断它是什么角。

学生活动：同桌互说收获与易错点；记清作业要求。

设计意图：用"收获"和"易错点"两个问题引导学生回顾本课的核心知识与操作要点，强化四步法和内外圈读数的记忆。作业延伸到三角板和钟面，让学生在熟悉的生活实物中继续练习量角，巩固技能。

**板书设计**

            角的度量
计量单位：度（°）
把半圆平均分成 180 份，每份是 1°

量角四步法：
  对点 → 对边 → 看边 → 读数
  （从 0°刻度线那边数起）

角的大小与两边叉开的大小有关，
与边的长短无关。

角的分类：
  锐角：大于 0°小于 90°
  直角：等于 90°
  钝角：大于 90°小于 180°

画角三步法：画射线 → 点刻度点 → 连射线

**教学反思要点**

1. 内外圈刻度的区分是最大的难点，教学中要坚持"跟哪条 0°刻度线重合就读哪一圈"的判断方法，并配合"先估后量"加以验证，避免死记。
2. 操作示范要放慢、要放大，用大号磁性量角器配合课件演示，让每个学生都看清对点、对边、看边、读数的全过程。
3. 量角练习的图形要丰富，安排开口方向不同、内圈外圈读数不同的角，防止学生形成机械模仿。
4. 对"角的大小与边的长短无关"这一易错点，要通过活动角的演示和判断题反复强化，让学生从经验上真正认同。
5. 以"量角小医生"互查互纠的形式组织练习，既调动兴趣，又让学生在纠错中规范操作，培养严谨的学习习惯。`,talk:`**一、说教材**

"角的度量"是人教版小学数学四年级上册第三单元的内容，属于图形与几何领域。在此之前，学生已经认识了角，知道了角的各部分名称，会区分锐角、直角和钝角，但还停留在直观感知的水平上。本课要引导学生学会用量角器度量角的大小，并会用量角器画指定度数的角，这是学生第一次接触角度的精确测量，是培养学生操作能力和空间观念的重要内容，也为后续学习角的分类、三角形内角和、角的运算等知识奠定了工具基础。教材通过比较角的大小引入度量需求，逐步认识量角器，掌握量角和画角的方法，层次十分清楚。

**二、说学情**

四年级的学生已经具有了一定的观察和动手能力，对角有直观的认识，生活中也接触过"角度"这个词，比如滑滑梯、红领巾等。但是，学生没有使用过量角器，对"度"这个计量单位缺乏感知，特别是量角器上内圈和外圈两套刻度，很容易读错。从心理特点来看，四年级学生好奇心强、喜欢动手，但操作往往不够规范，注意力也容易在细节上分散。因此，本课需要依靠直观演示和充分的动手操作，把操作要领一步一步落到实处。考虑到学生之间动手能力的差异，我会多安排同桌互助和小组交流，让操作熟练的学生带动生疏的学生，在互帮互学中共同进步。

**三、说教学目标**

我确定了三个层面的教学目标。第一，认识量角器，知道角的计量单位是"度"，用符号"°"表示，理解角的大小与两边叉开的大小有关、与边的长短无关，发展空间观念与量感。第二，会用量角器正确量角、画角，掌握操作要领，培养动手能力和严谨细致的学习习惯。第三，能正确区分锐角、直角、钝角并说出度数范围，体会角的度量在生活中的应用。三个目标从认识工具到运用工具再到联系生活，层层递进，既关注操作技能的培养，也重视空间观念和严谨学习习惯的养成。

**四、说教学重难点**

本课的教学重点是认识量角器，会正确量角、画角。教学难点是量角器上内圈刻度与外圈刻度的区分，以及量角时正确对点、对边。为了突破难点，我一方面用放大版的量角器课件让学生先看清内外圈刻度的排列规律，另一方面采用"先估后量"的策略，量角之前先判断是锐角还是钝角，读完之后对照检查，双管齐下降低读错的风险。此外，量角前让学生先估一估度数，也有利于培养量感，让精确测量与合理估计相互印证。

**五、说教法学法**

在教法上，我主要采用观察发现、动手操作、对比纠错和小组互助的方法。在学法上，引导学生经历"观察、操作、归纳、运用"的过程，让学生在看一看、量一量、画一画中掌握量角的方法，在互相找错中规范自己的操作，真正成为学习的主人。教学中我还会特别注意示范的规范性，教师的每一次操作都是学生模仿的样本，只有自己做到对点准确、对边重合，才能给学生以正确的引领。

**六、说教学过程**

我的教学过程共五个环节，四十分钟。第一环节情境导入，约五分钟，通过比较红领巾和滑滑梯的角的大小，引出"角到底有多大"的度量需求，并用活动角帮助学生建立"角的大小看叉开程度"的观念。第二环节探究新知，约十八分钟，是本课的重点。先认识角的单位"度"和量角器的结构，再学习量角的四步法，教师示范、学生操作，然后学习画角的三步法，人人动手画角。第三环节巩固练习，约七分钟，通过量角、判断纠错、画角三道题，特别是"量角小医生"互查互纠的形式，突破易错点。第四环节拓展应用，约五分钟，把角分类与量角结合起来，在钟面和教室里找角、辨角。第五环节课堂小结与作业，约五分钟，梳理收获，布置测量三角板和钟面角的实践作业。整个设计由认识工具到使用工具，再到运用工具解决问题，层次分明；每一个环节都让学生动手做、开口说，把操作技能和数学思考融合在一起。

**七、说板书设计**

我的板书以"角的度量"为中心，包含四个板块：一是计量单位"度"，二是量角四步法，三是角的大小与什么有关，四是角的分类。板书图文结合、层次分明，把操作要领和分类标准醒目地呈现出来，便于学生随时对照和回顾。特别是四步法和画角三步法的板书，学生在操作遇到困难时抬眼就能看到，起到了助学支架的作用。

**八、说教学反思与效果预测**

本课的设计有三个特色。第一，重视直观，用量角器放大图和磁性教具演示，让每个学生都能看清操作细节。第二，重视纠错，通过"量角小医生"活动把常见错误暴露出来，在互查互纠中规范操作。第三，重视策略，用"先估后量"帮助学生自我检验读数是否正确。我预计课堂效果比较理想，大多数学生能在教师示范后正确量角和画角，个别学生可能在外圈读数时出现偏差，我会通过个别指导和同伴互助帮助其改进。同时，我会关注学生的操作细节，及时纠正不规范的动作，让每一个学生都在严谨的操作中体验数学的精确之美。课后我还打算提供一些生活场景的角度测量活动，比如测量教室门框、椅子扶手的角度，让学生在真实情境中巩固技能，也让我进一步了解学生对内圈外圈读数的掌握情况，以便进行有针对性的辅导。`},"小学|五年级|数学|简易方程":{plan:`**教学基本信息**

课题：简易方程
教材版本：人教版小学数学五年级上册第五单元
年级：五年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学五年级学生

**教学目标**

1. 结合具体情境理解用字母表示数的意义，会用字母表示运算定律、计算公式和简单的数量关系，掌握数与字母相乘的书写规则，发展抽象能力与符号意识。
2. 理解方程的意义，能正确判断一个式子是不是方程；借助天平理解等式的性质，能运用等式的性质解形如 x＋a＝b、x－a＝b、ax＝b、x÷a＝b 的简易方程，并养成自觉检验的习惯，发展推理意识。
3. 能找出实际问题中的等量关系，用列方程的方法解决简单的实际问题，体会方程是刻画数量关系的重要工具，发展模型意识与代数思维。

**教学重难点**

重点：理解方程的意义，运用等式的性质正确解简易方程。
难点：理解等式的性质，根据实际问题找准等量关系并列方程。

**教学准备**

课件：天平演示动画、方程与等式分类卡片、练习题卡。
教具：天平演示教具或模拟课件、砝码图片。
学具：方程卡片、练习纸。
任务单：两份（任务一辨一辨、任务二解一解）。

**教学过程**

**环节一 情境导入：神奇的天平（约 5 分钟）**

教师活动：
（课件出示一架平衡的天平：左边 1 个苹果，右边 2 个砝码）
师：天平的左右两边一样重，天平就保持平衡。谁能用一个式子表示这种平衡关系？
生：一个苹果的重量等于 2 个砝码的重量。
师：如果用字母 x 表示一个苹果的重量，天平平衡可以怎么表示？
生：x＝2。
师：真好！用字母 x 来表示不知道的数，这个式子就清楚地描述了天平两边的相等关系。今天我们就来学习用字母表示数和方程。（板书课题）
师：想一想，生活中有哪些不知道的数？可以怎么表示？
生：一袋大米多重不知道，可以用字母表示；老师要买的铅笔有多少支不知道，也可以用字母表示。

学生活动：观察天平，说出平衡关系；尝试用字母表示未知数；举例说出生活中可以用字母表示的数量。

设计意图：借助天平这一直观模型，让学生体会"相等"与"未知数"两个核心要素，为建立方程概念提供直观支撑。由具体的天平平衡引出用字母表示数，让学生初步感受字母符号简洁而精确的表达功能，激发学习兴趣。

**环节二 探究新知：用字母表示数、认识方程、解方程（约 18 分钟）**

1. 用字母表示数和数量关系
教师活动：
师：买 3 支铅笔一共花了 a 元，每支铅笔多少元？
生：a÷3 元。
师：正方形边长是 a，它的周长和面积怎么表示？
生：周长是 4a，面积是 a×a，可以记作 a 的平方。
师：用字母表示数有书写规则：数与字母相乘时，乘号可以省略，数要写在字母前面，比如 4a；1 与字母相乘时，1 要省略不写；两个相同的字母相乘，写成平方的形式。
师：加法交换律用字母怎么表示？
生：a＋b＝b＋a。
师：路程、速度和时间的关系呢？
生：s＝v×t，可以简写成 s＝vt。

2. 认识方程
教师活动：
（课件出示三组式子：4＋5＝9；x＋5＝9；x＋5＞9）
师：这三个式子有什么相同点和不同点？先自己观察，再和同桌交流。
生：第一个是等式，第二个是含有未知数的等式，第三个是大于号连接的不等式。
师：像 x＋5＝9 这样，含有未知数的等式，就叫作方程。方程必须同时满足两个条件：一是等式，二是含有未知数。
师：4＋5＝9 是等式，它是方程吗？
生：不是，因为它不含未知数。
师：x＋5＞9 含有未知数，它是方程吗？
生：也不是，因为它不是等式。
师：所以方程一定是等式，但等式不一定是方程。请把下面的式子分类：3＋5＝8、x＋8＝10、7x＝21、x＋8＞13、y÷2＝6。
（学生分类，说出每类的理由）

3. 理解等式的性质
教师活动：
（课件演示天平）
师：天平左边放一个 x 和一个 3，右边放 8，天平平衡，就是 x＋3＝8。现在两边同时减去 3，天平会怎样？
生：两边同时去掉 3，天平仍然平衡。
师：这说明等式两边同时加上或减去同一个数，左右两边仍然相等，这就是等式的性质一。等式两边同时乘同一个数，或同时除以同一个不为 0 的数，左右两边也仍然相等，这是等式的性质二。
师：为什么除以的这个数不能是 0？
生：因为 0 不能作除数，除以 0 没有意义。

4. 解方程
教师活动：
师：利用等式的性质，我们就可以解方程了。x＋3＝8，怎样求出 x？
生：两边同时减去 3，x＝5。
师：把 x＝5 代回原方程检验一下。
生：左边 5＋3＝8，等于右边，所以 x＝5 是方程的解。
师：像 x－a＝b，两边同时加 a；ax＝b，两边同时除以 a；x÷a＝b，两边同时乘 a。请解方程：x－7＝12 和 3x＝18。
（学生独立完成，指名板演）
师：解方程要注意书写格式，等号要上下对齐，解完后要检验。

学生活动：尝试用字母表示数量关系；观察三组式子，归纳方程的两个条件；把卡片式子分类；借助天平理解等式的性质；独立解方程并检验。

设计意图：先用字母表示数，帮助学生从具体的量过渡到符号表达，为认识方程做准备。再通过"等式、方程、不等式"的对比，突出方程的两个必要条件。等式的性质借助天平演示，让学生在直观中理解"两边同时变化，仍然相等"的道理。解方程从 x＋3＝8 入手，联系等式的性质，讲清算理再总结方法，最后通过练习巩固书写格式和检验习惯。

**环节三 巩固练习：辨一辨、解一解（约 7 分钟）**

教师活动：
（出示练习题卡）
第一题：下面的式子哪些是等式？哪些是方程？
（1）3x＋4＝10　　（2）7＋9＝16　　（3）a－8　　（4）6y＞20　　（5）x÷4＝12
生：（独立判断，说明理由）
师：第（3）题为什么既不是等式也不是方程？
生：它不是等式，也没有用等号连接。
第二题：解方程。
（1）x＋15＝30　　（2）x－8＝24　　（3）4x＝36　　（4）x÷6＝9
生：（独立解方程，指名板演并检验）
师：第（3）题用了等式的哪条性质？
生：性质二，两边同时除以 4。
第三题：把方程和它的解连一连。
x＋9＝14　　x＝8
2x＝16　　x＝5
x－3＝10　　x＝13
生：（先连一连，再选一个代入检验）

学生活动：独立完成三道练习；同桌互查并说理；全班交流易错点。

设计意图：第一题通过辨别等式与方程，强化概念的两个必要条件，特别用不含等号的式子制造干扰；第二题覆盖四种基本形式的方程，巩固解方程的方法与检验习惯；第三题用连线题训练解方程的熟练度。三道题由判断到求解再到检验，环环相扣，把知识转化为技能。

**环节四 拓展应用：列方程解决问题（约 5 分钟）**

教师活动：
（课件出示：小明今年 9 岁，比妈妈小 27 岁，妈妈今年多少岁？）
师：先找出题目中的等量关系，再说一说。
生：小明的年龄＋27＝妈妈的年龄。
师：设妈妈的年龄为 x 岁，怎样列方程？
生：9＋27＝x。
师：解这个方程，x 等于多少？
生：x＝36。
师：检验一下，9＋27＝36，符合题意。列方程解决问题一般有五个步骤：第一，读题找出等量关系；第二，设未知数，写"解：设……为 x"；第三，根据等量关系列方程；第四，解方程；第五，检验并作答。
（课件再出示：学校图书馆有故事书 120 本，比科技书的 3 倍多 30 本，科技书有多少本？）
师：请先找出等量关系，再尝试列方程。
生：科技书本数×3＋30＝120，设科技书有 x 本，3x＋30＝120。

学生活动：独立分析小明和妈妈年龄问题的等量关系；尝试列方程并解方程；在第二个问题中独立找等量关系、设未知数、列方程。

设计意图：通过两个实际问题让学生经历"找等量关系、设未知数、列方程、解方程、检验作答"的完整过程，体会方程在解决逆向问题中的优势。从 x 直接等于结果的简单方程，过渡到 3x＋30＝120 的稍复杂方程，让学生感受方程的建模价值，发展模型意识。

**环节五 课堂小结与作业（约 5 分钟）**

教师活动：
师：这节课你学到了哪些知识？
生：会用字母表示数；知道含有未知数的等式叫方程，方程一定是等式，等式不一定是方程；会利用等式的性质解方程。
师：解方程要注意什么？
生：等号上下对齐，两边要同时变化，解完要检验。
师：列方程解决问题最关键的一步是什么？
生：找准等量关系。
（布置作业）
作业一：解方程并检验：x＋25＝40、5x＝45、x÷7＝8。
作业二：找一道生活中的问题，先写出等量关系，再列方程解答。

学生活动：同桌互说收获；记清作业要求。

设计意图：引导学生从概念、性质、方法三个层面梳理本课知识，形成完整的认知结构。作业设计兼顾解方程的技能巩固和列方程解决实际问题的建模训练，让代数思维延伸到课堂之外。

**板书设计**

          简易方程

用字母表示数：
  边长 a，周长 4a，面积 a×a
  书写：数与字母相乘省略乘号，数在前

方程：含有未知数的等式
  方程一定是等式，等式不一定是方程

等式的性质：
  两边同加减同一个数，仍然相等
  两边同乘同一个数，或同除以一个不为 0 的数，仍然相等

解方程：x＋3＝8
  解：两边同时减 3，x＝5
  检验：5＋3＝8　√

列方程五步：找等量关系 → 设未知数 → 列方程 → 解方程 → 检验作答

**教学反思要点**

1. 方程概念的建立要突出"等式"和"含未知数"两个条件缺一不可，借助分类活动让学生在对比中辨析，避免死记定义。
2. 等式的性质要依托天平的直观演示，让学生理解"两边同时变化"的道理，而不是机械记住操作步骤。
3. 解方程必须强调书写规范，等号上下对齐、两边同时变化、解完必检验，从第一题起就严格要求。
4. 用字母表示数时，数字与字母的书写顺序是最常见的错误，要结合例子反复强调"数在前、字母在后"。
5. 列方程解决问题的关键在于找准等量关系，教学中要让学生先说出等量关系再列方程，并关注学有余力的学生尝试解决未知数出现在两边的方程。`,talk:`**一、说教材**

"简易方程"是人教版小学数学五年级上册第五单元的内容，是小学阶段代数初步知识的重点内容。学生在本单元将第一次系统地学习用字母表示数，认识方程，理解等式的性质，并运用等式的性质解简易方程，最后用方程解决简单的实际问题。这部分内容既是小学算术向代数过渡的桥梁，也为初中学习一元一次方程奠定基础，具有承上启下的重要地位。教材借助天平这一直观模型，从用字母表示数出发，逐步引出方程的概念和等式的性质，再过渡到解方程和列方程解决问题，编排层次清晰，螺旋上升。这种编排充分考虑了学生从算术思维向代数思维过渡的规律，也提示我在教学中要放慢脚步，让学生在直观模型的支持下完成思维方式的转变。

**二、说学情**

五年级的学生已经掌握了整数、小数四则运算，积累了丰富的数量关系经验，比如速度乘时间等于路程、单价乘数量等于总价，也具备了一定的抽象思维能力。但是，用字母表示数和列方程解决问题对他们是全新的，学生过去习惯于用算术方法逆向思考，对"设未知数、找等量关系"的方程思想需要一个适应过程。同时，等式与方程的关系、等式的性质等概念比较抽象，容易混淆。因此，本课必须借助天平等直观模型帮助学生理解，循序渐进地发展学生的代数思维。同时我也注意到，学生解方程时最容易出现只在一边操作、等号不对齐、忘记检验等问题，这些都需要在教学中反复强调、严格要求，帮助学生从一开始就养成良好的解题习惯。

**三、说教学目标**

根据教材特点和学情，我确定了三个层面的教学目标。第一，理解用字母表示数的意义，会用字母表示运算定律、计算公式和简单的数量关系，掌握书写规则，发展符号意识。第二，理解方程的意义，能判断一个式子是不是方程，借助天平理解等式的性质，会解简易方程并自觉检验，发展推理意识。第三，能找出实际问题中的等量关系，用列方程的方法解决问题，体会方程是刻画数量关系的重要工具，发展模型意识。三个目标既包含对符号意识和代数思维的培养，也强调了解题规范与检验习惯的养成，体现了知识与素养的同步发展。

**四、说教学重难点**

本课的教学重点是理解方程的意义，运用等式的性质正确解简易方程。教学难点是理解等式的性质，以及根据实际问题找准等量关系列方程。为了突破难点，我始终以天平为直观载体，让学生在"看、想、做"中理解等式两边同时变化的道理，并通过反复训练找等量关系，逐步内化方程思想。我还会引导学生用画线段图的方式表示数量关系，把隐蔽的相等关系直观地呈现出来，帮助学生找准列方程的依据。

**五、说教法学法**

在教法上，我采用天平演示、观察对比、合作探究和实际应用相结合的方法。在学法上，引导学生经历"观察、比较、抽象、应用"的过程，让学生在看天平、分式子、解方程、列方程等活动中主动建构知识，培养代数思维和解决问题的能力。

**六、说教学过程**

我把教学过程安排为五个环节，共四十分钟。第一环节情境导入，约五分钟，用平衡的天平引出未知数和等量关系，自然切入课题。第二环节探究新知，约十八分钟，是本课的核心。依次完成用字母表示数、认识方程、理解等式的性质、解方程四个层次的教学，从具体到抽象，逐步深入。第三环节巩固练习，约七分钟，通过判断、解方程、连线三类练习，强化概念与方法。第四环节拓展应用，约五分钟，让学生经历列方程解决实际问题的完整五步，体会方程的应用价值。第五环节课堂小结与作业，约五分钟，梳理知识结构，布置实践作业。四个层次的新知教学由浅入深：先用字母表示数，让学生熟悉符号表达；再认识方程，明确概念内涵；接着借助天平理解等式性质，为解方程提供依据；最后在解方程中运用性质、形成技能。整个教学过程以天平为线索，把抽象概念变成看得见、想得明的数学。

**七、说板书设计**

我的板书以"简易方程"为中心，左侧是用字母表示数和书写规则，中间是方程的概念与等式的性质，右侧是解方程的过程示范和列方程解决问题的五步。板书重点突出、层次分明，既呈现了概念的形成过程，又示范了解题的规范格式，便于学生课后对照复习。

**八、说教学反思与效果预测**

本课的设计有三个特点。第一，注重直观支撑，天平演示贯穿始终，让抽象的等式性质变得看得见、摸得着。第二，注重对比辨析，通过等式、方程、不等式的分类比较，帮助学生准确把握方程的本质。第三，注重方法指导，解方程强调书写规范，列方程强调先找等量关系，每一步都落到实处。我预计大部分学生能正确认识方程、熟练解简易方程，少数学生在列方程找等量关系时可能遇到困难，我会通过画线段图、同桌互助等方式帮助他们。课堂中我会根据学生的生成情况灵活调整，努力让每一个学生都能迈入代数思维的大门。此外，用字母表示数与解方程的书写规范需要长期坚持，我会在后续的练习中持续关注，并通过让学生互讲思路、互批作业的方式，让每一个孩子都能清晰地表达自己的思考过程。`},"小学|六年级|数学|圆":{plan:`**教学基本信息**

课题：圆
教材版本：人教版小学数学六年级上册第五单元
年级：六年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学六年级学生

**教学目标**

1. 认识圆，掌握圆的特征，理解圆心、半径、直径的含义及同圆中半径与直径的关系，能用圆规正确画圆，发展空间观念与几何直观。
2. 理解圆周率的意义，掌握圆的周长公式 C＝πd＝2πr，经历圆的面积公式的推导过程，理解并掌握圆的面积公式 S＝πr²，能正确计算圆的周长和面积，发展推理意识与模型意识。
3. 能正确计算圆环的面积，解决与圆有关的实际问题，体会"化曲为直""转化"等数学思想，感受数学与生活的密切联系。

**教学重难点**

重点：圆的周长和面积公式的推导与运用；半径、直径、周长、面积之间的相互转化。
难点：理解圆周率的意义；用"化曲为直""剪拼转化"的方法推导周长和面积公式；正确区分周长与面积。

**教学准备**

课件：圆的认识演示图、圆周率探究表、剪拼动画、练习题卡。
教具：圆形实物（杯口、硬币、圆盘）、软尺、细线、大号圆规。
学具：每人一个圆形纸片、一个圆规、软尺与细线、方格纸。
任务单：两份（任务一量一量算一算、任务二剪一剪拼一拼）。

**教学过程**

**环节一 情境导入：走进圆的世界（约 5 分钟）**

教师活动：
（课件出示摩天轮、井盖、月亮、车轮等图片）
师：这些物体上都有一个共同的图形，是什么？
生：圆。
师：圆和我们已经学过的长方形、正方形有什么不同？
生：长方形和正方形都有直直的边，圆没有直边，它是由曲线围成的。
师：车轮为什么都做成圆形？在行驶过程中，车轴离地面的距离始终不变，这样车子才平稳。这个奥秘就藏在圆里。今天我们就来认识圆，学习圆的周长和面积。（板书课题）
师：生活中还有哪些物体上有圆？
生：钟面、硬币、光盘、杯口……

学生活动：观察图片，说一说圆与多边形外观上的区别；举例说出身边的圆。

设计意图：从学生熟悉的圆形物体入手，让学生直观感受圆是"由曲线围成的平面图形"，与已学的直线图形形成对比，同时用"车轮为什么是圆的"引发好奇，为探究圆心、半径等知识埋下伏笔，激发学习兴趣。

**环节二 探究新知：认识圆、周长与面积（约 18 分钟）**

1. 认识圆：圆心、半径、直径
教师活动：
师：请用圆规在纸上画一个圆。画圆时，针尖所在的点叫圆心，一般用字母 O 表示。
（学生画圆，教师巡视）
师：连接圆心和圆上任意一点的线段叫半径，用字母 r 表示；通过圆心并且两端都在圆上的线段叫直径，用字母 d 表示。请在你的圆上标出圆心、半径和直径。
师：在你画的圆里，半径有多少条？它们有什么关系？
生：半径有无数条，长度都相等。
师：直径呢？
生：直径也有无数条，也都相等。
师：直径和半径有什么关系？
生：直径是半径的 2 倍，d＝2r；半径是直径的一半，r＝d÷2。
师：圆是轴对称图形吗？对称轴是什么？
生：是轴对称图形，直径所在的直线是它的对称轴，圆有无数条对称轴。

2. 探究圆的周长
教师活动：
师：围成圆的曲线的长度，叫作圆的周长。请用绕绳法或滚动法，量一量你手中圆形纸片的周长和直径，并把数据填在任务单上。
（学生分组测量，教师巡视指导）
师：请各组汇报周长和直径的数据。
（学生汇报，教师板书数据）
师：观察这些数据，周长和直径之间有什么关系？
生：周长大约是直径的 3 倍多。
师：通过大量测量发现，任何圆的周长与直径的比值都是一个固定的数，叫作圆周率，用字母 π 表示，π 约等于 3.14。圆周率是一个无限不循环小数，我国古代数学家祖冲之最早把它精确到了小数点后第七位。
师：圆的周长公式是什么？
生：C＝πd＝2πr。
师：已知半径 3 厘米，周长是多少？
生：C＝2×3.14×3＝18.84（厘米）。
师：已知周长怎样求直径和半径？
生：d＝C÷π，r＝C÷2π。

3. 推导圆的面积
教师活动：
师：圆所占平面的大小，叫作圆的面积。怎样求圆的面积呢？请大家把圆形纸片平均分成若干等份（8 等份），剪开后拼一拼，你拼成了什么图形？
（学生操作，教师巡视）
师：拼成的图形像什么？
生：像长方形，边还有一些弯。
师：把圆平均分的份数越多，拼成的图形就越接近长方形。拼成的这个长方形的长近似于圆周长的一半，也就是 πr；宽近似于圆的半径 r。长方形面积等于长乘宽，所以圆的面积 S＝πr×r＝πr²。
师：已知直径 8 厘米，求圆的面积，先算什么？
生：先求半径，r＝d÷2＝4 厘米，再算 S＝3.14×4×4＝50.24（平方厘米）。

学生活动：用圆规画圆并标出各部分；分组测量圆的周长和直径并记录数据；把圆剪拼成近似长方形并观察长、宽与圆的关系；在任务单上完成计算。

设计意图：画圆、标名称、数半径直径，让学生在操作中认识圆的基本要素，建立 d＝2r 的关系。周长部分让学生亲历"测量、发现、归纳"的过程，用真实数据感受周长与直径的倍数关系，让圆周率在学生的测量中"长"出来。面积部分通过剪拼转化，把圆变成长方形，化曲为直，让学生在直观中理解 S＝πr² 的由来，体会转化的数学思想。

**环节三 巩固练习：算一算、辨一辨（约 7 分钟）**

教师活动：
（出示练习题卡）
第一题：填空。
（1）圆有（　）条半径，有（　）条直径；
（2）d＝12 厘米，r＝（　）厘米；
（3）r＝5 厘米，周长 C＝（　）厘米，面积 S＝（　）平方厘米。
生：（独立完成，指名汇报）
师：第（3）题周长和面积分别是多少？
生：C＝2×3.14×5＝31.4（厘米），S＝3.14×5×5＝78.5（平方厘米）。
第二题：判断对错，并说出理由。
（1）半径 4 厘米的圆，面积是 3.14×8＝25.12（平方厘米）。
（2）圆环的面积等于外圆面积减去内圆面积。
（3）圆的周长和面积都可以用 r² 计算。
生：（逐题判断）
师：第（1）题错在哪里？
生：把 r² 算成了 2r，半径的平方是 4×4＝16，不是 8。
师：第（3）题为什么错？
生：周长是 C＝2πr，面积才是 S＝πr²，周长和面积是不同的量。
第三题：一个圆的直径是 6 分米，它的周长和面积各是多少？
生：（独立完成，同桌互查）

学生活动：独立完成填空、判断和计算；同桌互查并说理；全班交流易错点。

设计意图：第一题巩固半径直径关系及周长面积公式的直接运用；第二题针对"r² 算成 2r""周长面积混淆"等典型错误进行辨析，让学生在说理中加深理解；第三题综合运用，训练先求半径再计算的规范步骤。练习全部要求说出道理，把知识真正内化。

**环节四 拓展应用：圆环的面积（约 5 分钟）**

教师活动：
（课件出示环形跑道和内圆外圆的图）
师：两个半径不同的同心圆之间的部分，就是圆环。怎样求圆环的面积？
生：用外圆面积减去内圆面积。
师：外圆半径 R＝5 厘米，内圆半径 r＝3 厘米，圆环面积是多少？
生：S＝3.14×5×5－3.14×3×3＝3.14×（25－9）＝3.14×16＝50.24（平方厘米）。
师：为什么不能直接用（R－r）的平方来算？
生：圆环面积是大圆面积减小圆面积，要先算两个圆的面积差，不能把半径差平方。
师：生活中还有哪里会用到圆环面积的知识？
生：环形跑道、光盘、甜甜圈、圆形的花坛铺路……

学生活动：观察圆环图，理解圆环的组成；独立计算圆环面积；举例说出生活中的圆环。

设计意图：由平面图形过渡到环形组合图形，让学生在"大面积减小面积"的过程中巩固圆的面积公式，同时辨析"不能直接用半径差的平方"这一易错点。联系生活实例，让学生感受圆的知识在生活中的广泛应用，增强应用意识。

**环节五 课堂小结与作业（约 5 分钟）**

教师活动：
师：通过今天的学习，你认识了圆，还学会了什么？
生：知道了圆心、半径、直径的关系，d＝2r；学会了圆的周长公式 C＝πd＝2πr；学会了圆的面积公式 S＝πr²。
师：求圆的面积时，第一步先做什么？
生：先看知道的是半径还是直径，如果知道直径要先求半径。
师：计算时要特别注意什么？
生：半径的平方是两个半径相乘，不能算成 2r；周长用长度单位，面积用平方单位。
（布置作业）
作业一：量一量家中一个圆形物体的直径，计算出它的周长和面积。
作业二：在方格纸上设计一个由圆和圆环组成的图案，并标注相关数据。

学生活动：同桌互说收获与注意点；记清作业要求。

设计意图：引导学生从"圆的认识、周长、面积"三个板块回顾本课内容，强化"先求半径再算面积"和"平方是两个数相乘"两个易错点。作业延伸到生活测量和图案设计，既巩固知识，又让学生感受圆的数学美。

**板书设计**

              圆

圆心 O　半径 r　直径 d
d＝2r　　r＝d÷2
圆有无数条半径、无数条直径

圆周率 π：周长与直径的比值，约等于 3.14
圆的周长：C＝πd＝2πr
圆的面积：S＝πr²（化曲为直，剪拼转化）

圆环面积：S＝π（R²－r²）

求面积先看条件：
  知半径 → 直接代入
  知直径 → 先求半径

**教学反思要点**

1. 圆周率的概念比较抽象，必须让学生亲历"测量、计算、发现"的过程，用几组真实数据感受周长总是直径的 3 倍多一些，避免直接告知结论。
2. 面积公式的推导要让学生亲手剪拼，直观感受"份数越多越接近长方形"，体会化曲为直、转化的思想，防止只记公式不理解。
3. "r² 是 r 乘 r"和"已知直径先求半径"是两个高频错误点，要在练习中反复辨析，并把规范步骤写在黑板上供学生参照。
4. 周长与面积的区分要抓本质，周长是"线"的长度用长度单位，面积是"面"的大小用平方单位，解题时先判断求什么再列式。
5. 圆环面积要强调"大面积减小面积"，对学有余力的学生可引导推导出 S＝π（R²－r²）的形式，同时警惕用（R－r）² 的典型错误。`,talk:`**一、说教材**

"圆"是人教版小学数学六年级上册第五单元的内容，是小学阶段平面图形学习的收官之作。学生在之前已经学习了长方形、正方形、三角形等直线图形，而圆是小学阶段学习的唯一一个曲线图形，它的认识和研究方法都与直线图形不同，对学生来说是一次思维的跃升。本单元包括圆的认识、圆的周长和圆的面积三部分内容，本课将它们有机整合，让学生完整经历"认识图形、测量图形、计算图形"的探究过程。这部分知识不仅是后续学习圆柱、圆锥的基础，其中蕴含的化曲为直、转化的数学思想方法，更是学生数学素养的重要组成部分。

**二、说学情**

六年级的学生已经认识了长方形、正方形等平面图形，掌握了这些图形的周长和面积公式，具备了一定的测量、计算和动手操作能力，抽象思维也有了一定的发展。但是，圆作为曲线图形，用直尺无法直接量出周长，面积也不能用方格直接数出来，这就需要学生突破直线图形的思维定式。同时，圆周率、周长与面积的关系等概念比较抽象，学生容易把周长和面积混淆。因此，本课需要让学生在动手测量、剪拼转化的过程中亲历知识的发生发展，实现认知上的跨越。特别需要注意的是，六年级学生的动手能力已经比较强，但测量时的误差处理、剪拼时的份数选择仍需要教师的具体指导，我要放手让学生操作，又不能完全撒手，要适时点拨，让探究活动既充分又有序。

**三、说教学目标**

根据课标要求和教材内容，我确立了三个层面的教学目标。第一，认识圆，理解圆心、半径、直径的含义及 d＝2r 的关系，能用圆规画圆，发展空间观念与几何直观。第二，理解圆周率的意义，掌握圆的周长和面积公式，能正确计算，发展推理意识与模型意识。第三，能计算圆环的面积，解决与圆有关的实际问题，体会转化的数学思想，感受数学与生活的联系。三个目标覆盖认识、计算、应用三个层面，既重视知识的获得，也关注转化思想与空间观念的渗透，体现了数学核心素养的要求。

**四、说教学重难点**

本课的教学重点是圆的周长和面积公式的推导与运用，以及半径、直径、周长、面积之间的相互转化。教学难点是理解圆周率的意义，用化曲为直、剪拼转化的方法推导周长和面积公式，并正确区分周长与面积。为了突破难点，我设计了两个核心活动：一是让学生亲自动手测量圆的周长和直径，用真实数据发现圆周率；二是让学生剪拼圆形纸片，在转化中理解面积公式的由来。在周长与面积的辨析上，我会通过判断题和对比练习，让学生抓住"线"与"面"的本质区别，避免张冠李戴。

**五、说教法学法**

在教法上，我采用动手操作、实验探究、小组合作和数形结合相结合的方法，突出"测量—发现—归纳"的探究路径。在学法上，引导学生经历"观察、操作、猜想、验证"的完整过程，让学生在量一量、剪一剪、拼一拼中主动建构知识，培养发现问题、分析问题和解决问题的能力。

**六、说教学过程**

我把教学过程安排为五个环节，共四十分钟。第一环节情境导入，约五分钟，用摩天轮、车轮等圆形物体引入，激发学生探究圆的兴趣。第二环节探究新知，约十八分钟，是本课的核心，分三个层次展开：先认识圆心、半径、直径及它们的关系，再通过测量发现圆周率、推导周长公式，最后通过剪拼转化推导面积公式。第三环节巩固练习，约七分钟，通过填空、判断、计算三类练习，突破半径平方和周长面积混淆等易错点。第四环节拓展应用，约五分钟，学习圆环面积的计算，体会知识的生活应用。第五环节课堂小结与作业，约五分钟，梳理知识结构，布置测量和设计作业。三个层次的新知环环相扣：先认识圆的特征，为测量和计算做好准备；再通过真实测量发现圆周率，建立周长公式；最后通过剪拼转化推导面积公式。每一个结论都不是教师直接给出的，而是学生在动手操作和观察思考中自己发现的。

**七、说板书设计**

我的板书以"圆"为中心，左侧是圆心、半径、直径及 d＝2r 的关系，中间是圆周率、周长公式和面积公式，右侧是圆环面积和解题步骤。整个板书层次分明、公式醒目，既呈现了知识的探究过程，又为学生提供了解题的参照，便于课后复习巩固。

**八、说教学反思与效果预测**

本课的设计有三个突出特点。第一，重视真实探究，圆周率不是直接告知，而是学生在测量中发现的，让数学规律"长"在学生手中。第二，重视思想方法，通过化曲为直、剪拼转化，让学生经历从曲线到直线的转化过程，感悟数学思想的力量。第三，重视易错点突破，针对半径平方、周长面积混淆等典型错误设计辨析练习，防患于未然。我预计大部分学生能正确运用公式计算圆的周长和面积，个别学生在已知直径求面积时可能忘记先求半径，我会通过规范书写步骤帮助学生避免。课堂是动态的，我也会根据学生的实际表现及时调整，让学生在探究中感受圆的魅力，收获成功的体验。同时，我深知圆的学习不是一节课就能完成的，周长与面积的灵活运用、组合图形的计算还需要在后续练习中不断巩固。我会把学生课堂上的表现作为后续教学的起点，帮助每一位学生建立起系统的圆的知识网络。`}},os={"小学|一年级|语文|拼音：声母":{plan:`**教学基本信息**

课题：拼音：声母
教材版本：统编版小学语文一年级上册汉语拼音单元
年级：一年级
课型：拼音新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学一年级学生

**教学目标**

1. 正确认读 23 个声母，读准音、认清形、记牢序，能按顺序背诵声母表，在认读中培养语言运用能力和观察能力。
2. 能区分形近声母 b 和 d、p 和 q、n 和 l，分清平舌音 z、c、s 与翘舌音 zh、ch、sh，掌握正确的发音口型，发展思维能力。
3. 掌握两拼音节"前音轻短后音重，两音相连猛一碰"的拼读方法，学习声母在四线格中的正确书写，在趣味活动中体验拼音学习的快乐，感受汉语言文字的趣味。

**教学重难点**

重点：23 个声母的正确认读与按序记忆，两拼音节的拼读方法。
难点：形近声母 b、d、p、q 的辨析；平舌音与翘舌音的发音区别。

**教学准备**

多媒体课件（声母城堡动画、发音口型放大图、拼音转盘动画）；声母大字卡与小字卡各一套；磁性四线格黑板贴；拼音转盘学具；小奖励贴纸；声母顺口溜图谱。

**教学过程**

**环节一 情境导入：收到声母城堡的邀请函（约 5 分钟）**

教师活动：
（课件播放声母城堡动画，一串"小字母兵"排着队出场）
师：今天，拼音王国里最热闹的声母城堡给我们发来了一张邀请函，邀请我们去参加"声母大阅兵"。你们看，城堡门口站着一排神气的小士兵，你认识他们吗？
生：认识！有的像 b，有的像 p……
师：他们说要能一口气喊出名字，才能拿到进城堡的钥匙。这些声母士兵一共有多少个呢？
生：23 个！
师：对！他们就是拼音王国里的 23 位声母战士。今天这节课，我们就一起走进声母城堡，认一认、读一读、拼一拼，好不好？（板书课题：声母）
生：好！

学生活动：观看动画，认读自己认识的声母，兴致勃勃进入学习情境。

设计意图：用"声母城堡大阅兵"的情境把抽象的字母变成学生喜爱的形象，调动好奇心和学习热情，在轻松氛围中自然引出课题，为整节课定下基调。

**环节二 学习声母：口型示范认读 23 个声母（约 13 分钟）**

1. 第一组：b p m f
教师活动：
师：我们先来迎接第一队士兵。请看老师的口型。（出示 b 的卡片，面向学生示范）
师：读 b 的时候，双唇闭紧再突然放开，让气流轻轻冲出来，又轻又短。跟我读：b、b、b。
生：（跟读）
师：右下半圆 b b b，b 像广播的"播"。p 和 b 长得像，但放开嘴唇时力气更大，把手掌放在嘴前能感觉到气流。p、p、p。
生：（跟读，用手掌感受气流）
师：m 呢？双唇闭拢，气流从鼻子里出来。m、m、m，像两个小门洞。f 呢？上齿轻咬下唇，气流从唇齿间挤出来。f、f、f。
生：（逐个跟读，同桌互查口型）
师：顺口溜一起来：右下半圆 b b b，右上半圆 p p p，两个门洞 m m m，一根拐棍 f f f。
生：（拍手齐读顺口溜）

2. 其余六组：d t n l、g k h、j q x、zh ch sh r、z c s、y w
教师活动：
师：第二队来了：d t n l。左下半圆 d d d，像个伞把 t t t，一个门洞 n n n，一根小棍 l l l。
生：（跟读并书空）
师：第三队 g k h：鸽子衔枝 g g g，蝌蚪水草 k k k，把水喝下 h h h。
生：（跟读）
师：第四队 j q x：鸡捉蝴蝶 j j j，九个气球 q q q，刀切西瓜 x x x。
生：（跟读）
师：第五队是翘舌音队 zh ch sh r。注意看老师的舌头：舌尖要翘起来，对着上腭前部。织毛衣 zh zh zh，吃野果 ch ch ch，小狮子 sh sh sh，日头照 r r r。
生：（模仿翘舌动作，跟读）
师：第六队 z c s 是平舌音队，正相反，舌尖放平，抵住上齿背。像个 2 字 z z z，刺猬拱土 c c c，半个 8 字 s s s。
生：（跟读，用手势表示平与翘）
师：最后一队 y w：像个树杈 y y y，屋顶相连 w w w。
生：（跟读）

学生活动：跟着教师逐组认读，边读边书空，同桌互相检查，在动手、动口、动脑中完成 23 个声母的认读与记忆。

设计意图：把 23 个声母分成 7 组，化整为零，降低记忆负担；发音教学坚持口型示范、学生模仿、实践检查，让学生看得清、读得准；顺口溜把形与音联系起来，朗朗上口，便于记牢顺序。

**环节三 火眼金睛：辨析易混声母（约 9 分钟）**

教师活动：
师：声母城堡里住着几对"双胞胎"，长得特别像，专门考验大家的眼力。我们先看第一对 b 和 d。
（出示 b、d 两张卡片）
师：b 和 d 都是半圆加一竖，区别在哪里？
生：半圆的方向不一样。
师：对！看半圆在哪边：半圆在右下就是 b，半圆在左下就是 d。右下半圆 b b b，左下半圆 d d d。
生：（齐读口诀，用手指画一画半圆的位置）
师：p 和 q 呢？半圆在右上是 p，半圆在左上是 q，q 的样子还像数字 9。右上半圆 p p p，左上半圆 q q q。
生：（齐读口诀，辨认卡片）
师：再看 n 和 l。n 有弯弯的门洞，l 是直直的小棍。一个门洞 n n n，一根小棍 l l l。
生：（观察卡片）
师：平舌音和翘舌音也要分清。记住口诀：z c s 舌放平，zh ch sh 舌头翘。
生：（跟读口诀，分组读一读两组声母）
师：下面我们玩"送声母回家"的游戏，请两位同学上台，把卡片分别送进"半圆在右下"和"半圆在左下"的小房子里。
生：（上台游戏，其他同学当小裁判）

学生活动：比较观察形近声母，说出不同之处；参与"送声母回家"游戏；小组内用卡片互相抽测。

设计意图：抓住一年级学生最容易混淆的 b 与 d、p 与 q、n 与 l、平舌与翘舌四组重点，用"找不同、念口诀、玩游戏"三步走，把观察、口诀与操作结合起来，让辨析更有方法。

**环节四 拼读乐园：两音相连猛一碰（约 10 分钟）**

教师活动：
师：声母战士的本领可不只是认读，他们最喜欢和韵母手拉手，拼出响亮的音节。先看老师怎么拼。（出示 b-a→ba）
师：拼读有个口诀：前音轻短后音重，两音相连猛一碰。读声母 b 时要又轻又短，像这样，b-a，ba！把声母和韵母"碰"在一起，一下子读出来。声母要轻短，韵母要响亮，再试一个：m-o→mo。
生：（跟读：b-a→ba，m-o→mo）
师：下面请小朋友自己来拼转盘上的音节。
生：b-a→ba，p-a→pa，m-a→ma，f-a→fa……
师：接下来玩"音节大闯关"。老师说一个声母，你拼出能和它相拼的音节，拼对了就获得一枚小贴纸。
生：（踊跃参与闯关拼读）
师：最后看老师写字。b 住在中格和上格，先写竖，再写右下半圆，竖要占满中格。请同学们在练习纸上写一写 p 和 m。
生：（在四线格中描红、书写 p、m，注意占格）

学生活动：跟读拼读口诀，看转盘拼读，玩"音节大闯关"游戏，在四线格中规范书写声母。

设计意图：把拼读方法提炼成口诀，帮助学生快速掌握两拼音节拼读要领；转盘与闯关游戏让拼读练习有趣不枯燥；书写抓住"占格"这个关键，实现读、拼、写一体化。

**环节五 小结与作业（约 3 分钟）**

教师活动：
师：今天我们在声母城堡里认识了 23 位声母战士。谁能按顺序背一背？
生：（按 7 组顺序背诵 b p m f d t n l g k h j q x zh ch sh r z c s y w）
师：还想不想再唱一遍声母顺口溜？
生：（拍手齐唱顺口溜）
师：课后请完成两个小任务：一是把声母卡片打乱顺序，请爸爸妈妈抽一张，你说出它的名字和口诀；二是玩"声母拼一拼"的游戏，拼一拼 bā、mā、fǎ 这些音节。
生：（齐声答应）
师：声母城堡的大门永远为爱学习的孩子敞开，下节课我们再和韵母手拉手，拼出更多好听的音节。下课！

学生活动：回顾本课所学，按顺序背诵声母表，明确课后任务。

设计意图：用"背一背、唱一唱"的形式对本课知识进行整体回顾，帮助学生建立完整的知识结构；家庭亲子任务把课堂学习延伸到课外，既巩固所学，又增进亲子互动。

**板书设计**

（图示化）
声母城堡大阅兵

第一组 b p m f    右下半圆 b b b
第二组 d t n l    左下半圆 d d d
第三组 g k h      鸽子衔枝 g g g
第四组 j q x      鸡捉蝴蝶 j j j
第五组 zh ch sh r 舌头翘
第六组 z c s      舌放平
第七组 y w        像个树杈 y y y

易混辨析：b 和 d 看半圆方向；p 和 q 看半圆方向；n 有门洞、l 是直棍
拼读口诀：前音轻短后音重，两音相连猛一碰
（中间画一座城堡，四周用四线格画出 b、p、m 的占格示例）

**教学反思要点**

1. 一年级学生注意力集中时间短，本课用"声母城堡大阅兵"的情境主线贯穿始终，游戏环节转换频繁，教师要注意把握节奏，避免学生兴奋过度导致纪律涣散。
2. 发音教学必须坚持口型示范先行，尤其对平翘舌音的指导，要把舌头位置讲清楚，多请学生站起来面对全班发音，让口型看得见、可比对。
3. b、d、p、q 的辨析要"先认后写"，课堂上要留给学生足够的书空和书写时间，防止"眼会手不会"。
4. 拼读练习要"先慢后快"，保证每个学生至少有一次独立拼读的机会，读错了当场用口诀纠正，不抢进度。
5. 课后分层练习要跟上：基础薄弱的学生只要求认读 23 个声母，学有余力的学生尝试拼读更多音节，让不同层次的学生都有收获。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是统编版小学语文一年级上册汉语拼音单元的《拼音：声母》。

**一、说教材**

本课是汉语拼音教学的重要内容。声母是音节开头的部分，是学生识字、学习普通话的"拐杖"。统编版教材把汉语拼音集中编排在一年级上册，本课安排在单韵母学习之后，主要编排了三个板块：23 个声母的认读、两拼音节的拼读、声母的书写。通过本课学习，学生要能认读 23 个声母，掌握两拼音节的拼读方法，为今后独立识字、尽早阅读打下坚实基础。可以说，本课在拼音教学体系中起着承前启后的关键作用，教材地位十分重要。

**二、说学情**

一年级学生刚从幼儿园进入小学，正处于幼小衔接的关键期。这个年龄段的孩子，具体形象思维占主导，注意力集中的时间短，但好奇心强、表现欲强，特别喜欢儿歌、游戏和奖励。他们已经认识了单韵母，对拼音有了初步感知，但声母数量多、字形相近、发音易混，特别是 b 与 d、p 与 q 这类"镜像字母"，以及平舌音与翘舌音的区分，是学生最容易出错的地方。还有一部分学生虽然在幼儿园接触过拼音，但读音不一定标准，教学中要注意正音，不能让错误读音先入为主。

**三、说教学目标**

依据语文课程标准对拼音教学的要求，结合本课内容和学生实际，我确定了三个目标：第一，正确认读 23 个声母，读准音、认清形、记牢序，能按顺序背诵声母表；第二，能区分 b 和 d、p 和 q、n 和 l，分清平舌音 z、c、s 与翘舌音 zh、ch、sh，掌握正确的发音口型；第三，掌握"前音轻短后音重，两音相连猛一碰"的两拼音节拼读方法，学习声母在四线格中的规范书写，在趣味活动中体验拼音学习的快乐。

**四、说重难点**

本课的教学重点是 23 个声母的正确认读与按序记忆，以及两拼音节的拼读方法。教学难点是形近声母 b、d、p、q 的辨析，以及平舌音与翘舌音的发音区别。之所以这样确定，是因为一年级学生的辨别能力还不强，字母方向的细微差别和舌头位置的变化，恰恰是最容易"看走眼、读跑音"的地方。

**五、说教法学法**

本课我主要采用以下教法：口诀记忆法，把声母的音和形编成顺口溜，帮助学生形象记忆；对比辨析法，把易混声母成对出示，在比较中分清异同；游戏教学法，用"送声母回家""音节大闯关"等游戏巩固所学；直观演示法，用口型示范和手势辅助发音。学生的学习方式则是读一读、念一念、画一画、拼一拼、玩一玩，在动口、动手、动脑中实现"做中学"。需要说明的是，一年级拼音教学忌讳枯燥的机械操练，因此我把每一个知识点都放进具体的学习活动中：发音靠口型示范和模仿，识形靠顺口溜和书空，拼读靠转盘和闯关游戏，让课堂始终充满趣味。

**六、说教学过程**

围绕教学目标，我设计了五个教学环节。

第一个环节是情境导入，大约 5 分钟。我用"声母城堡大阅兵"的情境导入，把抽象的字母化为神气的"声母士兵"，再用"邀请函"设置悬念，激发学习兴趣，自然引出课题。

第二个环节是认读声母，大约 13 分钟。我把 23 个声母分成 7 组，一组一组认读。每个声母都坚持"口型示范、跟读模仿、顺口溜记忆"三步走。比如教 b 时，我面向学生示范闭唇、放开的动作，让学生看清楚发音部位，再用"右下半圆 b b b"帮他们记字形。7 组学完，学生拍手齐读顺口溜，做到音形结合、记得牢。

第三个环节是易混辨析，大约 9 分钟。我出示 b 和 d、p 和 q、n 和 l 等"双胞胎"字母，引导学生观察半圆方向，念口诀分辨，再通过"送声母回家"的游戏动手分类，巩固辨析成果。

第四个环节是拼读与书写，大约 10 分钟。我教给学生"前音轻短后音重，两音相连猛一碰"的拼读口诀，用拼音转盘和"音节大闯关"游戏反复练习，最后指导学生在四线格中规范书写，抓住"占格"这个关键。

第五个环节是小结与作业，大约 3 分钟。学生按顺序背诵声母表，我布置"卡片抽读""亲子拼读"两项课后任务，把学习延伸到家庭。

**七、说板书设计**

我的板书以"声母城堡大阅兵"为题，把 23 个声母按 7 组排列，用不同色块区分易混字母，最后点明拼读口诀，四线格中示范 b、p、m 的占格。板书图文结合、层次清晰，既是教学内容的浓缩，也为学生课后复习提供了直观的支架。

**八、说反思与效果预测**

这节课最大的特点是趣味性强，情境、口诀、游戏贯穿始终，符合一年级学生的心理特点。需要反思的是，一年级课堂游戏容易"过热"，教师要善于调控节奏；平翘舌音的正音是一个长期工程，单靠一节课远远不够，还需要课后坚持每日抽读巩固。效果预测上，绝大多数学生能正确认读 23 个声母，能说出易混声母的区分口诀，初步掌握两拼音节的拼读方法，课堂参与度高，教学目标能够较好达成。此外，对于个别发音有困难的孩子，课后我会利用课间或晨读时间单独正音，做到不让一个孩子掉队。

我的说课到此结束，恳请各位老师批评指正，谢谢大家！`},"小学|二年级|语文|识字：树之歌":{plan:`**教学基本信息**

课题：识字：树之歌
教材版本：统编版小学语文二年级上册第二单元识字单元
年级：二年级
课型：识字新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**

1. 认识"梧、桐、枫、松、柏、棉、杉、化、桂"等生字，会写"杨、壮、桐、枫、松、柏、棉、杉、化、桂"，读准字音、认清字形，发展语言运用能力。
2. 正确、流利、有节奏地朗读并背诵儿歌，体会儿歌的韵律之美，积累优美的语言。
3. 了解杨树、榕树、梧桐、枫树、松柏、木棉、桦树、银杏等树木的特点，发现木字旁形声字"形旁表义、声旁表音"的构字规律，借助规律认识更多树名用字，感受汉字文化的魅力，增强爱护树木、保护大自然的意识。

**教学重难点**

重点：借助拼音认识树名生字，熟读成诵；发现木字旁形声字的构字规律。
难点：理解"活化石""北疆"等词语的意思；辨析形近字并正确书写。

**教学准备**

多媒体课件（树木大观园动画、多种树木图片、形声字拆分演示动画）；树名生字卡片；"木字旁"与"声旁"部件磁贴；词语磁贴；田字格写字课件；轻音乐。

**教学过程**

**环节一 情境导入：走进树木大观园（约 5 分钟）**

教师活动：
（课件出示一片茂密的森林，音乐轻轻响起）
师：小朋友们，秋天到了，森林里格外热闹。今天，老师要带大家去参观一座"树木大观园"。你们看，园门口立着一块牌子，上面写着三个字：树之歌。
生：（齐读课题）
师：想进园参观，得先闯过第一关：说出一种你认识的树。
生：柳树！桃树！苹果树！
师：真棒！大观园里住着许多著名的树，它们的名字都藏在一首儿歌里。这首儿歌，就是我们今天要学的《树之歌》。让我们走进大观园，去认识这些树朋友吧！

学生活动：观察情境图，说出自己认识的树名，齐读课题，满怀期待地进入新课。

设计意图：以"树木大观园"为情境，把识字放进具体有趣的情境之中，调动学生已有的生活经验，激发认识树名、学习儿歌的兴趣，为随文识字做好铺垫。

**环节二 初读课文：随文识字读通顺（约 13 分钟）**

1. 听读感知，圈画树名
教师活动：
师：先听老师把儿歌读一遍，注意听清楚每一个树名的读音。
（教师范读，学生边听边圈画树名）
师：儿歌里藏着哪些树？请你来汇报。
生：杨树、榕树、梧桐、枫树、松柏、木棉、桦树、银杏、水杉、金桂。

2. 随文识字，读通读顺
教师活动：
师：我们一句一句来读。第一句：杨树高，榕树壮，梧桐树叶像手掌。
生：（跟读）
师："壮"字谁会读？仔细看它的字形，左边是"丬"旁，右边是"士"。读的时候注意翘舌音：壮。
生：（读"壮"，书空）
师：第二句：枫树秋天叶儿红，松柏四季披绿装。"装"字怎么记？老师给它编个字谜：壮士穿上衣。
生：（跟读，用字谜记"装"）
师：第三句：木棉喜暖在南方，桦树耐寒守北疆。"疆"字笔画多，右边是三横两个田。我们记住笔顺口诀：弓字旁，土在左，三横两个田在右。
生：（书空"疆"）
师：第四句：银杏水杉活化石，金桂开花满院香。谁来读一读这句？注意"杉"读 shān，不读 shā。
生：（跟读，强调翘舌音）
师：我们把整首儿歌连起来读一遍，注意读准字音、读通句子。
生：（自由读、齐读）

学生活动：听读圈画树名，跟读识字，用字谜、口诀记忆字形，多种方式反复朗读儿歌，做到读准、读通、读出节奏。

设计意图：坚持"字不离词、词不离句"的随文识字原则，把生字放在具体的语言环境中认读，边读边识、随文正音；用字谜、笔顺口诀等方法帮助学生记忆字形，让识字变得有趣、有法。

**环节三 发现规律：木字旁的秘密（约 9 分钟）**

教师活动：
师：儿歌读熟了，我们再来看看这些树的名字。请各小组把生字卡片摆一摆，找一找这些表示树名的字，有什么相同的地方？
生：（分组摆卡片，讨论）
生：梧、桐、枫、松、柏、棉、杉、桂、杨，都有木字旁！
师：火眼金睛！这些字都带有木字旁。木字旁和树木有关，这叫"形旁表义"。再看字的另一半，它常常提示读音，叫"声旁表音"。我们来拆分几个字看看。
（课件演示"枫"拆成"木"和"风"）
师："枫"的读音和什么相近？
生：和"风"相近！
师：对！"枫"读 fēng，"风"也读 fēng。"木"告诉我们它和树有关，"风"告诉我们它的读音。像这样一边表义、一边表音的字，就叫形声字。我们再看"桐"，木加同，tóng；"松"，木加公，sōng；"桂"，木加圭，guì。
生：（跟读拆分，体会规律）
师：用这个规律，你能猜出"桃、梅、柳、梨"这些字读什么吗？
生：桃读 táo，梅读 méi，柳读 liǔ，梨读 lí！
师：猜对啦！木字旁的这个本领可真大，能帮我们认识好多树朋友。

学生活动：小组合作摆卡片找规律，观察形声字的拆分演示，用规律猜测新字的读音，感受发现的快乐。

设计意图：引导学生在大量同类字中自主发现"形旁表义、声旁表音"的构字规律，把识字升华为"学规律"，实现举一反三；小组合作探究培养了学生合作与归纳的能力，让识字课有了思维的深度。

**环节四 指导书写：写好每一个字（约 9 分钟）**

教师活动：
师：字认得准，还要写得好。今天我们重点写两个木字旁的字：杨和壮。先看"杨"。
（课件出示田字格中的"杨"）
师：左边是木字旁，右边是"昜"字简化后的部分。木字旁要写得窄一些，让右边的部分舒展开来。注意木字旁的最后一笔，撇要变成点，把位置让给右边。
生：（观察，说占格）
师：再看"壮"。左边是"丬"，右边是"士"。写的时候左窄右宽，右边的"士"横要短、竖要直。
生：（观察范字）
师：请同学们在书上描红两个，再各写两个。写的时候注意姿势：眼离书本一尺，胸离桌沿一拳，手离笔尖一寸。
生：（安静书写，教师巡视指导）
师：写好的同学，同桌互相评一评，说说哪里写得好，哪里要改。
生：（互评修改）

学生活动：观察范字、说清占格、描红书写、同桌互评，在书写中巩固字形，养成正确的书写姿势和习惯。

设计意图：写字教学抓住木字旁"左窄右宽、撇变点"的关键点，通过观察、示范、书写、互评四个步骤，把写字指导落到实处；强调书写姿势，把端正写字的要求融入日常细节。

**环节五 小结与作业（约 4 分钟）**

教师活动：
师：今天我们在树木大观园里认识了十多种树朋友，还发现了一个大秘密：木字旁形声字。谁能说一说这个秘密？
生：形声字一边表意思、一边表读音，带木字旁的字大多和树有关。
师：让我们再美美地读一遍《树之歌》，读出节奏，读出韵味。
生：（有节奏地齐读儿歌）
师：课后请完成三个小任务：一是把《树之歌》背给爸爸妈妈听；二是用今天的木字旁规律，认一认身边的树名；三是画一画你最喜欢的一种树，并写上它的名字。
生：（齐声答应）
师：树木是我们的好朋友，让我们一起来爱护树木，爱护我们的大自然！下课！

学生活动：总结规律，有感情地朗读儿歌，明确课后任务，在美的诵读中结束全课。

设计意图：以"发现规律"串联全课总结，强化形声字意识；背诵、认树、画画三项作业分别指向积累、运用和兴趣，体现层次性；最后渗透爱护树木、保护自然的育人价值，实现文道统一。

**板书设计**

（图示化）
树之歌

杨树高    榕树壮    梧桐叶像手掌
枫叶红    松柏披绿装
木棉喜暖  桦树守北疆
银杏水杉活化石    金桂满院香

木字旁形声字：形旁表义 + 声旁表音
木加风等于枫   木加同等于桐   木加公等于松   木加圭等于桂
（中间画一棵大树，树枝上挂树名卡片，树根处标注"形旁表义、声旁表音"）

**教学反思要点**

1. 随文识字要"随"得自然，本课在朗读中穿插识字，要防止把课堂变成"查字典式"的认字课，读和识要水乳交融。
2. 形声字规律的发现要让学生"自己找"，教师不要急着揭示，要给足小组讨论的时间，让规律的习得成为学生的真实体验。
3. "疆"字笔画多、易漏笔画，书写指导要预留充分的观察和书空时间，同桌互评要及时反馈。
4. 儿歌朗读要读出节奏和韵味，配乐诵读的时机要把握好，避免形式化。
5. 对识字量大的班级，可拓展"带木字旁的字"归类游戏，让学有余力的学生获得更丰富的积累。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是统编版小学语文二年级上册第二单元识字单元的《识字：树之歌》。

**一、说教材**

本单元是识字单元，围绕"树木"这一主题编排了四篇课文，《树之歌》是本单元的第一篇，是一首介绍树木的识字儿歌。儿歌以"树"为线索，用四句押韵的诗行，介绍了杨树、榕树、梧桐、枫树、松柏、木棉、桦树、银杏、水杉、金桂等树木的特点，句式整齐、朗朗上口。本课承担着"随文识字、发现形声字规律"的重要任务，教材意图非常明确：让学生在读儿歌中识字，在识字中发现汉字的构字规律，为后续识字教学提供方法支撑。可以说，本课在识字教学体系中具有承上启下的作用，教材地位举足轻重。

**二、说学情**

二年级学生已经具备了一定的识字量和自主识字能力，掌握了拼音、偏旁部首等识字工具，对儿歌这种形式有天然的亲近感。经过一年的学习，他们开始对汉字的内在规律产生兴趣。但是，本课生字多且多为树名，字形复杂，个别字笔画多，如"疆"字；部分字音容易读错，如"杉"字读 shān；"活化石""北疆"等词语离学生的生活较远，理解起来有难度。这些都需要教师在教学中巧妙引导、耐心点拨。

**三、说教学目标**

根据课标要求和教材特点，我确定了三个目标：第一，认识"梧、桐、枫、松、柏、棉、杉、化、桂"等生字，会写"杨、壮、桐、枫、松、柏、棉、杉、化、桂"，读准字音、认清字形；第二，正确、流利、有节奏地朗读并背诵儿歌，读出儿歌的韵律美；第三，了解各种树木的特点，发现木字旁形声字"形旁表义、声旁表音"的构字规律，并借助规律认识更多树名用字，增强爱护树木、保护大自然的意识。

**四、说重难点**

教学重点是借助拼音认识树名生字、熟读成诵，并发现木字旁形声字的构字规律；教学难点是理解"活化石""北疆"等词语的意思，辨析形近字并正确书写。本课识字量较大，又承载着规律性知识的发现任务，所以教师既要教"字"，更要教"规律"。

**五、说教法学法**

我采用的教学方法有：随文识字法，把生字放到儿歌的语境中认读，字不离词、词不离句；归类识字法，将带木字旁的字集中归类，引导学生发现规律；图文对照法，用树木图片帮助学生建立字与物的联系；诵读感悟法，通过多种形式的朗读，读出儿歌的节奏和韵味。学生在学习过程中，通过自主拼读、小组合作、发现探究等方式，做识字的主人。值得一提的是，识字教学不能只停留在认读层面，更要让学生经历"发现"的过程。本课我特别设计了一个环节：让学生把带木字旁的字集中起来，自己观察、比较、归纳，从中发现形声字的构字规律。这样的设计，让识字课从单纯的知识传授走向思维的训练。

**六、说教学过程**

我设计了五个教学环节。第一个环节是情境导入，大约 5 分钟。我创设"走进树木大观园"的情境，请学生说出自己认识的树，再引出《树之歌》，激发学习兴趣。

第二个环节是初读课文、随文识字，大约 13 分钟。我采用"听读圈画、随文正音、多种朗读"的路径：先听老师范读、圈画树名，再一句一句随文识字，用字谜、笔顺口诀等方法突破"装""疆"等难字，最后多种形式朗读，做到读准、读通、读出节奏。

第三个环节是发现规律，大约 9 分钟。我组织学生小组合作摆一摆带木字旁的字卡，自主发现它们都带有木字旁，再通过拆分"枫、桐、松、桂"等字，理解"形旁表义、声旁表音"的规律，最后用规律猜读"桃、梅、柳、梨"等新字，让规律"活"起来。在猜读新字时，我会请学生先说猜的依据，再说读音，让每一个孩子都经历"用规律识字"的过程，既巩固了方法，又收获了成功感。

第四个环节是指导书写，大约 9 分钟。我重点指导"杨、壮"两个字，突出木字旁"左窄右宽、撇变点"的要点，让学生观察、书空、描红、书写、互评，养成良好书写习惯。在互评环节，我会引导学生从"结构是否匀称、笔画是否到位"两个角度评价，让评价有抓手、可操作。

第五个环节是小结与作业，大约 4 分钟。学生总结形声字规律，有感情地齐读儿歌，我布置背诵、认树、画树三项有梯度的作业，最后渗透爱护树木的育人价值。

**七、说板书设计**

我的板书以"树之歌"为题，中间画一棵大树，树枝上挂着各种树名卡片，树根处标注"形旁表义、声旁表音"的规律。板书图文结合、主次分明，既呈现了课文主要内容，又凸显了识字规律这个核心。

**八、说反思与效果预测**

本课最大的亮点是把识字和规律发现融为一体，让学生从"认字"走向"认规律"。需要反思的是，随文识字环节容易耗时过多，要合理分配朗读与识字的时间；形声字规律的发现要避免教师包办，应给学生充分的讨论时间。效果预测上，学生能够熟读成诵儿歌，认识本课生字，多数学生能说出木字旁形声字的构字规律，爱护树木的意识得到增强，教学目标基本达成。同时，树木主题贴近自然生活，学生对树木的特点十分感兴趣，这为识字和朗读提供了良好的情感基础。

我的说课到此结束，谢谢大家！`},"小学|三年级|语文|古诗：望洞庭":{plan:`**教学基本信息**

课题：古诗：望洞庭
教材版本：统编版小学语文三年级上册第六单元
年级：三年级
课型：古诗教学课
课时：公开课 1 课时（40 分钟）
授课对象：小学三年级学生

**教学目标**

1. 认识诗人刘禹锡，了解《望洞庭》的创作背景；认识"庭、镜、螺"等生字，能正确、流利、有感情地朗读并背诵、默写全诗，积累经典，增强文化自信。
2. 借助注释理解诗句的意思，能用自己的话说出诗中描绘的秋夜洞庭湖美景，发展语言运用能力。
3. 品味"镜未磨""白银盘""青螺"等比喻的精妙，体会诗人奇特的想象和乐观豁达的情怀，感受祖国河山的壮美，培养审美创造能力。

**教学重难点**

重点：理解诗意，想象画面，背诵默写全诗。
难点：体会比喻的妙处，理解"潭面无风镜未磨"为什么用"未磨"的镜子作比。

**教学准备**

多媒体课件（洞庭湖秋夜图片、青铜镜磨与未磨对比图、白银盘托青螺图）；配乐朗读音频；刘禹锡资料卡；生字卡片；学习任务单。

**教学过程**

**环节一 情境导入：走进刘禹锡的洞庭湖（约 5 分钟）**

教师活动：
（课件出示烟波浩渺的洞庭湖图片，配乐）
师：同学们，在我国湖南省，有一座远近闻名的大湖，叫洞庭湖。古往今来，无数诗人赞美过它。有一位诗人，他乘船经过洞庭湖，被秋夜月光下的湖景深深打动，写下了一首千古名篇。这位诗人就是刘禹锡。
生：（齐说"刘禹锡"）
师：刘禹锡字梦得，唐代著名的文学家，人们称他"诗豪"。这首诗写在他被贬之后、赴任和州途中。一般人遇到不顺心的事，难免垂头丧气，可刘禹锡望着洞庭美景，心中充满的是对大自然的热爱。这节课，我们就跟着刘禹锡一起去"望洞庭"。
（板书课题，生齐读课题）
师："望"是什么意思？
生：远远地看。
师：是的，远远地望。我们要像诗人一样，站在远处，静静地望一望月光下的洞庭湖。

学生活动：欣赏洞庭湖图片，了解诗人和写作背景，理解"望"的含义，带着对美景的期待进入学习。

设计意图：以洞庭湖的壮美图片和诗人的传奇经历导入，既扫清了诗人与背景的障碍，又用刘禹锡乐观豁达的人格魅力感染学生，为理解"望"的观察角度和诗歌的乐观基调埋下伏笔。

**环节二 初读古诗：读准字音读出节奏（约 9 分钟）**

教师活动：
师：先听老师把这首诗读一遍，注意听字音和节奏。
（教师范读，课件出示全诗）
师：湖光/秋月/两相和，潭面/无风/镜未磨。遥望/洞庭/山水翠，白银盘里/一青螺。
生：（跟读）
师：这首诗里有三个生字：庭、镜、螺，还有一个多音字"磨"。谁来当小老师带读？
生：（带读"庭、镜、螺、磨"）
师："磨"在这里读 mó，意思是打磨、摩擦。古时候做镜子，要用铜来磨，磨过之后才光亮。
生：（理解字义）
师：古诗是有节奏的。七言诗一般按二二一二的节奏读，我们看第一句：湖光/秋月/两相和。请大家拍手读一读。
生：（拍手读全诗）
师：谁来展示读一读？
生：（个别读、小组读）
师：读得真有节奏！我们一起把节奏读出来。
生：（齐读）

学生活动：听范读、跟读，当小老师带读生字，按节奏拍手朗读，多种形式读熟古诗。

设计意图：朗读是古诗教学的第一要务。本环节以范读引路，解决字音和生字，再通过拍手标节奏引导学生读出七言诗的韵律，让"读准、读顺、读出节奏"层层落实。

**环节三 理解诗意：字词注释解诗意（约 12 分钟）**

教师活动：
师：读熟了，我们还要读懂。请同学们借助注释，自己试着说一说每句诗的意思，同桌可以讨论。
生：（自主读注释，同桌交流）
师：谁来汇报第一句？"湖光秋月两相和"，"和"是什么意思？
生："和"是和谐、协调的意思。
师：对。湖面上的波光和秋夜的月光交融在一起，你中有我、我中有你，多么和谐美好！
生：（用自己的话说第一句）
师：第二句"潭面无风镜未磨"。"潭面"指湖面，"镜未磨"是什么意思？
生：像没有磨过的铜镜。
师：为什么用"没有磨过的铜镜"作比呢？我们来看一看古人的铜镜。
（课件出示磨好的铜镜和未磨的铜镜）
师：古时候的镜子是铜做的，新做出来要反复打磨才光亮。没有打磨过的铜镜，表面模模糊糊的。月光下的湖面，因为笼着一层薄薄的雾气，看上去迷迷蒙蒙，不正像一面没有磨过的铜镜吗？
生：（恍然大悟，点头）
师：第三句"遥望洞庭山水翠"。"遥望"是远远地看，"翠"是青绿色。远远望去，洞庭湖的山水一片青翠。
生：（说句意）
师：最后一句"白银盘里一青螺"最有趣。谁来猜一猜，诗人把什么比作白银盘，把什么比作青螺？
生：把洞庭湖比作白银盘，把湖中的君山比作青螺。
师：为什么像？月光下，波光粼粼的洞庭湖像一个银白色的大盘子，湖中的君山小巧青翠，就像盘子里托着的一只青螺。这个比喻多神奇啊！
生：（齐读全诗，边读边想象画面）

学生活动：借助注释自学诗句，同桌交流，在教师追问下理解"和""镜未磨""白银盘""青螺"等词句的意思，逐步把诗句"翻译"成画面。

设计意图：坚持"以学为主"，让学生先借助注释自读自悟，教师相机点拨难点。青铜镜磨与未磨的对比图是突破难点的关键教具，直观化解"镜未磨"的理解障碍；由词到句、由句到画面，层层推进，让理解诗意落到实处。

**环节四 品析比喻：体会想象的奇妙（约 9 分钟）**

教师活动：
师：这首诗读懂了，我们还要读出它的妙处。大家看，诗人一连用了好几个比喻，我们来找一找：诗中有哪些"像"？
生：湖面像铜镜，湖像白银盘，君山像青螺。
师：诗人把平静的湖面比作铜镜，为什么偏偏用"未磨"的铜镜，而不用磨得亮晶晶的铜镜呢？
生：因为月光下的湖面不是明亮的，而是迷迷蒙蒙的。
师：说得真好！磨过的铜镜亮得晃眼，而月光下的洞庭湖笼着薄纱似的雾气，隐隐约约、朦朦胧胧，用"未磨"的铜镜来比，才最像、最美。这就是比喻的妙处：要找到最像的那个比喻。
师：再看"白银盘里一青螺"。洞庭湖那么大，君山也不小，可诗人把它比作"盘"和"螺"，这样写让你觉得洞庭湖怎么样？
生：觉得很宁静、很秀美，像一幅画。
师：是的，一大一小，一白一青，色彩鲜明，想象奇特。因为诗人是远远地"望"，远看才会把大湖看成盘子、把山看成小螺。这个"望"字，让整个比喻都有了根据。
生：（再次齐读全诗，边读边想象，体会比喻之美）
师：让我们配乐朗读，读出这份宁静的美。
生：（配乐朗读）

学生活动：寻找诗中的比喻，讨论"未磨"之妙，比较比喻的色彩和大小，在朗读中想象画面、体会美感。

设计意图：紧扣"比喻"这一核心语言现象，用"找比喻、比一比、说妙处"三步品析，引导学生不仅知道"用了比喻"，更能说出"为什么用这个比喻、妙在哪里"，让赏析有了方法、有了深度，让学生在审美中感受祖国山河之美。

**环节五 小结与作业（约 5 分钟）**

教师活动：
师：让我们闭上眼睛，跟着老师再"望"一次洞庭湖。湖光秋月两相和……
生：（闭眼齐诵全诗）
师：谁能用自己的话说一说，你眼前浮现了一幅怎样的画面？
生：月光下的洞庭湖平静得像一面镜子，远处的君山像青螺一样立在湖中……
师：讲得真美！这首诗，我们不仅要会读、会背，还要会默写。请大家看老师写"潭"和"螺"两个字，注意"潭"有"氵"旁，"螺"的左边是"虫"字。
（范写，强调易错点）
师：课后作业：一是背诵并默写《望洞庭》；二是用上比喻，写一写你看到的一处景物，比如"弯弯的月亮像什么"。
生：（齐声答应）
师：一千多年前，刘禹锡面对人生低谷，依然能欣赏山水之美，写下这首乐观开朗的诗。希望同学们也能像他一样，心里永远装着美好。下课！

学生活动：闭眼想象画面并描述，观察教师范写，明确作业要求，在美好的回味中结束课堂。

设计意图：以"闭眼望洞庭"的方式整体回扣诗歌画面，落实背诵默写要求，把"会写"落到实处；作业设计既巩固背诵，又让学生尝试运用比喻写句子，实现从"学诗"到"用诗"的迁移；结尾以诗人的乐观精神点题，落实立德树人。

**板书设计**

（图示化）
望洞庭（刘禹锡）
湖光  秋月  两相和
潭面  无风  镜未磨
遥望  山水翠
白银盘（洞庭湖）＋青螺（君山）
比喻之妙：未磨的铜镜，最像月夜迷蒙的湖面
朗读节奏：湖光/秋月/两相和
（简笔画：一轮弯月、一面铜镜、一只银盘托青螺）

**教学反思要点**

1. 古诗教学要"读"字当头，本课朗读贯穿全课，但要注意朗读形式的多样性和目的的梯度，避免机械重复。
2. "镜未磨"的比喻是本课难点，青铜镜对比图是关键，课前要准备好清晰直观的图片，课堂上给学生充分的观察时间。
3. 学生描述画面时容易只"翻译"不"想象"，要引导他们在关键处"停一停"，闭上眼睛把画面放大、丰富起来。
4. 默写是三年级的硬要求，"潭""螺"等易错字要当堂过关，不能全放到课后。
5. 对比阅读《暮江吟》可作为学有余力学生的拓展作业，鼓励比较两首写水景月夜诗的异同。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是统编版小学语文三年级上册第六单元的《古诗：望洞庭》。

**一、说教材**

《望洞庭》是唐代诗人刘禹锡写的一首山水诗，写于诗人赴任和州途中。全诗以"望"字统领，描绘了秋夜月光下洞庭湖平静秀美的景色："湖光秋月两相和"写水光月色交融的和谐；"潭面无风镜未磨"写湖面的平静朦胧；"遥望洞庭山水翠"写远望湖光山色的青翠；"白银盘里一青螺"以奇特的比喻，把洞庭湖比作白银盘、把君山比作青螺。全诗想象奇特、意境宁静优美，表现了诗人对祖国山河的热爱和乐观豁达的情怀。本课在单元中承担着"借助注释理解诗句、想象画面"的任务，对培养学生古诗阅读能力具有重要作用。此外，这首诗语言凝练、意境深远，是引导学生学习"想象画面、品析比喻"的极好范例，对落实语文要素、提升学生的审美素养具有重要价值。

**二、说学情**

三年级学生已经学习了不少古诗，具备初步的朗读和借助注释理解诗意的能力，对古诗的节奏有了基本感知。但他们对古诗词的意象、比喻等表达手法的体会还比较浅，理解"镜未磨"这类需要结合古代文化知识的比喻存在一定困难。同时，他们的想象力正处于快速发展期，需要教师引导，把诗句转化为鲜活的画面。因此，教学中我既要借助直观手段降低理解难度，又要给学生充分的想象空间，让每个孩子都能走进诗境。

**三、说教学目标**

我确定了三个教学目标：第一，认识诗人刘禹锡，了解创作背景，认识"庭、镜、螺"等生字，能正确、流利、有感情地朗读并背诵、默写全诗；第二，借助注释理解诗句意思，能用自己的话说出秋夜洞庭湖的美景，想象诗句描绘的画面；第三，品味"镜未磨""白银盘""青螺"等比喻的精妙，体会诗人奇特的想象和乐观豁达的情怀，感受祖国河山的壮美。

**四、说重难点**

教学重点是理解诗意、想象画面、背诵默写全诗；教学难点是体会两个比喻的妙处，特别是理解"潭面无风镜未磨"为什么用"未磨"的铜镜作比。这个难点源于学生缺少古代铜镜的知识，需要借助直观图片来突破。

**五、说教法学法**

我主要采用以下教法：诵读感悟法，以读代讲、以读悟情；画面想象法，引导学生把诗句还原成画面；比喻品析法，用"找本体、找喻体、说特点"三步赏析比喻；再辅以图片直观和资料补充。学生的学习方式是自主探究、合作交流，教师只在难点处点拨，真正做到以学定教。在朗读上，我采用"初读读准、再读读顺、三读读出节奏、四读读出画面、五读读出情感"的阶梯式设计，让每一次朗读都有明确的目标，让朗读成为理解诗意、体会诗情的主要途径。

**六、说教学过程**

我设计了五个教学环节。第一个环节是情境导入，大约 5 分钟。我出示洞庭湖图片，介绍诗人刘禹锡和写作背景，理解"望"的含义，激发学习期待。

第二个环节是初读古诗、读准节奏，大约 9 分钟。我配乐范读，带学生读准字音、认识生字，理解"磨"字的读音和意思，再通过拍手读的方式体会七言诗的节奏，多种形式读熟全诗。

第三个环节是理解诗意，大约 12 分钟。我让学生借助注释自学，同桌交流，重点突破"和""镜未磨""白银盘""青螺"等词句。其中，出示"铜镜磨与未磨"的对比图，直观化解"镜未磨"的理解障碍。在理解"镜未磨"时，我先让学生大胆猜一猜古人做镜子的方法，再出示铜镜图片，让猜想得到验证，印象会格外深刻。这一设计把难点转化成学生探究的乐趣。

第四个环节是品析比喻，大约 9 分钟。我引导学生找比喻、比一比、说妙处，体会"未磨"之妙在于写出月夜湖面的朦胧美，"白银盘里一青螺"妙在一大一小、一白一青的色彩对比和奇特想象，并在配乐朗读中感受画面的宁静美。品析比喻时，我会借助板书，让学生看着画面说比喻，边说边想象，把诗句、画面和感受真正融为一体。

第五个环节是小结与作业，大约 5 分钟。我带领学生闭眼"望洞庭"，回顾画面，指导默写易错字"潭""螺"，布置背诵默写和仿写比喻句两项作业，最后以诗人的乐观精神升华主题。默写环节我会当堂留出三分钟，让学生现场默写、同桌互批，当堂纠错，确保默写质量。

**七、说板书设计**

我的板书以"望洞庭"为题，依次呈现每句诗的关键词，用简笔画画出一弯明月、一面铜镜、一只白银盘托着青螺，突出"比喻之妙"这个核心。板书图文并茂，与教学进程同步生成，成为学生理解诗意的支架。

**八、说反思与效果预测**

本课的设计坚持"读字当头、想象为翼、比喻为核"。需要反思的是，理解诗意环节要防止逐句翻译的呆板，应让想象和朗读始终伴随理解；比喻品析要引导学生说出自己的体会，避免教师一讲到底。效果预测上，学生能正确、流利、有感情地朗读并背诵全诗，能说出诗句的意思，多数学生能体会比喻的精妙，热爱祖国河山的情感得到激发，教学目标能够达成。同时，这首诗与《暮江吟》都写水景月夜，对比阅读既能开阔视野，也能帮助学生发现同类诗歌的共性与个性。

我的说课到此结束，谢谢大家！`},"小学|四年级|语文|古诗：暮江吟":{plan:`**教学基本信息**

课题：古诗：暮江吟
教材版本：统编版小学语文四年级上册第九单元
年级：四年级
课型：古诗教学课
课时：公开课 1 课时（40 分钟）
授课对象：小学四年级学生

**教学目标**

1. 认识诗人白居易，了解《暮江吟》的创作背景；会认会写本课生字，能正确、流利、有感情地朗读并背诵、默写全诗，积累经典，增强文化自信。
2. 借助注释和插图理解诗句意思，能用自己的话说出诗中描绘的"夕阳晚照""月夜露珠"两幅画面，发展语言运用能力。
3. 品味"铺""瑟瑟""可怜"等词语的表达效果，体会比喻、色彩对比等写法，感受诗人对大自然的热爱与轻松愉悦的心情，培养审美创造能力。

**教学重难点**

重点：理解诗意，想象画面，背诵默写全诗。
难点：体会"一道残阳铺水中"中"铺"字的精妙；理解"可怜"的古今异义。

**教学准备**

多媒体课件（江边夕照图、月夜露珠图、残阳铺水动态图）；配乐朗读音频；白居易资料卡；"可怜"古今义对比表；学习任务单。

**教学过程**

**环节一 情境导入：傍晚江边的邀请（约 5 分钟）**

教师活动：
（课件出示一幅落日余晖洒在江面上的图片）
师：同学们，一天之中，你最喜欢哪个时候？
生：傍晚！太阳快落山的时候最美！
师：一千多年前，有一位大诗人，在傍晚坐船经过长江，被眼前的景色迷住了，一口气写下这首《暮江吟》。这位诗人就是白居易。
（板书课题，出示白居易资料）
师：白居易字乐天，号香山居士，是唐代的大诗人。他的诗通俗易懂，连不识字的老奶奶都能听懂。这首《暮江吟》，写在他离开京城、前往杭州做官的路上。离开了让人烦心的朝堂纷争，白居易的心情特别轻松愉快，一路上看到的美景，都成了他笔下的诗。
生：（了解背景）
师："暮"是傍晚，"江"是江水，"吟"是古代诗歌的一种体裁。《暮江吟》就是吟咏傍晚江上美景的诗。我们一起来读课题。
生：（齐读课题）

学生活动：看图谈感受，了解诗人和创作背景，理解题意，带着"心情舒畅"的预期进入诗歌。

设计意图：用直观的夕照图唤起学生对傍晚之美的生活体验，再以白居易"离开京城、轻松赴任"的背景切入，为理解"可怜"即可爱的情感基调做好铺垫，让学生带着情感预期读诗，读得更入味。

**环节二 初读古诗：读准字音读出节奏（约 9 分钟）**

教师活动：
师：先听老师读，注意字音和节奏。
（教师配乐范读）
师：一道/残阳/铺水中，半江/瑟瑟/半江红。可怜/九月/初三夜，露似/真珠/月似弓。
生：（跟读）
师：这首诗里有三个重点词需要注意。"残阳"，就是快要落山的太阳，也就是夕阳；"瑟瑟"，指江水背光的部分呈现青绿色；"可怜"，可别理解成"值得同情"，在古代它表示"可爱、令人喜爱"。我们先把这几个词读准。
生：（读词理解）
师：七言诗有节奏，我们拍手读一读。
生：（拍手读全诗）
师：谁来展示？读出节奏，读出韵味。
生：（个别读、男女生对读）

学生活动：听范读、跟读，理解重点词，拍手读出节奏，多种形式练读全诗。

设计意图：朗读分层推进，先解决字音，再突出"残阳、瑟瑟、可怜"三个理解难点词，为后文学习扫清障碍；拍手读节奏让七言诗的韵律感直抵学生心间。

**环节三 理解诗意：品词悟景话画面（约 12 分钟）**

教师活动：
师：我们把诗读通顺了，接下来就要读懂它。请同学们借助注释，同桌合作，说说每句诗的意思。
生：（自主学习，同桌交流）
师：谁来读第一句？"一道残阳铺水中"，夕阳的余晖铺在江面上。注意这个"铺"字，老师把它换一换，变成"照"和"射"，你读读看，哪个好？
生："铺"好，"照"和"射"太用力了。
师：为什么？夕阳是贴着江面斜斜地照过来，光线的范围很大，像把一块红绸子平平地铺在江面上，所以用"铺"最合适。一个"铺"字，写出了夕阳余晖柔和、平缓、宽广的美。
生：（齐读第一句）
师：第二句"半江瑟瑟半江红"。太阳照到的一半江水是红的，背光的一半是青绿的。想象一下，一条江，一半红、一半绿，多么奇妙的景象！
生：（结合画面说句意）
师：第三句"可怜九月初三夜"，九月初三的夜晚多么可爱！这里的"可怜"就是"可爱"的意思，和今天说的"可怜"完全不同，这叫古今异义。
生：（齐读第三句）
师：第四句"露似真珠月似弓"。草叶上的露珠像珍珠一样晶莹剔透，一弯新月像弓一样挂在天边。注意，诗里写的是"真珠"，不是"珍珠"，默写的时候要小心。
生：（齐读第四句，体会画面）
师：谁能把整首诗的意思连起来说一说？
生：（完整描述画面）

学生活动：借助注释自学、同桌合作，在教师引导下理解"铺""瑟瑟""可怜""真珠"等词的妙处，完整描述诗的画面。

设计意图：以"品词"带动"悟景"，抓住"铺"字用换字比较法体会其精妙，抓住"可怜"突破古今异义，抓住"真珠"提醒书写易错点；从词到句、从句到画面，学生经历了一次完整的理解过程。

**环节四 深读赏析：一诗两景看手法（约 10 分钟）**

教师活动：
师：这首诗特别有意思，它写了两个时间的画面。前两句写的是什么时候？
生：太阳快落山的时候。
师：后两句呢？
生：夜晚，月亮都出来了。
师：对！从"残阳铺水"到"月似弓"，诗人把黄昏和入夜两幅画面写进了同一首诗。前一幅画，一半红、一半绿，色彩浓烈，是"暖色"；后一幅画，露珠晶莹、新月如钩，清冷宁静，是"冷色"。一暖一冷，美不胜收。
生：（感受两幅画面的对比）
师：我们再来看诗中的两个比喻。"露似真珠月似弓"，把露珠比作珍珠，把新月比作弯弓。为什么像？
生：露珠晶莹剔透像珍珠，新月弯弯的像弓。
师：比喻要抓住事物的相似点，白居易就抓得特别准。我们再读一读这两句，读出夜色中的宁静之美。
生：（配乐朗读）
师：回顾全诗，你觉得这首诗表达了诗人怎样的感情？
生：他喜欢傍晚的江景，心情很愉快。
师：是啊，白居易离开纷争的京城，看到这样美的景色，心里充满了对大自然的热爱，也充满了轻松和快乐。带着这份心情，我们完整地、美美地读一遍《暮江吟》。
生：（配乐齐读）

学生活动：梳理两幅画面，比较色彩的冷暖对比，品味比喻的相似点，在反复诵读中体会诗人的情感。

设计意图：通过"时间线"让学生发现一诗两景的结构之美，通过"冷暖对比"体会色彩描写的妙处，通过"找相似点"掌握比喻的赏析方法；情感体会水到渠成，让朗读真正成为"有理解的朗读"。

**环节五 小结与作业（约 4 分钟）**

教师活动：
师：今天，我们跟着白居易欣赏了两幅美丽的画面：夕阳铺江、露似真珠。让我们闭上眼睛，把这两幅画面记在心里。
（配乐，师生齐诵全诗）
师：谁能说说这节课你有什么收获？
生：我学会了"铺"字用得特别妙，还知道了"可怜"在古代是"可爱"的意思。
师：收获满满！请同学们完成两个课后任务：一是背诵并默写《暮江吟》，注意"真珠"的写法；二是像白居易一样，傍晚时观察一处景物，用一两句诗一样的句子写一写它。
生：（齐声答应）
师：生活中的美，需要我们有一双发现的眼睛。愿大家都能像白居易一样，心里装着美好，眼里装着风景。下课！

学生活动：闭眼回想画面，交流学习收获，明确作业，带着对美的向往结束全课。

设计意图：以"回想画面、交流收获"的方式收束全课，让学生自己提炼学习所得，突出"一诗两景、用词精妙"的核心；背诵默写与观察写话两类作业，兼顾积累与运用，让古诗学习走向生活。

**板书设计**

（图示化）
暮江吟（白居易）
一诗两景：
黄昏：一道残阳铺水中，半江瑟瑟半江红（暖色）
入夜：可怜九月初三夜，露似真珠月似弓（冷色）
词语之妙：铺（柔和、平缓）  瑟瑟（青绿）  可怜（可爱）
比喻：露珠如真珠，新月如弯弓
（上方画夕阳与红绿两半的江水，下方画弯月与露珠，中间画一条时间箭头）

**教学反思要点**

1. "铺"字赏析是本课的灵魂，换字比较法要让学生真的读一读、比一比，让"妙"从朗读中自然生发，而不是教师直接告知答案。
2. "可怜"的古今异义是学生最容易错的地方，课上要设计语境练习，让学生学会"根据语境判断词义"的方法。
3. 一诗两景的结构梳理能帮助学生建立整体视角，板书的时间箭头要边学边画，让板书的生成过程成为理解的支架。
4. 配乐朗读能有效营造意境，但音乐音量要适中，不能盖过学生的诵读声。
5. 课后观察写话作业，要给学生提供"半月、露珠、灯火"等观察角度的提示，让作业真正可行、可评。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是统编版小学语文四年级上册的《古诗：暮江吟》。

**一、说教材**

《暮江吟》是唐代大诗人白居易写的一首写景抒情诗，写于诗人离开京城、前往杭州赴任途中。全诗四句写了两个时间段的景色：前两句写夕阳西沉时"一道残阳铺水中，半江瑟瑟半江红"的光影奇景，后两句写入夜后"可怜九月初三夜，露似真珠月似弓"的清幽画面。全诗色彩鲜明、比喻贴切、语言通俗，流露出诗人离开纷争后轻松愉悦的心情和对大自然的热爱。本课在古诗单元中承担着"借助注释理解诗意、体会诗人表达的情感"的任务，是学生积累经典、学习品词析句的重要文本。本诗前两句写景、后两句抒情，写景与抒情水乳交融，是学生体会"一切景语皆情语"的绝佳文本，对培养他们的观察力和审美力具有独特价值。

**二、说学情**

四年级学生已经具备一定的古诗学习经验，能借助注释初步理解诗意，掌握了一些基本的朗读技巧。但他们对于"一字传神"的语言品味还比较薄弱，对"铺""可怜"这类词语的表达效果体会不深；古今异义也是四年级学生理解的难点，需要教师设计具体语境帮助学生辨析。在教学中，我既要注意保护他们原有的古诗学习兴趣，又要适时拔高要求，引导他们从"读懂"走向"读透"。

**三、说教学目标**

我确定了三个教学目标：第一，认识诗人白居易，了解创作背景，会认会写本课生字，能正确、流利、有感情地朗读并背诵、默写全诗；第二，借助注释和插图理解诗句意思，能用自己的话说出诗中的两幅画面；第三，品味"铺""瑟瑟""可怜"等词语的表达效果，体会比喻、色彩对比等写法，感受诗人对大自然的热爱与轻松愉悦的心情。

**四、说重难点**

教学重点是理解诗意、想象画面、背诵默写全诗；教学难点是体会"一道残阳铺水中"中"铺"字的精妙，以及理解"可怜"的古今异义。这两个点一个是语言之妙，一个是词义之变，都是四年级学生容易困惑的地方，需要在课堂上重点突破。

**五、说教法学法**

我采用诵读感悟法，以读促悟；字词品析法，用"换字比较"体会"铺"字之妙；情境想象法，通过图片和音乐帮助学生建立画面；对比阅读法，为学有余力的学生提供《望洞庭》进行拓展。学生在读读、想想、议议、读读中走进诗境，品味语言。其中，"换字比较法"是本课的重点学法：把"铺"换成"照""射"等词让学生反复朗读比较，在比中体会"铺"字的精妙，在比中感受用词的讲究。这样的方法学生学得会、用得上，可以迁移到今后的古诗学习中。

**六、说教学过程**

我设计了五个教学环节。第一个环节是情境导入，大约 5 分钟。我用落日江景图唤起学生的生活体验，介绍白居易和"离开京城、轻松赴任"的写作背景，理解题意，为全诗定下愉悦的基调。

第二个环节是初读古诗、读准节奏，大约 9 分钟。我配乐范读，带学生读准字音，重点理解"残阳""瑟瑟""可怜"三个词，再拍手读出七言诗的节奏，多种形式练读全诗。

第三个环节是理解诗意、品词悟景，大约 12 分钟。我引导学生借助注释自学，抓住"铺"字用"铺、照、射"三字换字比较，体会夕阳余晖柔和平缓之美；理解"半江瑟瑟半江红"的色彩奇景和"可怜"的古今异义，完整描述诗的画面。在突破"可怜"一词时，我会出示两个句子让学生判断：一个是"这只小猫真可怜"，一个是"可怜九月初三夜"，引导学生联系语境判断词义，既理解了诗意，又掌握了理解古今异义词的方法。

第四个环节是深读赏析，大约 10 分钟。我引导学生发现"一诗两景"的结构，体会黄昏与入夜一暖一冷的对比之美，品味"露似真珠月似弓"两个比喻的相似点，在配乐朗读中读出宁静之美，体会诗人的情感。两幅画面的对比，我会引导学生在朗读中感受：前两句读得舒展明亮，后两句读得轻柔宁静，用声音的变化表现画面的变化。

第五个环节是小结与作业，大约 4 分钟。我带领学生回顾画面、交流收获，布置背诵默写和观察写话两项作业，点明"发现美"的育人主题。作业中的观察写话，我会提供"月亮、露珠、晚霞"等提示词，并提醒学生像白居易一样，抓住景物的样子和色彩来写。

**七、说板书设计**

我的板书以"暮江吟"为题，用一条时间箭头把"黄昏"与"入夜"两幅画面连接起来：左侧写夕阳铺江、半江红绿，右侧写露珠如珠、新月如弓，下方点出"铺、瑟瑟、可怜"等词语之妙。板书清晰呈现一诗两景的结构和品词析句的成果，是学生理解诗意的直观支架。

**八、说反思与效果预测**

本课的设计紧扣"品词析句、想象画面"两条主线。需要反思的是，品词环节要避免教师急于揭晓答案，应让学生在朗读和比较中自己悟出来；一诗两景的结构梳理要借助板书自然生成，不搞贴标签式的讲解。效果预测上，学生能背诵默写全诗，能说出诗句意思和画面，多数学生能体会"铺"字之妙、理解"可怜"的古今异义，对古典诗词的兴趣得到激发，教学目标基本达成。此外，课后我会收集学生的观察写话作品，挑选精彩的读给全班听，让课堂的收获延伸到生活的每一天。

我的说课到此结束，谢谢大家！`}},rs={"小学|五年级|语文|古诗：己亥杂诗":{plan:`**教学基本信息**

课题：古诗：己亥杂诗
教材版本：统编版小学语文五年级上册第四单元
年级：五年级
课型：古诗教学课
课时：公开课 1 课时（40 分钟）
授课对象：小学五年级学生

**教学目标**

1. 认识诗人龚自珍，了解《己亥杂诗》这一大型组诗的创作背景；会认会写本课生字，能正确、流利、有感情地朗读、背诵并默写全诗，积累经典，增强文化自信。
2. 借助注释理解诗句意思，能用自己的话说出诗中描绘的黄昏辞别图景，体会"浩荡离愁"中离愁的深广无边，发展语言运用能力。
3. 品味"落红不是无情物，化作春泥更护花"的深刻含义，学习借物抒怀、托物言志的写法，感受诗人辞官后仍心系国家、甘于奉献的爱国情怀，培育家国情怀。

**教学重难点**

重点：理解诗意，体会"落红化作春泥更护花"的比喻链条，背诵并默写全诗。
难点：理解"落红不是无情物，化作春泥更护花"的深层含义，体会诗人离愁与报国之志交织的复杂情感。

**教学准备**

多媒体课件（龚自珍画像、创作背景资料、黄昏策马图、落花化泥护花图）；配乐朗读音频；生字卡片；学习任务单。

**教学过程**

**环节一 情境导入：走近龚自珍（约 4 分钟）**

教师活动：
（课件出示龚自珍画像和黄昏策马远行的剪影图）
师：同学们，在中国近代历史上，有一位了不起的诗人、思想家，他叫龚自珍。他生活在清朝，亲眼看到国家闭关锁国、暮气沉沉，一心主张改革。可是他的主张得不到重用，于是在四十八岁那一年，他辞去官职，离开了京城。
生：（专注倾听）
师：辞官回家的路上，他没有一走了之，而是写下了一组大型组诗，叫《己亥杂诗》，一共三百一十五首！今天我们要学的，就是其中最著名的一首，写在离开京城、回归故乡的路上。
（板书课题：己亥杂诗）
生：（齐读课题）

学生活动：听老师讲述诗人的故事，了解创作背景，齐读课题，带着好奇进入学习。

设计意图：用诗人"主张改革却辞官离京"的人生故事导入，既交代了创作背景，又为理解"辞官了为什么还要为国效力"这一核心问题埋下伏笔，激发学生的探究兴趣。

**环节二 初读古诗：读准字音读出节奏（约 8 分钟）**

教师活动：
师：先听老师把这首诗读一遍，注意听准字音和节奏。
（教师配乐范读全诗）
师：浩荡/离愁/白日斜，吟鞭/东指/即天涯。落红/不是/无情物，化作/春泥/更护花。
生：（跟读）
师：这首诗里有几个字要读准，比如"浩""涯"。请同学们看大屏幕，谁来读一读？
生：（读"浩荡、天涯"）
师："涯"字和水有关，是三点水旁；它和"悬崖"的"崖"容易混，"崖"有山字头，指山崖。大家一边读一边记住它们的区别。
生：（书空"涯"字）
师：古诗讲究节奏，这四句都是七言，我们按"二二一二"的节奏读，拍拍手试一试。
生：（拍手读全诗）
师：谁来展示读一读？
生：（个别读、小组读）
师：读得真棒！我们一起把节奏和韵味读出来。
生：（齐读）

学生活动：听范读、跟读，读准生字，辨析"涯"与"崖"，拍手读出七言诗的节奏，多种形式练读全诗。

设计意图：坚持"朗读第一"，先解决字音和易混字，再通过拍手标节奏读出七言诗的韵律，让"读准、读通、读出节奏"层层落实，为理解诗意奠定基础。

**环节三 品读诗句：借助注释理解诗意（约 12 分钟）**

教师活动：
师：读熟了，我们还要读懂。请同学们借助注释，同桌合作，试着说一说每句诗的意思。
生：（自学注释，同桌交流）
师：谁来汇报第一句？"浩荡离愁白日斜"。
生：离别的愁绪像江水一样浩荡无边，夕阳西斜，天色将晚。
师："浩荡"本来形容水势广大，这里用来形容离愁，说明离愁怎么样？
生：愁绪多得无边无际。
师：对！黄昏时分，太阳西斜，这样的时间，这样的景色，更增添了离别的伤感。第二句"吟鞭东指即天涯"，"吟鞭"指什么？"天涯"又是什么意思？
生："吟鞭"是诗人的马鞭；"天涯"是天边，指遥远的地方。
师：诗人扬鞭策马，向东走去，仿佛一下子就走到了天边，离京城越来越远了。谁来读读前两句，把这份离愁读出来？
生：（有感情地朗读前两句）
师：后两句呢？"落红不是无情物"，"落红"是什么？
生：落花，"红"指的是花。
师：是呀，"红"借代花，火红的花瓣纷纷飘落，这就是"落红"。这句诗的意思是什么呢？
生：纷纷飘落的红花并不是无情的东西。
师："化作春泥更护花"呢？
生：它化作春天的泥土，还要培育呵护新的花朵。
师：请一位同学把整首诗的意思连起来说一说。
生：（完整复述诗意）

学生活动：借助注释自主理解，同桌合作交流，在教师追问下弄清"浩荡""吟鞭""天涯""落红"等词的意思，完整说出诗意。

设计意图：以学为主，让学生先借助注释自读自悟，教师只在关键处点拨；抓住"浩荡"的比喻义和"红"的借代义等难点词，由词到句、由句到整首诗，让理解诗意落到实处。

**环节四 品析名句：体会落红护花的情怀（约 13 分钟）**

教师活动：
师：这首诗最打动人的，是后两句。大家看，诗人写的是"落红"，也就是落花。落花落到地上，会怎么样呢？
生：会烂掉，变成泥土。
师：变成泥土干什么？
生：滋养新的花朵！
师：这就是"化作春泥更护花"。现在请你们想一想：落花像是谁？
生：像诗人自己！
师：为什么？
生：因为诗人也离开了，就像落花离开枝头。
师：说得好！落花离开枝头，就像诗人离开官场；落花化作春泥，还要培育新花，就像诗人——他虽然辞了官，离开了京城，可依然心系国家，愿意用自己的力量去培养人才、报效国家。谁来读一读这两句，读出这份坚定？
生：（有感情地朗读后两句）
师：所以"落红"和"春泥"都寄托着诗人的情感。这种借助事物来表达志向和情感的写法，就叫"托物言志"，也叫"借物抒怀"。诗的前两句借景物渲染离愁，是"借景抒情"；后两句借落花表达报国之志，是"托物言志"。
生：（齐读，体会写法）
师：同学们，诗人辞了官，心里却依然装着国家，你想对他说什么？
生：龚自珍真了不起，离开了官场还想着为国家做贡献！
师：是啊，全诗虽然有离别的愁绪，但更有昂扬向上的力量。带着这份敬意，我们配乐齐读全诗。
生：（配乐齐读）

学生活动：在层层追问中理解"落红、春泥、护花"的比喻，体会诗人借物抒怀的写法，谈自己的感受，有感情地诵读全诗。

设计意图：抓住名句深入品析，用"落花像谁"的问题架起比喻的桥梁，帮助学生理解"辞官离京仍愿报国"的深层含义；点明借景抒情与托物言志两种写法，让古诗学习有方法、有深度，在诵读中培育家国情怀。

**环节五 小结与作业（约 3 分钟）**

教师活动：
师：今天，我们认识了诗人龚自珍，读懂了这首《己亥杂诗》。谁能背一背？
生：（背诵全诗）
师：背得真好！请大家看老师范写易错字。"鞭"左边是革字旁，右边是"便"；"涯"是三点水旁，不要写成山字头的"崖"。
（范写易错字）
师：课后请完成两个任务：一是背诵并默写《己亥杂诗》；二是查一查龚自珍的另一名句"我劝天公重抖擞，不拘一格降人才"，想一想它表达了什么愿望。
生：（齐声答应）
师：愿同学们都能像落花一样，做一个心里装着别人、愿意奉献的人。下课！

学生活动：当堂背诵，观察易错字书写，明确作业要求，带着对诗人和诗句的敬意结束课堂。

设计意图：当堂落实背诵，扫清默写易错点；拓展"不拘一格降人才"名句，让学生对诗人的思想有整体认识，把爱国情怀的种子种进学生心里，实现文道统一。

**板书设计**

（图示化）
己亥杂诗（龚自珍）
离愁：浩荡离愁白日斜，吟鞭东指即天涯（借景抒情）
报国：落红不是无情物，化作春泥更护花（托物言志）
落红——离开官场的自己
春泥护花——为国效力、培养人才
（简笔画：黄昏，策马远行的人，地面落花化作春泥，新花绽放）

**教学反思要点**

1. 龚自珍辞官的时代背景离学生较远，导入环节要用简洁生动的故事讲清"为什么辞官了还要为国效力"，避免背景介绍过长冲淡诗歌本身。
2. "落红、春泥、护花"的比喻是理解难点，要用"落花像谁"的问题引导学生自己发现，不要急于给出答案。
3. "涯"与"崖"、"鞭"的书写易错，课堂上要留出书空和当堂默写的时间，把基础夯实在课内。
4. 学生容易只读出"离愁"而忽略后两句的昂扬，品析时要引导学生关注情感的转折，读出全诗由低沉到昂扬的层次。
5. 拓展"不拘一格降人才"要简洁，重在帮助学生认识诗人的思想，不宜展开过多。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是统编版小学语文五年级上册第四单元的《古诗：己亥杂诗》。

**一、说教材**

《己亥杂诗》是清代思想家、文学家龚自珍在己亥年，也就是公元一八三九年辞官南归途中写下的大型组诗，全组共三百一十五首，本课所选是其中第五首。全诗四句，前两句"浩荡离愁白日斜，吟鞭东指即天涯"借黄昏策马远行的图景，写出离愁的深广无边；后两句"落红不是无情物，化作春泥更护花"借落花化作春泥滋养新花，表达自己离开官场仍要报效国家的志向。诗歌由离愁写到昂扬，由写景到言志，层层推进，展现了诗人宽广的胸怀和深沉的爱国情感。本课安排在五年级上册"爱国情怀"单元，承担着"借助注释理解诗意、体会诗人表达的情感"的任务，是学生积累经典、学习托物言志写法的重要文本。本单元以家国情怀为人文主题，语文要素是结合资料体会课文表达的思想感情。这首诗的情感由低沉到昂扬，非常适合训练有感情地朗读，教学中要把朗读与想象结合起来，让学生在读中想画面、悟情感，读出诗句背后的温度。

**二、说学情**

五年级学生已经积累了不少古诗，具备借助注释理解诗意的能力，对家国情怀有了初步感受，能大体读懂诗的字面意思，但要把画面说清楚、把情感说深，还需要教师的引导。但龚自珍所处的晚清背景离学生生活较远，学生很难理解"辞官了为什么还要为国效力"；"落红""春泥"这类借物抒怀的表达，学生往往只看到表面的画面，体会不到深层的志向。同时，"涯"与"崖"、"鞭"等字容易写错。因此，教学需要在背景介绍和比喻探究上着力，引导学生从"读得懂"走向"读得深"。同时，学生默写时容易把"吟鞭"的"鞭"、"天涯"的"涯"写错，课堂上要安排书空和当堂默写，把基础夯实在课内。

**三、说教学目标**

我确定了三个目标：第一，认识诗人龚自珍，了解创作背景，会认会写本课生字，能正确、流利、有感情地朗读、背诵并默写全诗；第二，借助注释理解诗句意思，能用自己的话说出诗中画面，体会离愁的深广；第三，品味"落红化作春泥更护花"的深刻含义，学习借物抒怀的写法，感受诗人的爱国情怀。

**四、说重难点**

教学重点是理解诗意，体会"落红、春泥、护花"的比喻，背诵并默写全诗；教学难点是理解名句的深层含义，体会诗人离愁与报国之志交织的复杂情感。这一难点源于学生缺乏历史背景知识，需要借助资料和层层追问来突破。教学中，我会先讲清辞官南归的背景，扫清理解障碍，再用"落花像谁"的追问引导学生由物及人，把名句真正读懂读透。

**五、说教法学法**

我主要采用诵读感悟法，以读促悟、以读激情；资料补充法，用简洁的史料帮助学生了解背景；品词析句法，抓住"浩荡""落红""春泥"等关键词深入品味；再配合图示板书辅助理解。学生的学法以自主学习、同桌合作、想象画面为主。在名句品析时，我坚持"先读后悟、由物及人"：先读熟句子，再通过"落花像谁"的问题，把落花与诗人联系起来，让比喻从学生口中长出来，而不是教师讲出来。课堂上我还会保证充分的朗读时间，以读代讲、以读激情，让每一次朗读都有明确的目标：初读读准，再读读通，三读读出节奏，四读读出情感。

**六、说教学过程**

我设计了五个教学环节。第一环节是情境导入，约四分钟，通过讲述龚自珍辞官南归的故事，引出组诗和课题，激发兴趣。第二环节是初读古诗，约八分钟，我配乐范读，带学生读准字音、辨析"涯"与"崖"，拍手读出七言诗节奏。第三环节是理解诗意，约十二分钟，学生借助注释自学、同桌交流，教师点拨"浩荡""落红"等难点词，完整说出诗意。第四环节是品析名句，约十三分钟，围绕"落花像谁"层层追问，体会托物言志的写法，配乐齐读升华情感。第五环节是小结与作业，约三分钟，当堂背诵、提示易错字，拓展"不拘一格降人才"名句，布置背诵默写作业。五个环节环环相扣，朗读贯穿始终，学生在读中悟、在悟中读，始终处于主动学习的状态。

**七、说板书设计**

我的板书以"己亥杂诗"为题，分"离愁"与"报国"两个板块，左侧呈现前两句的借景抒情，右侧呈现后两句的托物言志，中间用简笔画画出落花化泥、新花绽放的图景，点明"落红、春泥、护花"的比喻链条。板书随着教学进程逐步生成，既是诗意的浓缩，也是学生理解名句的支架。

**八、说反思与效果预测**

本课的设计抓住"背景"和"比喻"两个关键。需要反思的是，背景介绍要克制，不能冲淡诗歌的韵味；品析名句时要防止教师一讲到底，应让学生在想、说、读中自己悟出深意。效果预测上，学生能正确流利地朗读、背诵全诗，能说出诗句的意思，多数学生能借助"落红护花"理解诗人的报国之志，爱国情怀得到感染和熏陶，教学目标基本达成。同时，我还会在课堂上关注学生的朗读表现，及时调整指导策略；课后分层跟进，基础较弱的学生以朗读、背诵、默写过关为主，学有余力的学生尝试赏析《己亥杂诗》组诗中的其他诗篇，让每个孩子都有收获。

我的说课到此结束，谢谢大家！`},"小学|六年级|语文|古诗：马诗":{plan:`**教学基本信息**

课题：古诗：马诗
教材版本：统编版小学语文六年级下册第四单元
年级：六年级
课型：古诗教学课
课时：公开课 1 课时（40 分钟）
授课对象：小学六年级学生

**教学目标**

1. 认识"漠、燕、络"等生字，读准"燕山（yān）""金络脑（luò）"等字音，正确书写"钩""燕"等字，能正确、流利、有感情地朗读并背诵《马诗》，读出五言诗的节奏，积累经典，增强文化自信。
2. 借助注释和资料理解诗句意思，想象诗中描绘的大漠月夜图景，能用自己的话说出诗中的画面，发展语言运用能力。
3. 体会"何当金络脑，快走踏清秋"中寄托的志向，理解"托物言志"的写法，感受诗人渴望建功立业、报效国家的志向，培育正确的志向观。

**教学重难点**

重点：理解诗句意思，想象大漠月夜画面，有感情地朗读并背诵古诗。
难点：体会"何当金络脑，快走踏清秋"中寄托的志向，理解托物言志的写法。

**教学准备**

多媒体课件（大漠月夜图片、弯刀如钩与弯月对比图、金络脑马具图片）；李贺生平资料卡；生字卡片；配乐朗读音频。

**教学过程**

**环节一 情境导入：认识诗鬼李贺（约 4 分钟）**

教师活动：
（课件出示大漠月夜的壮美图片）
师：同学们，看大屏幕。广袤无垠的沙漠，一轮弯弯的月亮挂在天边，这样的夜晚，你想到了什么？
生：很辽阔，很安静；想去沙漠里骑马驰骋！
师：一千二百多年前，一位叫李贺的唐代诗人，就在这样的夜晚，写下了一首咏马的诗。李贺才华横溢，想象奇特，人们称他"诗鬼"；他和李白、李商隐并称"唐代三李"。他一生写过二十三首《马诗》，都是借马来抒发心志，我们今天学的，是其中最著名的一首——第五首。
（板书课题：马诗）
生：（齐读课题）

学生活动：欣赏大漠月夜图，谈自己的联想，了解"诗鬼"李贺，齐读课题，进入学习情境。

设计意图：用大漠月夜图把学生带入辽阔苍茫的情境，用"诗鬼""唐代三李"引发学生对诗人的兴趣，明确"咏物诗"和"借马言志"的阅读期待，为理解托物言志做好铺垫。

**环节二 初读古诗：读准字音读出节奏（约 8 分钟）**

教师活动：
师：先听老师把这首诗读一遍，注意听准字音和节奏。
（教师配乐范读）
师：大漠/沙如雪，燕山/月似钩。何当/金络脑，快走/踏清秋。
生：（跟读）
师：这首诗里有几个字的读音要特别注意。"燕山"的"燕"读第一声 yān，它是地名；而燕子的"燕"读第四声 yàn。谁来读一读？
生：（读"燕山"）
师："金络脑"的"络"读 luò，不读 lào。"络脑"就是马笼头，用黄金装饰的马笼头就叫"金络脑"。
生：（跟读"金络脑"）
师：五言诗一般按"二三"停顿：大漠/沙如雪，燕山/月似钩。请大家拍手读一读。
生：（拍手读全诗）
师：谁来展示？
生：（个别读、男女生对读）
师：读得真不错！我们齐读一遍。
生：（齐读）

学生活动：听范读、跟读，读准"燕""络"等字音，拍手读出五言诗节奏，多种形式练读全诗。

设计意图：字音教学突出"燕"的多音字辨析和"络"的读音，扫清朗读障碍；拍手读出五言诗"二三"停顿的节奏，让诗歌韵律直抵学生心间。

**环节三 想象画面：理解诗意说图景（约 12 分钟）**

教师活动：
师：读熟了，我们来看一看诗里藏着怎样的画面。请同学们借助注释，同桌合作，说说每句诗的意思。
生：（自学注释，同桌交流）
师：第一句"大漠沙如雪"，沙漠怎么会像雪？
生：月光照在沙子上，白白的，像铺了一层雪。
师：月光下的沙漠一片洁白，像铺上了白雪。这句用了什么写法？
生：比喻，把沙子比作雪。
师：第二句"燕山月似钩"。月亮怎么像"钩"呢？
（课件出示弯月和弯刀对比图）
师："钩"是古代的一种弯刀，弯弯的像月牙。你看，天边的弯月，和这弯刀的轮廓几乎一样。在边塞要地燕山，弯弯的月亮挂在天上，让人联想到什么？
生：让人想到征战沙场、打仗立功。
师：读这两句，你的眼前出现了一幅怎样的画面？
生：月光下大漠无边，白茫茫一片，燕山上弯月如钩，很辽阔、很苍凉。
师：请你用朗读把这份辽阔读出来。
生：（有感情地朗读前两句）
师：后两句"何当金络脑，快走踏清秋"。"何当"是什么意思？"金络脑"呢？
生："何当"是何时将要；"金络脑"是黄金装饰的马笼头。
师：戴上了金络脑的马，意味着什么？
生：表示马受到了重用。
师："踏清秋"呢？
生：在清爽的秋天的原野上奔驰。
师：谁来把这两句的意思连起来说一说？
生：什么时候才能给骏马戴上金络脑，在清爽的秋原上尽情奔驰呢？

学生活动：借助注释理解诗意，观察弯月与弯刀的对比图，想象大漠月夜的画面，在朗读中再现图景。

设计意图：抓住"沙如雪""月似钩"两个比喻，用对比图直观展示弯月与弯刀的相似，帮助学生由"看图景"联想到"征战"，理解前两句的景物描写与后两句的志向之间的内在联系。

**环节四 品悟诗志：体会托物言志（约 13 分钟）**

教师活动：
师：同学们，这首诗写的是一匹马，可是诗人真的只是在写马吗？请大家先来读一读李贺的资料。
（课件出示资料：李贺才华横溢，一心报国，却怀才不遇，二十七岁就英年早逝）
师：现在，我们再来看这匹马。马盼望戴上"金络脑"，其实是在盼望什么？
生：盼望得到朝廷的重用。
师：马渴望"快走踏清秋"，其实是在渴望什么？
生：渴望驰骋疆场、建功立业！
师：所以诗人表面写马，实际写的是谁？
生：写他自己！
师：这就是"托物言志"——先写物，再借物来表达志向。诗人借一匹盼望被重用的骏马，说出了自己渴望建功立业、报效国家的志向。一个"何当"，你读出了怎样的心情？
生：盼望了很久却还没实现，很急切，还有点无奈。
师：请同学们带着这份急切和期盼，读读后两句。
生：（有感情地朗读后两句）
师：诗中还有一种声音，就是对怀才不遇的感慨。我们对比着读一读前两句的苍凉与后两句的急切，读出全诗由景到志的层层推进。
生：（配乐齐读全诗）
师：像这样托物言志的诗，同册还有《石灰吟》和《竹石》。《石灰吟》借石灰写不怕牺牲、坚守高洁；《竹石》借竹子写坚韧不拔。它们和马诗一样，都是先写物，再借物明志。

学生活动：阅读诗人资料，在层层追问中理解"马"即"诗人"，体会"何当"中寄托的志向与感慨，联系《石灰吟》《竹石》初步感受托物言志诗的共同特点。

设计意图：补充李贺怀才不遇的资料，为学生理解"何当"提供情感支点；通过"马在盼望什么"的追问，把"写马"与"言志"打通，让托物言志的写法在学生的发现中自然生成；横向勾连同册托物言志诗，使知识结构化。

**环节五 小结与作业（约 3 分钟）**

教师活动：
师：今天，我们跟随李贺来到了大漠月夜，认识了一匹渴望驰骋疆场的骏马。谁能背一背这首诗？
生：（背诵全诗）
师：背得真好！请注意默写时"钩"不要写成"勾"，"燕"是上中下结构。请看老师范写。
（范写易错字）
师：课后请完成两个任务：一是背诵并默写《马诗》；二是用"托物言志"的眼光，读一读《石灰吟》《竹石》，想一想它们各写了什么物、寄托了什么志。
生：（齐声答应）
师：愿同学们都能像这匹骏马一样，心怀梦想，一往无前。下课！

学生活动：当堂背诵，观察易错字，明确作业要求，在"骏马"形象的激励下结束课堂。

设计意图：当堂落实背诵默写，提示易错字；拓展比较阅读任务，帮助学生掌握"写了什么物、寄托什么志"的赏析路径，把托物言志的方法迁移到新的文本中去。

**板书设计**

（图示化）
马诗（李贺）
大漠沙如雪，燕山月似钩——写景（比喻：沙如雪、月似钩）
何当金络脑，快走踏清秋——言志（托物言志）
马：金络脑（受重用）——诗人：盼望建功立业
（简笔画：一轮弯月挂在沙丘之上，一匹骏马昂首嘶鸣，马头上画出金络脑）

**教学反思要点**

1. "燕山"的"燕"读 yān 是本课高频易错点，初读环节要多请几位学生单独读，当场纠音，防止以错带错。
2. "沙如雪"不能只让学生理解为"沙子像雪"，要引导他们体会月光下大漠的清冷皎洁，读出画面背后的情感。
3. 托物言志是抽象概念，要让学生经历"先看见马、再看见人"的发现过程，资料补充要简短生动，为理解"何当"的急切服务。
4. 比较阅读《石灰吟》《竹石》时要用"写了什么物、寄托什么志"的表格支架，防止流于形式。
5. 背诵默写要当堂落实，"钩"与"勾"的辨析要在书写指导中完成。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是统编版小学语文六年级下册第四单元的《古诗：马诗》。

**一、说教材**

《马诗》是唐代诗人李贺写的五言绝句，是他二十三首《马诗》中的第五首。全诗前两句"大漠沙如雪，燕山月似钩"写景，描绘了月光下大漠辽阔、弯月如钩的边塞夜色；后两句"何当金络脑，快走踏清秋"言志，借盼望戴上金络脑的骏马，抒发了诗人渴望得到重用、建功立业的志向。诗人李贺想象奇特，人称"诗鬼"，与李白、李商隐并称"唐代三李"。本课在"托物言志"的单元中承担着核心任务，与《石灰吟》《竹石》共同构成咏物诗群，对学习借物言志的写法具有典型意义。本单元围绕志向与品质的主题编排，引导学生结合资料理解课文、感悟人物的品格志向。诗中的两个比喻"沙如雪""月似钩"，既写出景物的特点，又暗含驰骋沙场的联想，是理解全诗的关键。李贺这首诗篇幅短小却意蕴深远，一个"何当"写出盼望与感慨，是引导六年级学生品味语言、体会志向的极好文本。

**二、说学情**

六年级学生已具备较强的古诗诵读和借助注释理解诗意的能力，对"借景抒情"等手法有一定认识，但对"托物言志"这种更深层的表达方式还比较陌生，往往只看到"诗人写马"，体会不到"写马即写人"的深意。同时，"燕山"的读音、"沙如雪"的画面感、"何当"一词背后的复杂情感，都需要教师引导点拨。教学中要注意保护学生的兴趣，用资料和追问帮助他们真正走进诗人的内心。同时，学生对咏物诗并不陌生，但要准确说出托物言志的含义，还需要方法支撑，教学中要给他们搭建由物及人的思考阶梯，让抽象的概念变得看得见、摸得着。

**三、说教学目标**

我确定了三个目标：第一，认识"漠、燕、络"等生字，读准"燕山""金络脑"等字音，正确书写"钩""燕"等字，能正确、流利、有感情地朗读并背诵《马诗》，读出五言诗节奏；第二，借助注释和资料理解诗句意思，想象大漠月夜图景，说出诗中的画面；第三，体会"何当金络脑，快走踏清秋"中寄托的志向，理解托物言志的写法，感受诗人建功立业、报效国家的志向。

**四、说重难点**

教学重点是理解诗句意思、想象画面、有感情地朗读背诵古诗；教学难点是体会"何当金络脑，快走踏清秋"中寄托的志向，理解托物言志的写法。难点之所以难，在于学生缺少对李贺"怀才不遇"身世的了解，难以把马与诗人联系起来。因此，教学时我先让学生读懂马、喜欢上这匹骏马，再补充诗人的身世资料，最后在追问中建立"马"与"人"的联系，让难点的突破水到渠成。

**五、说教法学法**

我采用诵读感悟法，以读促悟；想象再现法，引导学生把诗句还原成画面；资料补充法，用李贺的生平帮助学生理解诗志；比较阅读法，联系《石灰吟》《竹石》认识托物言志的共同特点。学生的学习以自主探究、合作交流为主。在体会诗志时，我坚持"由物及人"三步走：先看清马、读懂马，再补充李贺的生平，最后追问"马在盼望什么、人在盼望什么"，让托物言志的理解水到渠成。在朗读上，我采用初读正音、再读明意、三读想象、四读悟志的层次，让朗读成为理解诗志的主要途径，整节课坚持读占鳌头，让学生在反复诵读中感受诗歌的节奏美、画面美和志趣美。

**六、说教学过程**

我设计了五个教学环节。第一环节是情境导入，约四分钟，用大漠月夜图营造氛围，介绍"诗鬼"李贺，引出课题。第二环节是初读古诗，约八分钟，重点正音"燕山""金络脑"，拍手读出五言诗"二三"节奏。第三环节是想象画面，约十二分钟，学生借助注释理解诗意，用弯月与弯刀对比图帮助学生想象画面、理解前两句。第四环节是品悟诗志，约十三分钟，补充李贺怀才不遇的资料，通过层层追问体会托物言志，并勾连《石灰吟》《竹石》形成知识群。在这个环节，我会请学生先说马的心情，再说诗人的心情，让马与人的情感一一对应，托物言志的写法就自然显露出来。第五环节是小结与作业，约三分钟，当堂背诵、提示易错字，布置比较阅读任务。整节课以骏马为线索，从看图入境到由物及人，层层深入，学生始终带着兴趣和思考在学习。

**七、说板书设计**

我的板书以"马诗"为题，分"写景"与"言志"两个板块，左侧呈现两个比喻，右侧点明"金络脑与受重用"的对应关系，中间画一匹戴着金络脑的骏马。板书图文结合，直观呈现"由物到人"的理解路径，是学生把握托物言志的支架。

**八、说反思与效果预测**

本课设计的核心是让"托物言志"这个抽象概念变得可感可悟。需要反思的是，资料补充要精当，不能让诗人的身世淹没诗歌本身的美；比较阅读要控制容量，重在方法的迁移。效果预测上，学生能正确流利地朗读背诵全诗，能说出诗意和画面，多数学生能理解"写马即写人"的深意，掌握托物言志的基本特点，教学目标基本达成。此外，默写时要重点关注"钩"与"勾"的辨析，我会在课堂书写环节逐一过关；课堂上也会安排同桌互读、小组合读等多种形式，让每一个孩子都有开口朗读的机会，确保基础扎实。

我的说课到此结束，谢谢大家！`},"小学|一年级|语文|拼音：a o e i u ü":{plan:`**教学基本信息**

课题：拼音：a o e i u ü
教材版本：统编版小学语文一年级上册汉语拼音单元
年级：一年级
课型：拼音新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学一年级学生

**教学目标**

1. 正确认读 a、o、e、i、u、ü 六个单韵母，借助图画和顺口溜读准音、认清形，学会用"观察口形"的方法发准单韵母的音，感受拼音学习的乐趣。
2. 认识声调符号，能借助"一声平、二声扬、三声拐弯、四声降"的规律和手势，正确读出六个单韵母的四声。
3. 学会在四线三格中正确书写六个单韵母，注意 i 的点、ü 的两点的位置，养成认真书写的良好习惯。

**教学重难点**

重点：读准六个单韵母的音，认清字形，会读四声。
难点：o 与 e 的发音区分，二声与三声的读法，ü 的发音与书写。

**教学准备**

多媒体课件（课本情境图：阿姨、公鸡、白鹅图）；单韵母卡片、四声调卡片；磁性四线三格黑板贴；小镜子（学生每人一面）；顺口溜图谱。

**教学过程**

**环节一 情境导入：走进拼音王国（约 4 分钟）**

教师活动：
（课件出示拼音王国的情境图，阿姨、公鸡、白鹅、衣服、乌鸦、小鱼依次出现）
师：小朋友们，今天老师要带你们去一个有趣的地方——拼音王国。拼音王国里住着许多小精灵，它们能帮助我们认识汉字、读准普通话，本领可大了！
生：（好奇地看情境图）
师：你们看，拼音王国的门口站着六个小精灵，它们长得可漂亮了。它们就是我们要认识的第一批朋友——单韵母。单韵母一共有六个，发音响亮，能单独成音节。今天我们就把它们都请进课堂来认识一下。
（板书课题：a o e i u ü）
生：（齐读课题）

学生活动：观察情境图，听老师介绍拼音王国，齐读课题，激发学习拼音的兴趣。

设计意图：用"拼音王国"的情境把抽象的拼音字母变成可爱的形象，让学生对拼音学习充满期待；明确"单韵母"的概念，为整节课定下学习目标。

**环节二 看图学音：读准六个单韵母（约 12 分钟）**

教师活动：
（课件逐幅出示情境图）
师：我们先来认识第一个朋友。看，阿姨笑呵呵地站在村口，她张大了嘴巴，好像在欢迎我们。发 a 的音时，嘴巴要张得大大的，舌头放平。看老师的口形——a、a、a。
生：（观察口形，跟读）
师：张大嘴巴 a a a。谁来读一读？
生：（个别读）
师：第二个朋友藏在公鸡的嘴巴里。公鸡打鸣，嘴巴拢得圆圆的。发 o 的音，嘴巴拢圆，像吹口哨。o、o、o。
生：（跟读，照镜子看口形）
师：圆圆嘴巴 o o o。第三个朋友是水里的白鹅。发 e 的音，嘴巴要扁扁的，嘴角向两边咧开。看看老师，再看看你们自己——e、e、e。
生：（照镜子，对比 o 和 e 的口形）
师：谁能说一说，o 和 e 的嘴巴有什么不一样？
生：o 的嘴巴圆圆的，e 的嘴巴扁扁的！
师：说得真好！圆圆的嘴巴发 o，扁扁的嘴巴发 e。我们一起再来读一读。
生：（对比读 o 和 e）
师：接下来还有三个朋友。i 像一件衣服，发 i 的音，牙齿要对齐，嘴角向两边咧开——i、i、i。u 像乌鸦的窝，嘴巴拢圆突出，像吹笛子——u、u、u。ü 像小鱼吐泡泡，先发 i 的音，再把嘴巴拢圆——ü、ü、ü。
生：（逐个跟读，照镜子观察口形）
师：六个朋友都到齐了，我们拍手读一遍顺口溜：张大嘴巴 a a a，圆圆嘴巴 o o o，扁扁嘴巴 e e e，牙齿对齐 i i i，嘴巴突出 u u u，像吹笛子 ü ü ü。
生：（拍手齐读顺口溜）

学生活动：看图猜音，照镜子观察口形，跟读模仿，对比 o 和 e 的口形，拍手齐读顺口溜。

设计意图：坚持"看图学音、口形先行"，让每个字母都有图画联想和顺口溜帮助记忆；准备小镜子让学生随时自查口形，把抽象的发音方法变得看得见、摸得着；突出 o 与 e 的对比，突破发音难点。

**环节三 认识四声：读好四种声调（约 10 分钟）**

教师活动：
师：小精灵们还会变调呢！汉语普通话有四个声调，就像四顶小帽子。大家看——
（课件出示四声调符号）
师：第一声是平的，一声平——ā；第二声往上扬，二声扬——á；第三声先降后升，拐个弯——ǎ；第四声往下降，四声降——à。
生：（跟读四声）
师：我们把小手变成小汽车，跟着老师的手势一起读。老师的手平着，读第一声；往上扬，读第二声；先下后上拐个弯，读第三声；往下一降，读第四声。ā á ǎ à！
生：（边做手势边读四声）
师：o 的四声，谁来读？
生：ō ó ǒ ò！
师：e、i、u 的四声，我们开小火车读。
生：（开火车读 ē é ě è、ī í ǐ ì、ū ú ǔ ù）
师：ü 加声调的时候要注意，它的两点可不能去掉。ǖ ǘ ǚ ǜ，跟老师读。
生：（跟读 ü 的四声）
师：最难的是第二声和第三声。第二声像上山坡，直直地往上扬；第三声像下山又上山，先降后升。我们再来对比读一读：á ǎ，ó ǒ，í ǐ，ú ǔ。
生：（对比读二声和三声）

学生活动：认识四声符号，边做手势边读四声，开火车练习六个单韵母的四声，对比辨析二声与三声。

设计意图：用"小帽子""小汽车手势"把抽象声调可视化，帮助学生建立"平、扬、拐弯、降"的声音印象；开火车读保证人人参与；重点对比二声与三声，突破声调难点，提醒 ü 的两点不能丢。

**环节四 认清字形：记住样子写好字（约 10 分钟）**

教师活动：
师：六个朋友不光音读得准，样子也要记得牢。看看它们长得像什么？
生：a 像小女孩圆圆的头和翘起来的小辫子；o 像一个圆圈；e 像大白鹅在水里游泳，水里有它的倒影。
师：观察得真仔细！i 像一根小棒顶个点；u 像乌鸦的窝；ü 是 u 的头上加了两点，像小鱼吐的两个泡泡。我们一起说一遍。
生：（齐说字形儿歌）
师：记住了样子，我们还要把它们写漂亮。拼音宝宝住在"四线三格"里，a、o、e 都住在中间一格，要写得饱满、圆润，不顶格、不贴线。看老师写。
（范写 a、o、e，强调占中格）
生：（书空，在四线格里描红书写）
师：i 的点写在上格，竖写在中格；u 写在中格；ü 先写 u，再在上格写两点。两点不能忘记哦！
（范写 i、u、ü）
生：（书写，同桌互查两点和点的位置）

学生活动：观察字形，说字形儿歌，书空，在四线三格中规范书写六个单韵母，同桌互相检查。

设计意图：把字形记忆编成形象的儿歌，让识记有趣有效；书写指导抓住"占格"这一关键，重点提示 i 的点、ü 的两点的位置，通过同桌互查把书写规范落到实处。

**环节五 小结与作业（约 4 分钟）**

教师活动：
师：今天，我们在拼音王国里认识了六个单韵母朋友，还学会了它们的四声。让我们一起再读一遍。
生：（齐读六个单韵母及其四声）
师：老师想考考你们，发 o 和 e 的时候，嘴巴有什么不同？
生：o 的嘴巴圆，e 的嘴巴扁！
师：真棒！课后请完成两个小任务：一是每天拿出小镜子，照一照自己的口形，练读六个单韵母和四声；二是和爸爸妈妈玩"看口形猜拼音"的游戏，让爸爸妈妈做口形，你来猜猜是哪个字母。
生：（齐声答应）
师：拼音王国的门永远为爱学习的孩子敞开。下课！

学生活动：回顾本课所学，齐读单韵母与四声，明确课后任务，在愉快的氛围中结束课堂。

设计意图：以"读一读、说一说"的方式回顾重点，突出 o 与 e 的口形区别；亲子游戏作业把拼音学习延伸到家庭，让学生在玩中巩固，保持对拼音的浓厚兴趣。

**板书设计**

（图示化）
拼音：a o e i u ü
口形：张大嘴巴 a a a  圆圆嘴巴 o o o  扁扁嘴巴 e e e
      牙齿对齐 i i i  嘴巴突出 u u u  像吹笛子 ü ü ü
四声：一声平 ā  二声扬 á  三声拐弯 ǎ  四声降 à
（下方画四线三格，示范 a、o、e 占中格，i 的点在上格，ü 的两点在上格）

**教学反思要点**

1. 一年级学生注意力持续时间短，本课用"拼音王国"情境串联，环节转换要快，游戏化设计要适度，防止学生兴奋过度导致纪律涣散。
2. o 与 e 的对比、二声与三声的辨析是两大难点，课堂上要反复对比练读，小镜子和手势要用足用好，让每个学生都有照镜自查的机会。
3. ü 的发音要建立在 i 的基础上，教 ü 时先带学生复习 i 的口形，再过渡到圆唇，防止把 ü 发成 u。
4. 书写环节时间要保证，i 的点、ü 的两点要当堂检查，同桌互查要及时反馈，不能把书写问题留到课后。
5. 课后亲子游戏要给出具体玩法，让家长知道怎么配合，实现家校共育。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是统编版小学语文一年级上册汉语拼音单元的《拼音：a o e i u ü》。

**一、说教材**

汉语拼音是识字、学习普通话的拐杖。本课是汉语拼音教学的起始课，集中安排 a、o、e、i、u、ü 六个单韵母的学习。教材依托课文情境图，把字母的音和形融进生动的生活场景：阿姨、公鸡、白鹅、衣服、乌鸦、小鱼，让学生在看图、学音、记形中完成单韵母的启蒙。六个单韵母是全部拼音学习的基础，读准它们、会读四声、规范书写，将为后面声母、复韵母和拼读的学习打下坚实的基础。可以说，本课在拼音教学体系中具有奠基性的地位。教材的编排充分考虑了儿童的特点，字母的音和形都与图画紧密相连，教学时要充分用好情境图，让字母与生活、与声音建立起自然的联系。六个单韵母看似简单，但发准音、读好四声、写好字母，对刚入学的一年级学生来说并不容易，需要在趣味中引导、在反复中巩固。

**二、说学情**

一年级学生初入小学，正处于幼小衔接的关键期，具体形象思维占主导，注意力集中时间短，但好奇心强、喜欢儿歌和游戏。不少孩子在幼儿园接触过拼音，但读音不一定标准，尤其容易把 o 和 e 混淆，把二声和三声读混，把 ü 发成 u。教学时要充分利用图画、顺口溜和口形示范，帮助学生建立正确、规范的第一印象，防止错误读音先入为主。此外，一年级学生手部小肌肉发育还不完善，书写时容易出现占格不准、笔画不到位的情况，需要教师耐心示范和个别指导；还要特别关注入学适应期孩子的心理特点，多用鼓励和表扬，让他们在轻松快乐中迈出拼音学习的第一步。

**三、说教学目标**

我确定了三个目标：第一，正确认读 a、o、e、i、u、ü 六个单韵母，借助图画和顺口溜读准音、认清形，学会用观察口形的方法发音；第二，认识声调符号，借助"一声平、二声扬、三声拐弯、四声降"的规律和手势，正确读出六个单韵母的四声；第三，学会在四线三格中正确书写六个单韵母，注意 i 的点、ü 的两点的位置，养成认真书写的习惯。

**四、说重难点**

教学重点是读准六个单韵母的音、认清字形、会读四声；教学难点是 o 与 e 的发音区分、二声与三声的读法、ü 的发音与书写。这些难点都指向发音器官的精细控制，一年级学生难以一次到位，需要通过对比、反复和游戏来突破。教学中我会用小镜子、手势、顺口溜等多种手段，把发音要领分解成学生看得懂、做得出的动作，降低发音难度。

**五、说教法学法**

我主要采用看图学音法，把字母与图画情景结合起来；口形示范法，用夸张的口形和镜子帮助学生观察、模仿；顺口溜记忆法，把音和形编成朗朗上口的儿歌；游戏教学法，用开火车、看口形猜字母等游戏巩固所学。学生的学法是听一听、看一看、照一照、读一读、写一写，在动口、动手、动脑中学习。特别值得一提的是，我为每个学生准备了一面小镜子，发音时照一照、比一比，把"口形"这个看不见的发音要领变成看得见的检查标准，这既是一种学习方法，更是一种自主学习的好习惯。整节课我还注意动静结合，读一读、照一照、写一写交替进行，穿插小游戏调节课堂节奏，让学生的注意力始终保持在拼音学习上。

**六、说教学过程**

我设计了五个教学环节。第一个环节是情境导入，约四分钟，创设"拼音王国"的情境，引出六个单韵母，激发兴趣。第二个环节是看图学音，约十二分钟，逐幅出示情境图，坚持口形示范、照镜自查、顺口溜记忆，重点对比 o 与 e 的口形。第三个环节是认识四声，约十分钟，用"小帽子"和手势帮助学生读准四声，开火车读保证人人参与，重点对比二声与三声，提醒 ü 加声调时两点不能丢。第四个环节是认清字形与书写，约十分钟，用字形儿歌帮助记忆，在四线三格中规范书写，重点提示 i 的点、ü 的两点的位置，同桌互查。第五个环节是小结与作业，约四分钟，回顾本课重点，布置照镜练读和亲子猜字母游戏。五个环节目标明确、层层递进，学生在一节课里完成了认、读、调、写四个层次的学习任务，学习过程张弛有度。

**七、说板书设计**

我的板书以"拼音：a o e i u ü"为题，中间列出六个单韵母及口形顺口溜，右侧呈现四声规律和手势图，下方画四线三格示范占格。板书图文结合、重点突出，既是本课知识的浓缩，也是学生复习巩固的直观支架。

**八、说反思与效果预测**

本课的设计坚持"口形先行、趣味为桥"。需要反思的是，六个单韵母一次性学习容量较大，要把握好各环节的节奏，防止虎头蛇尾；书写时间要保证充足，做到当堂过关。效果预测上，绝大多数学生能正确认读六个单韵母，借助手势读出四声，能在四线三格中规范书写，对拼音学习产生浓厚兴趣，教学目标基本达成。对于个别发音困难的孩子，课后我会利用课间个别辅导，让他们对着镜子慢慢练，不让一个孩子掉队。同时，我会把课堂表现及时反馈给家长，指导家长在家用游戏的方式帮助孩子巩固，形成家校合力，让拼音学习真正成为孩子喜欢的事情。

我的说课到此结束，谢谢大家！`},"小学|二年级|语文|课文：开满鲜花的小路":{plan:`**教学基本信息**

课题：课文：开满鲜花的小路
教材版本：统编版小学语文二年级下册第一单元
年级：二年级
课型：阅读教学课
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**

1. 认识"邮、递、员、裹、寄、破、漏"等生字，会写"鲜、邮、递、员、原、叔、局、堆、礼"等字，读准字音，认清字形。
2. 正确、流利地朗读课文，能分角色读好邮递员黄狗、鼹鼠先生、松鼠太太等人物说话的语气，感受童话语言的趣味。
3. 了解故事内容，知道鼹鼠先生收到花籽、花籽洒落路上开出鲜花的过程，能用自己的话按顺序讲故事，体会"美好的事物与大家分享会更美好"的道理。

**教学重难点**

重点：识字写字，读好课文，能按顺序讲述故事内容。
难点：理解"这是多么美好的礼物"的含义，体会分享带来的快乐。

**教学准备**

多媒体课件（鲜花小路的图片、故事连环画）；头饰（鼹鼠先生、松鼠太太、长颈鹿大叔、邮递员黄狗）；生字卡片；词语卡片。

**教学过程**

**环节一 情境导入：一条美丽的小路（约 4 分钟）**

教师活动：
（课件出示开满鲜花的小路图片，音乐轻轻响起）
师：小朋友们，春天来了！看，眼前这条小路，开满了五颜六色的鲜花，多美呀！看到这样一条开满鲜花的小路，你有什么想问的吗？
生：这些花是怎么长出来的？是谁种的呢？
师：问得好！这背后藏着一个温暖的故事。今天，我们就一起走进课文《开满鲜花的小路》，去探寻这条美丽小路的秘密。
（板书课题，生齐读课题）
师：请小朋友们把课题读得美一点，读出鲜花的芬芳。
生：（美美地齐读课题）

学生活动：欣赏鲜花小路的图片，提出自己的问题，齐读课题，带着好奇心进入课文。

设计意图：用"开满鲜花的小路"的美丽图片创设情境，鼓励学生主动提问，以"花是怎么来的"这一核心问题贯穿全课，激发阅读期待。

**环节二 初读课文：读通故事认生字（约 11 分钟）**

教师活动：
师：请小朋友们自由读课文，读准字音，读通句子，遇到不认识的字借助拼音多读几遍。
生：（自由朗读课文）
师：课文里有一些词语宝宝，请小老师带大家读一读。
（出示词语卡：邮递员、包裹、寄来、破了、漏出来、懊丧、花籽、绚丽多彩、鼹鼠先生）
生：（小老师带读，跟读）
师："懊丧"是什么意思？"绚丽多彩"呢？
生："懊丧"是心里很失望、很难过；"绚丽多彩"是颜色很多、很漂亮。
师：读准了词语，我们再来读课文。请几位小朋友分自然段接读，其他同学听一听他们读得准不准、通不通。
生：（分自然段接读，互相正音）
师：读得不错！课文里还藏着一只小动物——鼹鼠先生。鼹鼠是住在地底下的小动物，我们一起来认识它。
生：（认读"鼹鼠"）

学生活动：自由朗读课文，小老师带读词语，分自然段接读，正音通读，认识鼹鼠先生。

设计意图：坚持"读通为基、随文识字"，在读中认识生字新词，理解"懊丧""绚丽多彩"等重点词语；分自然段接读让每位学生都有展示机会，及时正音，把课文读通读顺。

**环节三 精读课文：走进故事读好语气（约 13 分钟）**

教师活动：
师：课文读通了，我们来看看到底发生了什么事。谁收到了包裹？是谁寄来的？
生：鼹鼠先生收到了包裹，是长颈鹿大叔寄来的。
师：包裹是怎么送到鼹鼠先生手里的呢？谁来读一读邮递员黄狗的话？
（出示句子：鼹鼠先生，您的包裹单！）
生：（响亮地读）
师：邮递员送包裹，声音要响亮、有精神，像这样——
生：（再读，读出响亮）
师：鼹鼠先生收到包裹，却不知道里面是什么，就去找松鼠太太。走在路上，包裹怎么了？
生：包裹破了，里面的东西漏了出来！
师：到了松鼠太太家，打开一看，包裹里空空的。鼹鼠先生什么心情？
生：很懊丧，很难过。
师：谁来读读他懊丧的话？
（出示句子：唉……）
生：（低落地读）
师：读得真好，把鼹鼠先生的失望读出来了。故事到这儿，好像是个遗憾的结局。可是第二年春天，发生了神奇的事情。谁来读一读？
（出示句子：鼹鼠先生来到松鼠太太家门前，看见小路上开满了绚丽多彩的鲜花。）
生：（惊喜地读）
师：原来，漏在路上的就是长颈鹿大叔寄来的花籽！第二年春天，花籽发芽、开花，把一条普普通通的小路打扮成了开满鲜花的小路。松鼠太太高兴极了，她是怎么说的？
（出示句子：这是多么美好的礼物啊！）
生：（高兴地、惊喜地读）
师：老师要请几位小朋友戴上头饰，分角色朗读。谁来当鼹鼠先生？谁来当松鼠太太？谁来当邮递员黄狗？我们还要请一位同学当小旁白。
生：（分角色朗读，其他同学欣赏）
师：读之前先想一想：他们当时是什么心情？读的时候要把心情读出来。
生：（再次分角色朗读，读出语气）

学生活动：梳理故事经过，练习朗读人物的对话，体会人物心情，戴头饰分角色朗读，读出语气。

设计意图：抓住"包裹破了、花籽漏出、第二年开满鲜花"的情节线索，围绕人物对话品味语气；分角色朗读前先讨论人物心情，让"读好语气"有依据、不拿腔拿调，在朗读中体会童话语言的情趣。

**环节四 学习句式：赏语言学讲故事（约 8 分钟）**

教师活动：
师：课文里有一组特别美的句子，我们一起来看。
（出示句子：门前开着一大片绚丽多彩的鲜花。）
师：这句说"哪里"开着"什么"？"怎么样"？
生：门前开着鲜花，一大片、绚丽多彩。
师：像这样的句子还有——山坡上长着一棵高大的松树；房子旁边有一条弯弯的小河。我们发现了一个句式：哪里＋开着（长着、有）＋什么＋怎么样。请小朋友们照样子，说一句你看到的美丽画面。
生：小河里有几条可爱的小鱼；草地上开着一朵朵五颜六色的小花……
师：说得真好！我们再用"起因、经过、结果"的顺序讲一讲这个故事。起因是什么？
生：长颈鹿大叔寄来一个包裹。
师：经过呢？
生：鼹鼠先生去松鼠太太家，路上包裹破了，花籽漏出来。
师：结果呢？
生：第二年春天，小路上开满了鲜花，大家都很高兴。
师：请小朋友们看着连环画，把这个温暖的故事讲给同桌听。
生：（看图讲故事，同桌互讲）

学生活动：发现"哪里怎么样"的句式特点，仿说句子；梳理"起因、经过、结果"，看着连环画练习讲故事。

设计意图：把"语言学习"落到实处，先发现句式规律，再仿说迁移，让童话语言成为学生自己的表达；用"起因、经过、结果"的支架和连环画帮助学生按顺序讲故事，降低讲述难度。

**环节五 小结与作业（约 4 分钟）**

教师活动：
师：故事讲完了，我们再想一想：长颈鹿大叔的花籽，本来是寄给鼹鼠先生一个人的。如果包裹没有破，花籽顺利送到，谁能看到花？
生：只有鼹鼠先生一个人。
师：可是花籽漏在路上，开成了一路鲜花，谁看到了？
生：所有路过的人都能看到！
师：所以松鼠太太说，这是多么美好的礼物。美好在哪里呢？
生：美好的东西和大家一起分享，会更美好，大家都很开心！
师：说得真好！一份小礼物，温暖了整条小路，也温暖了每一个路过的人。这就是分享的美好。课后请完成两个任务：一是把《开满鲜花的小路》这个故事讲给爸爸妈妈听；二是想想你有没有收到过或送出过"美好的礼物"，明天说给大家听。
生：（齐声答应）
师：愿我们都能像长颈鹿大叔一样，把美好送给别人。下课！

学生活动：讨论礼物的美好之处，体会分享的主题，明确课后任务，带着温暖的情感结束课堂。

设计意图：用"如果包裹没破"的假设对比，让学生真切体会"分享让美好变大"的道理，把抽象的道理讲具体；讲故事、说生活两作业兼顾复述与表达，把语文学习延伸到生活。

**板书设计**

（图示化）
开满鲜花的小路
收到包裹 → 包裹破了 → 花籽漏出 → 第二年春天开满鲜花
长颈鹿大叔寄来花籽 → 鼹鼠先生 → 大家共享美好
美好的礼物：与大家分享，快乐更多
句式：哪里＋开着（长着、有）＋什么＋怎么样
（简笔画：一条小路，路两旁开满小花，邮递员黄狗、鼹鼠先生依次出现在路上）

**教学反思要点**

1. 二年级朗读课文要避免齐读过多，分角色朗读是本课亮点，课前要备好头饰，读前先讨论人物心情，让语气读得自然。
2. "懊丧""绚丽多彩"等重点词语要在语境中理解，不要孤立地抄词语解释，可结合动作、表情和图片帮助学生领悟。
3. "漏"字右边容易漏写内部笔画，"寄"字易忘宝盖头，书写指导要突出易错笔画，当堂检查。
4. 讲故事是难点，四幅连环画和"起因、经过、结果"支架要善用，先扶后放，让每个学生都能把故事讲完整。
5. 体会"美好的礼物"要与学生的生活经验连接，用"如果包裹没破"的对比讨论激活思维，防止把道理讲成空洞的口号。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是统编版小学语文二年级下册第一单元的《课文：开满鲜花的小路》。

**一、说教材**

《开满鲜花的小路》是一篇童话故事，讲的是长颈鹿大叔给鼹鼠先生寄来一个包裹，鼹鼠先生走在去松鼠太太家的路上，包裹破了，里面的东西悄悄漏出来，他自己却没有发现。第二年春天，漏在路上的花籽开出了绚丽多彩的鲜花，把一条普普通通的小路打扮成了开满鲜花的小路。故事语言清新优美，人物形象鲜明，蕴含着"美好的事物与大家分享会更美好"的道理。本单元以"春天"为主题，语文要素是"朗读课文，注意语气和重音"，本课正是落实这一要素的重要载体。课文结构清晰，一张包裹单引出故事，一条开满鲜花的小路收束全篇，首尾呼应，情节有趣，非常适合二年级学生阅读和讲述。本课的语言富有节奏感，像"门前开着一大片绚丽多彩的鲜花"这样的句式反复出现，是学生积累语言、模仿表达的好材料。这篇童话人物对话多、语气鲜明，非常适合进行分角色朗读训练，为读好语气这一单元要素的落实提供了很好的抓手。

**二、说学情**

二年级学生经过一年的学习，已经具备一定的识字量和朗读能力，喜欢童话故事，能通过朗读初步体会人物的心情。但他们的朗读还容易拖腔拖调、拿腔拿调，需要教师引导他们先理解人物心情，再读出语气；他们对故事的整体把握还不强，容易把情节顺序讲乱；对"美好的礼物"背后的道理，需要联系生活才能真正理解。这些都是教学中需要关注的重点。二年级孩子的识字量在迅速增长，但字形记忆还比较粗放，漏字少画的情况时有发生，写字指导必须扎实到位。好在二年级孩子对春天、鲜花的主题有天然的兴趣，教学时只要情境创设得当，他们很容易走进故事。

**三、说教学目标**

我确定了三个目标：第一，认识"邮、递、员、裹、寄、破、漏"等生字，会写"鲜、邮、递、员、原、叔、局、堆、礼"等字，读准字音、认清字形；第二，正确、流利地朗读课文，能分角色读好人物说话的语气，感受童话语言的趣味；第三，了解故事内容，能按顺序讲一讲这个故事，体会"美好的事物与大家分享会更美好"的道理。

**四、说重难点**

教学重点是识字写字、读好课文、能按顺序讲故事；教学难点是理解"这是多么美好的礼物"的含义，体会分享带来的快乐。这一难点在于二年级学生的思维还比较直观，需要借助具体的情境和对比来帮助他们感悟。教学中我会用"如果包裹没破"的假设与课文情节作对比，让学生在比较中真切体会到分享的美好。

**五、说教法学法**

我采用情境教学法，创设"探寻美丽小路秘密"的情境贯穿全课；分角色朗读法，让学生在读中体会人物心情、读出语气；图文对照法，用连环画帮助学生梳理情节、讲述故事；结合生活实际法，把"美好的礼物"与学生身边的事联系起来。学生的学法以朗读、表演、讲述为主，在"读一读、演一演、讲一讲"中走进童话，习得语言。分角色朗读时，我会坚持"先想心情、再练语气"，让朗读有情感依据。在讲故事训练上，我采用先说图意、再连成段、最后上台展示的阶梯式设计，让每个孩子都能把故事讲完整、讲自信。

**六、说教学过程**

我设计了五个教学环节。第一环节是情境导入，约四分钟，用鲜花小路的图片创设情境，让学生提出"花是怎么来的"的问题，带着悬念进入课文。第二环节是初读课文、随文识字，约十一分钟，读准字音、读通句子，理解"懊丧""绚丽多彩"等重点词语。第三环节是精读课文、读好语气，约十三分钟，沿着"包裹破了、花籽漏出、开满鲜花"的情节线，练习朗读人物对话，戴头饰分角色朗读。在分角色朗读时，我会请学生自己挑选想演的角色，先在小组内试读，再戴头饰上台展示，让每个孩子都有参与的机会。第四环节是学习句式、学讲故事，约八分钟，发现"哪里怎么样"的句式特点并仿说，借助"起因、经过、结果"支架看图讲故事。第五环节是小结与作业，约四分钟，用"如果包裹没破"的对比讨论体会分享的美好，布置讲故事和生活表达作业。五个环节以探寻美丽小路的秘密为主线，识字、朗读、语言训练、道理感悟环环相扣，课堂始终充满童话的趣味。

**七、说板书设计**

我的板书以"开满鲜花的小路"为题，用箭头串联"收到包裹、包裹破了、花籽漏出、开满鲜花"的情节线，突出"分享美好"的主题，并呈现"哪里怎么样"的句式。板书图文结合、线索清晰，既是故事内容的浓缩，也是学生讲故事的支架。

**八、说反思与效果预测**

本课的设计紧扣"读好语气、讲好故事、悟出道理"三个要点。需要反思的是，分角色朗读要把握好时间，防止热闹有余而朗读不足；讲故事环节要给学生充分的练习时间，先扶后放。效果预测上，学生能认识本课生字，正确流利地朗读课文，多数学生能分角色读出人物语气，按顺序讲出故事，体会到分享的美好，教学目标基本达成。课后我会收集孩子们讲的"身边的美好礼物"小故事，挑选精彩的读给全班听，让课堂的温暖延续到生活中。

我的说课到此结束，谢谢大家！`}},ls={"小学|三年级|语文|习作：续写故事":{plan:`**教学基本信息**
课题：习作：续写故事
教材版本：统编版小学语文三年级上册
年级：小学三年级
课型：习作指导课
课时：1 课时（40 分钟）
授课对象：小学三年级学生

**教学目标**
1. 知道续写就是接着原来的故事往下写，把没讲完的部分补写完整，明确续写要做到人物不变、情节连贯、想象合理、交代清楚这四要领。
2. 学习"读原文、找悬念、想结局、写清楚"的续写四步法，能借助教科书情境图，把李晓明过生日的故事续写完整。
3. 能展开合理想象，恰当运用对话、动作、心情等描写把经过写生动，语句通顺，正确使用标点；愿意与同伴分享习作，并能按评改标准当堂修改一处。

**教学重难点**
教学重点：掌握续写的基本方法，接住原文的悬念把故事续写完整，做到前后连贯。
教学难点：想象既大胆又合理，情节发展能自然衔接上文，人物性格前后一致，不凭空冒出新角色。

**教学准备**
教师准备：教科书情境图课件、范文片段纸条、续写四要领星级评价表、板书词卡。
学生准备：课前回忆自己或同学过生日的难忘经历，想一想当时的高兴场面和心里的感受；准备草稿纸和笔。

**教学过程**

**环节一 情境导入，走进故事（约 5 分钟）**

【教师活动】出示教科书插图，用谈话把学生带入故事现场：同学们围在一起聊生日，有人提到全家人一起吃蛋糕，有人提到收到心爱的礼物，只有李晓明站在一旁闷闷不乐。教师追问："他的爸爸妈妈都在外地工作，快到生日了也赶不回来，他为什么不高兴？故事讲到这里停住了——同学们知道了这件事会怎么做？李晓明的生日会过得怎么样？"由此揭示课题：习作：续写故事。
预设师生对话：
师："孩子们，看这幅图，同学们在聊什么？"
生："他们在聊过生日。""有人说和全家人吃蛋糕。""有人说收到了礼物。"
师："你们看，站在旁边的李晓明是什么表情？"
生："他低着头，好像不高兴。""他有点难过。"
师："想一想，他为什么不高兴呢？"
生："因为他爸爸妈妈在外地工作，不能回来陪他过生日。"
师："故事就停在这里，像电影演到一半暂停了。今天我们要做小作家，把这半场故事接着演下去，这就是续写。"

【学生活动】学生观察插图，畅谈画面内容，体会李晓明的失落心情，明确本课任务是续写故事。

【设计意图】用插图创设真实情境，抓住"故事停在这里"的悬念激发写作期待，让学生明白续写就是给故事写下半场，为学习四步法做好情感和认知准备。

**环节二 例文引路，习得方法（约 10 分钟）**

【教师活动】（一）学习续写四步法。第一步读原文：弄清故事里有哪些人物，事情发展到哪一步，教师带着学生梳理——人物有同学们、李晓明，故事发展到同学们发现李晓明难过。第二步找悬念：故事停在哪里，大家最想知道什么。第三步想结局：围绕悬念想两三种可能，比如悄悄准备生日会、在教室里办生日派对、送贺卡唱生日歌，选择最合理、最温暖的一种。第四步写清楚：按顺序写，先写发现难过、商量办法，再写准备过程，最后写生日会上的快乐场面。
（二）出示"续写四要领"检查表，逐条讲解：人物不变、情节连贯、想象合理、交代清楚，并告诉学生写好之后要逐条对照检查。
（三）出示范文片段，请学生圈出写对话、动作、心情的句子，发现让故事生动的三个小妙招；特别提醒写对话要正确使用冒号和引号，人物说的话要用引号引起来。
预设师生对话：
师："读原文时我们要弄清什么？"
生："有谁，事情发展到哪一步。"
师："找悬念，就是要问自己一个什么问题？"
生："大家最想知道什么。"
师："我们想出了两三种结局，怎么选呢？"
生："选最合理、最温暖的。"
师："请看这个片段——小宇说：我们把教室布置一下吧！小丽把彩带挂得整整齐齐。李晓明一进门，眼睛一下子亮了，激动得说不出话来。你发现了什么？"
生："有对话，用的是冒号引号。""写了挂彩带，是动作。""眼睛亮了，是心情。"

【学生活动】学生跟随教师梳理故事脉络，自主思考可能的情节走向，朗读范文片段并圈画描写方法，交流自己的发现。

【设计意图】以例文为载体，把"怎么续写"的方法显性化：四步法给写作路径，四要领给检查标准，三妙招给语言支架，让三年级学生"有法可依"，避免空想和无序表达。

**环节三 构思交流，说说我的续写（约 8 分钟）**

【教师活动】组织同桌互相口头说构思：李晓明的生日会是怎么准备的、办了哪些活动、结果怎么样、他有哪些反应。随后请两三位学生面向全班汇报，教师用"四要领"当过滤器追问——人物有没有换、接没接住上文、合不合乎生活实际、结果交代了没有。对汇报中不合理的想象，引导全班一起商量着改合理。
预设师生对话：
师："谁先来说说你的构思？"
生："我打算写同学们下课悄悄商量，班长说给李晓明一个惊喜，大家凑钱买了蛋糕，放学后布置教室。"
师："接住悬念了吗？大家怎么知道的？"
生："接住了，同学们看见李晓明不开心，一起想办法。"
师："结果呢？"
生："第二天李晓明进教室，大家唱生日歌，他感动得哭了。"
师："这样人物没换、情节连得上，又是一个温暖的结果，真棒！还有谁想说？"

【学生活动】同桌互说互评，汇报自己的续写构思，对照四要领互相提建议，及时修正不合理之处。

【设计意图】坚持"先说后写"，把构思放在口头表达中打磨，用四要领当过滤器把不合理的想象提前筛掉，让每一个孩子在动笔前都心中有数、有话可说。

**环节四 当堂练写，动笔续写（约 12 分钟）**

【教师活动】出示写作提示：按"商量、准备、庆祝、感谢"的顺序写，把时间、地点、经过、结果写明白；试着用上对话、动作或心情描写；给故事一个完整温暖的结尾。出示写作支架"发现难过、商量办法、准备惊喜、生日场面、内心感受"，帮助学生把过程写完整。巡视指导，重点关注基础较弱的学生，提醒他们先把事情说通顺，四要素写齐全；对学有余力的学生，鼓励写出大家心情的变化和感人细节。
预设师生对话：
师："写的时候先想什么？"
生："先想接着上文，写清楚时间地点。"
师："怎样才算写完了？"
生："写出生日会的结果和大家的感受。"
师："遇到不会写的字怎么办？"
生："先写拼音，写完再查字典。"
师："如果想让故事更感人，可以加上什么？"
生："加上李晓明的表情和心里话。"

【学生活动】静心动笔，在规定时间内完成续写片段，养成先想后写、一气呵成的好习惯。

【设计意图】把充足的时间留给学生动笔，让写作真实发生在课堂里；用写作支架降低难度，巡视关注个体差异、分层提示，让每个孩子都能在当堂完成一段完整的续写。

**环节五 评改分享，完善提升（约 5 分钟）**

【教师活动】出示星级评价表，明确评价维度：接得上、想合理、写清楚、有描写，每一颗星都对应一个要领，让评价有标准可依。请一位学生朗读自己的习作，全班对照评价表逐条打星；请作者根据建议当堂修改一处；再请同桌之间互相读一读、评一评。教师小结续写要领，鼓励学生回家把故事誊写完整。
预设师生对话：
师："我们请小文来读一读，大家一边听一边对照评价表打分。"
生：（朗读习作）
师："情节接得上吗？"
生："接上了，写的是同学们悄悄准备。"
师："哪里可以再生动一些？"
生："可以加一句李晓明的表情。"
师："对，加上心情描写，故事就更感人了。请你当堂改一改这一处。"

【学生活动】静听同伴习作，用星级表互评互改，分享修改成果，体验把作文改好的成就感。

【设计意图】评改与写作打通，一人读、大家评、评后改，让"评"真正落到"改"上；在交流分享中感受续写故事的乐趣，进一步巩固四要领。

**板书设计**
续写故事——接住悬念往下写
四步法：读原文 找悬念 想结局 写清楚
四要领：人物不变 情节连贯 想象合理 交代清楚
小妙招：对话 动作 心情

**教学反思要点**
1. 先说后写是三年级习作的关键，口头构思环节要留足时间，让每个孩子都能完整说一遍自己的构思。
2. 例文引路要引导看结构、学方法，重点是发现"商量、准备、庆祝、感谢"的顺序，而不是机械模仿词句，避免全班写成一个样。
3. 评改课上要当场改、改到位，让星级评价真正促进学生修改，而不是走过场。
4. 关注分层：基础层保完整，先做到接得上、写得完整；提高层求生动，用上对话、动作、心情三种描写；拓展层鼓励有自己的创意。
5. 时间分配上，练写环节要给足，宁肯前面紧凑一些，也要保证每个孩子当堂写出完整片段。`,talk:`各位老师好！下面我从八个方面说说《习作：续写故事》这节课的设计。

一、说教材
《续写故事》是统编版小学语文三年级上册的习作内容。教科书以四幅插图呈现了一个很有代入感的情境：同学们围在一起兴冲冲地聊生日，有人说和家人一起吃蛋糕，有人说收到了心爱的礼物，而李晓明却在一旁低头不语——他的爸爸妈妈都在外地工作，生日快到了也赶不回来。故事恰恰停在这个悬念处。续写，就是接着原来的故事往下写，把没讲完的部分补写完整。这一课既训练学生读懂故事、抓住悬念的能力，又培养学生有依据地展开想象、把经过写清楚的表达能力。而且它承接了前面阅读单元学过的预测方法，把"接着往下想"从阅读迁移到表达，是三年级习作起步阶段承上启下的重要一课。教材的编排体现了由读到写、由想到说的梯度，教师要充分用好插图这个支架，让故事走进孩子心里。

二、说学情
三年级学生喜欢热闹的生日话题，对这个情境几乎不需要铺垫就能产生共鸣，多数孩子有兴趣、敢想象。但也正因为兴奋，他们容易顺着自己的一时高兴乱编，忽略人物和情节的一致性：有的凭空冒出新角色，有的开头接不住原文，还有的写两三行就没了下文，只有一句"过了生日"的概括。此外，他们对冒号和引号的用法还不熟练，常常写了对话却忘了标点。所以本课必须把方法讲明白、给支架，帮助学生有章法地想象、有顺序地表达。正因如此，教师要充分相信学生，也要善于用追问把跑偏的想象及时拉回来。

三、说教学目标
基于教材和学情，我确定了三个目标。第一，知道续写就是把没讲完的故事接着往下写，明确续写四要领：人物不变、情节连贯、想象合理、交代清楚。第二，学习"读原文、找悬念、想结局、写清楚"的四步法，把教科书中的故事续写完整。第三，能运用对话、动作、心情描写把经过写生动，语句通顺、标点正确，愿意分享并按照标准当堂修改。三个目标分别指向方法、过程与习惯，层层递进。

四、说教学重难点
重点是掌握续写的基本方法，把故事续写完整、写得前后连贯。难点是想象既大胆又合理，情节能自然衔接上文，人物性格前后一致。三年级学生的想象容易天马行空，把想象放进合情合理的轨道里，是这节课最需要下功夫的地方。

五、说教法学法
我主要采用例文引路法、头脑风暴法和评改互评法。例文引路法让学生从范文中发现方法；头脑风暴法鼓励学生围绕悬念想多种可能，在碰撞中选择最合理、最温暖的一种；评改互评法用星级评价表让评与改真正结合起来。学法上，学生通过读、想、说、写、评的循环，习得续写的完整路径，真正成为课堂的主人。整个课堂坚持先学后写、以评促写，让方法从例文里来、到习作中去。

六、说教学过程
我设计了五个环节。第一环节情境导入，借助插图让学生走进故事，抓住"故事停在这里"的悬念引出课题。第二环节例文引路，带领学生用四步法梳理故事，用四要领检查构思，从范文中发现对话、动作、心情三个小妙招，并特别提醒对话标点的正确用法，这个环节是整个方法习得的核心，我让学生跟着范文走一遍全过程，让方法看得见、用得上。第三环节构思交流，同桌互说、全班汇报，用四要领当过滤器把不合理的想象提前筛掉，把毛病改在动笔之前。第四环节当堂练写，出示写作提示和写作支架，分层巡视指导，孩子们静心写作时我走到他们身边，针对不同情况悄悄点拨，保证每个孩子当堂完成一段完整续写。第五环节评改分享，一人读、大家评、评后当堂改一处，让评价促进修改。五个环节时间分配为五、十、八、十二、五分钟，共四十分钟，练写和评改占了将近一半的时间，确保写作真实发生。整个课堂以学生为中心，教师只在关键处点拨，把说的机会、写的机会、改的机会都还给学生。

七、说板书设计
板书以"续写故事"为中心，左边写四步法：读原文、找悬念、想结局、写清楚；右边写四要领：人物不变、情节连贯、想象合理、交代清楚；下面写小妙招：对话、动作、心情。板书简洁呈现了本课的知识结构，学生看着板书就能想起续写的方法，起到了提纲挈领的作用。

八、说教学反思
这节课我最看重两件事。一是"先说后写"，口头构思阶段要给足时间，让每一个孩子都把自己的故事说一遍，把毛病改在动笔之前。二是"评改落地"，评价表只设四颗星，每一颗星对应一个要领，孩子一看就明白，评后必须当堂改一处，让评价真正变成修改。预设的问题方面，学生可能把人物写跑偏，我会用四要领反复追问；可能对话标点混乱，我会在范文环节特别强调冒号和引号的用法。分层上，基础层要求接得上、写完整，提高层鼓励用上三种描写，拓展层可以尝试更有创意的构思。预设的困难方面，除了人物跑偏和标点混乱，学生还可能把结局写得千篇一律，我会用"还有别的可能吗"这样的问题不断追问，让思维向多角度敞开。如果时间紧张，我会优先保证练写和评改，把构思交流适当压缩，让每个孩子都带着一篇修改过的续写走出课堂。这节课最动人的，是孩子们为李晓明设计一个个温暖结局时眼里的光，那就是写作最好的起点。以上就是我的说课，请各位老师批评指正。`},"小学|四年级|语文|古诗三首：四时田园杂兴/宿新市徐公店/清平调·其一":{plan:`**教学基本信息**
课题：古诗三首：四时田园杂兴（其三十一）/宿新市徐公店/清平调·其一
教材版本：统编版小学语文四年级
年级：小学四年级
课型：古诗教学课
课时：1 课时（40 分钟）
授课对象：小学四年级学生

**教学目标**
1. 认识"徐、篱"等生字，读准多音字"兴、宿、供"，会写"杂、稀、篱、疏、蝶"等字，能正确、流利、有感情地朗读三首古诗，并能背诵《四时田园杂兴（其三十一）》和《宿新市徐公店》。
2. 借助注释和插图理解诗句意思，能用自己的话说出诗中展现的画面，学会"边读边想象画面"的读诗方法。
3. 抓住"童孙学种瓜""儿童追黄蝶"等描写，体会儿童的天真可爱与田园生活的情趣；品味《清平调·其一》中想象与夸张的浪漫色彩，感受三位诗人不同的表达风格。

**教学重难点**
教学重点：理解诗句意思，想象诗中画面，有感情地朗读并背诵两首田园诗。
教学难点：体会儿童形象与田园生活的情趣；理解《清平调·其一》想象与夸张的表达效果，分清写实与想象两种手法。

**教学准备**
教师准备：多媒体课件（田园风光图、菜花蝶戏图、牡丹图）、生字卡片、三首诗的配乐朗读、学习任务单。
学生准备：课前预习三首诗，读准字音，标出不理解的词语，试着说一说每首诗大概写了什么。

**教学过程**

**环节一 诗意导入，走近诗人和田园（约 5 分钟）**

【教师活动】出示田园风光图，引导学生说说看到了什么，引出"田园诗"这一话题。简介诗人：范成大晚年退居家乡石湖，写下《四时田园杂兴》六十首，分春日、晚春、夏日、秋日、冬日五组，被誉为古代田园诗的集大成者，其三十一写的是夏日农家劳作与孩童学农的情景；杨万里与陆游、范成大、尤袤并称"南宋四大家"，诗风清新活泼，善于捕捉生活中的小景。揭示课题，齐读课题，明确本课学习两首田园诗和李白的一首《清平调·其一》。
预设师生对话：
师："看到这幅图画，你想到了什么？"
生："金黄的菜花，还有蝴蝶。""有篱笆、小路、绿树。"
师："这样描画田园风光的诗，叫田园诗。今天我们认识两位南宋大诗人。"
师："范成大退居家乡后写了很多田园诗，你们知道这些诗分几组吗？"
生："分春日、晚春、夏日、秋日、冬日五组。"
师："杨万里呢？他和谁并称南宋四大家？"
生："和陆游、范成大、尤袤，他的诗很清新。"

【学生活动】欣赏田园图，认识范成大、杨万里两位诗人，带着兴趣走进古诗。

【设计意图】用画面导入田园世界，简介诗人背景，为理解诗意铺垫文化语境，激发学习期待。

**环节二 初读正音，读通三首古诗（约 8 分钟）**

【教师活动】范读三首诗，出示朗读节奏，重点正音：杂兴的"兴"读 xìng，宿新市的"宿"读 sù，供耕织的"供"读 gòng，傍桑阴的"傍"读 bàng，篱落的"疏"读 shū，径读 jìng。提醒学生注意"清平调"是唐代乐曲的曲调名，不要与词牌名"清平乐"混淆。采用自由读、指名读、小组赛读等多种方式读通读顺，做到不读错字、不添字、不漏字。
预设师生对话：
师："这三个多音字可难了，谁来读？"
生："杂兴（xìng）、宿（sù）新市、供（gòng）耕织。"
师："读得很准！'兴'在这里是兴致的兴，'供'是从事的意思，都读四声。"
师："《清平调》是什么？"
生："是唐代乐曲的曲调名。"
师："对，它和辛弃疾《清平乐·村居》的词牌名可不一样，同学们别弄混了。"

【学生活动】跟读、练读、赛读，读准字音和节奏，重点关注三个多音字和易混的曲调名、词牌名。

【设计意图】把多音字和易混概念放在初读环节集中解决，扫清朗读障碍，为理解诗意打好基础。

**环节三 想象画面，读懂两首田园诗（约 12 分钟）**

【教师活动】（一）学习《四时田园杂兴（其三十一）》。逐词理解：耘田、绩麻、各当家、未解、供、傍、桑阴。逐句串讲诗意：白天出去在田里锄草，晚上在家搓麻线，村里的年轻人各自担当家里的活计；小孩子虽然还不懂耕田织布，也学着大人的样子，在桑树荫下种瓜。引导学生想象画面：白天田间劳作、夜晚灯下搓麻、桑阴下孩童学种瓜，说一说这是一幅怎样的画面，用一两个词概括自己的感受。
（二）学习《宿新市徐公店》。逐词理解：篱落、疏疏、径、新绿、未成阴、急走、无处寻。逐句串讲诗意：稀疏的篱笆旁一条小路伸向远方，树头新长的绿叶还没成浓荫；儿童奔跑着追赶黄蝶，蝴蝶飞进金黄菜花丛中找不到了。抓住"追黄蝶"和"无处寻"的前后呼应，感受"急走"中儿童的活泼可爱，体会画面里的无限趣味。
预设师生对话：
师："'昼出耘田夜绩麻'，白天和夜晚，大人们在忙什么？"
生："白天锄草，晚上搓麻线。"
师："小孩子呢？"
生："不懂耕田织布，也在桑树下学种瓜。"
师："想象一下这个画面，给你什么感觉？"
生："很忙，但是很温馨。""小孩子学种瓜很可爱。"
师："再看《宿新市徐公店》，'急走'是什么意思？"
生："奔跑，古时候的走就是跑。"
师："儿童追黄蝶，黄蝶飞进菜花丛就找不到了，为什么？"
生："因为菜花也是黄的，蝴蝶藏进去看不见了。"
师："想象孩子找不到蝴蝶的样子，你仿佛看到了什么？"
生："看到他们瞪大眼睛，在菜花丛里找来找去，又着急又好笑。"

【学生活动】借助注释逐句理解，用自己的话描述画面，通过想象把"忙碌温馨"和"天真童趣"说具体。

【设计意图】坚持"读准字音、读懂意思、读出画面"三步读诗法，把理解诗句和想象画面结合起来，让田园诗在孩子心中活起来。

**环节四 比较阅读，品味《清平调·其一》（约 10 分钟）**

【教师活动】出示牡丹图，简介《清平调》的来历：相传李白在长安任供奉翰林时，唐玄宗与杨贵妃在沉香亭赏牡丹，召李白进宫赋诗，《清平调》共三首，这是第一首。学习"云想衣裳花想容"等句：诗人看到彩云，想到杨贵妃飘逸的衣裳；看到牡丹，想到她娇艳的容貌，这是大胆的想象与夸张，把美写到天上去了。引导学生比较：前两首诗写的是眼前真实可见的田园小景，属于写实；这一首凭想象夸张地赞美人，属于浪漫想象。指名说说两种写法各自带给自己的感受。
预设师生对话：
师："李白是怎样夸人的？"
生："看见云就想到她的衣裳，看见花就想到她的容貌。"
师："这是真的看见了吗？"
生："不是，是想象出来的。"
师："对，这就是想象与夸张。把前两首诗和这首比一比，有什么不同？"
生："前两首写的是真的田园，这首是想象。"
师："写实让我们看到乡村生活，想象让我们感受到美到极致的浪漫，各有各的好。"

【学生活动】听故事了解创作背景，品读想象之句，在比较中区分写实与想象两种表达手法。

【设计意图】引入比较阅读，把"写实"与"想象"放在一起对比，帮助学生初步建立手法概念，感受李白诗歌的浪漫色彩。

**环节五 诵读积累，拓展延伸（约 5 分钟）**

【教师活动】配乐朗读三首诗，指导读出田园的宁静温馨与李白诗句的夸张浪漫；开展背诵比赛，背诵两首田园诗；布置课后作业：选一幅诗中画面，用一段通顺的话写下来，并向家人背诵今天的古诗。
预设师生对话：
师："读田园诗，声音应该怎样？"
生："轻轻的、慢慢的，像走在田埂上。"
师："读《清平调》呢？"
生："可以读得夸张一点、有气势一点。"
师："课后请同学们把想象到的画面写一段话，明天我们交流。"

【学生活动】配乐诵读、背诵古诗，交流朗读感受，明确课后任务。

【设计意图】以诵读收束全课，让诗味在朗读中回味悠长；读写结合，把想象画面转化为书面表达，巩固本课所学。

**板书设计**
古诗三首
田园诗：四时田园杂兴（其三十一）——昼耘田、夜绩麻、童孙学种瓜（忙碌温馨）
宿新市徐公店——儿童急走追黄蝶，飞入菜花无处寻（天真童趣）
写实
清平调·其一——云想衣裳花想容（想象与夸张）
浪漫

**教学反思要点**
1. 多音字和"清平乐"的区分要在初读环节解决到位，避免拖到后面影响理解。
2. "三步读诗法"每一步都要留足时间，尤其要让学生用自己的话完整说诗意，而不是照抄注释。
3. 比较阅读要落在"写实与想象"上，用儿童能懂的语言讲清两种手法。
4. 背诵和默写要当堂落实，注意"疏、阴、绩"等易错字的书写指导，及时纠正错别字。
5. 画面想象要给支架，可用看图补白、句式引路，防止学生说不出、想不开。`,talk:`各位老师好！下面我从八个方面，说说《古诗三首：四时田园杂兴/宿新市徐公店/清平调·其一》这节课。

一、说教材
这节课选自统编版小学语文四年级，由三首古诗组成：范成大的《四时田园杂兴（其三十一）》，写夏日农家劳作与孩童学种瓜，展现忙碌而温馨的乡村生活；杨万里的《宿新市徐公店》，写儿童奔跑着追捕黄蝶，黄蝶飞入菜花丛找不到，充满天真童趣；李白的《清平调·其一》，借云、花、仙境来赞美人，想象奇特、夸张浪漫。前两首是宋代田园诗，写实而富有生活气息；后一首是唐代浪漫之作。把三首诗放在一起，既有田园情趣的共性，又有写实与想象的鲜明对比，非常契合四年级学生感受古诗之美、初步建立文学手法的认知需要。教材把两首田园诗和一首浪漫诗放在一起，本身就暗含着比较的意识，教师要善于把这种编排意图转化为教学资源。

二、说学情
四年级学生已经积累了一定的古诗学习经验，知道借助注释理解诗意，对田园生活也有初步的感受。但他们还存在着几个明显的困难：一是多音字容易读错，比如"兴、宿、供"，二是说诗意时习惯照抄注释，不会连贯表达，三是容易把曲调名"清平调"和词牌名"清平乐"混淆。同时，他们正处于想象发展的关键期，喜欢新奇有趣的内容，李白浪漫夸张的诗句恰恰能点燃他们的兴趣，这正是开展比较阅读的好时机。基于学情，我把正音和比较作为课堂的两个支点：先扫清朗读障碍，再建立手法概念。另外，四年级孩子对田园生活有些陌生，我会用图片把画面补足，再让他们开口说、闭眼想。

三、说教学目标
我确定了三个目标。第一，认识生字，读准多音字"兴、宿、供"，会写"杂、稀、篱、疏、蝶"等字，正确流利有感情地朗读，背诵两首田园诗。第二，借助注释理解诗句意思，用自己的话说出诗中画面，学会边读边想象画面的方法。第三，体会儿童形象与田园情趣，理解《清平调·其一》想象与夸张的表达效果。三个目标分别指向朗读、理解和审美，层层深入。三条目标互相支撑，第一条是基础，第二、三条逐步走向理解与审美。

四、说教学重难点
重点是理解诗句意思、想象画面、有感情地朗读背诵。难点是体会诗中儿童形象与田园情趣，理解《清平调·其一》中想象与夸张的表达效果。对四年级学生来说，从写实的田园画面走向浪漫的想象世界，需要一个台阶，我会用比较阅读搭这个台阶，让难点在对比中自然化解。突破难点我靠两招：用朗读入情，用比较悟法。

五、说教法学法
我主要采用诵读感悟法、想象补白法、情境教学法和比较阅读法。以读为主，读中悟情；用图片和音乐创设情境，让画面看得见；把两首田园诗和《清平调·其一》对比，帮助学生理解写实与想象。学法上，学生经历读准、读懂、读出画面、读出情感的过程，形成古诗学习的基本路径，为今后的古诗学习打下方法基础。整堂课以读带讲、以图促想，让学生始终处在发现和比较的思维状态中。

六、说教学过程
我设计了五个环节。第一环节诗意导入，用田园图引出田园诗，简介范成大、杨万里两位诗人，激发兴趣。第二环节初读正音，集中解决多音字和"清平调"与"清平乐"的区分，把三首诗读通读顺。第三环节想象画面，逐句理解两首田园诗，抓住"童孙学种瓜""儿童追黄蝶"体会生活情趣，用自己的话描述画面，这是理解的重点，我让诗中有画、画中有诗，学生在脑海里放电影。第四环节比较阅读，讲《清平调》创作故事，品味"云想衣裳花想容"的想象夸张，与田园诗对比，区分写实与浪漫，用比较点亮思维，让写实与想象两个概念在对比中自然建立。第五环节诵读积累，配乐朗读、背诵比赛，课后把想象画面写成一段话。五个环节时间分配为五、八、十二、十、五分钟，理解与朗读占大头，保证读得充分、想得深入。每个环节之间我用过渡语串联，让课堂像一首诗一样自然流转。

七、说板书设计
板书分两大板块：左侧是两首田园诗，关键词"昼耘田、夜绩麻、童孙学种瓜"和"急走追黄蝶、无处寻"，标出写实；右侧是《清平调·其一》的"云想衣裳花想容"，标出想象与夸张。整个板书清晰呈现了写实与想象的对比，是这节课知识结构的浓缩，学生一眼就能看出两首田园诗和一首浪漫诗的不同。板书随教学进程逐步生成，既记录了学生的发现，也留下了本课的骨架。

八、说教学反思
这节课我最关注的是"每一步都落到实处"。读准字音要逐个过关，防止多音字反复出错；说诗意要连贯完整，我会用"白天干什么、晚上干什么、小孩子干什么"这样的小问题帮学生串起来；画面想象给支架，用图片补白和句式引路。容易出问题的还有默写，我会重点指导"疏、阴、绩"这些易错字，当堂圈画、及时纠正。如果课堂时间紧张，我会压缩比较阅读的时间，但两首田园诗的理解和背诵绝不打折。同时我也提醒自己，古诗教学要守住一个度：讲得深不能变成讲得难，要始终站在四年级学生的肩膀上，让他们跳一跳、够得着。最后，用一句话概括我的设计思路：让古诗在朗读中入耳，在想象中入画，在比较中入心。我的说课到此结束，谢谢大家。`},"小学|六年级|语文|古诗三首：寒食/迢迢牵牛星/十五夜望月":{plan:`**教学基本信息**
课题：古诗三首：寒食/迢迢牵牛星/十五夜望月
教材版本：统编版小学语文六年级
年级：小学六年级
课型：古诗教学课
课时：1 课时（40 分钟）
授课对象：小学六年级学生

**教学目标**
1. 认识诗人韩翃、王建，了解《古诗十九首》；会认会写本课生字，能正确、流利、有感情地朗读三首古诗，并能背诵《迢迢牵牛星》。
2. 借助注释理解三首诗的诗意，了解寒食节、七夕、中秋三个传统节日的习俗，能用自己的话完整讲述三首诗的内容。
3. 体会三首诗不同的情感——《寒食》的含蓄讽喻、《迢迢牵牛星》的相思之苦、《十五夜望月》的思乡之情，学习抓住节日、景物、人物理解古诗的方法。

**教学重难点**
教学重点：理解诗意，体会三首诗的情感，正确朗读并背诵。
教学难点：理解《寒食》以"传蜡烛"暗讽权贵的言外之意；体会《迢迢牵牛星》叠词与借传说抒情的妙处。

**教学准备**
教师准备：多媒体课件（寒食节、七夕、中秋节日图片）、牛郎织女故事视频、三首诗的配乐朗读、节日古诗对照表。
学生准备：课前了解寒食节、七夕、中秋的习俗，读熟三首诗，标出不理解的词语。

**教学过程**

**环节一 节日导入，走近三首古诗（约 5 分钟）**

【教师活动】依次出示三幅节日图片，引导学生猜一猜分别是哪个节日：清明前一两天禁火吃冷食的寒食节、牛郎织女相会的七夕、赏月团圆的八月十五中秋。明确：三个传统节日，三首古诗，这节课我们走近它们。简介《寒食》作者韩翃、《十五夜望月》作者王建，简介《迢迢牵牛星》出自《古诗十九首》，取材于牛郎织女的民间传说。
预设师生对话：
师："第一幅图，人们不点火、吃冷食，这是什么节日？"
生："寒食节，在清明节前一两天。"
师："第二幅图，牛郎和织女在鹊桥相会，这是哪个节日？"
生："七夕。"
师："第三幅图，一家人围坐赏月，这是？"
生："中秋节，八月十五。"
师："三个节日，三首古诗，今天我们来一场古诗里的节日之旅。"

【学生活动】看图猜节日，交流已有认知，明确本课将学习三首与传统节日有关的古诗。

【设计意图】用节日图片唤起学生的生活经验，建立"节日、古诗"的联系，为理解诗意提供文化背景。

**环节二 学习《寒食》，读懂含蓄的讽喻（约 12 分钟）**

【教师活动】补充寒食节习俗：寒食在清明前一两天，古人禁火、吃冷食，相传是为了纪念介子推。正音后按节奏朗读：春城/无处/不飞花，寒食/东风/御柳斜。日暮/汉宫/传蜡烛，轻烟/散入/五侯家。逐词理解：春城指春天的京城长安，御柳是皇宫里的柳树，汉宫这里借指唐朝皇宫，五侯指皇帝的宠臣、权贵之家。串讲诗意：春天的长安城里到处飞舞着柳絮落花，寒食节的东风吹斜了皇宫里的柳枝；傍晚时分，皇宫中传出蜡烛分赐给权贵之家，缕缕轻烟飘散到五侯家中。
引导学生品析：寒食节全国禁火，而皇帝的宠臣却能在傍晚得到宫中赐下的蜡烛，一"传"一"散"之间，含蓄地讽刺了权贵享有的特殊待遇。让学生明白这首诗不只是写景，更藏着深深的讽喻。
预设师生对话：
师："寒食节民间要禁火，可是谁家却点起了蜡烛？"
生："五侯家，就是那些权贵之家。"
师："蜡烛从哪里来？"
生："从皇宫里传出来的。"
师："这就是矛盾所在——百姓禁火，权贵却点蜡烛。诗人想说却没直说，这种写法叫含蓄的讽刺。"
生："原来这首诗不是光写风景，还在批评那些权贵。"

【学生活动】了解寒食节习俗，朗读诗句，理解诗意，在对比中体会"传蜡烛"的深意。

【设计意图】先补背景、再品矛盾，把寒食节禁火与五侯家燃烛放在一起，让学生读懂诗歌的言外之意，突破难点。

**环节三 学习《迢迢牵牛星》，品味叠词与相思（约 10 分钟）**

【教师活动】播放牛郎织女故事视频片段，创设情境。按节奏朗读：迢迢/牵牛星，皎皎/河汉女。纤纤/擢素手，札札/弄机杼。终日/不成章，泣涕/零如雨。河汉/清且浅，相去/复几许？盈盈/一水间，脉脉/不得语。逐词理解：迢迢、皎皎、河汉女、纤纤、擢、札札、机杼、不成章、泣涕、盈盈、脉脉。串讲诗意：牵牛星在银河那边多么遥远，织女星在银河这边多么明亮；织女伸出细柔洁白的手，札札地摆弄织布机；一整天织不成布匹，眼泪像雨水一样往下淌；银河又清又浅，相隔能有多远呢？可就是一水之隔，两人只能含情相望，无法说话。
引导学生发现叠词的妙处：迢迢、皎皎、纤纤、札札、盈盈、脉脉，像一连串轻柔的音符，写出了距离的遥远、织女的美丽和相望的深情。提醒学生注意叠词的顺序，防止背诵时混淆。
预设师生对话：
师："诗中哪些词语一读就让人感到相思之苦？"
生："泣涕零如雨，眼泪像雨一样。"
师："织女为什么织不成布？"
生："因为她心里想着牵牛星，没有心思。"
师："银河清又浅，隔得远吗？"
生："不远，一水之隔，可就是不能说话。"
师："咫尺天涯，最是相思。这些叠词读起来像什么？"
生："像音乐，轻轻的，柔柔的，又很忧伤。"

【学生活动】看故事、读叠词、品情感，感受织女的相思之苦和叠词营造的绵绵情意。

【设计意图】用传说故事入诗，以读品叠词，抓住"河汉清且浅"与"不得语"的反差，让学生体会咫尺天涯的相思之苦。

**环节四 学习《十五夜望月》，体会秋思落谁家（约 8 分钟）**

【教师活动】按节奏朗读：中庭/地白/树栖鸦，冷露/无声/湿桂花。今夜/月明/人尽望，不知/秋思/落谁家。逐词理解：中庭、地白、秋思。串讲诗意：庭院中月光照地白花花一片，树上栖息着乌鸦；清冷的露水无声地打湿了桂花；今夜人人都仰望明月，不知这秋思会落到谁家。
引导学生品析："人尽望"写天下人都在望月思亲，"不知秋思落谁家"则由己及人，把思念推向所有望月的人，含蓄深沉。联系中秋节亲人团圆，体会诗人望月怀远的心情。
预设师生对话：
师："'中庭地白'写出了什么？"
生："月光把地面照得像铺了一层白霜，说明月色很亮。"
师："'今夜月明人尽望'，望月的人多不多？"
生："多，人人都在望。"
师："'不知秋思落谁家'，秋思落到谁家了呢？"
生："落到诗人家里，也落到所有思念亲人的人家里。"
师："诗人不说自己想家，却说不知秋思落在谁家，这就叫含蓄深沉。"

【学生活动】朗读品析，联系中秋赏月体验，体会由己及人的思乡之情。

【设计意图】抓住"地白""人尽望""落谁家"三个关键处，由写景到写人再到抒情，让学生体会由己及人、含蓄深沉的思乡表达。

**环节五 比较归纳，积累节日诗（约 5 分钟）**

【教师活动】出示节日古诗对照表，引导学生按"节日、习俗、人物、情感、抒情方式"整理三首诗：《寒食》借事抒情，写寒食传烛，含蓄讽喻；《迢迢牵牛星》借传说抒情，写牛郎织女，相思之苦；《十五夜望月》借景抒情，写中秋望月，思乡之情。配乐齐读三首诗，背诵《迢迢牵牛星》。布置作业：课后搜集一首与传统节日有关的古诗，做一张节日诗卡。
预设师生对话：
师："三首诗各是借什么抒情的？"
生："《寒食》借传蜡烛这件事，《迢迢牵牛星》借牛郎织女的传说，《十五夜望月》借中秋的月色。"
师："把它们整理成一张表，你们发现了什么？"
生："三首诗都和传统节日有关，但情感不一样。"
师："课后请同学们再找一首节日诗，做一张节日诗卡，下节课我们来个节日诗会。"

【学生活动】合作整理对照表，配乐齐读，背诵《迢迢牵牛星》，明确课后任务。

【设计意图】用对照表整合三首诗，帮助学生建立"节日、习俗、情感、抒情方式"的知识结构，把课堂学习延伸到课外积累。

**板书设计**
古诗三首
寒食（韩翃）：传蜡烛——含蓄讽喻（借事抒情）
迢迢牵牛星（古诗十九首）：叠词 盈盈一水间——相思之苦（借传说抒情）
十五夜望月（王建）：地白 人尽望 秋思落谁家——思乡之情（借景抒情）
节日：寒食 七夕 中秋

**教学反思要点**
1. 《寒食》的讽喻要建立在寒食节习俗和传蜡烛典故之上，否则学生无法理解言外之意。
2. 《迢迢牵牛星》要先入"牛郎织女"故事，再抓叠词反复诵读，叠词顺序容易记乱，要多次带读。
3. 三首诗按"节日、习俗、人物、情感、抒情方式"列表整理，帮助学生形成结构化的知识。
4. 朗读要贯穿始终，读出三首诗不同的情感基调：讽喻、忧伤、思慕。
5. 拓展要适度，节日诗卡作业既巩固所学，又激发积累兴趣。`,talk:`各位老师好！下面我从八个方面，说说《古诗三首：寒食/迢迢牵牛星/十五夜望月》这节课。

一、说教材
这节课选自统编版小学语文六年级，包含三首与传统节日有关的古诗：《寒食》是唐代诗人韩翃的作品，写寒食节长安城的春景和日暮传烛，字面写景，骨子里却是含蓄的讽喻；《迢迢牵牛星》出自《古诗十九首》，取材于牛郎织女的传说，用一连串叠词写尽织女的相思之苦；《十五夜望月》是唐代诗人王建的中秋咏怀之作，由己及人，表达深沉的思乡之情。三首诗分别对应寒食节、七夕、中秋三个传统节日，既有节日文化的气息，又有风格各异的抒情方式，是带领学生感受中华传统节日文化和古诗表达之美的绝佳文本。三首诗的抒情方式各不相同，恰好为比较阅读提供了丰富的样本，学生可以从中体会古人抒情的多种路径。

二、说学情
六年级学生已经能够借助注释理解诗意，具备一定的古诗鉴赏基础。他们的困难主要在三处：一是读不出《寒食》藏在写景背后的讽刺意味，只当写景诗读；二是《迢迢牵牛星》中"河汉女""不成章""盈盈""脉脉"等词理解有障碍，背诵时叠词顺序容易记乱；三是赏析"秋思落谁家"时只会说"表达思念"，说不出由己及人的含蓄深沉。这些困难，正是我在教学设计中要着力突破的地方。同时，六年级学生已经具备一定的自学能力，可以用小组合作的方式讨论诗意，把课堂的主动权还给学生。当然，学生的接受程度有差异，对基础薄弱的学生，讽喻的含义由教师讲清即可，不要求人人深挖。

三、说教学目标
我确定了三个目标。第一，认识韩翃、王建，了解《古诗十九首》，正确流利有感情地朗读，背诵《迢迢牵牛星》。第二，借助注释理解诗意，了解寒食、七夕、中秋的节日习俗。第三，体会三首诗不同的情感，学习抓住节日、景物、人物理解古诗的方法。三个目标指向朗读、理解与鉴赏，层次清楚、逐步提升。第一条目标中的背诵是对古诗词积累的基本要求，我会在课堂内完成检查。

四、说教学重难点
重点是理解诗意、背诵默写、体会情感。难点有二：理解《寒食》的暗讽意味，体会《迢迢牵牛星》叠词与借传说抒情的妙处。突破策略分别是补背景、讲典故，以及入传说、品叠词，让学生在理解的基础上诵读、在诵读中加深体会。针对两个难点，我分别设计了情境对比和叠词诵读两把钥匙，一把打开言外之意，一把打开音韵之美。

五、说教法学法
我采用节日文化导入、诵读感悟、品词析句、对比阅读、拓展积累等方法。以诵读为主线，让学生在读中正音、读中解意、读中悟情；用节日文化搭建理解支架；通过整理对照表，让学生在比较中把握三首诗的不同情感和抒情方式，实现从一首诗到一类诗的提升。整堂课以节日文化为底色，以诵读体验为主线，让古诗学习既有文化的温度，又有语言的质感。另外，小组讨论时我会巡场参与，及时捕捉学生的精彩发言，让它成为课堂的生成资源。

六、说教学过程
我设计了五个环节。第一环节节日导入，看图猜节日，把寒食、七夕、中秋请进课堂。第二环节学习《寒食》，先补寒食禁火、纪念介子推的习俗，再品"传蜡烛""散入五侯家"，在禁火与燃烛的对比中读懂含蓄的讽喻，这是全课理解的难点，我把典故讲透，让学生在反差中读出言外之意。第三环节学习《迢迢牵牛星》，用牛郎织女视频入诗，抓叠词反复诵读，体会咫尺天涯的相思之苦，朗读与品析交替推进，让相思之情在音韵中流淌。第四环节学习《十五夜望月》，品"地白""人尽望""落谁家"，体会由己及人的思乡之情。第五环节比较归纳，按节日、习俗、人物、情感、抒情方式整理对照表，配乐齐读，布置节日诗卡作业。时间分配为五、十二、十、八、五分钟，重点环节给足时间，保证品读充分。每个环节都设计了朗读活动，全课朗读不下十次，让学生在反复诵读中自然成诵。

七、说板书设计
板书以三首诗为纲，左侧写诗题、作者和关键词：寒食的传蜡烛、含蓄讽喻；迢迢牵牛星的叠词、盈盈一水间、相思之苦；十五夜望月的地白、人尽望、秋思落谁家、思乡之情，下方注明借事、借传说、借景三种抒情方式，并点出三个节日。板书简洁呈现三首诗的异同，便于学生比较记忆，也是课堂学习成果的直观呈现。这样的板书把三首诗放在同一张表里，节日、情感、写法一目了然。

八、说教学反思
这节课最关键的预设是：讲《寒食》前必须先把寒食节习俗和传蜡烛的典故讲透，否则学生读不出言外之意；《迢迢牵牛星》的叠词要反复带读，防止背诵时顺序记乱，我会用拍手读、男女生轮读等多种方式强化节奏记忆。课堂上我会用对照表帮助学生建立知识结构，并适度拓展节日诗积累。如果时间紧张，我会把《十五夜望月》的品读与比较归纳适当合并，但《寒食》的讽喻探究和《迢迢牵牛星》的叠词诵读绝不打折。此外，三首诗的情感基调差异很大，朗读指导要因诗而异，不能一个调子读到底，我会用配乐帮助学生找准感觉。我还会预留两分钟机动时间，应对课堂上可能出现的生成性问题，让课堂张弛有度。最后用一句话概括本课：以节日为线，串起三首诗；以读悟为径，抵达诗人心。我的说课到此结束，谢谢各位老师。`},"小学|六年级|语文|习作：让生活更美好":{plan:`**教学基本信息**
课题：习作：让生活更美好
教材版本：统编版小学语文六年级上册
年级：小学六年级
课型：习作指导课
课时：1 课时（40 分钟）
授课对象：小学六年级学生

**教学目标**
1. 能围绕"＿＿让生活更美好"把题目补充完整，从自己的生活中选取真实的事例，做到选材恰当、内容具体。
2. 能按照"是什么、为什么美好、怎样带来美好"的思路安排文章结构，把理由写充分，做到条理清楚、重点突出。
3. 学习"以小见大"的写法，从小事和细节中写出真实的美好感受，避免空话套话；能与同伴互评互改，感受分享的乐趣。

**教学重难点**
教学重点：选材恰当，写清楚事物让生活变美好的原因与过程。
教学难点：以小见大，把真实的体验和感受写具体、写真实，避免记流水账。

**教学准备**
教师准备：选材思维导图课件、范文与对比片段、习作评价表、板书词卡。
学生准备：课前回忆一件让自己感到生活变美好的小事，想想那件事的时间、地点、人物和细节。

**教学过程**

**环节一 情境导入，唤醒美好记忆（约 5 分钟）**

【教师活动】谈话导入：生活里总有一些人、一些事、一些小东西，让我们的日子变得亮堂起来。请学生用一个词说说生活中让自己感到美好的事物或瞬间。教师顺势出示几个方向：一个微笑、一本书、一首曲子、一只小动物、一次劳动、一场旅行。揭示课题：＿＿让生活更美好，明确今天要把这些美好写下来。
预设师生对话：
师："说到美好，你脑子里最先跳出来的是什么？"
生："妈妈的早餐。""楼下的小狗。""我养的多肉植物。"
师："这些让生活变美好的东西，可能是一个人、一件事，也可能是一件小物品。"
师："今天我们就来写一篇作文，题目是——让生活更美好。先把这个题目补充完整。"

【学生活动】畅谈生活中的美好瞬间，唤醒亲身体验，明确习作任务。

【设计意图】从学生的生活经验切入，让"美好"变得具体可感，同时完成补题前的素材唤醒，为选材奠定基础。

**环节二 审清题目，学会补题（约 7 分钟）**

【教师活动】带领学生抓三个关键词：生活、更美好、横线上填什么。"生活"指向自己身边的日常——家里的、学校的、社区里的，越贴近自己越真实；"更美好"表示它带来了积极的变化，或快乐温暖，或进步希望，或便利惊喜；横线上填一个词或短语即可，不必长。强调"大处着想、小处落笔"：立意可以大，事例一定要具体小巧。出示四类备选：情感类（微笑、诚信、亲情、友谊、陪伴）、爱好类（阅读、集邮、种花、下棋、音乐、绘画、运动）、事物类（科技、旅行、美食、小动物、旧照片）、品质类（梦想、坚持、创意、劳动、合作），组织学生交流补充，并比较"生活让生活更美好"和"微笑让生活更美好"哪个题目更好，为什么。通过比较，学生明白题目要小、要具体、要有自己的故事。
预设师生对话：
师："横线上可以填什么？"
生："可以填微笑、诚信、阅读、运动……"
师："要注意什么？"
生："要真实，要能想起具体的事。"
师："什么叫大处着想、小处落笔？"
生："意思可以很大，但是写的事要小，比如就写一个微笑。"
师："对，一个妈妈清晨的微笑，就能让一整天都温暖起来。"

【学生活动】理解三个关键词，比较不同补题的好坏，结合备选类别补充自己的题目。

【设计意图】把审题讲透，帮助学生建立"真实、具体、小巧"的补题标准，防止补题太空太大、写不出来。

**环节三 回忆检索，选材列纲（约 8 分钟）**

【教师活动】提出"回忆检索"要求：补题前先想出一件具体的事，想不出来的题目先放弃，把"有例可写"作为补题前提。出示选材三原则：真实、具体、小巧。引导学生按"开头点题、中间写一至两件具体事例、结尾回扣升华"的结构列提纲。以"阅读让生活更美好"为例示范：开头写书架前翻开旧书，点明阅读让生活更美好；中间写事例一，心情低落时读《西游记》，孙悟空的不服输让自己重新振作，事例二，每晚和妈妈共读半小时，家里多了笑声和讨论；结尾写书像一盏灯照亮日子，阅读让生活更美好。列完提纲，请学生仿照示例把提纲写下来，同桌互查每一部分是否都有具体内容可写。
预设师生对话：
师："怎么检验自己补的题能不能写？"
生："先想有没有具体的事，想不出来就换一个。"
师："以阅读为例，开头怎么写？"
生："写书架前的灯光，我又翻开了那本读过三遍的书。"
师："中间写什么？"
生："写一件具体的事，阅读怎样让我振作、让我和妈妈有了共同话题。"
师："结尾呢？"
生："回扣题目，写阅读让生活更美好。"

【学生活动】用"回忆检索"筛选素材，围绕自己补好的题目口头列提纲，同桌互相检查有没有具体事例。

【设计意图】把选材方法程序化，让每个学生都先有一件具体的事再动笔；用示范提纲为学生搭建结构支架，防止流水账。

**环节四 范文引路，片段练写（约 12 分钟）**

【教师活动】出示"以小见大"写法支架：小事（场景）到细节（动作、语言、心理）到感受（心里的变化）到点题（它让生活更美好）。出示例文：还书时发现夹着一张五元钱，我攥着钱跑回书店还给阿姨，阿姨笑着说"好孩子"，那一刻我心里比吃了蜜还甜——诚信让人踏实又快乐，诚信让生活更美好。再出示一组对比片段：空泛段只有"读书真美好，能学到知识"，升格段写了具体的场景和细节，让学生对比发现差别，说说升格段好在哪里。教师追问升格段好在哪里：有具体的场景、有连贯的动作、有真实的感受，三个层次一目了然。随后组织当堂练写：写自己选材中最打动人的一个片段，用上细节描写，写出当时的感受。
预设师生对话：
师："这段例文里，哪几句是细节？"
生："攥着钱跑回书店、阿姨笑着说好孩子。"
师："'比吃了蜜还甜'写的是什么？"
生："心里面的感受。"
师："对比两个片段，你发现了什么？"
生："一个只有空话，一个有具体的事和细节。"
师："好，请动笔写出你选材中最精彩的一个片段，让美好看得见。"

【学生活动】品读例文，比较空泛与具体两种写法，动笔练写一个含细节、有感受的精彩片段。

【设计意图】用"支架加例文加对比"三管齐下，让学生直观感受"具体"与"空洞"的差别，当堂练写落实重点，突破难点。

**环节五 评改分享，升格完善（约 8 分钟）**

【教师活动】出示习作评价表：选材真实、有具体细节、感受真实、回扣题目，每项一颗星，先自评圈出问题，再互评。请一位学生朗读自己的片段，全班对照评价表逐项打星，提出修改建议；请作者当堂修改一处；再请同桌互相读一读、评一评。修改后，请两位学生展示修改前后的句子，全班共同见证作文的进步。小结：好的习作来自真实的生活，把小事的细节写透，美好自然就立起来了。
预设师生对话：
师："谁来读一读你的片段？"
生：（朗读片段）
师："大家对照评价表，哪一项做得最好？"
生："细节很具体，写出了动作。"
师："哪一项还可以升格？"
生："感受可以再真实一点。"
师："请你自己改一改，让心里的感受更真切。"

【学生活动】朗读、互评、当堂修改，在评价与修改中体验把习作写好的过程。

【设计意图】评价与修改结合，让学生掌握"选材真实、细节具体、感受真实、回扣题目"的标准，学会自己诊断和升格习作。

**板书设计**
让生活更美好
补题：真实 具体 小巧
结构：是什么 为什么美好 怎样带来美好
开头点题——中间写事例——结尾升华
以小见大：小事 细节 感受 点题

**教学反思要点**
1. 补题前先做回忆检索，把"有例可写"作为前提，防止学生补了大题却写不出内容。
2. 对比片段教学很关键，让学生自己发现具体与空洞的差别，比教师反复讲更有效。
3. 坚持以小见大的写法支架，帮助学生把理由写充分、把细节写生动。
4. 评改要落到"改"上，评价表要简单可操作，先自评再互评，保证当堂改得动、改得好。
5. 尊重学生真实体验，鼓励写出独特的感受，避免套话和模式化表达；对写实、平淡但有真情的小事要给予充分肯定。`,talk:`各位老师好！下面我从八个方面，说说《习作：让生活更美好》这节课。

一、说教材
《让生活更美好》是统编版小学语文六年级上册的一篇半命题习作。题目是"＿＿让生活更美好"，横线上可以填一种品质、一个爱好、一件物品或一段经历。这次习作重在引导学生留心观察生活，从平凡的小事中感受美好，把真实的体验写下来。它既训练选材与构思的能力，也承载着情感教育的功能，让学生通过写作学会发现生活中的光亮。六年级的习作开始从"写清楚"走向"写深刻"，这一课正是引导学生把生活感受转化为具体文字的关键一课，对提升学生的表达能力和审美情感都有重要意义。教材安排了选材、提纲、片段、评改的完整链条，为教师提供了清晰的施教路径，也让学生经历了一篇习作从孕育到成形的全过程。这节课还暗含着价值观的引导：美好不在远方，就在日常的细节里。

二、说学情
六年级学生已经具备把事情写完整的能力，生活素材也比较丰富。但写作中普遍存在三个问题：一是补题太大太空，比如"生活让生活更美好""开心让生活更美好"，或者补了题却写不出具体事例；二是全文只有概括句和口号，缺少细节；三是写事例像记流水账，重点不突出，感受不真实。这些问题的根源在于选材不具体、方法不明确，正是我这节课要着力解决的。六年级孩子对生活并不缺少感受，缺少的是把感受讲清楚的方法，教师要做的是帮他们把心里的话找到出口。如果学生例文读不懂，我会放慢速度，先让他们找出事例中的动作和语言，再归纳方法。

三、说教学目标
我确定了三个目标。第一，能围绕"＿＿让生活更美好"把题目补充完整，从自己的生活中选取真实事例，做到选材恰当、内容具体。第二，能按照"是什么、为什么美好、怎样带来美好"的结构安排文章，把理由写充分。第三，学习以小见大的写法，写出真实的美好感受，能与同伴互评互改。三个目标指向选材、构段和表达，环环相扣、循序渐进。三条目标从选材到结构再到表达，为学生的写作搭建了清晰的阶梯。

四、说教学重难点
重点是选材恰当，写清楚事物让生活变美好的原因与过程。难点是以小见大，把真实的体验和感受写具体、写真实。六年级学生最容易犯的毛病就是空喊口号，所以我把"把美好写看得见"作为攻坚点，用细节把感受落到实处。为了突破难点，我准备了空泛段与升格段的对比，让学生亲眼看到一段文字怎样从空洞变得具体。

五、说教法学法
我采用头脑风暴法、例文引路法、片段练笔法和自评互评修改法。用头脑风暴打开选材思路，用例文和对比片段搭建方法支架，用当堂练笔落实写作，用评价表推动修改。学生则通过回忆检索、口头列纲、片段练写、互评互改，完成从选材到表达再到修改的完整过程，真正习得方法、用上方法。整堂课以选材为起点，以练写为核心，以评改为落点，环环相扣。

六、说教学过程
我设计了五个环节。第一环节情境导入，谈话唤醒美好记忆，确定写作任务。第二环节审清题目，抓"生活、更美好、横线填什么"三个关键词，明确大处着想、小处落笔。第三环节回忆检索，用"想不出具体事就换题"的原则筛选素材，示范列提纲。第四环节范文引路，出示以小见大的写法支架，对比空泛段与升格段，当堂练写精彩片段，这是方法的落地，支架、例文、对比片段三者并用，让孩子直观感受到好文章是具体的。第五环节评改分享，用评价表先自评再互评，当堂升格一处，把评价的权利交给学生，先自评圈问题，再互评提建议，让修改成为自觉的习惯。时间分配为五、七、八、十二、八分钟，练写与评改占半节课，保证写作真实发生。此外，我特别注意环节之间的过渡，从唤醒到审题、从选材到练写、从评改到总结，每一步都为下一步搭好台阶。

七、说板书设计
板书以题目"让生活更美好"为中心，上方写补题标准"真实、具体、小巧"，中间写结构"是什么、为什么美好、怎样带来美好"和"开头点题、中间写事例、结尾升华"，下方写以小见大的支架"小事、细节、感受、点题"。板书就是一篇习作的思维导图，学生看着板书就能搭起文章骨架，把整节课的方法带回家。板书上的每一个关键词，都来自学生的发现和教师的提炼，是师生共同完成的课堂笔记。在评改环节，我还会请修改前后对比鲜明的同学站起来朗读，让全班听到文字变好的声音。

八、说教学反思
这节课我最看重的是"真实"二字。选材时坚持回忆检索，宁可让学生换题，也不让他写空话；写作时用对比片段让学生自己发现具体与空洞的差别；评改时用简单的星级表，先自评圈问题、再互评提建议，保证每个孩子都能当堂改起来。预设的困难是学生可能把小事写平，我会用"放大细节"的追问帮他把动作、语言、心理写具体。我还预设了学生补题雷同的情况，准备了备用素材，引导孩子从不同角度挖掘自己独有的美好。如果时间紧张，我会合并结尾点评，但练写环节的时间绝不压缩，因为只有动笔，方法才真正属于学生。同时我也提醒自己，公开课上要给学生留足安静写作的时间，热闹的讨论代替不了笔尖的思考。最后，愿每一个孩子都能在写作中，发现生活里被忽略的美好。我的说课到此结束，谢谢各位老师。`}},ms={"小学|一年级|数学|认识人民币":{plan:`**教学基本信息**

- 课题：认识人民币
- 教材版本：人教版义务教育教科书《数学》一年级下册
- 年级：一年级
- 课型：新授课
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学一年级学生

**教学目标**

1. 借助实物观察和认一认活动，认识人民币的单位元、角、分，能正确读出并区分常见面值的纸币与硬币，在认币过程中积累量感，体会人民币是表示钱数的工具。
2. 通过摆一摆、换一换的兑换活动，理解 1 元等于 10 角、1 角等于 10 分，会进行简单的单位换算，感悟人民币的十进关系与计数单位之间的关联，发展数感。
3. 在模拟购物中能合理付钱、正确算找零，体会付钱方案多样而总额不变，感受数学与生活的联系，养成爱护人民币的好习惯。

**教学重难点**

重点：认识人民币的各种面值，理解元、角、分之间的十进关系，掌握 1 元等于 10 角、1 角等于 10 分。
难点：在购物情境中根据应付钱数合理付钱并正确找零；灵活进行不同面值之间的等值兑换。

**教学准备**

多媒体课件（购物动画、价签图）；人民币仿真学具（纸币 100 元、50 元、20 元、10 元、5 元、1 元、5 角、1 角，硬币 1 元、5 角、1 角、5 分、2 分、1 分）；磁性大钱币；小商品图片及价签；购物篮；兑换记录单。

**教学过程**

**环节一 情境导入：压岁钱与存钱罐（约 5 分钟）**

教师活动：
（课件出示小朋友往存钱罐里投硬币的动画，配上清脆的叮当声）
师：小朋友们，过年的时候，你们收到过什么特别的礼物吗？
生：压岁钱！还有新衣服！
师：是呀，过年时长辈会给压岁钱。老师这儿有个小猪存钱罐，装满了各种各样的钱。你们买东西时要用什么呀？
生：见过！买东西要付钱，要用人民币。
师：说得真好。我们国家用来买东西的钱叫人民币，是法定货币。今天这节课，我们就来好好认识这位生活中的好朋友——人民币。（板书课题：认识人民币）
生：（齐读课题）

学生活动：结合生活经验畅谈压岁钱和购物经历，说出用钱买东西的生活常识。

设计意图：从压岁钱这一熟悉的生活话题切入，唤起已有的货币经验，让学生感受到人民币就在身边，为认识面值、学习换算埋下情感和认知的伏笔。

**环节二 认一认：认识各种面值的人民币（约 10 分钟）**

教师活动：
师：打开学具袋，把人民币学具都请出来。先自己看一看、摸一摸，你认识哪一种，就举手说一说。
（学生自由观察后交流）
生：我认识 1 元的纸币，上面写着 1 和元。
师：对，人民币正面都写着数字和单位，看数字和单位就能认出面值。数字是 5，单位是角，就是 5 角。
（课件放大 5 角纸币）
师：谁来指一指 5 角纸币上的数字和单位？
生：数字是 5，单位是角，所以是 5 角。
师：真会看！人民币不仅有纸币，还有硬币。这枚圆圆的、金灿灿的是多少钱？
生：5 角硬币！
师：1 元硬币是银白色的、稍大些；5 角硬币是金黄色的；1 角硬币是银白色但较小。认硬币时看大小和颜色就能区分。
（教师逐一出示 100 元、50 元、20 元、10 元、5 元纸币，带领学生认读）
师：现在老师拿出一张，你们说面值，看谁反应最快。这一张？
生：100 元！50 元！20 元！10 元！5 元！
师：纸币里有没有 1 元？谁能在学具里找到 1 元纸币和 1 元硬币？
生：（分别举起 1 元纸币和 1 元硬币）
师：硬币里还有分币呢，5 分、2 分、1 分。虽然现在很少用到，但我们也来认一认。
（课件出示分币图）

学生活动：独立观察学具中的人民币，辨认面值，交流认法，参与抢答与找一找游戏。

设计意图：先让学生充分观察、动手摸一摸，再交流看数字和单位的认币方法，把认币主动权交给学生；借助比大小、看颜色的技巧辅助区分易混硬币，为换算积累准确表象。

**环节三 换一换：理解元、角、分的十进关系（约 10 分钟）**

教师活动：
师：认识了这么多人民币，老师想用 1 元纸币跟你们换钱。1 元可以换成几个 1 角？同桌合作，用学具摆一摆、数一数。
（学生动手兑换，教师巡视）
生：1 元可以换 10 个 1 角！
师：所以 1 元等于 10 角。（板书：1 元 = 10 角）
师：那 1 角可以换几个 1 分呢？自己换一换。
生：1 角等于 10 分，可以换 10 个 1 分。（板书：1 角 = 10 分）
师：1 元里面有几个 1 分？10 个 1 角是 1 元，每个 1 角又有 10 分，10 个十是 100，所以 1 元等于 100 分。（板书：1 元 = 100 分）
师：发现了吗？元、角、分和计数是一样的，都是满十进一，10 角满十就进成 1 元，就像 10 个一进成 1 个十。
师：现在来玩兑换小游戏。1 元换 5 角，能换几枚？
生：2 枚！1 元等于 10 角，10 角里面有 2 个 5 角。
师：1 元换 2 角呢？
生：5 个 2 角。
师：1 角换 5 分呢？
生：2 枚，10 分里面有 2 个 5 分。
（教师板书：1 元 = 2 个 5 角 = 5 个 2 角 = 10 个 1 角）

学生活动：同桌合作摆一摆、换一换，体验 1 元换 10 角、1 角换 10 分，参与兑换小游戏并汇报。

设计意图：把抽象进率转化为具体兑换操作，让学生在摆一摆、数一数中亲历 1 元等于 10 角、1 角等于 10 分的形成过程，并借助 10 个十是 100 打通元角分与计数单位的内在联系，发展数感。

**环节四 买一买：模拟购物，付钱与找钱（约 10 分钟）**

教师活动：
（课件出示小超市，货架上摆着带价签的商品：铅笔 5 角，本子 3 元 5 角，橡皮 1 元 2 角，彩笔 6 元 5 角）
师：小超市开张啦！看，老师这里有商品图片和价格标签。谁想当小顾客？先来买一块橡皮，橡皮 1 元 2 角，你会怎么付钱？
生：付 1 张 1 元纸币和 2 枚 1 角硬币。
师：付的钱正好吗？1 元加 2 角，正好。还有不同的付法吗？
生：可以付 1 张 1 元和 1 枚 5 角，再找回 3 角。
师：了不起！付的钱超过应付的钱，就要找回多付的。应付 1 元 2 角，付了 1 元 5 角，应找回多少？
生：1 元 5 角减 1 元 2 角，等于 3 角，应找回 3 角。
师：再来看彩笔 6 元 5 角，你们想怎么付钱？小组里商量一下，用学具摆一摆。
（小组合作摆出不同方案，汇报）
生：我们付 1 张 5 元、1 张 1 元和 1 枚 5 角，正好 6 元 5 角。
生：我们付 6 张 1 元和 1 枚 5 角。
师：付钱的方法多种多样，但付的钱加起来要正好够，或者比应付的多。
（练习）师：本子 3 元 5 角，顾客付了 5 元，应找回多少钱？自己算一算。
生：5 元减 3 元 5 角等于 1 元 5 角，应找回 1 元 5 角。
师：对！找钱时，用已付的钱减去应付的钱，就是应找回的钱。
（课件出示人民币符号）师：人民币有自己的符号，写作一个特殊的 Y。价签上写 6.50 元，表示 6 元 5 角。

学生活动：扮演顾客与收银员，用学具摆付钱方案，讨论多种付法，练习算找零，认识人民币的符号。

设计意图：把知识运用放到模拟购物中，让学生在付钱、找钱的操作中体会总额相等的等价思想，理解付钱方案多样而价值不变，同时认识人民币的符号表示，发展量感与运算能力。

**环节五 小结提升：爱护人民币（约 5 分钟）**

教师活动：
师：这节课你有什么收获？和同桌说一说。
生：我知道了 1 元等于 10 角、1 角等于 10 分，还学会了买东西付钱和找钱。
师：人民币是我们国家的法定货币，就像我们的好朋友。平时我们应该怎样对待它呢？
生：不在人民币上乱写乱画，不揉折、不撕扯。
师：对！我们要爱护人民币，把它平平整整地放好。如果发现假币，要交给银行或警察叔叔，不能自己使用。
（练习抢答）师：1 元等于（　）角；10 分等于（　）角；6 元 5 角等于（　）角。
生：10 角；1 角；65 角。
师：最后送大家一个任务：课后和爸爸妈妈去一次超市，观察价格标签，试着用人民币付一次钱，记录付钱找钱的过程。

学生活动：回顾本课收获，交流爱护人民币的做法，完成口答练习，明确课后任务。

设计意图：通过小结把知识结构化，把爱护人民币的教育自然融入课堂，让数学学习与品行养成相结合；课外作业把所学延伸到真实生活，巩固量感体验。

**板书设计**

认识人民币

单位：元、角、分
纸币：100 元　50 元　20 元　10 元　5 元　1 元　5 角　1 角
硬币：1 元　5 角　1 角　5 分　2 分　1 分

1 元 = 10 角　　1 角 = 10 分　　1 元 = 100 分
1 元 = 2 个 5 角 = 5 个 2 角 = 10 个 1 角

付钱：正好够或比应付的多
找钱：已付 − 应付 = 应找回（5 元 − 3 元 5 角 = 1 元 5 角）

**教学反思要点**

1. 兑换操作前要先明确要求，防止只摆不说，应引导边摆边数边汇报，让 1 元等于 10 角在动手与表达中内化。
2. 易混的 5 角与 1 元硬币、1 角与 5 分硬币要放大对比，用大小、颜色双重线索建立清晰表象。
3. 学生常把 1 元等于 10 角记成 1 元等于 10 分，要反复对照满十进一，并带着学生指读板书中的进率等式。
4. 找零计算是本课难点，应多提供几元几角减几元几角的题目，先摆学具再列式。
5. 模拟购物要注意时间控制，若小组方案雷同，可引导比较哪种付法张数最少，提升思维含量。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版一年级下册认识人民币第一课时。这一课属于数与代数领域，是对人民币单位元、角、分的初步认识。教材先安排认识各种面值的人民币，再揭示元、角、分之间的十进关系，最后通过模拟购物学习付钱和找钱。人民币是学生日常生活离不开的支付工具，认识人民币既是生活的需要，也是今后学习小数、进一步认识数量关系的基础。同时，这一内容也承载着爱护人民币、树立正确金钱观的教育价值，是数学学科育人的重要载体。我把这节课定位为一节生活化的概念认识课，让学生从认识人民币开始，走近生活中的数学。

**二、说学情**

一年级的孩子在生活中经常接触钱，能说出一些面值，但大多是零散的生活经验。他们对 1 元等于 10 角、1 角等于 10 分这样的进率关系并不清楚，也不会系统地认读各种面值。这个年龄的孩子喜欢动手、喜欢游戏、乐于表演，注意力集中的时间不长。所以，我尽量把认币、换币、购物都设计成可以动手的活动，让孩子在看一看、摆一摆、买一买中学习。另外，现在很多孩子对分币十分陌生，甚至从未见过，教学中要适当放慢速度，把认一认、摆一摆的时间给足，让每个孩子都能在动手活动中建立对人民币的直观印象。

**三、说教学目标**

根据课程标准和学生实际，我确定了三个目标。第一，认识人民币的单位元、角、分和常见面值，能正确区分纸币与硬币，在认币中积累量感。第二，理解 1 元等于 10 角、1 角等于 10 分，会进行简单的换算，感悟十进关系，发展数感。第三，在模拟购物中会付钱、会算找零，体会付钱方案多样而总额不变，养成爱护人民币的习惯。三个目标层层递进，从认识走向运用，量感和数感是本课核心素养的主要落点。同时，在认一认的观察、换一换的操作、买一买的运用中，学生的观察能力、动手能力和解决实际问题的能力都得到了锻炼，体现了数学与生活的紧密融合。

**四、说教学重难点**

本课的重点是认识面值，理解元、角、分之间的十进关系。难点是在购物情境中合理付钱和正确找零。为什么找钱难？因为学生要同时处理元与角两种单位，既要算钱数，又要进行单位换算，思维的跨度比较大。为了突破难点，我会让学生先用学具摆一摆付钱的过程，再列式算找零，把具体操作和抽象计算结合起来。至于等值兑换，它的本质是等值替换，学生初学时容易只摆出一个 5 角就停手，我会用你还能换出几种不同的组合来引导他们打开思路。

**五、说教法学法**

本课主要采用实物观察法、动手操作法、游戏教学法和情境教学法。教师以一个小超市贯穿全课，引导学生认一认、换一换、买一买，在充分的活动中自主发现进率关系，做到眼到、手到、心到，真正让学生站在课堂的正中央。此外，我还设计了兑换小游戏，让学生在游戏中巩固进率，让学习变得轻松有趣，既动脑又动手。

**六、说教学过程**

本课 40 分钟，我设计了五个环节。第一环节情境导入，约 5 分钟，从压岁钱和存钱罐谈起，唤起生活经验，引出课题。第二环节认一认，约 10 分钟，让学生观察学具认读各种面值，掌握看数字和单位的认币方法。第三环节换一换，约 10 分钟，这是本课的重心，学生通过摆一摆得出 1 元等于 10 角、1 角等于 10 分，再玩兑换游戏加深理解。第四环节买一买，约 10 分钟，模拟购物，学生扮演顾客与收银员，摆付钱方案、算找零。第五环节小结提升，约 5 分钟，梳理收获、渗透爱护人民币，布置家庭小超市的实践作业。

特别要说一说兑换这一环节的设计。我先让同桌合作摆一摆，数出 1 元可以换 10 个 1 角，再追问 1 元里面有几个 1 分，引导学生用 10 个十是 100 推出 1 元等于 100 分，把元角分的进率与学生熟悉的计数单位打通。随后用 1 元换 5 角能换几枚的兑换游戏，把知识用起来，学生在玩中加深了对十进关系的理解。需要说明的是，整节课我都坚持让学生边操作边表达，把无声的学具变成有声的思维；在买一买环节，我还会引导学生比较不同的付钱方案，讨论哪种更简便，让简单的购物活动也蕴含着思考。

**七、说板书设计**

我的板书围绕认、换、买三个板块展开。左边写单位和面值，中间是三个进率等式和兑换结果，右边是购物中的付钱与找钱方法及示例。整个板书一目了然，既是本课的知识主线，也是学生回顾复习的凭借。我用不同颜色的粉笔区分元和角，让进率关系在视觉上更加醒目。

**八、说教学反思与效果预测**

这节课以操作和情境为主线，预计课堂气氛活跃，学生参与度高。认面值和进率关系的目标应该能顺利达成；找钱计算可能还有部分学生出错，我会在小组交流中重点巡视指导。针对基础较弱的学生，我只要求他们认识常见面值和掌握两个进率；对学有余力的学生，鼓励他们尝试多种找钱方案，挑战多件商品合买。课后通过家庭小超市的实践作业，让知识在真实生活中得到运用和巩固。我相信孩子们会喜欢这节用钱的数学课，并在生活中更加爱护人民币。我的说课到此结束，谢谢大家！`},"小学|一年级|数学|找规律":{plan:`**教学基本信息**

- 课题：找规律
- 教材版本：人教版义务教育教科书《数学》一年级下册
- 年级：一年级
- 课型：新授课
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学一年级学生

**教学目标**

1. 通过观察彩旗、彩花、灯笼等生活情境，初步认识图形与数字的简单排列规律，知道规律是一个基本单元在不断重复，在观察中发展推理意识。
2. 能用自己的语言描述发现的规律，掌握看一看、找一组、验一验的方法，会依据规律接着画、接着摆、接着填，发展观察能力和表达能力。
3. 能创造有规律的排列，感受规律带来的秩序与美感，体会数学与生活的紧密联系，激发学习数学的兴趣。

**教学重难点**

重点：发现并描述图形与数字的简单排列规律，知道规律是几个为一组在重复。
难点：从一组的角度概括规律，用清晰完整的语言表述几个为一组、每组是什么、怎样重复。

**教学准备**

多媒体课件（节日装饰动画、规律画廊）；彩旗、彩花、灯笼图卡；串珠学具；彩色积木；涂色卡纸；磁性贴；规律探究单。

**教学过程**

**环节一 情境导入：节日里的彩旗（约 5 分钟）**

教师活动：
（课件出示校园布置节日装饰的情境：一串彩旗随风飘动）
师：小朋友，为了迎接节日，同学们正在布置校园。看，操场上挂起了一串彩旗，这些彩旗的颜色排列得可整齐了。仔细观察，你能发现这串彩旗是按什么顺序挂的吗？
生：红、黄、红、黄……是一面红一面黄排下去的。
师：你真会观察！红旗、黄旗、红旗、黄旗这样反复地出现，就是有规律。今天我们就一起来找规律。（板书课题：找规律）
生：（齐读课题）

学生活动：观察彩旗排列，说出颜色依次出现的方式，初步感受反复出现就是有规律。

设计意图：用节日布置这一真实情境引入，彩旗红黄红黄的排列直观呈现了规律的基本形态，让学生在熟悉的情境中初步感知规律的含义，为理解一组做好铺垫。

**环节二 认识规律：找出一组（约 12 分钟）**

教师活动：
（课件出示完整的彩旗、彩花、灯笼三组装饰图）
师：这里有三样装饰：彩旗、彩花和灯笼。我们一行一行看。先看彩旗，前面你们已经发现是红、黄重复。像这样红、黄、红、黄，我们就把红、黄这两个看成一组。（板书：红黄 ｜ 红黄 ｜ 红黄）
师：谁来说说，彩旗是按几个为一组排列的？每组是什么？
生：两个为一组，每组是一面红旗和一面黄旗。
师：表述得真完整！再看彩花，请你用几个为一组、每组是什么这样的话说一说。
生：彩花是红、黄、蓝、红、黄、蓝……三个为一组，每组是一朵红花、一朵黄花、一朵蓝花。
（课件演示圈出一组）
师：圈一圈，把重复的一组圈出来，规律就一目了然了。灯笼呢？
生：灯笼是红、红、黄、红、红、黄……两个红的、一个黄的，三个为一组。
师：都是三个为一组，但组可不一样。彩花是红黄蓝，灯笼是红红黄，顺序不同，规律就不同。规律的关键不在单个图形，而在一组有几个、按什么顺序。
（练习）师：出示 1、2、1、2、1、2 这串数，几个为一组？
生：两个为一组，每组是 1 和 2。
师：接着往下写，应该写几？
生：写 1，然后是 2。

学生活动：逐组观察彩旗、彩花、灯笼，用几个为一组、每组是什么的句式描述规律，动手圈一圈重复的一组，完成数字组的小练习。

设计意图：用圈一圈把抽象的一组可视化，通过规范句式反复训练，帮助学生建立几个为一组、每组是什么的规律认知模型，这是本课的核心，为后续判断和创造规律打下基础。

**环节三 探索规律：多样的规律类型（约 10 分钟）**

教师活动：
师：规律可不止一种。我们来开一个规律画廊，看看这里的图形藏着什么规律。
（课件出示三角形、圆形交替排列）
生：三角形、圆形、三角形、圆形……两个为一组，一组是三角形和圆形。
师：颜色呢？如果把三角形涂成红色、圆形涂成黄色，就是红黄红黄。观察的角度不一样，发现的规律也不一样。
（课件出示数字规律：2、4、6、8）
师：这组数字有什么规律？相邻两个数相差几？
生：每次加 2，2 加 2 是 4，4 加 2 是 6，6 加 2 是 8。
师：数字依次变大，叫递增。那这组呢：10、8、6、4。
生：每次减 2，数字越来越小。
师：对，这叫递减。（板书：递增　每次加几；递减　每次减几）
（课件出示动作游戏）
师：规律还可以藏在动作里。看老师做：拍手、跺脚、拍手、跺脚……谁接着做？
生：（接着拍手、跺脚）
师：一起来，拍手、跺脚、拍手、跺脚——做动作的时候，身体也能感受到规律。

学生活动：观察形状、颜色、数字、动作等多种类型的规律，说清每组构成和变化方式，参与动作接龙游戏。

设计意图：把颜色、形状、数字、动作等多种规律类型集中呈现，帮助学生认识规律的丰富形态，同时引入递增、递减的说法，让学生在感知中拓宽对规律的理解。

**环节四 创造规律：我是小小设计师（约 8 分钟）**

教师活动：
师：规律不仅要会找，还要会创造。现在请你当小设计师，用学具袋里的珠子穿一串有规律的项链，或者用彩色积木摆一行有规律的小路，也可以用彩笔在纸上画一列有规律的图形。
（学生动手创作，教师巡视）
师：完成的同学把作品举起来，我们互相欣赏。谁来介绍自己的作品？
生：我摆的是红、蓝、蓝、红、蓝、蓝……三个为一组。
生：我画的是一大一小、一大一小……
师：作品都很棒！现在我们来玩接龙猜一猜：老师摆出一部分规律，请你们猜下一个是什么。三角形、正方形、三角形、正方形，下一个？
生：三角形！
师：依据是什么？
生：因为两个为一组，摆完正方形，就该从三角形开始了。
师：说得真有根据！这就是用规律推理，先看一看，再找出一组，最后验一验对不对。找规律的三个小窍门就是：看一看、找一组、验一验。

学生活动：自主选择穿珠、摆积木或涂色创作有规律的排列，展示并介绍作品，参与接龙猜一猜推理游戏。

设计意图：从发现规律走向创造规律，让学生在创作中深化对规律的理解；接龙猜一猜把推理方法显性化，帮助学生把看、找、验三个步骤转化为可以迁移的思维方法。

**环节五 拓展应用：生活中的规律（约 5 分钟）**

教师活动：
（课件出示生活中的规律图片：斑马线、地砖花纹、窗帘图案、音乐节拍、四季更替）
师：规律无处不在。斑马线一根黑一根白，地砖一块深一块浅，窗帘上的花纹一圈一圈，音乐按节拍一强一弱，一年里春夏秋冬反复循环。你还在哪里见过规律？
生：妈妈织的毛衣上有花纹。
生：我们坐的课桌是一排一排的。
师：规律让世界变得有序又美丽。一起来回顾，这节课我们学会了什么？
生：会找规律，知道几个为一组，还会创造规律。
（练习）师：猜一猜，这一串图形里的第 7 个是什么？（出示三角形、圆形、三角形、圆形……）
生：第 7 个是三角形。因为两个为一组，第 1、3、5、7 个都是组里的第一个，都是三角形。
师：真了不起！我们摆一摆、数一数，也能找到答案。

学生活动：欣赏生活中的规律图片，交流身边的规律，完成第几个是什么的推理练习，回顾梳理收获。

设计意图：把视线从课堂引向生活，让学生感受规律让世界更有序、更美丽；第几个是什么的练习借助已圈出的组和数一数的方法，把直观操作与简单推理结合起来，渗透有余数除法思想的萌芽。

**板书设计**

找规律

反复出现 ＝ 有规律

看一看　找一组　验一验

彩旗：红黄 ｜ 红黄 ｜ 红黄（两个为一组）
彩花：红黄蓝 ｜ 红黄蓝（三个为一组）
数字：2、4、6、8　递增（每次加 2）
　　　10、8、6、4　递减（每次减 2）

一组有几个、按什么顺序，是规律的关键

**教学反思要点**

1. 一组概念的建立是本课成败的关键，教学时要坚持让学生圈一圈、说一说，把几个为一组、每组是什么说完整，避免只盯住单个图形。
2. 学生容易只看前两个图形就下结论，应引导至少观察规律完整重复两次再确认，培养严谨的观察习惯。
3. 描述规律的语言要规范统一，教师示范句式后放手让学生说，对表达不完整的学生及时引导补全。
4. 第几个是什么的问题要借助摆一摆、数一数建立直观，先学会用实物找到答案，再过渡到规律推理。
5. 创造规律环节学生创意多，时间要合理安排，展示交流时聚焦有没有重复的一组来评价作品是否真有规律。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版一年级下册找规律第一课时。这一课属于数与代数领域探索规律的起步内容，也是小学生第一次系统地学习找规律。教材从节日布置的情境入手，引导学生观察彩旗、彩花、灯笼等装饰，发现图形和数字的排列规律，再通过动手创造规律加深理解。找规律是培养观察能力、推理能力和表达能力的好载体，也是今后学习数列、周期问题的重要基础。从长远看，学生能否用一组来概括重复的事物，直接影响他们对周期现象的理解深度，所以这一课的定位非常重要。我把这节课定位为一节以观察和推理为核心的活动课。

**二、说学情**

一年级的学生对身边反复出现的事物并不陌生，比如地砖、花纹，但说不出规律这个词，也不会用一组来概括。他们的思维以直观形象为主，喜欢动手、喜欢游戏，但概括能力较弱。常见的问题是看到前两个图形就匆忙下结论，或者心里明白却说不清楚。所以，我特别设计了圈一圈的方法，把抽象的一组变得看得见，并用规范的句式帮助学生把规律说清楚。同时，考虑到学生之间存在差异，我在创造规律环节提供了穿珠、摆积木、涂色等多种选择，让不同能力水平的孩子都能找到适合自己的表达方式。

**三、说教学目标**

根据课程标准和教材，我确定了三个目标。第一，在观察生活情境中发现图形与数字的排列规律，知道一组是规律的基本单位，发展推理意识。第二，能用几个为一组、每组是什么的语言描述规律，掌握看一看、找一组、验一验的方法，会接着画、接着填。第三，能创造有规律的排列，感受规律的美，体会数学与生活的联系。其中推理意识的启蒙和模型意识的萌芽是本课核心素养的主要落点。学生从具体的排列中概括出一组，再用这一组去预测下一个图形，这个过程本身就是最朴素的归纳与推理，值得在课堂上充分展开。

**四、说教学重难点**

本课的重点是发现并描述简单的排列规律。难点是从一组的角度认识规律，并用准确的语言表述出来。为什么难？因为一年级的孩子习惯看单个图形，很难把一串事物概括成几个为一组、按什么顺序重复。为了突破，我让学生动手圈一圈，把重复的一组圈出来，再照着句式说一遍，让思维的过程看得见、说得清。此外，数字规律中的递增、递减只要求学生能发现相邻两个数相差几，能接着往下填即可，不做过高的要求。

**五、说教法学法**

本课采用情境教学法、观察发现法、动手操作法和游戏教学法。教师创设节日布置和规律画廊的情境，引导学生通过看、找、圈、说、验，自主建构规律的概念，学生真正成为发现者、创造者。我还特别重视圈一圈这个操作工具，让学生的思维过程变得可以触摸、可以检验。

**六、说教学过程**

本课 40 分钟，我设计了五个环节。第一环节情境导入，约 5 分钟，从校园节日布置的彩旗入手，初步感知反复出现就是有规律。第二环节认识规律，约 12 分钟，这是本课的核心，通过圈一圈、说一说，认识一组，学会用规范句式描述规律。第三环节探索规律，约 10 分钟，认识颜色、形状、数字、动作等多种规律类型，引入递增和递减。第四环节创造规律，约 8 分钟，学生当小设计师创作有规律的排列，在接龙游戏中运用看、找、验三步骤。第五环节拓展应用，约 5 分钟，联系生活中的规律，完成第几个是什么的推理练习。在这一环节，学生欣赏生活中的规律图片，交流身边处处可见的规律，真切体会到数学之美、秩序之美。

特别要说一说第二环节的设计。我先让学生观察彩旗，得出红黄红黄，顺势圈出红黄这一组；再让彩花、灯笼用同样的方法圈一组、说一组。通过三个例子的对比，学生体会到：规律的关键不是单个图形，而是一组有几个、按什么顺序。这个模型一旦建立，后续找数字规律、判断第几个是什么，就有了思维的支点。在第四环节，我设计了接龙猜一猜的游戏，让学生在看一看、找一组、验一验的过程中运用规律进行推理，把方法训练融进游戏，避免枯燥的机械练习。

**七、说板书设计**

我的板书以一组为核心展开，左边写看一看、找一组、验一验三个步骤，中间呈现彩旗、彩花、灯笼和数字规律的示例，右边点明一组有几个、按什么顺序是规律的关键。板书结构清晰，既是知识主线，也承载着方法指导。我还把几个为一组、每组是什么的句式保留在显著位置，供学生描述规律时参照，起到语言支架的作用。

**八、说教学反思与效果预测**

这节课以观察和操作为主线，预计学生的参与热情很高，创造规律的环节会精彩纷呈。需要关注的是个别孩子语言表达还不够完整，我会在小组交流中加强引导；第几个是什么对部分学生仍有难度，我会用摆一摆、数一数帮他们搭桥，先建立直观再过渡到推理。对于学有余力的学生，我会鼓励他们创造周期更长的规律，比如三个图形一组、四个图形一组的排列。从整体看，学生能在发现、描述、创造规律的过程中发展观察力和推理能力，感受到数学的秩序之美与和谐之美。这堂课虽然结束了，但孩子们探究规律的兴趣才刚刚开始。我的说课到此结束，谢谢大家！`},"小学|一年级|数学|分类与整理":{plan:`**教学基本信息**

- 课题：分类与整理
- 教材版本：人教版义务教育教科书《数学》一年级下册
- 年级：一年级
- 课型：新授课
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学一年级学生

**教学目标**

1. 结合整理书包、整理气球等具体情境，经历按给定标准分类的过程，知道把同类事物放在一起就是分类，体会分类能让物品有条理，形成初步的数据意识。
2. 能用象形统计图和简单统计表呈现分类结果，通过一个对一个的对应排列直观比较各类数量的多少，发展一一对应思想和数据分析能力。
3. 能根据分类结果提出并回答简单的问题，理解分类标准不同结果就不同、总数量不变，感受数学与生活的密切联系，养成有序整理的好习惯。

**教学重难点**

重点：按不同的标准对物体进行分类，用象形统计图和统计表整理分类结果。
难点：理解分类标准不同，分类结果就不同；能自己确定标准，完整经历分一分、数一数、记一记的过程。

**教学准备**

多媒体课件（气球分类动画、整理书包情境）；气球、水果、文具图片卡片；象形统计图记录纸；统计表模板；实物积木；小磁贴；小组合作单。

**教学过程**

**环节一 情境导入：乱糟糟的书包（约 5 分钟）**

教师活动：
（课件出示两张书包照片：一张凌乱、一张整齐）
师：小朋友们，看看这两个书包，你喜欢哪一个？为什么？
生：我喜欢第二个，因为它整整齐齐的，找东西方便。
师：说得好！第一个书包里书本、文具、水杯都混在一起，乱糟糟的；第二个书包把课本放在一起、文具放在一起、水杯放在一边，多清爽。把同类的东西放在一起，就叫分类。（板书：分类）
师：想一想，除了整理书包，生活中哪里也在分类？
生：超市里的东西按区域放。
生：图书馆的书按类别放。
师：超市有食品区、文具区、日用品区，图书馆的书分门别类摆上架，这些都是分类。今天我们就来学习分类，还要学会把分类的结果记录下来，这就是整理。（补充板书课题：分类与整理）

学生活动：对比两张书包照片，说说喜欢哪个并说明理由，交流生活中的分类现象，理解分类的意义。

设计意图：用凌乱与整齐的书包对比引发直观感受，让分类的意义在生活场景中自然显现；从整理书包聊到超市、图书馆，拓宽视野，让学生体会到分类就在身边，激发学习需求。

**环节二 分一分：按标准分类（约 10 分钟）**

教师活动：
（课件出示一堆气球：红色圆形、黄色圆形、蓝色圆形、红色星形、黄色星形等若干）
师：看，老师带来了一堆气球。气球有红色、黄色、蓝色，有圆形的、有星形的。如果要把它们分一分，可以按什么来分？
生：按颜色分，红的一类、黄的一类、蓝的一类。
师：还可以怎么分？
生：按形状分，圆形的一类、星形的一类。
师：同一个气球堆，按颜色能分，按形状也能分，标准不一样，分出来的结果就不一样。请各小组选择一种标准，把气球图卡分一分，边分边数，每类各有几个。
（小组合作分气球，汇报）
生：我们按颜色分，红色 5 个、黄色 3 个、蓝色 4 个，一共 12 个。
生：我们按形状分，圆形 7 个、星形 5 个，一共也是 12 个。
师：两种分法，气球的总数变了吗？
生：没有，都是 12 个。
师：对！不管按什么标准分，气球的总数都不变，变的是分类的结果。分的时候，一定要先想清楚按什么标准分，再把同类的放在一起。
（练习）师：把 6 支铅笔分一分，可以按什么标准分？
生：按颜色分，红的几支、蓝的几支；也可以按有没有橡皮头分。

学生活动：小组合作按选定标准分气球图卡，边分边数，汇报分类结果，对比不同标准的分类结果与总数。

设计意图：通过同一堆气球按不同标准分类的对比活动，让学生亲历定标准、分一分、数一数的过程，直观体会标准不同结果不同、总数不变的道理，突破本课难点。

**环节三 记一记：画象形统计图（约 10 分钟）**

教师活动：
师：分好以后，怎么让别人一眼看出每类有几个呢？我们可以把结果记录下来。看，老师这儿有一张记录纸，我们按一个气球画一个圈的办法来记录。
（课件演示：第一行画 5 个圈表示红色 5 个，第二行画 3 个圈表示黄色 3 个，第三行画 4 个圈表示蓝色 4 个，每行从左边对齐）
师：这样用图形一个一个对应着表示个数，画出来的图叫象形统计图。（板书：象形统计图）
师：从图上能一眼看出哪一类最多、哪一类最少吗？
生：能！红色这一行最长，最多；黄色这一行最短，最少。
师：对，这就是象形统计图的好处——哪一行最长，哪一类就最多。请大家拿出记录纸，把刚才分气球的另一种标准也画成象形统计图，注意一行画一类，一个气球画一个圈，从左边对齐。
（学生独立绘制，教师巡视指导）
师：同桌互相检查，数一数每行画的圈和气球个数对不对。

学生活动：观察课件演示，学习用一个对一个的方法绘制象形统计图，独立完成另一种标准的统计图，同桌互查。

设计意图：借助一个气球对应一个圈的直观操作，帮助学生理解象形统计图的原理和好处，在动手绘制中发展一一对应思想和几何直观，体会用图表整理数据的价值。

**环节四 填一填：认识统计表，提出问题（约 10 分钟）**

教师活动：
师：除了象形统计图，我们还可以把分类结果填进表格里，这样的表格叫统计表。（板书：统计表）
（课件出示表格：类别写红色、黄色、蓝色，下面分别写 5、3、4）
师：把每类的名字写在类别这一栏，把个数写在下面，一一对应，就清清楚楚了。请把刚才按形状分的结果填进统计表里。
（学生填写统计表，汇报）
生：圆形 7 个、星形 5 个。
师：看统计表和统计图，你能提出什么问题？同桌互相问一问、答一答。
生：红色比黄色多几个？5 减 3 等于 2，多 2 个。
生：一共有多少个气球？5 加 3 加 4 等于 12 个。
生：黄色比蓝色少几个？4 减 3 等于 1，少 1 个。
（教师出示整理文具情境）师：现在把桌上的文具按用途分一分，再画成象形统计图。铅笔、橡皮、尺子各有多少？
（学生操作后汇报：铅笔 6 支、橡皮 4 块、尺子 3 把）
师：哪种文具最多？全班一共用了多少件文具？
生：铅笔最多。6 加 4 加 3 等于 13 件。

学生活动：把分类结果填入统计表，同桌互问互答，从统计图表中提取信息、提出问题并计算回答，动手整理文具并记录。

设计意图：从象形统计图过渡到统计表，让学生掌握记录数据的两种方式；通过提问与回答，引导学生读懂数据、会算比较，经历数据收集、整理、描述、分析的完整过程，发展数据意识。

**环节五 总结提升：分类让生活更有序（约 5 分钟）**

教师活动：
师：这节课你学会了什么？先和同桌说一说。
生：学会了按标准分类，还学会了画象形统计图和填统计表。
师：分类有什么好处呢？
生：东西放整齐了，找起来方便，还能看出哪类多哪类少。
师：对！分类不仅让生活有条理，还能帮我们整理信息、发现规律。今天的作业是：回家整理自己的书桌或玩具箱，按你的标准分一分，再用象形统计图或统计表记录结果，明天带来和大家分享。
（口答练习）师：这里有一堆图形，三角形、三角形、正方形、三角形、三角形、正方形，按形状分，每类几个？
生：三角形有 4 个、正方形有 2 个。

学生活动：回顾分类与整理的方法和意义，交流收获，完成口答练习，明确课后整理作业。

设计意图：通过回顾梳理，帮助学生把零散的活动经验上升为分类整理的知识与方法；把课堂延伸到家庭，让分类整理的好习惯在日常生活中落地生根。

**板书设计**

分类与整理

分类：把同类事物放在一起

定标准 → 分一分 → 数一数 → 记一记

标准不同，结果不同；总数不变

象形统计图：一个图形表示一个物体，哪一行长哪一类就多
统计表：类别和个数一一对应

**教学反思要点**

1. 分类前必须让学生先说清标准再动手，坚持定标准、分一分、数一数、记一记四个步骤，避免学生混着分。
2. 数数容易漏数或重复，要教给学生按顺序数、边数边做记号的方法，汇报时让其他小组再数验证。
3. 象形统计图务必强调一个对一个、从左边对齐，否则看不出多少，可通过错例对比帮助学生理解对齐的作用。
4. 标准不同结果不同要通过同一堆物体的两次分类对比来感悟，重点追问总数变了吗，让学生自己得出结论。
5. 提问环节要示范哪类比哪类多几个这类规范问法，帮助学生从只会看图表走向会分析数据。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版一年级下册分类与整理第一课时。这一课属于统计与概率领域，是小学统计学习的启蒙课，也是学生第一次系统接触数据。教材从整理书包、分气球等生活情境引入，让学生在活动中体会分类的意义，学会用象形统计图和简单统计表记录分类结果，并根据结果提出问题。分类既是生活技能，也是数据分析的基础，还是今后学习统计图表的重要起点。可以说，这一课打开了一年级孩子认识数据世界的大门，为他们积累了第一次完整的数据处理经验。我把这节课定位为一节以活动体验为核心的数据启蒙课。

**二、说学情**

一年级的学生对分类并不陌生，整理书包、收拾玩具时都有意无意地分过类，但大多是凭感觉，不清楚什么叫标准，更不会记录分类结果。他们的思维以直观形象为主，喜欢动手摆一摆、分一分，但数数容易漏，表达不够清楚。所以，我让学生在充分的动手操作中学习，强调先说标准再分类，让思维的过程看得见。同时，我预见到孩子们在数数时会出问题，所以特意教给他们按顺序数、边数边做记号的方法，从源头上减少漏数和重复数的错误。

**三、说教学目标**

根据课程标准，我确定了三个目标。第一，结合具体情境按给定标准分类，体会分类的意义，理解标准不同结果不同、总数不变。第二，能用象形统计图和统计表呈现分类结果，发展一一对应思想和数据分析能力。第三，能根据统计结果提出并回答简单问题，养成有序整理的好习惯。其中数据意识的启蒙是本课核心素养的主要落点。学生第一次经历从一大堆物品到一张图、一张表的全过程，体会到数据可以整理、可以比较、可以说话，这种真实体验是后续统计学习的情感基础和认知基础。

**四、说教学重难点**

本课的重点是按不同标准分类，并用象形统计图和统计表呈现结果。难点是理解分类标准不同结果不同，以及自己确定标准进行分类。为什么难？因为学生习惯把所有东西一股脑地摆整齐，很难意识到按什么标准分决定了结果。为了突破，我让同一堆气球分别按颜色和形状各分一次，让学生在对比中亲眼看到结果的变化。同时，我特别注意强调总数不变这个关键点，让学生在两次分类中感悟到：标准变了，分类的结果变了，但物体的总数始终不变，这也为以后学习统计打下了基础。此外，分类与整理不只是数学知识，更是一种生活能力，我在教学中始终把有序整理的习惯渗透其中。

**五、说教法学法**

本课采用情境教学法、动手操作法、小组合作法和图表记录法。教师创设整理书包、分气球、理文具等生活情境，引导学生经历分一分、数一数、记一记、问一问的完整过程，让学生在活动中学，在合作中悟。我特别强调先说标准再分类，让学生把思维的顺序说出来，让分类的合理性经得起检查和讨论。

**六、说教学过程**

本课 40 分钟，我设计了五个环节。第一环节情境导入，约 5 分钟，通过对比凌乱与整齐的书包，体会分类的意义。第二环节分一分，约 10 分钟，小组合作分气球，认识分类标准，理解标准不同结果不同。第三环节记一记，约 10 分钟，学习用象形统计图记录分类结果。第四环节填一填，约 10 分钟，认识统计表，学会根据图表提出问题、回答问题。第五环节总结提升，约 5 分钟，梳理收获，布置回家整理书桌的实践作业。整体上，五个环节环环相扣，从体验分类到表达数据，再到运用数据，构成了一个完整的学习闭环。

特别要说一说第三、四环节的设计。我把记录分成两小步：先画象形统计图，一个气球对应一个圈，让学生在操作中体会一一对应；再填统计表，类别和个数一一对应。两种方式都围绕数据怎么表示展开，学生从图到表，逐步掌握整理数据的工具，也为今后学习条形统计图积累了直观经验。在提问环节，我先示范哪类比哪类多几个这样的问题，再放手让学生同桌互问互答，既训练了提问能力，也让学生在交流中学会了从数据里发现信息。

**七、说板书设计**

我的板书以分类的完整流程为主线，左边写定标准、分一分、数一数、记一记，中间呈现标准不同结果不同、总数不变的核心结论，右边分别呈现象形统计图和统计表的样子。板书既是方法流程，也是知识结构，方便学生回顾。核心结论用红笔标出，时刻提醒学生分类的关键所在。

**八、说教学反思与效果预测**

这节课活动丰富，预计课堂气氛活跃，学生参与度高。分一分、记一记两个环节动手性强，目标容易达成；提问环节个别学生可能只会说红色最多，我会引导他们比较两个数量，把问题问得更有层次。对象形统计图的绘制，我会用错例对比让学生体会对齐的重要性；对基础较弱的学生，只要求他们按给定的标准分好、数对、画对即可。课后通过整理书桌的作业，让分类整理的习惯走进家庭生活。我相信孩子们会在动手分类中体会到数学的实用价值，初步建立起数据意识。分类的意识将伴随孩子一生，让他们的生活更加有序。这节充满生活气息的课，也会让学生真切地爱上数学。我的说课到此结束，谢谢大家！`},"小学|二年级|数学|认识时间":{plan:`**教学基本信息**

- 课题：认识时间
- 教材版本：人教版义务教育教科书《数学》二年级上册
- 年级：二年级
- 课型：新授课
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学二年级学生

**教学目标**

1. 认识钟面，知道钟面上有 12 个大格、60 个小格，认识时针和分针，理解 1 时等于 60 分，在观察和拨动中发展量感。
2. 掌握先看时针确定几时、再看分针确定几分的读写方法，能正确认读和书写几时几分，会用中文和数字两种方式表示时间，发展推理意识。
3. 结合作息时间表判断大约几时，感受时间与生活的密切联系，养成珍惜时间、合理安排时间的习惯。

**教学重难点**

重点：理解 1 时等于 60 分，掌握几时几分的认读与书写方法。
难点：判断时针所指的时数，即时针走过几就是几时；分针指向每个数字对应的分钟数，能 5 分 5 分地数。

**教学准备**

多媒体课件（钟面演示动画、小明的一天）；大钟模型（指针可拨动）；学生钟面学具每人一个；作息时间表；学习单。

**教学过程**

**环节一 情境导入：时间谜语（约 5 分钟）**

教师活动：
师：上课之前，老师先给大家猜个谜语：有个好朋友，天天跟着走，不会说话，却告诉你什么时候该做什么。它是什么？
生：钟表！
师：对了。钟表是时间的好朋友。一年级我们已经认识了整时，还记得怎么认整时吗？看这个钟面，分针指向 12，时针指向 8，是几时？
生：8 时！
师：生活中时间不只有整时，比如早上 8 时 15 分上课，8 时 15 分就不是整时。今天我们就来进一步认识时间，学会认读几时几分。（板书课题：认识时间）
生：（齐读课题）

学生活动：猜谜语，回顾整时的认读方法，明确今天要学习几时几分。

设计意图：用谜语和旧知唤起学生对钟表的兴趣和已有经验，从整时自然过渡到几时几分，找准学习起点，让学生带着明确的任务进入新课。

**环节二 认识钟面：时与分的关系（约 10 分钟）**

教师活动：
师：拿出你的钟面学具，仔细观察钟面。钟面上有几个数字？
生：12 个数字，从 1 到 12。
师：12 个数字把钟面分成几个大格？数一数。
生：12 个大格。
师：每个大格又分成几个小格？自己数一数 1 和 2 之间有几小格。
生：5 个小格。
师：12 个大格，每格 5 小格，12 个 5 是 60，所以钟面上一共有 60 个小格。（板书：12 个大格、60 个小格）
师：时针和分针，分别长得什么样？
生：时针又短又粗，分针又长又细。
师：时针走得慢，走 1 大格是 1 时；分针走得快，走 1 小格是 1 分，走 1 大格是 5 分。现在大家跟着老师一起拨钟：把分针从 12 拨到 1，走了 5 小格，是 5 分；从 1 拨到 2，又走 5 小格，一共 10 分。分针每走一个大格就是 5 分。
（课件演示分针走一圈）
师：分针走一圈走了 60 个小格，就是 60 分。这时时针有什么变化？看清楚了，时针正好从 8 走到 9，走了 1 大格，是 1 时。
师：所以，1 时等于多少分？
生：1 时等于 60 分！（板书：1 时 = 60 分）

学生活动：观察钟面学具，数出大格和小格，拨动钟面体验分针走一大格是 5 分，观察分针走一圈时针走一大格，得出 1 时等于 60 分。

设计意图：通过数一数、拨一拨，让学生在直观操作中理解钟面结构，亲眼看到分针走一圈时针才走一大格，把 1 时等于 60 分变成看得见的结论，发展量感。

**环节三 读时间：几时几分的读写（约 12 分钟）**

教师活动：
（课件出示 8 时 15 分的钟面，分针指向 3）
师：现在老师把时间拨到上课时间，这是 8 时 15 分。我们分两步来看：先看时针，时针走过几，就是几时。时针走过 8 没有到 9，是几时？
生：8 时。
师：再看分针，分针指向 3，从 12 开始走了几个大格？
生：3 个大格。
师：每个大格是 5 分，3 个 5 分是几分？
生：15 分。
师：合起来就是 8 时 15 分，写作 8 时 15 分，也可以写 8 比 15，冒号前面是几时，冒号后面是几分。
师：请同学们在钟面上拨出 3 时 25 分，同桌互相检查。拨的时候先把时针拨到 3 和 4 之间，再把分针拨到 5。
（学生拨钟，教师巡视）
师：谁来读这个时间？（出示分针指向 11、时针走过 7 的钟面）
生：7 时 55 分。
师：时针走过 7 没到 8，还是 7 时；分针指向 11，从 12 到 11 是 55 分。7 时 55 分，离 8 时还差 5 分，我们可以说快 8 时了，也可以说大约 8 时。
师：再看（出示 9 时刚过的钟面），分针指向 1，时针刚走过 9，是几时几分？
生：9 时 5 分。
师：9 时 5 分，数字写法里分不满 10，要在前面补 0，写作 9 比 05。（强调补 0）
（练习）师：分针指向 9，时针走过 4，是几时几分？
生：4 时 45 分，写作 4 比 45。

学生活动：跟随教师分两步读时间，在钟面上拨出指定时间，同桌互拨互读，认识大约几时的表达，练习数字写法。

设计意图：把看时针、看分针、合起来三个步骤分解示范，用清晰的程序帮助学生建立认读方法；通过拨钟操作和补 0 提示，突破几时几分的读写难点，发展推理意识。

**环节四 用时间：小明的一天（约 8 分钟）**

教师活动：
（课件出示小明一天的作息图：起床 6 时 45 分、上学 7 时 20 分、做操 9 时 30 分、吃午饭 11 时 40 分、放学 4 时 5 分、睡觉 8 时 50 分）
师：这是小明一天的生活。仔细观察，什么时候小明该做操了？看这幅图，时针走过 9，分针指向 6，是几时几分？
生：9 时 30 分，分针指向 6 是 30 分。
师：谁来用几时几分说说小明放学的时间？
生：时针走过 4，分针指向 1，是 4 时 5 分。
师：写成数字形式怎么写？
生：4 比 05，分不满 10 要补 0。
师：小明的一天安排得真合理，该学习时学习，该休息时休息。时间老人对每个人都是公平的，我们要学会看时间，更要珍惜时间。
（练习抢答）师：分针指向 8，时针走过 3，是几时几分？
生：3 时 40 分。
师：这个时间，快到几时了？
生：快 4 时了，大约 4 时。

学生活动：结合小明一天的作息图认读各时刻，填写学习单上的时间，抢答练习，体会珍惜时间。

设计意图：把时间认读放到真实的生活情境中，让学生感受时间与作息安排的密切联系；通过连续认读多个时刻巩固方法，同时渗透珍惜时间、合理作息的教育。

**环节五 总结提升：回顾梳理（约 5 分钟）**

教师活动：
师：这节课我们认识了时间。谁来总结一下，认读几时几分有哪两步？
生：先看时针，时针走过几就是几时；再看分针，数一数从 12 走了多少个小格，5 分 5 分地数。
师：分针走 1 小格是 1 分，走 1 大格是 5 分，走 1 圈是 60 分，正好是 1 时。1 时等于 60 分，这个结论要牢牢记住。
（口答练习）师：1 时等于多少分？
生：60 分。
师：分针指向 5，时针走过 2，是几时几分？
生：2 时 25 分。
师：今天的作业是，回家请爸爸妈妈把家里钟表的时间写在纸上，你读一读、写一写，再用一句话说说这个时间该做什么。

学生活动：总结认读时间的步骤和 1 时等于 60 分，完成口答练习，明确实践作业。

设计意图：用总结和口答把知识结构化，让学生带走明确的结论和方法；实践作业把课堂所学延伸到家庭，让认识时间真正服务于生活。

**板书设计**

认识时间

钟面：12 个大格、60 个小格
时针：短粗，走 1 大格是 1 时
分针：长细，走 1 小格是 1 分，走 1 大格是 5 分，走 1 圈是 60 分

1 时 = 60 分

读时间两步：先看时针（走过几就是几时）→ 再看分针（5 分 5 分数）
示例：8 时 15 分　　9 时 5 分写 9 比 05

**教学反思要点**

1. 1 时等于 60 分必须让学生亲自拨钟，看到分针走一圈时针走一大格，若只看课件印象不深，要保证人人动手。
2. 时针位置判断是难点，学生易把快到 8 读成 8 时，要用走过几就是几时、不到下一个数反复强调，并配口诀训练。
3. 分针一大格是 5 分，学生常记成 1 分，要借助钟面模型标出每个数字对应的分钟数，建立对应表。
4. 数字写法分不满 10 要补 0，通过 9 时 5 分、4 时 5 分等典型例子反复书写，同桌互相检查纠错。
5. 认识大约几时只要学生会判断快到和刚过即可，不必追求精确，防止拔高难度。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版二年级上册认识时间，也就是认识几时几分。这一课属于数与代数领域常见的量，是学生在认识整时基础上的延伸。教材先复习整时，再认识钟面结构，然后学习读写几时几分，最后结合生活情境认识大约几时。认识时间是学生日常生活的基本本领，也是今后学习时、分、秒和计算经过时间的重要基础。同时，学会看时间也是培养学生时间观念、养成合理安排作息习惯的重要途径，有着鲜明的育人价值。我把这节课定位为一节以操作和观察为核心的概念认识课。

**二、说学情**

二年级的学生已经认识了整时，会看简单的钟面，但对钟面上大格小格的结构不清楚，也几乎没有系统地认读过几时几分。他们好奇心强，喜欢动手拨钟，但注意力持续时间不长。常见的问题是判断时针时见几就读几，把分针一大格当成 1 分。所以，我特别重视人手一个钟面学具，让学生在反复的拨一拨、读一读中建立正确的方法。考虑到班里孩子的发展水平不齐，我在同桌互拨互读时安排了快慢不同的任务，让每个孩子都能在自己的节奏里练习。

**三、说教学目标**

根据课程标准和教材，我确定了三个目标。第一，认识钟面，知道 12 个大格、60 个小格，理解 1 时等于 60 分，发展量感。第二，掌握看时针、看分针的认读方法，能正确读写几时几分，会用中文和数字两种方式表示。第三，结合生活情境判断大约几时，养成珍惜时间的习惯。量感和推理意识是本课核心素养的主要落点。时间虽然看不见、摸不着，但可以通过钟面上的刻度被计量，学生在数大格、数小格、算分钟数的过程中，初步体会了量是可以被度量的这一思想。

**四、说教学重难点**

本课的重点是理解 1 时等于 60 分，会读写几时几分。难点是判断时针所指时数和分针对应的分钟数。为什么难？因为时针不是正好指着数字，而是走过某个数，学生容易读错；分针指向几对应几分，需要 5 分 5 分地数，也容易出错。为突破难点，我用时针走过几就是几时的口诀和分针分钟对应表来帮助学生。在数字写法上，分不满 10 要在前面补 0，这个细节学生很容易漏掉，我会通过多个典型例子反复强化。在实际教学中，读分针往往比读时针更让二年级孩子头疼，所以这一部分我安排了比较充足的练习时间。

**五、说教法学法**

本课采用直观演示法、动手操作法、游戏教学法和生活情境法。教师用大钟模型动态演示，学生人手一个钟面学具，在拨一拨、读一读、写一写中掌握方法，真正做到眼到、手到、口到、心到。我还设计了同桌互拨互读的游戏，让学生在互动中互相纠错、互相学习。

**六、说教学过程**

本课 40 分钟，我设计了五个环节。第一环节情境导入，约 5 分钟，用谜语和复习整时引入，明确学习几时几分。第二环节认识钟面，约 10 分钟，数大格、数小格，通过拨钟看到分针走一圈时针走一大格，得出 1 时等于 60 分。第三环节读时间，约 12 分钟，这是全课核心，分解看时针、看分针、合起来三步，学读 8 时 15 分等时刻，认识大约几时。第四环节用时间，约 8 分钟，结合小明的一天认读作息时间，渗透珍惜时间的教育。第五环节总结提升，约 5 分钟，梳理方法，布置家庭实践作业。整个教学过程由易到难，先建立概念，再学习读写，最后运用到生活，符合二年级学生的认知规律。

特别要说一说第三环节的设计。我坚持让学生分两步读时间：先看时针确定几时，再看分针确定几分。遇到分针指向 11、时针走过 7 的钟面，先让学生讨论为什么还是 7 时而不是 8 时，把难点摆到明面上；遇到 9 时刚过，强调分不满 10 要补 0。一难一易两个典型例子，把读写规则讲透。第四环节结合小明的一天认读作息时间，把知识放在真实情境里运用，既巩固了方法，又让学生在不知不觉中接受了珍惜时间、合理作息的教育，达到润物无声的效果。

**七、说板书设计**

我的板书围绕钟面、关系、方法三个板块展开。左边画钟面结构，写清 12 个大格、60 个小格；中间是 1 时等于 60 分；右边是认读两步法和两个示例。板书简洁明了，突出知识主干。分针与数字对应的分钟数表保留在板书右侧，供学生练习时随时查看，帮助他们把 5 分 5 分数落到实处。

**八、说教学反思与效果预测**

这节课以拨钟操作和游戏为主线，预计学生兴趣浓厚，参与度高。1 时等于 60 分的结论通过亲手拨钟，学生印象深刻；几时几分的读写是难点，可能还有部分学生出错，我会在小组互拨互读中重点指导。对一时难以掌握的个别学生，我会让他们先借助分钟对应表认读，逐步摆脱依赖；对掌握较好的学生，鼓励他们挑战接近整时的时刻，比如 3 时 58 分。课后通过读一读家里的钟、说一说该做什么的作业，让时间知识真正走进生活。我相信孩子们会看钟了，也会更加珍惜时间。最后我想说，认识时间对二年级孩子来说需要足够的耐心和反复的练习，我会在后续的课堂中不断巩固，让认读时间真正成为每个孩子的本领。我的说课到此结束，谢谢大家！`},"小学|三年级|数学|面积的初步认识":{plan:`**教学基本信息**

- 课题：面积的初步认识
- 教材版本：人教版义务教育教科书《数学》三年级下册
- 年级：三年级
- 课型：新授课
- 课时：公开课 1 课时（40 分钟）
- 授课对象：小学三年级学生

**教学目标**

1. 结合具体情境理解面积的含义，知道物体表面或封闭图形的大小就是它们的面积，在摸一摸、比一比中发展量感。
2. 经历观察、重叠、数方格等比较面积大小的活动，体会比较标准要统一，会用统一的方格测量和比较面积，发展几何直观。
3. 认识平方厘米、平方分米、平方米三个常用面积单位，初步建立大小表象，能选择合适的面积单位描述物体表面，体会统一单位的必要性，发展空间观念。

**教学重难点**

重点：理解面积的含义，掌握用统一单位比较和测量面积的方法。
难点：区分面积与周长这两个不同维度的概念；建立常用面积单位的大小表象。

**教学准备**

多媒体课件（面积比较动画、单位演示）；方格纸；1 平方厘米和 1 平方分米的正方形模型；不同形状的彩色纸片；数学书、课桌面；学习单；小组合作材料。

**教学过程**

**环节一 情境导入：谁的手掌大（约 5 分钟）**

教师活动：
师：上课前，我们先玩个小游戏。请伸出你的右手，和同桌比一比，谁的手掌大？
生：（同桌比较）
师：你是怎么比的？
生：把手掌合在一起，看谁盖住谁。
师：手掌有大小，课桌的桌面呢？黑板面呢？你们看，老师这儿有两张纸片（出示一张红色长方形纸片和一张蓝色正方形纸片），大家猜猜，哪一张的面积大？
生：红色的大！
师：物体的表面有大小，这个表面的大小就是面积。今天这节课，我们就来认识面积。（板书课题：面积）
生：（齐读课题）

学生活动：比一比手掌大小，猜一猜两张纸片的大小，初步感知物体表面有大有小。

设计意图：从比手掌这一人人可做的活动入手，让学生直接感受面的大小；用表面的大小就是面积这一生活化说法引出课题，为抽象出面积概念积累直观经验。

**环节二 认识面积：面在哪里（约 8 分钟）**

教师活动：
师：什么叫面积呢？我们一起来摸一摸。请用手掌摸一摸课桌的桌面，再摸一摸数学书的封面，感受一下它们的大小。
生：（动手摸桌面、摸封面）
师：课桌桌面的大小，就是课桌桌面的面积；数学书封面的大小，就是数学书封面的面积。谁能用面积这个词说一句话？
生：黑板面的大小是黑板面的面积。
生：教室地面的大小是教室地面的面积。
师：说得真棒！请继续摸一摸自己的手掌面，再摸一摸桌面，哪个面的面积大？
生：桌面的面积大。
（课件出示几个图形：正方形、长方形、圆、一条没有围起来的线）
师：这些图形中，哪些有面积？为什么？
生：正方形、长方形、圆有面积，因为它们是封闭的。
生：那条线没有围起来，不能说有面积。
师：对！只有封闭的图形才有面积。一条线是围不成面积的，像这样中间有缺口的图形，也不能直接说它有多大。所以，物体表面或封闭图形的大小，就是它们的面积。（板书概念）

学生活动：摸一摸桌面、封面、手掌面，用面积造句，判断哪些图形有面积，理解封闭图形才有面积。

设计意图：通过摸一摸、说一说把抽象的面落在触觉和语言上，帮助学生建立面积概念；借助开放图形的反例，让学生明白封闭是图形有面积的前提，体会概念表述的严谨性。

**环节三 比一比：比较面积大小的方法（约 12 分钟）**

教师活动：
师：桌面上有两张纸片（出示长方形和正方形纸片），刚才大家猜红色的大，到底对不对呢？除了用眼睛看，还有什么好办法？
生：把它们叠在一起比一比。
师：这个方法叫重叠法。你来试试。（学生演示重叠，发现相差不大）
师：两张纸片差不多大，用眼睛看和重叠都不太好判断。看，老师这里有一些同样大的小方格。我们请它们来帮忙：在两张纸片上铺方格，数一数各铺了多少个。
（学生动手铺方格、数方格）
生：长方形铺了 16 个方格，正方形铺了 15 个方格。
师：长方形铺的方格多，所以长方形的面积大。像这样用同样大的方格去量，再数一数，就是数方格法。
师：现在问题来了，如果一张纸用大人的手去量，另一张用小孩的手去量，量的结果一样吗？
生：不一样，大人的手大，量的数量少。
师：所以，比较面积的时候，用的方格必须怎样？
生：要一样大！
师：对，测量和比较面积，必须用统一的标准。（课件演示：用不同的方格量同一张桌面，结果不同；统一方格后，结果唯一）
（练习）师：看这两块地砖，一块铺了 12 个小方格，另一块铺了 10 个同样大的小方格，哪块的面积大？
生：12 个的那块大。

学生活动：尝试用观察、重叠、数方格三种方法比较纸片面积，动手铺方格、数一数，体会统一标准的必要性。

设计意图：让学生经历观察不够、重叠不好、数方格最清楚的探究过程，自主发现数方格是比较面积的好方法；通过不同标准测量结果不同的对比，深刻体会统一单位的必要性，发展几何直观。

**环节四 认一认：常用的面积单位（约 10 分钟）**

教师活动：
师：为了统一标准，数学家规定了几个常用的面积单位。先看最小的——边长 1 厘米的正方形，它的面积是 1 平方厘米。（出示 1 平方厘米模型）
师：摸一摸，它的大小像什么？
生：像指甲盖那么大。
师：请在方格纸里画出边长 1 厘米的正方形，看看 1 平方厘米有多大。
（学生画一画、看一看）
师：边长 1 分米的正方形，面积是 1 平方分米。（出示 1 平方分米模型）
生：像手掌那么大！
师：1 平方分米的正方形里，可以铺多少个 1 平方厘米的小正方形？横着摆 10 个，竖着摆 10 个，10 个十是 100，所以 1 平方分米等于 100 平方厘米。（板书：1 平方分米 = 100 平方厘米）
师：边长 1 米的正方形，面积是 1 平方米。谁来在教室里比一比，1 平方米大概有多大？
生：（用双臂比划）大概有这么大，像一张小课桌。
师：1 平方米等于多少平方分米？也是 100。（板书：1 平方米 = 100 平方分米）
师：现在来选择合适的单位。邮票、指甲盖该用什么单位？
生：平方厘米。
师：数学书的封面、课桌面呢？
生：平方分米。
师：教室地面、操场呢？
生：平方米。
（练习）师：2 平方分米等于多少平方厘米？
生：200 平方厘米，因为 1 平方分米等于 100 平方厘米，2 个 100 是 200。
师：注意，面积单位的进率是 100，不是 10。10 是长度单位的进率，可别搞混了。

学生活动：观察、触摸三个面积单位模型，画一画 1 平方厘米，比划 1 平方米，推算单位间的进率，为物体选择合适的面积单位。

设计意图：借助模型、画图和身体部位，帮助学生建立三个面积单位的直观表象；通过摆一摆推出进率，把 1 平方分米等于 100 平方厘米变成可以理解的推算而非死记硬背，同时辨析面积单位进率与长度单位进率的区别。

**环节五 总结提升：面积与周长的区别（约 5 分钟）**

教师活动：
师：今天我们认识了面积。谁来说说，面积指的是什么？
生：物体表面或封闭图形的大小。
师：还记得周长吗？周长是封闭图形一周的长度。它和面积有什么不同？
生：周长是围一圈的长度，面积是占地方的大小。
师：周长用长度单位，面积用面积单位，一个是围一圈，一个是占多大，是两个不同的概念，可别混淆。
（练习）师：数学书封面的周长用什么单位？面积呢？
生：周长用厘米或分米，面积用平方厘米或平方分米。
师：真会分辨！今天的作业：回家找三个物体的表面，估一估它们的面积各用什么单位合适，并说一说为什么。

学生活动：回顾面积含义，对比周长与面积的区别，完成辨析练习，明确课后观察作业。

设计意图：通过面积与周长的对比辨析，帮助学生厘清两个易混概念，从一维长度走向二维面积，完善空间观念；课后作业让面积的学习延伸到家庭生活。

**板书设计**

面积的初步认识

物体表面或封闭图形的大小，就是它们的面积

比较方法：观察法　重叠法　数方格法（标准要统一）

面积单位：平方厘米（指甲盖）　平方分米（手掌）　平方米（课桌面）
1 平方分米 = 100 平方厘米　　1 平方米 = 100 平方分米

面积 vs 周长：占地方的大小 vs 围一圈的长度

**教学反思要点**

1. 面积概念要建立在充分的触摸体验上，摸一摸、说一说不能省略，否则学生只记住定义却不理解面是什么。
2. 学生易把面积与周长混淆，要在比较中反复追问这是围一圈还是占地方，用两个维度的对比帮助学生厘清。
3. 数方格前必须确认方格大小一致，可用不同格子量同一桌面的对比，让学生直观感受统一标准的必要性。
4. 面积单位进率是 100，学生易按长度单位记成 10，要通过摆一摆、数一数得出进率，并把两个进率表对照呈现。
5. 选择单位不能凭感觉，要给足生活例子反复练习，帮助学生把 1 平方厘米、1 平方分米、1 平方米的表象与实物建立稳定的联系。`,talk:`**一、说教材**

各位评委老师，大家好！今天我说课的内容是人教版三年级下册面积的初步认识第一课时。这一课属于图形与几何领域，是学生从认识线、长度到认识面、面积的第一次跨越。教材先通过摸一摸、比一比认识面积的含义，再学习比较面积大小的方法，最后认识常用的面积单位。面积是后续学习面积计算、理解几何图形的基础，也是空间观念发展的重要一环。从一维的长度走向二维的面积，对学生来说是认识上的一个关键转折点，这一课的扎实程度直接影响后续面积计算的学习。我把这节课定位为一节以操作体验为核心的几何概念课。

**二、说学情**

三年级的学生对物体的表面并不陌生，桌面、封面天天都在接触，但表面的大小这一概念对他们来说还是新的。他们已经学过长度和周长，容易把面积和周长混在一起。他们的思维以直观形象为主，动手能力强，喜欢摸一摸、摆一摆。所以，我让学生在充分的触摸和操作中建立面积概念，在对比中厘清面积与周长的区别。另外，学生对面积单位普遍没有生活经验，比如 1 平方厘米多大、1 平方米多大，都要借助具体的实物和身体部位来建立表象。

**三、说教学目标**

根据课程标准，我确定了三个目标。第一，结合具体情境理解面积的含义，知道物体表面或封闭图形的大小就是面积，发展量感。第二，经历观察、重叠、数方格等活动，会用统一单位比较和测量面积，发展几何直观。第三，认识平方厘米、平方分米、平方米，建立大小表象，能选择合适的单位，发展空间观念。量感和空间观念是本课核心素养的主要落点。学生通过摸一摸、比一比、数一数，把看不见摸不着的面积转化成可以操作、可以计数的对象，空间观念在潜移默化中得到发展。

**四、说教学重难点**

本课的重点是理解面积含义，会用数方格的方法比较和测量面积。难点是区分面积与周长，建立面积单位的表象。为什么难？因为周长是一维的线，面积是二维的面，学生刚学过周长，很容易混在一起；面积单位的大小没有生活经验支撑，也比较抽象。为突破难点，我用围一圈和占地方的口诀帮助学生区分，用身体部位帮助学生建立面积单位的表象。至于面积单位之间的进率，本课只要求通过摆一摆、数一数知道是 100，不要求学生做复杂的换算练习。

**五、说教法学法**

本课采用直观演示法、动手操作法、对比辨析法和小组合作法。教师引导学生在摸一摸、摆一摆、数一数中亲历知识形成的过程，让抽象的概念在操作中变得看得见、摸得着。同时，我把对比辨析贯穿始终，让学生在面积与周长的辨析中把概念越辨越清。

**六、说教学过程**

本课 40 分钟，我设计了五个环节。第一环节情境导入，约 5 分钟，通过比手掌的游戏引入，初步感知表面有大小。第二环节认识面积，约 8 分钟，通过摸一摸、说一说的活动理解面积含义，判断哪些图形有面积。第三环节比一比，约 12 分钟，这是全课重点，学生经历观察、重叠、数方格三种方法的探究，体会统一标准的必要性。第四环节认一认，约 10 分钟，认识三个面积单位，通过摆一摆推出进率，练习选单位。第五环节总结提升，约 5 分钟，对比面积与周长，布置课后观察作业。五个环节从感知到理解，从比较到测量，层层推进，把抽象的几何概念变成了可以触摸的数学体验。

特别要说一说第三环节的设计。我让学生面对两张差不多的纸片，先猜一猜，再用眼睛看，发现看不准；再重叠，发现也不好判断；最后请同样大的小方格来帮忙，数一数各铺了多少个，谁铺的方格多谁就大。由此自然引出数方格法。紧接着，我用大人的手和小孩的手量同一张桌子的反例，让学生真切体会到测量标准必须统一，为认识面积单位埋下伏笔。在认一认环节，我让学生摸一摸 1 平方厘米的模型、比一比 1 平方米的大小，用身体直接感知单位的大小，这样的印象远比死记硬背深刻。

**七、说板书设计**

我的板书围绕含义、方法、单位三条线展开。左边写面积的定义，中间呈现三种比较方法和统一标准的要求，右边是三个面积单位及其换算。板书最后点出面积与周长的区别。整个板书层次分明，既是知识结构，也是学习路径。面积与周长放在同一行对比呈现，用箭头指向各自对应的单位，帮助学生一眼分清两个概念。

**八、说教学反思与效果预测**

这节课以操作和体验为主线，预计学生参与度高，对面积概念的理解会比较扎实。数方格和选单位这两个活动目标明确，容易达成；面积与周长的区分可能还有个别学生混淆，我会在练习中通过围一圈还是占地方的追问重点辨析。对基础较弱的学生，只要求理解面积含义、会用数方格比较，单位换算只练整百数；对学有余力的学生，鼓励他们用同样多的方格画出不同形状的图形，感受面积与形状的关系。课后通过估一估家里物体表面的面积单位，让课堂知识延伸到生活。我相信孩子们会带着直观的感知，顺利迈出认识面积的第一步。这节课也让我深切体会到，几何概念的教学离不开亲身体验。我的说课到此结束，谢谢大家！`}},zs={"小学|三年级|数学|年 月 日":{plan:`**教学基本信息**

课题：年 月 日
教材版本：人教版小学数学三年级下册第六单元
年级：小学三年级
课型：数与代数领域 · 概念新授课
课时：公开课 1 课时（40 分钟）

**教学目标**

1. 通过观察年历、填写统计表，认识时间单位年、月、日，知道一年有 12 个月，能准确说出大月（31 天）、小月（30 天）及二月的天数，认识平年与闰年，掌握平年、闰年的判断方法。
2. 经历"观察年历—整理数据—分类比较—归纳验证"的探究过程，学会用歌诀、拳头等方法记忆月份天数，发展数据意识和推理意识，培养有序观察、比较归纳的思维能力。
3. 感受年、月、日与日常生活的密切联系，会用所学知识解决"判断平闰年""计算经过天数"等简单的实际问题，在探究中体会数学的严谨与趣味，渗透珍惜时间的教育，落实"数据意识""推理意识"等数学核心素养。

**教学重难点**

教学重点：认识大月、小月和二月，掌握平年、闰年的判断方法。
教学难点：理解闰年的判断规则（四年一闰、百年不闰、四百年再闰），能正确判断整百年份的平闰情况。

**教学准备**

多媒体课件：2017 至 2024 连续八年的电子年历、月份天数统计表、平闰年判断流程图。
教具：每小组一张 2024 年年历卡、拳头记忆示意图、大月小月歌诀卡、判断手势牌。
学生准备：每人自带一本年历（或日历卡片）。

**教学过程**

**环节一 谜语激趣，引入新课（约 5 分钟）**

【教师活动】
上课伊始，教师出示谜语："一物生来真稀奇，身穿三百六十五件衣。每天都要脱一件，等到年底剩张皮。"请学生猜一猜。学生猜出"日历"后，教师顺势提问："日历里藏着三个时间单位好兄弟，它们是——"引导学生说出年、月、日，板书课题。
预设师生对话：
师："请大家拿出年历，同桌互相说一说：今年是哪一年？今天是几月几日、星期几？"
生："2024 年，8 月 29 日，星期六。"（根据实际情况回答）
师："年、月、日就是今天要认识的新朋友。一年到底有多少个月？每个月又有多少天？我们一起去年历里找答案。"

【学生活动】
学生猜谜语，同桌交流日历上的信息（年份、日期、星期），明确今天的学习任务，激发学习兴趣。

【设计意图】
以谜语和生活化问题切入，唤醒学生对年、月、日的已有经验，在轻松的对话中引出课题，为观察探究创设真实的学习起点。

**环节二 观察年历，认识大月小月（约 12 分钟）**

【教师活动】
（一）任务驱动。师："请大家像小统计员一样，翻开 2024 年年历，把 12 个月每个月各有多少天，填在学习单的统计表里。比一比，谁填得又对又快。"学生独立填写，教师巡视指导。
（二）汇报交流。请学生逐月汇报天数，教师在课件统计表上逐月填写，重点追问："看 7 月、8 月这两个相邻的月份，各有多少天？"生："都是 31 天。"
（三）分类归纳。师："仔细观察这张统计表，你发现了什么规律？"引导发现：1、3、5、7、8、10、12 月都有 31 天，叫作大月，一共有 7 个；4、6、9、11 月都有 30 天，叫作小月，一共有 4 个；二月与众不同，2024 年是 29 天。
预设师生对话：
师："为什么把二月单独拿出来说？"
生："因为二月的天数和别的月份都不一样。"
师："二月既不是大月也不是小月，是特殊月。为什么 2024 年二月有 29 天？带着问题继续研究。"
（四）记忆方法。师："7 个大月、4 个小月，怎样记得又准又快呢？老师有两个法宝。"先出示歌诀："一三五七八十腊，三十一天永不差；四六九冬三十天，平年二月二十八。"解释"腊"指十二月、"冬"指十一月，带读、齐读、拍手读。再教学拳头记忆法：握紧拳头，从食指关节开始数起，凸起的关节表示大月，凹下的地方表示小月，数到七月后换另一只手，从八月接着数。学生跟着做一做、数一数。
（五）即时巩固。师："我来报月份，你们用手势判断：7 月是大月还是小月？"生举拳头表示大月。"9 月？"生用手背表示小月。追问："2 月呢？"生："特殊月！"

【学生活动】
学生填写月份天数统计表，观察、分类、归纳大月小月规律，跟读歌诀，练习拳头记忆法，用手势判断大月小月。

【设计意图】
把"观察—整理—发现"的机会交给学生，让结论从数据中来；用歌诀和拳头两种方法帮助记忆；"二月为什么特殊"为下一环节认识平年闰年埋下伏笔。

**环节三 探究平年与闰年（约 10 分钟）**

【教师活动】
（一）观察对比。课件出示 2017 至 2024 年二月的天数：28、28、28、29、28、28、28、29。师："把二月的天数排成队，你发现了什么？"生："大约每 4 年就有一个 29 天。"
（二）引导命名。师："二月有 28 天的年份叫平年，全年 365 天；二月有 29 天的年份叫闰年，全年 366 天。看看 2020 年和 2024 年，它们的年份数和 4 有什么关系？"
预设师生对话：
师："算一算，2020 除以 4 等于几？"
生："等于 505，没有余数。"
师："2024 除以 4 呢？"
生："等于 506，也没有余数。"
师："年份除以 4 没有余数，一般就是闰年。那 2023 年呢？"
生："2023 除以 4 等于 505 余 3，有余数，是平年。"
（三）整百年份的特殊情况。师："1900 年除以 4 也刚好没有余数，可它却是平年，这是怎么回事？"学生产生认知冲突。教师讲解：公历规定，整百年份必须除以 400，没有余数才是闰年。生："1900 除以 400 等于 4 余 300，有余数，所以 1900 年是平年。"师："2000 年呢？"生："2000 除以 400 等于 5，没有余数，是闰年。"
师："判断口诀：四年一闰，百年不闰，四百年再闰。判断时先看是不是整百年，整百年份必须除以 400。"

【学生活动】
学生观察二月天数排列，口算判断平闰年，辨析 1900 年、2000 年的特殊情形，读记判断口诀。

【设计意图】
用连续年份的二月天数数据引出平年闰年，在"算一算、辩一辩"中让学生亲历规律的形成；把"百年不闰"这个认知难点放到具体年份中辨析，帮助学生真正理解判断规则的来历，避免死记口诀。

**环节四 练习应用，内化提升（约 10 分钟）**

【教师活动】
师："下面进入挑战乐园，看谁的小脑瓜转得最快。"
第 1 题（手势判断）：下面的说法对吗？对的举对号牌，错的举错号牌并说理由。
（1）每年都有 7 个大月、4 个小月。（对）
（2）8 月 30 日的后一天是 8 月 31 日。（对）
（3）2100 年是闰年。（错，2100 除以 400 有余数，是平年）
（4）平年的上半年比下半年少 3 天。（对，平年上半年 181 天、下半年 184 天）
第 2 题（填一填）：平年全年有（365）天，闰年全年有（366）天；闰年第一季度有（91）天。
第 3 题（生活问题）：小华的生日是 2 月 29 日，他可能在哪一年过生日？生："闰年才能过，比如 2024 年、2028 年。"
第 4 题（经过天数）：从 8 月 1 日到 8 月 5 日，包括首尾两天，一共几天？生："5 天，两头都算。"师："如果 8 月 1 日出发、8 月 5 日到家，实际经过几天？"生："4 天，到家当天不算。"
预设师生对话：
师："2025 年二月有多少天？"
生："28 天，2025 除以 4 有余数，是平年。"
师："2028 年呢？"
生："29 天，2028 除以 4 等于 507，没有余数，是闰年。"

【学生活动】
学生用手势判断正误并说明理由，独立填空，小组讨论生日问题，板演经过天数题并说思路。

【设计意图】
通过判断、填空、生活问题等多种练习巩固大月小月和平闰年知识；"2 月 29 日生日"和"经过天数"贴近生活，让学生在运用中深化理解，并提醒审题要看清"含不含头尾"。

**环节五 课堂总结与作业（约 3 分钟）**

【教师活动】
师："今天你有哪些收获？"学生畅谈收获。师："一年 365 天，每分每秒都在流动。希望同学们做时间的小主人，珍惜每一天。"
布置分层作业：
基础作业：熟背大月小月歌诀，用拳头记忆法给家长介绍大月、小月。
提高作业：查一查 2025 年全年日历，算一算上半年有多少天，并写出判断平闰年的过程。

【学生活动】
学生回顾本课收获，明确作业要求，在齐读歌诀声中结束课堂。

【设计意图】
以回顾梳理收束全课，把知识内化为能力；分层作业让不同水平的学生都能得到巩固，把课堂学习延伸到家庭生活，实现"课堂—生活"的联通。

**板书设计**

年 月 日
一年 12 个月
大月（31 天）：1、3、5、7、8、10、12 月（7 个）
小月（30 天）：4、6、9、11 月（4 个）
二月：平年 28 天，闰年 29 天（特殊月）
平年 365 天，闰年 366 天
判断：除以 4 无余数；整百年份除以 400

**教学反思要点**

1. 观察年历、填写统计表是否真正让学生经历了"数据—规律"的发现过程，还是流于形式，教师是否急于代替学生下结论。
2. "1900 年是平年"的反例是否引发认知冲突，整百年份判断这一难点是否通过算式辨析真正突破。
3. 歌诀与拳头记忆法的双通道记忆是否落实到位，课堂抽查是否覆盖了学生容易记混的 4、6、9、11 月。
4. 经过天数题是否按"含头尾、不含头尾"分类讲清，学生是否真正理解了题意而非机械套用公式。
5. 40 分钟内观察、探究、练习的时间分配是否合理，是否留足了学生自主活动与表达的时间。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学三年级下册第六单元《年 月 日》。年、月、日是时间单位教学中承上启下的重要内容，学生在一年级已经认识了整时和几时几分，三年级开始系统认识年、月、日这些较大的时间单位。这一内容与学生的日常生活联系非常紧密，日历、生日、节日都离不开年、月、日。教材先通过观察年历认识一年有 12 个月以及大月、小月、二月的天数，再认识平年与闰年及其判断方法，最后解决简单的经过天数问题。我把本课定位为概念新授课，重在让学生经历观察、整理、发现规律的过程，感受年、月、日与生活的密切联系，同时渗透珍惜时间的教育。这部分内容编排直观、贴近生活，非常适合采用观察与发现相结合的方式组织教学。

**二、说学情**
三年级的学生对年、月、日已经有比较丰富的生活经验，他们知道一年有 12 个月，知道自己的生日，也看过日历，但这种认识是零散的、不完整的。学生容易混淆大月和小月，特别是对二月这个特殊月认识模糊，对闰年的判断规则更是一无所知。同时，三年级学生的思维以具体形象为主，正处在从形象思维向抽象思维过渡的阶段，所以本课需要借助年历、拳头、歌诀等直观手段，让学生在动手观察和操作中自主发现规律。另外，学生通过生活经验对月份天数已有初步感知，但缺乏系统整理，这既是教学的起点，也是探究的空间。

**三、说教学目标**
基于教材分析和学情分析，我确定了三个教学目标。第一，通过观察年历，认识时间单位年、月、日，知道一年有 12 个月，能准确说出大月、小月、二月各有多少天，掌握平年、闰年的判断方法。第二，经历观察、整理、比较、验证的探究过程，学会用歌诀和拳头等方法记忆月份天数，发展数据意识和推理意识。第三，感受年、月、日与生活的联系，能解决简单的实际生活问题，养成珍惜时间的良好习惯，落实核心素养中的数据意识和推理意识。

**四、说教学重难点**
本课的教学重点是认识大月、小月和二月，掌握平年、闰年的判断方法。教学难点是理解闰年的判断规则，特别是"百年不闰、四百年再闰"这一特殊规定。之所以把它定为难点，是因为整百年份的判断规则学生很难想到：1900 年、2100 年这样的年份明明能被 4 整除却不是闰年，这与学生刚刚形成的规律产生了强烈冲突，必须通过具体算式的辨析才能让学生真正理解。为了突破这一难点，我采用反例辨析与直观计算相结合的方式，让学生亲身算一算、辩一辩，从认知冲突中建构正确认识。

**五、说教法学法**
在教法上，我主要采用情境教学法、引导发现法和直观演示法，通过猜谜语创设情境，用年历、拳头、歌诀等直观材料帮助学生记忆。在学法上，我引导学生通过观察年历、填写统计表、比较分类等活动，在动手、动口、动脑中主动建构知识。整节课突出学生的主体地位，让学生自己发现大月小月的规律，自己探究平闰年的判断方法，把"要我学"变成"我要学"。

**六、说教学过程**
我把教学过程设计为五个环节。第一环节谜语激趣，约五分钟，用谜语和"今天是几月几日"的谈话唤起学生的生活经验，自然引出课题。第二环节观察年历，约十二分钟，这是本课的重点环节，我放手让学生填写 2024 年 12 个月的月历统计表，在汇报交流中归纳出大月 7 个、小月 4 个、二月特殊，再教歌诀和拳头记忆法，配合手势判断游戏及时巩固。第三环节探究平年与闰年，约十分钟，通过呈现连续八年二月天数的数据，让学生发现"四年一闰"的规律，再结合 2020、2024、1900、2000 等年份的除法计算，突破"百年不闰"的难点。第四环节练习应用，约十分钟，设计判断、填空和生活问题，特别是"2 月 29 日生日"和经过天数的题目，让学生在运用中深化理解。第五环节总结作业，约三分钟，回顾收获，布置分层作业。

**七、说板书设计**
我的板书采用纲要式设计，中间是课题"年 月 日"，下面是本课的核心内容：一年 12 个月，大月 7 个各 31 天、小月 4 个各 30 天、二月平年 28 天闰年 29 天，平年 365 天、闰年 366 天，以及判断方法"除以 4 无余数，整百年份除以 400"。这样的板书提纲挈领，把本课的知识结构一目了然地呈现出来，既便于学生记忆，又便于课后复习。

**八、说教学反思与效果预测**
通过本课，我预计大部分学生能准确说出大月小月和二月天数，能正确判断普通年份的平闰情况，部分学生还能熟练运用歌诀和拳头记忆法。需要特别关注的是整百年份的判断和经过天数的计算，课堂上我通过反例辨析和分类练习来突破。当然，这节课内容较多，40 分钟内要完成观察、归纳、练习，时间会比较紧张，我会根据课堂生成灵活调整，把学生的探究时间放在最核心的环节。课后我也会通过分层作业了解每一位学生的掌握情况，及时查漏补缺。此外，我会在课堂巡视中重点关注统计表填写困难的学生，及时个别指导，并利用板书和歌诀帮助学生形成结构化记忆，让每一位学生都能在原有基础上获得发展。我的说课完毕，恳请各位老师批评指正，谢谢大家！`},"小学|四年级|数学|运算定律":{plan:`**教学基本信息**

课题：运算定律（单元第 1 课时：加法运算定律）
教材版本：人教版小学数学四年级下册第三单元
年级：小学四年级
课型：数与代数领域 · 规律探究课
课时：公开课 1 课时（40 分钟）

**教学目标**

1. 在具体情境中理解加法交换律和加法结合律的意义，会用字母 a 加 b 等于 b 加 a、(a 加 b) 加 c 等于 a 加 (b 加 c) 表示，并能运用加法运算定律进行凑整简便计算。
2. 经历"观察、猜想、验证、归纳、符号表示"的探究过程，感受不完全归纳思想，发展符号意识和推理意识，体会用字母表示定律的简洁之美。
3. 在解决实际问题的过程中感受运算定律的价值，学会灵活选择算法，增强学好数学的信心，落实"符号意识""运算能力"等数学核心素养。

**教学重难点**

教学重点：理解并掌握加法交换律和加法结合律，能用字母表示，并运用定律进行简便计算。
教学难点：加法结合律的理解与运用；辨析交换律（改变位置）与结合律（改变运算顺序），准确判断运算定律的类型。

**教学准备**

多媒体课件：春游乘车情境图、口算热身卡、运算定律结构图。
教具：探究学习单、字母卡片（a、b、c）、判断题卡、凑整配对卡。
学生准备：课前练习两位数加减法口算。

**教学过程**

**环节一 口算热身，情境导入（约 5 分钟）**

【教师活动】
（一）口算热身。师："上课前，先来一场口算小热身。开火车：25 加 36 等于几？"生："61。"师："36 加 25 呢？"生："61。"
（二）情境导入。课件出示春游情境：学校组织四年级同学去春游，一班 28 人，二班 36 人。师："求两个班一共有多少人，你能列出算式吗？"生："28 加 36 等于 64，36 加 28 也等于 64。"
预设师生对话：
师："28 加 36 和 36 加 28 两个算式有什么相同和不同？"
生："加数相同，只是交换了位置，得数也一样。"
师："交换加数的位置，和不变。这是偶然现象还是重要规律？让我们用更多例子验证。"

【学生活动】
学生口算热身，观察春游情境列出两个算式，初步感知"交换位置和不变"，产生验证猜想的学习期待。

【设计意图】
口算热身激活计算经验，春游情境引出等式 28 加 36 等于 36 加 28，把抽象的运算定律放进真实情境；用"偶然还是规律"的问题激发探究欲望。

**环节二 探究加法交换律（约 12 分钟）**

【教师活动】
（一）举例验证。师："你还能举出这样的例子吗？"学生举例：12 加 25 等于 25 加 12，137 加 78 等于 78 加 137……师："这样的例子举得完吗？"生："举不完。"
（二）概括归纳。师："那你能用一句话概括这种规律吗？"引导学生完整说出：两个数相加，交换加数的位置，和不变。师："能不能用一个式子把所有的例子都表示出来？"生："用字母，a 加 b 等于 b 加 a。"
（三）字母表示。师："这里的 a、b 表示什么？"生："可以表示任意数。"教师板书：a+b=b+a，并说明这就是加法交换律。
（四）联系旧知。师："其实，我们在一年级就见过它。检查加法算得对不对，通常用什么方法？"生："交换两个加数的位置，再算一遍。"师："对，这正是加法交换律在验算中的运用。"
（五）即时判断。师："下面的等式运用了加法交换律吗？35 加 48 等于 48 加 35？56 加 70 等于 70 加 56？"生逐题判断并说理由。
预设师生对话：
师："a 加 b 等于 b 加 a，这里的 a、b 只能表示整数吗？"
生："不是，小数、分数都可以，只要是两个数相加就行。"
师："正因如此，字母表示才这么简洁又通用。"

【学生活动】
学生列举多组等式，尝试用一句话概括规律，用字母表示定律，联系验算旧知，参与即时判断并说明理由。

【设计意图】
让学生完整经历"举例—观察—归纳—概括—符号化"的探究历程，把发现的机会还给学生；用字母表示让学生体会数学语言的简洁与一般性。

**环节三 探究加法结合律（约 10 分钟）**

【教师活动】
（一）情境延伸。回到春游情境：三个班一起去春游，一班 28 人，二班 36 人，三班 25 人。师："求三个班一共有多少人，你准备怎么算？"学生可能出现两种算法：
算法一：先算一班加二班，再加三班，28 加 36 加 25，等于 64 加 25，等于 89。
算法二：先算二班加三班，再加一班，28 加（36 加 25），等于 28 加 61，等于 89。
（二）比较发现。师："两种算法的结果怎么样？"生："都等于 89，相等。"师："再举例子试试，5 加 12 加 8，先加前两个或先加后两个，结果一样吗？"生："一样，都等于 25。"
（三）概括规律。师："三个数相加，先把前两个数相加或先把后两个数相加，和不变，这就是加法结合律。用字母怎么表示？"生："(a 加 b) 加 c 等于 a 加 (b 加 c)。"板书：(a+b)+c=a+(b+c)。
（四）简便计算。师："看这个算式，28 加 35 加 65，你准备先算哪两个数？为什么？"生："先算 35 加 65 等于 100，再加 28 得 128，35 加 65 正好凑成整百。"
预设师生对话：
师："你能很快算出 136 加 87 加 64 吗？"
生："先把 136 和 64 相加等于 200，再加 87 等于 287。"
师："这里同时用到了哪两条定律？"
生："先用加法交换律把 64 换到 136 后面，再用加法结合律先算 136 加 64。"

【学生活动】
学生对比两种算法，举例验证，概括结合律并用字母表示，体会凑整简算的优越性。

【设计意图】
用"算法多样化—结果相同—归纳规律"的路径让学生自己发现结合律；"凑整简算"让学生直观感受到运算定律不是摆设，而是能实实在在提高计算效率的工具，体会"先算哪两个数更合适"的优化意识。

**环节四 分层练习，巩固内化（约 10 分钟）**

【教师活动】
第 1 题（填一填）：根据运算定律填数。
（1）82 加 126 等于 126 加（82）。
（2）（36 加 47）加 53 等于 36 加（47 加 53）。
（3）79 加 38 加 21 等于（79 加 21）加（38）。
第 2 题（辨一辨）：下面的算式应用了什么运算定律？
（1）58 加 74 等于 74 加 58。（加法交换律）
（2）24 加（35 加 65）等于 24 加 100。（加法结合律，先算后两个加数）
（3）（120 加 80）加 58 等于 120 加（80 加 58）。（加法结合律）
第 3 题（巧算一算）：用简便方法计算下面各题。
（1）137 加 96 加 63：先算 137 加 63 等于 200，再加 96，等于 296。
（2）28 加 35 加 65：先算 35 加 65 等于 100，再加 28，等于 128。
（3）126 加（74 加 89）：先算 126 加 74 等于 200，再加 89，等于 289。
第 4 题（解决问题）：学校图书室上午借出图书 156 本，下午借出 144 本，第二天又借出 80 本。两天一共借出多少本？先算 144 加 80 得 224，再加 156 得 380（本）。
预设师生对话：
师："第 3 题第 1 小题，怎么想到先加 137 和 63？"
生："137 加 63 等于 200，凑整更简便。"
师："用到了哪条定律？"
生："交换律和结合律，先换位再结合。"

【学生活动】
学生独立完成填空、判断，板演简算并说理，小组交流思路。

【设计意图】
通过"填—辨—算—用"四层练习，让学生在辨析中分清两条定律，在计算中运用定律凑整简算，在解决问题中体会定律价值。

**环节五 总结升华，拓展延伸（约 3 分钟）**

【教师活动】
师："今天认识了两位新朋友——加法交换律和加法结合律。它们都有同一个本领：让计算又对又快。"
板书梳理知识结构。师："其实，乘法的世界里也藏着同样的规律：交换两个因数的位置，积不变；三个数相乘，先乘前两个或先乘后两个，积不变。下节课我们就去认识它们！"
布置分层作业：
基础作业：用字母写出加法交换律和加法结合律，并各举两个例子。
提高作业：用简便方法计算 245 加 137 加 155 加 63，并写一写你是怎么想的。

【学生活动】
学生回顾两条定律的字母表示，明确后续学习方向，记录作业要求。

【设计意图】
以知识图谱收束全课，让学生看见"加法有定律，乘法也有定律"的知识结构，激发探究欲望；分层作业兼顾巩固与提升。

**板书设计**

运算定律（加法）
加法交换律：a+b=b+a
两个数相加，交换加数位置，和不变
加法结合律：(a+b)+c=a+(b+c)
三个数相加，先把前两个数相加或先把后两个数相加，和不变
应用：凑整简算
举例：137+96+63=137+63+96=200+96=296

**教学反思要点**

1. 学生是否真正经历了"举例—验证—归纳"的探究过程，还是被教师牵着走，是否给予了充分的自主发现空间。
2. 加法结合律的概括是否借助"先算哪两个数"讲清了运算顺序的变化，学生能否区分交换律（位置变）与结合律（运算顺序变）。
3. 简便计算中，学生是否会正确选用定律并写出完整过程，能否说清算理而非只会模仿格式。
4. 预设对话是否自然，追问是否指向规律本质（如字母可表示任意数）。
5. 是否渗透了"乘法也有类似规律"的结构化眼光，为后续学习埋下伏笔。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学四年级下册第三单元《运算定律》。运算定律是小学数学计算教学的重要内容，在数与代数领域有着承上启下的作用。学生在低年级已经积累了大量的计算经验，本节课是在此基础上，把"两个数相加交换位置和不变"这类直观感受进行概括与提升，上升到用字母表示运算定律的抽象水平。本课是单元的起始课，我选取加法交换律和加法结合律作为教学内容。掌握这些定律，不仅能为后续学习乘法运算定律、简便计算打下基础，更能帮助学生发展符号意识和推理能力。此外，运算定律的学习还能为将来学习简便算法、方程变形奠定基础，具有很强的工具性。

**二、说学情**
四年级的学生已经学习了整数加减法，能熟练进行多位数的加减计算，在验算时其实已经在运用加法交换律，口算时也会灵活凑整，但这些经验是零散的、感性的，学生并不清楚背后隐藏着怎样的数学规律。同时，学生刚刚接触用字母表示数，用字母表示运算定律对他们来说是一次抽象水平的飞跃，需要教师搭建足够的支架。另外，学生容易混淆交换律和结合律，甚至把定律机械套用到减法、除法上，这些都需要在教学中重点防范。同时，四年级学生已经具备一定的探究能力和合作意识，能够在自主举例、同伴互证的过程中逐步概括规律。

**三、说教学目标**
基于以上分析，我确定了三个教学目标。第一，理解加法交换律和加法结合律的意义，会用字母表示，并能运用定律进行简便计算。第二，经历观察、猜想、验证、归纳的探究过程，发展符号意识和推理意识，感受不完全归纳的思想方法。第三，在解决实际问题的过程中体会运算定律的价值，感受数学语言的简洁之美，增强学好数学的信心。

**四、说教学重难点**
本课的教学重点是理解并掌握加法交换律和加法结合律，会用字母表示并能正确运用。教学难点是加法结合律的理解与运用，以及交换律与结合律的区分。为什么结合律是难点呢？因为交换律只涉及交换位置，学生容易感知；而结合律改变的是运算顺序，学生需要理解"先把前两个数相加或者先把后两个数相加，和不变"，这牵涉到对括号作用和运算顺序的重新认识。而两条定律在简便计算中又常常联合使用，所以辨析清楚尤为关键。为了突破这一难点，我运用对比题组，把交换律与结合律放在同一情境下辨析，让学生看清'变了什么、没变什么'。

**五、说教法学法**
在教法上，我采用发现式教学和对比辨析法，创设春游乘车、借书统计的真实情境，引导学生在具体问题中列算式、比结果、找规律。在学法上，我引导学生经历"观察—猜想—举例验证—归纳概括—符号表示"的完整探究路径，让学生自己举例、自己概括、自己用字母表示，充分体现以学生为主体的理念。整节课以"发现规律、验证规律、运用规律"为主线，让学生亲历数学知识的产生过程。

**六、说教学过程**
我的教学过程分五个环节。第一环节口算热身、情境导入，约五分钟，通过口算唤起经验，用春游情境引出 28 加 36 等于 36 加 28 的等式，让学生初步感知交换位置和不变。第二环节探究加法交换律，约十二分钟，让学生自己举出更多例子，尝试用一句话概括，再用字母 a 加 b 等于 b 加 a 表示，并联系加法验算的旧知，让学生体会交换律早已在身边。第三环节探究加法结合律，约十分钟，回到情境列出两种算法，通过比较发现先加前两个和先加后两个结果相同，归纳出结合律，并用 28 加 35 加 65 让学生体验凑整简算的优越性。第四环节分层练习，约十分钟，设计了填一填、辨一辨、巧算一算、解决问题四类题目，让学生在辨析和计算中巩固两条定律。第五环节总结升华，约三分钟，梳理知识结构，并预告乘法运算定律，激发继续学习的兴趣。这样环环相扣、层层递进，学生在每一环节都能获得新的发现。

**七、说板书设计**
我的板书分三块：左边是加法交换律 a 加 b 等于 b 加 a，中间是加法结合律 (a 加 b) 加 c 等于 a 加 (b 加 c)，每一条都配上文字表述，右边是应用示例 137 加 96 加 63 的简便计算过程。这样的板书既呈现了规律的符号表示，又呈现了文字表述和应用实例，完整展现了"发现—表示—运用"的探究脉络。

**八、说教学反思与效果预测**
预计通过本课，学生能正确表述两条加法运算定律，能用字母表示，也能完成基本的简便计算。需要关注的是，部分学生可能在判断题中把交换律和结合律混用，在简便计算中漏写步骤，我会通过辨析练习和板演展示及时纠正。同时，我会关注是否所有学生都经历了完整的探究过程，避免少数学生只记住结论而不会表达理由。在真实课堂上，我也会根据学生探究的节奏灵活调整时间，把更多的时间留给学生的发现与交流。另外，我会在课堂巡视中重点关注定律运用易出错的学生，通过即时反馈帮助他们规范书写、厘清算理，同时根据探究进度灵活调整节奏。我的说课完毕，恳请各位老师批评指正，谢谢大家！`},"小学|五年级|数学|因数与倍数":{plan:`**教学基本信息**

课题：因数与倍数（第 1 课时：因数和倍数的认识）
教材版本：人教版小学数学五年级下册第二单元
年级：小学五年级
课型：数与代数领域 · 概念新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学五年级学生

**教学目标**

1. 在整数除法分类的基础上理解因数与倍数的概念，知道因数与倍数相互依存，能正确举例说明谁是谁的因数、谁是谁的倍数。
2. 掌握找一个数的因数和倍数的方法，知道一个数的因数个数有限、最小是 1、最大是它本身，倍数个数无限、最小是它本身，并能有序、不重复、不遗漏地写出一个数的因数或倍数。
3. 经历"分类—观察—尝试—归纳"的探究过程，体会分类讨论和有序思考的数学思想，感受数学概念之间的联系，发展抽象能力和推理意识，落实核心素养。

**教学重难点**

教学重点：理解因数与倍数的概念及相互依存关系，掌握找因数、找倍数的方法。
教学难点：理解因数与倍数的相互依存关系（必须说清"谁是谁的"）；有序、不重复、不遗漏地找一个数的因数。

**教学准备**

多媒体课件：口算除法分类表、12 个小正方形拼长方形的演示动画、因数倍数关系图。
教具：12 个同样的小正方形（每小组一份）、数字卡片、百数表。
学生准备：课前口算 12 道整数除法算式。

**教学过程**

**环节一 口算分类，初步感知（约 5 分钟）**

【教师活动】
（一）口算导入。课件出示一组除法算式：12 除以 2、12 除以 3、12 除以 5、18 除以 3、20 除以 5、25 除以 7、30 除以 6、7 除以 5、9 除以 4、100 除以 20。师："开火车口算，看谁算得又对又快。"
（二）分类整理。师："仔细观察这些算式的商，它们有什么不同？"生："有的商是整数、没有余数，有的商不是整数、有余数。"
（三）明确范围。师："当商是整数且没有余数时，我们就说被除数能被除数和商整除。今天研究的因数和倍数，只在这类算式中讨论。"
预设师生对话：
师："商是整数且没有余数的算式有哪些？"
生："12 除以 3、18 除以 3、20 除以 5、30 除以 6、100 除以 20。"
师："在这些算式中，被除数、除数和商之间有着特殊的关系，这就是今天要认识的新朋友——因数和倍数。"

【学生活动】
学生口算除法，按"商是否为整数且无余数"把算式分类，明确本课的研究对象和范围。

【设计意图】
用一组精心设计的除法算式引导学生分类，让学生在分类中自然体会"整除"的本质，明确因数与倍数只在非零自然数的整除范围内讨论，为概念建立奠定基础。

**环节二 建立概念，理解依存（约 10 分钟）**

【教师活动】
（一）揭示概念。以 12 除以 3 等于 4 为例：师："被除数 12 是除数和商的倍数，除数和商是被除数 12 的因数。也就是说，12 是 3 的倍数，12 也是 4 的倍数；3 是 12 的因数，4 也是 12 的因数。"
（二）强调依存。师："能不能单独说'3 是因数'、'12 是倍数'？"生："不能，必须说清谁是谁的因数、谁是谁的倍数。"
预设师生对话：
师："为什么不能单独说？"
生："因为 3 是不是 12 的因数，要看着跟哪个数比；12 既是 3 的倍数，也是 4 的倍数，是哪个数的倍数要说清楚。"
师："说得真好！因数和倍数是一对好朋友，总是成对出现、相互依存，不能孤立地存在。"
（三）借助拼摆深化。师："用 12 个同样的小正方形，能拼成几种不同的长方形？"学生操作：一行 12 个、两行每行 6 个、三行每行 4 个。师："每种拼法都对应一组因数和倍数，比如 2 乘 6 等于 12，12 是 2 和 6 的倍数，2 和 6 是 12 的因数。"
（四）即时练说。师："根据 30 除以 6 等于 5，你能说清谁是谁的因数、谁是谁的倍数吗？"生："30 是 6 和 5 的倍数，6 和 5 是 30 的因数。"

【学生活动】
学生跟说概念，用"谁是谁的"句式完整表述，动手拼长方形感受因数成对出现，即时练说新算式。

【设计意图】
以 12 除以 3 等于 4 为生长点建立概念，用"为什么不能单独说"的追问帮助学生理解相互依存关系；拼摆活动让抽象的因数概念可视化，体会因数成对出现的特点。

**环节三 探究找因数与找倍数（约 12 分钟）**

【教师活动】
（一）找 18 的因数。师："请你在练习本上找出 18 的所有因数，比一比谁找得又快又全。"学生独立尝试，可能出现遗漏或重复。师："怎样做到不重复、不遗漏？"引导有序思考：从 1 开始，1 乘 18 等于 18，2 乘 9 等于 18，3 乘 6 等于 18，再往后 4、5 都不行，试到 6 就和 3 重复了，就可以停下来。
板书：18 的因数有 1、2、3、6、9、18，一共有 6 个。
预设师生对话：
师："为什么试到 6 之后就不用再试了？"
生："因为因数都是成对出现的，到 6 乘 3 就等于 18，和 3 乘 6 重复了。"
师："一对一对地找，从小的数开始，每次想两个数相乘等于 18，就能不重复、不遗漏。"
（二）观察特征。师："观察 18 的因数，最小的因数是几？最大的呢？"生："最小是 1，最大是 18 本身。"师："一个数的因数个数有限。"
（三）找 3 的倍数。师："请找出 3 的倍数。"生："3、6、9、12……"师："能找完吗？"生："找不完，要用省略号表示。"师："3 的倍数中最小的一个是谁？有最大的吗？"生："最小是 3 本身，没有最大的。"
（四）对比小结。师："一个数的因数个数有限，最小是 1、最大是它本身；一个数的倍数个数无限，最小是它本身、没有最大的。"

【学生活动】
学生尝试找 18 的因数和 3 的倍数，在交流中学会"成对找、有序找"的方法，对比发现因数与倍数在个数上的不同特点。

【设计意图】
让学生在自主尝试中暴露"重复、遗漏"的问题，再通过追问引导出"成对找、有序找"的策略；找倍数体验"写不完"的过程，直观感受"无限"，两个概念在对比中更加清晰。

**环节四 练习应用，巩固内化（约 9 分钟）**

【教师活动】
第 1 题（说一说）：根据算式说清因数和倍数的关系。
（1）12 除以 4 等于 3；（2）25 除以 5 等于 5；（3）18 除以 6 等于 3。
第 2 题（找一找）：写出下面各数的因数。
（1）12 的因数：1、2、3、4、6、12，共 6 个。
（2）15 的因数：1、3、5、15，共 4 个。
（3）19 的因数：1、19，只有 2 个。
第 3 题（找一找）：写出下面各数的倍数，至少写 5 个。
（1）7 的倍数：7、14、21、28、35……
（2）11 的倍数：11、22、33、44、55……
第 4 题（辨一辨）：下面的说法对吗？
（1）因为 4.8 除以 2.4 等于 2，所以 4.8 是 2.4 的倍数。（错，因数和倍数只在非零自然数范围内讨论）
（2）一个数的因数都比它的倍数小。（错，它的最大因数等于它本身，等于它的最小倍数）
（3）12 的因数有 1、2、3、4、6、12。（对）
预设师生对话：
师："19 的因数只有两个，这样的数我们后面会专门研究。那 1 的因数有几个？"
生："1 的因数只有 1 本身。"
师："真会思考，这些特殊情况，下一节课我们会继续探索。"

【学生活动】
学生独立完成说、找、辨练习，板演并说理，小组内讨论易错的判断题。

【设计意图】
通过"说—找—辨"的练习巩固概念与方法；判断题中嵌入小数陷阱，强化"非零自然数"这一研究范围；"19 只有两个因数"的发现为后续质数、合数学习埋下伏笔。

**环节五 课堂总结，拓展延伸（约 4 分钟）**

【教师活动】
师："今天你有哪些收获？"学生从概念、方法、注意事项等方面回顾。
师："想一想，如果我们要研究 2、3、5 的倍数各有什么特征，可以怎么研究？和 2 的倍数有关的奇数、偶数又是什么？这些问题，我们下节课继续探索。"
布置分层作业：
基础作业：写出 20、24 的全部因数；写出 5 的倍数，至少写 5 个。
提高作业：一个数的最大因数和最小倍数都是 24，这个数是多少？说说你的理由。

【学生活动】
学生回顾梳理本课收获，明确后续学习方向，记录作业要求。

【设计意图】
以问题链的方式把今天的收获串起来，同时预告倍数特征、质数合数等后续内容，让学生带着问题离开课堂；分层作业巩固基础、发展思维。

**板书设计**

因数与倍数
12 除以 3 等于 4
12 是 3 和 4 的倍数，3 和 4 是 12 的因数
相互依存：说清"谁是谁的"
找因数：成对找、有序找
18 的因数：1、2、3、6、9、18（6 个）
因数：个数有限，最小 1，最大本身
找倍数：用本身乘 1、2、3……
3 的倍数：3、6、9、12……（个数无限，最小本身）

**教学反思要点**

1. 分类环节是否真正帮助学生理解了"整除"，学生能否说清因数与倍数只在非零自然数范围内讨论。
2. "相互依存"这一难点是否通过追问和练说真正突破，学生是否都养成了说"谁是谁的因数、谁是谁的倍数"的习惯。
3. 找因数的有序方法是否由学生自主建构，还是教师直接告知，"不重复、不遗漏"的要求是否落实。
4. 判断题中的小数陷阱是否引发了认知冲突，学生对研究范围的理解是否牢固。
5. 是否为后续的倍数特征、质数合数教学做了自然铺垫，学生是否产生了继续探究的欲望。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学五年级下册第二单元《因数与倍数》的第一课时，因数和倍数的认识。因数和倍数是数论初步的重要内容，也是学生学习约分、通分、最大公因数和最小公倍数的基础。本课要在整数除法分类的基础上建立因数与倍数的概念，理解它们相互依存的关系，并掌握找一个数的因数和倍数的方法。这一概念对学生来说比较抽象，因为它揭示的是整数之间的一种整除关系，需要学生通过大量的具体算式来支撑理解。此外，因数与倍数的学习还能帮助学生体会数学概念之间的逻辑联系，感受分类、有序思考等思想方法的价值。

**二、说学情**
五年级的学生已经熟练掌握了整数除法和常见数的口算，具备了一定的分类、观察和归纳能力。但因数与倍数是一个全新的概念，学生在生活中几乎没有相关经验，而且"因数和倍数相互依存，必须说清谁是谁的"这一要求与学生的日常表达习惯不同，学生很容易脱口而出"3 是因数""12 是倍数"这样的错误说法。此外，找一个数的因数时容易重复和遗漏，这些都需要教师在教学中精心设计、重点指导。同时，学生已具备初步的符号意识和有序思考能力，但对'有限'与'无限'这样相对抽象的数量特征还缺乏直观体验，需要借助具体操作来支撑。

**三、说教学目标**
我确定了三个教学目标。第一，在整数除法分类的基础上理解因数与倍数的概念，知道二者相互依存，能正确表述谁是谁的因数、谁是谁的倍数。第二，掌握找一个数的因数和倍数的方法，知道一个数的因数个数有限、倍数个数无限，并能有序、不重复、不遗漏地找出一个数的因数。第三，经历分类、观察、尝试、归纳的探究过程，体会分类讨论和有序思考的数学思想，发展抽象能力。

**四、说教学重难点**
本课的教学重点是理解因数与倍数的概念及其相互依存关系，掌握找因数、找倍数的方法。教学难点是理解相互依存关系，以及有序、不重复地找出一个数的全部因数。把相互依存关系作为难点，是因为因数与倍数不能孤立存在，学生必须建立起"谁是谁的"这样的成对表述意识，这既是一个数学概念的理解问题，也是一个语言表达习惯的养成问题，需要反复训练才能内化。为了突破难点，我设计了'拼一拼、找一找、比一比'的活动链，让学生在操作中看见因数的成对出现，在对比中感受有限与无限的区别。

**五、说教法学法**
在教法上，我采用操作感知法、分类比较法和引导发现法，通过一组精心设计的除法算式引导学生分类，借助 12 个小正方形拼长方形的操作，让抽象的因数概念可视化。在学法上，我引导学生经历"分类—观察—尝试—修正—归纳"的过程，特别是找因数环节，让学生在自主尝试中暴露问题，再在教师的追问下自己悟出"成对找、有序找"的方法，真正把方法建构的过程还给学生。在学法指导上，我特别强调先尝试、后反思、再优化，让学生在试错中积累经验，在交流中提炼方法。

**六、说教学过程**
教学过程分五个环节。第一环节口算分类，约五分钟，出示一组除法算式，引导学生按"商是否为整数且无余数"分类，明确因数与倍数的研究范围。第二环节建立概念，约十分钟，以 12 除以 3 等于 4 为例揭示因数和倍数的概念，通过"能不能单独说 3 是因数"的追问让学生理解相互依存，再用 12 个小正方形拼长方形，感受因数成对出现。第三环节找因数找倍数，约十二分钟，让学生自主找 18 的因数，在重复和遗漏中学会有序思考，再找 3 的倍数体验"写不完"，对比出因数有限、倍数无限的特点。第四环节练习应用，约九分钟，通过说一说、找一找、辨一辨，特别是加入小数陷阱的判断，强化研究范围。第五环节总结拓展，约四分钟，梳理收获，并为下节课的倍数特征、质数合数做铺垫。五个环节环环相扣，从建立概念到掌握方法再到巩固运用，层次分明。

**七、说板书设计**
板书中间是课题"因数与倍数"，左边以 12 除以 3 等于 4 为例呈现因数和倍数的概念及相互依存的关系，右边呈现找 18 的因数、找 3 的倍数的过程和结果，下方用"因数有限、倍数无限"作对比小结。整个板书把抽象的概念、具体的例子和方法的对比浓缩在一起，帮助学生形成清晰的知识结构。

**八、说教学反思与效果预测**
通过本课，预计学生能正确说出谁是谁的因数、谁是谁的倍数，能有顺序地找出一个数的因数，初步体会因数与倍数数量的不同特点。课堂上我会重点观察学生表述的规范性，发现"孤立地说因数倍数"的情况及时纠正。同时，找因数的有序方法是否真正由学生自己悟出，是我需要关注的另一重点。如果时间紧张，我会把综合题留给学生课后思考，保证核心环节的探究时间。本节课为后续学习 2、3、5 的倍数特征和质数合数奠定了重要基础，我会在后续教学中持续巩固。同时，我会关注部分学生'只会背结论、不会说理'的情况，用追问促进深度理解；课后通过分层作业检验不同层次学生的达成度，为后续教学提供依据。我的说课完毕，恳请各位老师批评指正，谢谢大家！`},"小学|五年级|数学|分数的意义":{plan:`**教学基本信息**

课题：分数的意义（第 1 课时：分数的产生与意义）
教材版本：人教版小学数学五年级下册第四单元
年级：小学五年级
课型：数与代数领域 · 概念新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学五年级学生

**教学目标**

1. 在分物、测量等情境中了解分数的产生，理解单位"1"的含义，知道一个物体、一个计量单位或由许多物体组成的一个整体都可以看作单位"1"，能完整说出一个分数的意义。
2. 认识分数单位，知道分母是几、分数单位就是几分之一，分子是几、就有几个这样的分数单位，并能正确判断一个分数含有的分数单位个数。
3. 经历"操作—观察—比较—抽象—概括"的探究过程，从"把一个物体平均分"扩展到"把一个整体平均分"，发展抽象概括能力，感受分数在生活中的广泛应用，落实"数感""抽象能力"等核心素养。

**教学重难点**

教学重点：理解分数的意义，认识单位"1"和分数单位。
教学难点：理解单位"1"既可以是一个物体、一个图形，也可以是由许多物体组成的一个整体；理解分数表示的是部分与整体的关系。

**教学准备**

多媒体课件：分月饼情境图、四幅平均分图片（一张纸、一个圆、一根绳子、一盒糖）、数轴图。
教具：圆形纸片、正方形纸片、一根绳子、24 个小正方体（装盒）、分数卡片。
学生准备：每人一张圆形纸片和一张正方形纸片、若干小棒。

**教学过程**

**环节一 分物激趣，感受产生（约 5 分钟）**

【教师活动】
（一）分物冲突。师："老师带了一个大月饼，想平均分给 2 个小朋友吃，每人分得多少？"生："一人一半。"师："能用我们学过的整数表示这'一半'吗？"生："不能，得用二分之一。"
（二）产生分数。师："在测量物体长度、分东西的时候，常常不能正好得到整数的结果，这时就需要用一种新的数来表示，它就是分数。"板书课题：分数的意义。
（三）强调平均分。师："把一个月饼平均分成 2 份，每人得到它的二分之一。为什么要强调'平均分'？"
预设师生对话：
师："把一块蛋糕切成大小不同的两块，其中一块能叫二分之一吗？"
生："不能，因为没有平均分，两块不一样大。"
师："对，平均分是产生分数的前提，不平均分就不能用分数表示。"

【学生活动】
学生说一说分月饼的结果，体会"一半"不能用整数表示，明确"平均分"是产生分数的前提。

【设计意图】
用分月饼的现实冲突唤起学生的已有经验，通过"为什么不平均分不行"的追问强化"平均分"这一前提，让学生带着对分数产生过程的真切感受进入新课。

**环节二 操作探究，理解单位"1"（约 12 分钟）**

【教师活动】
（一）操作活动。师："请用圆形纸片表示这个圆，把它平均分成 4 份，涂出其中的 3 份。涂色部分是这个圆的几分之几？"生："四分之三。"
（二）追问意义。师："这里的四分之三表示什么？"生："把一个圆平均分成 4 份，表示这样的 3 份。"
（三）扩展单位"1"。课件依次出示：把一张纸平均分成 2 份、把一根绳子平均分成 3 份、把一盒糖（24 块）平均分成 4 份。师："把一个物体、一个计量单位或由许多物体组成的一个整体平均分，都可以得到分数。这个'1'，可以表示一个物体，也可以表示一个整体，我们把它叫做单位'1'。"
（四）辨析关键。师："一盒糖有 24 块，把它平均分成 4 份，每份是这盒糖的几分之几？"生："四分之一。"师："每份有几块糖？"生："6 块。"师："四分之一和 6 块，表示的意思一样吗？"生："不一样，四分之一表示的是这盒糖的份数关系，6 块是具体的块数。"
预设师生对话：
师："单位'1'可以是谁？"
生："可以是一个蛋糕、一张纸，也可以是一群同学、一箱矿泉水。"
师："把全班 40 人看作单位'1'，平均分成 8 个小组，每个小组是全班人数的几分之几？"
生："八分之一。"
（五）归纳意义。师："谁能完整地说说，什么叫分数？"引导学生概括：把单位"1"平均分成若干份，表示这样一份或几份的数，叫做分数。

【学生活动】
学生动手折一折、涂一涂，观察多种平均分的情境，辨析"四分之一"与"6 块"的区别，尝试用自己的话概括分数的意义。

【设计意图】
从"一个物体"到"一个整体"，层层递进地扩展单位"1"的含义；"四分之一与 6 块"的辨析直指"分率与具体量"的区别，帮助学生真正理解分数表示的是部分与整体的关系。

**环节三 认识分数单位（约 10 分钟）**

【教师活动】
（一）观察分数结构。师："以四分之三为例，它各部分叫什么名字？"生："3 是分子，表示取的份数；4 是分母，表示把单位'1'平均分成的份数；中间的分数线表示平均分。"
（二）引入分数单位。师："把单位'1'平均分成 4 份，表示其中 1 份的数，叫做分数单位。四分之三的分数单位是四分之一，它有几个这样的分数单位？"生："3 个。"
（三）规律提炼。师："分母是几，分数单位就是几分之一。八分之五的分数单位是几分之一？"生："八分之一，有 5 个。"师："六分之五呢？"生："分数单位是六分之一，有 5 个。"
预设师生对话：
师："七分之四的分数单位是多少？"
生："七分之一。"
师："它有几个七分之一？"
生："4 个，因为分子是 4。"
师："观察这几组数，你发现了什么规律？"
生："分数单位由分母决定，分母是几、分数单位就是几分之一；分子是几、就有几个这样的分数单位。"
（四）顺口溜记忆。师："一起来说：分母定单位，分子数个数。"

【学生活动】
学生说出分数各部分名称，数一数分数单位，观察多组分数比较规律，朗读顺口溜并举例应用。

【设计意图】
在具体分数中认识分数单位，通过多个例子让学生发现"分母决定分数单位、分子决定个数"的规律，把抽象的分数单位概念变得具体可操作。

**环节四 分层练习，巩固深化（约 10 分钟）**

【教师活动】
第 1 题（说一说）：说出下面每个分数的意义。
（1）四分之三：把单位"1"平均分成 4 份，表示这样的 3 份。
（2）六分之五：把单位"1"平均分成 6 份，表示这样的 5 份。
（3）二分之一：把单位"1"平均分成 2 份，表示这样的 1 份。
第 2 题（想一想）：下面各题中的分数，是把什么看作单位"1"？
（1）全班人数的五分之二是女生。（全班人数）
（2）一箱牛奶的三分之一已经喝掉。（一箱牛奶）
（3）一根绳子的八分之三。（这根绳子的长度）
第 3 题（填一填）：
（1）八分之五的分数单位是（八分之一），有（5）个这样的分数单位。
（2）分数单位是六分之一的最大真分数是（六分之五）。
（3）3 个四分之一相加等于（四分之三）。
第 4 题（辨一辨）：
（1）把一根绳子剪成 5 段，每段是它的五分之一。（错，必须平均分）
（2）把 10 个苹果平均分成 2 份，每份是这堆苹果的二分之一，是 5 个苹果。（对）
预设师生对话：
师："把一根绳子剪成 5 段，每段一定是它的五分之一吗？"
生："不一定，要平均分才是。如果长短不一样，就不能用五分之一表示。"
师："提醒得真到位！'平均分'三个字，一个都不能少。"

【学生活动】
学生独立完成说、想、填、辨练习，重点辨析"平均分"与"分成"的区别，板演并说理。

【设计意图】
通过多层次练习巩固分数的意义、单位"1"和分数单位；判断题再次敲响"平均分"的警钟，强化概念的本质，同时渗透"分率"与"具体量"的区分。

**环节五 课堂总结与作业（约 3 分钟）**

【教师活动】
师："今天你认识了哪两个新朋友？"生："单位'1'和分数单位。"师："谁能完整地说说分数的意义？"学生齐说：把单位"1"平均分成若干份，表示这样一份或几份的数，叫做分数。
布置分层作业：
基础作业：任选三个分数，分别说出它们的意义和分数单位。
提高作业：观察家里的水果或物品，用"把（ ）看作单位 1，平均分成（ ）份，表示这样的（ ）份"说一句完整的话，明天和同学交流。

【学生活动】
学生回顾小结，明确作业要求，课后完成实践性作业。

【设计意图】
用"两个新朋友"的亲切方式回顾本课核心概念；实践性作业把分数学习延伸到生活，让学生在真实情境中巩固对单位"1"的理解。

**板书设计**

分数的意义
分数的产生：分物、测量时得不到整数结果
单位"1"：一个物体、一个计量单位、一个整体
意义：把单位"1"平均分成若干份，表示这样一份或几份的数，叫做分数
分数单位：表示其中一份的数
分母是几，分数单位就是几分之一；分子是几，就有几个分数单位
四分之三：平均分成 4 份，表示 3 份；分数单位四分之一，有 3 个

**教学反思要点**

1. 操作活动是否真正让学生经历了从"一个物体"到"一个整体"的认识跨越，单位"1"的扩展是否自然、到位。
2. "平均分"这一前提是否被反复强调，判断题能否帮助学生澄清"剪成 5 段"不等于"平均分成 5 份"的误区。
3. 分数单位的学习是否通过观察归纳让学生自主发现规律，而非死记顺口溜。
4. "四分之一与 6 块"的辨析是否让学生真正区分了分率与具体量，这是后续学习的关键。
5. 是否留足了学生操作、表达的时间，教师的语言是否简洁、追问是否指向概念本质。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学五年级下册第四单元《分数的意义》的第一课时，分数的产生与意义。分数的意义是本单元的核心概念，也是学生系统学习分数知识的起点。分数是小学阶段数概念的一次重要扩展，从整数到分数，是学生认识上的又一次飞跃。本课要在分物、测量等情境中理解分数的产生，认识单位"1"，理解分数的意义和分数单位。这部分知识为后续学习分数与除法的关系、真分数和假分数、分数的基本性质等内容奠定了坚实基础。此外，分数意义的学习还能帮助学生建立数感，理解分数在表示部分与整体关系中的独特价值，为今后学习分数运算打下概念基础。

**二、说学情**
学生在三年级已经初步认识了分数，知道把一个物体平均分可以用分数表示，会读写简单的分数。但这种认识还停留在"把一个物体平均分"的层面，学生对"由许多物体组成的一个整体也可以平均分"缺乏认识，对单位"1"含义的扩展理解有困难。同时，学生容易把"分成"和"平均分"混为一谈，也容易混淆分率与具体量，比如"每份是四分之一"和"每份是 6 块"的区别。这些都是本课需要着力解决的问题。同时，五年级学生已具备一定的动手操作和抽象概括能力，但在语言表达上还不够严谨，常常把'分成'和'平均分成'混为一谈，需要教师在交流中不断规范。

**三、说教学目标**
我确定了三个教学目标。第一，在分物、测量等情境中了解分数的产生，理解单位"1"的含义，能完整说出一个分数的意义，认识分数单位。第二，经历操作、观察、比较、抽象、概括的探究过程，从"把一个物体平均分"扩展到"把一个整体平均分"，发展抽象概括能力。第三，感受分数与生活的密切联系，体会分数在表示部分与整体关系中的价值，落实数感和抽象能力等核心素养。

**四、说教学重难点**
本课的教学重点是理解分数的意义，认识单位"1"和分数单位。教学难点是理解单位"1"既可以是一个物体，也可以是由许多物体组成的一个整体。这一难点之所以难，是因为学生过去学习分数时，单位"1"一直是单个物体，而现在单位"1"的含义大大扩展，一盒糖、一群同学都可以看作单位"1"，学生需要完成一次重要的抽象，认识到分数的本质是表示部分与整体的关系，而与整体的大小、数量无关。为了突破这一难点，我设计了由'一个物体'到'一个整体'的递进操作，让学生在一次次平均分中自己悟出：只要平均分了，无论整体多大、包含多少物体，都能用分数表示部分与整体的关系。

**五、说教法学法**
在教法上，我采用操作感知法、数形结合法和引导发现法，让学生通过折一折、涂一涂、分一分等操作活动，在具体的图形和情境中理解抽象的分数概念。在学法上，我引导学生经历"操作—观察—比较—归纳"的探究过程，在动手操作中积累感性经验，在观察比较中抽象出分数的意义，让概念的学习有血有肉，而不是死记硬背定义。在学法上，我引导学生经历'折一折—涂一涂—说一说—比一比'的完整过程，让每一个概念都从学生自己的操作和表达中生长出来。

**六、说教学过程**
教学过程分五个环节。第一环节分物激趣，约五分钟，通过分月饼的情境唤起旧知，强调"平均分"是产生分数的前提。第二环节操作探究，约十二分钟，让学生用圆形纸片表示四分之三，再通过折纸、分绳、分糖等多种操作，把单位"1"从一个物体扩展到由许多物体组成的整体，并重点辨析"四分之一"与"6 块"的区别，在此基础上归纳分数的意义。第三环节认识分数单位，约十分钟，从四分之三入手认识分数单位四分之一，通过多组例子让学生发现"分母是几，分数单位就是几分之一"的规律。第四环节分层练习，约十分钟，设计了说意义、找单位"1"、填分数单位、辨析平均分四类练习。第五环节总结作业，约三分钟，回顾核心概念，布置实践性作业。

**七、说板书设计**
板书以课题"分数的意义"为中心，依次呈现分数的产生、单位"1"的含义、分数的意义和分数单位四块内容，并以四分之三为例，标注出分母、分子、分数线和分数单位。整个板书图文并茂，把分数的意义这个抽象概念用具体的例子支撑起来，既呈现了知识结构，又突出了本课的核心。

**八、说教学反思与效果预测**
预计通过本课，学生能用自己的话说清分数的意义，能正确指出单位"1"，会求一个分数的分数单位。课堂上我会特别关注学生对"平均分"的理解是否到位，对单位"1"扩展的抽象过程是否顺畅。如果在操作环节学生用时较长，我会适当压缩练习时间，保证学生的探究体验完整。分数单位的学习中，个别学生可能会把分子当成分数单位，我会通过顺口溜和对比练习帮助他们纠正。本课为后续学习打下了概念基础，我会在后面的课时中继续巩固分数意义的理解。此外，我会关注操作环节的节奏，避免学生因活动时间过长而精力分散；同时利用数形结合帮助学生把抽象的分数意义落到具体图形上，预计学生在分数单位的判断上仍会有困难，我会通过顺口溜和变式练习反复强化。我的说课完毕，恳请各位老师批评指正，谢谢大家！`},"小学|六年级|数学|负数的初步认识":{plan:`**教学基本信息**

课题：负数的初步认识（第 1 课时：负数的意义与读写）
教材版本：人教版小学数学六年级下册第一单元
年级：小学六年级
课型：数与代数领域 · 概念新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学六年级学生

**教学目标**

1. 结合气温、收支、海拔等生活情境，理解负数的意义，能正确读写正数和负数，知道正号可以省略、负号不能省略。
2. 理解 0 既不是正数也不是负数，知道 0 是正数与负数的分界点，能正确用正数和负数表示生活中具有相反意义的量。
3. 经历"由生活到数学"的抽象过程，感受负数在生活中的广泛应用，体会数学与生活的密切联系，发展数感，落实"数感""抽象能力"等核心素养。

**教学重难点**

教学重点：理解负数的意义，正确读写正数和负数，能用正负数表示相反意义的量。
教学难点：理解 0 的特殊地位（0 既不是正数也不是负数，是分界点）；理解"规定一个量为正，与它相反的量即为负"。

**教学准备**

多媒体课件：城市天气预报图（含零下温度）、家庭收支账单、海拔资料图、楼层示意图。
教具：温度计模型、正负数卡片、数轴示意图、"分界点"演示图。
学生准备：课前收集身边的正负数例子。

**教学过程**

**环节一 情境引入，制造冲突（约 5 分钟）**

【教师活动】
（一）天气预报。课件出示某日两个城市的气温：北京零下 3 摄氏度到零上 6 摄氏度，上海零上 2 摄氏度到零上 9 摄氏度。师："零下 3 摄氏度，该怎样记在数里呢？"
（二）冲突质疑。师："如果只记 3 摄氏度，能分清是零上还是零下吗？"生："分不清。"师："生活中有很多意义相反的量，只用以前学过的数无法区分，于是人们发明了负数。"
预设师生对话：
师："零上和零下、收入和支出、上升和下降、向东和向西，这些量的共同点是什么？"
生："它们的意思正好相反。"
师："对，这些意义相反的量，就需要用正数和负数来区分。"
板书课题：负数的初步认识。

【学生活动】
学生观察天气预报，体会"分不清零上零下"的困难，初步感受引入负数的必要性。

【设计意图】
用真实的生活情境制造认知冲突，让学生体会"以前学过的数不够用"的现实需要，从而自然引出负数，体会数学源于生活又服务于生活。

**环节二 认识正数与负数（约 12 分钟）**

【教师活动】
（一）认识负数。课件出示：北京某日最低气温零下 3 摄氏度，写作负 3 摄氏度（负 3℃），读作负三摄氏度或零下三摄氏度。师："负号'−'是负数的记号，不能省略。"
（二）认识正数。师："零上 6 摄氏度写作正 6 摄氏度（正 6℃）或 6 摄氏度，这里的正号'＋'可以省略不写。"
（三）归纳分类。师："像正 3、正 15、正 2.5 这样的数叫正数；像负 3、负 10、负 0.5 这样的数叫负数。正数前面的正号可以省略，负数前面的负号不能省略。"
预设师生对话：
师："正号可以省略，负号为什么不能省略？"
生："省略了负号，就看不出它是正数还是负数了。"
师："说得真好。负号是负数的'身份证'，丢了它，意义就完全不同了。"
（四）读写练习。师："跟着老师写一写、读一读：正 8 读作正八，写作正 8；负 5 读作负五，写作负 5；负 155 读作负一百五十五，写作负 155。"学生在练习本上书写，教师巡视纠正，指名展示。
（五）拓展认识。师："小数、分数也能是负数吗？负 0.5、负二分之一都是负数。"生："负 0.5 比 0 小。"

【学生活动】
学生认识负号与正号，归纳正负数概念，练写练读，讨论负号不能省略的原因，理解负数可以是整数也可以是小数、分数。

【设计意图】
以天气预报为依托，在具体数的读写中归纳出正负数的概念；通过"负号为什么不能省略"的追问，让学生真正理解负号的意义，为后续学习奠定基础。

**环节三 认识 0，突破难点（约 10 分钟）**

【教师活动】
（一）关键提问。师："0 是正数还是负数？"学生自由发表意见。师："0 既不是正数，也不是负数。它是正数和负数的分界点。"
（二）结合温度理解。师："0 摄氏度表示没有温度吗？"生："不是，0 摄氏度是淡水开始结冰的温度。"师："0 摄氏度是零上和零下的分界，它代表一个基准。"
（三）数轴感知。课件出示温度计和数轴：0 在中间，左边是负数，右边是正数。师："以 0 为分界，比 0 大的数是正数，比 0 小的数是负数。"
预设师生对话：
师："为什么说 0 是分界点？"
生："因为 0 的右边都是正数，0 的左边都是负数，0 正好在中间分界。"
师："0 虽然既不是正数也不是负数，但它的作用可大了，它是正负数的分界线，也是很多量的基准。"
（四）找一找。师："请举例说明 0 在哪里当'分界点'。"生："0 米是海平面，向上为正、向下为负；地面是 0 层，往上为正、往下为负。"

【学生活动】
学生讨论 0 的正负性，结合温度计和数轴感受 0 的分界地位，举例说明生活中的 0 基准。

【设计意图】
把 0 的特殊地位作为本课难点重点突破，借助温度计、数轴让学生直观看到"0 在中间分界"，再通过海平面、楼层等例子让学生理解 0 作为基准的实际意义，突破"0 就是没有"的思维定势。

**环节四 用正负数表示相反意义的量（约 9 分钟）**

【教师活动】
（一）明确规则。师："用正负数表示相反意义的量，要先规定哪一个量为正。若规定收入为正，则支出 200 元记作负 200 元。"
（二）情境练习。课件依次出示：
1. 收入 500 元记作正 500 元，支出 300 元记作负 300 元。
2. 向东走 50 米记作正 50 米，向西走 50 米记作负 50 米。
3. 珠穆朗玛峰高出海平面约 8844 米，记作正 8844 米；死海湖面低于海平面约 400 米，记作负 400 米。
4. 地上 3 层记作正 3 层，地下 2 层记作负 2 层。
（三）小组交流。师："请举例说明生活中还有哪些用正负数表示相反意义的量。"学生举例：电梯楼层、股票涨跌、收支账本、温度变化。
预设师生对话：
师："如果规定向南为正，那么向北走 100 米怎么记？"
生："记作负 100 米。"
师："为什么？"
生："因为南和北是相反的方向，向南为正，向北就是负。"
师："先规定正方向，再确定正负，这个顺序很重要。"

【学生活动】
学生观察多种情境的正负数表示，独立完成填空，小组内举例交流并互相判断。

【设计意图】
通过"先规定正方向，再定负"的方法提炼，让学生在多种生活情境中反复运用，掌握用正负数表示相反意义的量的要领；小组交流拓展视野，感受负数的广泛用途。

**环节五 课堂总结与作业（约 4 分钟）**

【教师活动】
师："通过今天的学习，你认识了哪些新朋友？"生："正数、负数和 0。"师："0 的地位很特殊：它既不是正数也不是负数，却是正负数的分界点。"
师："下节课我们还要研究：在数轴上，负数之间怎样比较大小？比如负 10 和负 3 哪个更小？带着这个问题，课后可以先想一想。"
布置分层作业：
基础作业：举出 3 个用正负数表示相反意义的量的生活例子，并正确读写。
提高作业：观察温度计，比较零下 5 摄氏度与零下 10 摄氏度哪个更冷，说说理由。

【学生活动】
学生回顾本课收获，明确作业要求，带着"负数如何比较大小"的问题离开课堂。

【设计意图】
用问题收尾，既巩固了本课知识，又为下一课时"数轴与大小比较"埋下伏笔，保持学习的连续性，激发学生的探究兴趣。

**板书设计**

负数的初步认识
正数：正 3、正 15、正 2.5（正号可省略：3、15）
负数：负 3、负 10、负 0.5（负号不能省略）
0：既不是正数，也不是负数，是分界点
规定一个量为正，相反的量记为负
收入 500 元记正 500 元，支出 300 元记负 300 元
海拔正 8844 米、负 400 米；楼层正 3 层、负 2 层

**教学反思要点**

1. 引入环节是否真正让学生体会到"引入负数的必要性"，还是流于形式，学生对"意义相反的量"的感知是否充分。
2. "0 既不是正数也不是负数"这一难点是否借助温度计、数轴直观突破，学生能否用自己的话说清 0 的分界地位。
3. 正负数的读写是否落实到每一位学生，负号不能省略是否通过追问真正理解。
4. 表示相反意义的量时，"先规定正方向"的方法是否被学生掌握，举例是否丰富、正确。
5. 是否为学生下节课学习数轴与大小比较做好了衔接铺垫，是否保护了学生的探究热情。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学六年级下册第一单元《负数的初步认识》的第一课时，负数的意义与读写。负数是学生第一次接触比 0 小的数，是数概念的一次重要扩展。在此之前，学生认识的数都是正数和 0，而负数的引入，让学生的数域从非负数扩展到正数、0、负数，这是学生认识上的一次飞跃。教材从气温、海拔、收支等生活情境入手，让学生理解负数的意义，学会读写，体会 0 的特殊地位，为后续学习数轴、有理数以及初中代数学习奠定基础。此外，负数的学习还能帮助学生发展数感和符号意识，理解用符号表示数量关系的简洁与必要，为中学阶段学习有理数运算积累直观经验。

**二、说学情**
六年级的学生在生活中有丰富的负数经验，他们看过天气预报中的零下温度，听说过"亏了""欠了"这样的表达，但这种经验是模糊的、不系统的。学生第一次接触负数，容易出现两个典型问题：一是把 0 归入正数或负数；二是不理解为什么要规定"一个量为正，相反的量记为负"。同时，学生读负数的习惯（如把负 3 读成"减三"）也需要纠正。这些都是本课需要突破的难点。同时，六年级学生已具备较强的观察、比较和抽象概括能力，但对'负数也是数'这一点仍会感到新奇甚至困惑，特别是'负号后面的数越大，这个负数反而越小'这类规律，需要借助数轴和生活原型逐步建立。

**三、说教学目标**
我确定了三个教学目标。第一，结合生活情境理解负数的意义，能正确读写正数和负数，知道正号可以省略、负号不能省略。第二，理解 0 既不是正数也不是负数，知道 0 是正数和负数的分界点，能用正负数表示生活中具有相反意义的量。第三，在由生活到数学的抽象过程中感受负数与生活的密切联系，发展数感，培养抽象能力。在落实三个目标的同时，我还注重引导学生经历'现象—符号—意义'的抽象过程，体会数学符号的概括力量，这是本课隐含的重要学习价值。

**四、说教学重难点**
本课的教学重点是理解负数的意义，正确读写正负数，能用正负数表示相反意义的量。教学难点是理解 0 的特殊地位和表示相反意义的量时如何规定正方向。0 之所以难，是因为学生一直认为 0 就是"没有"，而现在 0 摄氏度、0 米都表示一个基准而不是"没有"，这种认识的转变需要借助温度计、海拔等具体情境才能完成。为了突破难点，我采用'温度计模型＋数轴示意图＋生活实例'三重直观，先让学生在温度计上'看到'0 的位置，再借助海平面、楼层体会 0 作为基准的含义，最后通过反复举例把'0 是分界点'的认识固化下来。

**五、说教法学法**
在教法上，我采用情境教学法、对比归纳法和直观演示法，用天气预报、家庭账本、海拔资料等真实素材创设情境，用温度计模型和数轴示意图帮助学生直观理解。在学法上，我引导学生通过观察、比较、举例、讨论等活动，从大量生活现象中抽象出负数的概念，体会数学来源于生活又服务于生活。在学法上，我注重让学生用数学的眼光观察生活、用数学的语言描述生活，在收集与交流正负数实例的过程中，完成从生活经验到数学概念的提升。

**六、说教学过程**
教学过程分五个环节。第一环节情境引入，约五分钟，通过天气预报制造"分不清零上零下"的认知冲突，让学生体会引入负数的必要性。第二环节认识正负数，约十二分钟，在具体温度中认识负号和正号，归纳正负数的概念，强调负号不能省略，并进行读写练习。第三环节认识 0，约十分钟，通过讨论和数轴演示，让学生理解 0 既不是正数也不是负数，是分界点，并借助海平面、楼层等例子理解 0 作为基准的意义。第四环节表示相反意义的量，约九分钟，提炼"先规定正方向"的方法，在收入支出、海拔、楼层等情境中反复练习，并让学生举例交流。第五环节总结作业，约四分钟，回顾收获，抛出"负数怎么比较大小"的问题，为下节课做铺垫。整个教学过程环环相扣，从'为什么需要负数'到'负数是什么'再到'怎么用负数'，线索清晰，层层递进。

**七、说板书设计**
板书以课题为中心，分为三块：正数（正号可省略）、负数（负号不能省略）、0（既不是正数也不是负数，是分界点），下方呈现用正负数表示相反意义的量的例子，如收入支出、海拔、楼层。板书突出 0 的特殊地位这一难点，又用具体例子支撑抽象概念，一目了然。

**八、说教学反思与效果预测**
预计通过本课，学生能正确读写正负数，能用正负数表示常见的相反意义的量，能用自己的话说清 0 为什么既不是正数也不是负数。课堂上我会重点关注学生对"0 是分界点"的理解是否真正到位，通过温度计和生活实例反复强化。同时，对个别把负号丢掉、把 0 归入正数的学生，我会当堂反馈纠正。负数是学生数概念的一次飞跃，本课重在建立直观和正确读写，大小比较的问题留给下节课借助数轴解决，保证每节课的目标都扎实落地。同时，我会关注少数学生把负号读成'减'、把 0 归入正数的习惯性错误，通过当堂反馈及时纠正，并预留弹性时间，根据学生对难点的接受情况灵活调整练习深度。我的说课完毕，恳请各位老师批评指正，谢谢大家！`}},fs={"小学|六年级|数学|数与形":{plan:`**教学基本信息**

课题：数与形
教材版本：人教版六年级上册第八单元"数学广角"
年级：六年级
课型：数学广角探究课（公开课）
课时：公开课 1 课时（40 分钟）
授课对象：小学六年级学生

**教学目标**

1. 通过摆一摆、看一看、算一算的活动，发现连续奇数之和与正方形点阵、连续自然数之和与三角形点阵之间的对应关系，会用图形直观解释数的规律，感悟数形结合思想，发展直观想象核心素养。
2. 经历"摆—记—猜—验"的完整探究过程，能从图形的变化中发现数的规律并用算式表示出来，经历从特殊到一般的归纳推理，发展推理意识与观察、归纳能力。
3. 能灵活运用发现的规律解决求连续奇数之和、连续自然数之和等求和与计数问题，体会数学的简洁美与形式美，增强学好数学的自信心。

**教学重难点**

重点：从图形中发现数的规律，并用算式把规律表示出来。
难点：由具体图形的操作抽象出一般规律，理解"正方形数""三角形数"的几何意义，不靠死记而靠图形记住求和公式。

**教学准备**

多媒体课件（动态拼摆演示、华罗庚名言、长方形拼补演示）；学生每人 20 个小正方形卡片、圆片若干、方格纸、探究记录单。

**教学过程**

**环节一 情境导入，初识数与形（约 4 分钟）**

教师活动：
（课件先出示 1 个、4 个、9 个、16 个小圆点排成的方形点阵）
师：同学们，请看大屏幕，这些点阵分别用了几个圆点？
生：1 个、4 个、9 个、16 个。
师：这些数排在一起，你发现了什么？
生：4 比 1 多 3，9 比 4 多 5，16 比 9 多 7。
师：观察得真仔细！数学家华罗庚爷爷说过一句话——"数缺形时少直观，形少数时难入微。"意思是说，数离不开形，形也离不开数。今天这节课，我们就一起走进数与形的世界，看看它们之间藏着哪些秘密。板书课题：数与形。
学生活动：观察点阵，说出数的变化规律，齐读课题，带着好奇进入新课。
设计意图：以方形点阵导入，既复习了平方数，又让学生初步感受"数"与"形"一一对应的关系，用华罗庚名言点明数形结合思想，为全课定下探究基调。

**环节二 探究一：连续奇数之和与正方形（约 12 分钟）**

教师活动：
师：请拿出 1 个小正方形卡片，把它摆在方格纸上。它表示几？
生：表示 1。
师：再拿出 3 个，摆成一个大一点的正方形，一共用了几个？
生：一共 4 个。
师：1 加 3 等于 4，正好是 2 乘 2。请你在记录单第一行写下来：1 加 3 等于 2 的平方。
师：如果再添上 5 个，能不能还排成一个大正方形？小组里动手试一试。
生：（动手拼摆）能！摆成 3 行 3 列，一共 9 个。
师：1 加 3 加 5 等于几？
生：等于 9，是 3 的平方！
师：继续往下猜：1 加 3 加 5 加 7，会等于几的平方？
生：4 的平方，等于 16！
师：光猜不算数，请你摆一摆验证：7 个小正方形加进去，能拼成 4 乘 4 的大正方形吗？
生：（操作验证）能，不多不少正好 16 个。
师：现在请观察这一组算式，你能用一句话概括发现的规律吗？
生：从 1 开始的几个连续奇数相加，和就等于几的平方。
师：说得真好！从 1 开始，n 个连续奇数相加，和等于 n 的平方。板书：1 加 3 加 5 加……加（2n 减 1）等于 n 的平方。
学生活动：动手拼摆正方形，边摆边记录算式，先猜再验，小组讨论后归纳概括规律。
设计意图：坚持"摆—记—猜—验"四步走，让学生用眼睛"看到"平方数就藏在正方形里，把抽象算式还原成直观图形，在操作中理解规律、在验证中体会严谨，让数形结合思想真实落地。

**环节三 探究二：连续自然数之和与三角形（约 10 分钟）**

教师活动：
师：刚才我们用正方形研究了奇数，现在把图形换一换，用圆片来摆三角形。第 1 个三角形用 1 个圆片。
生：（摆出 1 个圆片）
师：第 2 个三角形，要在下面添一层，添几个？一共几个？
生：添 2 个，一共 3 个。
师：第 3 个呢？
生：再添 3 个，一共 6 个。
师：1、3、6、10 这些数，都来自"从 1 开始的连续自然数相加"，它们有一个好听的名字，叫三角形数。第 4 个是 1 加 2 加 3 加 4，等于几？
生：等于 10。
师：那第 10 个三角形数，就是 1 加 2 加 3 一直加到 10。一个一个加太麻烦了，有没有巧办法？看课件：把两个同样的三角形点阵倒过来一拼，正好补成一个长方形。
生：（观察演示）补成了 10 行 11 列的长方形！
师：这个长方形一共有 10 乘 11 等于 110 个圆点，是一个三角形点阵的 2 倍。所以 1 加到 10 等于多少？
生：110 除以 2，等于 55。
师：一般地，从 1 加到 n，就等于 n 乘（n 加 1）再除以 2。板书：1 加 2 加 3 加……加 n 等于 n 乘（n 加 1）除以 2。这个公式，我们是看着图形"补"出来的，不是背出来的。
学生活动：摆三角形点阵，观察两个三角形拼成长方形的演示，理解求和公式的来历。
设计意图：三角形数让学生从图形中理解"连续自然数求和"公式，用"两个三角形拼成长方形"的办法直观解释"乘（n 加 1）除以 2"的由来，把公式的"所以然"讲透，防止机械记忆。

**环节四 分层练习，用规律解决问题（约 10 分钟）**

教师活动：
师：规律学会了，我们来练一练，看谁用得又对又快。
第一题：1 加 3 加 5 加 7 加 9 等于多少？
生：5 个连续奇数，等于 5 的平方，是 25。
师：第二题：1 加 3 加 5 一直加到 15，一共有几个加数？和是多少？
生：有 8 个加数，和是 8 的平方，等于 64。
师：第三题：1 加 2 加 3 加……加 10 等于多少？
生：10 乘 11 除以 2，等于 55。
师：第四题考考你们的迁移能力：用同样的小正方形摆成相连的正方形，摆 1 个用 4 根小棒，摆 2 个用 7 根，摆 3 个用 10 根。摆 5 个要用几根？
生：第一个 4 根，以后每多一个多 3 根，4 加 3 加 3 加 3 加 3，一共 16 根。
师：还能列成更简洁的算式吗？
生：3 乘 5 加 1 等于 16。
师：这道题告诉我们，找规律时关键要看清楚"第一个是多少""以后每增加一个多几"，抓住首项和增量。
学生活动：独立完成四道练习，同桌互批，指名上台说理，全班订正。
设计意图：练习由基本规律到综合运用逐层递进，前两题巩固"正方形数"，第三题巩固"三角形数"，第四题拓展"小棒规律"，既夯实核心知识，又培养学生举一反三、灵活迁移的能力。

**环节五 课堂小结与拓展（约 4 分钟）**

教师活动：
师：回顾这节课，我们是怎样研究数与形的？谁来总结一下研究的方法？
生：先摆图形，再记录算式，先猜再验，最后总结规律。
师：总结得真棒！"摆—记—猜—验"就是这节课的探究法宝。数形结合让我们"看见"了规律，也让规律记得更牢。课后请完成一个挑战：1 加 3 加 5 一直加到 99，和是多少？把过程画一画、写一写，明天我们来交流。
学生活动：回顾梳理探究方法，明确课后挑战任务。
设计意图：梳理"摆—记—猜—验"的探究方法，强化数形结合思想；布置有梯度的挑战题，把探究从课内延伸到课外，让学习持续发生。

**板书设计**

数与形
以形助数：1 等于 1 的平方
1 加 3 等于 4 等于 2 的平方
1 加 3 加 5 等于 9 等于 3 的平方
……
从 1 开始 n 个连续奇数相加，和等于 n 的平方
以数解形：1 加 2 加 3 加……加 n 等于 n 乘（n 加 1）除以 2
（中间画两个小正方形拼成大正方形，右侧画圆片三角形及补成长方形的示意图）
数缺形时少直观，形少数时难入微

**教学反思要点**

1. 归纳规律时，要保证学生充分"摆"和"验"的时间，防止部分学生只记结论、不经历过程，让探究成为真实体验而非走过场。
2. "连续奇数求和"与"连续自然数求和"两个公式容易混淆，要通过图形对比它们的几何意义，让学生从"正方形"与"三角形"上分清对象。
3. 第三题的"为什么除以 2"要追问到底，检验学生对公式来历的理解是否真正到位，避免只记公式不会说理。
4. 板书坚持算式与图形一一对应，让学生课后能"看着板书讲出规律"，实现复习的自助化。
5. 对学有余力的学生，可再追问连续偶数求和是否有类似规律，引导方法迁移，点燃深入探究的火种。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是人教版六年级上册第八单元"数学广角"中的《数与形》。

**一、说教材**

"数与形"是小学数学中渗透数形结合思想的重要载体。本课编排在六年级上册最后一个单元，意在让学生通过"以形助数、以数解形"的活动，初步体会数形结合思想，学会从图形中发现数的规律，为初中"找规律"和函数学习奠基。教材通过小正方形拼大正方形、圆片摆三角形两个经典素材，引导学生发现"连续奇数之和等于平方数"和"连续自然数求和"两个规律，还渗透了摆小棒找规律的拓展内容。可以说，本课既是小学阶段"数与形"思想的集中呈现，也是学生后续学习的重要起点，教材地位十分关键。从编写意图看，教材以"正方形数""三角形数"为经典素材，把纯数字的规律藏在图形里，引导学生用图形帮助思考、用算式刻画图形，这种"数形互译"正是数学核心素养中直观想象与推理意识的重要体现。

**二、说学情**

六年级学生已经积累了较丰富的数和形的基础知识，会计算平方数、能看懂简单图形，观察和归纳能力有了一定发展，但仍以具体形象思维为主。学生常见的问题是：把"连续奇数求和"与"连续自然数求和"两个公式混用；求第 n 个时凭想象套公式，缺少从图形出发的验证；找图形规律时忽略首项的特殊性。因此，本课必须让学生亲自动手摆一摆、画一画，用眼睛"看到"规律再抽象成算式，把操作、猜想、验证、归纳结合起来。同时，六年级学生的表达能力和合作意识已有较好基础，适合开展小组探究，让学生在讨论交流中碰撞出思维的火花。

**三、说教学目标**

依据课标和教材，我确定了三个目标：第一，通过摆一摆、看一看、算一算，发现连续奇数之和与正方形、连续自然数之和与三角形的对应关系，会用图形解释数的规律，感悟数形结合思想；第二，经历"摆—记—猜—验"的探究过程，能发现规律并用算式表示，培养观察、归纳、推理能力；第三，能运用规律解决求和、计数问题，体会数学的简洁美与形式美。

**四、说重难点**

本课重点是让学生从图形中发现数的规律，并用算式表示出来。难点是由具体的图形操作抽象出一般规律，理解正方形数、三角形数的几何意义。之所以这样确定，是因为六年级学生归纳概括的能力还不强，从"摆好的图"到"抽象的式"这一步跨越，恰恰是最容易卡住的地方，必须借助图形的直观来搭桥。

**五、说教法学法**

本课主要采用操作探究法、直观演示法和合作交流法。教师通过课件动态演示拼摆过程，学生通过摆一摆、记一记、猜一猜、验一验，在小组合作中经历"从特殊到一般"的归纳过程。整个教学坚持让学生动手在先、发现在先，教师只在关键处点拨，真正做到以学生为主体、以探究为主线。此外，本课特别强调"说理"，每个规律都要学生结合图形讲清"为什么"，让直观操作与抽象概括相互印证、彼此支撑。

**六、说教学过程**

围绕教学目标，我设计了五个教学环节。第一个环节是情境导入，约 4 分钟，用方形点阵和华罗庚名言引入，初识数与形的联系，激发探究兴趣。第二个环节是探究连续奇数之和与正方形的关系，约 12 分钟，学生用小正方形拼摆，经历"摆—记—猜—验"，归纳出"从 1 开始 n 个连续奇数相加等于 n 的平方"。第三个环节是探究连续自然数之和与三角形的关系，约 10 分钟，学生摆三角形点阵，观察两个三角形拼成长方形，直观理解求和公式的来历。第四个环节是分层练习，约 10 分钟，设置四道由易到难的题目：前两题巩固"正方形数"求和，第三题巩固"三角形数"求和，第四题拓展小棒规律，引导学生抓住"首项与增量"找规律，实现举一反三。第五个环节是小结与拓展，约 4 分钟，梳理"摆—记—猜—验"的探究方法，布置"1 加 3 加 5 一直加到 99"的挑战题，把学习引向课外。

**七、说板书设计**

我的板书以"以形助数、以数解形"为主线，左边呈现正方形数与连续奇数的对应算式，右边呈现三角形数与连续自然数的公式，中间配上拼摆示意图，最后点明华罗庚名言。板书图文结合、层次清晰，既是课堂探究的浓缩，也为学生课后复习提供了直观支架。

**八、说反思与效果预测**

本节课最鲜明的特点是以图形为载体、以探究为主线，让学生亲眼看到规律、亲手验证规律，数形结合思想贯穿始终。需要反思的是，探究环节容易超时，教师要有意识地控制节奏，把充足时间留给"摆"与"验"，而不是"讲"与"抄"。效果预测上，绝大多数学生能借助图形说出两个求和规律，能独立完成基础练习，部分学有余力的学生还能迁移到新的图形规律。对于归纳有困难的学生，课后我会借助板书图形进行个别辅导，帮助他们"看图说理"，真正达成"人人学有价值的数学"这一目标。此外，板书的算式与图形一一对应，学生课后可以看着板书复述规律、画出图形，把课堂学习自然延伸到自主复习，让数形结合的思想扎根心中。

我的说课到此结束，恳请各位老师批评指正，谢谢大家！`},"小学|一年级|数学|6-10 的认识和加减法":{plan:`**教学基本信息**

课题：6-10 的认识和加减法
教材版本：人教版一年级上册第五单元
年级：一年级
课型：数与计算新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学一年级学生

**教学目标**

1. 会正确地数、认、读、写 6-10 各数，掌握 6-10 各数的顺序，能按顺序数出数量在 6 到 10 之间的物体的个数，会用这些数表示物体的个数，初步建立数感。
2. 借助小棒、圆片等学具理解 6-10 各数的组成，能不重复、不遗漏地说出一个数可以分成哪两个数，感受分与合是加减法的基础，发展运算能力与有序思考的习惯。
3. 理解加法和减法的含义，能较熟练地口算 10 以内加减法，会看括线图分析数量关系，解决"求一共""求还剩"的简单实际问题，体会数学与生活的联系。

**教学重难点**

重点：6-10 各数的认识与组成，10 以内加减法的口算。
难点：有序地说出一个数的组成；看懂括线图、大括号图并正确列式。

**教学准备**

数字卡片、小棒、圆片、磁性圆片贴、口算卡片、括线图教具、多媒体课件、任务单。

**教学过程**

**环节一 情境导入，数出新朋友（约 4 分钟）**

教师活动：
（课件出示一棵大树，树上有 5 只小鸟）
师：小朋友们，仔细看大屏幕，树上停着几只小鸟？
生：5 只。
师：（又飞来 1 只）现在呢？
生：6 只！
师：5 添上 1 是 6。那 6 添上 1 是几？7 添上 1 呢？
生：6 添上 1 是 7，7 添上 1 是 8。
师：今天我们就要认识 6、7、8、9、10 这几位新朋友。看，6 像哨子嘟嘟吹，7 像镰刀割青草，8 像葫芦藤上挂，9 像勺子能盛饭，10 像铅笔加鸡蛋。
生：（跟着儿歌齐读）
师：板书课题：6-10 的认识和加减法。
学生活动：观察情境图数小鸟，跟读写数儿歌，齐读课题。
设计意图：用"小鸟飞来"的动画自然引出 6-10 各数，渗透"添上 1"的顺序思想；用形象儿歌帮助学生记住字形，符合一年级学生以形象记忆为主的特点。

**环节二 数一数，认识 6-10 各数（约 10 分钟）**

教师活动：
1. 数一数，认一认
师：任务单上有三幅图，请小朋友们用小棒或圆片代替物品数一数，再在下面摆出对应的数。
（学生操作：数 8 个苹果、9 支铅笔、10 个气球）
师：谁来汇报，你是怎么数的？
生：8 个苹果，我数一个点一个，1、2、3、4、5、6、7、8。
师：数的方法真好，一个不重、一个不漏。10 个气球，数到 9 再添 1 就是 10。
2. 排一排，比一比
师：请把 5、6、7、8、9、10 六张数字卡片按从小到大的顺序排一排。
生：（上台排列）5 6 7 8 9 10。
师：观察这一排数，你发现了什么？
生：后面的数总比前面的数多 1。
师：与 8 相邻的两个数是谁？9 的前面是几？后面是几？
生：与 8 相邻的是 7 和 9；9 的前面是 8，后面是 10。
3. 写一写，比一比
师：拿出田字格本，跟老师一起写 6 和 9。注意 6 的圈在下面，9 的圈在上面，千万别写反。再写一写 10，1 在左边，0 在右边。
生：（书空后描红书写，教师巡视纠正笔顺）
学生活动：摆学具数数、排卡片找规律、在田字格中描红书写，动手又动脑。
设计意图：坚持"数、认、排、写"四步走，把数数的过程与"添 1"的顺序结合起来；抓住 6 与 9 易写反的难点重点指导，让学生对数建立清晰的顺序表象和书写印象。

**环节三 分一分，探究数的组成（约 10 分钟）**

教师活动：
1. 摆一摆，分一分
师：8 个圆片，要分成两堆，可以怎样分？请用小棒或圆片摆一摆，边摆边在任务单上记录。
生：（操作并记录）8 可以分成 1 和 7、2 和 6、3 和 5、4 和 4。
师：还有没有别的分法？
生：5 和 3、6 和 2……和前面的重复了。
师：怎样才能不重复、不遗漏？记住窍门：从 1 开始按顺序分，写一半就停住。比如 8 的组成，分到 4 和 4 就停下，再往下就重复啦。
2. 记一记，用一用
师：老师举起数字卡片 6，你能快速说出 6 的组成吗？
生：6 可以分成 1 和 5、2 和 4、3 和 3。
师：10 的组成很重要，我们拍手说儿歌：一九一九好朋友，二八二八手拉手，三七三七真亲密，四六四六一起走，五五凑成一双手。
生：（拍手齐说）
师：知道了 8 的组成，会算什么？
生：8 加 2、8 减 3、3 加 5 都会算了。
学生活动：动手摆圆片记录组成，说组成儿歌，感受组成是口算的依据。
设计意图：把"先摆再记"作为理解组成的抓手，引导学生在有序操作中发现"从 1 开始、写一半停住"的规律，避免重复遗漏；用凑十儿歌强化 10 的组成，为后续口算打下根基。

**环节四 算一算，加减法与括线图（约 12 分钟）**

教师活动：
1. 想组成，算口算
师：3 个红圆片和 5 个蓝圆片合起来，用加法，3 加 5 等于几？想：3 和 5 组成 8。
生：等于 8！
师：8 个圆片去掉 3 个，还剩几个？用减法，想：8 可以分成 3 和 5。
生：8 减 3 等于 5。
师：口算卡片抢答：7 加 2、9 减 3、4 加 5、6 加 4、10 减 5。
生：（抢答，说出算理）
2. 一图四式
师：看这幅图，左边 3 个圆片，右边 5 个圆片，你能写出几个算式？
生：3 加 5 等于 8，5 加 3 等于 8，8 减 3 等于 5，8 减 5 等于 3。
师：一图可以写两加两减，减法里的被减数就是总数 8，千万别写反。
3. 看括线图，解决问题
师：（课件出示括线图：左边 4 个，右边 3 个，大括号下面画问号）看图，括线把两部分括在一起，下面问号表示"一共有几个"，用什么方法？
生：用加法，4 加 3 等于 7。
师：如果大括号下面写着 9，左边有 4 个，问号在左边，求左边有几个，该用什么方法？
生：用减法，9 减 4 等于 5。
师：记住口诀：问号在括线下，求一共用加法；问号在一边，求一部分用减法。
学生活动：口算抢答、写一图四式、看括线图说数量关系并列式。
设计意图：把"想组成"作为口算的推荐方法，沟通加减法之间的内在联系；通过一图四式和括线图的对比练习，帮助学生理清"总数、部分、问题"的关系，突破本课难点。

**环节五 游戏巩固，总结收获（约 4 分钟）**

教师活动：
师：我们来玩"数字找朋友"的游戏。老师举起数字卡片 8，请你找到一位好朋友，让你们的卡片合起来是 8。
生：（举 1 和 7、2 和 6、3 和 5、4 和 4 的学生走到一起）
师：找对啦！今天你认识了哪些新朋友，学会了哪些本领？
生：认识了 6 到 10，学会了数的组成，会算加减法了。
师：课后请完成任务单上剩下的口算题，再用小棒摆一摆 10 的组成，把你喜欢的分法画下来。下课！
学生活动：参与找朋友游戏，回顾总结收获，明确课后任务。
设计意图：用游戏巩固数的组成，寓练于乐；引导学生梳理本课知识，把学习延伸到课外，让数学与生活自然联结。

**板书设计**

6-10 的认识和加减法
6 7 8 9 10
（数字卡片按顺序贴成一排，标出"后面的数比前面的数多 1"）
8 的组成：8 分成 1 和 7、2 和 6、3 和 5、4 和 4
一图四式：3 加 5 等于 8，5 加 3 等于 8
8 减 3 等于 5，8 减 5 等于 3
括线图：问号在括线下求一共用加法，问号在一边求部分用减法

**教学反思要点**

1. 数的组成坚持"先摆再记"，要保证每个学生都有操作的机会，防止只记口诀、不理解"分与合"的实际意义。
2. 6 与 9 的方向辨析是写字难点，要在书写指导中反复强调"圈在下面还是上面"，并通过"找不同"游戏巩固。
3. 一图四式要反复强调"两加两减、减法被减数是总数"的规律，防止学生只写加法或把被减数写错。
4. 括线图教学要让学生先指着图说出"哪是总数、哪是部分、问的是什么"，说清楚了再列式，顺序不能颠倒。
5. 口算训练要落实到每节课前几分钟，坚持"想组成"的方法引导，从扶着写逐步过渡到独立完成。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是人教版一年级上册第五单元的《6-10 的认识和加减法》。

**一、说教材**

本单元是"数与代数"领域的重要内容，编排在 1-5 的认识和加减法之后，起着承上启下的作用。教材先安排认识 6-10 各数，再学习数的组成，最后学习 10 以内加减法和用括线图解决问题。6-10 是学生数概念的进一步拓展，是后续学习 11-20 各数、进位加法和退位减法的基础。尤其是数的组成，是口算加减法的"法宝"，直接影响学生今后的计算能力。可以说，本单元是小学阶段计算教学的重要根基，教材地位十分突出。教材把数的认识、数的组成、加减法口算和解决问题编排在同一单元，环环相扣，体现了"数的认识为计算奠基、计算为解决问题服务"的编写思路。

**二、说学情**

一年级学生刚从幼儿园进入小学，具体形象思维占主导，注意力集中时间短，但好奇心强、喜欢游戏和儿歌。学生在生活中已经接触过 6-10 这些数，多数能数到 10，但对数的组成普遍不熟练，书写 6 和 9 容易写反，看括线图时容易把加法和减法用反。因此，本课必须借助小棒、圆片等学具，让学生在摆一摆、数一数、分一分中建立数的表象，在游戏中巩固知识。教学中还要多用表扬和奖励，让每个孩子都愿意开口说、动手摆，在积极的心理体验中学习数学。

**三、说教学目标**

根据课标和教材，我确定了三个目标：第一，会正确地数、认、读、写 6-10 各数，掌握它们的顺序，会用这些数表示物体的个数；第二，借助小棒、圆片理解数的组成，能不重复、不遗漏地说出一个数可以分成哪两个数；第三，理解加减法的含义，能口算 10 以内加减法，会看括线图解决"求一共""求还剩"的简单问题，初步感受数学与生活的联系。

**四、说重难点**

本课重点是 6-10 各数的认识与组成，以及 10 以内加减法的口算。难点是有序地说出一个数的组成，以及看懂括线图并正确列式。这样确定是因为，一年级学生操作时容易乱摆乱分，重复或遗漏；括线图对学生来说是全新的抽象模型，理解"总数、部分、问题"三者的关系需要借助直观支撑。

**五、说教法学法**

本课主要采用情境教学法、操作探究法、儿歌记忆法和游戏练习法。教师创设"小鸟飞来"的情境导入，用儿歌帮助记忆字形和组成，用"数字找朋友"游戏巩固练习；学生通过摆一摆、排一排、写一写、分一分，在动手操作中理解知识。整节课坚持"先摆后记、先想再说"，让抽象的数和计算在操作中变得看得见、摸得着。练习时我采用"口算小火车""夺红旗"等形式，让每一个孩子都动起来，在比赛中感受成功的喜悦。

**六、说教学过程**

我设计了五个教学环节。第一个环节是情境导入，约 4 分钟，用小鸟飞来的动画引出 6-10，渗透"添 1"的顺序。第二个环节是认识 6-10 各数，约 10 分钟，通过数一数、排一排、写一写，掌握数的顺序和写法，重点纠正 6 和 9 的方向。第三个环节是探究数的组成，约 10 分钟，学生摆圆片分一分，发现"从 1 开始按顺序、写一半就停住"的规律，并借助凑十儿歌巩固 10 的组成，为口算打好基础。第四个环节是加减法与括线图，约 12 分钟，先练口算，再写一图四式，最后看括线图列式，通过"说清总数、部分与问题"突破本课难点。第五个环节是游戏与小结，约 4 分钟，通过"数字找朋友"巩固组成，梳理收获，布置课后任务。

**七、说板书设计**

我的板书以"6 7 8 9 10"一排数字卡片为主干，突出"后面的数比前面多 1"；下方呈现 8 的组成和一图四式，右侧总结括线图的用法口诀。其中 8 的组成用"分合式"呈现，上下分、左右合，一目了然；括线图部分保留"求一共"和"求部分"两种典型图式，让学生一看板书就能回忆起"问号在哪、该用加法还是减法"，为课后说理复习提供直观抓手。

**八、说反思与效果预测**

本课最突出的特点是"做中学"，每个知识点都通过学具操作来理解，儿歌和游戏让课堂充满趣味。需要反思的是，一年级课堂活动容易"过热"，教师要善于收放；括线图是难点，单靠一节课难以完全过关，课后还需要通过分层练习巩固。另外，口算的"想组成"方法要反复示范、逐步放手，帮助学生从"掰手指"慢慢过渡到"想组成"，形成又快又准的口算习惯。效果预测上，绝大多数学生能正确读写 6-10，能有序说出一个数的组成，能较熟练口算 10 以内加减法，大部分学生能看懂简单的括线图。在课堂练习中我设计了从认数、组成到口算、看图列式的梯度任务，让不同层次的学生都能在原有基础上获得成功的体验。对于个别接受慢的孩子，课后我会用圆片一对一操作辅导，保证人人过关。同时建议家长在家和孩子玩"分圆片""对口令"的小游戏，把数的组成练成"条件反射"，为孩子今后的计算学习积蓄力量。

我的说课到此结束，恳请各位老师批评指正，谢谢大家！`},"小学|一年级|数学|认识图形（一）":{plan:`**教学基本信息**

课题：认识图形（一）
教材版本：人教版一年级上册第四单元
年级：一年级
课型：图形认识新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学一年级学生

**教学目标**

1. 认识长方体、正方体、圆柱、球四种立体图形，能正确说出它们的名称，能辨认实物、图片和模型，初步建立空间观念。
2. 通过看一看、摸一摸、滚一滚、推一推等操作活动，了解四种立体图形的基本特征，能用自己的话说出它们的样子，发展观察、比较能力与动手操作能力。
3. 能根据图形特征给实物分类，能正确数出由小正方体搭成的图形中小正方体的个数，体会立体图形在生活中的广泛应用，感受数学与生活的联系。

**教学重难点**

重点：辨认长方体、正方体、圆柱、球，掌握它们的基本特征。
难点：区分长方体与正方体，理解圆柱"站着不滚、躺下才滚"与球"向哪推就向哪滚"的滚动特点。

**教学准备**

四种立体图形的实物与模型各若干；牙膏盒、魔方、易拉罐、皮球、卷纸芯、乒乓球等生活物品；分类筐两个；盲袋；多媒体课件；任务单。

**教学过程**

**环节一 情境导入，引出图形朋友（约 4 分钟）**

教师活动：
（课件出示用积木搭成的机器人图片）
师：小朋友们，看，这是谁？
生：机器人！
师：机器人是用什么搭成的？
生：积木。
师：这些积木的形状可不一样。今天老师带来了一些生活中的物品，请你们看一看。出示牙膏盒、魔方、易拉罐、皮球。
生：（观察物品）
师：这些物体的样子各不相同，但它们都是立体图形。今天我们就来认识四种立体图形朋友：长方体、正方体、圆柱和球。板书课题：认识图形（一）。
学生活动：观察机器人图片和实物，认识图形名称，齐读课题。
设计意图：用学生熟悉的积木机器人导入，拉近数学与生活的距离；通过生活实物引出四种立体图形，激发学生认识图形、探究特征的兴趣。

**环节二 摸一摸，认识四种图形（约 12 分钟）**

教师活动：
1. 认识长方体
师：拿出牙膏盒，像老师这样摸一摸它的面，看一看它的样子。它长得什么样？
生：长长方方的，有平平的面。
师：像牙膏盒、文具盒、砖头这样长长方方、有 6 个平平的面的图形，叫长方体。相对的两个面大小相同。
2. 认识正方体
师：再拿出魔方，摸一摸、比一比。它的面和长方体的面有什么不一样？
生：魔方是方方正正的，每个面都一样大。
师：像魔方、骰子这样方方正正、6 个面都一样的图形，叫正方体。
3. 认识圆柱
师：拿出易拉罐，从上往下摸，再围着它的身体摸一圈。感觉怎么样？
生：上下是圆圆的、平平的，中间是弯弯的。
师：像易拉罐、卷纸芯这样，上下有两个圆圆的平面、中间弯弯的图形，叫圆柱。
4. 认识球
师：拿出皮球，摸一摸。皮球有平平的面吗？
生：没有，它是圆滚滚的，到处都弯弯的。
师：像皮球、乒乓球这样圆滚滚、没有平平的面的图形，叫球。
5. 闭眼回想，巩固表象
师：四种图形都认识了。闭上眼睛，老师说名字，你用小手比划一下它的样子。长方体？
生：（用手比划出长长方方的样子）
师：球？
生：（比划出圆滚滚的样子）
师：真棒！大家都把它们的模样记在心里了。
学生活动：小组内轮流摸一摸四种图形，说一说摸到的感觉，再闭眼比划回想，用语言和动作描述图形特征。
设计意图：让每个学生亲身"摸一摸、看一看"，调动多种感官建立图形表象；在"说样子"中把触觉体验转化为语言表达，为后续分类打下基础。

**环节三 滚一滚，分一分（约 10 分钟）**

教师活动：
1. 滚一滚，比一比
师：请把四种图形放在桌上推一推、滚一滚，你发现了什么？
生：（操作）长方体、正方体不会滚，只能滑动；皮球向哪推就向哪滚；易拉罐站着不滚，躺下才滚。
师：为什么圆柱站着不滚、躺下才滚？
生：站着的时候有平平的面顶着，躺下才露出弯弯的身体。
师：观察得真仔细！球没有平平的面，所以向哪推就向哪滚；圆柱躺着的时候才能滚。
2. 分一分，说一说
师：老师有两个分类筐，请小组合作，把桌上的物品按"能不能滚"分一分，并说说理由。
生：（分类）球和躺下的圆柱能滚，放一筐；牙膏盒、魔方不会滚，放另一筐。
师：还可以按什么标准分？
生：按"有没有平平的面"分，长方体、正方体、圆柱有，球没有。
师：分得真好！再想一想，长方体、正方体、圆柱都有平平的面，为什么长方体和正方体不容易滚，圆柱躺着却能滚呢？
生：圆柱躺下以后，露出来的是弯弯的身体，所以能滚；长方体和正方体全身都是平平的，滚不起来。
师：说得真清楚！有没有平平的面、会不会滚，就是我们认识图形的两把"小钥匙"。
学生活动：动手滚一滚、推一推，小组合作分类并说明理由，比较三种图形滚动不同的原因。
设计意图：让学生在滚动实验中直观感受平面与曲面的区别，突破"圆柱与球滚动不同"这一难点；通过两次不同标准的分类，训练学生多角度观察和有条理表达的能力。

**环节四 数一数，拼一拼（约 10 分钟）**

教师活动：
1. 数一数小正方体
师：（课件出示图形：下面 3 个排成一排，上面再放 1 个）这个图形用了几块小正方体？
生：4 块。
师：有的小正方体被挡在后面看不见，怎么数才不重复、不遗漏？
生：一层一层数，数一个做一个记号。
师：对！先数下面一层，再数上面一层。看下一题：下面一层 4 个，上面一层 2 个，一共几个？
生：4 加 2，一共 6 个。
2. 拼一拼，说一说
师：请用学具里的立体图形搭一个你喜欢的图形，搭完后和小伙伴说说你用了几个长方体、几个圆柱。
生：（自由拼搭，互相介绍）
师：谁来展示你的作品，用上图形的名字说一说？
生：我用 1 个长方体当底座，上面放了 1 个圆柱，旁边放了 2 个正方体。
学生活动：数小正方体个数并说清数法，用立体图形自由拼搭并介绍作品。
设计意图：教给学生"一层一层数、边数边做记号"的方法，突破数图形时漏数被挡方块这一难点；拼搭活动既巩固图形特征，又激发创造力，让学生感受立体图形的乐趣。

**环节五 游戏巩固，总结提升（约 4 分钟）**

教师活动：
师：我们来玩"图形盲袋"游戏。老师把一种图形放进盲袋，请你闭着眼睛摸一摸，猜猜它是什么，并说说理由。
生：（闭眼摸）圆滚滚的，没有平平的面，是球！
师：猜对了！今天你认识了哪四种立体图形？谁能说说它们各自的样子？
生：长方体长长方方，正方体方方正正，圆柱上下圆圆，球圆滚滚。
师：课后请你在家里找一找，哪些物品是长方体、正方体、圆柱或球，把它们的样子画下来，明天和大家分享。
学生活动：参与盲袋摸物游戏，回顾四种图形的特征，明确课后找物任务。
设计意图：盲袋游戏把触觉辨认与特征描述结合起来，让知识在趣味中巩固；课后"找一找、画一画"把数学学习延伸到家庭生活，体现"数学来源于生活、服务于生活"。

**板书设计**

认识图形（一）
长方体：长长方方，6 个平平的面，相对面相同
正方体：方方正正，6 个面一样大
圆柱：上下两个圆圆的平面，中间弯弯
球：圆滚滚，没有平平的面
（中间贴四种图形的实物图或模型卡片）
会滚：球、躺下的圆柱    不会滚：长方体、正方体

**教学反思要点**

1. 要保证每位学生都有摸一摸、滚一滚的操作机会，空间的建立离不开亲身实践，不能以教师的演示代替学生的体验。
2. 长方体与正方体的区分是本课难点，要让学生通过"比一比 6 个面"来发现不同，而不是死记定义。
3. 圆柱的滚动特点学生容易忽略"躺着才滚"，实验时要有意识地让圆柱以两种姿态出现，帮助学生全面认识。
4. 数小正方体时要反复强调"一层一层数、边数边做记号"，防止漏数被遮挡的方块。
5. 注意纠正"圆"与"球""圆柱"的混淆，引导学生说清平面图形与立体图形的区别，为后续学习平面图形埋下伏笔。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是人教版一年级上册第四单元的《认识图形（一）》。

**一、说教材**

本课是"图形与几何"领域的起始内容，编排在一年级上册，是学生第一次系统认识立体图形。教材安排了"认识图形、特征比较、分类、拼搭数数"几个板块，让学生通过观察和操作，认识长方体、正方体、圆柱、球四种常见的立体图形。本课是后续学习平面图形、图形的周长和面积的基础，也是发展学生空间观念的重要起点。可以说，这既是空间几何教学的"敲门砖"，又是培养学生数学眼光的第一扇窗，教材地位十分重要。教材注重从生活实物出发，强调在"看一看、摸一摸、滚一滚、拼一拼"的活动中积累图形经验，体现了"在做中学、在玩中悟"的编排理念。

**二、说学情**

一年级学生的生活经验中已经积累了丰富的积木、包装盒、皮球等物体形象，对立体图形有直观感受，但往往叫不出名称，更说不出特征。他们以具体形象思维为主，注意力容易分散，喜欢摸一摸、玩一玩。学生在之前的学习中已经认识了"圆"这一平面图形，容易把"圆"与"球""圆柱"混淆。因此，本课必须提供充足的实物，让学生在摸一摸、滚一滚、推一推中建立图形表象，在操作中认识特征。同时，一年级学生乐于表现、喜欢合作，小组操作活动既能满足他们的动手愿望，又能培养初步的合作意识。

**三、说教学目标**

根据课标和教材，我确定了三个目标：第一，认识长方体、正方体、圆柱、球四种立体图形，能说出名称，辨认实物、图片和模型；第二，通过看一看、摸一摸、滚一滚、推一推，了解它们的基本特征，能用自己的话说出它们的样子；第三，能根据特征给实物分类，能正确数出小正方体的个数，体会立体图形在生活中的广泛应用。

**四、说重难点**

本课重点是辨认四种立体图形并掌握基本特征。难点是区分长方体与正方体，理解圆柱与球滚动方式的不同。之所以这样确定，是因为一年级学生的比较和概括能力较弱，长方体与正方体都有 6 个平平的面，学生不易分辨"面是否一样大"；而圆柱"站着不滚、躺下才滚"的特点与生活直觉有冲突，必须通过实验来突破。

**五、说教法学法**

本课主要采用实物观察法、操作体验法、分类游戏法和小组合作法。教师提供丰富的实物与模型，创设"摸一摸、滚一滚、分一分、数一数、拼一拼"的活动链；学生通过多种感官参与，在玩中学、做中悟。整个教学坚持以活动为载体，让图形特征在学生的亲身体验中自然建构。同时用"图形盲袋""夺红旗分类"等游戏调节课堂节奏，让一年级学生在愉快的心境中保持专注。

**六、说教学过程**

我设计了五个教学环节。第一个环节是情境导入，约 4 分钟，用积木机器人引出四种图形，出示牙膏盒、魔方、易拉罐、皮球等生活实物，激发学生认识图形的兴趣。第二个环节是摸一摸认一认，约 12 分钟，学生通过触摸、观察认识长方体、正方体、圆柱、球的特征，用语言描述，再闭眼比划巩固表象。第三个环节是滚一滚分一分，约 10 分钟，在滚动实验中突破圆柱与球的滚动难点，并按不同标准分类。第四个环节是数一数拼一拼，约 10 分钟，学习"一层一层数、边数边做记号"的方法数小正方体，突破漏数被挡方块这一难点，再让学生自由拼搭并介绍作品，巩固特征、发展空间观念。第五个环节是游戏与总结，约 4 分钟，玩"图形盲袋"游戏巩固特征，布置"在家找图形"的实践任务。

**七、说板书设计**

我的板书把四种图形的名称与特征一一对应排列，中间贴上实物图片，下方总结"会滚与不会滚"的分类结果。板书图文并茂、直观清晰，既是学生认识图形的浓缩，也是课后复习和辨别图形的依据。学生在描述图形时，可以看着板书上的特征词说出"哪样物体长得像什么、有什么特点"，实现"看着板书说图形、看着板书找规律"。

**八、说反思与效果预测**

本课最大的特点是充分运用实物和操作，让学生在多种感官参与中认识图形，符合一年级学生的认知规律。需要反思的是，操作活动容易流于"玩"而忽视"思"，教师要善于在操作后追问"为什么"，把活动引向特征的理解。同时，四种图形的特征语言要逐步规范，鼓励学生用"平平的、弯弯的、圆滚滚"等词语准确描述，让模糊的触觉体验转化为清晰的语言表达，为后续学习平面图形打好基础。效果预测上，绝大多数学生能正确辨认四种立体图形，能说出基本特征，大部分学生能按标准分类，部分学生在数小正方体上还需要继续练习。我会在后续练习中通过"分层数一数"逐步提高难度，帮助学生在"做记号、分层数"中形成稳定的方法，让空间观念在持续练习中不断生长。对于易混图形，课后我会用配对、盲袋等游戏帮助学生反复巩固，让每个孩子都能带着兴趣走进图形世界。我还会建议家长在家和孩子玩积木时多问一句"这是什么图形、能不能滚"，把数学悄悄带进日常生活，让课堂学习与生活经验相互滋养。

我的说课到此结束，恳请各位老师批评指正，谢谢大家！`},"小学|一年级|数学|11-20 各数的认识":{plan:`**教学基本信息**

课题：11-20 各数的认识
教材版本：人教版一年级上册第六单元
年级：一年级
课型：数的认识新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学一年级学生

**教学目标**

1. 会数 11-20 各数，能正确数出数量在 11 到 20 之间的物体的个数，初步建立数感，掌握 11-20 各数的顺序。
2. 借助小棒和计数器理解 11-20 各数的组成，知道十几都是由 1 个十和几个一组成的，初步感受"满十进一"的十进制思想，发展数感与抽象概括能力。
3. 认识个位和十位，能正确读、写 11-20 各数，会比较两个数的大小，会口算"10 加几、十几加几及相应的减法"，能解决简单的实际问题。

**教学重难点**

重点：11-20 各数的读法、写法及数的组成。
难点：理解数位的含义，建立"1 个十"的概念，体会"满十进一"。

**教学准备**

每人 20 根小棒、橡皮筋、计数器、数字卡片、数位表、多媒体课件、任务单。

**教学过程**

**环节一 情境导入，数出大数（约 4 分钟）**

教师活动：
（课件出示一盒铅笔，铅笔一支支数出来）
师：小朋友们，老师买了一盒铅笔，一共有多少支？一支一支地数一数。
生：（数）1、2、3……12，是 12 支。
师：一盒彩笔有 18 支，操场一排座位有 20 个。这些数比我们学过的 10 大，今天我们就要认识 11 到 20 各数。板书课题：11-20 各数的认识。
生：（齐读课题）
师：数 11 到 20，谁会数？
生：11、12、13、14、15、16、17、18、19、20。
学生活动：数铅笔，齐数 11-20 各数，齐读课题。
设计意图：用生活中"比 10 多"的实物导入，让学生感受 11-20 各数就在身边，激发学习需求；通过顺数 11-20，先整体感知这些数，再进入深入探究。

**环节二 摆一摆，理解数的组成（约 12 分钟）**

教师活动：
1. 捆一捆，认识"十"
师：请数出 11 根小棒。怎样摆，才能让别人一眼就看出是 11 根？
生：（尝试摆放）
师：有办法了！先数出 10 根，用橡皮筋捆成一捆。这一捆就表示 1 个十。剩下的 1 根表示 1 个一。
生：（动手捆扎）
师：为什么 10 根要捆成一捆？因为 10 个一是 1 个十，这就是"满十进一"。
2. 摆一摆，说组成
师：1 个十和 1 个一合起来是 11。请摆出 13 根小棒，说说它的组成。
生：1 捆加 3 根，是 1 个十和 3 个一，合起来是 13。
师：摆 19 呢？20 呢？
生：19 是 1 个十和 9 个一；20 是 2 捆，就是 2 个十。
师：观察这些数，十几的数都是怎么组成的？
生：都是由 1 个十和几个一组成的，20 是 2 个十。
学生活动：捆小棒、摆小棒、说组成，在操作中发现十几的组成规律。
设计意图：让学生亲历"10 根捆成一捆"的操作，真正理解"10 个一是 1 个十"的十进制思想；在摆一摆、说一说中自主发现"十几就是 1 个十和几个一"，建立数的组成表象。

**环节三 拨一拨，认识数位（约 10 分钟）**

教师活动：
1. 认识计数器
师：拿出计数器，从右边起，第一位叫什么？第二位叫什么？
生：第一位是个位，第二位是十位。
师：个位上的 1 颗珠子表示 1 个一，十位上的 1 颗珠子表示 1 个十。同样是 1 颗珠子，放的位置不同，表示的数就不同。
2. 拨一拨，写一写
师：请拨出 14。十位拨几颗？个位拨几颗？
生：十位拨 1 颗表示 1 个十，个位拨 4 颗表示 4 个一。
师：写作 14，读作十四。写数时从高位写起，十位上有几个十就在十位写几，个位上有几个一就在个位写几。拨出 20，个位一颗珠子也没有，怎么办？
生：个位写 0 占位。
师：对！20 读作二十，个位上的 0 不能丢。特别提醒：11、12、13 要读成十一、十二、十三，不能读成一十一、一十二。
生：（在数位表上写数、读数，互相检查）
3. 念儿歌记数位
师：跟老师念：个位十位要分清，写数先从十位起，个位没有写 0 占。
生：（拍手齐念）
学生活动：拨计数器、在数位表上写数读数、念数位儿歌。
设计意图：借助计数器直观建立"个位、十位"的概念，通过"位置不同、意义不同"的对比突破数位难点；用儿歌帮助学生记住"从高位写起、个位用 0 占位"的规则，纠正 11 读成"一十一"等错误。

**环节四 比一比，算一算（约 10 分钟）**

教师活动：
1. 比大小
师：15 和 14 谁大？你是怎么比的？
生：按顺序数，15 在 14 的后面，所以 15 大。
师：还有更快的办法吗？
生：都是十几，十位都是 1，就比个位，5 比 4 大，所以 15 大于 14。
师：真会想办法！16 和 20 比呢？
生：16 是十几，20 是 2 个十，16 小于 20。
师：13 和 17 比，谁大？说说理由。
生：都是十几，十位都是 1，比个位，3 比 7 小，所以 13 小于 17。
师：真会运用方法！请把 19、15、12、17 四张数字卡片按从小到大的顺序排一排。
生：（排列）12、15、17、19。
2. 算一算
师：1 个十和 5 个一合起来是 15，所以 10 加 5 等于几？
生：等于 15。
师：15 去掉 5 个一，还剩 1 个十，15 减 5 等于几？
生：等于 10。
师：15 去掉 1 个十，还剩 5 个一，15 减 10 等于几？
生：等于 5。
师：口算抢答：10 加 3、18 减 8、17 减 10、10 加 9。
生：（抢答，说组成）
学生活动：比较数的大小并说方法，口算 10 加几、十几减几并说算理。
设计意图：把比较大小与数的顺序、数位知识结合起来，教给学生"先比十位再比个位"的方法；通过"10 加几等于十几、十几减几等于 10、十几减 10 等于几"的口算，巩固组成理解，沟通数的组成与加减法的联系。

**环节五 游戏巩固，总结提升（约 4 分钟）**

教师活动：
师：我们来玩"猜数"游戏。老师心里想了一个数，它在 15 和 18 之间，你猜是几？
生：16！17！
师：对啦！还能更准确：比 16 大 1，是几？
生：17。
师：今天你有什么收获？
生：认识了 11 到 20，知道十几是 1 个十和几个一，还认识了十位和个位。
师：课后请用小棒摆一个你喜欢的十几的数，在计数器上拨一拨，再把它读给爸爸妈妈听。
学生活动：参与猜数游戏，回顾梳理收获，明确课后任务。
设计意图：猜数游戏巩固数的顺序和大小比较，让复习充满趣味；引导学生总结"数数、组成、数位"三大收获，把知识结构化，课后任务延续操作学习。

**板书设计**

11-20 各数的认识
11 12 13 14 15 16 17 18 19 20
（数字卡片按顺序排列，标出"后面的数比前面的数多 1"）
10 根捆一捆，10 个一是 1 个十（满十进一）
十位  个位
1     4（拨珠图：十位 1 颗、个位 4 颗，写作 14，读作十四）
10 加 5 等于 15    15 减 5 等于 10    15 减 10 等于 5

**教学反思要点**

1. "10 根捆一捆"的操作是本课灵魂，必须让每个学生亲手捆一捆，真正经历"满十进一"，而不能由教师代劳。
2. 写数时学生容易把数位写反，如把 14 写成 41，要借助计数器的拨珠过程，强调"先拨十位再拨个位、先写十位再写个位"。
3. 读数时反复纠正"一十一"等错误读法，通过"听写—核对—纠正"的小循环强化十几的特殊读法。
4. 20 的理解要突出"2 个十、个位写 0 占位"，防止学生误以为 20 是"1 个十和 10 个一"。
5. 口算"16 减 6"与"16 减 10"要对比着练，让学生分清减掉的是几个一还是几个十，巩固数位理解。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是人教版一年级上册第六单元的《11-20 各数的认识》。

**一、说教材**

本课是"数的认识"教学的重要组成部分，编排在学生认识了 0-10 各数之后。教材通过数一数、捆小棒、拨计数器等活动，帮助学生认识 11-20 各数，理解数的组成，认识数位，学会读写和比较大小。本单元是学生第一次接触"十"这个计数单位，是建立十进制数概念的关键一课，也是后续学习 20 以内进位加法、100 以内数的认识的重要基础。可以说，这是学生数概念发展的一个里程碑，教材地位十分突出。教材以"数数、组成、数位、比较、口算"为线索层层推进，特别设计了"10 根捆一捆"的操作，把抽象的"满十进一"直观化，充分体现了操作体验与数概念建构的深度融合。

**二、说学情**

一年级学生已经会数 1-10，能读写 10 以内的数，但对 11-20 这样的大数往往只会唱数，不理解其组成，更不知道"满十进一"的道理。他们以具体形象思维为主，喜欢动手操作，对"捆一捆、拨一拨"有浓厚的兴趣。学生常见的错误有：把 14 写成 41，把 11 读成"一十一"，以为 20 是 1 个十和 10 个一。因此，本课必须借助小棒、计数器等学具，让学生在操作中建立"十"的概念。同时，学生的数感差异较大，有的已能熟练数到 100，有的还停留在唱数阶段，教学时要分层设计活动，让不同起点的孩子都能在原有基础上获得发展。教学中还要多创造"摆一摆、再说一说"的机会，让每个孩子都有表达数组成、说清数位的机会。

**三、说教学目标**

根据课标和教材，我确定了三个目标：第一，会数 11-20 各数，掌握它们的顺序，能数出数量在 11 到 20 之间的物体的个数；第二，借助小棒和计数器理解数的组成，知道十几由 1 个十和几个一组成，初步感受"满十进一"；第三，认识个位和十位，能正确读写 11-20，会比较大小，会口算"10 加几、十几加几及相应的减法"。

**四、说重难点**

本课重点是 11-20 各数的读法、写法及数的组成。难点是理解数位的含义，建立"1 个十"的概念。之所以这样确定，是因为"1 个十"是一个抽象的概念，学生对"10 个一"可以变成"1 个十"缺乏直观经验，这一跨越需要借助捆小棒、拨计数器等操作来完成，是学生数概念发展的关键点。

**五、说教法学法**

本课主要采用操作探究法、数形结合法和游戏练习法。教师通过"捆一捆、拨一拨、写一写、比一比"的活动链，引导学生层层深入；学生通过动手操作，把抽象的数转化为具体的形象，在"做中学、学中思"。同时用数位儿歌帮助记忆，用猜数游戏巩固练习，让课堂充满趣味。

**六、说教学过程**

我设计了五个教学环节。第一个环节是情境导入，约 4 分钟，用数铅笔引出 11-20，整体感知数的顺序。第二个环节是摆一摆理解组成，约 12 分钟，学生亲手把 10 根小棒捆成一捆，经历"满十进一"，自主发现"十几由 1 个十和几个一组成"。第三个环节是拨一拨认识数位，约 10 分钟，借助计数器认识个位和十位，学会读写，念数位儿歌。第四个环节是比一比算一算，约 10 分钟，先按顺序数、再比较大小，学习"先比十位再比个位"的方法，随后口算"10 加几、十几减几、十几减十"，在口算中说组成、巩固数位。第五个环节是游戏与总结，约 4 分钟，通过猜数游戏巩固顺序，总结收获，布置课后操作任务，让课堂在趣味与回味中结束。

**七、说板书设计**

我的板书以一排数字卡片 11 到 20 为主干，突出数序；下方呈现"10 根捆一捆、10 个一是 1 个十"，中间用计数器拨珠图直观展示个位与十位，右侧列出口算算式。板书直观形象、重点突出，把"数、组成、数位、计算"串成一条清晰的线，便于学生课后复习。尤其是计数器拨珠图，用"十位 1 颗珠子、个位 4 颗珠子"的图式，一眼就能看出 14 为什么读作十四、写作 14，把数位这个抽象概念变得看得见。

**八、说反思与效果预测**

本课最大的特点是让学生在操作中理解数概念，捆小棒、拨计数器贯穿始终，符合一年级学生的认知特点。需要反思的是，操作环节要控制节奏，防止学生只顾玩小棒而忽略思考，教师要善于用问题把操作引向"十"的概念的建构。同时，20 的组成与"个位写 0 占位"要作为重点反复强调，防止学生漏写 0 或把 20 误认为是 1 个十和 10 个一。效果预测上，绝大多数学生能熟练数出 11-20，能借助小棒和计数器说出数的组成，大部分学生能正确读写并比较大小。对于数位易混的学生，课后我会用计数器一对一拨珠辅导，让每个孩子都真正理解"满十进一"。我还会建议家长让孩子帮家里数一数鸡蛋、铅笔等物品，在真实数数中巩固 11-20 的认识，把数感的培养延伸到课堂之外。

我的说课到此结束，恳请各位老师批评指正，谢谢大家！`},"小学|二年级|数学|100 以内的加减法（进位/退位）":{plan:`**教学基本信息**

课题：100 以内的加减法（进位加法、退位减法）
教材版本：人教版二年级上册第二单元
年级：二年级
课型：数与计算新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**

1. 经历用小棒、计数器操作的过程，理解两位数加两位数进位加法中"个位满十向十位进一"的算理，掌握进位加法的竖式计算方法，发展运算能力。
2. 理解两位数减两位数退位减法中"个位不够减，从十位退一当十"的算理，掌握退位减法的竖式计算方法，会正确点退位点、规范书写。
3. 在对比中弄清进位加法与退位减法的联系和区别，养成先估算、再计算、后检验的好习惯，能解决购物等生活实际问题，感受数学与生活的联系。

**教学重难点**

重点：掌握两位数加减两位数的竖式写法，做到数位对齐、从个位算起、结果正确。
难点：理解"满十进一"与"退一当十"的算理，正确处理进位的 1 与退位的 1。

**教学准备**

小棒（每捆 10 根）、计数器、数位卡片、多媒体课件（购物情境、操作演示）、口算题卡、改错题卡。

**教学过程**

**环节一 情境导入，提出问题（约 4 分钟）**

教师活动：
（课件出示文具店情境：一个机器人玩具 36 元，一本图画书 47 元）
师：同学们，老师想买一个机器人玩具和一本图画书，一共要付多少钱？怎样列式？
生：36 加 47。
师：这和我们以前学的不进位加法有什么不同？
生：6 加 7 超过 10 了。
师：十位上还会超吗？个位满十了怎么办？这节课我们就来研究两位数加两位数的进位加法，还要学习它的"好朋友"退位减法。板书课题：100 以内的加减法。
学生活动：观察情境，列式 36 加 47，初步感受个位满十的问题。
设计意图：用购物情境自然引出"个位满十"的认知冲突，激发探究需求；把进位加法与退位减法放在同一节课对比学习，帮助学生建立整体结构。

**环节二 操作探究，学习进位加法（约 12 分钟）**

教师活动：
1. 摆小棒，明算理
师：36 怎么摆？47 怎么摆？
生：36 摆 3 捆零 6 根，47 摆 4 捆零 7 根。
师：请先算单根，6 根加 7 根等于多少根？
生：13 根。
师：13 根里的 10 根能捆成一捆吗？
生：能！10 根正好捆成新的一捆，还剩 3 根。
师：这一捆，就是"满十进一"进到十位去的 1。现在数一数一共几捆几根？
生：原来 3 捆加 4 捆是 7 捆，加上新捆的 1 捆，一共 8 捆零 3 根，是 83。
2. 写竖式，学算法
师：竖式怎么算？第一，相同数位对齐，个位对个位，十位对十位；第二，从个位加起，6 加 7 等于 13，个位写 3，向十位进 1；第三，十位相加别忘了加进位的 1，3 加 4 再加 1 等于 8。
生：（在练习本上写竖式，边写边说算理）
师：做一道试试：56 加 37。先估算一下，大约等于多少？
生：五十多加三十多，大约是九十。
师：竖式计算验证。
生：个位 6 加 7 等于 13，写 3 进 1；十位 5 加 3 加 1 等于 9，结果是 93。
学生活动：摆小棒理解算理，边说算理边写竖式，估算后再计算。
设计意图：先摆小棒后写竖式，让"满十进一"的算理看得见、摸得着；坚持"先估算、再计算、后检验"，培养良好的计算习惯；用 56 加 37 巩固进位加法的三步竖式。

**环节三 操作探究，学习退位减法（约 12 分钟）**

教师活动：
1. 摆小棒，明算理
师：老师带了 62 元，买这本书 27 元，还剩多少元？列式 62 减 27。先摆 62 根小棒：6 捆零 2 根。个位 2 根减 7 根，够减吗？
生：不够。
师：不够减怎么办？请把 1 捆拆开。
生：（动手拆捆）拆开 1 捆变成 10 根，和 2 根合起来是 12 根。
师：12 减 7 等于几？
生：等于 5。
师：十位原来有 6 捆，拆掉 1 捆还剩 5 捆，5 捆减 2 捆剩 3 捆。结果是？
生：35。
师：拆开的这一捆，就是"从十位退一当十"，退下来的 10 和个位上的 2 合成 12 再减。
2. 写竖式，学算法
师：竖式怎么写？个位 2 减 7 不够减，从十位退 1 当 10，和个位合起来是 12，12 减 7 等于 5，个位写 5。十位上要在 6 的上面点一个退位点，提醒十位已经少了 1。十位 6 退了 1 变成 5，5 减 2 等于 3。
生：（写竖式，点退位点，边算边说）
师：做 43 减 26，先估算再计算。
生：四十多减二十多，大约是二十。个位 3 减 6 不够，退位当 10，13 减 6 等于 7，十位 4 退 1 变 3，3 减 2 等于 1，结果是 17。
学生活动：拆捆操作理解算理，写退位减法竖式，掌握退位点的用法。
设计意图：用拆一捆的操作直观呈现"退一当十"的算理，突破"个位不够减"的难点；重点训练退位点的点法和十位先减 1 再算，防止学生"忘减 1"。

**环节四 对比练习，弄清区别（约 8 分钟）**

教师活动：
1. 对比两题
师：请计算 45 加 28 和 61 减 38，完成后说说进位加法与退位减法有什么相同点和不同点。
生：相同点是都要数位对齐、从个位算起；不同点是加法个位满十要进 1，减法个位不够要退 1。
师：小结口诀：个位满十，向十位进一；个位不够减，从十位退一当十。
2. 当小医生改错
师：小马虎做了两道题，请你当小医生，帮他找找病根。
第一题：56 加 37 算成 83。哪里错了？
生：十位忘加进位的 1，应该是 93。
第二题：43 减 26 算成 27。哪里错了？
生：十位退位后忘减 1，4 退 1 变 3，3 减 2 是 1，应该是 17。
师：还有一道：个位对齐了吗？看竖式 3 4 加 2，把 2 对在了十位，对吗？
生：不对，2 应该对在个位，数位要对齐。
学生活动：对比计算并总结异同，当"小医生"找出错因并改正。
设计意图：通过对比让学生把握进一与退一的本质区别，用口诀进行结构化总结；改错题聚焦"忘加进位 1、忘减退位 1、数位没对齐"三大典型错误，让纠错成为深化理解的过程。

**环节五 回顾总结，拓展提升（约 4 分钟）**

教师活动：
师：回顾这节课，进位加法有什么秘诀？
生：个位满十，向十位进一，十位别忘了加 1。
师：退位减法呢？
生：个位不够减，从十位退一当十，十位别忘了减 1。
师：计算时我们要做到哪三步？
生：先估算、再计算、后检验。
师：课后请完成口算题卡，再帮妈妈算一算：买 38 元的笔和 24 元的本子一共多少钱，付 100 元应找回多少钱，把竖式写出来。
学生活动：总结计算方法与习惯，明确课后实践任务。
设计意图：用口诀回顾核心算理，强化"估算、计算、检验"的好习惯；把计算放入真实购物情境，让学生在应用中巩固知识，体会数学的价值。

**板书设计**

100 以内的加减法
进位加法：36 加 47 等于 83
3 6
加 4 7
——
8 3
个位满十，向十位进一
退位减法：62 减 27 等于 35
6 2
减 2 7
——
3 5
个位不够减，从十位退一当十
（竖式中用红色标出进位的 1 与退位点）
相同数位对齐，从个位算起

**教学反思要点**

1. 必须让学生先操作小棒、计数器，再说算理、写竖式，让算理与算法同步建构，防止只记算法不懂算理。
2. 进位的 1 与退位的 1 是学生最容易出错的地方，要在竖式中用红笔标注，反复强调"十位加一减一"。
3. "先估算、再计算、后检验"要作为固定流程坚持训练，估算能快速发现明显错误，检验要落实到每一题。
4. 退位减法中十位是 0 的情况（如 40 减 18）要作专项练习，避免学生遇到"退 1 变 0"时无从下手。
5. 对比教学要让学生自己归纳进位与退位的异同，教师最后用口诀收口，让规律内化为学生的自觉意识。`,talk:`尊敬的各位评委、各位老师，大家好！今天我说课的内容是人教版二年级上册第二单元的《100 以内的加减法（进位加法和退位减法）》。

**一、说教材**

本课是"数与代数"领域的重要内容，编排在学生掌握了 100 以内不进位、不退位加减法之后，是计算教学从口算走向竖式的关键一步。教材通过摆小棒、拨计数器等活动，帮助学生理解"个位满十向十位进一"和"个位不够减从十位退一当十"的算理，掌握两位数加减两位数的竖式方法。本课是学生后续学习多位数加减法、笔算乘除法的基础，也是培养运算能力、形成严谨计算习惯的重要载体，教材地位十分关键。教材把进位加法与退位减法分开编排，又都从摆小棒、拨计数器入手，让算理在操作中自然生成，体现了"算理支撑算法、算法固化算理"的教学主线。

**二、说学情**

二年级学生已经会口算 20 以内加减法，会笔算不进位、不退位的两位数加减法，初步知道竖式要数位对齐、从个位算起。但学生对"满十进一""退一当十"缺乏算理层面的理解，常见的错误有：进位加法忘了加进位的 1，退位减法退位后十位忘了减 1，数位没有对齐等。学生喜欢动手操作，因此本课要借助小棒和计数器，让学生在操作中理解算理。同时，二年级学生已有一定的竖式书写经验，教学中既要规范其书写，也要引导他们用估算自我检查，把"认真计算、自觉检验"的好习惯逐步内化为自觉行为。

**三、说教学目标**

根据课标和教材，我确定了三个目标：第一，经历小棒、计数器操作的过程，理解进位加法"个位满十向十位进一"的算理，掌握竖式计算方法；第二，理解退位减法"个位不够减，从十位退一当十"的算理，掌握竖式方法，会点退位点、规范书写；第三，在对比中弄清进位与退位的联系和区别，养成先估算、再计算、后检验的好习惯，能解决购物等实际问题。

**四、说重难点**

本课重点是掌握两位数加减两位数的竖式写法，做到数位对齐、从个位算起、结果正确。难点是理解"满十进一"和"退一当十"的算理，正确处理进位的 1 与退位的 1。之所以这样确定，是因为"进一""退一"是抽象的数位转换，二年级学生的抽象思维还不成熟，必须依靠小棒捆捆拆拆的操作来支撑，才能从"会算"走向"懂理"。

**五、说教法学法**

本课主要采用操作演示法、对比分析法和分层练习法。教师通过摆小棒、拨计数器直观演示算理，再引导学生把操作过程"翻译"成竖式；通过进位加法与退位减法的对比，帮助学生把握本质区别；通过"小医生改错"等练习，聚焦易错点。学生的学习方式是摆一摆、说一说、算一算、比一比，在操作中说理，在对比中明理。

**六、说教学过程**

我设计了五个教学环节。第一个环节是情境导入，约 4 分钟，用购物情境引出"个位满十"的问题，激发探究需求。第二个环节是学习进位加法，约 12 分钟，学生摆小棒理解"满十进一"，边说算理边写竖式，用 56 加 37 巩固，并渗透先估算。第三个环节是学习退位减法，约 12 分钟，学生拆一捆经历"退一当十"，掌握退位点的点法，练习 43 减 26。第四个环节是对比练习，约 8 分钟，对比计算总结"进一"与"退一"的异同，再当"小医生"改错，聚焦"忘加进位 1、忘减退位 1、数位没对齐"三大典型错误，让纠错成为深化算理的过程。第五个环节是总结拓展，约 4 分钟，用口诀梳理"进一退一"的方法，布置购物实践作业，让计算在真实情境中巩固、提升。

**七、说板书设计**

我的板书把进位加法与退位减法并列呈现，左侧是 36 加 47 的竖式，标红进位的 1，右侧是 62 减 27 的竖式，标红退位点，下方点明"相同数位对齐、从个位算起"和两条算理口诀。板书对比鲜明、重点突出，既是算理的形象化，也是学生规范书写竖式的示范。两道竖式一"进"一"退"左右对照，学生一眼就能看出它们的相同点与不同点，把易混之处在对比中分清。

**八、说反思与效果预测**

本课最大的特点是把算理与算法融为一体，先操作、再竖式、后对比，让学生"知其然更知其所以然"。需要反思的是，一节课同时学习进位加法和退位减法容量较大，操作环节要紧凑高效，防止拖沓；对学困生来说，退位减法退位后十位忘减 1 的问题可能仍会反复，需要课后分层滚动训练。此外，竖式书写的规范性要从小处抓起，数位是否对齐、进位的 1 和退位点是否写清，都要在巡视中一一落实，让良好的书写习惯成为计算的保障。效果预测上，绝大多数学生能正确用竖式计算进位加法和退位减法，能说出算理，养成先估算后计算再检验的意识。对于基础薄弱的学生，课后坚持每天练 10 道口算，先易后难、滚动巩固，让每个孩子都能稳步过关。同时建议家长让孩子在家帮忙算算购物找零，多说说"满十进一""退一当十"的道理，把计算当成生活游戏，在真实运用中提升计算的准确率与熟练度。

我的说课到此结束，恳请各位老师批评指正，谢谢大家！`}},cs={"小学|二年级|数学|表内乘法（二）：7-9 的乘法口诀":{plan:`**教学基本信息**
课题：表内乘法（二）：7-9 的乘法口诀
教材版本：人教版小学数学二年级上册
年级：小学二年级
课型：新授课（数与代数领域）
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**
1. 借助七星瓢虫、一星期 7 天、螃蟹 8 条腿、九宫格等具体情境，理解 7、8、9 的乘法口诀的来源，能自主编制并熟记口诀，会用口诀正确求积。
2. 通过观察、比较、类推，发现 9 的乘法口诀中积的规律（积的各位数字相加都等于 9、积的十位比口诀中的几少 1），学会用"手指记忆法"帮助记忆，在找规律的过程中发展推理意识和数感。
3. 能把 1-9 的乘法口诀整理成完整的乘法口诀表，在编口诀、找规律、对口令、解决实际问题中体会口诀间的内在联系与数学规律之美，落实"运算能力""推理意识"两大核心素养。

**教学重难点**
教学重点：编制并熟记 7、8、9 的乘法口诀，能正确用口诀求积。
教学难点：发现并运用 9 的乘法口诀的规律；辨析 7×8、8×9、6×9 等积较大的易混口诀。

**教学准备**
教师准备：多媒体课件（七星瓢虫图、日历、螃蟹图、九宫格图）、口诀卡片、乘法口诀表海报、磁性小圆片。
学生准备：每人一张口诀填空卡、彩色铅笔、口诀卡片一套。

**教学过程**

**环节一 情境导入，激趣引新（约 5 分钟）**

【教师活动】
课件出示七星瓢虫图：一只瓢虫的背上有 7 颗星。教师提问引入：
师："同学们，今天老师请来了一位小客人。看，它是谁？"
生："七星瓢虫！它背上有好多小星星。"
师："数一数，一只瓢虫背上几颗星？"
生："7 颗！"
师："一只 7 颗，两只呢？三只呢？要是 7 只呢？"
生："两只 14 颗，三只 21 颗……"
师："求几个几是多少，可以用乘法。今天我们就来学习与 7、8、9 有关的乘法口诀。"
教师板书课题"7、8、9 的乘法口诀"。

【学生活动】
学生观察情境图，数星星，用已有的"求几个几是多少"的经验口头回答，在兴趣盎然中进入新课。

【设计意图】
以七星瓢虫这一学生熟悉的小动物引入，把抽象的口诀学习建立在直观的"几个几"上，唤醒乘法意义，为自主编口诀做好知识与心理准备。

**环节二 自主探究，编制 7、8 的乘法口诀（约 13 分钟）**

【教师活动】
（一）编制 7 的乘法口诀。课件出示日历：一星期有 7 天。
师："1 个星期有 7 天，用乘法怎样表示？"
生："1 乘 7 等于 7。"
师："2 个星期呢？"
生："2 乘 7 等于 14。"
师："请照这样的方法，把 3 个星期到 7 个星期各有多少天写下来，再根据乘法算式试着编口诀，写在口诀填空卡上。"
学生独立完成，教师请学生汇报，相机板书 7 的口诀：一七得七、二七十四、三七二十一、四七二十八、五七三十五、六七四十二、七七四十九。
师："观察这组口诀的积，你发现了什么规律？"
生："下一句比上一句多 7。"
师："哪几句容易记混？"
生："五七三十五和六七四十二容易混。"
师："可以这样想：五七是七个五，得三十五；再多一个七，就是四十二了。"
（二）编制 8 的乘法口诀。课件出示螃蟹图：1 只螃蟹 8 条腿。
师："1 只螃蟹几条腿？2 只呢？请同桌两人合作，1 只、2 只……一直数到 8 只，把 8 的乘法口诀编出来。"
学生同桌合作编制并汇报，教师相机板书：一八得八、二八十六、三八二十四、四八三十二、五八四十、六八四十八、七八五十六、八八六十四。
师："这组口诀的积依次增加几？哪句最好记？"
生："依次增加 8。五八四十最好记，是整十数。"
师："七八五十六和八八六十四只相差 8，特别注意别把 56 和 64 记反。"

【学生活动】
学生在日历和螃蟹图的启发下，先数几个几、再列乘法算式、最后编出口诀，经历完整的编制过程；同桌合作、互相检查，用"多一个 8"的方法验证口诀。

【设计意图】
从 2-6 口诀的学习经验出发，让学生自主迁移、独立编制口诀，体会口诀是乘法的"浓缩记录"；通过找规律、对比易混句，突破记忆难点，同时培养合作意识与初步的归纳能力。

**环节三 发现规律，巧记 9 的乘法口诀（约 10 分钟）**

【教师活动】
（一）编制 9 的口诀。课件出示九宫格图，一行 9 格。
师："一行小方格有 9 个，两行 18 个……你能像刚才一样，把 9 的乘法口诀编出来吗？"
学生独立填写口诀填空卡并汇报，教师板书 9 的口诀：一九得九、二九十八、三九二十七、四九三十六、五九四十五、六九五十四、七九六十三、八九七十二、九九八十一。
（二）引导发现规律。
师："仔细看 9 的口诀的积，藏着两个秘密。以四九三十六为例，3 加 6 等于几？"
生："等于 9。"
师："再看七九六十三，积的十位是几？和 7 有什么关系？"
生："十位是 6，正好是 7 减 1。"
师："太棒了！这就是第一个规律：几九的积，十位是几减 1；第二个规律：个位用 9 减十位就能得到。"
（三）教学"手指记忆法"。
师："双手摊开，从左到右给 10 根手指编号 1 到 10。算几乘 9，就弯起第几根手指。弯指左边剩几根，积的十位就是几；右边剩几根，个位就是几。"
教师示范 7 乘 9：弯起第 7 根手指，左边 6 根、右边 3 根，得到 63。
学生跟做：试 4 乘 9、8 乘 9，边弯手指边报积。

【学生活动】
学生自主编制 9 的口诀，观察积的规律并在小组里交流发现；跟着教师动手弯手指，用"手指记忆法"快速口算几乘 9，再互相当小老师考一考。

【设计意图】
把记忆口诀从"死记硬背"转向"发现规律"，让学生在观察比较中发现积的秘密，再用手指操作把抽象规律变成看得见、摸得着的动作，既发展推理意识，又降低记忆难度，让口诀学习有趣高效。

**环节四 分层练习，巩固应用（约 8 分钟）**

【教师活动】
（一）口诀大转盘（对口令）。教师随机出示口诀卡片：
师："四七？"
生："二十八。"
师："七八？"
生："五十六。"
师："八九？"
生："七十二。"
（二）口算比赛。课件逐题出示：7×6、8×5、9×4、6×9、8×7、9×9。
学生开火车口算，教师重点追问：
师："8×7 和 7×8 的积为什么一样？各用哪句口诀？"
生："都用七八五十六，交换两个乘数的位置，积不变。"
（三）易混口诀专项。
师："7×8 和 8×9 特别容易混，谁来支个招？"
生："7×8 想七八五十六，8×9 想八九七十二；56 加 16 等于 72。"
（四）解决实际问题。课件出示：学校运动会，每个班站 9 列，每列 6 人，一个班有多少人？
学生列式 9×6=54（人），并说出用的是"六九五十四"。

【学生活动】
学生通过对口令、开火车、做专项辨析和解决实际问题，熟记口诀并灵活运用，能在辨析中说出理由，完成从"会背"到"会用"的转化。

【设计意图】
练习由易到难、层次分明：先巩固记忆，再辨析易混口诀，最后用口诀解决实际问题，既落实运算能力，又让学生体会到口诀是解决生活中乘法问题的有力工具。

**环节五 回顾整理，全课总结（约 4 分钟）**

【教师活动】
师："今天你有哪些收获？"
生："学会了 7、8、9 的乘法口诀。""9 的口诀可以用手指来帮忙。""口诀的积是有规律的。"
师："1 到 9 的乘法口诀合起来一共有 45 句，课后请把口诀表贴在墙上，横着背、竖着背、拐弯背，争当'口诀小达人'。"
教师小结并布置分层作业：基础题背熟 7、8、9 三列口诀；提高题完成口诀填空卡并自查；拓展题回家和爸爸妈妈玩"你问我答"的口诀游戏。

【学生活动】
学生回顾本课所学，交流收获，明确课后练习要求，初步建立完整口诀表的整体意识。

【设计意图】
通过回顾梳理，把零散的口诀结构化，渗透 45 句口诀的完整框架，把课堂学习自然延伸到课外，保持学习兴趣。

**板书设计**
课题：7、8、9 的乘法口诀
7 的口诀（日历） 8 的口诀（螃蟹） 9 的口诀（九宫格）
一七得七 一八得八 一九得九
二七十四 二八十六 二九十八
三七二十一 三八二十四 三九二十七
…… …… ……
七七四十九 八八六十四 九九八十一
规律：积依次加 7 积依次加 8 十位、个位和为 9

**教学反思要点**
1. 本课以"情境引路、自主编口诀"为主线，学生对手诀来源理解到位，避免了死记硬背，但个别学生编口诀时数错"几个几"，要及时纠正。
2. 9 的口诀规律与手指记忆法有效降低了记忆难度，但要防止学生只顾好玩、忘记口诀本身，需把动作、规律、口诀三者一一对应。
3. 易混口诀 7×8、8×9、6×9 仍需后续专项训练，可坚持每节课前用"口诀大转盘"滚动复习。
4. 编口诀环节要充分放手，对基础薄弱的学生提供填空卡支架，保证人人参与、个个过关。
5. 时间分配上，手指记忆法演示要节奏明快，防止兴趣过浓挤占练习时间。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学二年级上册第六单元"表内乘法（二）"中 7、8、9 的乘法口诀。本单元是在学生学完 2-6 的乘法口诀之后安排的，是乘法口诀学习的收官单元，也是完整口诀表的最后一块拼图。7、8、9 的口诀是全表句数最多、积最大的部分，其中 9 的乘法口诀更是全表的顶点，学好它，学生就能完整掌握 1-9 的乘法口诀，为后续学习表内除法、多位数乘一位数打下坚实基础。教材把本单元分成 7 的口诀、8 的口诀、9 的口诀、解决问题和整理复习几部分，我今天的公开课选取的是编制口诀与发现规律的核心内容，突出"规律引领、方法优先"，把它定位为一节以推理意识和运算能力培养为指向的计算课。同时，本课还肩负着整合口诀表的重任，教材把 1-9 的乘法口诀汇总成 45 句的完整口诀表，引导学生横着背、竖着背、拐弯背，让零散的口诀形成整体。我将在课的尾声向学生呈现这一完整结构，帮助他们把新旧知识连成一片，为后续学习表内除法求商做好铺垫。

**二、说学情**
二年级学生已经能熟练记忆 2-6 的乘法口诀，会看图数"几个几"，具备了自主编口诀的初步经验，迁移类推的能力也在逐步形成。但他们仍以形象思维为主，面对 7、8、9 这些积较大的口诀，容易出现记混、漏句的现象，尤其是 7×8、8×9、6×9 这类积大又相近的口诀。同时，学生记口诀普遍停留在顺口溜式的机械背诵上，缺少发现规律、巧记口诀的方法意识。因此本课一方面要放手让学生迁移编口诀，另一方面要引导他们发现 9 的口诀中积的规律，教给记忆的"钥匙"。另外，二年级学生注意力集中的时间有限，课堂需要张弛有度，所以在教学设计中，我既安排安静的独立编制，又穿插热闹的对口令、手指操，让学生在动静结合中保持高涨的学习热情。

**三、说教学目标**
基于教材与学情，我确定三个目标。第一，借助七星瓢虫、日历、螃蟹等情境理解 7、8、9 口诀的来源，能自主编制并熟记口诀、用口诀求积，这是知识技能层面的目标。第二，通过观察比较发现 9 的口诀中积的规律，学会用规律和手指记忆法记口诀，这是过程与方法层面的目标，指向推理意识的发展。第三，把口诀用于解决实际问题，体会口诀与生活的联系，培养运算能力，这是核心素养落点。三个目标由低到高、层次清晰。

**四、说教学重难点**
本课的重点是编制并熟记 7、8、9 的乘法口诀、正确用口诀求积；难点是发现并运用 9 的口诀的规律，以及辨析易混口诀。之所以把规律发现定为难点，是因为二年级学生的归纳概括能力有限，需要教师精心设问、层层引导；易混口诀积大、相似度高，也需要专门的对比训练来突破。

**五、说教法学法**
教法上，我主要采用情境创设法、迁移类推法和操作体验法，用七星瓢虫、螃蟹、九宫格等情境承载口诀，让学生顺着 2-6 口诀的经验自己把口诀"长"出来。学法上，我引导学生经历"数一数、列一列、编一编、找一找"的完整过程，同桌合作、动手操作、交流发现，真正做到以学定教，让学生站在课堂的中央。同时，我还准备了口诀卡片和填空卡，让每个学生都能在动手、动口中全程参与，照顾到不同基础的学生。

**六、说教学过程**
我设计了五个环节，环环相扣。第一环节约五分钟，用七星瓢虫情境导入，数星星引出"几个几"，唤醒乘法意义。第二环节约十三分钟，先借助日历独立编制 7 的口诀，再借助螃蟹图同桌合作编 8 的口诀，边编边找"积依次增加几"的规律。第三环节约十分钟，是本课的高潮，学生先编出 9 的口诀，再在教师引导下发现"积的各位数字相加等于 9""十位是几减 1"两大规律，最后学习"手指记忆法"，让规律看得见、摸得着。第四环节约八分钟，通过口诀大转盘、开火车口算、易混口诀专项和解决运动会实际问题，实现从会背到会用的转化。第五环节约四分钟，总结收获、整理 45 句口诀表、布置分层作业。五个环节总用时 40 分钟，探究充分、练习扎实。其中新授与规律探究占时最多，确保学生把口诀真正学透，练习与总结则保证反馈及时、收束有力。

**七、说板书设计**
我的板书分三栏排列 7、8、9 的乘法口诀，分别对应日历、螃蟹、九宫格三种情境，下方概括三条规律：积依次加 7、积依次加 8、十位个位和为 9。这样的板书既呈现口诀本身，又揭示口诀背后的规律，正对学生的记忆起提示作用，便于整体把握。

**八、说教学反思与效果预测**
这节课我力求做到三点：情境真实、规律凸显、方法多样。预计大多数学生能当堂背熟 7、8、9 的口诀，会用规律和手指法快速求积。当然，课堂上也会有个别学生编口诀时跟不上，或者玩手指法兴起而忘了口诀本体，我会用"动作对应口诀"的方式及时纠偏。教学是一门遗憾的艺术，我会在试教后根据学生状态微调环节节奏，让每个孩子都在口诀学习中找到自信和乐趣。此外，我还会关注课堂上的生成资源，比如学生提出的独特记忆方法，及时肯定并推广，让课堂因学生的智慧而更加精彩。我的说课完毕，恳请各位老师批评指正，谢谢大家！`},"小学|二年级|数学|表内除法":{plan:`**教学基本信息**
课题：表内除法
教材版本：人教版小学数学二年级下册
年级：小学二年级
课型：新授课（数与代数领域）
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**
1. 在分一分、摆一摆的操作活动中理解"平均分"的含义，知道每份分得同样多才是平均分；认识除号和除法算式，知道被除数、除数、商各部分的名称，会正确地读写除法算式。
2. 经历由"平均分的过程"抽象出"除法算式"、再由"乘法口诀"求出商的过程，掌握"一找除数、二想口诀、三得商"的求商方法，能比较熟练地口算表内除法，理解除法与乘法的互逆关系。
3. 能运用除法解决"把总数平均分成几份求每份是多少"和"求一个数里面有几个几"的实际问题，在操作、列式、说理中发展运算能力和模型意识，感受除法在生活中的广泛应用。

**教学重难点**
教学重点：理解除法的意义，掌握用乘法口诀求商的方法。
教学难点：分清两种平均分的情境，理解除法是乘法的逆运算，建立除法与乘法的联系。

**教学准备**
教师准备：多媒体课件、糖果卡片、磁性小圆片、除法口诀卡片。
学生准备：每组一盒 12 个小圆片、20 根小棒。

**教学过程**

**环节一 情境导入，引发冲突（约 5 分钟）**

【教师活动】
课件出示情境：6 颗糖果要分给 3 个小朋友。
师："老师带来 6 颗糖果，想分给 3 个小朋友，可以怎么分？"
生："每人 1 颗，轮流分。""也可以一人 4 颗、一人 1 颗、一人 1 颗。"
师："老师看到两种分法：一种每人分 2 颗，一样多；一种分得有多有少。你赞成哪一种？为什么？"
生："每人 2 颗最好，因为每份一样多，才公平。"
师："像这样，每份分得同样多，就叫平均分。"
教师板书课题"表内除法"，点明平均分是除法的基础。

【学生活动】
学生观察分糖果情境，比较不同分法，用自己的话说说哪种分法公平、为什么，初步体会"每份同样多"。

【设计意图】
从分糖果的现实冲突入手，让学生在对比中自然理解"每份分得同样多"这一平均分的本质，激发学习兴趣，为引入除法埋下伏笔。

**环节二 动手操作，认识平均分与除法（约 13 分钟）**

【教师活动】
（一）动手分一分。
师："请拿出 12 个小圆片，把这 12 个圆片平均分成 3 份，每份几个？先自己分一分。"
学生操作后汇报，教师请一名学生上台演示：一份一份地分，每份先放 1 个，再放 1 个……分完正好每份 4 个。
师："平均分成 3 份，每份 4 个。分完要检查什么？"
生："检查每份是不是一样多。"
（二）认识除法算式。
师："把 12 平均分成 3 份，求每份是多少，可以用除法计算，写成算式 12÷3=4。"
教师介绍除号"÷"、读法"12 除以 3 等于 4"，说明各部分名称：12 是被除数，3 是除数，4 是商。
师："想一想，算式里的 12、3、4 在分的过程中各表示什么？"
生："12 是要分的总数，3 是平均分的份数，4 是每份的个数。"
（三）换一种分法。
师："还是这 12 个圆片，如果每 4 个一份，能分成几份？摆一摆。"
学生操作得出分成 3 份。
师："这也用除法计算：12÷4=3。这里的 4 和 3 又分别表示什么？"
生："4 是每份 4 个，3 是能分成 3 份。"
师："同样是 12 个圆片，一个求每份几个，一个求分成几份，但都是平均分，都用除法计算。"

【学生活动】
学生动手摆小圆片，经历"先分再数、边分边说"的过程；在教师引导下认识除号、读法及各部分名称；用两种不同分法列出除法算式，并说出每个数的含义。

【设计意图】
让学生在手、脑并用中把"平均分的过程"与"除法算式"一一对应，既理解除法的意义，又自然渗透两种平均分情境；通过说每个数的含义，防止只记符号、不理解本质。

**环节三 用口诀求商，体会互逆关系（约 10 分钟）**

【教师活动】
（一）引出求商问题。
师："24 个圆片，平均分成 6 份，每份几个？还像刚才那样一个一个地分，行吗？"
生："太慢了。"
师："有没有又快又准的方法？可以想想乘法口诀。"
（二）教学求商方法。
师："24÷6，除数是 6。想一想，几和 6 相乘得 24？"
生："四六二十四！"
师："对，所以商是 4。这就是求商的秘诀：一找除数，二想口诀，三得商。"
教师板书：24÷6=4，想"四六二十四"。
（三）体会互逆关系。
师："一句'四六二十四'能写出几个算式？"
生："乘法算式 4×6=24，除法算式 24÷4=6 和 24÷6=4。"
师："除法就是乘法的逆运算。算完 32÷8 后，怎样检验？"
生："想四八三十二，商是 4；再用 4×8=32 验算，就对了。"
（四）练一练。课件出示：18÷6、20÷5、32÷8、45÷9，学生口答并说想的口诀。

【学生活动】
学生在比较中感受"一个一个分"与"用口诀求商"的速度差异，主动调用乘法口诀，完整说出求商过程；通过一句口诀对应一道乘法算式和两道除法算式，初步建立乘除联系。

【设计意图】
以"分得太慢"制造需求，让学生体会用口诀求商的必要性；通过一句口诀编出多个算式，直观呈现乘除互逆关系，并用乘法检验除法，落实运算能力。

**环节四 分层练习，解决问题（约 8 分钟）**

【教师活动】
（一）对口令求商。教师出示除法卡片：15÷3、28÷4、36÷9、40÷5，学生抢答并说出想的口诀。
（二）辨一辨。课件出示两道题：把 10 个苹果平均分成 5 份，每份几个？10 个苹果每 2 个装一袋，能装几袋？
师："这两题都用除法，为什么算式不一样？"
生："第一题求每份几个，列式 10÷5=2；第二题求能装几袋，列式 10÷2=5。"
（三）解决实际问题。课件出示：二（1）班 24 名同学做广播操，每排站 6 人，可以站几排？
学生列式 24÷6=4（排），并完整说出想的口诀。

【学生活动】
学生通过抢答、辨析、列式解决问题，能区分两种平均分情境，正确确定被除数与除数的位置，并用口诀检验结果。

【设计意图】
练习紧扣易错点：先巩固求商，再通过对比题突破"两种平均分"的难点，最后回归生活情境，让学生在解决问题中深化对除法意义的理解。

**环节五 回顾整理，全课总结（约 4 分钟）**

【教师活动】
师："这节课你学会了什么？"
生："认识了平均分，知道每份同样多。""会用除法算式表示平均分。""会用乘法口诀求商。"
师："分东西时每份同样多就是平均分；平均分可以用除法算式表示；求商时想乘法口诀。"
教师布置分层作业：基础题完成口算练习 20 道；提高题把 12 根小棒平均分，写出不同的除法算式；拓展题回家帮妈妈把水果平均分给家人，并说出除法算式。

【学生活动】
学生回顾交流，完善认知结构，明确作业要求，把除法学习延伸到生活。

【设计意图】
通过梳理让知识结构化，分层作业照顾不同层次的学生，引导学生在生活中继续运用除法，巩固平均分的意义。

**板书设计**
课题：表内除法
平均分：每份同样多
12÷3=4 12÷4=3
↓ ↓ ↓
被除数 除数 商
用口诀求商：24÷6=4 想"四六二十四"
一找除数、二想口诀、三得商

**教学反思要点**
1. 操作活动是本课的生命线，要保证学生人人动手，把"分的过程"和"除法算式"对应起来，防止符号与意义脱节。
2. 两种平均分情境是本课的难点，应通过对比辨析题强化，让学生说清"求每份"与"求份数"的区别。
3. 用口诀求商要让学生先说口诀再写商，规范"一找除数、二想口诀、三得商"的步骤，避免跳步出错。
4. 关注基础薄弱的学生，给足操作时间；学有余力的学生可尝试自编除法应用题并互相解答。
5. 课堂时间偏紧，操作与练习要统筹安排，可把"换一种分法"环节做精做透，不必面面俱到。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学二年级下册第二单元"表内除法（一）"中的表内除法。这部分内容安排在表内乘法之后，是学生第一次系统接触除法。除法是乘法的逆运算，除法意义是小学数学计算体系中的重要基石，它不仅是后续学习有余数除法、多位数除法的起点，也是理解分数、比例等知识的基础。本课承担着认识平均分、认识除法算式、学会用口诀求商、能解决两类实际问题等多项任务，内容多、起点低，是二年级计算教学的重点内容。我把本课定位为"概念建构加方法习得"的综合课，力求让学生既理解"什么是除法"，又会"怎样算除法"。全单元按"平均分、除法算式、用口诀求商、解决问题"的顺序展开，我今天的公开课把前三块内容整合呈现，让学生在完整链条中建构除法概念，避免知识的碎片化。

**二、说学情**
二年级学生已经熟记 1-9 的乘法口诀，会计算表内乘法，这为用口诀求商提供了直接的知识支持。生活中学生分糖果、分玩具时，其实已经有了"分得一样多"的朴素经验，只是没有抽象成数学概念。但是，他们分东西时往往比较随意，缺乏"每份同样多"的自觉意识；看到除法算式也只是眼熟，不明白被除数、除数、商在分的过程中各代表什么。因此，本课必须借助充分的动手操作，让学生从动作中"悟"出平均分和除法的含义，再顺利迁移到用口诀求商。此外，学生对"分得一样多"虽有生活直觉，但要把这种直觉转变成数学上的"平均分"，还需要在操作中反复确认；对除号、被除数、除数、商这些名称也是第一次接触，需要结合分物的过程逐一对号入座。

**三、说教学目标**
我确定了三个目标。第一，通过操作理解平均分的含义，认识除号、除法算式和各部分名称，会读写除法算式，这是知识与技能层面的目标。第二，经历"分一分、列一列、算一算"的探究过程，掌握用乘法口诀求商的方法，理解乘除互逆关系，这是过程与方法层面的目标。第三，能用除法解决两类实际问题，感受除法与生活的联系，发展运算能力与模型意识，这是核心素养的落点。三个目标层层递进、相互支撑。

**四、说教学重难点**
本课重点是理解除法意义、会用乘法口诀求商；难点是分清两种平均分情境，理解除法与乘法的互逆关系。把互逆关系定为难点，是因为学生习惯把乘法和除法看成两件独立的事，难以发现"一句口诀对应一道乘法算式、两道除法算式"的内在联系，需要借助具体的算式反复体会，才能建立起乘除互通的观念。

**五、说教法学法**
教法上，我采用操作体验法、情境创设法、口诀迁移法，让学生在摆小圆片的具体活动中建立概念，在分糖果的情境中感受平均分的公平性，在"分得太慢"的矛盾中引出口诀求商。学法上，我引导学生动手分、动口说、动脑想，先操作再抽象，同桌合作、互相检查，完整经历"平均分—除法算式—口诀求商"的链条，实现由直观到抽象的跨越。此外，我十分重视学生说理的训练，每一道除法题都要求学生说出"为什么用除法""算式中每个数表示什么"，把计算教学与思维训练结合起来。

**六、说教学过程**
我的教学过程分五个环节。第一环节约五分钟，从"6 颗糖果分给 3 个小朋友"的现实冲突引入，让学生在对比公平与不公平的分法中自然理解平均分。第二环节约十三分钟，这是核心环节，学生动手把 12 个圆片平均分成 3 份，认识除法算式及各部分名称，再换一种分法写算式，在两种分法中体会除法的两种含义。第三环节约十分钟，以"分得太慢"制造认知冲突，引出用乘法口诀求商，通过"一找除数、二想口诀、三得商"掌握方法，并用一句口诀把乘法和除法联系起来。第四环节约八分钟，通过对口令、辨一辨、解决做操站排等实际问题，巩固求商、突破难点。第五环节约四分钟，总结提升、布置分层作业。全课 40 分钟，操作、探究、练习时间分布合理。

**七、说板书设计**
板书以"平均分：每份同样多"为核心，左侧呈现 12÷3=4 并标注被除数、除数、商，右侧呈现 24÷6=4 和求商口诀"四六二十四"，下方写清三步方法。整个板书简洁直观，把分物过程、除法算式、各部分名称、求商口诀连成一条清晰的线，便于学生整体把握知识结构。

**八、说教学反思与效果预测**
预计通过本课，学生能正确描述平均分并会列除法算式，多数学生能熟练用口诀求商。但两种平均分情境仍会有部分学生混淆，我会在练习中反复用对比题强化；个别学生可能把被除数与除数的位置写反，我会引导他们回到分物的情境中检查每个数表示什么，而不是简单地订正答案。本课我坚持"操作引路、说理贯通"，让每个孩子既会算又懂理。当然教学总有遗憾，我会根据课堂生成不断调整，让除法在孩子们心中生根发芽。同时，我也会把课后反馈中提到的常见错误，如被除数与除数位置写反、口诀记错等，设计成改错练习在巩固环节滚动出现，让学生的错误成为最有价值的学习材料。我的说课完毕，恳请各位老师批评指正，谢谢大家！`},"小学|二年级|数学|有余数的除法":{plan:`**教学基本信息**
课题：有余数的除法
教材版本：人教版小学数学二年级下册
年级：小学二年级
课型：新授课（数与代数领域）
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**
1. 通过分草莓、分小棒等操作活动理解余数的意义，知道余数是平均分后剩下的、不够再分一份的数；会正确地读和写有余数的除法算式。
2. 经历"分一分、列算式、写竖式"的过程，掌握有余数除法竖式"一商、二乘、三减、四比"的书写格式，理解"余数一定比除数小"的道理，并能据此判断计算是否正确。
3. 能运用有余数的除法解决简单的实际问题，初步体会"进一法"和"去尾法"的不同选择，在操作、辨析与说理中发展运算能力和推理意识。

**教学重难点**
教学重点：理解余数的意义，掌握有余数除法的竖式计算方法。
教学难点：理解"余数一定比除数小"；根据实际问题合理选择"进一"或"去尾"。

**教学准备**
教师准备：多媒体课件、草莓卡片、磁性小棒、实物投影。
学生准备：每人 20 根小棒、10 个圆片。

**教学过程**

**环节一 情境导入，制造冲突（约 5 分钟）**

【教师活动】
课件出示：10 个草莓，每 2 个装一盘。
师："请小朋友帮老师分草莓。10 个草莓，每 2 个装一盘，能装几盘？"
生："5 盘，正好分完。"
课件再出示：11 个草莓，每 2 个装一盘。
师："如果是 11 个草莓呢？你能像刚才一样装一装吗？请用圆片代替草莓摆一摆。"
学生操作后汇报：装了 5 盘，还剩 1 个。
师："剩下的 1 个还能再装一盘吗？"
生："不能，不够 2 个了。"
师："分到最后剩下了，今天我们就来研究这种'有余数'的除法。"
教师板书课题"有余数的除法"。

【学生活动】
学生动手摆圆片分草莓，在"正好分完"与"分不完"的对比中产生认知冲突，初步感受余数的产生。

【设计意图】
用"能装几盘"的连续情境制造分不完的矛盾，让学生亲眼看到"剩下不够再分一份"的过程，为余数概念的形成提供直观支撑。

**环节二 操作感知，认识余数与算式（约 12 分钟）**

【教师活动】
（一）再次操作。
师："请把 7 个圆片，每 2 个一份，摆一摆，能摆几份？还剩几个？"
学生操作后汇报：摆 3 份，还剩 1 个。
（二）写算式。
师："刚才分完正好能直接用 7÷2 表示吗？"
生："不能，因为还剩 1 个。"
师："除法的结果可以写成'商……余数'：7÷2=3……1，读作 7 除以 2 等于 3 余 1。"
教师示范写法，说明"……"表示余数，写在商的后面。
师："算式里的 1 表示什么？"
生："表示分完后剩下的 1 个。"
（三）对比强化。
师："6 个圆片，每 2 个一份呢？"
生："6÷2=3，正好分完，没有余数。"
师："有余数和没有余数，区别在哪里？"
生："平均分后剩下的不够再分一份时，就有余数；正好分完就没有余数。"

【学生活动】
学生在两次操作中体会"分不完"的情境，学会写、读有余数除法算式，能说出余数表示的意义，并比较有余数与没有余数两种情况。 师："不管是正好分完还是分不完，都要先把能分的份数分完，余下的才是余数。"

【设计意图】
通过"先操作、后抽象"帮助学生建立余数的直观表象，把"剩下的 1 个"与算式中的"余 1"一一对应，理解余数就是平均分后剩下的、不够再分一份的数。

**环节三 竖式计算，探究余数与除数的关系（约 11 分钟）**

【教师活动】
（一）教学竖式。
师："除法的计算还可以写成竖式。以 7÷2 为例。第一步一商：7 里面最多有几个 2？"
生："3 个。"
师："商 3 写在个位上。第二步二乘：3 乘 2 得 6，写在 7 的下面。第三步三减：7 减 6 得 1。第四步四比：余数 1 和除数 2 比一比，1 比 2 小，说明不能再分了。"
教师完整板书竖式，小结四步：一商、二乘、三减、四比。
（二）探究余数与除数的关系。
师："如果写成 7÷2=2……3，对吗？"
生："不对，3 比 2 大，剩下的还能再分一份。"
师："对！余数等于除数或者比除数大，都说明剩下的还够再分一份，商就要增加。所以余数一定比除数小。"
（三）独立练习。课件出示：13÷4、19÷3，学生试写竖式，教师巡视讲评，重点检查"四比"环节。 师："检查的时候，记得看看余数是不是比除数小，这是判断竖式写没写对的好办法。"

【学生活动】
学生跟着教师口述竖式的四个步骤，在错例辨析中理解"余数一定比除数小"的道理，独立试写两道竖式并同桌互相检查。

【设计意图】
竖式教学按"一商、二乘、三减、四比"四步推进，把计算过程结构化；通过"商 2 余 3"的错例辨析，让学生从"剩下的还能不能再分"的角度理解余数与除数的大小关系，避免死记硬背。

**环节四 应用练习，体会进一与去尾（约 8 分钟）**

【教师活动】
（一）基础练习。课件出示：8÷3、14÷5，学生口算并说出商和余数，追问"余数为什么比除数小"。 师："做对的关键是先想准口诀，再检查余数是不是比除数小。"
（二）情境题一（进一法）。
师："22 人去划船，每条船坐 4 人，至少需要几条船？"
生："22÷4=5……2，5 条不够，还剩 2 人也要坐船，所以要 5+1=6 条。"
师："这里商为什么要加 1？"
生："因为人不能剩下，剩下的人也要坐一条船。"
（三）情境题二（去尾法）。
师："15 米布做衣服，每件用布 4 米，最多能做几件？"
生："15÷4=3……3，最多做 3 件，剩下的 3 米不够再做 1 件。"
师："同样是除法有余数，为什么一个加 1、一个不加？"
生："划船的人不能剩下，而布不够做衣服就只能舍去。"
（四）判断练习：李师傅要把 20 个苹果装箱，每箱装 6 个，至少需要几个箱子？学生独立完成并说理由。

【学生活动】
学生在口算中巩固计算，在两个生活情境中讨论"加 1 还是不加"，说清理由，体会进一法与去尾法的不同，完成对比判断练习。

【设计意图】
把余数知识放回生活情境，让学生在"人不能剩下""布不够就不做"的讨论中自主区分进一法与去尾法，体会数学与生活的紧密联系，发展应用意识。

**环节五 回顾整理，全课总结（约 4 分钟）**

【教师活动】
师："这节课你有什么收获？"
生："知道了余数是分剩下的数。""余数一定比除数小。""学会了有余数除法的竖式。"
师："计算时记住一商、二乘、三减、四比；解决问题时要根据实际情况决定商要不要加 1。"
教师布置分层作业：基础题完成竖式练习 8 道；提高题找一找生活中能用有余数除法解决的问题并编成题目；拓展题为家里分水果活动设计一种有余数的分法。

【学生活动】
学生回顾总结，整理本课知识，明确课后任务，把有余数除法带进生活。

【设计意图】
通过回顾把"余数的意义、余数小于除数、竖式方法、进一去尾"串成知识链，分层作业兼顾巩固与拓展，让学习持续发生。

**板书设计**
课题：有余数的除法
7÷2=3……1
被除数÷除数=商……余数
竖式四步：一商、二乘、三减、四比
余数一定比除数小
进一法：人不能剩下（商加 1） 去尾法：不够不做（商不变）

**教学反思要点**
1. 余数概念的建立必须依赖动手分物，要保证学生充分操作，让"剩下不够再分一份"成为学生自己的发现。
2. "余数一定比除数小"要通过"还能不能继续分"来理解，用错例辨析代替机械背诵。
3. 竖式四步口诀降低了书写难度，但部分学生会漏写余数或对位不准，巡视时要及时纠正。
4. 进一法与去尾法是学生最容易混淆的地方，要通过小组讨论和情境对比，让学生自己悟出道理。
5. 本课容量较大，竖式练习与解决问题可酌情取舍，确保难点环节时间充足。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学二年级下册第六单元"有余数的除法"。它是在学生学过表内除法、能熟练用口诀求商之后编排的，是除法计算从"整除"走向"带余"的第一次延伸，也是今后学习多位数除法、试商的重要基础。余数的出现打破了学生"除法都能整除"的固有认识，教材通过分草莓、分小棒等大量操作活动，帮助学生认识余数，进而学习竖式，最后解决生活中的实际问题，编排环环相扣、循序渐进。我把本课定位为"在操作中发现、在错误中理解"的概念计算课，把重点放在余数意义的建构和余数与除数关系的探究上。同时，本课还承担着从表内除法走向多位数除法的桥梁作用，余数的意义、竖式的格式、试商的方法，都将在今后的除法学习中反复用到，所以必须让学生在这节课上把每一步都学扎实。

**二、说学情**
二年级学生已经能熟练进行表内除法计算，也积累了丰富的分物活动经验，对"分完剩一点"的生活现象并不陌生。但是，他们往往只停留在"剩了"的直观层面，不知道剩下这部分在数学里叫什么、有什么讲究；对除法竖式的书写更是第一次接触，容易把商和余数的位置写错，也容易忽略"余数要比除数小"这一规律。因此，本课必须让学生亲自动手分一分，在动作中感悟余数，再通过改错辨析把道理讲透，把直观经验上升为数学规律。还有一个值得注意的现象：学生在口算有余数除法时，往往余数大于或等于除数而自己毫无察觉，这正是缺乏"余数比除数小"这一检验意识的表现。因此我在设计中安排了专门的错例辨析环节，让学生在纠错中建立自觉检验的意识。

**三、说教学目标**
我确定了三个目标。第一，通过操作理解余数的意义，会读写有余数的除法算式，这是知识技能层面的目标。第二，掌握竖式"一商、二乘、三减、四比"的书写格式，理解余数一定比除数小，这是过程与方法层面的目标。第三，能运用有余数除法解决实际问题，初步体会进一法和去尾法的区别，发展运算能力和推理意识，这是素养落点。三个目标相互支撑，共同指向本课的核心知识。这样的目标设定，既关注了知识本身，也关注了知识获得的过程与其中的思维发展。

**四、说教学重难点**
本课重点是理解余数意义、掌握竖式计算方法；难点有两个：一是理解余数一定比除数小，二是根据实际情况选择进一法或去尾法。为什么难？因为"余数小于除数"是一个需要推理才能理解的规律，学生容易机械记忆而不明所以；而进一、去尾又要结合具体情境灵活判断，对二年级学生来说确实有难度，需要专门对比训练。因此在教学中，我特别设计了划船、做衣服两个对比情境，让学生先独立解决，再在小组里争论"加 1 还是不加"，在思维的碰撞中理解进一和去尾的本质区别。

**五、说教法学法**
教法上，我采用动手操作法、对比观察法和情境应用法，用小棒、圆片让余数"看得见"，用错例让道理"说得清"，用生活情境让方法"用得上"。学法上，我引导学生经历"分一分、写一写、算一算、议一议"的过程，同桌合作、动手实验、大胆质疑，在操作与辨析中自主建构知识，坚决不搞教师包办代替。

**六、说教学过程**
我设计了五个环节。第一环节约五分钟，从 10 个草莓能装完、11 个草莓剩 1 个的情境制造冲突，自然引出余数。第二环节约十二分钟，学生把 7 个圆片每 2 个一份地分，在"剩 1 个"的操作中认识余数，学会写、读算式，并与整除对比。第三环节约十一分钟，是本课的重头戏，先教学竖式的四步书写，再通过"商 2 余 3"的错例辨析，让学生理解余数一定比除数小，随后独立试写两道竖式。第四环节约八分钟，把知识放回生活，通过划船、做衣服两个情境，让学生在讨论中分清进一法和去尾法。第五环节约四分钟，回顾总结、布置分层作业。五个环节总用时 40 分钟，操作有保障，探究有深度。整个流程让学生始终在具体的分物活动与抽象的算式之间来回穿梭，既动手又动脑，余数这个"新朋友"便在不知不觉中被学生接纳和理解了。

**七、说板书设计**
板书以算式 7÷2=3……1 为中心，标出各部分名称，右侧呈现竖式四步"一商、二乘、三减、四比"，下方用两行分别概括"余数一定比除数小"和"进一、去尾"的区别。整个板书简明清晰，把操作、算式、方法、规律一览无余，便于学生课后回顾。

**八、说教学反思与效果预测**
通过本课，预计学生能正确认识余数、规范书写竖式，多数学生能理解并运用"余数一定比除数小"。当然，课堂上也可能出现学生试商偏小、余数大于除数而自己没发现的情况，这正是宝贵的生成资源，我会抓住它深化认识。进一法和去尾法的选择对部分学生仍有困难，我会在后续练习中继续通过生活情境巩固。这节课，我力求让每个孩子都动起来、想进去、说明白，让有余数除法真正扎根在学生心中。当然，一节课难以解决所有问题，竖式的规范书写、进一去尾的灵活运用，还需要在后续课时和练习中继续强化，我会依据学生的课堂表现调整后续教学的重点。我的说课完毕，恳请各位老师批评指正，谢谢大家！`},"小学|二年级|数学|万以内数的认识":{plan:`**教学基本信息**
课题：万以内数的认识
教材版本：人教版小学数学二年级下册
年级：小学二年级
课型：新授课（数与代数领域）
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**
1. 借助计数器数数，认识计数单位"千"和"万"，知道 10 个一百是一千、10 个一千是一万，掌握相邻计数单位之间的十进关系，能按一定的规律数数。
2. 掌握万以内数的组成，能说出一个数由几个千、几个百、几个十和几个一组成；借助数位顺序表正确读写万以内的数，重点突破中间有 0 和末尾有 0 的数的读写。
3. 会比较万以内数的大小，能结合生活实际估一估物品的数量，在拨珠、读写、比较中进一步发展数感，感受大数在生活中的应用，落实"数感""符号意识"核心素养。

**教学重难点**
教学重点：万以内数的读法、写法与数的组成。
教学难点：中间有 0、末尾有 0 的数的读法和写法，写数时用 0 占位。

**教学准备**
教师准备：演示用大计数器、数位顺序表、小方块模型、多媒体课件。
学生准备：每人一个计数器、一张数位顺序表卡片。

**教学过程**

**环节一 情境导入，感受大数（约 5 分钟）**

【教师活动】
课件出示学校操场开运动会的情境图。
师："同学们，我们学校开运动会了，操场上坐满了人。猜一猜，大约有多少人？"
生："几百人。""可能一千多人。"
师："用我们学过的百以内的数，还能表示这么多人吗？"
生："不能，人数太多了。"
师："数还能更大！今天我们就来认识更大的数——万以内的数。"
教师板书课题"万以内数的认识"。

【学生活动】
学生估一估人数，感受"数不够用"的矛盾，体会学习更大数的必要性，带着疑问进入新课。

【设计意图】
从熟悉的校园场景出发，让学生在估人数中真切感受千、万这些大数在生活中随处可见，激发探究欲望，同时渗透估计意识。

**环节二 拨珠数数，认识计数单位（约 13 分钟）**

【教师活动】
（一）复习旧知。
师："在计数器上，我们已经认识了个位、十位、百位。10 个一是十，10 个十是一百。那 10 个一百是多少？"
生："是一千。"
（二）认识千。
师："请同学们在计数器百位上拨 9 颗珠子，再添 1 颗，你发现了什么？"
生："满十进一，百位上的珠子全退去，在千位上进 1 颗，10 个一百是一千。"
教师强调"千"是新认识的计数单位，千位在百位的左边。
（三）认识万。
师："照这样的规律，10 个一千是多少？请在千位拨 9 颗珠子，再添 1 颗试试。"
学生操作后齐答："10 个一千是一万，在万位上进 1 颗。"
教师板书：10 个一百是一千，10 个一千是一万；相邻两个计数单位之间的进率都是 10。
（四）按规律数数。
师："从一千六百开始，一百一百地数。"
生："一千六百、一千七百、一千八百、一千九百、两千。"
师："数到 999 再添 1 是多少？"
生："一千，因为 10 个一百是一千。"

【学生活动】
学生在计数器上拨珠，亲眼观察"满十进一"的进位过程，体会十进关系；同桌互相出题数数，重点经历从整百、整千处进位的过程。

【设计意图】
让计数单位的建立回到拨珠操作中，学生亲眼看到 9 颗珠子添 1 颗就变成高一级的 1 颗珠子，直观理解"满十进一"，把抽象的十进关系转化为看得见的动作。

**环节三 借助数位表，学习读写（约 10 分钟）**

【教师活动】
（一）认识数位顺序表。
师："数位从右往左依次是个位、十位、百位、千位、万位。请同学们在自己的数位顺序表上指一指、读一读。"
（二）学习数的组成与读法。课件出示 3456。
师："3456 里有几个千、几个百、几个十、几个一？"
生："3 个千、4 个百、5 个十、6 个一。"
师："读作三千四百五十六。读数要从高位读起，一位一位往下读。"
（三）突破 0 的读法。课件出示 3050、4005、5300。
师："这三个数都有 0，读法一样吗？"
生："3050 读三千零五十，中间的 0 要读出来。""4005 读四千零五，中间两个 0 只读一个零。""5300 读五千三百，末尾的 0 不读。"
教师小结：中间的 0 要读，连续几个 0 只读一个；末尾的 0 都不读。
（四）学习写数。
师："八千零六十怎么写？"
生："千位写 8，十位写 6，百位和个位一个计数单位也没有，就用 0 占位，写作 8060。"
师："五千呢？"
生："写作 5000，后面的 0 一个也不能少。"
学生完成写数练习：三千零五、九千六百、四千零七十。

【学生活动】
学生在数位顺序表上指认数位，通过说组成理解 0 的作用；在对比练习中总结 0 的读写规则，独立完成写数并互相检查。

【设计意图】
把读法和写法放进数位顺序表的框架里，让学生明白"哪一位没有计数单位就用 0 占位"，通过 0 的专项对比练习集中突破难点，防止漏写 0、读错 0。

**环节四 比较大小，估计应用（约 8 分钟）**

【教师活动】
（一）比较大小。
师："8900 和 9000 谁大？先看什么？"
生："都是四位数，先比千位，8 比 9 小，所以 8900 小于 9000。"
师："3025 和 3205 呢？"
生："千位相同，比百位，0 比 2 小，所以 3025 小于 3205。"
（二）小结方法。
师："比较大小先比位数，位数多的数大；位数相同，从最高位比起，一位一位往下比。"
（三）估计练习。课件出示一杯黄豆、一堆图书。
师："估一估大约有多少个、多少本？"
生："一杯黄豆大约 100 粒，这一杯满满当当，可能 200 粒左右。"
师："估的时候可以找一个参照物，先估一份，再数有几份。"

【学生活动】
学生用"先比位数、再比数位"的方法比较多组数，并说清理由；在估黄豆、数图书的活动中借助参照物估计，互相交流估计方法。 师："估得准不准不重要，重要的是会找参照、有依据。"

【设计意图】
比较大小的方法在说理中自然生成，估计练习把大数学习引向生活，让学生在找参照、作比较中发展数感。

**环节五 回顾整理，全课总结（约 4 分钟）**

【教师活动】
师："今天我们认识了哪些新的计数单位？"
生："千和万，10 个一百是一千，10 个一千是一万。"
师："读写万以内的数要注意什么？"
生："中间的 0 要读、只读一个零，末尾的 0 不读；写数时用 0 占位。"
教师布置分层作业：基础题完成数位顺序表填空和读写练习；提高题写出家里的门牌号、车牌号并读一读；拓展题用 0、3、5、8 写出最大的四位数和最小的四位数。

【学生活动】
学生回顾总结，明确作业任务，把大数学习与生活联系起来，课后继续观察生活中的大数。

【设计意图】
回顾中突出计数单位、0 的处理等重点，分层作业让不同层次的学生都得到发展，引导学生在生活中继续感受大数。

**板书设计**
课题：万以内数的认识
数位顺序表：万位 千位 百位 十位 个位
10 个一百是一千 10 个一千是一万
读数：中间有 0 读一个"零"，末尾的 0 不读
写数：哪一位没有计数单位，就写 0 占位
比较大小：先比位数，再比数位

**教学反思要点**
1. 拨珠数数是理解十进关系的核心活动，要保证学生人人操作，亲眼看到"满十进一"。
2. 0 的处理是重难点，应通过 3050、3005、3500 这类对比组反复辨析，帮助学生建立规则。
3. 写数漏 0 是常见错误，要引导学生对照数位顺序表逐位检查，养成"写完对照"的习惯。
4. 估数环节要提供参照物支架，教给估计方法，防止学生凭空乱猜。
5. 本课信息量大，读数、写数、比大小各有难点，可依据学情调整练习比重，突出 0 的处理。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学二年级下册第七单元"万以内数的认识"。这是在学生认识了 100 以内数的基础上，把数的认识范围第一次拓展到万以内，是小学阶段整数认识的第一次大扩容。学好这一单元，学生才能建立完整的数位顺序概念，为后续学习万以内加减法乃至更大数的认识打下基础。教材按"数数认识计数单位—数的组成—读写—比较大小—估计"的顺序编排，循序渐进。我今天的公开课选取其中的核心内容，整合计数单位、读写与比较大小，突出数感的培养和 0 的处理，定位为"在操作中建数感、在对比中破难点"的数概念课。此外，本单元还包含整百、整千数的加减法和估计内容，考虑到一节课的容量，我今天的公开课聚焦数位、读写与比较大小三个核心点，把它们讲深讲透，其余内容留待后续课时完成。

**二、说学情**
二年级学生已经熟悉百以内数的读写和大小比较，会使用计数器拨数，对生活中的大数也有初步感知。但他们第一次接触千、万这样的计数单位，对"满十进一"的理解还停留在百以内，数到整千、整万的关口容易出错；遇到中间、末尾有 0 的数，读和写都容易出错，漏写 0 是普遍现象；比较大小也容易只盯着数字而忽视数位。因此，本课必须借助计数器拨珠和数位顺序表，把抽象的计数单位、0 占位变成看得见的操作，帮助学生在直观中完成建构。同时，学生在日常生活中接触车牌号、门牌号、物价标签的机会很多，这些真实素材可以成为宝贵的课程资源，我将在课堂中适度引入，让学生感到大数并不遥远，而是就在身边。

**三、说教学目标**
我确定三个目标。第一，借助计数器认识千和万，理解相邻计数单位之间的十进关系，能按规律数数，这是知识与技能层面的目标。第二，掌握数的组成，能正确读写万以内的数，重点掌握中间有 0 和末尾有 0 的数的读写，这是过程与技能层面的目标。第三，会比较大小、会估计数量，发展数感，感受大数与生活的联系，这是核心素养的落点。三个目标覆盖了"认识、读写、应用"三个层面，层层递进。三个目标都以计数器、数位表为支撑，保证学生在直观操作中达成目标。三个目标都以计数器、数位表为支撑，保证学生在直观操作中达成目标，让抽象的数位知识在指尖上变得具体可感。

**四、说教学重难点**
本课重点是读法、写法与数的组成；难点是中间有 0、末尾有 0 的数的读写以及写数时用 0 占位。之所以难，是因为 0 的读写规则比较特殊：中间的 0 要读却不写，末位的 0 不读却要写，规则与学生直觉相反，需要借助专项对比练习和数位表支架才能突破。因此我在设计时把 0 的专项练习作为重中之重，通过 3050、3005、3500 一组数的读、写、比，让学生在一次次的对比中自己总结出规则，这样的规则才记得牢、用得上。

**五、说教法学法**
教法上，我采用直观演示法、数位表辅助法和对比练习法，用计数器演示满十进位，用数位顺序表固定每一位的位置，用对比题暴露 0 的读写规律。学法上，我引导学生动手拨珠、动口读数、动脑找规律，在"拨一拨、读一读、写一写、比一比"中自主建构，特别强调同桌互查，及时发现并纠正错误。在读写环节，我还安排了"我说你拨"的双人活动，一人报数、一人在计数器上拨，再互相检验，既巩固了数位知识，又增添了课堂的趣味性。

**六、说教学过程**
我设计了五个环节。第一环节约五分钟，从运动场坐满人的情境导入，让学生在"数不够用"的体验中产生学习大数的需要。第二环节约十三分钟，学生拨珠认识千和万，亲眼看 10 个一百凑成一千、10 个一千凑成一万的进位过程，再按规律数数。第三环节约十分钟，借助数位顺序表学习数的组成和读写，集中突破 0 的处理。第四环节约八分钟，学习比较大小的方法，并用参照物估数。第五环节约四分钟，总结提升、布置分层作业。全课 40 分钟，拨珠操作保证时间，重点难点逐层突破。

**七、说板书设计**
板书呈现完整的数位顺序表，写出"10 个一百是一千、10 个一千是一万"，下方用三行分别概括读法规则、写法规则和比较大小的方法。板书既是知识结构图，又是学生读写时的"对照表"，一举两得，学生一看就能回忆起本课的核心知识。

**八、说教学反思与效果预测**
预计通过本课，学生能认识千、万，多数学生能正确读写万以内的数。但 0 的处理和数位的记忆仍会有反复，我会把数位顺序表作为课堂的常备学具，并设计 3050、3005、3500 一组的专项对比练习持续巩固。课堂上如果有学生把四千零五写成 45，这恰恰是最好的教学契机，我会引导他对照数位表数一数中间空了几位，把错误变成学习资源。让每个孩子都能与更大的数交上朋友，是我这节课最大的心愿。当然，万以内数的认识是一个系统工程，读写法、组成、比较大小环环相扣，我会在后续课时继续巩固深化，并引导学生把课堂上学到的读写方法用到生活实际中去，让数感在日积月累中不断生长。我的说课完毕，恳请各位老师批评指正，谢谢大家！`},"小学|二年级|数学|克与千克":{plan:`**教学基本信息**
课题：克与千克
教材版本：人教版小学数学二年级下册
年级：小学二年级
课型：新授课（数与代数领域·常见的量）
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**
1. 在掂一掂、称一称的活动中认识质量单位"克"和"千克"，知道 1 千克等于 1000 克，能正确读写"克""千克"及其字母符号 g、kg。
2. 通过掂 1 克、1 千克物品的亲身体验，建立 1 克、1 千克的质量表象，能借助参照物估计常见物品的质量，初步发展量感。
3. 认识电子秤、台秤等常见称量工具，能进行简单的称量活动，会解决与质量有关的简单实际问题，养成认真细致的学习习惯，落实"量感"核心素养。

**教学重难点**
教学重点：认识质量单位克和千克，理解 1 千克等于 1000 克。
教学难点：建立 1 克、1 千克的质量表象，能合理估计常见物品的质量。

**教学准备**
教师准备：电子秤、台秤、1 克砝码、两袋各 500 克的食盐、1 角硬币、回形针、鸡蛋、苹果、矿泉水、多媒体课件。
学生准备：每组一个电子秤、1 枚 1 角硬币、1 袋食盐、若干常见物品。另请每位学生自备一两件想称量的物品，如橡皮、铅笔盒、小玩具等。

**教学过程**

**环节一 情境导入，感受轻重（约 5 分钟）**

【教师活动】
师："老师这儿有一个苹果和一个羽毛球，谁来掂一掂，说说谁轻谁重？"
生："苹果重，羽毛球轻。"
师："物体的轻重，在数学里叫作质量。买苹果要称一称，买大米也要称一称，称重的时候就需要用到质量单位。"
师："一袋苹果标着 500 克，一袋大米标着 5 千克，这里的'克'和'千克'就是质量单位，今天我们就来认识它们。" 师："称物体的轻重，可以用秤来称。今天老师带来了电子秤和台秤，一会儿我们就要用到它们。"
教师板书课题"克与千克"。

【学生活动】
学生掂一掂、比一比，感受物体有轻重，认识"质量"这一概念，明确克和千克是计量物体轻重的单位。

【设计意图】
从"掂一掂"的直观体验入手，让学生感受物体有轻重，自然引出质量单位；结合购物称重的实际，让学生体会学习克与千克的必要性。

**环节二 掂一掂，认识"克"（约 10 分钟）**

【教师活动】
（一）认识克。
师："计量比较轻的物品，通常用'克'作单位。请取出 1 角硬币，放在手心里掂一掂，感受一下。"
生："很轻，几乎感觉不到重量。"
师："这枚 1 角硬币大约重 1 克。1 个回形针也大约重 1 克。"
（二）多感官体验。
师："再来掂一掂乒乓球，它大约重 3 克；掂一掂鸡蛋，大约重 50 克。请闭上眼睛，再掂一次硬币，把 1 克的感觉记在心里。"
（三）称一称。
师："我们用电子秤称一称，看看电子秤上的数字和单位。"
学生分组用电子秤称硬币、回形针，认读显示的质量。
（四）练一练。
师："下面的物品该用什么单位？一粒黄豆、一块橡皮、一枚邮票。"
生："它们都很轻，都用克。" 师："判断用哪个单位，关键看物品是轻还是重。掂一掂、想一想，再作选择。"

【学生活动】
学生亲手掂硬币，用多感官记住 1 克的感觉；用电子秤称量轻小物品，会认读电子秤上的数字；能为轻的物品选择合适的质量单位。

【设计意图】
1 克的建立完全依靠"掂一掂"的肌肉记忆，再配合电子秤称量让感觉与数字对应，帮助学生形成清晰的 1 克表象，为后面的估计打基础。

**环节三 掂一掂，认识"千克"与换算（约 13 分钟）**

【教师活动】
（一）认识千克。
师："计量比较重的物品，通常用'千克'作单位。掂一掂这袋盐，感觉怎样？"
生："有点沉。"
师："这袋盐是 500 克，两袋正好是 1 千克。请掂一掂这两袋盐，记住 1 千克的感觉。"
学生掂两袋盐，感受 1 千克。
师："2 瓶 500 毫升的矿泉水大约重 1 千克，4 个中等大小的苹果大约也重 1 千克。"
（二）称一称。
师："用台秤称一称这袋大米，读一读，是几千克？"
生："5 千克。"
师："小朋友的体重一般用哪个单位？"
生："千克。" 师："称比较重的物品，比如大米、面粉、西瓜，通常都用千克作单位。"
（三）探究进率。
师："一袋盐 500 克，两袋一共多少克？"
生："1000 克。"
师："两袋盐正好是 1 千克，所以 1 千克等于多少克？"
生："1 千克等于 1000 克。"
教师板书：1 千克＝1000 克。
师："3 千克等于多少克？5000 克等于多少千克？"
生："3 千克等于 3000 克，5000 克等于 5 千克。" 师："反过来，把克换算成千克，就是看几千里面有几个一千。"

【学生活动】
学生通过掂两袋盐、搬一搬大米建立 1 千克和几千克的感性认识，通过"两袋 500 克盐正好是 1 千克"发现克与千克的进率，完成单位换算练习。

【设计意图】
千克的建立同样依赖体验活动，"两袋盐正好 1 千克"巧妙打通克与千克的联系，让学生在掂一掂、称一称中自己发现进率是 1000，而不是机械记忆。

**环节四 应用练习，发展量感（约 8 分钟）**

【教师活动】
（一）选择单位。课件出示：一枚鸡蛋（ ）、一个西瓜（ ）、一袋大米（ ）、一粒黄豆（ ）、三年级学生体重（ ）。
学生选择克或千克并说明理由。
（二）单位换算。
师："2 千克等于多少克？7000 克等于多少千克？"
生："2000 克、7 千克。"
（三）比大小。
师："3 千克和 2900 克，谁大？"
生："先统一单位，3 千克等于 3000 克，3000 大于 2900，所以 3 千克大。"
（四）估计游戏。
师："估一估，这个苹果大约有多重？同桌先掂一掂估一个数，再用电子秤称一称，看谁估得准。 师："估计的时候，先想想 1 千克有多重，再和它比一比，就八九不离十了。""

【学生活动】
学生在选单位、换算、比大小中巩固知识，在"先估计后称量"的游戏中验证和调整自己的量感，学会用参照物估计。

【设计意图】
练习把知识转化为能力：选单位考查质量观念，换算巩固进率，比大小渗透单位统一的思想，估计游戏让量感在"估—称—比"中不断精确。

**环节五 回顾整理，全课总结（约 4 分钟）**

【教师活动】
师："这节课你认识了什么？"
生："克和千克是质量单位，1 千克等于 1000 克。"
师："轻的物品用克作单位，重的物品用千克作单位。回家后完成一项作业：称一称家里 5 种物品的质量，记录下来，下节课带到学校交流。"
师："要记住，克和千克的进率是 1000，可别记成了 100。" 师："还有的同学喜欢用'掂一掂'来估计，这个习惯很好，但要记得多和称出来的结果比一比，估计才会越来越准。"

【学生活动】
学生回顾小结，明确作业要求，准备回家开展称量实践，把课堂学习延伸到生活。

【设计意图】
总结强化核心知识，家庭称量作业让量感在真实生活里持续生长，体现"数学来源于生活、服务于生活"。

**板书设计**
课题：克与千克
质量单位：克（g） 千克（kg）
1 克：1 枚硬币、1 个回形针
1 千克：2 袋盐、2 瓶矿泉水、4 个苹果
1 千克＝1000 克
轻的用克 重的用千克

**教学反思要点**
1. 量感必须在亲身体验中建立，"掂一掂"环节要保证时间，让每个学生都掂过 1 克和 1 千克。
2. 克与千克的进率是 1000，学生容易与人民币的十进混淆，要用"两袋盐正好 1 千克"的实例强化。
3. 估计练习要提供参照物支架，教给学生"先找标准、再作比较"的估计方法。
4. 电子秤操作要注意小组分工，避免个别学生只看不练。
5. 本课操作活动多，要提前整理好学具，把握好掂、称、读、说的节奏，防止课堂松散。`,talk:`**一、说教材**
各位评委老师，大家好！今天我说课的内容是人教版小学数学二年级下册第八单元"克与千克"。这是学生在小学阶段第一次接触质量单位，属于"常见的量"的重要内容。在此之前，学生只认识了长度单位，对物体的轻重只有生活经验而没有数学概念。教材通过掂一掂、称一称等大量操作活动，帮助学生建立克和千克的质量观念，知道 1 千克等于 1000 克。这一单元的学习直接关系着学生量感的培养，也为今后认识吨、学习容量知识打下基础。我把它定位为"在体验中建量感、在操作中学知识"的实践活动课，突出学生的亲身参与和动手体验。教材先借助"掂一掂"建立质量感觉，再通过"称一称"把感觉与数字对应，最后在换算和估计中应用，三个层次逐步深入。我今天的公开课完整呈现这一过程，让学生在真实体验中积累数学活动经验。

**二、说学情**
二年级学生天天和物体打交道，知道苹果比羽毛球重、人比小猫重，但问他一枚鸡蛋有多重、一袋大米该用什么单位，往往说不清楚。他们缺乏的是把"轻重"精确化的工具和单位，更缺乏 1 克、1 千克的具体表象。量感的建立不能靠讲解，必须靠掂一掂、称一称的肌肉记忆。所以本课我让每个学生都动手，在掂的过程中把抽象的"克""千克"变成身体里的一种感觉，让量感在体验中自然生长。此外，二年级学生的语言表达和小组合作能力正在发展，称量活动需要分工配合，我会在活动中渗透合作的规则，让学生学会轮流操作、互相提醒，在学会知识的同时养成有序操作的好习惯。

**三、说教学目标**
我确定三个目标。第一，认识质量单位克和千克，知道 1 千克等于 1000 克，会读写单位和字母符号，这是知识与技能层面的目标。第二，通过掂一掂、称一称，建立 1 克和 1 千克的质量表象，会估计常见物品的质量，这是过程与方法层面的目标。第三，认识电子秤、台秤等称量工具，会进行简单的称量，能解决与质量有关的实际问题，发展量感，这是核心素养的落点。三个目标都以"体验"为主线贯穿始终。

**四、说教学重难点**
本课重点是认识克和千克、理解进率；难点是建立 1 克和 1 千克的质量表象，能合理估计常见物品的质量。把估计定为难点，是因为估计需要参照物和内在的量感支撑，而二年级学生往往凭感觉乱猜，需要教师教给方法、反复训练，才能逐步建立准确的质量观念。所以在课堂中我设置了"先估计、再称量、后验证"的游戏环节，让学生在一轮轮的估、称、比中不断修正自己的感觉，使量感在动态调整中逐渐精确。

**五、说教法学法**
教法上，我采用动手操作法、对比体验法、生活联系法，让学生掂一掂硬币建立 1 克的感觉，掂两袋盐建立 1 千克的感觉，在轻重对比中体会单位的不同。学法上，我引导学生"掂一掂、称一称、读一读、比一比、估一估"，在多感官参与中积累体验，小组合作开展称量活动，让每个孩子都成为学习的主人。同时，我还注重生活经验的唤起，课前布置学生观察家里物品包装袋上的质量标记，课上进行交流，让课堂知识与生活经验互相印证。

**六、说教学过程**
我安排了五个环节。第一环节约五分钟，从掂苹果和羽毛球引出"轻重"和"质量单位"，明确学习对象。第二环节约十分钟，重点认识克：学生掂 1 角硬币，用肌肉记住 1 克的感觉，再用电子秤称轻小物品，学会为轻的物品选单位。第三环节约十三分钟，重点认识千克：学生掂两袋盐感受 1 千克，称大米感受几千克，并通过"两袋 500 克盐正好是 1 千克"发现进率是 1000，完成单位换算。第四环节约八分钟，通过选单位、换算、比大小、估计游戏，把知识转化为能力。第五环节约四分钟，总结并布置家庭称量作业。全课 40 分钟，操作体验贯穿始终。从导入到总结，学生始终处于"动手、观察、表达"的循环中，学得轻松又扎实。从导入到总结，学生始终处于"动手、观察、表达"的循环中，学得轻松又扎实。孩子们在掂一掂中感受轻重，在称一称中验证猜想，在说一说中梳理认识，质量单位的学习因为有了体验而变得生动亲切。

**七、说板书设计**
板书分为左右两栏：左边是"克"，配上 1 枚硬币、1 个回形针的图例；右边是"千克"，配上 2 袋盐、2 瓶矿泉水的图例；中间一行大字"1 千克等于 1000 克"。图例与单位一一对应，进率一目了然，学生一看板书就能回忆起本课所学的重点知识。

**八、说教学反思与效果预测**
通过本课，预计学生能建立初步的 1 克、1 千克表象，会进行简单的换算和估计。当然，量感不是一节课就能完全形成的，估计还会有偏差，我会通过家庭称量作业和后续练习持续培养。课堂上学生掂得兴奋、称得起劲，教师要把控好秩序和时间，把热闹转化为有效的体验，让每个孩子都真正掂过、称过、想过。让"克"和"千克"在孩子们的手心里活起来，是我这节课最大的追求。总之，质量单位的教学离不开"体验"二字，我会在课堂中充分尊重学生的感官经验，把每一个抽象的概念都变成一次可触摸、可感受的操作，让量感教育真正落地生根。我的说课完毕，恳请各位老师批评指正，谢谢大家！`}},ks={"小学|二年级|数学|时分秒":{plan:`**教学基本信息**

课题：时分秒——认识钟面与整时、半时
教材版本：人教版义务教育教科书数学二年级
年级：二年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学二年级学生

**教学目标**

1. 认识钟面结构，知道钟面上有 12 个大格、60 个小格，认识时针、分针、秒针的外形特征，能正确认读整时和半时，会用电子表记法记录时刻，发展空间观念和观察能力。
2. 通过看一看、拨一拨、说一说等操作活动，理解时针走 1 大格是 1 时、分针走 1 小格是 1 分的含义，初步感知 1 时等于 60 分，在计时体验中逐步建立时间量感。
3. 结合起床、上课、睡觉等生活情境，感受时间与生活的密切联系，经历拨钟、估时等实践活动，养成珍惜时间、按时作息的好习惯，增强应用意识。

**教学重难点**

重点：认识钟面结构，正确认读整时和半时。
难点：掌握半时的读法，理解"时针走过几就是几时多"的含义；初步建立 1 时等于 60 分的进率观念。

**教学准备**

多媒体课件（钟面动画、生活情境图）；每组一个钟面模型；拨钟练习卡；小明一天作息时间表；小星星奖励贴。

**教学过程**

**环节一 情境导入：猜谜语引出钟表（约 5 分钟）**

教师活动：
师：上课之前，老师给大家猜个谜语："滴答滴答滴答，会说没有嘴，会走没有腿，它会告诉我们，什么时候起，什么时候睡。"打一样生活用品，猜猜是什么？
生：是钟表！
师：你猜得真准！生活里处处都要用到钟表，早上几点起床，中午几点吃饭，晚上几点睡觉，都要看看钟表。今天，我们就来和钟表交朋友，先认识钟面，学会看整时和半时。（板书课题：时分秒）
生：好！

学生活动：积极参与猜谜，回忆生活里看时间的情景，明确本课学习任务。

设计意图：用谜语激发学习兴趣，从学生的生活经验切入，让学生体会时间与生活的密切联系，在轻松的氛围中自然引出课题。

**环节二 观察发现：认识钟面结构（约 10 分钟）**

教师活动：
1. 整体观察钟面。
师：请小朋友们仔细观察这个钟面，你都看到了什么？
生：有数字，有针，还有一格一格的线。
师：说得真好！钟面上有 12 个数字，这些数字把钟面分成了 12 个大格。请你在自己的钟面上数一数，每个大格里面藏着几个小格？
生：5 个小格。
师：那整个钟面一共有多少个小格呢？我们一起来数一数，五个五个地数：5、10、15、20……数到多少？
生：60 个小格！
师：对，钟面上有 12 个大格、60 个小格，这个发现可重要啦，它可以帮助我们看懂钟面。
2. 认识三根针。
师：钟面上有几根针？它们长得一样吗？
生：有三根针，不一样，有的短、有的长。
师：又短又粗、走得最慢的是时针；又长又细、走得快一些的是分针；最细最长、走得最快的是秒针。
3. 认识针的走动规律。
师：（拨动课件动画）仔细看，时针走 1 大格，时间过去了多少？
生：1 时。
师：分针走 1 小格呢？
生：1 分。
师：真棒！分针走 1 大格就是 5 分，因为 1 个大格里正好有 5 个小格。

学生活动：观察钟面，数大格、数小格，指认三根针，跟着课件说一说"时针走 1 大格是 1 时，分针走 1 小格是 1 分"。

设计意图：先整体观察、再局部聚焦，通过"数一数"的活动把 12 个大格、60 个小格扎进心里；借助三个"走"初步建立时、分的表象，为下面认读时间做好铺垫。

**环节三 合作探究：学习整时与半时（约 12 分钟）**

教师活动：
1. 认识整时。
师：（拨动钟面模型）现在分针指向 12，时针指向 3，这是几时？
生：3 时。
师：你是怎么知道的？
生：分针指向 12，时针指向几就是几时。
师：你总结得真完整！分针指向 12，时针指向几，就是几时。那时针指向 8 呢？
生：8 时。
师：整时还可以用电子表记法写，写作 3:00，读作 3 时。大家注意，电子表记法里中间是两点，两点左边是几时，右边是几分。
2. 认识半时。
师：（拨动钟面模型）再来看，分针指向 6，时针走过 5，这又是几时呢？
生：5 时半。
师：为什么是 5 时半？谁来分析分析？
生：分针指向 6，走了半圈，是 30 分；时针走过 5，还没到 6，就是 5 时多。
师：你分析得真清楚！分针指向 6，时针走过几，就是几时半，也就是几时 30 分。写作 5:30，读作 5 时 30 分，也叫 5 时半。
3. 小组拨钟活动：你拨我读。
师：下面同桌合作，一人拨钟，一人读时间，要求拨一个整时、再拨一个半时，看哪一组配合得最默契。
（学生动手拨钟、互相检查，教师巡视指导后指名汇报）
生：我拨的是 9 时，因为分针指向 12，时针指向 9。
生：我拨的是 2 时半，因为分针指向 6，时针走过 2。

学生活动：在教师引导下归纳整时、半时的读法；同桌合作拨钟、读钟，边拨边说理由。

设计意图：由扶到放，先借助提问帮助学生归纳方法，再通过"你拨我读"让每个学生动手操作，在拨、读、说的过程中加深对整时、半时的理解。

**环节四 感悟进率：感知 1 时等于 60 分（约 8 分钟）**

教师活动：
1. 课件演示分针走一圈。
师：请仔细观察动画，分针从 12 出发走一圈，时针有什么变化？
生：时针走了一小段。
师：分针走完一圈回到 12，一共走了 60 个小格，也就是 60 分；这时候时针正好走了 1 大格，也就是 1 时。所以，1 时等于多少分？
生：1 时 = 60 分。
师：对！1 时等于 60 分，这个关系很重要，我们一起响亮地读一遍。
生：（齐读）1 时 = 60 分。
2. 体验 1 分钟有多长。
师：1 分钟有多长呢？我们来亲身体验一下。请大家起立，跟着音乐做一分钟拍手操，一边拍一边数，看谁一分钟拍得最多。
（学生活动）
师：一分钟我们拍了那么多下，原来 1 分钟也不短呀！每一分钟都很宝贵，我们要珍惜每一分钟。

学生活动：观看分针走一圈的动画，发现时针的变化，归纳出 1 时等于 60 分；参与一分钟拍手体验，交流感受。

设计意图：用动画把"分针走一圈、时针走一大格"同时呈现，直观揭示 60 分与 1 时的关系；再用体验活动建立 1 分的量感，把珍惜时间教育融入数学学习。

**环节五 巩固练习与课堂总结（约 5 分钟）**

教师活动：
1. 我会看。课件出示四个钟面，指名读出时刻：3 时、7 时、5 时半、9 时半。
2. 我会判断。用手势表示对错。
（1）分针指向 12，时针指向 8，是 8 时。（对）
（2）分针指向 6，时针指向 2，是 2 时半。（对）
（3）钟面上有 60 个大格。（错，应为 12 个大格、60 个小格）
3. 我会填。
（1）钟面上有（ ）个大格，有（ ）个小格。
（2）时针走 1 大格是（ ）时，分针走 1 小格是（ ）分。
（3）1 时 = （ ）分。
4. 作息交流。课件出示小明的一天：早上 7 时起床，上午 8 时半上课，中午 12 时吃饭，晚上 9 时睡觉。请学生说说自己几点起床、几点上学。
师：这节课你有什么收获？
生：我认识了钟面，会看整时和半时了。
生：我知道 1 时等于 60 分，要珍惜时间。
师：希望大家回家以后，也像小明一样把自己的作息时间记一记，做个守时的好孩子。

学生活动：口答时刻、手势判断、抢答填空，交流自己的作息时间。

设计意图：分层练习由浅入深，判断题紧扣易错点（大格与小格混淆），填空巩固核心概念，作息交流把数学知识用到生活中，落实珍惜时间的教育。

**板书设计**

时分秒
钟面：12 个大格，60 个小格
时针：短粗，走 1 大格是 1 时
分针：细长，走 1 小格是 1 分
整时：分针指 12，时针指几就是几时（3:00）
半时：分针指 6，时针走过几就是几时半（5:30）
1 时 = 60 分

**教学反思要点**

1. 学生通过"五个五个数"记住了 60 个小格，掌握较扎实，但对"分针指向 6 为什么是 30 分"的理解仍需结合 5 个一组反复强化，个别学生仍会把大格、小格混淆。
2. 拨钟活动中部分学生只专注"拨"而忽略"读"，应提出明确要求：拨完必读、读时必说理由，让操作真正为理解服务。
3. 1 时等于 60 分由动画演示得出，个别学生只记住了结论，后续应让学生亲自拨一拨、验证一遍，把结论变成体验。
4. 一分钟拍手体验活动效果好，可以再增加"一分钟能写几个字"等量化体验，进一步丰富 1 分的量感。
5. 时间观念的形成不是一节课能完成的，需结合作息表在课后持续渗透，可布置"记录自己一天作息"的实践作业。`,talk:`**一、说教材**

"时分秒"是人教版义务教育教科书数学二年级的内容，属于"常见的量"这一知识领域。在一年级，学生已经学过看图认钟表，能辨认整时；本单元在此基础上，系统认识钟面结构，认读整时与半时，初步感知时与分之间的关系。它是学生建立时间观念、形成量感的起步课，也是后续三年级系统学习"时、分、秒"单位换算和经过时间计算的重要基础。可以说，这节课学得扎实不扎实，直接影响学生今后对时间的理解和对量感的形成。本课时我选取"认识钟面与整时、半时"这一核心内容，把认识钟面、认读时间、初步感知进率融为一体，既体现了知识的结构性，又适合公开课展示操作与探究的过程，具有承上启下的重要地位。

**二、说学情**

二年级的学生年龄小、注意力持续时间较短，但好奇心强、乐于动手操作。他们已经有了一定的生活经验，会看整时，也常从动画片、电子表和电视节目里见到时间，却很少系统地研究过钟面，对钟面上大格、小格的分布不清楚。学生认读半时和一般时刻时，常出现"时针走过几"判断不准、分针所指位置想不起乘 5 等困难，这是因为他们习惯只看指针指向的数字。二年级学生的思维以具体形象思维为主，需要通过看一看、数一数、拨一拨等直观操作来支撑理解。因此，本课要充分调动学生的多种感官，让每一个孩子都动起来，在操作中积累经验、建立表象。

**三、说教学目标**

基于课程标准和学情分析，我确定了三个教学目标：一是认识钟面结构，知道钟面上有 12 个大格、60 个小格，认识时针、分针、秒针的外形特征，能正确认读整时和半时，会用电子表记法记录时刻；二是通过拨一拨、说一说等操作活动，理解时针走 1 大格是 1 时、分针走 1 小格是 1 分，初步感知 1 时等于 60 分，发展量感；三是结合起床、上课、睡觉等生活情境，感受时间与生活的联系，养成珍惜时间、按时作息的好习惯。三个目标分别指向知识与技能、过程与方法、情感态度与价值观，层层递进，共同指向学生核心素养的发展。

**四、说教学重难点**

本课的重点是认识钟面结构，正确认读整时和半时。难点是掌握半时的读法，理解"时针走过几就是几时多"的含义；初步建立 1 时等于 60 分的进率观念。二年级学生习惯"看指针指向的数字"，对"时针在两数之间表示走过几时"理解起来有困难，我采用"拨一拨、说一说"和课件动画演示相结合的办法突破难点，让学生在操作中感悟、在观察中发现，把难点化解在直观体验之中。

**五、说教法学法**

本课主要采用情境教学法、直观演示法和操作发现法。教师通过谜语创设情境，激发学生兴趣；借助课件动画演示针的走动，让动态的过程清晰地呈现在学生眼前；组织同桌合作拨钟，引导学生在操作中发现规律。学法上，我倡导同桌合作与动手实践相结合，让学生在拨钟、读钟、验钟中自主建构知识，把课堂真正还给学生，体现"以学定教"的理念。
课前我为每位学生准备了钟面模型和拨钟练习卡，多媒体课件能动态演示时针、分针的走动过程，为学生的观察与操作提供了充分的物质保障。

**六、说教学过程**

我的教学过程分为五个环节。第一环节"猜谜导入"，约用 5 分钟，用谜语唤起学生的生活记忆，引出课题。第二环节"认识钟面"，约用 10 分钟，通过数大格、数小格认识钟面结构，认识三根针，初步了解针的走动规律。第三环节"整时与半时"，约用 12 分钟，先归纳整时的读法，再突破半时的难点，最后开展"你拨我读"的同桌活动，让每个学生动手实践。第四环节"感知进率"，约用 8 分钟，用动画直观揭示 1 时等于 60 分，并开展一分钟拍手体验，建立 1 分的量感。第五环节"巩固总结"，约用 5 分钟，通过我会看、我会判断、我会填三个层次练习巩固所学，并交流作息时间。各环节层层递进，时间分配合理，合计 40 分钟。
这样的设计环环相扣：观察为操作打基础，操作为归纳做准备，体验为进率增感性，让学生在不知不觉中完成从形象到抽象的跨越。

**七、说板书设计**

我的板书分三部分：中间是课题"时分秒"，左边记录钟面的 12 个大格、60 个小格，右边梳理整时、半时的读法，最下方用"1 时 = 60 分"点明进率关系。板书重点突出、层次分明，既呈现了本节课的知识结构，又方便学生对照记忆，为课堂小结提供了清晰的线索。
整个板书随着教学进程逐步生成，从钟面结构到读法、进率，每一步都留下学习的足迹，让知识的结构在板书中清晰可见。

**八、说教学反思与评价**

本课以谜语导入、以操作为主线，学生参与度高，在动手拨钟中突破了认读难点，量感的培育落到了实处。但公开课时间紧凑，个别学生拨钟速度不一，教师巡视指导还需要更加充分。今后可增加"估时、计时"等活动，如估一估写字用了几分钟，进一步丰富量感体验，让时间观念在真实体验中自然生长，真正成为学生终身受益的能力。同时要把课内学习延伸到课外，布置记录自己一天作息时间的实践作业，让时间的量感在生活中持续生长。`},"小学|三年级|数学|时、分、秒":{plan:`**教学基本信息**

课题：时、分、秒——认识秒
教材版本：人教版义务教育教科书数学三年级上册
年级：三年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学三年级学生

**教学目标**

1. 认识时间单位"秒"，认识钟面上的秒针，知道秒针走 1 小格是 1 秒、走 1 大格是 5 秒，能正确读出钟面上带秒的时刻，发展观察能力和推理能力。
2. 通过看一看、听一听、估一估、试一试等体验活动，建立 1 秒、几秒、1 分的时间观念，理解 1 分等于 60 秒，会进行简单的单位换算，形成时间量感。
3. 在"一分钟能做什么"等实践活动中感受时间的宝贵，养成珍惜时间、合理安排时间的好习惯，增强应用意识。

**教学重难点**

重点：认识秒针，理解 1 分等于 60 秒的进率，体验 1 秒的长短。
难点：建立 1 秒的时间观念，理解秒针走一圈、分针恰好走 1 小格的对应关系。

**教学准备**

实物钟表模型；秒表；多媒体课件（新年倒计时视频）；口算卡片；一分钟体验记录单。

**教学过程**

**环节一 情境导入：新年倒计时（约 5 分钟）**

教师活动：
师：孩子们，先来回忆一下除夕夜。新年钟声敲响之前，电视屏幕上会出现什么情景？
生：大家一起倒数，10、9、8、7……
师：对！数到几的时候，新年就到了？
生：1！
师：请认真听屏幕上的倒计时，边听边想一想，每数一个数"滴答"一下，大约用了多长的时间？（播放倒计时视频）
生：很短很短的时间。
师：这个很短很短的时间，比"分"还要小，它是我们认识的一个新朋友——秒。今天，我们就一起来认识秒。（板书课题：时、分、秒——认识秒）
生：好！

学生活动：回忆新年倒计时，观看视频，感受"秒"的短暂，进入学习情境。

设计意图：以学生熟悉的新年倒计时切入，直观呈现"秒"的存在，唤醒生活经验，激发探究欲望，自然引出课题。

**环节二 认识秒针与"秒"（约 10 分钟）**

教师活动：
1. 认识秒针。
师：钟面上有三根针，哪一根是秒针？它有什么特点？
生：最细、最长、走得最快的就是秒针。
师：你观察得真仔细。秒针是我们今天重点研究的朋友。
2. 秒针走 1 小格是 1 秒。
师：秒针走 1 小格是多长时间？
生：1 秒。
师：秒针走 1 大格呢？想想看，1 个大格里有几个小格？
生：5 个小格，所以走 1 大格是 5 秒。
师：真会动脑筋！秒针走 1 大格是 5 秒，走一圈是 60 秒。
3. 读带秒的时刻。
师：这个钟面上的时刻怎么读？（课件出示：时针走过 9、分针指向 3、秒针指向 6）
生：9 时 15 分 30 秒。
师：读得又清楚又完整。读时刻时，我们先看时针定几时，再看分针定几分，最后看秒针定几秒。

学生活动：观察钟面，指认秒针，探究秒针走 1 小格、1 大格、一圈的时间，练习读带秒的时刻。

设计意图：借助观察与推理，帮助学生掌握秒针的计数规律，为建立秒的表象和后面的进率学习打下基础。

**环节三 亲身体验：1 秒有多长（约 8 分钟）**

教师活动：
1. 听音辨秒。
师：请闭上眼睛，认真听秒针"滴答、滴答"的声音，每听到一声"滴答"，就是过了 1 秒。
（学生闭眼倾听）
2. 估一估。
师：现在我悄悄按表计时 10 秒，你们不能看，在心里默数，数到觉得过了 10 秒就举手，看谁估得最准。
（学生闭眼默数，教师核对并表扬估得准的学生）
3. 试一试：1 秒能做什么。
师：1 秒钟能做什么事呢？我们来试一试，看屏幕，跟着音乐做动作：眨一下眼睛、拍一下手、写一个数字。
生：（体验）
师：短短 1 秒，我们能眨一下眼睛、拍一下手。1 秒钟虽然很短，但每 1 秒都很宝贵。

学生活动：听音辨秒、闭眼估时、做 1 秒动作，在多种体验中感受 1 秒的长度。

设计意图：调动听觉、动觉等多感官体验 1 秒，把抽象的时间单位变得可感可知，帮助学生建立 1 秒的时间观念，发展量感。

**环节四 探究进率：1 分等于 60 秒（约 10 分钟）**

教师活动：
1. 观察秒针走一圈。
师：请睁大眼睛仔细观察动画，秒针从 12 出发走一圈，分针发生了什么变化？
生：分针走了一小格。
师：秒针走一圈是 60 秒，这时候分针正好走 1 小格，也就是 1 分。所以，1 分等于多少秒？
生：1 分 = 60 秒。
师：我们一起读一读，记一记。（板书：1 分 = 60 秒）
生：（齐读）
2. 一分钟能做什么。
师：那一分钟到底有多长？我们来做一个"一分钟体验"活动。选择你最喜欢的一项：一分钟写"正"字、一分钟拍球、一分钟跳绳，请小组长计时。
（学生体验并汇报）
生：我一分钟写了 12 个"正"字。
生：我一分钟拍了 80 下球。
师：一分钟能写这么多字、拍这么多球，原来 1 分钟也这么宝贵！我们要珍惜每一分钟。
3. 简单换算。
师：2 分等于多少秒？你是怎样想的？
生：1 分是 60 秒，2 分就是 2 个 60 秒，是 120 秒。
师：120 秒等于多少分呢？
生：120 秒里面有 2 个 60 秒，就是 2 分。
师：再想一想，1 时等于多少分？3 时呢？
生：1 时等于 60 分，3 时是 3 个 60 分，是 180 分。
师：把大的单位换成小的单位，就想有几个 60；把小的单位换成大的单位，就看里面有几个 60。这样换算就不会出错啦。

学生活动：观察动画发现秒针与分针的联动关系，归纳 1 分等于 60 秒；参与一分钟体验活动并交流感受。

设计意图：用动画把"秒针走一圈、分针走一小格"同时呈现，直观揭示进率；通过一分钟体验活动丰富量感，渗透珍惜时间的教育。

**环节五 巩固练习与课堂总结（约 7 分钟）**

教师活动：
1. 填空。
（1）1 分 = （ ）秒，1 时 = （ ）分。
（2）3 分 = （ ）秒，120 秒 = （ ）分。
2. 在（ ）里填上合适的时间单位。
（1）眨一下眼睛大约 1（ ）。
（2）一节课是 40（ ）。
（3）跑 50 米大约 10（ ）。
（4）午休大约 1（ ）。
3. 判断。
（1）秒针走 1 大格是 1 秒。（错，应是 5 秒）
（2）秒针走一圈是 60 秒，也就是 1 分。（对）
4. 连一连：把时、分、秒按从大到小的顺序排一排。
5. 课堂总结。
师：这节课你有什么收获？
生：我认识了秒，知道 1 分等于 60 秒。
生：我知道 1 秒很短，但也要珍惜。
师：希望大家平时做事时，心里想着时间，做个惜时守时的好孩子。

学生活动：独立填空、填单位、判断、排序，交流本节课的收获。

设计意图：练习层次分明，既有进率与单位的选择，又有易错辨析，还结合生活常识巩固时间单位的量感，让学生在总结中梳理知识。

**板书设计**

时、分、秒——认识秒
秒针：最细、最长、走得最快
走 1 小格是 1 秒，走 1 大格是 5 秒，走一圈是 60 秒
1 分 = 60 秒
1 时 = 60 分
体验：1 秒能眨一下眼睛，1 分钟能写很多字

**教学反思要点**

1. 新年倒计时情境有效唤醒学生对"秒"的感知，导入自然，学生兴趣浓厚，说明从生活经验出发是建立时间观念的捷径。
2. 估时活动最受欢迎，但部分学生估得偏差大，应给出"误差在 1 秒内算准"的评判标准，帮助学生校准。
3. 1 分等于 60 秒的进率由动画演示得出，还应让更多学生亲自观察实物钟表秒针与分针的联动，加深印象。
4. 一分钟体验活动中个别学生只顾玩闹、忘记记录数据，应提前明确任务和记录要求，让活动为理解服务。
5. 可补充"秒"在体育计时、短跑比赛中的使用，联系学生真实生活，进一步拓宽时间量感，让量感与生活同频共振。`,talk:`**一、说教材**

"时、分、秒"是人教版义务教育教科书数学三年级上册第一单元的内容，属于"常见的量"知识领域。学生在二年级已经认识了钟面，会读整时和半时，知道 1 时等于 60 分；本单元在已有基础上引入更小的时间单位"秒"，系统学习时、分、秒之间的进率与简单换算，为后面计算经过时间、解决生活中的时间问题奠定基础。可以说，本单元既是时间知识的系统整理，又是学生时间观念和量感发展的关键时期。本课时我选取"认识秒"作为公开课内容，它既是新知识，又与学生的生活经验紧密相连，便于通过体验活动展开教学，凸显"量感"这一核心素养的培育，具有承上启下的重要作用。
本课还特别关注数学与生活的联系，引导学生从倒计时、体育比赛、电视节目等真实场景中感受"秒"，把数学学习放在生活的大背景中，让知识学以致用。

**二、说学情**

三年级学生对时间并不陌生，每天起床、上课、放学都在与时间打交道，也常从电视节目、体育比赛中听到"秒"这个单位。但他们头脑中的"秒"往往只是一个模糊的概念，缺少对 1 秒长度的真实体验，对秒针与分针的联动关系也不够清楚。三年级学生的思维正处在从具体形象思维向抽象逻辑思维过渡的阶段，注意力相对集中但仍需要直观材料的支撑。因此，教学要从直观体验入手，让学生在听一听、估一估、试一试中逐步建立时间观念，把抽象的时间单位与具体的活动建立起联系。

**三、说教学目标**

依据课程标准，我确定了三个教学目标：一是认识秒针，知道秒针走 1 小格是 1 秒、走 1 大格是 5 秒，能正确读出带秒的时刻；二是通过看、听、估、试等活动建立 1 秒、1 分的时间观念，理解 1 分等于 60 秒，会进行简单的单位换算；三是感受时间的宝贵，养成珍惜时间、合理安排时间的好习惯。三个目标围绕知识与技能、过程与方法、情感态度价值观三个维度展开，共同指向学生量感的培养和时间观念的建立。

**四、说教学重难点**

本课的重点是认识秒针、理解 1 分等于 60 秒的进率，体验 1 秒的长短；难点是建立 1 秒的时间观念，理解秒针走一圈、分针恰好走 1 小格的对应关系。为了解决难点，我设计了听音辨秒、闭眼估时、一分钟体验等一系列活动，把看不见的时间变得可感、可量、可体验，让学生在亲身参与中建立真实的时间表象。

**五、说教法学法**

本课采用情境教学法、直观演示法和活动体验法。教师用新年倒计时创设真实情境，用动画演示秒针与分针的联动关系，组织多样化的体验活动。学法上，学生通过看一看、听一听、估一估、试一试，在做中学、在体验中学，充分发挥学习的主体作用。整节课以"体验"为主线，让数学学习与身体感知紧密结合，符合三年级学生的认知特点。
课前我准备了实物钟表模型和秒表，课件中嵌入了新年倒计时视频和一分钟体验音乐，为学生提供真实的计时工具和丰富的体验材料，保障体验活动顺利开展。

**六、说教学过程**

本课教学共五个环节。第一环节"新年倒计时"，约用 5 分钟，从生活情境自然引出"秒"。第二环节"认识秒针"，约用 10 分钟，认识秒针的特征，学习读带秒的时刻。第三环节"体验 1 秒"，约用 8 分钟，通过听音辨秒、闭眼估时、做一秒动作等建立 1 秒的时间观念。第四环节"探究进率"，约用 10 分钟，观察动画得出 1 分等于 60 秒，并进行一分钟体验，丰富量感。第五环节"练习总结"，约用 7 分钟，通过填空、判断、填单位等练习巩固所学。五个环节时间分配合理，合计 40 分钟，突出了重点，突破了难点。
这样的设计由情境到探究、由体验到应用，每一环节都指向 1 秒、1 分时间观念的建立，让学生在做中学、在悟中用，实现量感的自然生长。

**七、说板书设计**

我的板书以"秒"为核心，中间是课题"时、分、秒——认识秒"，左侧记录秒针的特征与走格规律，右侧呈现 1 分等于 60 秒、1 时等于 60 分两个进率，下方写上体验活动的结果。板书图文结合、要点突出，既利于学生记忆，又便于课堂回顾，起到提纲挈领的作用。
整个板书随着教学进程逐步生成，从课题、针的特征到进率、体验结果，每一步都留下学习的足迹，让学生的思维过程清晰可见。

**八、说教学反思与评价**

本课最大的特色是把时间单位"体验"出来，让学生在活动中学数学，量感培养落到实处。学生通过亲身体验，对 1 秒、1 分有了真切感受，珍惜时间的教育也水到渠成。但体验活动的组织对课堂时间控制要求较高，需要防止活动松散、拖沓。今后可将估时、计时训练常态化，并结合体育课、课间活动等真实场景，让学生在日积月累中形成敏锐的时间观念，让量感在持续体验中不断生长。
作为一节公开课，本节课力求朴素而扎实：没有花哨的形式，只有真实的体验，让每个学生都亲历时间的长短，感受数学与生活的温度，让我们在时间的长河里，做珍惜时间的人。`},"小学|三年级|数学|万以内的加减法":{plan:`**教学基本信息**

课题：万以内的加减法——三位数笔算加法与验算
教材版本：人教版义务教育教科书数学三年级上册
年级：三年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学三年级学生

**教学目标**

1. 掌握整十、整百数及两位数加、减两位数的口算方法，能正确、熟练地进行口算，发展数感和运算能力。
2. 理解三位数笔算加法的算理，掌握"相同数位对齐，从个位加起，哪一位满十就向前一位进 1"的笔算法则，能正确计算连续进位加法。
3. 掌握用交换加数位置、和减一个加数的方法验算加法，养成自觉验算的习惯，学会用估算检验结果，增强应用意识。

**教学重难点**

重点：掌握三位数加法的笔算法则，能正确计算连续进位加法并进行验算。
难点：理解连续进位的算理，正确处理每一步进上来的 1，避免漏加、错位。

**教学准备**

多媒体课件（书店购物情境）；计数器；口算卡片；课堂练习单；小圆点磁性贴。

**教学过程**

**环节一 情境导入：买书中的数学问题（约 5 分钟）**

教师活动：
师：六一儿童节快到了，老师想给同学们挑选几本新书。请看屏幕：一本《故事大王》271 元，一本《科学探秘》122 元，两本书一共要多少钱？
生：271 加 122。
师：要求一共多少元，就要把两个数合起来，用加法计算。今天，我们就一起来学习万以内的笔算加法。（板书课题：万以内的加减法——笔算加法）
生：好！

学生活动：读题、找条件，列出算式 271 + 122，明确学习任务。

设计意图：用贴近学生的购书情境引出新问题，让学生体会计算来自生活需要，同时为新课提供具体素材。

**环节二 口算热身：整十、整百数与两位数口算（约 5 分钟）**

教师活动：
出示口算卡片：50 + 30、700 - 200、46 + 25、38 + 27、800 + 120、960 - 560。
师：50 + 30 你是怎么算的？
生：5 个十加 3 个十是 8 个十，就是 80。
师：700 - 200 呢？
生：7 个百减 2 个百是 5 个百，就是 500。
师：46 + 25 呢？
生：先算 40 + 20 = 60，再算 6 + 5 = 11，合起来是 71。
师：说得真完整！口算时，我们把整十、整百数看成几个十、几个百，两位数就拆成整十数和一位数，这样算起来又对又快。

学生活动：开火车口算，说清口算思路。

设计意图：口算热身既复习旧知，又为笔算中的"满十进一"提供算理支撑，帮助学生实现从口算到笔算的自然迁移。

**环节三 探究新知：三位数笔算加法（约 15 分钟）**

教师活动：
1. 不进位加法：271 + 122。
师：用竖式计算 271 + 122，先写 271，再写加号。122 的个位、十位、百位各要对齐哪一位？
生：个位对个位，十位对十位，百位对百位。
师：对，相同数位对齐。从哪一位加起？
生：从个位加起。
师：个位 1 加 2 得 3，写在个位；十位 7 加 2 得 9，写在十位；百位 2 加 1 得 3，写在百位。结果是？
生：393。
2. 一次进位加法：271 + 364。
师：十位 7 加 6 得 13，满了 10，怎么办？
生：满十进一，十位写 3，向百位进 1。
师：进上来的这个 1，可别忘了加到百位上。百位 2 + 3 + 1 得几？
生：6。
师：结果是 635。像这样，哪一位上的数相加满十，就向前一位进 1。
3. 连续进位加法：298 + 174。
师：这个算式有点难，个位 8 + 4 得 12，怎么写？
生：个位写 2，向十位进 1。
师：十位 9 + 7 得 16，还要加上进上来的 1，是几？
生：17，满十再向百位进 1，十位写 7。
师：百位 2 + 1 + 1 得 4。结果是多少？
生：472。
师：连续进位时，每一步都要先加上进上来的 1。我们用小圆点做记号，就不容易漏加了。（板贴小圆点）

学生活动：跟学、板演竖式，说一说每一步的计算过程，在比较中发现进位加法的规律。

设计意图：由不进位到一次进位、再到连续进位，层层递进，帮助学生完整经历笔算法则的建构过程；用小圆点作记号突破漏加进位的易错点。

**环节四 学会验算：养成检验习惯（约 8 分钟）**

教师活动：
师：怎样知道我们算得对不对呢？
生：验算。
师：加法可以用什么方法验算？
生：交换两个加数的位置，再算一遍。
师：很好。交换加数位置，和应该不变。我们验算 122 + 271，得数是？
生：393，和原来的得数一样，说明算对了。
师：还有别的验算方法吗？
生：用和减一个加数，看是不是等于另一个加数。
师：对，用 393 减 271，看是不是等于 122。如果等于，就说明计算正确。
师：请你选择一种方法，验算 298 + 174 = 472 对不对。
（学生独立验算，指名汇报）
生：我用 472 - 174 = 298，对了。
师：以后做完加法，都要自觉验算，做个细心的小朋友。

学生活动：学习两种验算方法，独立验算并交流，养成检验习惯。

设计意图：把验算作为计算的重要环节，教给学生两种验算方法，让"算完必验"成为自觉行为，培养认真负责的学习态度。

**环节五 分层练习与课堂总结（约 7 分钟）**

教师活动：
1. 竖式计算并验算：432 + 158、697 + 235。
2. 判断改错。
课件出示竖式：385 加 276，个位 5 + 6 = 11 写 1 进 1，十位 8 + 7 = 15 忘了加进位 1，写成 15 写 5 进 1，百位 3 + 2 + 1 = 6，得 651。
师：他算对了吗？错在哪里？
生：十位忘记加进上来的 1，15 加 1 应该是 16，写 6 进 1，百位 3 + 2 + 1 + 1 = 7，得 761。
师：观察得真仔细！进位加法最容易漏加进上来的 1，一定要先加进位再写数。
3. 解决问题。学校图书馆有故事书 478 本，连环画 355 本，一共有多少本？先估算，再笔算。
生：估算 478 约等于 500，355 约等于 400，大约 900 本；笔算 478 + 355 = 833 本。
师：估出来的 900 和实际 833 相差大吗？为什么？
生：不算大，因为 478 比 500 小、355 比 400 小，所以实际要比 900 小一些。
师：估算帮助我们预先知道得数的大概范围，算完再对照一下，就能发现计算有没有错误。
4. 课堂总结。
师：笔算加法要注意什么？
生：相同数位对齐，从个位加起，哪一位满十就向前一位进 1。
生：进上来的 1 要记得加，做完要验算。
师：大家说得真全面！带着这些好习惯，做任何计算都不会出错。

学生活动：独立完成竖式并验算，分析错例，解决实际问题，总结笔算方法。

设计意图：练习由易到难，改错题直击易错点，估算与笔算结合培养检验意识，让学生在应用中巩固算法、内化算理。

**板书设计**

万以内的加减法——笔算加法
271 + 122 = 393
271
+ 122
——
393
相同数位对齐，从个位加起
哪一位满十，就向前一位进 1
验算：交换加数位置 / 和减一个加数

**教学反思要点**

1. 口算热身有效唤醒了"满十进一"的旧知，为笔算算理提供了支撑，但口算题量可再精简，给新授留出更充足的时间。
2. 连续进位加法 298 + 174 的突破比较到位，用小圆点作记号显著减少了漏加进位的情况，这一方法值得保留。
3. 个别学生数位没有对齐，应借助"数位对齐表"或格子纸辅助书写，降低书写难度。
4. 验算教学用时略紧，部分学生验算格式不规范，后续要统一验算的书写格式并常态化要求。
5. 估算与解决问题的结合还不够充分，可再设计"够不够"类问题，让估算真正成为检验计算的工具。`,talk:`**一、说教材**

"万以内的加减法"是人教版义务教育教科书数学三年级上册第二单元的内容。学生在二年级已经学习了一、两位数的加减法和表内乘法，本单元在此基础上把计算范围扩展到万以内，包括口算、笔算、估算和解决问题四大板块，是小学阶段整数加减法教学的收官单元。其中笔算加法及其验算是本单元的重点内容，它既巩固了"满十进一"的十进制思想，又为后面学习多位数乘法、四则混合运算以及解决复杂实际问题打下基础。本课时我选取"三位数笔算加法与验算"作为公开课内容，把口算、笔算、估算融为一体，具有很强的结构性，能较好地体现计算教学中算理与算法并重的理念。
计算教学容易陷入机械训练，因此本课特别注重情境的支撑和算理的支撑，让学生在解决真实问题的过程中学计算、用计算，感受计算的价值，改变"为算而算"的局面。

**二、说学情**

三年级学生已经能熟练口算两位数的加减法，也初步掌握了两位数笔算加法"相同数位对齐、从个位加起"的法则，具备一定的迁移类推能力。但面对三位数特别是连续进位加法时，学生常出现漏加进位、数位错位等问题，尤其是被加数中间有 0 时的退位、进位更容易出错。同时，多数学生缺乏自觉验算的习惯，算完就走。因此，本课既要教算法，更要让学生理解算理，并逐步养成"算完必验"的检验意识，为学生后续学习打下严谨计算的基础。
另外，三年级学生虽已接触过估算，但估算意识薄弱、方法模糊，本课把估算与笔算相结合，帮助学生逐步形成先估后算、算后对照的好习惯，让估算真正成为检验计算的工具。

**三、说教学目标**

依据课程标准，我确定了三个教学目标：一是掌握整十、整百数和两位数加、减两位数的口算方法，能正确、熟练地口算，发展数感；二是理解三位数笔算加法的算理，掌握"相同数位对齐、从个位加起、满十进一"的笔算法则，能正确计算连续进位加法；三是学会用交换加数位置、和减一个加数的方法验算加法，养成自觉验算和用估算检验的习惯。三个目标从技能走向习惯，体现对学生运算能力这一核心素养的完整培养。

**四、说教学重难点**

本课的重点是掌握三位数加法的笔算法则，能正确计算连续进位加法并验算；难点是理解连续进位的算理，正确处理每一步进上来的 1。连续进位涉及"先加进位再进位"的多步操作，信息量大、步骤多，学生容易顾此失彼。我通过小圆点作记号、边算边说、错例辨析等方法突破难点，让每一步计算都有章可循、有迹可查。

**五、说教法学法**

本课采用情境教学法、迁移类推法和对比辨析法。教师以购书情境贯穿始终，引导学生在复习口算的基础上迁移出笔算法则；组织学生板演、验算、改错，在对比中深化理解。学法上，学生经历"试算—归纳—应用—检验"的完整过程，既动手又动脑，做计算的主人，让计算课不再枯燥。
课前我准备了计数器、口算卡片和课堂练习单，用计数器拨珠直观演示满十进一的过程，用小圆点磁性贴标注进位，为突破难点提供支撑。

**六、说教学过程**

教学过程分五个环节。第一环节"买书情境"约用 5 分钟，从生活问题列式，引入课题。第二环节"口算热身"约用 5 分钟，复习口算方法，为笔算蓄势。第三环节"探究笔算"约用 15 分钟，从不进位到一次进位、再到连续进位，层层递进，归纳法则。第四环节"学会验算"约用 8 分钟，学习两种验算方法并当堂实践。第五环节"练习总结"约用 7 分钟，通过竖式、改错、估算解决问题巩固提升。各环节环环相扣，时间分配合理，合计 40 分钟。
这样设计的核心是让学生经历"口算做铺垫、笔算建方法、验算养习惯、估算能检验"的完整学习链，既有算法的建构，又有习惯的养成。

**七、说板书设计**

我的板书左边是竖式范例，清楚展示数位对齐与计算过程；中间用大字呈现笔算法则"相同数位对齐、从个位加起、满十进一"；右边写验算的两种方法。板书结构化地呈现了本课的核心知识，重点一目了然，便于学生回顾与记忆。
整个板书随教学进程逐步生成：先出竖式范例，再出笔算法则，最后出验算方法，条理清晰，便于学生对照运用。板书中的小圆点记号，恰恰是学生最容易出错、也最需要提醒的地方，既突出了教学重点，又化解了学习难点，让知识在板书中一目了然。

**八、说教学反思与评价**

本课以问题情境驱动，让学生经历算法从无到有的完整建构过程，算理与算法并重，验算习惯得到有效强化。课堂上学生的参与度较高，特别是小圆点记号的方法深受学生欢迎。不足之处是个别学生在连续进位时仍会顾此失彼，今后应增加专项的"进位接力"口算训练，并坚持每次计算都验算，让严谨的计算习惯在反复练习中扎根，真正转化为学生的运算素养。
整体来看，本课做到了三点：算理讲得透、算法练得实、习惯养得牢。只要坚持这样教，学生的运算能力和认真态度就能稳步提升。计算教学任重道远，我将和学生一起，在一次又一次正确计算和验算中，收获严谨与自信。`},"小学|三年级|数学|倍的认识":{plan:`**教学基本信息**

课题：倍的认识
教材版本：人教版义务教育教科书数学三年级上册
年级：三年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学三年级学生

**教学目标**

1. 结合具体情境理解"倍"的含义，知道"倍"表示两个数量之间的比较关系，能借助圈一圈、画一画的方法表示两个量的倍数关系，发展模型意识。
2. 掌握求一个数是另一个数的几倍的方法（用除法计算），会求一个数的几倍是多少（用乘法计算），能正确列式并解决简单的实际问题。
3. 在摆一摆、圈一圈、比一比等活动中，经历"倍"概念的建立过程，体会"倍"与乘、除法之间的联系，发展推理能力，增强应用意识。

**教学重难点**

重点：建立"倍"的概念，掌握求一个数是另一个数的几倍和求一个数的几倍是多少的方法。
难点：正确区分"求几倍用除法、求几倍是多少用乘法"，理解"倍"是比较两个量的关系。

**教学准备**

圆片、小棒等磁性学具；多媒体课件（小动物情境图）；课堂学习单；对比题组卡片。

**教学过程**

**环节一 情境导入：拍手游戏感受倍数关系（约 5 分钟）**

教师活动：
师：上课前，我们先来玩一个拍手游戏。老师拍 2 下，请你拍 4 下，你拍的是老师的几倍？
生：2 倍。
师：你是怎么想的？
生：2 下是 1 份，4 下里面有 2 个 2 下，所以是 2 倍。
师：说得真清楚！生活中像这样比一比的说法很多。今天，我们就一起来认识"倍"这个新朋友。（板书课题：倍的认识）
生：好！

学生活动：参与拍手游戏，感受"几个几"与倍的关系，进入学习状态。

设计意图：用拍手游戏调动学生兴趣，在"几个几"的基础上自然引出"倍"，让新概念有生长点。

**环节二 动手操作：初步建立"倍"的概念（约 12 分钟）**

教师活动：
1. 摆一摆，说一说。
师：请大家拿出圆片，红圆片摆 3 个，白圆片摆 6 个。想一想，把红圆片的 3 个看成 1 份，白圆片里有几个这样的 1 份？
生：2 个。
师：请你动手圈一圈，验证一下。
生：（圈出两个 3 个一份）
师：白圆片的个数是红圆片的几倍？
生：2 倍。
师：因为 6 里面正好有 2 个 3，所以说白圆片的个数是红圆片的 2 倍。这里，我们把较少的红圆片看成标准，标准就是 1 份。
2. 圈一圈，练一练。
师：请你在学习单上圈一圈：8 是 4 的几倍？12 是 3 的几倍？
生：8 里面有 2 个 4，8 是 4 的 2 倍。
生：12 里面有 4 个 3，12 是 3 的 4 倍。
师：大家发现了吗？求一个数是另一个数的几倍，就是看这个数里面有几个另一个数那么多。
4. 画一画，用线段图表示倍。
师：除了摆一摆、圈一圈，我们还可以画线段图。用一小段表示 1 份，也就是红圆片的 3 个；白圆片有 2 份，就画 2 小段。你发现什么？
生：线段图一眼就能看出 6 是 3 的 2 倍。
师：画线段图时，每一份要画得一样长，长短大致对应，这样倍数关系才看得清清楚楚。

学生活动：摆圆片、圈一圈、画线段图，在操作中说"几个几"，初步理解倍的含义。

设计意图：以操作支撑理解，让学生在"摆、圈、说"中直观感受倍就是"一个数里包含几个标准量"，使抽象概念看得见、摸得着。

**环节三 建立方法：求一个数是另一个数的几倍（约 8 分钟）**

教师活动：
师：12 是 3 的几倍，就是看 12 里面有几个 3，可以直接用除法计算。谁来列式？
生：12 ÷ 3 = 4。
师：12 是 3 的 4 倍。注意看，算式得数的后面写不写"倍"呢？
生：不写。
师：对！"倍"表示的是两个数量之间的关系，不是单位名称，所以算式后面不写"倍"。
师：再来一题：18 是 6 的几倍？请列式计算。
生：18 ÷ 6 = 3，18 是 6 的 3 倍。
师：算完想一想，这里把谁看成 1 份？
生：把 6 看成 1 份，18 里面有 3 个 6。

学生活动：列式计算，明确"求几倍用除法、结果不带倍字"。

设计意图：从操作走向算式，帮助学生抽象出"一个数 ÷ 另一个数 = 倍数"的数量关系，同时辨析"倍"不是单位，扫清易错点。

**环节四 对比辨析：求一个数的几倍是多少（约 8 分钟）**

教师活动：
师：刚才我们求的是几倍，现在反过来，3 的 4 倍是多少？先想一想，3 的 4 倍就是几个 3？
生：4 个 3。
师：4 个 3 是多少？用什么方法算？
生：3 × 4 = 12。
师：求一个数的几倍是多少，就是求几个几相加，用乘法计算。
师：我们来比一比这两个问题：
（1）12 是 3 的几倍？—— 12 ÷ 3 = 4，求份数，用除法。
（2）3 的 4 倍是多少？—— 3 × 4 = 12，求总数，用乘法。
师：一个是已知总数求份数，用除法；一个是已知每份求总数，用乘法。两道题虽然都出现了"倍"，但求法不一样，同学们一定要分清。
师：我们可以记住一句口诀："求几倍，用除法；几倍是多少，用乘法。"请大家读一读、记一记。
生：（齐读口诀）

学生活动：对比两道题，说出数量关系和算法的区别，诵读记忆口诀。

设计意图：通过对比题组，凸显"求几倍"与"求几倍是多少"的本质区别，帮助学生建立清晰的判断标准，突破本课难点。

**环节五 综合练习与课堂总结（约 7 分钟）**

教师活动：
1. 圈一圈，填一填。△有 2 个，○有 6 个，○的个数是△的（ ）倍。（6 ÷ 2 = 3）
2. 说一说。看图说一句话：红花有 4 朵，黄花有 12 朵，黄花的朵数是红花的（ ）倍。
3. 解决问题。小丽今年 5 岁，妈妈的年龄是小丽的 7 倍，妈妈今年多少岁？
生：5 × 7 = 35（岁）。
4. 编一编。请你模仿刚才的题目，编一道用倍解决的问题考考同桌。
5. 想一想，比一比。老师有 8 支铅笔，正好是小刚的 2 倍，小刚有几支铅笔？
师：这道题知道的是倍数，求的是标准量。8 是标准量的 2 倍，就是把 8 平均分成 2 份，每份是几？
生：8 ÷ 2 = 4（支），小刚有 4 支铅笔。
师：真了不起！求标准量时，用已知的数除以倍数，也能算出 1 份是多少。
6. 课堂总结。
师：这节课你认识了什么新朋友？它有什么本领？
生：认识了"倍"，能表示两个数谁是谁的几倍。
生：求几倍用除法，求几倍是多少用乘法。
师：倍在生活里到处都有，回家以后，可以分水果、分糖果时用倍说一说，做个爱思考的孩子。

学生活动：独立完成练习，同桌互相编题，交流总结本课收获。

设计意图：练习从填到说、从算到编，层层深入，既巩固知识，又让学生体会到倍在生活中的应用价值。

**板书设计**

倍的认识
标准量（1 份）
红：3 个    白：6 个
6 里面有 2 个 3，6 是 3 的 2 倍
求几倍：用除法（一个数 ÷ 另一个数）
求几倍是多少：用乘法（一个数 × 倍数）
倍不是单位，结果不写"倍"

**教学反思要点**

1. 操作活动让"倍"的概念落地生根，学生在摆一摆、圈一圈中理解到位，说明直观操作是概念教学的有效路径。
2. 对比题组辨析效果好，多数学生能分清求几倍用除法、求几倍是多少用乘法，但个别学生仍需借助画图判断标准量。
3. "倍"不是单位的辨析要反复强调，仍有学生习惯在得数后写"倍"，可在后续练习中持续纠错。
4. 编题互考环节学生兴趣浓厚，但部分学生编题不规范，应给出句式支架，如"××是××的几倍"。
5. 本课与乘除法的联系挖掘得还不够，可补充"已知倍数求标准量"的逆向问题，为后续学习铺路。
6. 逆向问题"已知倍数求标准量"学生初次接触，正确率不高，说明逆向思维需要专门训练，可在下一课时安排针对性的变式练习，帮助学生建立完整的数量关系网络。`,talk:`**一、说教材**

"倍的认识"是人教版义务教育教科书数学三年级上册第五单元的内容。在此之前，学生已经掌握了乘法和除法的意义，能熟练计算表内乘除法；本单元第一次引入"倍"这一概念，它是两个数量之间比较关系的直观表达，也是沟通乘法、除法意义与实际问题的重要桥梁。此后学生将运用"倍"解决归一、归总等多种类型的问题，因此本课在整个小学阶段具有重要的奠基作用。本课时我选取"认识倍、求一个数是另一个数的几倍、求一个数的几倍是多少"这一核心内容，把概念建立与简单应用融为一体，既突出概念的本质，又体现数学知识的应用价值，为后续学习做好了铺垫。
倍的概念比较抽象，因此本课坚持从操作入手、以图形支撑，让概念与乘法、除法的意义自然勾连，帮助学生建立完整的数量关系结构。

**二、说学情**

三年级学生具有初步的比较意识，生活中有"我的糖是你的 2 倍"这样的模糊经验，但对"倍"的概念缺乏系统的理解，常常只是口头说说、并不理解其数学含义。他们擅长形象思维，喜欢动手操作，对"几个几"有比较清楚的认识，这为学习"倍"提供了生长的起点。学生学习的主要困难在于：把"倍"当作单位名称写在得数后面、分不清求几倍与求几倍是多少、确定标准量时出错。因此，本课要充分运用操作与对比，帮助学生建立清晰的概念，扫除认知障碍。

**三、说教学目标**

我确定了三个教学目标：一是结合具体情境理解倍的含义，知道倍表示两个数量之间的比较关系，能借助圈一圈、画一画表示两个量的倍数关系；二是掌握求一个数是另一个数的几倍和求一个数的几倍是多少的方法，能正确列式解决简单的实际问题；三是在操作、比较中发展推理能力，体会倍与乘、除法之间的联系，增强应用意识。三个目标层层递进，共同指向学生模型意识与应用意识的发展。

**四、说教学重难点**

本课的重点是建立"倍"的概念，掌握两种基本问题的解法；难点是正确区分"求几倍用除法、求几倍是多少用乘法"，理解倍是比较两个量的关系。为了突破难点，我采用"摆一摆、圈一圈、对比辨析"的策略，让学生在操作中感悟倍的本质，在对比中掌握判断的方法，让难点在体验与比较中自然化解。

**五、说教法学法**

本课采用操作发现法、对比辨析法和情境教学法。教师组织摆圆片、圈一圈等活动，引导学生发现倍的本质；用对比题组帮助学生辨析两种问题，建立清晰的解题思路；以拍手游戏、小动物情境贯穿课堂，保持学习兴趣。学生在操作、观察、比较中主动建构知识，真正成为学习的主人，体现"做数学、用数学"的理念。
课前我为学生准备了红白圆片、小棒等磁性学具和课堂学习单，课件以动物采蘑菇的情境呈现，为学生动手操作和直观感知提供了有力保障。

**六、说教学过程**

本课共五个环节。第一环节"拍手游戏"约用 5 分钟，在"几个几"的体验中引出倍。第二环节"操作建立概念"约用 12 分钟，通过摆、圈、说理解倍的含义，明确标准量。第三环节"求一个数是另一个数的几倍"约用 8 分钟，从操作抽象出用除法计算的方法。第四环节"求一个数的几倍是多少"约用 8 分钟，用对比题组辨析两种解法。第五环节"练习总结"约用 7 分钟，通过填一填、说一说、算一算、编一编巩固提升。各环节时间分配合理，合计 40 分钟，重点突出、难点突破。
整节课以"标准量"这一核心概念为主线，从确定标准、圈出份数，到列出算式、辨析方法，环环相扣，让学生的思维沿着直观—半抽象—抽象的路径逐步攀升。

**七、说板书设计**

我的板书以"标准量"为主线，左侧用红圆片、白圆片直观呈现"6 里面有 2 个 3，6 是 3 的 2 倍"；右侧分两行写出"求几倍用除法、求几倍是多少用乘法"的方法；下方特别标注"倍不是单位，结果不写倍"。板书直观形象、重点突出，为学生提供了清晰的思维支架，也为课堂小结提供了线索。
整个板书随着教学进程逐步生成，从圆片图到标准量，再到两种解题方法，学生在板书中看到了概念从直观到抽象的完整过程。最后的提示语"倍不是单位"，是对本课最容易出错之处的及时提醒，帮助学生牢牢记住这个关键点。

**八、说教学反思与评价**

本课最大的亮点是让抽象的"倍"在操作中变得可见，学生通过摆、圈、说真正理解了概念的本质；对比辨析则让学生清晰掌握了两种问题的解法。课堂上学生参与热情高涨，编题互考环节尤其活跃。不足之处是个别学生对标准量的确定仍有困难，今后要多设计"变化标准量"的练习，如"谁是谁的几倍"互换说法，让学生在变化中深化对倍的理解，让概念在运用中越来越清晰。
作为公开课，本节课追求的是真实的学习过程：让学生经历从不会到会、从模糊到清晰的完整认知过程，让每一个孩子都能在操作中有所发现、在表达中深化理解。倍的认识是概念教学的一扇窗，愿每一个孩子都能透过这扇窗，看见数量之间的关系之美，学会用数学的眼光观察世界，在不断的比较与思考中爱上数学。`},"小学|三年级|数学|多位数乘一位数":{plan:`**教学基本信息**

课题：多位数乘一位数——笔算乘法（不进位与进位）
教材版本：人教版义务教育教科书数学三年级上册
年级：三年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学三年级学生

**教学目标**

1. 结合购书、购物等生活情境，理解多位数乘一位数的意义，掌握整十、整百数乘一位数的口算方法，能正确、熟练地口算，发展运算能力。
2. 借助小棒操作与直观图示，理解多位数乘一位数的笔算算理，掌握竖式书写格式与"从个位乘起、逐位去乘"的计算顺序，能正确计算不进位乘法。
3. 掌握进位乘法"哪一位上乘得的积满几十，就向前一位进几"的规则，能正确处理先乘、再加进位的顺序，养成验算和用估算检验的习惯，增强应用意识。

**教学重难点**

重点：掌握多位数乘一位数（不进位与进位）的笔算方法，理解竖式中每一步计算的实际意义。
难点：理解进位与连续进位的算理，正确处理"先乘、再加进位、再进位"的先后顺序，避免丢进位、漏写 0。

**教学准备**

多媒体课件（学校图书馆买书情境）；小棒学具（每捆 10 根、每袋 100 根）；口算卡片；课堂练习单；磁性竖式板贴。

**教学过程**

**环节一 情境导入：图书馆买书问题（约 5 分钟）**

教师活动：
师：学校图书馆新到一批图书，每套《十万个为什么》23 元，买 3 套一共要多少钱？
生：23 × 3。
师：每套 23 元，买 3 套，就是求 3 个 23 是多少，用乘法计算。像 23 这样的两位数，还有三位数，乘一位数，就是我们今天要学习的内容——多位数乘一位数。（板书课题：多位数乘一位数——笔算乘法）
生：好！

学生活动：读题列式，理解乘法的意义，明确学习内容。

设计意图：用购书情境引出多位数乘一位数的问题，让学生体会乘法来源于生活需要，激发学习兴趣。

**环节二 口算探究：整十、整百数乘一位数（约 10 分钟）**

教师活动：
1. 口算 20 × 3。
师：20 × 3 等于多少？你是怎样想的？
生：想 3 个 20 相加，是 60。
师：还有更简便的方法吗？我们看计数单位，2 在十位上表示 2 个十，2 个十乘 3 得几个十？
生：6 个十，就是 60。
师：对！先算 2 × 3 = 6，再看 20 的末尾有 1 个 0，就在 6 的后面添 1 个 0，得 60。
2. 口算 500 × 6、30 × 4。
师：500 × 6 怎么算？
生：先算 5 × 6 = 30，再添两个 0，得 3000。
师：30 × 4 呢？
生：先算 3 × 4 = 12，再添一个 0，得 120。
师：大家发现规律了吗？口算整十、整百数乘一位数，先算 0 前面的数相乘，再看乘数末尾一共有几个 0，就在积的末尾添几个 0。添 0 的个数可不多不少哦。
3. 口算练习：20 × 4、300 × 2、40 × 5、600 × 3。

学生活动：探索口算方法，发现"先乘、再添 0"的规律，进行口算练习。

设计意图：从加法意义过渡到计数单位的角度，帮助学生理解口算算理；通过找规律、练一练，掌握添 0 的口算方法，为笔算奠定基础。

**环节三 操作探究：笔算不进位乘法 23 × 3（约 12 分钟）**

教师活动：
1. 小棒操作理解算理。
师：23 × 3 到底得多少？我们请小棒来帮忙。先摆 3 个 23，每份是 2 捆加 3 根。
师：一共多少根？可以怎样算？
生：3 个 3 根是 9 根，3 个 2 捆（20 根）是 60 根，合起来 69 根。
师：也就是 3 个 3 加 3 个 20，合起来是 69。这个道理，竖式里就能一步一步记下来。
2. 学习竖式书写。
师：写竖式时，把 3 写在 23 个位的下面，相同数位对齐。从哪一位乘起？
生：从个位乘起。
师：先用 3 乘个位上的 3，得 9，9 写在个位；再用 3 乘十位上的 2，得 6，6 写在十位，表示 6 个十。结果是？
生：69。
师：为什么从个位乘起？因为乘得的积要写在对应的数位上，从个位乘起不容易错位。
3. 练一练：12 × 4、22 × 3。（指名板演，集体订正）

学生活动：摆小棒理解算理，跟学竖式，独立完成两道竖式并说计算过程。

设计意图：先用小棒操作支撑算理，再过渡到竖式，让每一步计算都有实物对应，帮助学生真正理解"为什么这样算"。

**环节四 突破难点：笔算进位与连续进位（约 8 分钟）**

教师活动：
1. 一次进位：24 × 4。
师：个位 4 × 4 = 16，满了 10，怎么办？
生：个位写 6，向十位进 1。
师：进上来的 1 要记在十位的左上方，写小一点。十位 2 × 4 = 8，还要加上进上来的 1，得 9。结果是 96。
师：记住：哪一位上乘得的积满几十，就向前一位进几，进位的数必须在下一步计算时加进去。
2. 连续进位：137 × 5。
师：这道题要连续进位，我们边算边念口诀。个位 7 × 5 = 35，写 5 进 3；十位 3 × 5 = 15，加进位 3 得 18，写 8 进 1；百位 1 × 5 = 5，加进位 1 得 6。结果是 685。
师：连续进位时，每一步都要做到"先乘、再加进位、再进位"，口里默念：先乘，再加进位，满几十进几。
3. 估算检验。
师：我们可以用估算检验一下，137 接近 100，100 × 5 = 500，积大约在 500 左右，685 合理吗？
生：合理。
师：估算能帮我们快速判断答案有没有离谱，是个检验的好办法。

学生活动：跟学一次进位与连续进位竖式，边算边说"先乘、再加、再进位"，用估算检验结果。

设计意图：以口诀引领计算过程，规范进位乘法的操作顺序；引入估算检验，让学生体会估算的价值，培养检验习惯。

**环节五 分层练习与课堂总结（约 5 分钟）**

教师活动：
1. 竖式计算：16 × 3、28 × 4、235 × 4。
2. 判断改错。
（1）30 × 4 = 12。（错，漏添 0，应是 120）
（2）23 × 3 竖式，十位乘完忘记写积，得 29。（错，应是 69）
3. 解决问题。每箱苹果 12 千克，5 箱苹果一共多少千克？先估一估，再算一算。
生：估算 12 大约等于 10，10 × 5 = 50，大约 50 千克；笔算 12 × 5 = 60 千克。
4. 课堂总结。
师：今天你学会了什么？
生：我会口算整十、整百数乘一位数了。
生：我会用竖式计算进位乘法了，记住"先乘、再加进位"。
师：以后计算时，记得用估算检验，做个细心的计算小能手。

学生活动：独立完成竖式练习，辨析错例，解决实际问题，总结本课收获。

设计意图：分层练习由易到难，错例直击漏添 0、漏加进位等易错点，估算与笔算结合强化检验意识，让学生在应用中巩固方法。

**板书设计**

多位数乘一位数——笔算乘法
23 × 3 = 69
23
× 3
——
69
从个位乘起，逐位去乘
哪一位满几十，就向前一位进几
先乘，再加进位
估算检验：137 × 5 约等于 500

**教学反思要点**

1. 小棒操作让算理落地，学生在摆一摆中理解了 23 × 3 就是 3 个 20 加 3 个 3，竖式与操作一一对应，教学效果好。
2. "先乘、再加进位、再进位"的口诀有效规范了进位计算的操作顺序，口算错误明显减少，这一常规语言应持续使用。
3. 口算添 0 规则仍是易错点，30 × 4 算成 12 的现象仍有出现，需再设计对比题组，如 30 × 4 与 300 × 4 比较。
4. 部分学生竖式书写数位不够整齐，应强调进位数字写小、写在规定位置，规范书写格式。
5. 估算检验刚刚引入，学生运用意识还不强，今后要坚持"估、算、查"三步法，让检验成为计算的习惯。`,talk:`**一、说教材**

"多位数乘一位数"是人教版义务教育教科书数学三年级上册第六单元的内容。学生在二年级已经掌握了表内乘法，本单元在此基础上把乘法拓展到多位数乘一位数，包括口算、笔算、估算和解决问题四大板块，是整数乘法学习的重要里程碑。笔算乘法是本单元的核心内容，它运用了"分步相乘、逐位累加"的算理，为后续学习两位数乘两位数、多位数乘多位数奠定方法基础。本课时我选取"笔算乘法（不进位与进位）"作为公开课内容，把口算、笔算、估算有机结合，既体现计算教学的完整性，又能在情境中发展学生的运算能力和应用意识，具有承前启后的重要作用。
同时，本课注重算理与算法的一致性，让学生明白竖式不过是把口算的思维过程分步记录下来，从而消除对竖式的神秘感，建立起"算有根据"的严谨态度。

**二、说学情**

三年级学生已经熟练掌握表内乘法，能进行整十、整百数乘法的简单口算，具有一定的迁移类推能力，学习积极性较高。他们学习本课的主要困难在于：对"从个位乘起、逐位去乘"的算理理解不到位，只会机械模仿；进位乘法中容易忘记加进位数、漏乘某一位；竖式书写不够规范，数位容易错位。因此，教学需要借助小棒操作支撑算理理解，用口诀规范计算步骤，用估算培养检验意识，帮助学生真正理解每一步计算的道理。
此外，教学中还要注意分层施教：对基础薄弱的学生先巩固不进位竖式，对学有余力的学生鼓励挑战连续进位和估算综合题，让每个学生都能在原有基础上得到发展。

**三、说教学目标**

我确定了三个教学目标：一是结合购书、购物等生活情境，理解多位数乘一位数的意义，掌握整十、整百数乘一位数的口算方法，能正确熟练地口算；二是借助小棒操作理解笔算算理，掌握竖式书写格式与"从个位乘起"的计算顺序，能正确计算不进位乘法；三是掌握"哪一位上乘得的积满几十，就向前一位进几"的进位规则，能正确处理先乘、再加进位的顺序，养成验算和用估算检验的习惯。三个目标由口算到笔算、由算法到算理，层层推进，指向运算能力的培养。

**四、说教学重难点**

本课的重点是掌握多位数乘一位数的笔算方法，理解竖式中每一步计算的实际意义；难点是理解进位与连续进位的算理，正确处理"先乘、再加进位、再进位"的先后顺序。我采用小棒操作、口诀引领、错例辨析三种策略突破难点，让算理看得见、步骤记得住，使进位乘法不再成为学生的畏难点。

**五、说教法学法**

本课采用情境教学法、直观操作法和讲练结合法。以"图书馆买书"情境贯穿课堂，用小棒操作支撑算理，用口诀引领进位计算，通过板演、改错、估算等活动深化理解。学生通过摆一摆、算一算、说一说、查一查，经历"操作—抽象—应用"的完整过程，在做中学、在思中悟，充分体现学生的主体地位。
课前我准备了小棒学具，每捆 10 根、每袋 100 根，用它们直观呈现几十、几百与一位数相乘的过程；同时备有口算卡片和课堂练习单，保证练习的针对性和密度。

**六、说教学过程**

教学过程分为五个环节。第一环节"购书情境"约用 5 分钟，从生活问题列式，引出课题。第二环节"口算整十、整百数乘一位数"约用 10 分钟，通过探索发现添 0 的规律。第三环节"笔算不进位乘法"约用 12 分钟，用小棒操作理解算理，学习 23 × 3 的竖式。第四环节"笔算进位乘法"约用 8 分钟，突破 24 × 4、137 × 5 的进位难点，并引入估算检验。第五环节"练习总结"约用 5 分钟，通过竖式、改错、解决问题巩固提升。各环节时间分配合理，合计 40 分钟，重点突出、难点突破。
全课围绕"算理支撑算法"展开：先口算感受计数单位，再操作理解算理，随后规范竖式，最后用估算检验，形成完整的计算教学闭环。

**七、说板书设计**

我的板书左侧是 23 × 3 的完整竖式，直观展示书写格式与计算过程；中间用大字呈现两条法则"从个位乘起、逐位去乘""哪一位满几十就向前一位进几"；右侧写出计算口诀"先乘、再加进位"和估算检验的提示。板书简洁明了，突出算理与算法的统一，为学生的计算提供了清晰的路径指引。
整个板书随着教学进程逐步生成，竖式、法则、口诀依次呈现，学生在板书中看到了从操作到算法的完整历程，让每一步计算都有据可依，也让检验习惯在板书中时时可见。

**八、说教学反思与评价**

本课坚持算理与算法并重，让学生不仅会算，更知道为什么这样算；进位口诀让计算步骤清晰可循，估算检验让结果多了一重保障。课堂上小棒操作帮助学生直观理解了算理，学生参与度较高。不足之处是个别学生在连续进位时仍会顾此失彼，今后应加强"进位接力"式专项训练，并坚持估算与笔算同步进行，让严谨的计算习惯伴随学生一生，真正内化为运算素养。
作为公开课，本节课力求让学生"知其然更知其所以然"，在扎实的计算训练中不失数学思维的味道，让计算教学既有温度、又有深度，愿数学的智慧之树在学生心中常青。`}},ds={"小学|四年级|数学|大数的认识":{plan:`**教学基本信息**

课题：大数的认识
教材版本：人教版小学数学四年级上册第一单元
年级：四年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学四年级学生

**教学目标**

1. 认识亿以内的数和亿以上的数，理解数位、数级、计数单位等概念，掌握十进制计数法，能正确说出每个数位上数字所表示的意义，在计数与数数中发展数感。
2. 掌握多位数的读法和写法，能正确、流利地读写出含有两级或三级的数，理解每级末尾的 0 不读、中间有一个 0 或连续几个 0 都只读一个零的规则，并会用竖线分级辅助读写，发展运算能力和思维能力。
3. 会比较大数的大小，能把整万、整亿的数改写成用万或亿作单位的数，能运用四舍五入法求一个大数的近似数，在观察、比较、交流中感受大数与现实生活的联系，体会数学的应用价值，增强学好数学的信心。

**教学重难点**

重点：掌握多位数的读法和写法，正确理解数位顺序表，体会数位、数级、计数单位之间的联系。
难点：中间或末尾有 0 的多位数的读写方法；用四舍五入法求近似数时对省略尾数的处理。

**教学准备**

多媒体课件（人口普查数据、拨数动画、数位顺序表演示）；数位顺序表挂图；学生用数位卡片；计数器；练习纸。

**教学过程**

**环节一 情境导入：数据里的新朋友（约 5 分钟）**

教师活动：
（课件出示我国第六次全国人口普查的部分数据：我国总人口约 1370536875 人，北京市常住人口约 19612368 人）
师：同学们，老师带来了两条新闻里的数据。谁来试着读一读这条？
生：（尝试读）一千……九百……读不出来，太长了。
师：读不出来没关系，这些数又大又长，跟我们以前学过的数不一样。观察一下，这些数比我们学过的万以内的数多了什么？
生：多了万位、十万位、百万位甚至千万位上的数。
师：这样的数我们叫它大数。今天这节课，我们就一起来认识大数，学会读它、写它。（板书课题：大数的认识）
生：（齐读课题）

学生活动：观察人口数据，尝试读数，交流困难之处，明确学习目标。

设计意图：用真实的人口数据创设情境，让学生感受到大数就在身边，同时通过"读不出来"的认知冲突激发探究欲望，自然引出课题，为后续学习铺路。

**环节二 认识数位顺序表与数级（约 10 分钟）**

教师活动：
师：要认识大数，先要请出一位老朋友——计数器。谁来在计数器上拨出三千零五十？
生：（在计数器上拨出三千零五十，并说明千位拨 3 颗、十位拨 5 颗）
师：拨得很好。如果这个数再添一个 0，变成三万零五百，怎么办？十万位在哪儿呢？
生：在万位的前面。
师：我们把计数单位从小到大排一排：个、十、百、千、万、十万、百万、千万、亿……每相邻两个计数单位之间的进率都是多少？我们一起数一数：10 个一是十，10 个十是百，10 个百是千，10 个千是万。
生：进率都是 10！
师：像这样每相邻两个计数单位之间的进率都是 10 的计数方法，就叫十进制计数法。（课件出示数位顺序表）
师：请同学们看这张数位顺序表。按照我国的计数习惯，从右边起每四个数位分一级：个级、万级、亿级。个级表示多少个一，万级表示多少个万，亿级表示多少个亿。
生：（对照数位顺序表指认各级数位）
师：同样一个数字 5，在千位上表示多少？在千万位上又表示多少？
生：5 在千位上表示 5 个千，在千万位上就表示 5 个千万。
师：同一个数字所在的数位不同，表示的大小也不同，所以数位是很重要的位置。

学生活动：在计数器上拨数，观察数位顺序表，齐说十进制计数法，动手摆数位卡片。

设计意图：借助计数器把抽象的计数单位直观化，通过拨珠、数数让学生亲历进率的过程，理解十进制计数法；数位顺序表为学生后续读写大数提供支撑工具，渗透位值思想，落实数感与几何直观的核心素养。

**环节三 学习大数的读法：先分级再读数（约 10 分钟）**

教师活动：
师：读数有个好办法，先分级、再读数。从个位起每四个数位分一级，用小竖线隔开。请同学们在练习纸上给这些数分分级。
生：（在练习纸上给 64010000、3600000、50000000 分级）
师：请一个同学到黑板上来，给 64010000 分级。
生：（板演）6401｜0000
师：分好级后怎么读呢？从高位读起，先读万级，再读个级；万级的数按个级的读法来读，读完在后面加上万字。6401｜0000，万级是 6401，读作六千四百零一万。
生：（跟读）六千四百零一万。
师：那一级末尾的 0 读不读？
生：不读。
师：对，每级末尾不管有几个 0 都不读。再看 6004000，分好级是 600｜4000，万级和个级末尾的 0 都不读，读作六百万四千。30000050，分好级是 3000｜0050，读作三千万零五十，中间的 0 只读一个零。
生：（自由读，同桌互读）
师：小结一下，0 的读法口诀：每级末尾 0 不读，中间 0 只读一个零。我们来做一个对比练习：（出示练习）读出下列各数：2050000、2005000、20500005。请同学们先分级再读。
生：（独立分级、读数，全班校对）二百零五万、二百万五千、二千零五十万零五。

学生活动：在练习纸上分级，跟读、互读、对比读，总结 0 的读法规律。

设计意图：把"先分级、再读数"转化为操作习惯，通过三个结构相似的数对比辨析 0 的读法，突出易错点，让学生在对比中发现规律、内化方法，培养有序思维和符号意识。

**环节四 学习大数的写法与大小比较（约 8 分钟）**

教师活动：
师：会读大数，还要会写大数。写数的方法和读数正好相反：从高位写起，先写亿级，再写万级，最后写个级；哪一位上一个单位也没有，就在那一位上写 0 占位。请同学们写一写"三百零五万四千"。
生：（独立试写）
师：谁来说说你是怎么写出来的？
生：先写 305，万级是 305；再写个级，四千写 4000，合起来就是 3054000。
师：哪一位缺了都要补 0 占位，不能漏。现在请大家把 64010000 和 3054000 比一比大小，这两个数谁大？为什么？
生：64010000 位数多，是八位数，3054000 是七位数，八位数比七位数大。
师：位数不同，位数多的数就大。如果位数相同呢？比如 2980000 和 3010000，又该怎么比？
生：先比最高位，2980000 最高位是 2，3010000 最高位是 3，3 比 2 大，所以 3010000 大。
师：位数相同时，从最高位比起，逐位比较，最高位上的数大的数就大。完成两道练习：比较 9000000 与 10000000 的大小，比较 5200000 与 5109000 的大小。
生：（独立完成并说理）

学生活动：试写大数，口述写数过程；比较大小并说明理由，完成对比练习。

设计意图：让学生经历"先写再验"的完整过程，强化 0 占位意识；通过大小比较让学生自主归纳出"先比位数、再比高位"的比较方法，在说理中培养逻辑推理能力。

**环节五 改写、四舍五入求近似数与课堂小结（约 7 分钟）**

教师活动：
师：大数读起来比较长，生活中常常把它们改写得简洁一些。3600000 是整万的数，去掉末尾 4 个 0，再写上"万"字，就是 360 万。1300000000 是整亿的数，去掉末尾 8 个 0，写"亿"字，就是 13 亿。
生：（尝试改写 2000000 为 200 万，120000000 为 1 亿 2000 万）
师：如果不是整万呢？比如太阳的直径约 1392000 千米，省略万位后面的尾数求近似数，就要用"四舍五入"法：看千位上的数字，千位是 9，大于 5，向万位进一，约是 139 万。
生：（讨论四舍五入的方法）
师：省略亿位后面的尾数呢？比如 5290000000，看千万位上的数字是 9，向亿位进一，约是 53 亿。
生：（完成练习：2870000 省略万位后面的尾数求近似数）
师：谁来汇报今天的收获？
生：我学会了读大数要先分级，写大数要占位，比大小先比位数。
生：我学会了改写整万整亿的数，还会用四舍五入求近似数。
师：大家收获真不少！课后请同学们收集三个大数，读一读、写一写，再求出它们的近似数。

学生活动：改写整万整亿的数，探究四舍五入求近似数的方法，完成练习并汇报收获。

设计意图：在生活情境中理解改写与四舍五入，体会精确数与近似数的区别；通过小结梳理读数、写数、比较、改写之间的联系，形成结构化认知。

**板书设计**

大数的认识

数位顺序表：亿级｜万级｜个级
（亿位 千万位 百万位 十万位 万位 千位 百位 十位 个位）

读法：先分级，从高位读起；每级末尾 0 不读，中间 0 只读一个零。
写法：从高位写起，哪一位没有单位写 0 占位。
比较：位数不同比位数，位数相同比高位。
改写：3600000 = 360 万；1300000000 = 13 亿
四舍五入：省略万位后面尾数，看千位；省略亿位后面尾数，看千万位。

**教学反思要点**

1. 分级是大数读写的关键动作，应让学生反复在黑板和练习纸上操作，把"先分级、再读写"固化为习惯，防止漏级、错级。
2. 0 的读写是本节课的高频错误点，设计中间有 0、末尾有 0、连续有 0 的对比练习集中辨析，效果明显优于逐题讲解。
3. 计数器与数位顺序表配合使用，帮助学生直观感受十进制的进率关系，抽象概念学习离不开直观支撑。
4. 改写与四舍五入容易混淆，教学中要反复强调改写得到精确值、四舍五入得到近似值，可用判断题帮助学生区分。
5. 读写法练习要保证充分，比较大小可放手让学生自主说理，教师重在点拨归纳。`,talk:`尊敬的各位评委、各位老师：

大家好！今天我说课的内容是人教版小学数学四年级上册第一单元"大数的认识"。下面我从教材、学情、教学目标、重难点、教法学法、教学过程、板书设计和教学反思八个方面进行说课。

一、说教材

"大数的认识"是小学数学数概念教学的重要组成部分，是学生在认识了万以内数的基础上，对数概念的一次拓展与深化。本单元主要包括亿以内数的认识、亿以上数的认识、数的改写与求近似数等内容，本节课是第一课时，重点完成亿以内数的读法与写法教学。从知识体系看，本课帮助学生建立完整的十进制计数体系，是学生理解整数结构、学习小数意义的基础；从现实意义看，人口、国土面积、生产总值等数据都离不开大数的读写，学好本课能让学生真正感受到数学与生活的紧密联系。因此，本课具有承前启后、联系实际的双重价值，是数概念教学中不可替代的重要一课。

二、说学情

四年级学生已经熟练掌握万以内数的读写方法，知道个、十、百、千、万等计数单位，具备一定的迁移类推能力。但大数的数位更多、结构更复杂，万级、亿级是学生第一次接触，特别是中间或末尾有 0 的大数，学生容易多读零、漏读零，写数时也容易漏掉占位的 0。同时，四年级学生有意注意时间不长，需要借助直观教具和生动情境维持学习兴趣。因此，本节课要激活学生已有的经验，引导他们在操作与比较中自主建构新知识，同时针对 0 的处理设计专项辨析练习，把易错点练扎实。

三、说教学目标

基于对教材和学情的分析，我确定了以下三个教学目标。第一，认识亿以内的数和亿以上的数，理解数位、数级、计数单位等概念，掌握十进制计数法，在计数与数数中发展数感；第二，掌握多位数的读法和写法，能正确读写含有两级的数，理解每级末尾的 0 不读、中间有一个或连续几个 0 都只读一个零的规则，并会用分级的方法辅助读写；第三，会比较大数的大小，能把整万、整亿的数改写成用万或亿作单位的数，并能用四舍五入法求近似数，体会大数与生活的联系，增强学习数学的兴趣和信心。

四、说教学重难点

本节课的教学重点是掌握多位数的读法和写法，正确理解数位顺序表；教学难点是中间或末尾有 0 的多位数的读写方法，以及用四舍五入法求近似数。之所以把 0 的读写列为难点，是因为它涉及分类讨论：每级末尾的 0 不读，中间的一个 0 或连续几个 0 都只读一个零，规则多、变化多，学生最容易出错。围绕重难点，我在教学中设计了分级操作、对比辨析、专项练习等环节，帮助学生一步一步突破。

五、说教法学法

根据新课标倡导的自主、合作、探究的学习方式，结合本课内容特点，我主要采用情境教学法、讲解示范法和小组合作探究法。学生通过拨计数器、摆数位卡片、分级读写等操作活动主动获取知识，教师借助多媒体课件和数位顺序表挂图进行直观演示，适时点拨引导。这样的教法学法既体现了学生的主体地位，又能把数位、数级等抽象概念转化为学生看得见、摸得着的直观经验。此外，我还安排了读与写的双向练习，让学生在读中悟、写中练，在反复实践中把方法转化为技能。

六、说教学过程

我设计了五个教学环节。第一环节是情境导入，用时约 5 分钟，我用人口普查的真实数据创设情境，让学生试读大数、发现困难，激发学习需求。第二环节是认识数位顺序表与数级，用时约 10 分钟，让学生在计数器上拨数，经历十个一是十、十个十是百的进率过程，理解十进制计数法，认识个级、万级和亿级，并体会同一个数字在不同数位上的不同含义。第三环节是学习大数的读法，用时约 10 分钟，引导学生先分级再读数，通过 64010000、6004000、30000050 等数的对比，辨析每级末尾 0 不读、中间 0 只读一个零的规则。第四环节是学习大数的写法与大小比较，用时约 8 分钟，让学生经历试写、互评的过程，归纳写数要按级写、缺位补 0 的方法，并自主总结先比位数、再比高位的比较方法。第五环节是改写、四舍五入求近似数与课堂小结，用时约 7 分钟，让学生在生活情境中理解改写得到的是精确值、四舍五入得到的是近似值，最后总结收获、布置课后收集大数的任务。

七、说板书设计

我的板书以数位顺序表为主线，把亿级、万级、个级的数位和计数单位一目了然地呈现出来，同时把读法、写法、比较、改写的要点用简明文字归纳在侧，并板演了改写的示例。这样的板书既起到提纲挈领的作用，又帮助学生把零散的知识串成整体，便于课堂理解和课后复习。

八、说教学反思

本节课我力求做到三点：一是让数学与生活紧密相连，用真实的人口数据引发学生的学习兴趣；二是让学生经历知识的形成过程，在拨一拨、分一分中理解数位与计数单位，感受十进制计数法；三是通过对比辨析突出重点、化解难点，把 0 的读写这个易错点练扎实。当然，课堂时间有限，学生的个体差异还需要在后续练习中进一步关注，分级和占位等易错点也要通过分层作业持续巩固。以上是我的说课内容，恳请各位老师批评指正，谢谢大家！`},"小学|四年级|数学|三位数乘两位数":{plan:`**教学基本信息**

课题：三位数乘两位数
教材版本：人教版小学数学四年级上册第四单元
年级：四年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学四年级学生

**教学目标**

1. 掌握三位数乘两位数的笔算方法，理解用第二个因数十位上的数去乘时积的末位要与十位对齐的算理，能正确、熟练地进行笔算，发展运算能力。
2. 掌握因数中间或末尾有 0 的乘法的简便算法，能正确口算整十、整百数乘整十数，会用估算检验计算结果的范围，培养数感和计算策略意识。
3. 能运用单价乘数量等于总价、速度乘时间等于路程等数量关系解决简单的实际问题，在迁移类推中感受新旧知识的联系，增强用数学解决实际问题的信心。

**教学重难点**

重点：掌握三位数乘两位数的笔算方法，理解算理。
难点：因数中间或末尾有 0 时竖式的简便写法；用第二个因数十位上的数去乘时，第二层积的正确对位。

**教学准备**

多媒体课件（超市购物情境图、研学活动情境图、竖式演示动画）；口算卡片；竖式练习卡；学生用磁性数字卡；课堂练习纸。

**教学过程**

**环节一 情境导入：研学购票问题（约 5 分钟）**

教师活动：
（课件出示学校组织研学活动的场景）
师：同学们，学校下个月要组织大家去科技馆研学啦！每张门票 48 元，我们班 28 人参加，大约需要准备多少钱呢？
生：把 48 看成 50，把 28 看成 30，50 乘 30 等于 1500，大约需要 1500 元。
师：算得又快又准！这是估算。那到底需要多少钱，应该怎样精确计算呢？
生：用 48 乘 28。
师：48 乘 28 是两位数乘两位数，我们学过。如果门票变成 145 元，人数变成 12 人，就要用 145 乘 12，这是一道三位数乘两位数。（板书课题：三位数乘两位数）今天我们就在两位数乘两位数的基础上，继续研究三位数乘两位数。
生：（齐读课题）

学生活动：估算门票总价，回顾旧知，明确本课学习任务。

设计意图：从研学购票的真实情境切入，先估算感受结果范围，再引出精确计算的必要，既复习了估算方法，又自然过渡到新课，让学生带着问题进入学习。

**环节二 口算热身，唤醒旧知（约 5 分钟）**

教师活动：
师：先来一组口算热身，看谁算得又对又快。30 乘 50 等于多少？
生：1500。
师：你是怎么算的？
生：先算 3 乘 5 得 15，两个因数末尾一共有两个 0，就在 15 后面添两个 0，得 1500。
师：方法很好！整十、整百数相乘，先把 0 前面的数相乘，再在积的末尾添上相应个数的 0。再来一道：120 乘 30。
生：先算 12 乘 3 得 36，再添两个 0，得 3600。
师：口算过关。现在我们来回忆一下两位数乘两位数：24 乘 13，用竖式怎么算？
生：（板演竖式）先用 3 乘 24 得 72，再用十位上的 1 乘 24 得 24 个十，末位和十位对齐，加起来得 312。
师：第二步为什么要空一位、末位和十位对齐呢？
生：因为那是用十位上的数去乘，得到的是几个十。
师：很好！这就是我们本节课要用到的重要经验。

学生活动：口算整十、整百数乘法，板演两位数乘两位数竖式，回顾对位方法。

设计意图：通过口算和旧竖式的回顾，激活学生已有的计算方法和对位经验，为三位数乘两位数的迁移学习搭建脚手架，体现知识的连续性。

**环节三 探究三位数乘两位数的笔算方法（约 12 分钟）**

教师活动：
师：现在我们就来解决 145 乘 12。请同学们先估一估，积大约是多少？
生：把 145 看成 150，12 看成 10，积大约是 1500。
师：估算结果能帮我们判断精确积的大致范围。那精确值到底是多少呢？请同学们尝试用竖式算一算，可以小组讨论每一步是什么意思。
生：（独立尝试，小组交流）
师：谁来展示你的竖式过程？
生：（板演）先用个位上的 2 乘 145，得 290，表示 290 个一；再用十位上的 1 乘 145，得 145 个十，就是 1450，末位和十位对齐；最后把两次的积加起来，290 加 1450 得 1740。
师：讲得非常清楚！谁能说一说为什么这样算是对的？
生：145 乘 12 就是 145 乘 10 加 145 乘 2，等于 1450 加 290，正好是 1740。
师：说得太好了！竖式其实就是把这分步计算的过程记录了下来。请大家注意，第二层积的末位必须与十位对齐，这是最容易出错的地方。请完成练习：134 乘 21 和 253 乘 32。
生：（独立完成，指生板演，集体订正）

学生活动：估算、尝试笔算、小组交流算理、展示板演、完成巩固练习。

设计意图：让学生经历"估算确认范围、尝试计算、交流算理、归纳方法"的完整过程，理解每一步积的意义，突出第二层积的对位这一难点，把算理与算法统一起来。

**环节四 探究因数中间或末尾有 0 的乘法（约 10 分钟）**

教师活动：
师：门票问题解决完了，我们再来看仓库里的一批货物。每箱饮料 260 元，订 30 箱，一共要多少元？
生：260 乘 30。
师：这道题因数末尾都有 0，竖式可以写得简便一些。请同学们想一想，怎样写竖式既正确又简便？
生：（尝试简便写法）可以把 26 和 3 对齐，先算 26 乘 3 得 78，因为两个因数末尾一共有两个 0，就在 78 后面添两个 0，得 7800。
师：为什么可以这样简便计算呢？
生：因为 260 乘 30 等于 26 乘 3 再乘 100，也就是先算 0 前面的数，再添 0。
师：添 0 的个数是两个因数末尾 0 的总个数，这里末尾一共两个 0，所以积是 7800。再看一道：206 乘 4，因数中间有 0，竖式应该怎样算？
生：（板演）个位 4 乘 6 得 24，写 4 进 2；4 乘十位上的 0 得 0，加进位的 2 得 2；4 乘百位上的 2 得 8。结果是 824。
师：中间这个 0 能不能跳过不乘？
生：不能！0 也要参与运算，十位上的 0 乘 4 得 0，要用 0 占位。
师：说得对，因数中间的 0 不能省略。请完成两道练习：350 乘 40，208 乘 30。
生：（独立完成，集体校对）

学生活动：探究末尾有 0 的简便竖式，辨析中间有 0 的乘法，完成练习。

设计意图：通过两题的对比，让学生既掌握末尾有 0 的简便算法，又明确中间有 0 必须参与运算，在正反对比中形成完整清晰的算法认知，避免常见错误。

**环节五 估算应用、数量关系与课堂小结（约 8 分钟）**

教师活动：
师：今天我们学了很多本领，现在来解决生活中的问题。一辆汽车每小时行 80 千米，行了 3 小时，一共行了多少千米？
生：80 乘 3 等于 240 千米，速度乘时间等于路程。
师：速度乘时间等于路程，这是常用的数量关系。再看：每本故事书 15 元，买 12 本需要多少元？
生：15 乘 12 等于 180 元，单价乘数量等于总价。
师：请同学们用今天学的方法完成综合练习：每箱矿泉水 145 元，学校买 34 箱，估一估大约需要多少元，再精确计算，并说说估算与精确计算有什么联系。
生：（估算 150 乘 30 得 4500，精确计算 145 乘 34 得 4930，交流估算对精确计算有检验作用）
师：谁来说说这节课的收获？
生：我学会了三位数乘两位数的笔算，第二层积的末位要和十位对齐。
生：我还学会了末尾有 0 的简便算法，中间有 0 不能漏乘。
师：同学们收获满满。课后请完成练习纸上的巩固题，并想一想：如果买 130 箱，你打算怎样算更简便？

学生活动：运用数量关系解决问题，完成估算与精确计算的综合练习，总结本课收获。

设计意图：把计算放到生活情境中，让学生体会数量关系与计算的联系；通过估算与精确计算的对比，培养自觉用估算检验的意识，实现知识的内化与迁移。

**板书设计**

三位数乘两位数

145 × 12 = 1740
竖式：
  1 4 5
×    1 2
---------
    2 9 0    先用个位 2 乘 145，得 290 个一
  1 4 5      再用十位 1 乘 145，得 145 个十
---------
  1 7 4 0    末位与十位对齐，再把两次积相加

末尾有 0：260 × 30，先算 26 × 3，再添两个 0。
中间有 0：0 必须参与运算，用 0 占位。
数量关系：单价 × 数量 = 总价；速度 × 时间 = 路程。

**教学反思要点**

1. 学生对"第二层积末位与十位对齐"的理解不能只靠记忆，要在说理中明白它表示的是几个十，从算理层面突破对位难点。
2. 末尾有 0 与中间有 0 的对比练习是本课的关键设计，正反对比让学生把简便算法与严格运算规则区分清楚，防止出现漏乘或漏添 0。
3. 估算与精确计算相结合，学生既能快速判断结果范围，又能自觉用估算检验笔算，培养检验意识比单纯追求速度更重要。
4. 口算整十、整百数相乘的复习为笔算作了铺垫，说明新旧知识的迁移是计算教学的重要策略，应始终贯穿课堂。`,talk:`尊敬的各位评委、各位老师：

大家好！今天我说课的内容是人教版小学数学四年级上册第四单元"三位数乘两位数"。下面我从教材、学情、教学目标、重难点、教法学法、教学过程、板书设计和教学反思八个方面进行说课。

一、说教材

"三位数乘两位数"是在学生已经掌握两位数乘两位数笔算的基础上进行教学的，是整数乘法笔算教学的收尾阶段，也是学生进一步学习小数乘法、分数乘法的重要基础。本单元主要包括口算乘法、笔算乘法和解决问题等内容，本节课是笔算乘法的第一课时，重点解决三位数乘两位数的常规笔算方法，为后续学习因数中间或末尾有 0 的乘法以及乘法的实际应用作准备。从知识体系看，本课实现了从两位数乘两位数到更大数乘法的自然延伸；从能力培养看，本课对发展学生的运算能力、推理意识和应用意识都有重要作用。因此，本课是计算教学中承上启下的关键一课。

二、说学情

四年级学生已经熟练掌握两位数乘两位数的笔算方法，理解了笔算乘法的基本算理，具备一定的迁移类推能力和小组合作经验。但是，三位数乘两位数时，用十位上的数去乘得到的是几个十，第二层积的末位必须与十位对齐，学生容易对错位；因数中间或末尾有 0 时，有的学生漏乘中间的 0，有的学生漏添末尾的 0。同时，学生计算的自觉性和检验意识还比较薄弱。基于这样的学情，本节课要充分利用学生已有的两位数乘两位数的经验，通过迁移类推让他们自主建构新算法，同时设计对比练习化解易错点。

三、说教学目标

我确定了以下三个教学目标。第一，掌握三位数乘两位数的笔算方法，理解每一步计算的算理，能正确、熟练地进行笔算，发展运算能力；第二，掌握因数中间或末尾有 0 的乘法的简便算法，能正确口算整十、整百数乘整十数，会用估算检验计算结果的范围，培养数感和计算策略意识；第三，能运用单价乘数量等于总价、速度乘时间等于路程等数量关系解决简单的实际问题，体会数学与生活的紧密联系，增强学好数学的信心。

四、说教学重难点

本节课的教学重点是掌握三位数乘两位数的笔算方法，理解算理；教学难点是因数中间或末尾有 0 时竖式的简便写法，以及用第二个因数十位上的数去乘时第二层积的正确对位。第二层积的对位是学生最容易出错的地方，如果不能理解它表示的是几个十，学生就只能机械模仿。针对难点，我设计了算理讨论和对比辨析等环节，帮助学生从道理上弄明白，从而突破难点。

五、说教法学法

本课我主要采用迁移类推法、讲解与练习相结合的方法，并组织小组合作交流。学生通过口算复习、尝试笔算、交流算理、对比练习等活动，在自主探究中掌握算法、理解算理。教师以旧引新，引导学生把两位数乘两位数的经验自然迁移到新知识中来，充分发挥学生的主体作用，真正实现教为学服务、学为用服务。在练习的组织上，我坚持由浅入深、先扶后放，先是模仿性的基础练习，再是有变化的对比练习，最后是综合性的应用练习，让学生在层层递进的练习中稳步提高计算能力。

六、说教学过程

我设计了五个教学环节。第一环节是情境导入，用时约 5 分钟，通过研学购票问题让学生先估算门票总价，再引出精确计算的需要，自然揭示课题，激发学习兴趣。第二环节是口算热身、唤醒旧知，用时约 5 分钟，复习整十、整百数相乘的口算方法，并回顾两位数乘两位数的竖式和对位经验，为新知学习搭好台阶。第三环节是探究三位数乘两位数的笔算方法，用时约 12 分钟，让学生经历估算确认范围、尝试笔算、小组交流算理、板演归纳的完整过程，重点讲清第二层积末位与十位对齐的道理，并完成巩固练习。第四环节是探究因数中间或末尾有 0 的乘法，用时约 10 分钟，通过 260 乘 30 和 206 乘 4 两道题的对比，让学生既掌握末尾有 0 的简便算法，又明确中间有 0 必须参与运算。第五环节是估算应用、数量关系与课堂小结，用时约 8 分钟，让学生在解决问题中运用单价乘数量、速度乘时间等数量关系，体会估算对精确计算的检验作用，并总结本课收获。

七、说板书设计

我的板书以 145 乘 12 的竖式为范例，完整呈现每一步积的意义，突出第二层积末位与十位对齐这一关键，旁边归纳末尾有 0、中间有 0 的处理方法和常用数量关系。这样的板书结构清晰、重点突出，既是学生计算的示范样板，又是课后复习的提纲。

八、说教学反思

本课的设计我重点把握了三点：一是突出算理，让学生不仅会算，更知道为什么这样算，第二层积的对位问题从算理层面得到解决；二是善用对比，把中间有 0 和末尾有 0 的情形放在一起辨析，直击易错点；三是联系生活，把计算融入购票、购物等真实情境，让学生体会计算的价值。在今后的教学中，我还要加强对学困生的个别辅导，通过分层练习和讲清算理让每个学生都能获得成功的体验。同时，我还打算把口算训练常态化，让学生在每天的练习中提高计算的速度和正确率。以上是我的说课内容，恳请各位老师批评指正，谢谢大家！`},"小学|四年级|数学|平行四边形和梯形":{plan:`**教学基本信息**

课题：平行四边形和梯形
教材版本：人教版小学数学四年级上册第五单元
年级：四年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学四年级学生

**教学目标**

1. 通过观察、操作、比较等活动，认识平行四边形和梯形的特征，掌握"两组对边分别平行"与"只有一组对边平行"这两个本质特征，能正确辨认平行四边形、梯形、长方形和正方形，发展空间观念。
2. 认识平行四边形和梯形的底与高，会用三角尺和直尺正确画出指定底上的高，能指出高与底的对应关系，培养动手操作能力。
3. 通过拉一拉平行四边形框架等活动，感受平行四边形容易变形、具有不稳定性的特点，认识其在伸缩门、升降机等生活中的应用，并能与三角形的稳定性作比较，体会图形与生活的联系，感受数学的应用价值。

**教学重难点**

重点：掌握平行四边形和梯形的特征，认识底和高，会规范画高。
难点：正确理解高与底的对应关系，垂足要在底上；理清四边形家族中平行四边形、长方形、正方形之间的关系。

**教学准备**

多媒体课件（校园图形照片、伸缩门与升降机视频、图形动态演示）；可拉动的平行四边形框架；三角尺、直尺；方格纸；剪刀；几何图形磁性贴片；课堂练习纸。

**教学过程**

**环节一 情境导入：校园里的图形（约 5 分钟）**

教师活动：
（课件出示校园实景照片，篮球场上的围栏、足球门框、楼梯扶手、校门伸缩门）
师：同学们，看，这是我们美丽的校园。找一找，照片里藏着哪些图形？
生：有长方形、正方形，还有校门口那种斜斜的图形。
师：那种斜斜的图形，就是我们今天要认识的新朋友。我们每天上学都要从校门口经过，仔细观察那个可以伸缩的门，它的格子是什么形状？围栏上斜着交叉的图形又是什么形状呢？
生：都是平行四边形！
师：对，它们就是平行四边形。今天这节课，我们就来认识平行四边形和梯形这两个新朋友。（板书课题：平行四边形和梯形）
生：（齐读课题）

学生活动：观察校园照片，辨认图形，说出对平行四边形的初步印象。

设计意图：从学生熟悉的校园场景入手，让抽象的图形与生活建立联系，唤起学生的已有经验，激发认识新图形的兴趣，为特征探究作好铺垫。

**环节二 探究平行四边形的特征（约 10 分钟）**

教师活动：
师：老师给每个小组准备了一些平行四边形纸片和方格纸。请同学们想办法验证一下：平行四边形的对边有什么关系？可以用直尺量一量、用方格纸数一数、也可以用推平行线的方法验证。
生：（小组合作，用各种方法验证）
师：哪个小组来说说你们的发现？
生：我们发现平行四边形有两组对边，它们是互相平行的，而且长度也相等。
师：两组对边分别平行，还有别的方法可以验证吗？
生：把平行四边形放在方格纸上，一条边占了 5 格，对边也占 5 格，说明它们相等且平行。
师：非常好！我们把"两组对边分别平行的四边形叫做平行四边形"。请同学们数一数它的对角有什么关系？
生：对角相等。
师：老师这里有一个用四根木条钉成的平行四边形框架。谁来捏住对角拉一拉、推一推，看看会发生什么？
生：（操作框架）它的形状变了，但是四条边的长度没变。
师：这就说明平行四边形很容易变形，这种特性叫不稳定性。正因为容易变形，生活中的伸缩门、晾衣架、电动伸缩梯才都利用了它这个特点。（播放伸缩门、升降机的视频）
生：（观看视频，感受不稳定性在生活中的应用）

学生活动：小组验证对边关系，观察对角，动手拉一拉框架，观看生活应用视频。

设计意图：让学生在量一量、数一数、拉一拉的操作中自主发现特征，把"两组对边分别平行且相等"从记忆变成经验；通过拉框架直观感受不稳定性，体会数学知识在生活中的应用价值。

**环节三 认识梯形的特征（约 8 分钟）**

教师活动：
师：认识了一个新朋友，再来认识另一个。请同学们观察老师手中的梯形纸片，它和平行四边形有什么不同？
生：它只有一组对边平行，另一组对边不平行。
师：只有一组对边平行的四边形叫做梯形。互相平行的一组对边，叫做梯形的上底和下底，通常短的叫上底，长的叫下底；不平行的一组对边，叫做腰。
生：（对照梯形指出上底、下底、腰）
师：梯形里面还有两个特别的成员。请同学们看一看这两类梯形（出示等腰梯形和直角梯形），它们有什么特殊之处？
生：第一个梯形两条腰相等，第二个梯形有一个角是直角。
师：两条腰相等的梯形叫等腰梯形，它的两个底角也相等；有一个角是直角的梯形叫直角梯形。请同学们在练习纸上把这两个梯形分类描一描。
生：（动手描画，辨认等腰梯形和直角梯形）
师：生活中有哪些物体的形状是梯形呢？
生：梯子、大坝的横截面、水渠的截面。
师：说得真好！梯子为什么叫梯子？就是因为它像梯形。

学生活动：对比观察梯形与平行四边形，认识各部分名称，辨认特殊梯形，寻找生活中的梯形。

设计意图：通过对比突出"只有一组对边平行"这一本质特征，在辨析中防止与平行四边形混淆；认识等腰梯形、直角梯形拓展了图形认识，联系生活实例加深印象。

**环节四 认识底和高，学习画高（约 10 分钟）**

教师活动：
师：无论是平行四边形还是梯形，我们都要学会画它们的高。从平行四边形一条边上的一点，向它的对边引一条垂线，这点和垂足之间的线段，就是平行四边形的高，垂足所在的边就是底。
生：（观察课件演示高的形成过程）
师：怎么规范地画高呢？第一步，确定底；第二步，用三角尺的一条直角边贴住底边；第三步，平移三角尺，使另一条直角边经过对边上的一个点；第四步，沿直角边画垂线，标出直角符号。请同学们在练习纸上，用三角尺和直尺画一画平行四边形的高。
生：（动手画高，指生板演，互相评议）
师：我们来评一评这位同学画的高，垂直符号标了吗？这条线段和底边垂直吗？
生：垂直了，也标了直角符号，画得很规范。
师：平行四边形可以画多少条高呢？
生：可以画很多条，无数条。
师：同一条底上的高都相等。梯形的高的画法也一样，从上底的一点向下底引一条垂线，这点到垂足之间的线段就是梯形的高。请同学们画一个梯形，并画出它的高。
生：（独立画梯形的高，同桌互查）

学生活动：观察高的形成，学习画高步骤，动手画平行四边形和梯形的高，互相评议。

设计意图：通过演示与操作相结合，让学生掌握画高的规范步骤，突出"垂直、垂足在底上、标直角符号"三个要点，在互评中强化规范意识，突破画高难点。

**环节五 梳理四边形家族关系，巩固练习（约 7 分钟）**

教师活动：
师：今天我们认识了平行四边形和梯形，加上老朋友长方形和正方形，它们都是四边形。请同学们想一想，长方形和正方形具备平行四边形"两组对边分别平行"的特征吗？
生：具备，它们都是特殊的平行四边形。
师：正方形又是不是特殊的长方形呢？
生：是，正方形四条边都相等，是长和宽相等的长方形。
师：说得对！（出示集合图）长方形和正方形都是特殊的平行四边形，正方形是特殊的长方形；而梯形只有一组对边平行，它不是平行四边形。请同学们完成练习：第一题，下面的图形中，哪些是平行四边形，哪些是梯形？第二题，数一数，右面的组合图形中有几个平行四边形、几个梯形？
生：（独立完成，交流汇报）
师：谁来总结一下平行四边形和梯形的区别？
生：平行四边形有两组对边分别平行，梯形只有一组对边平行。
师：总结得真到位！这节课我们认识了两位新朋友，它们各有特点，又在四边形大家族里和睦相处。课后请同学们用纸剪一个平行四边形和一个梯形，分别标出底和高，明天带来展示。

学生活动：梳理四边形家族关系，完成辨认与数图形的练习，总结特征。

设计意图：用集合图帮助学生理清四边形家族的关系，把零散的知识结构化；通过数图形的开放练习发展观察力和空间观念，在总结中深化对本课核心特征的记忆。

**板书设计**

平行四边形和梯形

平行四边形：两组对边分别平行且相等，对角相等，容易变形（不稳定性）
梯形：只有一组对边平行；上底、下底、腰；等腰梯形、直角梯形

画高：一贴底、二平移、三画垂线、四标直角符号
（平行四边形和梯形示意图，标出底和高）

四边形家族：平行四边形包含长方形，长方形包含正方形；梯形独立。

**教学反思要点**

1. 平行四边形与梯形的本质区别在"两组对边平行"还是"只有一组对边平行"，教学中反复使用对比观察和语言辨析，帮助学生建立准确的概念。
2. 画高是操作难点，规范步骤要逐一示范，垂足落在底的延长线上、把腰当作高等错误要通过板演评议及时纠正。
3. 拉一拉活动让学生亲眼看到不稳定性，配合伸缩门、升降机等实例，直观经验远比文字描述更能帮助学生理解。
4. 集合图是梳理四边形家族关系的有力工具，学生看图就能明确平行四边形、长方形、正方形的包含关系，有效化解概念混淆。
5. 图形摆放位置会影响学生的判断，教学中应多出示不同方位摆放的图形，强化按特征判断的意识，避免受摆放位置干扰。`,talk:`尊敬的各位评委、各位老师：

大家好！今天我说课的内容是人教版小学数学四年级上册第五单元"平行四边形和梯形"。下面我从教材、学情、教学目标、重难点、教法学法、教学过程、板书设计和教学反思八个方面进行说课。

一、说教材

"平行四边形和梯形"是小学数学图形与几何领域的重要教学内容，属于平面图形的认识范畴。学生在本单元已经学习了平行与垂直的概念，这是认识平行四边形和梯形的基础。本节课在学生认识长方形、正方形的基础上，进一步认识平行四边形和梯形，理解它们的本质特征，学习认识底和高并规范画高。从知识体系看，本课既深化了学生对四边形家族的认识，又为今后学习平行四边形、梯形的面积计算以及三角形的面积计算打下了基础；从能力培养看，本课对发展学生的空间观念、几何直观和动手操作能力具有重要作用，因此它是图形认识中承上启下的关键一课。

二、说学情

四年级学生已经能辨认长方形、正方形，认识了平行与垂直，具备了一定的观察、操作能力。但是，学生对平行的理解还停留在直观层面，容易把只有一组对边平行与有一组对边平行混为一谈，把一般的四边形误认为梯形；画高时容易出现不垂直、不标直角符号、把腰当高等错误；图形的摆放位置也会干扰学生的判断，斜着放的平行四边形往往不被学生认为是平行四边形。因此，教学时要充分借助操作活动，帮助学生在头脑中建立清晰、稳定的空间表象，学会按特征判断图形。

三、说教学目标

我确定了以下三个教学目标。第一，通过观察、操作、比较等活动，认识平行四边形和梯形的特征，掌握两组对边分别平行与只有一组对边平行这两个本质特征，能正确辨认和区分平行四边形、梯形、长方形与正方形，发展空间观念；第二，认识平行四边形和梯形的底与高，会用三角尺和直尺正确画高，能指出高与底的对应关系，培养动手操作能力；第三，通过拉一拉等活动感受平行四边形容易变形、具有不稳定性的特点，了解其在伸缩门、升降机等生活中的应用，并能与三角形的稳定性作比较，体会图形的应用价值。

四、说教学重难点

本节课的教学重点是掌握平行四边形和梯形的特征，认识底和高，会规范画高；教学难点是正确理解高与底的对应关系，以及理清四边形家族中平行四边形、长方形、正方形之间的关系。之所以把高与底的对应关系列为难点，是因为学生画高时容易把垂足画到底的延长线上，也容易把腰当作高，这些错误的根源都是没有理解高的定义。教学中我通过课件演示、规范示范、板演评议等多种方式突破难点。

五、说教法学法

根据本课内容特点和学生的认知规律，我主要采用动手操作、观察比较、合作探究等方法，并借助多媒体动态演示。学生通过量一量、数一数、拉一拉、画一画等操作活动，经历观察、猜想、验证、归纳的完整探究过程，自主建构图形的特征。教师以问题引领探究，以操作支撑理解，让学生在亲身体验中学习数学。针对本课操作活动多的特点，我还特别注意活动的组织与调控，把个人操作、同桌合作与全班交流结合起来，既保证每个学生都有动手的机会，又通过交流分享让方法得到共享和优化，真正发挥操作活动对发展空间观念的作用。

六、说教学过程

我设计了五个教学环节。第一环节是情境导入，用时约 5 分钟，通过校园照片让学生找图形，从伸缩门、围栏中引出平行四边形，激发学习兴趣。第二环节是探究平行四边形的特征，用时约 10 分钟，学生用直尺量、方格纸数、推平行线等方法验证对边关系，通过拉一拉框架直观感受不稳定性，并结合伸缩门、升降机等实例体会应用价值。第三环节是认识梯形的特征，用时约 8 分钟，通过对比突出只有一组对边平行这一本质特征，认识上底、下底、腰以及等腰梯形和直角梯形。第四环节是认识底和高、学习画高，用时约 10 分钟，教师示范一贴底、二平移、三画垂线、四标直角符号的规范步骤，学生动手操作、互相评议。第五环节是梳理四边形家族关系与巩固练习，用时约 7 分钟，用集合图理清平行四边形、长方形、正方形的包含关系，完成辨认和数图形的练习。

七、说板书设计

我的板书把平行四边形和梯形的本质特征并列呈现，直观对比，同时画出了图形的底和高，并附上四边形家族的集合图。这样的板书使知识结构化，既帮助学生当堂理解，又便于课后复习，突出了本课的核心内容。

八、说教学反思

本节课我注重让学生在操作中学习，通过量一量、拉一拉、画一画等活动帮助学生建立空间观念；注重用对比和集合图化解概念混淆，让学生在说理中把握图形的本质。但课堂时间有限，个别学生画高的规范度还需要课后加强练习，不同方位摆放的图形辨认也需要在后续教学中持续渗透。今后我要进一步关注学生间的差异，设计更有梯度的练习。此外，我还将把课堂延伸到家校协作中，鼓励学生在生活里继续寻找平行四边形和梯形，把课堂学到的观察方法用到生活中去。同时我也会设计数图形的趣味题，让学生在数一数中发展有序思考和空间想象能力。以上是我的说课内容，恳请各位老师批评指正，谢谢大家！`},"小学|四年级|数学|小数的意义和性质":{plan:`**教学基本信息**

课题：小数的意义和性质
教材版本：人教版小学数学四年级下册第四单元
年级：四年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学四年级学生

**教学目标**

1. 结合具体情境认识小数的产生，理解小数的意义，知道十分之几、百分之几、千分之几可以用小数表示，认识小数的计数单位，发展数感。
2. 认识小数的数位顺序表，掌握小数的读法和写法，能正确读写小数，会运用小数表示价格、长度等常见的量。
3. 理解和掌握小数的性质，能运用小数的性质化简小数或把小数改写成指定数位的小数，掌握小数大小比较的方法，能正确比较几个小数的大小，在观察比较中发展推理能力。

**教学重难点**

重点：理解小数的意义，掌握小数的性质和小数大小比较的方法。
难点：理解小数的意义，建立十分之一、百分之一、千分之一与小数的对应关系。

**教学准备**

多媒体课件（超市价格标签、测量情境图、百格图与千格图动画）；米尺；方格纸；数位顺序表卡片；超市价格标签卡片；课堂练习纸。

**教学过程**

**环节一 情境导入：生活中的小数（约 5 分钟）**

教师活动：
（课件出示超市购物画面，货架上的价格标签：一支铅笔 0.5 元、一瓶牛奶 3.75 元）
师：同学们，去超市买东西时，你们见过这样的价格吗？谁来说说这个 0.5 元是什么意思？
生：就是五角钱，也就是一元的十分之五。
师：那 3.75 元呢？
生：三元七角五分。
师：像 0.5、3.75 这样的数，我们叫它小数。其实，小数并不神秘，它和分数是一家。为什么测量时也会出现小数呢？请同学们用米尺量一量黑板的长。
生：（量黑板，量出的长度不是整米）
师：量出的长度不是整米数，我们怎么表示呢？可以用小数。今天这节课，我们就来深入认识小数，了解它的意义和性质。（板书课题：小数的意义和性质）
生：（齐读课题）

学生活动：观察价格标签，说出小数表示的意思，用米尺测量感受小数的产生。

设计意图：从熟悉的购物情境入手，激活学生已有的小数经验，再通过测量活动让学生体会小数产生于实际需要，激发探究小数的欲望。

**环节二 探究小数的意义（约 12 分钟）**

教师活动：
师：请同学们看这把米尺。把 1 米平均分成 10 份，每份是 1 分米。1 分米用分数表示是多少米？
生：十分之一米。
师：十分之一米用小数表示就是 0.1 米。把 1 米平均分成 100 份，每份是 1 厘米，是多少米？
生：百分之一米，写成小数是 0.01 米。
师：把 1 米平均分成 1000 份，每份是 1 毫米，用小数表示是？
生：0.001 米。
师：我们把 1 米看成单位"1"，平均分成 10 份、100 份、1000 份，就得到了 0.1、0.01、0.001。它们分别表示十分之一、百分之一、千分之一。分母是 10、100、1000 的分数都可以写成小数，这就是小数的意义。
生：（在方格纸上涂一涂：把一张百格图平均分成 100 份，涂出 23 份，用分数和小数表示）
师：23 份是百分之二十三，用小数怎么表示？
生：0.23。
师：0.7 又表示什么呢？
生：0.7 表示十分之七。
师：再来看计数单位。小数的计数单位是十分之一、百分之一、千分之一，分别写作 0.1、0.01、0.001。相邻两个计数单位之间的进率都是 10。0.1 里面有几个 0.01？
生：10 个。
师：0.01 里面有几个 0.001？
生：也是 10 个。
师：请同学们看数位顺序表。小数点把数分成整数部分和小数部分，十分位、百分位、千分位对应的计数单位分别是十分之一、百分之一、千分之一。比如 3.75，个位上的 3 表示 3 个一，十分位上的 7 表示 7 个十分之一，百分位上的 5 表示 5 个百分之一。

学生活动：观察米尺和方格图，涂一涂、说一说，认识小数的意义和计数单位，对照数位顺序表理解每位上的含义。

设计意图：借助米尺和百格图把抽象的小数意义直观化，让学生经历"分数到小数"的转化过程，理解小数的计数单位及进率，落实数感与几何直观的核心素养。

**环节三 学习小数的读法和写法（约 7 分钟）**

教师活动：
师：会理解小数的意义，还要会读会写小数。0.58 怎么读？
生：零点五八。
师：小数点怎么读？
生：读作"点"。
师：小数部分怎么读？从左到右依次读出每一位上的数字。那 10.05 怎么读？
生：十点零五。
师：注意小数部分的 0 也要读出来，不能省略。所以 10.05 读作十点零五，而不是十点五。谁来读一读 3.75？
生：三点七五。
师：会读还要会写。"五点零六"怎么写？
生：先写整数部分 5，再写小数点，点在个位的右下角，最后写 06，所以写作 5.06。
师：写小数时注意，小数点是个圆点，点在个位的右下角，小数部分每一位都要写出来。请同学们写出"零点零三"和"十二点五零"。
生：（独立书写，集体校对）0.03 和 12.50。

学生活动：跟读、试读小数，总结读写法要点，独立书写小数。

设计意图：通过对比 10.05 的读法，突出小数部分 0 必须读出的规则；写数时强调小数点的位置和每一位都要写全，培养严谨的书写习惯。

**环节四 探究小数的性质（约 8 分钟）**

教师活动：
师：我们来做一个比较。在直尺上找出 0.3 米和 0.30 米，它们一样长吗？
生：0.3 米是 3 分米，0.30 米也是 3 分米，一样长。
师：0.3 和 0.30 的大小有什么关系？
生：相等，0.3 等于 0.30。
师：小数的末尾添上 0 或去掉 0，小数的大小不变，这就是小数的性质。请同学们比较 10.50 和 10.5 的大小。
生：10.50 等于 10.5。
师：利用小数的性质，可以把小数化简。0.600 去掉末尾的 0，化简为？
生：0.6。
师：也可以按要求改写。把 0.5 改写成三位小数。
生：在末尾添两个 0，写成 0.500。
师：注意！只能去掉或添上小数末尾的 0。中间的 0 能不能去掉？比如 3.05 去掉中间的 0 变成 3.5，大小变了吗？
生：变了，3.05 不等于 3.5，所以中间的 0 不能去掉。
师：请同学们完成练习：化简 0.800 和 5.060，把 2.6 改写成两位小数。
生：（独立完成）0.8、5.06；2.60。

学生活动：比较 0.3 与 0.30，理解小数的性质，化简和改写小数，辨析中间的 0 不能去掉。

设计意图：用直尺上找长度的方法让学生直观感受 0.3 等于 0.30，理解性质的内涵；通过化简、改写的对比练习和"中间 0 能不能去掉"的辨析，突破易错点。

**环节五 小数大小比较与课堂小结（约 8 分钟）**

教师活动：
师：掌握了小数的意义和性质，还要会比较小数的大小。0.9 和 0.12 谁大？请同学们先猜一猜，再说说理由。
生：0.9 大，因为 0.9 表示十分之九，0.12 表示百分之十二，十分之九大于百分之十二。
师：比较小数大小的方法是什么？先比较整数部分，整数部分大的数就大；整数部分相同，再比较十分位，十分位上的数大的数就大；十分位相同再比较百分位……
生：（说方法）还要注意不能只看小数的位数。
师：对，0.9 虽然位数少，但它比 0.12 大，所以比较大小不能只看位数。请同学们完成比较大小的练习：0.5 和 0.45，3.2 和 3.15。
生：（独立完成并说理）
师：这节课我们学习了什么？
生：小数的意义、读写法、性质，还有大小比较。
生：我知道了小数的计数单位是 0.1、0.01、0.001。
师：同学们真棒！课后请同学们去超市收集三个带小数的价格标签，读一读、写一写，并用小数的性质说明它们的含义。

学生活动：比较小数的大小并说明理由，完成巩固练习，总结本课收获。

设计意图：通过"0.9 和 0.12 谁大"的认知冲突，让学生领悟比较小数大小要看数位上的数字而不是位数；课堂小结梳理知识结构，课后任务把学习延伸到生活中。

**板书设计**

小数的意义和性质

意义：分母是 10、100、1000 的分数写成小数
0.1 = 十分之一，0.01 = 百分之一，0.001 = 千分之一
计数单位：0.1、0.01、0.001，进率都是 10

数位顺序表：整数部分 ．小数部分（十分位、百分位、千分位）

性质：小数的末尾添上 0 或去掉 0，小数的大小不变
化简：0.600 = 0.6；改写：0.5 = 0.500
注意：中间的 0 不能去掉

比较：先比整数部分，再比十分位、百分位……不能只看位数

**教学反思要点**

1. 小数的意义是本节课的核心难点，借助米尺和百格图让学生直观感受平均分与十进关系，比单纯讲解分数与小数对应关系更有效。
2. 小数部分 0 的读写是高频错误点，通过 10.05 等典型例子的对比，强化"小数部分的 0 要读出来、写出来"的规则。
3. 小数性质的理解要建立在直观比较上，0.3 和 0.30 在直尺上的位置相同，学生才能透彻理解为什么末尾添 0 大小不变。
4. 比较小数大小"不能只看位数"这一点必须通过反例（0.9 与 0.12）让学生自己悟出来，记忆才能牢固。
5. 应设计"小数点搬家"等趣味活动巩固计数单位间的进率，把抽象的十进关系转化为形象的动态经验。`,talk:`尊敬的各位评委、各位老师：

大家好！今天我说课的内容是人教版小学数学四年级下册第四单元"小数的意义和性质"。下面我从教材、学情、教学目标、重难点、教法学法、教学过程、板书设计和教学反思八个方面进行说课。

一、说教材

"小数的意义和性质"是在学生认识了整数、初步认识小数的基础上进行教学的，是小数学习的起始课和奠基课。本单元主要包括小数的意义、小数的读写法、小数的性质、小数的大小比较等内容，本节课是单元起始课，重点理解小数的意义。从知识体系看，理解小数的意义是理解小数计数单位、学习小数四则运算算理的基础，也是沟通整数与分数、分数与小数之间联系的重要桥梁；从生活应用看，价格、长度、质量等测量结果都常用小数表示。因此，本课在小数知识体系中具有基础性、关键性的地位。

二、说学情

四年级学生在三年级已经通过购物、测量等情境初步认识了小数，会读写简单的小数，但对小数的意义缺乏深入理解，不清楚小数与分数的关系，不知道小数的计数单位，也难以理解十分之一、百分之一、千分之一之间的进率关系。同时，学生容易把小数部分的 0 读漏、写漏，也容易在比较小数大小时只看位数，误以为 0.9 小于 0.12。基于这样的学情，教学中要借助米尺、方格图等直观模型帮助学生建立小数的意义，通过对比辨析突破易错点。

三、说教学目标

我确定了以下三个教学目标。第一，结合具体情境认识小数的产生，理解小数的意义，知道十分之几、百分之几、千分之几可以用小数表示，认识小数的计数单位，发展数感；第二，认识小数的数位顺序表，掌握小数的读法和写法，能正确读写小数，会运用小数表示价格、长度等常见的量；第三，理解和掌握小数的性质，能运用它化简小数或把小数改写成指定数位的小数，掌握小数大小比较的方法，能正确比较几个小数的大小，在观察比较中发展推理能力。

四、说教学重难点

本节课的教学重点是理解小数的意义，掌握小数的性质和小数大小比较的方法；教学难点是理解小数的意义，建立十分之一、百分之一、千分之一与小数的对应关系。小数的意义之所以难，是因为它需要学生从分数的视角理解十进关系，这对以直观思维为主的四年级学生来说有一定抽象性。教学中我借助米尺、百格图等直观教具，让学生看得见、涂得出，逐步实现从具体到抽象的过渡。

五、说教法学法

本课我主要采用情境教学法、直观演示法和小组探究法。学生通过观察、操作、比较等活动理解小数的意义，教师借助课件和学具进行直观演示，引导学生在涂一涂、数一数中发现规律。同时设计小数点搬家等趣味活动巩固计数单位间的进率，让抽象的小数知识变得形象、亲切。此外，在本课学习中我还特别关注学生数感的发展，通过估一估、说一说、比一比等活动，让学生感受小数的实际大小；同时设计化简与改写的对比练习，让学生在小数性质的应用中体会数学表达的简洁美，为后续学习小数加减法打好基础。

六、说教学过程

我设计了五个教学环节。第一环节是情境导入，用时约 5 分钟，通过超市价格标签和米尺测量活动让学生感受小数的产生，激发学习兴趣。第二环节是探究小数的意义，用时约 12 分钟，借助米尺认识 0.1、0.01、0.001，用百格图涂出 0.23，理解小数与分数的关系，认识小数的计数单位及其进率。第三环节是学习小数的读法和写法，用时约 7 分钟，通过 10.05 等典型例子的对比，突出小数部分 0 必须读出来、写出来的规则。第四环节是探究小数的性质，用时约 8 分钟，让学生在直尺上找到 0.3 米和 0.30 米，直观理解末尾添 0 或去 0 大小不变，并通过化简与改写的练习掌握运用。第五环节是小数大小比较与课堂小结，用时约 8 分钟，通过 0.9 与 0.12 谁大的认知冲突，让学生领悟比较小数大小要看数位上的数字而不是位数，最后总结全课收获。

七、说板书设计

我的板书围绕小数的意义、计数单位、性质、比较方法四条主线展开，配以数位顺序表，把十分位、百分位、千分位及其计数单位对应呈现。板书层次清晰、重点突出，既帮助学生当堂理解，又便于课后复习，起到了知识的整理与串联作用。

八、说教学反思

本节课我努力做到让抽象的数学变得直观，用米尺、方格图撑起小数的意义；用典型反例化解比较大小只看位数、性质运用误去中间 0 等易错点。但小数的意义毕竟比较抽象，部分学生还需要更多的操作支撑，课后要通过分层练习和生活中的小数观察持续巩固，帮助每个学生真正建立数感。同时，我将在后续教学中继续设计读写、比较、化简的整合练习，并借助价格标签、身高体重等真实数据，让学生在多看多用中把小数的知识学得更扎实、更灵活。当然，教学中也出现了一些需要继续关注的问题，比如部分学生对计数单位间的进率还不熟练，我将通过摆数位卡片、玩小数点搬家游戏等活动进一步帮助他们巩固。总的来说，小数的教学需要慢功夫、细功夫，我要在持续的观察与练习中帮助学生形成扎实的数感。以上是我的说课内容，恳请各位老师批评指正，谢谢大家！`},"小学|五年级|数学|小数乘除法":{plan:`**教学基本信息**

课题：小数乘除法
教材版本：人教版小学数学五年级上册第一单元、第三单元
年级：五年级
课型：新授课
课时：公开课 1 课时（40 分钟）
授课对象：小学五年级学生

**教学目标**

1. 理解小数乘整数、小数乘小数的算理，掌握小数乘法的计算方法，能正确确定积的小数点位置，理解积的小数位数与因数小数位数的关系，发展运算能力。
2. 理解除数是整数、除数是小数的除法算理，掌握小数除法的计算方法，能正确进行笔算，理解把除数转化成整数再除的方法，商的小数点与被除数对齐，培养迁移类推能力。
3. 会用四舍五入法求积或商的近似数，认识循环小数，能结合生活情境解决简单的实际问题，体会知识间的内在联系，增强用数学解决实际问题的信心。

**教学重难点**

重点：掌握小数乘除法的计算方法，能正确确定积、商中小数点的位置。
难点：理解积的小数位数与因数小数位数的关系；理解除数是小数的除法转化为除数是整数的除法的算理。

**教学准备**

多媒体课件（超市购物小票、价格标签、购物结账动画）；米尺；计算器；课堂练习纸；口算卡片；小数乘除法竖式演示板。

**教学过程**

**环节一 情境导入：购物结账中的小数（约 5 分钟）**

教师活动：
（课件出示超市购物小票，上面有：苹果每千克 8 元，买 0.8 千克；牛奶每盒 2.5 元，买 4 盒）
师：同学们，老师周末去超市购物，这是购物小票。苹果每千克 8 元，买 0.8 千克，应付多少钱？算式怎么列？
生：8 乘 0.8。
师：8 乘 0.8，乘数里有小数，这就是小数乘法。牛奶每盒 2.5 元，买 4 盒，一共多少钱？
生：2.5 乘 4，也是小数乘法。
师：看来生活中经常要用到小数乘除法。今天这节课，我们就来研究小数的乘法和除法。（板书课题：小数乘除法）
生：（齐读课题）

学生活动：观察购物小票，列出小数乘法算式，明确学习任务。

设计意图：用购物结账的真实情境引出小数乘除法，让学生感受到学习小数乘除法的必要性，激活已有整数乘除法的计算经验，为迁移学习作好准备。

**环节二 探究小数乘法的算理与方法（约 12 分钟）**

教师活动：
师：我们先来算 0.8 乘 3。请同学们想一想，可以用已经学过的知识解决吗？
生：0.8 是 8 个十分之一，8 个十分之一乘 3 得 24 个十分之一，就是 2.4。
师：理解得非常透彻！还有别的方法吗？
生：可以把 0.8 看成 8，先算 8 乘 3 得 24，因为 0.8 扩大 10 倍变成 8，积就要缩小到原来的十分之一，所以是 2.4。
师：两种方法殊途同归。那小数乘小数呢？请同学们算一算 0.6 乘 0.5。
生：先算 6 乘 5 得 30，两个因数共扩大了 100 倍，积要缩小到原来的百分之一，得 0.30，化简为 0.3。
师：说得真好！观察这两道题，我们总结一下小数乘法的计算方法：先按整数乘法算出积，再看因数中一共有几位小数，就从积的右边起数出几位，点上小数点。
生：（齐读方法）
师：请同学们计算 0.03 乘 0.02，积的小数位数不够怎么办？
生：先算 3 乘 2 得 6，两个因数一共有四位小数，积要从右边数四位，位数不够，要在前面补 0，得 0.0006。
师：对！位数不够前面补 0，这是容易出错的地方。请完成练习：0.86 乘 3.2，再保留一位小数求积的近似数。
生：（计算 0.86 乘 3.2 得 2.752，保留一位小数看百分位，约等于 2.8）

学生活动：探索小数乘整数的多种方法，归纳小数乘法计算方法，完成含补 0 和求近似数的练习。

设计意图：让学生在充分说理中理解小数乘法的算理，通过整数乘法与小数乘法的对比归纳出计算方法，突出积的小数位数与因数小数位数的关系这一难点。

**环节三 学习除数是整数的小数除法（约 10 分钟）**

教师活动：
师：苹果每千克 8 元，如果买了 9.6 千克，应付多少元？其实我们换个问题：一瓶饮料 9.6 元，正好是 4 瓶促销装，每瓶多少钱？
生：9.6 除以 4。
师：除数是整数的小数除法，怎么算？请同学们尝试竖式计算。
生：（板演）个位 9 除以 4 商 2 余 1，把 1 个一转成 10 个十分之一，和十分位的 6 合成 16 个十分之一，除以 4 商 4，得 2.4。
师：除到个位有余数，怎么继续除？
生：把余数转化成低一级的计数单位，添 0 继续除。
师：商的小数点要注意什么？
生：商的小数点要和被除数的小数点对齐。
师：这是小数除法最关键的一点。除到末尾仍有余数时，就添 0 继续除。请完成练习：25.6 除以 8，7.5 除以 5。
生：（独立完成，集体订正）25.6 除以 8 得 3.2，7.5 除以 5 得 1.5。

学生活动：尝试竖式计算小数除以整数，理解余数转化的算理，明确商的小数点与被除数对齐。

设计意图：借助整除法竖式经验迁移到小数除法，突出"商的小数点与被除数对齐""有余数添 0 继续除"两个要点，把算理讲透，为除数是小数的除法作铺垫。

**环节四 学习除数是小数的除法（约 8 分钟）**

教师活动：
师：现在难度升级了。每千克苹果 3.4 元，妈妈买苹果花了 6.12 元，买了多少千克？
生：6.12 除以 3.4。
师：除数是小数，该怎么算呢？请同学们回忆商不变的性质，在小组里讨论办法。
生：根据商不变的性质，把被除数和除数同时扩大到原来的 10 倍，6.12 变成 61.2，3.4 变成 34，再除。
师：这样除数就变成整数了。转化的方法是：先看除数有几位小数，把除数和被除数的小数点同时向右移动相同的位数，使除数变成整数，位数不够补 0。请同学们完成 6.12 除以 3.4 的竖式。
生：（板演）61.2 除以 34，商是 1.8。
师：再请同学们做一道 7.65 除以 0.85，除数有几位小数？被除数、除数的小数点怎么移？
生：除数有两位小数，同时向右移动两位，变成 765 除以 85，商是 9。
师：想一想，为什么可以这样移？
生：因为商不变的性质，被除数和除数同时扩大相同的倍数，商不变。

学生活动：讨论转化方法，动手计算，理解除数是小数的除法转化算理。

设计意图：让学生借助商不变的性质自主探究转化方法，理解"除数的小数点向右移动几位，被除数也移动几位"的算理，突破除数是小数的除法这一难点。

**环节五 商的近似数、循环小数与课堂小结（约 5 分钟）**

教师活动：
师：有些除法永远除不尽。比如 10 除以 3，商是 3.333……，像这样从小数部分某一位起，一个数字或几个数字依次不断重复出现的小数，叫循环小数，可以写作 3.333……，也可以在循环节首位和末位数字上面点圆点表示。
生：（认识循环小数的简便记法）
师：计算 2.5 除以 7，除不尽，商保留两位小数约是多少？用四舍五入法。
生：2.5 除以 7 约等于 0.36，保留两位小数看千分位。
师：在生活中，遇到除不尽的情况，我们常根据实际需要取商的近似数，比如购物结账、出租车计费。今天我们一起研究了小数乘除法，谁来说说收获？
生：小数乘法先按整数算，再数因数的小数位数点小数点。
生：小数除法商的小数点要和被除数对齐，除数是小数要先转化。
师：总结得真完整！课后请同学们完成练习纸上的巩固练习，并用计算器验证其中两题的结果。

学生活动：认识循环小数，用四舍五入取商的近似数，总结小数乘除法的计算方法。

设计意图：让学生了解循环小数的概念和简便记法，体会取近似数在生活中的应用价值；通过课堂小结梳理方法，形成小数乘除法计算的整体结构。

**板书设计**

小数乘除法

乘法：先按整数乘法算，再看因数中一共有几位小数，从积的右边起数出几位点上小数点。位数不够前面补 0。
0.8 × 3 = 2.4；0.6 × 0.5 = 0.3；0.03 × 0.02 = 0.0006

除法：商的小数点与被除数对齐，有余数添 0 继续除；除数是小数先转化成整数。
9.6 ÷ 4 = 2.4；6.12 ÷ 3.4 = 61.2 ÷ 34 = 1.8

近似数：四舍五入。0.86 × 3.2 约等于 2.8；2.5 ÷ 7 约等于 0.36
循环小数：10 ÷ 3 = 3.333……

**教学反思要点**

1. 小数乘法的核心是理解积的小数位数与因数小数位数的关系，教学中通过两种说理方法对比，让学生在算理层面真正理解而不是机械记忆。
2. 商的小数点与被除数对齐是除法计算最易出错处，应通过板演和改错练习反复强调，让学生形成书写习惯。
3. 除数是小数的除法是转化思想的集中体现，学生借助商不变的性质自主探究，比教师直接讲授效果更好，要舍得给时间讨论。
4. 补 0 点小数点（0.03 乘 0.02）和移小数点位数不够补 0 是两类典型错误，需设计专门练习辨析。
5. 循环小数和近似数贴近生活实际，用购物、计费情境讲解，学生能真切体会学习小数乘除法的价值。`,talk:`尊敬的各位评委、各位老师：

大家好！今天我说课的内容是人教版小学数学五年级上册"小数乘除法"。下面我从教材、学情、教学目标、重难点、教法学法、教学过程、板书设计和教学反思八个方面进行说课。

一、说教材

"小数乘除法"是小学数学计算教学的重要内容，是在学生掌握了整数乘法、整数除法以及小数意义的基础上进行教学的。本单元内容包括小数乘整数、小数乘小数、除数是整数的小数除法、除数是小数的除法、积或商的近似数以及循环小数等。本节课是对小数乘除法核心知识的综合探究课，重点掌握计算方法和小数点的处理。从知识体系看，本课是整数乘除法向小数领域的重要延伸，是学习小数四则混合运算和解决实际问题的基础；从现实意义看，购物结账、测量计算等生活场景都离不开小数乘除法。因此，本课具有基础性强、应用面广的特点。

二、说学情

五年级学生已经熟练掌握整数乘除法，理解了小数的意义，具备较强的迁移类推能力。但是，积的小数位数容易数错，商的小数点容易漏点，除数是小数时学生常只移动除数的小数点而忘记移动被除数，积或商位数不够时的补 0 处理也不够熟练。同时，学生对小数与整数计算的异同认识模糊。基于这样的学情，教学中要充分借助整数乘除法的经验，通过对比归纳帮助学生掌握方法、理解算理。

三、说教学目标

我确定了以下三个教学目标：第一，理解小数乘整数、小数乘小数的算理，掌握小数乘法的计算方法，能正确确定积的小数点位置，理解积的小数位数与因数小数位数的关系，发展运算能力；第二，理解除数是整数、除数是小数的除法算理，掌握小数除法的计算方法，能正确进行笔算，理解把除数转化成整数再除的方法，商的小数点与被除数对齐；第三，会用四舍五入法求积或商的近似数，认识循环小数，能结合生活情境解决简单的实际问题，体会知识间的内在联系，增强用数学解决实际问题的信心。

四、说教学重难点

本节课的教学重点是掌握小数乘除法的计算方法，能正确确定积、商中小数点的位置；教学难点是理解积的小数位数与因数小数位数的关系，以及理解除数是小数的除法转化为除数是整数的除法的算理。小数点的处理是学生出错的高发区，而转化思想是本课的灵魂，学生只有理解了为什么可以这样转化，才能真正掌握方法。围绕重难点，我设计了对比探究、转化推理等环节。

五、说教法学法

本课我主要采用情境教学法、迁移类推法和对比归纳法。学生通过把小数乘除法与整数乘除法对照学习，经历从特殊到一般的归纳过程，在独立尝试、小组交流中理解算理、掌握算法。教师以购物情境为载体，以旧知识为生长点，引导学生自主迁移，让计算教学有道理可讲、有规律可循。在练习设计上，我注重层次性和针对性：先进行模仿性的基本练习，再进行改错式的辨析练习，最后是结合购物情境的应用练习，让学生在算一算、辨一辨、用一用的过程中，逐步形成正确、灵活的计算技能和检验意识。

六、说教学过程

我设计了五个教学环节。第一环节是情境导入，用时约 5 分钟，通过超市购物小票引出小数乘除法，让学生感受到学习的必要性，激发学习兴趣。第二环节是探究小数乘法的算理与方法，用时约 12 分钟，让学生用计数单位分析和因数扩大缩小两种方法理解算理，归纳先按整数乘、再数小数位数点小数点的方法，并练习补 0 和求积的近似数。第三环节是学习除数是整数的小数除法，用时约 10 分钟，借助竖式迁移理解余数转化的过程，明确商的小数点与被除数对齐这一关键。第四环节是学习除数是小数的除法，用时约 8 分钟，让学生利用商不变的性质自主探究转化方法，理解被除数、除数小数点同时移动的算理。第五环节是商的近似数、循环小数与课堂小结，用时约 5 分钟，认识循环小数及其简便记法，用四舍五入取商的近似数，体会近似数在购物、计费中的应用，最后总结全课。

七、说板书设计

我的板书把小数乘法与除法的方法要点并列呈现，配以典型竖式示例，直观展示小数点处理的规律，同时记录近似数与循环小数等延伸知识。板书结构完整、重点醒目，既是课堂探究的成果，又是学生课后复习的依据。

八、说教学反思

本节课我注重让学生在迁移中学习，把小数乘除法与整数乘除法紧密联系，帮助学生理解算理；注重通过对比和改错突破小数点处理的难点，让学生在辨析中加深理解。但在有限的课堂时间内，学生的计算熟练度还需要通过课后分层练习来提升，个别学困生对转化方法的理解也需要个别辅导。今后我要进一步优化练习设计，让每个学生都能算得对、算得快。同时，我还将把每天五道小数口算作为常态训练，让学生在购物时尝试自己计算总价和找零，让课堂上学到的计算方法真正走向生活、服务生活。我也将在后续教学中加强对循环小数认识的直观演示，帮助学生理解循环小数的含义，避免死记硬背。同时，我会结合学生的计算错误，及时开展改错辨析，让学生在纠正错误中把计算方法掌握得更牢固。以上是我的说课内容，恳请各位老师批评指正，谢谢大家！`}},xs={"小学|五年级|数学|多边形面积":{plan:`
# 公开课详案：多边形面积

## 一、教学基本信息

- 课题：多边形面积
- 教材版本：人教版《义务教育教科书·数学》五年级上册
- 年级：小学五年级
- 课型：新授课（面积公式推导探究课）
- 课时：1 课时（40 分钟）

## 二、教学目标

1. 理解并掌握平行四边形、三角形、梯形面积的计算公式，能运用公式正确计算三种图形的面积，并能解决菜地、花坛等生活实际问题，落点于应用意识与量感。
2. 经历用剪拼、平移、旋转等方法探索面积公式的完整过程，感悟"化未知为已知"的转化思想，发展空间观念、推理意识与几何直观。
3. 在动手操作、小组合作中敢于表达、乐于验证，养成先观察后动笔、算后检验的严谨习惯，增强学好数学的自信心。

## 三、教学重难点

- 教学重点：平行四边形、三角形、梯形面积公式的推导过程与正确运用。
- 教学难点：理解转化思想，找准底与高的对应关系（底和高必须互相垂直），区分面积与周长，正确处理单位换算。

## 四、教学准备

多媒体课件、方格纸、剪刀、胶棒、学具袋（平行四边形、三角形、梯形纸片各若干）、一张大号平行四边形纸片供演示剪拼用、面积单位卡片。

## 五、教学过程

### 环节一 情境导入（约 5 分钟）

**教师活动**：课件出示校园一角的照片，操场边有一块平行四边形花坛，旁边立着一块"占地多少平方米"的牌子。教师提问：要知道这块花坛占地多少，就是要算什么？

**预设师生对话**：
师："同学们，看这块平行四边形的花坛，工人师傅想给花坛换草坪，需要知道它的占地面积，你们觉得该算它的什么？"
生："算它的面积！"
师："面积我们已经会算哪些图形的了？"
生："长方形和正方形。"
师："长方形面积怎么算？"
生："长乘宽。"
师："那这个平行四边形我们没学过，能不能想办法把它变成我们学过的图形呢？今天我们就来研究多边形的面积。"

**学生活动**：观察情境图，回忆长方形面积公式，思考"变"的办法，带着问题进入新课。

**设计意图**：从校园真实场景切入，唤醒学生对长方形面积公式的记忆，制造"不会求"的认知冲突，为转化思想的引入埋下伏笔。

### 环节二 探究新知（约 20 分钟）

**教师活动**：分三步组织探究。

第一步，探究平行四边形的面积。教师给每组发一张平行四边形纸片和一把剪刀，先让学生猜一猜面积和底、高有什么关系，再让学生沿高剪开。教师巡视时追问：为什么要沿高剪？剪下的三角形放在哪里？学生把剪下的三角形平移到另一边，拼成长方形。教师引导观察：长方形的长和宽分别对应平行四边形的什么？

**预设师生对话**：
师："谁来说说你是怎么剪、怎么拼的？"
生："我沿着高剪下一个三角形，把它平移到另一边，就拼成了一个长方形。"
师："拼成的长方形和原来平行四边形的面积变了吗？"
生："没有变，只是形状变了。"
师："长方形的长相当于平行四边形的？"
生："相当于它的底。"
师："宽呢？"
生："相当于它的高。"
师："所以平行四边形的面积等于？"
生："等于底乘高。"

教师板书：S = a × h，再让学生用方格纸数一数验证：平行四边形占了多少格，和底乘高算出的结果是不是一样。

第二步，探究三角形的面积。教师提问：能用刚才的思路求三角形的面积吗？学生尝试后，教师引导用两个完全一样的三角形拼一拼。学生拼出平行四边形后发现：平行四边形的底等于三角形的底，高等于三角形的高，三角形是这个平行四边形的一半。教师强调"除以 2"是这一步的关键。

**预设师生对话**：
师："我们用两个完全一样的三角形拼出了什么？"
生："拼出了一个平行四边形。"
师："每个三角形的面积和这个平行四边形有什么关系？"
生："三角形是它的一半。"
师："那三角形的面积应该怎么算？"
生："底乘高再除以 2。"

教师板书：S = a × h ÷ 2，并提醒：计算时先写除以 2，再代入数据，避免漏除。

第三步，探究梯形的面积。教师引导：既然三角形能拼，梯形能不能也试一试？学生用两个完全一样的梯形拼成平行四边形，观察发现：平行四边形的底等于梯形的上底加下底，高等于梯形的高。由此得出梯形面积公式。

**预设师生对话**：
师："拼成的平行四边形的底是什么？"
生："是梯形的上底加下底。"
师："梯形面积是平行四边形面积的多少？"
生："一半。"
师："所以梯形的面积公式是？"
生："（上底加下底）乘高除以 2。"

教师板书：S =（a + b）× h ÷ 2。

最后把三个公式并排放在一起，引导学生对比找相同与不同：都是通过"转化"得到；三角形、梯形都要除以 2，平行四边形不用。

**学生活动**：人人动手剪一剪、拼一拼，在小组里说推导过程，用方格纸验证结果，对照板书口述三个公式。

**设计意图**：三个公式的推导层层递进、一脉相承，从"沿高剪拼"到"双倍拼接"，让学生亲身经历转化全过程，既理解公式的来龙去脉，又内化转化思想。

### 环节三 巩固练习（约 10 分钟）

**教师活动**：出示分层练习题，先独立完成再全班交流。

1. 基础题：计算下面图形的面积。
（1）平行四边形，底 8 米，高 5 米，求面积。
（2）三角形，底 12 厘米，高 6 厘米，求面积。
（3）梯形，上底 5 米，下底 7 米，高 4 米，求面积。

2. 变式题：一个三角形的面积是 24 平方厘米，底是 8 厘米，高是多少厘米？（引导逆向思考，h = 2 × S ÷ a，得 6 厘米）

3. 判断题（用手势判断对错）：
（1）三角形的面积等于平行四边形面积的一半。（错，必须等底等高）
（2）计算梯形面积时忘了除以 2，结果就大了 1 倍。（对）

4. 单位换算：1 平方米 = （ ）平方分米；3 平方米 = （ ）平方分米；1 公顷 = （ ）平方米。

**预设师生对话**：
师："第 2 题知道面积和底，怎样求高？"
生："把面积先乘 2，再除以底。"
师："为什么先乘 2？"
生："因为三角形面积等于底乘高除以 2，要先还原成平行四边形的面积。"
师："计算时还要注意什么？"
生："底和高必须对应，单位要先统一。"

**学生活动**：独立列式计算，同桌互查，重点检查有没有漏掉除以 2、单位是否统一，并上台板演汇报。

**设计意图**：练习由浅入深，覆盖公式正用、逆向求高、概念辨析与单位换算，及时暴露并纠正"忘除以 2、底高不对应"两大典型错误。

### 环节四 课堂小结（约 3 分钟）

**教师活动**：引导学生回顾本节课的收获。

**预设师生对话**：
师："今天这节课，我们是怎样求出三种图形面积的？"
生："把它们都转化成已经学过的图形。"
师："转化时用到了哪些方法？"
生："剪拼、平移、旋转，还有把两个一样的图形拼在一起。"
师："求三角形和梯形面积时最容易犯什么错？"
生："忘记除以 2。"

**学生活动**：用"转化"一词梳理三种公式的推导线索，把三个公式记进笔记本。

**设计意图**：回扣"转化思想"这一主线，帮助学生把零散的知识串成结构，实现由会算到明理。

### 环节五 拓展延伸（约 2 分钟）

**教师活动**：出示一张由长方形和三角形组成的组合图形（如"五边形小房子"），提问：这个图形的面积你会算吗？课后请同学们量一量身边物体的面，比如教室黑板、家里地砖，算一算它们的面积。

**预设师生对话**：
师："这个房子的正面由哪些图形组成？"
生："上面是三角形，下面是长方形。"
师："它们的面积怎么合在一起算？"
生："分别算出面积再相加。"

**学生活动**：观察组合图形，说出拆分思路，领取课后测量小任务。

**设计意图**：把课内探究延伸到课外实践，渗透"组合图形求积"的分割思想，让数学学习走向生活。

## 六、板书设计

多边形面积

转化思想：不会求的图形 → 会求的图形

平行四边形：沿高剪、平移 → 长方形，S = a × h
三角形：两个相同三角形拼成平行四边形，S = a × h ÷ 2
梯形：两个相同梯形拼成平行四边形，S =（a + b）× h ÷ 2

易错提醒：三角形、梯形忘除以 2；底高要对应对垂直；先统一单位再计算。

## 七、教学反思要点

1. 是否让每一位学生都亲历了剪拼操作？若时间紧张，梯形部分可改为教师演示加个别学生操作，保证人人有体验。
2. 学生在"除以 2"处错误较多，下一课时需补充"给图形标底和高""列式先写除以 2"的专项训练。
3. 方格纸验证环节有效支撑了公式的合理性，学生从"信公式"走向"懂公式"，本做法值得保留。
4. 组合图形拓展可提前准备彩纸模型，让空间感薄弱的学生能直观拆分。
5. 关注学困生：让他们借助学具再次经历推导，多说、多摆，再完成基础题。
`,talk:`
# 说课稿：多边形面积

## 一、说教材

我说课的内容是人教版小学数学五年级上册"多边形的面积"单元。本单元是在学生已经掌握长方形、正方形面积计算，认识平行四边形、三角形、梯形基本特征的基础上进行教学的，是小学阶段平面图形面积知识的重点内容，也是今后学习组合图形、圆和立体图形表面积的基础。本课把平行四边形、三角形、梯形三种图形面积的推导整合在一节课中，以"转化"为灵魂贯穿始终，帮助学生建立完整的面积公式体系。之所以这样安排，是因为三种图形面积公式的推导思路一脉相承，放在一起学习便于学生沟通联系、举一反三，因此本节课在单元中起到承前启后的关键作用。

## 二、说学情

五年级的学生已经具备一定的动手操作能力和抽象概括能力，会计算长方形、正方形的面积，也认识三种图形的特征，这为本课学习提供了经验基础。但学生的思维仍以形象思维为主，第一次面对"不会求的图形"时，往往缺乏主动转化的意识，想不起来"变一变"的办法；在面积公式学习中容易出现底与高不对应、忘记除以 2、单位不统一等典型错误。同时，学生合作探究的习惯正在养成中，个别学生动手慢、不敢发言，需要教师适时示范、小组帮扶。因此教学中要创设充分的动手操作机会，让学生在剪、拼、移、数的过程中积累活动经验，再逐步抽象出公式。

## 三、说教学目标

基于课程标准与教材分析，我确立了以下三维目标。知识与技能方面，理解并掌握三种图形面积的计算公式，能正确运用公式计算和解决实际问题；过程与方法方面，经历剪拼、平移、旋转等操作探索公式的过程，感悟转化思想，发展空间观念与推理意识；情感态度方面，在合作探究中体验成功的乐趣，养成严谨计算、自觉检验的习惯。其中，转化思想的感悟与空间观念的培养是数学核心素养在本课的重要落点，也是本课区别于一般练习课的价值所在。

## 四、说教学重难点

本课的教学重点是三种图形面积公式的推导过程与正确运用。教学难点是理解转化思想，找准底与高的对应关系，并区分面积与周长。为了突破难点，我采用"演示加操作"双轨并行：先由教师示范平行四边形的剪拼，再由学生小组合作完成三角形、梯形的拼接，让学生在操作中亲眼看到"底高对应"的关系，用直观经验支撑对公式的理解。同时设计"给图形标底和高"的专项练习，帮助学生建立"底和高互相垂直"的正确表象，而不是死记硬背公式。

## 五、说教法学法

本课我主要采用直观演示法、操作探究法和合作交流法。教师的"引"体现在关键处的点拨：为什么要沿高剪、拼成的图形和原图形有什么关系、为什么三角形和梯形要除以 2；学生的"学"体现在人人动手、组内讨论、上台汇报。整节课以学生的操作活动为主线，以问题为导向，让学生在"做中学、说中悟"，真正成为学习的主人。此外，用数方格验证公式结果，渗透了"猜测—验证"的科学探究方法，有利于学生养成严谨的学习态度。

## 六、说教学过程

我设计了五个教学环节，时间分配为 5、20、10、3、2 分钟，合计 40 分钟。第一环节情境导入，用校园平行四边形花坛设疑，唤醒长方形面积公式这一旧知，自然引出"转化"的需求；第二环节探究新知，这是本课的重点环节，分三步完成三个公式的推导：先用剪拼法推出平行四边形的面积，再用两个完全一样的三角形推出三角形的面积，最后迁移到梯形的面积，步步深入、环环相扣；第三环节巩固练习，安排基础题、变式题、判断题和单位换算，及时反馈纠错；第四环节课堂小结，用"转化"一词串起全课的知识与方法；第五环节拓展延伸，渗透组合图形求积的分割思想，并布置测量身边物体面积的实践作业，把学习从课内引向课外。在整个探究过程中，我坚持让每个学生都真正动手：平行四边形由教师示范剪拼，三角形和梯形由学生同桌合作完成，操作前先猜一猜、操作后再说一说，把"做"与"说"紧密结合；练习时请学生上台板演并当堂点评，重点查看他们是否先写公式、再代入数据、最后检查有没有漏除以 2，通过即时反馈让典型错误无处藏身。五个环节环环相扣，把操作、思考、表达与练习融为一体，确保学生在四十分钟里学得扎实、学得生动。

## 七、说板书设计

我的板书分三块：上方写课题与"转化思想"，点明本课的灵魂；中间按推导线索依次列出平行四边行、三角形、梯形的面积公式，并在关键处标注"剪拼""平移""双倍拼接"等推导方法；下方写易错提醒。板书与探究过程同步生成，既是知识的结构化梳理，也是方法论的显性表达，便于学生对照记忆和课后复习。

## 八、说教学评价

本节课的评价贯穿全程：操作中关注学生是否人人参与、剪拼是否规范；汇报中关注学生能否用数学语言说清"拼成的图形与原图形的关系"；练习中关注学生能否及时纠正"忘除以 2、单位不统一"等错误。通过自评、互评与教师点评相结合，既看结果更看过程，既重知识更重思想。同时关注学困生，让他们借助学具再次经历推导，多说、多摆，再完成基础题；对学有余力的学生，则用变式题和组合图形问题满足他们的挑战需求，力求让每一位学生都在动手动脑中真正理解多边形面积的来龙去脉，带着转化的眼光走向更广阔的数学世界。此外，我将把本课学生暴露的典型错误整理成错题案例，在下一课时前进行针对性的回顾与强化，让每一次练习都成为学生思维生长的台阶。
`},"小学|六年级|数学|分数乘除法":{plan:`
# 公开课详案：分数乘除法

## 一、教学基本信息

- 课题：分数乘除法
- 教材版本：人教版《义务教育教科书·数学》六年级上册
- 年级：小学六年级
- 课型：新授课（计算与解决问题整合课）
- 课时：1 课时（40 分钟）

## 二、教学目标

1. 理解分数乘整数、分数乘分数的意义，理解分数除法的意义，掌握"分子乘分子作分子、分母乘分母作分母""除以一个数等于乘它的倒数"等计算法则，能正确、熟练地进行分数乘除计算，落点于运算能力与数感。
2. 理解倒数的意义，能正确求一个数的倒数，通过画线段图理解分数除法的算理，沟通乘除之间的转化关系，发展推理意识。
3. 会找单位"1"，正确解答"求一个数的几分之几是多少"与"已知一个数的几分之几是多少求这个数"两类应用题，养成审题、检验的良好习惯。

## 三、教学重难点

- 教学重点：分数乘除法的计算法则；分数乘除法应用题中单位"1"的判定与数量关系分析。
- 教学难点：理解分数除法"除以一个数等于乘它的倒数"的算理；准确找出单位"1"并正确列式。

## 四、教学准备

多媒体课件、折纸（表示分数的方格图）、线段图学具、分数计算卡、单位"1"判断题卡、展台。

## 五、教学过程

### 环节一 情境导入（约 5 分钟）

**教师活动**：课件出示情境：学校劳动基地分给六（1）班一块菜地，同学们第一天种了这块地的 2/7。教师提问：你能提出哪些与分数有关的数学问题？

**预设师生对话**：
师："第一天种了这块地的 2/7，这个分数表示什么意思？"
生："把整块地平均分成 7 份，种了其中的 2 份。"
师："如果第一天种了 3 份这样的地，该怎样列式？"
生："2/7 乘 3。"
师："三个 2/7 相加可以写成乘法，那么分数乘整数到底怎么算？今天我们就来研究分数乘除法。"

**学生活动**：观察情境、回忆分数的意义，尝试列出 2/7 × 3，产生探究欲望。

**设计意图**：以劳动基地情境唤醒分数的意义，由"几个相同分数相加"自然引出分数乘整数的算式，让学生感受到新知识源于已有经验。

### 环节二 探究新知（约 20 分钟）

**教师活动**：分四个层次组织探究。

第一层，分数乘整数。课件出示 2/7 × 3，引导学生理解它就是 3 个 2/7 相加，借助方格图直观演示：3 个 2/7 合起来是 6/7，即分母不变、分子相乘。

**预设师生对话**：
师："2/7 × 3 为什么等于 6/7？"
生："3 个 2/7 相加，分母还是 7，分子 2 乘 3 得 6。"
师："所以分数乘整数的法则可以概括为？"
生："用分子和整数相乘的积作分子，分母不变。"

第二层，分数乘分数。课件出示：种这块地的 1/2 再种，其中 3/4 是番茄，求番茄占整块地的几分之几。列式为 3/4 × 1/2。让学生用折纸或方格图表示：把 3/4 平均分成 2 份取 1 份，得到 3/8。学生发现：分子乘分子、分母乘分母。

**预设师生对话**：
师："从图中你看到 3/4 × 1/2 等于多少？"
生："等于 3/8。"
师："分子 3 和 1、分母 4 和 2 有什么关系？"
生："3 乘 1 作分子，4 乘 2 作分母。"
师："能约分的先约分，再相乘，结果要化成最简分数。"

教师板书法则并举例：3/8 × 4/9，先约分再算，得 1/6。

第三层，认识倒数。教师提问：乘积是 1 的两个数有什么关系？举例 2/3 和 3/2。学生总结：乘积是 1 的两个数互为倒数。练习：0.25 的倒数是多少（4）；1 的倒数是 1，0 没有倒数。

**预设师生对话**：
师："0.25 的倒数是几？"
生："0.25 等于 1/4，所以它的倒数是 4。"
师："为什么 0 没有倒数？"
生："0 乘任何数都得 0，不可能得到 1。"

第四层，分数除法。教师提问：6/7 ÷ 2 表示什么？学生联系除法意义回答。教师借助线段图：把 6/7 平均分成 2 份，每份是 3/7，即 6/7 × 1/2。再研究一个数除以分数：5 ÷ 2/3，引导学生用"求 5 里面有几个 2/3"理解，借助线段图得出 5 × 3/2。

**预设师生对话**：
师："6/7 ÷ 2 和 6/7 × 1/2 的结果一样吗？"
生："一样，都是 3/7。"
师："这说明什么？"
生："除以一个数等于乘这个数的倒数。"
师："除号变乘号、除数取倒数，这两步要同时完成。"

教师板书法则：甲数除以乙数（0 除外），等于甲数乘乙数的倒数。

**学生活动**：折纸、画线段图、小组讨论，完整经历"意义理解—算理直观—法则抽象"的过程。

**设计意图**：把乘、倒数、除串成一条线，用直观模型支撑算理，让学生在"先懂道理再记法则"中建立分数乘除的统一认知，为解应用题打下基础。

### 环节三 巩固练习（约 10 分钟）

**教师活动**：出示分层练习题。

1. 计算题：
（1）3/8 × 4/9（先约分再计算，得 1/6）
（2）4/9 ÷ 2（得 2/9）
（3）5 ÷ 2/3（得 15/2）
（4）3/4 × 2/5（得 3/10）

2. 判断题（用手势判断）：
（1）4/9 ÷ 2 的结果和 4/9 × 2 一样。（错，应乘 1/2）
（2）0.5 的倒数是 2。（对）

3. 应用题：
（1）一条路长 120 米，已经修了全长的 3/4，修了多少米？（120 × 3/4 = 90 米）
（2）一本书已经看了 45 页，正好是全书的 5/8，这本书一共有多少页？（45 ÷ 5/8 = 72 页）

**预设师生对话**：
师："这两道题都是分数应用题，为什么一道用乘、一道用除？"
生："第一题求一个数的几分之几是多少，用乘法；第二题已知一个数的几分之几是多少求这个数，用除法。"
师："判断时关键要找准什么？"
生："找准单位'1'，看单位'1'是已知还是未知。"

**学生活动**：独立计算，先圈分率句、再画线段图分析数量关系，同桌互相检验。

**设计意图**：计算与应用并重，用"单位'1'已知用乘、未知用除"帮助学生在对比中抓住两类应用题的实质，培养审题与检验习惯。

### 环节四 课堂小结（约 3 分钟）

**教师活动**：引导学生回顾本课核心知识。

**预设师生对话**：
师："分数乘除法的计算核心是什么？"
生："乘法是分子乘分子、分母乘分母；除法是除以一个数等于乘它的倒数。"
师："解分数应用题的第一步是什么？"
生："找出单位'1'，看它已知还是未知。"
师："计算结果要注意什么？"
生："能约分的先约分，结果化成最简分数。"

**学生活动**：同桌互说法则与找单位"1"的方法，把易错点记入笔记。

**设计意图**：通过复述把方法内化，突出"算理统一、单位'1'是解题关键"两个核心。

### 环节五 拓展提升（约 2 分钟）

**教师活动**：出示思维题：学校图书角有故事书 60 本，科技书比故事书少 1/5，科技书有多少本？引导学生先找单位"1"再列式（60 ×（1 - 1/5）= 48 本），并布置课后作业：口算卡一页、应用题 3 道。

**预设师生对话**：
师："'科技书比故事书少 1/5'，单位'1'是谁？"
生："故事书的本数。"
师："科技书相当于故事书的几分之几？"
生："1 减 1/5，是 4/5。"

**学生活动**：口述思路、独立列式，明确课后任务。

**设计意图**：渗透"多几分之几、少几分之几"的变式，让学生带着方法走向课后，实现能力的迁移。

## 六、板书设计

分数乘除法

分数乘法：分子乘分子作分子，分母乘分母作分母（先约分）
例：3/8 × 4/9 = 1/6
倒数：乘积是 1 的两个数互为倒数；1 的倒数是 1，0 没有倒数
分数除法：除以一个数（0 除外）等于乘它的倒数
例：6/7 ÷ 2 = 3/7；5 ÷ 2/3 = 15/2
应用题：单位"1"已知用乘法，单位"1"未知用除法

## 七、教学反思要点

1. 借助方格图与线段图，学生对"除以一个数等于乘倒数"的算理接受度明显提高，说明直观支撑必不可少。
2. 判断题中"4/9 ÷ 2 错算成 4/9 × 2"的错误暴露充分，下一环节需用彩色笔强调"变号、取倒数两步同时完成"。
3. 应用题部分，先圈分率句、再画线段图的审题步骤成效显著，应固化为常规动作。
4. 计算正确率有待提高，建议每日课前 3 分钟口算接龙强化训练。
5. 学困生对分数除法的算理仍有困难，课后可借助折纸与线段图再次演示，并完成基础计算题。
`,talk:`
# 说课稿：分数乘除法

## 一、说教材

我说课的内容是人教版小学数学六年级上册"分数乘除法"单元。本单元是在学生掌握整数乘法、分数意义和基本性质基础上安排的，由分数乘法、倒数与分数除法、分数乘除法应用三部分构成，是小学数学计算教学的重要内容，也是今后学习比、百分数、比例以及解决较复杂分数问题的知识基础。本节课把分数乘除法的计算法则与两类基本应用题整合呈现，以"算理统一、单位'1'为主线"统领全课，帮助学生构建分数运算的整体认知。分数乘除法在小学阶段地位举足轻重，它既是分数知识的综合运用，又是后续学习比的化简、百分数应用题的前提，所以必须把算理讲透、把方法教活。

## 二、说学情

六年级的学生已经学过整数乘除法、分数的意义和分数加减法，具备一定的画图分析能力和迁移能力，能够借助图形直观理解新知识。但分数乘除法的意义对多数学生而言比较抽象，尤其是分数除法的算理，学生往往只记法则不理解道理，把"除以一个数"直接当成"乘以这个数"的也不少；在应用题中找单位"1"也容易出错，见到"多几分之几、少几分之几"便乱乘乱除，不会先圈分率句、再画线段图。同时，六年级学生已经具备一定的合作与表达习惯，愿意在小组中交流想法。因此教学需要借助线段图等直观手段，把抽象的算理"可视化"，让学生先懂道理再记法则。

## 三、说教学目标

基于以上分析，我确定了如下目标。知识与技能方面，理解分数乘除法的意义，掌握计算法则，能正确熟练计算并会求倒数；过程与方法方面，经历"操作演示—理解算理—抽象法则"的过程，发展运算能力与推理意识；情感态度方面，在解决生活问题的过程中感受分数运算的价值，养成认真审题、自觉检验的习惯。其中运算能力与数感的培养是本课核心素养的主要落点，也是评价学生学习成效的重要标尺。

## 四、说教学重难点

本课的重点是分数乘除法的计算法则及应用题中单位"1"的判定。难点是理解分数除法"除以一个数等于乘它的倒数"的算理。为了突破难点，我采用线段图演示与操作验证相结合：先用"把 6/7 平均分成 2 份"的直观理解建立 6/7 ÷ 2 等于 6/7 × 1/2 的等式，再通过"求一个数里有几个分数"帮助学生理解除以分数的意义，让学生在"懂了再记"中掌握法则。同时，把"变号、取倒数"两步骤用彩色笔强调，编成顺口溜帮助学生记忆，防止漏步。

## 五、说教法学法

本课我采用直观演示法、迁移类推法和对比练习法。教师的教重在关键处的点拨与示范，比如在分数乘分数的折纸演示中引导学生发现"分子乘分子、分母乘分母"的规律；学生的学重在折一折、画一画、说一说，通过操作把分数乘除的算理转化为看得见的图形语言。教学中还设计了乘法与除法、两类应用题的对比，让学生在比较中发现规律、深化理解，实现由"会算"到"会用"的跨越。

## 六、说教学过程

我设计了五个环节，时间分配为 5、20、10、3、2 分钟，合计 40 分钟。第一环节情境导入，用菜地情境引出分数乘整数，让学生感受到新问题来自真实生活；第二环节探究新知，按"分数乘整数—分数乘分数—倒数—分数除法"四个层次推进，层层深入，先建立意义再抽象法则；第三环节巩固练习，安排计算题、判断题和两类应用题，在练习中暴露并纠正"除变乘忘取倒数""单位'1'找错"等典型错误；第四环节课堂小结，梳理法则与找单位"1"的方法，用"说一说"把方法内化；第五环节拓展提升，渗透"少几分之几"的变式并布置分层作业，让不同层次的学生都有收获。在探究新知环节，我坚持让学生先借助方格图和线段图理解算理、再归纳法则，绝不让学生在不懂道理的情况下背公式；当学生理解困难时，不急于讲授，而是通过"6/7 平均分成 2 份，每份是多少""画出线段图看一看"等追问，引导学生自己悟出"除以一个数等于乘它的倒数"。在应用题的练习中，我要求每个学生先圈分率句、再画线段图、最后列式计算，把这套审题步骤固化成学习习惯，从源头减少单位"1"找错的问题。

## 七、说板书设计

板书以"算理—法则—应用"为线索，左侧写分数乘法法则及例题，中间写倒数定义，右侧写分数除法法则及例题，下方概括"单位'1'已知用乘、未知用除"的解题策略。板书随探究进程逐步生成，层次清晰，既是知识的浓缩，也是解题方法的直观提示，学生课后可以对照板书复习巩固。

## 八、说教学评价

本课采用过程性评价与终结性评价相结合。课堂上关注学生能否用语言说清算理、能否借助线段图分析数量关系；练习中关注计算的正确率与检验习惯。通过同桌互评、组内交流、课堂板演等多种方式收集学习信息，及时调整教学节奏。对计算速度慢的学生，鼓励他们先用直观图辅助再过渡到熟练计算；对学有余力的学生，提供乘除混合运算和复杂应用题进行挑战。我相信，当学生既能说出"为什么"又能算对"怎么做"时，分数乘除法的学习才算真正落地生根。课后我还会利用口算卡片开展每日三分钟的计算热身，帮助学生把法则练熟、把速度提上来，为后续更复杂的分数运算打下坚实基础。
`},"小学|六年级|数学|百分数":{plan:`
# 公开课详案：百分数

## 一、教学基本信息

- 课题：百分数
- 教材版本：人教版《义务教育教科书·数学》六年级上册
- 年级：小学六年级
- 课型：新授课（百分数的意义与解决问题整合课）
- 课时：1 课时（40 分钟）

## 二、教学目标

1. 理解百分数的意义，知道百分数表示一个数是另一个数的百分之几，能正确读写百分数，理解百分数与分数、小数的联系与区别，知道百分数不能带单位，落点于数感与数据意识。
2. 掌握百分数与分数、小数互化的方法，能熟练互化并比较大小，会求出勤率、发芽率等常见百分率，发展运算能力。
3. 掌握"求一个数是另一个数的百分之几""求一个数的百分之几是多少""已知一个数的百分之几是多少求这个数"三类基本问题的解法，理解折扣等生活用语的含义，感受百分数在生活中的广泛应用，增强应用意识。

## 三、教学重难点

- 教学重点：百分数的意义；百分数与分数、小数的互化；三类百分数应用题的解题方法。
- 教学难点：理解单位"1"在百分数应用题中的作用；正确理解折扣、成数等生活用语与百分数的联系。

## 四、教学准备

多媒体课件、牛奶及饮料包装袋（含营养成分表）、购物小票、银行利率表、百分数互化卡片、学案纸。

## 五、教学过程

### 环节一 情境导入（约 5 分钟）

**教师活动**：请学生拿出课前收集的包装袋，观察营养成分表。课件放大一张牛奶盒：蛋白质 3.2%，脂肪 4.1%。教师提问：这些数你认识吗？它们表示什么意思？

**预设师生对话**：
师："牛奶盒上的 3.2% 表示什么？"
生："表示蛋白质占牛奶的百分之三点二。"
师："你还在哪里见过这样的数？"
生："衣服标签上、饮料瓶上、银行利率表里。"
师："像这样带有百分号的数叫百分数，今天我们就来研究百分数。"

**学生活动**：交流收集到的百分数，说说它们在生活中的含义。

**设计意图**：从学生身边真实的包装袋切入，让百分数"自己跳出来"，使学生真切感受到百分数与生活密不可分，激发学习兴趣。

### 环节二 探究新知（约 20 分钟）

**教师活动**：分三个层次展开。

第一层，理解百分数的意义与读写。教师出示 45%、50%、100% 等，引导学生读出并说出含义：表示一个数是另一个数的百分之几。特别强调：百分数表示两个量的倍数关系，不表示具体的量，所以后面不能带单位。

**预设师生对话**：
师："45% 读作什么？"
生："百分之四十五。"
师："它表示什么意思？"
生："表示一个数是另一个数的百分之四十五。"
师："能不能说 45% 千克？为什么？"
生："不能，百分数只表示关系，不表示具体数量。"

教师指导书写：先写分子再写百分号，百分之五写作 5%。

第二层，百分数与分数、小数的互化。教师组织小组活动，用卡片完成互化：
0.35 = 35%，60% = 0.6，3/4 = 75%，25% = 1/4，7/8 = 87.5%。引导学生归纳方法：小数化百分数，小数点右移两位加百分号；百分数化小数，去百分号、小数点左移两位；分数先化成小数再化百分数。

**预设师生对话**：
师："0.35 怎样化成百分数？"
生："小数点向右移两位，变成 35，再添百分号，是 35%。"
师："1/3 化成百分数除不尽怎么办？"
生："保留三位小数，写成 33.3%。"
师："互化的方向最容易搞反，谁能编个口诀记住？"
生："小数化百分数，右移添百分号；百分化小数，去号左移。"

第三层，百分率与百分数应用题。教师出示情境：六（1）班有 50 人，今天出勤 48 人，出勤率是多少？学生列式 48 ÷ 50 = 0.96 = 96%。教师介绍出勤率、发芽率、合格率的含义与求法：都是求一个数是另一个数的百分之几，用除法，结果写成百分数。

**预设师生对话**：
师："出勤率表示什么意思？"
生："出勤人数占应出勤人数的百分之几。"
师："怎么算？"
生："48 除以 50，得 0.96，化成 96%。"
师："男生 26 人占全班 50 人的百分之几？"
生："26 除以 50，是 52%。"

再引导学生解决"求一个数的百分之几是多少"：某数的 40% 是 20，这个数是多少？通过对比总结：求部分量用乘，求单位"1"用除。最后介绍折扣：八折就是现价是原价的 80%。

**学生活动**：读一读、写一写、互相出题互化，小组内用实物卡片操作，说清每个百分率的含义。

**设计意图**：从意义、互化到应用层层推进，用真实数据帮助学生理解百分率的含义，通过"乘除对比"抓三类应用题的本质，让概念与应用浑然一体。

### 环节三 巩固练习（约 10 分钟）

**教师活动**：出示分层练习。

1. 读写练习：
（1）读出下列百分数：45%、0.5%、100%。
（2）写出下列百分数：百分之三十、百分之一百二十五。

2. 互化练习：
（1）把 0.375 化成百分数（37.5%）。
（2）把 87% 化成小数（0.87）。
（3）把 32% 化成分数（8/25）。

3. 应用题：
（1）某班 50 人，男生 26 人，男生占全班的百分之几？（52%）
（2）一件衣服原价 200 元，打八折出售，现价是多少元？（200 × 80% = 160 元）
（3）试验田播种 500 粒种子，发芽 485 粒，发芽率是多少？（485 ÷ 500 = 97%）

**预设师生对话**：
师："打八折出售，现价和原价有什么关系？"
生："现价是原价的 80%，比原价便宜 20%。"
师："求发芽率要注意什么？"
生："结果要写成百分数，乘 100%。"

**学生活动**：独立完成，同桌互批，重点检查百分号、小数点方向和单位"1"。

**设计意图**：覆盖读写、互化、百分率、折扣各考点，通过具体题目暴露"忘加百分号""方向移反""折扣理解偏差"等典型错误并当场纠正。

### 环节四 课堂小结（约 3 分钟）

**教师活动**：引导学生梳理本课收获。

**预设师生对话**：
师："今天你学会了什么？"
生："百分数表示一个数是另一个数的百分之几，不能带单位。"
师："小数和百分数互化的方法是什么？"
生："小数化百分数右移加号，百分化小数去号左移。"
师："解决百分数应用题关键抓什么？"
生："抓单位'1'，看它是已知还是未知。"

**学生活动**：同桌互说收获与易错点，完善笔记。

**设计意图**：用"说一说"的方式把零散知识结构化，突出百分数学习的三个要点：意义、互化、单位"1"。

### 环节五 拓展延伸（约 2 分钟）

**教师活动**：出示银行利率表：一年期利率 1.5%。教师提问：妈妈把 10000 元存入银行一年，到期利息是多少？（10000 × 1.5% = 150 元）布置课后任务：统计班级同学近视情况，计算近视率。

**预设师生对话**：
师："利息应该怎么算？"
生："本金乘利率。"
师："课后请大家算一算自己家的近视率，明天来交流。"

**学生活动**：口算利息，明确课后调查任务。

**设计意图**：把百分数从课堂引向真实生活，让学生在利率、近视率等真实数据中体会百分数的价值，实现学科育人。

## 六、板书设计

百分数

意义：表示一个数是另一个数的百分之几；不带单位
读写：45% 读作百分之四十五；百分之五写作 5%
互化：小数化百分数右移加号；百分化小数去号左移；分数先化小数
百分率：出勤率 = 出勤人数 ÷ 应出勤人数 × 100%
应用题：单位"1"已知用乘，单位"1"未知用除
折扣：八折 = 80%

## 七、教学反思要点

1. 包装袋实物引入效果好，学生兴趣浓厚，说明"从生活中学数学"应坚持。
2. 互化口诀帮助学生避免了方向性错误，但少数学生仍混淆，课后需用"数卡抢答"强化。
3. 求百分率时学生易忘写百分号，应把"结果写成百分数"作为固定要求反复强调。
4. "八折"一词学生理解有偏差，用"现价是原价的 80%，便宜 20%"双向表述后明显改善。
5. 部分学生对"已知一个数的百分之几求单位'1'"仍列式有误，下一课时用方程法对照再练。
`,talk:`
# 说课稿：百分数

## 一、说教材

我说课的内容是人教版小学数学六年级上册"百分数"单元。百分数在生活中应用极广，本单元包括百分数的意义与读写、与分数小数的互化、百分率和三类百分数应用题，以及折扣、成数、税率、利率等生活应用，是对分数知识的延伸与拓展，也是今后学习扇形统计图、百分数应用加深的基础。本节课整合了百分数的核心概念与基本应用，以"意义是根、互化是桥、单位'1'是钥匙"为线索组织教学，力求让学生学得透、用得上。之所以这样整合，是因为百分数的意义、互化和应用是一个有机整体，割裂开来容易造成学生"会算不理解"，整合呈现则能帮助学生建立完整的知识结构。

## 二、说学情

六年级学生已经学习过分数、小数的意义与互化，具备一定的小数乘除法计算能力，也已在生活中见过大量百分数，如衣服标签上的成分、饮料瓶上的浓度、超市的折扣海报等，具有丰富的感性经验。但学生往往"见过而不懂"，对百分数表示"两个量的关系"缺乏理性认识，容易把百分数当作带单位的具体数量，写成"45% 千克"；互化时小数点移动方向易错；解应用题时不善于找单位"1"。同时，学生从生活实物中收集数据的能力和兴趣都很强，只要善加利用，生活经验完全可以转化为学习的助力。

## 三、说教学目标

根据课标与本课内容，我确立三个目标。知识与技能方面，理解百分数的意义，能正确读写，掌握与分数、小数的互化方法，会求常见百分率；过程与方法方面，经历"收集数据—观察比较—抽象概括"的过程，发展数感与数据分析观念；情感态度方面，感受百分数在生活中的广泛应用，增强用数学眼光观察世界的意识。其中数感与应用意识是本课核心素养的主要落点，也是百分数教学区别于其他计算教学的重要特征。

## 四、说教学重难点

本课的重点是百分数的意义、互化方法与三类应用题的解法。难点是理解单位"1"在百分数应用题中的作用，以及折扣、成数等生活用语与百分数的联系。为突破难点，我通过乘除对比题组引导学生辨析"求部分量用乘、求单位'1'用除"，并用"现价是原价的 80%"与"比原价便宜 20%"的双向表述帮助学生准确理解折扣，把生活语言翻译成数学语言。

## 五、说教法学法

本课采用情境教学法、统计对比法和迁移类推法。教师充分利用学生收集的真实素材组织教学，让学生在读、写、算、比中掌握知识；学生以自主探究和小组合作相结合的方式学习，通过互化卡片操作、同桌互出互化题等活动，在参与中建构概念、在练习中形成技能。教学中特别注重"先由生活引入、再由数学回归生活"，让学生体会百分数既是数学概念，更是生活语言。

## 六、说教学过程

我设计了五个环节，时间分配为 5、20、10、3、2 分钟，合计 40 分钟。第一环节情境导入，借助牛奶营养成分表引出百分数，从学生熟悉的实物出发，激发兴趣；第二环节探究新知，按"意义与读写—互化—百分率与应用"推进，先用包装袋数据理解意义，再用卡片操作掌握互化，最后通过出勤率等真实数据学会应用；第三环节巩固练习，用读写、互化、折扣、发芽率等具体题目落实应用，及时纠正典型错误；第四环节课堂小结，梳理"意义、互化、单位'1'"三个学习要点，把知识串成线；第五环节拓展延伸，用银行利率和近视率调查把学习引向生活，实现学以致用。在互化环节，我组织学生小组合作摆卡片、互相出题，把抽象的互化方法变成看得见、摸得着的操作活动，并引导学生自编口诀强化记忆，从源头上防止小数点方向移反。在应用环节，我特别注意让学生经历"圈出分率句—找准单位'1'—确定乘或除"的完整思路，并结合"现价是原价的 80%""比原价便宜 20%"的双向表述，帮助学生准确理解折扣的含义，把生活语言与数学语言打通。在课堂练习的点评中，我会把学生的典型错误与规范解答并排展示进行对比，让全班学生在辨析中加深理解，使错误成为宝贵的学习资源。

## 七、说板书设计

板书围绕"意义—互化—百分率—应用题"四块展开：上方写百分数的意义与"不带单位"的提示，中间写互化方法与口诀，右侧写出勤率公式和"单位'1'已知用乘、未知用除"的策略，下方写折扣对应关系。板书语言精炼、重点突出，既是课堂知识的浓缩，也是学生课后复习的线索，学生可以对着板书复述整节课的内容。

## 八、说教学评价

本课的评价以促进理解为目标：课堂上通过"说一说含义""编口诀""互批互改"等活动，及时了解学生的概念掌握情况；练习中关注学生能否在真实情境中正确运用百分数。我特别关注学生的典型错误，如百分号加单位、小数点方向移反、求百分率忘写百分号等，通过辨析和纠正让错误成为学习的资源。对学有余力的学生，鼓励他们收集更多生活百分数并自编应用题；对学习困难的学生，用数卡游戏帮助他们熟记互化方法。我相信，当学生能用百分数描述身边的世界时，数学素养便悄然生长。最后我还想强调，百分数的教学绝不能止步于计算，更要让学生在真实数据的统计与比较中，学会用百分数客观地描述现象、理性地做出判断，这正是数学育人的价值所在。
`},"小学|六年级|数学|圆柱和圆锥":{plan:`
# 公开课详案：圆柱和圆锥

## 一、教学基本信息

- 课题：圆柱和圆锥
- 教材版本：人教版《义务教育教科书·数学》六年级下册
- 年级：小学六年级
- 课型：新授课（立体图形认识与体积探究课）
- 课时：1 课时（40 分钟）

## 二、教学目标

1. 认识圆柱和圆锥，能说出底面、侧面、高等各部分名称与特征，掌握圆柱侧面积、表面积、体积公式及圆锥体积公式，落点于空间观念与几何直观。
2. 经历"展开侧面积—切拼圆柱体—倒水实验"等操作探究过程，理解各公式的推导由来，体会"化曲面为平面""化未知为已知"的数学思想，发展推理意识。
3. 能正确计算圆柱的侧面积、表面积、体积和圆锥的体积，能解决做水桶用料、算沙堆体积等实际问题，养成认真计算、规范书写的习惯，增强应用意识。

## 三、教学重难点

- 教学重点：圆柱侧面积、表面积、体积公式的推导与运用；圆锥体积公式及等底等高的圆柱与圆锥的体积关系。
- 教学难点：通过展开图理解圆柱侧面积的推导；区分侧面积、表面积、体积并灵活运用，注意圆锥体积计算中乘三分之一这一关键步骤。

## 四、教学准备

圆柱和圆锥教具模型、长方形纸片、剪刀、直尺、等底等高的圆柱与圆锥学具、细沙或水、量杯、多媒体课件。

## 五、教学过程

### 环节一 情境导入（约 5 分钟）

**教师活动**：出示生活中的圆柱形物体图片：茶叶罐、日光灯管、下水管道、沙堆。教师提问：这些物体的形状有什么共同特点？沙堆又是什么形状？

**预设师生对话**：
师："茶叶罐、灯管都是什么形状？"
生："圆柱形。"
师："沙堆呢？"
生："圆锥形。"
师："想知道做一个茶叶罐需要多少铁皮、一堆沙有多少立方米，就要研究圆柱和圆锥。今天我们就来认识它们并学习它们的面积与体积。"

**学生活动**：观察图片，辨认圆柱、圆锥，说一说它们与长方体、正方体的不同。

**设计意图**：用丰富的生活实物建立"圆柱、圆锥"的表象，引发"如何求表面积和体积"的真实需求，为探究活动定向。

### 环节二 探究新知（约 20 分钟）

**教师活动**：分四个步骤展开。

第一步，认识圆柱和圆锥的特征。教师出示教具，引导学生观察并总结：圆柱有两个完全相同的圆形底面和一个曲面侧面，两个底面之间的距离叫高，圆柱有无数条高且都相等；圆锥有一个底面、一个顶点、一条高，侧面展开是一个扇形。

**预设师生对话**：
师："圆柱的高有多少条？"
生："无数条，而且都相等。"
师："圆锥的高在哪里？"
生："从顶点到底面圆心的距离。"
师："圆锥的高有几条？"
生："只有一条。"

第二步，探究圆柱的侧面积。教师让学生沿圆柱的高把侧面剪开、展开，观察得到的长方形。学生发现：长方形的长等于圆柱底面的周长，宽等于圆柱的高，所以侧面积 = 底面周长 × 高。

**预设师生对话**：
师："展开后得到的长方形，长和宽分别对应圆柱的什么？"
生："长等于底面周长，宽等于高。"
师："所以侧面积怎么算？"
生："底面周长乘高，也就是 π 乘直径乘高，或 2 乘 π 乘半径乘高。"

教师板书：S 侧 = π × d × h = 2 × π × r × h。

第三步，探究圆柱的表面积与体积。教师引导：表面积 = 侧面积 + 两个底面积。再组织切拼实验：把圆柱沿底面半径切成若干等份，拼成一个近似的长方体，学生发现长方体的底面积等于圆柱的底面积、高等于圆柱的高，从而得到体积 = 底面积 × 高。

**预设师生对话**：
师："求表面积要算几个面？"
生："侧面积加两个底面积。"
师："无盖水桶呢？"
生："只算一个底面加侧面，少算一个底。"
师："拼成的长方体和圆柱的体积有什么关系？"
生："体积相等，底面积和高也分别相等。"

教师板书：V = π × r × r × h。

第四步，探究圆锥的体积。教师出示等底等高的圆柱和圆锥，组织倒水实验：把圆锥装满水倒入圆柱，倒 3 次正好倒满。学生由此发现：等底等高的圆锥体积是圆柱的三分之一。

**预设师生对话**：
师："倒了几次才把圆柱装满？"
生："正好 3 次。"
师："这说明圆锥的体积和圆柱有什么关系？"
生："圆锥的体积等于等底等高圆柱体积的三分之一。"
师："所以圆锥的体积公式是？"
生："底面积乘高再乘三分之一。"

教师板书：V 锥 = 1/3 × 底面积 × 高，并强调"乘三分之一"不能漏。

**学生活动**：人人动手剪侧面、拼圆柱、倒水，小组内说清每一步的对应关系，完成实验记录单。

**设计意图**：四个步骤环环相扣，从特征到侧面积、表面积、体积，用展开、切拼、倒水三个操作把公式的推导过程完整呈现，让公式"有来处、有根据"。

### 环节三 巩固练习（约 10 分钟）

**教师活动**：出示分层练习题。

1. 基础题：
（1）圆柱的底面半径是 3 厘米，高是 10 厘米，求它的侧面积和体积。（侧面积 = 2 × 3.14 × 3 × 10 = 188.4 平方厘米；体积 = 3.14 × 3 × 3 × 10 = 282.6 立方厘米）
（2）与这个圆柱等底等高的圆锥，体积是多少？（282.6 ÷ 3 = 94.2 立方厘米）

2. 变式题：
（1）圆柱的底面直径是 8 分米，高是 5 分米，求它的表面积。（先求半径 4 分米，侧面积 125.6 平方分米，两个底面积 100.48 平方分米，表面积 226.08 平方分米）
（2）一个圆锥，底面积是 24 平方厘米，高是 9 厘米，体积是多少？（24 × 9 ÷ 3 = 72 立方厘米）

3. 说理题：做无盖水桶、做通风管各需要算几个面？

**预设师生对话**：
师："求表面积时，只给直径怎么办？"
生："先除以 2 求出半径，再代入公式。"
师："做通风管算几个面？"
生："只算侧面，不算底面。"
师："求圆锥体积最容易忘什么？"
生："乘三分之一。"

**学生活动**：先写公式再代入数据，规范书写；同桌互相检查是否漏面、漏乘三分之一。

**设计意图**：练习覆盖直接套用、已知直径求半径、实际物体"数面"等难点，用说理题帮助学生区分侧面积、表面积、体积，防错于未然。

### 环节四 课堂小结（约 3 分钟）

**教师活动**：引导学生回顾本课所学。

**预设师生对话**：
师："圆柱的侧面积是怎样推导出来的？"
生："把侧面沿高剪开展开成长方形。"
师："圆柱的体积呢？"
生："切拼成近似长方体。"
师："圆锥的体积公式和圆柱有什么关系？"
生："等底等高时，圆锥体积是圆柱的三分之一。"

**学生活动**：对照板书口述公式，整理易错点。

**设计意图**：用"推导线索"串联全课知识，强化"操作—推导—公式"的学法，帮助学生把立体图形知识纳入已有的认知结构。

### 环节五 拓展延伸（约 2 分钟）

**教师活动**：出示挑战题：一个圆柱形水杯，从里面量底面直径是 8 厘米，高 15 厘米，这个水杯最多能装多少毫升水？引导学生明确：求容积要从里面量数据。布置课后任务：量一量家里的圆柱形物体，计算它的体积。

**预设师生对话**：
师："求水杯能装多少水，算的是体积还是容积？"
生："容积。"
师："容积和体积计算方法一样吗？"
生："方法一样，但容积要从里面量。"
师："课后请同学们找一个圆柱形物体，量一量、算一算它的体积。"

**学生活动**：口答思路，领取课后测量任务。

**设计意图**：把体积与容积联系起来，渗透"从里面量"的实际经验，让立体图形的学习走向真实生活。

## 六、板书设计

圆柱和圆锥

圆柱：两个底面（圆）+ 曲面侧面 + 无数条高
侧面积 = 底面周长 × 高 = 2 × π × r × h
表面积 = 侧面积 + 两个底面积
体积 = 底面积 × 高 = π × r × r × h

圆锥：一个底面 + 一个顶点 + 一条高
体积 = 1/3 × 底面积 × 高

关系：等底等高，圆锥体积 = 圆柱体积 × 1/3

## 七、教学反思要点

1. 三个操作实验（剪侧面、拼圆柱、倒水）让学生充分体验了公式的由来，动手率高的班级对公式记忆明显牢固。
2. 求表面积时"无盖水桶""通风管"的讨论有效解决了"数面"问题，但仍有学生想当然多算底面，需设计对比题组再练。
3. 圆锥体积漏乘三分之一仍是最突出错误，下一步要求"先写公式再代入"，把三分之一写在公式里。
4. 已知底面直径或周长求半径的变式训练不足，应补充"由周长求半径"的专项题。
5. 时间较紧，圆柱切拼体积实验可改为一组示范加全班观看，把时间留给圆锥倒水实验和练习。
`,talk:`
# 说课稿：圆柱和圆锥

## 一、说教材

我说课的内容是人教版小学数学六年级下册"圆柱和圆锥"单元。本单元是在学生已经掌握长方体、正方体的特征及表面积、体积计算，认识圆及圆的周长面积公式的基础上教学的，是小学阶段立体图形知识的重点，也是初中学好立体几何的起点。本课把圆柱和圆锥的认识、圆柱侧面积与表面积、圆柱体积和圆锥体积整合呈现，用"化曲面为平面、化未知为已知"的思想统领全课，帮助学生系统掌握立体图形计算的完整体系。圆柱与圆锥在生活中随处可见，把它们整合在一节课里学习，既能让学生看到两种图形的联系与区别，又能集中体会"操作推导公式"的数学方法，具有较高的教学价值。

## 二、说学情

六年级学生已经具备一定的空间观念和操作经验，会计算圆的周长与面积，这为本课学习打下了坚实基础。但学生由"面"到"体"的思维飞跃仍有困难：对侧面积"为什么等于底面周长乘高"缺乏直观经验，很难凭空想象曲面展开的样子；分不清侧面积、表面积、体积的区别，不知道什么时候该算几个面；求圆锥体积时经常漏乘三分之一；已知直径或周长求半径也易出错。因此本课突出动手操作，用展开、切拼、倒水三个实验把抽象的立体问题转化为可感的直观经验，让学生在"做"中建立空间观念。六年级学生好奇心强、乐于动手，只要实验材料准备充分、操作步骤清晰，他们完全可以在剪一剪、拼一拼、倒一倒的活动中自主发现规律，体验数学发现的乐趣。

## 三、说教学目标

我确立了三个目标。知识与技能方面，认识圆柱和圆锥的特征，掌握圆柱侧面积、表面积、体积公式和圆锥体积公式；过程与方法方面，经历展开、切拼、倒水等实验过程，理解公式推导，发展空间观念与推理意识；情感态度方面，体会立体图形与生活的联系，养成认真计算、规范书写的习惯。空间观念是本课最核心的素养落点，需要通过充分的直观操作来达成。

## 四、说教学重难点

本课重点是圆柱侧面积、表面积、体积及圆锥体积公式的推导与运用。难点是理解"曲面展开成长方形"的推导过程，以及区分三类计算、正确处理圆锥体积中的三分之一。为突破难点，我安排三大操作实验：剪一剪，把侧面沿高剪开展开，体会"化曲面为平面"；拼一拼，把圆柱切拼成近似长方体，理解体积公式的由来；倒一倒，用等底等高的圆柱圆锥倒水，见证"圆锥是圆柱的三分之一"。每个公式都建立在直观之上，学生看得见、摸得着，自然记得牢。

## 五、说教法学法

本课采用直观演示法、操作探究法和小组合作法。教师的演示起示范与点拨作用，学生的操作是学习的主线，通过"做中学、说中悟"把抽象的立体图形知识转化为具体可感的经验。教学中还设计"无盖水桶""通风管"等真实物体辨析，让学生在对比中学会灵活应用，懂得"数清面"比死记公式更重要。

## 六、说教学过程

我设计了五个环节，时间分配为 5、20、10、3、2 分钟，合计 40 分钟。第一环节情境导入，用茶叶罐、沙堆等实物引出课题，唤起学生对圆柱、圆锥的已有认识；第二环节探究新知，按"特征—侧面积—表面积与体积—圆锥体积"四步推进，每个公式都由操作得出，重点突出、难点突破；第三环节巩固练习，安排基础计算、变式题和数面说理题，帮助学生规范书写、防错纠错；第四环节课堂小结，梳理公式与推导线索，用"说一说"把知识内化；第五环节拓展延伸，用水杯容积问题渗透"从里面量"并布置实践作业，把学习引向课外。在探究操作中，我特别强调"边做边说"：剪侧面时说出"长方形的长是底面周长、宽是圆柱的高"的对应关系，切拼时说出"长方体与圆柱底面积相等、高相等"的联系，倒水时说出"倒三次正好倒满"的实验结论，让每个公式都有直观经验作支撑。练习时我要求学生先写公式、再代入数据，把"乘三分之一"稳稳地写进算式，并针对"无盖水桶""通风管"等实物设计数面讨论，帮助学生分清什么时候算一个底面、什么时候算两个底面。

## 七、说板书设计

板书分圆柱、圆锥两栏：左栏写圆柱的特征、侧面积、表面积、体积公式，右栏写圆锥的特征与体积公式，下方用"等底等高时圆锥体积是圆柱的三分之一"点明两者关系。板书结构清晰，与推导过程同步生成，既是知识清单，也是学生解题时可直接对照的公式表，方便学生随时查阅和复习。

## 八、说教学评价

本课注重过程性评价：操作环节观察学生能否正确剪拼、能否描述对应关系；练习环节关注公式书写是否规范、是否漏乘三分之一、是否数清面。通过实验记录单、同桌互查、上台展示等多元方式收集反馈，及时调整教学。对操作能力弱的学生，安排组长帮扶，让他们先看再试；对学有余力的学生，提供已知周长求体积等变式题进行挑战。我相信，当学生能够亲手"做"出公式、"说"出道理时，空间观念便真正得到发展，立体图形的知识也会深深扎根于他们的脑海之中。下一节课，我将针对"已知底面周长求体积"等变式进行专项训练，进一步巩固学生对公式的灵活运用。
`},"小学|六年级|数学|比例":{plan:`
# 公开课详案：比例

## 一、教学基本信息

- 课题：比例
- 教材版本：人教版《义务教育教科书·数学》六年级下册
- 年级：小学六年级
- 课型：新授课（比例的意义与性质探究课）
- 课时：1 课时（40 分钟）

## 二、教学目标

1. 理解比例的意义，能正确判断两个比能否组成比例，认识比例各部分的名称（项、内项、外项），落点于推理意识与代数思想。
2. 掌握比例的基本性质，能根据比例的基本性质正确解比例，并会用比例解决简单的实际问题，发展运算能力与方程思想。
3. 理解正比例和反比例的意义，能判断两种相关联的量成哪种比例，了解比例尺的含义，在探究中体会数学与生活的紧密联系，增强应用意识。

## 三、教学重难点

- 教学重点：比例的意义和基本性质；用比例的基本性质解比例；正比例与反比例的意义及判断。
- 教学难点：正比例与反比例的正确判断，尤其是找准"相关联的量"和"一定的量"；灵活运用比例尺解决实际问题。

## 四、教学准备

多媒体课件、中国地图、校园平面图、方格纸、计算器、比例尺模型、正反比例对比卡片。

## 五、教学过程

### 环节一 情境导入（约 5 分钟）

**教师活动**：出示两面大小不同的国旗照片：长 6 米宽 4 米的教室国旗，和长 3 米宽 2 米的桌上小国旗。教师提问：这两面国旗形状一样吗？长和宽的比各是多少？

**预设师生对话**：
师："大国旗长和宽的比是多少？"
生："6 比 4。"
师："小国旗呢？"
生："3 比 2。"
师："这两个比的比值分别是多少？"
生："都是 1.5，也就是 3/2。"
师："两个比值相等的比，可以用等号连成一个式子，这就是比例。今天我们就来研究比例。"

**学生活动**：计算两面国旗长与宽的比值，发现相等，初步感受"比例"的意义。

**设计意图**：从"国旗中的数学"切入，用真实素材让学生自然发现两个比的比值相等，为比例意义的学习提供直观支撑。

### 环节二 探究新知（约 20 分钟）

**教师活动**：分五个层次推进。

第一层，理解比例的意义。教师板书 6:10 和 9:15，让学生分别求比值，发现都是 0.6，于是可以写成 6:10 = 9:15。教师强调：表示两个比相等的式子叫作比例，比例是一个等式，由四个数组成。

**预设师生对话**：
师："6:10 的比值是多少？"
生："0.6。"
师："9:15 呢？"
生："也是 0.6。"
师："两个比值相等的比，可以用什么连接？"
生："等号。"
师："6:10 = 9:15 就叫比例。判断两个比能不能组成比例，可以怎样做？"
生："分别求比值，看是否相等。"

第二层，认识比例各部分的名称。教师介绍：组成比例的四个数叫作比例的项，两端的两项叫作外项，中间的两项叫作内项。在 6:10 = 9:15 中，6 和 15 是外项，10 和 9 是内项。

**预设师生对话**：
师："在 6:10 = 9:15 中，外项是哪两个数？"
生："6 和 15。"
师："内项呢？"
生："10 和 9。"

第三层，探究比例的基本性质。教师组织计算：把每个比例的两个外项相乘、两个内项相乘，比较结果。学生发现：6 × 15 = 90，10 × 9 = 90，外项积等于内项积。教师引导再举几个例子验证，归纳出比例的基本性质。

**预设师生对话**：
师："6 × 15 等于多少？10 × 9 呢？"
生："都等于 90。"
师："这说明什么？"
生："外项积等于内项积。"
师："是不是所有比例都这样？请再写几个比例算一算。"
生："都对。在比例里，两个外项的积等于两个内项的积。"

第四层，解比例。教师出示：解比例 x:12 = 3:4。引导学生根据比例的基本性质，把比例改写成"外项积 = 内项积"的等式：4x = 12 × 3，解得 x = 9。

**预设师生对话**：
师："根据比例的基本性质，可以把它改写成什么等式？"
生："4 乘 x 等于 12 乘 3。"
师："为什么这样写？"
生："x 和 4 是外项，12 和 3 是内项，外项积等于内项积。"
师："然后按什么方法解？"
生："按解方程的方法，4x = 36，x = 9。"

第五层，认识正比例、反比例与比例尺。教师出示表格：速度一定时，路程和时间成正比例，因为路程 ÷ 时间 = 速度（一定）；总路程一定时，速度和时间成反比例，因为速度 × 时间 = 路程（一定）。教师总结判断方法：看两种量的比值是否一定（正比例）还是乘积一定（反比例）。最后介绍比例尺：图上距离与实际距离的比就是比例尺。

**预设师生对话**：
师："怎样判断两种量成正比例？"
生："它们的比值一定。"
师："成反比例呢？"
生："它们的乘积一定。"
师："判断时最关键要先找到什么？"
生："找到相关联的两个量，再看第三个量（一定的量）是什么。"

**学生活动**：求比值、算积、举例验证，小组讨论正反比例的区别，用公式 y ÷ x = k（一定）和 x × y = k（一定）进行对比。

**设计意图**：从比例意义到基本性质再到解比例，层层递进，正反比例通过"同一组数据变比值、变乘积"的对比呈现，让学生在辨析中抓住概念本质。

### 环节三 巩固练习（约 10 分钟）

**教师活动**：出示分层练习。

1. 判断题（手势判断）：下面的式子哪些是比例？
（1）2:3 = 4:6（是）
（2）5:7 = 6:8（不是，比值不相等）
（3）4:8 = 1/2（不是，不是表示两个比相等）

2. 解比例：
（1）x:5 = 6:10，求 x。（10x = 30，x = 3）
（2）12:3 = x:4，求 x。（3x = 48，x = 16）

3. 填空：在比例里，两个外项的（ ）等于两个内项的（ ）。（积）

4. 判断正反比例：
（1）每小时织布米数一定，织布总米数和时间。（正比例）
（2）长方形面积一定，长和宽。（反比例）
（3）路程一定，速度和时间。（反比例）

5. 比例尺题：一幅地图的比例尺是 1:5000000，图上 2 厘米表示实际距离多少千米？（2 × 5000000 = 10000000 厘米 = 100 千米）

**预设师生对话**：
师："解 x:5 = 6:10，为什么是 10x = 30？"
生："x 和 10 是外项，5 和 6 是内项，外项积等于内项积。"
师："判断成不成正比例，先要看什么？"
生："看相关联的两种量比值是否一定。"
师："比例尺求实际距离要注意什么？"
生："单位要先统一，厘米要化成千米。"

**学生活动**：独立完成，重点检查解比例的"交叉相乘"是否对应正确、正反比例判断是否漏看第三个量。

**设计意图**：练习覆盖比例判定、解比例、基本性质、正反比例判断、比例尺应用五个考点，通过具体题目及时纠正"内项外项错位""漏看一定的量""单位不统一"等典型错误。

### 环节四 课堂小结（约 3 分钟）

**教师活动**：引导学生梳理本课知识。

**预设师生对话**：
师："什么样的式子叫比例？"
生："表示两个比相等的式子。"
师："比例的基本性质是什么？"
生："外项积等于内项积。"
师："怎样判断正比例和反比例？"
生："比值一定成正比例，乘积一定成反比例。"

**学生活动**：同桌互说概念要点，把公式 y ÷ x = k（一定）和 x × y = k（一定）记入笔记。

**设计意图**：用"意义—性质—应用"三条线索回顾全课，强化比例知识的整体结构。

### 环节五 拓展延伸（约 2 分钟）

**教师活动**：出示校园平面图，比例尺 1:2000。教师提问：图上量得教学楼长 2.5 厘米，实际长多少米？（2.5 × 2000 = 5000 厘米 = 50 米）布置课后任务：用比例的知识算出从家到学校的实际距离。

**预设师生对话**：
师："图上 2.5 厘米对应实际多少厘米？"
生："2.5 乘 2000，得 5000 厘米。"
师："5000 厘米是多少米？"
生："50 米。"
师："课后请大家用地图或地图软件，量一量、算一算家到学校的距离。"

**学生活动**：口算实际距离，领取课后实践任务。

**设计意图**：把比例尺学习落到真实测量，让学生体会到比例知识在生活中的实用价值，实现课内向课外延伸。

## 六、板书设计

比例

意义：表示两个比相等的式子，如 6:10 = 9:15
各部分名称：6:10 = 9:15（6、15 是外项，10、9 是内项）
基本性质：外项积 = 内项积，a:b = c:d，则 a × d = b × c
解比例：x:12 = 3:4，4x = 36，x = 9
正比例：y ÷ x = k（一定）
反比例：x × y = k（一定）
比例尺 = 图上距离 ÷ 实际距离

## 七、教学反思要点

1. 用"两面国旗"引入比例意义，学生直观感受到比例的现实背景，教学效果好，可继续保留。
2. 解比例时部分学生"交叉相乘"错位，如把 x:5 = 6:10 错写成 5x = 60，需用彩色笔标注外项、内项再对照基本性质书写。
3. 正反比例判断中，学生易不说明"一定的量"就下结论，应强化"先找第三个量"的步骤。
4. 比例尺的单位换算是失分点，需补充"千米化厘米、厘米化千米"的专项口算。
5. 学有余力的学生已能独立解比例，可适当增加按比例分配问题作为挑战。
`,talk:`
# 说课稿：比例

## 一、说教材

我说课的内容是人教版小学数学六年级下册"比例"单元。本单元是在学生已经理解比的意义和基本性质、掌握分数及分数基本性质的基础上教学的，包括比例的意义、比例的基本性质与解比例、正比例和反比例、比例尺与按比例分配等内容。比例是比的知识的延伸，也是沟通算术与代数的重要桥梁，更是今后学习函数的重要基础。本节课整合了比例的意义、基本性质、解比例及正反比例的核心概念，力求让学生站在"比"的肩膀上理解"比例"。比例知识在测量、绘图、生活估算中应用广泛，整合呈现便于学生建立"比例"的整体观念，为后续深入学习埋下伏笔。

## 二、说学情

六年级学生已经能熟练化简比、求比值，也具备了一定的方程基础，这为本课学习提供了有力的支撑。但学生对"比"和"比例"的认识容易混淆，不清楚"比是两个数的关系、比例是两个比相等"的本质区别；解比例时交叉相乘容易错位，把内项外项对应错；判断正反比例时常常只看表面变化，忽略第三个量是否一定，一见到"路程和时间"就贸然下结论。因此教学中既要充分利用学生的已有经验，又要设计对比辨析帮助学生区分概念，还要强化"先找一定的量"的判断步骤。为此，我在课中设计了口算判断、手势判断等多种快速反馈形式，让每一位学生都有机会亮出自己的观点，教师也能第一时间掌握全班的概念掌握情况。

## 三、说教学目标

基于课标要求，我确定了三个目标。知识与技能方面，理解比例的意义，认识内项外项，掌握比例的基本性质并能解比例，理解正反比例的意义；过程与方法方面，经历"观察—计算—归纳—验证"的探究过程，发展推理意识与代数思维；情感态度方面，在探索中感受数学的内在规律美，体会比例在生活中的广泛应用。推理意识与模型思想是本课核心素养的重要落点，也是学生从算术思维走向代数思维的关键一步。

## 四、说教学重难点

本课重点是比例的意义、基本性质及用基本性质解比例，正反比例的意义与判断。难点是正反比例的正确判断，以及灵活运用比例尺解决实际问题。为突破难点，我采用对比策略：用同一组数据分别呈现"比值一定"与"乘积一定"两种情况，让学生在鲜明的对比中抓住正比例与反比例的本质区别；解比例时先用彩色笔标出外项内项，再对照基本性质写出等式，防止交叉相乘错位。

## 五、说教法学法

本课采用情境教学法、类比迁移法和合作探究法。教师以"国旗中的数学"创设情境，引导学生从求比值自然迁移到比例；学生通过求值、计算、举例、验证等活动自主发现比例的基本性质，在小组合作中辨析正反比例。整节课以学生的探究活动为主线，教师只在关键处点拨提升，让学生经历"猜想—验证—归纳"的完整过程，体会数学发现的乐趣。

## 六、说教学过程

我设计了五个环节，时间分配为 5、20、10、3、2 分钟，合计 40 分钟。第一环节情境导入，用大小国旗的长宽比引出比例，从学生熟悉的场景出发，自然生成"两个比相等"的认识；第二环节探究新知，按"意义—各部分名称—基本性质—解比例—正反比例"五个层次推进，层次清楚、梯度合理，先建立概念再研究性质、最后学会应用；第三环节巩固练习，覆盖比例判定、解比例、正反比例、比例尺五个考点，在练习中暴露并纠正典型错误；第四环节课堂小结，用"意义—性质—应用"梳理知识结构；第五环节拓展延伸，用校园平面图计算实际距离并布置实践作业，让学生带着比例的眼光走向生活。在探究基本性质时，我引导学生先计算外项积与内项积，再举出多个例子加以验证，最后归纳概括出"外项积等于内项积"，完整经历"猜想—验证—结论"的数学发现过程；解比例时先用彩色笔标出外项、内项，再对照基本性质写出等式，防止交叉相乘错位。在正反比例的判断中，我设计了"同一组数据、两个不同条件"的对比题组，让学生在比值一定与乘积一定的切换中，牢牢抓住正比例与反比例的本质区别。

## 七、说板书设计

板书按知识生成顺序设计：课题下方依次呈现比例的意义、各部分名称、基本性质、解比例的过程，再用两个公式框出正比例与反比例的本质特征，最后补充比例尺的含义。板书简洁直观，既是本节课的知识地图，也是学生解题时可直接对照的方法提示，便于学生课后回顾全课脉络。

## 八、说教学评价

本课注重评价的激励与诊断功能。课堂上通过求比值、举例验证、手势判断等活动，实时了解学生对概念的掌握情况；练习中重点观察解比例是否对应正确、正反比例判断是否漏看"一定的量"、比例尺单位是否统一。通过自评、互评、师评相结合，既肯定学生的发现，也及时纠正偏差。对学有余力的学生，增加按比例分配问题激发挑战欲望；对学习困难的学生，用对比卡片反复辨析正反比例。我相信，当学生能够用比例的眼光观察世界、用比例的规律解决问题时，代数思维的种子便已悄然发芽。课后，我将布置学生用比例尺知识测量并计算家到学校的实际距离，让学生在真实的应用中感受比例的价值，让课堂学习真正走向生活。
`}};export{Se as $,Oe as A,Pe as B,$e as C,Xe as D,je as E,ze as F,Be as G,Me as H,Ce as I,De as J,Re as K,M as L,qe as M,Te as N,xs as O,j as P,Ke as Q,_e as R,Ne as S,Q as T,le as U,we as V,ie as W,Ve as X,Ee as Y,X as Z,Le as _,ds as a,Ie as a0,Ze as a1,Qe as a2,es as a3,g as a4,ks as b,cs as c,fs as d,zs as e,ms as f,ls as g,rs as h,os as i,is as j,as as k,ns as l,ts as m,ss as n,Ue as o,Ye as p,We as q,He as r,Ge as s,Fe as t,ye as u,te as v,ve as w,Je as x,ge as y,Ae as z};
