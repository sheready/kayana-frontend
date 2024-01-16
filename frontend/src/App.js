import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Board from './components/Board';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Award from './components/Award';
import DonateItems from './components/DonateItems';
import Cart from './components/Cart';
import CartProvider from './CartContext';
import Billing from './components/Billing';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="board" element={<Board/>} />
          <Route path="donate-items" element={<DonateItems/>}></Route>
          <Route path="cart" element={<Cart />}></Route>      
          <Route path="billing" element={<Billing />}></Route>
          {/* <Route path="/publications" element={<Publications/>} /> */}
          <Route path="awards" element={<Awards/>}>
            <Route path=":awardId" element={<Award />} />
            <Route index element={<h3>Click on an award category above</h3>} />
          </Route>
          <Route
            path="*"
            element={<h1 className="not-found">Page Not Found</h1>}
          />
        </Routes>
        <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
