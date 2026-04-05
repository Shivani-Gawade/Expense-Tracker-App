import { useEffect, useState } from "react";
import { updateTransaction } from "../api";

const AddTransactionForm = ({ onAdd, editData, reload, clearEdit }) => {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: "",
    type: "",
  });

  useEffect(() => {
    if (editData) {
      setForm({
        description: editData.description || "",
        amount: editData.amount || "",
        category: editData.category || "",
        type: editData.transactionType || "",
      });
    }
  }, [editData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    //  validation
    if (!form.description || !form.amount || !form.category || !form.type) {
      alert("All fields are required");
      return;
    }

    const payload = {
      ...form,
      amount: Number(form.amount),
      transactionType: form.type,
    };

    if (editData && editData.id) {
      await updateTransaction(editData.id, payload);
      reload();
      clearEdit();
    } else {
      await onAdd(payload);
    }

    // reset form
    setForm({
      description: "",
      amount: "",
      category: "",
      type: "",
    });
  };

  return (
    <div className="card p-3 shadow mt-3">
      <h4>Add Transaction</h4>
      <form onSubmit={handleSubmit}>
        <input
          value={form.description}
          className="form-control mb-2"
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          value={form.amount}
          className="form-control mb-2"
          type="number"
          placeholder="Amount"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <select
          value={form.category}
          className="form-control mb-2"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Shopping</option>
          <option>Salary</option>
        </select>

        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="INCOME"
              checked={form.type === "INCOME"}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            />
            Income
          </label>

          <label className="ms-4">
            <input
              type="radio"
              name="type"
              value="EXPENSE"
              checked={form.type === "EXPENSE"}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            />
            Expense
          </label>
        </div>

        <button className="btn btn-primary w-100">
          {editData ? "Update Transaction" : "Add Transaction"}
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
