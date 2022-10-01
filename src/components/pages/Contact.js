import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function Contact ({currentPage, handlePageChange}) {
    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            Contact
            <Footer />
        </div>
    );
}

export default Contact;