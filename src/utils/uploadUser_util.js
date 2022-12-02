"use strict";

let urlUpload = "http://localhost:4000/api/Users/";
let urlLogIn = "http://localhost:4000/login/";
let urlEmail = "http://localhost:4000/api/Users/email/"

function uploadUser(){
    let user = {
        "name": "",
        "email": "",
        "password": "",
        "level": 0,
        "userType": ""
    };
    user.name = document.getElementById("names").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("pass").value;
    user.userType = document.getElementById("userType").value;
    user.token = "1";
    if(user.name !== "" && 
    user.email !== "" && 
    user.password !== "" && 
    user.user !== "")
        storeUser(urlUpload, user, "Se ha cargado un usuario", "Hubo un problema al cargar");
}

function logUser(){
    let log = {
        "email": "",
        "password": ""
    };
    log.email = document.getElementById("correo").value;
    log.password = document.getElementById("contra").value;
    urlEmail += log.email;
    if(log.email !== "" && log.password !== ""){
        postUserToken(urlLogIn, log, "Se ha loggeado un usuario", "Error de loggeo", urlEmail);
    }   
    localStorage.setItem("user", log.email);      
}

