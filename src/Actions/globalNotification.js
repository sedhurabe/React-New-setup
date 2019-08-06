import { NOTIFICATION_MESSAGE } from 'Contants';

export const globalAction = (status) =>({
    type: NOTIFICATION_MESSAGE,
    status
})

export const globalNotificationAction = (status) => dispatch =>
    dispatch(globalAction(status))