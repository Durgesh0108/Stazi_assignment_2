import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyList from "./Pages/PropertyList";
import PropertyDetails from "./Pages/PropertyDetails";

const router = createBrowserRouter([
	{
		path: "/property",
		children: [
			{
				index: true,
				element:<PropertyList/>
			},
			{
				path: ":id",
				element: <PropertyDetails/>,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}
export default App;
