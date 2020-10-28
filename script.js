// targets our two elements in the html
let timeEl = document.getElementById("countdown")
let mainEl = document.getElementById("main")


// set i equal to zero so we can use it as an iteration tool later
let i = 0;

// asks the user to type a prhase and the milliseconds they want their itnerval 
// to be,stores both as variables.
let userPhrase = prompt("type a phrase that you would like to have printed to the screen")
userPhrase = userPhrase.split(" ")
let milliseconds = prompt("how many milliseconds long do you want the interval to be")
console.log
// the time for the first interval
let timeLeft = 6

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
// function that iterates through our split userPhrase and prints the array to the screen
function speedRead(){
 let phraseIdentifier = setInterval(function(){

    if (userphrase[i] === undefined){
        clearInterval(phraseIdentifier)
    } else mainEl.textContent = userPhrase[i]
    i++

 },milliseconds)
}

prepareRead();