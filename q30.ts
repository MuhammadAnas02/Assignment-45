let user : string[] = ["admin","Anas","Qasim","shoail"];

for(let users of user) {
    if (users === "admin") {
        console.log("Hello admin , would you like to see a status report");
    }else{
        console.log(`Hello ${users}, Eric, thank you for logging in again.`);
    }
}