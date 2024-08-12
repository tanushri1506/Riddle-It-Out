import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import AddCard from './components/AddCard/AddCard';
import UpdateCard from './components/UpdateCard/UpdateCard';




function App() {
 

  return (
    <Routes>
			
			<Route path="/" exact element={<Home/>} />
      <Route path="/add" element={<AddCard/>} />
      <Route path="/edit" element={<UpdateCard/>} />
			

		</Routes>
  );
}

export default App;