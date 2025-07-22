import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Potfolio from './Pages/Potfolio';
// import { Element } from './Pages/Element';
// import { Chat } from './Pages/Chat';
// import { Blog } from './Pages/Blog'
// import Page from './Pages/Page'
import { Footer } from './Component/Footer';
import Header from './Component/Header';
import Main from './Pages/Home/Main';
import Register from './Pages/Register/Register';
import MainCard from './common/MainCard';
import Shop from './Pages/Shoap/Shop';
import Login from './Pages/Register/Login';
import { Toaster } from 'react-hot-toast';
import { PageNotFound } from './Pages/PageNotFound';

import UserContextProvider from './context/UserContextProvider';


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Header />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Main />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/mainCard/:Id' element={<MainCard />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>

  );
}

export default App;
