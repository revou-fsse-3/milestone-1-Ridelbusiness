const hamburger = document.querySelector(".hamburger");
let menuOpen = false;

const menuMobile = document.querySelector(".navMobile");


let movie = document.getElementById("movie");
let synopsis = document.getElementById("synopsis");

function function1(){
    
    movie.textContent = "My Neighbor Totoro";
    synopsis.textContent = "Follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.";
}

function function2(){
    
    movie.textContent = "Kiki's Delivery Service";
    synopsis.textContent = "13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training. After learning to control her broomstick, Kiki sets up a flying courier service and soon becomes a fixture in the community. But when the insecure young witch begins questioning herself and loses her magic abilities, she must overcome her self-doubt to get her powers back.";
}

function function3(){
    
    movie.textContent = "Princess Mononoke";
    synopsis.textContent = "In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.";
}

function function4(){
    
    movie.textContent = "Spirited Away";
    synopsis.textContent = "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro and her parents stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku , who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.";
}




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
  
