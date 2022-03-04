/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var strPref = "";
    
    if (strs.length === 0 || strs[0] === "") return strPref;
    if ( strs.length === 1) {
        strPref = strs[0];
        return strPref;
    }
    for (let i = 0; i <= strs[0].length - 1; i++){
        let letter = strs[0][i];
        for (let j in strs){
            if (strs[j][i] !== letter) {
                return strPref;
                } 
        }

        strPref+= letter;      
        if (strPref === strs[0]) {
            return strPref;
        }
    }
    
  ;
};

var strs = ["flower","flower","flower","flower"]
// var strs = [""]
// var strs = ["a"]
// var strs = ["flower","flow","flight"];
var play = longestCommonPrefix(strs);
console.log(play);