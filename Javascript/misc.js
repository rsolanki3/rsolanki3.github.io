//Navigation Menu

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

//Getting mobile responsive navigation menu set up

const hiddenMenu = document.querySelector(".mobile-menu");
const hamburgerIcon = document.getElementById("responsive-tab");
const closeMenu = document.getElementById("close-mobile-menu");

hamburgerIcon.addEventListener("click", function() {
  hiddenMenu.classList.add("open-mobile-menu");
 });

closeMenu.addEventListener("click", function() {
  hiddenMenu.classList.remove("open-mobile-menu");
  });
