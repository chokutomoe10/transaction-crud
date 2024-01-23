import { useState, useEffect } from "react";
import { ITransaction } from "../interfaces/Transaction";
import { API } from "../lib/api";

export function transactionHook() {
    const [transactions, setTransactions] = useState<ITransaction[]>()

    const getProducts = async () => {
        try {
            const response = await API.get('/transaction')
            setTransactions(response.data)
            console.log(response.data);
        } catch (error) {
            console.error('error get products', error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    const [form, setForm] = useState<ITransaction>(
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
            const response = await API.post("/transaction", form)
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

    return {transactions, handleChange, createData, setForm}
}