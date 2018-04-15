var mongoose = require('mongoose');
// Schema is used to create helper object for models
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

// Here we define out Message model
var userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    // Messages is an array cos we can have multiple messages related to a user
    messages: [{type:Schema.Types.ObjectId, ref: 'Message'}]
});

userSchema.plugin(mongooseUniqueValidator);

// To create a model from the above declared schema. It will create a collection named `users`
module.exports = mongoose.model('User', schema);