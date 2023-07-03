let button=document.querySelectorAll("button");
console.log(button.length)
for(var i = 0;i < button.length ; i++){
button[i].addEventListener("click",function() {
let buttonu=this.innerHTML;
switch(buttonu){
    case "w":
        var audio=new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case "a":
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();
        break; 
    case "s":
        var audio=new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case "d":
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    case "j":
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
        break;   
    case "k":
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
        break;   
    case "l":
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();
        break;      
}
})};
document.addEventListener("keypress",(event)=>{
    let keypress=event.key;
    switch(keypress){
        case "w":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break; 
        case "s":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;   
        case "k":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;   
        case "l":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;      
}});
 


