import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import ProductsPage from './pages/ProductsPage'
import CustomersPage from './pages/CustomersPage'
import SettingsPage from './pages/SettingsPage'
import { useProducts } from './context/ProductContext'

const App = () => {

  const { products, loading, error } = useProducts()

  if (error) return <p className='text-rose-500'>{error}</p>

  console.log(products)
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Overview />} />
        <Route path='/orders' element={<ProductsPage />} />
        <Route path='/customers' element={<CustomersPage />} />
        <Route path='/Settings' element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App