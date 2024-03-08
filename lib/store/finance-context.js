'use client';

import { createContext, useState, useEffect } from 'react';

// Firebase
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

export const financeContext = createContext({
  income: [],
  expenses: [],
  addIncomeItem: async () => {},
  removeIncomeItem: async () => {},
  addExpenseItem: async () => {},
  addCategory: async () => {},
});

export default function FinanceContextProvider({ children }) {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

 const addCategory = async (category) => {
    try {
      const collectionRef = collection(db, "expenses");

      const docSnap = await addDoc(collectionRef, {
        ...category,
        items: [],
      });

      setExpenses((prevExpenses) => {
        return [
          ...prevExpenses,
          {
            id: docSnap.id,
            items: [],
            ...category,
          },
        ];
      });
    } catch (error) {
      throw error;
    }
  };

  const addExpenseItem = async (expenseCategoryId, newExpense) => {
    const docRef = doc(db, 'expenses', expenseCategoryId);
    try {
      await updateDoc(docRef, {...newExpense});
      setExpenses(prevState => {
        const updatedExpenses = [...prevState];

        const foundIndex = updatedExpenses.findIndex(expense => {
          return expense.id === expenseCategoryId;
        })

        updatedExpenses[foundIndex] = {id: expenseCategoryId, ...newExpense};

        return updatedExpenses;
      });
    } catch (error) {
      throw error;
    }
  };

  const addIncomeItem = async (newIncome) => {
    const collectionRef = collection(db, 'income');

    try {
      const docSnap = await addDoc(collectionRef, newIncome);

      setIncome((prevState) => {
        return [
          ...prevState,
          {
            id: docSnap.id,
            ...newIncome,
          },
        ];
      });

      console.log('Income added successfully:', docSnap.id);
    } catch (error) {
      console.error('Error adding income:', error);
      throw error;
    }
  };

  const removeIncomeItem = async (incomeId) => {
    const docRef = doc(db, 'income', incomeId);
    try {
      await deleteDoc(docRef);
      setIncome((prevState) => {
        return prevState.filter((i) => i.id !== incomeId);
      });
      console.log('Income deleted successfully:', incomeId);
    } catch (error) {
      console.error('Error deleting income:', error);
      throw error;
    }
  };

  const values = { income, expenses, addIncomeItem, removeIncomeItem, addExpenseItem, addCategory};

  useEffect(() => {
    const getIncomeData = async () => {
      const collectionRef = collection(db, 'income');
      const querySnapshot = await getDocs(collectionRef); // Await the promise

      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis()),
        };
      });

      setIncome(data);
    };

    const getExpensesData = async () => {
       const collectionRef = collection(db, 'expenses');
       const docSnap = await getDocs(collectionRef);

       const data = docSnap.docs.map((doc) =>{
        return{
          id: doc.id,
          ...doc.data()
        }
       });

       setExpenses(data);
    }

    getIncomeData();
    getExpensesData();
  }, []);

  return (
    <financeContext.Provider value={values}>{children}</financeContext.Provider>
  );
}
