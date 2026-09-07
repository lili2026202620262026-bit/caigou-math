(() => {
  'use strict';
  const selectors = [...document.querySelectorAll('#conditions select')];
  function updateEligibility() {
    const answered = selectors.filter(s => s.value).length;
    const failed = selectors.some(s => s.value === 'no');
    const output = document.getElementById('eligibility-result');
    output.classList.toggle('warn', failed);
    output.textContent = failed ? '有条件不满足：按 2026 年简章，暂不符合共同报名条件。若不确定专业类别或资格状态，请向学校确认。' : answered === 4 ? '你勾选的共同条件均符合 2026 年规则；继续核对 A / B 类和材料要求。是否通过资格审核，以学校结果为准。' : `已确认 ${answered} / 4 项，请继续核对剩余条件。`;
  }
  selectors.forEach(s => s.addEventListener('change', updateEligibility));
  document.getElementById('reset-conditions').addEventListener('click', () => { selectors.forEach(s => s.value = ''); updateEligibility(); });
  function selectButton(button, selector) { document.querySelectorAll(selector).forEach(b => b.setAttribute('aria-pressed', String(b === button))); }
  document.querySelectorAll('[data-class]').forEach(button => button.addEventListener('click', () => {
    selectButton(button, '[data-class]');
    const isA = button.dataset.class === 'A';
    document.getElementById('class-label').textContent = `${isA ? 'A' : 'B'} 类计划`;
    document.getElementById('class-count').textContent = isA ? '90' : '30';
    document.getElementById('class-note').textContent = isA ? '面向本科期间修读过数学相关课程并获学分的学生。' : '面向本科期间未修读过数学相关课程的学生。';
  }));
  const checks = [...document.querySelectorAll('.checklist input')];
  checks.forEach(box => box.addEventListener('change', () => { const count = checks.filter(c => c.checked).length; document.getElementById('packing-progress').textContent = `已整理 ${count} / 6 项${count === 6 ? ' · 交学院前再检查一遍！' : ''}`; document.getElementById('packing-meter').value = count; }));
  function showExample(mode) {
    document.getElementById('ranking-output').innerHTML = mode === 'gpa' ? '<div class="candidate"><b>① 小林 · 优先</b><span>绩点 3.60 · 排名 20%</span></div><div class="candidate second"><b>② 小叶</b><span>绩点 3.50 · 排名 10%</span></div><p class="ranking-explanation">先看平均学分绩点：3.60 高于 3.50。即使小叶的专业排名百分比更低，这一步仍是小林优先。</p>' : '<div class="candidate"><b>① 小叶 · 优先</b><span>绩点 3.60 · 5 / 100</span></div><div class="candidate second"><b>② 小林</b><span>绩点 3.60 · 8 / 80</span></div><p class="ranking-explanation">绩点相同再看排名百分比：小叶 5%，小林 10%。百分比值更低的小叶优先，不能只比较名次数字。</p>';
  }
  document.querySelectorAll('[data-example]').forEach(button => button.addEventListener('click', () => {selectButton(button, '[data-example]'); showExample(button.dataset.example);}));
  const history = {'2022':[40,47], '2023':[50,70], '2024':[75,75], '2025':[120,120]};
  function showYear(year) { const [plan, actual] = history[year]; document.getElementById('history-output').innerHTML = `<div class="history-stats"><div><b>${plan}</b><span>${year} 年招生计划 / 人</span></div><div><b>${actual}</b><span>${year} 年录取人数 / 人</span></div></div>`; }
  document.querySelectorAll('[data-year]').forEach(button => button.addEventListener('click', () => {selectButton(button, '[data-year]'); showYear(button.dataset.year);}));
  showExample('gpa'); showYear('2025');
})();
