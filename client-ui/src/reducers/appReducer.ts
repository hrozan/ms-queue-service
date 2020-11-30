import { SET_TITLE } from '../actions/actionsTypes';

const initialState = {
	title: 'Queues List',
}

export const appReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_TITLE:
			return {
				...state,
				title: action.payload,
			}
		default:
			return state
	}
}