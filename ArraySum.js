// var numbers = [30,40,55,44,99];
// var sum = 0;
// for(var i = 0; i<numbers.length;i++){
//     var element = sum + numbers[i];
// }
// console.log(element);

function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i<numbers.length;i++){
        var element = sum + numbers[i];
    }
    return element;

}

var numbers = [30,40,55,44,99];
var result = getArraySum(numbers);
console.log(result);