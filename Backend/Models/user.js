const {Schema,model, Types}=require('../connection')
const userSchema = new Schema({
    name : {type : String, require: true},
    email:String,
    password:String,
    confirmpassword:String,
    profile: { type : Types.ObjectId, ref: 'profile' },
    createdAt: { type : Date, default: Date.now }
});
module.exports = model('user',userSchema)