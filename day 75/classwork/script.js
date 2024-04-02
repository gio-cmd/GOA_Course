const child = document.getElementById("child-container");

let positionLeft = 0;
let positionTop = 0;
let leftOrRight = 1;
let topOrBottom = 1;

const move = setInterval(function(){
    if(leftOrRight == 1) {
        positionLeft++;
        if (positionLeft >= 300) {
            leftOrRight = 0;
            topOrBottom = 1;
        }
    } else if (topOrBottom == 1) {
        positionTop++;
        if (positionTop >= 300) {
            topOrBottom = 0;
            leftOrRight = -1;
        }
    } else if (leftOrRight == -1) {
        positionLeft--;
        if (positionLeft <= 0) {
            leftOrRight = 0;
            topOrBottom = -1;
        }
    } else if (topOrBottom == -1) {
        positionTop--;
        if (positionTop <= 0) {
            clearInterval(move);
        }
    }

    child.style.left = positionLeft + "px";
    child.style.top = positionTop + "px";
}, 10);






