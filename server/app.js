var express = require("express");
var app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
const mongo_parser = require('mongodb');
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));
var port = 3000;
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var server = http.listen(port,function(){
    var host = server.address().address;
    console.log('Server listening on ' + host + ':' + port);
});

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

// --- Connection to Angular Start
app.use(express.static(path.join(__dirname, '../week9/dist/week9/')));
app.get('/', function (req, res) {
    console.log("Hello world.");
    res.sendFile(path.join(__dirname,'../week9/dist/week9/index.html'))
});
app.get('/products', function(req,res){
    console.log("Hello world.");
    res.sendFile(path.join(__dirname,'../week9/dist/week9/index.html'))
});
app.get('/add_product', function(req,res){
    res.sendFile(path.join(__dirname,'../week9/dist/week9/index.html'))
});
app.get('/update_product', function(req,res){
    res.sendFile(path.join(__dirname,'../week9/dist/week9/index.html'))
});
// --- Connection to Angular End

app.post('/api/add', (req, res) => {
    MongoClient.connect(url, {poolSize:10}, function(err, db) {
        if (err) { return console.log(err) }
        const dbName = 'mydb';
        var products = db.db(dbName);
        const create = require("./add.js");
        create.addProduct(products, res, req.body);
        db.close();
    });
});

app.post('/api/search', (req, res) => {
    MongoClient.connect(url, {poolSize:10}, function(err, db) {
        if (err) { return console.log(err) }
        console.log(req.body.search_text);
        const dbName = 'mydb';
        var products = db.db(dbName);
        products.collection("products").find({ $or: [ {desc: req.body.search_text}, {name: req.body.search_text} ] }).toArray(function(err, result) {
            if (err) { return console.log(err) }
            console.log("Found results");
            res.send(result);
        });
        db.close();
    });
});

app.post('/api/products_delete', (req, res) => {
    MongoClient.connect(url, {poolSize:10}, function(err, db) {
        if (err) { return console.log(err) }
        const dbName = 'mydb';
        var products = db.db(dbName);
        const id_delete = require("./remove.js");
        id_delete.deleteProduct(products, res, mongo_parser.ObjectID(req.body.id));
        const read = require("./read.js");
        read.readProducts(products, res);
        db.close();
    });
});

app.post('/api/update_product', (req, res) => {
    MongoClient.connect(url, {poolSize:10}, function(err, db) {
        if (err) { return console.log(err) }
        const dbName = 'mydb';
        var products = db.db(dbName);
        const update_product = require('./update.js');
        update_product.updateProduct(products, res, mongo_parser.ObjectID(req.body.id), req.body);
        db.close();
    });
});

app.get('/api/products', (req, res) => {
    MongoClient.connect(url, {poolSize:10}, function(err, db) {
        if (err) { return console.log(err) }
        const dbName = 'mydb';
        var products = db.db(dbName);
        const read = require("./read.js");
        read.readProducts(products, res);
        db.close();
    });
});

app.get('/home',function(request,response){
    response.sendFile(__dirname + "/www/index.html");
    MongoClient.connect(url, {poolSize:10}, function(err, db) {
        if (err) { return console.log(err) }
        const dbName = 'mydb';
        var products = db.db(dbName);
    
        // Drop & Create products
        const create = require('./create.js');
        create.createDatabase(products);
        // Drop & Create products
    
        // Insert products
        const insert = require('./add.js');
        insert.addProduct(products);
        // Insert products
    
        // Delete a product
        const remove = require('./remove.js');
        remove.deleteProduct(products);
        // Delete a product
    
        // Update a product
        const update = require('./update.js');
        update.updateProduct(products);
        // Update a product
    
        // Find products
        const find = require('./read.js');
        find.readProducts(products, db);
        // Find products
    });
});