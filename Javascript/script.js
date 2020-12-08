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

//Spaceship Link
document.getElementById("spaceship-collab").addEventListener("click", function () {
  window.open("https://updates.spaceship.run/post/benefits-of-continuous-delivery-for-qa-teams/", '_blank');
})

//Calendly QA
document.getElementById("calendly-qa-collab").addEventListener("click", function () {
  window.open("https://medium.com/calendly/radhika-solanki-talks-trading-careers-becoming-a-success-at-a-startup-and-traveling-the-world-with-415102855adf", '_blank');
})

//Calendly Women in Tech
document.getElementById("calendly-wit-collab").addEventListener("click", function () {
  window.open("https://medium.com/calendly/discussing-careers-in-tech-with-women-at-calendly-e3c3a14d361e", '_blank');
})
