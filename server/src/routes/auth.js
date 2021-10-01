const express = require('express');
const router = express.Router();

const {forgotPassword, resetPassword} = require('../controllers/authController');
router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)

module.exports = router;