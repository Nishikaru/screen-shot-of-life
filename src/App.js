import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home';
import Memories from './Pages/Memories';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Memory from './Pages/Memory';
import { useContext } from 'react';
import { AuthContext } from './Comp/UserContext/UserContext';
import ProtectiveRout from './Comp/ProtectiveRout/ProtectiveRout';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/memories',
          element:<ProtectiveRout><Memories></Memories></ProtectiveRout>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/memory/:email/:mm/:dd/:yy',
          element:<Memory/>,
          loader:async({params})=>{
            // console.log(params.mm)
            return fetch(
            `http://localhost:5000/memories/${params.email}/${params.mm}/${params.dd}/${params.yy}`
          )}
        }
      ]
    }
  ])
  const {theme} =useContext(AuthContext);
  return (
    <div className={`h-screen w-screen overflow-hidden  text-skin-${theme.MainText} bg-skin-${theme.SecBg} `}>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
