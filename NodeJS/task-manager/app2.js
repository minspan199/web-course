var fs = require('fs');
// import fs from 'fs'; //ES6


fs.writeFile('./hello.txt', 'How are you?', function(err){
    if(!err){
        fs.readFile('./hello.txt', function(err, data){
            if(!err){
                console.log(data.toString());
            }
        })
    }
});


