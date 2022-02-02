
import { useState } from 'react';
import './App.css';
import OrderImages from './OrderImages';
import MainDropdown from './Dropdowns/MainDropdown';
import SideDropdown from './Dropdowns/SideDropdown';
import DrinkDropdown from './Dropdowns/DrinkDropdown';
import OrderNameInput from './OrderNameInput';


function App() {
  const [mainId, setMainId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('Charles');
  const [instructions, setInstructions] = useState(['Please make curry extra spicey!!']);
  return (
    <div className="App">
      <OrderImages mainId={mainId} sideId={sideId} drinkId={drinkId} />

      <h1>Order For: {orderName}</h1>
      <div className='bottom'>
        <OrderNameInput setOrderName={setOrderName} />
        <section className='dropdown'>
          <MainDropdown setMainId={setMainId} />
          <SideDropdown setSideId={setSideId} />
          <DrinkDropdown setDrinkId={setDrinkId} />
        </section>

      </div>
     
    </div>
  );
}

export default App;
