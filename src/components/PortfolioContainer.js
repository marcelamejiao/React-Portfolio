import React, { useState } from 'react';

import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  // Store the current page in the state
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'About') {
      return <About currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'Resume') {
      return <Resume currentPage={currentPage} handlePageChange={handlePageChange} />;
    }
    return <Contact currentPage={currentPage} handlePageChange={handlePageChange} />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {renderPage()}
    </div>
  );
}
