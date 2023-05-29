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


function storeFormData (){
var formData = {
    name: document.getElementById('fname').value,
    email: document.getElementById('email').value,
    message: document.querySelector('textarea').value
};
localStorage.setItem('formData', JSON.stringify(formData));
}

var formInputs = document.querySelectorAll('#survey-form input, #survey-form textarea');
formInputs.forEach(function (input) {
    input.addEventListener('input', storeFormData);
});

window.addEventListener('DOMContentLoaded', () => {
    var formData = localStorage.getItem('formData');
    if (formData) {
        formData = JSON.parse(formData);
        document.getElementById('fname').value = formData.name || '';
        document.getElementById('email').value = formData.email || '';
        document.querySelector('textarea').value = formData.message || '';
    }
});