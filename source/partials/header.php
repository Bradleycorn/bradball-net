<?php require(get_template_directory() . "/_/inc/init.php"); ?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js ie ie6 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js ie ie7 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js ie ie8 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie ie9 lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<title><?php
		global $page, $paged;
		bloginfo( 'name' );
		wp_title( '|', true, 'left' );
		if ( $paged >= 2 || $page >= 2 )
			echo ' | ' . sprintf('Page %s', max( $paged, $page ) );
	?></title>

	<!-- Load Google Fonts -->
	<script src="//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js"></script>
	<script type="text/javascript">
		WebFont.load({
			google: {
				families: [
					'Roboto+Slab:400,700,300:latin',
					'Open+Sans:400italic,400,600,300,700,800:latin',
					'Roboto:400,900,100,300,700,500:latin'
				]
			}
		});
	</script>

	<meta name="description" content="<?php bloginfo('description'); ?>">
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width">
	<!-- Custom Favicon -->
	<!--link rel="shortcut icon" href="http://<?php echo(get_template_directory()); ?>/favicon.ico"-->
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<?php wp_head(); ?>
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/_/lib/respond/respond.js"></script>
	<![endif]-->
</head>
<body <?php body_class(); ?>>
<?php require(get_template_directory() . '/_/inc/grid.php'); ?>
<div id="Page-Wrapper">
<?php require(get_template_directory() . '/_/inc/off-canvas-menu.php'); ?>
<section id="Page-Canvas">
	<header id="Site-Header">
			<a   id="Site-Icon" href="/"><span>B</span>B</a>
			<div id="Site-Badge">
				<div id="Site-Name"><a href="/">BradBall.net</a></div>
				<div id="Tag-Line">Developer of web things, Dad, Jesus-Follower</div>
			</div>

			<button class="menu-handle pull-right">
				<span class="menu-icon"></span>
				<span class="menu-icon"></span>
				<span class="menu-icon"></span>
			</button>
	</header>
    <section id="Page-Body" class="container">
