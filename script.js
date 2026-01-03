/* Smooth Scroll */
document.querySelectorAll("nav a").forEach(link=>{
    link.onclick=(e)=>{
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
        .scrollIntoView({behavior:"smooth"});
        closeMenu();
    };
});

/* Hamburger */
function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("open");
    document.querySelector(".hamburger").classList.toggle("active");
}
function closeMenu(){
    document.getElementById("navMenu").classList.remove("open");
    document.querySelector(".hamburger").classList.remove("active");
}

/* Section Animation */
window.addEventListener("scroll",()=>{
    document.querySelectorAll("section").forEach(sec=>{
        if(sec.getBoundingClientRect().top < innerHeight*0.8)
            sec.classList.add("visible");
    });
});

/* Particle Background */
const c=document.getElementById("particles"),ctx=c.getContext("2d");
let p=[];
function setup(){
    c.width=innerWidth;c.height=innerHeight;p=[];
    for(let i=0;i<110;i++)p.push({
        x:Math.random()*innerWidth,y:Math.random()*innerHeight,
        s:Math.random()*3,spd:Math.random()*1+0.3
    });
}
function animate(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    p.forEach(o=>{
        ctx.fillStyle="#d4af37";ctx.shadowBlur=10;ctx.shadowColor="#ffdfa3";
        ctx.beginPath();ctx.arc(o.x,o.y,o.s,0,2*Math.PI);ctx.fill();
        o.y-=o.spd;if(o.y<0)o.y=innerHeight;
    });
    requestAnimationFrame(animate);
}
setup();animate();

/* Theme Toggle */
document.getElementById("themeToggle").onclick=()=>{
    document.body.classList.toggle("light");
    document.getElementById("themeToggle").innerText =
        document.body.classList.contains("light") ? "☀️" : "🌙";
};
