/*! 教师备课助手 · 单词跟读插件 v1.0 | 纯前端 TTS，无依赖无后端 */
(function(){
  'use strict';
  if (window.__MB_TTS__) return;               // 防重复注入
  if (!('speechSynthesis' in window)) return;  // 浏览器不支持则静默退出
  window.__MB_TTS__ = true;

  var WORD_RE = /^[A-Za-z][A-Za-z'\u2019-]{0,30}$/;
  var pop = null, cur = '', hideTimer = null;

  function pickVoice(){
    var vs = speechSynthesis.getVoices(), i;
    for (i = 0; i < vs.length; i++) if (/en[-_]US/i.test(vs[i].lang)) return vs[i];
    for (i = 0; i < vs.length; i++) if (/^en/i.test(vs[i].lang)) return vs[i];
    return null;
  }
  function speak(text, rate){
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = rate; u.pitch = 1;
    var v = pickVoice(); if (v) u.voice = v;
    speechSynthesis.speak(u);
  }
  function btnCss(){ return 'border:0;background:#3a4256;color:#fff;border-radius:8px;padding:4px 8px;cursor:pointer;font-size:13px;line-height:1'; }
  function ensurePop(){
    if (pop) return pop;
    pop = document.createElement('div');
    pop.id = 'mb-tts-pop';
    pop.style.cssText = 'position:fixed;z-index:2147483647;display:none;background:#1f2430;color:#fff;border-radius:10px;padding:6px 8px;box-shadow:0 6px 24px rgba(0,0,0,.25);font-size:13px;gap:6px;align-items:center';
    var w = document.createElement('span');
    w.id = 'mb-tts-word';
    w.style.cssText = 'font-weight:600;margin-right:2px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap';
    var b1 = document.createElement('button'); b1.textContent = '\uD83D\uDD0A'; b1.title = '正常速度朗读'; b1.style.cssText = btnCss();
    var b2 = document.createElement('button'); b2.textContent = '\uD83D\uDC22'; b2.title = '慢速跟读（0.6x）'; b2.style.cssText = btnCss();
    var bx = document.createElement('button'); bx.textContent = '\u2715'; bx.title = '关闭'; bx.style.cssText = btnCss();
    b1.addEventListener('click', function(e){ e.stopPropagation(); speak(cur, 1); });
    b2.addEventListener('click', function(e){ e.stopPropagation(); speak(cur, 0.6); });
    bx.addEventListener('click', function(e){ e.stopPropagation(); hide(); });
    pop.appendChild(w); pop.appendChild(b1); pop.appendChild(b2); pop.appendChild(bx);
    document.body.appendChild(pop);
    return pop;
  }
  function show(word, x, y){
    cur = word;
    var p = ensurePop();
    p.querySelector('#mb-tts-word').textContent = word;
    p.style.display = 'flex';
    var r = p.getBoundingClientRect();
    var px = Math.min(x, window.innerWidth - r.width - 10);
    var py = y + 14;
    if (py + r.height > window.innerHeight - 10) py = y - r.height - 14;
    p.style.left = Math.max(8, px) + 'px';
    p.style.top  = Math.max(8, py) + 'px';
  }
  function hide(){ if (pop) pop.style.display = 'none'; }

  // 单击：命中"单词型元素"（英语内容常被 span/b/mark 等包裹）直接弹浮窗
  document.addEventListener('click', function(ev){
    var t = ev.target;
    if (pop && pop.contains(t)) return;
    var tag = t.tagName;
    var txt = (tag === 'SPAN' || tag === 'B' || tag === 'STRONG' || tag === 'EM' ||
               tag === 'MARK' || tag === 'A' || tag === 'TD' || tag === 'LI')
              ? (t.textContent || '').trim() : '';
    if (txt && WORD_RE.test(txt)) { show(txt, ev.clientX, ev.clientY); return; }
    var sel = String(window.getSelection ? window.getSelection() : '').trim();
    if (sel && WORD_RE.test(sel)) { show(sel, ev.clientX, ev.clientY); return; }
    hide();
  }, true);

  // 鼠标选中一个单词时弹浮窗（更贴合"划词跟读"习惯）
  document.addEventListener('mouseup', function(ev){
    if (pop && pop.contains(ev.target)) return;
    var selObj = window.getSelection ? window.getSelection() : null;
    if (!selObj || selObj.isCollapsed) return;
    var sel = String(selObj).trim();
    if (sel && WORD_RE.test(sel) && sel.split(/\s+/).length === 1) {
      var r = selObj.getRangeAt(0).getBoundingClientRect();
      show(sel, r.left, r.bottom);
    }
  });

  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') hide(); });

  // ===== 单词表：给"单词"列的每个单词旁插入 🔊 朗读按钮 =====
  // 单击 = 正常速度朗读；双击 = 慢速跟读（0.6x）。仅处理表头含"单词"的表格，且只认纯英文单词列。
  function enhanceWordTables(){
    var tables = document.querySelectorAll('table');
    for (var ti = 0; ti < tables.length; ti++){
      var tb = tables[ti];
      var ths = tb.querySelectorAll('th');
      var wordCol = -1;
      for (var i = 0; i < ths.length; i++){
        var h = (ths[i].textContent || '').trim();
        if (h === '单词' || h.indexOf('单词') >= 0 || /^words?$/i.test(h)) { wordCol = i; break; }
      }
      if (wordCol < 0) continue;
      var rows = tb.querySelectorAll('tbody tr');
      for (var r = 0; r < rows.length; r++){
        var tds = rows[r].querySelectorAll('td');
        if (tds.length <= wordCol) continue;
        var td = tds[wordCol];
        var w = (td.textContent || '').trim();
        if (!WORD_RE.test(w)) continue;                    // 只处理纯英文单词（短语/音标列自动跳过）
        if (td.querySelector('.mb-tts-inline')) continue;   // 已注入 → 幂等，避免重复插入
        var b = document.createElement('button');
        b.className = 'mb-tts-inline';
        b.type = 'button';
        b.textContent = '\uD83D\uDD0A';                     // 🔊
        b.title = '点击朗读（双击慢速跟读）';
        b.setAttribute('aria-label', '朗读 ' + w);
        b.style.cssText = 'border:0;background:transparent;cursor:pointer;font-size:12px;padding:0 2px;margin-left:4px;line-height:1;vertical-align:middle;opacity:.6';
        b.addEventListener('click', (function(word){
          return function(e){ e.stopPropagation(); e.preventDefault(); speak(word, 1); };
        })(w));
        td.appendChild(b);
      }
    }
  }
  // 双击喇叭 = 慢速跟读
  document.addEventListener('dblclick', function(e){
    var t = e.target;
    if (t && t.className === 'mb-tts-inline'){
      var td = t.parentNode;
      var w = (td.textContent || '').replace(/\uD83D\uDD0A/g, '').trim();
      e.stopPropagation(); e.preventDefault();
      speak(w, 0.6);
    }
  }, true);

  // 首次执行 + SPA 动态渲染后补注入（MutationObserver 防抖 250ms）
  enhanceWordTables();
  if (window.MutationObserver) {
    var _wt = null;
    new MutationObserver(function(){
      if (_wt) clearTimeout(_wt);
      _wt = setTimeout(enhanceWordTables, 250);
    }).observe(document.body, { childList: true, subtree: true });
  }
  window.addEventListener('DOMContentLoaded', enhanceWordTables);

  try { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = function(){}; } catch(e){}
})();
