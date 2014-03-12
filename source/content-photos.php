<?php $PostCategories = get_the_category(); ?>
<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 post <?php echo $PostCategories[0]->slug; ?>">
	<?php
		$postDate = strtolower(get_the_time('M jS, Y'));
		$content = stristr(get_the_content(), "<small>", true);
	?>
	<a href="<?php the_permalink() ?>"><?php echo $content; ?></a>
	<small><?php echo $postDate; ?></small>
</div>
