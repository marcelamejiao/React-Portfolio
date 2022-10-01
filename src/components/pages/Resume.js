import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function Resume ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            Resume
            <Footer />
        </div>
    );
}

export default Resume;