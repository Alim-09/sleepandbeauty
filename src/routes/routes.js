const express = require("express")
const router = express.Router();

// Routes
router.get("/", (req, res) => {
     res.render("index.html", {title: "Sleep & Beauty"});
})
 
// Exporting
module.exports = router;