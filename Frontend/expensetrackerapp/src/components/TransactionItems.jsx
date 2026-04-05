const TransactionItem = ({ transactions, onDelete, onEdit }) => {
  if (!transactions) return null;
  return (
    <tr>
      <td>{transactions.description}</td>
      <td>{transactions.category}</td>
      <td
        style={{
          color: transactions.transactionType === "INCOME" ? "green" : "red",
        }}
      >
        {transactions.transactionType === "INCOME" ? "+" : "-"}{" "}
        {transactions.amount}
      </td>

      <td>
        <button
          className="btn btn-success btn-sm  m-2"
          onClick={() => onEdit(transactions)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(transactions.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TransactionItem;
