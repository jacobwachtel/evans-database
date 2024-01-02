import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Dashboard from './components/Dashboard';
import ItemList from './components/ItemList'
import Navbar from './components/Navbar';
import { Spinner } from './components/spinner';
import { fetchTools, selectAllTools, selectToolStatus } from './redux/tools/toolSlice';
import ModalForm from './components/ModalForm';


function App() {

  const [filteredTools, setFilteredTools] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const dispatch = useDispatch();
  const tools = useSelector(selectAllTools)
  const toolStatus = useSelector(selectToolStatus);

 
  

  useEffect(() => {
    if (toolStatus === 'idle') {
      dispatch(fetchTools())
    }
    
  },[toolStatus, dispatch])

  useEffect(() => {
    const filtered = tools.filter((tool) => {
      tool.name.toLowerCase().includes('d');
    })

    setFilteredTools(filtered)
    console.log(filtered)
  }, [searchQuery, tools])

  
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
    <>
    <header className='shadow'>
      <Navbar />
     
    </header>
    <main className='container px-4 pb-16 pt-20 text-center'>
      <div>
      <Dashboard 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      </div>
      <div>
      {/* <ModalForm /> */}
      </div>
      <div className='flex flex-row justify-evenly items-center'>
        {tools.length > 0 && tools.map(tools => {
          return <ItemList
            key={tools._id}
            tools={tools}
            />
          })
        
        }
      </div>
    </main>
</>
  );
}

export default App;
