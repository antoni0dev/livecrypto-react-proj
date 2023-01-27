import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import SignIn from './routes/Signin'
import SignUp from './routes/Signup'
import CoinPage from './routes/CoinPage'
import Account from './routes/Account'
import Footer from './components/Footer'

const App = () => {

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<Account />} />
        <Route path='/coin/:coinId' element={<CoinPage />}>
          <Route path=':coinId' />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App