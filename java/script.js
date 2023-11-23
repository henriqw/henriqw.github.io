let elList = document.querySelectorAll(".bro")

function mudar(){
    document.querySelector("#title").innerHTML = "Hello JavaScript!";
    elList.forEach(el => el.style.fontSize = "25px");
    elList.forEach(el => el.style.backgroundColor = "yellow");
    elList.forEach(el => el.style.color = "red");
    document.getElementById("image").src = "../midia/tv.gif";
}