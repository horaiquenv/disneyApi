const moviesModel = require('../models/moviesModel');

module.exports = {
    getAll : async function(req,res,next){
        try{
            const movies = await moviesModel.find().populate(["genre", "characters"]);
            res.status(200).json(movies);
        } catch (error){
            console.log(error);
            next(e);
        }
    },
    getById : async function(req,res,next){
        try {
            const movie = await moviesModel.findById(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            console.log(error);
            next(e);
        }
    },
    add : async function(req,res,next){
        try{
            const movie = new moviesModel({
                img: req.body.img,
                title: req.body.title,
                date: req.body.date,
                rate: req.body.rate,
                genre: req.body.genre, 
                characters: req.body.characters
            });
            const document = await movie.save();
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
            const movies = await moviesModel.updateOne({__id:req.params.id},
            req.body);
            res.status(200).json(movies)
        } catch (error) {
            console.log(error);
            next(e);
        }
    },
    delete : async function(req,res,next){
        try {
            const movie = await moviesModel.deleteOne({__id:req.params.id});
            res.status(200).json(movie);
        } catch (error) {
            console.log(error);
            next(e);
        }
    }
}