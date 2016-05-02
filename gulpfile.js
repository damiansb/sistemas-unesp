var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var $		= require('gulp-load-plugins')();

var sassPaths = [
	'bower_components/foundation-sites/scss',
	'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
	return gulp.src('scss/app.scss')
		.pipe($.sass({
			includePaths: sassPaths
		})
		.on('error', $.sass.logError))
		.pipe($.autoprefixer({
			browsers: ['last 2 versions', 'ie >= 9']
		}))
		.pipe(gulp.dest('css'));
});

gulp.task('usemin', function() {
	return gulp.src('./*.html')
		.pipe(usemin({
			css: [ minifyCss()/*, rev()*/ ],
			html: [ /*minifyHtml({ empty: true })*/ ],
			js: [ uglify()/*, rev()*/ ],
			inlinejs: [ uglify() ],
			inlinecss: [ minifyCss(), 'concat' ]
		}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sass'/*, 'usemin'*/], function() {
	gulp.watch(['scss/**/*.scss'], ['sass']);
	//gulp.watch(['*.html', 'js/**/*.js', 'css/**/*.css'], ['usemin']);
});