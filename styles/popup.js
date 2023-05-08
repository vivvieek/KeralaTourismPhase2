function popup(){
    alert('Not assigned')
}

function search(){
    alert('Can`t search')
}

function districts(){
    alert('Only TVM, KLM, PTA, ALP and KTM available !')
}

function login(){
    alert('Can`t login or signup')
}


// form validation loginpage
var email=document.getElementById("exampleInputEmail1");
var passwrd=document.getElementById("exampleInputPassword1");
var erremail=document.getElementById("erroremail");
var errpass=document.getElementById("errorpassword");

let regex_el=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
let regex_pl=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/

var flag=false;
var flag1=true;
var flag2=true;

function validate(){   
    if(email.value==''){
        erremail.innerText='Email cant be empty !'
        erremail.style.color='red';
        erremail.style.background='white';
    }
    else if(regex_el.test(email.value)){
        erremail.innerText="Valid format";
        erremail.style.color='green';
        erremail.style.background='white';
    }
    else{
        erremail.innerText="Invalid format";
        erremail.style.color='red';
        erremail.style.background='white';
        flag1=false;
    }

    if(passwrd.value=='' && passwrd.value.length<8){
        errpass.innerText="Password cant be empty !";
        errpass.style.background='white';
        errpass.style.color='red';
    }
    else if(regex_pl.test(passwrd.value) && passwrd.value.length>8){
        errpass.innerText="Valid format";
        errpass.style.background='white';
        errpass.style.color='green';
    }
    else{
        errpass.innerText="Invalid format or less that 8 characters";
        errpass.style.background='white';
        errpass.style.color='red';
        flag2=false;
    }
    if(flag1 && flag2)
        flag=true;
    return flag;
}