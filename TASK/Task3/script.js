let pics = ["splash.bmp", "bhkk.png", "thik.png", "OIP.jpg", "hatao-be.png"];
let i = 0;

let img = document.getElementById("img");
let nxt = document.getElementById("next");
let prv = document.getElementById("prev");
let box = document.getElementById("box");

function show() {
    img.src = pics[i];
}

nxt.onclick = function() {
    i++;
    if (i >= pics.length) i = 0;
    show();
}

prv.onclick = function() {
    i--;
    if (i < 0) i = pics.length - 1;
    show();
}

let auto = setInterval(function() {
    i++;
    if (i >= pics.length) i = 0;
    show();
}, 3000);

box.onmouseenter = function() {
    clearInterval(auto);
}

box.onmouseleave = function() {
    auto = setInterval(function() {
        i++;
        if (i >= pics.length) i = 0;
        show();
    }, 3000);
}