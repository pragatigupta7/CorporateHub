const {Schema,model}=require('../connection')
const addprofileSchema = new Schema({
    name:String,
    email:String,
    companyname:String,
    contactnumber:String,
    image: String,
    description:String,
    Features:String,
    category: {type:String, required: true},
});
module.exports = model('addprofile',addprofileSchema)