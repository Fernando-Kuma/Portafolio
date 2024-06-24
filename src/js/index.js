document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const toggleIcon = document.getElementById('toggle-icon');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleIcon.classList.toggle('rotate-icon');

    if (body.classList.contains('dark-mode')) {
      toggleIcon.classList.remove('fa-sun');
      toggleIcon.classList.add('fa-moon');
    } else {
      toggleIcon.classList.remove('fa-moon');
      toggleIcon.classList.add('fa-sun');
    }
  });
});