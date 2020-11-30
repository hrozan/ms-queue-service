import { SET_QUEUES } from '../actions/actionsTypes';

interface Task {
	id: string,
	payload: any,
	timestamp: Date,
}

export interface Queue {
	id: string,
	name: string,
	tasks: Array<Task>
}

const initialState = {
	queues: [
		{
			id: '1234',
			name: 'a1',
			tasks: [
				{
					id: '1123123',
					payload: null,
					timestamp: 1111111
				}
			]
		}
	],
}

export const queuesReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_QUEUES:
			return {
				...state,
				queues: action.payload,
			}
		default:
			return state
	}
}