import { Button, Input, Box, Flex, Text, Table, TableContainer, Thead, Td, Tr, Th, Tbody } from '@chakra-ui/react'
import { useHook } from '../hooks/useHooks'
import { DeleteButton } from '../components/CrudModal'
import { UpdateButton } from '../components/CrudModal'

export function ProductManagement() {
    const { products, handleChange, createData } = useHook()

    return (
        <>
            <Box py={7} px={5}>
                <Flex justifyContent={'space-between'}>
                    <Text mb={10}>Manajemen Product</Text>
                </Flex>
                <form onSubmit={createData}>
                    <Text>Nama Barang</Text>
                    <Input name="name" onChange={handleChange} w={'50%'}/>
                    <Text>Harga</Text>
                    <Input name="price" onChange={handleChange} w={'50%'}/>
                    <Button type='submit'>Add</Button>
                </form>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Nama</Th>
                            <Th>Harga</Th>
                            <Th>Option</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {products?.map((item, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{index += 1}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.price}</Td>
                                        <Td>
                                            <UpdateButton id={item.id}/>
                                            <DeleteButton id={item.id}/>
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}