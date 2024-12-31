'use strict';

import gulp from 'gulp';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';

const sassCompile = function() {
  return gulp
  .src('./sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sass({ 
        outputStyle: "expanded"
      }))
  // .pipe(postcss([
  //     autoprefixer({
  //       cascade: false
  //     })
  //   ]))
  .pipe(gulp.dest('./css'));
};

const { watch, series, parallel } = gulp;
gulp.task('sass-watch', function () {
  return gulp.watch('./sass/**/*.scss', series(sassCompile));
});

import imagemin from 'gulp-imagemin';

// 関数の定義
const ImgImagemin = function() {
  return gulp
  .src('./images/base/**') //タスクを実行するディレクトリを指定
    .pipe(imagemin())
    .pipe(gulp.dest("./images/")) // 出力先ディレクトリを指定
};

// 実行するタスクを記述
export const imgmin = (done) => {
  ImgImagemin(); // 画像圧縮タスクの実行
  done(); // 処理を終わらせる魔法のことば
}

// watch
gulp.task('imagemin-watch', function() {
 return gulp.watch('./images/base/**', series(ImgImagemin));
});

gulp.task('default', parallel('sass-watch', 'imagemin-watch'));


