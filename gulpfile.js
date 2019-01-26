const { watch, src, dest, series, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

// START THE BROWSER SYNC SERVER
function startServer(done) {
	browserSync.init({
		server: {
			baseDir: './dist/'
		}
	})
	done();
}

// RELOAD THE PAGE
function reload(done) {
	browserSync.reload();
	done();
}

// TRANSPILING JS 
function transpileJs(){
	return src('src/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(dest('dist/'))
}

// TRANSPILING SASS
function transpileSass() {
	return src('src/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cleanCSS())
	.pipe(dest('dist/css/'))
}

// WATHCING FOR CHANGES
watch('src/*.js', series(transpileJs, reload));
watch('src/scss/*.scss', series(transpileSass, reload));
watch('dist/*.html', reload)

// DEFAULT TASK 
exports.default = series( parallel(transpileJs, transpileSass), startServer);