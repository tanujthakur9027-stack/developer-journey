gsap.registerPlugin(ScrollTrigger);

// Loader
window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },1000);
});

// Typing
let text="From nothing → to something → to everything...";
let i=0;

function typing(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text[i];
    i++;
    setTimeout(typing,40);
  }
}
window.onload = () => {
  typing();
};
// Progress
window.addEventListener("scroll",()=>{
  let scrollTop=document.documentElement.scrollTop;
  let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  let progress=(scrollTop/height)*100;
  document.getElementById("progress").style.width=progress+"%";
});

// GSAP Animations
gsap.utils.toArray(".section").forEach(section=>{
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

gsap.utils.toArray(".text").forEach(el=>{
  gsap.to(el,{
    opacity:1,
    y:0,
    duration:1,
    scrollTrigger:{
      trigger:el,
      start:"top 90%"
    }
  });
});

// Buttons
function fixBug(){
  let msgs=[
    "Still not working 😭",
    "Error fixed... oh wait 😅",
    "StackOverflow saved me 🙏",
    "Finally works 🎉"
  ];
  document.getElementById("bug").innerText=msgs[Math.floor(Math.random()*msgs.length)];
}

function showMessage(){
  document.getElementById("level").innerText="You unlocked Developer Mode 🔥";
}

let count=0;
function coffee(){
  count++;
  document.getElementById("coffee").innerText="Cups: "+count;
}

function goGitHub(){
  window.open("https://github.com/tanujthakur9027-stack","_blank");
}