// forEach, map, filter
const todos = [
    {
        id: 1,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 2,
        text: "Dentist appt",
        isCompleted: false
    }
]

todos.forEach(function(todo){
    console.log(todo.text);
});

//map - returns an array
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted ==  true;
});
console.log(todoCompleted);

const x = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('blue color');
        break;
}

const addNums = (num1, num2) => {
    return num1 + num2;
};
console.log(addNums(5,5));

const nums = () => {
    
}