module.exports = {
  apps: [{
    name: 'storiqa-ico',
    script: './server.js',
    instances: 1,
    watch: true,
    max_restarts: 10,
    restart_delay: 1000,
    env: {
      PORT: 10001
    }
  }]
};
