import {createBrowserRouter, Outlet, RouterProvider} from 'react-router';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Users from '../components/Users';
import Addusers from '../components/Addusers';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <div className='flex w-full '>
                <Navbar  />
                <Outlet />
            </div>,
            children: [
                {
                    path: '/home',
                    element: <Home />,
                    
                },
                {
                    path: '/',
                    element: <Users />,
                },
                {
                    path: '/addusers',
                    element: <Addusers />
                }
            ]
        }
    ]
);

export default function Routing() {
    return (
        <RouterProvider router={router} />
    )
}
