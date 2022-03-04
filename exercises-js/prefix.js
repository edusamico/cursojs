/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var strPref = "";

    for (let i = 0; i <= strs[0].length - 1; i++){
        let letter = strs[0][i];
        for (let j in strs){
            if (strs[j][i] !== letter) {
                return strPref;
            } 
        }
        strPref+= letter;      
    }
    return strPref;
};

var strs = ["", "a","a"]
// var strs = ["flower","flower","flower","flower"]
// var strs = ["a"];
// var strs = [""]

// var strs = ["flower","flow","flight"];
var play = longestCommonPrefix(strs);
console.log(play);