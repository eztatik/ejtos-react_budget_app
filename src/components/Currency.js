import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Currency = () => {
   const {currency, dispatch } = useContext(AppContext);
  //const [newCurrency, setNewCurrency] = useState(currency);

  const [isOpen, setIsOpen] = useState(false);

  const setCurrencyHandler = (currency) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency,
    });
  };
  const currencyLabel = () => {
    switch (currency) {
      case "$":
        return "$ Dollar";
      case "£":
        return "£ Pound";
      case "€":
        return "€ Euro";
      case "₹":
        return "₹ Ruppee";
      default:
        return "";
    }
  }; 

  return (
        <div className='alert alert-success'> Currency {"("}
        {currencyLabel()}
        {")"} {
    //   <button name="Currency" id="Currency" onClick={() => setIsOpen(!isOpen)}>
    //     <option value="$" onClick={() => setCurrencyHandler("$")}>$ Dollar</option>
    //     <option value="£" onClick={() => setCurrencyHandler("£")}>£ Pound</option>
    //     <option value="€" onClick={() => setCurrencyHandler("€")}>€ Euro</option>
    //     <option value="₹" onClick={() => setCurrencyHandler("₹")}>₹ Ruppee</option>
    //   </button>	
      <DropdownButton id="dropdown-basic-button" title="Dropdown button" name="Currency"  onClick={() => setIsOpen(!isOpen)}>
      <Dropdown.Item onClick={() => setCurrencyHandler("$")}>$ Dollar</Dropdown.Item>
      <Dropdown.Item onClick={() => setCurrencyHandler("£")}>£ Pound</Dropdown.Item>
      <Dropdown.Item onClick={() => setCurrencyHandler("€")}>€ Euro</Dropdown.Item>
      <Dropdown.Item onClick={() => setCurrencyHandler("€")}>₹ Ruppee</Dropdown.Item>
    </DropdownButton>
    
      }	
    </div>
    );
};

export default Currency;