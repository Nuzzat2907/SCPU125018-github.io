// Dark mode
function toggleDark(){
    document.body.classList.toggle("dark");
}

// Fade
const faders=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
    faders.forEach(el=>{
        if(el.getBoundingClientRect().top<window.innerHeight-50){
            el.classList.add("show");
        }
    });
});

// Cursor
document.addEventListener("mousemove",e=>{
    document.querySelector(".cursor").style.transform=
    `translate(${e.clientX}px,${e.clientY}px)`;
});

// Penguin 3D tilt
document.addEventListener("mousemove",e=>{
    let p=document.querySelector(".penguin");
    let x=(window.innerWidth/2-e.pageX)/30;
    let y=(window.innerHeight/2-e.pageY)/30;
    p.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;
});

// Particles
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<80;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*3,
        dx:Math.random()-0.5,
        dy:Math.random()-0.5
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="gold";
        ctx.fill();
        p.x+=p.dx;
        p.y+=p.dy;
    });
    requestAnimationFrame(animate);
}
animate();
