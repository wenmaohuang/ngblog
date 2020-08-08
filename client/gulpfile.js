

const { src, dest,task } = require('gulp');
function handleTS(){
  return src('src/*.ts')
  .pipe(dest('output/'))
}


task('default',handleTS)
