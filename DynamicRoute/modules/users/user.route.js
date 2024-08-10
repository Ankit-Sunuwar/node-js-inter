const router = require("express").Router();

//Read all data
router.get("/", (req, res) => {
  //query
  try {
    res.json({ data: "Hello from users" });
  } catch (e) {
    next(e);
  }
});

//Read one data
router.get("/:id", (req, res) => {
  //params
  res.json({ data: `get data from user id ${req?.params?.id}` });
});

//Create
router.post("/", (req, res) => {
  //body
  res.json({ data: "Hello from users" });
});

//Update
router.put("/:id", (req, res) => {
  //params + body
  res.json({ data: "Hello from users" });
});

//Update
router.patch("/:id", (req, res) => {
  //params + body
  res.json({ data: "Hello from users" });
});

//Delete
router.delete("/:id", (req, res) => {
  //params
  res.json({ data: "Hello from users" });
});

module.exports = router;
