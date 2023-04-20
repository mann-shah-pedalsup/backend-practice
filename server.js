const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://mannshah:mann.crud@crud.iss0z3l.mongodb.net/jwt")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8080, () => {
      console.log("Port on 8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });
