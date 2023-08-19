import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import { action, originals,horror,romance,comdey,documentries} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action Movies' isSmall/>
      <RowPost url={horror} title='Horror Movies' isSmall/>
      <RowPost url={romance} title='Romance Movies' isSmall/>
      <RowPost url={comdey} title='Comdey Movies' isSmall/>
      <RowPost url={documentries} title='Documentary Features' isSmall/>
    </div>
  );
}

export default App;
