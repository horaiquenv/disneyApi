const genreModel = require('../models/genreModel');

module.exports = {
    getAll : async function(req,res,next){
        try{
            const genres = await genreModel.find().populate("name").sort();
            res.status(200).json(genres);
        } catch (error){
            console.log(error);
            next(e);
        }
    },
    getById : async function(req,res,next){
        try {
            const genre = await genreModel.findById(req.params.id);
            res.status(200).json(genre);
        } catch (error) {
            console.log(error);
            next(e);
        }
    },
    add : async function(req,res,next){
        try{
            const genre = new genreModel({
                img: req.body.img,
                name: req.body.name,
                movies: req.body.movies
            });
            const document = await genre.save();
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
            const genre = await genreModel.updateOne({__id:req.params.id},
            req.body);
            res.status(200).json(genre)
        } catch (error) {
            console.log(error);
            next(e);
        }
    },
    delete : async function(req,res,next){
        try {
            const genre = await genreModel.deleteOne({__id:req.params.id});
            res.status(200).json(genre);
        } catch (error) {
            console.log(error);
            next(e);
        }
    }
}