const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-links a')];
function updateNavigation() {
  let active = sections[0]?.id;
  sections.forEach(section => { if (section.getBoundingClientRect().top <= 150) active = section.id; });
  links.forEach(link => {
    const selected = link.getAttribute('href') === '#' + active;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
addEventListener('scroll', updateNavigation, {passive: true});
updateNavigation();
