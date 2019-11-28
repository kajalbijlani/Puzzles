/*var _ = require('lodash');
var coin= [18, 20, 15, 30, 10, 14]
var ply1=[];
var ply2=[];
var flag=1;
arrLen=coin.length;
console.log("Initial Coin Arrays ",coin)
for(i=0;i<arrLen;i++){
    var fisrtCoin=_.head(coin);
    var lastCoin=_.last(coin);
    var findMax=Math.max(fisrtCoin,lastCoin)
   
    if(flag === 1){
        ply1.push(findMax);
       var indexMax=_.indexOf(coin,findMax )
       coin.splice(indexMax, 1);
        flag=0;
    }else{
        ply2.push(findMax);
        var indexMax=_.indexOf(coin,findMax )
        coin.splice(indexMax, 1);
        //console.log("remove pl2",coin)
       flag=1
    }
}

var sumPly1=    
var sumPly2=_.sum(ply2);
var maxCoin=Math.max(sumPly1,sumPly2)

console.log("player 1",ply1)
console.log("player 2",ply2)
console.log("max coin sum",maxCoin)

if(maxCoin === sumPly1){
    console.log("so player 1 is Wins")
}else{
    console.log("so player 2 is Wins")
}
  */
var _ = require('lodash');
var coin = [18, 20, 15, 30, 10, 14]
let response = {};
for (i = 1; i <= 3; i++) {
    response[`ply${i}`] = [];
}
console.log("Initial 2Coin Arrays ", coin)
var n = 0;
do {
    for (i = 0; i < coin.length; i++) {
        n = n + 1;
        console.log("n for->", n);
        console.log("starting n", n);
        //console.log("c len",coin.length)
        var fisrtCoin = _.head(coin);
        var lastCoin = _.last(coin);
        var findMax = Math.max(fisrtCoin, lastCoin)
        response[`ply${n}`].push(findMax);
        //console.log("after push",n);
        console.log("respose in", response)
        var indexMax = _.indexOf(coin, findMax)
        coin.splice(indexMax, 1);
        console.log("n value->", n);
        console.log("coin array len", coin.length)
       
    }
    n = 0;
} while (n < 3)
console.log("respose", response)