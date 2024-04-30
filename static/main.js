const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const submitButton = form.querySelector('.submit-button');

const toggleInvalid = (event) => {
    event.preventDefault();

    const input = event.target;
    const isValid = input.validity.valid;

    input.parentElement.classList.toggle('invalid', !isValid);
};

const handleSubmitClick = () => {
    inputs.forEach((input) => {
        input.addEventListener('invalid', toggleInvalid);
        input.addEventListener('input', toggleInvalid);
    });
};

submitButton.addEventListener('click', handleSubmitClick);
