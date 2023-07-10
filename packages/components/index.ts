import * as components from './src/index';
export * from './src/index';
import { App } from 'vue';

export default {
  install: (app: App<any>) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  }
};
