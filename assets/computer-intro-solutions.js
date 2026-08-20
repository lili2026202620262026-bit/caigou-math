window.ComputerIntroSolutions = [
  {point:'进制转换',lead:'255 恰好比 256 小 1，因此在二进制和十六进制中都可以直接利用“各位全满”。',steps:[
    {title:'转换为二进制',text:'8 位二进制能表示 0～255。255=2⁸-1，所以从 2⁷ 到 2⁰ 的每一位都是 1。',code:'255₁₀ = 11111111₂'},
    {title:'按四位分组',text:'将二进制数从右向左每四位分组：1111 1111。每组 1111 对应十六进制 F。',code:'1111₂ = F₁₆  →  255₁₀ = FF₁₆'}
  ],conclusion:'两个空依次填写 11111111、FF。',answer:'11111111，FF'},
  {point:'地址位数与可寻址容量',lead:'n 位二进制地址共有 2ⁿ 种不同组合；若每个地址对应 1 B，最大容量就等于地址数。',steps:[
    {title:'计算地址数量',text:'8 位中的每一位都有 0、1 两种选择，组合数为 2⁸。',code:'2⁸ = 256'},
    {title:'换算最大容量',text:'题目按字节寻址，每个地址存放 1 B，因此 256 个地址对应 256 B。'}
  ],conclusion:'两个空依次填写 256、256。',answer:'256，256'},
  {point:'CPU 的基本组成',lead:'按照本课程使用的计算机组成模型，CPU 的基本功能部件由运算、存储和控制三部分构成。',steps:[
    {title:'对应已有部件',text:'运算器负责算术和逻辑运算；存储器保存执行中需要的数据或指令。'},
    {title:'补出缺少部件',text:'还需要控制器解释指令并协调各部件按顺序工作。'}
  ],conclusion:'空格填写“控制器”。',answer:'控制器'},
  {point:'进程三状态模型',lead:'判断状态时要看进程为什么不能运行：缺少 CPU 是就绪，等待外部事件则是阻塞。',steps:[
    {title:'识别题目条件',text:'题目明确说进程正在等待某事件，即使此刻分配 CPU，它也无法继续执行。'},
    {title:'匹配三状态定义',text:'这种状态称为阻塞状态，也常写作等待状态；事件完成后才会转入就绪状态。'}
  ],conclusion:'空格填写“阻塞（等待）”。',answer:'阻塞（等待）'},
  {point:'网络拓扑结构',lead:'网络拓扑看设备之间怎样连接。所有终端都连接到同一个中心设备，符合星型结构。',steps:[
    {title:'找出中心节点',text:'兼具路由功能的光猫是寝室网络的中心连接点。'},
    {title:'判断拓扑',text:'各终端彼此不直接串联，而是分别连接中心节点，因此是星型拓扑。'}
  ],conclusion:'空格填写“星型”。',answer:'星型'},
  {point:'进程间通信的客户机/服务器模型',lead:'教务平台由用户端发出请求、服务器集中处理并返回结果，角色分工对应 C/S。',steps:[
    {title:'识别请求方',text:'浏览器或客户端进程负责提交登录、选课、成绩查询等请求。'},
    {title:'识别服务方',text:'服务器进程监听请求、访问数据并返回响应，这就是客户机/服务器模型。'}
  ],conclusion:'空格填写“客户机/服务器（C/S）”。',answer:'客户机/服务器（C/S）'},
  {point:'SQL SELECT 基本语法',lead:'SELECT 决定查询哪些列，FROM 决定数据来自哪张表。',steps:[
    {title:'回忆基本结构',text:'一个基础查询写成 SELECT 列名 FROM 表名。',code:'SELECT name, score\nFROM student;'},
    {title:'对应题目空格',text:'题目问“指定数据来源的表”，因此必须使用 FROM 子句。'}
  ],conclusion:'空格填写 FROM。',answer:'FROM'},
  {point:'Linux 文件管理命令',lead:'rm 是 remove 的缩写，用于删除文件；删除目录时通常需要相应选项。',steps:[
    {title:'确定基础命令',text:'删除普通文件使用 rm，后面跟文件路径。',code:'rm filename'},
    {title:'区分相近命令',text:'rmdir 只删除空目录，mv 用于移动或重命名，不能与 rm 混淆。'}
  ],conclusion:'空格填写 rm。',answer:'rm'},
  {point:'可判定性与算法能力边界',lead:'题目考查并非所有数学问题都存在通用算法可在有限步骤内给出答案。',steps:[
    {title:'理解命题含义',text:'哥德尔不完备性和后来关于可判定性的结果说明，形式系统和算法都存在能力边界。'},
    {title:'作出判断',text:'因此“算法不能解决所有问题”这一概括在课程语境下成立。'}
  ],conclusion:'该说法正确。',answer:'T（正确）'},
  {point:'外存与海量存储器',lead:'U 盘断电后仍能保存大量数据，属于辅助存储或海量存储设备。',steps:[
    {title:'判断存储特征',text:'U 盘采用闪存，具有非易失性，容量远大于寄存器和高速缓存。'},
    {title:'匹配课程分类',text:'在本课程的层次划分中，它属于海量存储器。'}
  ],conclusion:'该说法正确。',answer:'T（正确）'},
  {point:'RISC 指令集架构',lead:'高通手机处理器通常采用 ARM 指令集体系，ARM 属于典型的精简指令集架构。',steps:[
    {title:'识别处理器体系',text:'高通 Snapdragon 系列 CPU 核心以 ARM 架构为基础。'},
    {title:'判断架构类型',text:'ARM 的设计传统属于 RISC，即精简指令集计算机。'}
  ],conclusion:'该说法正确。',answer:'T（正确）'},
  {point:'macOS、Unix 与 Linux 的关系',lead:'“都是类 Unix 系统”不等于“macOS 源自 Linux”。macOS 的基础来自 Darwin、BSD 和 Mach。',steps:[
    {title:'梳理来源',text:'macOS 的底层 Darwin 结合了 BSD Unix 用户空间和 Mach 内核技术。'},
    {title:'排除错误关系',text:'Linux 是另一条独立发展的类 Unix 系统，macOS 并不是从 Linux 派生。'}
  ],conclusion:'该说法错误。',answer:'F（错误）'},
  {point:'无线网络的信号载体',lead:'WiFi 的“无线”意味着信息通过空间中的电磁波传播，而不是沿导线传输的电流信号。',steps:[
    {title:'识别物理介质',text:'WiFi 常工作在 2.4 GHz、5 GHz 等射频频段，使用无线电波承载数据。'},
    {title:'判断命题',text:'设备内部当然有电信号，但设备之间的无线传播载体是电磁波，所以题干表述错误。'}
  ],conclusion:'该说法错误。',answer:'F（错误）'},
  {point:'因特网与万维网的层次',lead:'因特网是网络基础设施，万维网是运行在其上的一种应用服务，两者不能画等号。',steps:[
    {title:'定义因特网',text:'因特网连接大量网络，并承载 IP、TCP/UDP 等通信。'},
    {title:'定义万维网',text:'万维网主要通过浏览器、HTTP/HTTPS 和网页资源提供服务；电子邮件、文件传输等也是因特网应用，却不属于万维网本身。'}
  ],conclusion:'该说法错误。',answer:'F（错误）'},
  {point:'IPv6 地址长度与表示方法',lead:'IPv6 地址空间确实是 128 bit，但题干称其为“128 位十进制数”，混淆了二进制位数和书写进制。',steps:[
    {title:'确认地址长度',text:'IPv6 的地址长度固定为 128 个二进制位。'},
    {title:'确认常用写法',text:'实际通常写成 8 组十六进制数，并用冒号分隔，例如 2001:db8::1，而不是 128 位十进制数。'}
  ],conclusion:'题干完整表述错误。',answer:'F（错误）'},
  {point:'数据库管理系统的作用',lead:'应用程序通常通过 DBMS 提供的接口访问数据库，由 DBMS 负责查询、权限、并发和恢复。',steps:[
    {title:'区分数据库与 DBMS',text:'数据库是被组织的数据集合；DBMS 是管理这些数据的软件系统。'},
    {title:'判断访问路径',text:'程序员编写 SQL 或调用 API，本质上仍由 DBMS 解释和执行，不能绕过 DBMS 直接安全地操作数据库。'}
  ],conclusion:'该说法错误。',answer:'F（错误）'},
  {point:'线性可分与 XOR',lead:'单层感知机只能形成一条线性决策边界，而 XOR 的正负样本无法被一条直线分开。',steps:[
    {title:'列出 XOR 特征',text:'输入 00、11 的输出为 0，输入 01、10 的输出为 1。'},
    {title:'判断线性可分性',text:'两类点位于平面的对角位置，不存在一条直线把两类完全分开。'},
    {title:'得到结论',text:'因此单层神经网络不能表示 XOR，需要隐藏层或非线性特征。'}
  ],conclusion:'该说法正确。',answer:'T（正确）'},
  {point:'Linux 命令大小写敏感性',lead:'Linux 通常区分大小写，命令名、文件名和参数中的大小写都可能改变含义。',steps:[
    {title:'观察命令名',text:'rm 与 RM 会被视为不同的名称，系统默认并不存在名为 RM 的同一命令。'},
    {title:'判断说法',text:'因此“命令大小写无关”与 Linux 的实际规则相反。'}
  ],conclusion:'该说法错误。',answer:'F（错误）'},
  {point:'逻辑门识别与真值表',lead:'先把三个门转换成布尔表达式，再对 A、B 的四种组合逐行代入，能避免凭图猜灯泡状态。',steps:[
    {title:'识别三个逻辑门',text:'1 是非门，先得到 ¬A；2 是异或门；3 是与门。'},
    {title:'写出整体表达式',text:'按电路连线，灯泡输出为非 A 与异或结果的“与”。',code:'C = (¬A) ∧ ((¬A) ⊕ B)'},
    {title:'逐行计算真值表',text:'按 A、B 为 00、01、10、11 的顺序代入。',code:'A B | C\n0 0 | 1\n0 1 | 0\n1 0 | 0\n1 1 | 0'}
  ],conclusion:'三个门依次为非门、异或门、与门；C 为 1、0、0、0。',answer:'非门、异或门、与门；1，0，0，0'},
  {point:'机器指令译码与寄存器跟踪',lead:'每条指令占两个字节，应按附录 C 的格式逐条译码，并在每一步记录被修改的寄存器。',steps:[
    {title:'划分四条指令',text:'从 A0 开始每两个存储单元组成一条指令。',code:'2202   2104   5201   C000'},
    {title:'执行立即数装载',text:'按附录 C，2RXY 表示把立即数 XY 装入寄存器 R。',code:'2202 → R2 ← 02\n2104 → R1 ← 04'},
    {title:'执行加法',text:'5201 表示把寄存器 0 与寄存器 1 的值相加，结果写入寄存器 2。按题目附录给定的初始 R0=02。',code:'R2 ← R0 + R1 = 02 + 04 = 06'},
    {title:'终止程序',text:'C000 是停机指令，不再修改寄存器。最终读取 R0、R1、R2。',code:'R0=02，R1=04，R2=06'}
  ],conclusion:'最终寄存器 00～02 的数值依次为 02、04、06。',answer:'R0=02，R1=04，R2=06'},
  {point:'图灵测试的定义与结论边界',lead:'图灵测试判断的是特定交互条件下的外在表现，而不是直接证明机器具有意识或真正理解。',steps:[
    {title:'说明测试方法',text:'评测者通过文本等受限通道分别与人和机器交流；若评测者无法可靠地区分二者，就说机器在该测试条件下通过。'},
    {title:'分析当前 AI 的表现',text:'当前 AI 在短时、常识型对话中可能让部分评测者难以辨认，因此可能通过某些有限版本的测试。'},
    {title:'说明不能绝对化',text:'测试时长、问题范围、是否允许追问事实一致性都会影响结果。长期交流中仍可能暴露事实错误、推理不稳定和缺乏真实经验等问题。'},
    {title:'形成规范结论',text:'因此不能笼统说“所有 AI 已经通过图灵测试”；应表述为“在特定规则和有限场景下可能通过”。'}
  ],conclusion:'作答时需同时给出定义、判断和理由；开放题可接受论证充分的不同立场。',answer:'见分步论证'},
  {point:'Python 变量、算术运算与格式化输出',lead:'先用乘法得到折后价，再把原价和结果插入同一个 f-string。',steps:[
    {title:'计算折后价格',text:'折扣比例输入 0.8 表示支付原价的 80%。',code:'final_price = price * discount'},
    {title:'按指定格式输出',text:'使用 f-string，把两个变量放入花括号。',code:'print(f"原价 {price} 元，折扣价是 {final_price} 元")'},
    {title:'用示例核对',text:'当 price=5.0、discount=0.8 时，final_price=4.0，输出与题目要求一致。'}
  ],conclusion:'两处横线分别填写乘法赋值语句和 f-string 输出语句。',answer:'见完整代码'},
  {point:'循环取位与持久度计数',lead:'内层循环负责把当前整数的各位相乘，外层循环每完成一轮才把操作次数加 1。',steps:[
    {title:'分析第一空',text:'temp % 10 取得个位。product 初值为 1，要累乘各位数字，因此使用 *=，对应 B。',code:'product *= temp % 10'},
    {title:'分析第二空',text:'一轮各位相乘结束后，n 被替换成 product，此时完成了一次操作，所以 steps 增加 1，对应 F。',code:'steps += 1'},
    {title:'用示例核对',text:'234 → 2×3×4=24 是第 1 次；24 → 2×4=8 是第 2 次，循环停止，steps=2。'}
  ],conclusion:'第一空选 B，第二空选 F。',answer:'B，F'},
  {point:'函数设计、真因子定义与循环筛选',lead:'真因子包含 1，但不包含数本身。因此只需检查 1 到 num-1 中能整除 num 的整数。',steps:[
    {title:'建立结果列表',text:'函数接收正整数 num，并用空列表保存找到的真因子。'},
    {title:'逐个检查候选数',text:'range(1,num) 自动排除了 num 本身；余数为 0 时加入列表。',code:'def get_proper_factors(num):\n    factors = []\n    for i in range(1, num):\n        if num % i == 0:\n            factors.append(i)\n    return factors'},
    {title:'展示调用方式',text:'以 220 为例调用函数，并可计算真因子之和。',code:'target = 220\nfactors = get_proper_factors(target)\nprint(factors)\nprint(f"真因子的和为：{sum(factors)}")'},
    {title:'核对示例',text:'返回 1、2、4、5、10、11、20、22、44、55、110，和为 284，符合题意。'}
  ],conclusion:'函数返回所有真因子，示例调用同时展示列表与和。',answer:'见完整代码'}
];
