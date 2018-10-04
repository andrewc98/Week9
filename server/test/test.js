var assert = require('assert');
var http = require('http');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
const mongo_parser = require('mongodb');

describe('Tests', () => {
    describe('/api/add', () => {
        before((done) => {
            done();
        });
        it('Adding', () => {
            var read_result;
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                const read = require("../read.js");
                read_result = read.readProducts(products, res);
                setTimeout(pause, 5000);
                assert.equal(read_result, 1);
                db.close();
            });
        });
        after((done) => {
            done();
        });
    });
});