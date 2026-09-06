(() => {
  const style = document.createElement('style');
  style.textContent = `
    .rich-solution{color:#294b38}
    .analysis-label{display:inline-flex;padding:4px 9px;border-radius:99px;background:#fff7df;color:#b27b19;font-size:12px;font-weight:800}
    .analysis-point{margin:11px 0 5px;color:#347047;font-weight:800}
    .analysis-lead{margin:0 0 16px;line-height:1.75;color:#4f6b5b}
    .solution-title{margin:0 0 10px;color:#347047;font-weight:800}
    .solution-steps{display:grid;gap:13px}
    .solution-step{display:grid;grid-template-columns:32px minmax(0,1fr);gap:10px;align-items:start}
    .step-no{width:29px;height:29px;display:grid;place-items:center;border-radius:50%;background:#56835a;color:#fff;font-size:12px;font-weight:800}
    .step-copy b{display:block;margin:2px 0 4px;color:#173a2b}
    .step-copy p{margin:0;line-height:1.78;color:#345343}
    .formula{width:fit-content;min-width:280px;max-width:min(100%,720px);margin-top:8px;padding:10px 17px;border:1px solid #d9e8d4;border-radius:11px;background:#fff;overflow:hidden}
    .formula .katex{font-size:1.06em}.formula .katex-display{margin:.35em 0}
    .code-block{max-width:100%;margin-top:8px;padding:12px 14px;border-radius:10px;background:#18392b;color:#e8f7e7;white-space:pre-wrap;overflow-x:auto;font:13px/1.6 Consolas,monospace}
    .solution-note{margin-top:13px;padding:10px 12px;border-left:3px solid #d1a53a;border-radius:0 9px 9px 0;background:#fff8df;color:#6e5724;line-height:1.72}
    .solution-conclusion{width:fit-content;max-width:100%;margin-top:15px;padding:9px 12px;border-left:3px solid #79a86f;border-radius:0 9px 9px 0;background:rgba(255,255,255,.62);color:#345343}
    .final-answer{margin-top:15px;padding:10px 12px;border-radius:10px;background:#dff1d6;color:#347047;font-weight:800}
    .econ-diagram{width:min(100%,720px);margin-top:10px;padding:10px;border:1px solid #d9e8d4;border-radius:13px;background:#fff;overflow:hidden}
    .econ-diagram svg{display:block;width:100%;height:auto}.econ-diagram .axis{stroke:#547461;stroke-width:2}.econ-diagram .curve{fill:none;stroke-width:3;stroke-linecap:round}.econ-diagram .guide{stroke:#9bb4a3;stroke-width:1.5;stroke-dasharray:6 6}.econ-diagram text{fill:#355846;font:700 14px "Microsoft YaHei",sans-serif}.econ-diagram .small{fill:#688577;font-size:12px}.econ-diagram .profit{fill:#bfe57666;stroke:#75a85d;stroke-width:1.5}.econ-diagram .dwl{fill:#f3ba596e;stroke:#c88a23;stroke-width:1.5}
    @media(max-width:650px){.solution-step{grid-template-columns:29px minmax(0,1fr);gap:8px}.step-no{width:27px;height:27px}.formula{width:100%;min-width:0;max-width:100%;padding:8px 10px}.formula .katex{font-size:1em}.solution-conclusion{width:100%}.econ-diagram{width:100%;padding:5px}.econ-diagram text{font-size:16px}.econ-diagram .small{font-size:14px}}
  `;
  document.head.appendChild(style);

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const renderDiagram = (kind) => {
    if (kind === 'competitive-firm-long-run') return `<div class="econ-diagram"><svg viewBox="0 0 720 390" role="img" aria-label="完全竞争企业长期均衡图：价格等于边际收益、边际成本和最低平均总成本"><defs><marker id="arrow-green" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#547461"/></marker></defs><line class="axis" x1="70" y1="330" x2="680" y2="330" marker-end="url(#arrow-green)"/><line class="axis" x1="70" y1="330" x2="70" y2="35" marker-end="url(#arrow-green)"/><path class="curve" stroke="#347047" d="M110 78 C190 245 290 275 360 240 C445 168 535 92 625 66"/><path class="curve" stroke="#d38b2b" d="M145 305 C245 292 320 270 360 240 C430 187 515 118 625 58"/><line class="curve" stroke="#6b8fcf" x1="90" y1="240" x2="640" y2="240"/><line class="guide" x1="360" y1="240" x2="360" y2="330"/><circle cx="360" cy="240" r="5" fill="#173a2b"/><text x="630" y="62">MC / S</text><text x="585" y="104">ATC</text><text x="500" y="226">P = MR</text><text class="small" x="340" y="352">q*</text><text class="small" x="9" y="55">成本、收益</text><text class="small" x="644" y="353">产量</text><text class="small" x="375" y="265">长期零利润</text></svg></div>`;
    if (kind === 'monopolistic-competition-dwl') return `<div class="econ-diagram"><svg viewBox="0 0 720 390" role="img" aria-label="垄断竞争企业短期利润与无谓损失图"><defs><marker id="arrow-amber" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#547461"/></marker></defs><line class="axis" x1="70" y1="330" x2="680" y2="330" marker-end="url(#arrow-amber)"/><line class="axis" x1="70" y1="330" x2="70" y2="35" marker-end="url(#arrow-amber)"/><rect class="profit" x="76" y="169" width="230" height="58"/><polygon class="dwl" points="306,169 306,230 375,197"/><path class="curve" stroke="#347047" d="M100 85 L650 310"/><path class="curve" stroke="#6b8fcf" d="M100 85 L420 310"/><path class="curve" stroke="#d38b2b" d="M150 300 L620 75"/><path class="curve" stroke="#8b6dc7" d="M145 118 C235 248 355 268 585 112"/><line class="guide" x1="306" y1="169" x2="306" y2="330"/><line class="guide" x1="375" y1="197" x2="375" y2="330"/><line class="guide" x1="70" y1="169" x2="306" y2="169"/><circle cx="306" cy="230" r="5" fill="#173a2b"/><circle cx="375" cy="197" r="5" fill="#173a2b"/><text x="626" y="305">D</text><text x="395" y="303">MR</text><text x="605" y="77">MC</text><text x="555" y="116">ATC</text><text x="145" y="198">利润</text><text x="315" y="190">无谓损失</text><text class="small" x="278" y="352">Qm</text><text class="small" x="358" y="352">Qe</text><text class="small" x="30" y="164">Pm</text><text class="small" x="9" y="55">价格、成本</text><text class="small" x="644" y="353">产量</text></svg></div>`;
    return '';
  };

  const renderStep = (step, index) => {
    const formula = step.formula ? `<div class="formula">${escapeHtml(step.formula)}</div>` : '';
    const code = step.code ? `<pre class="code-block">${escapeHtml(step.code)}</pre>` : '';
    const diagram = renderDiagram(step.diagram);
    return `<div class="solution-step"><span class="step-no">${index + 1}</span><div class="step-copy"><b>第${index + 1}步：${escapeHtml(step.title)}</b><p>${escapeHtml(step.text)}</p>${formula}${code}${diagram}</div></div>`;
  };

  const render = (solution, answer) => {
    if (!solution) return `<div class="final-answer">正确答案：${escapeHtml(answer)}</div>`;
    return `<div class="rich-solution"><span class="analysis-label">考点分析</span><div class="analysis-point">${escapeHtml(solution.point)}</div><p class="analysis-lead">${escapeHtml(solution.lead)}</p><div class="solution-title">解题步骤</div><div class="solution-steps">${(solution.steps || []).map(renderStep).join('')}</div>${solution.note ? `<div class="solution-note"><b>严谨性说明：</b>${escapeHtml(solution.note)}</div>` : ''}${solution.conclusion ? `<div class="solution-conclusion">${escapeHtml(solution.conclusion)}</div>` : ''}<div class="final-answer">正确答案：${escapeHtml(answer)}</div></div>`;
  };

  window.CaigouRichSolution = { render, escapeHtml };
})();
