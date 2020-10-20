import 'normalize.css';

import Footer from './Footer';
import Nav from './Nav';

const Layout: React.FC = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
