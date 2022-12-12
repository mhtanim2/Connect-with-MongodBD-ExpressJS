const { client } = require("./connection");
async function run() {
    try {
        const database = client.db("insertDB");
        const list = database.collection("list");
      // Query for all movies with a title containing the string "Santa"
      let query = { Roll: "191002226" };
      const result = await list.deleteMany(query);
      console.log("Deleted " + result.deletedCount + " documents");
    } finally {
      console.log(`That is it`);
    }
  }
  run()