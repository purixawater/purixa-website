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
