const router = require('express').Router()
const { registerGetController,registerPostController }  = require('../controllers/registration')

router.get('/',registerGetController)
router.post('/',registerPostController)

module.exports = router