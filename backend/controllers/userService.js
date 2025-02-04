const User = require('../models/user.model.js');
const Student = require('../models/student.model.js');
const Mentor = require('../models/mentor.model.js');
const Organization = require('../models/organization.model.js');

class UserService {
	static async updateRole(userId, newRole, session = null) {
		const user = await User.findById(userId);

		if (!user) throw new Error('User not found');
		const { role: previousRole } = user;

		if (previousRole !== newRole) {
			// Update the role in the User model
			user.role = newRole;
			await user.save({ session });

			// Handle role-specific operations
			await this.handleRoleSpecificOperations(user, newRole, session);
		}

		return user;
	}

	static async handleRoleSpecificOperations(user, newRole, session = null) {
		const { _id, clerkUserId, email, userName } = user;
		const roleModels = {
			student: Student,
			mentor: Mentor,
			organization: Organization,
		};

		// Remove records for other roles
		for (const [role, model] of Object.entries(roleModels)) {
			if (role !== newRole) {
				await model.findOneAndDelete({ clerkUserId }, { session });
			}
		}

		// Add a new record for the selected role, if it doesn't already exist
		const currentModel = roleModels[newRole];

		// Use `upsert` to handle both the existence check and insertion in one step
		const existingRecord = await currentModel
			.findOne({ clerkUserId })
			.session(session);

		if (!existingRecord) {
			await currentModel.create(
				[{ clerkUserId, name: userName, email }],
				{ session }
			);
		}
	}
}

module.exports = UserService;
