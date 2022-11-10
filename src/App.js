
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes';
import { Helmet } from "react-helmet";



function App() {
  return (
    <div className='w-11/12 mx-auto '>
      <Helmet>
        <title>Ma-er-ranna</title>
      </Helmet>

      <Toaster></Toaster>
      <RouterProvider router={routes}></RouterProvider>



    </div>
  );
}

export default App;
