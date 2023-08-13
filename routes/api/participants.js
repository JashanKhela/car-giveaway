const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Participant = require('../../models/Participant');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const { findOneAndUpdate } = require('../../models/User');

//@route  GET api/participants
//@desc   Get ALL participants from DB
//@access Private
router.get('/', [auth], async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('No Participants Found! Server Error');
  }
});

//@route  POST api/participants/add
//@desc   Add participants to DB
//@access Private
router.post(
  '/add',
  [
    auth,
    check('email', 'Email Is Required').not().isEmpty(),
  ] /* ask J about this*/,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, paid, active } = req.body;

    const newParticipant = new Participant({
      name,
      email,
      paid,
      active,
    });

    try {
      await newParticipant.save();
      res.json(newParticipant);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error , Could Not Add Participant');
    }
  }
);

module.exports = router;
