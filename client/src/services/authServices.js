import api from "./api";

/**
 * Signup a new user
 * @param {Object} data - User data: { name, email, password, age }
 **/
export const signupUser = async (data) => {
	try {
		const response = await api.post("/signup", data);
		console.log(response)
		return response.data;
	} catch (error) {
		console.error("Signup failed:", error.response?.data || error.message);
		throw error;
	}
};

/**
 * Login existing user
 * @param {Object} data - Login data: { email, password }
 **/
export const loginUser = async (data) => {
	try {
		const response = await api.post("/login", data);
		return response.data;
	} catch (error) {
		console.error("Login failed:", error.response?.data || error.message);
		throw error;
	}
};

/**
 * Logout user
 **/
export const logoutUser = async () => {
	try {
		const response = await api.get("/logout");
		return response.data;
	} catch (error) {
		console.error("Logout failed:", error.response?.data || error.message);
		throw error;
	}
};

/**
 * Get current logged-in user info
 **/
export const getCurrentUser = async () => {
	try {
		const response = await api.get("/me");
		return response.data;
	} catch (error) {
		console.error(
			"Fetching user failed:",
			error.response?.data || error.message
		);
		throw error;
	}
};
