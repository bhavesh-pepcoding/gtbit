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

let selectedPriority;

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
        selectedPriority = "pink"; //by default
        let taskModal = document.querySelector(".task-to-be-added");
        taskModal.addEventListener("click", function(e) {
            if(e.currentTarget.getAttribute("data-typed") == "false") {
                e.currentTarget.innerText = "";
                e.currentTarget.setAttribute("data-typed", "true");
            }
        })
        modalVisible = true;
        taskModal.addEventListener("keypress", addTicket.bind(this,taskModal));
        let modalFilters = document.querySelectorAll(".modal-filter");
        for(let i = 0; i < modalFilters.length; i++) {
            modalFilters[i].addEventListener("click", selectPriority.bind(this,taskModal));
        }
    }

}


function selectPriority(taskModal,e) {
    let activeFIlter = document.querySelector(".modal-filter.active");
    activeFIlter.classList.remove("active");
    selectedPriority = e.currentTarget.classList[0].split("-")[1];
    e.currentTarget.classList.add("active");
    taskModal.click();
    taskModal.focus();
}


function addTicket(taskModal,e) {
    console.log(e);
    if(e.key == "Enter" && e.shiftKey == false && taskModal.innerText.trim() != "") {
        let task = taskModal.innerText;
        let ticket = document.createElement("div");
        ticket.classList.add("ticket");
        ticket.innerHTML = `<div class="ticket-color ticket-color-${selectedPriority}"></div>
                        <div class="ticket-id">#ashvhj</div>
                        <div class="task">${task}</div>`;

        document.querySelector(".modal").remove();
        modalVisible = false;
        TC.appendChild(ticket);
        ticket.addEventListener("click", function(e) {
            if(e.currentTarget.classList.contains("active")) {
                e.currentTarget.classList.remove("active")
            } else {
                e.currentTarget.classList.add("active");
            }
        });
    } else if(e.key == "Enter" && e.shiftKey == false) {
        e.preventDefault();
        alert("Error! you have not type anything in task.")
    }
}


