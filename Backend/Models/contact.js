const {Schema,model}=require('../connection')
const Contactschema = new Schema({
    name:String,
    subject:String,
    email:String,
    phone:String,
    message:String
});
module.exports = model('contact',Contactschema)