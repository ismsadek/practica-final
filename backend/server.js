const mongoose = require('mongoose');
let connString = 'mongodb://enri:123456@ds219000.mlab.com:19000/myfisrtmongodb'
const db = mongoose.connection;
mongoose.connect(connString);
db.on('error',function(){
console.log("Error al conectarse a Mongo");
});

db.once('open', function() {
console.log("Conectado a MongoDB");
});

// definicion de esquemas
const articleSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
},
  user: {
    type: String,
    required: true
},
  id: {
    type: Number,
    required: true
}
});

// definicion del modelo de dato
let userModel = mongoose.model('User', articleSchema);

// //insert data
// function insertData(iText, iUser, iId){
// let user = new userModel({text: iText, user: iUser, id: iId});
// user.save(function(err) {
//   if (err) throw err;
//   console.log('Nuevo usuario guardado.');
// });
// }
//
// insertData('text', 'Isma', 2)


 // Retrieve data
userModel.find(function (err, result) {
  if (err) return console.error(err);
  if(result){
    console.log(result);
}
});

//Modify the data

// var id = '5af32ac0469b4e0d1338b5ff'
//
// userModel.findById(id, function(err, result) {
//   if (err) throw err;
//   if(result){
//     result.text = "Paco";
//     result.user = '33';
//     result.id= 2;
//     result.save();
//   }
// });

//Eliminate data

// var id = '5af32a5bb6cdba0cfb7cb315'
//
// userModel.findByIdAndRemove(id, function(err, result) {
//   if (err) throw err;
//   if(result){
//     console.log("Usuario eliminado.");
// }
// });
