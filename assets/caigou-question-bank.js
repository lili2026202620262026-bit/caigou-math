(() => {
  const config = window.CaigouBankConfig;
  const questions = window.CaigouBankQuestions || [];
  if (!config || !questions.length) throw new Error('题库配置或题目数据缺失');
  const esc = value => window.CaigouRichSolution.escapeHtml(value);
  document.title = `菜狗捞捞 · ${config.title}`;
  document.body.innerHTML = `<header class="top"><div class="brand"><i>菜</i>菜狗捞捞</div><div class="term">${esc(config.title)}</div></header><main><section class="hero"><div><div class="eyebrow">${esc(config.eyebrow)}</div><h1>${config.heading}</h1><p>${esc(config.description)}</p></div><div class="score"><b id="score">0 / ${questions.length}</b><span>已完成</span></div></section><section class="progress"><div class="progress-head"><b id="progress-title">复习刚开始</b><span id="progress-copy">第 1 题 · 已完成 0 / ${questions.length}</span></div><div class="track"><i id="bar"></i></div></section><article class="question-card" id="card"></article><nav class="pager"><button class="nav-btn" id="prev">← 上一题</button><span class="pager-status" id="pager-status"></span><button class="nav-btn" id="next">下一题 →</button></nav></main><aside class="pet" id="pet"><div class="bubble" id="bubble">先拿下第一题吧！</div><div class="frame"><img class="sprite" src="assets/caigou-drowning-states.png" alt="随答题进度获救的四足菜狗"></div><div class="pet-label" id="pet-label">溺水中</div></aside>`;
  const fresh = {current:0,done:{},chosen:{}};
  let state;
  try { state = {...fresh,...JSON.parse(localStorage.getItem(config.storageKey) || 'null')}; } catch { state = fresh; }
  state.current = Math.max(0,Math.min(questions.length-1,Number(state.current)||0));
  state.done = state.done && typeof state.done === 'object' ? state.done : {};
  state.chosen = state.chosen && typeof state.chosen === 'object' ? state.chosen : {};
  const $ = id => document.getElementById(id);
  const save = () => localStorage.setItem(config.storageKey,JSON.stringify(state));
  const countDone = () => questions.filter(q => state.done[q.no]).length;
  function sync(){const n=countDone(),stage=n===questions.length?3:n>=Math.ceil(questions.length*.65)?2:n>=1?1:0;const title=['复习刚开始','菜狗冒泡中','快到岸边了','期末过关，菜狗上岸！'],bubble=['先拿下第一题吧！','不错，菜狗露头啦！','再坚持一下，岸边很近！','全部完成，安全上岸！'],label=['溺水中','冒泡中','快上岸了','捞出来啦'];$('score').textContent=`${n} / ${questions.length}`;$('progress-title').textContent=title[stage];$('progress-copy').textContent=`第 ${state.current+1} 题 · 已完成 ${n} / ${questions.length}`;$('bar').style.width=`${n/questions.length*100}%`;$('bubble').textContent=bubble[stage];$('pet-label').textContent=`${label[stage]} · ${n} / ${questions.length}`;$('pet').style.setProperty('--offset',`${-25*stage}%`);$('pet').classList.toggle('done',n===questions.length)}
  function options(q){
    if (!(q.options||[]).length) return '';
    if (!config.choiceMode) return `<div class="options">${q.options.map((o,i)=>`<div class="option">${String.fromCharCode(65+i)}. ${esc(o)}</div>`).join('')}</div>`;
    return `<div class="options choice-options">${q.options.map((o,i)=>{const letter=String.fromCharCode(65+i),selected=state.chosen[q.no]===letter;return `<label class="option choice-option${selected?' selected':''}"><input type="radio" name="choice" value="${letter}"${selected?' checked':''}><span class="choice-letter">${letter}</span><span>${esc(o)}</span></label>`}).join('')}</div>`;
  }
  function sourceMeta(q){
    const solution=q.solution||{},level=q.sourceLevel||solution.sourceLevel,note=q.sourceNote||solution.sourceNote;
    if(!level&&!note)return '';
    return `<div class="source-meta">${level?`<span class="source-level">${esc(level)}</span>`:''}${note?`<small>${esc(note)}</small>`:''}</div>`;
  }
  function material(q){
    if(!q.material)return '';
    return `<details class="source-material" open><summary>${esc(q.material.title||'题组原文')}</summary><div class="material-copy">${esc(q.material.text||'')}</div></details>`;
  }
  function render(message=''){
    const q=questions[state.current],isChoice=Boolean(config.choiceMode&&(q.options||[]).length),long=!['选择题','填空题'].includes(q.type);
    const editor=isChoice?`<div class="answer-label choice-prompt">先选择一个答案，再提交本题</div>`:`<label class="answer-label" for="draft">先写下你的答案或关键步骤</label><textarea class="draft${long?'':' short'}" id="draft" placeholder="提交后才计入完成进度；解析默认隐藏。"></textarea>`;
    $('card').className=`question-card${state.done[q.no]?' done':''}`;
    $('card').innerHTML=`<div class="q-head"><div class="q-index"><span class="num">${String(q.no).padStart(2,'0')}</span><span class="kind">${esc(q.type)}</span></div>${sourceMeta(q)}</div>${material(q)}<div class="question-text">${esc(q.text)}${options(q)}</div><div class="answer-zone">${editor}<div class="actions"><button class="primary" onclick="submitCurrent()">提交本题</button><button class="ghost" onclick="reveal()">查看解析</button><span class="feedback" id="feedback">${esc(message)}</span></div><div class="solution" id="solution">${window.CaigouRichSolution.render(q.solution,q.answer)}</div></div>`;
    if(isChoice){$('card').querySelectorAll('input[name="choice"]').forEach(input=>input.addEventListener('change',e=>{state.chosen[q.no]=e.target.value;save();$('card').querySelectorAll('.choice-option').forEach(label=>label.classList.toggle('selected',label.contains(e.target))) }))}else{$('draft').value=state.chosen[q.no]||'';$('draft').addEventListener('input',e=>{state.chosen[q.no]=e.target.value;save()})}
    $('prev').disabled=state.current===0;$('next').disabled=state.current===questions.length-1;$('pager-status').textContent=`${String(state.current+1).padStart(2,'0')} / ${String(questions.length).padStart(2,'0')}`;sync();window.CaigouMath?.render($('card'))
  }
  function go(i){state.current=Math.max(0,Math.min(questions.length-1,Number(i)||0));save();render();scrollTo({top:0,behavior:'smooth'})}
  function submitCurrent(){const q=questions[state.current];if(!(state.chosen[q.no]||'').trim())return alert(config.choiceMode&&(q.options||[]).length?'请先选择一个答案。':'先写下一点答案或思路吧。');state.done[q.no]=true;save();render('已提交，本题计入完成进度；解析仍保持隐藏。')}
  function reveal(){const panel=$('solution');panel.classList.add('show');$('feedback').textContent='参考解析已展开。';window.CaigouMath?.render(panel)}
  $('prev').addEventListener('click',()=>go(state.current-1));$('next').addEventListener('click',()=>go(state.current+1));window.go=go;window.reveal=reveal;window.submitCurrent=submitCurrent;render();
})();
