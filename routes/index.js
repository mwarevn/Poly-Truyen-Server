const comicRouter = require("./comic.route");
const commentRouter = require("./comment.route");
const homeRouter = require("./home.route");
const signRouter = require("./sign.route");
const userRouter = require("./user.route");

function routes(app) {
	app.use(["/sign", "/"], signRouter);
	app.use("/home", homeRouter);
	app.use("/comic", comicRouter);
	app.use("/comment", commentRouter);
	app.use("/user", userRouter);
}

module.exports = routes;
