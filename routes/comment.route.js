var express = require("express");
var commentRouter = express.Router();
var commentCtrl = require("../controllers/comment.controller");

commentRouter.get("/comic/:id", commentCtrl.getCommentsOfComicById);
commentRouter.post("/create", commentCtrl.create);
commentRouter.delete("/delete/:id", commentCtrl.deleteCommentById);
commentRouter.put("/update/:id", commentCtrl.updateCommentById);

module.exports = commentRouter;
