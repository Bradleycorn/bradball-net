<?php $PostCategories = get_the_category(); ?>
<div class="post <?php echo $PostCategories[0]->slug; ?>">
	<div class="post-content">
		<?php the_content('read more'); ?>
	</div>
</div>
