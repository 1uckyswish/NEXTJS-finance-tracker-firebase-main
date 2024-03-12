import { useContext } from "react";
import { financeContext } from "@/lib/store/finance-context";
import Modal from "@/components/Modal";
import { currencyFormatter } from "@/lib/utils";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { format } from 'date-fns'; // Import format function from date-fns

function ViewExpenseModal({ show, onClose, expense }) {
  const { deleteExpenseItem, deleteExpenseCategory } = useContext(financeContext);

  const deleteExpenseHandler = async () => {
    try {
      await deleteExpenseCategory(expense.id);
      toast.success("Expense category deleted successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const deleteExpenseItemHandler = async (item) => {
    try {
      // Remove the item from the list
      const updatedItems = expense.items.filter((i) => i.id !== item.id);

      // Update the expense balance
      const updatedExpense = {
        items: [...updatedItems],
        total: expense.total - item.amount,
      };

      await deleteExpenseItem(updatedExpense, expense.id);
      toast.success("Expense item removed successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  // Date formatter function
  function formatDate(dateString) {
    const date = new Date(dateString);
    return format(date, 'MMMM do h:mm a');
  }

  return (
    <Modal show={show} onClose={onClose}>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl text-primary">{expense.title}</h2>
        <button onClick={deleteExpenseHandler} className="btn btn-error">
          Delete
        </button>
      </div>

      <div>
        <h3 className="my-4 text-2xl text-success">Expense History</h3>
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          {expense.items.map((item) => (
            <li key={item.id}>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-start">
                <div className="text-lg font-black">{item.description}</div>
                <time className="font-mono italic">
                  {formatDate(item.createdAt.toMillis ? new Date(item.createdAt.toMillis()).toISOString() : item.createdAt.toISOString())}
                </time>

                <div className="flex">
                  <p className="pr-2">{currencyFormatter(item.amount)}</p>
                  <button
                    onClick={() => deleteExpenseItemHandler(item)}
                    className=""
                  >
                    <FaRegTrashAlt color="#ff9900" fontSize="1em" />
                  </button>
                </div>
              </div>
              <hr className="bg-secondary ml-0 p-0" />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}

export default ViewExpenseModal;
