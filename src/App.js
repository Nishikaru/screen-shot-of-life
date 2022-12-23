import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home';
import Memories from './Pages/Memories';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

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
          element:<Memories/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        }
      ]
    }
  ])
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
