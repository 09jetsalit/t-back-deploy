import databaseClient from "../services/database.mjs";

const getdata = async (req, res) => {
  const member = await databaseClient
    .db()
    .collection("members")
    .find({})
    .toArray();
  res.status(200).json(member);
};

export default getdata;
