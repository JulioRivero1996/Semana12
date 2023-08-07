const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter,RouterProvider} = require('react-router-dom');

const PagesHome = require('./pages/home');
const PagesNuevoMusico = require('./pages/nuevo-musico')

const router = createBrowserRouter([
	{path: '/', element:  <PagesHome />},
	{path: '/nuevo-musico', element: <PagesNuevoMusico />}
])

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>,
	document.getElementById('react')
)