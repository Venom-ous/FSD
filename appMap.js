let student = [
    {
        name: "pawan",
        marks: 0
    },
    {
        name: "shweta",
        marks: 100
    },
    {
        name: "raman",
        marks: 90
    }
]

let Arr = [1, 2, 3, 44, 5, 6, 7, 9, 19, 24, 45, 32, 8];

let object = student.map((el) => {
    return el.marks/10;
});

let filter = Arr.filter((el) => {
    return el < 10;
});