import { ItemsProvider } from './contexts/items';

import { Outlet } from 'react-router-dom';
import { Header, Footer } from './sections';

const Layout = () => {
  return (
    <ItemsProvider>
      <Header />
      <Outlet />
      <Footer />
    </ItemsProvider>
  );
};

export default Layout;
