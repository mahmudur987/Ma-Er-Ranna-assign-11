import { createBrowserRouter } from "react-router-dom";
import AllDishes from "../Components/AllDishes/AllDishes";
import DishDetail from "../Components/DishDetail/DishDetail";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MyReviews from "../Components/MyReviews/MyReviews";
import SignUp from "../Components/Signup/Signup";
import Main from "../Layouts/Main";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/dishes')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/alldishes',
                element: <AllDishes></AllDishes>
            },
            {
                path: '/dish/:id',
                element: <DishDetail></DishDetail>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/dishes/${params.id}`)
                }
            },
            {
                path: '/myreview',
                element: <MyReviews></MyReviews>

            },

        ]
    }
])

export default routes