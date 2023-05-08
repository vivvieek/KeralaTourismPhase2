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
let regex_pl=/^([A-Za-z0-9]+)$/

var flag=false;
var flag1=true;
var flag2=true;

function validate(){
    
    if(email.value==''){
        erremail.innerText='Email cant be empty!'
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
        errpass.innerText="Password cant be empty";
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

// signuppage validation

var fname=document.getElementById('firstname');
var lname=document.getElementById('lastname');
var emnew=document.getElementById('inputemail');
var numnew=document.getElementById('inputnumber');
var passn=document.getElementById('passnew');
var passre=document.getElementById('reentpass');

var erfname=document.getElementById('fisname');
var erlname=document.getElementById('lasname');
var eremnew=document.getElementById('emaile');
var ernumnew=document.getElementById('nume');
var erpassn=document.getElementById('pasnew');
var erpassre=document.getElementById('repas');

let regex_fname=/^([A-Za-z]+)$/
let regex_lname=/^([A-Za-z]+)$/
let regex_emnew=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
let regex_numnew=/^([0-9]+)$/
// let regex_passn=
// let regex_passre=


function validatedata(){
    if(fname.value==''){
        erfname.innerText="Can't be empty";
        erfname.style.background='white';
        erfname.style.color='red';
    }
    else if(regex_fname.test(fname.value)){
        erfname.innerText="Valid Format";
        erfname.style.background='white';
        erfname.style.color='green';
    }
    else{
        erfname.innerText="Invalid Format";
        erfname.style.background='white';
        erfname.style.color='red';
    }

    if(lname.value==''){
        erlname.innerText="Can't be empty";
        erlname.style.background='white';
        erlname.style.color='red';
    }
    else if(regex_lname.test(lname.value)){
        erlname.innerText="Valid Format";
        erlname.style.background='white';
        erlname.style.color='green';
    }
    else{
        erlname.innerText="Invalid Format";
        erlname.style.background='white';
        erlname.style.color='red';
    }

}
