import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ id, text, done, onChange, onDelete }) => {
  return (
    <li className={done ? 'list-item_done' : 'list-item'}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

// <li className={('list-item', { 'list-item_done': done })}>

// Task.propTypes = {
//   done: PropTypes.bool,
//   title: PropTypes.string,
//   onChange: PropTypes.func,
//   onDelete: PropTypes.func,
// };

// Task.defaultProps = {
//   title: '',
// };

export default Task;
