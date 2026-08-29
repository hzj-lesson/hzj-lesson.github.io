const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/data-primary-CTutcaHD.js","assets/lesson-data-B0Mk2tcv.js","assets/react-vendor-Ds7D3P6J.js","assets/katex-Dc8nsIP1.js"])))=>i.map(i=>d[i]);
import{j as Y}from"./react-vendor-Ds7D3P6J.js";import{k as V}from"./katex-Dc8nsIP1.js";const J="modulepreload",Z=function(e){return"/"+e},j={},S=function(s,t,i){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.allSettled(t.map(l=>{if(l=Z(l),l in j)return;j[l]=!0;const m=l.endsWith(".css"),z=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${z}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":J,m||(c.as="script"),c.crossOrigin="",c.href=l,r&&c.setAttribute("nonce",r),document.head.appendChild(c),m)return new Promise((w,u)=>{c.addEventListener("load",w),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return n.then(a=>{for(const r of a||[])r.status==="rejected"&&o(r.reason);return s().catch(o)})},g={初中:214,小学:112,高中:190},L=["初中","小学","高中"],Q=516,T={初中:0,小学:g.初中,高中:g.初中+g.小学},ee={初中:()=>S(()=>import("./data-junior-BISIE0x0.js"),[]),小学:()=>S(()=>import("./data-primary-CTutcaHD.js"),__vite__mapDeps([0,1,2,3])),高中:()=>S(()=>import("./data-senior-D3ycUnem.js"),[])};let p=new Array(Q).fill(void 0);const _=new Set,E=new Map,K=new Set;function ye(){return p}function ve(){return L.reduce((e,s)=>e+(_.has(s)?g[s]:0),0)}function we(e){return K.add(e),()=>{K.delete(e)}}function se(){K.forEach(e=>e())}async function te(e){if(_.has(e))return p.slice(T[e],T[e]+g[e]).filter(Boolean);const s=E.get(e);if(s)return s;const t=(async()=>{const i=await ee[e](),n=i.JUNIOR_LESSONS??i.PRIMARY_LESSONS??i.SENIOR_LESSONS??[];return _.add(e),p=[...p],n.forEach((o,a)=>{p[T[e]+a]=o}),se(),n})();E.set(e,t);try{return await t}finally{E.delete(e)}}async function Ae(){for(const e of L)await te(e)}const ie="MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEt0S+4zWqJpWaH6rl96/1h9pVEh2RJcJFvKSTYp/YFJcLvczbf+Hj5eVAxnV3Qp9q+qXfL/1+l1vmJH+mkk5z0A==",R="wb-member",X=e=>e.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-e.length%4)%4);function D(){try{const e=localStorage.getItem(R);if(!e)return null;const s=JSON.parse(e);return s&&typeof s.exp=="number"?s:null}catch{return null}}function ne(){const e=D();return!!e&&(e.exp===0||e.exp>Date.now())}function Se(e,s){try{localStorage.setItem(R,JSON.stringify({code:e,exp:s}))}catch{}}const ae=3*60*1e3,oe="__try__";async function Te(){const e=D();if(!e)return!1;const s=Date.now();if(e.exp!==0&&e.exp<=s||!e.code)return h(),!1;if(e.code===oe){const i=e.exp>s&&e.exp-s<=ae+5e3;return i||h(),i}const t=await le(e.code);return!t.ok||t.exp!==e.exp?(h(),!1):!0}function h(){try{localStorage.removeItem(R)}catch{}}async function re(){const e=Uint8Array.from(atob(ie),s=>s.charCodeAt(0));return crypto.subtle.importKey("spki",e,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"])}async function le(e){const s=(e||"").trim();if(!s.startsWith("MB-"))return{ok:!1,reason:"会员码格式不正确，请检查后重试"};const t=s.slice(3),i=t.indexOf(".");if(i<=0)return{ok:!1,reason:"会员码格式不正确，请检查后重试"};const n=t.slice(0,i),o=t.slice(i+1);try{const a=await re(),r=Uint8Array.from(atob(X(o)),c=>c.charCodeAt(0)),l=new TextEncoder().encode(n);if(!await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},a,r,l))return{ok:!1,reason:"会员码无效（签名校验失败）"};const z=JSON.parse(atob(X(n)));return typeof z.e!="number"?{ok:!1,reason:"会员码数据异常"}:z.e!==0&&z.e<Date.now()?{ok:!1,reason:"该会员码已过期"}:{ok:!0,exp:z.e}}catch{return{ok:!1,reason:"会员码无效（当前浏览器不支持校验，请换最新版微信/浏览器）"}}}const ze="wb-tier",Ee=3,_e=2,Ke=10;function Be(){try{return localStorage.getItem(ze)==="pro"?"pro":"free"}catch{return"free"}}const Ce=()=>ne();function q(){const e=new Date,s=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${s}-${t}`}function fe(){try{const e=q(),s=localStorage.getItem("wb-export-count");if(!s)return 0;const t=JSON.parse(s);if(!t||typeof t!="object"||t.date!==e)return 0;const i=Number(t.count);return Number.isFinite(i)&&i>=0?i:0}catch{return 0}}function Re(){const e=q(),s=fe()+1;try{localStorage.setItem("wb-export-count",JSON.stringify({date:e,count:s}))}catch{}return s}const me="由「教师备课助手」免费版生成 · 开通会员解锁完整导出";function U(e){return e.replace(/\\\\([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]/g,"")}function b(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function P(e){let s="",t=!1;for(let i=0;i<e.length;i++){const n=e[i];if(n==="$"){t=!t,s+=n;continue}if(!t&&n==="\\"&&e[i+1]==="n"){s+=`
`,i++;continue}s+=n}return s}function O(e){if(!e)return"";const s=U(P(String(e))),t=[];let i=s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g,(a,r,l)=>`@@IMG${t.push({alt:r,src:l})-1}@@`);const n=[];i=i.replace(/\$([^$\n]+?)\$/g,(a,r)=>`@@MATH${n.push(r.trim())-1}@@`);let o=b(i).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>");return o=o.replace(/@@MATH(\d+)@@/g,(a,r)=>B(n[+r],!1)),o=o.replace(/@@IMG(\d+)@@/g,(a,r)=>{const l=t[+r];return`<img src="${l.src}" alt="${l.alt}" loading="lazy" style="max-width:100%;border-radius:8px;margin:6px 0;display:block">`}),o}function B(e,s){try{return V.renderToString(e,{displayMode:s,throwOnError:!1,strict:!1,trust:!0,output:"html"})}catch{return s?`<div class="plain-formula">${e}</div>`:`<code class="inline-math">${e}</code>`}}function y(e){return b(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br>")}function ce(e){const s=e.map(o=>o.replace(/^\||\|$/g,"").split("|").map(a=>a.trim())),t=s[0],i=s.slice(2);let n="<table><thead><tr>";return t.forEach(o=>{n+=`<th>${y(o)}</th>`}),n+="</tr></thead><tbody>",i.forEach(o=>{n+="<tr>",o.forEach(a=>{n+=`<td>${y(a)}</td>`}),n+="</tr>"}),n+"</tbody></table>"}function xe(e){const s=e.map(n=>{const o=n.match(/^(\s*)[-*•]\s+(.*)$/);return{level:Math.floor(((o==null?void 0:o[1].length)??0)/2),content:(o==null?void 0:o[2])??""}});let t="<ul>",i=0;for(s.forEach(n=>{for(;i>n.level;)t+="</ul>",i--;n.level>i&&(t+="<ul>",i++),t+=`<li>${y(n.content)}</li>`});i>0;)t+="</ul>",i--;return t+="</ul>",t}function k(e){if(!e)return'<p class="empty-md">（暂无内容）</p>';const s=U(P(String(e))).replace(/\r\n/g,`
`),t=[];let i=s.replace(/\$\$([\s\S]+?)\$\$/g,(l,m)=>`
@@TOKEN${t.push({type:"block",tex:m.trim()})-1}@@
`);i=i.replace(/\$([^$\n]+?)\$/g,(l,m)=>`@@TOKEN${t.push({type:"inline",tex:m.trim()})-1}@@`),i=i.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(l,m,z)=>`@@TOKEN${t.push({type:"img",alt:m,src:z})-1}@@`);const n=i.split(`
`),o=[];let a=0;for(;a<n.length;){const l=n[a],m=l.trim();if(!m){a++;continue}if(m.startsWith("|")&&a+1<n.length&&/^\s*\|?[\s:|-]+\|?\s*$/.test(n[a+1])&&n[a+1].includes("-")){const c=[];for(;a<n.length&&n[a].trim().startsWith("|");)c.push(n[a].trim()),a++;o.push(ce(c));continue}if(/^\s*[-*•]\s+/.test(l)){const c=[];for(;a<n.length&&/^\s*[-*•]\s+/.test(n[a]);)c.push(n[a]),a++;o.push(xe(c));continue}const z=[l];for(a++;a<n.length&&n[a].trim()&&!/^\s*[-*•]\s+/.test(n[a])&&!n[a].trim().startsWith("|");)z.push(n[a]),a++;o.push(`<p>${y(z.join(`
`))}</p>`)}let r=o.join(`
`);return r=r.replace(/@@TOKEN(\d+)@@/g,(l,m)=>{const z=t[+m];return z.type==="img"?`<img src="${b(z.src??"")}" alt="${b(z.alt??"")}" loading="lazy">`:z.type==="block"?`<div class="katex-display">${B(z.tex??"",!0)}</div>`:B(z.tex??"",!1)}),r}const Me=({source:e,className:s})=>Y.jsx("div",{className:`md ${s??""}`,dangerouslySetInnerHTML:{__html:k(e)}}),C={name:"hzj",wechat:"April_18forever"};async function je(){const e=C.wechat;try{return await navigator.clipboard.writeText(e),!0}catch{try{const s=document.createElement("textarea");s.value=e,s.style.position="fixed",s.style.opacity="0",document.body.appendChild(s),s.select();const t=document.execCommand("copy");return document.body.removeChild(s),t}catch{return!1}}}const de='@font-face{font-display:block;font-family:KaTeX_AMS;font-style:normal;font-weight:400;src:url(/assets/KaTeX_AMS-Regular-BQhdFMY1.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Caligraphic;font-style:normal;font-weight:700;src:url(/assets/KaTeX_Caligraphic-Bold-Dq_IR9rO.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Caligraphic;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Caligraphic-Regular-Di6jR-x-.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Fraktur;font-style:normal;font-weight:700;src:url(/assets/KaTeX_Fraktur-Bold-CL6g_b3V.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Fraktur;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Fraktur-Regular-CTYiF6lA.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:normal;font-weight:700;src:url(/assets/KaTeX_Main-Bold-Cx986IdX.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:italic;font-weight:700;src:url(/assets/KaTeX_Main-BoldItalic-DxDJ3AOS.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:italic;font-weight:400;src:url(/assets/KaTeX_Main-Italic-NWA7e6Wa.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Main-Regular-B22Nviop.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Math;font-style:italic;font-weight:700;src:url(/assets/KaTeX_Math-BoldItalic-CZnvNsCZ.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Math;font-style:italic;font-weight:400;src:url(/assets/KaTeX_Math-Italic-t53AETM-.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:normal;font-weight:700;src:url(/assets/KaTeX_SansSerif-Bold-D1sUS0GD.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:italic;font-weight:400;src:url(/assets/KaTeX_SansSerif-Italic-C3H0VqGB.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:normal;font-weight:400;src:url(/assets/KaTeX_SansSerif-Regular-DDBCnlJ7.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Script;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Script-Regular-D3wIWfF6.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Size1;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Size1-Regular-mCD8mA8B.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Size2;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Size2-Regular-Dy4dx90m.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Size3;font-style:normal;font-weight:400;src:url(data:font/woff2;base64,d09GMgABAAAAAA4oAA4AAAAAHbQAAA3TAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAgRQIDgmcDBEICo1oijYBNgIkA14LMgAEIAWJAAeBHAyBHBvbGiMRdnO0IkRRkiYDgr9KsJ1NUAf2kILNxgUmgqIgq1P89vcbIcmsQbRps3vCcXdYOKSWEPEKgZgQkprQQsxIXUgq0DqpGKmIvrgkeVGtEQD9DzAO29fM9jYhxZEsL2FeURH2JN4MIcTdO049NCVdxQ/w9NrSYFEBKTDKpLKfNkCGDc1RwjZLQcm3vqJ2UW9Xfa3tgAHz6ivp6vgC2yD4/6352ndnN0X0TL7seypkjZlMsjmZnf0Mm5Q+JykRWQBKCVCVPbARPXWyQtb5VgLB6Biq7/Uixcj2WGqdI8tGSgkuRG+t910GKP2D7AQH0DB9FMDW/obJZ8giFI3Wg8Cvevz0M+5m0rTh7XDBlvo9Y4vm13EXmfttwI4mBo1EG15fxJhUiCLbiiyCf/ZA6MFAhg3pGIZGdGIVjtPn6UcMk9A/UUr9PhoNsCENw1APAq0gpH73e+M+0ueyHbabc3vkbcdtzcf/fiy+NxQEjf9ud/ELBHAXJ0nk4z+MXH2Ev/kWyV4k7SkvpPc9Qr38F6RPWnM9cN6DJ0AdD1BhtgABtmoRoFCvPsBAumNm6soZG2Gk5GyVTo2sJncSyp0jQTYoR6WDvTwaaEcHsxHfvuWhHA3a6bN7twRKtcGok6NsCi7jYRrM2jExsUFMxMQYuJbMhuWNOumEJy9hi29Dmg5zMp/A5+hhPG19j1vBrq8JTLr8ki5VLPmG/PynJHVul440bxg5xuymHUFPBshC+nA9I1FmwbRBTNHAcik3Oae0cxKoI3MOriM42UrPe51nsaGxJ+WfXubAsP84aabUlQSJ1IiE0iPETLUU4CATgfXSCSpuRFRmCGbO+wSpAnzaeaCYW1VNEysRtuXCEL1kUFUbbtMv3Tilt/1c11jt3Q5bbMa84cpWipp8Elw3MZhOHsOlwwVUQM3lAR35JiFQbaYCRnMF2lxAWoOg2gyoIV4PouX8HytNIfLhqpJtXB4vjiViUI8IJ7bkC4ikkQvKksnOTKICwnqWSZ9YS5f0WCxmpgjbIq7EJcM4aI2nmhLNY2JIUgOjXZFWBHb+x5oh6cwb0Tv1ackHdKi0I9OO2wE9aogIOn540CCCziyhN+IaejtgAONKznHlHyutPrHGwCx9S6B8kfS4Mfi4Eyv7OU730bT1SCBjt834cXsf43zVjPUqqJjgrjeGnBxSG4aYAKFuVbeCfkDIjAqMb6yLNIbCuvXhMH2/+k2vkNpkORhR59N1CkzoOENvneIosjYmuTxlhUzaGEJQ/iWqx4dmwpmKjrwTiTGTCVozNAYqk/zXOndWxuWSmJkQpJw3pK5KX6QrLt5LATMqpmPAQhkhK6PUjzHUn7E0gHE0kPE0iKkolgkUx9SZmVAdDgpffdyJKg3k7VmzYGCwVXGz/tXmkOIp+vcWs+EMuhhvN0h9uhfzWJziBQmCREGSIFmQIkgVpAnSBRmC//6hkLZwaVhwxlrJSOdqlFtOYxlau9F2QN5Y98xmIAsiM1HVp2VFX+DHHGg6Ecjh3vmqtidX3qHI2qycTk/iwxSt5UzTmEP92ZBnEWTk4Mx8Mpl78ZDokxg/KWb+Q0QkvdKVmq3TMW+RXEgrsziSAfNXFMhDc60N5N9jQzjfO0kBKpUZl0ZmwJ41j/B9Hz6wmRaJB84niNmQrzp9eSlQCDDzazGDdVi3P36VZQ+Jy4f9UBNp+3zTjqI4abaFAm+GShVaXlsGdF3FYzZcDI6cori4kMxUECl9IjJZpzkvitAoxKue+90pDMvcKRxLl53TmOKCmV/xRolNKSqqUxc6LStOETmFOiLZZptlZepcKiAzteG8PEdpnQpbOMNcMsR4RR2Bs0cKFEvSmIjAFcnarqwUL4lDhHmnVkwu1IwshbiCcgvOheZuYyOteufZZwlcTlLgnZ3o/WcYdzZHW/WGaqaVfmTZ1aWCceJjkbZqsfbkOtcFlUZM/jy+hXHDbaUobWqqXaeWobbLO99yG5N3U4wxco0rQGGcOLASFMXeJoham8M+/x6O2WywK2l4HGbq1CoUyC/IZikQhdq3SiuNrvAEj0AVu9x2x3lp/xWzahaxidezFVtdcb5uEnzyl0ZmYiuKI0exvCd4Xc9CV1KB0db00z92wDPde0kukbvZIWN6jUWFTmPIC/Y4UPCm8UfDTFZpZNon1qLFTkBhxzB+FjQRA2Q/YRJT8pQigslMaUpFyAG8TMlXigiqmAZX4xgijKjRlGpLE0GdplRfCaJo0JQaSxNBk6ZmMzcya0FmrcisDdn0Q3HI2sWSppYigmlM1XT/kLQZSNpMJG0WkjYbSZuDpM1F0uYhFc1HxU4m1QJjDK6iL0S5uSj5rgXc3RejEigtcRBtqYPQsiTskmO5vosV+q4VGIKbOkDg0jtRrq+Em1YloaTFar3EGr1EUC8R0kus1Uus00usL97ABr2BjXoDm/QGNhuWtMVBKOwg/i78lT7hBsAvDmwHc/ao3vmUbBmhjeYySZNWvGkfZAgISDSaDo1SVpzGDsAEkF8B+gEapViUoZgUWXcRIGFZNm6gWbAKk0bp0k1MHG9fLYtV4iS2SmLEQFARzRcnf9PUS0LVn05/J9MiRRBU3v2IrvW974v4N00L7ZMk0wXP1409CHo/an8zTRHD3eSJ6m8D4YMkZNl3M79sqeuAsr/m3f+8/yl7A50aiAEJgeBeMWzu7ui9UfUBCe2TIqZIoOd/3/udRBOQidQZUERzb2/VwZN1H/Sju82ew2H2Wfr6qvfVf3hqwDvAIpkQVFy4B9Pe9e4/XvPeceu7h3dvO56iJPf0+A6cqA2ip18ER+iFgggiuOkvj24bby0N9j2UHIkgqIt+sVgfodC4YghLSMjSZbH0VR/6dMDrYJeKHilKTemt6v6kvzvn3/RrdWtr0GoN/xL+Sex/cPYLUpepx9cz/D46UPU5KXgAQa+NDps1v6J3xP1i2HtaDB0M9aX2deA7SYff//+gUCovMmIK/qfsFcOk+4Y5ZN97XlG6zebqtMbKgeRFi51vnxTQYBUik2rS/Cn6PC8ADR8FGxsRPB82dzfND90gIcshOcYUkfjherBz53odpm6TP8txlwOZ71xmfHHOvq053qFF/MRlS3jP0ELudrf2OeN8DHvp6ZceLe8qKYvWz/7yp0u4dKPfli3CYq0O13Ih71mylJ80tOi10On8wi+F4+LWgDPeJ30msSQt9/vkmHq9/Lvo2b461mP801v3W4xTcs6CbvF9UDdrSt+A8OUbpSh55qAUFXWznBBfdeJ8a4d7ugT5tvxUza3h9m4H7ptTqiG4z0g5dc0X29OcGlhpGFMpQo9ytTS+NViZpNdvU4kWx+LKxNY10kQ1yqGXrhe4/1nvP7E+nd5A92TtaRplbHSqoIdOqtRWti+fkB5/n1+/VvCmz12pG1kpQWsfi1ftlBobm0bpngs16CHkbIwdLnParxtTV3QYRlfJ0KFskH7pdN/YDn+yRuSd7sNH3aO0DYPggk6uWuXrfOc+fa3VTxFVvKaNxHsiHmsXyCLIE5yuOeN3/Jdf8HBL/5M6shjyhxHx9BjB1O0+4NLOnjLLSxwO7ukN4jMbOIcD879KLSi6Pk61Oqm2377n8079PXEEQ7cy7OKEC9nbpet118fxweTafpt69x/Bt8UqGzNQt7aelpc44dn5cqhwf71+qKp/Zf/+a0zcizOUWpl/iBcSXip0pplkatCchoH5c5aUM8I7/dWxAej8WicPL1URFZ9BDJelUwEwTkGqUhgSlydVes95YdXvhh9Gfz/aeFWvgVb4tuLbcv4+wLdutVZv/cUonwBD/6eDlE0aSiKK/uoH3+J1wDE/jMVqY2ysGufN84oIXB0sPzy8ollX/LegY74DgJXJR57sn+VGza0x3DnuIgABFM15LmajjjsNlYj+JEZGbuRYcAMOWxFkPN2w6Wd46xo4gVWQR/X4lyI/R6K/YK0110GzudPRW7Y+UOBGTfNNzHeYT0fiH0taunBpq9HEW8OKSaBGj21L0MqenEmNRWBAWDWAk4CpNoEZJ2tTaPFgbQYj8HxtFilErs3BTRwT8uO1NXQaWfIotchmPkAF5mMBAliEmZiOGVgCG9LgRzpscMAOOwowlT3JhusdazXGSC/hxR3UlmWVwWHpOIKheqONvjyhSiTHIkVUco5bnji8m//zL7PKaT1Vl5I6UE609f+gkr6MZKVyKc7zJRmCahLsdlyA5fdQkRSan9LgnnLEyGSkaKJCJog0wAgvepWBt80+1yKln1bMVtCljfNWDueKLsWwaEbBSfSPTEmVRsUcYYMnEjcjeyCZzBXK9E9BYBXLKjOSpUDR+nEV3TFSUdQaz+ot98QxgXwx0GQ+EEUAKB2qZPkQQ0GqFD8UPFMqyaCHM24BZmSGic9EYMagKizOw9Hz50DMrDLrqqLkTAhplMictiCAx5S3BIUQdeJeLnBy2CNtMfz6cV4u8XKoFZQesbf9YZiIERiHjaNodDW6LgcirX/mPnJIkBGDUpTBhSa0EIr38D5hCIszhCM8URGBqImoWjpvpt1ebu/v3Gl3qJfMnNM+9V+kiRFyROTPHQWOcs1dNW94/ukKMPZBvDi55i5CttdeJz84DLngLqjcdwEZ87bFFR8CIG35OAkDVN6VRDZ7aq67NteYqZ2lpT8oYB2CytoBd6VuAx4WgiAsnuj3WohG+LugzXiQRDeM3XYXlULv4dp5VFYC) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Size4;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Size4-Regular-Dl5lxZxV.woff2) format("woff2")}@font-face{font-display:block;font-family:KaTeX_Typewriter;font-style:normal;font-weight:400;src:url(/assets/KaTeX_Typewriter-Regular-CO6r4hn1.woff2) format("woff2")}.katex{font: 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;position:relative;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none!important;border-color:currentColor}.katex .katex-version:after{content:"0.16.47"}.katex .katex-mathml{border:0;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.katex .katex-html>.newline{display:block}.katex .base{position:relative;white-space:nowrap;width:-webkit-min-content;width:-moz-min-content;width:min-content}.katex .base,.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-style:italic;font-weight:700}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathboldfrak,.katex .textboldfrak{font-family:KaTeX_Fraktur;font-weight:700}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .mathsfit,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{border-collapse:collapse;display:inline-table;table-layout:fixed}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;position:relative;vertical-align:bottom}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;font-size:1px;min-width:2px;vertical-align:bottom;width:2px}.katex .vbox{align-items:baseline;display:inline-flex;flex-direction:column}.katex .hbox{width:100%}.katex .hbox,.katex .thinbox{display:inline-flex;flex-direction:row}.katex .thinbox{max-width:0;width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{border-bottom-style:solid;display:inline-block;width:100%}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .smash{display:inline;line-height:0}.katex .clap,.katex .llap,.katex .rlap{position:relative;width:0}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{border:0 solid;display:inline-block;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{border-bottom-style:solid;display:inline-block;width:100%}.katex .hdashline{border-bottom-style:dashed;display:inline-block;width:100%}.katex .sqrt>.root{margin-left:.2777777778em;margin-right:-.5555555556em}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.1666666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.3333333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.6666666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.4566666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.1466666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.7142857143em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.8571428571em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.1428571429em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.2857142857em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.4285714286em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.7142857143em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.0571428571em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.4685714286em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.9628571429em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.5542857143em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.5555555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.6666666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.7777777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.8888888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.1111111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.3333333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.3044444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.7644444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.4166666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.5833333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.6666666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.7283333333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.0733333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.3472222222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.4166666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.4861111111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.5555555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.6944444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.4402777778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.7277777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.2893518519em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.3472222222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.4050925926em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.462962963em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.5208333333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.6944444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.8333333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.2002314815em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.4398148148em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.2410800386em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.2892960463em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.337512054em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.3857280617em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.4339440694em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.4821600771em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.5785920926em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.6943105111em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.8331726133em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.1996142719em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.2009646302em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.2411575563em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.2813504823em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.3215434084em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.3617363344em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.4019292605em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.4823151125em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.578778135em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.6945337621em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.8336012862em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist-t,.katex .op-limits>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{fill:currentColor;stroke:currentColor;display:block;height:inherit;position:absolute;width:100%}.katex svg path{stroke:none}.katex svg{fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex img{border-style:none;max-height:none;max-width:none;min-height:0;min-width:0}.katex .stretchy{display:block;overflow:hidden;position:relative;width:100%}.katex .stretchy:after,.katex .stretchy:before{content:""}.katex .hide-tail{overflow:hidden;position:relative;width:100%}.katex .halfarrow-left{left:0;overflow:hidden;position:absolute;width:50.2%}.katex .halfarrow-right{overflow:hidden;position:absolute;right:0;width:50.2%}.katex .brace-left{left:0;overflow:hidden;position:absolute;width:25.1%}.katex .brace-center{left:25%;overflow:hidden;position:absolute;width:50%}.katex .brace-right{overflow:hidden;position:absolute;right:0;width:25.1%}.katex .x-arrow-pad{padding:0 .5em}.katex .cd-arrow-pad{padding:0 .55556em 0 .27778em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{border:.04em solid;box-sizing:border-box}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .angl{border-right:.049em solid;border-top:.049em solid;box-sizing:border-box;margin-right:.03889em}.katex .anglpad{padding:0 .03889em}.katex .eqn-num:before{content:"(" counter(katexEqnNo) ")";counter-increment:katexEqnNo}.katex .mml-eqn-num:before{content:"(" counter(mmlEqnNo) ")";counter-increment:mmlEqnNo}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:calc(50% + .3em);text-align:left}.katex .cd-label-right{display:inline-block;left:calc(50% + .3em);position:absolute;text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{padding-left:2em;text-align:left}body{counter-reset:katexEqnNo mmlEqnNo}';function f(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ke(){return de.replace(/url\(\/assets\/(KaTeX_[A-Za-z0-9_-]+)-[A-Za-z0-9_-]+\.(woff2|woff|ttf)\)/g,"url(https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/fonts/$1.$2)")}const ue=["重点难点解析","典型例题精讲"];function H(e,s,t){const i=e.课堂讲义,n=e.课后作业.reduce((x,d)=>x+d.questions.length,0),o=e.备课方案||"",a=o.match(/课时(?:安排)?[：:]\s*(\d+)\s*课时/)||o.match(/(\d+)\s*课时/),r=a?a[1]:"—",m=[...(i.核心知识点||"").matchAll(/\*\*(一|二|三|四|五|六|七|八|九|十)、([^*]+?)\*\*/g)].map(x=>`${x[1]}、${x[2].trim()}`),z=m.length?`<div class="board"><div class="board-title">${f(e.chapter)}</div>${m.map(x=>`<div class="board-item">${f(x)}</div>`).join("")}</div>
      <p class="wm-note">板书为自动生成参考骨架，教师可按课堂实际增删。</p>`:'<p class="wm-note">板书设计参考：围绕本节核心概念，建议板书「课题 + 核心概念 + 典型例题结构」。</p>',c=e.课后作业.map((x,d)=>s&&d>0?`
    <section class="hw-group">
      <h3>${x.difficulty}档 · ${f(x.title)}（${x.questions.length} 题）🔒 会员专享</h3>
      <p class="wm-note">该档作业为会员专享内容，开通会员后可导出完整版。</p>
    </section>`:`
    <section class="hw-group">
      <h3>${x.difficulty}档 · ${f(x.title)}（${x.questions.length} 题）</h3>
      ${x.questions.map((A,G)=>`
        <div class="hw-item">
          <p class="hw-q">${G+1}. ${O(A.q)}</p>
          ${!s&&A.a?`<p class="hw-a">【参考答案】${O(A.a)}</p>`:""}
        </div>`).join("")}
    </section>`).join(""),w=t!==void 0?`<h2 class="sec-title" id="${t}">${f(e.chapter)} · 教案</h2>`:`<h1>${f(e.chapter)}</h1>`,u=x=>{const d=i[x];return!d||!d.trim()?"":s&&ue.includes(x)?`
      <div class="locked-note">${f(x)}为会员专享内容，开通会员后可导出完整版。</div>`:`
      <div class="md">${k(d)}</div>`};return`
${w}
<div class="meta">${e.stage}${e.grade}${f(e.subject)} · 教案 · 一键生成，可直接用于课堂教学 · 共 ${n} 道习题</div>

<h2>一、教学基本信息</h2>
<table class="info-table">
  <tr><th>课题</th><td>${f(e.chapter)}</td></tr>
  <tr><th>学科</th><td>${f(e.subject)}</td></tr>
  <tr><th>学段 / 年级</th><td>${f(e.stage)} / ${f(e.grade)}</td></tr>
  <tr><th>课时建议</th><td>${r} 课时</td></tr>
  <tr><th>课型</th><td>新授课（含作业布置与课后反馈）</td></tr>
</table>

<h2>二、教学设计总览</h2>
<div class="md">${k(o)}</div>

<h2>三、教学过程</h2>
<div class="link-step"><span class="link-no">环节 1</span><div><strong>情境导入</strong><p class="step-tip">建议：结合生活实例或复习旧知引出课题《${f(e.chapter)}》，激发学生兴趣，明确学习目标。</p></div></div>
<div class="link-step"><span class="link-no">环节 2</span><div><strong>新知讲授</strong>${u("核心知识点")}</div></div>
<div class="link-step"><span class="link-no">环节 3</span><div><strong>重点难点突破</strong>${u("重点难点解析")}</div></div>
<div class="link-step"><span class="link-no">环节 4</span><div><strong>典例精讲</strong>${u("典型例题精讲")}</div></div>
<div class="link-step"><span class="link-no">环节 5</span><div><strong>巩固练习与课堂小结</strong><p class="step-tip">建议：组织学生完成基础档作业巩固新知；教师带领学生梳理本节知识结构，点明易错点，布置课后作业。</p></div></div>

<h2>四、板书设计（参考）</h2>
${z}

<h2>五、作业布置</h2>
${c}

<h2>六、教学反思</h2>
<div class="reflect-box">
  <p class="step-tip">参考反思角度：① 教学目标达成度；② 学生课堂参与情况；③ 重难点突破是否有效；④ 后续改进方向。</p>
  <div class="reflect-line"></div><div class="reflect-line"></div><div class="reflect-line"></div><div class="reflect-line"></div>
</div>

<h2>七、课后反馈</h2>
${s?'<p class="wm-note">课后反馈为会员专享内容，开通会员后可导出完整版。</p>':`<div class="md">${k(e.课后反馈)}</div>`}`}function v(e,s,t){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${f(e)}</title>
<style>
${ke()}
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
<footer>由「教师备课助手」生成 · 发布人：${C.name} · 微信：${C.wechat} · 数据来源于教案知识库</footer>
${t?`<div class="wm">${me}</div>`:""}
</body>
</html>`}function Xe(e,s){const t=H(e,s);return v(`${e.stage}${e.grade}${e.subject}《${e.chapter}》备课资料`,t,s)}function Oe(e,s,t){const i=`<div class="toc">
<h2>本册目录（共 ${e.length} 章）</h2>
<ol>${e.map((o,a)=>`<li><a href="#sec-${a}">${f(o.chapter)}</a></li>`).join("")}</ol>
</div>`,n=`
<h1>${f(t)}</h1>
<div class="meta">${e.length} 章完整教案 ｜ 备课方案 / 课堂讲义 / 课后作业 / 课后反馈 ｜ 共 ${e.reduce((o,a)=>o+a.课后作业.reduce((r,l)=>r+l.questions.length,0),0)} 道习题</div>
${i}
${e.map((o,a)=>H(o,s,`sec-${a}`)).join(`
`)}`;return v(t,n,s)}function $e(e){const s=e.map(({lesson:i,index:n})=>`
<tr>
  <td><a href="#/lesson/${n}">${f(i.chapter)}</a></td>
  <td>${f(i.stage)}</td><td>${f(i.grade)}</td><td>${f(i.subject)}</td>
</tr>`).join(""),t=`
<h1>我的收藏 · 教案清单（${e.length} 章）</h1>
<div class="meta">点击章节名可跳转查看 ｜ 由「教师备课助手」生成 · 发布人：hzj</div>
<table>
<thead><tr><th>章节</th><th>学段</th><th>年级</th><th>学科</th></tr></thead>
<tbody>${s}</tbody>
</table>`;return v("我的收藏 · 教案清单",t,!1)}function Ie(e,s){const t=e.openClass,i=`
<h1>${f(e.chapter)} · 公开课版</h1>
<div class="meta">${e.stage}${e.grade}${f(e.subject)} · 公开课详案 + 说课稿 · 会员专享增值内容</div>

${`
<h2>一、公开课详案</h2>
<div class="md">${k(t&&t.plan?t.plan:"")}</div>

<h2>二、说课稿</h2>
<div class="md">${k(t&&t.talk?t.talk:"")}</div>

<p class="wm-note">本公开课教案由「教师备课助手」一键生成，供教师公开课备课、说课比赛参考。可直接用于课堂教学。</p>
`}`;return v(`${e.stage}${e.grade}${e.subject}《${e.chapter}》公开课版`,i,s)}function Ne(e,s){const t=new Blob([s],{type:"text/html;charset=utf-8"}),i=URL.createObjectURL(t),n=document.createElement("a");n.href=i,n.download=e,n.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}const pe="d8f219c3e45512fce03ad82bf56c5cfd";let $=!1;function Le(){if(!($||typeof document>"u")){$=!0;try{const e=document.createElement("script");e.async=!0,e.src=`https://hm.baidu.com/hm.js?${pe}`;const s=document.getElementsByTagName("script")[0];s&&s.parentNode&&s.parentNode.insertBefore(e,s),window._hmt=window._hmt||[]}catch{}}}function De(e,s){try{if(!window._hmt)return;const t=s?Object.entries(s).map(([i,n])=>`${i}=${n}`).join("&"):"";window._hmt.push(["_trackEvent","wb",e,t])}catch{}}const qe=[{subject:"语文",version:"统编版",grade:"一年级",volume:"上册",units:[{name:"第一单元（识字）",lessons:["天地人","金木水火土","口耳目","日月水火","对韵歌"]},{name:"第二单元（拼音）",lessons:["a o e","i u ü","b p m f","d t n l","g k h","j q x"]},{name:"第三单元（拼音）",lessons:["z c s","zh ch sh r","y w","ai ei ui","ao ou iu","ie üe er"]},{name:"第四单元（拼音）",lessons:["an en in un ün","ang eng ing ong"]},{name:"第五单元（课文）",lessons:["秋天","小小的船","江南","四季"]},{name:"第六单元（识字）",lessons:["画","大小多少","小书包","日月明","升国旗"]},{name:"第七单元（课文）",lessons:["影子","比尾巴","青蛙写诗","雨点儿"]},{name:"第八单元（课文）",lessons:["明天要远足","大还是小","项链"]}]},{subject:"语文",version:"统编版",grade:"一年级",volume:"下册",units:[{name:"第一单元（识字）",lessons:["春夏秋冬","姓氏歌","小青蛙","猜字谜"]},{name:"第二单元（课文）",lessons:["吃水不忘挖井人","我多想去看看","一个接一个","四个太阳"]},{name:"第三单元（课文）",lessons:["小公鸡和小鸭子","树和喜鹊","怎么都快乐"]},{name:"第四单元（课文）",lessons:["静夜思","夜色","端午粽","彩虹"]},{name:"第五单元（识字）",lessons:["动物儿歌","古对今","操场上","人之初"]},{name:"第六单元（课文）",lessons:["古诗二首：池上/小池","荷叶圆圆","要下雨了"]},{name:"第七单元（课文）",lessons:["文具的家","一分钟","动物王国开大会","小猴子下山"]},{name:"第八单元（课文）",lessons:["棉花姑娘","咕咚","小壁虎借尾巴"]}]},{subject:"语文",version:"统编版",grade:"二年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["小蝌蚪找妈妈","我是什么","植物妈妈有办法"]},{name:"第二单元（识字）",lessons:["场景歌","树之歌","拍手歌","田家四季歌"]},{name:"第三单元（课文）",lessons:["曹冲称象","玲玲的画","一封信","妈妈睡了"]},{name:"第四单元（课文）",lessons:["古诗二首：登鹳雀楼/望庐山瀑布","黄山奇石","日月潭","葡萄沟"]},{name:"第五单元（课文）",lessons:["坐井观天","寒号鸟","我要的是葫芦"]},{name:"第六单元（课文）",lessons:["大禹治水","朱德的扁担","难忘的泼水节"]},{name:"第七单元（课文）",lessons:["古诗二首：夜宿山寺/敕勒歌","雾在哪里","雪孩子"]},{name:"第八单元（课文）",lessons:["狐假虎威","狐狸分奶酪","纸船和风筝","风娃娃"]}]},{subject:"语文",version:"统编版",grade:"二年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["古诗二首：村居/咏柳","找春天","开满鲜花的小路","邓小平爷爷植树"]},{name:"第二单元（课文）",lessons:["雷锋叔叔你在哪里","千人糕","一匹出色的马"]},{name:"第三单元（识字）",lessons:["神州谣","传统节日","“贝”的故事","中国美食"]},{name:"第四单元（课文）",lessons:["彩色的梦","枫树上的喜鹊","沙滩上的童话","我是一只小虫子"]},{name:"第五单元（课文）",lessons:["寓言二则：亡羊补牢/揠苗助长","画杨桃","小马过河"]},{name:"第六单元（课文）",lessons:["古诗二首：晓出净慈寺送林子方/绝句","雷雨","要是你在野外迷了路","太空生活趣事多"]},{name:"第七单元（课文）",lessons:["大象的耳朵","蜘蛛开店","青蛙卖泥塘","小毛虫"]},{name:"第八单元（课文）",lessons:["祖先的摇篮","当世界年纪还小的时候","羿射九日"]}]},{subject:"语文",version:"统编版",grade:"三年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["大青树下的小学","花的学校","不懂就要问"]},{name:"第二单元（课文）",lessons:["古诗三首：山行/赠刘景文/夜书所见","铺满金色巴掌的水泥道","秋天的雨","听听秋的声音"]},{name:"第三单元（课文）",lessons:["卖火柴的小女孩","那一定会很好","在牛肚子里旅行","一块奶酪"]},{name:"第四单元（课文）",lessons:["总也倒不了的老屋","胡萝卜先生的长胡子","不会叫的狗"]},{name:"第五单元（课文）",lessons:["搭船的鸟","金色的草地"]},{name:"第六单元（课文）",lessons:["古诗三首：望天门山/饮湖上初晴后雨/望洞庭","富饶的西沙群岛","海滨小城","美丽的小兴安岭"]},{name:"第七单元（课文）",lessons:["大自然的声音","父亲、树林和鸟","带刺的朋友"]},{name:"第八单元（课文）",lessons:["司马光","掌声","灰雀","手术台就是阵地"]}]},{subject:"语文",version:"统编版",grade:"三年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["古诗三首：绝句/惠崇春江晚景/三衢道中","燕子","荷花","昆虫备忘录"]},{name:"第二单元（课文）",lessons:["守株待兔","陶罐和铁罐","鹿角和鹿腿","池子与河流"]},{name:"第三单元（课文）",lessons:["古诗三首：元日/清明/九月九日忆山东兄弟","纸的发明","赵州桥","一幅名扬中外的画"]},{name:"第四单元（课文）",lessons:["花钟","蜜蜂","小虾"]},{name:"第五单元（课文）",lessons:["小真的长头发","我变成了一棵树"]},{name:"第六单元（课文）",lessons:["童年的水墨画","剃头大师","肥皂泡","我不能失信"]},{name:"第七单元（课文）",lessons:["我们奇妙的世界","海底世界","火烧云"]},{name:"第八单元（课文）",lessons:["慢性子裁缝和急性子顾客","方帽子店","漏","枣核"]}]},{subject:"语文",version:"统编版",grade:"四年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["观潮","走月亮","现代诗二首：秋晚的江上/花牛歌","繁星"]},{name:"第二单元（课文）",lessons:["一个豆荚里的五粒豆","蝙蝠和雷达","呼风唤雨的世纪","蝴蝶的家"]},{name:"第三单元（课文）",lessons:["古诗三首：暮江吟/题西林壁/雪梅","爬山虎的脚","蟋蟀的住宅"]},{name:"第四单元（课文）",lessons:["盘古开天地","精卫填海","女娲补天","普罗米修斯"]},{name:"第五单元（课文）",lessons:["麻雀","爬天都峰"]},{name:"第六单元（课文）",lessons:["牛和鹅","一只窝囊的大老虎","陀螺"]},{name:"第七单元（课文）",lessons:["古诗三首：出塞/凉州词/夏日绝句","为中华之崛起而读书","梅兰芳蓄须","延安，我把你追寻"]},{name:"第八单元（课文）",lessons:["王戎不取道旁李","西门豹治邺","故事二则：扁鹊治病/纪昌学射"]}]},{subject:"语文",version:"统编版",grade:"四年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["古诗三首：宿新市徐公店/四时田园杂兴（其二十五）/清平乐·村居","乡下人家","天窗","三月桃花水"]},{name:"第二单元（课文）",lessons:["琥珀","飞向蓝天的恐龙","纳米技术就在我们身边","千年梦圆在今朝"]},{name:"第三单元（课文）",lessons:["短诗三首：繁星（七一）/（一三一）/（一五九）","绿","白桦","在天晴了的时候"]},{name:"第四单元（课文）",lessons:["猫","母鸡","白鹅"]},{name:"第五单元（课文）",lessons:["海上日出","记金华的双龙洞"]},{name:"第六单元（课文）",lessons:["文言文二则：囊萤夜读/铁杵成针","小英雄雨来","我们家的男子汉","芦花鞋"]},{name:"第七单元（课文）",lessons:["古诗三首：芙蓉楼送辛渐/塞下曲/墨梅","“诺曼底”号遇难记","黄继光","挑山工"]},{name:"第八单元（课文）",lessons:["宝葫芦的秘密","巨人的花园","海的女儿"]}]},{subject:"语文",version:"统编版",grade:"五年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["白鹭","落花生","桂花雨","珍珠鸟"]},{name:"第二单元（课文）",lessons:["搭石","将相和","什么比猎豹的速度更快"]},{name:"第三单元（课文）",lessons:["猎人海力布","牛郎织女（一）","牛郎织女（二）"]},{name:"第四单元（课文）",lessons:["古诗三首：示儿/题临安邸/己亥杂诗","少年中国说（节选）","圆明园的毁灭"]},{name:"第五单元（课文）",lessons:["太阳","松鼠"]},{name:"第六单元（课文）",lessons:["慈母情深","父爱之舟","“精彩极了”和“糟糕透了”"]},{name:"第七单元（课文）",lessons:["古诗词三首：山居秋暝/枫桥夜泊/长相思","四季之美","鸟的天堂","月迹"]},{name:"第八单元（课文）",lessons:["古人谈读书","忆读书","我的“长生果”"]}]},{subject:"语文",version:"统编版",grade:"五年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["古诗三首：四时田园杂兴（其三十一）/稚子弄冰/村晚","祖父的园子","月是故乡明","梅花魂"]},{name:"第二单元（课文）",lessons:["草船借箭","景阳冈","猴王出世","红楼春趣"]},{name:"第四单元（课文）",lessons:["古诗三首：从军行/秋夜将晓出篱门迎凉有感/闻官军收河南河北","青山处处埋忠骨","军神","清贫"]},{name:"第五单元（课文）",lessons:["人物描写一组：摔跤/他像一棵挺脱的树/两茎灯草","刷子李"]},{name:"第六单元（课文）",lessons:["自相矛盾","田忌赛马","跳水"]},{name:"第七单元（课文）",lessons:["威尼斯的小艇","牧场之国","金字塔"]},{name:"第八单元（课文）",lessons:["杨氏之子","手指","童年的发现"]}]},{subject:"语文",version:"统编版",grade:"六年级",volume:"上册",units:[{name:"第一单元（课文）",lessons:["草原","丁香结","古诗词三首：宿建德江/六月二十七日望湖楼醉书/西江月·夜行黄沙道中"]},{name:"第二单元（课文）",lessons:["七律·长征","狼牙山五壮士","开国大典","灯光"]},{name:"第三单元（课文）",lessons:["竹节人","宇宙生命之谜","故宫博物院"]},{name:"第四单元（课文）",lessons:["桥","穷人","在柏林"]},{name:"第五单元（课文）",lessons:["夏天里的成长","盼"]},{name:"第六单元（课文）",lessons:["古诗三首：浪淘沙/江南春/书湖阴先生壁","只有一个地球","青山不老","三黑和土地"]},{name:"第七单元（课文）",lessons:["文言文二则：伯牙鼓琴/书戴嵩画牛","月光曲","京剧趣谈"]},{name:"第八单元（课文）",lessons:["少年闰土","好的故事","我的伯父鲁迅先生","有的人"]}]},{subject:"语文",version:"统编版",grade:"六年级",volume:"下册",units:[{name:"第一单元（课文）",lessons:["北京的春节","腊八粥","古诗三首：寒食/迢迢牵牛星/十五夜望月"]},{name:"第二单元（课文）",lessons:["鲁滨逊漂流记（节选）","骑鹅旅行记（节选）","汤姆·索亚历险记（节选）"]},{name:"第三单元（课文）",lessons:["匆匆","那个星期天"]},{name:"第四单元（课文）",lessons:["古诗三首：马诗/石灰吟/竹石","十六年前的回忆","为人民服务","董存瑞舍身炸暗堡"]},{name:"第五单元（课文）",lessons:["文言文二则：学弈/两小儿辩日","真理诞生于一百个问号之后","表里的生物","他们那时候多有趣啊"]}]}],Ue=[{subject:"数学",version:"人教版",grade:"一年级",volume:"上册",units:[{name:"第一单元 准备课",lessons:["数一数","比多少"]},{name:"第二单元 位置",lessons:["上、下、前、后","左、右"]},{name:"第三单元 1~5的认识和加减法",lessons:["1~5的认识","比大小","第几","分与合","加法","减法","0的认识"]},{name:"第四单元 认识图形（一）",lessons:["认识立体图形","拼一拼"]},{name:"第五单元 6~10的认识和加减法",lessons:["6和7的认识","8和9的认识","10的认识","6~10的加减法","连加连减","加减混合"]},{name:"第六单元 11~20各数的认识",lessons:["数数、读数","写数","十加几及相应的减法","解决问题"]},{name:"第七单元 认识钟表",lessons:["认识钟表","整时和半时","解决问题"]},{name:"第八单元 20以内的进位加法",lessons:["9加几","8、7、6加几","5、4、3、2加几","解决问题","整理和复习"]}]},{subject:"数学",version:"人教版",grade:"一年级",volume:"下册",units:[{name:"第一单元 认识图形（二）",lessons:["认识平面图形","拼一拼","七巧板"]},{name:"第二单元 20以内的退位减法",lessons:["十几减9","十几减8、7、6","十几减5、4、3、2","解决问题","整理和复习"]},{name:"第三单元 分类与整理",lessons:["分类与整理","整理自己的书包"]},{name:"第四单元 100以内数的认识",lessons:["数数、数的组成","读数、写数","数的顺序、比较大小","整十数加一位数及相应的减法","解决问题","整理和复习"]},{name:"第五单元 认识人民币",lessons:["认识人民币","简单的计算"]},{name:"第六单元 100以内的加法和减法（一）",lessons:["整十数加、减整十数","两位数加一位数、整十数","两位数减一位数、整十数","解决问题","整理和复习"]},{name:"第七单元 找规律",lessons:["找规律（图形）","找规律（数字）","解决问题"]}]},{subject:"数学",version:"人教版",grade:"二年级",volume:"上册",units:[{name:"第一单元 长度单位",lessons:["认识厘米","认识米","认识线段","解决问题"]},{name:"第二单元 100以内的加法和减法（二）",lessons:["不进位加","进位加","不退位减","退位减","连加、连减和加减混合","解决问题","整理和复习"]},{name:"第三单元 角的初步认识",lessons:["角的初步认识","认识直角","认识锐角和钝角"]},{name:"第四单元 表内乘法（一）",lessons:["乘法的初步认识","2、3的乘法口诀","4、5的乘法口诀","6的乘法口诀","整理和复习"]},{name:"第五单元 观察物体（一）",lessons:["观察物体（从不同位置）","观察立体图形"]},{name:"第六单元 表内乘法（二）",lessons:["7的乘法口诀","8的乘法口诀","9的乘法口诀","解决问题","整理和复习"]},{name:"第七单元 认识时间",lessons:["认识时间","解决问题"]},{name:"第八单元 数学广角——搭配（一）",lessons:["搭配问题"]}]},{subject:"数学",version:"人教版",grade:"二年级",volume:"下册",units:[{name:"第一单元 数据收集整理",lessons:["数据的收集整理","用正字记录数据","整理分析数据"]},{name:"第二单元 表内除法（一）",lessons:["平均分","除法","用2~6的乘法口诀求商","解决问题","整理和复习"]},{name:"第三单元 图形的运动（一）",lessons:["轴对称图形","平移","旋转"]},{name:"第四单元 表内除法（二）",lessons:["用7、8、9的乘法口诀求商","解决问题","整理和复习"]},{name:"第五单元 混合运算",lessons:["没有括号的同级混合运算","含小括号的混合运算","解决问题","整理和复习"]},{name:"第六单元 有余数的除法",lessons:["有余数除法的意义","有余数除法的计算","解决问题"]},{name:"第七单元 万以内数的认识",lessons:["1000以内数的认识","10000以内数的认识","整百、整千数加减法","解决问题","整理和复习"]},{name:"第八单元 克和千克",lessons:["克和千克的认识","解决问题"]},{name:"第九单元 数学广角——推理",lessons:["简单推理","数独游戏"]}]},{subject:"数学",version:"人教版",grade:"三年级",volume:"上册",units:[{name:"第一单元 时、分、秒",lessons:["秒的认识","时、分、秒单位换算","解决问题"]},{name:"第二单元 万以内的加法和减法（一）",lessons:["两位数加两位数（口算）","两位数减两位数（口算）","几百几十加、减几百几十","解决问题","整理和复习"]},{name:"第三单元 测量",lessons:["毫米、分米的认识","千米的认识","吨的认识","解决问题"]},{name:"第四单元 万以内的加法和减法（二）",lessons:["三位数加法（不进位和进位）","三位数加法（连续进位）","三位数减法","加减法验算","解决问题","整理和复习"]},{name:"第五单元 倍的认识",lessons:["倍的认识","求一个数是另一个数的几倍","求一个数的几倍是多少","解决问题"]},{name:"第六单元 多位数乘一位数",lessons:["口算乘法","笔算乘法（不进位）","笔算乘法（进位）","乘数中间或末尾有0的乘法","解决问题","整理和复习"]},{name:"第七单元 长方形和正方形",lessons:["四边形","周长的认识","长方形和正方形的周长","解决问题"]},{name:"第八单元 分数的初步认识",lessons:["几分之一","几分之几","分数的简单计算","分数的简单应用"]},{name:"第九单元 数学广角——集合",lessons:["集合（重叠问题）"]}]},{subject:"数学",version:"人教版",grade:"三年级",volume:"下册",units:[{name:"第一单元 位置与方向（一）",lessons:["认识东南西北","认识东南、东北、西南、西北","会看简单的路线图"]},{name:"第二单元 除数是一位数的除法",lessons:["口算除法","笔算除法（基本）","笔算除法（商中间、末尾有0）","解决问题","整理和复习"]},{name:"第三单元 复式统计表",lessons:["复式统计表","解决问题"]},{name:"第四单元 两位数乘两位数",lessons:["口算乘法","笔算乘法（不进位）","笔算乘法（进位）","解决问题","整理和复习"]},{name:"第五单元 面积",lessons:["面积和面积单位","长方形、正方形面积的计算","面积单位间的进率","解决问题"]},{name:"第六单元 年、月、日",lessons:["年、月、日的认识","平年、闰年","24时计时法","解决问题"]},{name:"第七单元 小数的初步认识",lessons:["认识小数","简单的小数加、减法"]},{name:"第八单元 数学广角——搭配（二）",lessons:["搭配问题","排列组合初步"]}]},{subject:"数学",version:"人教版",grade:"四年级",volume:"上册",units:[{name:"第一单元 大数的认识",lessons:["亿以内数的认识","亿以内数的读法和写法","数的产生、十进制计数法","亿以上数的认识","计算工具的认识和用计算器计算","整理和复习"]},{name:"第二单元 公顷和平方千米",lessons:["公顷","平方千米"]},{name:"第三单元 角的度量",lessons:["线段、直线、射线","角的度量","角的分类","画角"]},{name:"第四单元 三位数乘两位数",lessons:["三位数乘两位数的笔算","因数中间或末尾有0的乘法","积的变化规律","解决问题"]},{name:"第五单元 平行四边形和梯形",lessons:["平行与垂直","画垂线和点到直线的距离","平行四边形和梯形的认识"]},{name:"第六单元 除数是两位数的除法",lessons:["口算除法","笔算除法（商是一位数）","笔算除法（商是两位数）","商的变化规律","解决问题","整理和复习"]},{name:"第七单元 条形统计图",lessons:["1格代表1个单位的条形统计图","1格代表多个单位的条形统计图"]},{name:"第八单元 数学广角——优化",lessons:["沏茶问题","烙饼问题","田忌赛马问题"]}]},{subject:"数学",version:"人教版",grade:"四年级",volume:"下册",units:[{name:"第一单元 四则运算",lessons:["加、减法的意义和各部分间的关系","乘、除法的意义和各部分间的关系","括号","解决问题","整理和复习"]},{name:"第二单元 观察物体（二）",lessons:["观察物体（从不同位置观察）","观察立体图形"]},{name:"第三单元 运算定律",lessons:["加法交换律和结合律","加法运算定律的应用","乘法交换律和结合律","乘法分配律","简便计算","整理和复习"]},{name:"第四单元 小数的意义和性质",lessons:["小数的意义","小数的读法和写法","小数的大小比较","小数点移动引起小数大小的变化","小数与单位换算","求小数的近似数","整理和复习"]},{name:"第五单元 三角形",lessons:["三角形的特性","三角形三边关系","三角形的分类","三角形的内角和"]},{name:"第六单元 小数的加法和减法",lessons:["小数加、减法","小数加减混合运算","整数加法运算定律推广到小数","解决问题"]},{name:"第七单元 图形的运动（二）",lessons:["轴对称","平移","解决问题"]},{name:"第八单元 平均数与条形统计图",lessons:["平均数","复式条形统计图"]},{name:"第九单元 数学广角——鸡兔同笼",lessons:["鸡兔同笼"]}]},{subject:"数学",version:"人教版",grade:"五年级",volume:"上册",units:[{name:"第一单元 小数乘法",lessons:["小数乘整数","小数乘小数","积的近似数","整数乘法运算定律推广到小数","解决问题"]},{name:"第二单元 位置",lessons:["用数对确定位置","在方格纸上用数对表示位置"]},{name:"第三单元 小数除法",lessons:["小数除以整数","一个数除以小数","商的近似数","循环小数","解决问题","整理和复习"]},{name:"第四单元 可能性",lessons:["事件发生的可能性","可能性的大小","掷一掷"]},{name:"第五单元 简易方程",lessons:["用字母表示数","方程的意义","等式的性质","解方程","实际问题与方程","整理和复习"]},{name:"第六单元 多边形的面积",lessons:["平行四边形的面积","三角形的面积","梯形的面积","组合图形的面积","解决问题"]},{name:"第七单元 数学广角——植树问题",lessons:["植树问题（两端都栽）","植树问题（两端不栽）","植树问题（封闭图形）"]}]},{subject:"数学",version:"人教版",grade:"五年级",volume:"下册",units:[{name:"第一单元 观察物体（三）",lessons:["观察物体（根据图形摆法）","观察物体（综合运用）"]},{name:"第二单元 因数与倍数",lessons:["因数和倍数","2、5的倍数的特征","3的倍数的特征","质数和合数","解决问题","整理和复习"]},{name:"第三单元 长方体和正方体",lessons:["长方体和正方体的认识","长方体和正方体的表面积","体积和体积单位","长方体和正方体的体积","容积和容积单位","解决问题","整理和复习"]},{name:"第四单元 分数的意义和性质",lessons:["分数的意义","分数与除法","真分数和假分数","分数的基本性质","约分","通分","分数和小数的互化","整理和复习"]},{name:"第五单元 图形的运动（三）",lessons:["旋转","图形的运动综合运用"]},{name:"第六单元 分数的加法和减法",lessons:["同分母分数加、减法","异分母分数加、减法","分数加减混合运算","解决问题","整理和复习"]},{name:"第七单元 折线统计图",lessons:["单式折线统计图","复式折线统计图"]},{name:"第八单元 数学广角——找次品",lessons:["找次品"]}]},{subject:"数学",version:"人教版",grade:"六年级",volume:"上册",units:[{name:"第一单元 分数乘法",lessons:["分数乘整数","分数乘分数","小数乘分数","分数混合运算和简便运算","解决问题（连续求一个数的几分之几）","解决问题（已知一个数比另一个数多几分之几）","整理和复习"]},{name:"第二单元 位置与方向（二）",lessons:["描述物体的位置","描述并绘制路线图"]},{name:"第三单元 分数除法",lessons:["倒数的认识","分数除以整数","一个数除以分数","分数四则混合运算","解决问题（已知一个数的几分之几是多少）","解决问题（比一个数多几分之几）","整理和复习"]},{name:"第四单元 比",lessons:["比的意义","比的基本性质","比的应用（按比分配）"]},{name:"第五单元 圆",lessons:["圆的认识","圆的周长","圆的面积","解决问题（圆环面积）","扇形"]},{name:"第六单元 百分数（一）",lessons:["百分数的意义和读写","百分数与分数、小数的互化","求一个数是另一个数的百分之几","求一个数比另一个数多（少）百分之几","解决问题","整理和复习"]},{name:"第七单元 扇形统计图",lessons:["扇形统计图","选择合适的统计图"]},{name:"第八单元 数学广角——数与形",lessons:["数与形（平方数的直观）","数与形（规律探索）"]}]},{subject:"数学",version:"人教版",grade:"六年级",volume:"下册",units:[{name:"第一单元 负数",lessons:["负数的认识","负数的大小比较","用负数解决实际问题"]},{name:"第二单元 百分数（二）",lessons:["折扣","成数","税率","利率","解决问题（促销问题）","整理和复习"]},{name:"第三单元 圆柱与圆锥",lessons:["圆柱的认识","圆柱的表面积","圆柱的体积","圆锥的认识","圆锥的体积","整理和复习"]},{name:"第四单元 比例",lessons:["比例的意义和基本性质","解比例","正比例","反比例","比例尺","图形的放大与缩小","用比例解决问题","整理和复习"]},{name:"第五单元 数学广角——鸽巢问题",lessons:["鸽巢问题（抽屉原理）","鸽巢问题的应用"]}]}];function I(e){return String(e||"").toLowerCase().replace(/[（(][^）)]*[)）]/g,"").replace(/^(课文|古诗三首|古诗|古诗文|古文|习作|拼音|识字（[一二三四五六七八九十]+）|识字|现代诗|现代文|阅读|综合性学习|口语交际|名著导读|数学广角[：:]?|整理和复习|数一数)[:：]?/,"").replace(/[~～]/g,"-").replace(/[\s，。、：:；;！!？?·"'“”]/g,"").trim()}function ge(e,s){const t=I(s);if(!t)return-1;for(let i=0;i<e.length;i++){const n=e[i];if(!n)continue;const o=I(n.chapter);if(o&&(o===t||t.length>=3&&(o.includes(t)||t.includes(o))))return i}return-1}function Pe(e,s){let t=0;for(const i of s)ge(e,i)>=0&&t++;return{have:t,total:s.length}}const W="wb-bookmarks",F=20,N={starred:[],progress:{},recent:[]};function He(){try{const e=localStorage.getItem(W);if(!e)return{...N};const s=JSON.parse(e);return{starred:Array.isArray(s.starred)?s.starred:[],progress:s.progress&&typeof s.progress=="object"?s.progress:{},recent:Array.isArray(s.recent)?s.recent.slice(0,F):[]}}catch{return{...N}}}function M(e){try{localStorage.setItem(W,JSON.stringify(e))}catch{}window.dispatchEvent(new CustomEvent("wb-bookmarks-changed"))}function We(e,s){const t={...e,starred:e.starred.includes(s)?e.starred.filter(i=>i!==s):[s,...e.starred]};return M(t),t}function Fe(e,s,t){const i={...e,progress:{...e.progress,[String(s)]:t}};return M(i),i}function Ge(e,s){if(e.recent[0]===s)return e;const t={...e,recent:[s,...e.recent.filter(i=>i!==s)].slice(0,F)};return M(t),t}const Ye={"小学|一年级|语文|识字（一）：天地人":{plan:`**教学基本信息**
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
通过这堂课，我预计学生能流利朗读并背诵课文，能说出"探""吐"用词之妙，能积累若干 AABB 式词语，大部分学生能用"那是……吧？"仿写出贴切的句子。课堂上可能出现的困难是：学生仿写时比喻不贴切，比如把小草比作头发而忽略了初春小草细短的特点，我会用"先示范、再互评"的方式引导修改。朗读时学生也可能把"春天来了"读得平淡，我会用看画面、看标点、配乐读的三步法来训练。一课时内内容较多，若时间不够，我会压缩仿写展示的时长，把写话延为作业，确保朗读品悟的充分。我相信，这样一节充满发现乐趣的课，会让孩子们爱上读散文、爱上写春天，也会让他们养成留心观察大自然的好习惯。当然，课堂上的生成总会超出预设，我会尊重学生独特的想象，因势利导，让课堂真正成为师生共同发现春天的地方。我的说课完毕，谢谢大家，恳请老师们批评指正！`}},Ve={"小学|三年级|语文|课文：燕子":{plan:`**教学基本信息**
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
通过这样的设计，我预计课堂上有三个比较理想的效果：一是通过情节图和表格的双支架，学生能比较完整地按顺序复述故事，减少情节遗漏；二是通过"引—析—结"的品读方法，学生能体会到诸葛亮的知天文、晓地理、识人心，而不是简单地喊"聪明"；三是通过人物对比，学生对周瑜长叹背后的心理会有更真切的体会。当然，教学中也有一些需要注意的地方，比如学生受影视剧影响可能提出课文里没有的情节，我要及时引导他们回到文本；讲述故事的时间比较紧，个别学生可能讲不完，我可以让同桌互相补充，把完整的讲述放到课后。总的来说，这节课以梳理为基、以品读为魂、以讲述为用，力求让学生在古典名著中感受人物的风采，爱上《三国演义》。我的说课到此结束，谢谢大家！`}},Je={"小学|五年级|语文|古诗三首：四时田园杂兴/稚子弄冰/村晚":{plan:`**教学基本信息**

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

`}},Ze={"小学|一年级|数学|认识钟表":{plan:`**教学基本信息**

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

我对本课效果的预期是：孩子们通过摆圆片、编口诀、对口令，能够真正理解"几个几相加可以用乘法"，记住 2-6 的 21 句口诀，并会用口诀求积。当然，口诀的熟练运用不是一节课就能完成的，需要在今后的每一节课前坚持三分钟对口令，把口诀变成自动化的反应。个别孩子在从加法到乘法的抽象上可能还需要时间，我会允许他们借助圆片摆一摆、数一数，逐步过渡。我相信，只要孩子理解了乘法的意义，口诀就再也不是枯燥的背诵，而是他们解决生活问题的好帮手。我的说课到此结束，谢谢大家！`}},Qe={"小学|三年级|数学|分数的初步认识":{plan:`**教学基本信息**

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

本课的设计有三个突出特点。第一，重视真实探究，圆周率不是直接告知，而是学生在测量中发现的，让数学规律"长"在学生手中。第二，重视思想方法，通过化曲为直、剪拼转化，让学生经历从曲线到直线的转化过程，感悟数学思想的力量。第三，重视易错点突破，针对半径平方、周长面积混淆等典型错误设计辨析练习，防患于未然。我预计大部分学生能正确运用公式计算圆的周长和面积，个别学生在已知直径求面积时可能忘记先求半径，我会通过规范书写步骤帮助学生避免。课堂是动态的，我也会根据学生的实际表现及时调整，让学生在探究中感受圆的魅力，收获成功的体验。同时，我深知圆的学习不是一节课就能完成的，周长与面积的灵活运用、组合图形的计算还需要在后续练习中不断巩固。我会把学生课堂上的表现作为后续教学的起点，帮助每一位学生建立起系统的圆的知识网络。`}};export{ae as A,He as B,qe as C,Be as D,D as E,Ee as F,Ae as G,Te as H,Le as I,We as J,Fe as K,Ge as L,Ue as M,Qe as O,C as P,g as S,Q as T,Ze as a,Je as b,Ve as c,Ye as d,je as e,ve as f,ye as g,$e as h,Ne as i,Ce as j,fe as k,te as l,ge as m,Oe as n,Re as o,Me as p,Ke as q,O as r,we as s,De as t,Pe as u,Xe as v,_e as w,Ie as x,le as y,Se as z};
