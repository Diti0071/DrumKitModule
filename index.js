var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function keyPressed(key) {

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default:
            console.log(letter);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

//Button pressed
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var letter = this.innerHTML;
        keyPressed(letter);
        buttonAnimation(letter);
    });
}

//Keyboard pressed
document.addEventListener("keydown", function (event) {
    keyPressed(event.key);
    buttonAnimation(event.key);
});

//Objects
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("First method");
    }
}
var houseKeeper = new HouseKeeper(3, "Amy", ["bathroom", "livingRoom"]);




// Higher order functions(using functions as arguments, inside another function)
/* function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    if(num2 > 0){
        return num1/num2;
    }
    return 0;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
} */