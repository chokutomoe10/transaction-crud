import { useState, useEffect } from "react";
import { IProduct } from "../interfaces/Product";
import { API } from "../lib/api";

export function useHook() {
    const [products, setProducts] = useState<IProduct[]>()

    const getProducts = async () => {
        try {
            const response = await API.get('/product')
            setProducts(response.data)
            console.log(response.data);
        } catch (error) {
            console.error('error get products', error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    const [form, setForm] = useState<IProduct>(
        {
            name: "",
            price: 0,
        }
    )

    const createData = async (event: React.FormEvent) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("name", form.name || "")
        formData.append("price", String(form.price))

        try {
            const response = await API.post("/product", form)
            getProducts()
            parseFloat(response.data.price)
            console.log(response.data)
        } catch (error) {
            console.log('error create product', error)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    return {products, handleChange, createData, setForm}
}