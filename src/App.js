import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// functional component that helps split the UI into distinct parts
function App() {

  // method to check to see what render the current page depending on which page is selected
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer />
    </div>
  );
}

export default App;
