const _ = require('lodash');

const numbers = [33,46,76,44,32,3,5,6,7,8,'cake','banana','test again'];

_.each(numbers, function(number, i){
    console.log(number);

});