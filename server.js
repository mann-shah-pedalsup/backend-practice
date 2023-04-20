const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/model");
const { ObjectId } = require("mongodb");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://mannshah:mann.crud@crud.iss0z3l.mongodb.net/crud")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8080, () => {
      console.log("Port on 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => {
//   console.log("get api working");
//   res.send("Get API received");
// });

app.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/user", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params;
    const user = await User.findById(new ObjectId(id));
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.put("/user/:id", async (req, res) => {
  try {
    const id = req.params;
    const user = await User.findByIdAndUpdate(new ObjectId(id), req.body);
    const updatedUser = await User.findById(new ObjectId(id));
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params;
    const user = await User.findByIdAndDelete(new ObjectId(id));
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});
