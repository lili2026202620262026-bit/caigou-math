window.CaigouBankConfig={"title":"数学分析 B · 大一上期中","eyebrow":"CAIGOU · STUDY & REVIEW","heading":"把每一步想清楚，<br><em>带菜狗一起上岸。</em>","description":"本题库仅供学习与复习参考","storageKey":"caigou-math-analysis-b-midterm-quality","choiceMode":true,"bankId":"math-analysis-b-midterm"};
window.CaigouBankQuestions=[
  {
    "no": 1,
    "type": "选择题",
    "text": "下列说法正确的是（ ）",
    "options": [
      "数列 \\(\\{a_n\\}\\) 收敛的充要条件是 \\(\\{a_{2n-1}\\}\\) 与 \\(\\{a_{2n}\\}\\) 均收敛且极限相等",
      "单调递减有界数列必有下确界，反之成立",
      "对任意 \\(\\varepsilon>0\\)，若有无穷多个 \\(n\\) 满足 \\(|x_n|<\\varepsilon\\)，则 \\(\\{x_n\\}\\) 为无穷小数列",
      "\\(\\displaystyle\\lim_{n\\to\\infty}\\frac1{\\sqrt[n]{n!}}=+\\infty\\)"
    ],
    "answer": "A",
    "solution": {
      "point": "子列判别、单调有界定理与无穷小定义",
      "lead": "这道题要逐项检查充分性和必要性，尤其注意“无穷多个指标满足”弱于“从某一项起全部满足”。",
      "steps": [
        {
          "title": "判断 A",
          "text": "若原数列收敛，则所有子列同极限；反过来，若奇数项子列和偶数项子列都趋于同一个数 \\(L\\)，任意足够靠后的项无论奇偶都接近 \\(L\\)，故原数列趋于 \\(L\\)。A 正确。"
        },
        {
          "title": "判断 B",
          "text": "单调递减且有界的数列确有下确界并收敛，但“有下确界”不能推出单调递减。例如 \\((-1)^n\\) 有下确界 \\(-1\\)，却不单调。B 错误。"
        },
        {
          "title": "判断 C",
          "text": "无穷小要求对每个 \\(\\varepsilon>0\\)，从某项起所有 \\(|x_n|<\\varepsilon\\)。仅有无穷多项满足，只能保证可能存在趋于 \\(0\\) 的子列。例如 \\(0,1,0,1,\\ldots\\) 不是无穷小。C 错误。"
        },
        {
          "title": "判断 D",
          "text": "由 \\(n!\\ge (n/2)^{n/2}\\)（取后半段因子）可知 \\(\\sqrt[n]{n!}\\to+\\infty\\)，所以它的倒数趋于 \\(0\\)。D 错误。",
          "formula": "\\[\\lim_{n\\to\\infty}\\frac1{\\sqrt[n]{n!}}=0.\\]"
        }
      ],
      "conclusion": "由逐项判断可知，只有 A 正确。"
    }
  },
  {
    "no": 2,
    "type": "选择题",
    "text": "当 \\(x\\to0\\) 时，\\(\\displaystyle\\frac1{x^2}\\sin\\frac1x\\) 是（ ）",
    "options": [
      "无穷小",
      "有界的，不是无穷小",
      "无穷大",
      "无界，但不是无穷大"
    ],
    "answer": "D",
    "solution": {
      "point": "无界与无穷大的区别",
      "lead": "乘子 \\(1/x^2\\) 的绝对值不断增大，但 \\(\\sin(1/x)\\) 反复变号并且也反复取零，因此不能趋向固定的正无穷或负无穷。",
      "steps": [
        {
          "title": "构造趋向正无穷的数列",
          "text": "令 \\(x_n=1/(\\pi/2+2n\\pi)\\)，则 \\(x_n\\to0\\) 且正弦值为 \\(1\\)。",
          "formula": "\\[\\frac1{x_n^2}\\sin\\frac1{x_n}=\\frac1{x_n^2}\\to+\\infty.\\]"
        },
        {
          "title": "构造趋向负无穷的数列",
          "text": "令 \\(y_n=1/(3\\pi/2+2n\\pi)\\)，则 \\(y_n\\to0\\) 且正弦值为 \\(-1\\)。",
          "formula": "\\[\\frac1{y_n^2}\\sin\\frac1{y_n}=-\\frac1{y_n^2}\\to-\\infty.\\]"
        },
        {
          "title": "判断类型",
          "text": "函数值沿不同趋零数列可任意大、也可任意小，所以在 \\(0\\) 的任意去心邻域内无界；但它不统一趋于 \\(+\\infty\\) 或 \\(-\\infty\\)。"
        },
        {
          "title": "排除绝对值趋于无穷",
          "text": "再取 \\(z_n=1/(n\\pi)\\to0\\)，函数值恒为 0。因而它的绝对值也不趋于无穷。无界只要求任意大函数值会出现；无穷大则要求自变量充分接近时始终足够大，两者不同。"
        }
      ],
      "conclusion": "函数在任意去心邻域内无界，但不趋于同一个无穷方向。"
    }
  },
  {
    "no": 3,
    "type": "选择题",
    "text": "当 \\(x\\to0\\) 时，下列无穷小量中，与 \\(x^3\\) 同阶的是（ ）。",
    "options": [
      "\\(\\ln(1+x)\\)",
      "\\(e^x-1\\)",
      "\\(\\tan x-\\sin x\\)",
      "\\(1-\\cos x\\)"
    ],
    "answer": "C",
    "solution": {
      "point": "无穷小阶数与乘积型等价替换",
      "lead": "“与 x 的三次方同阶”表示两者之比趋于有限非零常数。逐项计算主项，不能只凭哪个式子更复杂来选择。",
      "steps": [
        {
          "title": "确定前两项的阶数",
          "text": "基本极限给 \\(\\ln(1+x)\\sim x\\)、\\(e^x-1\\sim x\\)。二者与 \\(x^3\\) 的比值约为 \\(1/x^2\\)，不是有限非零常数。"
        },
        {
          "title": "把三角函数差改写为乘积",
          "text": "差式中不能分别用等价项相减；先精确因式分解，再替换乘积因子。",
          "formula": "\\[\\tan x-\\sin x=\\frac{\\sin x(1-\\cos x)}{\\cos x}\\sim\\frac{x^3}{2}.\\]"
        },
        {
          "title": "核对最后一项并比较",
          "text": "\\(1-\\cos x\\sim x^2/2\\)，是二阶；只有第三项与 \\(x^3\\) 的比值趋于 \\(1/2\\)，符合定义。"
        }
      ],
      "conclusion": "四项分别为一阶、一阶、三阶、二阶，所求是三阶项。"
    },
    "supplemental": true
  },
  {
    "no": 4,
    "type": "选择题",
    "text": "设 \\(\\displaystyle f(x)=\\arctan\\frac1{1-x}\\)，则 \\(x=1\\) 是（ ）间断点",
    "options": [
      "可去",
      "无穷",
      "跳跃",
      "振荡"
    ],
    "answer": "C",
    "solution": {
      "point": "左右极限与间断点分类",
      "lead": "\\(x=1\\) 处函数无定义，但左右两侧的 \\(1/(1-x)\\) 分别趋向正、负无穷，经过反正切后得到两个不同的有限极限。",
      "steps": [
        {
          "title": "求左极限",
          "text": "当 \\(x\\to1^-\\) 时，\\(1-x\\to0^+\\)。",
          "formula": "\\[\\frac1{1-x}\\to+\\infty,\\qquad f(x)\\to\\frac\\pi2.\\]"
        },
        {
          "title": "求右极限",
          "text": "当 \\(x\\to1^+\\) 时，\\(1-x\\to0^-\\)。",
          "formula": "\\[\\frac1{1-x}\\to-\\infty,\\qquad f(x)\\to-\\frac\\pi2.\\]"
        },
        {
          "title": "按定义分类",
          "text": "左右极限都存在且有限，但不相等，所以不是可去或无穷间断点，而是跳跃间断点。"
        }
      ],
      "conclusion": "左右极限均为有限值但不相等，因此属于跳跃间断点。"
    }
  },
  {
    "no": 5,
    "type": "选择题",
    "text": "函数 \\(\\displaystyle f(x)=\\frac{x}{a+e^{bx}}\\) 在 \\(\\mathbb R\\) 上连续，且 \\(\\displaystyle\\lim_{x\\to-\\infty}f(x)=0\\)，则下列说法正确的是（ ）",
    "options": [
      "\\(a<0,\\ b<0\\)",
      "\\(a\\ge0,\\ b>0\\)",
      "\\(a<0,\\ b>0\\)",
      "\\(a\\ge0,\\ b<0\\)"
    ],
    "answer": "D",
    "solution": {
      "point": "全局连续性与无穷远处极限",
      "lead": "先用极限确定 \\(b\\) 的符号，再用“分母对所有实数都不为零”限制 \\(a\\)。",
      "steps": [
        {
          "title": "由极限判断 b",
          "text": "若 \\(b>0\\)，当 \\(x\\to-\\infty\\) 时 \\(e^{bx}\\to0\\)，分母趋于 \\(a\\)，函数不可能趋于 \\(0\\)；若 \\(a=0\\) 还会发散。因此必须 \\(b<0\\)。"
        },
        {
          "title": "核对所需极限",
          "text": "当 \\(b<0\\) 且 \\(x\\to-\\infty\\) 时，\\(e^{bx}\\to+\\infty\\)，指数增长快于线性增长。",
          "formula": "\\[\\frac{x}{a+e^{bx}}\\to0.\\]"
        },
        {
          "title": "利用连续性限制 a",
          "text": "\\(e^{bx}\\) 的取值范围是 \\((0,+\\infty)\\)。若 \\(a<0\\)，可取某个 \\(x\\) 使 \\(e^{bx}=-a\\)，分母为零；若 \\(a\\ge0\\)，分母恒正。"
        },
        {
          "title": "合并条件",
          "text": "同时满足极限与全实数连续性的条件是 \\(a\\ge0,b<0\\)。"
        }
      ],
      "conclusion": "连续性和无穷远处极限共同给出 \\(a\\ge0,b<0\\)。"
    }
  },
  {
    "no": 6,
    "type": "解答题",
    "text": "用定义证明：\\(\\displaystyle\\lim_{x\\to1}\\frac{x^2-1}{2x^2-x-1}=\\frac23\\)。",
    "options": [],
    "answer": "\\(\\frac23\\)",
    "solution": {
      "point": "函数极限的 ε–δ 定义与分母控制",
      "lead": "证明的核心是先约去可去因子，再用一个固定邻域把分母与零隔开，最后让误差由 \\(|x-1|\\) 控制。",
      "steps": [
        {
          "title": "化简误差",
          "text": "当 \\(x\\ne1\\) 时，分解 \\(2x^2-x-1=(x-1)(2x+1)\\)。",
          "formula": "\\[\\left|\\frac{x^2-1}{2x^2-x-1}-\\frac23\\right|=\\frac{|x-1|}{3|2x+1|}.\\]"
        },
        {
          "title": "控制分母",
          "text": "先要求 \\(|x-1|<1\\)，则 \\(0<x<2\\)，从而 \\(|2x+1|>1\\)。",
          "formula": "\\[\\frac{|x-1|}{3|2x+1|}<\\frac{|x-1|}{3}.\\]"
        },
        {
          "title": "根据 ε 选择 δ",
          "text": "为了使上式小于 \\(\\varepsilon\\)，只需同时有 \\(|x-1|<1\\) 和 \\(|x-1|<3\\varepsilon\\)。取",
          "formula": "\\[\\delta=\\min\\{1,3\\varepsilon\\}.\\]"
        },
        {
          "title": "按定义收尾",
          "text": "若 \\(0<|x-1|<\\delta\\)，则误差小于 \\(\\varepsilon\\)。这对任意 \\(\\varepsilon>0\\) 成立，故极限等于 \\(2/3\\)。"
        }
      ],
      "conclusion": "已由 ε–δ 定义严格证明极限为 \\(2/3\\)。"
    }
  },
  {
    "no": 7,
    "type": "解答题",
    "text": "叙述柯西收敛准则，并用它证明数列 \\(\\displaystyle a_n=1+\\frac1{2^2}+\\frac1{3^2}+\\cdots+\\frac1{n^2}\\) 收敛。",
    "options": [],
    "answer": "数列收敛",
    "solution": {
      "point": "柯西收敛准则与裂项放缩",
      "lead": "不需要先知道极限是多少，只要证明任意两个足够靠后的部分和彼此任意接近。",
      "steps": [
        {
          "title": "叙述柯西准则",
          "text": "实数列 \\(\\{a_n\\}\\) 收敛，当且仅当对任意 \\(\\varepsilon>0\\)，存在正整数 \\(N\\)，使得 \\(m,n>N\\) 时都有 \\(|a_m-a_n|<\\varepsilon\\)。"
        },
        {
          "title": "写出尾项差",
          "text": "不妨设 \\(m>n\\)。",
          "formula": "\\[|a_m-a_n|=\\sum_{k=n+1}^{m}\\frac1{k^2}.\\]"
        },
        {
          "title": "裂项放缩并求和",
          "text": "对 \\(k\\ge2\\)，有 \\(1/k^2<1/[k(k-1)]=1/(k-1)-1/k\\)。",
          "formula": "\\[|a_m-a_n|<\\sum_{k=n+1}^{m}\\left(\\frac1{k-1}-\\frac1k\\right)=\\frac1n-\\frac1m<\\frac1n.\\]"
        },
        {
          "title": "选取 N",
          "text": "给定 \\(\\varepsilon>0\\)，取 \\(N>1/\\varepsilon\\)。当 \\(m,n>N\\) 时，\\(1/n<\\varepsilon\\)，故数列满足柯西准则。"
        }
      ],
      "conclusion": "该数列满足柯西收敛准则，因此在实数域中收敛。"
    }
  },
  {
    "no": 8,
    "type": "解答题",
    "text": "计算 \\(\\displaystyle\\lim_{x\\to0^+}\\frac{1-\\sqrt{\\cos x}}{x(1-\\cos\\sqrt{x})}\\)。",
    "options": [],
    "answer": "\\(\\frac12\\)",
    "solution": {
      "point": "等价无穷小与复合函数",
      "lead": "分子先有理化，分母中的 \\(1-\\cos\\sqrt{x}\\) 再使用标准等价无穷小。因为趋向是 \\(0^+\\)，\\(\\sqrt{x}\\) 有定义。",
      "steps": [
        {
          "title": "处理分子",
          "text": "乘以共轭式。",
          "formula": "\\[1-\\sqrt{\\cos x}=\\frac{1-\\cos x}{1+\\sqrt{\\cos x}}\\sim\\frac{x^2/2}{2}=\\frac{x^2}{4}.\\]"
        },
        {
          "title": "处理复合余弦",
          "text": "令 \\(u=\\sqrt{x}\\to0^+\\)，使用 \\(1-\\cos u\\sim u^2/2\\)。",
          "formula": "\\[1-\\cos\\sqrt{x}\\sim\\frac{x}{2}.\\]"
        },
        {
          "title": "合并分母",
          "text": "题目分母还含一个 \\(x\\)。",
          "formula": "\\[x(1-\\cos\\sqrt{x})\\sim\\frac{x^2}{2}.\\]"
        },
        {
          "title": "比较主项",
          "text": "分子主项为 \\(x^2/4\\)，分母主项为 \\(x^2/2\\)。",
          "formula": "\\[\\lim_{x\\to0^+}\\frac{1-\\sqrt{\\cos x}}{x(1-\\cos\\sqrt{x})}=\\frac{1/4}{1/2}=\\frac12.\\]"
        }
      ],
      "conclusion": "分子与分母的二阶主项之比为 \\(1/2\\)。"
    }
  },
  {
    "no": 9,
    "type": "解答题",
    "text": "叙述函数极限的归结原则，并证明极限 \\(\\displaystyle\\lim_{x\\to0}\\sin\\frac1x\\) 不存在。",
    "options": [],
    "answer": "极限不存在",
    "solution": {
      "point": "函数极限的归结原则",
      "lead": "归结原则把函数极限转化为所有趋近数列上的函数值极限。要证明极限不存在，只需构造两条趋向同一点而函数值极限不同的数列。",
      "steps": [
        {
          "title": "叙述归结原则",
          "text": "\\(\\lim_{x\\to x_0}f(x)=A\\) 当且仅当：对任意满足 \\(x_n\\ne x_0\\)、\\(x_n\\to x_0\\) 的数列，都有 \\(f(x_n)\\to A\\)。"
        },
        {
          "title": "构造函数值为 0 的数列",
          "text": "令 \\(x_n=1/(2n\\pi)\\)，则 \\(x_n\\to0\\)。",
          "formula": "\\[\\sin\\frac1{x_n}=\\sin(2n\\pi)=0.\\]"
        },
        {
          "title": "构造函数值为 1 的数列",
          "text": "令 \\(y_n=1/(2n\\pi+\\pi/2)\\)，则 \\(y_n\\to0\\)。",
          "formula": "\\[\\sin\\frac1{y_n}=\\sin\\left(2n\\pi+\\frac\\pi2\\right)=1.\\]"
        },
        {
          "title": "推出矛盾",
          "text": "若原函数极限存在，两条数列对应的函数值必须趋于同一数；但这里分别恒为 \\(0\\) 和 \\(1\\)，所以极限不存在。"
        }
      ],
      "conclusion": "两条趋零数列给出不同函数值极限，因此原极限不存在。"
    }
  },
  {
    "no": 10,
    "type": "解答题",
    "text": "设 \\(S\\) 为有界数集。证明：若 \\(\\sup S=a\\notin S\\)，则存在严格递增数列 \\(\\{x_n\\}\\subset S\\)，使 \\(\\displaystyle\\lim_{n\\to\\infty}x_n=a\\)。",
    "options": [],
    "answer": "命题得证",
    "solution": {
      "point": "上确界定义、递推构造与夹逼定理",
      "lead": "上确界保证在 \\(a\\) 左侧任意小的邻域内都有集合元素；再让每次选取既超过上一项，又距离 \\(a\\) 不超过 \\(1/n\\)。",
      "steps": [
        {
          "title": "利用上确界的逼近性质",
          "text": "因为 \\(a=\\sup S\\) 且 \\(a\\notin S\\)，对任意 \\(\\varepsilon>0\\) 都存在 \\(x\\in S\\) 满足 \\(a-\\varepsilon<x<a\\)。"
        },
        {
          "title": "选取第一项",
          "text": "取 \\(\\varepsilon=1\\)，可选 \\(x_1\\in S\\) 使",
          "formula": "\\[a-1<x_1<a.\\]"
        },
        {
          "title": "递推选取后续项",
          "text": "已选 \\(x_{n-1}\\) 后，令 \\(\\varepsilon_n=\\min\\{1/n,a-x_{n-1}\\}\\)。由上确界性质选 \\(x_n\\in S\\) 使",
          "formula": "\\[a-\\varepsilon_n<x_n<a.\\]"
        },
        {
          "title": "证明严格递增",
          "text": "因为 \\(\\varepsilon_n\\le a-x_{n-1}\\)，所以 \\(a-\\varepsilon_n\\ge x_{n-1}\\)，再结合严格不等式得到 \\(x_n>x_{n-1}\\)。"
        },
        {
          "title": "证明趋于上确界",
          "text": "又因 \\(\\varepsilon_n\\le1/n\\)，有",
          "formula": "\\[a-\\frac1n\\le a-\\varepsilon_n<x_n<a.\\]"
        },
        {
          "title": "应用夹逼定理",
          "text": "左右两端都趋于 \\(a\\)，故 \\(x_n\\to a\\)。构造同时满足 \\(x_n\\in S\\) 和严格递增。"
        }
      ],
      "conclusion": "构造出的数列严格递增、每项属于 \\(S\\)，并由夹逼定理趋于 \\(a\\)。"
    }
  }
];
