'use client';

import { useContext, useEffect, useState } from 'react';
import { financeContext } from '@/lib/store/finance-context';

import { currencyFormatter } from '@/lib/utils';

import ExpenseCategoryItem from '@/components/‎ExpenseCategoryItem';

import AddIncomeModal from '@/components/AddIncomeModal';
import AddExpensesModal from '@/components/AddExpensesModal';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {

  const { expenses, income } = useContext(financeContext);
    const [balance, setBalance] = useState(0);

      useEffect(() => {
    const newBalance =
      income.reduce((total, i) => {
        return total + i.amount;
      }, 0) -
      expenses.reduce((total, e) => {
        return total + e.total;
      }, 0);

    setBalance(newBalance);
  }, [expenses, income]);
  
  return (
    <>
      {/*Toast */}
      <AddIncomeModal />
      {/* ADD INCOME MODAL */}

       {/* ADD Expense MODAL */}
      <AddExpensesModal/>

      <main className="container max-w-3xl py-5 mx-auto">
        <section>
          <div className="stat">
            <div className="stat-title text-warning">Account balance</div>
            <div className="stat-value">{currencyFormatter(balance)}</div>
            <div className="stat-actions flex item-center gap-2 py-1">
              <button
                className="btn btn-sm btn-outline btn-accent"
                onClick={() =>
                  document.getElementById('my_modal_4').showModal()
                }
              >
                + Expenses
              </button>
              <button
                className="btn btn-sm btn-primary btn-outline"
                onClick={() =>
                  document.getElementById('my_modal_3').showModal()
                }
              >
                + Income
              </button>
            </div>
          </div>
        </section>
        {/* expenses */}
        <div className="stats stats-vertical">
          <div className="stat">
            <div className="stat-value text-2xl">My Expenses</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
        </div>

        <section className="mx-5">
          <div className="flex flex-col gap-4 mt-6">
            {expenses.map((expense) => {
              return (
                <ExpenseCategoryItem
                  key={expense.id}
                  color={expense.color}
                  title={expense.title}
                  total={expense.total}
                />
              );
            })}
          </div>
        </section>

        {/*Chart section */}
        <div className="stat">
          <div className="stat-value">Stats</div>
          <div className="stat-desc">Highest Category is Gas</div>
        </div>
        <section className="py-2">
          <div className="flex justify-center">
            <div className="">
              <Doughnut
                data={{
                  labels: expenses.map((expense) => expense.title),
                  datasets: [
                    {
                      label: 'Expenses',
                      data: expenses.map((expense) => expense.total),
                      backgroundColor: expenses.map(
                        (expense) => expense.color
                      ),
                      borderColor: ['#18181b'],
                      borderWidth: 2,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/*{income.map((i) => {
          return (
            <div className="flex justify-between item-center display-none" key={i.id}>
              <div>
                <p className="font-semibold">{i.description}</p>
                <small className="text-xs">{i.createdAt.toISOString()}</small>
              </div>
              <p className="flex items-center gap-2">
                {currencyFormatter(i.amount)}
                <button
                    onClick={() => {
                      deleteIncomeEntryHandler(i.id);
                    }}
                  >
                    <FaRegTrashCan />
                  </button>
              </p>
            </div>
          );
        })} */
