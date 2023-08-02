const formElements = {
    phone : document.getElementById('phoneNumber'),
    email : document.getElementById('email'),
    errorDisplayers : document.getElementsByClassName('error')
}

function setError(errorDisplayer,message){
    errorDisplayer.textContent = message;
}


function validatePhone(){
 // check if phone number is only consist of numbers
    const isNumeric = formElements.phone.value === formElements.phone.value.replace(/\D/g, '');
    setError(formElements.errorDisplayers[3], isNumeric ? "" : "Please enter a valid number");
}

function validateEmail(){
// chec if email has @ and .com

    const isEmail = formElements.email.value.includes('@') && formElements.email.value.includes('.com');
    setError(formElements.errorDisplayers[2], isEmail ? "" : "Please enter a valid email'");
}





// Event Listener

formElements.phone.addEventListener('keyup', validatePhone);
formElements.email.addEventListener('keyup', validateEmail);