
// =======================
// LOADER
// =======================


window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");


setTimeout(()=>{

loader.style.opacity="0";

loader.style.transition="0.8s";


setTimeout(()=>{

loader.style.display="none";

},800);


},1200);


});






// =======================
// CUSTOM CURSOR
// =======================


const cursor=document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";


});








// =======================
// SCROLL PROGRESS
// =======================


const progress=document.getElementById("progress");


window.addEventListener("scroll",()=>{


let scrollTop=document.documentElement.scrollTop;


let height=
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let percent=
(scrollTop/height)*100;


progress.style.width=percent+"%";


});







// =======================
// TYPING EFFECT
// =======================


const typing=document.getElementById("typing");


const words=[

"Frontend Developer",

"UI Designer",

"Creative Coder",

"Web Developer"

];


let word=0;

let char=0;

let deleting=false;



function typingEffect(){


let current=words[word];


if(!deleting){


typing.textContent=
current.substring(0,char++);



if(char>current.length){


deleting=true;


setTimeout(typingEffect,1200);


return;


}



}else{


typing.textContent=
current.substring(0,char--);



if(char<0){


deleting=false;


word++;


if(word>=words.length){

word=0;

}


}


}



setTimeout(
typingEffect,
deleting ? 50 : 100
);


}


typingEffect();








// =======================
// SCROLL REVEAL
// =======================


const reveals=
document.querySelectorAll(".reveal");



function reveal(){


reveals.forEach(item=>{


let position=
item.getBoundingClientRect().top;


let screen=
window.innerHeight-100;



if(position<screen){

item.classList.add("active");

}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();







// =======================
// MOBILE MENU
// =======================


const menu=
document.querySelector(".menu");


const nav=
document.querySelector("nav ul");



menu.addEventListener("click",()=>{


nav.classList.toggle("show");


});



// =======================
// DARK / LIGHT MODE
// =======================


const theme=document.getElementById("theme");


let light=false;


theme.addEventListener("click",()=>{


light=!light;


document.body.classList.toggle(
"light"
);


theme.textContent=
light ? "☀️" : "🌙";


});








// =======================
// COUNTER ANIMATION
// =======================


const counters=
document.querySelectorAll(".counter");



const counterObserver=
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const counter=entry.target;


const target=
Number(counter.dataset.target);



let count=0;



const update=()=>{


if(count<target){


count++;


counter.textContent=
count+"+";


setTimeout(update,40);


}else{


counter.textContent=
target+"+";


}


};



update();



counterObserver.unobserve(counter);


}


});


});



counters.forEach(counter=>{


counterObserver.observe(counter);


});










// =======================
// SKILL BAR ANIMATION
// =======================


const bars=
document.querySelectorAll(".bar span");



const barObserver=
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const bar=entry.target;


bar.style.width=
bar.style.width;



barObserver.unobserve(bar);


}


});


});



bars.forEach(bar=>{


let width=
bar.style.width;


bar.style.width="0";


setTimeout(()=>{


barObserver.observe(bar);


},200);



barObserver.observe(bar);


});










// =======================
// PARTICLE BACKGROUND
// =======================


const canvas=
document.getElementById("particles");


const ctx=
canvas.getContext("2d");



canvas.width=
window.innerWidth;


canvas.height=
window.innerHeight;



let particles=[];



window.addEventListener(
"resize",
()=>{


canvas.width=
window.innerWidth;


canvas.height=
window.innerHeight;


createParticles();


});







class Particle{


constructor(){


this.x=
Math.random()*canvas.width;


this.y=
Math.random()*canvas.height;


this.size=
Math.random()*3+1;


this.speedX=
(Math.random()-.5);


this.speedY=
(Math.random()-.5);


}



update(){


this.x+=this.speedX;

this.y+=this.speedY;



if(
this.x<0 ||
this.x>canvas.width
){

this.speedX*=-1;

}



if(
this.y<0 ||
this.y>canvas.height
){

this.speedY*=-1;

}



}



draw(){


ctx.beginPath();


ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);


ctx.fillStyle=
"#38bdf8";


ctx.fill();


}


}






function createParticles(){


particles=[];


for(let i=0;i<100;i++){


particles.push(
new Particle()
);


}


}



createParticles();






function animateParticles(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach(p=>{


p.update();


p.draw();


});



requestAnimationFrame(
animateParticles
);


}



animateParticles();

// =======================
// CONTACT FORM
// =======================


const form =
document.getElementById("contact-form");


if(form){


form.addEventListener("submit",(e)=>{


e.preventDefault();


const button =
form.querySelector("button");


button.textContent =
"Message Sent ✓";


button.style.background =
"linear-gradient(135deg,#22c55e,#16a34a)";


setTimeout(()=>{


button.textContent =
"Send Message";


button.style.background =
"linear-gradient(135deg,#38bdf8,#a855f7)";


form.reset();


},2500);



});


}








// =======================
// BACK TO TOP
// =======================


const topBtn =
document.getElementById("topBtn");



window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


topBtn.style.display="flex";


}else{


topBtn.style.display="none";


}


});



topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});








// =======================
// SMOOTH NAVIGATION
// =======================


document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",(e)=>{


e.preventDefault();



const section =
document.querySelector(
link.getAttribute("href")
);



section.scrollIntoView({

behavior:"smooth"

});



});


});








// =======================
// CARD 3D EFFECT
// =======================


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const centerX =
rect.width / 2;


const centerY =
rect.height / 2;



const rotateX =
(y-centerY)/20;


const rotateY =
(centerX-x)/20;



card.style.transform =
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});




card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"";


});


});








// =======================
// BUTTON MAGNET EFFECT
// =======================


const buttons =
document.querySelectorAll(
".btn,.outline"
);



buttons.forEach(button=>{


button.addEventListener(
"mousemove",
(e)=>{


const rect =
button.getBoundingClientRect();



const x =
e.clientX - rect.left -
rect.width/2;


const y =
e.clientY - rect.top -
rect.height/2;



button.style.transform =
`
translate(
${x*0.15}px,
${y*0.15}px
)
`;



});




button.addEventListener(
"mouseleave",
()=>{


button.style.transform =
"";


});


});







// =======================
// ACTIVE NAV LINK
// =======================


const sections =
document.querySelectorAll("section");


const links =
document.querySelectorAll("nav a");



window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(section=>{


const top =
section.offsetTop-200;



if(window.scrollY>=top){


current=
section.id;


}


});



links.forEach(link=>{


link.style.color="";



if(
link.getAttribute("href")
===
"#"+current
){


link.style.color=
"#38bdf8";


}


});


});