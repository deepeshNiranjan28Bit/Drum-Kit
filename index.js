//detecting button press

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//detecting key press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//making soound

function makeSound(key) {
  switch (key) {
    case "d":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "i":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    case "h":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "m":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;
    case "v":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;
    case "e":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;
    case "s":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
    default:

  }
}
//adding animation

function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey);

activeButton.classList.add("pressed");

setTimeout(function (){
  activeButton.classList.remove("pressed");
}, 125);

}
