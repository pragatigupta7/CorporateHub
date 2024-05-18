const mongoose = require('mongoose');                   //ref
const url = "mongodb+srv://PragatiGupta:pragati0701@cluster0.zf31suo.mongodb.net/mern2?retryWrites=true&w=majority&appName=Cluster0"  //from mongodb connect driver this link
mongoose.connect(url)

.then((result) => {                                               //thenc shorcut
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;