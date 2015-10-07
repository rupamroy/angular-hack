/// <reference path="typings/tsd.d.ts" />

export class IndexedDbService {

    db:any;

    init() {

        if (Modernizr.indexeddb) {

            indexedDB = window.indexedDB || window.msIndexedDB;

            var attendeeData = [
                {name: "Smith", email: "smith@acme.com"},
                {name: "Dave", email: "dave@acme.com"}
            ];

            var request = indexedDB.open("EmpDB", 1);  // the second parameter is the version
            request.onerror = function (evt:any) {
                alert("Database error code: " + evt.target.error.code);
            };


            request.onsuccess = function (evt:any) {
                this.db = evt.target.result;
                alert("Database opened");
            };

            request.onupgradeneeded = function (evt:any) {
                this.db = evt.target.result;
                alert("Database Upgrade");
                if (!this.db.objectStoreNames.contains("emp")) {
                    var objectStore = this.db.createObjectStore("emp", {keyPath: "id", autoIncrement: true});
                    alert("Object store created");
                }
                objectStore.createIndex("name", "name", {unique: false});
                objectStore.createIndex("email", "email", {unique: true});

                for (var i in attendeeData) {
                    objectStore.add(attendeeData[i]);
                }

            }
        }

    }

    addData(name, email ) {

        var transaction = this.db.transaction(["emp"], "readwrite");
        var objectStore = transaction.objectStore("emp");
        var request = objectStore.add({name: name, email: email});
        request.onsuccess = this.fnSuccess();
        transaction.oncomplete = this.fnCompleted();

    }

    fnSuccess(){
        console.log('add success');
    }

    fnCompleted(){

    }


    showData(callback) {
        var transaction = this.db.transaction("emp");
        var objectStore = transaction.objectStore("emp");
        var request = objectStore.get();
        request.onerror = function (evt) {
            alert(evt.target.errorCode);
        };
        request.onsuccess = function (evt) {
            callback(request.result);
        };

    }


}