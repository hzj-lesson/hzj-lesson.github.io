import{j as k,a as T,b as _,c as z,d as M,e as A,f as O,g as R,h as I,i as C,k as L,l as N,p as P,m as q,n as B,o as F,q as K,s as U,r as W,t as Y,u as D,v as J,w as X,x as Z,y as G,z as V,A as Q,B as tt}from"./lesson-data-B8K0U9Ag.js";import{j as et}from"./react-vendor-Ds7D3P6J.js";import{k as rt,a as nt}from"./katex-BMTrKmI6.js";const gt=[...k,...T,..._,...z,...M,...A,...O,...R,...I,...C,...L,...N,...P,...q,...B,...F,...K,...U,...W,...Y,...D,...J,...X,...Z,...G,...V,...Q,...tt],y="wb-tier",ut=3,mt=2,ft=10;function ot(){try{return localStorage.getItem(y)==="pro"?"pro":"free"}catch{return"free"}}function xt(t){try{localStorage.setItem(y,t)}catch{}}const $t=()=>ot()==="pro";function st(){try{const t=new Date().toISOString().slice(0,10),e=localStorage.getItem("wb-export-count");if(!e)return 0;const r=JSON.parse(e);return r.date===t?r.count:0}catch{return 0}}function bt(){const t=new Date().toISOString().slice(0,10),e=st()+1;try{localStorage.setItem("wb-export-count",JSON.stringify({date:t,count:e}))}catch{}return e}const at="由「教师备课助手」免费版生成 · 开通会员解锁完整导出";function w(t){return t.replace(/\\\\([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]/g,"")}function u(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function v(t){let e="",r=!1;for(let n=0;n<t.length;n++){const o=t[n];if(o==="$"){r=!r,e+=o;continue}if(!r&&o==="\\"&&t[n+1]==="n"){e+=`
`,n++;continue}e+=o}return e}function b(t){if(!t)return"";const e=w(v(String(t))),r=[];let n=e.replace(/\$([^$\n]+?)\$/g,(a,s)=>`@@MATH${r.push(s.trim())-1}@@`),o=u(n).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>");return o=o.replace(/@@MATH(\d+)@@/g,(a,s)=>f(r[+s],!1)),o}function f(t,e){try{return rt.renderToString(t,{displayMode:e,throwOnError:!1,strict:!1,trust:!0,output:"html"})}catch{return e?`<div class="plain-formula">${t}</div>`:`<code class="inline-math">${t}</code>`}}function m(t){return u(t).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br>")}function it(t){const e=t.map(a=>a.replace(/^\||\|$/g,"").split("|").map(s=>s.trim())),r=e[0],n=e.slice(2);let o="<table><thead><tr>";return r.forEach(a=>{o+=`<th>${m(a)}</th>`}),o+="</tr></thead><tbody>",n.forEach(a=>{o+="<tr>",a.forEach(s=>{o+=`<td>${m(s)}</td>`}),o+="</tr>"}),o+"</tbody></table>"}function ct(t){const e=t.map(o=>{const a=o.match(/^(\s*)[-*•]\s+(.*)$/);return{level:Math.floor(((a==null?void 0:a[1].length)??0)/2),content:(a==null?void 0:a[2])??""}});let r="<ul>",n=0;for(e.forEach(o=>{for(;n>o.level;)r+="</ul>",n--;o.level>n&&(r+="<ul>",n++),r+=`<li>${m(o.content)}</li>`});n>0;)r+="</ul>",n--;return r+="</ul>",r}function g(t){if(!t)return'<p class="empty-md">（暂无内容）</p>';const e=w(v(String(t))).replace(/\r\n/g,`
`),r=[];let n=e.replace(/\$\$([\s\S]+?)\$\$/g,(l,d)=>`
@@TOKEN${r.push({type:"block",tex:d.trim()})-1}@@
`);n=n.replace(/\$([^$\n]+?)\$/g,(l,d)=>`@@TOKEN${r.push({type:"inline",tex:d.trim()})-1}@@`),n=n.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(l,d,i)=>`@@TOKEN${r.push({type:"img",alt:d,src:i})-1}@@`);const o=n.split(`
`),a=[];let s=0;for(;s<o.length;){const l=o[s],d=l.trim();if(!d){s++;continue}if(d.startsWith("|")&&s+1<o.length&&/^\s*\|?[\s:|-]+\|?\s*$/.test(o[s+1])&&o[s+1].includes("-")){const h=[];for(;s<o.length&&o[s].trim().startsWith("|");)h.push(o[s].trim()),s++;a.push(it(h));continue}if(/^\s*[-*•]\s+/.test(l)){const h=[];for(;s<o.length&&/^\s*[-*•]\s+/.test(o[s]);)h.push(o[s]),s++;a.push(ct(h));continue}const i=[l];for(s++;s<o.length&&o[s].trim()&&!/^\s*[-*•]\s+/.test(o[s])&&!o[s].trim().startsWith("|");)i.push(o[s]),s++;a.push(`<p>${m(i.join(`
`))}</p>`)}let p=a.join(`
`);return p=p.replace(/@@TOKEN(\d+)@@/g,(l,d)=>{const i=r[+d];return i.type==="img"?`<img src="${u(i.src??"")}" alt="${u(i.alt??"")}" loading="lazy">`:i.type==="block"?`<div class="katex-display">${f(i.tex??"",!0)}</div>`:f(i.tex??"",!1)}),p}const Et=({source:t,className:e})=>et.jsx("div",{className:`md ${e??""}`,dangerouslySetInnerHTML:{__html:g(t)}});function c(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function lt(){return nt.replace(/url\(\/assets\/(KaTeX_[A-Za-z0-9_-]+)-[A-Za-z0-9_-]+\.(woff2|woff|ttf)\)/g,"url(https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/fonts/$1.$2)")}function j(t,e){const r=t.课堂讲义,n=t.课后作业.map((a,s)=>`
    <section class="hw-group">
      <h3>${a.difficulty}档 · ${c(a.title)}（${a.questions.length} 题）</h3>
      ${a.questions.map((p,l)=>`
        <div class="hw-item">
          <p class="hw-q">${l+1}. ${b(p.q)}</p>
          ${p.a?`<p class="hw-a">【参考答案】${b(p.a)}</p>`:""}
        </div>`).join("")}
    </section>`).join("");return`
${e!==void 0?`<h2 class="sec-title" id="${e}">${c(t.chapter)}</h2>`:`<h1>${t.stage}${t.grade} ${c(t.subject)} · ${c(t.chapter)}</h1>`}
<div class="meta">备课方案 / 课堂讲义 / 课后作业 / 课后反馈 ｜ 共 ${t.课后作业.reduce((a,s)=>a+s.questions.length,0)} 道习题</div>

<h2>一、备课方案</h2>
<div class="md">${g(t.备课方案)}</div>

<h2>二、课堂讲义</h2>
${Object.entries(r).map(([a,s])=>`
<h3>${c(a)}</h3>
<div class="md">${g(s)}</div>`).join("")}

<h2>三、课后作业</h2>
${n}

<h2>四、课后反馈</h2>
<div class="md">${g(t.课后反馈)}</div>`}function x(t,e,r){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${c(t)}</title>
<style>
${lt()}
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
${r?`<div class="wm">${at}</div>`:""}
</body>
</html>`}function yt(t,e){const r=j(t);return x(`${t.stage}${t.grade}${t.subject}《${t.chapter}》备课资料`,r,e)}function wt(t,e,r){const n=`<div class="toc">
<h2>本册目录（共 ${t.length} 章）</h2>
<ol>${t.map((a,s)=>`<li><a href="#sec-${s}">${c(a.chapter)}</a></li>`).join("")}</ol>
</div>`,o=`
<h1>${c(r)}</h1>
<div class="meta">${t.length} 章完整教案 ｜ 备课方案 / 课堂讲义 / 课后作业 / 课后反馈 ｜ 共 ${t.reduce((a,s)=>a+s.课后作业.reduce((p,l)=>p+l.questions.length,0),0)} 道习题</div>
${n}
${t.map((a,s)=>j(a,`sec-${s}`)).join(`
`)}`;return x(r,o,e)}function vt(t){const e=t.map(({lesson:n,index:o})=>`
<tr>
  <td><a href="#/lesson/${o}">${c(n.chapter)}</a></td>
  <td>${c(n.stage)}</td><td>${c(n.grade)}</td><td>${c(n.subject)}</td>
</tr>`).join(""),r=`
<h1>我的收藏 · 教案清单（${t.length} 章）</h1>
<div class="meta">点击章节名可跳转查看 ｜ 由「教师备课助手」生成 · 发布人：hzj</div>
<table>
<thead><tr><th>章节</th><th>学段</th><th>年级</th><th>学科</th></tr></thead>
<tbody>${e}</tbody>
</table>`;return x("我的收藏 · 教案清单",r,!1)}function jt(t,e){const r=new Blob([e],{type:"text/html;charset=utf-8"}),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,n.click(),URL.revokeObjectURL(n.href)}function Ht(t,e){try{if(!window._hmt)return;const r=e?Object.entries(e).map(([n,o])=>`${n}=${o}`).join("&"):"";window._hmt.push(["_trackEvent","wb",t,r])}catch{}}const H="wb-bookmarks",S=20,E={starred:[],progress:{},recent:[]};function St(){try{const t=localStorage.getItem(H);if(!t)return{...E};const e=JSON.parse(t);return{starred:Array.isArray(e.starred)?e.starred:[],progress:e.progress&&typeof e.progress=="object"?e.progress:{},recent:Array.isArray(e.recent)?e.recent.slice(0,S):[]}}catch{return{...E}}}function $(t){try{localStorage.setItem(H,JSON.stringify(t))}catch{}window.dispatchEvent(new CustomEvent("wb-bookmarks-changed"))}function kt(t,e){const r={...t,starred:t.starred.includes(e)?t.starred.filter(n=>n!==e):[e,...t.starred]};return $(r),r}function Tt(t,e,r){const n={...t,progress:{...t.progress,[String(e)]:r}};return $(n),n}function _t(t,e){if(t.recent[0]===e)return t;const r={...t,recent:[e,...t.recent.filter(n=>n!==e)].slice(0,S)};return $(r),r}export{gt as A,ut as F,Et as M,wt as a,vt as b,bt as c,jt as d,ft as e,yt as f,st as g,mt as h,$t as i,ot as j,Tt as k,St as l,kt as m,_t as p,b as r,xt as s,Ht as t};
