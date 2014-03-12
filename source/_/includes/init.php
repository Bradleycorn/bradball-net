<?php
	//Setup Variable for tracking VirtualPageViews in analytics.
	$VirtualPageView = "";

	//Variables to store Site/URL information
	$ServerName = $_SERVER['SERVER_NAME'];
	$SiteSection = "";
	$SubSection = "";

	$RequestMethod = $_SERVER['REQUEST_METHOD'];
	$FormErrors = array();
	$Development = false;

	//SET SERVER SPECIFIC VARIABLES AND CONSTANTS
	switch ($ServerName) {
		case 'dev.bradball.net':
			define("ANALYTICS_ID", "");
			break;
		case 'bradball.net':
			define("ANALYTICS_ID", "");
			break;
		default:
			define("ANALYTICS_ID", "");
			break;
	}
?>