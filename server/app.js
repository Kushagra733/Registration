import "dotenv/config";
import express from "express";
import parser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import md5 from "md5";
import User from "./models/User.js";

const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

mongoose.connect(
  "mongodb+srv://kumi:kumi@cluster0.qze8u.mongodb.net/Registration?retryWrites=true&w=majority",
  (err) => {
    if (err) console.log(err);
    else console.log("connected");
  }
);
app.post("/signup", (req, res) => {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var number = req.body.number;
  var email = req.body.email;
  var password = req.body.password;
  var confirmpass = req.body.confirmpass;

  var newuser = new User({
    firstname: firstname,
    lastname: lastname,
    number: number,
    email: email,
    password: md5(password),
  });

  if (confirmpass === password) {
    newuser.save((err) => {
      if (err) res.send("error");
      else res.send("posted!");
    });
  } else res.send("error");
});

app.post("/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email }, (err, doc) => {
    if (err) res.send("login failed");
    else {
      if (md5(password) === doc.password) {
        var token = jwt.sign(doc._id.toString(), process.env.SECRETKEY);
        res.send("your token is " + token);
      } else res.send("invalid credentials");
    }
  });
});

app.listen(5000, () => {
  console.log("listening on port 5000!");
});
