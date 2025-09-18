import React from 'react';
import NavBar from './components/NavBar';
import { ThemeContextProvider } from './context/ThemeContext';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { createRoutesFromElements, Route } from 'react-router';
import Footer from './components/Footer';
import Home from './components/Home';
import ScrollToTopButton from './context/ScrollToTopButton';

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayOut />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
            <ScrollToTopButton />
    </ThemeContextProvider>
    
  );
};

export default App;
