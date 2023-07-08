let navIcon = document.getElementById('nav-icon3')
let closeNav = document.querySelector('.close-nav')
let nav = document.querySelector('.nav-items')
let navList = document.querySelectorAll('.nav-item')
const popup = document.querySelectorAll('.popup');
const skillItems = document.querySelectorAll('.single-portfolio');

navList.forEach((item)=>item.addEventListener('click',()=>{
    nav.classList.toggle('show-nav')
    navIcon.classList.remove('open')
}))

window.addEventListener('scroll', showPopup);

navIcon.addEventListener('click',(e)=>{
    navIcon.classList.toggle('open')
    nav.classList.toggle('show-nav')
})

closeNav.addEventListener('click',()=>{
    nav.classList.toggle('show-nav')
    navIcon.classList.remove('open')
})


function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  function showPopup() {
    popup.forEach(p => {
      const position = p.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
  
      if (position < screenPosition) {
        p.classList.add('show');
      }
    });
  }
  
  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight;
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    skillItems.forEach(item => {
      if (isElementVisible(item)) {
        item.classList.add('visible');
      }
    });
  }

  const fadeLanding = (e) => {
    console.log( window.pageYOffset)
    if(window.pageYOffset>=150){
        document.querySelector('.site-hero').style.opacity = 0;
    }else{
        document.querySelector('.site-hero').style.opacity = 1;
    }
  }

var prevScrollpos = window.pageYOffset;
window.onscroll = function(e) {
    reveal();showPopup();handleScroll();fadeLanding(e);
  var currentScrollPos = window.pageYOffset;
  let height = document.getElementById("navbar").getBoundingClientRect().height
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = `-${height}px`;
      }
  prevScrollpos = currentScrollPos;
}


