import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;