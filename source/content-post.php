<?php $PostCategories = get_the_category(); ?>
<div class="post <?php echo $PostCategories[0]->slug; ?>">
	<?php if (is_single()): ?>
		<h1 class="post-title"><?php the_title(); ?></h1>
	<?php else: ?>
		<h2 class="post-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
	<?php endif; ?>
	<?php if (the_subtitle('','',false) != ''): ?>
		<h3 class="post-sub-title"><?php the_subtitle(); ?></h3>
	<?php endif; ?>
	<?php if (is_single()) : ?>
    	<div class="post-meta-data" class="clearfix">
    		<span><?php echo strtolower(get_the_time('M jS, Y')); ?></span>
    		<span><span class="glyphicon glyphicon-comment"></span> <a href="#comments"><?php comments_number('0','1','%'); ?></a></span>
    		<?php if (has_tag()) : ?>
    			<span><span class="glyphicon glyphicon-tag"></span><?php the_tags(' '); ?></span>
    		<?php endif; ?>
    	</div>
	<?php endif; ?>

	<div class="post-content">
		<?php the_content('read more'); ?>
	</div>
</div>
<hr class="post-divider" />
