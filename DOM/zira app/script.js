let TC = document.querySelector(".ticket-container");
let allFilters = document.querySelectorAll(".filter");


for(let i = 0 ; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", filterHandler);
}

function filterHandler(e) {
    let filterColor = e.currentTarget.children[0].classList[0].split("-")[0];
    TC.style.backgroundColor = filterColor;
}

