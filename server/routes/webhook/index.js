const router = require('express').Router();
const webhook = require('../../controllers/webhook');

router.route('/').post(webhook.webhook);

module.exports = router;
