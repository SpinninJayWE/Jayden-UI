import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import prompts from 'prompts';
import gitClone from './utils/gitClone.js';

//帮助命令
const helpSections = [
  {
    header: 'create-jayden-ui',
    content: '一个快速生成组件库搭建环境的脚手架'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'version',
        alias: 'v',
        typeLabel: '{underline boolean}',
        description: '版本号'
      },
      {
        name: 'help',
        alias: 'h',
        typeLabel: '{underline boolean}',
        description: '帮助'
      }
    ]
  }
];

import { readFile } from 'fs/promises';

const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
);
//配置命令参数
const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'help', alias: 'h', type: Boolean }
];

const promptsOptions = [
  {
    type: 'text',
    name: 'projectName',
    message: '请输入项目名称'
  },
  {
    type: 'select', //单选
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'kitty-ui', value: 0 },
      { title: 'jayden-ui', value: 1 }
    ]
  }
];

const remoteList = {
  0: 'https://gitee.com/geeksdidi/kittyui.git',
  1: 'https://github.com/SpinninJayWE/Jayden-UI.git'
};

const projectPrompts = async () => {
  const res = await prompts(promptsOptions);
  console.log(res);
  if (!res.projectName || !res.template) return;
  gitClone(`direct:${remoteList[res.template]}`, res.projectName, {
    clone: true
  });
};

function init() {
  const options = commandLineArgs(optionDefinitions);
  if (options.version) {
    console.log(`v${pkg.version}`);
  }
  if (options.help) {
    console.log(commandLineUsage(helpSections));
  }

  projectPrompts();
}

init();
