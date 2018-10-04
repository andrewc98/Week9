var server = require('../app');
var chai = require('chai');
var supertest = require('supertest');

var expect = chai.expect;
describe('API Tests', function() {
    describe('# Get all tasks', function() { 
        it('should get all tasks', function(done) { 
            request(server) .get('/tasks') .end(function(err, res) { 
                expect(res.statusCode).to.equal(200); 
                expect(res.body).to.be.an('array'); 
                expect(res.body).to.be.empty; 
                done(); 
            });
        }); 
    }); 
});