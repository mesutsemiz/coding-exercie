let numbers=[1,6,52,34,7,8,9,26,24,3]

function filter (numbers){
  let results=[];
  
  for(number of numbers){
    if(number%2==1){
      results.push(number)
    }
  }
  return results
    
}

console.log(filter(numbers))