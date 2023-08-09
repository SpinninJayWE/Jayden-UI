import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
export default defineConfig({
  base: './',
  build: {
    outDir: '../jayden-ui/es',
    //压缩
    minify: false,
    rollupOptions: {
      //忽略打包vue/.scss/@jayden-ui/directives文件
      external: [
        'vue',
        /\.scss/,
        'jayden-ui-directives',
        'jayden-ui-utils',
        '@vueuse/core',
        'node_modules'
      ],
      input: ['index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: './',
          exports: 'named',
          //配置打包根目录
          dir: '../jayden-ui/es'
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: './',
          exports: 'named',
          //配置打包根目录
          dir: '../jayden-ui/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts'
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    dts({
      entryRoot: 'src',
      outputDir: ['../jayden-ui/es/src', '../jayden-ui/lib/src'],
      tsConfigFilePath: '../../tsconfig.json'
    }),
    {
      name: 'style',
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.scss换成.css,因为我们当时没有打包less文件
          this.emitFile({
            type: 'asset',
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.scss/g, '.css')
          });
        }
      }
    }
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './')
      }
    ]
  }
});
