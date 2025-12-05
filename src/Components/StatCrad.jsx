

function StatCard({ number, label }) {
  return (
    <div className="col-md-4 text-center mb-3" >
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}

export default StatCard;