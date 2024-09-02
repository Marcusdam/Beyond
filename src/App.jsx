
import Layout from './components/Layout';
import Home from './pages/Home';
import {
  createBrowserRouter, RouterProvider,} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <Home/> },
          // { path: "/about", element: <About/> },
          
        ],
      },
    
    ]);
  

  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
