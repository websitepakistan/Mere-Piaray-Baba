/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},3000);

});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/* ===========================
   FADE IN ON SCROLL
=========================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

/* ===========================
   HEARTS
=========================== */

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*30)+"px";
heart.style.opacity=Math.random();
heart.style.pointerEvents="none";
heart.style.zIndex="999";

heart.style.animation="rise 8s linear forwards";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,600);

/* ===========================
   GOLD PARTICLES
=========================== */

const particles=document.getElementById("particles");

function createParticle(){

const dot=document.createElement("span");

dot.style.position="fixed";

dot.style.left=Math.random()*100+"vw";

dot.style.top=Math.random()*100+"vh";

dot.style.width="4px";
dot.style.height="4px";

dot.style.background="gold";

dot.style.borderRadius="50%";

dot.style.boxShadow="0 0 12px gold";

dot.style.opacity=Math.random();

particles.appendChild(dot);

setTimeout(()=>{

dot.remove();

},4000);

}

setInterval(createParticle,120);

/* ===========================
   IMAGE GLOW
=========================== */

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

img.style.transition=".5s";

img.style.boxShadow="0 0 35px gold";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

img.style.boxShadow="none";

});

});

/* ===========================
   TITLE EFFECT
=========================== */

const title=document.querySelector(".hero h1");

setInterval(()=>{

title.style.textShadow="0 0 35px gold";

setTimeout(()=>{

title.style.textShadow="0 0 10px gold";

},500);

},2500);
