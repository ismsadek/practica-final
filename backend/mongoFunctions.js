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


module.exports = {
   showData: function(){  // Retrieve data
     articleModel.find(function (err, result) {
       if (err) return console.error(err);
       if(result){
         console.log(result);
     }
     });
   },
   newArticle: function(iAuthor, iTitle, iContent, iTopic, iTimeStamp){  // Retrieve data
     let user = new articleModel({author: iAuthor, title: iTitle, content: iContent, topic:iTopic, timeStamp: iTimeStamp});
     user.save(function(err) {
       if (err) throw err;
       console.log('Nuevo usuario guardado.');
     });
   },
   modifyArticleById: function (id, iAuthor, iTitle, iContent, iTopic, iTimeStamp){ //Modify the data
     articleModel.findById(id, function(err, result) {
       if (err) throw err;
       if(result){
         result.author = iAuthor;
         result.title = iTitle
         result.content = iContent;
         result.topic = iTopic;
         result.timeStamp = iTimeStamp;
         result.save();
         console.log(result);
       }
     });
   },
   removeArticleById: function (id){
    articleModel.findByIdAndRemove(id, function(err, result) {
      if (err) throw err;
      if(result){
        console.log("Usuario eliminado.");
      }
    });
  }
}
