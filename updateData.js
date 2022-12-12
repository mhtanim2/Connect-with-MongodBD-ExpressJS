const { client } = require("./connection");
let updateIndex = async () => {
  const database = client.db("insertDB");
  const list = database.collection("list");

  let myQuery = { Roll: "191002891" };
  let myUpdate = {
    $set: {
      name: "Mehrab Hasan Tanim",
      Dept: "Computer Science",
    },
  };
  list.updateOne(myQuery, myUpdate, (e, r) => {
    if (e) {
      console.log(e);
    } else {
      console.log(r);
    }
  });
};
updateIndex();
