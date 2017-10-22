module.exports.myCounter = function(arr){
    return'There are ' + arr.length + ' elements here.'
}

module.exports.myAdder = function(a, b){
    return 'Sum of ' +a+ ' and ' +b+ ' is: ' +(a+b)
}

module.exports.pi = 3.142;


/*
with variables eg. (var myCOunter = function(){})
module.exports = {
    myCounter: myCounter,
    myAdder: myAdder,
    pi: pi
}
*/