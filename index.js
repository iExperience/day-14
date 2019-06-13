const someValue = process.env.SOME_CONFIG || "Default value";
// Set in the .env file 
/*
export DATABASE_URL=mysql://root:root@localhost:3306/day_14 &&
export NODE_ENV=test &&
export SOME_CONFIG=lol
*/

console.log(someValue);