import { api } from '~/lib';
import { Column, Task } from '~/types';

export type CreateTaskInput = {
	title: string;
	description: string;
	columnId: string;
	subTasks?: Array<{
		title: string;
		isDone: boolean;
	}>;
};

export type CreateTaskOutPutDto = {
	id: string;
	columnId: string;
	title: string;
	statusName: string;
	order: number;
	description: string | null;
	createdAt: string;
	updatedAt: string;
	subTasks: {
		id: string;
		title: string;
		isDone: boolean;
	}[];
};

export async function createTask(
	input: CreateTaskInput
): Promise<CreateTaskOutPutDto> {
	const { data } = await api.post('tasks', input);
	return data;
}

export type GetTasks = {
	tasks: Task[];
} & Column;

export type GetTasksInputTest = {
	boardId: string;
};

export async function getTasksFromBoard({ boardId }: GetTasksInputTest) {
	const { data } = await api.get<GetTasks[]>(`tasks/${boardId}`);

	return data;
}

export type DeleteTaskInput = {
	taskId: string;
};

export async function deleteTask({ taskId }: DeleteTaskInput): Promise<void> {
	await api.delete(`tasks/${taskId}/delete`);
}

export type UpdateSubTaskStatusInput = {
	subTaskId: string;
	isDone: boolean;
};

export async function updateSubTaskStatus({
	subTaskId,
	isDone
}: UpdateSubTaskStatusInput): Promise<void> {
	await api.patch(`subtasks/${subTaskId}/change-status`, { isDone });
}

export type MoveTaskInput = {
	taskId: string;
	columnId: string;
};

export async function moveTask({
	taskId,
	columnId
}: MoveTaskInput): Promise<void> {
	await api.patch(`tasks/${taskId}/move`, { columnId });
}
