import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ items }) {
    const expensesList = items.map((expense) => {
        return (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id}
            />
        );
    });
    return (
        <ul className="expenses-list">
            {items.length > 0 ? (
                expensesList
            ) : (
                <h2 className="expenses-list__fallback">Found no expenses</h2>
            )}
        </ul>
    );
}
export default ExpensesList;
