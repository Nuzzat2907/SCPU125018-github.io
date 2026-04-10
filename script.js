// Dark Mode
function toggleDark() {
    document.body.classList.toggle("dark");
}

// Fade Animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});

// Cursor
document.addEventListener("mousemove", e => {
    document.querySelector(".cursor").style.left = e.clientX + "px";
    document.querySelector(".cursor").style.top = e.clientY + "px";
});

// Penguin interaction
const penguin = document.querySelector(".penguin");

document.addEventListener("mousemove", e => {
    let x = (window.innerWidth / 2 - e.pageX) / 30;
    let y = (window.innerHeight / 2 - e.pageY) / 30;
    penguin.style.transform = `rotate(${x}deg)`;
});
