document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const howKnownInput = document.getElementById('howKnown');
    const feedbackInput = document.getElementById('feedback');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const ratingError = document.getElementById('ratingError');
    const howKnownError = document.getElementById('howKnownError');
    const feedbackError = document.getElementById('feedbackError');

    nameError.textContent = '';
    emailError.textContent = '';
    ratingError.textContent = '';
    howKnownError.textContent = '';
    feedbackError.textContent = '';

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    let ratingSelected = false;
    ratingInputs.forEach(input => {
        if (input.checked) {
            ratingSelected = true;
        }
    });
    if (!ratingSelected) {
        ratingError.textContent = 'Rating is required';
        isValid = false;
    }

    if (howKnownInput.value === '') {
        howKnownError.textContent = 'Please select how you heard about us';
        isValid = false;
    }

    if (feedbackInput.value.trim() === '') {
        feedbackError.textContent = 'Feedback is required';
        isValid = false;
    }

    if (isValid) {
        feedbackForm.submit();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function showMessage() {
alert("Thankyou for your feedback.");
}
