import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import WorkContainer from './components/WorkContainer/WorkContainer'
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './styles/index.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/work/:id" element={<WorkContainer />} />
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
