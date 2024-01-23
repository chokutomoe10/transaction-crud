import * as express from 'express'
import ProductController from '../controllers/ProductController'
import TransactionController from '../controllers/TransactionController'

const router = express.Router()

router.get('/product', ProductController.find)
router.get('/product/:id', ProductController.findOne)
router.post('/product', ProductController.create)
router.patch('/product/:id', ProductController.update)
router.delete('/product/:id', ProductController.delete)

router.get('/transaction', TransactionController.find)
router.get('/transaction/:id', TransactionController.findOne)
router.post('/transaction', TransactionController.create)
router.patch('/transaction/:id', TransactionController.update)
router.delete('/transaction/:id', TransactionController.delete)

export default router