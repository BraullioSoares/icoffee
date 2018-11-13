const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulp-tasks/app')
require('./gulp-tasks/deps')
require('./gulp-tasks/server')

gulp.task('default', () => {
    if (util.env.production) {
        sequence('deps', 'app')
    } else {
        sequence('deps', 'app', 'server')
    }

})