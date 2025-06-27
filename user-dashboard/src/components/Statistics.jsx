const Statistics = ({ tasks }) => {
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;
  const total = tasks.length;
  const completionRate = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="section stats">
      <h2>📊 Statistics</h2>

      <div style={{ marginBottom: '1rem' }}>
        <p style={{ color: 'rgb(76, 175, 80)', fontWeight: '600' }}>✅ Completed: {completed}</p>
        <p style={{ color: 'rgb(255, 152, 0)', fontWeight: '600' }}>⌛ Pending: {pending}</p>
        <p style={{ fontWeight: '500', color: '#555' }}>📋 Total: {total}</p>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${completionRate}%` }}
        ></div>
      </div>

      <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#666' }}>
        {completionRate === 100
          ? '🎉 All tasks completed!'
          : `Progress: ${completionRate.toFixed(0)}%`}
      </p>
    </div>
  );
};

export default Statistics;
