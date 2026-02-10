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

//submit
submitBtn.addEventListener('click', () => {

    // rating validating
    const ratingError = document.querySelector('.rating-error');
    const rating = document.querySelector('input[name="rating"]:checked');

    // comment loading
    const commentBox = document.querySelector('#comment');

    if (!rating) {
        ratingError.style.display = 'block';
        return;
    }
    else {
        commentBox.value = '';
        rating.checked = false;
        ratingError.style.display = 'none';
        
    }
    
});