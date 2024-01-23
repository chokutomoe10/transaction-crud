import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Product } from "../entities/Product";

class ProductService {
    private readonly productRepository: Repository<Product> = AppDataSource.getRepository(Product);

    async find(req: Request, res: Response) {
        try {
        const products = await this.productRepository.find(
            {
                order: { id: 'ASC' },
            }
        )
        return res.status(200).json(products)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findOne(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const product = await this.productRepository.findOne({
            where : {id : id},
        })
        return res.status(200).json(product)
    }

    async create(req: Request, res: Response) {
        const data = req.body

        try {
            const product = this.productRepository.create({
                name: data.name,
                price: data.price
            })
            const createdProduct = await this.productRepository.save(product)
            return res.status(200).json(createdProduct)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const deletedProduct = await this.productRepository.delete(id)
        return res.status(200).json(deletedProduct)
    }

    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const data = req.body

        const product = await this.productRepository.findOne({
            where : {id : id},
        })

        product.name = data.name
        product.price = data.price

        const updatedProduct = await this.productRepository.save(product)
        return res.status(200).json(updatedProduct)
    }
}

export default new ProductService()