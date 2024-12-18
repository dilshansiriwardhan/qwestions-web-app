import '../globals.css';

export default function Exam({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<div className=''>
			{children}
		</div>
	);
}
