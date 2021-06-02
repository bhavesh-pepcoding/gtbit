let request = indexedDB.open("camera", 1);
let db;
request.onsuccess = function(e) {
    db = request.result;
}

request.onerror = function () { 
    console.log("error");
 }

request.onupgradeneeded = function(e) {
    db = request.result;
    db.createObjectStore("gallery", { keyPath: "nId"})
}

// for transaction
function addData (type,data) {
    let tx = db.transaction("gallery","readwrite");
    let store = tx.objectStore("gallery");
    store.add({nId: Date.now(), type: type, data: data});
}