const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require("./routes/apiRouter")
const cookieParser = require("cookie-parser");
const pagesRouter  = require("./routes/pages.js")

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
// i don't know
const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  apiRouter ,
  pagesRouter,
  express.static(path.join(__dirname, "public")),
);

app.listen(PORT);