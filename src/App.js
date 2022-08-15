import './App.css';
import React,{useState} from "react";

 function App() {
  const [weightInGr, setWeightInGr]=useState(0);
  const [weightInKg, setWeightinKg]=useState(0);
  const [weightInHg, setWeightinHg]=useState(0);
  const [weightInLb, setWeightinLb]=useState(0);
  const [weightInOz, setWeightinOz]=useState(0);

  const calculate=(e)=>{
    e.preventDefault();
    const formValid=+weightInGr>=0;
    if (!formValid){
      return;
    }
    setWeightinKg(+weightInGr/1000);
    setWeightinHg(+weightInGr/100);
    setWeightinLb(+weightInGr/453);
    setWeightinOz(+weightInGr/28.3125);
  }
  return (
    <div className="App">
      <div className='form_header'>
        <h1>My weight converter</h1>
        <h6>...simple, easy and accurate</h6>
      <form onSubmit={calculate}>
        <div>
          <label className='labelName'>Weight in Grammes</label>
          <input 
          value={weightInGr}
          onChange={(e)=>setWeightInGr(e.target.value)}
          className='textInput'/>
        </div>
        <button type="submit" className='convert_button'>convert</button>
      </form>
      
      <div className="display_text">{weightInKg} kg</div>
      <div className='display_text'>{weightInHg} hg</div>
      <div className='display_text'>{weightInLb} 1b</div>
      <div className='display_text'>{weightInOz} oz</div>
      </div>
     
    </div>
  );
}

export default App;
