import express from "express";
import path from "path";
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/index.html");
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/about.html");
// });

// Static Middleware
app.use(express.static("public"));
app.listen(5001, () => {
  console.log("app listening on port 5001");
});
