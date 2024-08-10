const router = require("express").Router();

const userRouter = require("../modules/users/user.route");
router.use = ("/users", userRouter);

// const roomRouter = require("../modules/rooms/rooms.route");
// router.use = ("/rooms", userRouter);
module.exports = router;
