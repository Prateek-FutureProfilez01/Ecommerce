import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Potfolio from './Pages/Potfolio';
import { Element } from './Pages/Element';
import Shop from './Pages/Shop';
import { Page } from './Pages/Page';
import { Chat } from './Pages/Chat';
import { Blog } from './Pages/Blog'
import { Footer } from './Component/Footer';
import Header from './Component/Header';
import Main from './Pages/Home/Main';
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/page' element={<Page />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/potfolio' element={<Potfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/element' element={<Element />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
