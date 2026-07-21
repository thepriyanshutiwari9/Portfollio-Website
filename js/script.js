const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

if(form){
form.addEventListener("submit", function(e) {

    e.preventDefault();

    if (
        name.value === "" ||
        email.value === "" ||
        subject.value === "" ||
        message.value === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Invalid Email");
        return;
    }

    sendBtn.innerHTML = "Sending...";

    setTimeout(() => {
        alert("Message Sent Successfully");
        sendBtn.innerHTML = "Send Message";
        form.reset();
    }, 2000);

});
}

const topBtn=document.getElementById("topBtn");
if(topBtn){

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
}


const sections=document.querySelectorAll("section");

const navItem=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.offsetHeight;

       if(

window.scrollY>=sectionTop &&

window.scrollY<sectionTop+sectionHeight

){

current=section.getAttribute("id");

}

    });

    navItem.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

const themeBtn = document.getElementById("themeToggle");
const icon = themeBtn.querySelector("i");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light-theme");
    } else {
        localStorage.removeItem("theme");
    }
});
const loader=document.getElementById("loader");
if(loader){
window.onload=()=>{

loader.style.display="none";

}
}

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

header.classList.toggle("sticky",window.scrollY>50);

});


new Typed(".typing",{

strings:[

"Priyanshu Tiwari",
    
"Frontend Developer",

"Java Developer",

"Web Designer"

],

typeSpeed:80,

backSpeed:50,

loop:true

});