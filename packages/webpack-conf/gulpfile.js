const createTasks = require('@xcritical/gulpify');


createTasks('@xcritical/xc-front-webpack', {
  componentsGlob: [
    'src/**/*.{jsx,js}',
  ],
  publishFilesGlob: ['package.json', '*.md'],
});
