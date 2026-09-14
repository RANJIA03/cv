const portfolioData = {
  stats: [{ value: '2026', label: '硕士在读' }, { value: 'TOP 10%', label: '本科排名' }, { value: '∞', label: '好奇心' }],
  works: [
    { id: 'echo', title: '回声花园', type: '互动装置', year: '2026', category: 'interaction', description: '一件关于记忆与回响的沉浸式交互装置。观众的声音会让花园生长，也会被它温柔地保存。', tags: ['TouchDesigner', '声音交互', '空间叙事'], color: 'coral', number: '01' },
    { id: 'time', title: '时间笔记', type: '网页体验', year: '2025', category: 'digital', description: '把一天里不被注意的片刻，编排成一份可以浏览的数字手账。', tags: ['Creative Coding', 'WebGL', 'UI Design'], color: 'acid', number: '02' },
    { id: 'lesson', title: '不规则课堂', type: '教育项目', year: '2025', category: 'education', description: '给青少年的开放式视觉实验课，让孩子用身体、纸张和光来思考设计。', tags: ['课程设计', '工作坊', '视觉教育'], color: 'blue', number: '03' },
    { id: 'palette', title: '海胆眼影盘', type: '品牌视觉', year: '2024', category: 'visual', description: '以海胆形态为灵感的眼影盘视觉设计，结合大胆色彩、产品造型与年轻化美妆品牌表达。', tags: ['Art Direction', 'Packaging', 'Beauty Branding'], color: 'yellow', number: '04' }
  ],
  timeline: [
    { period: '2026.09 — NOW', role: '艺术科技与商业 / 硕士在读', place: '香港岭南大学 · 香港', detail: '互动艺术与科技、艺科融合、设计思维与创新、艺术金融和科技。' },
    { period: '2026.06 — 2026.09', role: '美术教师', place: '深圳市鹏城宝贝教育科技发展有限公司', detail: '独立开展少儿美术授课，完成备课、教学与作品点评，跟进学员与家长反馈。' },
    { period: '2025.06 — 2025.10', role: '美术助教', place: '深圳洛素教育信息咨询有限公司', detail: '维护家校沟通，参与宣传素材、线下活动策划与执行，协助提升招生转化。' },
    { period: '2025.04 — 2025.06', role: '新媒体运营专员', place: '深圳中洲世纪供应链有限公司', detail: '运营公众号、视频号，策划制作图文与短视频，并跟踪数据优化内容策略。' },
    { period: '2021.09 — 2025.06', role: '戏剧影视美术设计 / 本科', place: '华南农业大学珠江学院', detail: 'GPA 3.6，专业前 10%，均分 86；学习舞台、影视、动态图形与插画设计。' },
    { period: '2021 — 2025', role: '新媒体运营部部长 / 策划部副部长', place: '校学生会', detail: '负责官方抖音账号运营，统筹两场约 3000 人规模的校园音乐节与创意集市。' }
  ],
  tools: ['PS', 'AI', 'FIGMA', 'AFTER EFFECTS', 'PREMIERE', '剪映', 'MIDJOURNEY', '艺术教育', '新媒体运营', '活动策划'],
  certificates: ['小学美术教师资格证', '普通话二级甲等', '新媒体运营师（中级）']
};

const $ = (selector) => document.querySelector(selector);

function renderStats() {
  $('#stats').innerHTML = portfolioData.stats.map(stat => `<div><strong>${stat.value}</strong><small>${stat.label}</small></div>`).join('');
}

function renderFilters() {
  const filters = [['all', 'ALL'], ['interaction', 'INTERACTION'], ['digital', 'DIGITAL'], ['education', 'EDUCATION'], ['visual', 'VISUAL']];
  $('#filters').innerHTML = filters.map(([key, label], index) => `<button class="filter ${index === 0 ? 'active' : ''}" data-filter="${key}">${label}</button>`).join('');
  $('#filters').addEventListener('click', event => {
    const button = event.target.closest('.filter');
    if (!button) return;
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderWorks(button.dataset.filter);
  });
}

function renderWorks(filter = 'all') {
  const works = filter === 'all' ? portfolioData.works : portfolioData.works.filter(work => work.category === filter);
  $('#work-count').textContent = `${String(works.length).padStart(2, '0')} PROJECTS`;
  $('#work-grid').innerHTML = works.map((work, index) => `<article class="work-card color-${work.color} ${index % 2 ? 'offset' : ''}"><button class="work-art" data-project="${work.id}" aria-label="查看${work.title}详情"><span class="art-index">${work.number}</span><span class="blob blob-a"></span><span class="blob blob-b"></span><span class="art-caption">${work.type}<br>${work.year}</span><span class="art-open">↗</span></button><div class="work-label"><div><small>${work.type}</small><h3>${work.title}</h3></div><span>${work.number}</span></div></article>`).join('');
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openModal(button.dataset.project)));
}

function renderTimeline() {
  $('#timeline').innerHTML = portfolioData.timeline.map((item, index) => `<article class="timeline-row"><span class="timeline-index">0${index + 1}</span><span class="timeline-period">${item.period}</span><div><h3>${item.role}</h3><b>${item.place}</b><p>${item.detail}</p></div></article>`).join('');
}

function renderToolkit() {
  $('#tool-cloud').innerHTML = portfolioData.tools.map((tool, index) => `<span class="tool tool-${(index % 4) + 1}">${tool}</span>`).join('');
  $('#credentials').innerHTML = `<div><small>QUALIFICATIONS</small>${portfolioData.certificates.map(item => `<p>${item}</p>`).join('')}</div><div><small>CONTACT</small><p>19120383198@163.com</p><p>+86 19120383198</p></div>`;
}

function openModal(id) {
  const work = portfolioData.works.find(item => item.id === id);
  if (!work) return;
  $('#modal-visual').className = `modal-visual color-${work.color}`;
  $('#modal-visual').innerHTML = `<span class="blob blob-a"></span><span class="blob blob-b"></span><span class="art-index">${work.number}</span>`;
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

function initMotion() {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); }), { threshold: .14 });
  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
  const orb = $('.cursor-orb');
  window.addEventListener('pointermove', event => { orb.style.transform = `translate(${event.clientX - 8}px, ${event.clientY - 8}px)`; });
}

function initFilmIntro() {
  const intro = $('#film-intro');
  const enterButton = $('#enter-archive');
  document.body.classList.add('intro-active');
  const enterArchive = () => {
    document.body.classList.add('archive-entered');
    document.body.classList.remove('intro-active');
    intro.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => intro.remove(), 1100);
  };
  enterButton.addEventListener('click', enterArchive);
  document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !document.body.classList.contains('archive-entered')) enterArchive();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderStats(); renderFilters(); renderWorks(); renderTimeline(); renderToolkit(); initMotion(); initFilmIntro();
  $('.menu-toggle').addEventListener('click', () => { document.body.classList.toggle('menu-open'); });
  document.querySelectorAll('.drawer a').forEach(link => link.addEventListener('click', () => document.body.classList.remove('menu-open')));
  $('.modal-close').addEventListener('click', closeModal);
  $('#project-modal').addEventListener('click', event => { if (event.target.id === 'project-modal') closeModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeModal(); document.body.classList.remove('menu-open'); } });
});
