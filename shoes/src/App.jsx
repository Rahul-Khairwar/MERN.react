
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'

function App() {
 
  return (
    <>
  
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='men' element={<Men/>}/>
    <Route path='women' element={<Women/>}/>
    <Route path='kid' element={<Kids/>}/>
     
    
    
    </Route>
   </Routes>
   </BrowserRouter>


    </>
  )
}

export default App
