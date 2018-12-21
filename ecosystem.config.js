module.exports = {
  apps: [
    {
      name: 'storiqa-ico',
      script: './server.js',
      instances: 5,
      env: {
        PORT: 10001
      }
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: ['app1.storiqa.com', 'app2.storiqa.com'],
      ref: 'origin/production',
      repo: 'git@bitbucket.org:storiqa/ico.git',
      path: '/home/deploy/storiqa/ico',
      'forward-agent': 'yes',
      'post-setup': 'cp -f ../shared/config/* config/',
      'post-deploy': 'ENV=production scripts/post_deploy.sh'
    },
    sandbox1: {
      user: 'deploy',
      host: 'sb1.storiqa.com',
      ref: 'origin/sandbox1',
      repo: 'git@bitbucket.org:storiqa/ico.git',
      path: '/home/deploy/storiqa/ico',
      'forward-agent': 'yes',
      'post-setup': 'cp -f ../shared/config/* config/',
      'pre-deploy-local': 'ENV=sandbox1 scripts/build_sandbox.sh',
      'post-deploy': 'ENV=sandbox1 scripts/post_deploy.sh'
    }
  }
};
