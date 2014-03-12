<?php if ($Development) { ?>
<style type="tex/css">
	#grid {opacity: .5; position: fixed; top: 0px; height: 1000px; z-index: 10; width: 100%; }
	#grid div {height: 100%; }
	#grid div.col-sm-1:first-child { border-left: 1px solid red; }
	#grid div.col-sm-1:last-child { border-right: 1px solid red; }
	#grid div div div div { height: 100%; width: 100%; box-sizing: content-box; background-color: #f7bec2;}
</style>
<div id="grid">
<div class="container">
<div class="row">
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
  <div class="col-sm-1"><div></div></div>
</div>
</div>
</div>
<?php } ?>