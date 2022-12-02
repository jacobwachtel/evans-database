import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ItemList from './components/ItemList'
import Navbar from './components/Navbar';

// TODO: If no file was uploaded, then use default picture



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  
  const [itemList, setItemList] = useState([])

  const [formState, setFormState] = useState({
    image: 'none',
    owner: 'David Evans',
  })

  const fetchData = () => {
    const data = fetch('http://localhost:8000/api/v1/tools')
      .then(response => response.json());
    data.then(data => setItemList(data))
  }

  useEffect(() => {
    fetchData();
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
      image={image}
      setImage={setImage}
      />
      <Dashboard />
      {itemList.length > 0 && itemList.map(itemList => {
        return <ItemList
        key={itemList._id}
        itemList={itemList}
        setItemList={setItemList}
        />
      })
    }
    </div>
  );
}

export default App;
