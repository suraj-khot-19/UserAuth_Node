import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";

const Navbar = () => {
	const { user, setUser, loading } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logoutUser();
			setUser(null);
			navigate("/login");
		} catch (err) {
			console.error("Logout failed:", err);
		}
	};

	return (
		<nav className="bg-indigo-600 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="text-xl font-bold">
					AuthApp
				</Link>

				{!loading && (
					<div className="space-x-4">
						{user ? (
							<>
								<span className="text-sm">Hi, {user.name}</span>
								<Link to="/dashboard" className="hover:underline">
									Dashboard
								</Link>
								<button
									onClick={handleLogout}
									className="hover:underline text-sm"
								>
									Logout
								</button>
							</>
						) : (
							<>
								<Link to="/signup" className="hover:underline">
									Signup
								</Link>
								<Link to="/login" className="hover:underline">
									Login
								</Link>
							</>
						)}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
