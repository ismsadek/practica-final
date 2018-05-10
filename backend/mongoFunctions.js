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

// definicion de esquema del artículo
const articleSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
      type: String,
      required: true
  },
  content: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  timeStamp: {
      type: Number,
      required: true
  },
  
});

// definicion de esquema del articulos nuevos
const newsSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
      type: String,
      required: true
  },
  content: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  timeStamp: {
      type: Number,
      required: true
  },
  url: {
      type: String,
      required: true
  },

  
});

// definicion del modelo de dato del articulo
let articleModel = mongoose.model('Article', articleSchema);

// definicion del modelo de dato de nuevos articulos
let newsModel = mongoose.model('News', newsSchema);

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






module.exports = {
   showData: function(){  // Retrieve data
     articleModel.find(function (err, result) {
       if (err) return console.error(err);
       if(result){
         console.log(result);
     }
     });
   },
   findDataById: function (author, title, content, topic, timeStamp){ //Modify the data
     articleModel.findById(id, function(err, result) {
       if (err) throw err;
       if(result){
         result.author = author;
         result.title = title
         result.content = content;
         result.topic = topic;
         result.timeStamp = timeStamp;
         result.save();
       }
     });
   },
   removeData: function (id){
    userModel.findByIdAndRemove(id, function(err, result) {
      if (err) throw err;
      if(result){
        console.log("Usuario eliminado.");
      }
    });
  }
 
}




// var id = '5af32ac0469b4e0d1338b5ff'
//


// Eliminate data

// var id = '5af32a5bb6cdba0cfb7cb315'



