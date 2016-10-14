var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

//redirects all regular paths to /burgers
router.get('/', function (req, res) {
    res.redirect('/burgers');
});


//renders the index with the burger data
router.get('/burgers', function (req, res) {
    burger.all(function (data) {
        res.render('index', {burgers: data});
    });
});

//creates a burger and adds it to the index then redirects home
router.post('/burgers/create', function(req, res) {
    burger.create(['burger_name'], [req.body.burger], function() {
        res.redirect('/burgers');
    });
});

//updates burgers when eat me is clicked to devoured so they switch columns
router.put('/burgers/update/:id', function(req, res) {
    burger.update(req.body.devoured, req.params.id, function() {
        res.redirect('/');
    });
});

//deletes burger from the database and redirects home
router.delete('/burgers/delete/:id', function(req, res) {
    burger.delete(req.params.id, function() {
        res.redirect('/');
    });
});



module.exports = router;