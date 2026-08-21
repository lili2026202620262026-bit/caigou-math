window.MathAnalysisAMidtermSolutions = [
  {
    point: '黎曼和与定积分',
    lead: '分母从 \\(3n+1\\) 连续增加到 \\(4n\\)，共有 \\(n\\) 项。关键是同时提出 \\(1/n\\)，把求和变量写成 \\(k/n\\)。',
    steps: [
      {title:'统一写出通项',text:'令分母中的增量为 \\(k=1,2,\\ldots,n\\)，原和可写成',formula:'\\[S_n=\\sum_{k=1}^{n}\\frac1{3n+k}=\\frac1n\\sum_{k=1}^{n}\\frac1{3+k/n}.\\]'},
      {title:'识别黎曼和',text:'取 \\(f(t)=1/(3+t)\\)。它在 \\([0,1]\\) 上连续，上式正是把区间等分为 \\(n\\) 份、取右端点得到的黎曼和。',formula:'\\[\\lim_{n\\to\\infty}S_n=\\int_0^1\\frac{dt}{3+t}.\\]'},
      {title:'计算定积分',text:'原函数为 \\(\\ln(3+t)\\)，代入上下限。',formula:'\\[\\int_0^1\\frac{dt}{3+t}=\\ln4-\\ln3=\\ln\\frac43.\\]'}
    ],
    conclusion: '因此该数列极限为 \\(\\ln(4/3)\\)。'
  },
  {
    point: '中心二项式系数与夹逼定理',
    lead: '阶乘比就是中心二项式系数。把它放进二项式展开 \\((1+1)^{2n}\\) 中，可以同时得到上下界。',
    steps: [
      {title:'改写阶乘比',text:'记 \\(C_n=\\binom{2n}{n}\\)，则题目要求 \\(\\sqrt[n]{C_n}\\) 的极限。',formula:'\\[C_n=\\frac{(2n)!}{(n!)^2}.\\]'},
      {title:'建立上界',text:'二项式展开中所有项均为正，而中心项是其中一项，因此',formula:'\\[C_n\\le\\sum_{k=0}^{2n}\\binom{2n}{k}=4^n.\\]'},
      {title:'建立下界',text:'中心项是最大的二项式系数，\\(2n+1\\) 个系数之和为 \\(4^n\\)，所以最大项至少等于平均值。',formula:'\\[C_n\\ge\\frac{4^n}{2n+1}.\\]'},
      {title:'开方并夹逼',text:'两边取正的 \\(n\\) 次方根；又 \\((2n+1)^{1/n}\\to1\\)。',formula:'\\[\\frac4{(2n+1)^{1/n}}\\le\\sqrt[n]{C_n}\\le4\\quad\\Longrightarrow\\quad\\sqrt[n]{C_n}\\to4.\\]'}
    ],
    conclusion: '上下界具有相同极限，故所求极限为 \\(4\\)。'
  },
  {
    point: '二阶泰勒展开与乘积保留阶数',
    lead: '分母是 \\(x^2\\)，因此分子只需准确展开到二阶。相乘时所有四阶及更高阶项都可并入 \\(o(x^2)\\)。',
    steps: [
      {title:'展开三个因子',text:'分别利用 \\(\\cos u=1-u^2/2+o(u^2)\\) 与 \\((1+v)^\\alpha=1+\\alpha v+o(v)\\)。',formula:'\\[\\begin{aligned}\\cos x&=1-\\frac{x^2}{2}+o(x^2),\\\\\\sqrt{\\cos2x}&=1-x^2+o(x^2),\\\\\\sqrt[3]{\\cos3x}&=1-\\frac32x^2+o(x^2).\\end{aligned}\\]'},
      {title:'相乘并保留二阶项',text:'三个因子的二阶系数直接相加，二阶项之间的乘积属于四阶小量。',formula:'\\[\\cos x\\sqrt{\\cos2x}\\sqrt[3]{\\cos3x}=1-\\left(\\frac12+1+\\frac32\\right)x^2+o(x^2)=1-3x^2+o(x^2).\\]'},
      {title:'代回极限',text:'分子等于 \\(3x^2+o(x^2)\\)，再除以 \\(x^2\\)。',formula:'\\[\\frac{1-\\cos x\\sqrt{\\cos2x}\\sqrt[3]{\\cos3x}}{x^2}=3+o(1)\\to3.\\]'}
    ],
    conclusion: '所求极限为 \\(3\\)。'
  },
  {
    point: '根式因式分解与有限乘积极限',
    lead: '分子共有 \\(n-1\\) 个因子，恰好可与分母的 \\((1-x)^{n-1}\\) 一一配对。',
    steps: [
      {title:'拆成乘积',text:'把每个 \\(1-x^{1/k}\\) 与一个 \\(1-x\\) 配对。',formula:'\\[\\frac{\\prod_{k=2}^{n}(1-x^{1/k})}{(1-x)^{n-1}}=\\prod_{k=2}^{n}\\frac{1-x^{1/k}}{1-x}.\\]'},
      {title:'求单个因子的极限',text:'由等比数列因式分解',formula:'\\[1-x=(1-x^{1/k})\\left(1+x^{1/k}+\\cdots+x^{(k-1)/k}\\right),\\]'},
      {title:'合并有限乘积',text:'当 \\(x\\to1\\) 时，括号内的 \\(k\\) 项均趋于 \\(1\\)，所以每个比值趋于 \\(1/k\\)。',formula:'\\[\\lim_{x\\to1}\\prod_{k=2}^{n}\\frac{1-x^{1/k}}{1-x}=\\prod_{k=2}^{n}\\frac1k=\\frac1{n!}.\\]'}
    ],
    conclusion: '所求极限为 \\(1/n!\\)。'
  },
  {
    point: '递推数列、固定点与数学归纳法',
    lead: '不要先套“单调有界”。初值 \\(-2\\) 恰好是递推映射的固定点，数列实际上从第一项起就是常数列。',
    steps: [
      {title:'验证下一项',text:'把 \\(x_1=-2\\) 代入递推式。',formula:'\\[x_2=\\frac{-2}{2}+\\frac2{-2}=-2.\\]'},
      {title:'完成归纳',text:'假设某个 \\(n\\) 有 \\(x_n=-2\\)，则下一项仍为 \\(-2\\)。',formula:'\\[x_{n+1}=\\frac{x_n}{2}+\\frac2{x_n}=\\frac{-2}{2}+\\frac2{-2}=-2.\\]'},
      {title:'判断收敛并求极限',text:'由数学归纳法，\\(x_n=-2\\) 对所有正整数 \\(n\\) 成立。常数列必收敛。',formula:'\\[\\lim_{n\\to\\infty}x_n=-2.\\]'}
    ],
    conclusion: '数列是常数列，极限为 \\(-2\\)。'
  },
  {
    point: '不等式取极限与基本三角极限',
    lead: '目标中的系数 \\(1,2,\\ldots,n\\) 来自 \\(\\sin(kx)/\\sin x\\) 在 \\(x\\to0\\) 时的极限。',
    steps: [
      {title:'除以非零量',text:'当 \\(x\\) 充分接近 \\(0\\) 且 \\(x\\ne0\\) 时，\\(\\sin x\\ne0\\)。由题设可得',formula:'\\[\\left|\\sum_{k=1}^{n}a_k\\frac{\\sin(kx)}{\\sin x}\\right|\\le1.\\]'},
      {title:'求每一项的极限',text:'利用 \\(\\sin u/u\\to1\\)。',formula:'\\[\\lim_{x\\to0}\\frac{\\sin(kx)}{\\sin x}=\\lim_{x\\to0}k\\frac{\\sin(kx)}{kx}\\frac{x}{\\sin x}=k.\\]'},
      {title:'对有限和取极限',text:'求和项数固定，因此可以逐项取极限，绝对值函数又连续。',formula:'\\[\\lim_{x\\to0}\\left|\\sum_{k=1}^{n}a_k\\frac{\\sin(kx)}{\\sin x}\\right|=\\left|\\sum_{k=1}^{n}ka_k\\right|.\\]'},
      {title:'保留不等式',text:'若左侧在每个充分小的非零 \\(x\\) 上都不超过 \\(1\\)，其极限也不超过 \\(1\\)。',formula:'\\[|a_1+2a_2+\\cdots+na_n|\\le1.\\]'}
    ],
    conclusion: '待证不等式成立。'
  },
  {
    point: '函数方程迭代与无穷远处极限',
    lead: '对任意固定的正数 \\(x_0\\)，不断把自变量乘以 \\(2\\)，既不改变函数值，又能把自变量送到正无穷。',
    steps: [
      {title:'固定任意一点',text:'任取 \\(x_0>0\\)。连续使用 \\(f(2x)=f(x)\\)，可得',formula:'\\[f(2^m x_0)=f(x_0),\\qquad m=1,2,\\ldots\\]'},
      {title:'让自变量趋于无穷',text:'因为 \\(2^m x_0\\to+\\infty\\)，由已知极限可知',formula:'\\[f(2^m x_0)\\to A.\\]'},
      {title:'比较同一数列的值',text:'但 \\(f(2^m x_0)\\) 对所有 \\(m\\) 都等于常数 \\(f(x_0)\\)，所以该常数只能等于 \\(A\\)。由于 \\(x_0\\) 任意，结论对所有正数成立。',formula:'\\[f(x)=A,\\qquad x>0.\\]'}
    ],
    conclusion: '因此 \\(f(x)\\equiv A\\)（\\(x>0\\)）。'
  }
];
window.MathAnalysisAMidtermSolutions = window.MathAnalysisAMidtermSolutions.map(solution => ({sourceLevel:'单份回忆还原',sourceNote:'题干依据一份手写回忆稿整理；可辨条件已逐题核对。',...solution}));
