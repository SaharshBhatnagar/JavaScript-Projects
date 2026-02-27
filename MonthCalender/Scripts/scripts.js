const calendarBox = document.querySelector('.calendar');
const btnPrev = document.querySelector('#previous');
const btnNext = document.querySelector('#Next');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const days = document.querySelector('.days');
const svgColorContainer = document.querySelector('#svg-color-container');

const now = new Date();

const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1; // Months are 0-11
const currentDate = now.getDate();


let activeYear = currentYear;
let activeMonth = currentMonth;

let selectedDate = currentDate;

const Months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const monthClasses = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function renderCalender() {

    month.innerHTML = Months[activeMonth - 1];
    year.innerHTML = activeYear;

    svgColorContainer.className = `watercolor-bg`; 

    calendarBox.className = `calendar ${monthClasses[activeMonth - 1]}`;

    const firstDaySnapshot = new Date(activeYear, activeMonth - 1, 1);
    const firstDayOffset = firstDaySnapshot.getDay(); // weekdays 0-6


    const dateSetup = new Date(activeYear, activeMonth, 0)
    const TotalDays = dateSetup.getDate();

    // Setup grid days for each month
    days.innerHTML = '';

    for(let i = 0; i < firstDayOffset; i++) {
        days.insertAdjacentHTML('beforeend', '<div class="empty"> </div>');
    };

    // adding days
    for (let i = 0; i < TotalDays; i++) {
        let isToday = "";

        // Highlight Current date
        if (i + 1 === currentDate && currentMonth === activeMonth && currentYear === activeYear) {
            isToday = "today";
        };

        days.insertAdjacentHTML('beforeend', `<div id="${1 + i}" class="day ${isToday}">${i + 1}</div>`);
    };
};

renderCalender();

btnNext.addEventListener('click', () => {
    activeMonth += 1;
    if (activeMonth > 12) {
        activeMonth = 1;
        activeYear += 1
    }
    renderCalender();
});

btnPrev.addEventListener('click', () => {
    activeMonth -= 1;
    if (activeMonth < 1) {
        activeMonth = 12;
        activeYear -= 1
    }
    
    renderCalender();
});


const monthWrapper = document.querySelector('.dropdown-wrapper-month');
const monthDropdown = document.querySelector('.dropdown-menu-month');
const selectedMonths = document.querySelectorAll('.dropdown-menu-month .menu-item');

monthWrapper.addEventListener('click', (e) => {
    monthDropdown.classList.toggle('show');

});

selectedMonths.forEach(item => {
    item.addEventListener('click', () => {
        activeMonth = parseInt(item.getAttribute('data-month'));

        renderCalender();
    });
});

document.addEventListener('click', (e) => {
    if (!month.contains(e.target) && !monthDropdown.contains(e.target)) {
        monthDropdown.classList.remove('show');
    }
});


days.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('day')) {

        const previouslySelected = days.querySelector('.selected');
        
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }

        e.target.classList.add('selected');

        selectedDate = parseInt(e.target.id);

    }
});


const yearWrapper = document.querySelector('.dropdown-wrapper-year');
const yearDropdown = document.querySelector('.dropdown-menu-year');

const startYear = currentYear - 100;
const endYear = currentYear + 30;

let yearHTML = '';

for(let year = startYear; year <= endYear; year++) {
    const activeClass = (year === currentYear) ? 'active-year' : '';

    yearHTML += `<div class="menu-year ${activeClass}" value="${year}">${year} </div> `;

}

yearDropdown.innerHTML = yearHTML;

yearWrapper.addEventListener('click', (e) => {
    const isOpening = !yearDropdown.classList.contains('show');
    yearDropdown.classList.toggle('show');

    if (isOpening) {
        
        const activeElement = yearDropdown.querySelector('.active-year');
        if (activeElement) {
            yearDropdown.scrollTop = activeElement.offsetTop - (yearDropdown.clientHeight / 2);
        }
    }
});

yearDropdown.addEventListener('click', (e) => {

    if (e.target.classList.contains('menu-year')) {
        const selectedYear = e.target.getAttribute('value');
        activeYear = parseInt(selectedYear);

        renderCalender();

        yearDropdown.classList.remove('show');
        e.stopPropagation();
    }

});

document.addEventListener('click', (e) => {
    if (!yearWrapper.contains(e.target)) {
        yearDropdown.classList.remove('show');
    }
});
