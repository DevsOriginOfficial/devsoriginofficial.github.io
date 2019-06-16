/* eslint-disable no-undef */
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
sass.compiler = require('node-sass');

const sassPath = {
	src: './assets/scss/**/*.scss',
	dest: './assets/css'
};

function vendorsCopier(cb) {
	// bootstrap
	src('./node_modules/bootstrap/scss/**/*').pipe(dest('./vendors/sass/'));
	src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js').pipe(dest('./vendors/bootstrap/js/'));

	// jquery
	src('./node_modules/jquery/dist/jquery.min.js').pipe(dest('./vendors/jquery/'));

	//for async completion
	cb();
}

function sassWatch() {
	function sassBuild() {
		return src(sassPath.src)
			.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			.pipe(postcss([ autoprefixer(), cssnano() ]))
			.pipe(sourcemaps.write())
			.pipe(dest(sassPath.dest));
	}

	watch(sassPath.src, sassBuild);
}

exports.vendors_copy = vendorsCopier;
exports.sass_watch = sassWatch;
