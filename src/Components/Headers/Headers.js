import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/UserContext';

const Headers = () => {
    const { user, logout } = useContext(authContext)
    // const user = null;

    const handleLogOut = () => {
        logout().then(result => {
            console.log(result.user)
        }).then(error => {
            console.error('Error', error)
        })
    }
    const menu = <>
        <li><Link className='text-xl font-bold text-blue-700' to={'/'}>Home</Link></li>
        <li><Link>Item 1</Link></li>
        <li><Link>Item 1</Link></li>


        {user ?
            <>
                <li><Link to={'/myreview'} className='text-lg font-bold text-blue-700' >My Reviews</Link></li>
                <li><Link to={'/addservices'} className='text-lg font-bold text-blue-700' >Add Service</Link></li>
                <li><button onClick={handleLogOut} className='text-lg font-bold text-blue-700' >SignOut</button></li>


            </>

            : <>
                <li><Link className='text-xl font-bold text-blue-700' to={'/signup'}>SignUp</Link></li>
                <li><Link className='text-xl font-bold text-blue-700' to={'/login'}>Log In</Link></li>

            </>}
        <li><Link> <p> {user?.displayName}  </p> </Link></li>


    </>



    return (
        <>
            <div className="navbar bg-base-300 mb-2 ">
                <div className=" w-1/2 justify-start pb-2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">

                            {menu}

                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case md:text-3xl text-xl font-extrabold text-violet-700">
                        <span className='bg-green-400 p-1 -rotate-6 rounded-sm text-3xl md:text-5xl'>M</span> A-Er- <span className='text-2xl md:text-4xl text-pink-700'>R@NNa</span> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {menu}

                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div> */}
            </div>

        </>
    );
};

export default Headers;