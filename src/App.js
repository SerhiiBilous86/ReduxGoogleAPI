import './App.css';
import InputFind from './components/InputFind';
import MapBox from './components/map';
import History from './components/history'
import { useState } from 'react';


function App() {

  const [visblhis, serVisblHis] = useState ('hidden');
  
  const SW = () => {
    let bool = visblhis === 'hidden' ? 'visible' : 'hidden'
    serVisblHis(bool);
  }
  

  return (
    <div >
        <MapBox />
        <InputFind />
        <History visible = {visblhis}/>
        <div className='HistBott' onClick={SW}> H </div>
    </div>
  );
}

export default App;
