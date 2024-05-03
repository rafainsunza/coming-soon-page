const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const submitButton = form.querySelector('.submit-button');
const invalidMessage = form.querySelector('.invalid-message');

const toggleInvalid = (event) => {
    event.preventDefault();

    const input = event.target;
    const validityState = input.validity;

    if (validityState.valid.valueMissing) {
        invalidMessage.innerHTML = 'Email address is required'
    } else if (validityState.valid.typeMismatch) {
        invalidMessage.innerHTML = 'Please provide a valid email'
    }

    input.parentElement.classList.toggle('invalid', !validityState.valid);
};

const handleSubmitClick = () => {
    inputs.forEach((input) => {
        input.addEventListener('invalid', toggleInvalid);
        input.addEventListener('input', toggleInvalid);
    });
};

submitButton.addEventListener('click', handleSubmitClick);
