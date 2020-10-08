function evenNumbers(){
let evens = [];

for (let i=0; i <= 50; i++){
  if (i % 2 === 0){
   evens.push(i);
  }
 }
return evens;
};

evenNumbers();
