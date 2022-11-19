import React from 'react';
import { connect } from 'react-redux';
import TasksList from './TasksList';
import * as tasksActions from '../tasks.actions';
import CreateTaskInput from './CreateTaskInput';

class TodoList extends React.Component {
  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    this.props.getTasksList();
  };

  hadleTaskStatusChange = id => {
    this.props.updateTask(id);
  };

  handleTaskDelete = id => {
    this.props.deleteTask(id);
  };

  handleTaskCreate = text => {
    this.props.createTask(text);
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.handleTaskCreate} />
          <TasksList
            tasks={this.props.tasks}
            handleStatusChange={this.hadleTaskStatusChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </main>
      </>
    );
  }
}

const mapState = (state, props) => {
  return {
    tasks: state.tasks.tasksList,
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
};

export default connect(mapState, mapDispatch)(TodoList);
