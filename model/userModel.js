// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
    name: String,
    username: String,
    identification: Number,
    password: String,
    photo: String,
    active: Boolean
});

userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj._id;
    delete obj.__v;
    return obj;
   }

// Export Contact model
var User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}

User.deleteOne( 
    {
        identification: 666
    }
);
