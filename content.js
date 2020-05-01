var back_key = 73;  // i
var left_key = 74;  // j
var right_key = 75;  // k

if (window == top) {
    window.addEventListener('keyup', doKeyPress, false);
}

var leftAnswer, rightAnswer;
window.onload = function() {
    // Check if we're on the main CE page; if so, there's a lot of extra text at the top
    // and we have to account for this when setting the y-coordinate.
    let onHomePage = (document.URL === "https://www.clickcritters.com/clickexchange.php");

    let width = document.body.clientWidth;
    let xLeft = (width / 2) - 50;
    let xRight = (width / 2) + 50;
    let y = onHomePage ? 350 : 150;  // this is a guess, but it works pretty okay

    leftAnswer = document.elementFromPoint(xLeft, y);
    rightAnswer = document.elementFromPoint(xRight, y);
}

function doKeyPress(e){
	if (e.keyCode == left_key) { 
        console.log('left');
        leftAnswer.click();
    } else if (e.keyCode == right_key) {
        console.log('right');
        rightAnswer.click();
    } else if (e.keyCode == back_key) {
        console.log('back');
        document.links[0].click();
    }
}

