const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://crudappeq9-f7b9f832fbe4.herokuapp.com/api/users')
        .then(function(response){
            res.render('index', { dinos : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('https://crudappeq9-f7b9f832fbe4.herokuapp.com/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.homeRoutesTipo = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://crudappeq9-f7b9f832fbe4.herokuapp.com/api/tipoDino')
        .then(function (response) {
            res.render('tipoDino', { tipodinos: response.data });
        })
        .catch(err => {
            res.send(err);
        })


}