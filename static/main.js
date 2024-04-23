const form = document.querySelector('.form');
const emailInput = document.querySelector('.email-input');

const handleSubmit = (event) => {
    event.preventDefault();

    console.log(emailInput.validity.valid);
}

form.addEventListener('submit', handleSubmit);


// const toggleErrorMessage = () => {
//     let isValid = emailInput.validity.valid;
//     form.classList.toggle('not-valid', !isValid);
// }

// form.addEventListener('input', toggleErrorMessage);



// form is submitted
// check if all inputs are valid
// if one input is not valid set the invalid styling
// return the invalid input key
// display message depending on invalid key.
