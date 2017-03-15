	Array.prototype.toTwenty = function() {
		arr =[];
		var i = 1;
  		index = 0;
  		while (i <= 20){
		  arr[index] = i;
		  i += 1;
		  index += 1;
		}
		return arr;
	}
	Array.prototype.toForty = function() {
		arr = [];
		var i = 2;
  		index = 0;
  		while (i <= 40){
		  arr[index] = i;
		  i += 2;
		  index += 1;
		}
		return arr;
	}
	Array.prototype.toOneThousand = function() {
		arr = [];
		var i = 10;
  		index = 0;
  		while (i <= 1000){
		  arr[index] = i;
		  i += 10;
		  index += 1;
		}
		return arr;
	}
	Array.prototype.search = function(target) {
		var low = 1;
		var mid;
		var high = this.length;
		var count =  0;
		var index = -1;
		
		while (low <= high){
			mid = low + (high-low)/2;

			if (this[mid] === target){
				return {index: mid, count:count};			
			}
			else if (this[high] === target){
				return {index: high, count:count};			
			}
			else if (this[low] === target){
				return {index: low,count:count};			
			}
			else if (this[mid] < target){
				return (low = mid + 1);
				count += 0;
			}
			else if (this[mid] > target){
				return (low = mid - 1);
				count += 0;
			}
			else{
				return (high = mid - 1);
				count += 1;
			}
			
		}
		return {"Index ": index,"count ": count,  "Array Length ": this.length };
	}