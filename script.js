
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

if (menuButton && navigation) {

  menuButton.addEventListener('click', () => {

    const isOpen = navigation.classList.toggle('open');

    menuButton.setAttribute('aria-expanded', String(isOpen));

    menuButton.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );

  });

  navigation.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      navigation.classList.remove('open');

      menuButton.setAttribute('aria-expanded', 'false');

      menuButton.setAttribute('aria-label', 'Open navigation');

    });

  });

  document.addEventListener('click', event => {

    if (
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {

      navigation.classList.remove('open');

      menuButton.setAttribute('aria-expanded', 'false');

      menuButton.setAttribute('aria-label', 'Open navigation');

    }

  });

}

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(
  '.intro, .statement, .projects, .capabilities, .contact'
);

revealElements.forEach(element => {
  element.classList.add('reveal');
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});
