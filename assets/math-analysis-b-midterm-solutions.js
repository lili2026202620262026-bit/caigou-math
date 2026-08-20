window.MathAnalysisBMidtermSolutions = [
  {
    point:'子列判别、单调有界定理与无穷小定义',
    lead:'这道题要逐项检查充分性和必要性，尤其注意“无穷多个指标满足”弱于“从某一项起全部满足”。',
    steps:[
      {title:'判断 A',text:'若原数列收敛，则所有子列同极限；反过来，若奇数项子列和偶数项子列都趋于同一个数 \\(L\\)，任意足够靠后的项无论奇偶都接近 \\(L\\)，故原数列趋于 \\(L\\)。A 正确。'},
      {title:'判断 B',text:'单调递减且有界的数列确有下确界并收敛，但“有下确界”不能推出单调递减。例如 \\((-1)^n\\) 有下确界 \\(-1\\)，却不单调。B 错误。'},
      {title:'判断 C',text:'无穷小要求对每个 \\(\\varepsilon>0\\)，从某项起所有 \\(|x_n|<\\varepsilon\\)。仅有无穷多项满足，只能保证可能存在趋于 \\(0\\) 的子列。例如 \\(0,1,0,1,\\ldots\\) 不是无穷小。C 错误。'},
      {title:'判断 D',text:'由 \\(n!\\ge (n/2)^{n/2}\\)（取后半段因子）可知 \\(\\sqrt[n]{n!}\\to+\\infty\\)，所以它的倒数趋于 \\(0\\)。D 错误。',formula:'\\[\\lim_{n\\to\\infty}\\frac1{\\sqrt[n]{n!}}=0.\\]'}
    ],conclusion:'由逐项判断可知，只有 A 正确。',answer:'A'
  },
  {
    point:'无界与无穷大的区别',
    lead:'乘子 \\(1/x^2\\) 的绝对值不断增大，但 \\(\\sin(1/x)\\) 反复变号并且也反复取零，因此不能趋向固定的正无穷或负无穷。',
    steps:[
      {title:'构造趋向正无穷的数列',text:'令 \\(x_n=1/(\\pi/2+2n\\pi)\\)，则 \\(x_n\\to0\\) 且正弦值为 \\(1\\)。',formula:'\\[\\frac1{x_n^2}\\sin\\frac1{x_n}=\\frac1{x_n^2}\\to+\\infty.\\]'},
      {title:'构造趋向负无穷的数列',text:'令 \\(y_n=1/(3\\pi/2+2n\\pi)\\)，则 \\(y_n\\to0\\) 且正弦值为 \\(-1\\)。',formula:'\\[\\frac1{y_n^2}\\sin\\frac1{y_n}=-\\frac1{y_n^2}\\to-\\infty.\\]'},
      {title:'判断类型',text:'函数值沿不同趋零数列可任意大、也可任意小，所以在 \\(0\\) 的任意去心邻域内无界；但它不统一趋于 \\(+\\infty\\) 或 \\(-\\infty\\)。'}
    ],conclusion:'函数在任意去心邻域内无界，但不趋于同一个无穷方向。',answer:'D'
  },
  {
    point:'等价无穷小与阶数比较',
    lead:'严格比较必须把每个选项的首个非零项写出来。这样会发现原题本身存在“单选不唯一”的命题问题。',
    steps:[
      {title:'展开 A 与 B',text:'两者首项均为一次项。',formula:'\\[\\ln(1+x)=x+o(x),\\qquad e^x-1=x+o(x).\\]'},
      {title:'展开 C',text:'分别展开 \\(\\tan x\\) 与 \\(\\sin x\\)，一次项相消。',formula:'\\[\\tan x-\\sin x=\\left(x+\\frac{x^3}{3}\\right)-\\left(x-\\frac{x^3}{6}\\right)+o(x^3)=\\frac{x^3}{2}+o(x^3).\\]'},
      {title:'展开 D',text:'余弦的首个非零差值是二次项。',formula:'\\[1-\\cos x=\\frac{x^2}{2}+o(x^2).\\]'},
      {title:'比较阶数',text:'A、B 是一阶，C 是三阶，D 是二阶。因此并不存在“其余三个同阶、只有一个不同阶”的唯一选项。'}
    ],
    note:'原卷答案表给出 C，但按题面“与其他三个不是同阶”严格判断，C 与 D 都无法成为唯一异类。网页保留原卷答案 C，同时明确标注命题瑕疵。',
    conclusion:'按原卷答案取 C；严格数学结论是本题没有唯一正确选项。',
    answer:'原卷 C；严格题意无唯一答案'
  },
  {
    point:'左右极限与间断点分类',
    lead:'\\(x=1\\) 处函数无定义，但左右两侧的 \\(1/(1-x)\\) 分别趋向正、负无穷，经过反正切后得到两个不同的有限极限。',
    steps:[
      {title:'求左极限',text:'当 \\(x\\to1^-\\) 时，\\(1-x\\to0^+\\)。',formula:'\\[\\frac1{1-x}\\to+\\infty,\\qquad f(x)\\to\\frac\\pi2.\\]'},
      {title:'求右极限',text:'当 \\(x\\to1^+\\) 时，\\(1-x\\to0^-\\)。',formula:'\\[\\frac1{1-x}\\to-\\infty,\\qquad f(x)\\to-\\frac\\pi2.\\]'},
      {title:'按定义分类',text:'左右极限都存在且有限，但不相等，所以不是可去或无穷间断点，而是跳跃间断点。'}
    ],conclusion:'左右极限均为有限值但不相等，因此属于跳跃间断点。',answer:'C'
  },
  {
    point:'全局连续性与无穷远处极限',
    lead:'先用极限确定 \\(b\\) 的符号，再用“分母对所有实数都不为零”限制 \\(a\\)。',
    steps:[
      {title:'由极限判断 b',text:'若 \\(b>0\\)，当 \\(x\\to-\\infty\\) 时 \\(e^{bx}\\to0\\)，分母趋于 \\(a\\)，函数不可能趋于 \\(0\\)；若 \\(a=0\\) 还会发散。因此必须 \\(b<0\\)。'},
      {title:'核对所需极限',text:'当 \\(b<0\\) 且 \\(x\\to-\\infty\\) 时，\\(e^{bx}\\to+\\infty\\)，指数增长快于线性增长。',formula:'\\[\\frac{x}{a+e^{bx}}\\to0.\\]'},
      {title:'利用连续性限制 a',text:'\\(e^{bx}\\) 的取值范围是 \\((0,+\\infty)\\)。若 \\(a<0\\)，可取某个 \\(x\\) 使 \\(e^{bx}=-a\\)，分母为零；若 \\(a\\ge0\\)，分母恒正。'},
      {title:'合并条件',text:'同时满足极限与全实数连续性的条件是 \\(a\\ge0,b<0\\)。'}
    ],conclusion:'连续性和无穷远处极限共同给出 \\(a\\ge0,b<0\\)。',answer:'D'
  },
  {
    point:'函数极限的 ε–δ 定义与分母控制',
    lead:'证明的核心是先约去可去因子，再用一个固定邻域把分母与零隔开，最后让误差由 \\(|x-1|\\) 控制。',
    steps:[
      {title:'化简误差',text:'当 \\(x\\ne1\\) 时，分解 \\(2x^2-x-1=(x-1)(2x+1)\\)。',formula:'\\[\\left|\\frac{x^2-1}{2x^2-x-1}-\\frac23\\right|=\\frac{|x-1|}{3|2x+1|}.\\]'},
      {title:'控制分母',text:'先要求 \\(|x-1|<1\\)，则 \\(0<x<2\\)，从而 \\(|2x+1|>1\\)。',formula:'\\[\\frac{|x-1|}{3|2x+1|}<\\frac{|x-1|}{3}.\\]'},
      {title:'根据 ε 选择 δ',text:'为了使上式小于 \\(\\varepsilon\\)，只需同时有 \\(|x-1|<1\\) 和 \\(|x-1|<3\\varepsilon\\)。取',formula:'\\[\\delta=\\min\\{1,3\\varepsilon\\}.\\]'},
      {title:'按定义收尾',text:'若 \\(0<|x-1|<\\delta\\)，则误差小于 \\(\\varepsilon\\)。这对任意 \\(\\varepsilon>0\\) 成立，故极限等于 \\(2/3\\)。'}
    ],conclusion:'已由 ε–δ 定义严格证明极限为 \\(2/3\\)。',answer:'\\(\\frac23\\)'
  },
  {
    point:'柯西收敛准则与裂项放缩',
    lead:'不需要先知道极限是多少，只要证明任意两个足够靠后的部分和彼此任意接近。',
    steps:[
      {title:'叙述柯西准则',text:'实数列 \\(\\{a_n\\}\\) 收敛，当且仅当对任意 \\(\\varepsilon>0\\)，存在正整数 \\(N\\)，使得 \\(m,n>N\\) 时都有 \\(|a_m-a_n|<\\varepsilon\\)。'},
      {title:'写出尾项差',text:'不妨设 \\(m>n\\)。',formula:'\\[|a_m-a_n|=\\sum_{k=n+1}^{m}\\frac1{k^2}.\\]'},
      {title:'裂项放缩并求和',text:'对 \\(k\\ge2\\)，有 \\(1/k^2<1/[k(k-1)]=1/(k-1)-1/k\\)。',formula:'\\[|a_m-a_n|<\\sum_{k=n+1}^{m}\\left(\\frac1{k-1}-\\frac1k\\right)=\\frac1n-\\frac1m<\\frac1n.\\]'},
      {title:'选取 N',text:'给定 \\(\\varepsilon>0\\)，取 \\(N>1/\\varepsilon\\)。当 \\(m,n>N\\) 时，\\(1/n<\\varepsilon\\)，故数列满足柯西准则。'}
    ],conclusion:'该数列满足柯西收敛准则，因此在实数域中收敛。',answer:'数列收敛'
  },
  {
    point:'等价无穷小与复合函数',
    lead:'分子先有理化，分母中的 \\(1-\\cos\\sqrt{x}\\) 再使用标准等价无穷小。因为趋向是 \\(0^+\\)，\\(\\sqrt{x}\\) 有定义。',
    steps:[
      {title:'处理分子',text:'乘以共轭式。',formula:'\\[1-\\sqrt{\\cos x}=\\frac{1-\\cos x}{1+\\sqrt{\\cos x}}\\sim\\frac{x^2/2}{2}=\\frac{x^2}{4}.\\]'},
      {title:'处理复合余弦',text:'令 \\(u=\\sqrt{x}\\to0^+\\)，使用 \\(1-\\cos u\\sim u^2/2\\)。',formula:'\\[1-\\cos\\sqrt{x}\\sim\\frac{x}{2}.\\]'},
      {title:'合并分母',text:'题目分母还含一个 \\(x\\)。',formula:'\\[x(1-\\cos\\sqrt{x})\\sim\\frac{x^2}{2}.\\]'},
      {title:'比较主项',text:'分子主项为 \\(x^2/4\\)，分母主项为 \\(x^2/2\\)。',formula:'\\[\\lim_{x\\to0^+}\\frac{1-\\sqrt{\\cos x}}{x(1-\\cos\\sqrt{x})}=\\frac{1/4}{1/2}=\\frac12.\\]'}
    ],conclusion:'分子与分母的二阶主项之比为 \\(1/2\\)。',answer:'\\(\\frac12\\)'
  },
  {
    point:'函数极限的归结原则',
    lead:'归结原则把函数极限转化为所有趋近数列上的函数值极限。要证明极限不存在，只需构造两条趋向同一点而函数值极限不同的数列。',
    steps:[
      {title:'叙述归结原则',text:'\\(\\lim_{x\\to x_0}f(x)=A\\) 当且仅当：对任意满足 \\(x_n\\ne x_0\\)、\\(x_n\\to x_0\\) 的数列，都有 \\(f(x_n)\\to A\\)。'},
      {title:'构造函数值为 0 的数列',text:'令 \\(x_n=1/(2n\\pi)\\)，则 \\(x_n\\to0\\)。',formula:'\\[\\sin\\frac1{x_n}=\\sin(2n\\pi)=0.\\]'},
      {title:'构造函数值为 1 的数列',text:'令 \\(y_n=1/(2n\\pi+\\pi/2)\\)，则 \\(y_n\\to0\\)。',formula:'\\[\\sin\\frac1{y_n}=\\sin\\left(2n\\pi+\\frac\\pi2\\right)=1.\\]'},
      {title:'推出矛盾',text:'若原函数极限存在，两条数列对应的函数值必须趋于同一数；但这里分别恒为 \\(0\\) 和 \\(1\\)，所以极限不存在。'}
    ],conclusion:'两条趋零数列给出不同函数值极限，因此原极限不存在。',answer:'极限不存在'
  },
  {
    point:'上确界定义、递推构造与夹逼定理',
    lead:'上确界保证在 \\(a\\) 左侧任意小的邻域内都有集合元素；再让每次选取既超过上一项，又距离 \\(a\\) 不超过 \\(1/n\\)。',
    steps:[
      {title:'利用上确界的逼近性质',text:'因为 \\(a=\\sup S\\) 且 \\(a\\notin S\\)，对任意 \\(\\varepsilon>0\\) 都存在 \\(x\\in S\\) 满足 \\(a-\\varepsilon<x<a\\)。'},
      {title:'选取第一项',text:'取 \\(\\varepsilon=1\\)，可选 \\(x_1\\in S\\) 使',formula:'\\[a-1<x_1<a.\\]'},
      {title:'递推选取后续项',text:'已选 \\(x_{n-1}\\) 后，令 \\(\\varepsilon_n=\\min\\{1/n,a-x_{n-1}\\}\\)。由上确界性质选 \\(x_n\\in S\\) 使',formula:'\\[a-\\varepsilon_n<x_n<a.\\]'},
      {title:'证明严格递增',text:'因为 \\(\\varepsilon_n\\le a-x_{n-1}\\)，所以 \\(a-\\varepsilon_n\\ge x_{n-1}\\)，再结合严格不等式得到 \\(x_n>x_{n-1}\\)。'},
      {title:'证明趋于上确界',text:'又因 \\(\\varepsilon_n\\le1/n\\)，有',formula:'\\[a-\\frac1n\\le a-\\varepsilon_n<x_n<a.\\]'},
      {title:'应用夹逼定理',text:'左右两端都趋于 \\(a\\)，故 \\(x_n\\to a\\)。构造同时满足 \\(x_n\\in S\\) 和严格递增。'}
    ],conclusion:'构造出的数列严格递增、每项属于 \\(S\\)，并由夹逼定理趋于 \\(a\\)。',answer:'命题得证'
  }
];
