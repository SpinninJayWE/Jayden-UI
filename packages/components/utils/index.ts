import type { App, Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};

const isEmptyObj = (obj: object): boolean => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

function isPrimitive(
  value: string | number | boolean | symbol | null | undefined
) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'symbol' ||
    value === null ||
    value === undefined
  );
}

export { withInstall, isEmptyObj, isPrimitive };
export { default as initDefaultProps } from './props';
