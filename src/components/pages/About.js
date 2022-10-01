import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function About ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            About
            <Footer />
        </div>
    );
}

export default About;
