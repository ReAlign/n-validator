const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

gulp.task('develop', ['clean'], function() {
  var config = Object.assign(webpackConfig, {
    watch: true,
  });
  webpack(config).watch(200, function(err, stat){
    if(!err) {
      console.log('start webpack watching');
    } else {
      console.log(err);
    }
  });
});

gulp.task('build', ['clean'], function() {
  webpack(webpackConfig, function(err, stat){
    if(!err) {
      console.log('webpack build');
    } else {
      console.log(err);
    }
  });
});

gulp.task('clean', function() {
  del('dist/*');
});

gulp.task('default', ['develop']);