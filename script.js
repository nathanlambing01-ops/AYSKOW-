// AYSKOW — navigation mobile + section active.
const nav = document.querySelector('.header nav');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelectorAll('.header nav a');
const sections = [...document.querySelectorAll('main section[id]')];
function closeMobileMenu(){ if(!nav||!menuBtn)return; nav.classList.remove('mobile-open'); menuBtn.setAttribute('aria-expanded','false'); }
if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('mobile-open');menuBtn.setAttribute('aria-expanded',String(open));});
  navLinks.forEach(link=>link.addEventListener('click',closeMobileMenu));
  window.addEventListener('resize',()=>{if(window.innerWidth>560)closeMobileMenu();});
}
window.addEventListener('scroll',()=>{
  let current='accueil';
  sections.forEach(section=>{if(window.scrollY>=section.offsetTop-130)current=section.id;});
  navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+current));
});
