(() => {
  const style = document.createElement('style');
  style.textContent = '.katex-display{max-width:100%;overflow-x:auto;overflow-y:hidden;padding:.25rem 0}.katex{font-size:1.02em}.q-title,.q,.question-text,.opt{min-width:0;max-width:100%;overflow-wrap:anywhere;word-break:break-word}.q-title>.katex,.q>.katex,.question-text>.katex{display:inline-block;max-width:100%;overflow-x:auto;overflow-y:hidden;vertical-align:middle}.opt{overflow-x:auto;overflow-y:hidden}';
  document.head.appendChild(style);

  const options = {
    delimiters: [
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true }
    ],
    throwOnError: false
  };

  const addBreaks = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (/\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/.test(node.nodeValue || '') &&
          !node.parentElement?.closest('script,style,textarea,pre,code,.katex')) nodes.push(node);
    }
    nodes.forEach((node) => {
      const source = node.nodeValue || '';
      const pattern = /\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g;
      const fragment = document.createDocumentFragment();
      let last = 0;
      for (const match of source.matchAll(pattern)) {
        fragment.append(source.slice(last, match.index), document.createElement('wbr'), match[0], document.createElement('wbr'));
        last = match.index + match[0].length;
      }
      fragment.append(source.slice(last));
      node.replaceWith(fragment);
    });
  };

  const render = (root = document.body) => {
    if (!root || !window.renderMathInElement) return false;
    addBreaks(root);
    window.renderMathInElement(root, options);
    return true;
  };

  window.CaigouMath = { render };
  document.addEventListener('DOMContentLoaded', () => {
    render(document.body);
    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        render(document.body);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
