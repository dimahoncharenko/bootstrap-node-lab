import express from "express";
import * as expressHbs from "express-handlebars";

const PORT = process.env.PORT || 4300;
const app = express();

app.engine(
  "handlebars",
  expressHbs.engine({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => res.render("page"));

app.listen(PORT, () =>
  console.log(`Server has rushed on http://localhost:${PORT}`)
);
