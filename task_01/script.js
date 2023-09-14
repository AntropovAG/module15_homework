const button = document.querySelector('.button');
const icons = document.querySelectorAll('.icon');

function toggleIcons() {
    icons.forEach(icon => {
        icon.classList.toggle('invisible');
        icon.classList.toggle('visible');
    })
}

button.addEventListener('click', () => toggleIcons());