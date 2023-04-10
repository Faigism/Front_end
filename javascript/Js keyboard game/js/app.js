let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let allImg = document.querySelector('all-img');

let x = 0;
let y = 0;



function moveImage1(y, x, transform) {
    image1.style.left = y + "px";
    image1.style.top = x + "px";
    image1.style.transform = transform;
}

function moveImage2(y, x, transform) {
    image2.style.left = y + "px";
    image2.style.top = x + "px";
    image2.style.transform = transform;
}

function upArrow() {
    if (x > -200) {
        x += 10;
        moveImage1(y, x, "rotate(-90deg)");
    }
    if (x > -350) {
        x -= 50;
        moveImage2(y, x, "rotate(-90deg)");
    }
}

function downArrow() {
    if (x < 760) {
        x -= 10;
        moveImage1(y, x, "rotate(90deg)");
    }
    if (x < 910) {
        x += 150;
        moveImage2(y, x, "rotate(90deg)");
    }
}

function leftArrow() {
    if (y >= -200) {
        y -= 1;
        moveImage1(y, x, "rotateY(180deg)");
    }
    if (y >= -350) {
        y -= 150;
        moveImage2(y, x, "rotateY(180deg)");
    }
}

function rightArrow() {
    if (y <= 1350) {
        y += 1;
        moveImage1(y, x, "rotateY(0deg)");
    }
    if (y <= 1500) {
        y += 100;
        moveImage2(y, x, "rotateY(0deg)");
    }
}
document.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
        rightArrow();
    }
    else if (e.code === "ArrowLeft") {
        leftArrow();
    }
    else if (e.code === "ArrowUp") {
        upArrow();
    }
    else if (e.code === "ArrowDown") {
        downArrow();
    }


});
function resultGame() {
    if (x > 500 && y > 700) {
        document.querySelector("#game-over").style.display = "block";
        image2.style.display = "none"
    }
}

setInterval(resultGame, 100);



