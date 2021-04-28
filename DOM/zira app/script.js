let TC = document.querySelector(".ticket-container");
let allFilters = document.querySelectorAll(".filter");
let modalVisible = false;

function loadTTickets(color) {
    let allTasks = localStorage.getItem("allTasks");
    if(allTasks != null) {
        allTasks = JSON.parse(allTasks);
        if(color) {
            allTasks = allTasks.filter(function(data) {
                return data.priority == color;
            })
        }
        for(let i = 0; i < allTasks.length; i++) {
            let ticket = document.createElement("div");
            ticket.classList.add("ticket");
            ticket.innerHTML = `<div class="ticket-color ticket-color-${allTasks[i].priority}"></div>
                            <div class="ticket-id">#${allTasks[i].ticketId}</div>
                            <div class="task">${allTasks[i].task}</div>`;
            TC.appendChild(ticket);
            ticket.addEventListener("click", function(e) {
                if(e.currentTarget.classList.contains("active")) {
                    e.currentTarget.classList.remove("active");
                } else {
                    e.currentTarget.classList.add("active");
                }
            });
        }
    }
}

loadTTickets();

for(let i = 0 ; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", filterHandler);
}

function filterHandler (e) {
    TC.innerHTML = "";
    if(e.currentTarget.classList.contains("active")) {
        e.currentTarget.classList.remove("active");
        loadTTickets();
    } else {
        let activeFIlter = document.querySelector(".filter.active");
        if(activeFIlter) {
            activeFIlter.classList.remove("active");
        }
        e.currentTarget.classList.add("active");
        let ticketPriority = e.currentTarget.children[0].classList[0].split("-")[0];
        loadTTickets(ticketPriority);
    }
}
let addBtn = document.querySelector(".add");
let deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener("click", function(e) {
    let selectedTickets = document.querySelectorAll(".ticket.active");
    let allTasks = JSON.parse(localStorage.getItem("allTasks"));
    for(let i = 0; i < selectedTickets.length; i++) {
        selectedTickets[i].remove();
        let ticketID = selectedTickets[i].querySelector(".ticket-id").innerText;
        allTasks = allTasks.filter(function(data) {
            return (("#" + data.ticketId) != ticketID);
        });
    }
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
});

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

        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `<div class="task-to-be-added" data-typed="false" contenteditable="true">Enter your task here</div>
            <div class="modal-priority-list">
                <div class="modal-pink-filter modal-filter active"></div>
                <div class="modal-blue-filter modal-filter"></div>
                <div class="modal-green-filter  modal-filter"></div>
                <div class="modal-yellow-filter  modal-filter"></div>
            </div>`;
        TC.appendChild(modal);
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
        let id = uid();
        // let ticket = document.createElement("div");
        // ticket.classList.add("ticket");
        // ticket.innerHTML = `<div class="ticket-color ticket-color-${selectedPriority}"></div>
        //                 <div class="ticket-id">#${id}</div>
        //                 <div class="task">${task}</div>`;

        document.querySelector(".modal").remove();
        modalVisible = false;
        // TC.appendChild(ticket);
        // ticket.addEventListener("click", function(e) {
        //     if(e.currentTarget.classList.contains("active")) {
        //         e.currentTarget.classList.remove("active");
        //     } else {
        //         e.currentTarget.classList.add("active");
        //     }
        // });

        let allTasks = localStorage.getItem("allTasks");

        if(allTasks == null) {
            let data = [{"ticketId": id, "task": task, "priority": selectedPriority}];
            localStorage.setItem("allTasks", JSON.stringify(data));
        } else {
            let data = JSON.parse(allTasks);
            data.push({"ticketId": id, "task": task, "priority": selectedPriority});
            localStorage.setItem("allTasks", JSON.stringify(data));
        }

        let activeFilter = document.querySelector(".filter.active");
        TC.innerHTML = "";
        if(activeFilter) {
            let priority = activeFilter.children[0].classList[0].split("-")[0];
            loadTTickets(priority);
        } else {
            loadTTickets();
        }
    } else if(e.key == "Enter" && e.shiftKey == false) {
        e.preventDefault();
        alert("Error! you have not type anything in task.")
    }
}


