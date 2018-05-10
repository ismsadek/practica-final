const express = require("express");
const myModule = require('./mongoFunctions');

app.use(express.urlencoded()) // middleware Bodyparse


var errorJson = {
  error: "Not Found",
  description: "This item was not found",
}
var successfullyJson = {
  text: 'comment loaded successfully'
}


app.post("/api/login", function(req, res){
  var author = req.body.author
  var title = req.body.title
  var content = req.body.content
  var topic = req.body.topic
  var timeStamp = req.body.timeStamp

  myModule.newArticle(author, title, content,'4',5)

  res.status(201).json(successfullyJson)

  }else{
    res.status(403).json({
      error: "Forbidden",
      description: "Forbidden"
    })
  }
})

// myModule.newArticle('1','2','3','4',5);
myModule.showData()
// myModule.modifyArticleById('5af4184aa309c7090cca2dc6','1','2','3','4',7)
// myModule.removeArticleById('5af4184aa309c7090cca2dc6')
