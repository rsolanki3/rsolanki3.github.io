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

const redirectBlogs = document.querySelector("#blogs-tab");
redirectBlogs.addEventListener("click", function(){
  window.location.href = "https://rsolanki3.github.io/blogs.html";
})

const redirectMisc = document.querySelector("#misc-tab");
redirectMisc.addEventListener("click", function(){
  window.location.href = "https://rsolanki3.github.io/misc.html";
})

//need to figure out  why this doesn't work on the other pages and only from the home page
