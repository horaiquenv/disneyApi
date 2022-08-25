const characterModel = require('../models/characterModel');

module.exports = {
    getAll : async function(req,res,next){
        try{
            const characters = await characterModel.find().select({img:1, name:1}).sort();
            res.status(200).json(characters);
        } catch (error){
            console.log(error);
            next(e);
        }
    },
    getById : async function(req,res,next){
        try {
            const character = await characterModel.findById(req.params.id);
            res.status(200).json(character);
        } catch (error) {
            console.log(error);
            next(e);
        }
    },
    add : async function(req,res,next){
        try{
            const character = new characterModel({
                img: req.body.img,
                name: req.body.name,
                age: req.body.age,
                weight: req.body.weight,
                backStory: req.body.backStory, 
                movies: req.body.movies
            });
            const document = await character.save();
            console.log(req.body);
            res.status(201).json(document);
            console.log(document);
        } catch (error){
            console.log(error);
            next();
        }
    },
    update : async function(req,res,next){
        try {
            const characters = await characterModel.updateOne({__id:req.params.id},
            req.body);
            res.status(200).json(characters)
        } catch (error) {
            console.log(error);
            next(e);
        }
    },
    delete : async function(req,res,next){
        try {
            const character = await characterModel.deleteOne({__id:req.params.id});
            res.status(200).json(character);
        } catch (error) {
            console.log(error);
            next(e);
        }
    }
}