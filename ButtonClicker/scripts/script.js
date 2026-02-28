const jsClicker = document.querySelector('.js-container');
let count = Number(localStorage.getItem('key')) || 0;

jsClicker.innerHTML = `
    <button class="clicker"> ${count} </button>
`;

const btnClicker = document.querySelector('.clicker');

btnClicker.addEventListener('click', () => {
    count ++;
    btnClicker.innerText = count;
    localStorage.setItem('key', count)
});