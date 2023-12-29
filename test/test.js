const myDB = require("../db/db");

myDB.create("User 1", 10);
myDB.create("User 2", 10);
myDB.create("User 3", 10);
myDB.create("User 4", 10);
myDB.create("User 5", 10);
myDB.create("User 6", 10);
myDB.create("User 7", 10);
myDB.create("User 8", 10);
myDB.create("User 9", 10);
myDB.create("User 10", 10);
const bulk = myDB.bulkCreate("User 11", 10, 3);
console.log("bulk ticket for single user", bulk);
const tickets = myDB.find();
console.log("All Tickets", tickets);
const winners = myDB.draw(3);
console.log("Raffle draw winners", winners);

// module.exports = myDB;
