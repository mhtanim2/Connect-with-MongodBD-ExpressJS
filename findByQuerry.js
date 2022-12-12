const { client } = require("./connection");
const findDataAll=async()=> {
    const database = client.db("insertDB");
    const list = database.collection("list");
    let query={name:"Mr Stocks",Roll:"191002226"}
    list.find(query).toArray((e, res) => {
      if (e) {
        console.log(`Failed`);
      } else {
        console.log(res);
      }
    });
  }
findDataAll();