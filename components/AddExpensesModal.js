import Modal2 from './Modal2';
import { useState, useContext } from 'react';
import { financeContext } from '@/lib/store/finance-context';

import { v4 as uuidv4 } from 'uuid';

function AddExpensesModal({ show }) {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { expenses, addExpenseItem} = useContext(financeContext);
  const addExpenseItemHandler = async() => {
    const expense = expenses.find((e) => {
      return e.id === selectedCategory;
    });

    const newExpense = {
      color: expense.color,
      title: expense.title,
      total: expense.total + +expenseAmount,
      items: [
        ...expense.items,
        {
          amount: +expenseAmount,
          createdAt: new Date(),
          id: uuidv4(),
        },
      ],
    };

   try {
    await addExpenseItem(selectedCategory, newExpense);
    setExpenseAmount("");
    setSelectedCategory("");
   } catch (error) {
    console.error(error.message);
   }
  };
  return (
    <Modal2 show={show}>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text stat-value">Enter an amount..</span>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cash-coin"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
            />
            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
          </svg>
          <input
            type="number"
            min={0.01}
            step={0.01}
            className="grow"
            placeholder="Enter expense amount"
            value={expenseAmount}
            required
            onChange={(e) => {
              setExpenseAmount(e.target.value);
            }}
          />
        </label>
      </label>

      {/*Expense categories */}

      {expenseAmount > 0 && (
        <div className="flex flex-col gap-4 mt-6">
       <div className='flex items-center justify-between'>
         <h3 className='text-2xl capitalize'>Select Expense Category</h3>
        <button className='text-lime-400'>+ New Category</button>
       </div>
       <div>
       </div>
          {expenses.map((expense) => {
            return (
              <button
                key={expense.id}
                onClick={() => {
                  setSelectedCategory(expense.id);
                }}
              >
                <div
                  style={{
                    boxShadow:
                      expense.id === selectedCategory
                        ? '1px 4px 2px white'
                        : 'none',
                  }}
                  className="flex items-center justify-between px-4 py-4 bg-primary rounded-3xl"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-[25px] h-[25px] rounded-full"
                      style={{ backgroundColor: expense.color }}
                    />
                    <h4 className="capitalize text-base-100">
                      {expense.title}
                    </h4>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {expenseAmount > 0 && selectedCategory && (
        <div className='mt-6'>
            <button className="btn btn-primary" onClick={addExpenseItemHandler}>
          Add Expense
        </button>
        </div>
      )}
    </Modal2>
  );
}

export default AddExpensesModal;
