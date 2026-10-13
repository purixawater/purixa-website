const menuToggle=document.querySelector(".menu-toggle");
const navMenu=document.querySelector(".nav-menu");
if(menuToggle&&navMenu){
  menuToggle.addEventListener("click",()=>{
    const open=navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",open);
    menuToggle.textContent=open?"✕":"☰";
    menuToggle.setAttribute("aria-label",open?"Close menu":"Open menu");
  });
  const closeMenu=()=>{
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
    menuToggle.setAttribute("aria-label","Open menu");
    menuToggle.textContent="☰";
  };
  navMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenu();});
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
    if(!name||!area||!type){
      alert("Please complete your name, area and service type.");
      return;
    }
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
    const whatsappUrl=`https://wa.me/917016715463?text=${encodeURIComponent(text)}`;
    const opened=window.open(whatsappUrl,"_blank","noopener,noreferrer");
    if(!opened) window.location.href=whatsappUrl;
  });
}


// V17: Purixa three-banner carousel. Auto-advances every 5 seconds and pauses on interaction.
(()=>{
  const carousel=document.querySelector('.purixa-carousel');
  if(!carousel) return;
  const slides=Array.from(carousel.querySelectorAll('.purixa-slide'));
  const dots=Array.from(carousel.querySelectorAll('.carousel-dot'));
  const prev=carousel.querySelector('.carousel-prev');
  const next=carousel.querySelector('.carousel-next');
  if(slides.length!==3) return;
  let current=0, timer=null;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function show(index){
    current=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>{const active=i===current;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active));});
    dots.forEach((dot,i)=>{const active=i===current;dot.classList.toggle('is-active',active);if(active)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current');});
  }
  function stop(){if(timer){clearInterval(timer);timer=null;}}
  function start(){stop();if(!reduced)timer=setInterval(()=>show(current+1),5000);}
  prev.addEventListener('click',()=>{show(current-1);start();});
  next.addEventListener('click',()=>{show(current+1);start();});
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>{show(i);start();}));
  carousel.addEventListener('mouseenter',stop);carousel.addEventListener('mouseleave',start);
  carousel.addEventListener('focusin',stop);carousel.addEventListener('focusout',start);
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
  show(0);start();
})();
