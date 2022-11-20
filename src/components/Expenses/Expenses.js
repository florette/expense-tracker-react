import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
    const [year, setYear] = useState("2022");
    const onPickYear = (yearPicked) => {
        setYear(yearPicked);
        console.log(yearPicked);
    };

    const filteredExpenses = expenses.filter(
        (expense) => expense.date.getFullYear().toString() === year
    );

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onPickYear={onPickYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}
export default Expenses;
