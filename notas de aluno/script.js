const students = [
    {name: 'du', average: 7},
    {name: 'dudu', average: 3}, 
    {name: 'edu', average: 9},
];

function ok (students, averageOk) {
    var studentsOk = [];
    for (let i = 0; i < students.length; i++){
        //object destructuring
        const {average, name} = students[i];
        
        if (average >= averageOk){
            studentsOk.push(name);
        }
    }
    return studentsOk;
}

console.log (ok(students, 7))
