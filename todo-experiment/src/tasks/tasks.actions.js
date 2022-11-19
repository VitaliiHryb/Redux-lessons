import * as gatewayFunctions from './tasksGateway';

export const TASK_LIST_RECIEVED = 'TASK_ACTIONS/TASK_LIST_RECIEVED';

export const taskListRecieved = tasksList => {
  const action = {
    type: TASK_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };

  return action;
};

export const getTasksList = () => {
  const thunkAction = (dispatch, getStore) => {
    gatewayFunctions.getTasksList().then(tasksList => {
      dispatch(taskListRecieved(tasksList));
    });
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = (dispatch, getState) => {
    const state = getState();
    const tasksList = state.tasks.tasksList;
    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    gatewayFunctions
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = (dispatch, getStore) => {
    gatewayFunctions.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};

export const createTask = text => {
  const thunkAction = (dispatch, getStore) => {
    const newTask = {
      text,
      done: false,
      createDate: new Date().toISOString(),
    };
    gatewayFunctions.createTask(newTask).then(() => dispatch(getTasksList()));
  };
  return thunkAction;
};
