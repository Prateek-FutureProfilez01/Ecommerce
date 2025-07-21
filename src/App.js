import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Potfolio from './Pages/Potfolio';
import { Element } from './Pages/Element';
import { Chat } from './Pages/Chat';
import { Blog } from './Pages/Blog'
import { Footer } from './Component/Footer';
import Header from './Component/Header';
import Main from './Pages/Home/Main';
import Register from './Pages/Register/Register';
import Form from './Pages/Register/Form';
import MainCard from './common/MainCard';
import Page from './Pages/Page'
import Shop from './Pages/Shoap/Shop';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/page' element={<Page />} />
        <Route path='/potfolio' element={<Potfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/element' element={<Element />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/register' element={<Register />} />
        <Route path='/form' element={<Form />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/mainCard/:Id' element={<MainCard />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
