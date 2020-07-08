import express from "express";
import router from "./routes";

require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use("/", express.static("../page/"));
app.use("/app", express.static("../application/build"));

app.listen(port, () => {
  console.log("Server started on port ", port);
});
