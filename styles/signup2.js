// signuppage validation

var fname=document.getElementById("firstname");
var lname=document.getElementById("lastname");
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

let regex_fname=/^([A-Za-z]+)$/;
let regex_lname=/^([A-Za-z]+)$/;
let regex_emnew=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let regex_numnew=/^[0-9]{10}$/;
let regex_passn=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;


function validatedata(){
    // first name
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
        return false;
    };
    // second name
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
        return false;
    };
    // email
    if(emnew.value==''){
        eremnew.innerText="Can't be empty";
        eremnew.style.background='white';
        eremnew.style.color='red';
    }
    else if(regex_emnew.test(emnew.value)){
        eremnew.innerText="Valid Format";
        eremnew.style.background='white';
        eremnew.style.color='green';
    }
    else{
        eremnew.innerText="Invalid fomat";
        eremnew.style.background='white';
        eremnew.style.color='red';
        return false;
    };
    // number
    if(numnew.value==''){
        ernumnew.innerText="Can't be empty";
        ernumnew.style.background='white';
        ernumnew.style.color='red';
    }
    else if(regex_numnew.test(numnew)){
        ernumnew.innerText="Valid format";
        ernumnew.style.background='white';
        ernumnew.style.color='green';
    }
    else{
        ernumnew.innerText="Invalid number";
        ernumnew.style.background='white';
        ernumnew.style.color='red';
        return false;
    };
    //newpassword
    if(passn.value==''){
        erpassn.innerText="Can't be empty";
        erpassn.style.background='white';
        erpassn.style.color='red'; 
    }
    else if(regex_passn.test(passn)){
        if (passn.length >= 12 && /[A-Z]/.test(passn) && /[a-z]/.test(passn) && /\d/.test(passn)){
            erpassn.innerText="Strong";
            erpassn.style.background='green';
            erpassn.style.color='black'; 
        }
        else if (passn.length >= 8 && /[A-Z]/.test(passn) && /[a-z]/.test(passn) && /\d/.test(passn)){
            erpassn.innerText="Medium";
            erpassn.style.background='orange';
            erpassn.style.color='black'; 
        }
        else {
            erpassn.innerText="Weak";
            erpassn.style.background='red';
            erpassn.style.color='black';
        }
    }
    else{
        erpassn.innerText="Invalid Format";
        erpassn.style.background='white';
        erpassn.style.color='red'; 
        return false;
    }
    // repeat password
    if(passre.value==''){
        erpassre.innerText="Can't be empty";
        erpassre.style.background='white';
        erpassre.style.color='red'; 
    }
    else if(passn.value!=passre.value){
        erpassre.innerText="Password not same";
        erpassre.style.background='white';
        erpassre.style.color='red'; 
        return false;
    }
    else{
        erpassre.innerText="Password same";
        erpassre.style.background='white';
        erpassre.style.color='green'; 
    }
}