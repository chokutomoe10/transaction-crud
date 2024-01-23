import {
    Modal,
    ModalOverlay,
    ModalContent,
    Text,
    useDisclosure,
    Input,
    Button
} from '@chakra-ui/react';
import { IProduct } from '../interfaces/Product';
import { ITransaction } from '../interfaces/Transaction';
import { useState } from 'react';
import { API } from '../lib/api';
  
export function DeleteButton(props: IProduct) {
    const idData = props.id
    const deleteData = async () => {
    try {
        const response = await API.delete(`/product/${idData}`)
        console.log(response.data)
        } catch (error) {
            console.log('error create product', error)
        }
    }
    return(
        <>
            <Button onClick={deleteData} ml={3}>Hapus</Button>
        </>
    )
}

export function DeleteTransactionButton(props: ITransaction) {
    const idData = props.id
    const deleteData = async () => {
    try {
        const response = await API.delete(`/transaction/${idData}`)
        console.log(response.data)
        } catch (error) {
            console.log('error create product', error)
        }
    }
    return(
        <>
            <Button onClick={deleteData} ml={3}>Hapus</Button>
        </>
    )
}
  
export function UpdateButton(props: IProduct) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const [form, setForm] = useState<IProduct>(
        {
            name: "",
            price: 0,
        }
    )

    const updateData = async (event: React.FormEvent) => {
        event.preventDefault()
        const idData = props.id

        const formData = new FormData()
        formData.append("name", form.name || "")
        formData.append("price", String(form.price))

        try {
            const response = await API.patch(`/product/${idData}`, form)
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
    return (
      <>
        <Button
          onClick={() => {
            onOpen();
          }}
        >
          Edit
        </Button>
        <Modal isOpen={isOpen} size={'lg'} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent pl={6} pr={6}>
            <form onSubmit={updateData}>
                <Text>Nama Barang</Text>
                <Input name="name" onChange={handleChange} w={'50%'}/>
                <Text>Harga</Text>
                <Input name="price" onChange={handleChange} w={'50%'}/>
                <Button type='submit'>Update</Button>
            </form>
            <Button
                onClick={onClose}
              >
                Close
              </Button>
          </ModalContent>
        </Modal>
      </>
    );
}

export function UpdateTransactionButton(props: ITransaction) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const [form, setForm] = useState<IProduct>(
        {
            name: "",
            price: 0,
        }
    )

    const updateData = async (event: React.FormEvent) => {
        event.preventDefault()
        const idData = props.id

        const formData = new FormData()
        formData.append("name", form.name || "")
        formData.append("price", String(form.price))

        try {
            const response = await API.patch(`/transaction/${idData}`, form)
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
    return (
      <>
        <Button
          onClick={() => {
            onOpen();
          }}
        >
          Edit
        </Button>
        <Modal isOpen={isOpen} size={'lg'} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent pl={6} pr={6}>
            <form onSubmit={updateData}>
                <Text>Nama Barang</Text>
                <Input name="name" onChange={handleChange} w={'50%'}/>
                <Text>Harga</Text>
                <Input name="price" onChange={handleChange} w={'50%'}/>
                <Button type='submit'>Update</Button>
            </form>
            <Button
                onClick={onClose}
              >
                Close
              </Button>
          </ModalContent>
        </Modal>
      </>
    );
  }