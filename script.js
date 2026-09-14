const portfolioData = {
  profile: {
    name: '冉佳',
    phone: '+86 19120383198',
    email: '19120383198@163.com',
    location: '深圳市',
    bio: '我的学习与工作横跨艺术科技、视觉设计、新媒体运营与艺术教育。擅长使用 PS、AI、Figma 完成平面与界面视觉设计，并运用 AE、PR、剪映和 Midjourney 将创意转化为图像、视频与互动体验。',
    stats: [{ value: '2026', label: '硕士在读' }, { value: 'TOP 10%', label: '本科专业排名' }, { value: '05', label: '教育 / 运营经历' }],
    skills: ['PS / AI / Figma', 'AE / PR / 剪映', 'Midjourney', '艺术教育', '新媒体运营', '活动策划']
  },
  works: [
    { id: 'echo', title: '回声花园', type: '互动装置', year: '2026', category: 'interaction', description: '一件关于记忆与回响的沉浸式交互装置。观众的声音会让花园生长，也会被它温柔地保存。', tags: ['TouchDesigner', '声音交互', '空间叙事'], color: 'coral', number: '01' },
    { id: 'time', title: '时间笔记', type: '网页体验', year: '2025', category: 'digital', description: '把一天里不被注意的片刻，编排成一份可以浏览的数字手账。', tags: ['Creative Coding', 'WebGL', 'UI Design'], color: 'lime', number: '02' },
    { id: 'lesson', title: '不规则课堂', type: '教育项目', year: '2025', category: 'education', description: '给青少年的开放式视觉实验课，让孩子用身体、纸张和光来思考设计。', tags: ['课程设计', '工作坊', '视觉教育'], color: 'blue', number: '03' },
    { id: 'flora', title: 'Flora / 植物志', type: '品牌视觉', year: '2024', category: 'visual', description: '为一家独立植物商店建立一套会呼吸的视觉系统，让植物成为日常里的主角。', tags: ['Art Direction', 'Branding', 'Editorial'], color: 'yellow', number: '04' }
  ],
  experience: [
    { period: '2026.06 — 2026.09', role: '美术教师', place: '深圳市鹏城宝贝教育科技发展有限公司 · 深圳', detail: '独立开展少儿美术授课，完成备课、教学与作品点评；跟进学员学习进度并对接家长；配合教研、美术作品展及机构宣传工作。' },
    { period: '2025.06 — 2025.10', role: '美术助教', place: '深圳洛素教育信息咨询有限公司 · 深圳', detail: '对接学生与家长，跟进学习情况并解答艺术专业疑问；参与美术宣传素材、线下活动策划与执行，协助提升招生转化。' },
    { period: '2025.04 — 2025.06', role: '新媒体运营专员', place: '深圳中洲世纪供应链有限公司 · 深圳', detail: '运营公众号、视频号，策划制作供应链相关图文与短视频；跟踪数据、复盘内容策略，并协同业务部门制作营销物料。' },
    { period: '2023.04 — 2023.05', role: '美术教师', place: '有画说美术馆 · 深圳', detail: '负责美术课程授课与美育教学，跟进学员学习情况；参与招生咨询、对外宣传及艺术活动策划落地。' },
    { period: '2022.10 — 2022.11', role: '美术教师', place: '广州沙贝小学 · 广州', detail: '负责小学美术课程备课、授课与作品点评；跟进学生学情与家校沟通，配合校园美术活动、作品展及教研工作。' },
    { period: '2021.09 — 2025.06', role: '戏剧影视美术设计 / 本科', place: '华南农业大学珠江学院 · 广州', detail: 'GPA 3.6，专业前 10%，均分 86；核心课程包括舞台美术设计、影视美术设计、动态图形设计与插画设计。' },
    { period: '2026.09 — NOW', role: '艺术科技与商业 / 硕士在读', place: '香港岭南大学 · 香港', detail: '核心课程包括互动艺术与科技、艺科融合、设计思维与创新、艺术金融和科技，以及从人工智能到 NFTs。' },
    { period: '2021 — 2025', role: '新媒体运营部部长 / 策划部副部长', place: '校学生会', detail: '负责学校官方抖音账号的视频创作、内容审核与日常运营；统筹两场约 3000 人规模的校园音乐节、创意集市等活动。' }
  ],
  services: ['平面与界面视觉设计', '短视频与新媒体内容', '艺术课程与美育教学', '活动策划与现场执行'],
  certificates: ['小学美术教师资格证', '普通话二级甲等', '新媒体运营师（中级）']
};

const $ = (selector) => document.querySelector(selector);
const createElement = (tag, className, content = '') => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
};

function renderProfile() {
  $('#bio').textContent = portfolioData.profile.bio;
  $('#stats').innerHTML = portfolioData.profile.stats.map(stat => `<div class="stat"><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join('');
}

function renderFilters() {
  const filters = [{ key: 'all', label: '全部作品' }, { key: 'interaction', label: '互动 / 装置' }, { key: 'digital', label: '数字体验' }, { key: 'education', label: '教育项目' }, { key: 'visual', label: '视觉设计' }];
  $('#filters').innerHTML = filters.map((filter, index) => `<button class="filter ${index === 0 ? 'is-active' : ''}" data-filter="${filter.key}">${filter.label}</button>`).join('');
  $('#filters').addEventListener('click', (event) => {
    const button = event.target.closest('.filter');
    if (!button) return;
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('is-active'));
    button.classList.add('is-active');
    renderWorks(button.dataset.filter);
  });
}

function renderWorks(filter = 'all') {
  const works = filter === 'all' ? portfolioData.works : portfolioData.works.filter(work => work.category === filter);
  $('#work-count').textContent = `${String(works.length).padStart(2, '0')} PROJECTS`;
  $('#work-grid').innerHTML = works.map(work => `<article class="work-card" data-color="${work.color}"><button class="work-visual" data-project="${work.id}" aria-label="查看${work.title}详情"><span class="art-number">${work.number}</span><span class="art-shape shape-one"></span><span class="art-shape shape-two"></span><span class="art-label">${work.type}<br>${work.year}</span><span class="art-arrow">↗</span></button><div class="work-meta"><div><span class="work-type">${work.type}</span><h3>${work.title}</h3></div><span class="work-index">${work.number}</span></div></article>`).join('');
  $('#work-grid').querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openModal(button.dataset.project)));
}

function renderExperience() {
  $('#timeline').innerHTML = portfolioData.experience.map(item => `<article class="timeline-item"><span class="timeline-period">${item.period}</span><div><h3>${item.role}</h3><p class="timeline-place">${item.place}</p><p>${item.detail}</p></div></article>`).join('');
}

function renderServices() {
  $('#services').innerHTML = portfolioData.services.map((service, index) => `<div class="service-item"><span>0${index + 1}</span><h3>${service}</h3><b>↗</b></div>`).join('');
  $('#credentials').innerHTML = `<div><span class="section-note">SKILLS / 专业技能</span><div class="credential-tags">${portfolioData.profile.skills.map(skill => `<span>${skill}</span>`).join('')}</div></div><div><span class="section-note">CERTIFICATES / 资格证书</span><div class="certificate-list">${portfolioData.certificates.map(certificate => `<span>${certificate}</span>`).join('')}</div></div>`;
}

function openModal(id) {
  const work = portfolioData.works.find(item => item.id === id);
  if (!work) return;
  $('#modal-art').className = `modal-art art-${work.color}`;
  $('#modal-art').innerHTML = `<span class="art-number">${work.number}</span><span class="art-shape shape-one"></span><span class="art-shape shape-two"></span><span class="art-label">${work.type}<br>${work.year}</span>`;
  $('#modal-type').textContent = `${work.type} / ${work.year}`;
  $('#modal-title').textContent = work.title;
  $('#modal-desc').textContent = work.description;
  $('#modal-tags').innerHTML = work.tags.map(tag => `<span>${tag}</span>`).join('');
  $('#project-modal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  $('.modal-close').focus();
}

function closeModal() {
  if ($('#project-modal').contains(document.activeElement)) document.activeElement.blur();
  $('#project-modal').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderFilters();
  renderWorks();
  renderExperience();
  renderServices();
  $('.modal-close').addEventListener('click', closeModal);
  $('#project-modal').addEventListener('click', event => { if (event.target.id === 'project-modal') closeModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.12 });
  document.querySelectorAll('.section-wrap').forEach(section => observer.observe(section));
});
