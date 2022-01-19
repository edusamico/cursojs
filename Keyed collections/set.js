const myArray = [1, 2, 5, 15, 36, 5, 6, 7, 9];

function deleteDuplicate (array) {
    const mySet = new Set(array);

    //using rest
    return [...mySet];
}

console.log (deleteDuplicate(myArray));