const form = document.getElementsByTagName('form')[0];

const email = document.getElementById("emailInput");
const emailError = document.querySelector('#emailInput + span.error');
const country = document.getElementById("country"); 
const zipCode = document.getElementById('zipInput');
const zipCodeError = document.querySelector('#zipInput + span.error');
const password = document.getElementById('passwordInput');
const passwordError = document.querySelector('#passwordInput + span.error');
const passwordConf = document.getElementById('passwordConf');
const passwordConfError = document.querySelector('#passwordConf + span.error');

email.addEventListener('input', function(event){
    if(email.validity.valid){
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showErrorEmail();
    }
})

country.addEventListener('click', function(event){
    if(country.selectedIndex!=0){
        country.classList.remove('countryNotSelected');
    }
})

zipCode.addEventListener('input', function(event){
    if(zipCode.validity.valid){
        zipCodeError.textContent = '';
        zipCodeError.className = 'error';
    } else {
        showErrorZipCode();
    }
})

password.addEventListener('input', function(event){
    if(password.validity.valid){
        passwordError.textContent = '';
        passwordError.className = 'error';
    } else {
        showErrorPassword();
    }
})

passwordConf.addEventListener('input', function(event){
    if(passwordConf.value==password.value){
        passwordConfError.textContent = '';
        passwordConfError.className = 'error';
    }else{
        showErrorPasswordConf();
    }
})

form.addEventListener('submit', function(event){
    let invalid = 0;
    if(!email.validity.valid){
        showErrorEmail();
        event.preventDefault();
        invalid++;
    }
    if(country.selectedIndex==0){
        country.classList.add('countryNotSelected');
        window.alert('Please select a country!');
        event.preventDefault();
        invalid++;
    }
    if(!zipCode.validity.valid){
        showErrorZipCode();
        event.preventDefault();
        invalid++;
    }
    if(!password.validity.valid){
        showErrorPassword();
        event.preventDefault();
        invalid++;
    }
    if((passwordConf.value!=password.value)||(passwordConf.validity.valueMissing)){
        showErrorPasswordConf();
        event.preventDefault();
        invalid++;
    }
    if(invalid==0){
        window.alert("Data submitted. Good Job!");
    }
})

function showErrorEmail() {
    if(email.validity.valueMissing){
        emailError.textContent = 'Please enter an e-mail address.';
    } else if(email.validity.typeMismatch){
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if(email.validity.tooShort){
        emailError.textContent = 'Email should be at least ' + email.minLength + ' characters; you entered ' + email.value.length;
    }
    emailError.className = 'error active';
}

function showErrorZipCode() {
    if(zipCode.validity.valueMissing){
        zipCodeError.textContent = 'Please enter a ZIP Code.';
    }
    zipCodeError.className = 'error active';
}

function showErrorPassword() {
    if(password.validity.patternMismatch){
        passwordError.textContent = "Password must be at least 8 character. Must contain at least one lower case letter, one upper case letter, and one number."
    } else if(password.validity.valueMissing){
        passwordError.textContent = "Please insert a password."
    }
    passwordError.className = 'error active';
}

function showErrorPasswordConf() {
    if(passwordConf.validity.valueMissing){
        passwordConfError.textContent = "Please confirm the password."
    } else {
        passwordConfError.textContent = "Password mismatch";
    }
    passwordConfError.className = 'error active';
}