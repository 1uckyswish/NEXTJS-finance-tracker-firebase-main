import { useRef, useState, useEffect, useContext } from 'react';

import { currencyFormatter } from '@/lib/utils';

import Modal from '@/components/Modal';
import Toast from '@/components/Toast';

//context
import { financeContext } from '@/lib/store/finance-context';

// icons
import { FaRegTrashCan } from 'react-icons/fa6';

import { format } from 'date-fns';

function AddIncomeModal() {
  const [toast, setToast] = useState(null);
  const amountRef = useRef();
  const descriptionRef = useRef();
  const { income, addIncomeItem, removeIncomeItem } =
    useContext(financeContext);

  // Handler Functions
  async function addIncomeHandler(e) {
    e.preventDefault();
    const newIncome = {
      amount: +amountRef.current.value,
      description: descriptionRef.current.value,
      createdAt: new Date(),
    };

    try {
      await addIncomeItem(newIncome);
      descriptionRef.current.value = '';
      amountRef.current.value = '';
      setToast(
        <Toast alert="Income added successfully" type="alert-success" />
      );
    } catch (error) {
      setToast(<Toast alert="Error adding income" type="alert-error" />);
      console.log(error.message);
    }
  }

  async function deleteIncomeEntryHandler(incomeId) {
    try {
      await removeIncomeItem(incomeId);
      setToast(
        <Toast alert="Income deleted successfully" type="alert-success" />
      );
    } catch (error) {
      setToast(<Toast alert="Error deleting income" type="alert-error" />);
      console.log(error.message);
    }
  }

  function formatDate(date) {
    return format(new Date(date), 'MMMM do h:mm a');
  }
  return (
    <Modal>
      <form onSubmit={addIncomeHandler} className="flex flex-col gap-4 w-full">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text stat-value">Income Amount</span>
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
              ref={amountRef}
              min={0.01}
              step={0.01}
              className="grow"
              placeholder="Enter income amount"
              required
            />
          </label>
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text stat-value">Income Description</span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-blockquote-left"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm.79-5.373q.168-.117.444-.275L3.524 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562Q2 7.587 2 7.969q0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282q.036-.305.123-.498a1.4 1.4 0 0 1 .252-.37 2 2 0 0 1 .346-.298zm2.167 0q.17-.117.445-.275L5.692 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562q-.165.31-.164.692 0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282a1.8 1.8 0 0 1 .118-.492q.087-.194.257-.375a2 2 0 0 1 .346-.3z" />
            </svg>
            <input
              type="text"
              ref={descriptionRef}
              className="grow"
              placeholder="Enter income description"
              required
            />
          </label>
        </label>

        <button type="submit" className="btn btn-primary">
          Add entry
        </button>
      </form>

      <div className="flex flex-col gap-4 mt-6">
        <span className="label-text stat-value text-lg">Income History</span>

        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          {income.map((i) => (
            <li key={i.id}>
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
                <div className="text-lg font-black">{i.description}</div>
                <time className="font-mono italic">
                  {formatDate(i.createdAt)}
                </time>

                <div className="flex">
                  <p className="pr-2">{currencyFormatter(i.amount)}</p>
                  <button
                    onClick={() => deleteIncomeEntryHandler(i.id)}
                    className=""
                  >
                    <FaRegTrashCan color="#ff9900" fontSize="1em" />
                  </button>
                </div>
              </div>
              {/* Apply Tailwind CSS utility classes to remove margin and padding */}
              <hr className="bg-secondary ml-0 p-0" />
            </li>
          ))}
        </ul>
      </div>

      {toast && toast}
    </Modal>
  );
}

export default AddIncomeModal;
