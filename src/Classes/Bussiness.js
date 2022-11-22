"use strict";

class BusinessException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}

const commentAndAnswer = {
    "comment":"",
    "answer":""
};

class Business{
    constructor(name, googleMapsLink, description, picture1, picture2, picture3, budget){
        this._businessID = generateUUID();
        this.name = name;
        this.googleMapsLink = googleMapsLink;
        this.description = description;
        this.picture1 = picture1;
        this.picture2 = picture2;
        this.picture3 = picture3;
        this.budget = budget;
        this.commentAndAnswer = [];
    }

    get businessID(){
        return this._businessID;
    }

    set businessID(newID){
        throw new BusinessException("The ID will be generated automatically");
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if(typeof newName !== 'string' || newName === "") throw new BusinessException("The name should be a non-empty string");
        this._name = newName;
    }

    get googleMapsLink(){
        return this._googleMapsLink;
    }

    set googleMapsLink(newLink){
        if(typeof newLink !== 'string' || newLink === "") throw new BusinessException("The link should be a non-empty string");
        this._googleMapsLink = newLink;
    }

    get description(){
        return this._description;
    }

    set description(newDescription){
        if(typeof newDescription !== 'string' || newDescription === "") throw new BusinessException("The description should be a non-empty string");
        this._description = newDescription;
    }

    get picture1(){
        return this._picture1;
    }
    
    set picture1(newPicture){
        if(typeof newPicture !== 'string' || newPicture === "") throw new BusinessException("The link should be a non-empty 'string'");
        this._picture1 = newPicture;
    }

    get picture2(){
        return this._picture1;
    }
    
    set picture2(newPicture){
        if(typeof newPicture !== 'string' || newPicture === "") throw new BusinessException("The link should be a non-empty 'string'");
        this._picture1 = newPicture;
    }

    get picture3(){
        return this._picture1;
    }

    set picture3(newPicture){
        if(typeof newPicture !== 'string' || newPicture === "") throw new BusinessException("The link should be a non-empty 'string'");
        this._picture1 = newPicture;
    }

    static createFromJson(jsonVal){
        let obj = JSON.parse(jsonVal);
        return Business.createFromObject(obj);
    }

    static createFromObject(obj){
        console.log("paso 2");
        let newBusiness = {};
        Object.assign(newBusiness, obj);
        Business.cleanObject(newBusiness);
        console.log("Objeto limpio");
        console.log(newBusiness);
        let defBusiness = new Business(
            newBusiness.name,
            newBusiness.googleMapsLink,
            newBusiness.description,
            newBusiness.picture1,
            newBusiness.picture2,
            newBusiness.picture3,
            newBusiness.budget, 
        );
        console.log("Objeto nuevo creado");
        console.log(defBusiness);
        return defBusiness;
    }

    static cleanObject(obj){
        let properties = ["businessId", "name", "googleMapsLink", "description", "picture1", "picture2", "picture3", "budget", "commentAndAnswer"];
        for(let prop in obj){
            if(!properties.includes(prop)){
                prop = null;
            }
        }
    }

}