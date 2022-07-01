const router = require('express').Router()
const multer = require('multer')
const upload = multer({ dest: 'public/uploads' })

/**
* Required controllers
*/
const HomeController = require('../controllers/HomeController')
const UploadController = require('../controllers/UploadController')

/**
* Available routes in application
*/
router.get('/', HomeController.index)
router.post('/upload', [upload.single('file'), UploadController.store])
router.get('/download/:id', UploadController.show)
router.post('/download/:id', UploadController.show)

module.exports = router