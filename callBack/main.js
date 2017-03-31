var fs = require("fs");

var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var branEventHandler = function(){
    console.log("Brag is the best guy says premaseem ");
}
eventEmitter.on("bragEvent",branEventHandler)

fs.readFile('input.txt', function (err, data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
    eventEmitter.emit("bragEvent");
});
console.log("Program Ended");