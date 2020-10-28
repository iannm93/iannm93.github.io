// targets our two elements in the html
let timeEl = document.getElementById("countdown")
let mainEl = document.getElementById("main")


// asks the user to type a prhase and the milliseconds they want their itnerval 
// to be,stores both as variables.
let userPhrase = prompt("type a phrase that you would like to have printed to the screen")
userPhrase = userPhrase.split(" ")
let milliseconds = prompt("how many milliseconds long do you want the interval to be")

// the time for the first interval
let timeLeft = 5

// function that starts the first interval
function prepareRead(){
    let timeIdentifier = setInterval(function(){

        timeLeft --
        timeEl.textContent = timeLeft

        if (timeLeft===0){
            clearInterval(timeIdentifier)
            speedRead();
        }
    },1000)

}

function speedRead(){

}

prepareRead();