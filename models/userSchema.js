import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const usersModel = mongoose.Schema({
    names:{
        type: "string",
        required:true
    },
    lastNames:{
        type: "string",
        required:true
    },
    nPhone:{
        type: "number",
        unique: true,
        required:true
    },
    nIdentf:{
        type: "number",
        unique: true,
        required:true
    },
    email:{
        type: "string",
        unique: true,
        required:true
    },
    userName:{
        type: "string",
        unique: true,
        required:true
    },
    password:{
        type: "string",
        unique: true,
        required:true
    },
    dateAdmission:{
        type: "string",
        required:true
    },
    typeUser:{
        type: "string",
        required:true
    },
    state:{
        type: "string",
        required:true
    },
})

autoIncrement.initialize(mongoose.connection);
usersModel.plugin(autoIncrement.plugin, 'usuario');
const usuario = mongoose.model("usuario", usersModel);
export default usuario;