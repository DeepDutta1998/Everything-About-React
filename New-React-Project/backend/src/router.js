const express = require('express');
const RegistrationController = require('./controllers/RegistrationController');
const LogInController = require('./controllers/LogInController');

const router = express.Router();

router.route("/login").post(LogInController);
router.route("/register").post(RegistrationController);


module.exports=router;