const mongoose = require('mongoose');
const UserService = require('./userService');
const User = require('../models/user.model.js');

const updateUser = async (req, res) => {
    try {
      const { role } = req.body;
      const { userId } = req.auth;
  
      // Validate role
      const allowedRoles = ['admin', 'student', 'organization', 'mentor'];
      if (!allowedRoles.includes(role)) {
        return res.status(400).json({ message: 'Invalid role value' });
      }
  
      // Check admin privileges
      const requestingUser = await User.findOne({ clerkUserId: userId });
      if (!requestingUser || requestingUser.role !== 'admin') {
        return res.status(403).json({ message: 'Admins only.' });
      }
  
      const session = await mongoose.startSession();
      session.startTransaction();
  
      const user = await UserService.updateRole(req.params.id, role, session);
  
      await session.commitTransaction();
      session.endSession();
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  

















// const updateUserDisabled = () => async (req, res) => {
// 	try {
// 		const { role } = req.body;
// 		const { userId } = req.auth; // Clerk's authenticated user ID

// 		const allowedRoles = ['admin', 'student', 'organization', 'mentor'];
// 		if (!role || !allowedRoles.includes(role)) {
// 			return res.status(400).json({ message: 'Invalid role value' });
// 		}

// 		// Check if the authenticated user is an admin
// 		// Fetch user's role from your database using `userId`
// 		const requestingUser = await User.findOne({ clerkUserId: userId });
// 		if (!requestingUser || requestingUser.role !== 'admin') {
// 			return res
// 				.status(403)
// 				.json({ message: 'Access denied. Admins only.' });
// 		}

// 		const updatedUser = await User.findByIdAndUpdate(
// 			req.params.id,
// 			{ role },
// 			{ new: true }
// 		);

// 		if (!updatedUser) {
// 			return res.status(404).json({ message: 'User not found' });
// 		}

// 		if (role !== 'student') {
// 			const student = await Student.findOne({ id: req.params.id });

// 			// If the student exists, delete them
// 			if (student) {
// 				await Student.findByIdAndDelete(student._id);
// 				console.log('Student record deleted successfully.');
// 			}
// 		} else if (role !== 'mentor') {
// 			const mentor = await Mentor.findOne({ id: req.params.id });

// 			// If the mentor exists, delete them
// 			if (mentor) {
// 				await Student.findByIdAndDelete(mentor._id);
// 				console.log('Mentor record deleted successfully.');
// 			}
// 		} else if (role !== 'organization') {
// 			const organization = await Organization.findOne({
// 				id: req.params.id,
// 			});

// 			// If the organization exists, delete them
// 			if (organization) {
// 				await Student.findByIdAndDelete(organization._id);
// 				console.log('Organization record deleted successfully.');
// 			}
// 		}

// 		const user = await User.findById({ id: req.params.id });

// 		if (role === 'student') {
// 			const existingStudent = await Student.findOne({
// 				id: req.params.id,
// 			});

// 			if (!existingStudent) {
				
// 				const newStudent = new Student({
// 					clerkUserId: user.clerkUserId,
// 					name:user.userName,
// 					email:user.email
// 				});
// 				await newStudent.save();
// 				console.log('New student entity created successfully.');
// 			}
// 		} else if (role === 'mentor') {
// 			const existingMentor = await Mentor.findOne({ id: req.params.id });

// 			if (!existingMentor) {
// 				const newMentor = new Mentor({
// 					clerkUserId: user.clerkUserId,
// 					name:user.userName,
// 					email:user.email
// 				});
// 				await newMentor.save();
// 				console.log('New mentor entity created successfully.');
// 			}
			
// 		} else if (role === 'organization') {
// 			const existingOrganization = await Organization.findOne({
// 				id: req.params.id,
// 			});

// 			if (!existingOrganization) {
// 				const newOrganization = new Organization({
// 					clerkUserId: user.clerkUserId,
// 					name:user.userName,
// 					email:user.email
// 				});
// 				await newOrganization.save();
// 				console.log('New organization entity created successfully.');
// 			}
			
// 		}

// 		res.status(200).json(updatedUser);
// 	} catch (error) {
// 		res.status(500).json({ message: error.message });
// 	}
// }

module.exports = { updateUser };