const express = require('express');
const app = express();
const path = require('path');
const mongodb = require('mongodb');
var bodyParser = require('body-parser');


const MongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017';
const databasename = 'submissions';

// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
//     if(error)
//         return console.log(error);
//     const db = client.db(databasename);

//     db.collection('sub').insertOne({
//         name: 'Anchit',
//         email: 'anchit.aga@gmail.com',
//         no: 7276227324
//     }, (error, result)=>{
//         if(error)
//             return console.log('Unable to insert');
//         console.log(result.ops);
//     })

// })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

app.post('/post-submission', function (req, res) {
    MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
        if(error)
            return console.log('Unable to connect');
        const db = client.db(databasename);
        db.collection('sub').insertOne(req.body, (error, result)=>{
            if(error)
                return console.log('Unable to insert');
            console.log(result.ops);
        })
    })
        res.send('Data received:\n' + JSON.stringify(req.body));
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('server is up');
})
