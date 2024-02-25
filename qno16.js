var people = ["Ahmed", "Sarah", "Farman", "Faisal"];
while (people.length > 2) {
    var removeGuest = people.pop();
    console.log("Sorry, ".concat(removeGuest, " you are no longer invited"));
}
people.forEach(function (people) {
    console.log("Dear ".concat(people, ", you're still invited to dinner"));
});
//  
console.log("remove ".concat(people.pop()));
console.log("remove ".concat(people.pop()));
console.log(people);
