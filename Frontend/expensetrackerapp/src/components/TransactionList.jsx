import TransactionItems from "./TransactionItems";

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  return (
    <div className="card p-3 shadow mt-3">
      <h4>Transaction</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <TransactionItems
              key={t.id}
              transactions={t}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
