'options stricts';

// Just a regular function.
console.log('Just a regular function.')
var sum = function (a, b) {
    return a + b;
};
var x = sum(1, 2);
console.log(x);

// Input as array.
console.log('');
console.log('Input as array.');
var sum = function (numbers) {
    var result = 0;
    numbers.forEach(function(n) {
        result += n;
    });
    return result;
};
var x = sum([1, 2, 3, 4]);
console.log(x);

// Using set number of arguments.
console.log('');
console.log('Using set number of arguments.');
var sum = function () {
    return arguments[0] + arguments[1];
};
var x = sum(1, 2);
console.log(x);

// Using variable number of arguments.
console.log('');
console.log('Using variable number of arguments.');
var sum = function () {
    var result = 0;
    var i = 0;
    for (i; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
var x = sum(1, 2, 3, 4);
console.log(x);

// Apply examples.
console.log('');
console.log('Apply examples.');

var x = sum.apply(null, [1, 2, 3, 4]);
console.log(x);

var steve = {
    firstName: 'Steve',
    lastName: 'Ballmer',
    doThatThing: function (what) {
        console.log(this.firstName + ' ' + this.lastName
        + ': ' + what + '! ' + what + '! ' + what + '!');
    }
};
steve.doThatThing.apply(null, ['Developers']);
steve.doThatThing.apply(steve, ['Developers']);

var sander = {
    firstName: 'Sander',
    lastName: 'Rossel'
};
steve.doThatThing.apply(sander, ['Blogs']);

// Call examples.
console.log('');
console.log('Call examples.');
steve.doThatThing.call(null, 'Developers');
steve.doThatThing.call(steve, 'Developers');
steve.doThatThing.call(sander, 'Blogs');

var someFunc = function (callback) {
    console.log('this is ' + this);
    callback('This');
};
// What we want, but doesn't work.
console.log('');
console.log("What we want, but doesn't work.");
someFunc(steve.doThatThing);

// What works, but we don't want.
console.log('');
console.log("What works, but we don't want.");
someFunc(function (what) {
    steve.doThatThing(what);
});

// What works and is better than the alternatives.
console.log('');
console.log('What works and is better than the alternatives.');
var someFuncThis = function (callback, thisArg) {
    callback.call(thisArg, 'This');
};
someFuncThis(steve.doThatThing, steve);

// Perhaps the best, and in some cases only, alternative.
console.log('');
console.log('Perhaps the best, and in some cases only, alternative.');
someFunc(steve.doThatThing.bind(steve));
someFunc(steve.doThatThing.bind(sander));

var f = steve.doThatThing;
f = f.bind(steve);
someFunc(f);

// Will throw an Illegal invocation exception.
//someFunc(console.log);
// This works though!
someFunc(console.log.bind(console));