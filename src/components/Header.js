import React from 'react';
import Navigation from './Navigation';

function Header ({currentPage, handlePageChange}) {
    return (
        <div className='header d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-sm-end'>
            <h1 className='text-center'>Marcela Mejia Ortiz</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default Header;