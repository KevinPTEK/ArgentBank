import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import User from './pages/User/User'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<User />} />
    </Routes>
  )
}

export default App