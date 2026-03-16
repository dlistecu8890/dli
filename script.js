const audio = document.getElementById("prankSound");

function startSound(){
audio.volume = 1.0;
audio.play();
}

document.addEventListener("click", startSound);

setInterval(()=>{
audio.play();
},1000);
