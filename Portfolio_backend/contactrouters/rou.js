
const express = require("express");
const router = express.Router();
const Contact = require("../models/contact.js");


router.get(["","/"], (req, res) => {
  res.send("Contact route working!");
});

// POST /api/contact
router.post("/contact", async (req, res) => {
  try {
    console.log("Post req recieved");
    
    const { name, email, message } = req.body;

    if (!email || !name || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(200).json({ success: true, message: "Message submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
    console.log(error);
  }
});

module.exports = router;
