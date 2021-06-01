let request = indexedDB.open("camera", 3);
let db;
request.onsuccess = function(e) {
    db = request.result;
    console.log(db);
    let note = {
        nId: "jfbuverufv",
        txt: "hello i am bhavesh"
    }
    
    let tx = db.transaction("gallery", "readwrite");
    let store = tx.objectStore("gallery");
    store.add(note);
}

request.onupgradeneeded = function(e) {
    db = request.result;
    db.createObjectStore("notes", { keyPath: "nId"})
}

