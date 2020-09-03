//ARRAY FLATTEN
// flatten a given array,
//eliminating nested and empty arrays.
// do not alter it
//return a new array//keeps the order
// ex: [2,"hello",[2,5,true],[4,[]],7,"five"]
// -=> [2, "hello", 2, 5, true, 4, 7, "five"]

// function arrayFlatten(arr){
//   flatarr = [];

//   for(i=0; i<arr.length; i++){
//     if(!Array.isArray(arr[i])){
//       flatarr.push(arr[i]);
//     }
//     else{
//       let temp = arrayFlatten(arr[i]);
//       for (x=0; x<temp.length; x++){
//         flatarr.push(temp[x]);
//       }
//     }
//   }
//   console.log(flatarr);
//   return flatarr;
// }


function flatten(arr){
  var newArr = [];
  for(var i=0; i<arr.length; i++){
    if(!Array.isArray(arr[i])){
      newArr.push(arr[i]);
    }
    else{
      let flat = flatten(arr[i]);
      for(j=0; j<flat.length; j++){
        newArr.push(flat[j]);
      }
    }
  }
  console.log(newArr);
  return newArr;
}

flatten([1,2,1,[3,[],4,5,"hi",[22,2,22]]]);