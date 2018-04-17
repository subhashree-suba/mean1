var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    password: String
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;
