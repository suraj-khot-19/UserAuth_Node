import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Fetch user on app load
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await getCurrentUser();
				setUser(res.user);
			} catch (error) {
				setUser(null);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

// custom hook
export const useAuth = () => useContext(AuthContext);
