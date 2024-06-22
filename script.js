const button = document.querySelector('button');
const text = document.querySelector('p');

button.addEventListener('click', () => {
    text.textContent = 'Ви натиснули кнопку!';
});