const hamburger = document.querySelector(".hamburger");
let menuOpen = false;

const menuMobile = document.querySelector(".navMobile");

hamburger.addEventListener("click", ()=>{
    if(menuMobile.style.display === "block"){
        menuMobile.style.display = "none";
    }else{
        menuMobile.style.display = "block";
    }
});

hamburger.addEventListener("click", () =>{
    if(!menuOpen){
        hamburger.classList.add("open");
        menuOpen = true;
    }else{
        hamburger.classList.remove("open");
        menuOpen = false;
    }
});


window.addEventListener("scroll", function () {
    if (menuMobile.style.display === "block") {
      // Close the menu if open when scrolling down
      menuMobile.style.display  = 'none';

      hamburger.classList.remove("open");
        menuOpen = false;
      
    }
  });


function handleWindowResize() {
    const windowWidth = window.innerWidth; 
    
  
    if (windowWidth >= 768) {
        menuHeader.style.display = "flex";
        menuMobile.style.display = "none";
    } else {
        menuHeader.style.display = "none";
    }
  }
  
window.addEventListener("resize", handleWindowResize);
  
handleWindowResize();
  
