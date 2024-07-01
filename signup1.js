let register = document.getElementById('register');

//code to reset the form
register.addEventListener('reset', (event) => clearForm(event));

let check_availability = document.getElementById("check_availability");

function isUserNameAvailable(){
    //read the value of username
    let username = document.getElementById("i_email").value;
    if(localStorage.getItem(username) != null){
        alert("Email is already occupied; please choose another");
        return false;
    }
    return true;
}

function isAvailable(){
    if(isUserNameAvailable()){
        alert("Email available; go ahead");
    }
}

check_availability.addEventListener('click', isAvailable);

//code to submit the form
register.addEventListener('submit', function(event){
    let fd = new FormData(event.target);
    if(isRegisterFormValidated(fd) && isUserNameAvailable()){
        //you are here means form is validated
        //covert FormData object to normal JS object
        let object = {};
        fd.forEach((value, key) => {
            object[key] = value;
        })
        //remove confirm_password as it is not needed now
        delete object.confirm_password;
        //write object to local storage by using the username as key
        localStorage.setItem(object['email'], JSON.stringify(object));
        alert("Registration Successfull");

        //code to make the form empty
        for(let i = 0; register.elements.length; i++){
            let element = register.elements[i];
            if(element.type == 'text' || element.type == 'password'){
                element.value = "";
            }
        }
    }

    event.preventDefault();
});

function isRegisterFormValidated(fd){
    let message = "";
    if(fd.get('name').trim().length == 0){
        //you are here means no value for name
        message = "Please provide name";
    }
    if(fd.get('email').trim().length == 0){
        //you are here means no value for username
        message != ""?(message+="\nPlease provide email"):(message = "Please provide email");
    }
    if(fd.get('password').length == 0){
        //you are here means no value for password
        message != ""?(message+="\nPlease provide password"):(message = "Please provide password");
    }
    if(fd.get('password') != fd.get('confirm_password')){
        message != ""?(message+="\nPassword and confirm password mismatch"):(message = "Password and confirm password mismatch");
    }
    if(message != ""){
        alert(message);
        return false;
    }
    return true;
}