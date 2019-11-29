const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://lunebakami:lunebakami@projects-qhk2b.mongodb.net/project_sippa?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);
