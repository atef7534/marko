// Sticky Header ( start )
let header = document.querySelector("#header");
var sticky = header.offsetTop;

window.onscroll = function () 
{
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// Sticky Header ( end )

// Slideshow ( start )
let slideshow = document.querySelector(".slideshow");
let dots = document.querySelector(".dots");
let imgs = ["img1.jpg", "img2.png", "img3.png", "img4.jpg", "img5.png"];

for (let i = 0; i < imgs.length; i++) {
  let slide = `
    <div class='slide fade'>
      <img src="imgs/${imgs[i]}">
    </div>
  `;

  let dot;
  if (i === 0) {
    dot = `<span class="dot active" onclick=slide(${i + 1})></span>`;
  }
  else {
    dot = `<span class="dot" onclick=slide(${i + 1})></span>`;
  }
  
  slideshow.innerHTML += slide;
  dots.innerHTML += dot;
}
slideshow.innerHTML += `<a class="prev" onclick="plusSlides(-1)">❮</a>`;
slideshow.innerHTML += `<a class="next" onclick="plusSlides(1)">❯</a>`;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function slide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n)
{
  let i;
  let slides = document.getElementsByClassName("slide");
  let allDots = document.getElementsByClassName("dot");
  console.log(allDots);
  if (n < 1) {
    slideIndex = slides.length;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  allDots[slideIndex - 1].className += " active";
}
// Slideshow ( end )
