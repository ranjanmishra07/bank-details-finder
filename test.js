const program = require('commander');
const inquirer=require('inquirer');
const yargs=require('yargs');
var carDetails=[
    {number:"KA-01-HH-1234",color:"White"},
    {number:"KA-01-HH-9999",color:"White"},
    {number:"KA-01-BB-0001",color:"Black"},
    {number:"KA-01-HH-7777",color:"Red"},
    {number:"KA-01-HH-2701",color:"Blue"},
    {number:"KA-01-HH-3141",color:"Black"}

]

console.log("slots created by user")
var slots = [];
let input=6;   //slots entered by user
for (var i=0; i < input; i++) {
    var newElement = {};
    newElement['slot'] = i+1;
    for(let j=0;j<i+1;j++){
      newElement['number'] = carDetails[j].number;
      newElement['color'] = carDetails[j].color;
      // console.log(carDetails[j])
    }
    
    slots.push(newElement);
    console.log("Allocated slot number :"+slots[i].slot+" for car number:"+slots[i].number +" car color: "+slots[i].color)
    // console.log("Allocated parking for number:"+slots[i].number);
}


// for removing particular slot
console.log("removing 4th slot")
slots.splice(3,1);
console.log("status ")
console.log(slots);

var newElement1={}
newElement1['slot']=4;
newElement1['number']=carDetails[3].number;
newElement1['color']=carDetails[3].color;
slots.splice(3,0,newElement1)
console.log("Allocated  slot number :"+slots[3].slot+" for car number:"+slots[3].number +" car color: "+slots[3].color)

// console.log(slots);

console.log("finding slot number for white cars ")

var arrFoundColor = slots.filter(function(item) {
  return item.color == 'White';
});

console.log(arrFoundColor);

console.log("found slot number for particular car number/reg-no");

var arrFoundReg=slots.filter(function(item){
  return item.number=="KA-01-HH-3141"
})
console.log(arrFoundReg)

