window.MathAnalysisBFinalSolutions = [
  {
    point:'反函数求导公式',
    lead:'先找到满足 \\(f(x_0)=2\\) 的原函数自变量，再使用反函数导数公式，不能直接把 \\(2\\) 代入 \\(f^{\\prime}\\)。',
    steps:[
      {title:'确定对应点',text:'解 \\(x^3+x=2\\)。函数严格递增，且 \\(f(1)=2\\)，所以唯一的对应点是 \\(x_0=1\\)。',formula:'\\[\\varphi(2)=1.\\]'},
      {title:'计算原函数导数',text:'对 \\(f(x)=x^3+x\\) 求导并代入 \\(x_0=1\\)。',formula:'\\[f^{\\prime}(x)=3x^2+1,\\qquad f^{\\prime}(1)=4.\\]'},
      {title:'使用反函数公式',text:'因为 \\(f^{\\prime}(1)\\ne0\\)，反函数在对应点可导。',formula:'\\[\\varphi^{\\prime}(2)=\\frac1{f^{\\prime}(1)}=\\frac14.\\]'}
    ],conclusion:'填入 \\(1/4\\)。'
  },
  {
    point:'拉格朗日中值定理',
    lead:'中值点必须位于开区间 \\((0,1)\\)，其导数等于函数在端点间的平均变化率。',
    steps:[
      {title:'核对定理条件',text:'多项式 \\(f(x)=x^3\\) 在 \\([0,1]\\) 连续、在 \\((0,1)\\) 可导，因此可以使用拉格朗日中值定理。'},
      {title:'写出中值方程',text:'存在 \\(\\xi\\in(0,1)\\) 满足',formula:'\\[f^{\\prime}(\\xi)=\\frac{f(1)-f(0)}{1-0}=1.\\]'},
      {title:'解出区间内的根',text:'由 \\(f^{\\prime}(x)=3x^2\\) 得 \\(3\\xi^2=1\\)。两个代数根中只有正根属于 \\((0,1)\\)。',formula:'\\[\\xi=\\frac1{\\sqrt3}=\\frac{\\sqrt3}{3}.\\]'}
    ],conclusion:'填入 \\(\\sqrt3/3\\)。'
  },
  {
    point:'不定积分与原函数',
    lead:'等式右端给出了 \\(f\\) 的一个原函数，因此对两边求导即可恢复被积函数。',
    steps:[
      {title:'消去积分符号',text:'若 \\(\\int f(x)\\,dx=xe^x+C\\)，则右端求导等于 \\(f(x)\\)，常数 \\(C\\) 的导数为零。'},
      {title:'使用乘积求导',text:'对 \\(xe^x\\) 使用乘积法则。',formula:'\\[f(x)=(xe^x)^{\\prime}=e^x+xe^x=(x+1)e^x.\\]'},
      {title:'反向核对',text:'对所得函数积分，确实得到 \\(xe^x+C\\)，所以结果无遗漏。'}
    ],conclusion:'因此 \\(f(x)=(x+1)e^x\\)。'
  },
  {
    point:'含参数的变上限积分求导',
    lead:'被积函数中的 \\(x\\) 既出现在上限又出现在 integrand 中。可以先拆开，也可以使用莱布尼兹公式；拆开后抵消关系最清楚。',
    steps:[
      {title:'拆分积分',text:'把与 \\(t\\) 无关的 \\(x\\) 提到积分号外。',formula:'\\[F(x)=x\\int_a^x f(t)\\,dt-\\int_a^x t f(t)\\,dt.\\]'},
      {title:'分别求导',text:'第一项用乘积法则，两个变上限积分用微积分基本定理。',formula:'\\[F^{\\prime}(x)=\\int_a^x f(t)\\,dt+x f(x)-x f(x).\\]'},
      {title:'化简抵消项',text:'末尾的两个 \\(xf(x)\\) 符号相反，完全抵消。',formula:'\\[F^{\\prime}(x)=\\int_a^x f(t)\\,dt.\\]'}
    ],conclusion:'所求导数为 \\(\\int_a^x f(t)\\,dt\\)。'
  },
  {
    point:'Young 不等式与凹函数 Jensen 不等式',
    lead:'条件 \\(1/p+1/q=1\\) 正好给出两个权重。把 \\(a^p,b^q\\) 代入凹函数 \\(\\ln x\\) 的 Jensen 不等式即可。',
    steps:[
      {title:'确认权重合法',text:'由 \\(p,q>0\\) 且 \\(1/p+1/q=1\\)，可知 \\(p,q>1\\)，并且 \\(1/p,1/q\\) 都是正权重、和为 \\(1\\)。'},
      {title:'应用 Jensen 不等式',text:'因为 \\(\\ln x\\) 在正数域上是凹函数，所以',formula:'\\[\\ln\\!\\left(\\frac{a^p}{p}+\\frac{b^q}{q}\\right)\\ge\\frac1p\\ln(a^p)+\\frac1q\\ln(b^q).\\]'},
      {title:'化简右端',text:'利用对数幂法则。',formula:'\\[\\frac1p\\ln(a^p)+\\frac1q\\ln(b^q)=\\ln a+\\ln b=\\ln(ab).\\]'},
      {title:'利用单调性还原',text:'指数函数严格递增，对上式两边取指数。',formula:'\\[\\frac1pa^p+\\frac1qb^q\\ge ab.\\]'}
    ],conclusion:'Young 不等式得证；等号在 \\(a^p=b^q\\) 时成立。',answer:'命题得证'
  },
  {
    point:'罗尔定理与辅助函数构造',
    lead:'目标 \\(tf^{\\prime}(t)-f(t)=0\\) 正好是商 \\(f(x)/x\\) 的分子。条件 \\(a>0\\) 保证这个辅助函数在整个区间上有定义。',
    steps:[
      {title:'构造辅助函数',text:'令',formula:'\\[F(x)=\\frac{f(x)}x.\\]'},
      {title:'验证端点同值',text:'由 \\(af(b)=bf(a)\\)，两边除以正数 \\(ab\\)。',formula:'\\[\\frac{f(b)}b=\\frac{f(a)}a,\\qquad F(b)=F(a).\\]'},
      {title:'应用罗尔定理',text:'\\(F\\) 在 \\([a,b]\\) 连续、在 \\((a,b)\\) 可导，故存在 \\(t\\in(a,b)\\) 使 \\(F^{\\prime}(t)=0\\)。'},
      {title:'还原目标等式',text:'计算商的导数。',formula:'\\[0=F^{\\prime}(t)=\\frac{tf^{\\prime}(t)-f(t)}{t^2}.\\]'}
    ],conclusion:'因为 \\(t^2>0\\)，所以 \\(tf^{\\prime}(t)=f(t)\\)，命题得证。',answer:'命题得证'
  },
  {
    point:'莱布尼兹公式求高阶导数',
    lead:'\\(e^x\\) 的任意阶导数仍为 \\(e^x\\)，而二次多项式三阶后导数为零，所以十阶展开只保留三项。',
    steps:[
      {title:'写出莱布尼兹公式',text:'令 \\(u=x^2-1\\)、\\(v=e^x\\)。',formula:'\\[(uv)^{(10)}=\\sum_{k=0}^{10}\\binom{10}{k}u^{(k)}v^{(10-k)}.\\]'},
      {title:'删除为零的高阶项',text:'有 \\(u^{\\prime}=2x\\)、\\(u^{\\prime\\prime}=2\\)、\\(u^{(k)}=0\\ (k\\ge3)\\)，故',formula:'\\[f^{(10)}=\\left[(x^2-1)+\\binom{10}{1}2x+\\binom{10}{2}2\\right]e^x.\\]'},
      {title:'合并系数',text:'\\(\\binom{10}{2}=45\\)，常数项为 \\(-1+90=89\\)。',formula:'\\[f^{(10)}(x)=(x^2+20x+89)e^x.\\]'}
    ],conclusion:'十阶导数为 \\((x^2+20x+89)e^x\\)。'
  },
  {
    point:'指数型极限的二阶展开',
    lead:'这里最容易漏掉负号。\\(\\ln(1+x)/x=1-x/2+o(x)\\)，因此 \\((1+x)^{1/x}\\) 从 \\(e\\) 的下方变化，线性项是负的。',
    steps:[
      {title:'改写为指数形式',text:'在 \\(x\\) 充分接近 \\(0\\) 时',formula:'\\[(1+x)^{1/x}=\\exp\\!\\left(\\frac{\\ln(1+x)}x\\right).\\]'},
      {title:'展开指数',text:'由 \\(\\ln(1+x)=x-x^2/2+o(x^2)\\)，得到',formula:'\\[\\frac{\\ln(1+x)}x=1-\\frac x2+o(x).\\]'},
      {title:'展开外层指数函数',text:'利用 \\(e^u=1+u+o(u)\\)。',formula:'\\[(1+x)^{1/x}=e\\,e^{-x/2+o(x)}=e\\left(1-\\frac x2+o(x)\\right).\\]'},
      {title:'代回并约去',text:'分子的一阶主项为 \\(-ex/2\\)。',formula:'\\[\\frac{(1+x)^{1/x}-e}{x}=\\frac{-ex/2+o(x)}x\\longrightarrow-\\frac e2.\\]'}
    ],
    note:'旧页面把答案写成了正的 \\(e/2\\)，与展开式不符；现已改为严格计算得到的 \\(-e/2\\)。',
    conclusion:'所求极限为 \\(-e/2\\)。'
  },
  {
    point:'根式换元与有理函数积分',
    lead:'分母含 \\(\\sqrt{x}\\)，令 \\(t=\\sqrt{x}\\) 后，\\(dx\\) 会带出一个 \\(t\\)，积分立即化成简单有理式。',
    steps:[
      {title:'作换元',text:'令 \\(t=\\sqrt{x}\\)，则 \\(x=t^2\\)、\\(dx=2t\\,dt\\)。'},
      {title:'拆分有理式',text:'代入并作整式除法。',formula:'\\[\\int\\frac{dx}{\\sqrt{x}+1}=\\int\\frac{2t}{t+1}dt=\\int\\left(2-\\frac2{t+1}\\right)dt.\\]'},
      {title:'积分并换回',text:'先对 \\(t\\) 积分，再代回 \\(t=\\sqrt{x}\\)。',formula:'\\[2t-2\\ln|t+1|+C=2\\sqrt{x}-2\\ln(\\sqrt{x}+1)+C.\\]'}
    ],conclusion:'原函数为 \\(2\\sqrt{x}-2\\ln(\\sqrt{x}+1)+C\\)。'
  },
  {
    point:'黎曼和与反三角函数积分',
    lead:'先从根号中提出 \\(n^2\\)，每一项便出现 \\(1/n\\) 和取样点 \\(k/n\\)。',
    steps:[
      {title:'标准化每一项',text:'因为 \\(n>0\\)，有',formula:'\\[\\frac1{\\sqrt{4n^2-k^2}}=\\frac1n\\frac1{\\sqrt{4-(k/n)^2}}.\\]'},
      {title:'识别黎曼和',text:'取 \\(f(x)=1/\\sqrt{4-x^2}\\)，它在 \\([0,1]\\) 连续。',formula:'\\[\\lim_{n\\to\\infty}\\frac1n\\sum_{k=1}^{n}f\\!\\left(\\frac kn\\right)=\\int_0^1\\frac{dx}{\\sqrt{4-x^2}}.\\]'},
      {title:'计算积分',text:'使用公式 \\(\\int dx/\\sqrt{a^2-x^2}=\\arcsin(x/a)+C\\)。',formula:'\\[\\int_0^1\\frac{dx}{\\sqrt{4-x^2}}=\\left.\\arcsin\\frac x2\\right|_0^1=\\arcsin\\frac12=\\frac\\pi6.\\]'}
    ],conclusion:'所求极限为 \\(\\pi/6\\)。'
  },
  {
    point:'根式换元与分部积分',
    lead:'令 \\(t=\\sqrt{x}\\) 后，上限由 \\(\\pi^2\\) 变成 \\(\\pi\\)，并出现标准积分 \\(\\int t\\sin t\\,dt\\)。',
    steps:[
      {title:'换元并调整上下限',text:'令 \\(x=t^2\\)，则 \\(dx=2t\\,dt\\)。',formula:'\\[\\int_0^{\\pi^2}\\sin\\sqrt{x}\\,dx=2\\int_0^\\pi t\\sin t\\,dt.\\]'},
      {title:'分部积分',text:'取 \\(u=t\\)、\\(dv=\\sin t\\,dt\\)，则 \\(du=dt\\)、\\(v=-\\cos t\\)。',formula:'\\[\\int t\\sin t\\,dt=-t\\cos t+\\sin t.\\]'},
      {title:'代入上下限',text:'\\(t=\\pi\\) 时括号值为 \\(\\pi\\)，\\(t=0\\) 时为 \\(0\\)。',formula:'\\[2\\left[-t\\cos t+\\sin t\\right]_0^\\pi=2\\pi.\\]'}
    ],conclusion:'定积分等于 \\(2\\pi\\)。'
  },
  {
    point:'奇偶性与对称区间积分',
    lead:'先分别判断两个被积函数的奇偶性。奇函数在对称区间积分为零，偶函数可化为两倍半区间积分。',
    steps:[
      {title:'处理第一项',text:'\\(x^3\\) 是奇函数、\\(\\cos x\\) 是偶函数，所以乘积 \\(x^3\\cos x\\) 是奇函数。',formula:'\\[\\int_{-2}^{2}x^3\\cos x\\,dx=0.\\]'},
      {title:'处理绝对值项',text:'\\(|x^3|\\) 是偶函数。',formula:'\\[\\int_{-2}^{2}|x^3|\\,dx=2\\int_0^2x^3\\,dx.\\]'},
      {title:'完成计算',text:'直接计算幂函数积分。',formula:'\\[2\\int_0^2x^3\\,dx=2\\left[\\frac{x^4}{4}\\right]_0^2=2\\cdot4=8.\\]'}
    ],conclusion:'原积分等于 \\(8\\)。'
  }
];
window.MathAnalysisBFinalSolutions = window.MathAnalysisBFinalSolutions.map(solution => ({sourceLevel:'原卷还原',sourceNote:'题干由清晰原卷照片逐题核对。',...solution}));
