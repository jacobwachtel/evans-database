import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Dashboard from './components/Dashboard';
import ItemList from './components/ItemList'
import Navbar from './components/Navbar';
import { Spinner } from './components/spinner';
import { fetchTools, selectAllTools, selectToolStatus } from './redux/tools/toolSlice';

import './App.css';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const stateObj = useSelector(state => state);

    console.log(stateObj);
  

  const [formState, setFormState] = useState({
    image: 'none',
    owner: 'David Evans',
  })

  const dispatch = useDispatch();
  const tools = useSelector(selectAllTools)
  const toolStatus = useSelector(selectToolStatus);
  

  useEffect(() => {
    if (toolStatus === 'idle') {
      dispatch(fetchTools())
    }
    
  },[toolStatus, dispatch])

  
  // let content;

  // if (toolStatus === 'loading'){
  //   content = <Spinner text='loading...' />
  // } else if (toolStatus === 'succeeded') {
  //   console.log('succeeded')
  //   content = 
  //   })
  // } else if (toolStatus === 'idle') {
  //     console.log('idle')
  // }

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
     {tools.length > 0 && tools.map(tools => {
      return <ItemList
      key={tools._id}
      tools={tools}
      />
     })
    } 
    </div>
  );
}

export default App;
