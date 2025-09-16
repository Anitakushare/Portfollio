  var typed = new Typed("#typed", {
    strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Developer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
    showCursor: true,
    cursorChar: "|"
  });

  function toggleMoreText() {
    const moreText = document.getElementById('moreText');
    const button = event.target;

    if (moreText.classList.contains('hidden')) {
      moreText.classList.remove('hidden');
      button.textContent = 'Read Less';
    } else {
      moreText.classList.add('hidden');
      button.textContent = 'Read More';
    }
  }
  const aboutInfo = document.querySelector(".about-info");
const aboutImage = document.querySelector(".about-image");
const aboutContent=document.querySelector(".about")
const skilsContent=document.querySelector(".skills-content")
const certificate=document.querySelector(".cetrificate-content")
const services=document.querySelector(".services-content");
const projects=document.querySelector(".project-content");
const contact=document.querySelector(".contact-content")
   document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // smooth scroll
    targetSection.scrollIntoView({ behavior: "smooth" });

    if (targetId === "about") {
      // reset classes so animation can restart
      aboutInfo?.classList.remove("animate-slide-in-right");
      aboutImage?.classList.remove("animate-slide-in-left");

      void aboutInfo.offsetWidth; // force reflow
      void aboutImage.offsetWidth;

      // add animation immediately
      aboutInfo?.classList.add("animate-slide-in-right");
      aboutImage?.classList.add("animate-slide-in-left");
    }
    else if(targetId === "skills"){
     skilsContent?.classList.remove("animate-fade-in-scale");
     void skilsContent.offsetWidth;
     skilsContent.classList.add("animate-fade-in-scale");
    }
    else if(targetId === "certificates"){
     certificate?.classList.remove("animate-fade-in-scale");
     void certificate.offsetWidth;
     certificate.classList.add("animate-fade-in-scale");
    }
    else if(targetId === "services"){
     services?.classList.remove("animate-fade-in-scale");
     void services.offsetWidth;
     services.classList.add("animate-fade-in-scale");
    }
     else if(targetId === "projects"){
     projects?.classList.remove("animate-fade-in-scale");
     void projects.offsetWidth;
     projects.classList.add("animate-fade-in-scale");
    }
     else if(targetId === "contact"){
     contact?.classList.remove("animate-fade-in-scale");
     void contact.offsetWidth;
     contact.classList.add("animate-fade-in-scale");
    }
  });
});


  

