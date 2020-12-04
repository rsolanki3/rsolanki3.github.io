const right = document.getElementById("right");

var currentSlide = 0;

var slideTrack = document.getElementById("slide-track");

right.addEventListener("click", function(){
  if (currentSlide < 5) {
  currentSlide ++}
  else {currentSlide =0;}
  var translateAmount = currentSlide * 16.66
  slideTrack.style.transform = `translateX(-${translateAmount}%)`
})

const left = document.getElementById("left")

left.addEventListener("click", function(){
  if (currentSlide >0) {
  currentSlide-- }
  else {currentSlide = 5;}
  var translateAmount = currentSlide * 16.66
  slideTrack.style.transform = `translateX(-${translateAmount}%)`
})

const redirectAbout = document.querySelector("#about-tab");

redirectAbout.addEventListener("click", function(){
  window.location.href = "https://rsolanki3.github.io/about.html";
})
