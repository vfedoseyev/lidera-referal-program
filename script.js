document.querySelectorAll('.faq details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.faq details').forEach(x=>{if(x!==d)x.open=false})}));document.querySelector('#form').addEventListener('submit',e=>{e.preventDefault();const b=e.currentTarget.querySelector('button');b.textContent='Рекомендация сохранена ✓';setTimeout(()=>b.textContent='Порекомендовать байера →',2500)});

const burger = document.querySelector('.burger');
const nav = document.querySelector('#nav');

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}

burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false) });
matchMedia('(min-width: 1001px)').addEventListener('change', e => { if (e.matches) setMenu(false) });
