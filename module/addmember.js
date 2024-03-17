import databaseClient from "../services/database.mjs";
import { checkMissingField } from "../utils/requestUtils.js";

const addmember = async (req, res) => {
    const DATA_KEY_SIGNUP = ["fullname", "nickname", "date0fbirth", "age", "gender", "createdate"];
    let body = req.body;
  
    const [isChecked , setISsChecked] = checkMissingField(DATA_KEY_SIGNUP,body);
  
    if (!isChecked) {
      res.send(`Missing Fields: ${"".concat(setISsChecked)}`);
      return;
    }

    await databaseClient.db().collection("members").insertOne(body);
  
    res.status(200).json(body);
  };
  
  export default addmember;
  