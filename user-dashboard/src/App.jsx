import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import TaskList from './components/TaskList';
import Statistics from './components/Statistics';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setUser(data.user);
        setTasks(data.tasks);
      });
  }, []);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <div className="dashboard">
      {user && <Profile user={user} onUpdate={updateUser} />}
      <TaskList tasks={tasks} onToggle={toggleTask} />
      <Statistics tasks={tasks} />
    </div>
  );
}

export default App;
