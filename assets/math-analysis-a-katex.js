/* Local KaTeX loader for math-analysis-a-midterm.html */
(() => {
  const load = src => new Promise((resolve, reject) => {
    const node = document.createElement('script');
    node.src = src;
    node.onload = resolve;
    node.onerror = reject;
    document.head.appendChild(node);
  });

  Promise.resolve()
    .then(() => load('assets/katex/katex.min.js'))
    .then(() => load('assets/katex/contrib/auto-render.min.js'))
    .then(() => window.renderMathInElement(document.body, {
      delimiters: [
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false
    }))
    .catch(() => console.warn('KaTeX files could not be loaded.'));
})();
