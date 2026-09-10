// 交互脚本：标签悬浮、轮播、模态（无外部依赖）
document.addEventListener('DOMContentLoaded', () => {
  // 标签浮动细节（光影微动）
  document.querySelectorAll('.tag').forEach(btn => {
    btn.addEventListener('mousemove', e=>{
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width/2)) / r.width * 10;
      const dy = (e.clientY - (r.top + r.height/2)) / r.height * 6;
      btn.style.transform = `translate3d(${dx}px, ${dy-6}px, 0) rotate(${dx*0.2}deg)`;
    });
    btn.addEventListener('mouseleave', ()=> btn.style.transform = '');
    // 小的聚焦样式以便键盘可用
    btn.addEventListener('focus', ()=> btn.classList.add('focused'));
    btn.addEventListener('blur', ()=> btn.classList.remove('focused'));
  });

  // 轮播
  const slides = Array.from(document.querySelectorAll('.slide'));
  let idx = 0;
  const update = () => {
    slides.forEach((s,i)=>{
      s.setAttribute('aria-hidden', i===idx? 'false' : 'true');
    });
  };
  update();
  document.querySelectorAll('.carousel-nav').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      idx += btn.classList.contains('next') ? 1 : -1;
      if(idx < 0) idx = slides.length - 1;
      if(idx >= slides.length) idx = 0;
      update();
    });
  });

  // 预览模态
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalMedia = document.getElementById('modal-media');
  document.querySelectorAll('.preview').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const slide = slides[i];
      modalTitle.textContent = slide.dataset.title || slide.querySelector('h4')?.textContent || '预览';
      modalDesc.textContent = slide.dataset.desc || '';
      // 这里可替换为真实图片或 embed 链接
      modalMedia.innerHTML = '';
      const placeholder = document.createElement('div');
      placeholder.style.width = '100%';
      placeholder.style.height = '360px';
      placeholder.style.borderRadius = '10px';
      placeholder.style.background = getComputedStyle(slide).backgroundImage || '#FFF0F2';
      placeholder.style.display = 'flex';
      placeholder.style.alignItems = 'center';
      placeholder.style.justifyContent = 'center';
      placeholder.textContent = '作品大图 / 嵌入内容';
      placeholder.style.color = '#7a6666';
      modalMedia.appendChild(placeholder);

      modal.setAttribute('aria-hidden', 'false');
      // 键盘焦点处理
      document.querySelector('.modal-close').focus();
    });
  });
  document.querySelector('.modal-close').addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', e=>{
    if(e.target === modal) modal.setAttribute('aria-hidden','true');
  });
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape') modal.setAttribute('aria-hidden','true');
    if(e.key === 'ArrowRight') document.querySelector('.carousel-nav.next').click();
    if(e.key === 'ArrowLeft') document.querySelector('.carousel-nav.prev').click();
  });
});
