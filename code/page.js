import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page layout component
 */
const Page = ({ title, stylesheet, header, main, footer, script, _relativeURL, _ID }) => (
	<html>
	<head>
		<title>Cuttlebelle - { title }</title>
		<meta charSet="utf-8" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>

		<link rel="stylesheet" href={ _relativeURL( `/assets/css/site.css`, _ID ) } />
		{
			stylesheet != undefined
				? ( <link rel="stylesheet" href={ _relativeURL( `/assets/css/${ stylesheet }.css`, _ID ) } /> )
				: null
		}
	</head>
	<body>
		<nav>
    		<div className="nav-wrapper">
      			<a href="#" className="brand-logo left">Python</a>
    		</div>
  		</nav>

		<main>
			{ main }
		</main>

		<footer>
			{ footer }
		</footer>

		{
			script != undefined
				? ( <script src={ _relativeURL( `/assets/js/${ script }.js`, _ID ) } /> )
				: null
		}

	</body>
	</html>
);

Page.propTypes = {
/**
	 * title: Homepage
	 */
	title: PropTypes.string.isRequired,

	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
