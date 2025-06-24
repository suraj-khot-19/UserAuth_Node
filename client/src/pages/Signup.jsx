import { useState } from "react";
import { signupUser } from "../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		age: "",
		password: "",
	});

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await signupUser(form);
			toast.success(res.msg || "Signup successful");
			navigate("/login");
		} catch (error) {
			toast.error(error.response?.data?.msg || "Signup failed");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md p-6 bg-white shadow-md rounded"
			>
				<h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
					Signup
				</h2>

				<input
					type="text"
					name="name"
					placeholder="Name"
					value={form.name}
					onChange={handleChange}
					className="w-full mb-4 px-4 py-2 border rounded"
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Email Address"
					value={form.email}
					onChange={handleChange}
					className="w-full mb-4 px-4 py-2 border rounded"
					required
				/>
				<input
					type="number"
					name="age"
					placeholder="Age"
					value={form.age}
					onChange={handleChange}
					className="w-full mb-4 px-4 py-2 border rounded"
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={form.password}
					onChange={handleChange}
					className="w-full mb-6 px-4 py-2 border rounded"
					required
				/>

				<button
					type="submit"
					disabled={loading}
					className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
				>
					{loading ? "Creating Account..." : "Signup"}
				</button>
			</form>
		</div>
	);
};

export default Signup;
