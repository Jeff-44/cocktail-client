document.querySelector(".content button").addEventListener("click", function(){
    window.location.reload();
});

document.querySelector("#theme").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("theme1");
    document.querySelector("#title").classList.toggle("toggle");
    document.querySelector("#name").classList.toggle("name");
})