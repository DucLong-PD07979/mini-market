import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';

const DefaultLayout = () => {
    return (
        <div className="app">
            <Header></Header>
                  <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default DefaultLayout;
