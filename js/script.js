const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form=document.getElementById("contactForm");

const name=document.getElementById("name");

const email=document.getElementById("email");

const subject=document.getElementById("subject");

const message=document.getElementById("message");

const sendBtn=document.getElementById("sendBtn");

form.addEventListener("submit",function(e){

e.preventDefault();

});

if(

name.value==="" ||

email.value==="" ||

subject.value==="" ||

message.value===""

){

alert("Please fill all fields");

return;

}

if(

!email.value.includes("@")

){

alert("Invalid Email");

return;

}

sendBtn.innerHTML="Sending...";

setTimeout(()=>{

alert("Message Sent Successfully");

sendBtn.innerHTML="Send Message";

form.reset();

},2000);