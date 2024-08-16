const Citizen = require("../models/citizen");
console.log("Citizen:", Citizen);
exports.checkId = async (req, res) => {
  const { nationalID } = req.body;
  console.log("debugging:", req.body);
  try {
    const citizen = await Citizen.findOne({
      where: { nationalID: nationalID },
    });

    if (!citizen) {
      return res.status(404).json({ error: "Citizen not found" });
    }

    res.json({ district: citizen.district });
  } catch (error) {
    console.error("Error checking ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
