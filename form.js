const form = document.querySelector('#survey-form');
const emailInput = document.getElementById('email');
const feedBack = document.querySelector('.feedback');

form.addEventListener('submit', (event) => {
    const emailValue = emailInput.value;
    if (emailValue !== emailValue.toLowerCase()) {
        event.preventDefault(); // Prevent form submission
        emailInput.style.borderColor = '#d04228';
        emailInput.style.borderWidth = '0.2rem';
        feedBack.innerHTML = "Please enter an email in lower case";
        
    } 
    else {
        emailInput.classList.remove('invalid-input');
        feedBack.innerHTML = "";
        emailInput.style.borderColor = '';
        emailInput.style.borderWidth = '';
    }
});