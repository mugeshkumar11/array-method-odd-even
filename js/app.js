// array of even number
var input =[1,2,3,4,5,6,7,8];

for(let i=0; i<input.length; i++){
  if(input[i]%2===0){
     console.log("its even number",input[i]);  
  }
 
}

//array of odd number


var input =[1,2,3,4,5,6,7,8];

for(let i=0; i<input.length; i++){
  
  if(input[i]%2!=0){
     console.log("its odd number",input[i]);  
  }
 
}

//array of odd number for  addition used

var input =[1,2,3,4,5,6,7,8];
var sum = 0;
var odd = 0;
for(let i=0; i<input.length; i++){
  sum+=input[i];
  
  if(input[i]%2!=0){
    odd+=input[i]
   
  }
 
}
console.log(odd);  


//array of even number for  addition used


var input =[1,2,3,4,5,6,7,8];
var sum = 0;
var even = 0;
for(let i=0; i<input.length; i++){
  sum+=input[i];
  
  if(input[i]%2===0){
    even+=input[i]
    
  }
 
}
console.log(even);  


