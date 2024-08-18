// VotingStats.jsx
const VotingStats = ({ localVoteCount, partyVoteCount }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="card">
        <h3 className="text-lg font-semibold">عدد الأشخاص الذين قاموا بالتصويت محليًا</h3>
        <p className="text-xl">{localVoteCount}</p>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold">عدد الأشخاص الذين قاموا بالتصويت حزبيًا</h3>
        <p className="text-xl">{partyVoteCount}</p>
      </div>
    </div>
  );
};

export default VotingStats;
