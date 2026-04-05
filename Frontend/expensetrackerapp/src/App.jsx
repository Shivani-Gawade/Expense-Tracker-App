import { useEffect, useState } from "react";
import BalanceCard from "./components/BalanceCard";
import TransactionList from "./components/TransactionList";
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
  getSummary,
} from "./api";
import AddTransactionForm from "./components/AddTransactionForm";
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [Transactions, setTransactions] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  });

  useEffect(() => {
    if (isLoggedIn) {
      loadData();
    }
  }, [isLoggedIn]);

  const loadData = async () => {
    const data = await getTransactions();
    const sum = await getSummary();
    setTransactions(data);
    setSummary(sum);
  };

  const handleAdd = async (data) => {
    await addTransaction(data);
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    loadData();
  };

  const handleEdit = (transactions) => {
    setEditData(transactions);
  };

  return (
    <>
      {!isLoggedIn ? (
        <SignUp onLogin={() => setIsLoggedIn(true)}></SignUp>
      ) : (
        <div className="container mt-4">
          <h2 className="text-center mb-4">Expence Tracker</h2>

          {/* Balance Overview */}

          <div className="row">
            <div className="col-md-4">
              <BalanceCard
                title="Income"
                amount={summary.totalIncome}
                color="green"
              />
            </div>
            <div className="col-md-4">
              <BalanceCard
                title="Expense"
                amount={summary.totalExpense}
                color="red"
              />
            </div>
            <div className="col-md-4">
              <BalanceCard
                title="Balance"
                amount={summary.balance}
                color="blue"
              />
            </div>
          </div>

          {/* Transaction List */}
          <TransactionList
            transactions={Transactions}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />

          {/* Add Form */}
          <AddTransactionForm
            onAdd={handleAdd}
            editData={editData}
            reload={loadData}
            clearEdit={() => setEditData(null)}
          ></AddTransactionForm>
        </div>
      )}
    </>
  );
}

export default App;
