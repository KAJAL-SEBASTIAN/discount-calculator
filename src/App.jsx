import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [amount,setAmount]=useState(0);
  const [discount,setDiscount]=useState(0);
  const [interest,setInterest]=useState(0);//result
  const [pay,setPay]=useState(0)

  console.log(amount,discount);
  
   const calculate=(e)=>{
  const output = amount*discount/100
  const dis = amount-output
  console.log(output);
  setInterest(output);
  setPay(dis)
  }
  
  const reset=(e)=>{
    setAmount(0)
    setDiscount(0)
   setInterest(0)
   setPay(0)
  }



  return (
    <div className="App">
     
 <div className="header">
        <h1 >DISCOUNT CALCULATOR</h1>
      </div>
      <div className="row">
      <div className="col-4">
      <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/discountMainBanner.png" alt="" />
      
      </div>
      <div className="col-4" id='text'>

      <TextField id="outlined-basic" value={amount || ""} onChange={(e)=>setAmount(e.target.value)} label="Original Price" variant="outlined" />
<br /> <br />
      <TextField id="outlined-basic"  value={discount || ""} onChange={(e)=>setDiscount(e.target.value)}  label="Discount Percentage" variant="outlined" /><br /> <br />
      <Button variant="contained" style={{backgroundColor:'purple', padding:'10px',margin:'20px'}} onClick={e=>calculate(e)} >CALCULATE</Button>
      <Button variant="contained" style={{backgroundColor:'purple', padding:'10px',margin:'20px'}}  onClick={e=>reset(e)} >RESET</Button>
      
      </div>
     
 
 
      <div className="col-4">
      <div className="save">
      <h1>You Saved:&#8377;  {interest} </h1><br />
      <h1>Pay Only:&#8377; {pay}</h1>
      </div>
      </div>
      </div>
      </div>
     
  
  );
}

export default App;
