var _ = require('lodash');
var arr= [1, 1, 1, 2, 2, 2, 2, 11, 3, 3]
var result=[];
var final=[];
var counts = {};
console.log("Input Array",arr)
//var co=_.countBy(arr);
    for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    _.forEach(arr,function(value) {
    //var obj ={};
    //obj[value]=counts[value];
    var c =counts[value];
    result.push(c);
    
    });
    console.log("Frequency Of Array",result)

    findFirstMax = function(inputArr, n){
        out= _.filter(inputArr, function(a){
            if(a > n){
                    return a;
            }
        })     
    return out;
    }

  freq_copy = _.clone(result);
  
    _.each(result, function(f, index){
    var nextEle = _.slice(freq_copy, index + 1)
    // console.log('nE:', nextEle)
    //console.log('arr',arr) 
    maxFre = findFirstMax(nextEle, f);
    //console.log('maxFre:', maxFre)
    if(!maxFre || !maxFre.length){
        final.push(-1);
    }else{
        let resultIndex = _.first(maxFre);
        i=_.indexOf(result, resultIndex);
        //console.log("resultindex",resultIndex)
        //console.log("i",i)
        final.push(arr[i]);
    }
})

console.log("Final Result Array",final);

