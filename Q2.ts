// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name3 : string = "Muhammad Anas";
console.log(`toLowerCase ${name3.toUpperCase()}`);
console.log(`toUpperCase ${name3.toLowerCase()}`);

function tittlname(name2:string){
    let name;
    name = name2.toLowerCase().split("");
    for(let i =0;i <name.length;i++){
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join("");
}
console.log(`tittlename: ${tittlname("Muhammad Anas")}`);