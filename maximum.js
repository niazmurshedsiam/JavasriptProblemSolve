var marks = [20,30,69,90,78];
var max = marks[0];
for(var i = 0; i<marks.length;i++){
    var element = marks[i];
    if(element>max){
        max = element;

    }
}
console.log("Maximum value is = ",max);