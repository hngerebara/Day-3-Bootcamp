findMissing = function (arr1, arr2) {
 if (arr1.length === 0 && arr2.length === 0 || arr1.length === arr2.length){
      return 0;
 }
 if(arr2.length > arr1.length){
    
    var difference = arr2.filter(function(val){
      return arr1.indexOf(val) === -1});
      return difference[0];
  }
  else 
  return "wrong"
    }

    
