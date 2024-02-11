
var num = [1,2,3,1,2,3,1,2,3,1,8,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]

// for(var i = 0; i <= num.length ; i++){
//     console.log(num[i])
// }
for( var i  in num ){
    console.log(num[i])
}
num.sort()
console.log(num.indexOf(4))