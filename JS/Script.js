let head = document.querySelector("head")
let body = document.querySelector("body")
let circles = document.querySelectorAll('.circle');
let nums = document.querySelectorAll(".about .skills .my-skills .text .num") ;
let about = document.querySelector(".about");
let started = false;
let header = document.querySelector(".header")
let header_image = document.querySelector(".header .container .image")
let header_h2 = document.querySelector(".header .container .info h2")
let span = document.querySelector(".up"); 
let li_up = document.querySelector("#li_up");
let typedTextSpan = document.querySelector(".text-effect");
let cursorSpan = document.querySelector(".cursor");
let textArray = ["WEB DESIGNER", "WEB DEVELOPER", "FREE LANCER"];
let typingDelay = 200;
let erasingDelay = 100;
let newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
let image = document.querySelector(".image")
let wrapper = document.querySelector(".wrapper")
let beforeheader = document.head.appendChild(document.createElement("style"))
let icon_li = document.querySelectorAll("header ul li")
let li_icon = document.querySelectorAll("header ul li a i")
let home_section = document.querySelector("#Home")
let about_section = document.querySelector("#About")
let porto_section = document.querySelector("#Porto")
let serv_section = document.querySelector("#Serv")
let contact_section = document.querySelector("#Contact")
let dark_mode = document.querySelector(".dark_mode")
let dark_mode_icon = document.querySelector(".dark_mode i")
let file_css = document.querySelector("head #light_css")
let left_about = document.querySelector(".about .left")
let right_about = document.querySelector(".about .right")
let skills_section = document.querySelector(".about .skills")
let box_per = document.querySelectorAll(".about .skills .box")
let box_photo = document.querySelector(".porto .photos")
let content_serv = document.querySelector(".services .content")
let button_img = document.querySelectorAll(".porto .photos .box a")
let info = document.querySelectorAll(".porto .container .info") 
let li_slider_1 = document.querySelectorAll(".image-info #move_1 ul li")
let li_slider_2 = document.querySelectorAll(".image-info #move_2 ul li")
let li_slider_3 = document.querySelectorAll(".image-info #move_3 ul li")
let image_slider = document.querySelector("#image-info-1 .slider .img ") 
let image_slider2 = document.querySelector("#image-info-2 .slider .img ") 
let image_slider3 = document.querySelector("#image-info-3 .slider .img ") 
let image_info = document.querySelectorAll(".image-info") 
let button_close = document.querySelectorAll(".image-info .button")
let filter = document.querySelectorAll(".porto .slide #filter li")
let box1 = document.querySelector(".porto .photos #box1")
let box2 = document.querySelector(".porto .photos #box2")
let box3 = document.querySelector(".porto .photos #box3")
let box4 = document.querySelector(".porto .photos #box4")


if(window.localStorage.getItem("dark_mode")) {
      if (window.localStorage.getItem("dark_mode") == "off") {
        window.localStorage.setItem("dark_mode" , "off")
      file_css.href = "./Css/style.css"
      window.localStorage.setItem("dark_mode" , "off")
      } else {
        window.localStorage.setItem("dark_mode" , "on")
        file_css.href = "./Css/style_dark.css"
        console.log("no")
        dark_mode_icon.classList.toggle("fa-sun")
      }
    } else {
      window.localStorage.setItem("dark_mode" , "off")
    }
  
  
    dark_mode.onclick = function () {
      if (window.localStorage.getItem("dark_mode") == "off") {
      window.localStorage.setItem("dark_mode" , "on")
      file_css.href = "./Css/style_dark.css"
      dark_mode_icon.classList.toggle("fa-sun")
      
     } else {
      window.localStorage.setItem("dark_mode" , "off")
      file_css.href = "./Css/style.css"
      dark_mode_icon.classList.toggle("fa-sun")
      }
    }

icon_li[0].classList.add("active")

icon_li.onclick = function () { 
  for (p = 0 ; p <= icon_li.length ; p++) {
    icon_li[p].classList.toggle("active")
  }
}


function startcount (el) {
    let goal = el.dataset.goal ;
    let count = setInterval(()=> {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    }, 4000 / goal)
}

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


// start filter

filter[0].onclick = function () {
  filter[1].classList.remove("active")
  filter[2].classList.remove("active")
  filter[0].classList.add("active")
  box1.style.display = "block"
  box2.style.display = "block"
  box3.style.display = "block"
  box4.style.display = "block"
}
filter[1].onclick = function () {
  filter[0].classList.remove("active")
  filter[2].classList.remove("active")
  filter[1].classList.add("active")
  box1.style.display = "block"
  box2.style.display = "block"
  box3.style.display = "block"
  box4.style.display = "none"
}
filter[2].onclick = function () {
  filter[0].classList.remove("active")
  filter[1].classList.remove("active")
  filter[2].classList.add("active")
  box1.style.display = "none"
  box2.style.display = "none"
  box3.style.display = "none"
  box4.style.display = "block"
}

// end filter 

// start first image 

button_close[0].onclick = function () {
  // info.classList.remove("show")
  image_info[0].classList.remove("open")
}

button_img[0].onclick = function () { 
  image_info[0].classList.add("open")
}

li_slider_1[0].classList.add("active")

li_slider_1[0].onclick = function () {
  li_slider_1[0].classList.remove("active")
  li_slider_1[1].classList.remove("active")
  li_slider_1[2].classList.remove("active")
  li_slider_1[0].classList.add("active")
  image_slider.style.left = "0"
}
li_slider_1[1].onclick = function () {
  li_slider_1[0].classList.remove("active")
  li_slider_1[1].classList.remove("active")
  li_slider_1[2].classList.remove("active")
  li_slider_1[1].classList.add("active")
  image_slider.style.left = "-100%"
}
li_slider_1[2].onclick = function () {
  li_slider_1[0].classList.remove("active")
  li_slider_1[1].classList.remove("active")
  li_slider_1[2].classList.remove("active")
  li_slider_1[2].classList.add("active")
  image_slider.style.left = "-200%"
}

// end first image 

//start second image

button_close[1].onclick = function () {
  // info.classList.remove("show")
  image_info[1].classList.remove("open")
}

button_img[1].onclick = function () { 
  image_info[1].classList.add("open")
}

li_slider_2[0].classList.add("active")

li_slider_2[0].onclick = function () {
  li_slider_2[0].classList.remove("active")
  li_slider_2[1].classList.remove("active")
  li_slider_2[2].classList.remove("active")
  li_slider_2[0].classList.add("active")
  image_slider2.style.left = "0"
}
li_slider_2[1].onclick = function () {
  li_slider_2[0].classList.remove("active")
  li_slider_2[1].classList.remove("active")
  li_slider_2[2].classList.remove("active")
  li_slider_2[1].classList.add("active")
  image_slider2.style.left = "-100%"
}
li_slider_2[2].onclick = function () {
  li_slider_2[0].classList.remove("active")
  li_slider_2[1].classList.remove("active")
  li_slider_2[2].classList.remove("active")
  li_slider_2[2].classList.add("active")
  image_slider2.style.left = "-200%"
}

//end second image

//start second image

button_close[2].onclick = function () {
  // info.classList.remove("show")
  image_info[2].classList.remove("open")
}

button_img[2].onclick = function () { 
  image_info[2].classList.add("open")
}

li_slider_3[0].classList.add("active")

li_slider_3[0].onclick = function () {
  li_slider_3[0].classList.remove("active")
  li_slider_3[1].classList.remove("active")
  li_slider_3[2].classList.remove("active")
  li_slider_3[0].classList.add("active")
  image_slider3.style.left = "0"
}
li_slider_3[1].onclick = function () {
  li_slider_3[0].classList.remove("active")
  li_slider_3[1].classList.remove("active")
  li_slider_3[2].classList.remove("active")
  li_slider_3[1].classList.add("active")
  image_slider3.style.left = "-100%"
}
li_slider_3[2].onclick = function () {
  li_slider_3[0].classList.remove("active")
  li_slider_3[1].classList.remove("active")
  li_slider_3[2].classList.remove("active")
  li_slider_3[2].classList.add("active")
  image_slider3.style.left = "-200%"
}
//end second image
