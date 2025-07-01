import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
	const { user } = useAuth();

	return (
		<div className="p-6">
			<h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h2>
			<p className="text-gray-700">
				Logged in as: <strong>{user?.name}</strong>
			</p>
			<p>
				Age : <strong>{user?.age}</strong>
			</p>
			<p>
				Email : <strong>{user?.email}</strong>
			</p>
		</div>
	);
};

export default Dashboard;
