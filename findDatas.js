const { client } = require("./connection");
const findData=async()=> {
    const database = client.db("insertDB");
    const list = database.collection("list");
    /* let itemObj = {};
    let itemProjection = { projection: { name: "", Roll: "" } }; */
    list.find().toArray((e, res) => {
      if (e) {
        console.log(`Failed`);
      } else {
        console.log(res);
      }
    });
  }
findData();