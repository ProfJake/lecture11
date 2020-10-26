/*allPromise.js
Jake Levy
Oct 2020
Demonstrates the use of the Promise.all method of the Promise class.
*/
var fs = require('fs');
var opts = {encoding:"utf8", flag: 'r'};

function wrapper( fileName){
    return new Promise( function( resolve, reject){
	fs.readFile(fileName, opts, function(err, data){
	    if (err){ return reject(err); }
	    resolve(data);
	});
    });
}

//same function as before but modified to process an array of config data
function noErr(data){
    console.log(`Loaded ${data}`); //the data comes back as comma separated data
    loaded = '[' + data + ']'; //this makes it into a legal JSON string
  
    let configData = JSON.parse(loaded);//parses the stringified array
   
    for( item  in configData){//item binds to index number in the array
	

	for( property in configData[item]){
	    console.log(` ${property} : ${configData[item][property]}`);
	}
    }
}


let allPromise = Promise.all([wrapper('config.txt'), wrapper('file2.txt')])
allPromise.then(noErr, console.error).catch(console.dir);
