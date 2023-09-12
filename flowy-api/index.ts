const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
app.use(express.json());

const port = 3302;

var cors = require("cors");

app.use(cors({ origin: "*" }));
const authRouter = require("./routes/auth");

mongoose.connect(
  "mongodb+srv://baranoden:123asddasd@cluster0.daney0d.mongodb.net/flowy?retryWrites=true&w=majority"
);
app.use("/api/auth", authRouter);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
