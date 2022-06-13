const express = require("express");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoute = require("./routes/userRoutes");
const cors = require('cors');

dotenv.config();
connectDb();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  // Data Sanitization against noSQL query injection
//   app.use(mongoSanitize());
  
  // Data Sanitization against xss(cross site scripting)
//   app.use(xss());

app.use(cors());
app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

app.use("/api/user", userRoute);

const PORT = process.env.PORT;

app.listen(PORT, console.log("server is running"));
