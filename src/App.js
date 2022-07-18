import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ItemList from './components/ItemList'
import Navbar from './components/Navbar';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Navbar setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
      <Dashboard />
      <ItemList />

    </div>
  );
}

export default App;
