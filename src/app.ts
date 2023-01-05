"use strict";
import * as express from "express";
import * as path from "path";
import helmet from "helmet";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import index from "./routes/index";
import mw from "./lib/middleware/middleware";
const { auth } = require("express-oauth2-jwt-bearer");
const app: express.Express = express();

const checkJwt = auth({
  audience: "https://remitox.x.x.x/xxx",
  issuerBaseURL: `https://remitox-generator.us.auth0.com/`,
});

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger("dev"));
app.use(helmet());
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(mw)
app.use("/crearRemito", checkJwt, index);

app.use(function(req, res, next) {
  res.status(404);
  res.type('txt').send("Not found : " + req.url);
});



export default app;
