module.exports = {
  apps: [
    {
      name: 'hazrid-portfolio-api',
      script: './server.mjs',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 8787,
        TRUST_PROXY: '1'
      },
      max_memory_restart: '350M',
      time: true
    }
  ]
};