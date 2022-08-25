const mongoose = require ("mongoose")
mongoose.connect ("mongodb://localhost/disneyApi",function(error){
    if(error){
        throw error
    }else{
        console.log("Conectado con la base de datos");
    }
})
module.exports = mongoose