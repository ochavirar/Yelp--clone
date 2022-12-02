"use strict";

const urlBusinesss = "http://localhost:4000/api/Business";
const urlReviews = "http://localhost:4000/api/Reviews";
let htmlCardsString = "";
let businessContainer = document.getElementById('cards');

function concatHTMl(obj){
    let htmlCards = "";
    obj.forEach(element => {
        let price = (element.budget === 'High') ? "$$$" : (element.budget === 'Medium') ? "$$" : "$";
        let link = "http://localhost:4000/api/BusinessReviews/id/"+element._id;
        let note = 0;
        let N = 0;
        htmlCards += 
        `<div  class="card col-6 col-sm-6 col-md-4 col-lg-3">
            <img class="card-img-top" src="${element.picture1}" alt="">
            <div class="card-body">
                <h4 class="card-title">${element.name}</h4>
                <p class="card-text">${element.description}</p>
                <p class="card-text">Rango de precio: ${price}</p>
                <p class="card-text">Nota: ${note}</p>
                <p class="card-text">Horario: ${element.openHour}:00 - ${element.closingHour}:00</p>
            </div>
            <button type="button" aria-hidden="true" data-dismiss="modal">
                <span>
                    <a class="nav-item nav-link text-dark" href="">Visita!</a>
                </span>
            </button>
            <br>
        </div>`
    });
    businessContainer.innerHTML = htmlCards;
}

function businessListToHTML(businesses){
    loadBusiness(businesses).then(function(val) {
        htmlCardsString = concatHTMl(val);
    });
}



businessListToHTML(urlBusinesss);