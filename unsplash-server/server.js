global.fetch = require('node-fetch');
const config = require('./config/details');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');

// Instantiate obj
const unsplash = new Unsplash({
    applicationId: config['APPLICATION_ID'],
    secret: config['SECRET'],
    callbackUrl: config['CALLBACK_URL']
});

const app = express();

app.get('/api/photos',(req,res)=>{
    console.log('Application ID is: ', config['APPLICATION_ID']);
    unsplash.photos.listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then(json => res.json(json));
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=>{
    console.log(`Server listening at ${server.address().port}`);
});