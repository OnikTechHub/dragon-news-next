import BrackingNews from '@/components/shared/BeackingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <BrackingNews></BrackingNews>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;