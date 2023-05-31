import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar';
import Home from './pages/home/Home';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter basename='/Shopping-Cart-Management'>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

