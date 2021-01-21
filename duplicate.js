var names  = [2,2,4,7,5,4,7,0,9];
var duplicate = [];
for(var i =0; i < names.length;i++){
    var element = names[i];
    var index = duplicate.indexOf(element);
    if(index == -1){
        duplicate.push(element);
    }
}
console.log(duplicate);

// function add(a, b){

//     return a + b;

// }

// console.log(add("adam" + "eve"))