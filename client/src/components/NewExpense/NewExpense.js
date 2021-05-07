import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <Card className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={hideFormHandler}
        />
      ) : (
        <button type="button" onClick={showFormHandler}>
          Add New Expense
        </button>
      )}
    </Card>
  );
};

export default NewExpense;
