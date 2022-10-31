const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleweare

app.use(cors());
app.use(express.json());

// async await
//mwIQfkkBw41c9IrW
//dbuser2

const uri =
  "mongodb+srv://dbuser2:mwIQfkkBw41c9IrW@cluster0.tejyxsb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    const userCollection = client.db("modeMongoCrud").collection("users");
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
  } finally {
  }
}
run().catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("hello from node mongo crud server");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
