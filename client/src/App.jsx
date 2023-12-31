import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { useSelector } from 'react-redux';
import Register from "./pages/Register";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login">
          render={() =>  user ? <Navigate to = "/" /> : <Login />}
        </Route>
        <Route path="/register">
          render={() =>  user ? <Navigate to = "/" /> : <Register />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;