const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerDokument = require("./api-docs/api.json");

// const apiRouter = require("./routes/api/contactsRouter");
// const routeAvatar = require("./routes/avatars/routeAvatar");
// const usersRouter = require("./routes/api/usersRouter");
const options = {
  explorer: true,
};

const conectToBase = async () => {
  await connection;
  console.log(connection);
};

dotenv.config();

const { DB_HOST: urlDb } = process.env;
// console.log(process.env.DB_HOST);
const connection = mongoose.connect(urlDb);
conectToBase();



const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());




// app.use(express.static(path.join(__dirname, "public")));

// app.use("/api", apiRouter);
// app.use("/api/users", usersRouter);
// app.use("/avatars", routeAvatar);
app.get("/", (req, res) => {
  res.send("Back-end So-yummy GOIT GR5 - conect to mondoose db");
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDokument, options)
);

app.use((req, res) => {
  res.status(404).json({ message: `Not found - ${req.path}` });
});

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
});

// const startServer = async () => {
  try {
    // conectToBase();
    console.log("Database connected");
    app.listen(process.env.PORT, () => {
      console.log("Server started on http://localhost:8000");
    });
  } catch (err) {
    process.exit(1);
  }


// startServer();
// const app = require("express")();
// require("dotenv").config();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(process.env.PORT, () => {
//   console.log("Server is running on port 3000");
// });