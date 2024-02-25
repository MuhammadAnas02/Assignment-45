let people : string[] = ["Ahmed", "Sarah", "Farman","Faisal"];
while (people.length > 2) {
    const removeGuest = people.pop();
    console.log(`Sorry, ${removeGuest} you are no longer invited`);
}
people.forEach(people => {
    console.log(`Dear ${people}, you're still invited to dinner`);
});
//  

console.log(`remove ${people.pop()}`);
console.log(`remove ${people.pop()}`);
console.log(people);

