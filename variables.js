const accountId = "Hiren";
var accountEmail = "hien@gamil.com";
let accountPassword = "12345";
accountCity = "Ahmedabad";

/*
Prefer Not to use var
because of issues in block scope and functional scope
*/

accountEmail = "hiren123@gmail.com";
accountPassword = "67890";
accountCity = "Gandhinagar";

console.table([accountId, accountEmail, accountPassword, accountCity]);
