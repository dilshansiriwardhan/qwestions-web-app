'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button, getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';

type RowType = {
	key: number;
	id:string;
	role:string;
};


type ColumnType = {
	key: keyof RowType;
	label: string;
};

const Mentor = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhone] = useState('');
	const [users, setUsers] = useState<RowType[]>([]);

	const addMentor = async () => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/mentor`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ name, email, phoneNumber }),
				}
			);

			if (!response.ok) {
				throw new Error('Failed to add mentor');
			}

			const data = await response.json();
			alert('Mentor added successfully');
			console.log(data);

			// Reset form fields
			setName('');
			setEmail('');
			setPhone('');
		} catch (error) {
			console.error(error);
			alert('Error adding mentor');
		}
	};

	const getMentors = async () => {
		try {
			const users = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/user`
			);

			const data = await users.json();

			if(data){
        const usersArray = data.map(
          (user: { _id: string; role: string }, index: number) => ({
            key: index,
            id: user._id,
            role: user.role,
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

	// useEffect(() => {
	// 	const fetchExams = async () => {
	// 		try {
	// 			const examResponse = await fetch(
	// 				`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/exam/${examId}`
	// 			);
	// 			if (!examResponse.ok) {
	// 				throw new Error('Network response was not ok');
	// 			}

	// 			const data: Exam = await examResponse.json();
	// 			setExamName(data.examName);

	// 			const questionResponse = await fetch(
	// 				`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/question/${examId}`
	// 			);
	// 			if (!questionResponse.ok) {
	// 				throw new Error('Questions response was not ok');
	// 			}

	// 			const questionData: Question[] = await questionResponse.json();
	// 			setQuestions(questionData);
	// 		} catch (error: any) {
	// 			setError(error.message);
	// 		}
	// 	};

	// 	fetchExams();
	// }, [examId]);

	return (
		<div>
			<div>
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
			</div>
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
		</div>
	);
};

export default Mentor;

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "id",
    label: "Id",
  },
  {
    key: "role",
    label: "Role",
  },
];