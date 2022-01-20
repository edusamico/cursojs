function getWeather(){
    return new Promise(function(resolve, reject){
        console.log ("Oh, oh-oh-oh...");

        setTimeout(function (){
            resolve ("tá lindo, clima ensolarado");
        }, 2000)
    });
}

//using promise
let myPromise = getWeather();
console.log("1")
myPromise.then(function(result){
    console.log("O dia: " + result)
});
console.log("2")
myPromise.catch(function(error){
    console.log("Nem arrastando pra cima, nem arrastando pro lado")
});
console.log("3")