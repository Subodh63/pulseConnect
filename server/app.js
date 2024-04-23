const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();

const port = process.env.PORT || 3177;

app.use(cookieParser());
app.use(express.json());
// Define allowed origins
const allowedOrigins = [
	process.env.HOSTED_CLIENT_URL
];

// Custom middleware to set 'Access-Control-Allow-Origin' header
const allowCors = (req, res, next) => {
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
	// Allow credentials
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
};

// Apply CORS middleware with custom options
app.use(cors({
	origin: allowedOrigins,
	credentials: true,
	optionSuccessStatus: 200
}));


mongoose.connect(process.env.CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (e) => {
	console.log(e ? e : "Connected successfully to database");
});

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));

app.listen(port, () =>
	console.log(`Server running at http://localhost:${port}`)
);