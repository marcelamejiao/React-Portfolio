import React, { useState } from 'react';

import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  // If the user accesses the page with a hash, start on that page
  const getPageFromHash = () => {
    switch (window.location.hash) {
      case '#contact':
        return 'Contact';
      case '#portfolio':
        return 'Portfolio';
      case '#resume':
        return 'Resume';
      default:
        return 'About';
    }
  };

  const startCurrentPage = getPageFromHash();

  // Store the current page in the state
  const [currentPage, setCurrentPage] = useState(startCurrentPage);

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

  // If the user presses the back button, render the old page
  window.addEventListener('hashchange', () => setCurrentPage(getPageFromHash()))

  return (
    <div>
      {renderPage()}
    </div>
  );
}
