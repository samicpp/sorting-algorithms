let count=0;
function recurse(_c?:number) {
  return recurse(count++);
}

try{
  recurse(); // check maximum call stack
}catch(err){}
console.log(count);