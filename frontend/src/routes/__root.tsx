import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='container'>
     <Header/>
      <Outlet />
      <ToastContainer/>
    </div>
  )
}
