

var express = require('express'),
 
  
  CRUDOper = require('./routes/CRUDOper');
   

var app = module.exports = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
   app.use(express.static(__dirname + '/views'));
   app.use(express.logger('dev'));
  app.use(app.router);
  });

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.post('/CRUDOper/addInfo', CRUDOper.addInfo);


// Start server

app.listen(3000, function(){
  console.log("Express server listening on port 3000");
});
 