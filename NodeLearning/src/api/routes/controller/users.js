const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  const user ={
    name: req.body.name,
    age: req.body.age
  }
  res.status(201).json({
    message: "Handling POST request of the /users",
    user:user
  });
});

router.patch("/:userID", (req, res, next) => {
  const id = req.params.userID;
  res.status(200).json({
    message: "User updated!"
  });
});

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET request of the /users"
  });
});

router.get("/:userID", (req, res, next) => {
  const id = req.params.userID;

  if (id === "admin") {
    res.status(200).json({
      message: "you are the admin!",
      id: id
    });
  } else {
    res.status(200).json({
      message: "you are a standard user",
      id: id
    });
  }
});

router.delete("/:userID", (req, res, next) => {
    const id = req.params.userID;
    res.status(200).json({
        message: "User Deleted"
      });
});

module.exports = router;
