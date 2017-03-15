	Array.prototype.toTwenty = function() {
		arr =[];
		var i = 1;
  		index = 0;
  		while (i<=20){
		  arr[index]=i;
		  i+=1;
		  index+=1;
		}
		return arr;
	}
	Array.prototype.toForty = function() {
		arr =[];
		var i = 2;
  		index = 0;
  		while (i<=40){
		  arr[index]=i;
		  i+=2;
		  index+=1;
		}
		return arr;
	}
	Array.prototype.toOneThousand = function() {
		arr =[];
		var i = 10;
  		index = 0;
  		while (i<=1000){
		  arr[index]=i;
		  i+=10;
		  index+=1;
		}
		return arr;
	}
	Array.prototype.search = function(target) {
		var low = 1;
		var mid;
		var high;
		var count =  0;
		var index = 0; 
		high = this.length;
		while (low <= high){
			var mid = low + (high-low)/2;
			if (this[mid] === target){
				return mid;
				index = this[target];
			}
			else if (this[mid] < target){
				return (low = mid +1);
				index = this[target];
			}
			else{
				return (high = mid +1);
				index = this[target];

			}
			count++; 
			
		}
		return ("count :" + count + "Index :" + index + "Array Length :" + this.length );
	}