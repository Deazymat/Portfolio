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

function toggleDarkMode() {
    const element = document.documentElement;
    element.classList.toggle("dark-mode");
}