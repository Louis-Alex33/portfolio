document.addEventListener("DOMContentLoaded", () => {
document.body.style.opacity = 0;
setTimeout(() => {
document.body.style.transition = "opacity 1s";
document.body.style.opacity = 1;
}, 100);
});

document.querySelector('a[href="#home"]').addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,  });
});

document.querySelector('a[href="#projects"]').addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({
    behavior: "smooth"
  });
});
