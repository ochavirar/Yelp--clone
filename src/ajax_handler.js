"use strict";

async function loadBusiness(url) {
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
    xhr.send(JSON.stringify(user));
    xhr.onload = () => getXhrResponse(xhr, onSuccess, onError);
}



function getXhrResponse(xhr, onSuccess, onError) {
    if (xhr.status == 200) {
        onSuccess(xhr.responseText);
    } else {
        onError(xhr.status + ': ' + xhr.statusText);
    }
}



