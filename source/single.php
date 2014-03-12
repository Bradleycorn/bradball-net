<?php get_header(); ?>
<section id="Page-Content" class="row">
	<article class="single-post col-sm-12 col-md-8 col-md-offset-2">
		<?php 
			while (have_posts()) : 
				the_post();
				get_template_part('content', 'post');
    			comments_template( '', true ); 
	    	endwhile; 
	    ?>
	</article>
<!--
	<aside class="hidden-xs col-sm-3">
		<?php //get_sidebar(); ?>
	</aside>
-->
</section>
<?php get_footer(); ?>