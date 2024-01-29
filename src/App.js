import Index from './Pages';
import Recipe1 from './Pages/recipe1';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/recipe1' element={<Recipe1/>} />
      </Routes>
    </Router>


   </div>
  );
}

export default App;
