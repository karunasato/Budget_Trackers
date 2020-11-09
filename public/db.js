const databaseName = "offlineTrans";
const request = window.indexedDB.open(databaseName, 1);
const storeName = "pending";
let db,
tx,
store;
request.onupgradeneeded = function(e) {
const db = e.target.result;
db.createObjectStore(storeName, {autoIncrement: true});
};
  
request.onerror = function(e) {
console.log("There was an error");
};

request.onsuccess = function(e) {
db = request.result;
}

  function saveRecord(trans){
    tx = db.transaction(storeName, "readwrite");
    store = tx.objectStore(storeName);
    store.add(trans)
  }


  //do something when user is back online
  //open up store get all offline records
  //post to server

//   fetch("/api/transaction", {
//     method: "POST",
//     body: JSON.stringify(transaction),
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-Type": "application/json"
//     }
//   })
  