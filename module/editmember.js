import { ObjectId } from "mongodb";
import databaseClient from "../services/database.mjs";
import { checkMissingField } from "../utils/requestUtils.js";

const editmember = async (req, res) => {
    const DATA_KEY_SIGNUP = ["id", "fullname", "nickname", "date0fbirth", "age", "gender"];
    let body = req.body;
  
    const [isChecked , setISsChecked] = checkMissingField(DATA_KEY_SIGNUP,body);
  
    if (!isChecked) {
      res.send(`Missing Fields: ${"".concat(setISsChecked)}`);
      return;
    }

    await databaseClient.db().collection("members").updateOne({_id:new ObjectId(body.id)},{$set:{
        fullname: body.fullname,
        nickname: body.nickname,
        date0fbirth: body.date0fbirth,
        age: body.age,
        gender: body.gender
        }});
  
    res.status(200).json(body);
  };
  
export default editmember;
