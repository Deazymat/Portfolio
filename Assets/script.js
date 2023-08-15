document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener('mousemove', function(event) {
        let x = event.clientX;
        let y = event.clientY;
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        let red = Math.round((x / screenWidth) * 255);
        let blue = Math.round((y / screenHeight) * 255);
        document.body.style.background = 'linear-gradient(45deg, rgb(${red}, 100, ${blue}), rgb(100, ${blue}, ${red}))';
    
    })
})


const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock()  {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds /60) * 360 * 90;
    secondHand.style.transform = 'rotate(${secondsDegrees}deg)';

    
}








function toggleDarkMode() {
    const element = document.documentElement;
    element.classList.toggle("dark-mode");
}