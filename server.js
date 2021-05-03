const express = require("express");
const app = express();
const db = require("./db");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const routes = require("./routes/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/api", routes);

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

app.listen(PORT, () => {
  console.log(`Express seerver listening on port ${PORT}`);
});

/* HTTP request is sent to the http://localhost:3000/
call the handler function */
