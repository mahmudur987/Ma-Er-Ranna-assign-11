import { FaSadCry } from "react-icons/fa";
import { createBrowserRouter } from "react-router-dom";
import AddNewMeals from "../Components/AddNeewMeals/AddNewMeals";
import AllDishes from "../Components/AllDishes/AllDishes";
import Blogs from "../Components/Blog/Blogs";
import DishDetail from "../Components/DishDetail/DishDetail";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MyReviews from "../Components/MyReviews/MyReviews";
import SignUp from "../Components/Signup/Signup";
import Main from "../Layouts/Main";
import PrivatRoutes from "./PrivetRoutes";
import { Helmet } from "react-helmet";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://ma-er-ranna-server.vercel.app/dishes')
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
                    return fetch(`https://ma-er-ranna-server.vercel.app/dishes/${params.id}`)
                }
            },
            {
                path: '/myreview',
                element: <PrivatRoutes><MyReviews></MyReviews></PrivatRoutes>

            },
            {
                path: '/addnewmeal',
                element: <PrivatRoutes> <AddNewMeals></AddNewMeals> </PrivatRoutes>

            },
            {
                path: '/blog',
                element: <Blogs></Blogs>

            },
            {
                path: '*',
                element: <div className="text-3xl md:text-5xl text-center my-40"> this page is under maintanence <FaSadCry></FaSadCry> <FaSadCry className="text-end text-yellow-600 "></FaSadCry>
                    <Helmet>
                        <title>404</title>
                    </Helmet>

                </div>

            },

        ]
    }
])

export default routes