import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function Portfolio ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            Portfolio
            <Footer /> 
        </div>
    );
}

export default Portfolio;