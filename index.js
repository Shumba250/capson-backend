import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./server/routes/router.js";
import messagerouter from "./server/routes/contactMessageRoutes.js";
import signupRouter from "./server/routes/signupRoutes.js";

const app = express();
dotenv.config();

mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(3000, () => {
			console.log("server connected successfully at port 3000");
			console.log("bd connected successfully");
		});
	})
	.catch((error) => console.log(error));
app.use(express.json());

app.use("/blogss", router);
app.use("/contactMessages", messagerouter);
app.use("/signups", signupRouter);
