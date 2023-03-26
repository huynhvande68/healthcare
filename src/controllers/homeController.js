import { json } from "body-parser";
import db from "../models/index";
import CRUDService from "../services/CRUDService"

let getHomePage = async (req,res) =>{
    try {
        let data = await db.User.findAll();
        console.log("-----------");
        console.log(data);
        console.log("-----------");
        return res.render('homepage.ejs',{
            data : JSON.stringify(data)
        })
    } catch (e) {
        console.log(e);
    }   
}


let getAboutMe = (req,res) =>{
    return res.render('test/aboutmepage.ejs')
}

let getCRUD = (req,res) => {
    return res.render('crud.ejs')
}

let postCRUD = (req,res) => {
    let message =  CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('Post crud from server');
}

let getSocial = (req,res) => {
    return res.render('test/socialmepage.ejs');
}

let displayGetCRUD = async(req,res) => {
    let data = await CRUDService.getAllUser();
    console.log("=================");
    console.log(data);
    console.log("=================");
    return res.render('displayCRUD.ejs' , {
        dataTable : data,
    });
}
let editCRUD = async (req, res) => {
    let userId = req.query.id;
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId);

        return res.render('edit-crud.ejs',{
            user : userData
        })
    }else{
        return res.send('User not found');
    }

}
let putCRUD = async(req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs',{
        dataTable: allUsers
    });
} 

module.exports = {
    getHomePage: getHomePage,
    getAboutMe : getAboutMe,
    getCRUD : getCRUD,
    postCRUD: postCRUD,
    getSocial : getSocial,
    displayGetCRUD : displayGetCRUD,
    editCRUD :editCRUD,
    putCRUD : putCRUD,
}