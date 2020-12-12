import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setQueues } from '../../actions';
import { Queue } from '../../reducers/queuesReducer';

import {
	IconButton,
	Paper,
	Table,
	TableContainer,
	TableCell,
	TableRow,
	TableBody,
	TableHead,
} from '@material-ui/core';

import {
	Send
} from '@material-ui/icons';

interface State {
	queuesState: {
		queues: Array<Queue>
	}
}

interface Props {
	storedQueues: Array<Queue>,
	setQueues: Function,
}

const QueuesList = (props: Props) => {

	const {
		storedQueues,
		setQueues,
	} = props;

	useEffect(() => {

		const queues = [
			{
				id: '123125', name: 'task-management-1', tasks: [
					{
						id: '1123123',
						payload: { 'abc': 123 },
						timestamp: 1111111
					}
				]
			},
			{
				id: '412421', name: 'task-management-2', tasks: [
					{
						id: '1123123',
						payload: 12312,
						timestamp: 1111111
					}
				]
			},
		];

		console.log('Get queues');
		setQueues(queues);

	}, []);

	const sendTask = (queueId: string) => {

		console.log(queueId);
	}

	const renderRowQueue = (queue: Queue) => {
		return (
			<TableRow key={queue.name}>
				<TableCell component="th" scope="row">
					{queue.id}
				</TableCell>
				<TableCell>{queue.name}</TableCell>
				<TableCell>{queue.tasks.length}</TableCell>
				<TableCell>
					<IconButton onClick={() => sendTask(queue.id)}>
						<Send fontSize="small" />
					</IconButton>
				</TableCell>
			</TableRow>
		)
	}

	return (
		<TableContainer component={Paper}>
			<Table size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Queue name</TableCell>
						<TableCell>Nº Tasks</TableCell>
						<TableCell />
					</TableRow>
				</TableHead>
				<TableBody>
					{storedQueues.map((queue) =>
						renderRowQueue(queue)
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

const mapStateToProps = (store: State) => ({
	storedQueues: store.queuesState.queues,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ setQueues }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QueuesList);