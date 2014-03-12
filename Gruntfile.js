// Generated on 2013-12-20 using generator-php 0.4.0
'use strict';

// # Folder Paths
// to match only one level down:
// 'test/spec/{,*/}*.js'
// to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// CONFIGURABLE PATHS
	//  The yeomanConfig object contains file paths and other "constants" that are used throughout
	//  The rest of this Gruntfile. Basically, any value that is used in multiple places should be
	//  put here for ease of maintenance. Update the value here, and all other places are updated
	//  automagically.
	var yeomanConfig = {
		app: 'source',
		dist: 'dist',
		theme: 'theme',
		siteURL: 'bradball.net',
		devURL: 'local.bradball.net',
		devPort: 80
	};


	//The initConfig is were we define all possible operations that tasks can peform, and where we configure those
	//operations for each task.
	grunt.initConfig({

		// YEOMAN
		//  Create a yeoman object that contains our constants from above. We will refer to this object in
		//  the operations definitions below to get our "constant" values.
		yeoman: yeomanConfig,


		// WATCH
		//  The watch opertation will watch a set of files
		//  and run other operations when those files are
		//  edited or otherwised changed.
		watch: {
			sass: {
				files: '<%= yeoman.app %>/_/stylesheets/**/*.{scss,sass}', //Watch these files, and...
				tasks: ['sass:server'] //run this operation when the files change.
			},
			javascript: {
				files: '<%= yeoman.app %>/_/javascript/**/*.js',
				tasks: ['concatFiles:<%= yeoman.theme %>']
			},
			content: {
				files: [ //watch all files EXCEPT the sass files being watched above,
					'<%= yeoman.app %>/**/*',
					'!<%= yeoman.app %>/_/stylesheets/**/*.{scss,sass}',
					'!<%= yeoman.app %>/_/javascript/**/*.js'
				],
				tasks: [ //and run these operations when they change.
					'copyFiles:<%= yeoman.theme %>'
				]
			},
			livereload: {
				options: {livereload: 1025},
				files: [
					'<%= yeoman.theme %>/**/*'
				]
			}
		},

		// PROCESSHTML
		//  The processhtml operation will process the defined files
		//  looking for "build" comment blocks and processing them accordingly.
		//  In our case, we want to process the dist version of the tail.php
		//  and remove the script tags that were put in there for livereload
		//  purposes during development.
		processhtml: {
			dist: {
				files: {
					'.tmp/functions.php': ['<%= yeoman.app %>/_/includes/functions.php'],
					'<%= OutputDir %>/footer.php': ['<%= yeoman.app %>/partials/footer.php']
				}
			}
		},

		// REPLACE
		//  Goes through specified files and performs string replacement operations.
		replace: {
			dist: {
				src: '.tmp/functions.php',
				dest: '<%= OutputDir %>/functions.php',
				replacements: [
					{ //replace all .css files with .min.css
						from: '.css',
						to: '.min.css'
					},
					{ //now change the style.min.css back to just style.css
						from: 'style.min.css',
						to: 'style.css'
					},
					{ //replace all .js files with .min.js
						from: '.js',
						to: '.min.js'
					}
				]
			}
		},

		// OPEN
		//  The open operation is simple, it opens a web browser to the provided URL.
		//  Here, we setup the open operation to open the site's DEV url whenever the
		//  "server" task is run.
		open: {
			server: {
				path: 'http://<%= yeoman.devURL %>'
			}
		},




		// CLEAN
		//  The clean operation is useful to clean out folders prior to copying
		//  over new files. This operation will delete the contents of the folder.
		//  This operation is usually one of the first called when running grunt tasks
		//  to clean up our output directories before the remaining tasks copy new files
		//  to them.
		clean: [{
				dot: true,
				src: [
					'.tmp',
					'<%= OutputDir %>/**/*',
					'!<%= OutputDir %>/.git*'
				]
			}],

		// JSHINT
		//  The jshint operation will lint our javascript files
		//  making sure that there are no errors or bad formatting.
		//  The .jshintrc file in the project folder sets the options
		//  for linting. If the operations fails, the grunt script will abort.
		jshint: {
			options: {
				"bitwise": true,
				"curly": true,
				"eqeqeq": true,
				"eqnull": true,
				"expr": true,
				"latedef": "nofunc",
				"noarg": true,
				"node": true,
				"browser": true,
				"jquery": true,
				"trailing": true,
				"undef": true,
				"unused": true
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/_/javascript/**/*.js'
			]
		},

		// INLINELINT
		//  The inlinelint operation performs the same operation does the same job
		//  as the jshint operation (see above), but runs on inline scripts in
		//  html/php files.
		inlinelint: {
			all: [
				'<%= yeoman.app %>/**/*{.html,.php}',
				'!<%= yeoman.app %>/_/bower_components/**/*{.html,.php}'
			]
		},


		// PHPLINT
		//  The phplint operation will lint your php files to make sure there
		//  are no syntax errors. Note that the linter does not execute your scripts,
		//  it only does a syntax check.
		phplint: {
			all: ['<%= yeoman.app %>/**/*.php']
		},




		// SASS
		//  The sass operation runs the sass preprocessor
		//  on our Stylesheets to produce finalized css.
		sass: {
			server: {
				options: {
					sourcemap: true,
					debugInfo: true,
					lineNumbers: true,
					style: 'expanded',
					cacheLocation: '.tmp/.sass-cache'
				},
				files : [{
					expand: true,
					cwd: '<%= yeoman.app %>/_/stylesheets',
					src: '**/*.scss',
					dest: '<%= yeoman.theme %>',
					ext: '.css'
				}]
			},
			dist: {
				options: {
					sourcemap: false,
					debugInfo: false,
					lineNumbers: false,
					style: 'compact',
					cacheLocation: '.tmp/.sass-cache'
				},
				files : [{
					expand: true,
					cwd: '<%= yeoman.app %>/_/stylesheets',
					src: '**/*.scss',
					dest: '<%= yeoman.dist %>',
					ext: '.css'
				}]
			}
		},


		// REV
		//  The rev operation will apply revision numbers to filenames (filename.ext will become filename.revision_no.ext)
		//  This is usually applied only for production on files for which we want to force browser cache expiration.
		rev: {
			dist: {
				files: {
					src: [



					]
				}
			}
		},


		// USEMINPREPARE
		//  This operation is part of the usemin operation and is responsible for setting everything
		//  up. This operation will parse the files listed in the options defined here looking for
		//  comment blocks of the form:
		//          <!-- build:css({.tmp,app}) styles/main.css -->
		//          ...
		//          <!-- endbuild -->
		//  It will then parse the html between these blocks and update the configuration of the
		//  cssmin, concat, and uglify operations to make sure they will operate properly on the
		//  files defined in the html comment block. The Usemin operation (below) will then be
		//  responsible for updating these references to point to the newly created, combined
		//  and minified files. This operation should be run BEFORE the concat, cssmin, and uglify
		//  operations to ensure they are properly configured.
		useminPrepare: {
			options: {
				dest: '<%= OutputDir %>',
				flow: {
					server: {
						steps: {'js': ['concat']},
						post: {}
					},
					dist: {
						steps: {'js': ['concat', 'uglifyjs']},
						post: {}
					}
				}
			},
			server: {
				src: '<%= yeoman.app %>/**/*{.html,.php}'
			},
			dist: {
				src: '<%= yeoman.app %>/**/*{.html,.php}'
			}
		},


		// USEMIN
		//  The usemin operation will update references to javascript and css files that
		//  have beem concatinated and minified. See the USEMINPREPARE operation for instructions
		//  on how to identify references in your html/php with comment blocks. This operation
		//  should be run AFTER the concat, cssmin, and uglify operations. This is because this
		//  operation will ensure that the final output file(s) have been created before updating
		//  references to point to them.
		usemin: {
			options: {
				dirs: ['<%= OutputDir %>']
			},
			html: ['<%= OutputDir %>/**/*{.html,.php}'],
			css: ['<%= OutputDir %>/_/css/**/*.css']
		},


		// CSSMIN
		//  The cssmin operation will combine and minify css files.
		//  This operation is disabled by default, since the Usemin
		//  operation will take care of combining and minifying css
		//  files for us.
		cssmin: {
			dist: {
				options: {
					keepSpecialComments: 0
				},
				files: {
					'<%= OutputDir %>/_/lib/bootstrap/css/bootstrap.min.css' : [
						'<%= yeoman.app %>/_/bower_components/bootstrap/dist/css/bootstrap.css',
						'<%= yeoman.app %>/_/bower_components/bootstrap/dist/css/bootstrap-theme.css'
					]
				}
			}
		},

		// CONCAT
		//  The concat operation is used to combine several files
		//  into one final output file. This operation is included
		//  here for completeness, but not used since the uglify and
		//  usemin operations already combine files for us.
		concat: {
			server: {
				src: ['<%= yeoman.app %>/_/javascript/theme.js', '<%= yeoman.app %>/_/javascript/alert.js'],
				dest: '<%= OutputDir %>/_/js/theme.js'
			},
			dist: {
				src: ['<%= yeoman.app %>/_/javascript/theme.js', '<%= yeoman.app %>/_/javascript/alert.js'],
				dest: '.tmp/js/theme.js'
			}
		},

		// UGLIFY
		//  The uglify operation is used to minify javascript and css
		//  files. This operation is included here for completeness,
		//  but is not used since the usemin task already minifies
		//  files for us.
		uglify: {
			dist: {
				files: {
					'<%= OutputDir %>/_/lib/modernizr/modernizr.min.js': ['<%= yeoman.app %>/_/bower_components/modernizr/modernizr.js'],
					'<%= OutputDir %>/_/js/theme.min.js' : ['.tmp/js/theme.js']
				}
			}
		},


		// IMAGEMIN
		//  The imagemin operation will minify jpeg and png files
		//  using several methods to attempt to compress the size
		//  of each file.
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/_/img',
					src: '**/*.{png,jpg,jpeg}',
					dest: '<%= yeoman.dist %>/_/img'
				}]
			}
		},


		// SVGMIN
		//  The svgmin operation will minify svg files
		//  using several methods to attempt to compress the size
		//  of each file.
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/_/img',
					src: '**/*.svg',
					dest: '<%= yeoman.dist %>/_/img'
				}]
			}
		},


		// HTMLMIN
		//  The htmlmin operation will minify html markup in html/php files.
		//  The options allow for things like removing whitespace, condensing
		//  to a single line, removing attribute qutotes, etc. In practice,
		//  you may not want to minify your html in order to maintain readability
		//  in the browser.
		htmlmin: {
			dist: {
				options: {
					/*
					removeCommentsFromCDATA: true, // https://github.com/yeoman/grunt-usemin/issues/44
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeAttributeQuotes: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true
					*/
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>',
					src: '**/*.{html}',
					dest: '<%= yeoman.dist %>'
				}]
			}
		},


		// COPY
		//  The copy task does simply copying of files from one location to another.
		//  Most of the otheroperations allow for putting their output files in a
		//  particular location. However, some files are "static" and not used in
		//  any operations. The copy operation can be used to copy those files as needed,
		//  for example, moving files from the app folder to the dist folder for a push
		//  to production.
		copy: {
			all: {
				files: [
					//images
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/images',
						src: ['screenshot.png'],
						dest: '<%= OutputDir %>',
						flatten: true
					},
					//images
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/images',
						src: ['**/*','!screenshot.png'],
						dest: '<%= OutputDir %>/_/img',
						flatten: false
					},
					//includes
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/includes',
						src: ['**/*', '!functions.php'],
						dest: '<%= OutputDir %>/_/inc',
						flatten: false
					},
					//all other files
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/',
						src: ['**/*', '!_/**/*'],
						dest: '<%= OutputDir %>',
						flatten: true,
						filter: 'isFile'
					}
				]
			},
			server: {
				files: [
					//bootstrap
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/bower_components/bootstrap/dist',
						src: ['**/*.{css,js,eot,svg,ttf,woff}', '!**/*.min.*'],
						dest: '<%= OutputDir %>/_/lib/bootstrap',
						flatten: false
					},
					//jquery, modernizer
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/bower_components',
						src: ['**/jquery.js', '**/modernizr.js', '!**/test/**/*'],
						dest: '<%= OutputDir %>/_/lib',
						flatten: false
					},
					//respond
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/bower_components/respond',
						src: 'dest/respond.src.js',
						dest: '<%= OutputDir %>/_/lib/respond',
						ext: '.js',
						flatten: true
					},
					//functions.php
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/includes',
						src: ['**/functions.php'],
						dest: '<%= OutputDir %>',
						flatten: true
					},

				]
			},
			dist: {
				files: [
					//bootstrap - fonts and js only. css is handled by cssmin
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/bower_components/bootstrap/dist',
						src: ['**/*.{eot,svg,ttf,woff}', '**/*.min.js'],
						dest: '<%= OutputDir %>/_/lib/bootstrap',
						flatten: false
					},
					//jquery
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/bower_components/jquery',
						src: ['**/jquery.min.js'],
						dest: '<%= OutputDir %>/_/lib/jquery',
						flatten: false
					},
					//respond
					{
						expand: true,
						dot: false,
						cwd: '<%= yeoman.app %>/_/bower_components/respond',
						src: 'dest/respond.min.js',
						dest: '<%= OutputDir %>/_/lib/respond',
						ext: '.js',
						flatten: true
					}
				]
			}
		},

		// CONCURRENT
		//  The concurrent operation simply allows many other long-running operations
		//  to be run at the same time, to speed up the build process. Simply list
		//  the operations to be run concurrently, and it will be done.
		concurrent: {
			dist: [
				'sass:dist',
				'imagemin',
				'svgmin',
				'htmlmin'
			]
		}
	});
	// END INITCONFIG()

//	grunt.event.on('watch', function(action, filepath, target) {
//		grunt.config.set('OutputDir', '<%= yeoman.theme %>')
//	});


	/******************************************************************\
	|*  GRUNT TASK SETUP
	|*
	|*  In this section, we will define and configure the different
	|*  tasks that we want to be able to run using grunt. To run
	|*  a task, simply call grunt <taskname> from the commandline.
	|*  We'll also define a 'default' task to be run when no task
	|*  is provided.
	|*
	\*******************************************************************/



	// SERVER
	//  The server task is used to "start a server". If you are using php's built-in
	//  web server for development testing, it will be started up. We'll start watching
	//  any files that need to be watched for changes, and open a browser to our dev URL
	grunt.registerTask('server', function () {
		grunt.config.set('OutputDir', '<%= yeoman.theme %>');
		grunt.task.run([
			'clean',
			'sass:server',
//			'useminPrepare:server',
			'concat:server',
			'copy:all',
			'copy:server',
//			'usemin',
//			'open:server',
			'watch'
		]);
	});

	// BUILD
	//  The build task will "build" our project, and put the final output into
	// the dist folder, making it ready for deployment to our production environment.
	grunt.registerTask('build', function() {
		grunt.config.set('OutputDir', '<%= yeoman.dist %>');
		grunt.task.run([
			'clean',
			'sass:dist',
//			'useminPrepare:dist',
			'concat:dist',
			'uglify',
			'cssmin:dist',
			'processhtml:dist',
			'replace:dist',
			'copy:all',
			'copy:dist'
//			'usemin'
		]);

	});

	grunt.registerTask('copyFiles', function(outputDir) {
		grunt.config.set('OutputDir', outputDir);
		grunt.task.run([
			'copy',
			'usemin'
		]);
	});

	grunt.registerTask('concatFiles', function(outputDir) {
		grunt.config.set('OutputDir', outputDir);
		grunt.task.run([
			'useminPrepare:server',
			'concat'
		]);
	});


	// DEFAULT
	//  The default task is run whenever no other task is provided. Here,
	//  we'll run the build task by default.
	grunt.registerTask('default', [
		//'jshint',
		//'inlinelint',
		'phplint',
		//'test',
		'build'
	]);
};