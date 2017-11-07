module.exports = function(){

    var Film = require('./film.model.js')

    var getAll =function(req,res){
        Film.find()
            .exec()
            .then(function(films){
                res.status(200).json(films);
            })
            .catch(function(err){
                res.status(500).send(err);
            })
    }

    var getOne = function(req,res){
        Film.findById(req.params.id)
        .exec()
        .then(function(film){
            res.status(200).json(film)
        })
        .catch(function(err){
            res.status(500).send(err)
        })
    }

    return {
        getAll:getAll,
        getOne:getOne
    }





}();