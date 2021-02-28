import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Wake up',
        day: 'Everyday at 6:30AM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Get out of bed',
        day: 'Weekdays at 7:30AM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Drag a comb across my head',
        day: 'Weekdays at 9:00AM',
        reminder: true,
    },
    {
        id: 4,
        text: 'Find my coat',
        day: 'March 1st at 9:00AM',
        reminder: true,
    },
    {
        id: 5,
        text: 'Grab my hat',
        day: 'June 23rd at 11:45AM',
        reminder: true,
    },
    {
        id: 6,
        text: 'Make the bus in seconds flat',
        day: '24/7/365, Booyah!',
        reminder: true,
    },
  ]
)

//Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

//Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

//Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}  />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show!'}
    </div>
  );
}

export default App;
