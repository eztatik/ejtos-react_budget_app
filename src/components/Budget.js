
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX_VALUE = 20000;

const Budget = () => {
    const { budget,expenses, currency, dispatch } = useContext(AppContext);
    //const [newBudget, setNewBudget] = useState(budget);
    //const [newCurrency, setNewCurrency] = useState(currency);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
      }, 0);
    

    const handleBudgetChange = (event) => {
        //creating const to get the number being added 
        const enteredAmount = Number(event.target.value);
        //checking if the input is a number
        if(Number.isNaN(enteredAmount)){
            alert('Please enter a number');
            return;
        } 
        //checking if the input is a number onlu
        if (!Number.isInteger(enteredAmount)) {
            alert("Please enter an integer number.");
            return;
          }
          if (enteredAmount < totalExpenses) {
            alert(
              "The amount of the budget can't be lower than the total expenses " +
                currency +
                totalExpenses
            );
          } else {
            if (enteredAmount > BUDGET_MAX_VALUE) {
              alert("Please enter a value less that " + BUDGET_MAX_VALUE);
              return;
            }
            //action dispatch function, sent type and payload to reducer
            dispatch({
              type: "SET_BUDGET",
              payload: enteredAmount,
            });
          }
              
    }
         //setNewCurrency(newCurrency);
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;