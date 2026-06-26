import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import OverviewPage from './pages/OverviewPage'
import Products from './pages/Products'
import CustomerPage from './pages/CustomerPage'
import SettingsPage from './pages/SettingsPage'
import RevenueChart from './components/RevenueChart'
import RecentOrders from './components/RecentOrders'
import { useProducts } from './context/ProductContext'



const App = () => {
  const { products, loading, error } = useProducts()

  console.log(products)
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<OverviewPage />} />
        {/* <Route path='/overview' element={<OverviewPage />} /> */}
        <Route path='/orders' element={<Products />} />
        <Route path='/customers' element={<CustomerPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
