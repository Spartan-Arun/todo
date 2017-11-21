var express=require('express');

var serviceApp=express();

var fileReaderObj=require('fs');

serviceApp.get('/',function(request,response){


fileReaderObj.readFile('../Data/sample.json','utf8',function(err,data){
    if (err) throw err;
   // console.log(JSON.stringify(data))
    response.end(JSON.stringify(data));
});

});

serviceApp.listen(1234);