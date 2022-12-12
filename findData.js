const { client } = require("./connection");
const findData=async()=> {
    const database = client.db("insertDB");
    const list = database.collection("list");
    const find = {
      name: "cake",
    };
    list.findOne(find, (e, res) => {
      if (e) {
        console.log(`Flailed`);
      } else {
        console.log(res);
      }
    });
  }
findData();