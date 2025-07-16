const express = require("express");
require("dotenv").config({ quiet: true });
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const database = client.db('artifactsdb');
    const artifactsCollection = database.collection("artifacts");

    app.get('/artifacts', async (req, res) => {
      const allArtifacts = await artifactsCollection.find().toArray();
      res.send(allArtifacts);
    })

    // save a artifact data in database through post request
    app.post('/add-artifact', async (req, res) => {
      const artifactData = req?.body;
      const result = await artifactsCollection.insertOne(artifactData);
      console.log("This is result: ", result);
      res.status(201).send({...result, message: "Data Paichi vai, Thanks"});
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to Artifacts World!");
});

app.listen(PORT, () => {
  console.log(`Server running at port - ${PORT}`);
});
