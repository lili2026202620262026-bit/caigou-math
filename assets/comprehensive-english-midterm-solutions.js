(() => {
  const questions = [];
  const makeSolution = (point, lead, steps, conclusion, note = '') => ({
    sourceLevel: '原卷还原',
    point,
    lead,
    steps: steps.map(([title, text]) => ({ title, text })),
    conclusion,
    ...(note ? { note } : {})
  });
  const add = (type, text, options, answer, solution, material) => questions.push({
    no: questions.length + 1,
    type,
    text,
    options,
    answer,
    solution,
    ...(material ? { material } : {})
  });
  const three = (point, lead, one, two, threeStep, conclusion, note = '') =>
    makeSolution(point, lead, [one, two, threeStep], conclusion, note);

  const clozeA = {
    title: '完形填空 A · Studying Mathematics（第 41–50 题）',
    text: `Many people have difficulty in studying mathematics. Sometimes their difficulty (41) ____ from the psychological idea that they are not good at math. It has been demonstrated many times that it is often this idea (42) ____ causes their problem rather than any lack of skill in mathematics. The best way to (43) ____ this problem is to tell yourself that math (44) ____ using the same numbers you have been using all your life and that you know them as well as anyone else. Then (45) ____ your mind to learning how they are used in the particular part of mathematics you are studying. Another problem many people encounter is that in mathematics, (46) ____ some other subjects you may have studied, the material has a very important sequence or order. If you don't understand a section of a mathematics text, it is no use (47) ____ to the next section. Many sections of math books are (48) ____ on information presented earlier, so it is essential that you understand a section before going on to the next.

Sometimes students in mathematics courses do not read the (49) ____ material in the text but (50) ____ that the instructor will tell them what they need to know. This can cause them serious problems, since many instructors assume that students have read the text before coming to class. The written sections of mathematics textbooks contain much valuable information.`
  };

  const clozeB = {
    title: '完形填空 B · American Women in the Suburbs（第 51–60 题）',
    text: `When men returned from World War II, the postwar “baby boom” began, and Americans began to move in great numbers to (51) ____. A new model of a traditional family developed and women were essentially separated from men. Men generally went back into the city to work, and there was a strong (52) ____ between work and home. Houses were far apart from each other, and these areas were all (53) ____; there were no stores or businesses. Women had to drive to buy food and to visit families and friends. All these (54) ____ contributed to a sense of isolation and to a feeling of separation between the family and the (55) ____ world.

At the same time, technological developments gave American housewives many (56) ____ inventions such as dishwashers, vacuum cleaners, and frozen foods. Life became easier for American housewives, (57) ____ not necessarily satisfying with more time on their hands. American women began to want to become more (58) ____. Many people think that the women's movement, political and social effort to give women the same status and rights as men, is a result of this isolation and separation of women in the suburbs. Because of the historical model of women who were active outside the home in building America, it is really not (59) ____ that American women are working to (60) ____ their strong role in American life.`
  };

  const reading1 = {
    title: 'Reading Passage 1 · A Short History of Computers（第 61–65 题）',
    text: `Most think of the computer as a relatively new invention, but the history of computers may be said to have begun long ago with the use of the abacus. Another early computing device was the calculating clock invented by Wilhelm Schickard of Germany in the 1500s. The plans and model for this device were lost in the Thirty Years' War in Europe. The design was unknown to historians until sketches and letters which described the device were discovered in the 1930s. As well, Blaise Pascal, the famous mathematician, also invented an adding machine which he presented to King Louis XIV in 1642.

The first real advance in computer technology came in the 1830s when Charles Babbage of England hit on the idea of using punch cards as a programming device for his calculating machine, which was designed to measure the tide. Mr. Babbage borrowed the idea of punch cards from a similar system used in early sewing machines which sewed patterns onto cloth table covers. Mr. Babbage died before a working version of his machine could be made, so his dream machine was never produced. However, his idea for using punch cards in calculating machines was later taken up by Herman Hollerith of the United States, who was able to use this approach to calculate the number of people in the United States through the 1890 census. Mr. Hollerith went on to start his own company which built calculating machines for businesses. The company eventually became International Business Machines Corporation (IBM).

The next big step in computer technology came in the 1940s with the use of electronic switches in calculating machines. Because the switches only had two positions, on and off, binary became the new system of programming. Advances came quickly after that. The first generation of computers involved large commercial computers used for business and research. These machines, which lasted from 1952 to 1958, were big and noisy and used large amounts of energy. The invention of transistors led the way for the next generation of computers. This second generation lasted from 1959 to 1963. These were smaller in size and used less energy. The difference between the third and fourth generations is not very clear, but fourth-generation computers used integrated-circuit technology and microprocessors. Intel is the company credited with the first four-bit microprocessor computer, developed in 1971. The fifth generation uses complicated networks and is built to run large parallel systems of operations.

The computer market has seen very large growth since the early 1970s. A study in 1970 found that 80,000 computers were being used in business in the United States, and another 30,000 were in use worldwide outside the United States. By the early 1990s, many people had personal computers in their homes. The number exploded to 29 million computers in use in the United States alone in 1993.

One advancement in computers has actually been harmful. In 1982, the first computer virus was developed. Jim Hauser, a professor at California Polytechnic State University, worked with one of his students to create a program which could copy itself and be secretly introduced into another program or computer. Because he was working on an Apple computer, Mr. Hauser named his new program a computer “worm.” When he realized the power of this discovery, he aimed to warn computer users everywhere by publishing an article describing how the worm worked. Then, on November 2, 1988, a program created by Robert Morris of the United States infected and crashed 6,000 computers connected by the Internet research computer network. Mr. Morris was later found guilty of doing harm to government computers.`
  };

  const reading2 = {
    title: 'Reading Passage 2 · Rock and Roll（第 66–70 题）',
    text: `Rock and roll has its origin in three different traditions of music. Perhaps the largest influence on rock came from the rhythm and blues (R&B) music popular in the southwestern United States during the 1930s and 1940s. Both the rhythm and singing style of R&B artists can be found in modern rock music. For example, R&B singers often had to shout over the loud music played by their bands, and rock singers today still copy this style. Early rock music was also heavily influenced by the gospel and country music of the 1950s. These elements, along with lyrics focusing on teenagers' concerns such as school, parents, cars, and love, all combined to create the music now known as rock and roll.

Rock and roll first became popular in 1954, and the first true superstar was Elvis Presley. With his sexy looks and controversial dancing style, he captured the imagination and hearts of young people around the world. Although no figures have ever been published, he was surely the most successful solo artist in history. Over his career from 1956 to 1977, he sold more than 170 major hit singles and more than 80 top-selling albums. According to the Billboard charts, he remains the most successful male soloist with nine No. 1 singles.

In the early 1960s, rock and roll suffered a brief decline in popularity. First, Elvis Presley went into the army and did not record for a while; second, record companies tried to make rock music more suitable for music lovers. They promoted bland new artists who did not have the energy and defiance of early rock singers. Audiences failed to flock to these artists as they had to Elvis Presley and Chuck Berry. Then, in 1962, the Beatles brought rock and roll back to life and made it louder and more defiant than before. This band of four young men from Liverpool, England, became the most successful musical group in history. Estimates place sales of Beatles records and tapes at well over one billion copies worldwide. The Beatles recorded fourteen No. 1 singles, giving them the most No. 1 singles on the Billboard charts for any group or solo artist.

After the Beatles broke up in the 1970s, another decline began as rock and roll broke into three popular styles—country rock, folk, and heavy metal. Reggae also began to appear. In the mid-1970s, disco began to sweep the music industry. Seemingly in reaction to disco, punk rock began in England. Actually, social, economic, and racial problems in England at the time gave rise to punk rock, and the music used loud backing music and violent lyrics.

In the late 1970s and early 1980s, musicians toned down the anger in punk music and developed new wave music. Record labels found it highly marketable, and bands such as Blondie and The Clash came into popularity. New creative ideas continued to change rock and roll and gave rise to styles such as techno, alternative, and grunge rock.`
  };

  const reading3 = {
    title: 'Reading Passage 3 · New Coffee Makers（第 71–75 题）',
    text: `More people than ever are drinking coffee these days, but in smaller quantities than they used to. Some manufacturers of coffee makers are trying to take advantage of this trend by developing diminutive machines that brew smaller amounts of coffee.

Two U.S. appliance companies, Black & Decker, based in Towson, Maryland, and Toastmaster Inc. of Columbia, Missouri, have recently introduced drip coffee makers that brew one- or two-cup servings. Both products brew the coffee directly into a cup or mug, eliminating the need for a separate carafe. Since many people make a pot of coffee in the morning but drink only a single cup, the new coffee makers should reduce wasted coffee. Black & Decker's Cup-at-a-Time costs $27, while Toastmaster's Coffee Break retails for $20.

Black & Decker also makes a coffee maker that drips coffee directly into a carry-around thermal carafe. The carafe, a glass vacuum bottle, is supposed to keep the coffee fresh for hours. The product, called the Thermal Carafe Coffee-maker, comes with a built-in lid that opens during the brewing process and closes when it is completed. There are several models, including one that fits under the counter, ranging from $60 to $110 in price.`
  };

  add('词汇与结构', `We object to the idea that it is military force that should be ____ in settling international disputes.`, ['applied to', 'resorted to', 'fallen back on', 'restrained from'], 'B', three(
    '动词搭配 resort to', '先看“解决国际争端时诉诸军事力量”这一语义，再核对被动结构中的固定搭配。',
    ['定位句意', 'object to 表明说话者反对“把武力作为解决争端的手段”，空格需要表达“诉诸、求助于”。'],
    ['核对搭配', 'resort to force 是固定搭配；主语 military force 是被诉诸的手段，所以用被动式 should be resorted to。'],
    ['排除干扰', 'apply to 通常表示“适用于”，fall back on 虽可表“转而依靠”但题面已有标准搭配；restrain from 的主语应是被阻止做事的人。'],
    '完整意思是反对在解决国际争端时诉诸军事力量。'
  ));
  add('词汇与结构', `The dean of our department asked that all the students ____ at the reception this afternoon in order to meet the representatives from other colleges.`, ['are present', 'will be present', 'would be present', 'be present'], 'D', three(
    '宾语从句中的虚拟语气', '识别 ask that 表示要求，后面的 that 从句使用“(should) + 动词原形”。',
    ['识别触发词', 'asked 在这里不是询问信息，而是正式要求学生出席，因此触发建议、命令类虚拟语气。'],
    ['还原结构', 'that all the students (should) be present 中 should 可以省略，但 be 必须保留原形。'],
    ['排除时态项', 'are、will be 和 would be 都把从句当普通事实或将来叙述，没有体现 ask 表示要求时的虚拟结构。'],
    '句子表达院长要求所有学生下午出席招待会。'
  ));
  add('词汇与结构', `The tremendous heat at a star's core, ____ tremendous gravity, joins the nuclei of hydrogen atoms.`, ['combined with', 'having combined with', 'combining with', 'being combined with'], 'A', three(
    '过去分词短语作后置定语', '先确定谓语是 joins，再判断空格只能作修饰 heat 的非谓语成分。',
    ['划分主干', '主语是 The tremendous heat，谓语是 joins，宾语是 the nuclei；空格部分不能再放一个谓语。'],
    ['判断逻辑关系', 'heat 与 gravity 是“被结合/与……结合”的关系，combined with 相当于 which is combined with。'],
    ['排除其他形式', 'combining with 强调主语主动结合；being combined with 过分强调正在进行；having combined with 表先发生的主动动作，均不合句意。'],
    '核心高温与巨大引力结合，使氢原子核聚合。'
  ));
  add('词汇与结构', `____ the choice of a fine home downtown and a modest one in the suburbs, the latter will win.`, ['Being given', 'Given', 'If given', 'When given'], 'B', three(
    'given 作介词/过去分词短语', '句首需要一个简洁条件结构，表示“如果有……供选择”。',
    ['确定逻辑主语', '后句主语 the latter 指两个住房选项中的后者；句首实际意思是“在给定这两个选择的情况下”。'],
    ['采用惯用结构', 'Given + 名词表示“考虑到/如果有”，可直接引出条件，不需要另加 being。'],
    ['排除重复或悬垂', 'Being given 容易造成 the latter 被给予选择的悬垂关系；If given 和 When given 省略后的逻辑主语也应是能接受选择的人，不是 the latter。'],
    '在市中心好房与郊区普通房之间选择时，后者会胜出。'
  ));
  add('词汇与结构', `Despite their good service, most inns are less costly than hotels of ____ standards.`, ['equivalent', 'alike', 'uniform', 'likely'], 'A', three(
    '形容词辨析 equivalent', '比较价格时必须保证比较对象档次相当，空格应修饰 standards。',
    ['抓住比较条件', 'less costly than 要有可比基础；题意是旅店比“同等标准”的酒店便宜。'],
    ['核对词义搭配', 'equivalent standards 表示“相同/等同的标准”，既能作前置定语，也符合公平比较。'],
    ['排除近形词', 'alike 通常作表语；uniform 强调统一制式；likely 表示可能的，都不能表达档次相当。'],
    '多数旅店虽服务良好，仍比同等标准的酒店便宜。'
  ));
  add('词汇与结构', `Very few scientists ____ completely new answers to the world's problems.`, ['come up with', 'come out', 'come round', 'come up to'], 'A', three(
    '短语动词 come up with', '空格后是 answers，需要能直接带宾语并表示“想出”的短语。',
    ['确定所需含义', 'scientists 与 new answers 的关系是提出或想出解决办法。'],
    ['核对句法', 'come up with 可直接接名词作宾语，come up with answers 是自然搭配。'],
    ['排除干扰', 'come out 表出版/出现，come round 表苏醒或来访，come up to 表达到标准，均不能表达提出答案。'],
    '很少有科学家能为世界问题提出全新的答案。'
  ));
  add('词汇与结构', `At the party we found that shy girl ____ her mother all the time.`, ['depending on', 'coinciding with', 'adhering to', 'clinging to'], 'D', three(
    '动词短语 cling to', '利用 shy 和 all the time 判断女孩一直紧贴母亲，而非抽象依赖或原则坚持。',
    ['读取人物状态', 'shy girl 在聚会中缺乏安全感，最自然的行为是一直靠着或抓着母亲。'],
    ['核对搭配', 'cling to somebody 表示“紧紧依附/贴着某人”，现在分词与 found 的宾语补足结构吻合。'],
    ['排除干扰', 'depend on 偏抽象依赖；coincide with 表同时发生；adhere to 多指坚持规则或黏附表面。'],
    '聚会上大家发现那个害羞的女孩一直紧贴着母亲。'
  ));
  add('词汇与结构', `The encouraging factor is that the ____ majority of people find the idea of change acceptable.`, ['numerous', 'vast', 'most', 'massive'], 'B', three(
    '固定搭配 the vast majority', '空格位于 majority 前，考查表示“绝大多数”的固定组合。',
    ['识别数量表达', '句意强调支持改变的人比例非常高，而不是仅仅人数很多。'],
    ['核对固定搭配', 'the vast majority of people 是规范表达，vast 直接修饰 majority。'],
    ['排除错误修饰', 'most 不能放在 the 与 majority 之间；numerous 修饰可数名词复数；massive 通常修饰规模或实体。'],
    '令人鼓舞的是，绝大多数人都能接受改变。'
  ));
  add('词汇与结构', `Animals that could not ____ themselves to the changed environment perished and those that could survived.`, ['change', 'adapt', 'modify', 'conform'], 'B', three(
    'adapt oneself to', '对照“环境改变后灭绝或存活”的因果关系，空格应表示使自己适应。',
    ['利用结果反推', '不能完成该动作的动物 perished，能完成的 survived，因此动作必须是适应环境。'],
    ['核对反身搭配', 'adapt oneself to + environment 表示“使自己适应环境”，结构与 themselves、to 都严密对应。'],
    ['排除近义词', 'change/modify themselves 强调改变自身但不固定接 to；conform to 通常不再使用 conform oneself to 表这种生物适应。'],
    '不能适应变化后环境的动物灭绝，能适应的存活下来。'
  ));
  add('词汇与结构', `As the drug took ____ the patient became quieter.`, ['force', 'effect', 'action', 'influence'], 'B', three(
    '固定搭配 take effect', '后半句病人安静下来，说明药物开始产生药效。',
    ['建立因果', 'As 表示随着；药物起作用与病人变安静是同步因果关系。'],
    ['核对搭配', 'take effect 是不及物固定短语，意为“生效、开始起作用”。'],
    ['排除名词', 'take force、take action 和 take influence 均不能表达药物开始发挥效力；take action 还要求主语是行动者。'],
    '随着药物开始起效，病人安静了下来。'
  ));
  add('词汇与结构', `He is now convinced ____ the truth of the report.`, ['about', 'in', 'at', 'of'], 'D', three(
    'be convinced of', '空格连接 convinced 与名词 the truth，考查固定介词。',
    ['辨认结构', '这里表示“他确信报告的真实性”，不是 persuade somebody to do 的主动结构。'],
    ['核对搭配', 'be convinced of + 名词表示“确信某事”，of the truth 完整自然。'],
    ['排除介词', 'about、in、at 都不与 convinced 构成这一含义的标准搭配。'],
    '他现在确信这份报告是真实的。'
  ));
  add('词汇与结构', `I only know the man by ____ but I have never spoken to him.`, ['chance', 'heart', 'sight', 'experience'], 'C', three(
    '固定短语 know by sight', '“认识但从未说过话”限定为只认得外貌。',
    ['读取转折', 'but I have never spoken to him 排除了熟识，只剩见过并能认出。'],
    ['核对短语', 'know someone by sight 表示“见面认识、只认得长相”。'],
    ['排除其他短语', 'by chance 是偶然；by heart 是背诵；by experience 是凭经验，都不能说明人与人的浅层认识。'],
    '我只见面认识那个人，但从没同他说过话。'
  ));
  add('词汇与结构', `The car was in good working ____ when I bought it a few months ago.`, ['order', 'form', 'state', 'circumstance'], 'A', three(
    '固定搭配 in good working order', '空格描述汽车购买时运转良好，需选机械状态的固定表达。',
    ['确定语义', 'working 与 car 指向机器是否正常运作，而非外观或一般情形。'],
    ['核对搭配', 'in good working order 是固定短语，表示设备处于良好工作状态。'],
    ['排除近义名词', 'form、state 可泛指形式/状态但不构成题面搭配；circumstance 通常用复数表示环境。'],
    '几个月前购买时，这辆车运转状况良好。'
  ));
  add('词汇与结构', `Helen apologized for ____ the party.`, ['her not being able to attend', 'her being not able to attend', 'her being able to attend', 'not her being able to attend'], 'A', three(
    '动名词复合结构与否定位置', 'for 是介词，后接动名词；道歉原因应是“她没能参加”。',
    ['确定形式', '介词 for 后不能接完整谓语句，应使用 her + being 构成动名词复合结构。'],
    ['放置否定词', '动名词的否定式把 not 放在 being 前：her not being able to attend。'],
    ['排除语义和语序', 'being not able 不如 not being able 规范；being able 含义相反；not her being 把否定错误地落在所有格上。'],
    'Helen 为自己没能参加聚会而道歉。'
  ));
  add('词汇与结构', `Tony has not the least ____ of giving up his research work.`, ['intention', 'interest', 'wish', 'desire'], 'A', three(
    '固定表达 have no/not the least intention of', 'the least 与 of giving up 共同指向“丝毫没有放弃的打算”。',
    ['识别语气强度', 'not the least 表示“一点也不”，需要一个能与 of doing 搭配并表达计划的名词。'],
    ['核对搭配', 'have no intention of doing 是固定表达；加入 the least 进一步强调完全无意。'],
    ['排除近义项', 'interest in、wish to、desire to 的常见后接形式不同；题目强调计划而非兴趣或愿望。'],
    'Tony 丝毫没有放弃研究工作的打算。'
  ));
  add('词汇与结构', `No one can function properly if they are ____ of adequate sleep.`, ['ripped', 'pledged', 'deprived', 'contrived'], 'C', three(
    'be deprived of', 'adequate sleep 是正常运作所缺少的必要条件，空格表示“被剥夺”。',
    ['利用因果', '无法正常运作的原因是没有获得充足睡眠。'],
    ['核对被动搭配', 'deprive somebody of something 的被动式是 be deprived of，正好连接 sleep。'],
    ['排除词义', 'rip 是撕裂，pledge 是保证，contrive 是设法做到，均不能与 of sleep 构成所需含义。'],
    '如果被剥夺充足睡眠，任何人都无法正常发挥。'
  ));
  add('词汇与结构', `We have no rights to interfere ____ the internal affairs of other countries.`, ['in', 'with', 'against', 'to'], 'A', three(
    'interfere in 与事务', 'internal affairs 是参与干预的领域，需用表示“介入某事”的介词。',
    ['判断宾语类型', 'the internal affairs 指他国内政这一事务范围，不是一个被妨碍运行的对象。'],
    ['区分搭配', 'interfere in affairs 表示干涉事务；interfere with something 更常表示妨碍某物或某人正常进行。'],
    ['排除其余介词', 'against 和 to 不与 interfere 构成这里的标准搭配。'],
    '我们无权干涉别国内政。'
  ));
  add('词汇与结构', `In no country ____ Britain, it has been said, can one experience four seasons in the course of a single day.`, ['other than', 'more than', 'better than', 'rather than'], 'A', three(
    'other than 表示“除……之外”', '倒装主句说明只有 Britain 符合一天经历四季的说法。',
    ['还原正常语序', '正常语义是 one can experience this in no country except Britain，即除英国外没有国家。'],
    ['核对替换关系', 'other than 可等同于 except，放在 country 与 Britain 之间准确表达排除。'],
    ['排除比较项', 'more than、better than 是数量/优劣比较，rather than 是取舍，都不能表达“除……外”。'],
    '据说除英国外，没有哪个国家能让人在一天内经历四季。'
  ));
  add('词汇与结构', `Melting snow ____ the regular spring floods in this area.`, ['shelters from', 'arises from', 'consists in', 'brings forth'], 'D', three(
    '动词短语 bring forth', '句子主语是融雪，宾语是春季洪水，需要表达“产生、引起”。',
    ['确定因果方向', '融雪发生在前，洪水是结果，所以谓语应从原因指向结果。'],
    ['核对短语', 'bring forth 可表示产生；第三人称单数主语 melting snow 对应 brings forth。'],
    ['排除反向或不及物结构', 'arise from 表“由……产生”，方向相反且主语应是 floods；shelter from 与 consist in 均不合因果。'],
    '融雪造成该地区每年春季的洪水。'
  ));
  add('词汇与结构', `I'm very sorry to have ____ you with so many questions on such an occasion.`, ['interfered', 'offended', 'impressed', 'bothered'], 'D', three(
    'bother somebody with something', '道歉内容是“在这种场合用很多问题打扰你”，需选可直接带人作宾语的动词。',
    ['读取道歉原因', 'so many questions 强调给对方造成麻烦或打扰，而不是冒犯性言论。'],
    ['核对搭配', 'bother somebody with questions 是自然搭配；完成式 to have bothered 表示打扰已经发生。'],
    ['排除近义词', 'interfere 通常不直接接人；offend 强调冒犯；impress 表给人留下印象，均不贴合 questions。'],
    '很抱歉在这种场合问了这么多问题打扰你。'
  ));
  add('词汇与结构', `Anne couldn't concentrate ____ what she was doing while her family were watching TV.`, ['to', 'on', 'for', 'in'], 'B', three(
    'concentrate on', '空格连接 concentrate 与具体活动 what she was doing。',
    ['确定含义', '家人看电视造成干扰，Anne 无法把注意力放到自己正在做的事上。'],
    ['核对搭配', 'concentrate on something 是固定搭配，on 后可接 what 引导的名词性从句。'],
    ['排除介词', 'to、for、in 都不能在此构成“专注于”的标准结构。'],
    '家人看电视时，Anne 无法专心做自己的事。'
  ));
  add('词汇与结构', `We need to be more ____ to the needs of the young students.`, ['sensitive', 'sensational', 'sensory', 'sensible'], 'A', three(
    '形容词辨析 sensitive to', 'to the needs 要求一个表示“能体察、能回应”的形容词。',
    ['结合对象', 'young students 的 needs 需要被关注和体察，语义是对需求更敏感。'],
    ['核对搭配', 'be sensitive to needs 表示“对需求敏感/体贴”，搭配完整。'],
    ['排除近形词', 'sensational 是轰动的，sensory 是感官的，sensible 是明智的；它们都不表达对需求的敏感。'],
    '我们需要更体察年轻学生的需求。'
  ));
  add('词汇与结构', `James ____ at my old bike. He has got a new one.`, ['giggled', 'sneered', 'grinned', 'chuckled'], 'B', three(
    '动词搭配 sneer at', '后句说明 James 有新车，前句带 at，语气是看不起旧自行车。',
    ['利用对比', 'new one 与 my old bike 形成优劣对比，动作带有嘲讽、轻蔑意味。'],
    ['核对介词', 'sneer at something 表示嘲笑或鄙视某物，直接符合题面 at。'],
    ['排除笑类动词', 'giggle、grin、chuckle 可表示不同方式的笑，但通常不以 at + 物表达这种轻蔑评价。'],
    'James 嘲笑我的旧自行车，因为他已有一辆新的。'
  ));
  add('词汇与结构', `She congratulated herself ____ her narrow escape.`, ['on', 'for', 'of', 'in'], 'A', three(
    'congratulate somebody on something', 'narrow escape 是值得庆幸的事情，考查 congratulate 的介词搭配。',
    ['识别反身宾语', 'herself 表示她为自己的幸运脱险而庆幸。'],
    ['核对固定结构', 'congratulate oneself on something/doing 表示“为……感到庆幸”。'],
    ['排除介词', 'for、of、in 均不用于 congratulate 后引出所庆贺的事情。'],
    '她为自己侥幸脱险而庆幸。'
  ));
  add('词汇与结构', `Precautions are taken ____ a hurricane threatens to strike the coast of the United States.`, ['whenever', 'however', 'always', 'whether'], 'A', three(
    'whenever 引导时间条件从句', '空格后是完整从句，主句说明每逢飓风威胁来袭就采取预防措施。',
    ['判断逻辑', '飓风威胁出现是采取 precautions 的重复触发条件。'],
    ['核对连词', 'whenever 等于 every time that，可直接引导 threatens 这一谓语完整的从句。'],
    ['排除其他项', 'however 表转折/无论如何，always 是副词不能连接从句，whether 表是否，均不符合重复时间关系。'],
    '每当飓风威胁袭击美国海岸时，都会采取预防措施。'
  ));
  add('词汇与结构', `It is necessary that the customs of all nations ____.`, ['be respected', 'must be respected', 'ought to be respected', 'are to be respected'], 'A', three(
    'It is necessary that 中的虚拟语气', 'necessary 表必要性，that 从句采用“(should) + 动词原形”。',
    ['识别句型', 'It is necessary that... 不是陈述已经发生的事实，而是提出应当做到的要求。'],
    ['兼顾语态', 'customs 是被尊重的对象，所以完整结构是 should be respected；省略 should 后保留 be respected。'],
    ['排除情态重复', 'must、ought to、are to 虽可表达义务，却不符合本题检验的虚拟语气原形结构。'],
    '有必要尊重所有国家的风俗。'
  ));
  add('词汇与结构', `____ the railroads were built, early settlers had organized an elaborate system of trails and canals.`, ['After', 'During', 'When', 'Before'], 'D', three(
    '过去完成时与时间先后', 'had organized 表示组织道路运河系统发生在另一个过去事件之前。',
    ['识别时态线索', '主句 had organized 是过去完成时，参照事件是 railroads were built。'],
    ['建立时间关系', '早期定居者先建成小径和运河体系，之后铁路才修建，因此用 Before。'],
    ['排除其他连词', 'After 与时态表达的先后相反；During 后通常接名词；When 不能明确突出“铁路之前”。'],
    '铁路修建以前，早期定居者已经组织起复杂的小径与运河系统。'
  ));
  add('词汇与结构', `The government is trying to do something to ____ better understanding between the two countries.`, ['raise', 'promote', 'heighten', 'increase'], 'B', three(
    'promote understanding', '政府采取行动的目标是增进两国相互理解，考查抽象名词的自然搭配。',
    ['确定动作目标', 'better understanding 不是单纯数值增量，而是需要推动形成的国际关系状态。'],
    ['核对搭配', 'promote understanding 表示促进理解，是外交语境的常用组合。'],
    ['排除近义动词', 'raise/heighten/increase 更常表示水平、强度或数量上升，与 understanding 的搭配不如 promote 准确。'],
    '政府正设法促进两国之间更好的理解。'
  ));
  add('词汇与结构', `The local police are authorized to ____ anyone's movements as they think it necessary.`, ['pause', 'halt', 'repel', 'keep'], 'B', three(
    '及物动词 halt', '警方被授权在必要时让人的行动停止，空格要直接支配 movements。',
    ['确认执法动作', 'as they think it necessary 说明警方可为执法目的制止行动。'],
    ['核对及物用法', 'halt 可作及物动词，halt someone’s movements 表示使其行动停止。'],
    ['排除其他项', 'pause 多为动作主体自己暂停；repel 是击退；keep 需要补语才能说明保持何种状态。'],
    '当地警方有权在认为必要时制止任何人的行动。'
  ));
  add('词汇与结构', `She was standing outside in the snow, ____ with cold.`, ['spinning', 'shivering', 'shaking', 'staggering'], 'B', three(
    'shiver with cold', '雪地和寒冷直接指向因冷而发抖的专门动词。',
    ['读取环境线索', 'standing outside in the snow 说明身体反应由低温引起。'],
    ['核对搭配', 'shiver with cold 是自然搭配；现在分词补充说明她站立时的状态。'],
    ['排除一般动作', 'shake 泛指摇动，spin 是旋转，stagger 是蹒跚，都不如 shiver 精确表达冷得发抖。'],
    '她站在外面的雪地里，冷得直发抖。'
  ));

  add('经典名著阅读', `Ariel owed Caliban a grudge because ____. (The Tempest)`, [`Caliban couldn't learn anything good or useful due to his bad nature.`, `Caliban was the son of Ariel's old enemy Sycorax.`, `Caliban had the charge of compelling Ariel to the most laborious offices.`], 'B', three(
    '《暴风雨》人物关系', '把 Ariel、Caliban 与 Sycorax 的旧怨串联起来，而不是只看 Caliban 后来的品性。',
    ['回忆背景', '女巫 Sycorax 曾把不肯服从的精灵 Ariel 囚禁在松树中，Prospero 后来才解救他。'],
    ['对应人物', 'Caliban 是 Sycorax 的儿子，因此 Ariel 对母亲造成的旧害会迁怒并怨恨 Caliban。'],
    ['排除叙事错位', 'A 说的是 Prospero 对 Caliban 的教育评价；C 把 Prospero 指派 Ariel 劳作的关系错误安到 Caliban 身上。'],
    'Ariel 的怨恨源于 Caliban 是旧敌 Sycorax 之子。'
  ));
  add('经典名著阅读', `When Ariel reminded Antonio and the King of Naples of their cruelty in driving Prospero from his dukedom, ____. (The Tempest)`, [`Antonio and the King of Naples denied that they had ever done so.`, `Antonio and the King of Naples repented the injustice they had done to Prospero.`, `Antonio expressed his sincere remorse for having assisted the King of Naples to depose Prospero.`], 'B', three(
    '《暴风雨》的悔罪与和解', '抓住 Ariel 揭示旧罪后的群体反应，并区分 Antonio 单独反应与二人共同反应。',
    ['定位情节', 'Ariel 以法术和言语使篡位者面对当年驱逐 Prospero 的不义。'],
    ['核对反应', '题本叙述强调 Antonio 与那不勒斯国王意识到罪责并悔恨对 Prospero 所做的不公。'],
    ['排除错误细节', 'A 的否认违背和解走向；C 只写 Antonio 且把协助关系倒置，不能覆盖题干的两个人。'],
    '二人听到指责后为对 Prospero 的不义而悔罪。'
  ));
  add('经典名著阅读', `How did Puck prevent Demetrius and Lysander from fighting? (A Midsummer Night's Dream)`, ['By transforming their weapons to weeds.', 'By squeezing the love potion onto their eyelids.', 'By mimicking their voices and causing each to get lost in a separate part of the forest.'], 'C', three(
    '《仲夏夜之梦》的森林追逐', '题目问的是“阻止决斗的方法”，要找 Puck 当场分开两人的动作。',
    ['还原冲突', 'Demetrius 与 Lysander 因爱情魔法引发的混乱准备在森林中决斗。'],
    ['追踪 Puck 的行动', 'Puck 分别模仿两人的声音，把他们引向森林不同方向，使双方始终找不到彼此。'],
    ['区分后续处理', '在眼皮上用药是之后纠正爱情错配的方法，不是当场阻止打斗；武器变野草并非该情节。'],
    'Puck 靠模仿声音、把二人引到森林不同区域阻止了决斗。'
  ));
  add('经典名著阅读', `It can be inferred from A Midsummer Night's Dream that ____.`, ['Theseus was too kind to carry out the cruel death sentence at the end of the fourth day.', 'Puck made amends for his former mistake and helped Lysander restore his old passion for Hermia.', 'Demetrius realized that the lady he loved from the very beginning was Helena rather than Hermia.'], 'B', three(
    '《仲夏夜之梦》的魔法纠错', '根据爱情药水的误用与纠正判断人物情感恢复，而不是把魔法结果当成“自始至终”。',
    ['识别先前错误', 'Puck 误把药水用在 Lysander 身上，使他暂时转而爱上 Helena，打乱原有恋情。'],
    ['核对纠正结果', 'Puck 后来按 Oberon 的安排解除 Lysander 的魔法，让他重新爱 Hermia，确实是在弥补先前错误。'],
    ['排除不当推断', 'A 把公爵改变判决简单归结为“太善良”；C 忽略 Demetrius 对 Helena 的感情受魔法影响，并非从一开始就认定她。'],
    'Puck 最终纠正误施魔法，帮助 Lysander 恢复对 Hermia 的旧爱。'
  ));
  add('经典名著阅读', `According to Much Ado about Nothing, which of the following is true?`, [`Leonato didn't believe Don John's words and thought Hero must have been framed.`, `Margaret dressed herself in Hero's clothes and pretended to talk with a man from Hero's chamber window.`, `Claudio mistook the lady who talked with a man from Hero's chamber window for Beatrice.`], 'B', three(
    '《无事生非》的窗口骗局', '核对 Don John 如何制造 Hero 不贞的假象，以及 Claudio 实际误认的是谁。',
    ['还原骗局', 'Don John 安排 Borachio 在 Hero 窗下同 Margaret 交谈，并让 Margaret 穿上 Hero 的衣服。'],
    ['说明误认', '远处目击者因此把 Margaret 当作 Hero，从而误以为 Hero 不忠。'],
    ['排除错误人物', 'Leonato 起初相信指控并痛苦责备 Hero；Claudio 误认的是 Hero，不是 Beatrice。'],
    '真实情节是 Margaret 穿 Hero 的衣服，在窗口配合制造骗局。'
  ));
  add('经典名著阅读', `When ____ Benedick and Beatrice found they had been tricked into a belief of love, which had never existed. (Much Ado about Nothing)`, [`Benedick desired to be married to Beatrice at the second wedding ceremony of Hero and Claudio,`, `Claudio proclaimed the guilt of the blameless Hero at their first wedding ceremony,`, `Leonato took the friar's advice and erected a monument for his daughter,`], 'A', three(
    '《无事生非》的第二次婚礼', '空格要填能与“二人发现自己被设计相爱”直接衔接的时间情节。',
    ['定位结局场景', 'Hero 洗清冤屈后举行第二次婚礼，Benedick 也公开提出要与 Beatrice 成婚。'],
    ['连接发现过程', '两人嘴上仍互相挖苦，旁人拿出各自写下的情诗，证明确有爱意并揭开朋友们的撮合。'],
    ['排除时间错位', 'Claudio 在第一次婚礼的诬告发生得更早；为 Hero 建纪念碑也在真相揭开和第二次婚礼之前。'],
    '第二次婚礼上 Benedick 提出成婚时，二人得知朋友们曾设计撮合他们。'
  ));
  add('经典名著阅读', `What does “congregation” mean in the sentence “If I see anything tonight why I should not marry her, tomorrow in the congregation, where I intended to wed her, there will I shame her”? (Much Ado about Nothing)`, ['a group of people gathered together in a church to worship God, not including the priest and choir', 'assembly in public places', 'absolute convergence'], 'A', three(
    '语境词义 congregation', '结合 tomorrow、wed her 与 church 场景确定该词指婚礼时聚集在教堂的会众。',
    ['读取场景', '说话者计划第二天结婚，并要在众人面前羞辱 Hero，地点是宗教婚礼现场。'],
    ['匹配词义', 'congregation 在教堂语境中特指参加礼拜或仪式的会众，通常不包括主持仪式的神职人员与唱诗班。'],
    ['排除宽泛/无关义', 'public assembly 太宽泛，不能体现教堂；absolute convergence 是数学术语，与婚礼语境无关。'],
    '这里的 congregation 指聚集在教堂参加仪式的会众。'
  ));
  add('经典名著阅读', `“In this manner did the patient duke draw a useful moral from everything that he saw; and by the help of this moralizing turn, in that life of his, remote from public haunts, he could find tongues in trees, books in the running brooks, sermons in stones and good in everything.” According to this sentence, the duke found his life in the forest ____. (As You Like It)`, ['monotonous', 'enlightening', 'unbearable'], 'B', three(
    '比喻句的整体含义', '把“树会说话、溪流如书、石头有训诫”理解为从自然中获得启迪。',
    ['抓住评价词', 'useful moral、sermons 和 good in everything 都说明公爵能从所见事物中提炼教益。'],
    ['概括生活体验', '远离宫廷的森林生活让他观察自然、反思人生，因此是 enlightening。'],
    ['排除负面词', 'monotonous 与 unbearable 都表示乏味或难以忍受，和 patient、good in everything 的积极语气冲突。'],
    '公爵认为森林生活富有启发性。'
  ));
  add('经典名著阅读', `Why was Frederick so determined to banish Rosalind despite Celia's earnest pleading? (As You Like It)`, [`He was jealous of Rosalind's popularity with his people.`, `He suspected Rosalind was a spy sent by her father.`, `He was unhappy Orlando admired Rosalind rather than Celia.`], 'A', three(
    '《皆大欢喜》的流放动机', '区分 Frederick 的政治嫉妒与无文本依据的间谍、婚恋猜测。',
    ['定位人物处境', 'Rosalind 虽是被放逐老公爵之女，却留在宫廷并受到民众喜爱。'],
    ['说明 Frederick 的心理', '她的声望会让人们同情老公爵、反衬 Frederick 的统治，因此他因嫉妒和不安全感坚持驱逐她。'],
    ['排除编造动机', '文本并未把她定为父亲派来的间谍；Orlando 对 Rosalind 的爱也不是 Frederick 驱逐她的核心原因。'],
    'Frederick 因嫉妒 Rosalind 在民众中的声望而坚持放逐她。'
  ));
  add('经典名著阅读', `What happened to Duke Frederick at the end of the play? (As You Like It)`, ['He put an end to his life in deep remorse.', 'He retired from court to the forest of Arden.', 'He was converted by a hermit from his evilness.'], 'C', three(
    '《皆大欢喜》的结局', '追踪 Frederick 进军森林后的转折，答案是悔改而非自杀或普通退隐。',
    ['回忆行动起点', 'Frederick 原本率军前往 Arden 森林，准备对付流亡的老公爵一行。'],
    ['找到关键转折', '途中他遇到一位隐士并受到感化，放弃恶念，也放弃篡夺来的权力。'],
    ['排除结局混淆', '他没有因悔恨自杀；他进入宗教生活是感化后的结果，不能简化为仅仅从宫廷退休。'],
    'Frederick 被隐士感化，改过并放弃原来的恶行。'
  ));

  add('完形填空', `Many people's difficulty (41) ____ from the psychological idea that they are not good at math.`, ['appears', 'varies', 'consists', 'stems'], 'D', three(
    'stem from 表示原因', '空格后接 from，句意要说明数学困难源自心理观念。',
    ['确定因果', 'the psychological idea 是 difficulty 的来源，而不是困难的组成部分。'],
    ['核对搭配', 'stem from 固定表示“源于”，第三人称单数 difficulty 对应 stems。'],
    ['排除干扰', 'appear from、vary from 不表达起因；consist 通常接 of 或 in，不接 from 表来源。'],
    '有些人的数学困难源自“自己不擅长数学”的心理观念。'
  ), clozeA);
  add('完形填空', `It is often this idea (42) ____ causes their problem rather than any lack of skill in mathematics.`, ['from which', 'that', 'by which', 'which'], 'B', three(
    '强调句 It is ... that ...', '去掉强调结构后仍应得到 this idea causes their problem。',
    ['还原基本句', '基础句是 This idea often causes their problem；被强调成分是主语 this idea。'],
    ['套用强调结构', '强调句用 It is + 被强调部分 + that + 其余成分，因此空格填 that。'],
    ['排除关系词误判', 'from which/by which 会多出介词；which 会把句子误作普通定语从句，且标准强调句此处用 that。'],
    '真正造成困难的往往是这种观念，而非数学能力不足。'
  ), clozeA);
  add('完形填空', `The best way to (43) ____ this problem is to tell yourself that math uses familiar numbers.`, ['face', 'encounter', 'propose', 'deal with'], 'D', three(
    'deal with a problem', 'the best way to 后接动词原形，语义是采取办法处理心理障碍。',
    ['确定动作目标', '下文给出自我提醒的方法，说明这里讨论如何处理而不是如何遇见问题。'],
    ['核对搭配', 'deal with this problem 表示“处理这个问题”，语义与后面的解决建议完整衔接。'],
    ['排除干扰', 'face 只表示面对；encounter 是遭遇；propose 的宾语通常是计划或建议，不能表示解决问题。'],
    '应通过改变自我认知来处理这一心理问题。'
  ), clozeA);
  add('完形填空', `Math (44) ____ using the same numbers you have been using all your life.`, ['involves', 'will be', 'keeps', 'starts'], 'A', three(
    'involve doing', '空格后直接跟 using，需选择能接动名词并表达“包含”的谓语。',
    ['读取论证目的', '作者想降低数学的陌生感：数学所包含的仍是日常一直使用的数字。'],
    ['核对句法', 'involve doing something 是固定结构，主语 math 为单数，所以用 involves。'],
    ['排除结构错误', 'will be using 会变成将来进行时且语义不合；keep/start 后需不同语义或结构，不能准确表达“涉及”。'],
    '数学所涉及的仍是你一直在使用的那些数字。'
  ), clozeA);
  add('完形填空', `Then (45) ____ your mind to learning how the numbers are used.`, ['make', 'have', 'set', 'get'], 'C', three(
    'set one’s mind to doing', '祈使句要求动词原形，to 后是 learning，考查“专心做”的固定表达。',
    ['确定句意', '作者先消除畏惧，再建议把注意力投入具体数学用法的学习。'],
    ['核对搭配', 'set your mind to doing 表示下定决心或专心做某事，to 是介词，后接 learning。'],
    ['排除其他动词', 'make/have/get your mind to learning 都不是这一含义的固定结构。'],
    '接下来应专心学习这些数字在当前数学领域中的用法。'
  ), clozeA);
  add('完形填空', `In mathematics, (46) ____ some other subjects, the material has a very important sequence or order.`, ['like', 'unlike', 'similar to', 'same as'], 'B', three(
    'unlike 引出对比', '后文强调数学材料有严格顺序，说明它与某些其他学科不同。',
    ['识别比较方向', '如果不懂上一节就不能继续，正是数学相较其他学科的不同点。'],
    ['核对句法', 'unlike + 名词短语可直接作比较状语，unlike some other subjects 结构完整。'],
    ['排除同向比较', 'like、similar to、same as 都表示相似，会把作者要强调的差异说反。'],
    '数学不同于某些其他学科，其材料有重要的先后顺序。'
  ), clozeA);
  add('完形填空', `If you don't understand one section, it is no use (47) ____ to the next section.`, ['going on', 'turning to', 'pass on', 'move on'], 'A', three(
    'It is no use doing', 'no use 后必须用动名词，句意是未懂当前部分便继续下一部分没有用。',
    ['套用语法框架', 'It is no use doing something 是固定句型，因此首先排除原形 pass、move。'],
    ['核对短语语义', 'go on to the next section 表示继续进入下一节，going on 同时满足动名词形式。'],
    ['比较 turning to', 'turn to 可表示转向或求助，但这里强调按教材顺序“继续”，go on 更准确呼应后句 before going on to the next。'],
    '当前一节尚未理解时，继续下一节没有意义。'
  ), clozeA);
  add('完形填空', `Many sections of math books are (48) ____ on information presented earlier.`, ['carried', 'depended', 'relied', 'based'], 'D', three(
    'be based on', '空格后的 on 和 earlier information 表示后续内容建立在前文基础上。',
    ['理解篇章关系', '数学内容有顺序，因为新章节依赖此前呈现的信息。'],
    ['核对被动结构', 'be based on something 是固定表达；are based 与复数主语 sections 一致。'],
    ['排除形式错误', 'depend/rely on 通常用主动形式 sections depend/rely on；are depended/relied on 会变成“被依赖”。'],
    '数学书的许多章节建立在此前信息的基础上。'
  ), clozeA);
  add('完形填空', `Students do not read the (49) ____ material in the text.`, ['spoken', 'written', 'supplementary', 'raw'], 'B', three(
    '上下文复现 written material', '末句直接说 The written sections...，可用词汇复现锁定空格。',
    ['定位照应', '本句讨论学生不读教材，段末强调教材的 written sections 含有宝贵信息。'],
    ['选择准确修饰语', 'written material 指教材中的书面材料，与 read 和 text 同时搭配。'],
    ['排除干扰', 'spoken 与 text 矛盾；supplementary 只表示补充；raw 表未加工，均没有末句的直接照应。'],
    '问题在于学生没有阅读教材中的书面材料。'
  ), clozeA);
  add('完形填空', `Students do not read the text but (50) ____ that the instructor will tell them what they need to know.`, ['consider', 'assume', 'expect', 'believe'], 'B', three(
    'assume that 表示未经证实的想当然', 'but 后描述学生不读书的错误前提：想当然地认为教师会讲全。',
    ['连接因果', '正因为学生把老师会告知一切当作既定事实，他们才跳过课前阅读。'],
    ['核对语气', 'assume that 强调没有充分依据便接受为真，恰好对应后句教师反而 assume 学生已读课文的讽刺对照。'],
    ['排除近义词', 'expect 偏预期，believe 偏相信，consider 通常需宾补；均不如 assume 准确呈现未经核实的假定。'],
    '学生想当然地认为教师会告诉他们全部所需内容。'
  ), clozeA);

  add('完形填空', `Americans began to move in great numbers to (51) ____.`, ['the suburbs', 'the suburb', 'suburb', 'suburbs'], 'A', three(
    '地点名词 the suburbs', '战后家庭搬离城市的历史语境要求“郊区”这一惯用复数表达。',
    ['读取下文', '后文写住房相隔很远、男性进城工作，说明目的地是城市外围的郊区。'],
    ['核对冠词和数', 'move to the suburbs 是固定表达，通常用定冠词加复数。'],
    ['排除形式', '单数 suburb 需具体限定；裸复数 suburbs 在该惯用地点表达中通常需要 the。'],
    '战后美国人大量迁往郊区。'
  ), clozeB);
  add('完形填空', `There was a strong (52) ____ between work and home.`, ['proportion', 'fraction', 'division', 'problem'], 'C', three(
    'division between A and B', '男性进城工作、女性留在郊区家庭，形成工作与家庭的明显分隔。',
    ['概括前文', 'women were separated from men 与 men went back into the city 共同体现两个生活领域被分开。'],
    ['核对搭配', 'a division between work and home 表示工作和家庭之间的分隔。'],
    ['排除数量词', 'proportion 和 fraction 指比例或份额；problem 太泛，不能准确复现 separated 的概念。'],
    '当时工作领域与家庭领域之间出现明显分隔。'
  ), clozeB);
  add('完形填空', `Houses were far apart, and these areas were all (53) ____; there were no stores or businesses.`, ['for survival', 'for alive', 'for life', 'for living'], 'D', three(
    'for living 表示住宅用途', '分号后的“没有商店或企业”说明这些区域只用于居住。',
    ['利用解释关系', 'there were no stores or businesses 排除了商业用途，前半句应概括为生活居住区。'],
    ['核对形式', 'for living 可表示“供居住/生活之用”，living 是名词化用法。'],
    ['排除不当表达', 'for alive 语法错误；for survival 强调生存；for life 通常表示终身，都不能表达区域用途。'],
    '这些区域只供居住，没有商店或商业设施。'
  ), clozeB);
  add('完形填空', `All these (54) ____ contributed to a sense of isolation.`, ['facts', 'fractions', 'factors', 'prospects'], 'C', three(
    'factor 与 contribute to', '前文列举住宅分散、购物需驾车等多个造成孤立感的原因。',
    ['识别概括对象', 'all these 指代一组共同产生结果的条件，而非单一事实。'],
    ['核对因果搭配', 'factors contribute to a result 是常见组合，表示多项因素共同导致结果。'],
    ['排除词义', 'facts 只强调事实，fractions 是分数，prospects 是前景，都不直接表示成因。'],
    '这些因素共同造成了孤立感。'
  ), clozeB);
  add('完形填空', `There was a feeling of separation between the family and the (55) ____ world.`, ['outside', 'outing', 'out', 'outer'], 'A', three(
    'the outside world', '家庭与社会隔离的固定表达是 the outside world。',
    ['联系主题', '郊区女性难以接触商店、朋友与公共生活，因此家庭同外部世界分离。'],
    ['核对搭配', 'the outside world 指家庭、组织之外的社会，是固定名词短语。'],
    ['排除近形词', 'outing 是外出活动，out 不能这样修饰 world，outer 强调空间外层而非社会外界。'],
    '家庭与外部世界之间产生了隔离感。'
  ), clozeB);
  add('完形填空', `Technological developments gave housewives many (56) ____ inventions such as dishwashers and vacuum cleaners.`, ['time-consumed', 'time-saved', 'time-consuming', 'time-saving'], 'D', three(
    '复合形容词 time-saving', '洗碗机、吸尘器和冷冻食品的共同作用是节省家务时间。',
    ['概括例子', '这些发明让下句的 Life became easier 成立，并使主妇手上有 more time。'],
    ['核对构词', 'time-saving 表示“节省时间的”，现在分词 saving 表主动功能。'],
    ['排除反义/错误形式', 'time-consuming 表耗时，与下文相反；time-consumed 和 time-saved 不是这里修饰 inventions 的自然复合形容词。'],
    '技术发展带来了许多节省时间的家用发明。'
  ), clozeB);
  add('完形填空', `Life became easier for American housewives, (57) ____ not necessarily satisfying.`, ['whereas', 'but', 'and', 'however'], 'B', three(
    '并列转折连词 but', 'easier 与 not necessarily satisfying 构成直接转折，空格连接同一句的两个表语。',
    ['识别逻辑', '家务更轻松并不等于生活更有满足感，前后评价方向相反。'],
    ['核对句法', 'but 可在逗号后直接连接两个并列成分：became easier but not necessarily satisfying。'],
    ['排除连接方式', 'whereas 通常引出有主谓的从句；however 是副词需另行标点；and 不能突出反差。'],
    '主妇的生活更轻松了，但未必更令人满足。'
  ), clozeB);
  add('完形填空', `American women began to want to become more (58) ____.`, ['accomplished', 'completed', 'participated', 'involved'], 'D', three(
    'become involved 表示参与社会生活', '下文 women’s movement 与 outside the home 说明女性希望更多参与公共事务。',
    ['承接心理变化', '家务节省出的时间没有带来满足，于是女性希望在家庭外承担更积极角色。'],
    ['核对形容词用法', 'involved 可作表语，become more involved 表示参与程度提高。'],
    ['排除词形', 'completed 与 participated 不能自然作这种表语；accomplished 表有成就或多才多艺，不强调参与。'],
    '美国女性开始希望更广泛地参与社会生活。'
  ), clozeB);
  add('完形填空', `It is really not (59) ____ that American women are working to regain a strong role.`, ['surprising', 'surprisingly', 'to surprise', 'surprised'], 'A', three(
    'It is + 形容词 + that 从句', '空格在 is 与 that 从句之间，需要评价整件事是否令人惊讶的形容词。',
    ['套用句型', 'It 是形式主语，that American women... 是真正主语，表语应为形容词。'],
    ['区分 -ing/-ed', 'surprising 修饰“这件事”带给人的感受；surprised 通常描述人的心理状态。'],
    ['排除词性', 'surprisingly 是副词，to surprise 是不定式，都不能直接作此处表语完成 not ... that 结构。'],
    '鉴于美国女性曾在国家建设中活跃，她们重新争取角色并不令人惊讶。'
  ), clozeB);
  add('完形填空', `American women are working to (60) ____ their strong role in American life.`, ['refine', 'relay', 'replay', 'reestablished'], 'D', three(
    'work to 后的动词原形与 reestablish', '语义要求“重新确立她们的强大角色”，同时 to 后必须接动词原形。',
    ['确定目标语义', '历史上女性曾积极参与建设，现在的运动意在恢复这种社会角色，因此核心词是 reestablish。'],
    ['核对严格语法', 'working to 后必须接动词原形；按命题意图，D 应为 reestablish，表达“重新确立”。'],
    ['排除其余词义', 'refine 是改进，relay 是转达，replay 是重放，都不能表示恢复社会角色。'],
    '本句按命题意图应表达“重新确立她们在美国生活中的重要角色”。',
    '原卷 D 项印作 reestablished，与 to 后接动词原形冲突；手写答案指向 D。严格语法应改为 reestablish，因此交互保留原卷答案 D，同时明确记录印刷词形错误。',
    '原卷、手写答案页均清晰；D 项存在可确认的词形印刷错误，严格形式应为 reestablish。'
  ), clozeB);

  add('阅读理解', `How many calculating devices which were designed before the 1800s are mentioned?`, ['one', 'two', 'three', 'four'], 'C', three(
    '细节计数', '限定条件是“1800 年以前设计的 calculating devices”，逐项计数，不能把 1830 年代的 Babbage 机器算入。',
    ['列出符合项', '首段依次提到 abacus、Schickard 的 calculating clock、Pascal 1642 年的 adding machine，共三项。'],
    ['检查时间边界', 'Babbage 的机器出现在 1830s，已经晚于 1800 年，因此不计入。'],
    ['核对数量', '符合“设备 + 1800 年前”两个条件的恰好是三种。'],
    '文中提到三种 1800 年以前的计算装置。'
  ), reading1);
  add('阅读理解', `What use was planned for Mr. Babbage's calculating machine?`, ['punching cards', 'measuring the tide', 'sewing patterns', 'building computers'], 'B', three(
    '目的细节定位', '区分机器的用途、编程手段与灵感来源。',
    ['定位原句', '第二段明确说 his calculating machine “was designed to measure the tide”。'],
    ['区分手段', 'punch cards 是 programming device，并不是机器最终要完成的测量任务。'],
    ['排除来源混淆', 'sewing patterns 是借鉴打孔卡的早期缝纫机用途；building computers 也未被写成 Babbage 机器的计划用途。'],
    'Babbage 的计算机器原计划用于测量潮汐。'
  ), reading1);
  add('阅读理解', `What invention allowed second-generation computers to be smaller and more energy efficient?`, ['binary switches', 'microprocessors', 'parallel network', 'transistor'], 'D', three(
    '代际技术细节', '找到第一代与第二代之间的过渡句，技术原因就在该句。',
    ['定位证据', '文章说 The invention of transistors led the way for the next generation of computers。'],
    ['连接结果', '紧接着描述第二代机器 smaller in size and used less energy，表明晶体管带来尺寸和能耗改进。'],
    ['排除年代错位', 'binary switches 用于早期编程，microprocessors 属第四代，parallel systems 属第五代。'],
    '晶体管使第二代计算机更小、更节能。'
  ), reading1);
  add('阅读理解', `The fourth paragraph explains the ____.`, ['growth of the computer industry', 'largest computer company', 'most recent generation of computers', 'invention of the virus'], 'A', three(
    '段落主旨概括', '第四段以 1970 与 1993 的数量对比说明市场扩张，不要被单个数字带偏。',
    ['提取主题句', '段首直接写 The computer market has seen very large growth since the early 1970s。'],
    ['归纳支撑数据', '美国商用 80,000 台、海外 30,000 台，到 1993 年美国达 29 million，都是增长证据。'],
    ['排除相邻段内容', 'IBM 在第二段；计算机代际在第三段；病毒在第五段，均不是第四段中心。'],
    '第四段说明计算机市场/产业的迅速增长。'
  ), reading1);
  add('阅读理解', `Who created the virus that infected thousands of computers through the Internet?`, ['a graduate student', 'Herman Hollerith', 'Jim Hauser', 'Robert Morris'], 'D', three(
    '人物与事件对应', '文章写了 1982 年 worm 和 1988 年大规模感染两个事件，题目问后者。',
    ['定位数量线索', 'infected and crashed 6,000 computers 对应 thousands of computers through the Internet。'],
    ['锁定人物', '该句明确说 a program created by Robert Morris 造成这次感染。'],
    ['排除前一事件人物', 'Jim Hauser 与学生开发的是早期 worm 并发表文章警示用户；Hollerith 处理人口普查数据。'],
    '造成互联网数千台计算机感染的程序由 Robert Morris 创建。'
  ), reading1);

  add('阅读理解', `Which music style had the largest influence on early rock and roll music?`, ['gospel', 'country', 'rhythm and blue', 'reggae'], 'C', three(
    '首段明示细节', '题目问 largest influence，直接寻找同级最高程度表达。',
    ['定位原文', '首段说 Perhaps the largest influence on rock came from rhythm and blues (R&B)。'],
    ['确认范围', 'gospel 与 country 也有影响，但原文只把 R&B 标为 largest。'],
    ['排除后期风格', 'reggae 到 1970 年代才出现，不属于早期摇滚的最大来源。'],
    '对早期摇滚影响最大的是 rhythm and blues。'
  ), reading2);
  add('阅读理解', `What did some people consider controversial about Elvis Presley?`, ['his dance', 'his lyrics', 'his voice', 'his hair'], 'A', three(
    '人物特征细节', '定位 Elvis Presley 段中 controversial 直接修饰的名词。',
    ['找到原句', '文章写 With his sexy looks and his controversial dancing style...。'],
    ['对应选项', 'controversial dancing style 等同于选项中的 his dance。'],
    ['排除未被修饰项', '本段没有把 lyrics、voice 或 hair 描述为 controversial。'],
    '引发争议的是 Elvis Presley 的舞蹈风格。'
  ), reading2);
  add('阅读理解', `Which singer or group has had the most No. 1 singles in history?`, ['Elvis Presley', 'Chuck Berry', 'The Beatles', 'The Clash'], 'C', three(
    '数字比较', '比较 Elvis 的 nine 与 Beatles 的 fourteen，并注意原文给出的最高纪录结论。',
    ['提取 Elvis 数据', '文章说 Elvis 是最成功的男性独唱者，拥有 nine No. 1 singles。'],
    ['提取 Beatles 数据', 'The Beatles recorded fourteen No. 1 singles，并被说明是任何组合或独唱者中最多。'],
    ['完成比较', '十四大于九，且 Chuck Berry、The Clash 没有被赋予更高纪录。'],
    'The Beatles 拥有文中所述最多的冠军单曲。'
  ), reading2);
  add('阅读理解', `Where did punk rock begin?`, ['England', 'France', 'Germany', 'the United States'], 'A', three(
    '地点细节定位', '在讨论 disco 之后的句子中寻找 began 的地点。',
    ['定位原句', '第四段明确写 punk rock began in England。'],
    ['用背景复核', '下一句继续说英格兰当时的社会、经济与种族问题促成 punk rock，进一步确认地点。'],
    ['排除其他国家', '法国、德国与美国均未被文中列作 punk rock 的发源地。'],
    '文中指出朋克摇滚始于英格兰。'
  ), reading2);
  add('阅读理解', `New wave music is said to be a milder form of ____.`, ['disco', 'grunge rock', 'punk rock', 'reggae'], 'C', three(
    '上下文释义 toned down', 'milder form 对应文章中的 toned down the anger，需找被减弱怒气的原有音乐。',
    ['定位发展链', '末段说 musicians toned down the anger in punk music and developed new wave music。'],
    ['解释改造关系', 'new wave 由 punk 降低愤怒和激烈程度后发展而来，所以可概括为更温和的 punk rock。'],
    ['排除并列风格', 'disco 是引发反应的背景；reggae 与 grunge 是其他风格，不是 new wave 的直接来源。'],
    '新浪潮音乐被描述为更温和的朋克摇滚形式。'
  ), reading2);

  add('阅读理解', `The main purpose of the text is to ____.`, ['introduce a new trend of drinking coffee', 'introduce new coffee makers', 'introduce two U.S. appliance companies', 'introduce the new coffee industry'], 'B', three(
    '说明文主旨', '首段用饮用趋势引出产品，后两段持续介绍不同新型咖啡机。',
    ['分析篇章结构', '第一段只是背景；第二段介绍一两杯滴滤机，第三段介绍保温壶咖啡机。'],
    ['概括共同中心', '两段主体都围绕新咖啡机的容量、结构、价格和用途展开。'],
    ['排除过窄/过宽项', '饮用趋势和两家公司只是引子或生产者信息；“整个新咖啡产业”范围又超出文章。'],
    '文章主要介绍几款顺应新需求的新型咖啡机。'
  ), reading3);
  add('阅读理解', `The advantage of “drip” coffee makers shown in the text is that ____.`, ['they are much more economic', 'they can produce only one cup', 'they are more convenient and easier to operate', 'they are more economical'], 'D', three(
    '从减少浪费推断经济性', '题干问文中展示的 advantage，要把一两杯容量与 reduce wasted coffee 联系起来。',
    ['提取使用场景', '许多人早晨煮一壶却只喝一杯，新机只冲一到两杯。'],
    ['推出优势', '按需冲泡减少被倒掉的咖啡，因此使用上更经济，more economical 表达正确。'],
    ['排除措辞问题', 'B 的 only one cup 忽略 two-cup；C 的易操作未被明确支持；A 用 economic 描述产品消费节省不如 economical 准确。'],
    '滴滤小容量咖啡机通过减少浪费而更经济。'
  ), reading3);
  add('阅读理解', `According to the passage, a thermal carafe is necessary when the coffee is ____.`, ['preserved', 'produced', 'manufactured', 'brewed'], 'A', three(
    '保温壶的功能', '区分咖啡的冲泡过程与冲好后保鲜数小时的需求。',
    ['定位功能句', '文章说 thermal carafe 是玻璃真空瓶，supposed to keep the coffee fresh for hours。'],
    ['匹配用途', 'keep fresh for hours 表示保存已冲好的咖啡，因此对应 coffee is preserved。'],
    ['排除过程混淆', '咖啡机负责 brewed；produced/manufactured 更像生产产品，均不是保温壶存在的必要情境。'],
    '需要长时间保存咖啡时，保温壶发挥作用。'
  ), reading3);
  add('阅读理解', `Which of the following statements can be inferred from the passage?`, ['People used to drink coffee in larger quantities.', 'It is essential to attach a separate carafe while drip coffee makers are applied.', 'People used to make a pot of coffee in the morning and drink it up.', 'The new coffee makers usually cost less than before.'], 'A', three(
    '比较结构推断', '首句的 in smaller quantities than they used to 已直接给出今昔数量比较。',
    ['还原比较对象', '现在喝咖啡的人更多，但每次/每人的饮用量比过去小。'],
    ['推出过去情况', '既然现在的量 smaller than before，就可推出过去通常饮用更大的量。'],
    ['排除反文项', '新机恰好不需 separate carafe；许多人过去煮一壶却只喝一杯；文章没有给旧机价格，不能推出更便宜。'],
    '可以推断人们过去喝咖啡的量更大。'
  ), reading3);
  add('阅读理解', `The word “it” in Line 4, paragraph 3, probably refers to ____.`, ['the lid', 'coffee-maker', 'the brewing process', 'the model'], 'C', three(
    '代词指代', '回到包含 it 的完整句，寻找能与 completed 搭配且紧邻的先行内容。',
    ['还原原句', 'the lid opens during the brewing process and closes when it is completed。'],
    ['检验指代语义', '能够“完成”的是 brewing process；冲泡完成时盖子关闭，逻辑连贯。'],
    ['排除其他名词', 'lid 是执行 closes 的主体，不是被完成的过程；coffee-maker 和 model 也不会在一次冲泡时“完成”。'],
    'it 指代前文的 the brewing process。'
  ), reading3);

  window.CaigouBankQuestions = questions;
})();
