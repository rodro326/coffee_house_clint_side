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
import CardDetails from './components/CardDetails/CardDetails';
import SignUp from './components/SignUp/SingUp';
import LogIn from './components/LogIn/LogIn';
import AuthProvider from './Provider/AuthProvider';
import Users from './components/Users/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/coffee')
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
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/details/:id',
        element:<CardDetails></CardDetails>,
        loader:({params})  =>fetch(`http://localhost:3000/coffee/${params.id}`)
      },
      {
        path:'/sign',
        element:<SignUp></SignUp>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/user',
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:3000/user')
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
       <div className='max-w-7xl mx-auto'>
       <RouterProvider router={router} />
       </div>
      </AuthProvider>
  </React.StrictMode>,
)
