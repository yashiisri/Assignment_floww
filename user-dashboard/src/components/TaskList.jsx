import React from 'react';

const TaskList = ({ tasks, onToggle }) => {
  return (
    <div className="section">
      <h2>🗂️ TaskList</h2>

      {tasks.map(task => (
        <div
          key={task.id}
          className="task-item"
          style={{
            backgroundColor: task.completed ? 'rgb(230, 255, 245)' : 'rgb(255, 249, 230)',
            borderLeft: `6px solid ${task.completed ? 'rgb(72, 187, 120)' : 'rgb(255, 193, 7)'}`,
            transition: 'all 0.3s ease',
          }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            style={{ transform: 'scale(1.3)' }}
          />
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? 0.6 : 1,
              color: task.completed ? 'rgb(72, 187, 120)' : '#444',
              fontWeight: 500,
              marginLeft: '10px',
              transition: 'all 0.3s ease',
            }}
          >
            {task.completed ? '✅ ' : '🕒 '}
            {task.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
