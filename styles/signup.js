// first name
var NameInput=document.getElementById('firstname');
NameInput.addEventListener('blur',validateName);
function validateName(){
    var Name=NameInput.value.trim();
    var regex=/^[a-zA-Z]{2,}$/; // regular expression to match letters only
    var erfname=document.getElementById('fisname');
    if(Name==''){
        erfname.innerText="Field can't be empty !";
        erfname.style.background='white';
        erfname.style.color='red';
    }
    else if(!regex.test(Name)){
        erfname.innerText="Please enter a valid name";
        erfname.style.background='white';
        erfname.style.color='red';
    }
    else{
        erfname.innerText="Valid";
        erfname.style.background='white';
        erfname.style.color='green';
    }
}
// second name
var NameInput2=document.getElementById('lastname');
NameInput2.addEventListener('blur',validateName2);
function validateName2(){
    var Name2=NameInput2.value.trim();
    var regex=/^[a-zA-Z]{2,}$/; // regular expression to match letters only
    var ersname=document.getElementById('lasname');
    if(Name2==''){
        ersname.innerText="Field can't be empty !";
        ersname.style.background='white';
        ersname.style.color='red';
    }
    else if(!regex.test(Name2)){
        ersname.innerText="Please enter a valid name";
        ersname.style.background='white';
        ersname.style.color='red';
    }
    else{
        ersname.innerText="Valid";
        ersname.style.background='white';
        ersname.style.color='green';
    }
}
// Email
var emailInput=document.getElementById('inputemail');
emailInput.addEventListener('blur',validateEmail);
function validateEmail(){
    var email=emailInput.value.trim();
    var regex_em=/^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to match email format
    var ermail=document.getElementById('emaile');
    if(email==''){
        ermail.innerText="Field can't be empty";
        ermail.style.background='white';
        ermail.style.color='red';
    }
    else if (!regex_em.test(email)){
        ermail.innerText="Please enter a valid Email ID";
        ermail.style.background='white';
        ermail.style.color='red';
    }
    else{
        ermail.innerText="Valid";
        ermail.style.background='white';
        ermail.style.color='Green';
    }
}
// phone number
var phoneInput=document.getElementById('inputnumber');
phoneInput.addEventListener('blur',validatePhoneNumber);
function validatePhoneNumber(){
    var phoneNumber=phoneInput.value.trim().replace(/[- .]/g, ''); // remove dashes, periods, and spaces from phone number
    var regex_num=/^[0-9]{10}$/; // regular expression to match phone number format
    var number=document.getElementById('nume');
    if(phoneNumber==''){
        number.innerText="Field can't be empty !";
        number.style.background='white';
        number.style.color='red';
    }
    else if(!regex_num.test(phoneNumber)){
        number.innerText="Please enter a valid phone number";
        number.style.background='white';
        number.style.color='red';
    }
    else{
        number.innerText="Valid";
        number.style.background='white';
        number.style.color='green';
    }
}
// new password
var passwordInput=document.getElementById('passnew');
passwordInput.addEventListener('input',validatePassword);
function validatePassword(){
    const password=passwordInput.value.trim();
    var regex_pas=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/; // regular expression to match password format
    var pass=document.getElementById('pasnew');
    var str=document.getElementById('strength');
    if(password==''){
        pass.innerText="Field can't be empty !";
        pass.style.background='white';
        pass.style.color='red';
    }
    else if(!regex_pas.test(password)){
        pass.innerText="Must contain Min. 8 chars with atleast one uppercase, lower case and a number";
        pass.style.background='white';
        pass.style.color='red';
    } else {
        pass.innerText="Valid";
        pass.style.background='white';
        pass.style.color='Green';
    }
    
    // check password strength and set the input background color accordingly
    if(password.length>=12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)){
        str.style.backgroundColor='green';
        str.innerText="Strong";
    }
    else if(password.length>=8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)){
        str.style.backgroundColor='orange';
        str.innerText="Medium";
    }
    else{
        str.style.backgroundColor = 'red';
        str.innerText="Weak";
    }
}

// repeat password
var passwordrepeat=document.getElementById('reentpass');
passwordrepeat.addEventListener('blur',repeatvalidate);
function repeatvalidate(){
    var passre=document.getElementById('repas');
    var passwordre=passwordrepeat.value.trim();

    var passwordInput=document.getElementById('passnew');
    const password=passwordInput.value.trim();

    if(passwordre==''){
        passre.innerText="Field can't be empty !"
        passre.style.background='white';
        passre.style.color='red';
    }
    else if(passwordre==password){
        passre.innerText="Password Matches"
        passre.style.background='white';
        passre.style.color='green';
    }
    else{
        passre.innerText="Password do not match"
        passre.style.background='white';
        passre.style.color='red';
    }
}

