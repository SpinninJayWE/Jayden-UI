import * as components from './src/index';
export * from './src/index';
import { App } from 'vue';

export default {
  install: (app: App<any>) => {
    for (const c in components) {
      if ((components as any)[c].install) {
        app.use((components as any)[c]);
      }
    }
  }
};
