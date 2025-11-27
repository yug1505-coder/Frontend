let text = document.getElementById("baat");
let count = document.getElementById("count");
let limit = 100;

text.addEventListener("input", function () {
    let use=baat.value.length;
    let left = limit - use;

    count.innerText = "Characters left: " + left;


    if (left > 60) {
        count.style.color = "green";
    } else if (left > 20) {
        count.style.color = "orange";
    } else {
        count.style.color = "red";
    }
});