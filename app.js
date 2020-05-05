/* // Require express and create an express application instance
const express = require("express");
const app = express();

// Require the express routes defined in router.js

// Define the hostname and port where the server can be found
const port = 5000;

// Define the directory where static files are found
app.use(express.static("public"));

// Specify the routes to be used for our application
app.use(routes);

// Begin accepting connections to the specified port
app.listen(port, () => {
  // Display server location information to the console
  console.log(`Server is listening at  ${port}`);
}); */

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const routes = require("./router");

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .use(routes)
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
