/**
 * @param {string} s
 * @return {boolean}
 */
// Example 1:
// s = "()";
// Output: true

// Example 2:
// s = "()[]{}";
// Output: true

// Example 3:
s = ")))";
// Output: false


function isValid (s) {
    // console.log("ELEMENTO S"); 
    // console.log(s);
    var arr = [];
    for (let i = 0; i < s.length; i++) {
        var last = arr[arr.length - 1];

        if (
            s[i] === "(" || 
            s[i] === "[" || 
            s[i] === "{"
        ) {
            arr.push(s[i]);
            console.log("array depois do PUSH");
            console.log(arr);
        } else if (
            (last === "(" && s[i] === ")") || 
            (last === "[" && s[i] === "]") || 
            (last === "{" && s[i] === "}")
        ) {
            arr.pop();
            console.log("array depois do POP");
            console.log(arr);
        } else return false;
    }
    var result = arr.length ? false : true;
    return result;
 };

 var play = isValid(s);
 console.log("resultado: ");
 console.log(play);