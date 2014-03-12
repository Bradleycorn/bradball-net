	<header id="Page-Title" class="row">
		<div class="col-xs-12"><?php
			if (is_category()) :
				$category = get_the_category();
				echo $category[0]->cat_name;
			elseif (is_month()) :
				echo 'Posts from ' . get_the_date('F Y');
			elseif (is_tag()):
				echo 'Posts tagged ' . get_the_tag();
			else:
				echo 'Archives';
			endif;
		?></div>
	</header>

	<section id="Page-Content" class="row">
		<article class="col-xs-12 col-sm-9">
				<!-- Start Loop -->
		    	<h1 id="Post-Title"><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>
				<?php if (the_subtitle('','',false) != ''): ?>
				<h3 class="post-sub-title"><?php the_subtitle(); ?></h3>
				<?php endif; ?>
		    	<div id="Post-Meta-Data" class="clearfix">
		    		<span><?php echo strtolower(get_the_time('M jS, Y')); ?></span>
		    		<span><span class="glyphicon glyphicon-comment"></span> <a href="#comments">12</a></span>
		    		<span><span class="glyphicon glyphicon-tag"></span> <a href="#">Development</a>, <a href="#">Responsive</a>, <a href="#">HTML</a></span>
		    	</div>
		    	<?php the_content(); ?>
		    	<!-- End Loop -->
		</article>
		<aside class="hidden-xs col-sm-3">
			<?php get_sidebar(); ?>
		</aside>
	</section>