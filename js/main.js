// dropdown links
function dropMenu ()
{
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (e)
{
  if (!e.target.matches('.dropbtn') && !e.target.parentElement.matches(".dropbtn")) 
  {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) 
    {
      myDropdown.classList.remove('show');
    }
  }
}


// slideshow
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(index)
{
    let i;
    
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
            
    slideIndex++;
    slideIndex = modify(slideIndex);
    
    setTimeout(showSlides, 2500);
}
function modify()
{
    if (slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    if (slideIndex < 1)
    {
        slideIndex = slides.length;
    }
    return slideIndex;
}
