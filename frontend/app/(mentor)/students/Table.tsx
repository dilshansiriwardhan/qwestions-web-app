'use client';

import { useRouter } from 'next/navigation';
import { FaEdit } from 'react-icons/fa';
import React from 'react';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
  } from "@nextui-org/react";


const LastTestTable: React.FC = () => {

	const rows = [
		{
            key: "1",
			topic: 'Data Structures and Machine Learning',
			participants: 90,
			status: 'In progress',
			category: 'ML',
			date: '6 Jul',
		},
		{
            key: "2",
			topic: 'Operating Systems',
			participants: 76,
			status: 'Done',
			category: 'OS',
			date: '8 Mar',
		},
		{
            key: "3",
			topic: 'Database Management Systems',
			participants: 62,
			status: 'In progress',
			category: 'Backend',
			date: '26 Sep',
		},
		{
            key: "4",
			topic: 'Discrete Mathematics',
			participants: 70,
			status: 'In progress',
			category: 'Maths',
			date: '1 Sep',
		},
		{
            key: "5",
			topic: 'Software Engineering',
			participants: 83,
			status: 'Done',
			category: 'Programming',
			date: '13 Feb',
		},
		{
            key: "6",
			topic: 'Algorithms',
			participants: 50,
			status: 'In progress',
			category: 'Programming',
			date: '22 Jan',
		},
        {
            key: "7",
			topic: 'Algorithms',
			participants: 50,
			status: 'In progress',
			category: 'Programming',
			date: '22 Jan',
		},
        {
            key: "8",
			topic: 'Algorithms',
			participants: 50,
			status: 'In progress',
			category: 'Programming',
			date: '22 Jan',
		},
	];

    const columns = [
        {
          key: "topic",
          label: "Topic",
        },
        {
          key: "participants",
          label: "Participants",
        },
        {
          key: "status",
          label: "STATUS",
        },
        {
          key: "category",
          label: "Category",
        },
        {
          key: "edit",
          label: "Edit",
        },
        {
          key: "date",
          label: "Date",
        },
      ];

	return (
		<div >
			<Table aria-label='Example table with dynamic content' fullWidth={true}>
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
							{(columnKey) => (
								<TableCell>
									{getKeyValue(item, columnKey)}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
};

export default LastTestTable;
