import React from 'react';
import Header from './Header';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />

            {/* Add padding for the header height */}
            <div
                style={{
                    paddingTop: '350px', // Matches Header's height
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
