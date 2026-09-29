const slides = document.querySelector(".slides");
let currentslide = 0;
const totalslide = 15;

function showslide() {
    slides.style.transform = `translateX(-${currentslide *100}%)`;
   }

showslide();

setInterval(function(){
    currentslide++;
    if(currentslide === totalslide)
{
    currentslide = 0;
}
showslide();
}, 3000);
    