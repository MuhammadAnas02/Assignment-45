var user = ["admin", "Anas", "Qasim", "shoail"];
for (var _i = 0, user_1 = user; _i < user_1.length; _i++) {
    var users = user_1[_i];
    if (users === "admin") {
        console.log("Hello admin , would you like to see a status report");
    }
    else {
        console.log("Hello ".concat(users, ", Eric, thank you for logging in again."));
    }
}
