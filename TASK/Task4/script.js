let f = document.getElementById("f1");
let n = document.getElementById("nm");
let m = document.getElementById("em");
let p = document.getElementById("pw");

let e1 = document.getElementById("e1");
let e2 = document.getElementById("e2");
let e3 = document.getElementById("e3");

function chkIn(inp, msg, er){
    if(msg){
        er.innerText = msg;
        inp.classList.remove("ok");
        inp.classList.add("bad");
    } else{
        er.innerText = "";
        inp.classList.remove("bad");
        inp.classList.add("ok");
    }
}

f.addEventListener("submit", function(ev){
    ev.preventDefault();

    let v1 = n.value.trim();
    let v2 = m.value.trim();
    let v3 = p.value.trim();

    let done = true;

    if(v1 === ""){
        chkIn(n, "Name required", e1);
        done = false;
    } else chkIn(n, "", e1);

    if(v2 === ""){
        chkIn(m, "Email required", e2);
        done = false;
    }
    else if(!v2.includes("@")){
        chkIn(m, "Invalid email", e2);
        done = false;
    }
    else chkIn(m, "", e2);

    if(v3.length < 8){
        chkIn(p, "Password must be 8 chars", e3);
        done = false;
    } else chkIn(p, "", e3);

    if(done){
        console.log("Form OK");
    }
});