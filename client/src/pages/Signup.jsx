import { useState } from "react";
import { signupUser } from "../services/authServices";

const Signup = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		age: "",
		password: "",
	});

	const [loading, setLoading] = useState(false);
	const [msg, setMsg] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMsg("");
		setLoading(true);
		try {
			const res = await signupUser(form);
			setMsg(res.msg || "Signup successful");
			setForm({ name: "", email: "", age: "", password: "" });
		} catch (error) {
			setMsg(error.response?.data?.msg || "Something went wrong");
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
					Sign Up
				</h2>

				{msg && <p className="text-sm text-center mb-4 text-red-500">{msg}</p>}

				<input
					type="text"
					name="name"
					placeholder="Full Name"
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
					className="w-full mb-4 px-4 py-2 border rounded"
					required
				/>

				<button
					type="submit"
					disabled={loading}
					className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
				>
					{loading ? "Signing up..." : "Sign Up"}
				</button>
			</form>
		</div>
	);
};

export default Signup;
