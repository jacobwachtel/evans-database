import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ItemList from './components/ItemList'
import Navbar from './components/Navbar';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [picture, setPicture] = useState('')
  
  const [itemList, setItemList] = useState([])

  const [formState, setFormState] = useState({
    name: '',
    description: '',
    picture: '',
    owner: 'David Evans',
  })



  useEffect(() => {
    const data = fetch('http://localhost:3000/api/v1/tools')
      .then(response => response.json());
    data.then(data => setItemList(data))
    console.log(itemList);
  },[])

  return (
    <div className="App">
      <Navbar 
      formState={formState}
      setFormState={setFormState}
      setIsModalOpen={setIsModalOpen}
      isModalOpen={isModalOpen}
      name={name}
      setName={setName}
      description={description}
      setDescription={setDescription}
      picture={picture}
      setPicture={setPicture}
      />
      <Dashboard />
      {itemList.length > 0 && itemList.map(itemList => {
        return <ItemList 
        itemList={itemList}
        setItemList={setItemList}
        />
      })
    }
    </div>
  );
}

export default App;
