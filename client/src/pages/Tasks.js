import React from 'react';
import NewTask from '../components/Tasks/NewTask';
import TasksList from '../components/Tasks/TasksList';

const Tasks = () => {
  return (
    <div className='tasks-page'>
      <h1>Create new task</h1>
      <NewTask />
      <h1>Todo List</h1>
      <div className='list-buttons'>
        <button className='list-button'>All</button>
        <button className='list-button'>Done</button>
        <button className='list-button'>Todo</button>
      </div>
      <TasksList />
      <div className='delete-buttons'>
        <button className='delete-button'>Delete done tasks</button>
        <button className='delete-button'>Delete all tasks</button>
      </div>
    </div>
  );
};

export default Tasks;