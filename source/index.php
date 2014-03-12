<?php get_header(); ?>

<!--
<?php if ( have_posts() && is_archive() ) : ?>
	<header id="Page-Title" class="row">
		<div class="col-xs-12"><h1><?php
			if (is_category()) :
				$category = get_the_category();
				echo $category[0]->cat_name;
			elseif (is_month()) :
				echo 'Posts from ' . get_the_date('F Y');
			elseif (is_tag()):
				single_tag_title('Posts tagged ', true);
			else:
				echo 'Archives';
			endif;
		?></h1></div>
	</header>
<?php endif; ?>
-->

<section id="Page-Content" class="row">
	<article class="post-list col-sm-12 col-md-8 col-md-offset-2">
		<?php
			if ( have_posts() ) :
				while ( have_posts() ) : the_post();
					get_template_part('content', 'post');
				endwhile;
				paging_nav();
			else: ?>
				<p>Sorry, no posts matched your criteria.</p><?php
			endif; ?>
	</article>
<!--
	<aside class="hidden-xs col-sm-3">
		<?php //get_sidebar(); ?>
	</aside>
-->
</section>

<?php get_footer(); ?>
