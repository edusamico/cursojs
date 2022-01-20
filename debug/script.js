function testError (array, number) {
    try { 
        if (!array && !number)
            throw new ReferenceError ("Envie os parâmetros");

        if (typeof array !== 'object')
            throw new TypeError ("Array precisa ser do tipo objeto");

        if (typeof number !== 'number')
            throw new TypeError ("o número precisa ser válido");

        if (array.length !== number)
            throw new RangeError ("O tamanho do array é " + array.length + " e deve ser igual ao número informado = " + number);

        console.log(`o array ${array} e seu tamanho ${number} passaram no teste`);
    } 
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Esse erro é um ReferenceError")
            console.log (e.message);
        } else if (e instanceof TypeError) {
            console.log("Esse erro é um TypeError")
            console.log (e.message);
        } else if (e instanceof RangeError) {
            console.log("Esse erro é um RangeError")
            console.log (e.message);
        } else {
            console.log (`Erro não identificado: ${e}`);
        }
    }
}
//change parameters to induce some error.
testError ([1,2,3], 3);