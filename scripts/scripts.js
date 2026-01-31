const openForm = document.querySelector('.Feedback-icon');
const closeForm = document.querySelector('.exit');
const feedbackForm = document.querySelector('.Feedback-block');
const submitBtn = document.querySelector('.submit-feedback');
const ratingBtn = document.querySelector('.star');

// open
openForm.addEventListener('click', () => {
    feedbackForm.style.display = 'block';
});

// close
closeForm.addEventListener('click', () => {
    feedbackForm.style.display = 'none';
});
