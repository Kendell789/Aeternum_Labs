const express = require('express');
const router = express.Router();
const members = require('../../Mats');


// Gets All Members
router.get('/', (req, res) => {
  return res.json(members);
})


module.exports = router;
