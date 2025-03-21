import {BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'

function App() {

  return (
   <BrowserRouter>
   <Header />
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/profile' element={<Profile/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
