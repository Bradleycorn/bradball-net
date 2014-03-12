	<?php $tags = get_tags(); ?>
	<h4 class="menu-header">Tags</h4>
	<ul class="list-inline">
		<?php foreach($tags as $tag) { 
			$taglink = get_tag_link($tag->term_id); ?>
			<li><a href="<?php echo $taglink; ?>" class="label"><?php echo $tag->name; ?></a></li>
		<?php } ?>
	</ul>

	<h4 class="menu-header">Archives</h4>
	<ul id="Archives">
		<?php wp_get_archives(); ?>
		<!--
		<li><a href="#">Tag 10</a></li>
		<li><a href="#">Tag 10</a></li>
		<li><a href="#">Tag 10</a></li>
	-->
	</ul>