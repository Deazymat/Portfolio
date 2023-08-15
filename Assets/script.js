// The script sets the background color based on mouse movement.
// It provides an animated clock where the clock hands move according to the current time.
// Checks if specific project elements are visible in the viewport when the user scrolls, and applies a fade-in effect if they are.


document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let red = Math.round((x / screenWidth) * 255);
    let blue = Math.round((y / screenHeight) * 255);
    document.body.style.background = `linear-gradient(45deg, rgb(${red}, 100, ${blue}), rgb(100, ${blue}, ${red}))`;
  });
});

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90 + (seconds / 60) * 6;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90 + (minutes / 60) * 30;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

let projects = document.querySelectorAll(
  ".column-pair1, .column-pair2, .column-pair3"
);

function checkVisibility() {
  projects.forEach((project) => {
    let projectTop = project.getBoundingClientRect().top;
    if (projectTop <= window.innerHeight) {
      project.classList.remove("hidden");
      project.classList.add("fade-in");
    } else 
    project.classList.add("hidden");
    project.classList.remove("fade-in");
  });
}
window.addEventListener("scroll", checkVisibility);
checkVisibility();

// function toggleDarkMode() {
//   const element = document.documentElement;
//   element.classList.toggle("dark-mode");
// }
