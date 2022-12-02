"use strict";

async function loadBusiness(url) {
    let response = await fetch(url);
    let val = await response.json();
    return val;
}

async function loadOwnedBusinesses(url){
    let response = await fetch(url);
    let val = await response.json();
    return val;
}

async function loadUser(url){
    let response = await fetch(url);
    let val = await response.json();
    return val;
}

async function loadReviews(url){
    let response = await fetch(url);
    let val = await response.json();
    return val;
}

function storeUser(url, user, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function storeBusiness(url, business, onSuccess, onError){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(business));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function updateBusiness(url, business, onSuccess, onError){
    let xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(business));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function dropBusiness(url, onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    
    xhr.open('DELETE', url);
    xhr.send();
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function postUserToken(url, log, onSuccess, onError){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(log));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}

function getXhrResponse(xhr, onSuccess, onError) {
    if (xhr.status == 200) {
        alert(xhr.responseText);
        onSuccess(xhr.responseText);
    } else {
        alert(xhr.responseText);
        onError(xhr.status + ': ' + xhr.statusText);
    }
}
