const right = document.getElementById("right");
var currentSlide = 0;
var slideTrack = document.getElementById("slide-track");

right.addEventListener("click", function(){
  if (currentSlide < 5) {
  currentSlide ++}
  else {currentSlide =0;}
  var translateAmount = currentSlide * 16.667
  slideTrack.style.transform = `translateX(-${translateAmount}%)`
})

const left = document.getElementById("left");

left.addEventListener("click", function(){
  if (currentSlide >0) {
  currentSlide-- }
  else {currentSlide = 5;}
  var translateAmount = currentSlide * 16.667
  slideTrack.style.transform = `translateX(-${translateAmount}%)`
})

const redirectHome = document.querySelector("#home-tab");
redirectHome.addEventListener("click", function(){
  window.location.href = "https://rsolanki3.github.io";
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
