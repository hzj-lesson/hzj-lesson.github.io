import{j as _,a as T,b as z,c as A,d as I,e as M,f as O,g as R,h as C,i as N,k as L,l as B,p as P,m as q,n as F,o as K,q as D,s as U,r as W,t as Y,u as J,v as X,w as Z,x as G,y as V,z as Q,A as tt,B as et}from"./lesson-data-B8K0U9Ag.js";import{j as rt}from"./react-vendor-Ds7D3P6J.js";import{k as nt,a as ot}from"./katex-BMTrKmI6.js";const mt=[..._,...T,...z,...A,...I,...M,...O,...R,...C,...N,...L,...B,...P,...q,...F,...K,...D,...U,...W,...Y,...J,...X,...Z,...G,...V,...Q,...tt,...et],w="wb-tier",ft=3,xt=2,$t=10;function st(){try{return localStorage.getItem(w)==="pro"?"pro":"free"}catch{return"free"}}function bt(t){try{localStorage.setItem(w,t)}catch{}}const yt=()=>st()==="pro";function at(){try{const t=new Date().toISOString().slice(0,10),e=localStorage.getItem("wb-export-count");if(!e)return 0;const r=JSON.parse(e);return r.date===t?r.count:0}catch{return 0}}function Et(){const t=new Date().toISOString().slice(0,10),e=at()+1;try{localStorage.setItem("wb-export-count",JSON.stringify({date:t,count:e}))}catch{}return e}const it="由「教师备课助手」免费版生成 · 开通会员解锁完整导出";function v(t){return t.replace(/\\\\([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]/g,"")}function g(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function j(t){let e="",r=!1;for(let n=0;n<t.length;n++){const o=t[n];if(o==="$"){r=!r,e+=o;continue}if(!r&&o==="\\"&&t[n+1]==="n"){e+=`
`,n++;continue}e+=o}return e}function b(t){if(!t)return"";const e=v(j(String(t))),r=[];let n=e.replace(/\$([^$\n]+?)\$/g,(a,s)=>`@@MATH${r.push(s.trim())-1}@@`),o=g(n).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>");return o=o.replace(/@@MATH(\d+)@@/g,(a,s)=>f(r[+s],!1)),o}function f(t,e){try{return nt.renderToString(t,{displayMode:e,throwOnError:!1,strict:!1,trust:!0,output:"html"})}catch{return e?`<div class="plain-formula">${t}</div>`:`<code class="inline-math">${t}</code>`}}function m(t){return g(t).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br>")}function ct(t){const e=t.map(a=>a.replace(/^\||\|$/g,"").split("|").map(s=>s.trim())),r=e[0],n=e.slice(2);let o="<table><thead><tr>";return r.forEach(a=>{o+=`<th>${m(a)}</th>`}),o+="</tr></thead><tbody>",n.forEach(a=>{o+="<tr>",a.forEach(s=>{o+=`<td>${m(s)}</td>`}),o+="</tr>"}),o+"</tbody></table>"}function lt(t){const e=t.map(o=>{const a=o.match(/^(\s*)[-*•]\s+(.*)$/);return{level:Math.floor(((a==null?void 0:a[1].length)??0)/2),content:(a==null?void 0:a[2])??""}});let r="<ul>",n=0;for(e.forEach(o=>{for(;n>o.level;)r+="</ul>",n--;o.level>n&&(r+="<ul>",n++),r+=`<li>${m(o.content)}</li>`});n>0;)r+="</ul>",n--;return r+="</ul>",r}function u(t){if(!t)return'<p class="empty-md">（暂无内容）</p>';const e=v(j(String(t))).replace(/\r\n/g,`
`),r=[];let n=e.replace(/\$\$([\s\S]+?)\$\$/g,(l,p)=>`
@@TOKEN${r.push({type:"block",tex:p.trim()})-1}@@
`);n=n.replace(/\$([^$\n]+?)\$/g,(l,p)=>`@@TOKEN${r.push({type:"inline",tex:p.trim()})-1}@@`),n=n.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(l,p,i)=>`@@TOKEN${r.push({type:"img",alt:p,src:i})-1}@@`);const o=n.split(`
`),a=[];let s=0;for(;s<o.length;){const l=o[s],p=l.trim();if(!p){s++;continue}if(p.startsWith("|")&&s+1<o.length&&/^\s*\|?[\s:|-]+\|?\s*$/.test(o[s+1])&&o[s+1].includes("-")){const h=[];for(;s<o.length&&o[s].trim().startsWith("|");)h.push(o[s].trim()),s++;a.push(ct(h));continue}if(/^\s*[-*•]\s+/.test(l)){const h=[];for(;s<o.length&&/^\s*[-*•]\s+/.test(o[s]);)h.push(o[s]),s++;a.push(lt(h));continue}const i=[l];for(s++;s<o.length&&o[s].trim()&&!/^\s*[-*•]\s+/.test(o[s])&&!o[s].trim().startsWith("|");)i.push(o[s]),s++;a.push(`<p>${m(i.join(`
`))}</p>`)}let d=a.join(`
`);return d=d.replace(/@@TOKEN(\d+)@@/g,(l,p)=>{const i=r[+p];return i.type==="img"?`<img src="${g(i.src??"")}" alt="${g(i.alt??"")}" loading="lazy">`:i.type==="block"?`<div class="katex-display">${f(i.tex??"",!0)}</div>`:f(i.tex??"",!1)}),d}const wt=({source:t,className:e})=>rt.jsx("div",{className:`md ${e??""}`,dangerouslySetInnerHTML:{__html:u(t)}});function c(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function dt(){return ot.replace(/url\(\/assets\/(KaTeX_[A-Za-z0-9_-]+)-[A-Za-z0-9_-]+\.(woff2|woff|ttf)\)/g,"url(https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/fonts/$1.$2)")}function H(t,e){const r=t.课堂讲义,n=t.课后作业.map((a,s)=>`
    <section class="hw-group">
      <h3>${a.difficulty}档 · ${c(a.title)}（${a.questions.length} 题）</h3>
      ${a.questions.map((d,l)=>`
        <div class="hw-item">
          <p class="hw-q">${l+1}. ${b(d.q)}</p>
          ${d.a?`<p class="hw-a">【参考答案】${b(d.a)}</p>`:""}
        </div>`).join("")}
    </section>`).join("");return`
${e!==void 0?`<h2 class="sec-title" id="${e}">${c(t.chapter)}</h2>`:`<h1>${t.stage}${t.grade} ${c(t.subject)} · ${c(t.chapter)}</h1>`}
<div class="meta">备课方案 / 课堂讲义 / 课后作业 / 课后反馈 ｜ 共 ${t.课后作业.reduce((a,s)=>a+s.questions.length,0)} 道习题</div>

<h2>一、备课方案</h2>
<div class="md">${u(t.备课方案)}</div>

<h2>二、课堂讲义</h2>
${Object.entries(r).map(([a,s])=>`
<h3>${c(a)}</h3>
<div class="md">${u(s)}</div>`).join("")}

<h2>三、课后作业</h2>
${n}

<h2>四、课后反馈</h2>
<div class="md">${u(t.课后反馈)}</div>`}function x(t,e,r){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${c(t)}</title>
<style>
${dt()}
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
.wm { position: fixed; bottom: 12px; right: 12px; color: rgba(0,0,0,.18); font-size: 11px; pointer-events: none; }
</style>
</head>
<body>
${e}
<footer>由「教师备课助手」生成 · 发布人：hzj · 数据来源于教案知识库</footer>
${r?`<div class="wm">${it}</div>`:""}
</body>
</html>`}function vt(t,e){const r=H(t);return x(`${t.stage}${t.grade}${t.subject}《${t.chapter}》备课资料`,r,e)}function jt(t,e,r){const n=`<div class="toc">
<h2>本册目录（共 ${t.length} 章）</h2>
<ol>${t.map((a,s)=>`<li><a href="#sec-${s}">${c(a.chapter)}</a></li>`).join("")}</ol>
</div>`,o=`
<h1>${c(r)}</h1>
<div class="meta">${t.length} 章完整教案 ｜ 备课方案 / 课堂讲义 / 课后作业 / 课后反馈 ｜ 共 ${t.reduce((a,s)=>a+s.课后作业.reduce((d,l)=>d+l.questions.length,0),0)} 道习题</div>
${n}
${t.map((a,s)=>H(a,`sec-${s}`)).join(`
`)}`;return x(r,o,e)}function Ht(t){const e=t.map(({lesson:n,index:o})=>`
<tr>
  <td><a href="#/lesson/${o}">${c(n.chapter)}</a></td>
  <td>${c(n.stage)}</td><td>${c(n.grade)}</td><td>${c(n.subject)}</td>
</tr>`).join(""),r=`
<h1>我的收藏 · 教案清单（${t.length} 章）</h1>
<div class="meta">点击章节名可跳转查看 ｜ 由「教师备课助手」生成 · 发布人：hzj</div>
<table>
<thead><tr><th>章节</th><th>学段</th><th>年级</th><th>学科</th></tr></thead>
<tbody>${e}</tbody>
</table>`;return x("我的收藏 · 教案清单",r,!1)}function St(t,e){const r=new Blob([e],{type:"text/html;charset=utf-8"}),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,n.click(),URL.revokeObjectURL(n.href)}const pt="d8f219c3e45512fce03ad82bf56c5cfd";let y=!1;function kt(){if(!(y||typeof document>"u")){y=!0;try{const t=document.createElement("script");t.async=!0,t.src=`https://hm.baidu.com/hm.js?${pt}`;const e=document.getElementsByTagName("script")[0];e&&e.parentNode&&e.parentNode.insertBefore(t,e),window._hmt=window._hmt||[]}catch{}}}function _t(t,e){try{if(!window._hmt)return;const r=e?Object.entries(e).map(([n,o])=>`${n}=${o}`).join("&"):"";window._hmt.push(["_trackEvent","wb",t,r])}catch{}}const S="wb-bookmarks",k=20,E={starred:[],progress:{},recent:[]};function Tt(){try{const t=localStorage.getItem(S);if(!t)return{...E};const e=JSON.parse(t);return{starred:Array.isArray(e.starred)?e.starred:[],progress:e.progress&&typeof e.progress=="object"?e.progress:{},recent:Array.isArray(e.recent)?e.recent.slice(0,k):[]}}catch{return{...E}}}function $(t){try{localStorage.setItem(S,JSON.stringify(t))}catch{}window.dispatchEvent(new CustomEvent("wb-bookmarks-changed"))}function zt(t,e){const r={...t,starred:t.starred.includes(e)?t.starred.filter(n=>n!==e):[e,...t.starred]};return $(r),r}function At(t,e,r){const n={...t,progress:{...t.progress,[String(e)]:r}};return $(n),n}function It(t,e){if(t.recent[0]===e)return t;const r={...t,recent:[e,...t.recent.filter(n=>n!==e)].slice(0,k)};return $(r),r}export{mt as A,ft as F,wt as M,jt as a,Ht as b,Et as c,St as d,$t as e,vt as f,at as g,xt as h,yt as i,st as j,kt as k,Tt as l,At as m,zt as n,It as p,b as r,bt as s,_t as t};
