"use client"

import { useState, useContext, useEffect } from "react";
import { financeContext } from "@/lib/store/finance-context";
import { authContext } from "@/lib/store/auth-context";

import { currencyFormatter } from "@/lib/utils";

import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";

import AddIncomeModal from "@/components/modals/AddIncomeModal";
import AddExpensesModal from "@/components/modals/AddExpensesModal";
import SignIn from "@/components/SignIn";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

  const [balance, setBalance] = useState(0);
  const [highestCategory, setHighestCategory] = useState('');
  const [currentMonthRange, setCurrentMonthRange] = useState('');

  const { expenses, income } = useContext(financeContext);
  const { user } = useContext(authContext);

  useEffect(() => {
    const newBalance =
      income.reduce((total, i) => {
        return total + i.amount;
      }, 0) -
      expenses.reduce((total, e) => {
        return total + e.total;
      }, 0);

    setBalance(newBalance);

    // Find the highest expense category
    const highestExpense = expenses.reduce((prev, current) => (prev.total > current.total) ? prev : current, {});
    if (highestExpense.total > 0) {
      setHighestCategory(`Highest Category is ${highestExpense.title}`);
    } else {
      setHighestCategory('');
    }

    // Calculate current month range
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentYear = currentDate.getFullYear();
    const startDate = new Date(currentYear, currentMonth - 1, 1); // Start date of current month
    const endDate = new Date(currentYear, currentMonth, 0); // Last day of current month
    const startDateString = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const endDateString = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    setCurrentMonthRange(`${startDateString} - ${endDateString}`);
  }, [expenses, income]);

  if (!user) {
    return <SignIn />;
  }

  return (
    <>
      {/* Add Income Modal */}
      <AddIncomeModal
        show={showAddIncomeModal}
        onClose={setShowAddIncomeModal}
      />

      {/* Add Expenses Modal */}
      <AddExpensesModal
        show={showAddExpenseModal}
        onClose={setShowAddExpenseModal}
      />

      <main className="container max-w-2xl px-6 mx-auto">
        <section className="py-3">
          <div className="stat-title text-warning">Account balance</div>
          <div className="stat-value">{currencyFormatter(balance)}</div>
        </section>

        <section className="flex items-center gap-2 py-3">
          <button
            onClick={() => {
              setShowAddExpenseModal(true);
            }}
            className="btn btn-sm btn-outline btn-accent"
          >
            + Expenses
          </button>
          <button
            onClick={() => {
              setShowAddIncomeModal(true);
            }}
            className="btn btn-sm btn-primary btn-outline"
          >
            + Income
          </button>
        </section>

        {/* Expenses */}
        <section className="py-6">
          <div className="stat-value text-2xl">My Expenses</div>
          <div className="stat-desc text-primary">{currentMonthRange}</div>

          <div className="flex flex-col gap-4 mt-6">
            {expenses.map((expense) => {
              return <ExpenseCategoryItem key={expense.id} expense={expense} />;
            })}
          </div>
        </section>

        {/* Chart Section */}
        <section className="py-6">
          <a id="stats" />
          <div className="stat-value">Stats</div>
          <div className="stat-desc text-primary">{highestCategory}</div>
          <div className="w-1/2 mx-auto">
            <Doughnut
              data={{
                labels: expenses.map((expense) => expense.title),
                datasets: [
                  {
                    label: "Expenses",
                    data: expenses.map((expense) => expense.total),
                    backgroundColor: expenses.map((expense) => expense.color),
                    borderColor: ["#18181b"],
                    borderWidth: 2,
                  },
                ],
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
