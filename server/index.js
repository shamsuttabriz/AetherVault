const express = require("express");
require("dotenv").config({ quiet: true });
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hellllllkfjdklfjo from server!");
});

app.listen(PORT, () => {
  console.log(`Server running at port - ${PORT}`);
});
