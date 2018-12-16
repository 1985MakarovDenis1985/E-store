"use strict"

// Valid Password

const submitHandler = (e)=>{
    e.preventDefault();

    const password = document.getElementById("exampleInputPassword1").value;

    let errorList=[];/////

    const submitEmail = document.getElementById("exampleInputEmail1").value;

    let errorEmail=[];



    if (! isLowerWord(password)){
        errorList.push(" Please enter a-z")
    }
    if (! isUpperWord(password)){
        errorList.push(" Please enter A-Z")
    }
    if (! isNumber(password)){
        errorList.push(" Please enter 0-9");
    }


    if (errorList.length > 0){
        const redText = document.getElementById("error_text_password");
        redText.innerHTML = errorList.join(" ");
        document.getElementById("exampleInputPassword1").classList.add("is-invalid")
    }else{
        document.getElementById("exampleInputPassword1").classList.remove("is-invalid")
    }



    /////////


    if (! isSubmitDog(submitEmail)){
        errorEmail.push(" You forgot '@' or '.', ");
    }
    if (! isWord(submitEmail)){
        errorEmail.push(" Please enter a-z A-Z, ");
    }
    if (! isNumber(submitEmail)){
        errorEmail.push(" Please enter 0-9, ");
    }

    if (errorEmail.length > 0 ){
        const redEmail = document.getElementById("error_text_email");
        document.getElementById("emailHelp").style.display = "none";
        redEmail.innerHTML = errorEmail.join(" ");
        document.getElementById("exampleInputEmail1").classList.add("is-invalid")
    }else{
        document.getElementById("exampleInputEmail1").classList.remove("is-invalid")
    }

    if(errorList.length == 0 && errorEmail.length == 0 ){
        document.getElementById("login_form").submit();
    }
};



document.addEventListener("submit", submitHandler, false);

//email
function isSubmitDog(pass){
    return /[\.]/.test(pass) && /[\@]/.test(pass);
}
function isWord(pass){
    return /[a-z]/i.test(pass);
}

//password
function isLowerWord(pass) {
    return /[a-z]/.test(pass)
}
function isUpperWord(pass) {
    return /[A-Z]/.test(pass)
}
function isNumber(pass) {
    return /[1-9]/.test(pass)
}





