function select(identifier){
    return document.querySelector(identifier);
}

function selectAll(identifier){
    return document.querySelectorAll(identifier);
}

function display(id, show=true){
    if(show)
        id.style.display = "block";
    else
        id.style.display = "none";
}

function showWarning(id, warningMessage){
    changeContent(id, warningMessage);
    display(id);
}

function changeContent(id, content){
    id.textContent = content;
}

function validate(){
    let name = select('input[name="name"]').value;
    let email = select('input[name="email"]').value;
    // let pw1 = select('#password').value;
    // let pw2 = select('#confirmpassword').value;
    // let phno = select('#phonenumber').value;
    let subject = select('input[name="subject"]').value;
    let message = select('textarea[name="message"]').value;

    let invalidName = select('#invalid-name');
    let invalidEmail = select('#invalid-email');
    // let invalidPassword = select('#invalid-pw');
    // let invalidPassword2 = select('#invalid-pw2');
    // let invalidNumber = select('#invalid-number');
    let invalidSubject = select('#invalid-subject');
    let invalidMessage = select('#invalid-message');

    let isValid = true;

    if(name == null || name == ""){
        showWarning(invalidName, "Please enter your name");
        isValid = false;
    } else if(name.length <= 2 || name.length >= 30){
        showWarning(invalidName, "Name length should be greater than 2 and less than 30");
        isValid = false;
    } else if(!isNaN(name)){
        showWarning(invalidName, "Name should contain only characters");
        isValid = false;
    } else{
        display(invalidName, false);
    }

    if(email == null || email == ""){
        showWarning(invalidEmail, "Please enter your email");
        isValid = false;
    } else if(!validateEmail(email)){
        showWarning(invalidEmail, "Email seems invalid");
        isValid = false;
    } else{
        display(invalidEmail, false);
    }
    if(subject == null || subject == ""){
        showWarning(invalidSubject, "Please enter a subject");
        isValid = false;
    } else{
        display(invalidSubject, false);
    }

    if(message == null || message == ""){
        showWarning(invalidMessage, "Please enter a message");
        isValid = false;
    } else{
        display(invalidMessage, false);
    }

    return isValid;
}
document.querySelector('form').addEventListener('submit', function(e){
    if(!validate()){
        e.preventDefault();
    }
});
