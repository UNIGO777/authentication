const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/singUPfromdatacoaching")

let user = mongoose.Schema({
    firstname: String,
    lastname: String,
    email:{
        type:String,
        require:true
    },
    password: String
})

let users = mongoose.model("users", user);

module.exports  = users