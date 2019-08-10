var fs = require('fs')
fs.readFile("temp.txt", function(err, data) {
    console.log(err)
    if(err) console.log(err)
    else console.log(data.toString())
});

console.log("hello ")