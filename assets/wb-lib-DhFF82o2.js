import{j as _,a as z,b as M,c as A,d as I,e as R,f as N,g as C,h as O,i as L,k as B,l as P,p as F,m as q,n as K,o as D,q as U,s as Y,r as W,t as J,u as X,v as Z,w as G,x as V,y as Q,z as tt,A as et,B as rt}from"./lesson-data-d31OQ4HG.js";import{j as nt}from"./react-vendor-Ds7D3P6J.js";import{k as ot,a as st}from"./katex-BMTrKmI6.js";const ft=[..._,...z,...M,...A,...I,...R,...N,...C,...O,...L,...B,...P,...F,...q,...K,...D,...U,...Y,...W,...J,...X,...Z,...G,...V,...Q,...tt,...et,...rt],w="wb-tier",xt=3,$t=2,bt=10;function at(){try{return localStorage.getItem(w)==="pro"?"pro":"free"}catch{return"free"}}function yt(t){try{localStorage.setItem(w,t)}catch{}}const Et=()=>at()==="pro";function j(){const t=new Date,e=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${t.getFullYear()}-${e}-${r}`}function it(){try{const t=j(),e=localStorage.getItem("wb-export-count");if(!e)return 0;const r=JSON.parse(e);if(!r||typeof r!="object"||r.date!==t)return 0;const o=Number(r.count);return Number.isFinite(o)&&o>=0?o:0}catch{return 0}}function wt(){const t=j(),e=it()+1;try{localStorage.setItem("wb-export-count",JSON.stringify({date:t,count:e}))}catch{}return e}const ct="由「教师备课助手」免费版生成 · 开通会员解锁完整导出";function v(t){return t.replace(/\\\\([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]([A-Za-z])/g,"\\$1").replace(/[\x08\x0B\x0C]/g,"")}function g(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function H(t){let e="",r=!1;for(let o=0;o<t.length;o++){const n=t[o];if(n==="$"){r=!r,e+=n;continue}if(!r&&n==="\\"&&t[o+1]==="n"){e+=`
`,o++;continue}e+=n}return e}function b(t){if(!t)return"";const e=v(H(String(t))),r=[];let o=e.replace(/\$([^$\n]+?)\$/g,(a,s)=>`@@MATH${r.push(s.trim())-1}@@`),n=g(o).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>");return n=n.replace(/@@MATH(\d+)@@/g,(a,s)=>f(r[+s],!1)),n}function f(t,e){try{return ot.renderToString(t,{displayMode:e,throwOnError:!1,strict:!1,trust:!0,output:"html"})}catch{return e?`<div class="plain-formula">${t}</div>`:`<code class="inline-math">${t}</code>`}}function m(t){return g(t).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br>")}function lt(t){const e=t.map(a=>a.replace(/^\||\|$/g,"").split("|").map(s=>s.trim())),r=e[0],o=e.slice(2);let n="<table><thead><tr>";return r.forEach(a=>{n+=`<th>${m(a)}</th>`}),n+="</tr></thead><tbody>",o.forEach(a=>{n+="<tr>",a.forEach(s=>{n+=`<td>${m(s)}</td>`}),n+="</tr>"}),n+"</tbody></table>"}function dt(t){const e=t.map(n=>{const a=n.match(/^(\s*)[-*•]\s+(.*)$/);return{level:Math.floor(((a==null?void 0:a[1].length)??0)/2),content:(a==null?void 0:a[2])??""}});let r="<ul>",o=0;for(e.forEach(n=>{for(;o>n.level;)r+="</ul>",o--;n.level>o&&(r+="<ul>",o++),r+=`<li>${m(n.content)}</li>`});o>0;)r+="</ul>",o--;return r+="</ul>",r}function u(t){if(!t)return'<p class="empty-md">（暂无内容）</p>';const e=v(H(String(t))).replace(/\r\n/g,`
`),r=[];let o=e.replace(/\$\$([\s\S]+?)\$\$/g,(l,p)=>`
@@TOKEN${r.push({type:"block",tex:p.trim()})-1}@@
`);o=o.replace(/\$([^$\n]+?)\$/g,(l,p)=>`@@TOKEN${r.push({type:"inline",tex:p.trim()})-1}@@`),o=o.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,(l,p,i)=>`@@TOKEN${r.push({type:"img",alt:p,src:i})-1}@@`);const n=o.split(`
`),a=[];let s=0;for(;s<n.length;){const l=n[s],p=l.trim();if(!p){s++;continue}if(p.startsWith("|")&&s+1<n.length&&/^\s*\|?[\s:|-]+\|?\s*$/.test(n[s+1])&&n[s+1].includes("-")){const h=[];for(;s<n.length&&n[s].trim().startsWith("|");)h.push(n[s].trim()),s++;a.push(lt(h));continue}if(/^\s*[-*•]\s+/.test(l)){const h=[];for(;s<n.length&&/^\s*[-*•]\s+/.test(n[s]);)h.push(n[s]),s++;a.push(dt(h));continue}const i=[l];for(s++;s<n.length&&n[s].trim()&&!/^\s*[-*•]\s+/.test(n[s])&&!n[s].trim().startsWith("|");)i.push(n[s]),s++;a.push(`<p>${m(i.join(`
`))}</p>`)}let d=a.join(`
`);return d=d.replace(/@@TOKEN(\d+)@@/g,(l,p)=>{const i=r[+p];return i.type==="img"?`<img src="${g(i.src??"")}" alt="${g(i.alt??"")}" loading="lazy">`:i.type==="block"?`<div class="katex-display">${f(i.tex??"",!0)}</div>`:f(i.tex??"",!1)}),d}const jt=({source:t,className:e})=>nt.jsx("div",{className:`md ${e??""}`,dangerouslySetInnerHTML:{__html:u(t)}});function c(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function pt(){return st.replace(/url\(\/assets\/(KaTeX_[A-Za-z0-9_-]+)-[A-Za-z0-9_-]+\.(woff2|woff|ttf)\)/g,"url(https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/fonts/$1.$2)")}function S(t,e){const r=t.课堂讲义,o=t.课后作业.map((a,s)=>`
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
${o}

<h2>四、课后反馈</h2>
<div class="md">${u(t.课后反馈)}</div>`}function x(t,e,r){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${c(t)}</title>
<style>
${pt()}
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
${r?`<div class="wm">${ct}</div>`:""}
</body>
</html>`}function vt(t,e){const r=S(t);return x(`${t.stage}${t.grade}${t.subject}《${t.chapter}》备课资料`,r,e)}function Ht(t,e,r){const o=`<div class="toc">
<h2>本册目录（共 ${t.length} 章）</h2>
<ol>${t.map((a,s)=>`<li><a href="#sec-${s}">${c(a.chapter)}</a></li>`).join("")}</ol>
</div>`,n=`
<h1>${c(r)}</h1>
<div class="meta">${t.length} 章完整教案 ｜ 备课方案 / 课堂讲义 / 课后作业 / 课后反馈 ｜ 共 ${t.reduce((a,s)=>a+s.课后作业.reduce((d,l)=>d+l.questions.length,0),0)} 道习题</div>
${o}
${t.map((a,s)=>S(a,`sec-${s}`)).join(`
`)}`;return x(r,n,e)}function St(t){const e=t.map(({lesson:o,index:n})=>`
<tr>
  <td><a href="#/lesson/${n}">${c(o.chapter)}</a></td>
  <td>${c(o.stage)}</td><td>${c(o.grade)}</td><td>${c(o.subject)}</td>
</tr>`).join(""),r=`
<h1>我的收藏 · 教案清单（${t.length} 章）</h1>
<div class="meta">点击章节名可跳转查看 ｜ 由「教师备课助手」生成 · 发布人：hzj</div>
<table>
<thead><tr><th>章节</th><th>学段</th><th>年级</th><th>学科</th></tr></thead>
<tbody>${e}</tbody>
</table>`;return x("我的收藏 · 教案清单",r,!1)}function kt(t,e){const r=new Blob([e],{type:"text/html;charset=utf-8"}),o=URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}const ht="d8f219c3e45512fce03ad82bf56c5cfd";let y=!1;function Tt(){if(!(y||typeof document>"u")){y=!0;try{const t=document.createElement("script");t.async=!0,t.src=`https://hm.baidu.com/hm.js?${ht}`;const e=document.getElementsByTagName("script")[0];e&&e.parentNode&&e.parentNode.insertBefore(t,e),window._hmt=window._hmt||[]}catch{}}}function _t(t,e){try{if(!window._hmt)return;const r=e?Object.entries(e).map(([o,n])=>`${o}=${n}`).join("&"):"";window._hmt.push(["_trackEvent","wb",t,r])}catch{}}const k="wb-bookmarks",T=20,E={starred:[],progress:{},recent:[]};function zt(){try{const t=localStorage.getItem(k);if(!t)return{...E};const e=JSON.parse(t);return{starred:Array.isArray(e.starred)?e.starred:[],progress:e.progress&&typeof e.progress=="object"?e.progress:{},recent:Array.isArray(e.recent)?e.recent.slice(0,T):[]}}catch{return{...E}}}function $(t){try{localStorage.setItem(k,JSON.stringify(t))}catch{}window.dispatchEvent(new CustomEvent("wb-bookmarks-changed"))}function Mt(t,e){const r={...t,starred:t.starred.includes(e)?t.starred.filter(o=>o!==e):[e,...t.starred]};return $(r),r}function At(t,e,r){const o={...t,progress:{...t.progress,[String(e)]:r}};return $(o),o}function It(t,e){if(t.recent[0]===e)return t;const r={...t,recent:[e,...t.recent.filter(o=>o!==e)].slice(0,T)};return $(r),r}export{ft as A,xt as F,jt as M,Ht as a,St as b,wt as c,kt as d,bt as e,vt as f,it as g,$t as h,Et as i,at as j,Tt as k,zt as l,Mt as m,At as n,It as p,b as r,yt as s,_t as t};
