gsap.registerPlugin(ScrollTrigger);

// Loader
window.onload = () => {
    setTimeout(()=>{
        document.getElementById("loader").style.display = "none";
    },500);
};

// Typing effect
let text = "From nothing → to something → to everything...";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text[i];
        i++;
        setTimeout(typing,40);
    }
}
typing();

// Section animation
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section,{
        opacity:0,
        y:100,
        duration:1,
        scrollTrigger:{
            trigger:section,
            start:"top 80%"
        }
    });
});

// Text reveal
gsap.utils.toArray(".text").forEach(el=>{
    gsap.to(el,{
        opacity:1,
        y:0,
        duration:1,
        scrollTrigger:{
            trigger:el,
            start:"top 85%"
        }
    });
});

// Bug button
function fixBug(){
    document.getElementById("bug").innerText="Still not working 😭";
}

// Coffee counter
let count=0;
function coffee(){
    count++;
    document.getElementById("coffee").innerText="Cups: "+count;
}

// Progress bar
window.addEventListener("scroll",()=>{
    let sc=window.scrollY;
    let h=document.body.scrollHeight-window.innerHeight;
    document.getElementById("progress").style.width=(sc/h)*100+"%";
});