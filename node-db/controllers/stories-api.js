'use strict';

var express = require('express');

module.exports.Router = function(Story) {
    var router = express.Router();
    
    router.get('/stories', function(req, res, next) {
        //return all stories from the database
        Story.getAll()
            .then(function(rows) {
                res.json(rows);
            })
            .catch(next);
    });
    
    router.post('/stories', function(req, res, next) {
        //insert a new story into the database
        //and return the data with default values
        //applied
        res.json({});
    });
    
    router.post('/stories/:id/votes', function(req, res, next) {
        //upvote the story and return the
        //full story with current number of votes
        res.json({}); 
    });
    
    return router;
};
