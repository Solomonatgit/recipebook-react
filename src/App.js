import Index from './Pages';
import Recipe1 from './Pages/recipe1';
import Recipe2 from './Pages/recipe2';
import Recipe3 from './Pages/recipe3';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/recipe1' element={<Recipe1/>} />
        <Route path='/recipe2' element={<Recipe2/>} />
        <Route path='/recipe3' element={<Recipe3/>} />
      </Routes>
    </Router>


   </div>
  );
}

export default App;
