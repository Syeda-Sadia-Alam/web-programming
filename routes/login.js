const router =  require('express').Router()

const { loginGetController,loginPostController } = require('../controllers/login')

router.get('/',loginGetController)
router.post('/',loginPostController)

module.exports = router