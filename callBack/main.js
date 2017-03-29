var fs = require("fs");

//var data = fs.readFileSync('input.txt');

cb = function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
}

fs.readFile('input.txt', cb );

//console.log(data.toString());
console.log("Program Ended");