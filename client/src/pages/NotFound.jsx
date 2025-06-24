import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
			<h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
			<p className="text-gray-600 mb-6">Page not found</p>
			<Link to="/" className="text-indigo-600 underline hover:text-indigo-800">
				Go back home
			</Link>
		</div>
	);
};

export default NotFound;
