import { Routes, Route } from 'react-router-dom'
import { ProductManagement } from './pages/ProductManagement'
import { TransactionManagement } from './pages/TransactionManagement'

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ProductManagement/>}/>
        <Route path='/transaction' element={<TransactionManagement/>}/>
      </Routes>
    </>
  )
}