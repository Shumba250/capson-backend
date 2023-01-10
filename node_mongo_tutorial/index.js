const env = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");

const app = express();

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
