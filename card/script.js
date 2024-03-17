
let check = document.getElementById("boxc");
let n = document.getElementById("yu");
let m= document.getElementById("WE");
let b=  document.getElementById("ER");

check.addEventListener("click", ()=>{
    n.innerHTML=n.innerHTML===`<h1>$24.99</h1>`?`<h1>$2.10</h1>`:`<h1>$24.99</h1>`;
    m.innerHTML=m.innerHTML===`<h1>$34.99</h1>`?`<h1>$3.47</h1>`:`<h1>$34.99</h1>`;
    b.innerHTML=b.innerHTML===`<h1>$54.99</h1>`?`<h1>$4.53</h1>`:`<h1>$54.99</h1>`;
}
);