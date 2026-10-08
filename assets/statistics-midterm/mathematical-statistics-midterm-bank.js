window.CaigouBankConfig={
  "eyebrow": "CAIGOU · STUDY & REVIEW",
  "description": "本题库仅供学习与复习参考",
  "storageKey": "caigou-mathematical-statistics-midterm-v1",
  "choiceMode": true,
  "bankId": "mathematical-statistics-midterm",
  "title": "数理统计 · 大二上期中"
};
window.CaigouBankQuestions=[
  {
    "no": 1,
    "type": "填空题",
    "text": "【一、填空题 1】设 \\(X_1,\\ldots,X_n\\) 为来自正态总体的简单随机样本，\\(E(X_i)=\\mu\\)，\\(D(X_i)=\\sigma^2\\)。令 \\(\\bar X=\\frac1n\\sum_{i=1}^nX_i\\)，\\(S_n^2=\\frac1n\\sum_{i=1}^n(X_i-\\bar X)^2\\)。求 \\(D(\\bar X)\\) 和 \\(E(S_n^2)\\)。",
    "options": [],
    "answer": "\\(D(\\bar X)=\\sigma^2/n\\)；\\(E(S_n^2)=(n-1)\\sigma^2/n\\)",
    "grading": "manual",
    "solution": {
      "point": "样本均值方差与样本中心矩期望",
      "lead": "简单随机样本相互独立。先用独立性计算均值方差，再将离差平方和改写为围绕总体均值的平方和。",
      "steps": [
        {
          "title": "计算均值方差",
          "text": "独立性使不同样本间协方差为零；每一项方差均为 \\(\\sigma^2\\)。",
          "formula": "\\[D(\\bar X)=\\frac1{n^2}\\sum_{i=1}^nD(X_i)=\\frac{\\sigma^2}{n}\\]"
        },
        {
          "title": "改写离差平方和",
          "text": "展开平方并利用 \\(\\sum_i(X_i-\\bar X)=0\\)，得到恒等式。",
          "formula": "\\[\\sum_{i=1}^n(X_i-\\bar X)^2=\\sum_{i=1}^n(X_i-\\mu)^2-n(\\bar X-\\mu)^2\\]"
        },
        {
          "title": "取期望",
          "text": "均值无偏，故右侧第二项的期望为 \\(nD(\\bar X)=\\sigma^2\\)；第一项期望为 \\(n\\sigma^2\\)，最后除以 \\(n\\)。",
          "formula": "\\[E(S_n^2)=\\frac1n(n\\sigma^2-\\sigma^2)=\\frac{n-1}{n}\\sigma^2\\]"
        }
      ],
      "pitfall": "分母为 \\(n\\) 的样本中心二阶矩与分母为 \\(n-1\\) 的无偏样本方差不同。"
    }
  },
  {
    "no": 2,
    "type": "填空题",
    "text": "【一、填空题 2】设 \\(X_1,\\ldots,X_n\\) 是来自连续总体的简单随机样本，总体分布函数为 \\(F(x)\\)，密度为 \\(f(x)\\)。写出最小次序统计量 \\(X_{(1)}=\\min\\{X_1,\\ldots,X_n\\}\\) 的概率密度。",
    "options": [],
    "answer": "\\(f_{X_{(1)}}(x)=n[1-F(x)]^{n-1}f(x)\\)",
    "grading": "manual",
    "solution": {
      "point": "最小次序统计量的分布",
      "lead": "最小值大于一个阈值等价于所有样本都大于该阈值，先算生存概率，再求分布函数的导数。",
      "steps": [
        {
          "title": "利用独立性",
          "text": "事件 \\(X_{(1)}>x\\) 是所有 \\(X_i>x\\) 同时发生。",
          "formula": "\\[P(X_{(1)}>x)=[1-F(x)]^n\\]"
        },
        {
          "title": "求分布函数和密度",
          "text": "取补事件得到分布函数，再对 \\(x\\) 求导；链式法则中的两个负号抵消。",
          "formula": "\\[\\begin{aligned}F_{X_{(1)}}(x)&=1-[1-F(x)]^n\\\\f_{X_{(1)}}(x)&=n[1-F(x)]^{n-1}f(x)\\end{aligned}\\]"
        }
      ],
      "pitfall": "最大值的密度才是 \\(nF(x)^{n-1}f(x)\\)，不要混用。"
    }
  },
  {
    "no": 3,
    "type": "填空题",
    "text": "【一、填空题 3】设 \\(X_1,\\ldots,X_n\\) 为来自 \\(N(\\mu,\\sigma^2)\\) 的简单随机样本，均值、方差均未知。求 \\(\\mu\\) 与 \\(\\sigma^2\\) 的矩估计。",
    "options": [],
    "answer": "\\(\\hat\\mu=\\bar X\\)；\\(\\hat\\sigma^2=\\frac1n\\sum_{i=1}^n(X_i-\\bar X)^2\\)",
    "grading": "manual",
    "solution": {
      "point": "正态总体的矩估计",
      "lead": "矩估计把总体原点矩与相应样本原点矩相等。两个未知参数需要前两个矩方程。",
      "steps": [
        {
          "title": "写出总体矩",
          "text": "方差定义给出 \\(E(X^2)=D(X)+[E(X)]^2\\)。",
          "formula": "\\[E(X)=\\mu,\\qquad E(X^2)=\\mu^2+\\sigma^2\\]"
        },
        {
          "title": "建立矩方程",
          "text": "令一阶和二阶总体原点矩分别等于样本平均与样本平方的平均。",
          "formula": "\\[\\hat\\mu=\\bar X,\\qquad \\hat\\mu^2+\\hat\\sigma^2=\\frac1n\\sum_{i=1}^nX_i^2\\]"
        },
        {
          "title": "解出方差估计",
          "text": "消去均值估计，展开样本离差平方和可核验两种写法相同。",
          "formula": "\\[\\begin{aligned}\\hat\\sigma^2&=\\frac1n\\sum_{i=1}^nX_i^2-\\bar X^2\\\\&=\\frac1n\\sum_{i=1}^n(X_i-\\bar X)^2\\end{aligned}\\]"
        }
      ],
      "pitfall": "矩估计不必无偏；这里方差矩估计的分母是 \\(n\\)。"
    }
  },
  {
    "no": 4,
    "type": "计算题",
    "text": "【二、计算题 1】设 \\(X_1,\\ldots,X_n\\) 为来自 \\(N(\\mu,\\sigma^2)\\) 的简单随机样本，\\(n\\ge2\\)，\\(\\sigma^2>0\\)。令 \\(S^2=\\frac1{n-1}\\sum_{i=1}^n(X_i-\\bar X)^2\\)，\\(S=\\sqrt{S^2}\\)。（1）求 \\(\\frac{\\bar X-\\mu}{S/\\sqrt n}\\) 的分布。（2）已知 \\(P(\\bar X>kS+\\mu)=\\alpha\\)，\\(0\u003c\\alpha\u003c1\\)，求 \\(k\\)。用 \\(t_{p,\\nu}\\) 表示自由度 \\(\\nu\\) 的 t 分布的下侧 \\(p\\) 分位数。",
    "options": [],
    "answer": "\\(T\\sim t_{n-1}\\)；\\(k=t_{1-\\alpha,n-1}/\\sqrt n\\)",
    "grading": "manual",
    "solution": {
      "point": "正态总体的 t 统计量与尾概率",
      "lead": "正态样本的均值与样本方差独立，可构造 t 统计量。第二问必须按题干的阈值重新标准化。",
      "steps": [
        {
          "title": "构造独立的正态与卡方变量",
          "text": "正态总体下样本均值仍为正态；离差平方和除以总体方差服从自由度为 \\(n-1\\) 的卡方分布，且与样本均值独立。",
          "formula": "\\[\\begin{aligned}Z&=\\frac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)\\\\U&=\\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2_{n-1}\\end{aligned}\\]"
        },
        {
          "title": "应用 t 分布定义",
          "text": "独立标准正态变量除以卡方变量除以其自由度后的平方根，即为 t 分布。",
          "formula": "\\[T=\\frac{Z}{\\sqrt{U/(n-1)}}=\\frac{\\bar X-\\mu}{S/\\sqrt n}\\sim t_{n-1}\\]"
        },
        {
          "title": "转换不等式",
          "text": "在非退化正态总体和 \\(n\\ge2\\) 下，\\(S>0\\) 几乎必然成立；两边除以 \\(S/\\sqrt n\\)，阈值成为 \\(k\\sqrt n\\)。",
          "formula": "\\[\\begin{aligned}\\alpha&=P(\\bar X-\\mu>kS)\\\\&=P(T>k\\sqrt n)\\end{aligned}\\]"
        },
        {
          "title": "匹配分位数并回代",
          "text": "t 分布连续且分布函数严格递增，尾概率为 \\(\\alpha\\) 的阈值是下侧 \\(1-\\alpha\\) 分位数。回代可恢复指定尾概率。",
          "formula": "\\[k\\sqrt n=t_{1-\\alpha,n-1},\\qquad k=\\frac{t_{1-\\alpha,n-1}}{\\sqrt n}\\]"
        }
      ],
      "pitfall": "题干阈值是 \\(kS\\)，不是 \\(kS/\\sqrt n\\)。当 \\(\\alpha>1/2\\) 时 \\(k\u003c0\\)，这是允许的。"
    }
  },
  {
    "no": 5,
    "type": "计算题",
    "text": "【二、计算题 2】设 \\(X_1,\\ldots,X_n\\) 为来自泊松总体 \\(P(\\lambda)\\) 的简单随机样本，\\(\\lambda>0\\)。求参数 \\(\\lambda\\) 的矩估计，并给出一个无偏估计。",
    "options": [],
    "answer": "\\(\\hat\\lambda=\\bar X\\) 同时是矩估计与无偏估计。",
    "grading": "manual",
    "solution": {
      "point": "泊松参数的矩估计与无偏性",
      "lead": "泊松分布的均值等于其参数，用一阶矩即可估计；无偏性另外通过期望验证。",
      "steps": [
        {
          "title": "核对总体均值",
          "text": "从泊松概率质量函数计算期望，将 \\(j\\lambda^j/j!\\) 化为 \\(\\lambda\\lambda^{j-1}/(j-1)!\\)，余下级数为指数函数。",
          "formula": "\\[\\begin{aligned}E(X)&=\\sum_{j=1}^{\\infty}j\\frac{e^{-\\lambda}\\lambda^j}{j!}\\\\&=\\lambda e^{-\\lambda}\\sum_{r=0}^{\\infty}\\frac{\\lambda^r}{r!}=\\lambda\\end{aligned}\\]"
        },
        {
          "title": "建立矩估计",
          "text": "把总体均值与样本均值相等，即可解出唯一未知参数。",
          "formula": "\\[\\hat\\lambda_{\\mathrm{M}}=\\bar X=\\frac1n\\sum_{i=1}^nX_i\\]"
        },
        {
          "title": "验证无偏性",
          "text": "期望的线性性说明样本平均的期望就是总体均值，因此同一个估计量满足无偏性。",
          "formula": "\\[E(\\bar X)=\\frac1n\\sum_{i=1}^nE(X_i)=\\lambda\\]"
        }
      ],
      "pitfall": "无偏估计不一定唯一，这里给出的是最直接的样本均值。全零样本时矩估计可取 0，虽位于严格正参数空间的边界。"
    }
  },
  {
    "no": 6,
    "type": "计算题",
    "text": "【二、计算题 3】设 \\(X_1,\\ldots,X_n\\) 为来自 \\(N(\\mu,\\sigma^2)\\) 的简单随机样本，\\(n\\ge2\\)。（1）判断 \\(\\hat\\mu=\\bar X=\\frac1n\\sum_{i=1}^nX_i\\) 是否为 \\(\\mu\\) 的无偏相合估计，并证明。（2）判断 \\(\\hat\\sigma^2=\\frac1{n-1}\\sum_{i=1}^n(X_i-\\bar X)^2\\) 是否为 \\(\\sigma^2\\) 的无偏估计，并证明。",
    "options": [],
    "answer": "（1）是无偏且相合的估计。（2）是无偏估计。",
    "grading": "manual",
    "solution": {
      "point": "无偏性、相合性与样本方差修正",
      "lead": "无偏性要求估计量的期望等于参数；相合性要求样本量增加时依概率收敛。两者需分别证明。",
      "steps": [
        {
          "title": "证明均值无偏",
          "text": "利用期望线性性，每个样本的期望均为 \\(\\mu\\)。",
          "formula": "\\[E(\\bar X)=\\frac1n\\sum_{i=1}^nE(X_i)=\\mu\\]"
        },
        {
          "title": "证明均值相合",
          "text": "简单随机样本独立，均值方差为 \\(\\sigma^2/n\\)。对任意固定 \\(\\varepsilon>0\\)，切比雪夫不等式给出偏离概率上界趋于零，即依概率收敛。",
          "formula": "\\[P(|\\bar X-\\mu|\\ge\\varepsilon)\\le\\frac{\\sigma^2}{n\\varepsilon^2}\\longrightarrow0\\]"
        },
        {
          "title": "计算离差平方和期望",
          "text": "把离差平方和改写为围绕总体均值的平方和减去均值修正项。两项期望分别为 \\(n\\sigma^2\\) 和 \\(\\sigma^2\\)。",
          "formula": "\\[\\begin{aligned}\\sum_i(X_i-\\bar X)^2&=\\sum_i(X_i-\\mu)^2\\\\&\\quad-n(\\bar X-\\mu)^2\\\\E\\!\\left[\\sum_i(X_i-\\bar X)^2\\right]&=(n-1)\\sigma^2\\end{aligned}\\]"
        },
        {
          "title": "验证修正样本方差无偏",
          "text": "把上一步期望除以 \\(n-1\\)，得到目标总体方差，完成证明。",
          "formula": "\\[E(\\hat\\sigma^2)=\\frac{(n-1)\\sigma^2}{n-1}=\\sigma^2\\]"
        }
      ],
      "pitfall": "无偏性是固定样本量下的期望性质；相合性是样本量趋于无穷时的收敛性质，不能由无偏直接推出相合。"
    }
  }
];
