const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const submitButton = form.querySelector('.submit-button');

const handleInput = () => {
    form.classList.toggle('invalid', !inputs[0].validity.valid);
}

const handleSubmitClick = () => {
    if (!inputs[0].validity.valid) {
        form.classList.add('invalid');
        inputs[0].addEventListener('input', handleInput);

    } else {
        form.classList.remove('invalid');
    }
}

submitButton.addEventListener('click', handleSubmitClick);
