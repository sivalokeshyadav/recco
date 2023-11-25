
import './App.css';
import Order from './components/Order/order';

function App() {
  return (
    <div className="App">
      <header>
        <div className='left'>
          <h1>Recco</h1>
          <h1>Store</h1>
          <h1>Orders</h1>
          <h1>Analytics</h1>
        </div>
        <div className='right'>
          <img src='' alt="cart" />
          <h1>Hello,</h1>
          <h1>James</h1>
        </div>
      </header>
      <Order />
    </div>
  );
}

export default App;
