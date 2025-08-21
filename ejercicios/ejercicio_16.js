const sumarTodo = (...nums) => nums.reduce((a,b) => a+b, 0);
console.log("Suma total:", sumarTodo(1,2,3,4));