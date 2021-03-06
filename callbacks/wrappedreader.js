/*wrapped_reader.js
A modification to lecture 6's A simple nodeJS file reader.
Jake Levy
Sept 2020
*/
var fs = require('fs');

var opts = {encoding:"utf8", flag: 'r'};
var doMoreStuff = function(){
    console.log("More Stuff happening here!");
}
function wrapper( fileName, callback){
    fs.readFile(fileName, opts, function(err, data){

        if (err){
	    console.log("Some error occurred during opening");
    	throw err;
        }

        console.log("Loaded");
        var configData = JSON.parse(data);
    
        for( property in configData){
	    console.log(` ${property} : ${configData[property]}`);
      }
      callback();
    });
}

wrapper('config.txt', doMoreStuff);
