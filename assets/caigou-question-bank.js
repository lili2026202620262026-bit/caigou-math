(() => {
  const config = window.CaigouBankConfig;
  const questions = window.CaigouBankQuestions || [];
  if (!config || !questions.length) throw new Error('题库配置或题目数据缺失');

  const esc = value => window.CaigouRichSolution.escapeHtml(value);
  document.title = `菜狗捞捞 · ${config.title}`;
  document.body.innerHTML = `
    <header class="top">
      <div class="brand"><i>菜</i>菜狗捞捞</div>
      <div class="term">${esc(config.title)}</div>
    </header>
    <main>
      <section class="hero">
        <div>
          <div class="eyebrow">${esc(config.eyebrow)}</div>
          <h1><span style="background:linear-gradient(transparent 64%,#d6efaa 0);-webkit-box-decoration-break:clone;box-decoration-break:clone">${esc(config.title.split('·')[0].trim())}</span></h1>
          <p>${esc(config.description)}</p>
        </div>
      </section>
      <section class="progress">
        <div class="progress-head"><b id="progress-title">复习刚开始</b><span id="progress-copy">第 1 题 · 已完成 0 / ${questions.length}</span></div>
        <div class="track"><i id="bar"></i></div>
      </section>
      <article class="question-card" id="card"></article>
      <nav class="pager" aria-label="题目翻页">
        <button class="nav-btn" id="prev">← 上一题</button>
        <button class="pager-status" id="jump-trigger" type="button" aria-haspopup="dialog" aria-controls="question-picker">第 1 / ${questions.length} 题</button>
        <button class="nav-btn" id="next">下一题 →</button>
      </nav>
    </main>
    <aside class="pet" id="pet">
      <div class="frame"><img class="sprite" src="assets/caigou-drowning-states.png" alt="随答题进度获救的四足菜狗"></div>
      <div class="pet-label" id="pet-label">溺水中</div>
    </aside>
    <dialog class="question-picker" id="question-picker" aria-labelledby="picker-title">
      <div class="picker-head"><div><b id="picker-title">跳转到任意题</b><span>✓ 正确　× 错误　↻ 待复习　☆ 自评掌握　• 已完成</span></div><button type="button" class="picker-close" id="picker-close" aria-label="关闭题号选择">×</button></div>
      <div class="picker-grid" id="picker-grid"></div>
    </dialog>`;

  let practiceIndices = null;
  let topicView = null;
  const visibleIndices = () => practiceIndices || questions.map((_, i) => i);

  const fresh = { current: 0, done: {}, chosen: {}, results: {} };
  let state;
  try {
    let saved=JSON.parse(localStorage.getItem(config.storageKey) || 'null');
    if(!saved){
      const legacy={
        'placement-2024':['caigou-placement-done','caigou-placement-chosen','caigou-placement-current'],
        'math-analysis-a-midterm':['caigou-maa-midterm-done','caigou-maa-midterm-draft'],
        'math-analysis-b-final':['caigou-mab-final-done','caigou-mab-final-draft'],
        'computer-intro':['caigou-cs-done','caigou-cs-draft']
      }[config.bankId];
      if(legacy)saved={done:JSON.parse(localStorage.getItem(legacy[0])||'{}'),chosen:JSON.parse(localStorage.getItem(legacy[1])||'{}'),current:legacy[2]?Number(localStorage.getItem(legacy[2])||0):0};
    }
    state = { ...fresh, ...saved };
  } catch {
    state = fresh;
  }
  state.current = Math.max(0, Math.min(questions.length - 1, Number(state.current) || 0));
  state.done = state.done && typeof state.done === 'object' ? state.done : {};
  state.chosen = state.chosen && typeof state.chosen === 'object' ? state.chosen : {};
  state.results = state.results && typeof state.results === 'object' ? state.results : {};

  const $ = id => document.getElementById(id);
  const save = () => localStorage.setItem(config.storageKey, JSON.stringify(state));
  const countDone = () => questions.filter(q => state.done[q.no]).length;
  const statusNames = {correct:'正确',wrong:'错误',review:'待复习',mastered:'自评掌握'};
  const statusMarks = {correct:'✓',wrong:'×',review:'↻',mastered:'☆'};

  // Only unambiguous option keys are graded; explanatory answers use self-check.
  function choiceKey(q) {
    if (q.grading === 'manual') return null;
    const opts = q.options || [];
    const raw = String(q.answer || '').trim();
    if (/^[A-Z](?:[\s,，、]*[A-Z])*$/.test(raw)) {
      const letters = [...new Set(raw.replace(/[\s,，、]/g,'').split(''))].sort();
      if (letters.every(l => l.charCodeAt(0)-65 < opts.length)) return letters;
    }
    if (/判断/.test(q.type)) {
      const booleanValue = v => /^(正确|对|是|T|True|√|✓)([（(][√✓][）)])?$/i.test(v.trim()) ? true : /^(错误|错|否|F|False|×|✗)([（(][×✗][）)])?$/i.test(v.trim()) ? false : null;
      const value = booleanValue(raw);
      if (value !== null) {
        const matches = opts.map((o,i)=>booleanValue(String(o)) === value ? String.fromCharCode(65+i) : null).filter(Boolean);
        if (matches.length === 1) return matches;
      }
    }
    return null;
  }
  const multiChoice = q => /多选|多项/.test(q.type) || (choiceKey(q)?.length || 0) > 1;
  const selection = q => /^[A-Z]+$/.test(String(state.chosen[q.no] || '')) ? String(state.chosen[q.no]).split('') : [];

  // Exact rational arithmetic: no eval, floating-point tolerance, or keyword scoring.
  function rational(value) {
    let s=String(value).trim().replace(/\\[()[\]]/g,'').replace(/\\(?:displaystyle|textstyle)/g,'').replace(/−/g,'-').replace(/\s+/g,'');
    s=s.replace(/\\(?:d?frac)\{([+-]?\d+)\}\{([+-]?\d+)\}/g,'$1/$2').replace(/\\(?:d?frac)(\d)(\d)/g,'$1/$2');
    if(s.length>120) return null;
    if(/^[+-]?\d+\/[+-]?\d+$/.test(s)){const [n,d]=s.split('/').map(BigInt);return d===0n?null:[n,d];}
    if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s)) return null;
    const sign=s.startsWith('-')?-1n:1n; s=s.replace(/^[+-]/,'');
    const [whole,part='']=s.split('.');return [sign*BigInt((whole||'0')+part),10n**BigInt(part.length)];
  }
  function clearResult(q) {
    delete state.results[q.no];
    $('feedback').textContent=''; $('feedback').className='feedback';
    $('self-check').hidden=true;
    document.querySelectorAll('.checked-wrong,.checked-correct').forEach(el=>el.classList.remove('checked-wrong','checked-correct'));
    save(); syncPicker();
  }
  function showFeedback(q, message='') {
    const result=state.results[q.no];
    $('feedback').textContent=message || ({correct:'✓ 回答正确',wrong:'× 回答不正确，可以再试一次',review:'↻ 已记录：还需复习',mastered:'☆ 已记录：自评掌握'}[result] || '');
    $('feedback').className=`feedback ${result || ''}`;
    if(result==='wrong'||result==='correct') document.querySelectorAll('.choice-option.selected').forEach(el=>el.classList.add(result==='wrong'?'checked-wrong':'checked-correct'));
  }

  function syncPicker() {
    $('picker-grid').innerHTML = visibleIndices().map(index => {
      const q = questions[index];
      const classes = ['picker-number'];
      if (state.done[q.no]) classes.push('done');
      if (index === state.current) classes.push('current');
      const result=state.results[q.no];
      if(result) classes.push(result);
      return `<button type="button" class="${classes.join(' ')}" onclick="go(${index})" aria-label="第 ${esc(q.no)} 题，${statusNames[result] || (state.done[q.no]?'已完成':'未核对')}"${index === state.current ? ' aria-current="true"' : ''}>${esc(q.no)}<small>${statusMarks[result] || (state.done[q.no]?'•':'')}</small></button>`;
    }).join('');
  }

  function sync() {
    const n = countDone();
    const stage = n === questions.length ? 3 : n >= Math.ceil(questions.length * .65) ? 2 : n >= 1 ? 1 : 0;
    const title = ['复习刚开始', '菜狗冒泡中', '快到岸边了', '期末过关，菜狗上岸！'];
    const label = ['溺水中', '冒泡中', '快上岸了', '捞出来啦'];
    $('progress-title').textContent = title[stage];
    $('progress-copy').textContent = `第 ${state.current + 1} 题 · 已完成 ${n} / ${questions.length}`;
    $('bar').style.width = `${n / questions.length * 100}%`;
    $('pet-label').textContent = `${label[stage]} · ${n} / ${questions.length}`;
    $('pet').style.setProperty('--offset', `${-25 * stage}%`);
    $('pet').classList.toggle('done', n === questions.length);
    $('card').classList.toggle('done',Boolean(state.done[questions[state.current].no]));
    syncPicker();
  }

  function options(q) {
    if (!(q.options || []).length) return '';
    return `<div class="options choice-options">${q.options.map((o, i) => {
      const letter = String.fromCharCode(65 + i);
      const selected = selection(q).includes(letter);
      return `<label class="option choice-option${selected ? ' selected' : ''}"><input type="${multiChoice(q)?'checkbox':'radio'}" name="choice" value="${letter}"${selected ? ' checked' : ''}><span class="choice-letter">${letter}</span><span>${esc(o)}</span></label>`;
    }).join('')}</div>`;
  }

  function publicTag(q) {
    const supplemental = q.supplemental === true || q.solution?.supplemental === true;
    return supplemental ? '<div class="public-tag"><span class="supplemental-tag">同类型补全</span></div>' : '';
  }

  function material(q) {
    if (!q.material) return '';
    return `<details class="source-material" open><summary>${esc(q.material.title || '题组原文')}</summary><div class="material-copy">${esc(q.material.text || '')}</div></details>`;
  }

  function render(message = '') {
    const q = questions[state.current];
    const isChoice = Boolean((q.options || []).length);
    const long = !['选择题', '填空题'].includes(q.type);
    const editor = isChoice
      ? `<div class="answer-label choice-prompt">${multiChoice(q)?'本题为多选题，选齐所有正确选项':'先选择一个答案'}，再核对答案</div>`
      : `<label class="answer-label" for="draft">先写下你的答案或关键步骤</label><textarea class="draft${long ? '' : ' short'}" id="draft" placeholder="作答后点击核对答案；解析默认隐藏。"></textarea>`;

    $('card').className = `question-card${state.done[q.no] ? ' done' : ''}`;
    $('card').innerHTML = `<div class="q-head"><div class="q-index"><span class="num">${String(q.no).padStart(2, '0')}</span><span class="kind">${esc(q.type)}</span></div>${publicTag(q)}</div>${material(q)}<div class="question-text">${esc(q.text)}${q.code?`<pre class="code-block">${esc(q.code)}</pre>`:''}${options(q)}</div><div class="answer-zone">${editor}<div class="actions"><button class="primary" id="check-answer" onclick="submitCurrent()">核对答案</button><button class="ghost" id="toggle-solution" onclick="reveal()" aria-expanded="false" aria-controls="solution">查看解析</button><span class="feedback" id="feedback" role="status"></span></div><div class="solution" id="solution">${window.CaigouRichSolution.render(q.solution, q.answer)}</div><div class="self-check" id="self-check" hidden><b>自行核对 · 不自动评分</b><p>请对照上方参考答案与分步解析，检查结论、关键步骤和理由，再记录学习情况。</p><button class="ghost" onclick="selfAssess('mastered')">已掌握</button><button class="ghost" onclick="selfAssess('review')">还需复习</button></div></div>`;

    if (isChoice) {
      $('card').querySelectorAll('input[name="choice"]').forEach(input => input.addEventListener('change', event => {
        state.chosen[q.no] = [...$('card').querySelectorAll('input[name="choice"]:checked')].map(el=>el.value).sort().join('');
        clearResult(q);
        $('card').querySelectorAll('.choice-option').forEach(label => label.classList.toggle('selected', label.querySelector('input').checked));
      }));
    } else {
      $('draft').value = state.chosen[q.no] || '';
      $('draft').addEventListener('input', event => {
        state.chosen[q.no] = event.target.value;
        clearResult(q);
      });
    }

    const sequence=visibleIndices(), position=sequence.indexOf(state.current);
    $('prev').hidden = position <= 0;
    $('next').hidden = position === sequence.length - 1;
    $('jump-trigger').innerHTML = `<span style="display:block;font:700 13px/1.3 sans-serif">跳转选题 <span aria-hidden="true">▦</span></span><span style="display:block;margin-top:2px;font-size:11px;line-height:1.2">${practiceIndices ? `专项 ${position + 1} / ${sequence.length} · 原题 ${q.no}` : `第 ${state.current + 1} / ${questions.length} 题`}</span>`;
    sync();
    showFeedback(q,message);
    window.CaigouMath?.render($('card'));
  }

  function closePicker() {
    const picker = $('question-picker');
    if (picker.open && typeof picker.close === 'function') picker.close();
    else picker.removeAttribute('open');
  }

  function openPicker() {
    syncPicker();
    const picker = $('question-picker');
    if (typeof picker.showModal === 'function') picker.showModal();
    else picker.setAttribute('open', '');
  }

  function go(index) {
    const target = Math.max(0, Math.min(questions.length - 1, Number(index) || 0));
    if(practiceIndices && !practiceIndices.includes(target)){practiceIndices=null;topicView?.clear();}
    state.current = target;
    save();
    closePicker();
    render();
    $('card').scrollIntoView({block:'start',behavior:'smooth'});
    $('card').setAttribute('tabindex','-1');$('card').focus({preventScroll:true});
  }

  function submitCurrent() {
    const q = questions[state.current];
    if (!(state.chosen[q.no] || '').trim() || ((q.options || []).length && !selection(q).length)) {
      return showFeedback(q,(q.options || []).length ? '请先选择答案。' : '请先写下答案或关键步骤。');
    }
    const key=choiceKey(q);
    const expected=!key && /填空/.test(q.type) && q.grading!=='manual' ? rational(q.answer) : null;
    const actual=expected ? rational(state.chosen[q.no]) : null;
    if (!key && !(expected && actual)) {
      showFeedback(q,'本题采用自行核对，请对照解析后记录学习情况。');
      setSolution(true); $('self-check').hidden=false; return;
    }
    const correct=key ? selection(q).sort().join('')===key.join('') : actual[0]*expected[1]===expected[0]*actual[1];
    state.results[q.no]=correct?'correct':'wrong';
    state.done[q.no] = true;
    save();
    sync(); showFeedback(q);
  }

  function setSolution(open) {
    const panel = $('solution');
    panel.classList.toggle('show',open);
    $('toggle-solution').textContent=open?'隐藏解析':'查看解析';
    $('toggle-solution').setAttribute('aria-expanded',String(open));
    if(!open) $('self-check').hidden=true;
    if(open) window.CaigouMath?.render(panel);
  }
  function reveal() { setSolution(!$('solution').classList.contains('show')); }
  function selfAssess(result) {
    if(!['mastered','review'].includes(result) || $('self-check').hidden) return;
    const q=questions[state.current]; state.done[q.no]=true;state.results[q.no]=result;
    save();sync();showFeedback(q);$('self-check').hidden=true;
  }

  $('prev').addEventListener('click', () => {const seq=visibleIndices();go(seq[Math.max(0,seq.indexOf(state.current)-1)]);});
  $('next').addEventListener('click', () => {const seq=visibleIndices();go(seq[Math.min(seq.length-1,seq.indexOf(state.current)+1)]);});
  $('jump-trigger').addEventListener('click', openPicker);
  $('picker-close').addEventListener('click', closePicker);
  $('question-picker').addEventListener('click', event => {
    if (event.target === $('question-picker')) closePicker();
  });

  const topicHost=document.createElement('div');
  document.querySelector('.progress').before(topicHost);
  const topicGroups=window.CaigouTopicGroups?.[location.pathname.split('/').pop().replace('.html','')] || {};
  topicView=window.CaigouTopics?.mount({
    container:topicHost,
    questions:questions.map(q=>({no:q.no,point:q.point||q.solution?.point,score:q.score,topic:Object.keys(topicGroups).find(name=>topicGroups[name].includes(q.no))})),
    onJump:go,
    onPractice(indices){practiceIndices=indices;go(indices[0]);},
    onReset(){practiceIndices=null;go(state.current);}
  });
  window.go = go;
  window.reveal = reveal;
  window.submitCurrent = submitCurrent;
  window.selfAssess = selfAssess;
  render();
})();
