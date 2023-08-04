import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import { pkgPath, componentPath } from '../utils/paths';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
//删除jayden-ui
export const removeDist = () => {
  return delPath(`${pkgPath}/jayden-ui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(dest(`${pkgPath}/jayden-ui/lib/src`))
    .pipe(dest(`${pkgPath}/jayden-ui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
