import { ObjectId } from "mongodb";
import databaseClient from "../services/database.mjs";

const deletemember = async (req, res) => {
  const { id } = req.params;
  try {
    await databaseClient
      .db()
      .collection("members")
      .findOneAndDelete({ _id: new ObjectId(id) });
res.json("delete successful")
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export default deletemember;
