import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';

const Layout = ({ children }) => {
  return (
    <div>
      <Cursor />
      <Navbar />
      <main style={{minHeight:'100vh'}}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;