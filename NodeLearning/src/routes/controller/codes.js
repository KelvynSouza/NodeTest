const express = require("express");
const router = express.Router();
const code_db = require('../../db/repository/code_repository')
router.post("/", (req, res, next) => {
  const code ={
    langauge: req.body.lang,
    data: req.body.data
  }
code_db.add(code.langauge);

  res.status(201).json({
    message: "Handling POST request of the /codes",
    code:code
  });
});

router.patch("/:codeID", (req, res, next) => {
  const id = req.params.codeID;
  
  res.status(200).json({
    message: "User updated!"
  });
});

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET request of the /users"
  });
});

router.get("/:codeID", (req, res, next) => {
  const id = req.params.codeID;

    res.status(200).json({
      message: "get a code with id",
      id: id
    });  
});

router.delete("/:codeID", (req, res, next) => {
    const id = req.params.codeID;
    res.status(200).json({
        message: "User Deleted"
      });
});

module.exports = router;
