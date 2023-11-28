import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import { AppProvider } from './Context/AppContext'
import './App.css'

function App() {

  return (
    <>
    <AppProvider>
    <HashRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
    </AppProvider>
    </>
  )
}

export default App
