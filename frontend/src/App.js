import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import MenuScreen from './screens/MenuScreen';

//components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Routes>
          <Route exact path="/" caseSensitive={false} element={<HomeScreen/>} />
          <Route exact path="/product/:id" caseSensitive={false} element={<ProductScreen/>} />
          <Route exact path="/cart" caseSensitive={false} element={<CartScreen/>} />
          <Route exact path="/menu" caseSensitive={false} element={<MenuScreen/>} />
        </Routes>
      </main>
    </Router>
  );
}


export default App;
