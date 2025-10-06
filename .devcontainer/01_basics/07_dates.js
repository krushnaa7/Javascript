let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());//Mon Oct 06 2025 14:31:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Mon Oct 06 2025
console.log(myDate.toLocaleString()); //06/10/2025, 14:31:45
console.log(typeof myDate); //object 

let myCreatedDate = new Date (2023, 0, 23)
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023


let myCreatedDateTime = new Date (2023, 0, 23, 5, 3) 
console.log(myCreatedDateTime.toLocaleString()); //23/01/2023, 05:03:00 

let myCreatedDate1 = new Date ("2023-01-14") 
console.log(myCreatedDate1.toLocaleString()); //14/01/2023, 05:30:00

let myCreatedDate2 = new Date ("01-14-2023") 
console.log(myCreatedDate2.toLocaleString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now()); //o/p in mili sec

console.log(Math.floor(Date.now()/1000)); //o/p in  sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {weekday:"long"})


 