var arr= [1, 1, 2, 3, 4, 2, 1]
var _ = require('lodash');
console.log(arr); 
var result=[];
var final=[];
var counts = {};
var co=_.countBy(arr);
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
console.log(result);
/*
findFirstMax = function(inputArr, n){
  out= _.filter(inputArr, function(a){
        if(a > n){
              return a;
             // break;
       }
    })
 return out;
 }
// findFirstMax([2,3,1], 2)

freq_copy = _.clone(result);
_.each(result, function(f, index){

   var nextEle = _.slice(freq_copy, index + 1)
   console.log('nE:', nextEle)
  maxFre = findFirstMax(nextEle, f);
console.log('maxFre:', maxFre)
console.log('index:', index)
})

_.each(arr,function(index){
  
})
for(var j=0;j<result.length;j++){
  var find= findFirstMax(result,result[j]);
  if(find){
    var rep=_.replace(arr[i],arr[i],);
  }
}
*/



var i,j;
var indexJ;
var flag=1;
for(i=0;i<result.length;i++){
  for(j=0;j<result.length;j++){
    
    if(result[i]<result[j]){

      if(flag===1){
      indexJ=i;
      var temp=result[j];
      result[j]=result[i];
      result[i]=temp;
      flag=0;
      console.log("flag");
      }else{
        j=indexJ;
        console.log("else flag");
      }
      //j=indexJ;
      final.push(arr[j]);
     //console.log("i",i,"j",j,"val",arr[j])
    // console.log("indexJvar",indexJ);
      break;
      console.log("index val",i,arr[i])
      console.log("index val",j,arr[j])
    }
    else if(result[i]!=result[j]){
      final.push(arr[j])
     // console.log("i",i,"j",j,"val",arr[j])
      break;
    }
    else{
      final.push(-1);
      //console.log("else i="+i)
      break;
    }
  }
  console.log("result array",result);
}
console.log(final);
