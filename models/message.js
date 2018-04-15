var mongoose = require('mongoose');
// Schema is used to create helper object for models
var Schema = mongoose.Schema;

// Here we define out Message model
var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// To create a model from the above declared schema. It will create a collection named `messages`
module.exports = mongoose.model('Message', schema);