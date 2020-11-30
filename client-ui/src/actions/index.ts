import { Queue } from '../reducers/queuesReducer';
import { SET_QUEUES, SET_TITLE } from './actionsTypes';

/** Testing different return styles */

export const setTitle = (title: string) => {
    return {
        type: SET_TITLE,
        payload: title,
    }
}

export const setQueues = (queues: Array<Queue>) => ({
    type: SET_QUEUES,
    payload: queues,
});
