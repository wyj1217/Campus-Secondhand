import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'

export default function App() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}
