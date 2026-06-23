const scrollN = "scrollmem"
document.querySelector("#tab li:nth-child(1)").addEventListener("click", function() {
    sessionStorage.setItem(scrollN, "1")
    location.href = '/index.html';
});
document.querySelector("#tab li:nth-child(2)").addEventListener("click", function() {
    sessionStorage.setItem(scrollN, "480")
    location.href = '/index.html';
  
});
addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem(scrollN)) {
        scrollInPage();
    }
});
function scrollInPage(){
    window.scrollTo({
        top: parseInt(sessionStorage.getItem(scrollN)),
        behavior: "smooth"
    });
    sessionStorage.removeItem(scrollN)
};