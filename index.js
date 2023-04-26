let doc_title = document.title;
window.addEventListener("blur",()=>{
    document.title = "Come back soon 😉";
});

window.addEventListener("focus",()=>{
    document.title = doc_title;
});
// let p = document.getElementById("p");
// let innert = parseInt(p.innerHTML);

let incre =()=>{
    
    // console.log(innert);
    innert ++;
    console.log(innert);
    p.innerHTML = innert;
} 