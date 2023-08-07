const React = require('react');
const ReactDOM = require('react-dom');

const PagesHome = require('./pages/home');
const PagesNuevoMusico = require('./pages/nuevo-musico')

ReactDOM.render(
	<PagesNuevoMusico />,
	document.getElementById('react')
)