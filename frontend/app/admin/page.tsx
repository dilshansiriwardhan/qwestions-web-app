// import React from 'react';
// import { getServerSession } from 'next-auth';
// import { options } from '../api/auth/[...nextauth]/options.jsx';
// import { redirect } from 'next/navigation';

// const AdminPage = async () => {
// 	const session = await getServerSession(options);

// 	if (!session) {
// 		redirect('/api/auth/signin?callbackUrl=/admin');
// 	}
//     if (session?.user?.role != 'admin') {
// 		redirect('/denied');
// 	}

// 	return <div>AdminPage</div>;
// };

// export default AdminPage;
