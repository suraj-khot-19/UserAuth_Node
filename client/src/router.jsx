import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "signup",
				element: <Signup />,
			},
		],
	},
]);

export default router;
