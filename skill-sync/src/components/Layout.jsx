// components/Layout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const hiddenRoutes = ['/', '/register'];

  const shouldHideUI = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideUI && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!shouldHideUI && <Footer />}
    </>
  );
};

export default Layout;
