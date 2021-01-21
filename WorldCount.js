var speach = "I am a boy";
var count = 0;
for(var i = 0;i<speach.length;i++){
    var char = speach[i];
    if(char == " " && speach[i-1] != " "){
        count++;

    }
}
count++;
console.log(count);