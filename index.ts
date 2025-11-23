let myname : string = "Binoj"
console.log(myname)

let myNumber: number[] = [1,312,313,12,15111]
console.log(myNumber)

let mixArray : (string | number)[] = ["binoj" , 12]
console.log(mixArray)

let arrOfArrays : number[][] = [[1,2,3],[4,5,6]]
console.log(arrOfArrays) 

let fixArray : [number,string] = [2,"binoj"]
console.log(fixArray);

type personCustom = {name: string, age: number}   //custom type

let person1 : personCustom = {name : "Binoj" , age : 23}

 function addNum(x:number , y:number) : number {
    return  x + y
 }

 console.log(addNum(2,3));

 function logMsg(message: string | number) : void {
    console.log(4);
 }

 let age= 23

console.log(age)    