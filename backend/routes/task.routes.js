const express = require("express");
const { createTask, getTasks,updateTask,deleteTask } = require("../controllers/task.controller");
const { protect } = require("../middlewares/auth.middleware");
const { authorizeTask } = require("../middlewares/authorizeTask");

const router = express.Router();

router.use(protect); 

router.post("/", createTask);
router.get("/", getTasks);

router.put("/:id",authorizeTask, updateTask);
router.delete("/:id",authorizeTask, deleteTask);

module.exports = router;