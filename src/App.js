import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Auto-close sidebar on medium screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-col h-screen w-full'>
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className='flex '>
        <SideBar isOpen={isOpen} />
        <div className='flex-1'>
          <Dashboard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
