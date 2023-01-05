import * as express from "express";
import { reqItems } from "../common/constants";

const router = express.Router();

router.use((req, res, next) => {
  console.log("Request body: " + "\n" + JSON.stringify(req.body));
  let body: any = [];
  if (req.body) {
    body = Array.isArray(req.body)
      ? req.body.forEach(item =>  Object.keys(item))
      : [];
    if (!Object.keys(reqItems).includes(body)) {

      throw new Error(
        "Please include in request body all mandatory fields: " +
          "\n" + Object.keys(reqItems) + "\n"
      );
    }
    req.body.clienteNombre = req.body.clienteNombre.trim().toString();
  }
  next();
});

export default router;
