import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({ tasks, handleStatusChange, handleTaskDelete }) => {
  const sortedList = tasks.slice().sort((a, b) => a.done - b.done);

  return (
    <ul className="list">
      {sortedList.map(task => (
        <Task
          key={task.id}
          {...task}
          onDelete={handleTaskDelete}
          onChange={handleStatusChange}
        />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default TasksList;
