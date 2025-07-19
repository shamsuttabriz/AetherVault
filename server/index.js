const express = require("express");
require("dotenv").config({ quiet: true });
const cors = require("cors");
const cookieParser = require("cookie-parser");
var admin = require("firebase-admin");
const decoded = Buffer.from(process.env.FB_SERVICE_KEY, "base64").toString(
  "utf-8"
);
var serviceAccount = JSON.parse(decoded);
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const PORT = process.env.PORT || 3000;
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(
  cors({
    origin: ["http://localhost:5173", "https://aethervault-136c0.web.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// JWT Middleware
const verifyToken = async (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  // console.log("Take Token: ", token);

  if(!token) return res.status(401).send({message: "Unauthorized Access!"});

  // verify token using firebase admin sdk
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.tokenEmail = decoded.email;
    // console.log(decoded)
    next();
  }
  catch (err) {
    console.log(err)
    return res.status(401).send({ message: "Unauthorized Access!" });
  }
}

async function run() {
  try {
    const database = client.db("artifactsdb");
    const artifactsCollection = database.collection("artifacts");
    const likesCollection = database.collection("likes");

    app.get("/artifacts", async (req, res) => {
      const allArtifacts = await artifactsCollection.find().toArray();
      res.send(allArtifacts);
    });

    app.get("/artifact-detail/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const artifact = await artifactsCollection.findOne(filter);
      // console.log(artifact);
      res.send(artifact);
    });

    // save a artifact data in database through post request
    app.post("/add-artifact", async (req, res) => {
      const artifactData = req?.body;
      const result = await artifactsCollection.insertOne(artifactData);
      // console.log("This is result: ", result);
      res.status(201).send({ ...result, message: "Data Paichi vai, Thanks" });
    });

    // Get artifact by individual user
    app.get("/my-artifacts/:email", verifyToken, async (req, res) => {
      const decodedToken = req.tokenEmail;
      const email = req.params.email;

      if(decodedToken !== email) {
        return res.status(403).send({message: "Forbidden Access!"});
      }

      const filter = { email };
      const myArtifacts = await artifactsCollection.find(filter).toArray();
      // console.log(myArtifacts);
      res.send(myArtifacts);
    });

    app.get("/artifacs");

    // saved a updated artifact in database through the put request
    app.put("/updated-artifact/:id", async (req, res) => {
      const id = req.params.id;
      // console.log("amar id: ", id);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const { _id, ...updatedArtifact } = req.body;

      const updateDoc = {
        $set: updatedArtifact,
      };

      const result = await artifactsCollection.updateOne(
        filter,
        updateDoc,
        options
      );

      // console.log(result);

      res.send(result);
    });

    // handle like toggle
    app.patch("/like/:artifactId", async (req, res) => {
      const id = req.params.artifactId;
      const email = req.body.email;
      // console.log(email);
      const filter = { _id: new ObjectId(id) };
      const artifact = await artifactsCollection.findOne(filter);
      // console.log(artifact);
      // check if the user has already liked the artifact or not;
      const alreadyLiked = artifact?.likedBy?.includes(email);
      // console.log(alreadyLiked);
      const updateDoc = alreadyLiked
        ? {
            $pull: {
              // dislike artifact (pop email from likeBy array)
              likedBy: email,
            },
          }
        : {
            $addToSet: {
              // Like artifact (push email in likeBy array)
              likedBy: email,
            },
          };
      await artifactsCollection.updateOne(filter, updateDoc);
      res.send({
        message: alreadyLiked ? "Dislike Successfull" : "Like Successful",
        liked: !alreadyLiked,
      });
    });

    // Delete a single artifact from my artifacts
    app.delete("/my-artifacts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await artifactsCollection.deleteOne(query);
      // console.log(result);
      res.send(result);
    });

    // User email and artifact ID are inserted when I click the like button
    app.post("/like", async (req, res) => {
      const { artifactdId, userEmail } = req.body;

      // check if already liked
      const alreadyLiked = await likesCollection.findOne({
        artifactId: new ObjectId(artifactdId),
        userEmail,
      });

      if (alreadyLiked) {
        return res.status(400).send({ message: "Already Liked" });
      }

      const result = await likesCollection.insertOne({
        artifactId: new ObjectId(artifactdId),
        userEmail,
      });

      // console.log("Artifact Id & User email: ", result);

      res.send(result);
    });

    // Retrieve all liked artifacts of a specific user
    app.get("/liked-artifacts/:email", async (req, res) => {
      const userEmail = req.params.email;
      // find all artifacts that mathch those ids
      const likedArtifacts = await artifactsCollection
        .find({ likedBy: userEmail })
        .toArray();
      // console.log("Liked Collections: ", likedArtifacts);
      res.send(likedArtifacts);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
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
