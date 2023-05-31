import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import BucketView from './features/bucket/BucketView';
function App() {
  return (
    <>
      <BrowserRouter basename='/Shopping-Cart-Management'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Cart' element={<BucketView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

