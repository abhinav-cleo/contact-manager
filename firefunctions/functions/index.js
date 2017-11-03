"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
var admin = require("firebase-admin");
var cors = require("cors");
admin.initializeApp(functions.config().firebase);
exports.addContact = functions.https.onRequest(function (request, response) {
    //var ref = admin.database().ref('/users')
    var contactsRef = admin.database().ref('/contacts');
    cors()(request, response, function () {
        contactsRef.push({
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            email: request.body.email
        });
    });
    response.send(request.body);
});
exports.getContactList = functions.https.onRequest(function (request, response) {
    response.send("Hello from Firebase!");
});
exports.updateContact = functions.https.onRequest(function (request, response) {
    response.send("Hello from Firebase!");
});
exports.deleteContact = functions.https.onRequest(function (request, response) {
    response.send("Hello from Firebase!");
});
