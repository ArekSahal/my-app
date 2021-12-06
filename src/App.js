
import './App.css';
import { useState } from "react";
import Card from "./card"
import DayForm from "./form"
import Picker from "./picker"
import Car from "./car"

function App() {
  const [date, setDate] = useState("100");
  

  let cars_data = [["218009", "Lamborghini Urus"],["425021", "Lamborghini Aventador"],["267569", "Lamborghini Huracán EVO "],["3300000", "Lamborghini Sián "],["10000000", "arek"]]
  const [target_price, setTarget] = useState("")
  const [target_car, setTargetCar] = useState("")

  return (
    <div className="App">
      <Picker setTarget={setTarget} setTargetCar={setTargetCar} cars_data={cars_data} />
      <Car car={target_car} />
      <DayForm setDate={setDate}/>
      <Card target={date} target_price={target_price} target_car={target_car}/>

      <h3>
      </h3>
    </div>
  );
}

export default App;
