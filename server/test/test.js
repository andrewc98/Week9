var assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
const mongo_parser = require('mongodb');

describe('Tests', function() {
    describe('All Products 1', function() {
        this.timeout(10000);
        var read_results;
        before((done) => {
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").find({}).toArray(function(err, result) {
                    if (err) { return console.log(err) }
                    read_results = result;
                    done();
                });
                db.close();
            });
        });

        it('Find Products', () => {
            assert.equal(typeof read_results, 'object');
        });

        after((done) => {
            done();
        });
    });
    describe('All Products', function() {
        this.timeout(10000);
        var read_results;

        before((done) => {

            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").findOne({name: 'asd'}, function(err, result) {
                    if (err) { return console.log(err) }
                    read_results = result;
                    done();
                });
                db.close();
            });
        });

        it('Find Products', () => {
            assert.equal(read_results.name, 'asd');
        });

        after((done) => {
            done();
        });
    });
});