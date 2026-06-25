import dotenv from "dotenv";
dotenv.config();

// console.log("file form .env", process.env.Mongo_Atlas_Url);
const Mongo_Url = process.env.Mongo_Atlas_Url;
const Port = process.env.Port || 8080;

// packages
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// importing files
import Listings from "./src/models/listings.js";
import User from "./src/models/users.js";
import Review from "./src/models/reviews.js";

const app = express();
app.use(
  cors({ origin: "https://wander-lust-frontend-fawn.vercel.app/" }),
);

// mongo and port connection
const connection = async () => {
  app.listen(Port, () => {
    console.log("connected to port");
  });

  await mongoose.connect(Mongo_Url);
};

connection()
  .then(() => {
    console.log("all setup done");
  })
  .catch((err) => {
    console.log("database connection is failed");
  });

// middleware
app.use(express.json());

// get routes
app.get("/", async (req, res) => {
  const data = await Listings.find({});
  res.json(data);
});

app.get("/signup", (req, res) => {
  console.log(req.body.user, "is saved");
  res.send("you are at the signup page.");
});

app.get("/newListing", (req, res) => {
  res.send("now you are at the new Listing page");
});

app.get("/login", (req, res) => {
  console.log(req.params);
});

app.get("/show/:id", async (req, res) => {
  try {
    // console.log("start show page");
    const id = req.params.id;
    // console.log(id);

    const listing = await Listings.findById(id);

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    return res
      .status(202)
      .json({ success: true, message: "Listing is shown", listing: listing });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "something went wrong in show/id route",
    });
  }
});

// post routes

app.post("/login", async (req, res) => {
  try {
    console.log(req.body.email);

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      console.log("user not found");
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("user found");

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    console.log("pass matched");

    if (!isMatch) {
      console.log("password is not matched");
      return res.send(`Incorrect password for the user: ${user.username}`);
    }
    console.log("login successfully");
    return res.status(201).json({
      success: true,
      username: user.username,
      message: "Login successful",
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: `Login failed: ${err}`,
    });
  }
});

app.post("/signup", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json({
    success: true,
    message: "Signup successful",
  });
});

app.post("/newListing", async (req, res) => {
  console.log(req.body);
  res.send("new listing data is found");
});

// put routes

app.put("/show/:id/edit", async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.params.id);
    const id = req.params.id;
    const data = req.body;
    const listing = await Listings.findById(id);

    if (!listing) {
      return res
        .status(404)
        .json({ success: false, message: "Listing Not Found" });
    }

    listing.title = data.title;
    listing.description = data.description;
    listing.price = data.price;
    listing.country = data.country;
    listing.location = data.location;

    await listing.save();

    return res
      .status(202)
      .json({ success: true, message: "listing edited successfully" });
  } catch (err) {
    return res
      .status(404)
      .json({ success: false, message: "listing edition is failed" });
  }
});
