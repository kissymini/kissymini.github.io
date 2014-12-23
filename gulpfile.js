/**
 * Gulp Build
 */
var gulp = require('gulp');
var map = require('map-stream');
var markdown = require('gulp-markdown');
var jade = require('jade');
var gulpJade = require('gulp-jade');
var connect = require('gulp-connect');

gulp.task('default', ['markdown', 'index']);

// 处理文档
gulp.task('markdown', function(){

  return gulp.src("source/docs/**/*.md")
    .pipe(markdown({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    }))
    .pipe(map(function(file, cb) {

      // 将 source/docs 下的 markdown 文档编译并套上 source/views/page.jade 模板

      var fileContents = file.contents.toString('utf-8');
      file.contents = new Buffer(jade.renderFile('source/views/page.jade', {
        pageContent: fileContents
      }));
      cb(null, file);
    }))
    .pipe(gulp.dest('docs'));
});

// 渲染首页
gulp.task('index', function () {

  gulp.src('source/views/index.jade')
    .pipe(gulpJade())
    .pipe(gulp.dest('./'));

});

gulp.task('serve', ['connect', 'watch']);

// connect task
gulp.task('connect', function () {
  connect.server({
    port: 9001,
    livereload: true
  });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(['source/**/*.jade'], ['index']);
  gulp.watch(['docs/**/*.md'], ['markdown']);
});