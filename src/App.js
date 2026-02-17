
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Newsletter from './component/Newsletter';
import Logo from './component/Logo';
import Slider from './component/Slider';
import Testimonial from './component/Testimonial';

import Allproduct from './component/Allproduct';
import Category from './component/Category';
import ProductDetail from './component/Redux/ProductDetail';
import Cart from './component/Redux/Cart';
import Login from './component/Login';
import Register from './component/Register';
import Wishlist from './component/Redux/Wishlist';
import Checkout from './component/Checkout';
import Blog from './component/Blog';
import Blog1 from './component/Blog1';
import PrivateRoute from './component/Redux/PrivateRoute';
import Contact from './component/Contact';
import CategorySection from './component/Categorysection';
import BacktoTop from './component/BacktoTop';
import ScrollToTop from './component/ScrollToTop';
import Blog2 from './component/Blog2';
import Blog3 from './component/Blog3';
import Blog4 from './component/Blog4';
import Blog5 from './component/Blog5';
import Blog6 from './component/Blog6';

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={
            <>
              <Slider />
              <CategorySection/>
              <Allproduct />
              <Blog />  
              <Testimonial />
              <Logo />
            </>
          } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/:category/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<PrivateRoute> <Cart /> </PrivateRoute>  } />
        <Route path="/wishlist"element={<PrivateRoute> <Wishlist /> </PrivateRoute>   }  />
        <Route path="/checkout"element={ <PrivateRoute>  <Checkout /> </PrivateRoute> }/>
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/blog/3" element={<Blog3 />} />
        <Route path="/blog/4" element={<Blog4 />} />
        <Route path="/blog/5" element={<Blog5/>} />
        <Route path="/blog/6" element={<Blog6/>} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

     
      <Newsletter />
      <BacktoTop/>
      <Footer />
    </div>
  );
}

export default App;
