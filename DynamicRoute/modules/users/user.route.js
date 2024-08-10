const router = require("express").Router();

// Route level ma application middleware create garye ko ho.
const verify = (req, res, next) => {
  const role = req.header.role; // yes le header ma role check garni kam gar xa.(application middileware level le route level ma check garni kam garxa.)
  if (role === admin) {
    next();
  } else throw new Error("You are aunthorized"); // custome new erro bhanye ko throw new err ho.
};

//Read all data
router.get("/", verify, (req, res, next) => {
  //query
  try {
    res.json({ data: "Hello from users" });
  } catch (e) {
    next(e);
  }
});

//Read one data
router.get("/:id", (req, res, next) => {
  //params
  try {
    res.json({ data: `get data from user id ${req?.params?.id}` });
  } catch (e) {
    next(e);
  }
});

//Create
router.post("/", (req, res, next) => {
  //body
  console.log("req.body");
  try {
    res.json({ data: "Hello from users" });
  } catch (e) {
    next(e);
  }
});

//Update
router.put("/:id", (req, res, next) => {
  //params + body
  try {
    res.json({ data: "Hello from users" });
  } catch (e) {
    next(e);
  }
});

//Update
router.patch("/:id", (req, res, next) => {
  //params + body
  try {
    res.json({ data: "Hello from users" });
  } catch (e) {
    next(e);
  }
});

//Delete
router.delete("/:id", (req, res, next) => {
  //params
  try {
    res.json({ data: "Hello from users" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
