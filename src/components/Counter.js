import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incerement,incerementByAmount } from '../redux/counter/counterSlice';

function Counter() {
  const [amount, setAmount] = useState(3)
  const countValue = useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();
  return (
    <div>
        <h1>{countValue}</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incerement())}>Incerement</button>
        <br/>
        <br/> 
   
       
        <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <button onClick={()=>dispatch(incerementByAmount(amount))}>incerementByAmount</button>
    </div>
  )
}

export default Counter