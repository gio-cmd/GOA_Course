const child = document.getElementById("child-container");

let positionLeft = 0;
let positionTop = 0;

document.addEventListener("keydown", (e) => {
    const keyName = e.key;
  
    if (keyName === "ArrowUp") {
        positionTop -= 3;
        if (positionTop < 0) {
            positionTop = 0;
        }

    } else if (keyName === "ArrowRight") {
        positionLeft+= 3;
        if (positionLeft > 300) {
            positionLeft = 300;
        }
    } else if (keyName === "ArrowLeft") {
        positionLeft-= 3;
        if (positionLeft < 0) {
            positionLeft = 0;
        }
    } else if (keyName === "ArrowDown") {
        positionTop+= 3;
        if (positionTop > 300) {
            positionTop = 300;
        }
    }
    
    child.style.left = positionLeft + "px";
    child.style.top = positionTop + "px";
});
























