var back_key = 73;  // i
var left_key = 74;  // j
var right_key = 75;  // k

if (window == top) {
    window.addEventListener('keyup', doKeyPress, false);
}

var answers, left_answer, right_answer;
window.onload = function() {
    // get the links to the left and right answers -- 
    // most of the time the left answer is first, but not always;
    // you can identify it by seeing if it has left:100px.
    answers = document.getElementsByClassName("ce_answer_link");
    if (answers[0].firstChild.style.left == '100px') {
        left_answer = answers[0];
        right_answer = answers[1];
    } else {
        left_answer = answers[1];
        right_answer = answers[0];
    }
}

function doKeyPress(e){
	if (e.keyCode == left_key) { 
        console.log('left');
        left_answer.click();
    } else if (e.keyCode == right_key) {
        console.log('right');
        right_answer.click();
    } else if (e.keyCode == back_key) {
        console.log('back');
        document.links[0].click();
    }
}

