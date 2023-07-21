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

function isPrimitive(value: any) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'symbol' ||
    value === null ||
    value === undefined
  );
}

function isObject(obj: any) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

function isArray(value: any) {
  return Array.isArray(value);
}

export { withInstall, isEmptyObj, isPrimitive, isObject, isArray };
export { default as initDefaultProps } from './props';
