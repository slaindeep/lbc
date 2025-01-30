import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPage from './pages/Blogpage';
import WPSBlog from './pages/blogs/wps-uae-businesses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blogs/wps-uae-businesses" element={<WPSBlog />} />
    </Routes>
  );
};

export default AppRoutes;