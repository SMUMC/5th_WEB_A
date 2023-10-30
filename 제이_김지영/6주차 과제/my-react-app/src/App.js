import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CartContainer from './Components/CartContainer';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/cartSlice';

function App() {
  // 1. cartItems 배열이 변경될떄마다
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  // 2. calculateTotals() 실행되야지 값이 계산되겠죠

  return (
    <div className='App'>
      {/* Header */}
      <NavBar />
      <CartContainer />
      <Footer />
    </div>
  );
}

export default App;
