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
                products.collection("products").findOne({}, function(err, result) {
                    if (err) { return console.log(err) }
                    read_results = result;
                    done();
                });
                db.close();
            });
        });

        it('Find Products', () => {
            assert.equal(typeof read_results.name, 'string');
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
                products.collection("products").insertOne({_id: 1, name: 'hi', price: 1, type: "a", desc: "b"}, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res.insertedCount;
                    done();
                });
                db.close();
            });
        });

        it('Add Products', () => {
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
                products.collection("products").insertOne({_id: 3, name: 'hi'}, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res;
                    done();
                });
                db.close();
            });
        });

        it('Add Products', () => {
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

        it('Add Products', () => {
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

        it('Add Products', () => {
            assert.equal(add_results.ops[0].name, 'Hello');
        });

        after((done) => {
            done();
        });
    });
});




describe('Update', function() {
    describe('Update Products 1', function() {
        this.timeout(10000);
        var add_results;
        before((done) => {
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").findOneAndUpdate({_id: 1}, { $set: {name: 'Hello World'}}, { new: true }, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res;
                    done();
                });
                db.close();
            });
        });

        it('Update Products', () => {
            assert.equal(add_results.value.name, 'Hello World');
        });

        after((done) => {
            done();
        });
    });
    describe('Update Products 2', function() {
        this.timeout(10000);
        var add_results;
        before((done) => {
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").findOneAndUpdate({_id: 3}, { $set: {name: 'Hello Worlds'}}, { new: true }, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res;
                    done();
                });
                db.close();
            });
        });

        it('Update Products', () => {
            assert.equal(add_results.value.desc, 'Hello Worlds');
        });

        after((done) => {
            done();
        });
    });

    describe('Update Products 3', function() {
        this.timeout(10000);
        var add_results;
        before((done) => {
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").findOneAndUpdate({_id: 2}, { $set: {name: 'Hello World'}}, { new: true }, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res;
                    done();
                });
                db.close();
            });
        });

        it('Update Products', () => {
            assert.equal(add_results.value.name, 'Hi');
        });

        after((done) => {
            done();
        });
    });

    describe('Update Products 4', function() {
        this.timeout(10000);
        var add_results;
        before((done) => {
            MongoClient.connect(url, {poolSize:10}, function(err, db) {
                if (err) { return console.log(err) }
                const dbName = 'mydb';
                var products = db.db(dbName);
                products.collection("products").findOneAndUpdate({_id: 2}, { $set: {name: 'This'}}, { new: true }, function(err, res) {
                    if (err) { return console.log(err) }
                    add_results = res;
                    done();
                });
                db.close();
            });
        });

        it('Update Products', () => {
            assert.equal(add_results.value.desc, 'This');
        });

        after((done) => {
            done();
        });
    });
});