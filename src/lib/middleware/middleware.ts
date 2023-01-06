import * as express from "express";
import { reqItems, MANDATORY_FIELDS } from "../common/constants";

const router = express.Router();

router.use((req, res, next) => {
  //console.log("Request body: " + "\n" + JSON.stringify(req.body));
  let keyObj: any = [];
  if (req.body && Array.isArray(req.body)) {
    keyObj = req.body.map((e) => Object.keys(e));
    keyObj.forEach((e) => {
      e.forEach((f) => {
        if (!reqItems.includes(f)) {
          throw new Error(MANDATORY_FIELDS);
        }
        if(f.hasOwnProperty("clienteNombre")){
          f.clienteNombre = f.clienteNombre.trim().toString();
        }
      });
    });

    
  }
  next();
});

export default router;
