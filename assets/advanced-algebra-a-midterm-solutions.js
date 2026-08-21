window.AdvancedAlgebraAMidtermSolutions = [
  {
    point: '行列式的多重线性与秩一矩阵结构',
    lead: '四行四列都由“全 1 矩阵”加上一个对角修正得到。按列使用行列式的多重线性后，含两个及以上全 1 列的项都因列相同而为零。',
    steps: [
      {
        title: '拆出对角部分',
        text: '记全 1 列向量为 \\(\\mathbf 1\\)，并令 \\(D=\\operatorname{diag}(x,-x,y,-y)\\)。题目中的矩阵可写为',
        formula: '\\[M=D+\\mathbf 1\\mathbf 1^{\\mathsf T}.\\]'
      },
      {
        title: '利用多重线性展开',
        text: '记 \\(D\\) 的四个对角元为 \\(d_1,d_2,d_3,d_4\\)。展开时，取四个对角列得到 \\(d_1d_2d_3d_4\\)；恰取一个全 1 列时得到其余三个对角元之积。',
        formula: '\\[\\det M=d_1d_2d_3d_4+\\sum_{j=1}^{4}\\prod_{i\\ne j}d_i.\\]'
      },
      {
        title: '代入并消去交叉项',
        text: '代入 \\((d_1,d_2,d_3,d_4)=(x,-x,y,-y)\\)，三次乘积两两抵消。',
        formula: '\\[\\begin{aligned}\\det M&=x(-x)y(-y)\\\\&\\quad+(-x)y(-y)+xy(-y)+x(-x)(-y)+x(-x)y\\\\&=x^2y^2+xy^2-xy^2+x^2y-x^2y\\\\&=x^2y^2.\\end{aligned}\\]'
      }
    ],
    conclusion: '该等式是关于 \\(x,y\\) 的恒等式，因此也自动包含 \\(x=0\\) 或 \\(y=0\\) 的情形。'
  },
  {
    point: '代数余子式的线性组合与按行展开',
    lead: '固定第 \\(i\\) 行的代数余子式 \\(A_{ij}\\) 时，它们只由其余各行决定。于是 \\(c_1A_{i1}+\\cdots+c_nA_{in}\\) 就是把原矩阵第 \\(i\\) 行替换为 \\((c_1,\\ldots,c_n)\\) 后的行列式。',
    steps: [
      {
        title: '把第一问化成新行列式',
        text: '将原行列式第 2 行替换为 \\((1,1,1,1)\\)，按第 2 行展开即可得到所求的四个代数余子式之和。',
        formula: '\\[A_{21}+A_{22}+A_{23}+A_{24}=\\begin{vmatrix}2&3&1&0\\\\1&1&1&1\\\\1&1&-1&2\\\\-1&-1&-1&1\\end{vmatrix}.\\]'
      },
      {
        title: '计算第一问',
        text: '作不改变行列式值的变换 \\(R_3\\leftarrow R_3-R_2\\)、\\(R_4\\leftarrow R_4+R_2\\)，矩阵成为分块上三角形。',
        formula: '\\[\\begin{vmatrix}2&3&1&0\\\\1&1&1&1\\\\0&0&-2&1\\\\0&0&0&2\\end{vmatrix}=\\begin{vmatrix}2&3\\\\1&1\\end{vmatrix}\\begin{vmatrix}-2&1\\\\0&2\\end{vmatrix}=(-1)(-4)=4.\\]'
      },
      {
        title: '把第二问化成新行列式',
        text: '系数中没有 \\(A_{34}\\)，可把它看成 \\(0A_{34}\\)。将第 3 行替换为 \\((1,1,2,0)\\)。',
        formula: '\\[A_{31}+A_{32}+2A_{33}=\\begin{vmatrix}2&3&1&0\\\\0&0&3&5\\\\1&1&2&0\\\\-1&-1&-1&1\\end{vmatrix}.\\]'
      },
      {
        title: '计算第二问',
        text: '先作 \\(R_4\\leftarrow R_4+R_3\\)，再交换第 2、3 行。一次换行使行列式变号，交换后的矩阵是分块上三角形。',
        formula: '\\[\\begin{aligned}\\det&=-\\begin{vmatrix}2&3&1&0\\\\1&1&2&0\\\\0&0&3&5\\\\0&0&1&1\\end{vmatrix}\\\\&=-\\begin{vmatrix}2&3\\\\1&1\\end{vmatrix}\\begin{vmatrix}3&5\\\\1&1\\end{vmatrix}=-(-1)(-2)=-2.\\end{aligned}\\]'
      }
    ],
    conclusion: '两个线性组合分别等于 \\(4\\) 与 \\(-2\\)。'
  },
  {
    point: '齐次线性方程组非零解与系数行列式',
    lead: '三元齐次方程组存在非零解，当且仅当系数矩阵不可逆，也就是系数行列式为零。',
    steps: [
      {
        title: '写出系数矩阵',
        text: '把方程组记为 \\(B\\mathbf x=\\mathbf 0\\)，其中',
        formula: '\\[B=\\begin{pmatrix}\\lambda&1&1\\\\1&\\lambda&1\\\\1&1&\\lambda\\end{pmatrix}.\\]'
      },
      {
        title: '计算系数行列式',
        text: '直接展开并因式分解，可得到一个三次多项式。',
        formula: '\\[\\det B=\\lambda^3-3\\lambda+2=(\\lambda+2)(\\lambda-1)^2.\\]'
      },
      {
        title: '使用非零解判据',
        text: '若 \\(\\det B\\ne0\\)，矩阵可逆，齐次方程组只有零解；要有非零解，必须且只需 \\(\\det B=0\\)。',
        formula: '\\[(\\lambda+2)(\\lambda-1)^2=0\\quad\\Longrightarrow\\quad\\lambda=-2\\text{ 或 }\\lambda=1.\\]'
      }
    ],
    conclusion: '当 \\(\\lambda=-2\\) 或 \\(\\lambda=1\\) 时，系数矩阵降秩，方程组存在非零解。'
  },
  {
    point: '幂零矩阵与矩阵二项式定理',
    lead: '矩阵是一个三阶 Jordan 块。把它拆成数量矩阵与幂零矩阵后，二者可交换，而且幂零部分的三次幂为零，所以二项展开只保留前三项。',
    steps: [
      {
        title: '拆成可交换的两部分',
        text: '令 \\(A=\\lambda I+N\\)，其中 \\(N\\) 只有超对角线上的两个元素为 \\(1\\)。',
        formula: '\\[N=\\begin{pmatrix}0&1&0\\\\0&0&1\\\\0&0&0\\end{pmatrix},\\qquad N^2=\\begin{pmatrix}0&0&1\\\\0&0&0\\\\0&0&0\\end{pmatrix},\\qquad N^3=0.\\]'
      },
      {
        title: '使用矩阵二项式定理',
        text: '因为 \\(\\lambda I\\) 与 \\(N\\) 可交换，且所有含 \\(N^j\\,(j\\ge3)\\) 的项都为零。对任意非负整数 \\(k\\)，',
        formula: '\\[A^k=\\sum_{j=0}^{\\min(2,k)}\\binom{k}{j}\\lambda^{k-j}N^j.\\]'
      },
      {
        title: '写成矩阵形式',
        text: '当 \\(k\\ge2\\) 时，把 \\(I,N,N^2\\) 的对应位置相加即可。',
        formula: '\\[A^k=\\begin{pmatrix}\\lambda^k&k\\lambda^{k-1}&\\dfrac{k(k-1)}2\\lambda^{k-2}\\\\0&\\lambda^k&k\\lambda^{k-1}\\\\0&0&\\lambda^k\\end{pmatrix}.\\]'
      }
    ],
    note: '矩阵形式中含有 \\(\\lambda^{k-2}\\)，因此最适合写在 \\(k\\ge2\\) 的情形；\\(k=0,1\\) 分别直接得到 \\(I,A\\)。前一步的有限求和公式对所有 \\(k\\ge0\\) 都没有负指数歧义。',
    conclusion: '原图中的答案正是上述 \\(k\\ge2\\) 的矩阵；有限求和形式给出了完整的边界情形。'
  },
  {
    point: '伴随矩阵恒等式与奇异、非奇异分类',
    lead: '核心恒等式是 \\(AA^*=|A|I\\)。取行列式后，非奇异情形可以直接约去 \\(|A|\\)；奇异情形则要单独证明 \\(|A^*|=0\\)，不能把零因子约掉。',
    steps: [
      {
        title: '从伴随矩阵恒等式出发',
        text: '对任意 \\(n\\) 阶方阵，都有',
        formula: '\\[AA^*=|A|I_n.\\]'
      },
      {
        title: '两边取行列式',
        text: '利用乘积行列式和数量矩阵的行列式公式，得到',
        formula: '\\[|A|\\,|A^*|=\\bigl||A|I_n\\bigr|=|A|^n.\\]'
      },
      {
        title: '处理非奇异情形',
        text: '若 \\(|A|\\ne0\\)，可在等式两边约去一个 \\(|A|\\)。',
        formula: '\\[|A^*|=|A|^{n-1}.\\]'
      },
      {
        title: '处理奇异但非零的情形',
        text: '设 \\(|A|=0\\) 且 \\(A\\ne0\\)。若反设 \\(|A^*|\\ne0\\)，则 \\(A^*\\) 可逆。由 \\(AA^*=0\\) 右乘 \\((A^*)^{-1}\\)，会推出 \\(A=0\\)，矛盾。因此 \\(|A^*|=0\\)。',
        formula: '\\[|A|=0,\\ A\\ne0\\quad\\Longrightarrow\\quad |A^*|=0=|A|^{n-1}.\\]'
      },
      {
        title: '补上零矩阵情形',
        text: '若 \\(A=0\\) 且 \\(n\\ge2\\)，伴随矩阵的每个元素都是零矩阵的 \\((n-1)\\) 阶子式，故 \\(A^*=0\\)。等式仍成立。',
        formula: '\\[|A^*|=0=0^{n-1}=|A|^{n-1}.\\]'
      }
    ],
    conclusion: '非奇异与奇异两类已经覆盖所有 \\(n\\ge2\\) 阶方阵，因此 \\(|A^*|=|A|^{n-1}\\) 恒成立。'
  }
];
window.AdvancedAlgebraAMidtermSolutions = window.AdvancedAlgebraAMidtermSolutions.map(solution => ({sourceLevel:'原卷还原',sourceNote:'题干由清晰原卷照片逐题核对。',...solution}));
