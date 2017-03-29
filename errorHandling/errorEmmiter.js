var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.emit('error1', new Error('something bad happened'));



emitter.on('error1', function(err) {
    console.log("abc"+err);
    //console.error('something went wrong with the ee:' + err.message);
});