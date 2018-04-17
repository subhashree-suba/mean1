//const mocha = require('mocha');
const assert = require('assert');
const Users = require('../modelsDb/users');

//Describe tests
describe('Saving records', function () {
    //Create tests
    it('saves a record to the database', function (done) {
        var char = new Users({
            name: 'baby'
        });

        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });


    });

});
