import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import CoffeeAdd from './components/UpdateCoffee/CoffeeAdd';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/addcoffee',
        element:<CoffeeAdd></CoffeeAdd>
      },
      {
        path:'/updatecoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader: ({params}) =>fetch(`http://localhost:3000/coffee/${params.id}`)
      },
      {
        path:'/home',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/coffee')
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <div className='max-w-7xl mx-auto'>
       <RouterProvider router={router} />
       </div>
  </React.StrictMode>,
)
