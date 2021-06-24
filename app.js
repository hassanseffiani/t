const { port } = require("./utils/env");
const express = require("express");
const dataRoutes = require("./routes/data.route");
const app = express();

app.use(express.json());

app.use("/api", dataRoutes);

app.listen(port);