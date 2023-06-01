let bg = document.getElementById("glitching");
let count = 5;
for (let i = 0; i <count; i++){
    let glitchBox = document.createElement("div")
    glitchBox.className = "gtc_box";
    bg.appendChild(glitchBox);
}
setInterval(function(){
    let glitch = document.getElementsByClassName("gtc_box");
    for (let i = 0; i < glitch.length; i++){
        glitch[i].style.left = Math.floor(Math.random()*100) + "px";
        glitch[i].style.top = Math.floor(Math.random()*1.4) + "px";
        glitch[i].style.width = Math.floor(Math.random()*400) + "px";
        glitch[i].style.height = Math.floor(Math.random()*100) + "px";
        glitch[i].style.backgroundPosition = Math.floor(Math.random()*100) + "px";
    }
}, 200)
