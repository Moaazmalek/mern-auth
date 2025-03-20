import React from 'react'
import { RouterProvider,createRouter } from '@tanstack/react-router'
import {routeTree} from './routeTree.gen'
const router=createRouter({routeTree})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => {
  return  <RouterProvider router={router} />
}

export default App