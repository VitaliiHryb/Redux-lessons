import React from 'react';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import {
  createTask,
  updateTask,
  deleteTask,
  getTasksList,
} from '../tasksGateway';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    getTasksList().then(tasksList => {
      this.setState({ tasks: tasksList });
    });
  };

  hadleTaskStatusChange = id => {
    const { tasks } = this.state;
    const { done, text, createDate } = tasks.fetchTasksList();
    const updatedTask = {
      text,
      createDate,
      done: !done,
    };

    updateTask(id, updatedTask).then(this.fetchTasksList);
  };

  handleTaskDelete = id => {
    deleteTask(id).then(this.fetchTasksList);
  };

  handleTaskCreate = text => {
    createTask({
      text,
      done: false,
      createDate: new Date().toISOString(),
    }).then(this.fetchTasksList);
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.handleTaskCreate} />
          <TasksList
            tasks={this.state.tasks}
            handleStatusChange={this.hadleTaskStatusChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </main>
      </>
    );
  }
}

export default TodoList;
