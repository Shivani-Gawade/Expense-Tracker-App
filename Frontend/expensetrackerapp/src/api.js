// ---------------- BASE URL ----------------
const BASE_URL = "http://localhost:9092/api/auth";
const TXN_URL = "http://localhost:9092/api/transactions";

// ---------------- HELPER ----------------
const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// ---------------- AUTH ----------------

// SIGNUP
export const signupUser = async (data) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Signup failed");
  }

  return res.json();
};

// LOGIN
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

// ---------------- TRANSACTIONS ----------------

// GET ALL USER TRANSACTIONS
export const getTransactions = async () => {
  const user = getUser();

  const res = await fetch(`${TXN_URL}?email=${user.email}`);
  return res.json();
};

// ADD TRANSACTION
export const addTransaction = async (data) => {
  const user = getUser();

  await fetch(`${TXN_URL}?email=${user.email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

// DELETE TRANSACTION
export const deleteTransaction = async (id) => {
  const user = getUser();

  await fetch(`${TXN_URL}/${id}?email=${user.email}`, {
    method: "DELETE",
  });
};

// UPDATE TRANSACTION
export const updateTransaction = async (id, data) => {
  const user = getUser();

  await fetch(`${TXN_URL}/${id}?email=${user.email}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

// GET SUMMARY
export const getSummary = async () => {
  const user = getUser();

  const res = await fetch(`${TXN_URL}/summary?email=${user.email}`);
  return res.json();
};
