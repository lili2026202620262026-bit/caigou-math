(() => {
  const style = document.createElement('style');
  style.textContent = `
    .rich-solution{color:#294b38}
    .analysis-label{display:inline-flex;padding:4px 9px;border-radius:99px;background:#fff7df;color:#b27b19;font-size:12px;font-weight:800}
    .source-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 13px}
    .source-badge{display:inline-flex;padding:4px 9px;border-radius:99px;background:#e4f3df;color:#347047;font-size:12px;font-weight:800}
    .source-badge.search{background:#e8f0ff;color:#4466a5}.source-badge.supplement{background:#fff0dc;color:#a96516}
    .source-note{color:#688577;font-size:12px;line-height:1.65}
    .analysis-point{margin:11px 0 5px;color:#347047;font-weight:800}
    .analysis-lead{margin:0 0 16px;line-height:1.75;color:#4f6b5b}
    .solution-title{margin:0 0 10px;color:#347047;font-weight:800}
    .solution-steps{display:grid;gap:13px}
    .solution-step{display:grid;grid-template-columns:32px minmax(0,1fr);gap:10px;align-items:start}
    .step-no{width:29px;height:29px;display:grid;place-items:center;border-radius:50%;background:#56835a;color:#fff;font-size:12px;font-weight:800}
    .step-copy b{display:block;margin:2px 0 4px;color:#173a2b}
    .step-copy p{margin:0;line-height:1.78;color:#345343}
    .formula{width:fit-content;min-width:280px;max-width:min(100%,720px);margin-top:8px;padding:10px 17px;border:1px solid #d9e8d4;border-radius:11px;background:#fff;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}
    .formula .katex{font-size:1.06em}.formula .katex-display{margin:.35em 0}
    .code-block{max-width:100%;margin-top:8px;padding:12px 14px;border-radius:10px;background:#18392b;color:#e8f7e7;white-space:pre-wrap;overflow-x:auto;font:13px/1.6 Consolas,monospace}
    .solution-note{margin-top:13px;padding:10px 12px;border-left:3px solid #d1a53a;border-radius:0 9px 9px 0;background:#fff8df;color:#6e5724;line-height:1.72}
    .solution-conclusion{width:fit-content;max-width:100%;margin-top:15px;padding:9px 12px;border-left:3px solid #79a86f;border-radius:0 9px 9px 0;background:rgba(255,255,255,.62);color:#345343}
    .final-answer{margin-top:15px;padding:10px 12px;border-radius:10px;background:#dff1d6;color:#347047;font-weight:800}
    @media(max-width:650px){.solution-step{grid-template-columns:29px minmax(0,1fr);gap:8px}.step-no{width:27px;height:27px}.formula{width:100%;min-width:0;max-width:100%;padding:8px 10px}.formula .katex{font-size:1em}.solution-conclusion{width:100%}}
  `;
  document.head.appendChild(style);

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderStep = (step, index) => {
    const formula = step.formula ? `<div class="formula">${escapeHtml(step.formula)}</div>` : '';
    const code = step.code ? `<pre class="code-block">${escapeHtml(step.code)}</pre>` : '';
    return `<div class="solution-step"><span class="step-no">${index + 1}</span><div class="step-copy"><b>第${index + 1}步：${escapeHtml(step.title)}</b><p>${escapeHtml(step.text)}</p>${formula}${code}</div></div>`;
  };

  const render = (solution, answer) => {
    if (!solution) return `<div class="final-answer">正确答案：${escapeHtml(answer)}</div>`;
    const level = solution.sourceLevel || '来源待补录';
    const sourceClass = level.includes('同类型') ? ' supplement' : level.includes('检索') ? ' search' : '';
    const source = `<div class="source-row"><span class="source-badge${sourceClass}">${escapeHtml(level)}</span>${solution.sourceNote ? `<span class="source-note">${escapeHtml(solution.sourceNote)}</span>` : ''}</div>`;
    return `<div class="rich-solution">${source}<span class="analysis-label">考点分析</span><div class="analysis-point">${escapeHtml(solution.point)}</div><p class="analysis-lead">${escapeHtml(solution.lead)}</p><div class="solution-title">解题步骤</div><div class="solution-steps">${(solution.steps || []).map(renderStep).join('')}</div>${solution.note ? `<div class="solution-note"><b>严谨性说明：</b>${escapeHtml(solution.note)}</div>` : ''}${solution.conclusion ? `<div class="solution-conclusion">${escapeHtml(solution.conclusion)}</div>` : ''}<div class="final-answer">正确答案：${escapeHtml(answer)}</div></div>`;
  };

  window.CaigouRichSolution = { render, escapeHtml };
})();
