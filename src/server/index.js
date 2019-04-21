// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var path = require('path');
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
require('es6-promise').polyfill();
var fetch = require('isomorphic-fetch');
var URLSearchParams = require('url-search-params')
const dbSettings = require("./dbSettings.json");
var Guild = require('./models/guild.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://' + dbSettings.dbUsername + ':' + dbSettings.dbPassword + '@movie-knight-vaypj.mongodb.net/movie-knight'); // connect to our database


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/)
router.get('/', function(req, res) {
    res.json({ message: 'Hooray! Welcome to our api!' });   
});

// on routes that end in /guilds
router.route('/guilds')

    // find a guild
    .get(function(req, res) {
        Guild.find({}, function(err, guildList) {
            if (err) res.send(err)
            res.json(guildList)
        })
    })

//on routes that end in /guilds/:guildid

router.route('/guilds/:guildid')

    // find a guild with guildid
    .get(function(req, res) {
        Guild.findById(req.params.guildid, function(err, guild) {
            if (err) res.send(err)
            res.json(guild)
        })
    })

    .put(function(req, res) {
        Guild.findOne({guild_id: req.params.guildid}, function(err, guild) {
            if (err) res.send(err)
            guild.request_list.push(req.body)
            guild.save(function(err){
                if (err) res.send(err)
                res.json(guild)
            })
        })
    })

// on routes that end in /users/:userid
router.route('/users/:userid')

    // find a user by id
    .get(function(req, res) {
        Guild.find({ user_list: req.params.userid }, function(err, guildList) {
            if (err) res.send(err)
            res.json(guildList)
        })
    })

router.route('/code/:code')

    .get(async function (req, res) {
        const code = req.params.code
        const header = {'Content-Type': 'application/x-www-form-urlencoded'}
        const payload = new URLSearchParams();
        if (!code) return res.send("Invalid authorization code.")
        payload.append('client_id', "558039744718569492")
        payload.append('client_secret', dbSettings.client_secret)
        payload.append('grant_type', 'authorization_code')
        payload.append('code', code)
        payload.append('redirect_uri', dbSettings.uri_redirect)
        payload.append('scope', 'identify')
        const response = await fetch("https://discordapp.com/api/oauth2/token", {method: "POST", body: payload.toString(), headers: header})
        const json = await response.json()
        res.json(json)
    })

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
