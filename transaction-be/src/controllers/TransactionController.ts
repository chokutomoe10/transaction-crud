import { Request, Response } from 'express'
import TransactionService from '../services/TransactionService'

class TransactionController {
    find(req: Request, res: Response){
        TransactionService.find(req, res)
    }

    findOne(req: Request, res: Response){
        TransactionService.findOne(req, res)
    }

    create(req: Request, res: Response){
        TransactionService.create(req, res)
    }

    delete(req: Request, res: Response){
        TransactionService.delete(req, res)
    }

    update(req: Request, res: Response){
        TransactionService.update(req, res)
    }
}

export default new TransactionController()