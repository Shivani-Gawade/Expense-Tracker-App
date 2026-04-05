const BalanceCard = ({ title, amount, color }) => {
  return (
    <div className="card shadow p-3 text-center">
      <h5>{title}</h5>
      <h3 style={{ color }}>{amount}</h3>
    </div>
  );
};

export default BalanceCard;
