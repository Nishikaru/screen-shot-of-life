import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
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
