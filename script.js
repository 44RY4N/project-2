bar = project.getElementById("bar");
bar.addEventListener("click", toggleMenuOn);
overlay.addEventListener("click", toggleMenuOff);

function toggleMenuOn(){
    bar.classList.add("show");
}

function toggleMenuOff(){
    bar.classList.remove("show");
}

