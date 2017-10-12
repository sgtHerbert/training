
console.log(myJson);
var myJson = {'key':'value', 'key2':'value2'};
if(myJson.hasOwnProperty('key2')){
    myJson.key2 = 'value3';
}

console.log(myJson);