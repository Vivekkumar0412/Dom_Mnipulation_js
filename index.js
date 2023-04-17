let doc_title = document.title;
window.addEventListener("blur",()=>{
    document.title = "Come back soon 😉";
});

window.addEventListener("focus",()=>{
    document.title = doc_title;
})