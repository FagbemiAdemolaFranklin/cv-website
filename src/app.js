const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
// document.querySelector("#skills").addEventListener("mouseenter", function(){
//   document.querySelector(".skills").classList.toggle("slideInLeft")
// })

// document.querySelector("#home").addEventListener("mouseenter", function(){
// document.querySelector(".home").classList.toggle("zoomIn");
// })

document.querySelectorAll('.side-bar-buttons a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior:"smooth"
    });

    // Set the clicked link as active
    document.querySelectorAll('.side-bar-buttons a').forEach(link => {
      
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});

document.querySelector('.contact-me').addEventListener('click', e => {

const target = document.querySelector(link.getAttribute('href'));
target.scrollIntoView({
  behavior:"smooth"
});

// Set the clicked link as active
document.querySelectorAll('.side-bar-buttons a').forEach(link => {
  link.classList.remove('active');
});
link.classList.add('active');
});

document.querySelector("#hamburger").addEventListener("click", function(){
 
  document.querySelector(".hidden-nav-bar").classList.toggle("pressed");
})
// toggleBtn.addEventListener('click', () => {
//   sidebar.classList.toggle('show');
// });




