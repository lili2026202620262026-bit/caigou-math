(() => {
  const data = window.CaigouChinese;
  if (!data) return;
  const questions = window.CaigouBankQuestions;
  let serial = 0;
  function control(content, small = false) {
    const root = document.createElement('div');
    root.className = 'ca-translation' + (small ? ' ca-translation-small' : '');
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'ca-translate-button'; button.textContent = '中译';
    const panel = document.createElement('div');
    panel.className = 'ca-translation-panel'; panel.id = `ca-translation-${++serial}`; panel.lang = 'zh-CN'; panel.hidden = true;
    if (typeof content === 'string') panel.textContent = content; else panel.append(content);
    button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-controls', panel.id);
    button.addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      button.textContent = panel.hidden ? '中译' : '收起中译';
      button.setAttribute('aria-expanded', String(!panel.hidden));
      if (!panel.hidden) window.CaigouMath?.render(panel);
    });
    root.append(button, panel); return root;
  }
  function decorateCard() {
    const card = document.getElementById('card');
    if (!card) return;
    const no = Number(card.querySelector('.num')?.textContent);
    if (card.dataset.translationQuestion === String(no) && card.querySelector('.question-text')?.dataset.translationReady) return;
    const q = questions.find(item => item.no === no), row = data.rows[no - 1];
    if (!q || !row) return;
    card.dataset.translationQuestion = String(no);
    card.querySelector('.question-text').dataset.translationReady = 'true';
    const content = document.createElement('div'), stem = document.createElement('p');
    stem.textContent = row[0]; content.append(stem);
    const options = document.createElement('div'); options.className = 'ca-translation-options';
    (row[1] ? row[1].split('|') : []).forEach((text, index) => {
      const option = document.createElement('div'); option.className = 'ca-translation-option';
      const letter = document.createElement('b'), label = document.createElement('span');
      letter.textContent = String.fromCharCode(65 + index) + '.'; label.textContent = text;
      option.append(letter, label); options.append(option);
    });
    content.append(options);
    const main = control(content); main.dataset.questionTranslation = String(no);
    if (row[0]) card.querySelector('.question-text').after(main);
    const material = q.material && data.materials?.[q.material.title];
    if (material) {
      const paragraphs = document.createElement('div');
      material.split('\n').forEach(text => { const p = document.createElement('p'); p.textContent = text; paragraphs.append(p); });
      const materialControl = control(paragraphs); materialControl.dataset.materialTranslation = '';
      card.querySelector('.material-copy')?.after(materialControl);
    }
    if (!row[3]) return;
    const solution = card.querySelector('.rich-solution');
    const translatedSolution = structuredClone(q.solution);
    translatedSolution.point = row[2]; translatedSolution.conclusion = row[4];
    translatedSolution.steps.forEach((step, index) => {
      step.title = row[3].split('|')[index];
      for (const [foreign, chinese] of Object.entries(data.terms)) step.text = step.text.replaceAll(foreign, chinese);
    });
    const solutionContent = document.createElement('div');
    solutionContent.innerHTML = window.CaigouRichSolution.render(translatedSolution, q.answer);
    solutionContent.querySelector('.final-answer')?.remove();
    solution.querySelector('.final-answer').after(control(solutionContent));
  }
  function decorateTopics() {
    document.querySelectorAll('.ca-topic-tags:not([data-translated-tags])').forEach(tags => {
      if (tags.nextElementSibling?.hasAttribute('data-topic-translation')) return;
      const labels = Array.from(tags.children).map(tag => {
        const index = questions.findIndex(q => q.solution.point === tag.textContent.trim());
        return index >= 0 ? (data.rows[index][2] || tag.textContent) : tag.textContent;
      });
      if (labels.every((label, i) => label === tags.children[i].textContent)) return;
      const translatedTags = document.createElement('div');
      translatedTags.className = 'ca-topic-tags'; translatedTags.dataset.translatedTags = '';
      labels.forEach(label => {
        const tag = document.createElement('span'); tag.textContent = label;
        translatedTags.append(tag);
      });
      const toggle = control(translatedTags, true); toggle.dataset.topicTranslation = '';
      tags.after(toggle);
    });
  }
  decorateCard(); decorateTopics();
  new MutationObserver(decorateCard).observe(document.getElementById('card'), {childList:true});
  const topic = document.querySelector('.ca-topic');
  if (topic) new MutationObserver(decorateTopics).observe(topic, {childList:true, subtree:true});
})();
