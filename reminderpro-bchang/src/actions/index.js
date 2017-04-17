import { ADD_REMINDER } from '../constants';
import { DELETE_REMINDER } from '../constants';
import { CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text: text,
    dueDate
  }
  console.log('action Add Reminder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id: id
  }
  console.log('deleting in acitons', action);
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}