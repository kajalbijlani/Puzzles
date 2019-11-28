var _ = require('lodash');
var coin= [18, 20, 15, 30, 10, 14]
let response ={};
for(i=1 ; i<= 3 ; i++){
 response[`ply${i}`] =[];
}
console.log("Initial Coin Arrays ",coin)
var n=0;
do{
    n=n+1;
   
    for(i=0;i<coin.length;i++){
       
        console.log(coin.length)
        var fisrtCoin=_.head(coin);
        var lastCoin=_.last(coin);
        var findMax=Math.max(fisrtCoin,lastCoin)
        response[`ply${n}`].push(findMax);
        console.log("respose in",response)
        var indexMax=_.indexOf(coin,findMax )
        coin.splice(indexMax, 1);
        console.log("splice",coin);
} 
}while(n<3); 
 

console.log("respose",response)