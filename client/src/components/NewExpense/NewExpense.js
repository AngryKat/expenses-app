import ExpenseForm from "./ExpenseForm";
import Card from '../UI/Card'

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    
    props.onAddExpense(expenseData)
  }

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </Card>
  );
};

export default NewExpense;
