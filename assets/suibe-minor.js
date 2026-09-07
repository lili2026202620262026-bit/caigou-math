'use strict';
const routes={
local:{title:'本校辅修',tag:'2025 年报名参考',intro:'面向学有余力的本校在籍全日制大一学生。先确认学科门类和第一学期成绩，再考虑专业。',requirements:['主修与辅修归属不同学科门类','第一学期无不及格课程','平均学分绩点达到 2.700','无考试违纪或考试作弊','未受任何纪律处分','无欠费记录'],tip:'完成结果：符合学位授予标准时，在主修学位证书中注明辅修学士学位，不单独发证。报名不等于获得学位。'},
songjiang:{title:'松江跨校辅修',tag:'2025 年报名参考',intro:'面向学有余力的本校在籍全日制大一学生。选学校时，也要看清专业实际授课校区。',requirements:['本校在籍全日制大一学生','无考试违纪或考试作弊','未受任何纪律处分','无欠费记录','核对所报学校的附加要求','确认上课校区与通勤安排'],tip:'完成结果：达到跨校辅修培养要求后，由辅修学校颁发跨校辅修专业证书。松江协作不代表所有课程都在松江上课。'},
northeast:{title:'东北片跨校辅修',tag:'按各校简章申请',intro:'东北片教学协作组成员高校学生可按招生规定修读跨校辅修；SUIBE 属于成员高校。各项目条件与教学安排需单独核对。',requirements:['通过协作网查询专业教学计划','区分辅修专业与辅修微专业','核对招生对象与专业前置要求','查看授课校区、时间与费用','关注当年名额及报名截止日期','咨询开设学校教务处'],tip:'协作组包括复旦、同济、财大、上外、上理工、海事、海洋、电力、上体、杉达、上外贤达、二工大、华政、上经贸大、海关。一般 6 月关注招生信息。'}
};
const catalogs={
local:[['国际经济与贸易',['经济学门类']],['金融学',['经济学门类']]],
songjiang:[['东华大学',['数字媒体艺术 · 延安路校区','服装与服饰设计 · 延安路校区','金融学 · 松江校区','会计学 · 延安路校区']],['上海工程技术大学',['摄影','环境设计','视觉传达设计']],['华东政法大学',['法学']],['上海立信会计金融学院',['会计学 · CPA 方向','会计学 · 数字管理会计方向','金融学','税收学','法学']],['上海外国语大学',['英语','法语','日语','德语']]],
northeast:[['复旦大学',['金融学','法学']],['上海理工大学',['语言智能','新能源材料与器件','数字经济与贸易','可持续发展与碳中和','高端制造的智能材料（英）']],['同济大学',['气候变化与碳中和']]]
};
const notes={local:'以上为 2025 年本校开设专业；2024 年授予学位门类为经济学。请按当年培养方案核对。',songjiang:'2025 年松江协作招生名单还包括 SUIBE 的国际经济与贸易、金融学，已列在“本校”页签。校区只对已明确的专业标注，其他专业请查招生简章。',northeast:'以上为 2025 年项目参考，非完整实时招生清单；不同项目可能属于辅修专业或辅修微专业，类型、名额及证书请逐项查简章。'};
const tabs=[...document.querySelectorAll('[role=tab]')];
function setRoute(key){const r=routes[key];if(!r)return;tabs.forEach(t=>{const selected=t.dataset.route===key;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1});const panel=document.getElementById('route-panel');panel.setAttribute('aria-labelledby','tab-'+key);panel.innerHTML=`<div class="panel-top"><div><span class="eyebrow">路线档案</span><h3>${r.title}</h3></div><span class="pill">${r.tag}</span></div><p>${r.intro}</p><ul class="requirements">${r.requirements.map(x=>`<li>${x}</li>`).join('')}</ul><div class="route-tip">${r.tip}</div>`;}
document.querySelectorAll('[data-route]').forEach(b=>b.addEventListener('click',()=>setRoute(b.dataset.route)));
tabs.forEach((tab,i)=>tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowDown'||e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowUp'||e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();setRoute(tabs[next].dataset.route);tabs[next].focus()}}));
function setCatalog(key){document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===key)));document.getElementById('catalog-list').innerHTML=catalogs[key].map(([school,majors],i)=>`<article class="school-card"><span class="school-num">${String(i+1).padStart(2,'0')} / ${key==='local'?'本校专业':'探索学校'}</span><h3>${school}</h3><div class="major-tags">${majors.map(x=>`<span>${x}</span>`).join('')}</div></article>`).join('');const count=key==='local'?catalogs[key].length:catalogs[key].reduce((n,x)=>n+x[1].length,0);document.getElementById('catalog-count').textContent=`2025 参考 · ${count} 个${key==='northeast'?'项目':'专业'}`;document.getElementById('catalog-note').textContent=notes[key];}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setCatalog(b.dataset.filter)));
function budget(){const credits=Number(document.getElementById('credits').value),price=Number(document.getElementById('price').value);document.getElementById('credits-value').textContent=credits+' 学分';document.getElementById('price-value').textContent=price+' 元';document.getElementById('total').textContent='¥'+(credits*price).toLocaleString('zh-CN');document.getElementById('hours').textContent=`按通常 15 学时 / 学分，约 ${credits*15} 学时`;}
['credits','price'].forEach(id=>document.getElementById(id).addEventListener('input',budget));
function checks(){const n=document.querySelectorAll('#checks input:checked').length;document.getElementById('check-result').textContent=n===5?'5 / 5 项已想清，去核对正式简章。':`已想清 ${n} / 5 项，慢慢来。`;}
document.querySelectorAll('#checks input').forEach(x=>x.addEventListener('change',checks));document.getElementById('reset-checks').addEventListener('click',()=>{document.querySelectorAll('#checks input').forEach(x=>x.checked=false);checks()});
setRoute('local');setCatalog('local');budget();
