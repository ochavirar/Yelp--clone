"use strict";

let urlUser = "http://localhost:4000/api/Users/email/";
let urlBusinesss = "http://localhost:4000/api/BusinessOwned/id/";
let urlReviews = "http://localhost:4000/api/BusinessReviews/id/";
let urlAddBusiness = "http://localhost:4000/api/Business/";
let urlBusinessByName = "http://localhost:4000/api/Business/name/";
let urlDropBusiness = "http://localhost:4000/api/Business/name/";

let userId;

function addBusiness(){
  let email = localStorage.getItem("user");
  loadUser(urlUser+email).then(function(user){
    let obj = {
      "name": "",
      "googleMapsLink":"",
      "picture1":"",
      "picture2":"",
      "picture3":"",
      "budget":"",
      "openHour": 0,
      "closingHour": 0,
      "fiveStars": 0,
      "fourStars": 0,
      "threeStars": 0,
      "twoStars": 0,
      "oneStar": 0,
      "ownerID": ""
      };
    obj.name = document.getElementById("name").value;
    obj.googleMapsLink = document.getElementById("GM").value;
    obj.description = document.getElementById("desc").value;
    obj.picture1 = document.getElementById("pic1").value;
    obj.picture2 = document.getElementById("pic2").value;
    obj.picture3 = document.getElementById("pic3").value;
    obj.budget = document.getElementById("budget").value;
    obj.openHour = document.getElementById("openH").value;
    obj.closingHour = document.getElementById("closeH").value;
    obj.ownerID = user._id;
    storeBusiness(urlAddBusiness, obj, "Bien", "Mal");
  });
}

function editBusiness(){
  let email = localStorage.getItem("user");
  let prevName = document.getElementById("generalName").value;
  let updateURL = urlBusinessByName + document.getElementById("oName").value;
  loadUser(urlUser+email).then(function(user){
    let obj = {
      "name": "",
      "googleMapsLink":"",
      "picture1":"",
      "picture2":"",
      "picture3":"",
      "budget":"",
      "openHour": 0,
      "closingHour": 0,
      "fiveStars": 0,
      "fourStars": 0,
      "threeStars": 0,
      "twoStars": 0,
      "oneStar": 0,
      "ownerID": ""
      };
    obj.name = document.getElementById("bName").value;
    obj.googleMapsLink = document.getElementById("location").value;
    obj.description = document.getElementById("concept").value;
    obj.picture1 = document.getElementById("i1").value;
    obj.picture2 = document.getElementById("i2").value;
    obj.picture3 = document.getElementById("i3").value;
    obj.budget = document.getElementById("inputState").value;
    obj.openHour = document.getElementById("oH").value;
    obj.closingHour = document.getElementById("cH").value;
    obj.ownerID = user._id;
    console.log(updateURL);
    updateBusiness(updateURL, obj, "Bien", "Mal");
  });
}

function deleteBusiness(){
  let deleteURL = urlDropBusiness + document.getElementById("nameDelete").value;
  console.log(deleteURL);
  dropBusiness(deleteURL, "delete!", "No delete!");
}

function getInfoFromEmail(){
    let email = localStorage.getItem("user");
    loadUser(urlUser+email).then(function(val){
        userId = val._id;
    }).then(() => {
        urlBusinesss += userId+"/";
        let business;
        loadBusiness(urlBusinesss).then(function(value){
            business = value;
            let reviews;
            value.forEach(element => {
                obtainReviews(element);
            });
        });
    });
}

function obtainReviews(elem){
    let urlReviewsCopy = urlReviews + elem._id;
    loadReviews(urlReviewsCopy).then(function(value){
        makeHTML(elem, value);
    });
}

function makeHTML(business, reviews){
    let finalHTML = "";
    let stars5 = 0;
    let stars4 = 0;
    let stars3 = 0;
    let stars2 = 0;
    let stars1 = 0;
    console.log(business);
    console.log(reviews);
    //conteo de reviews por estrellas
    for(let i=0;i<reviews.length;i++){
        switch(reviews[i].reviewScore){
            case 1:
                stars1++;
                break;
            case 2:
                stars2++;
                break;
            case 3:
                stars3++;
                break;
            case 4:
                stars4++;
                break;
            case 5:
                stars5++;
                break;
        }
    }
    let totalReviews = stars1 + stars2 + stars3 + stars5 + stars4;
    let note = (stars1 * 1 + Number(stars2) * 2 + Number(stars3) * 3 + Number(stars4) * 4 + Number(stars5) * 5) / totalReviews;
    console.log(note);
    let tempReviewsHTMl = "";
    //Concatenado de revies en HTMl
    for(let i=0;i<reviews.length;i++){
        tempReviewsHTMl += `
        <div class="container">
                  <div class="row col-12">
                    <div class="card text-white bg-primary mb-3"> <!--Comment-->
                      <div class="card-body">
                        <h4 class="card-title">${reviews[i].userWhoReviewedName} dice:</h4>
                        <h6 class="card-subtitle">
                          Nota: ${reviews[i].reviewScore}
                        </h6>
                        <p class="car-text">
                          ${reviews[i].reviewerMessage}
                        </p>
                      </div>
                      <!--Este container es las respuestas al comentario-->
                      <div class="container">
                        <div class="row">
                          <div class="ard text-white bg-info mb-3 col-12">
                            <div class="card-body">
                              <h4 class="card-title">${business.name} dice:</h4>
                              <p class="card-text">
                                ${reviews[i].businessResponse}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
        `
    }
    let reviewsHTMl = `<div class="row">
    <!--Comments section-->
    <div class="container">
      <div class="row">
        <div class="card col-lg-12">
          <h3><strong>Comentarios:</strong></h3>
          ${tempReviewsHTMl}
        </div>
      </div>
    </div>
    </div>`

    finalHTML += `
    <div class="card bg-light mb-3 border-info row mt-5 container col-lg-9" id="placeSummary">
          <!--Carrusel de fotos para cada restaurante (se admiten 3 solamente)-->
          <div id="placeCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" style="height: 20rem;" src="${business.picture1}" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" style="height: 20rem;" src="${business.picture2}" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" style="height: 20rem;" src="${business.picture3}" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#placeCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#placeCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <!--Espacio para describir -->
        <div class="card-body">
          <h5 class="card-title" id="generalName">${business.name}</h5>
          <p class="card-text">${business.description}</p>
        </div>
        
        <!--Espacio para el mapa embebido y las calificaciones resumidas-->
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <iframe src="${business.googleMapsLink}" 
              width="300" height="200" style="border:1;" 
              allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <div class="col-lg-3">
              <ul>
                <li>5 <i class="fa fa-star rating-color"></i>: ${stars5}</li>
                <li>4 <i class="fa fa-star rating-color"></i>: ${stars4}</li>
                <li>3 <i class="fa fa-star rating-color"></i>: ${stars3}</li>
                <li>2 <i class="fa fa-star rating-color"></i>: ${stars2}</li>
                <li>1 <i class="fa fa-star rating-color"></i>: ${stars1}</li>
              </ul>
            </div>

            <div class="col-lg-4">
              <div class="container">
                <!--Place rating-->
                <div class="row">
                  <div class="col-lg-7">
                    Rating: ${note} 
                    <i class="fa fa-star"></i>

                  </div>

                  <div class="col-lg-1"></div>

                  <div class="col-lg-2">
                    <button class="btn" data-toggle="modal" data-target="#editPlace">
                      <i class="fa fa-gears"></i>
                    </button>
                    <button class="btn" data-toggle="modal" data-target="#deletePlace">
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>

                </div>

                <!--Stars-->
                <div class="row">
                  <div class="ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                </div>
              </div>
            </div>
          </div>

          <br>
          
          <!--Comment section-->

                  <div class="d-flex justify-content-center" id="navigation">
                  ${tempReviewsHTMl}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br>
          <!--Metric section-->
          `;
    document.getElementById("cardSpace").innerHTML += finalHTML;
}
getInfoFromEmail();
