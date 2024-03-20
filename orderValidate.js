 const form = document.getElementById('form');
 const nameField = document.getElementById('name');
 const emailField = document.getElementById("email")
 const numberField = document.getElementById('number');
 const addressField = document.getElementById("address")
 
 
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
    const addressValue = addressField.value.trim();
   

    if(nameValue.length >= 2 && nameValue.length <= 50) {
        setSuccess(nameField);
         }else {
        setError(nameField, "Name must be between 2-50 characters.")
    }
    
 
    if(emailValue.length <= 50 && emailValue.includes("@")) {
    setSuccess(emailField);
  }else {
    setError(emailField, "Fill in your email address.")
    }
   
  
   
    const phoneNumberLimits = /^[\d()-]{10,13}$/;
    if(phoneNumberLimits.test(numberValue)) {
       setSuccess(numberField)
         }else {
            setError(numberField, "Fill in your phone number.")
    }
    
  
    if(addressValue === '') {
    setError(addressField, "Fill in address.")
   }else {
        setSuccess(addressField);
    }



   

    
    

    
    
   
    

 }

   

