import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task 
            key={task.id} 
            task={task} 
            toggleCompletion={toggleCompletion} 
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
