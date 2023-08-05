import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import DemoAnimation from './pages/demo_animation';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/demo',
			element: <DemoAnimation />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
