const { client } = require("./connection");
let updateIndex = async () => {
    const database = client.db("insertDB");
    const list = database.collection("list");
  
    let myQuery = {};
    let myUpdate = {
      $set: {
        age:"24"
      },
    };
    list.updateMany(myQuery, myUpdate, (e, r) => {
      if (e) {
        console.log(e);
      } else {
        console.log(r);
      }
    });
  };
  updateIndex();
  