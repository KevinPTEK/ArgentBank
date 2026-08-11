import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'

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