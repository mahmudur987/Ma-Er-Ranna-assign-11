
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';
function App() {
  return (
    <div className='w-11/12 mx-auto'>
      <Toaster></Toaster>
      <RouterProvider router={routes}></RouterProvider>



    </div>
  );
}

export default App;
