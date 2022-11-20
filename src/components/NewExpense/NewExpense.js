import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    };

    const showFormHandler = () => {
        setShowForm((prevState) => !prevState);
    };

    const cancelFormHandler = () => {
        setShowForm(false);
    };
    return (
        <div className="new-expense">
            {showForm ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={cancelFormHandler}
                />
            ) : (
                <button onClick={showFormHandler}>Add New Expense</button>
            )}
        </div>
    );
}
export default NewExpense;
