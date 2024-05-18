const {Schema, model}= require('../connection')
const productSchema = new  Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    longdescription: String,
    image: String,
    video: String
});
module.exports = model('Manageprofile', productSchema)