import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
       </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
