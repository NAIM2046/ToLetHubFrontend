import Footer from '@/components/share/Footer';
import Navber from '@/components/share/Navber';
import React from 'react';

const Rootlayout = ({children}) => {
    return (
        <>
            <Navber></Navber>
            {children}
            <Footer></Footer>
        </>
    );
};

export default Rootlayout;