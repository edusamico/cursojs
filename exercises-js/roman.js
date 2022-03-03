// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 var romanToInt = function(s) {
    var arr = s.split('');
    var arrN = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "I") {
            arr[i] = 1;
            arrN.push(arr[i]);
            }
        if (arr[i] === "V") {
            arr[i] = 5;
            arrN.push(arr[i]);
        }
         if (arr[i] === "X") {
            arr[i] = 10;
            arrN.push(arr[i]);
        }
        if (arr[i] === "L") {
            arr[i] = 50;
            arrN.push(arr[i]);
        }
        if (arr[i] === "C") {
            arr[i] = 100;
            arrN.push(arr[i]);
        }
        if (arr[i] === "D") {
            arr[i] = 500;
            arrN.push(arr[i]);
        }
        if (arr[i] === "M") {
            arr[i] = 1000;
            arrN.push(arr[i]);
        }
    }
    
    var preResult = [];
    var result = 0;
    var lastN = arrN.length - 1;
    var penN = arrN.length - 2;
    
    for (let i = 0; i < arrN.length; i++) {
    var checkN = (arrN[lastN - i] > arrN[penN - i]);
        if (checkN) {
            let N = arrN[lastN - i] - arrN[penN - i];
            preResult.push(N);
            i++;
        } else {
            preResult.push(arrN[lastN - i]);
        }
    }    
    for (let i in preResult) {
        result += preResult[i];
    }

    console.log(result);
    return (result);
   
};

romanToInt("LVIII");