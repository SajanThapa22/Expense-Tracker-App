import "bootstrap/dist/css/bootstrap.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState<
    { id: number; description: string; amount: number; category: string }[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        expenses={visibleExpenses}
      />
    </>
  );
}

export default App;
