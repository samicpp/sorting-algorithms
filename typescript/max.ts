let count=0;
function recurse(_c?:number) {
  return recurse(count++);
}

try{
  recurse(); // check maximum call stack
}catch(_err){
  // nothing here
};
console.log(`max call stack = ${count}`);