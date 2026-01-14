import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WhatIs from './pages/WhatIs'
import Playground from './pages/Playground'
import License from './pages/License'
import Videos from './pages/Videos'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-is" element={<WhatIs />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/license" element={<License />} />
      </Routes>
    </Layout>
  )
}

export default App
