// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var name3 = "Muhammad Anas";
console.log("toLowerCase ".concat(name3.toUpperCase()));
console.log("toUpperCase ".concat(name3.toLowerCase()));
function tittlname(name2) {
    var name;
    name = name2.toLowerCase().split("");
    for (var i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join("");
}
console.log("tittlename: ".concat(tittlname("Muhammad Anas")));
