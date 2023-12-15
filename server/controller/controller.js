var Dinodb = require('../model/dinochar');
var tipoDinobd = require('../model/tipodino');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "El contenido no puede estar vacío!"});
        return;
    }

    // new user
    const user = new Dinodb({
        name : req.body.name,
        alias : req.body.alias,
        gender: req.body.gender,
        picture : req.body.picture
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Ocurrió un error al crear el archivo."
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Dinodb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "No se encopntró al personaje con el id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Ocurrió un error al consultar el personaje con el id " + id})
            })

    }else{
        Dinodb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Ocurrió un error al consultar el archivo."})
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    

    Dinodb.findByIdAndUpdate(id, req.body)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Dinodb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

// retrieve and return all tipos/ retrive and return a single tipoDino
exports.findTipo = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        tipoDinobd.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "No se encopntró al tipoDino con el id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Ocurrió un error al consultar el tipoDino con el id " + id })
            })

    } else {
        tipoDinobd.find()
            .then(tipoDino => {
                res.send(tipoDino)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Ocurrió un error al consultar el archivo." })
            })
    }


}