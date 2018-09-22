var express = require("express");
var app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
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

app.get('/api/add', (req, res) => {
    console.log("Made it");
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