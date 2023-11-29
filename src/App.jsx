import './App.css';
// import NavBar from './components/nav-bar/navbar';
// import ItemListContainer from './components/item-list-container/item-list-container';
// import ItemDetailContainer from './components/item-detail-container/item-detail-container';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Cart from './components/cart/cart';
// import { CartProvider } from './context/cart-context';
import { initializeApp } from "firebase/app";
import Products from './pages/products';


const firebaseConfig = {
    apiKey: "AIzaSyA6owxLALGB8o110HdzF9uIhRMnBpJ5kRE",
    authDomain: "tienda-natural-ffb0f.firebaseapp.com",
    projectId: "tienda-natural-ffb0f",
    storageBucket: "tienda-natural-ffb0f.appspot.com",
    messagingSenderId: "319219503815",
    appId: "1:319219503815:web:6302facfe86c12d7f624e2"
  };
  
  initializeApp ( firebaseConfig );


function App() {
  return (
    <div className='App'>
      <Products/>
    </div>
    // <div className="App">
    //   <BrowserRouter>
    //     <CartProvider>
    //       <NavBar/>
    //       <Routes>
    //         <Route path= '/' element= {<ItemListContainer greeting={ 'Todos nuestros productos' }/>}/>
    //         <Route path= '/category/:categoryID' element= {<ItemListContainer greeting={ 'Productos por categoría' }/>}/>
    //         <Route path= '/item/:itemID' element= {<ItemDetailContainer/>}/>
    //         <Route path='/cart' element= { <Cart/> }/>
    //         <Route path= '*' element= {<h1> 404 NOT FOUND </h1>}/>
    //       </Routes>
    //     </CartProvider>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;