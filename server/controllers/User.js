"use strict"

class UserException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}

const qualifiedBusiness = {
    "qualifiedBusiness":"",
    "Note":0
};

class User{
    constructor(name, email, password, subscribedTo, qualifiedBusiness, level){
        this._userID = generateUUID();
        this._email = email;
        this._name = name;
        this._password = password;
        this._subscribedTo = subscribedTo;
        this._qualifiedBusiness = qualifiedBusiness;
        this._level = level;
    }

    get userID(){
        return this._userID;
    }

    set userID(newID){
        throw new UserException("El ID se genera de manera automática");
    }

    get email(){
        return this._email;
    }

    set email(newEMail){
        if(typeof newEMail !== 'string' || newEMail === "") throw new UserException("The e-mail should be a non-empty string");
        this._email = newEMail;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if(typeof newName !== 'string' || newName === "") throw new UserException("The name should be a non-empty string");
        this._name = newName;
    }

    get password(){
        return this._password;
    }

    set password(newPassword){
        if(typeof newPassword !== 'string' || newPassword === "") throw new UserException("The password should be a non-empty string");
        this._password = newPassword;
    }

    get subscribedTo(){
        return this._subscribedTo;
    }

    set subscribedTo(newList){
        if(typeof newList !== 'object') throw new UserException("The ids should be contained in an array");

    }

    get qualifiedBusiness(){
        return this._qualifiedBusiness;
    }

    get level(){
        return this._level;
    }

    set level(newLevel){
        if(typeof newLevel != 'number' || newLevel < 0) throw new UserException("The level should be a number")
        this._newLevel = newLevel;
    }

    static createFromJson(jsonVal){
        let obj = JSON.parse(jsonVal);
        return User.createFromObject(obj);
    }

    static createFromObject(obj){
        let newUser = {};
        Object.assign(newUser, obj);
        User.cleanObject(newUser);
        let defUser = new User(
            newUser.name,
            newUser.email,
            newUser.password,
            newUser.subscribedTo,
            newUser.qualifiedBusiness,
            newUser.level
        );
        return defUser;
    }

    static cleanObject(obj){
        let properties = ["name",
            "email",
            "password",
            "subscribedTo", 
            "qualifiedBusiness", 
            "level"];
        for(let prop in obj){
            if(!properties.includes(prop)){
                prop = null;
            }
        }
    }
}