let myArray = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6]

function count (arr1) {
    let resultforEach = {};

    if (Array.isArray(arr1)){
        
        if (isNaN(arr1)){
            
 
                myArray.forEach(ele => {
                     if (resultforEach[ele]) {
                         resultforEach[ele] += 1;
                        } else {
                            resultforEach[ele] = 1;
                            }
                      });
            
        } else{
            return "your array is not a number"
            };
    } else {
        return "your input is not an array"
    };

    return resultforEach;
}
console.log(count(myArray))