import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./server/routes/blogRouter.js";
import messagerouter from "./server/routes/contactMessageRoutes.js";
import signupRouter from "./server/routes/signupRoutes.js";
import AdminRouter from "./server/routes/AdminRoute.js";
import { LogIn } from "./server/routes/LogInRouter.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`server connected successfully at port ${3000}`);
			console.log("bd connected successfully");
		});
	})
	.catch((error) => console.log(error));
app.use(express.json());

app.use("/blogs", router);
app.use("/contactMessages", messagerouter);
app.use("/signups", signupRouter);
app.use("/Admin", AdminRouter);
app.use("/login", LogIn);
