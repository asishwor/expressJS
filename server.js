import express from "express";
import path from "path";
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/index.html");
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/about.html");
// });

//? template engine file search  by default inside views folder
//

// Static Middleware
app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/public/index.html");
});
// Views Template Engine
app.set("view engine", "ejs");

// Home page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
  });
});

// About Us page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
  });
});

app.use(express.static("public"));
app.listen(5001, () => {
  console.log("app listening on port 5001");
});
