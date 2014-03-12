    </section><!-- Page-Body -->

    <!--[if lt IE 9]>
        <p class="chromeframe">You are using an <strong>outdated</strong> browser. 
        Please <a href="http://browsehappy.com/">upgrade your browser</a> 
        or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->

	<footer id="Site-Footer">
			<span class="pull-right"><a href="#" class="top-link">Back to top</a></span>
			&copy; 2000-<?php echo date('Y'); ?> BradBall.net
	</footer>
</section><!-- PageCanvas -->
</div><!-- Page-Wrapper -->
<?php
	require(get_template_directory() . '/_/inc/analytics.php');
	wp_footer();
?>
<!-- build:remove:dist -->
<script src="//local.bradball.net:1025/livereload.js"></script>
<!-- /build -->
</body>
</html>