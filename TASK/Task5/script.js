let p = [
    {n:"Laptop", c:"electronics"},
    {n:"Shirt", c:"clothing"},
    {n:"Earpods", c:"electronics"},
    {n:"Jeans", c:"clothing"},
    {n:"Phone", c:"electronics"},
    {n:"Jacket", c:"clothing"},
    {n:"Keyboard", c:"electronics"},
    {n:"TShirt", c:"clothing"},
    {n:"Data Cable", c:"electronics"},
    {n:"Lower", c:"clothing"}
];

let l = document.getElementById("l1");
let b1 = document.getElementById("a1");
let b2 = document.getElementById("a2");
let b3 = document.getElementById("a3");
let s = document.getElementById("s1");

function show(arr){
    l.innerHTML = "";
    arr.forEach(x=>{
        let li = document.createElement("li");
        li.innerText = x.n;
        l.appendChild(li);
    });
}

show(p);

b1.onclick = function(){ show(p); }

b2.onclick = function(){
    let f = p.filter(x => x.c === "electronics");
    show(f);
}

b3.onclick = function(){
    let f = p.filter(x => x.c === "clothing");
    show(f);
}

s.addEventListener("input", function(){
    let q = s.value.toLowerCase();
    let f = p.filter(x => x.n.toLowerCase().includes(q));
    show(f);
});