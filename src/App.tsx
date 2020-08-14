import React, { useState } from 'react'
import './App.css';
import useFetchData from './hooks/hooks'
import { getApi } from './helper/constants'
import SpacexType from './components/SpacexType/SpacexType'
import RocketsContainer from './containers/rocketsContainer/RocketsContainer'
import DragonsContainer from './containers/dragonsContainer/DragonsContainer'
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  const [{data: rocketsData}] = useFetchData(getApi('rockets'))
  const [{data: dragonsData}] = useFetchData(getApi('dragons'))
  
  const [selectedType, setSelectedType] = useState('')

  const handleSelectedSpaceType = (val: string) => {
    setSelectedType(val)

    if (val === 'rockets') {
      dispatch({type:'SET_ROCKETS_DATA', pay:rocketsData && rocketsData.data})
    }

    if (val === 'dragons') {
      dispatch({type:'SET_DRAGONS_DATA', pay:dragonsData && dragonsData.data})
    }
  }

  return (
    <div className="App container">
      <SpacexType selectedSpaceType={handleSelectedSpaceType}/>
      <section>
        {
          selectedType === 'rockets' && (<RocketsContainer/>)
        }
        {
          selectedType === 'dragons' && (<DragonsContainer/>)
        }
      </section>
    </div>
  )
}

export default App;
