 const form = document.getElementById('form');
 const nameField = document.getElementById('name');
 const emailField = document.getElementById("email")
 const numberField = document.getElementById('number');
 const addressField = document.getElementById("address");
 const streetField = document.getElementById("street");
 const streetNumField = document.getElementById("streetNum");
 const cityField = document.getElementById("city");
 
 
 
 form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs();
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

    const setSuccess = element  => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.remove('error');
        inputControl.classList.add('success')
    
}


 const validateInputs = () => {
    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();
    const numberValue = numberField.value.trim();
    const streetValue = streetField.value.trim();
    const streetNumValue = streetNumField.value.trim();
    const cityValue = cityField.value.trim();
   

    if(nameValue.length >= 2 && nameValue.length <= 50) {
        setSuccess(nameField);
         }else {
        setError(nameField, "Name must be between 2-50 characters.")
    }
    
 
    if(emailValue.length <= 50 && emailValue.includes("@")) {
    setSuccess(emailField);
  }else {
    setError(emailField, "Fill in your email address with a @.")
    }
   
  
   
    const phoneNumberLimits = /^[\d()-]{10,13}$/;
    if(phoneNumberLimits.test(numberValue)) {
       setSuccess(numberField)
         }else {
            setError(numberField, "Fill in your phone number.")
    }
    
  

if( streetValue.length >= 2 && streetValue.length <=50) {
    setSuccess(streetField)
   }else {
        setError(streetField, "Street has to be 2-50 characters long.")
    }
    const onlyNumbersRegex = /^\d+$/;
    // const onlyNumbers = "1, 2, 3, 4, 5, 6, 7 ,8, 9";
    if(onlyNumbersRegex.test(streetNumValue) && streetNumValue.length === 5) {
        setSuccess(streetNumField)
       }else {
            setError(streetNumField, "Street number has to be 5 numbers total.")
       }


 
    if(cityValue.length >= 2 && cityValue.length <= 50) {
    setSuccess(cityField)
   }else {
       setError(cityField, "City has to be 2-50 characters long.");
   }
}


   

