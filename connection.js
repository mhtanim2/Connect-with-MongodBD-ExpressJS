const { MongoClient } = require("mongodb");
require("dotenv").config();
const client = new MongoClient(process.env.connect_atlas);
console.log("connect");
module.exports= { client };

