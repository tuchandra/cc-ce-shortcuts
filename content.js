var answers = document.getElementsByClassName("ce_answer_link");

var back_key = 73;  // i
var left_key = 74;  // j
var right_key = 75;  // k

if (window == top) {
    window.addEventListener('keyup', doKeyPress, false);
}

function doKeyPress(e){
	if (e.keyCode == left_key) { 
        console.log('left');
        answers[0].click();
    } else if (e.keyCode == right_key) {
        console.log('right');
        answers[1].click();
    } else if (e.keyCode == back_key) {
        console.log('back');
        document.links[0].click();
    }
}

