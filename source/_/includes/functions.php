<?php


function theme_scripts_styles() {
	global $wp_styles, $wp_scripts;

	//Declare Header Styles
	wp_register_style('bootstrap', get_template_directory_uri() . '/_/lib/bootstrap/css/bootstrap.css');
	//<!-- build:remove:dist -->
	wp_register_style('bootstrap-theme', get_template_directory_uri() . '/_/lib/bootstrap/css/bootstrap-theme.css');
	//<!-- /build -->
	wp_register_style('style', get_template_directory_uri() . '/style.css');

	//Queue Header Styles
	wp_enqueue_style('bootstrap');
	//<!-- build:remove:dist -->
	wp_enqueue_style('bootstrap-theme');
	//<!-- /build -->
	wp_enqueue_style('style');

	//Declare Header Scripts
	wp_register_script( 'modernizr', get_template_directory_uri() . '/_/lib/modernizr/modernizr.js');

	//Queue Header Scripts
	wp_enqueue_script('modernizr');

	//Declare Footer Scripts
	wp_deregister_script('jquery');
	wp_register_script( 'jquery', get_template_directory_uri() . '/_/lib/jquery/jquery.js', array(), '', true);
	wp_register_script( 'bootstrap', get_template_directory_uri() . '/_/lib/bootstrap/js/bootstrap.js', array('jquery'), '', true);
	wp_register_script( 'theme-js', get_template_directory_uri() . '/_/js/theme.js', array('jquery'), '', true);

	//Queue Footer Scripts
	wp_enqueue_script('bootstrap');
	wp_enqueue_script('theme-js');

	//TODO - Google analytics
}
add_action('wp_enqueue_scripts', 'theme_scripts_styles');


function list_comments($comment, $args, $depth) {
	$GLOBALS['comment'] = $comment;
	extract($args, EXTR_SKIP);

	if ( $args['style'] == 'div') {
		$tag = 'div';
		$add_below = 'comment';
	} else {
		$tag = 'li';
		$add_below = 'div-comment';
	}?>
	<<?php echo $tag ?> <?php comment_class(empty( $args['has_children'] ) ? '' : 'parent') ?> id="comment-<?php comment_ID(); ?>">

	<?php if ( $args['style'] !=  'div') : ?><div id="div-comment-<?php comment_ID() ?>" class="comment-body"><?php endif; ?>

		<header class="comment-header"><!-- <?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?> -->
			<?php edit_comment_link(__('Edit'),'<div class="pull-right">','</div>' );?>
			<?php if ($args['avatar_size'] != 0) echo get_avatar( $comment, $args['avatar_size'] ); ?>
			<cite class="comment-author"><?php echo get_comment_author_link(); ?></cite>  <span class="glyphicon glyphicon-calendar"></span><?php echo get_comment_date('n/d/Y'); ?> <span class="glyphicon glyphicon-time"></span> <?php echo get_comment_date('g:ia'); ?>
		</header>
		<?php if ($comment->comment_approved == '0') : ?>
			<em class="comment-awaiting-moderation">Comment is awaiting moderation.</em>
			<br />
		<?php else : ?>
			<?php comment_text() ?>
		<?php endif; ?>
		<!--div class="reply">
			<?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
		</div-->

	<?php if ( 'div' != $args['style'] ) : ?></div><?php endif; 
}

function paging_nav() {
	global $wp_query;

	// Don't print empty markup if there's only one page.
	if ( $wp_query->max_num_pages < 2 )
		return;
	?>
	<nav class="navigation paging-navigation clearfix" role="navigation">
		<?php if ( get_next_posts_link() ) : ?>
		<div class="nav-previous pull-right"><?php next_posts_link('Older posts &raquo;'); ?></div>
		<?php endif; ?>

		<?php if ( get_previous_posts_link() ) : ?>
		<div class="nav-next"><?php previous_posts_link('&laquo; Newer posts'); ?></div>
		<?php endif; ?>
	</nav><!-- .navigation -->
	<?php
}

?>