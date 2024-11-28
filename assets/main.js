const header = document.querySelector('header');
let lastScroll = 0;
const scrollThreshold = 200; // próg scrollowania w pikselach
let accumulatedScroll = 0; // gromadzi przesunięcie w dół

const toggleHeaderVisibility = () => {
  const currentScroll = window.scrollY;
  
  // Scrollowanie w dół
  if (currentScroll > lastScroll) {
    accumulatedScroll += currentScroll - lastScroll;

    if (accumulatedScroll > scrollThreshold) {
      // Gdy przekroczymy próg, chowamy header
      header.classList.add('hidden');
    }
  } 
  // Scrollowanie w górę
  else {
    header.classList.remove('hidden');
    accumulatedScroll = 0; // resetujemy licznik przy scrollowaniu w górę
  }

  lastScroll = currentScroll;
};

window.addEventListener('scroll', toggleHeaderVisibility);

const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    const key = e.target.dataset.key;

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      110;

    menu.classList.remove('active');
    burgerBtn.classList.remove('active');

    window.scrollTo({ top: section, behavior: 'smooth' });
  })
);


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("faq-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
