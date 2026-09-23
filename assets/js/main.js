(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (menuButton && nav) {
    const closeMenu = () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); };
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => { if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
  }

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: .08, rootMargin: '0px 0px 40px 0px' });
    reveals.forEach(element => observer.observe(element));
  } else reveals.forEach(element => element.classList.add('visible'));

  const tabs = document.querySelectorAll('.gallery-tabs button');
  const galleryItems = document.querySelectorAll('.gallery-item');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(button => button.setAttribute('aria-pressed', String(button === tab)));
    galleryItems.forEach(item => { item.hidden = tab.dataset.filter !== 'all' && item.dataset.category !== tab.dataset.filter; });
  }));

  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const image = lightbox.querySelector('img');
    const caption = lightbox.querySelector('figcaption');
    galleryItems.forEach(item => item.addEventListener('click', () => {
      const source = item.querySelector('img');
      image.src = source.src;
      image.alt = source.alt;
      caption.textContent = source.alt;
      lightbox.showModal();
    }));
    lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('close', () => { image.removeAttribute('src'); });
  }

  const enquiry = document.querySelector('#enquiry-form');
  if (enquiry) enquiry.addEventListener('submit', event => {
    event.preventDefault();
    if (!enquiry.reportValidity()) return;
    const data = new FormData(enquiry);
    const message = [
      'Hello Arpitaz, I would like to enquire about an appointment.',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Service: ${data.get('service')}`,
      data.get('date') ? `Preferred date: ${data.get('date')}` : '',
      data.get('message') ? `Details: ${data.get('message')}` : ''
    ].filter(Boolean).join('\n');
    window.location.href = `https://wa.me/919748275583?text=${encodeURIComponent(message)}`;
  });
})();
