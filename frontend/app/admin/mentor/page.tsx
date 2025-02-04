'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '@nextui-org/input';
import {
	Button,
	getKeyValue,
	Select,
	SelectItem,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react';
import { useAuth } from '@clerk/nextjs';
import { Anybody } from 'next/font/google';

type RowType = {
	key: number;
	id: string;
	role: string;
	userName: string;
	email: string;
};

type ColumnType = {
	key: keyof RowType;
	label: string;
};

type Roles = 'admin' | 'student' | 'organization' | 'mentor';

type SelectData = {
	key: Roles;
	label: Roles;
};

const Mentor = () => {
	// const [name, setName] = useState('');
	// const [email, setEmail] = useState('');
	// const [phoneNumber, setPhone] = useState('');
	const [users, setUsers] = useState<RowType[]>([]);
	const Roles: SelectData[] = [
		{
			key: 'admin',
			label: 'admin',
		},
		{
			key: 'student',
			label: 'student',
		},
		{
			key: 'organization',
			label: 'organization',
		},
		{
			key: 'mentor',
			label: 'mentor',
		},
	];

	// const addMentor = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/mentor`,
	// 			{
	// 				method: 'POST',
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 				},
	// 				body: JSON.stringify({ name, email, phoneNumber }),
	// 			}
	// 		);

	// 		if (!response.ok) {
	// 			throw new Error('Failed to add mentor');
	// 		}

	// 		const data = await response.json();
	// 		alert('Mentor added successfully');
	// 		console.log(data);

	// 		// Reset form fields
	// 		setName('');
	// 		setEmail('');
	// 		setPhone('');
	// 	} catch (error) {
	// 		console.error(error);
	// 		alert('Error adding mentor');
	// 	}
	// };

	const getMentors = async () => {
		try {
			const users = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/user`
			);

			const data = await users.json();

			if (data) {
				const usersArray = data.map(
					(
						user: {
							_id: string;
							role: string;
							userName: string;
							email: string;
						},
						index: number
					) => ({
						key: index,
						id: user._id,
						role: user.role,
						userName: user.userName,
						email: user.email,
					})
				);

				setUsers(usersArray);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getMentors();
	}, []);

	useEffect(() => {
		console.log(users);
	}, [users]);
	const { getToken } = useAuth();

	const changeRole = async (newRole: string, id: string) => {
		console.log('Selected currentKey:', newRole);
		const token = await getToken();
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/user/${id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ role: newRole }),
				}
			);

			if (!response.ok) {
				const errorDetails = await response.json(); 
				throw new Error(`Failed to update role: ${JSON.stringify(errorDetails)}`);
			}

			const updatedUser = await response.json();
			console.log('User role updated successfully', updatedUser);
		} catch (error) {
			console.error('Error updating role:', error);
		}
	};
	return (
		<div>
			{/* <div>
				<h1>Add Mentor</h1>
				<div className='flex gap-10'>
					<Input
						label='Name'
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						label='Email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						label='Phone'
						type='text'
						value={phoneNumber}
						onChange={(e) => setPhone(e.target.value)}
					/>
					<Button onClick={addMentor}>Add</Button>
				</div>
			</div> */}
			<div>
				<Table aria-label='Example table with dynamic content'>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key}>
								{column.label}
							</TableColumn>
						)}
					</TableHeader>
					<TableBody items={users}>
						{(item) => (
							<TableRow key={item.key}>
								{(columnKey) => {
									if (columnKey === 'role') {
										return (
											<TableCell>
												{/* <SelectRole
													data={Roles}
													default={item.role}
													key={columnKey}
												/> */}
												<Select
													isDisabled={item.role === 'admin'}
													className='max-w-xs'
													defaultSelectedKeys={[
														item.role,
													]}
													aria-label='Select Role'
													placeholder='Select an Role'
													onSelectionChange={(
														keys
													) => {
														const currentKey: string =
															keys.currentKey ??
															' ';
														changeRole(
															currentKey,
															item.id
														);
													}}
												>
													{Roles.map((data) => (
														<SelectItem
															key={data.key}
														>
															{data.label}
														</SelectItem>
													))}
												</Select>
											</TableCell>
										);
									}

									return (
										<TableCell>
											{getKeyValue(item, columnKey)}
										</TableCell>
									);
								}}
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

const SelectRole = ({
	data,
	default: defaultRole,
}: {
	data: SelectData[];
	default: string;
}) => {
	return (
		<Select
			className='max-w-xs'
			defaultSelectedKeys={[defaultRole]}
			placeholder='Select an Role'
		>
			{data.map((data) => (
				<SelectItem key={data.key}>{data.label}</SelectItem>
			))}
		</Select>
	);
};

export default Mentor;

const columns = [
	{
		key: 'userName',
		label: 'Name',
	},
	{
		key: 'role',
		label: 'Role',
	},
	{
		key: 'email',
		label: 'Email',
	},
];
