var message = 'Hello';
exports.sayHello = function(){
    console.log(message);
}

var hello = require('./hello');
hello.sayHello();
