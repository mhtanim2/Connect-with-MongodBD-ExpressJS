const { client } = require("./connection");
const {data,docs}=require("./files")

const run = async () => {
  try {
    const database = client.db("insertDB");
    const list = database.collection("list");
    // create a document to insert
    
    const options = { ordered: true };
    const result = await list.insertMany(data, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);