const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const submitButton = form.querySelector('.submit-button');

const toggleInvalid = (event) => {
    const input = event.target;
    input.parentElement.classList.toggle('invalid', !input.checkValidity());
};

const handleSubmitClick = () => {
    inputs.forEach((input) => {
        input.addEventListener('invalid', toggleInvalid);
        input.addEventListener('input', toggleInvalid);
    });
};

submitButton.addEventListener('click', handleSubmitClick);
