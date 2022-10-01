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
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      {renderPage()}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
        crossorigin="anonymous"></script>
    </div>
  );
}
