'use client';
import React from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
} from '@nextui-org/react';

type RowType = {
	key: number;
	status: 'green' | 'red' | 'yellow'; // Restrict to valid keys in classNames
	name: string;
	indexNum: string;
	email: string;
	phoneNumber: string;
	marks: string;
};

// Define the columns
type ColumnType = {
	key: keyof RowType; // Keys must match RowType
	label: string;
};

const LastTestTable: React.FC = () => {
	const rows: RowType[] = [
		{
			key: 1,
			status: 'green',
			name: 'April Curtis',
			indexNum: 'S21120',
			email: 'gary_burton@icloud.com',
			phoneNumber: '+6510455495767',
			marks: '+46',
		},
		{
			key: 2,
			status: 'yellow',
			name: 'Devon Miles',
			indexNum: 'S21579',
			email: 'edith_stanley@yahoo.com',
			phoneNumber: '+620139250053',
			marks: '-13',
		},
		{
			key: 2,
			status: 'red',
			name: 'Mike Torello',
			indexNum: 'S21132',
			email: 'clifton_fitzgerald@yahoo.com',
			phoneNumber: '+5766059656346',
			marks: '+2',
		},
		{
			key: 3,
			status: 'green',
			name: 'Angus MacGyver',
			indexNum: 'S21473',
			email: 'lorenzo_dunn@gmail.com',
			phoneNumber: '+6924187871174',
			marks: '+33',
		},
		{
			key: 4,
			status: 'yellow',
			name: 'B.A. Baracus',
			indexNum: 'S21322',
			email: 'charlene_singh@icloud.com',
			phoneNumber: '+4513815421922',
			marks: '-18',
		},
		{
			key: 5,
			status: 'green',
			name: 'Theodore T.C. Calvin',
			indexNum: 'S21911',
			email: 'phil_burgess@outlook.com',
			phoneNumber: '+5886597044114',
			marks: '+55',
		},
	];

	const columns: ColumnType[] = [
		{
			key: 'status',
			label: 'Status',
		},
		{
			key: 'name',
			label: 'Name',
		},
		{
			key: 'indexNum',
			label: 'IndexNum',
		},
		{
			key: 'email',
			label: 'Email',
		},
		{
			key: 'phoneNumber',
			label: 'Phone',
		},
		{
			key: 'marks',
			label: 'Marks',
		},
	];

	const classNames = {
		green: 'bg-green-500',
		red: 'bg-red-500',
		yellow: 'bg-yellow-500',
	};

	return (
		<div>
			<Table
				aria-label='Example table with dynamic content'
				fullWidth={true}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn key={column.key}>
							{column.label}
						</TableColumn>
					)}
				</TableHeader>
				<TableBody items={rows}>
					{(item) => (
						<TableRow key={item.key}>
							{(columnKey) => {
								if (columnKey === 'status') {
									return (
										<TableCell>
											<div
												className={`${
													classNames[item.status]
												} w-3 h-3`}
											></div>
										</TableCell>
									);
								} else if (columnKey === 'marks') {
									const isPositive =
										parseInt(item.marks, 10) > 0;
									return (
										<TableCell>
											<span
												className={
													isPositive
														? 'text-green-500'
														: 'text-red-500'
												}
											>
												{item.marks}
											</span>
										</TableCell>
									);
								} else {
									return (
										<TableCell>
											{getKeyValue(item, columnKey)}
										</TableCell>
									);
								}
							}}
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
};

export default LastTestTable;
