import { NOTIFICATION_MESSAGE } from 'Contants';

export default (state = { message: '', type: '' }, action) => {
  switch (action.type) {
    case NOTIFICATION_MESSAGE:
      return action.status;
    default:
      return state;
  }
};