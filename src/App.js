import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyList from "./Pages/PropertyList";
import PropertyDetails from "./Pages/PropertyDetails";
import Home from "./Pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "property",
				children: [
					{
						index: true,
						element: <PropertyList />,
					},
					{
						path: ":id",
						element: <PropertyDetails />,
					},
				],
			},
		],
	},

	// {
	// 	path: "/property",
	// 	children: [
	// 		{
	// 			index: true,
	// 			element:<PropertyList/>
	// 		},
	// 		{
	// 			path: ":id",
	// 			element: <PropertyDetails/>,
	// 		},
	// 	],
	// },
]);

function App() {
	return <RouterProvider router={router} />;
}
export default App;
