const slides=["technician.webp","commercial-ro.webp","vogue-g-series.webp"];
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


const serviceForm=document.getElementById("serviceForm");
if(serviceForm){
  serviceForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.getElementById("customerName").value.trim();
    const mobile=document.getElementById("customerMobile").value.trim();
    const area=document.getElementById("customerArea").value.trim();
    const type=document.getElementById("serviceType").value;
    const message=document.getElementById("serviceMessage").value.trim();
    if(!/^[0-9]{10}$/.test(mobile)){
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    const text=[
      "Hello Purixa Water Solution, I want to book RO service.",
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Area: ${area}`,
      `Service: ${type}`,
      `Requirement: ${message || "Not specified"}`
    ].join("\n");
    window.open(`https://wa.me/917016715463?text=${encodeURIComponent(text)}`,"_blank","noopener");
  });
}
