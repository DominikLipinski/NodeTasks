var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var jon = new Person('jon');
var stannis = new Person('stannis');
var ramsay = new Person('ramsay');

var team = [jon, stannis, ramsay];

team.forEach(function(Person) {
    Person.on('speak', function(msg) {
        console.log(Person.name + ' said: ' + msg);
    });
});

jon.emit('speak', 'I know nothing');
stannis.emit('speak', 'Time to attack');
ramsay.emit('speak', 'Let dogs out');




/*
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg) {
    console.log(msg);
});
myEmitter.emit('someEvent', 'surely event was emmitted here!');
*/