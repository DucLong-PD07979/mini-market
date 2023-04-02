import { createBrowserRouter } from 'react-router-dom';
import * as path from '../util/constants/router';
import DefaultLayout from '../layout/DefaultLayout';
import { Home,Search,Profile,ProducDetails,Login,Register} from '../page';
import PrivateRouter from './PrivateRouter';

const routerElement = [
    {
        path: path.HOME,
        element: <Home />,
        index: true,
    },
    {
        path: path.SEARCH,
        element: <Search />,
    },
    {
        path: path.PROFILE,
        element: (
            <PrivateRouter>
                <Profile />
            </PrivateRouter>
        ),
    },
    {
        path: path.PRODUCT_DETAILS,
        element: <ProducDetails />,
    },
    {
        path: path.LOGIN,
        element: <Login />,
    },
    {
        path: path.REGISTER,
        element: <Register />,
    },
];


export const configRouters = createBrowserRouter([
    {
        element: <DefaultLayout />,
        path: '/',
        children: routerElement,
    },
]);