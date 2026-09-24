const slides=["slide1.png","slide2.png","slide3.png"];
let current=0;
const heroSlide=document.getElementById("heroSlide");
if(heroSlide){
  setInterval(()=>{
    current=(current+1)%slides.length;
    heroSlide.style.opacity="0";
    setTimeout(()=>{heroSlide.src=slides[current];heroSlide.style.opacity="1"},180);
  },4500);
}
const menuToggle=document.querySelector(".menu-toggle");
const navMenu=document.querySelector(".nav-menu");
if(menuToggle&&navMenu){
  menuToggle.addEventListener("click",()=>{
    const open=navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",open);
    menuToggle.textContent=open?"✕":"☰";
  });
  navMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
    menuToggle.textContent="☰";
  }));
}
const backTop=document.querySelector(".back-top");
window.addEventListener("scroll",()=>{
  if(backTop) backTop.classList.toggle("show",window.scrollY>500);
});
if(backTop) backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
