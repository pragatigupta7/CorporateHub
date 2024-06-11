const {Schema,model, Types}=require('../connection')
const userSchema = new Schema({
    name : {type : String, require: true},
    email:{type : String, unique : true},
    password:String,
    confirmpassword:String,
    profile: { type : Types.ObjectId, ref: 'profile' },
    role: { type : String, default: 'user' },
    createdAt: { type : Date, default: Date.now }
});
module.exports = model('user',userSchema)