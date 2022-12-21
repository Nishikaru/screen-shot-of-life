import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home';
import Memories from './Pages/Memories';

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
        }
      ]
    }
  ])
  return (
    <div className='h-screen w-screen'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
