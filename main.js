const title = document.querySelector('.title'),
      main = document.querySelector('.main');

title.addEventListener('click', () => {
    title.style.display = 'none';
})

window.addEventListener('keydown', (event) => {
    if (event.code == 'Space') {
        main.innerHTML = '';
    }
})