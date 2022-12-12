const { client } = require("./connection");

const run = async () => {
  try {
    const database = client.db("insertDB");
    const list = database.collection("list");
    // create a document to insert
    const data = {
      name: "Mr Null",
      Roll: "191002333",
      Dept: "CSE",
      city: "UAE",
    };
    list.insertOne(data,(e)=>{
      if (e) {
        console.log(e);
      } else {
        console.log(data+"inserted");
      }
    })
  } catch (e) {
    console.log(e);
  }
}
run();