let guestarrs : string[] = ["Moiz","Usama","Slaman"];
let messages1 : string = "You are not  invited in Dinner";
console.log(guestarrs);
console.log(guestarrs[0], + "" +  messages1);


let deleteElements = guestarrs.splice(0,1,"Ahmed");


// ------------------------------------------------------qno15--------------------------------


console.log(`Dear ${guestarrs}, i found a bigger table`);
let newarr : string = "Moiz";
guestarrs.unshift(newarr);
console.log(guestarrs);

let deleteElementes = guestarrs.splice(2,1,"Ahad");
console.log(guestarrs);













