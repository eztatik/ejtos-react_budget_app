import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
//   const {dispatch } = useContext(AppContext);
  const { currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);


    const changeCurrency = (val)=>{
            setNewCurrency(val)
    }
    

  return (
        <div className='alert alert-success'> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">{newCurrency} Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;