// let people : string[] = ["Amin", "Hamza","Usama","Admin"];
// if(people.length === 0) {
//     console.log("We need to find some users");
// }
// else {
//     for(let peoples of people) {
//         if( peoples ==="admin") {
//             console.log("Hello admin would you like to see a status report")
//         }else{
//             console.log(`we ${peoples}, need some more users`);
//         }
//     }
// }
// people = [];
// if(people.length === 0) {
//     console.log ("we need some users");
// }
//32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let datas : string[] = ["Alia", "Bilal","Ahmed","Shezad"];
// let new_datas : string[] = ["alia","kazim","yasir","Noman"];
// for(let new_data of new_datas){
//     let isAvailable = true;
//     for(let data of datas){
//         if(new_data.toLowerCase() === data.toLowerCase()) {
//             console.log(`Username "${new_data}"is already taken. please choose a different username`);
//             isAvailable = false;
//         }
//     }
//     if (isAvailable){
//         console.log(`Username "${new_data}"is available`)
//     }
// }
//33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let num : number[] = [1,2,3,4,5,6,7,8,9];
// for(let i=0 ; i< num.length; i++){
//     let suffix: string;
//     if(num[i] === 1){
//         suffix = "st";
//     }else if(num[i] === 2){
//         suffix = "nd";
//     }else if(num[i] === 3){
//         suffix = "rd";
//     }else if(num[i] === 4){
//         suffix = "rth";
//     }else if(num[i] === 5){
//         suffix = "th";
//     }else if(num[i] === 6){
//         suffix = "th";
//     }else if(num[i] === 7){
//         suffix = "th";
//     }else if(num[i] === 8){
//         suffix = "th";
//     }else{
//         suffix = "th";
//     }
//     console.log(`${num[i]},${suffix}`);
// }
//q34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let favoritePizzas: string[] = ['cheeze', 'BBQ', 'fajita'];
// for (let pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }
// console.log("I really love pizza!");
//35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let pets :string[] = ["Dog","Cat","Parrots","Fish"]
// for(let pet of pets){
//     console.log(`A ${pet} would make a great pet.`);
// }
// console.log("Any of these make a good pets");
//-------------36----------------
// function make_shirts(size: string , message:string): void {
//     console.log(`The sirt size is ${size}, and the message is "${message}"`)
// }
// make_shirts('Small','Thankyou');
// //  --------------------37-----
function make_shirt_default(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and the message is \"").concat(message, "\"."));
}
make_shirt_default();
make_shirt_default('Medium');
make_shirt_default('Small', 'Different message');
