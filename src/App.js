import { BrowserRouter,Routes,Route } from "react-router-dom";
// import CategoryPage from "./components/CategoryPage";
import Homepage from "./pages/Homepage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SpecificCatPage from "./pages/SpecificCatPage";
import Errorpage from "./pages/Errorpage";
import ContactPage from "./pages/ContactPage";
// import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import CategoryPage from "./components/CategoryPage";
import AboutPage from "./pages/AboutPage";
import Wishlist from "./pages/Wishlist";
import Loginpage from "./pages/LoginPage"
// import RegisterPage from "./pages/RegisterPage"
import RegisterPage2 from "./pages/RegisterPage2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/product/details/:id" element={<ProductDetailsPage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/contactus" element={<ContactPage/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/aboutus" element={<AboutPage/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/register" element={<RegisterPage2/>}/>
      <Route path="*" element={<Errorpage/>}/>
      <Route path="/:category" element={<CategoryPage/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
      {/* <Route path="/category" element={<SpecificCatPage/>}/> */}
    {/* <ProductDetailsPage /> */}
    {/* <CategoryPage /> */}
    {/* <SpecificCatPage/> */}
    </>
  );
}

export default App;
