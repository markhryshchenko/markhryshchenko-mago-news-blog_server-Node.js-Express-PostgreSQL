const Router = require('express')
const router = new Router()
const labelController = require('../controller/label_controller')

router.post('/label', labelController.createLabel)
router.get('/label', labelController.getLabels)

router.get('/label/:id', labelController.getOneLabel)
router.put('/label/:id', labelController.updateLabel)
router.delete('/label/:id', labelController.deleteLabel)
module.exports = router