/* Shared learning-topic overview. No answers or progress records are changed here. */
(() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function summarize(questions) {
    const scored = questions.length > 0 && questions.every(q => typeof q.score === 'number' && Number.isFinite(q.score) && q.score > 0);
    const groups = new Map();
    questions.forEach((q,index) => {
      const name = q.topic || q.point || '综合应用';
      if (!groups.has(name)) groups.set(name,{name,items:[],points:[],score:0});
      const group=groups.get(name);
      group.items.push({...q,index});
      if(q.point && !group.points.includes(q.point))group.points.push(q.point);
      if(scored)group.score+=q.score;
    });
    return {scored,total:questions.length,totalScore:scored?questions.reduce((n,q)=>n+q.score,0):null,groups:[...groups.values()]};
  }
  function mount({container,questions,onJump,onPractice,onReset}) {
    const data=summarize(questions);
    if(!data.total)return null;
    let metric=data.scored?'score':'count',selected=null,expanded=false,active=null;
    const root=document.createElement('section');root.className='ca-topic';root.setAttribute('aria-label','本套考点分析');container.append(root);
    const value=g=>metric==='score'?g.score:g.items.length;
    const total=()=>metric==='score'?data.totalScore:data.total;
    const ordered=()=>data.groups.slice().sort((a,b)=>value(b)-value(a));
    selected=ordered()[0].name;
    const percent=g=>Number((value(g)/total()*100).toFixed(1));
    function render() {
      const list=ordered(),visible=expanded?list:list.slice(0,7),g=data.groups.find(g=>g.name===selected);
      root.innerHTML=`<div class="ca-topic-summary"><span><strong>${data.total}</strong> 道题</span>${data.scored?`<span><strong>${data.totalScore}</strong> 分</span>`:''}<span><strong>${data.groups.length}</strong> 类考点</span></div>
      <div class="ca-topic-card"><div class="ca-topic-head"><div><h2>本套考点分布</h2><p>看看这套题，重点练什么</p></div><div class="ca-topic-switch" role="group" aria-label="统计方式">${data.scored?`<button type="button" data-metric="score" aria-pressed="${metric==='score'}">按分值</button>`:''}<button type="button" data-metric="count" aria-pressed="${metric==='count'}">按题数</button></div></div>
      <div class="ca-topic-rows">${visible.map(g=>`<button type="button" class="ca-topic-row" data-topic="${esc(g.name)}" aria-pressed="${selected===g.name}" aria-label="${esc(g.name)}，${g.items.length}题${data.scored?'，'+g.score+'分':''}，占${percent(g)}%"><span class="ca-topic-name">${esc(g.name)}</span><span class="ca-topic-meta">${g.items.length}题${data.scored?' · '+g.score+'分':''}</span><span class="ca-topic-track" aria-hidden="true"><i style="width:${percent(g)}%"></i></span><strong class="ca-topic-percent">${percent(g)}%</strong></button>`).join('')}</div>
      ${list.length>7?`<button type="button" class="ca-topic-more" aria-expanded="${expanded}">${expanded?'收起考点':'展开全部 '+list.length+' 类考点'}</button>`:''}
      <div class="ca-topic-detail" aria-live="polite"><div class="ca-topic-detail-title"><h3>${esc(g.name)}</h3><span>已选考点</span></div><div class="ca-topic-tags">${g.points.map(p=>`<span>${esc(p)}</span>`).join('')}</div><div class="ca-topic-detail-bottom"><div class="ca-topic-questions"><span>对应题目</span>${g.items.map(q=>`<button type="button" data-question="${q.index}" aria-label="跳转到${esc(q.no)}题">${esc(q.no)}</button>`).join('')}</div><button type="button" class="ca-topic-practice">只练该考点 →</button></div></div>
      <p class="ca-topic-note">按主考点统计，每题只计一次。${data.scored?'':'本套按题数展示占比。'}</p></div>
      <div class="ca-topic-actions"><span class="ca-topic-mode" role="status">${active?'专项练习：'+esc(active):'整套练习'}</span><button type="button" class="ca-topic-all">${active?'退出专项 · 练习整套':'开始整套练习 →'}</button></div>`;
      root.querySelectorAll('[data-topic]').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.topic;render();root.querySelectorAll('[data-topic]').forEach(el=>{if(el.dataset.topic===selected)el.focus({preventScroll:true});});}));
      root.querySelectorAll('[data-metric]').forEach(b=>b.addEventListener('click',()=>{metric=b.dataset.metric;render();root.querySelector(`[data-metric="${metric}"]`).focus({preventScroll:true});}));
      root.querySelector('.ca-topic-more')?.addEventListener('click',()=>{expanded=!expanded;render();root.querySelector('.ca-topic-more').focus({preventScroll:true});});
      root.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>onJump(Number(b.dataset.question))));
      root.querySelector('.ca-topic-practice').addEventListener('click',()=>{active=g.name;render();onPractice(g.items.map(q=>q.index),g.name);});
      root.querySelector('.ca-topic-all').addEventListener('click',()=>{active=null;render();onReset();});
    }
    render();
    return {root,data,clear(){active=null;render();}};
  }
  window.CaigouTopics={mount,summarize};
})();
