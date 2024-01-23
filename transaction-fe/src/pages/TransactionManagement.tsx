import { Button, Input, Box, Flex, Text, Table, TableContainer, Thead, Td, Tr, Th, Tbody } from '@chakra-ui/react'
import { transactionHook } from '../hooks/transactionHooks'
import { UpdateTransactionButton } from '../components/CrudModal'
import { DeleteTransactionButton } from '../components/CrudModal'

export function TransactionManagement() {
    const { transactions, handleChange, createData } = transactionHook()

    return (
        <>
            <Box py={7} px={5}>
                <Flex justifyContent={'space-between'}>
                    <Text mb={10}>Manajemen Transaction</Text>
                </Flex>
                <form onSubmit={createData}>
                    <Text>Nama</Text>
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
                            {transactions?.map((item, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{index += 1}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.price}</Td>
                                        <Td>
                                            <UpdateTransactionButton id={item.id}/>
                                            <DeleteTransactionButton id={item.id}/>
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