import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="w-full py-4 px-6 shadow-md flex justify-between items-center bg-white">
			<h1 className="text-xl font-bold text-indigo-600">UserAuth</h1>
			<div className="space-x-4">
				<NavLink
					to="/signup"
					className={({ isActive }) =>
						isActive ? "text-indigo-600 font-semibold" : "text-gray-600"
					}
				>
					Signup
				</NavLink>
				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive ? "text-indigo-600 font-semibold" : "text-gray-600"
					}
				>
					Login
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
