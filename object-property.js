const students = [
    {id: 20, name: 'Tom'},
    {id:30, name: 'John'},
    {id:40, name: 'Mosh'},
    {id:50, name: 'Josh'}

];


const names = students.map(s => s.name)
const ids = students.map(s => s.id)

const bigger = students.filter(s => s.id > 25);
console.log(bigger);
console.log(ids);
console.log(names);


