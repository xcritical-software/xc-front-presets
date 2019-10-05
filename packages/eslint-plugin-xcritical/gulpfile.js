const createTasks = require('@xcritical/gulpify');


createTasks('@xcritical/xc-front-lint', {
  componentsGlob: [
    'src/**/*.{jsx,js}',
  ],
  publishFilesGlob: ['package.json', '*.md'],
});
