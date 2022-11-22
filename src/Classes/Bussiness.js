"use strict";
import {utilsUuid} from '../utils/utilsUuid';

class BusinessException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}

class Business{
    constructor(businessID, name, googleMapsLink, description, picture1, picture2, picture3, budget){
        this._businessID = generateUUID();
        this.name = name;
        this.googleMapsLink = googleMapsLink;
        this.description = description;
        this.picture1 = picture1;
        this.picture2 = picture2;
        this.picture3 = picture3;
        this.budget = budget;
        this.commentsAndAnswers = [];
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
        if(typeof newName != String || newName === "") throw new BusinessException("The name should be a non-empty string");
        this._name = newName;
    }

    get googleMapsLink(){
        return this._googleMapsLink;
    }

    set googleMapsLink(newLink){
        if(typeof newName != String || newName === "") throw new BusinessException("The link should be a non-empty string");
        this._googleMapsLink = newLink;
    }

    get description(){
        return this._description;
    }

    set description(newDescription){
        if(typeof newName != String || newName === "") throw new BusinessException("The description should be a non-empty string");
        this._description = newDescription;
    }

    get picture1(){
        return this._picture1;
    }
    
    set picture1(newPicture){
        if(typeof newName != String || newName === "") throw new BusinessException("The link should be a non-empty string");
        this._picture1 = newPicture;
    }

    get picture1(){
        return this._picture1;
    }
    
    set picture1(newPicture){
        if(typeof newName != String || newName === "") throw new BusinessException("The link should be a non-empty string");
        this._picture1 = newPicture;
    }

    get picture1(){
        return this._picture1;
    }

    set picture1(newPicture){
        if(typeof newName != String || newName === "") throw new BusinessException("The link should be a non-empty string");
        this._picture1 = newPicture;
    }

}