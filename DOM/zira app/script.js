let TC = document.querySelector(".ticket-container");
let allFilters = document.querySelectorAll(".filter");
let modalVisible = false;

for(let i = 0 ; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", filterHandler);
}

function filterHandler (e) {

}
let addBtn = document.querySelector(".add");

addBtn.addEventListener("click", showModal);

function showModal(e) {
    if(!modalVisible) {
        // let modal = document.createElement("div");
        // modal.classList.add("modal");
        // modal.innerHTML = `<div class="task-to-be-added" data-typed="false" contenteditable="true"></div>
        // <div class="modal-priority-list">
        //     <div class="modal-pink-filter modal-filter"></div>
        //     <div class="modal-blue-filter modal-filter"></div>
        //     <div class="modal-green-filter  modal-filter"></div>
        //     <div class="modal-yellow-filter  modal-filter"></div>
        // </div>`;
        // TC.appendChild(modal);

        let modal = `<div class="modal">
            <div class="task-to-be-added" data-typed="false" contenteditable="true">Enter your task here</div>
            <div class="modal-priority-list">
                <div class="modal-pink-filter modal-filter active"></div>
                <div class="modal-blue-filter modal-filter"></div>
                <div class="modal-green-filter  modal-filter"></div>
                <div class="modal-yellow-filter  modal-filter"></div>
            </div>
        </div>`;
        TC.innerHTML = TC.innerHTML + modal;
        let taskModal = document.querySelector(".task-to-be-added");
        taskModal.addEventListener("click", function(e) {
            if(e.currentTarget.getAttribute("data-typed") == "false") {
                e.currentTarget.innerText = "";
                e.currentTarget.setAttribute("data-typed", "true");
            }
        })
        modalVisible = true;
    }

}



