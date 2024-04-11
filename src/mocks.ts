import type { ListRow } from "./types";

export const defaultListArr:Array<ListRow> = [
	{
		id: '1',
		name: 'Test list 1',
		lastLead: '2021-09-01',
		leads: 10,
	},
	{
		id: '2',
		name: 'Test list 2',
		lastLead: '',
		leads: 0,
	}
]