var assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
const mongo_parser = require('mongodb');

describe('Read', function() {
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

    describe('All Products 2', function() {
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

    describe('All Products 3', function() {
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
            assert.equal(read_results.name, 'Wrong');
        });

        after((done) => {
            done();
        });
    });

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
            assert.equal(typeof read_results, 'string');
        });

        after((done) => {
            done();
        });
    });
});

describe('Add', function() {
    describe('Add Products 1', function() {
        this.timeout(10000);
        var add_results;
        before((done) => {
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").insertOne({name: 'hi'}, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res.insertedCount;
                    done();
                });
                db.close();
            });
        });

        it('Find Products', () => {
            assert.equal(add_results, 1);
        });

        after((done) => {
            done();
        });
    });

    describe('Add Products 2', function() {
        this.timeout(10000);
        var add_results;
        before((done) => {
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").insertOne({name: 'hi'}, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res;
                    done();
                });
                db.close();
            });
        });

        it('Find Products', () => {
            assert.equal(add_results.ops[0].name, 'hi');
        });

        after((done) => {
            done();
        });
    });

    describe('Add Products 3', function() {
        this.timeout(10000);
        var add_results;
        before((done) => {
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").insertOne({name: 'hi'}, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res.insertedCount;
                    done();
                });
                db.close();
            });
        });

        it('Find Products', () => {
            assert.equal(add_results, 2);
        });

        after((done) => {
            done();
        });
    });

    describe('Add Products 4', function() {
        this.timeout(10000);
        var add_results;
        before((done) => {
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").insertOne({name: 'hi'}, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res;
                    done();
                });
                db.close();
            });
        });

        it('Find Products', () => {
            assert.equal(add_results.ops[0].name, 'Hello');
        });

        after((done) => {
            done();
        });
    });
});